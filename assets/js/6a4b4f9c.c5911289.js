"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[50444],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>m});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),g=i(r),y=o,m=g["".concat(u,".").concat(y)]||g[y]||d[y]||l;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=y;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[g]="string"==typeof e?e:o,a[1]=p;for(var i=2;i<l;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},20791:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var n=r(9668),o=(r(96540),r(15680));const l={description:"\u5165\u95e8\u4f7f\u7528reComputer J1010",title:"\u5165\u95e8\u4f7f\u7528reComputer J1010",keywords:["reComputer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/reComputer_J1010_with_Jetson_getting_start",last_update:{date:"6/29/2023",author:"Lakshantha"}},a="\u5165\u95e8\u4f7f\u7528reComputer J1010",p={unversionedId:"zh-CN/Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010/reComputer_J1010_with_Jetson_getting_start",id:"zh-CN/Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010/reComputer_J1010_with_Jetson_getting_start",title:"\u5165\u95e8\u4f7f\u7528reComputer J1010",description:"\u5165\u95e8\u4f7f\u7528reComputer J1010",source:"@site/docs/zh-CN/Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010/reComputer_J1010_with_Jetson_getting_start.md",sourceDirName:"zh-CN/Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010",slug:"/cn/reComputer_J1010_with_Jetson_getting_start",permalink:"/cn/reComputer_J1010_with_Jetson_getting_start",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_J1010/reComputer_J1010_with_Jetson_getting_start.md",tags:[],version:"current",lastUpdatedBy:"Lakshantha",lastUpdatedAt:1687996800,formattedLastUpdatedAt:"Jun 29, 2023",frontMatter:{description:"\u5165\u95e8\u4f7f\u7528reComputer J1010",title:"\u5165\u95e8\u4f7f\u7528reComputer J1010",keywords:["reComputer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/reComputer_J1010_with_Jetson_getting_start",last_update:{date:"6/29/2023",author:"Lakshantha"}},sidebar:"CNSidebar",previous:{title:"Jetson \u7cfb\u5217\u8ba1\u7b97\u673a\u4ecb\u7ecd\u3002",permalink:"/cn/reComputer_Jetson_Series_Introduction"},next:{title:"\u5c06 JetPack \u64cd\u4f5c\u7cfb\u7edf\u95ea\u5b58\u5230 SD \u4e2d\uff08J101\uff09",permalink:"/cn/J101_Enable_SD_Card"}},u={},i=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u7279\u5f81",id:"\u7279\u5f81",level:2},{value:"\u89c4\u683c\u8bf4\u660e",id:"\u89c4\u683c\u8bf4\u660e",level:2},{value:"\u7ed9J1010\u7535\u8111\u70e7\u5f55Flash JetPack",id:"\u7ed9j1010\u7535\u8111\u70e7\u5f55flash-jetpack",level:2}],s={toc:i},g="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(g,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u5165\u95e8\u4f7f\u7528recomputer-j1010"},"\u5165\u95e8\u4f7f\u7528reComputer J1010"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:"800",src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-110061362-recomputer-j1010-first.jpg"})),(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," \u7acb\u5373\u8d2d\u4e70 \ud83d\uddb1\ufe0f"))))),(0,o.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,o.yg)("p",null,"reComputer J1010 \u662f\u4e00\u6b3e\u7d27\u51d1\u578b\u8fb9\u7f18\u8ba1\u7b97\u673a\uff0c\u5185\u7f6eNVIDIA Jetson Nano 4GB\u751f\u4ea7\u6a21\u5757\uff0c\u914d\u5907128\u4e2aNVIDIA CUDA\xae\u6838\u5fc3\uff0c\u63d0\u4f9b0.5 TFLOPs\uff08FP16\uff09\u7b97\u529b\u4ee5\u8fd0\u884cAI\u6846\u67b6\u548c\u5e94\u7528\u7a0b\u5e8f\uff0c\u5982\u56fe\u50cf\u5206\u7c7b\u3001\u76ee\u6807\u68c0\u6d4b\u548c\u8bed\u97f3\u5904\u7406\u3002\u751f\u4ea7\u6a21\u5757\u63d0\u4f9b16GB eMMC\u3001\u66f4\u957f\u7684\u4fdd\u4fee\u671f\u548c\u5728\u751f\u4ea7\u73af\u5883\u4e2d5-10\u5e74\u7684\u64cd\u4f5c\u5bff\u547d\u3002(",(0,o.yg)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/faq"},"Jetson \u5e38\u89c1\u95ee\u9898\u89e3\u7b54"),"). \u6211\u4eec\u4e5f\u6709reComputer ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/reComputer-J2021-p-5438.html?queryID=14111cbf2ca4f2951fd8a4c1762eb435&objectID=5438&indexName=bazaar_retailer_products"},"J20\u7cfb\u5217")," \u91c7\u7528Jetson Xavier NX\u6a21\u5757\u6784\u5efa\uff0c\u63d0\u4f9b21 TOPS\u7684AI\u6027\u80fd\uff0c\u9002\u7528\u4e8e\u66f4\u590d\u6742\u7684AI\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,o.yg)("p",null,"\u9664\u4e86Jetson\u6a21\u5757\uff0creComputer J1010\u8fd8\u5305\u62ec ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/reComputer-J101-v2-Carrier-Board-for-Jetson-Nano-p-5396.html"},"J101\u8f7d\u677f")," \u5e26\u6709\u677f\u8f7d microSD \u5361\u63d2\u69fd\u30011",(0,o.yg)("em",{parentName:"p"},"USB 3.0\u30012"),"USB2.0\u3001HDMI\u3001M.2 \u5bc6\u94a5 E \u7528\u4e8e WiFi\u3001LTE \u548c\u84dd\u7259\u3001RTC\u3001\u6811\u8393\u6d3e GPIO 40 \u9488\u811a\u7b49\u529f\u80fd,\u4ee5\u53ca\u6563\u70ed\u5668\u548c\u94dd\u5236\u5916\u58f3\u3002\u8be5\u8bbe\u5907\u9884\u88c5\u4e86 Jetpack 4.6.1,\u53ea\u9700\u63d2\u4e0a USB C 5V/3A \u7535\u6e90\u9002\u914d\u5668\u3001\u952e\u76d8\u3001\u9f20\u6807\u548c\u4ee5\u592a\u7f51\u7ebf\u7f06,\u5373\u53ef\u5f00\u59cb\u60a8\u7684\u5d4c\u5165\u5f0f AI \u4e4b\u65c5!\u5982\u679c\u60a8\u9700\u8981\u66f4\u591a\u7684 USB 3.0 \u548c\u677f\u8f7d M.2 \u5bc6\u94a5 M \u7528\u4e8e\u8fde\u63a5 SSD,\u53ef\u4ee5\u9009\u62e9 reComputer J1020\u3002"),(0,o.yg)("p",null,"\u6ce8\u610f:\u6211\u4eec\u6536\u5230\u5ba2\u6237\u8be2\u95ee,\u4ed6\u4eec\u9700\u8981\u66f4\u591a\u5b58\u50a8\u7a7a\u95f4,\u8d85\u51fa\u4e86\u6211\u4eec\u63d0\u4f9b\u768416GB eMMC\u3002\u4ece2022\u5e747\u670830\u65e5\u8d77,\u6211\u4eec\u5728\u4ea7\u54c1\u4e0a\u589e\u52a0\u4e86microSD\u5361\u63d2\u69fd\u3002 ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/reComputer-J101-v2-Carrier-Board-for-Jetson-Nano-p-5396.html"},"\u8f7d\u677f")," \u7535\u8111\u578b\u53f7 J1010\u3002\u8bf7\u68c0\u67e5\u3002 ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Flash_System_on_SD_card/#step-1-clone-this-repo"},"guide")," \u5411microSD\u5361\u5237\u5165\u5f15\u5bfc\u955c\u50cf,\u5e76\u8c03\u6574I/O\u901f\u5ea6\u3002"),(0,o.yg)("h2",{id:"\u7279\u5f81"},"\u7279\u5f81"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"\u624b\u638c\u5927\u5c0f\u7684\u8fb9\u7f18 AI \u5168\u7cfb\u7edf")," \u63d0\u4f9b AI \u7b97\u529b 0.5 TFLOPS (FP16)\uff0c\u4ee5\u53ca\u5d4c\u5165\u5f0f\u5f00\u53d1\u4e30\u5bcc\u7684\u63a5\u53e3\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"\u51c6\u5907\u597d\u8fdb\u884c\u5f00\u53d1\u548c\u90e8\u7f72:")," \u9884\u88c5\u7684 NVIDIA JetPack \u652f\u6301\u6574\u4e2a ",(0,o.yg)("a",{parentName:"li",href:"https://developer.nvidia.com/embedded/develop/software"},"Jetson \u8f6f\u4ef6\u6808")," \u884c\u4e1a\u9886\u5148\u7684 [",(0,o.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Jetson-AI-developer-tools/"},"AI\u5f00\u53d1\u5de5\u5177")," \u9488\u5bf9\u4e8e\u8bf8\u5982\u7269\u6d41\u3001\u96f6\u552e\u3001\u670d\u52a1\u3001\u519c\u4e1a\u3001\u667a\u6167\u57ce\u5e02\u3001\u533b\u7597\u4fdd\u5065\u548c\u751f\u547d\u79d1\u5b66\u7b49\u9886\u57df\u7684\u5f3a\u5927\u4eba\u5de5\u667a\u80fd\u5e94\u7528\u7684\u6784\u5efa\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"\u8282\u80fd\u73af\u4fdd:")," \u7531 Type C 5V/3A \u4f9b\u7535,\u529f\u8017\u4ec5\u9700 5 \u74e6\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"\u53ef\u6269\u5c55\u7684")," \u5e26\u6709\u5185\u7f6e\u63a5\u53e3\u548c\u673a\u7bb1\u7684\u7535\u8111\u53ef\u4ee5\u901a\u8fc7\u540e\u90e8\u7684\u5b89\u88c5\u5b54\u56fa\u5b9a\u5728\u5899\u58c1\u4e0a\u3002")),(0,o.yg)("h2",{id:"\u89c4\u683c\u8bf4\u660e"},"\u89c4\u683c\u8bf4\u660e"),(0,o.yg)("table",null,(0,o.yg)("thead",null,(0,o.yg)("tr",null,(0,o.yg)("th",null,"\u89c4\u683c\u8bf4\u660e"),(0,o.yg)("th",null,(0,o.yg)("a",{href:"https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html"},"reComputer J1010")),(0,o.yg)("th",null,(0,o.yg)("a",{href:"https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html"},"reComputer J1020")),(0,o.yg)("th",null,(0,o.yg)("a",{href:"https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html"},"NVIDIA Jetson Nano Developer Kit-B01")))),(0,o.yg)("tbody",null,(0,o.yg)("tr",null,(0,o.yg)("td",null,"\u6a21\u5757"),(0,o.yg)("td",{colspan:"2"},"Jetson Nano 4GB (\u6b63\u5f0f\u7248\u672c)"),(0,o.yg)("td",null,"Nano (\u975e\u751f\u4ea7\u7248\u672c)")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"\u50a8\u5b58"),(0,o.yg)("td",{colspan:"2",align:"center"},"16 GB eMMC"),(0,o.yg)("td",null,"MicroSD (\u4e0d\u5305\u542b\u5361)")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"SD\u5361\u63d2\u69fd"),(0,o.yg)("td",null,"\u5305\u62ec\u5728\u8f7d\u677f\u4e0a"),(0,o.yg)("td",null,"-"),(0,o.yg)("td",null,"\u5305\u62ec\u5728\u5185\uff08\u6a21\u5757\u4e0a\uff09")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"\u89c6\u9891\u7f16\u7801\u5668"),(0,o.yg)("td",{colspan:"2"},"4K30 | 2x1080p60 | 4x1080p30 | 4x720p60 | 9x720p30 (H.265 & H.264)"),(0,o.yg)("td",null,"4Kp30 | 4x 1080p30 | 9x 720p30 (H.264/H.265)")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"\u89c6\u9891\u89e3\u7801\u5668"),(0,o.yg)("td",{colspan:"2",align:"center"},"4K60 | 2x 4K30 | 4x 1080p60 | 8x 1080p30 | 9x 720p60 (H.265 & H.264)"),(0,o.yg)("td",null,"4Kp60 | 2x 4Kp30 | 8x 1080p30 | 18x 720p30 (H.264/H.265)")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"\u5343\u5146\u4ee5\u592a\u7f51"),(0,o.yg)("td",{colspan:"3",align:"center"},"1*RJ45 Gigabit Ethernet Connector (10/100/1000)")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"USB"),(0,o.yg)("td",null,"1 * USB 3.0 Type A; 2 * USB 2.0 Type A; 1 * USB Type C for device mode; 1 * USB Type C for 5V power input"),(0,o.yg)("td",null,"4 * USB 3.0 Type-A \uff1b 1 * Micro-USB port for device mode;"),(0,o.yg)("td",null,"4 * USB 3.0 Type-A; 1 * Micro-USB port for 5V power input  or for device mode")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"CSI\u76f8\u673a\u8fde\u63a5"),(0,o.yg)("td",{colspan:"3",align:"center"},"2*CSI Camera (15 pos, 1mm pitch, MIPI CSI-2 )")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"\u663e\u793a"),(0,o.yg)("td",null,"1*HDMI Type A"),(0,o.yg)("td",{colspan:"2",align:"center"},"1*HDMI Type A; 1*DP")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"\u98ce\u6247"),(0,o.yg)("td",null,"1* FAN Connector (5V PWM)"),(0,o.yg)("td",{colspan:"2",align:"center"},"1* FAN (5V PWM)")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"M.2 KEY E"),(0,o.yg)("td",null,"1*M.2 Key E"),(0,o.yg)("td",null,"1*M.2 Key E (Disabled)"),(0,o.yg)("td",null,"1*M.2 Key E")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"M.2 KEY M"),(0,o.yg)("td",null,"-"),(0,o.yg)("td",null,"1*M.2 Key M"),(0,o.yg)("td",null,"-")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"RTC"),(0,o.yg)("td",{colspan:"2"},"RTC\u5957\u63a5\u5b57(\u4fdd\u7559)"),(0,o.yg)("td",null,"-")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"\u591a\u529f\u80fd\u63a5\u53e3"),(0,o.yg)("td",{colspan:"3",align:"center"},"1* 40-Pin header")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"\u7535\u6e90"),(0,o.yg)("td",null,"USB-Type C 5V\u23933A"),(0,o.yg)("td",null,"DC Jack 12V/2A"),(0,o.yg)("td",null,"DC Jack 5V\u23934A\uff1b Micro-USB 5V\u23932A")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"\u5c3a\u5bf8"),(0,o.yg)("td",{colspan:"2"},"130 mm x 120 mm x 50 mm (with case)"),(0,o.yg)("td",null,"100 mm x 80 mm x 29 mm")))),(0,o.yg)("h2",{id:"\u7ed9j1010\u7535\u8111\u70e7\u5f55flash-jetpack"},"\u7ed9J1010\u7535\u8111\u70e7\u5f55Flash JetPack"),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u89c1",(0,o.yg)("a",{parentName:"p",href:"/reComputer_J1010_J101_Flash_Jetpack"},"\u7ef4\u57fa"),"\u9875\u9762,\u56e0\u4e3aJ1010\u4f7f\u7528J101\u4e3b\u677f\u3002")))}d.isMDXComponent=!0}}]);