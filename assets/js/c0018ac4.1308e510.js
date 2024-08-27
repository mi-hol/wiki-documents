"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8563],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>c});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),g=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=g(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=g(t),u=a,c=d["".concat(s,".").concat(u)]||d[u]||h[u]||r;return t?i.createElement(c,l(l({ref:n},p),{},{components:t})):i.createElement(c,l({ref:n},p))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var g=2;g<r;g++)l[g]=t[g];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},47643:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>g});var i=t(9668),a=(t(96540),t(15680));const r={description:"Wio Terminal Storing Data",title:"Wio Terminal \u5b58\u50a8\u6570\u636e",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-Storting-Analog-Data",last_update:{date:"3/07/2024",author:"jessie"}},l="\u6b64\u793a\u4f8b\u6f14\u793a\u5982\u4f55\u4f7f\u7528\u7ebf\u56fe\u51fd\u6570\u5728Wio Terminal\u4e0a\u663e\u793aGrove-\u5149\u4f20\u611f\u5668\u7684\u8bfb\u6570\uff0c\u5c31\u50cf\u4e32\u884c\u7ed8\u56fe\u5668\u4e00\u6837\uff01\u6b64\u5916\uff0c\u5149\u4f20\u611f\u5668\u6570\u636e\u8fd8\u4f1a\u5b58\u50a8\u5728SD\u5361\u4e2d\u3002",o={unversionedId:"zh-CN/Sensor/Wio_Terminal/Tutorial/CN-Wio-Terminal-Storting-Analog-Data",id:"zh-CN/Sensor/Wio_Terminal/Tutorial/CN-Wio-Terminal-Storting-Analog-Data",title:"Wio Terminal \u5b58\u50a8\u6570\u636e",description:"Wio Terminal Storing Data",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Tutorial/CN-Wio-Terminal-Storting-Analog-Data.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal/Tutorial",slug:"/cn/Wio-Terminal-Storting-Analog-Data",permalink:"/cn/Wio-Terminal-Storting-Analog-Data",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Tutorial/CN-Wio-Terminal-Storting-Analog-Data.md",tags:[],version:"current",lastUpdatedBy:"jessie",lastUpdatedAt:1709769600,formattedLastUpdatedAt:"Mar 7, 2024",frontMatter:{description:"Wio Terminal Storing Data",title:"Wio Terminal \u5b58\u50a8\u6570\u636e",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-Storting-Analog-Data",last_update:{date:"3/07/2024",author:"jessie"}},sidebar:"CNSidebar",previous:{title:"Wio Terminal \u663e\u793a\u9640\u87ba\u4eea",permalink:"/cn/Wio-Terminal-Displaying-Gyro"},next:{title:"Wio Terminal \u663e\u793a\u56fe\u7247",permalink:"/cn/Wio-Terminal-Displaying-Photos"}},s={},g=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:3},{value:"Arduino\u6307\u4ee4",id:"arduino\u6307\u4ee4",level:2},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2},{value:"\u5b8c\u6574\u4ee3\u7801",id:"\u5b8c\u6574\u4ee3\u7801",level:2}],p={toc:g},d="wrapper";function h(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,i.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u6b64\u793a\u4f8b\u6f14\u793a\u5982\u4f55\u4f7f\u7528\u7ebf\u56fe\u51fd\u6570\u5728wio-terminal\u4e0a\u663e\u793agrove-\u5149\u4f20\u611f\u5668\u7684\u8bfb\u6570\u5c31\u50cf\u4e32\u884c\u7ed8\u56fe\u5668\u4e00\u6837\u6b64\u5916\u5149\u4f20\u611f\u5668\u6570\u636e\u8fd8\u4f1a\u5b58\u50a8\u5728sd\u5361\u4e2d"},"\u6b64\u793a\u4f8b\u6f14\u793a\u5982\u4f55\u4f7f\u7528\u7ebf\u56fe\u51fd\u6570\u5728Wio Terminal\u4e0a\u663e\u793aGrove-\u5149\u4f20\u611f\u5668\u7684\u8bfb\u6570\uff0c\u5c31\u50cf\u4e32\u884c\u7ed8\u56fe\u5668\u4e00\u6837\uff01\u6b64\u5916\uff0c\u5149\u4f20\u611f\u5668\u6570\u636e\u8fd8\u4f1a\u5b58\u50a8\u5728SD\u5361\u4e2d\u3002"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0282.2019-11-28%2018_28_03.gif"})),(0,a.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.yg)("p",null,"\u6b64\u793a\u4f8b\u6f14\u793a\u5982\u4f55\u4f7f\u7528\u7ebf\u56fe\u51fd\u6570\u5728Wio Terminal\u4e0a\u663e\u793aGrove-\u5149\u4f20\u611f\u5668\u7684\u8bfb\u6570\uff0c\u5c31\u50cf\u4e32\u884c\u7ed8\u56fe\u5668\u4e00\u6837\uff01\u6b64\u5916\uff0c\u5149\u4f20\u611f\u5668\u6570\u636e\u8fd8\u4f1a\u5b58\u50a8\u5728SD\u5361\u4e2d\u3002"),(0,a.yg)("h3",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u8bfb\u53d6\u5149\u4f20\u611f\u5668\u6570\u503c\u5e76\u7ed8\u5236\u6210\u7ebf\u56fe\u3002")),(0,a.yg)("p",null,"##\u9700\u8981\u7684Arduino\u5e93"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5b89\u88c5\u7ebf\u56fe\u5e93 ",(0,a.yg)("inlineCode",{parentName:"p"},"Seeed_Arduino_Linechart")," \uff0c\u8bf7\u8bbf\u95ee  ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/"},"Line Charts")," \u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Install the SD Library, please visit ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-FS-Overview/"},"FS")," for more information."))),(0,a.yg)("h2",{id:"arduino\u6307\u4ee4"},"Arduino\u6307\u4ee4"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5f3a\u70c8\u5efa\u8bae\u5148\u9605\u8bfb ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/"},"Line Charts")," \u5e76\u719f\u6089\u793a\u4f8b\u4ee3\u7801\u4e4b\u524d\u7684\u5185\u5bb9\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u4e0b\u8f7d ",(0,a.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/LightReadings.ino.zip"},(0,a.yg)("inlineCode",{parentName:"a"},"LightReadings.ino"))," \u6587\u4ef6\uff0c\u5e76\u901a\u8fc7",(0,a.yg)("inlineCode",{parentName:"p"},"Arduino IDE"),"\u4e0a\u4f20\u5230Wio Terminal\u3002\u786e\u4fdd\u5df2\u5b89\u88c5\u6240\u6709\u5e93\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6539\u53d8\u5468\u56f4\u7684\u4eae\u5ea6\u5e76\u89c2\u5bdf\u7ebf\u56fe\u7684\u53d8\u5316\uff01")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6a21\u62df\u8bfb\u6570\u53ef\u4ee5\u5728SD\u5361\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readings.txt")," \u6587\u4ef6\u4e2d\u627e\u5230\u3002"))),(0,a.yg)("h2",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u521d\u59cb\u5316LCD\u548c\u6a21\u62df\u7aef\u53e3"))),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:350,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-29.jpg"})),(0,a.yg)("p",null,"\u6b63\u5982\u6211\u4eec\u6240\u89c1\uff0cWio Terminal\u6709\u4e24\u4e2aGrove\u7aef\u53e3\uff0c\u4e00\u4e2a\u662f\u9ed8\u8ba4\u7684I2C\u7aef\u53e3\uff0c\u53e6\u4e00\u4e2a\u662f\u53ef\u914d\u7f6e\u7684\u6570\u5b57D0\u3001D1\u6216\u6a21\u62dfA0\u3001A1\u7aef\u53e3\uff0c\u4ee5\u53caUART\u7aef\u53e3\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u9700\u8981\u6a21\u62df\u7aef\u53e3\u4f5c\u4e3a\u6a21\u62df\u8f93\u5165\u3002"),(0,a.yg)("p",null,"\u540c\u65f6\uff0c\u521d\u59cb\u5316SD\u5361\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <SPI.h>\n#include <Seeed_FS.h>\n#include "SD/Seeed_SD.h"\n#include"seeed_line_chart.h" //include the library\n\nFile myFile;\nTFT_eSPI tft;\nTFT_eSprite spr = TFT_eSprite(&tft);  // Sprite \n\n#define max_size 30 //maximum size of data\ndoubles data; //Initilising a doubles type to store data\nint brightness;\n\nvoid setup() {\n    Serial.begin(115200);\n    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {\n        Serial.println("initialization failed!");\n        while(1);\n  }\n    pinMode(A0, INPUT);\n    tft.begin();\n    tft.setRotation(3);\n    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u8bfb\u53d6\u4f20\u611f\u5668\u6570\u503c\u548c\u52a0\u8f7d\u6570\u636e"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"void loop() {\n    spr.fillSprite(TFT_WHITE);\n    brightness = analogRead(A0);\n    int brightness = analogRead(LIGHT); //Reading light sensor values\n\n    if (data.size() == max_size) {\n        data.pop();//this is used to remove the first read variable\n    }\n    data.push(brightness); //Storing light sensor values\n    saveData(); //Saving data to SD card\n    ...\n}\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6807\u9898\u914d\u7f6e"))),(0,a.yg)("p",null,"\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/"},"Line Charts")," \u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'//Settings for the line graph title\nauto header =  text(0, 0)\n            .value("Light Sensor Readings")\n            .align(center)\n            .valign(vcenter)\n            .width(tft.width())\n            .thickness(2);\n\nheader.height(header.font_height() * 2);\nheader.draw(); //Header height is the twice the height of the font\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6298\u7ebf\u56fe\u914d\u7f6e"))),(0,a.yg)("p",null,"\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/"},"Line Charts")," \u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"//Settings for the line graph\nauto content = line_chart(20, header.height()); //(x,y) where the line graph begins\n        content\n            .height(tft.height() - header.height() * 1.5) //actual height of the line chart\n            .width(tft.width() - content.x() * 2) //actual width of the line chart\n            .based_on(0.0) //Starting point of y-axis, must be a float\n            .show_circle(false) //drawing a cirle at each point, default is on.\n            .value(data) //passing through the data to line graph\n            .color(TFT_RED) //Setting the color for the line\n            .draw();\n\nspr.pushSprite(0, 0);\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u5c06\u6570\u636e\u5199\u5165SD\u5361"))),(0,a.yg)("p",null,"\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-FS-ReadWrite/"},"Reading/Writing from the SD Card")," \u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'void saveData(){\n     myFile = SD.open("Readings.txt",FILE_APPEND);\n     brightness = analogRead(A0);\n     Serial.println(brightness);\n     myFile.println(brightness);\n     myFile.close();\n}\n')),(0,a.yg)("h2",{id:"\u5b8c\u6574\u4ee3\u7801"},"\u5b8c\u6574\u4ee3\u7801"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'##include <SPI.h>\n#include <Seeed_FS.h>\n#include "SD/Seeed_SD.h"\n#include"seeed_line_chart.h" //include the library\n\nFile myFile;\nTFT_eSPI tft;\nTFT_eSprite spr = TFT_eSprite(&tft);  // Sprite \n\n#define max_size 30 //maximum size of data\ndoubles data; //Initilising a doubles type to store data\nint brightness;\n\nvoid setup() {\n    Serial.begin(115200);\n    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {\n        Serial.println("initialization failed!");\n        while(1);\n  }\n    pinMode(A0, INPUT);\n    tft.begin();\n    tft.setRotation(3);\n    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);\n}\n\nvoid loop() {\n    spr.fillSprite(TFT_WHITE);\n    brightness = analogRead(A0);\n\n    if (data.size() == max_size) {\n        data.pop();//this is used to remove the first read variable\n    }\n    data.push(brightness); //read variables and store in data\n    saveData();\n\n    //Settings for the line graph title\n    auto header =  text(0, 0)\n                .value("Light Sensor Readings")\n                .align(center)\n                .valign(vcenter)\n                .width(tft.width())\n                .thickness(2);\n\n    header.height(header.font_height() * 2);\n    header.draw(); //Header height is the twice the height of the font\n\n  //Settings for the line graph\n    auto content = line_chart(20, header.height()); //(x,y) where the line graph begins\n         content\n                .height(tft.height() - header.height() * 1.5) //actual height of the line chart\n                .width(tft.width() - content.x() * 2) //actual width of the line chart\n                .based_on(0.0) //Starting point of y-axis, must be a float\n                .show_circle(false) //drawing a cirle at each point, default is on.\n                .value(data) //passing through the data to line graph\n                .color(TFT_RED) //Setting the color for the line\n                .draw();\n\n    spr.pushSprite(0, 0);\n}\n\nvoid saveData(){\n     myFile = SD.open("Readings.txt",FILE_APPEND);\n     brightness = analogRead(A0);\n     Serial.println(brightness);\n     myFile.println(brightness);\n     myFile.close();\n}\n')))}h.isMDXComponent=!0}}]);