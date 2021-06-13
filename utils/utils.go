package utils

import (
	"archive/tar"
	"context"
	"io"
	"os"
	"path/filepath"
	"strings"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/api/types/network"
	"github.com/hashicorp/hcl2/hcl"
	specs "github.com/opencontainers/image-spec/specs-go/v1"
)

//Client interface so that we can create a mock of the docker SDK interactions in our unit tests
type Client interface {
	ImagePull(ctx context.Context, refStr string, options types.ImagePullOptions) (io.ReadCloser, error)
	ImageList(ctx context.Context, options types.ImageListOptions) ([]types.ImageSummary, error)
	ContainerCreate(ctx context.Context, config *container.Config, hostConfig *container.HostConfig, networkingConfig *network.NetworkingConfig, platform *specs.Platform, containerName string) (container.ContainerCreateCreatedBody, error)
	CopyFromContainer(ctx context.Context, containerID string, srcPath string) (io.ReadCloser, types.ContainerPathStat, error)
	ContainerRemove(ctx context.Context, container string, options types.ContainerRemoveOptions) error
	ImageRemove(ctx context.Context, imageID string, options types.ImageRemoveOptions) ([]types.ImageDeleteResponseItem, error)
}

//Tools interface so that we can create a mock of our utility functions in our unit tests
type Tools interface {
	MakeDir(path string) error
	OpenFile(path string) (*os.File, error)
	RemoveDir(path string) error
	UpgradeDir(path string) error
	ParseBody(body hcl.Body, out interface{}) (interface{}, error)
	GetHCLBody(filepath string) (hcl.Body, error)
	PullImage(name string, cli Client) error
	ImageExists(imageID string, cli Client) (bool, error)
	CreateContainer(image string, cli Client) (string, error)
	CopyFromContainer(source string, dest string, containerID string, cli Client, cp Copier) error
	RemoveContainer(containerID string, cli Client) error
	RunContainer(image string, ports []string, volumes []string, containerName string, args []string) (string, error)
	RemoveImage(image string, cli Client) error
	AddAliasWin(name string, ed string) error
	RemoveAliasWin(name string, ed string) error
	AddAliasUnix(name string, ed string) error
	RemoveAliasUnix(name string, ed string) error
}

//Utility Tool struct with its functions
type Utility struct{}

func NewUtility() *Utility {
	util := &Utility{}
	return util
}

//MakeDir makes a directory if it does not exist
func (u *Utility) MakeDir(path string) error {
	if _, err := os.Stat(path); err != nil {
		if os.IsNotExist(err) {
			err = os.MkdirAll(path, 0765)

			if err != nil {
				return err
			}
		} else {
			return err
		}
	}
	return nil
}

//OpenFile opens the specified file, creating it if it does not exist
func (u *Utility) OpenFile(path string) (*os.File, error) {
	var file *os.File
	//Check if the path exists
	if _, err := os.Stat(path); err != nil {
		if os.IsNotExist(err) {
			//Create the file
			file, err = os.Create(path)

			if err != nil {
				return nil, err
			}
		}
	} else {
		//Open the file
		file, err = os.OpenFile(path, os.O_RDWR|os.O_APPEND, 0755)
		if err != nil {
			return nil, err
		}
	}

	return file, nil
}

//RemoveDir removes the specified directory
func (u *Utility) RemoveDir(path string) error {
	if _, err := os.Stat(path); err != nil {
		if os.IsNotExist(err) {
			return nil
		} else {
			return err
		}
	} else {
		err = os.RemoveAll(path)
	}

	return nil
}

//UpgradeDir resets the directory by removing it if it exists and then recreating it
func (u *Utility) UpgradeDir(path string) error {
	if _, err := os.Stat(path); err != nil {
		if os.IsNotExist(err) {
			err = os.MkdirAll(path, 0765)

			if err != nil {
				return err
			}
		} else {
			return err
		}
	} else {
		//Remove the directory if it already exists
		err = os.RemoveAll(path)

		if err != nil {
			return err
		}

		//Recreate the directory
		err = os.MkdirAll(path, 0765)

		if err != nil {
			return err
		}
	}
	return nil
}

//Create an interface to house the CopyFiles implementation. This will allow us to make a mock of the CopyFiles Function.
type Copier interface {
	CopyFiles(reader io.ReadCloser, dest string) error
}

//Create the real copy struct
type CopyTool struct{}

//CopyFiles implements a tar reader to copy files from the ReadCloser that the docker sdk CopyFromContainer function returns to the specified destination
func (cp *CopyTool) CopyFiles(reader io.ReadCloser, dest string) error {

	//Create a tar Reader
	tarReader := tar.NewReader(reader)

	//Skip the first header as it is the source folder name
	header, err := tarReader.Next()

	if err == io.EOF {
		return nil
	} else if err != nil {
		return err
	}

	//Loop through the reader and write the files
	for {
		//Get the tar header
		header, err = tarReader.Next()
		//Make sure we havent reached the end of the tar
		if err == io.EOF {
			break
		} else if err != nil {
			return err
		}

		newHeaderPath := strings.Split(header.Name, "/")[1:]
		joinPath := strings.Join(newHeaderPath[:], "/")

		//Create the destination file path on the host
		path := filepath.Join(dest, joinPath)
		//Get the file info from the header
		info := header.FileInfo()

		//Check if the current file is a directory
		if info.IsDir() {

			//Check if the directory exists
			if _, err = os.Stat(path); err != nil {
				if os.IsNotExist(err) {
					//Make the directory
					err = os.MkdirAll(path, 0765)
				} else {
					return err
				}
			}

		} else {
			//Create the file and open it in the destination path on the host
			file, err := os.OpenFile(path, os.O_CREATE|os.O_TRUNC|os.O_WRONLY, 0765)

			//Check for errors
			if err != nil {
				return err
			}

			//Copy the contents of the tar reader to the file
			_, err = io.Copy(file, tarReader)

			//Check for errors
			if err != nil {
				return err
			}

			//Close the file when all the writing is finished
			file.Close()
		}

	}

	return nil
}
