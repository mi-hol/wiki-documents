"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[76066],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,y=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},75403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(9668),o=(n(96540),n(15680));const i={description:"OpenWrt-FAQ",title:'How to fix device when "Read Only Root filesystem"',image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/fix_device_ReadOnlyRootFilesystem",last_update:{date:"6/21/2023",author:"Seraphina"}},a=void 0,l={unversionedId:"FAQ/OpenWrt/fix_device_ReadOnlyRootFilesystem",id:"FAQ/OpenWrt/fix_device_ReadOnlyRootFilesystem",title:'How to fix device when "Read Only Root filesystem"',description:"OpenWrt-FAQ",source:"@site/docs/FAQ/OpenWrt/fix_device_ReadOnlyRootFilesystem.md",sourceDirName:"FAQ/OpenWrt",slug:"/fix_device_ReadOnlyRootFilesystem",permalink:"/fix_device_ReadOnlyRootFilesystem",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/FAQ/OpenWrt/fix_device_ReadOnlyRootFilesystem.md",tags:[],version:"current",lastUpdatedBy:"Seraphina",lastUpdatedAt:1687305600,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{description:"OpenWrt-FAQ",title:'How to fix device when "Read Only Root filesystem"',image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/fix_device_ReadOnlyRootFilesystem",last_update:{date:"6/21/2023",author:"Seraphina"}}},s={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,'For devices in the "Read Only Root filesystem", we can use ',(0,o.yg)("inlineCode",{parentName:"p"},"e2fsck")," to check the system and fix it. Please open the terminal window and run the following command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"e2fsck /dev/mmcblk0p2\n")))}u.isMDXComponent=!0}}]);