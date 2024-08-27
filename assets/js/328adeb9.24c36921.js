"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[58815],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>m});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,m=u["".concat(p,".").concat(d)]||u[d]||g[d]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(9668),i=(n(96540),n(15680));const a={description:"Tapping",title:"\u6572\u51fb",keywords:["Wio_terminal IMU"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-IMU-Tapping",last_update:{date:"3/09/2024",author:"\u91d1\u83ca"}},l="Wio Terminal \u611f\u77e5\u6572\u51fb\u8fd0\u52a8\u6f14\u793a",o={unversionedId:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/IMU/CN-Wio-Terminal-IMU-Tapping",id:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/IMU/CN-Wio-Terminal-IMU-Tapping",title:"\u6572\u51fb",description:"Tapping",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/IMU/CN-Wio-Terminal-IMU-Tapping.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/IMU",slug:"/cn/Wio-Terminal-IMU-Tapping",permalink:"/cn/Wio-Terminal-IMU-Tapping",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/IMU/CN-Wio-Terminal-IMU-Tapping.md",tags:[],version:"current",lastUpdatedBy:"\u91d1\u83ca",lastUpdatedAt:1709942400,formattedLastUpdatedAt:"Mar 9, 2024",frontMatter:{description:"Tapping",title:"\u6572\u51fb",keywords:["Wio_terminal IMU"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-IMU-Tapping",last_update:{date:"3/09/2024",author:"\u91d1\u83ca"}},sidebar:"CNSidebar",previous:{title:"\u52a0\u901f\u5ea6\u8ba1\u5165\u95e8\u6307\u5357",permalink:"/cn/Wio-Terminal-IMU-Basic"},next:{title:"\u6982\u8ff0",permalink:"/cn/Wio-Terminal-FS-Overview"}},p={},c=[{value:"3\u8f74\u52a0\u901f\u5ea6\u8ba1\u521d\u59cb\u5316",id:"3\u8f74\u52a0\u901f\u5ea6\u8ba1\u521d\u59cb\u5316",level:2},{value:"\u6572\u51fb\u7075\u654f\u5ea6\u914d\u7f6e",id:"\u6572\u51fb\u7075\u654f\u5ea6\u914d\u7f6e",level:2},{value:"\u5355\u51fb\u6216\u53cc\u51fb",id:"\u5355\u51fb\u6216\u53cc\u51fb",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],s={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"wio-terminal-\u611f\u77e5\u6572\u51fb\u8fd0\u52a8\u6f14\u793a"},"Wio Terminal \u611f\u77e5\u6572\u51fb\u8fd0\u52a8\u6f14\u793a"),(0,i.yg)("p",null,"\u8be5\u5b58\u50a8\u5e93\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528 Wio Terminal \u7684\u5185\u7f6e\u52a0\u901f\u5ea6\u8ba1\u6765\u611f\u77e5\u5355\u51fb\u6572\u51fb\u6216\u53cc\u51fb\u6572\u51fb\u8fd0\u52a8\uff01"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-10%2010-33-58.2019-12-10%2010_35_11.gif"})),(0,i.yg)("h2",{id:"3\u8f74\u52a0\u901f\u5ea6\u8ba1\u521d\u59cb\u5316"},"3\u8f74\u52a0\u901f\u5ea6\u8ba1\u521d\u59cb\u5316"),(0,i.yg)("p",null,"\u8981\u521d\u59cb\u5316 Wio Terminal\u4e0a\u7684\u52a0\u901f\u5ea6\u8ba1\uff0c\u8bf7\u8bbf\u95ee ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-IMU-Basic/"},"IMU\u5165\u95e8\u6307\u5357")," \u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002"),(0,i.yg)("h2",{id:"\u6572\u51fb\u7075\u654f\u5ea6\u914d\u7f6e"},"\u6572\u51fb\u7075\u654f\u5ea6\u914d\u7f6e"),(0,i.yg)("p",null,"\u5bf9\u4e8e\u6572\u51fb\u7684\u7075\u654f\u5ea6\uff0c\u8bf7\u6839\u636e\u52a0\u901f\u5ea6\u8ba1\u7684\u91cf\u7a0b\u8303\u56f4\u8c03\u6574THRESHOLD\u7684\u503c\uff1a"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"\u91cf\u7a0b\u8303\u56f4"),(0,i.yg)("th",{parentName:"tr",align:null},"2g"),(0,i.yg)("th",{parentName:"tr",align:null},"4g"),(0,i.yg)("th",{parentName:"tr",align:null},"8g"),(0,i.yg)("th",{parentName:"tr",align:null},"16g"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"\u9608\u503c"),(0,i.yg)("td",{parentName:"tr",align:null},"40-80"),(0,i.yg)("td",{parentName:"tr",align:null},"20-40"),(0,i.yg)("td",{parentName:"tr",align:null},"10-20"),(0,i.yg)("td",{parentName:"tr",align:null},"5-10")))),(0,i.yg)("h2",{id:"\u5355\u51fb\u6216\u53cc\u51fb"},"\u5355\u51fb\u6216\u53cc\u51fb"),(0,i.yg)("p",null,"\u8981\u4f7f\u7528 ",(0,i.yg)("inlineCode",{parentName:"p"},"click")," \u51fd\u6570\uff0c\u53ea\u9700\u6309\u5982\u4e0b\u65b9\u5f0f\u8c03\u7528\uff0c\u5176\u4e2d\u7b2c\u4e00\u4e2a\u53c2\u6570\u7528\u4e8e\u786e\u5b9a\u662f\u611f\u77e5\u5355\u51fb\u8fd8\u662f\u53cc\u51fb\uff081\u62162\uff09\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u9608\u503c\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"void setup() {\n    ...\n    lis.click(1,THRESHOLD);\n    //Interrupt signal to trigger when a tap is detected!\n    attachInterrupt(digitalPinToInterrupt(GYROSCOPE_INT1), count, RISING);\n}\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6ce8:")," ",(0,i.yg)("inlineCode",{parentName:"p"},"GYROSCOPE_INT1")," \u662f\u52a0\u901f\u5ea6\u8ba1\u4e2d\u65ad\u5f15\u811a1\u3002"),(0,i.yg)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'#include"LIS3DHTR.h"\nLIS3DHTR<TwoWire> lis;\n\n//Adjust this threshold value for sensitivity of clicking\n#define THRESHOLD 40\nuint8_t cnt=0;\n\nvoid count() {\n    cnt++;\n    Serial.print("Tap Count: ");\n    Serial.println(cnt);\n}\n\nvoid setup() {\n    Serial.begin(115200);\n    lis.begin(Wire1);\n\n    if (!lis) {\n        Serial.println("ERROR");\n        while(1);\n    }\n    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate\n    lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g\n\n    //1 for single click, 2 for double click\n    //smaller the threshold value, the more sensitive\n    lis.click(1, THRESHOLD);\n    //Interrupt signal to trigger when a tap is detected!\n    attachInterrupt(digitalPinToInterrupt(GYROSCOPE_INT1), count, RISING);\n}\n\nvoid loop() {\n}\n')))}g.isMDXComponent=!0}}]);