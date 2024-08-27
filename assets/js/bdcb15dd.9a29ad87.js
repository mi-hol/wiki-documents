"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[18728],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),g=i,m=u["".concat(l,".").concat(g)]||u[g]||c[g]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},79547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(9668),i=(n(96540),n(15680));const o={description:"SenseCraft Model Assistant Getting Start with Seeed Studio XIAO ESP32S3.",title:"SenseCraft Model Assistant with XIAO ESP32S3 (Sense)",keywords:["esp32s3","xiao","tinyml"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/xiao_esp32s3_edgelab",last_update:{date:"10/04/2023",author:"LynnL4"}},r="SenseCraft Model Assistant Getting Start with Seeed Studio XIAO ESP32S3",s={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/XIAO_ESP32S3_EdgeLab",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/XIAO_ESP32S3_EdgeLab",title:"SenseCraft Model Assistant with XIAO ESP32S3 (Sense)",description:"SenseCraft Model Assistant Getting Start with Seeed Studio XIAO ESP32S3.",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/XIAO_ESP32S3_EdgeLab.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3",slug:"/xiao_esp32s3_edgelab",permalink:"/xiao_esp32s3_edgelab",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/XIAO_ESP32S3_EdgeLab.md",tags:[],version:"current",lastUpdatedBy:"LynnL4",lastUpdatedAt:1696377600,formattedLastUpdatedAt:"Oct 4, 2023",frontMatter:{description:"SenseCraft Model Assistant Getting Start with Seeed Studio XIAO ESP32S3.",title:"SenseCraft Model Assistant with XIAO ESP32S3 (Sense)",keywords:["esp32s3","xiao","tinyml"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/xiao_esp32s3_edgelab",last_update:{date:"10/04/2023",author:"LynnL4"}},sidebar:"ProductSidebar",previous:{title:"Miniature ChatGPT Voice Assistant based on XIAO ESP32S3 Sense",permalink:"/xiao_esp32s3_speech2chatgpt"},next:{title:"Geolocation Tracker with XIAO ESP32S3 (Sense)",permalink:"/geolocation_tracker_with_XIAO_ESP32S3"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Hardware Required",id:"hardware-required",level:2},{value:"Software Required",id:"software-required",level:2},{value:"How to Install",id:"how-to-install",level:2},{value:"Install ESP-IDF",id:"install-esp-idf",level:3},{value:"get submodules",id:"get-submodules",level:3},{value:"How to Use",id:"how-to-use",level:2},{value:"Build the example",id:"build-the-example",level:3},{value:"Load and run the example",id:"load-and-run-the-example",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"sensecraft-model-assistant-getting-start-with-seeed-studio-xiao-esp32s3"},"SenseCraft Model Assistant Getting Start with Seeed Studio XIAO ESP32S3"),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://edgelab.readthedocs.io/en/latest/"},"SenseCraft Model Assistant")," is an open-source project focused on embedded AI. We have optimized excellent algorithms from OpenMMLab for real-world scenarios and made implemention more user-friendly, achieving faster and more accurate inference on embedded devices."),(0,i.yg)("h2",{id:"hardware-required"},"Hardware Required"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html"},"Seeed Studio XIAO ESP32S3 Sense")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html"},"Seeed Studio Round Display for XIAO")),(0,i.yg)("li",{parentName:"ul"},"Type-C Cable")),(0,i.yg)("h2",{id:"software-required"},"Software Required"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"ESP-IDF v4.4"),(0,i.yg)("li",{parentName:"ul"},"SenseCraft Model Assistant v0.1.0"),(0,i.yg)("li",{parentName:"ul"},"Example Code: ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/edgelab-example-esp32"},"SenseCraft Model Assistant-example-esp32"))),(0,i.yg)("h2",{id:"how-to-install"},"How to Install"),(0,i.yg)("h3",{id:"install-esp-idf"},"Install ESP-IDF"),(0,i.yg)("p",null,"Follow the instructions of the\n",(0,i.yg)("a",{parentName:"p",href:"https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html"},"ESP-IDF get started guide"),"\nto setup the toolchain and the ESP-IDF itself."),(0,i.yg)("p",null,"The next steps assume that this installation is successful and the\n",(0,i.yg)("a",{parentName:"p",href:"https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html#step-4-set-up-the-environment-variables"},"IDF environment variables are set"),". Specifically,"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"the ",(0,i.yg)("inlineCode",{parentName:"li"},"IDF_PATH")," environment variable is set"),(0,i.yg)("li",{parentName:"ul"},"the ",(0,i.yg)("inlineCode",{parentName:"li"},"idf.py")," and Xtensa-esp32 tools (e.g., ",(0,i.yg)("inlineCode",{parentName:"li"},"xtensa-esp32-elf-gcc"),") are in ",(0,i.yg)("inlineCode",{parentName:"li"},"$PATH"))),(0,i.yg)("h3",{id:"get-submodules"},"get submodules"),(0,i.yg)("p",null,"cd to the root directory of the project and run the following command to get the submodules:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"git clone https://github.com/Seeed-Studio/edgelab-example-esp32 && cd edgelab-example-esp32\ngit submodule init\ngit submodule update\n")),(0,i.yg)("h2",{id:"how-to-use"},"How to Use"),(0,i.yg)("h3",{id:"build-the-example"},"Build the example"),(0,i.yg)("p",null,"Go to example directory (",(0,i.yg)("inlineCode",{parentName:"p"},"examples/<example_name>"),") and build the example."),(0,i.yg)("p",null,"Set the IDF_TARGET (For ESP32-S3 target, IDF version ",(0,i.yg)("inlineCode",{parentName:"p"},"release/v4.4")," is needed)"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"idf.py set-target esp32s3\n")),(0,i.yg)("p",null,"Configure the example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"idf.py menuconfig\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Select the Camera Module in ",(0,i.yg)("inlineCode",{parentName:"li"},"Component config")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"SenseCraft Model Assistant Configuration")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"Camera Configuration")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"Select Camera Pinout"),(0,i.yg)("img",{parentName:"li",src:"https://raw.githubusercontent.com/Seeed-Studio/sscma-example-esp32/1.0.0/docs/_static/esp32/images/esp32s3-xiao-camera.png",alt:"img"})),(0,i.yg)("li",{parentName:"ul"},"Select the LCD Module in ",(0,i.yg)("inlineCode",{parentName:"li"},"Component config")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"SenseCraft Model Assistant Configuration")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"LCD Configuration")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"Select LCD Pinout"),(0,i.yg)("img",{parentName:"li",src:"https://raw.githubusercontent.com/Seeed-Studio/sscma-example-esp32/1.0.0/docs/_static/esp32/images/esp32s3-xiao-lcd.png",alt:"img"}))),(0,i.yg)("p",null,"To build this, run:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"idf.py build\n")),(0,i.yg)("h3",{id:"load-and-run-the-example"},"Load and run the example"),(0,i.yg)("p",null,"To flash (replace ",(0,i.yg)("inlineCode",{parentName:"p"},"/dev/ttyUSB0")," with the device serial port):"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"idf.py --port /dev/ttyUSB0 flash\n")),(0,i.yg)("p",null,"Monitor the serial output:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"idf.py --port /dev/ttyUSB0 monitor\n")),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);