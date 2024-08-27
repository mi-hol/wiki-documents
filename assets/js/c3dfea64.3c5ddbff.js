"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[78695],{15680:(e,n,i)=>{i.d(n,{xA:()=>u,yg:()=>y});var l=i(96540);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,l)}return i}function t(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,l,a=function(e,n){if(null==e)return{};var i,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)i=r[l],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)i=r[l],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=l.createContext({}),p=function(e){var n=l.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):t(t({},n),e)),i},u=function(e){var n=p(e.components);return l.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},g=l.forwardRef((function(e,n){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(i),g=a,y=d["".concat(s,".").concat(g)]||d[g]||m[g]||r;return i?l.createElement(y,t(t({ref:n},u),{},{components:i})):l.createElement(y,t({ref:n},u))}));function y(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=i.length,t=new Array(r);t[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:a,t[1]=o;for(var p=2;p<r;p++)t[p]=i[p];return l.createElement.apply(null,t)}return l.createElement.apply(null,i)}g.displayName="MDXCreateElement"},81835:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>t,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var l=i(9668),a=(i(96540),i(15680));const r={description:"Build a HMI Display for Windows/MacOS using Wio Terminal",title:"\u4f7f\u7528Wio Terminal\u6784\u5efaWindows/MacOS\u7684HMI\u663e\u793a\u5668",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-HMI-Usermode-SDK",last_update:{date:"3/07/2024",author:"jessie"}},t="\u4f7f\u7528Wio Terminal\u6784\u5efaWindows/MacOS\u7684HMI\u663e\u793a\u5668",o={unversionedId:"zh-CN/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/CN-Wio-Terminal-HMI-Usermode-SDK",id:"zh-CN/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/CN-Wio-Terminal-HMI-Usermode-SDK",title:"\u4f7f\u7528Wio Terminal\u6784\u5efaWindows/MacOS\u7684HMI\u663e\u793a\u5668",description:"Build a HMI Display for Windows/MacOS using Wio Terminal",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/CN-Wio-Terminal-HMI-Usermode-SDK.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client",slug:"/cn/Wio-Terminal-HMI-Usermode-SDK",permalink:"/cn/Wio-Terminal-HMI-Usermode-SDK",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/CN-Wio-Terminal-HMI-Usermode-SDK.md",tags:[],version:"current",lastUpdatedBy:"jessie",lastUpdatedAt:1709769600,formattedLastUpdatedAt:"Mar 7, 2024",frontMatter:{description:"Build a HMI Display for Windows/MacOS using Wio Terminal",title:"\u4f7f\u7528Wio Terminal\u6784\u5efaWindows/MacOS\u7684HMI\u663e\u793a\u5668",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-HMI-Usermode-SDK",last_update:{date:"3/07/2024",author:"jessie"}},sidebar:"CNSidebar",previous:{title:"MIDI",permalink:"/cn/Wio-Terminal-USBCLIENT-MIDI"},next:{title:"\u4f7f\u7528Wio terminal \u6784\u5efa DAPLink\u8bbe\u5907",permalink:"/cn/Wio-Terminal-DAPLink"}},s={},p=[{value:"\u6240\u9700\u786c\u4ef6",id:"\u6240\u9700\u786c\u4ef6",level:2},{value:"Wio Terminal \u56fa\u4ef6",id:"wio-terminal-\u56fa\u4ef6",level:2},{value:"<code>uf2</code> \u65b9\u6cd5",id:"uf2-\u65b9\u6cd5",level:3},{value:"\u4e3b\u673a\u8bbe\u5907\u56fa\u4ef6",id:"\u4e3b\u673a\u8bbe\u5907\u56fa\u4ef6",level:2},{value:"MacOS/Linux\u64cd\u4f5c\u7cfb\u7edf - C++ SDK",id:"macoslinux\u64cd\u4f5c\u7cfb\u7edf---c-sdk",level:3},{value:"\u591a\u5c4f\u5e55",id:"\u591a\u5c4f\u5e55",level:4},{value:"Windows - Python SDK",id:"windows---python-sdk",level:3},{value:"\u591a\u5c4f\u5e55",id:"\u591a\u5c4f\u5e55-1",level:4},{value:"\u7b80\u5355\u6f14\u793a",id:"\u7b80\u5355\u6f14\u793a",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2},{value:"\u6280\u672f\u652f\u6301 &amp; \u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301--\u4ea7\u54c1\u8ba8\u8bba",level:2}],u={toc:p},d="wrapper";function m(e){let{components:n,...i}=e;return(0,a.yg)(d,(0,l.A)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u4f7f\u7528wio-terminal\u6784\u5efawindowsmacos\u7684hmi\u663e\u793a\u5668"},"\u4f7f\u7528Wio Terminal\u6784\u5efaWindows/MacOS\u7684HMI\u663e\u793a\u5668"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/banner.png"})),(0,a.yg)("p",null,"\u5728\u8fd9\u7bc7wiki\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 ",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,a.yg)("strong",{parentName:"a"},"Wio Terminal"))," \u4f5c\u4e3aHMI\u663e\u793a\u5668\uff0c\u4f7f\u7528 ",(0,a.yg)("strong",{parentName:"p"},"\u7528\u6237\u6a21\u5f0fSDK\u5728Windows/Linux/Mac OS\u4e0a\u8fd0\u884c")," \uff0c\u8fd9\u5c06\u6269\u5c55Wio Terminal\u5728\u5de5\u4e1a\u5e94\u7528\u4e2d\u7684\u53ef\u80fd\u6027\uff01"),(0,a.yg)("p",null,"\u5982\u679c\u60a8\u60f3\u5c06Wio Terminal\u4e0eRaspberry Pi\u4e00\u8d77\u4f5c\u4e3aHMI\u663e\u793a\u5668\u4f7f\u7528\uff0c\u8bf7\u67e5\u770b\u8fd9\u7bc7 ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-HMI/"},"wiki"),"."),(0,a.yg)("h2",{id:"\u6240\u9700\u786c\u4ef6"},"\u6240\u9700\u786c\u4ef6"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,a.yg)("strong",{parentName:"a"},"Wio Terminal")))),(0,a.yg)("h2",{id:"wio-terminal-\u56fa\u4ef6"},"Wio Terminal \u56fa\u4ef6"),(0,a.yg)("p",null,"\u9996\u5148\uff0c\u60a8\u9700\u8981\u901a\u8fc7PC\u5c06Arduino\u7a0b\u5e8f\u4e0a\u4f20\u5230Wio Terminal\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5728\u8fd9\u91cc\u4e0b\u8f7d ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_USBDISP"},(0,a.yg)("strong",{parentName:"a"},"Seeed_Arduino_USBDISP"))," \u5e93\u3002")),(0,a.yg)("p",null,"\u6709\u4e24\u4e2a ",(0,a.yg)("strong",{parentName:"p"},"\u793a\u4f8b"),", \u5206\u522b\u662f ",(0,a.yg)("inlineCode",{parentName:"p"},"NullFunctional")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"USBDisplayAndMouseControl"),":"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5982\u679c\u60a8\u5e0c\u671b ",(0,a.yg)("strong",{parentName:"li"},"\u5728 Wio Terminal \u83b7\u5f97\u66f4\u9ad8\u7684\u5c4f\u5e55\u5237\u65b0\u7387"),", \u8bf7\u5c06 ",(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"NullFunctional"))," \u4e0a\u4f20\u5230 Wio Terminal\u3002"),(0,a.yg)("li",{parentName:"ol"},"\u5982\u679c\u60a8\u5e0c\u671b ",(0,a.yg)("strong",{parentName:"li"},"Wio Terminal \u4e5f\u80fd\u4f5c\u4e3a\u9f20\u6807\u4f7f\u7528"),", \u8bf7\u5c06 ",(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"USBDisplayAndMouseControl"))," \u4e0a\u4f20\u5230 Wio Terminal\u3002")),(0,a.yg)("p",null,":::\u6ce8\n\u8bf7 ",(0,a.yg)("strong",{parentName:"p"},"\u786e\u4fdd\u9605\u8bfb\u6ce8\u610f\u4e8b\u9879"),", \u5bf9\u4e8e\u7528\u6237\u6a21\u5f0fSDK, ",(0,a.yg)("inlineCode",{parentName:"p"},"USBDISP().begin(true);"),"\u53d8\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"USBDISP().begin(true, true);"),"\u3002\n:::"),(0,a.yg)("h3",{id:"uf2-\u65b9\u6cd5"},(0,a.yg)("inlineCode",{parentName:"h3"},"uf2")," \u65b9\u6cd5"),(0,a.yg)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u8d77\u89c1\uff0c\u6211\u4eec\u8fd8\u63d0\u4f9b\u4e86\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"uf2")," \u6587\u4ef6\u4e0a\u4f20Wio Terminal\u56fa\u4ef6\u7684\u65b9\u6cd5\u3002\u53ea\u9700\u4ece\u4ee5\u4e0b\u4f4d\u7f6e\u4e0b\u8f7d ",(0,a.yg)("inlineCode",{parentName:"p"},"uf2")," \u6587\u4ef6\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4e0b\u8f7d ",(0,a.yg)("a",{parentName:"p",href:"http://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/NullFunctional-sdk.uf2"},"NullFunctional"),"\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"uf2")," \u6587\u4ef6\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4e0b\u8f7d ",(0,a.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/USBDisplayAndMouseControl-sdk.uf2"},"USBDisplayAndMouseControl"),"\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"uf2")," \u6587\u4ef6\u3002"))),(0,a.yg)("p",null,"\u901a\u8fc7\u5feb\u901f\u4e24\u6b21\u6ed1\u52a8\u7535\u6e90\u5f00\u5173\u8fdb\u5165\u5f15\u5bfc\u6a21\u5f0f\u3002\u5982\u9700\u66f4\u591a\u53c2\u8003\uff0c\u8bf7\u53c2\u9605 ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq"},"\u6b64\u5904"),"\u3002"),(0,a.yg)("p",null,"\u60a8\u7684\u7535\u8111\u4e0a\u5e94\u8be5\u51fa\u73b0\u4e00\u4e2a\u540d\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"Arduino")," \u7684\u5916\u90e8\u9a71\u52a8\u5668\u3002\u5c06\u4e0b\u8f7d\u7684uf2\u6587\u4ef6\u62d6\u5230 ",(0,a.yg)("inlineCode",{parentName:"p"},"Arduino")," \u9a71\u52a8\u5668\u4e2d\u3002"),(0,a.yg)("h2",{id:"\u4e3b\u673a\u8bbe\u5907\u56fa\u4ef6"},"\u4e3b\u673a\u8bbe\u5907\u56fa\u4ef6"),(0,a.yg)("p",null,"\u8fd9\u6b21\u6211\u4eec\u7684\u4e3b\u673a\u8bbe\u5907\u662f\u6211\u4eec\u7684\u7535\u8111\uff0c\u8ba9\u6211\u4eec\u6765\u770b\u770b\u5982\u4f55\u4f7f\u7528Wio Terminal\u4f5c\u4e3aHMI\u663e\u793a\u5668\u4f7f\u7528\u7528\u6237\u6a21\u5f0fSDK\uff01"),(0,a.yg)("h3",{id:"macoslinux\u64cd\u4f5c\u7cfb\u7edf---c-sdk"},"MacOS/Linux\u64cd\u4f5c\u7cfb\u7edf - C++ SDK"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4e0b\u8f7d\u56fa\u4ef6\u4ed3\u5e93\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cd ~\ngit clone https://github.com/Seeed-Studio/seeed-linux-usbdisp.git\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4e0b\u8f7d\u56fa\u4ef6\u4ed3\u5e93\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cd ~/seeed-linux-usbdisp/drivers/usermode-sdk/rpusbdisp-drv/src\n")),(0,a.yg)("p",null,"\u6253\u5f00 ",(0,a.yg)("inlineCode",{parentName:"p"},"rpusbdisp.cc")," \u5e76 ",(0,a.yg)("strong",{parentName:"p"},"\u6839\u636e\u60a8\u7684Wio Terminal\u56fa\u4ef6\uff08NullFunctional\u6216USBDisplayAndMouseControl\uff09\u5b9a\u4e49\u5b8f"),"\u3002 \u53d6\u6d88\u6ce8\u91ca\u60a8\u6b63\u5728\u4f7f\u7528\u7684\u5b8f\uff1a"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/macros.png"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u8fd4\u56de\u5230\u7528\u6237\u6a21\u5f0fSDK\u8def\u5f84\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cd ~/seeed-linux-usbdisp/drivers/usermode-sdk\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u521b\u5efa\u5e76\u6784\u5efa\u9a71\u52a8\u7a0b\u5e8f\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"make\n")),(0,a.yg)("p",null,":::\u6ce8\n\u60a8\u53ef\u80fd\u9700\u8981\u4e00\u4e9b\u4f9d\u8d56\u5e93\uff0c\u5982lisusb\u3002MacOS\u53ef\u4ee5\u4f7f\u7528 ",(0,a.yg)("a",{parentName:"p",href:"https://brew.sh/"},(0,a.yg)("inlineCode",{parentName:"a"},"brew"))," Linux\u64cd\u4f5c\u7cfb\u7edf\u53ef\u4ee5\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"apt-get")," \u8fdb\u884c\u5b89\u88c5\u3002\n:::"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5bfc\u822a\u5230\u6784\u5efa\u76ee\u5f55\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cd ~/seeed-linux-usbdisp/drivers/usermode-sdk/build/\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5bfc\u822a\u5230\u6784\u5efa\u76ee\u5f55\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"sudo ./rpusbdispdemo --demo 1\n")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/demo.gif"})),(0,a.yg)("p",null,"\u60a8\u5e94\u8be5\u770b\u5230Wio Terminal\u5f00\u59cb\u663e\u793a\uff0c\u56fe\u5f62\u88ab\u7ed8\u5236\u51fa\u6765\u3002\u6b64\u4ee3\u7801\u7684\u6e90\u4ee3\u7801\u4f4d\u4e8e\uff1a ",(0,a.yg)("inlineCode",{parentName:"p"},"seeed-linux-usbdisp/drivers/usermode-sdk/demo/src/main.cc"),"."),(0,a.yg)("h4",{id:"\u591a\u5c4f\u5e55"},"\u591a\u5c4f\u5e55"),(0,a.yg)("p",null,"\u8be5C++ SDK\u8fd8\u652f\u6301\u591a\u4e2a\u5c4f\u5e55\uff08\u591a\u4e2aWio Terminal\uff09\uff0c\u5bf9\u4e8e\u4e24\u4e2a\u5c4f\u5e55\u7684\u4f7f\u7528\uff0c\u53ea\u9700\u8fd0\u884c\u6f14\u793a2\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"sudo ./rpusbdispdemo --demo 2\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6ce8:")," \u8fd9\u91cc\u63d0\u4f9b\u4e864\u4e2a\u6f14\u793a\uff0c\u6700\u591a\u4f7f\u75284\u4e2a\u5c4f\u5e55\uff0c\u60a8\u53ef\u4ee5\u67e5\u770b\u6e90\u4ee3\u7801\u4ee5\u53c2\u8003\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,a.yg)("h3",{id:"windows---python-sdk"},"Windows - Python SDK"),(0,a.yg)("p",null,"\u5bf9\u4e8eWindows\uff0c\u60a8\u53ef\u4ee5\u5728Python\u4e0a\u8fd0\u884c\u7528\u6237\u6a21\u5f0fSDK\uff01\u9996\u5148\uff0c\u8bf7\u786e\u4fdd\u60a8\u5df2\u5b89\u88c5Python\u5e76\u5b89\u88c5\u6240\u9700\u7684\u5e93\uff1a"),(0,a.yg)("p",null,":::\u6ce8\n",(0,a.yg)("strong",{parentName:"p"},"Python\u662f\u8de8\u5e73\u53f0\u7684\uff0c\u60a8\u53ef\u4ee5\u5728\u6240\u6709\u5e73\u53f0\u4e0a\u8fd0\u884c\u6b64\u6f14\u793a\uff0c\u5305\u62ecWindows/Linux/MacOS"),"\n:::"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"pip3 install pyusb\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u8fdb\u5165python-demo\u8def\u5f84\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cd ~/seeed-linux-usbdisp/drivers/python-demo/\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6253\u5f00 ",(0,a.yg)("inlineCode",{parentName:"li"},"simple-test.py")," \u5e76\u4f7f\u7528\u60a8Wio Terminal\u5185\u7684\u56fa\u4ef6\u5b9a\u4e49\u6b63\u786e\u7684\u5b8f\uff0c\u7136\u540e\u4fdd\u5b58\u3002")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/macros-2.png"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u8fd0\u884cPython\u6f14\u793a\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"python3 simple-test.py\n")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/simple-test.gif"})),(0,a.yg)("h4",{id:"\u591a\u5c4f\u5e55-1"},"\u591a\u5c4f\u5e55"),(0,a.yg)("p",null,"\u8be5Python SDK\u8fd8\u652f\u6301\u591a\u4e2a\u5c4f\u5e55\uff08\u591a\u4e2aWio Terminal\uff09\uff0c\u60a8\u53ef\u4ee5\u53c2\u8003 ",(0,a.yg)("inlineCode",{parentName:"p"},"USBDisplay.py")," \u3002"),(0,a.yg)("p",null,"\u8fd9\u4e9b\u793a\u4f8b\u4f7f\u7528\u4e864\u4e2aWio Terminal\u4f5c\u4e3a\u663e\u793a\u5668\uff0c\u5176\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-py"},"devices = list(usb.core.find(find_all=True, idVendor=0x2886, idProduct=0x802D))\ndev1 = devices[0] # device 0\ndev2 = devices[1] # device 1\ndev3 = devices[2] # device 2\ndev4 = devices[3] # device 3\n")),(0,a.yg)("h2",{id:"\u7b80\u5355\u6f14\u793a"},"\u7b80\u5355\u6f14\u793a"),(0,a.yg)("p",null,"\u6b64\u793a\u4f8b\u7b80\u5355\u5730\u4f7f\u7528Python\u5c06\u56fe\u50cf\u4ecePC\u7aef\u4f20\u8f93\u5230Wio Terminal\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u8fdb\u5165\u6f14\u793a\u8def\u5f84\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cd ~/seeed-linux-usbdisp/drivers/python-demo/\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4e0b\u8f7d ",(0,a.yg)("inlineCode",{parentName:"li"},"image.jpg")," \u5e76\u5c06\u5176\u4fdd\u5b58\u5728\u4e0e ",(0,a.yg)("inlineCode",{parentName:"li"},"image-test.py")," \u76f8\u540c\u7684\u4f4d\u7f6e\u3002")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6ce8:")," \u8bf7 ",(0,a.yg)("strong",{parentName:"p"},"\u9009\u62e9\u4e0e\u60a8\u7684Wio Terminal\u56fa\u4ef6\u5339\u914d\u7684\u5b8f")," \uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u9519\u8bef\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u8fd0\u884c\u6f14\u793a\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"python3 image-test.py\n")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/image-demo.png"})),(0,a.yg)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/rpusbdisp_interface_protocol.pdf"},"rpusbdisp interface protocols document"))),(0,a.yg)("h2",{id:"\u6280\u672f\u652f\u6301--\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301 & \u4ea7\u54c1\u8ba8\u8bba"),(0,a.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u81f4\u529b\u4e8e\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u5c3d\u53ef\u80fd\u987a\u7545\u7684\u4f53\u9a8c\u6211\u4eec\u7684\u4ea7\u54c1\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);