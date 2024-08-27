"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62200],{15680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>y});var i=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=i.createContext({}),p=function(e){var r=i.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=p(e.components);return i.createElement(u.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},m=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=n,y=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return t?i.createElement(y,o(o({ref:r},s),{},{components:t})):i.createElement(y,o({ref:r},s))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92168:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=t(9668),n=(t(96540),t(15680));const a={description:"Overview",title:"\u6982\u8ff0",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-USBCLIENT-Overview",last_update:{date:"3/07/2024",author:"jessie"}},o="\u6982\u8ff0",l={unversionedId:"zh-CN/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/CN-Wio-Terminal-USBCLIENT-Overview",id:"zh-CN/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/CN-Wio-Terminal-USBCLIENT-Overview",title:"\u6982\u8ff0",description:"Overview",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/CN-Wio-Terminal-USBCLIENT-Overview.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client",slug:"/cn/Wio-Terminal-USBCLIENT-Overview",permalink:"/cn/Wio-Terminal-USBCLIENT-Overview",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/CN-Wio-Terminal-USBCLIENT-Overview.md",tags:[],version:"current",lastUpdatedBy:"jessie",lastUpdatedAt:1709769600,formattedLastUpdatedAt:"Mar 7, 2024",frontMatter:{description:"Overview",title:"\u6982\u8ff0",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-USBCLIENT-Overview",last_update:{date:"3/07/2024",author:"jessie"}},sidebar:"CNSidebar",previous:{title:"Xbox",permalink:"/cn/Wio-Terminal-USBH-Xbox"},next:{title:"\u952e\u76d8",permalink:"/cn/Wio-Terminal-USBCLIENT-Keyboard"}},u={},p=[{value:"\u7ed9Arduino\u5b89\u88c5Adafruit TinyUSB \u5e93",id:"\u7ed9arduino\u5b89\u88c5adafruit-tinyusb-\u5e93",level:2}],s={toc:p},c="wrapper";function d(e){let{components:r,...t}=e;return(0,n.yg)(c,(0,i.A)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,n.yg)("p",null,"\u8be5\u5b58\u50a8\u5e93\u4ecb\u7ecd\u4e86\u5982\u4f55\u5c06Wio Terminal\u7528\u4f5cUSB\u5ba2\u6237\u7aef\uff0c\u5305\u62ec\u5c06\u5176\u7528\u4f5c\u4eba\u673a\u754c\u9762\u8bbe\u5907\uff08HID\uff09\uff0c\u5982\u952e\u76d8\u3001\u9f20\u6807\u7b49\u3002\u5b83\u8fd8\u652f\u6301\u97f3\u4e50\u4eea\u5668\u6570\u5b57\u63a5\u53e3\uff08MIDI\uff09\u3002"),(0,n.yg)("p",null,"\u8fd9\u4e2a\u529f\u80fd\u4f9d\u8d56\u4e8e ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_TinyUSB_Arduino"},"\u4e3aArduino\u8bbe\u8ba1\u7684Adafruit TinyUSB\u5e93"),"\u3002 \u8be5\u5e93\u5df2\u7ecf\u5728Wio Terminal\uff08SAMD51\uff09\u4e0a\u8fdb\u884c\u4e86\u6d4b\u8bd5\uff0c\u5e76\u4e14\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,n.yg)("h2",{id:"\u7ed9arduino\u5b89\u88c5adafruit-tinyusb-\u5e93"},"\u7ed9Arduino\u5b89\u88c5Adafruit TinyUSB \u5e93"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u8bbf\u95ee ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_TinyUSB_Arduino"},"\u4e3aArduino\u8bbe\u8ba1\u7684Adafruit TinyUSB\u5e93")," \u5b58\u50a8\u5e93\uff0c\u5e76\u5c06\u6574\u4e2a\u5b58\u50a8\u5e93\u4e0b\u8f7d\u5230\u672c\u5730\u9a71\u52a8\u5668\u3002")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u73b0\u5728\uff0c\u53ef\u4ee5\u5c06\u8be5\u5e93\u5b89\u88c5\u5230Arduino IDE\u4e2d\u3002\u6253\u5f00Arduino IDE\uff0c\u70b9\u51fb ",(0,n.yg)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,n.yg)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,n.yg)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", \u7136\u540e\u9009\u62e9\u521a\u521a\u4e0b\u8f7d\u7684 ",(0,n.yg)("inlineCode",{parentName:"p"},"Adafruit_TinyUSB_Arduino")," \u6587\u4ef6\u3002"))),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})))}d.isMDXComponent=!0}}]);