"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[70802],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>m});var i=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=c(n),d=r,m=g["".concat(p,".").concat(d)]||g[d]||u[d]||a;return n?i.createElement(m,l(l({ref:t},s),{},{components:n})):i.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=n(9668),r=(n(96540),n(15680));const a={description:"Tapping",title:"Tapping",keywords:["Wio_terminal IMU"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-IMU-Tapping",last_update:{date:"1/17/2023",author:"jianjing Huang"}},l="Wio Terminal Sensing Tapping Motion Demo",o={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/IMU/Wio-Terminal-IMU-Tapping",id:"Sensor/Wio_Terminal/Hardware_Overview/IMU/Wio-Terminal-IMU-Tapping",title:"Tapping",description:"Tapping",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/IMU/Wio-Terminal-IMU-Tapping.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/IMU",slug:"/Wio-Terminal-IMU-Tapping",permalink:"/Wio-Terminal-IMU-Tapping",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/IMU/Wio-Terminal-IMU-Tapping.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673913600,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{description:"Tapping",title:"Tapping",keywords:["Wio_terminal IMU"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-IMU-Tapping",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Getting Started with accelerometer",permalink:"/Wio-Terminal-IMU-Basic"},next:{title:"Overview",permalink:"/Wio-Terminal-FS-Overview"}},p={},c=[{value:"3-Axis Accelerator Initialization",id:"3-axis-accelerator-initialization",level:2},{value:"Tapping Sensitivity Configurations",id:"tapping-sensitivity-configurations",level:2},{value:"Single click or Double click",id:"single-click-or-double-click",level:2},{value:"Complete Code",id:"complete-code",level:2}],s={toc:c},g="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,i.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"wio-terminal-sensing-tapping-motion-demo"},"Wio Terminal Sensing Tapping Motion Demo"),(0,r.yg)("p",null,"This repo demonstrates how Wio Terminal used the built-in acclerator to sense the Single-click tapping or Double-click tapping motion!"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-10%2010-33-58.2019-12-10%2010_35_11.gif"})),(0,r.yg)("h2",{id:"3-axis-accelerator-initialization"},"3-Axis Accelerator Initialization"),(0,r.yg)("p",null,"To initialize the accelerator on Wio Terminal, please visit ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-IMU-Basic/"},"Getting Started with IMU")," for more information."),(0,r.yg)("h2",{id:"tapping-sensitivity-configurations"},"Tapping Sensitivity Configurations"),(0,r.yg)("p",null,"For sensitivity of tapping, adjust the value for THRESHOLD according to scale range of IMU:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Scale Range"),(0,r.yg)("th",{parentName:"tr",align:null},"2g"),(0,r.yg)("th",{parentName:"tr",align:null},"4g"),(0,r.yg)("th",{parentName:"tr",align:null},"8g"),(0,r.yg)("th",{parentName:"tr",align:null},"16g"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"THRESHOLD"),(0,r.yg)("td",{parentName:"tr",align:null},"40-80"),(0,r.yg)("td",{parentName:"tr",align:null},"20-40"),(0,r.yg)("td",{parentName:"tr",align:null},"10-20"),(0,r.yg)("td",{parentName:"tr",align:null},"5-10")))),(0,r.yg)("h2",{id:"single-click-or-double-click"},"Single click or Double click"),(0,r.yg)("p",null,"To use the ",(0,r.yg)("inlineCode",{parentName:"p"},"click")," function, simply call it as follow, where first parameter is used to determine sensing single clicking or double clicking(1 or 2), and second parameter is for threshold value."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"void setup() {\n    ...\n    lis.click(1,THRESHOLD);\n    //Interrupt signal to trigger when a tap is detected!\n    attachInterrupt(digitalPinToInterrupt(GYROSCOPE_INT1), count, RISING);\n}\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"GYROSCOPE_INT1")," is the Acclerometer Interrupt Pin 1."),(0,r.yg)("h2",{id:"complete-code"},"Complete Code"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include"LIS3DHTR.h"\nLIS3DHTR<TwoWire> lis;\n\n//Adjust this threshold value for sensitivity of clicking\n#define THRESHOLD 40\nuint8_t cnt=0;\n\nvoid count() {\n    cnt++;\n    Serial.print("Tap Count: ");\n    Serial.println(cnt);\n}\n\nvoid setup() {\n    Serial.begin(115200);\n    lis.begin(Wire1);\n\n    if (!lis) {\n        Serial.println("ERROR");\n        while(1);\n    }\n    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate\n    lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g\n\n    //1 for single click, 2 for double click\n    //smaller the threshold value, the more sensitive\n    lis.click(1, THRESHOLD);\n    //Interrupt signal to trigger when a tap is detected!\n    attachInterrupt(digitalPinToInterrupt(GYROSCOPE_INT1), count, RISING);\n}\n\nvoid loop() {\n}\n')))}u.isMDXComponent=!0}}]);