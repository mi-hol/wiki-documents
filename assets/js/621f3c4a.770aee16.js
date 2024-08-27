"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[51074],{15680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>y});var n=t(96540);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,y=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return t?n.createElement(y,o(o({ref:r},s),{},{components:t})):n.createElement(y,o({ref:r},s))}));function y(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},86374:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(9668),i=(t(96540),t(15680));const a={description:"\u6982\u8ff0",title:"\u52a0\u901f\u5ea6\u8ba1\u6982\u8ff0",keywords:["Wio_terminal IMU"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-IMU-Overview",last_update:{date:"3/09/2024",author:"\u91d1\u83ca"}},o="\u52a0\u901f\u5ea6\u8ba1\u6982\u8ff0",l={unversionedId:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/IMU/CN-Wio-Terminal-IMU-Overview",id:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/IMU/CN-Wio-Terminal-IMU-Overview",title:"\u52a0\u901f\u5ea6\u8ba1\u6982\u8ff0",description:"\u6982\u8ff0",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/IMU/CN-Wio-Terminal-IMU-Overview.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/IMU",slug:"/cn/Wio-Terminal-IMU-Overview",permalink:"/cn/Wio-Terminal-IMU-Overview",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/IMU/CN-Wio-Terminal-IMU-Overview.md",tags:[],version:"current",lastUpdatedBy:"\u91d1\u83ca",lastUpdatedAt:1709942400,formattedLastUpdatedAt:"Mar 9, 2024",frontMatter:{description:"\u6982\u8ff0",title:"\u52a0\u901f\u5ea6\u8ba1\u6982\u8ff0",keywords:["Wio_terminal IMU"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-IMU-Overview",last_update:{date:"3/09/2024",author:"\u91d1\u83ca"}},sidebar:"CNSidebar",previous:{title:"Grove\u7aef\u53e3",permalink:"/cn/Wio-Terminal-Grove"},next:{title:"\u52a0\u901f\u5ea6\u8ba1\u5165\u95e8\u6307\u5357",permalink:"/cn/Wio-Terminal-IMU-Basic"}},p={},c=[{value:"\u5b89\u88c5Wio Terminal\u76843\u8f74\u6570\u5b57\u52a0\u901f\u5ea6\u8ba1\uff08LIS3DHTR\uff09\u5e93",id:"\u5b89\u88c5wio-terminal\u76843\u8f74\u6570\u5b57\u52a0\u901f\u5ea6\u8ba1lis3dhtr\u5e93",level:2}],s={toc:c},m="wrapper";function d(e){let{components:r,...t}=e;return(0,i.yg)(m,(0,n.A)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"\u52a0\u901f\u5ea6\u8ba1\u6982\u8ff0"},"\u52a0\u901f\u5ea6\u8ba1\u6982\u8ff0"),(0,i.yg)("p",null,"\u672c\u4ed3\u5e93\u4ecb\u7ecd\u5982\u4f55\u5b89\u88c5\u7528\u4e8eWio Terminal\u7684\u5185\u7f6e3\u8f74\u6570\u5b57\u52a0\u901f\u5ea6\u8ba1\uff08LIS3DHTR\uff09\u5e93\u3002\u901a\u8fc7\u8fd9\u4e2a\u5e93\uff0c\u60a8\u53ef\u4ee5\u8bbf\u95eeWio Terminal\u7684\u52a0\u901f\u5ea6\u8ba1\u4fe1\u606f\uff0c\u5e76\u5c06\u5176\u7528\u4e8e\u8fd0\u52a8\u63a7\u5236\u7b49\u7528\u9014\u3002"),(0,i.yg)("h2",{id:"\u5b89\u88c5wio-terminal\u76843\u8f74\u6570\u5b57\u52a0\u901f\u5ea6\u8ba1lis3dhtr\u5e93"},"\u5b89\u88c5Wio Terminal\u76843\u8f74\u6570\u5b57\u52a0\u901f\u5ea6\u8ba1\uff08LIS3DHTR\uff09\u5e93"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u8bbf\u95ee ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/master"},"Seeed_Arduino_LIS3DHTR")," \u4ed3\u5e93\uff0c\u5e76\u5c06\u6574\u4e2a\u4ed3\u5e93\u4e0b\u8f7d\u5230\u672c\u5730\u9a71\u52a8\u5668\u4e0a\u3002")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u73b0\u5728\uff0c\u53ef\u4ee5\u5c063\u8f74\u6570\u5b57\u52a0\u901f\u5ea6\u8ba1\u5e93\u5b89\u88c5\u5230Arduino IDE\u4e2d\u3002\u6253\u5f00Arduino IDE\uff0c\u70b9\u51fb ",(0,i.yg)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,i.yg)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,i.yg)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", \u9009\u62e9\u521a\u521a\u4e0b\u8f7d\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"Seeed_Arduino_LIS3DHTR")," \u6587\u4ef6\u3002"))),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})))}d.isMDXComponent=!0}}]);