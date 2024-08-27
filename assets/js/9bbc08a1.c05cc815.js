"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1761],{15680:(e,i,t)=>{t.d(i,{xA:()=>p,yg:()=>y});var n=t(96540);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function o(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?o(Object(t),!0).forEach((function(i){r(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function l(e,i){if(null==e)return{};var t,n,r=function(e,i){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),u=function(e){var i=n.useContext(s),t=i;return e&&(t="function"==typeof e?e(i):a(a({},i),e)),t},p=function(e){var i=u(e.components);return n.createElement(s.Provider,{value:i},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},d=n.forwardRef((function(e,i){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,y=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return t?n.createElement(y,a(a({ref:i},p),{},{components:t})):n.createElement(y,a({ref:i},p))}));function y(e,i){var t=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in i)hasOwnProperty.call(i,s)&&(l[s]=i[s]);l.originalType=e,l[m]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},12982:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=t(9668),r=(t(96540),t(15680));const o={description:"Build a DAPLink Device using Wio Terminal",title:"\u4f7f\u7528Wio terminal \u6784\u5efa DAPLink\u8bbe\u5907",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-DAPLink",last_update:{date:"3/07/2024",author:"jessie"}},a="Wio Terminal DAPLink",l={unversionedId:"zh-CN/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/CN-Wio-Terminal-DAPLink",id:"zh-CN/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/CN-Wio-Terminal-DAPLink",title:"\u4f7f\u7528Wio terminal \u6784\u5efa DAPLink\u8bbe\u5907",description:"Build a DAPLink Device using Wio Terminal",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/CN-Wio-Terminal-DAPLink.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client",slug:"/cn/Wio-Terminal-DAPLink",permalink:"/cn/Wio-Terminal-DAPLink",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/CN-Wio-Terminal-DAPLink.md",tags:[],version:"current",lastUpdatedBy:"jessie",lastUpdatedAt:1709769600,formattedLastUpdatedAt:"Mar 7, 2024",frontMatter:{description:"Build a DAPLink Device using Wio Terminal",title:"\u4f7f\u7528Wio terminal \u6784\u5efa DAPLink\u8bbe\u5907",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-DAPLink",last_update:{date:"3/07/2024",author:"jessie"}},sidebar:"CNSidebar",previous:{title:"\u4f7f\u7528Wio Terminal\u6784\u5efaWindows/MacOS\u7684HMI\u663e\u793a\u5668",permalink:"/cn/Wio-Terminal-HMI-Usermode-SDK"},next:{title:"\u4f7f\u7528Wio Terminal\u8bfb\u53d6Raspberry Pi\u7684\u7cfb\u7edf\u72b6\u6001",permalink:"/cn/Wio-Terminal-Reading-Raspberry-Pi"}},s={},u=[{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"\u5165\u95e8\u6307\u5357",id:"\u5165\u95e8\u6307\u5357",level:2},{value:"<code>uf2</code> \u65b9\u6cd5",id:"uf2-\u65b9\u6cd5",level:3},{value:"\u8fde\u63a5\u5f15\u811a\u5e03\u5c40",id:"\u8fde\u63a5\u5f15\u811a\u5e03\u5c40",level:3},{value:"\u6280\u672f\u652f\u6301 &amp; \u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301--\u4ea7\u54c1\u8ba8\u8bba",level:2}],p={toc:u},m="wrapper";function c(e){let{components:i,...t}=e;return(0,r.yg)(m,(0,n.A)({},p,t,{components:i,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"wio-terminal-daplink"},"Wio Terminal DAPLink"),(0,r.yg)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u5df2\u7ecf ",(0,r.yg)("strong",{parentName:"p"},"\u5f00\u53d1\u4e86\u9002\u7528\u4e8e\u60a8\u7684Arduino\u677f (",(0,r.yg)("em",{parentName:"strong"},"SAMD \u7cfb\u5217"),") \u7684DAPLink\u56fa\u4ef6")," \uff0c\u4f8b\u5982 ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Wio Terminal")," \u548c ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Seeeduino Xiao")," \u8fd9\u6837\u60a8\u5c31\u53ef\u4ee5\u4ee5\u6700\u7ecf\u6d4e\u7684\u65b9\u5f0f\u4e0a\u4f20\u548c\u8c03\u8bd5\u652f\u6301DAPLink\u7684\u5f00\u53d1\u677f\uff01"),(0,r.yg)("h2",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u8c03\u8bd5\u548c\u70e7\u5f55Arm Cortex\u5904\u7406\u5668"),(0,r.yg)("li",{parentName:"ul"},"\u63d0\u4f9b\u865a\u62df\u4e32\u53e3\uff0c\u65e0\u9700usb\u8f6c\u4e32\u53e3"),(0,r.yg)("li",{parentName:"ul"},"\u62d6\u653e\u4e0a\u4f20\u56fa\u4ef6\uff08\u5373\u5c06\u63a8\u51fa\uff09")),(0,r.yg)("h2",{id:"\u5165\u95e8\u6307\u5357"},"\u5165\u95e8\u6307\u5357"),(0,r.yg)("p",null,"\u8bf7\u4ece",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Arduino-DAPLink/"},"\u8fd9"),"\u8bbf\u95eeArduino DAPLink\u5165\u95e8\u6307\u5357 Wiki \u9875\u9762\u3002"),(0,r.yg)("h3",{id:"uf2-\u65b9\u6cd5"},(0,r.yg)("inlineCode",{parentName:"h3"},"uf2")," \u65b9\u6cd5"),(0,r.yg)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u8d77\u89c1\uff0c\u6211\u4eec\u8fd8\u63d0\u4f9b\u4e86\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"uf2")," \u65b9\u6cd5\u4e0a\u4f20Wio Terminal\u56fa\u4ef6\u7684\u65b9\u5f0f\u3002\u53ea\u9700\u4ece\u4ee5\u4e0b\u94fe\u63a5\u4e0b\u8f7d ",(0,r.yg)("inlineCode",{parentName:"p"},"uf2")," \u6587\u4ef6\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u4e0b\u8f7d ",(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/simple_daplink_wt.uf2"},(0,r.yg)("strong",{parentName:"a"},"simple_daplink_wt"))," ",(0,r.yg)("inlineCode",{parentName:"li"},"uf2")," \u6587\u4ef6\u3002")),(0,r.yg)("p",null,"\u901a\u8fc7\u5feb\u901f\u5207\u6362\u7535\u6e90\u5f00\u5173\u4e24\u6b21\u8fdb\u5165\u542f\u52a8\u52a0\u8f7d\u6a21\u5f0f\u3002\u66f4\u591a\u53c2\u8003\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq"},"\u8fd9\u91cc"),"\u3002"),(0,r.yg)("p",null,"\u60a8\u7684\u8ba1\u7b97\u673a\u4e0a\u5c06\u51fa\u73b0\u4e00\u4e2a\u540d\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"Arduino")," \u7684\u5916\u90e8\u9a71\u52a8\u5668\u3002\u5c06\u4e0b\u8f7d\u7684uf2\u6587\u4ef6\u62d6\u653e\u5230Arduino\u9a71\u52a8\u5668\u4e2d\u3002"),(0,r.yg)("h3",{id:"\u8fde\u63a5\u5f15\u811a\u5e03\u5c40"},"\u8fde\u63a5\u5f15\u811a\u5e03\u5c40"),(0,r.yg)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u5f15\u811a\u5e03\u5c40\u4f5c\u4e3a\u53c2\u8003\uff1a"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/daplink-wt.jpg"})),(0,r.yg)("h2",{id:"\u6280\u672f\u652f\u6301--\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301 & \u4ea7\u54c1\u8ba8\u8bba"),(0,r.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u81f4\u529b\u4e8e\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u5c3d\u53ef\u80fd\u987a\u7545\u7684\u4f53\u9a8c\u6211\u4eec\u7684\u4ea7\u54c1\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);