"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[74034],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>s});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),u=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(g.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,s=d["".concat(g,".").concat(m)]||d[m]||y[m]||i;return n?r.createElement(s,l(l({ref:t},p),{},{components:n})):r.createElement(s,l({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(9668),a=(n(96540),n(15680));const i={description:"Seeed Studio XIAO SAMD21 with MicroPython",title:"MicroPython",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/XIAO-SAMD21-MicroPython",last_update:{date:"10/11/2023",author:"\u8d75\u6842\u83b9"}},l="\u5b66\u4e60\u4f7f\u7528 MicroPython \u5bf9 XIAO SAMD21 \u8fdb\u884c\u7f16\u7a0b",o={unversionedId:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/CN_XIAO-SAMD21-MicroPython",id:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/CN_XIAO-SAMD21-MicroPython",title:"MicroPython",description:"Seeed Studio XIAO SAMD21 with MicroPython",source:"@site/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/CN_XIAO-SAMD21-MicroPython.md",sourceDirName:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21",slug:"/cn/XIAO-SAMD21-MicroPython",permalink:"/cn/XIAO-SAMD21-MicroPython",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/CN_XIAO-SAMD21-MicroPython.md",tags:[],version:"current",lastUpdatedBy:"\u8d75\u6842\u83b9",lastUpdatedAt:1696982400,formattedLastUpdatedAt:"Oct 11, 2023",frontMatter:{description:"Seeed Studio XIAO SAMD21 with MicroPython",title:"MicroPython",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/XIAO-SAMD21-MicroPython",last_update:{date:"10/11/2023",author:"\u8d75\u6842\u83b9"}},sidebar:"CNSidebar",previous:{title:"CircuitPython",permalink:"/cn/Seeeduino-XIAO-CircuitPython"},next:{title:"\u4f7f\u7528 XIAO SAMD21 \u5b66\u4e60\u5d4c\u5165\u5f0f\u673a\u5668\u5b66\u4e60",permalink:"/cn/Seeeduino-XIAO-TinyML"}},g={},u=[{value:"MicroPython\u7b80\u4ecb",id:"micropython\u7b80\u4ecb",level:2},{value:"\u5f00\u59cb",id:"\u5f00\u59cb",level:2},{value:"<strong>\u786c\u4ef6\u51c6\u5907</strong>",id:"\u786c\u4ef6\u51c6\u5907",level:3},{value:"<strong>\u8f6f\u4ef6\u51c6\u5907</strong>",id:"\u8f6f\u4ef6\u51c6\u5907",level:3},{value:"\u5c06Seeed Studio XIAO SAMD21\u8fde\u63a5\u5230PC\u5e76\u70b9\u4eae\u5b83",id:"\u5c06seeed-studio-xiao-samd21\u8fde\u63a5\u5230pc\u5e76\u70b9\u4eae\u5b83",level:3},{value:"\u8f6f\u4ef6\u5f00\u53d1",id:"\u8f6f\u4ef6\u5f00\u53d1",level:2},{value:"\u89c1XIAO SAMD21\u5f15\u811a\u5206\u914d\u8868",id:"\u89c1xiao-samd21\u5f15\u811a\u5206\u914d\u8868",level:3},{value:"\u4e0a\u4f20\u4f60\u7684\u4ee3\u7801",id:"\u4e0a\u4f20\u4f60\u7684\u4ee3\u7801",level:3},{value:"GPIO\u6d4b\u8bd5(LED)",id:"gpio\u6d4b\u8bd5led",level:3},{value:"GPIO Control Relays\uff08GPIO\u63a7\u5236\u7ee7\u7535\u5668\uff09",id:"gpio-control-relaysgpio\u63a7\u5236\u7ee7\u7535\u5668",level:3},{value:"Human detection for automatic control\uff08\u81ea\u52a8\u63a7\u5236\u4eba\u4f53\u68c0\u6d4b\uff09",id:"human-detection-for-automatic-control\u81ea\u52a8\u63a7\u5236\u4eba\u4f53\u68c0\u6d4b",level:3},{value:"I2C Support\uff0812C\u7684\u652f\u6301\uff09",id:"i2c-support12c\u7684\u652f\u6301",level:3},{value:"MicroPython\u8bbe\u5907\u63a7\u5236\u53f0",id:"micropython\u8bbe\u5907\u63a7\u5236\u53f0",level:2},{value:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",level:2}],p={toc:u},d="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u5b66\u4e60\u4f7f\u7528-micropython-\u5bf9-xiao-samd21-\u8fdb\u884c\u7f16\u7a0b"},"\u5b66\u4e60\u4f7f\u7528 MicroPython \u5bf9 XIAO SAMD21 \u8fdb\u884c\u7f16\u7a0b"),(0,a.yg)("h2",{id:"micropython\u7b80\u4ecb"},"MicroPython\u7b80\u4ecb"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/micropython/micropython/wiki"},"MicroPython"),"\u662f\u4e00\u4e2a\u5177\u6709\u90e8\u5206\u672c\u5730\u4ee3\u7801\u7f16\u8bd1\u529f\u80fd\u7684Python\u89e3\u91ca\u5668\u3002\u5b83\u63d0\u4f9b\u4e86Python 3.5\u7279\u6027\u7684\u4e00\u4e2a\u5b50\u96c6\uff0c\u7528\u4e8e\u5d4c\u5165\u5f0f\u5904\u7406\u5668\u548c\u53d7\u9650\u7cfb\u7edf\u3002\u5b83\u4e0eCPython\u4e0d\u540c\uff0c\u4f60\u53ef\u4ee5\u5728",(0,a.yg)("a",{parentName:"p",href:"https://github.com/micropython/micropython/wiki/Differences"},"\u8fd9\u91cc"),"\u9605\u8bfb\u66f4\u591a\u7684\u5dee\u5f02\u3002"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png"})),(0,a.yg)("h2",{id:"\u5f00\u59cb"},"\u5f00\u59cb"),(0,a.yg)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u5c06Seeed Studio XIAO SAMD21\u8fde\u63a5\u5230\u8ba1\u7b97\u673a\uff0c\u5e76\u4eceMicroPython\u4e0a\u4f20\u4e00\u4e2a\u7b80\u5355\u7684\u4ee3\u7801\u6765\u68c0\u67e5\u7535\u8def\u677f\u662f\u5426\u6b63\u5e38\u8fd0\u884c\u3002"),(0,a.yg)("h3",{id:"\u786c\u4ef6\u51c6\u5907"},(0,a.yg)("strong",{parentName:"h3"},"\u786c\u4ef6\u51c6\u5907")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Seeed Studio XIAO SAMD21")," x1"),(0,a.yg)("li",{parentName:"ul"},"Type-C \u6570\u636e\u7ebf x1"),(0,a.yg)("li",{parentName:"ul"},"PC x1")),(0,a.yg)("h3",{id:"\u8f6f\u4ef6\u51c6\u5907"},(0,a.yg)("strong",{parentName:"h3"},"\u8f6f\u4ef6\u51c6\u5907")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 1"),". \u6839\u636e\u60a8\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e0b\u8f7d\u5e76\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684",(0,a.yg)("a",{parentName:"li",href:"https://thonny.org/"},"Thonny editor"))),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:550,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Step 2"),".\u542f\u52a8 Thonny")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Step 3"),". \u70b9\u51fb ",(0,a.yg)("strong",{parentName:"p"},'"Tools--\x3eOptions"')," \u6765\u6253\u5f00\u8bbe\u7f6e"))),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:550,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 4"),". \u9009\u62e9\u201cinterpreter\u201d\u63a5\u53e3\u5e76\u9009\u62e9\u8bbe\u5907\u4e3a",(0,a.yg)("strong",{parentName:"li"},"\u201cMicroPython(\u901a\u7528)\u201d"),"\u5c06\u7aef\u53e3\u8bbe\u7f6e\u4e3a",(0,a.yg)("strong",{parentName:"li"},"\u201cTry to detect prot automatically\u201d"))),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:550,src:"https://files.seeedstudio.com/wiki/XIAO_SAMD/img/1.jpg"})),(0,a.yg)("h3",{id:"\u5c06seeed-studio-xiao-samd21\u8fde\u63a5\u5230pc\u5e76\u70b9\u4eae\u5b83"},"\u5c06Seeed Studio XIAO SAMD21\u8fde\u63a5\u5230PC\u5e76\u70b9\u4eae\u5b83"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 1"),". \u6309\u4f4f\u201cBOOT\u201d\u6309\u94ae\uff0c\u7136\u540e\u901a\u8fc7Type-C\u7535\u7f06\u5c06Seeed Studio XIAO SAMD21\u8fde\u63a5\u5230PC\u3002\u5982\u679c\u8fd0\u884c\u826f\u597d\uff0c\u7535\u8111\u4e0a\u4f1a\u663e\u793a\u4e00\u4e2a\u201cArduino\u201d")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/XIAO_SAMD/img/2.jpg"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 2"),". Flash the firmware\uff08\u95ea\u5b58\u56fa\u4ef6\uff09")),(0,a.yg)("p",null,"\u5bf9\u4e8ewindows:"),(0,a.yg)("p",null,"\u590d\u5236",(0,a.yg)("a",{parentName:"p",href:"https://micropython.org/resources/firmware/SEEED_XIAO-20220618-v1.19.1.uf2"},"Seeed XIAO SAMD21 firmware for MicroPython Support"),"\u5e76\u5c06\u5176\u653e\u5728\u6b64\u6587\u4ef6\u5939\u4e2d "),(0,a.yg)("p",null,"\u5bf9\u4e8eLinux:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'wget "https://micropython.org/resources/firmware/SEEED_XIAO-20220618-v1.19.1.uf2"\ncp SEEED_XIAO-20220618-v1.19.1.uf2 /media/$USER/Arduino/\n')),(0,a.yg)("p",null,"\u4e5f\u53ef\u4ee5",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Compiling_MicroPython_for_embedded_devices/"},"\u7f16\u8bd1\u81ea\u5df1\u7684\u56fa\u4ef6"),"\uff0c\u4ee5\u786e\u4fdd\u5b89\u5168\u6027\u548c\u652f\u6301\u6700\u65b0\u7684\u529f\u80fd\uff0c\u4f46\u8fd9\u4e0d\u662f\u5fc5\u8981\u7684\u3002 "),(0,a.yg)("h2",{id:"\u8f6f\u4ef6\u5f00\u53d1"},"\u8f6f\u4ef6\u5f00\u53d1"),(0,a.yg)("h3",{id:"\u89c1xiao-samd21\u5f15\u811a\u5206\u914d\u8868"},"\u89c1XIAO SAMD21\u5f15\u811a\u5206\u914d\u8868"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Pin"),(0,a.yg)("th",{parentName:"tr",align:null},"GPIO"),(0,a.yg)("th",{parentName:"tr",align:null},"Xiao Pin name"),(0,a.yg)("th",{parentName:"tr",align:null},"IRQ"),(0,a.yg)("th",{parentName:"tr",align:null},"ADC"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"2"),(0,a.yg)("td",{parentName:"tr",align:null},"PA02"),(0,a.yg)("td",{parentName:"tr",align:null},"0"),(0,a.yg)("td",{parentName:"tr",align:null},"2"),(0,a.yg)("td",{parentName:"tr",align:null},"0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"4"),(0,a.yg)("td",{parentName:"tr",align:null},"PA04"),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"4"),(0,a.yg)("td",{parentName:"tr",align:null},"4")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"10"),(0,a.yg)("td",{parentName:"tr",align:null},"PA10"),(0,a.yg)("td",{parentName:"tr",align:null},"2"),(0,a.yg)("td",{parentName:"tr",align:null},"10"),(0,a.yg)("td",{parentName:"tr",align:null},"18")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"11"),(0,a.yg)("td",{parentName:"tr",align:null},"PA11"),(0,a.yg)("td",{parentName:"tr",align:null},"3"),(0,a.yg)("td",{parentName:"tr",align:null},"11"),(0,a.yg)("td",{parentName:"tr",align:null},"19")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"8"),(0,a.yg)("td",{parentName:"tr",align:null},"PA08"),(0,a.yg)("td",{parentName:"tr",align:null},"4"),(0,a.yg)("td",{parentName:"tr",align:null},"*"),(0,a.yg)("td",{parentName:"tr",align:null},"16")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"9"),(0,a.yg)("td",{parentName:"tr",align:null},"PA09"),(0,a.yg)("td",{parentName:"tr",align:null},"5"),(0,a.yg)("td",{parentName:"tr",align:null},"9"),(0,a.yg)("td",{parentName:"tr",align:null},"17")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"40"),(0,a.yg)("td",{parentName:"tr",align:null},"PB082"),(0,a.yg)("td",{parentName:"tr",align:null},"6"),(0,a.yg)("td",{parentName:"tr",align:null},"8"),(0,a.yg)("td",{parentName:"tr",align:null},"2")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"41"),(0,a.yg)("td",{parentName:"tr",align:null},"PB09"),(0,a.yg)("td",{parentName:"tr",align:null},"7"),(0,a.yg)("td",{parentName:"tr",align:null},"9"),(0,a.yg)("td",{parentName:"tr",align:null},"3")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"7"),(0,a.yg)("td",{parentName:"tr",align:null},"PA07"),(0,a.yg)("td",{parentName:"tr",align:null},"8"),(0,a.yg)("td",{parentName:"tr",align:null},"7"),(0,a.yg)("td",{parentName:"tr",align:null},"7")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"5"),(0,a.yg)("td",{parentName:"tr",align:null},"PA05"),(0,a.yg)("td",{parentName:"tr",align:null},"9"),(0,a.yg)("td",{parentName:"tr",align:null},"5"),(0,a.yg)("td",{parentName:"tr",align:null},"5")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"6"),(0,a.yg)("td",{parentName:"tr",align:null},"PA06"),(0,a.yg)("td",{parentName:"tr",align:null},"10"),(0,a.yg)("td",{parentName:"tr",align:null},"6"),(0,a.yg)("td",{parentName:"tr",align:null},"6")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"18"),(0,a.yg)("td",{parentName:"tr",align:null},"PA18"),(0,a.yg)("td",{parentName:"tr",align:null},"RX_LED"),(0,a.yg)("td",{parentName:"tr",align:null},"2"),(0,a.yg)("td",{parentName:"tr",align:null},"*")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"30"),(0,a.yg)("td",{parentName:"tr",align:null},"PA30"),(0,a.yg)("td",{parentName:"tr",align:null},"SWCLK"),(0,a.yg)("td",{parentName:"tr",align:null},"10"),(0,a.yg)("td",{parentName:"tr",align:null},"*")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"31"),(0,a.yg)("td",{parentName:"tr",align:null},"PA31"),(0,a.yg)("td",{parentName:"tr",align:null},"SWDIO"),(0,a.yg)("td",{parentName:"tr",align:null},"11"),(0,a.yg)("td",{parentName:"tr",align:null},"*")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"19"),(0,a.yg)("td",{parentName:"tr",align:null},"PA19"),(0,a.yg)("td",{parentName:"tr",align:null},"TX_LED"),(0,a.yg)("td",{parentName:"tr",align:null},"3"),(0,a.yg)("td",{parentName:"tr",align:null},"*")))),(0,a.yg)("h3",{id:"\u4e0a\u4f20\u4f60\u7684\u4ee3\u7801"},"\u4e0a\u4f20\u4f60\u7684\u4ee3\u7801"),(0,a.yg)("p",null,"\u70b9\u51fb\u201cRun current script\u201d\u6309\u94ae\u4e0a\u4f20\u4ee3\u7801\u3002\u7b2c\u4e00\u6b21\uff0c\u6258\u5c3c\u4f1a\u95ee\u4f60\u60f3\u5728\u54ea\u91cc\u4fdd\u5b58\u4f60\u7684\u4ee3\u7801\u6587\u4ef6\u3002",(0,a.yg)("strong",{parentName:"p"},"\u8fd9\u53f0\u8ba1\u7b97\u673a"),"\u548c",(0,a.yg)("strong",{parentName:"p"},"MicroPython\u8bbe\u5907"),"\u90fd\u6ca1\u95ee\u9898\u3002 "),(0,a.yg)("p",null,"\u5982\u679c\u60f3\u79bb\u7ebf\u4f7f\u7528\u8be5\u7a0b\u5e8f\uff0c\u5e94\u8be5\u5c06\u8be5\u7a0b\u5e8f\u4fdd\u5b58\u5230XIAO SAMD21 "),(0,a.yg)("p",null,"\u540c\u65f6\u6309\u4f4fCtrl + Shift + S\uff0c\u7136\u540e\u9009\u62e9save to ",(0,a.yg)("strong",{parentName:"p"},"MicroPython device")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/XIAO_SAMD/img/6.jpg"})),(0,a.yg)("h3",{id:"gpio\u6d4b\u8bd5led"},"GPIO\u6d4b\u8bd5(LED)"),(0,a.yg)("p",null,"\u6211\u4eec\u9700\u8981\u51c6\u5907:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Seeed Studio XIAO SAMD21"))),(0,a.yg)("p",null,"\u5c06\u4ee5\u4e0b\u4ee3\u7801\u590d\u5236\u7ed9Thonny\u3002 "),(0,a.yg)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u84dd\u8272\u7684RX_LED\u88ab\u70b9\u4eae\u5e76\u6bcf\u79d2\u95ea\u70c1\u4e00\u6b21"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Python"},"from machine import Pin, Timer\n \nled = Pin(18, Pin.OUT)\nCounter = 0\nFun_Num = 0\n \ndef fun(tim):\n    global Counter\n    Counter = Counter + 1 \n    print(Counter)\n    led.value(Counter%2)\n \ntim = Timer(-1)\ntim.init(period=500, mode=Timer.PERIODIC, callback=fun)\n")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/XIAO_SAMD/img/3.gif"})),(0,a.yg)("h3",{id:"gpio-control-relaysgpio\u63a7\u5236\u7ee7\u7535\u5668"},"GPIO Control Relays\uff08GPIO\u63a7\u5236\u7ee7\u7535\u5668\uff09"),(0,a.yg)("p",null,"\u6211\u4eec\u9700\u8981\u51c6\u5907:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board/"},"Seeeduino-XIAO-Expansion-Board")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-Relay.html"},"Grove-Relay")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Seeed Studio XIAO SAMD21"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Python"},"from machine import Pin, Timer\n\noutput_4 = Pin(8, Pin.OUT)\ndetect_1 = Pin(4, Pin.IN, Pin.PULL_UP)\noutput_value = Pin(2, Pin.OUT)\nCounter = 0\n     \ndef fun(tim):\n    global Counter\n    Counter = Counter + 1\n    output_4.value(Counter%2)\n    print(Counter%2,detect_1.value())\n    if detect_1.value() :\n        output_value.value(1)\n    else:\n        output_value.value(0)\n \ntim = Timer(-1)\ntim.init(period=200, mode=Timer.PERIODIC, callback=fun)\n")),(0,a.yg)("div",{align:"center"},(0,a.yg)("video",{width:600,height:240,controls:!0},(0,a.yg)("source",{src:"https://files.seeedstudio.com/wiki/XIAO_SAMD/img/4.mp4",type:"video/mp4"}),"Your browser does not support the video tag.")),(0,a.yg)("h3",{id:"human-detection-for-automatic-control\u81ea\u52a8\u63a7\u5236\u4eba\u4f53\u68c0\u6d4b"},"Human detection for automatic control\uff08\u81ea\u52a8\u63a7\u5236\u4eba\u4f53\u68c0\u6d4b\uff09"),(0,a.yg)("p",null,"\u6211\u4eec\u9700\u8981\u51c6\u5907:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html?queryID=32e8107bce436db9b886cf1b8c698667&objectID=5304&indexName=bazaar_retailer_products"},"Doppler radar for human detection\uff08\u591a\u666e\u52d2\u4eba\u4f53\u63a2\u6d4b\u96f7\u8fbe\uff09")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board/"},"Seeeduino-XIAO-Expansion-Board")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-Relay.html"},"Grove-Relay")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Seeed Studio XIAO SAMD21"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Python"},"from machine import Pin, Timer\n\nled = Pin(8, Pin.OUT)\n\ninput_value_1 = Pin(4, Pin.IN, Pin.PULL_UP)\ninput_value_2 = Pin(10, Pin.IN, Pin.PULL_UP)\noutput_value = Pin(2, Pin.OUT)\n\nCounter = 0\nFun_Num = 0\n     \ndef fun(tim):\n    global Counter\n    Counter = Counter + 1\n    led.value(Counter%2)\n    print(input_value_1.value(),input_value_2.value())\n    if input_value_1.value() :\n        output_value.value(1)\n    else:\n        output_value.value(0)\n \ntim = Timer(-1)\ntim.init(period=50, mode=Timer.PERIODIC, callback=fun)\n")),(0,a.yg)("div",{align:"center"},(0,a.yg)("video",{width:600,height:240,controls:!0},(0,a.yg)("source",{src:"https://files.seeedstudio.com/wiki/XIAO_SAMD/img/5.mp4",type:"video/mp4"}),"Your browser does not support the video tag.")),(0,a.yg)("h3",{id:"i2c-support12c\u7684\u652f\u6301"},"I2C Support\uff0812C\u7684\u652f\u6301\uff09"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Python"},"from machine import Pin, SoftI2C\n\ni2c = SoftI2C(scl=Pin(9), sda=Pin(8), freq=100000)\ndevices = i2c.scan()\nfor device in devices:  \n    print(\"Decimal address: \",device,\" | Hexa address: \",hex(device))\n\ni2c.writeto(0x51, 'b')\nprint(i2c.readfrom(0x51, 4))   # read 4 bytes from device with address 0x51\ni2c.writeto(0x51, 'a') # write 'a' to device with address 0x51\nprint(i2c.readfrom(0x51, 4))   # read 4 bytes from device with address 0x51\ni2c.writeto(0x51, 'b')\nprint(i2c.readfrom(0x51, 4)) \n\n")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO_SAMD/img/8.png"})),(0,a.yg)("p",null,"\u719f\u6089micropython\u53ef\u4ee5\u8ba9\u60a8\u505a\u66f4\u591a\uff0c\u6211\u4eec\u671f\u5f85\u4e3a\u60a8\u521b\u9020\u66f4\u591a\u4ef7\u503c\u3002\u4e5f\u6b22\u8fce\u548c\u6211\u4eec\u5206\u4eab\u4f60\u7684\u9879\u76ee!"),(0,a.yg)("h2",{id:"micropython\u8bbe\u5907\u63a7\u5236\u53f0"},"MicroPython\u8bbe\u5907\u63a7\u5236\u53f0"),(0,a.yg)("p",null,"\u6211\u4eec\u7684\u5408\u4f5c\u4f19\u4f34",(0,a.yg)("strong",{parentName:"p"},"Neil"),"\u4f7f\u7528MicroPython\u4e3aXIAO\u7f16\u5199\u4e86\u4e00\u4e2a\u547d\u4ee4\u884c\u63a7\u5236\u53f0\u7a0b\u5e8f\u3002\u6709\u4e86\u8fd9\u4e2a\u7a0b\u5e8f\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u4e0a\u4f20\uff0c\u4e0b\u8f7d\u548c\u5220\u9664\u6587\u4ef6\u3002\u6211\u4eec\u611f\u8c22\u4ed6\u5bf9XIAO\u7684\u8d21\u732e!"),(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda \u4e86\u89e3\u66f4\u591a"))))),(0,a.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"),(0,a.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1!\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u5229\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u559c\u597d\u548c\u9700\u6c42\u3002"),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}y.isMDXComponent=!0}}]);