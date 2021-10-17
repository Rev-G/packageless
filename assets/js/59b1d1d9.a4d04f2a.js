"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[662],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3746:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={id:"subcommand-run",title:"run"},c=void 0,l={unversionedId:"cli/subcommands/subcommand-run",id:"cli/subcommands/subcommand-run",isDocsHomePage:!1,title:"run",description:"Usage",source:"@site/docs/cli/subcommands/run.md",sourceDirName:"cli/subcommands",slug:"/cli/subcommands/subcommand-run",permalink:"/packageless/cli/subcommands/subcommand-run",editUrl:"https://github.com/everettraven/packageless/edit/main/docs/docs/cli/subcommands/run.md",tags:[],version:"current",frontMatter:{id:"subcommand-run",title:"run"},sidebar:"sidebar",previous:{title:"uninstall",permalink:"/packageless/cli/subcommands/subcommand-uninstall"},next:{title:"upgrade",permalink:"/packageless/cli/subcommands/subcommand-upgrade"}},u=[{value:"Usage",id:"usage",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"packageless run [pim]\n")),(0,o.kt)("p",null,"When using this subcommand, ",(0,o.kt)("strong",{parentName:"p"},"packageless")," will run the pim that is specified as long as it is installed. If the pim is not installed the command will exit with text stating that the pim specified is not installed. If you installed a specific version of a pim, you will need to use the same syntax for the pim for this command as well."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"These examples do NOT reflect packages that can be used by ",(0,o.kt)("strong",{parentName:"p"},"packageless")," and is just for demonstration purposes"))),(0,o.kt)("p",null,"Running the latest version of python:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"packageless run python\n")),(0,o.kt)("p",null,"OR"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"packageless run python:latest\n")),(0,o.kt)("p",null,"Running python 3.7:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"packageless run python:3.7\n")))}m.isMDXComponent=!0}}]);