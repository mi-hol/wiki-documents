"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4601],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>h});var i=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),g=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=g(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=g(n),u=r,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||a;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var g=2;g<a;g++)o[g]=n[g];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>g});var i=n(9668),r=(n(96540),n(15680));const a={description:"Grove - Digital Light Sensor",title:"Grove - Digital Light Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Digital_Light_Sensor",last_update:{date:"1/5/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Light/Grove-Digital_Light_Sensor",id:"Sensor/Grove/Grove_Sensors/Light/Grove-Digital_Light_Sensor",title:"Grove - Digital Light Sensor",description:"Grove - Digital Light Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Light/Grove-Digital_Light_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Light",slug:"/Grove-Digital_Light_Sensor",permalink:"/Grove-Digital_Light_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Light/Grove-Digital_Light_Sensor.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{description:"Grove - Digital Light Sensor",title:"Grove - Digital Light Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Digital_Light_Sensor",last_update:{date:"1/5/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Sensor - Light(introduction)",permalink:"/Sensor_light"},next:{title:"Grove - Heelight Sensor",permalink:"/Grove-Heelight_Sensor"}},s={},g=[{value:"Version",id:"version",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:g},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,i.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/hardware%20overview.jpg"})),(0,r.yg)("p",null,"This module is based on the I2C light-to-digital converter TSL2561 to transform light intensity to a digital signal. Different from traditional analog light sensor, as ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/grove-light-sensorp-p-1253.html?cPath=144_148"},"Grove - Light Sensor"),", this digital module features a selectable light spectrum range due to its dual light sensitive diodes: infrared and full spectrum."),(0,r.yg)("p",null,"We can switch among three detection modes to take your readings. They are infrared mode, full spectrum and human visible mode. When running under the human visible mode, this sensor will give you readings just close to your eye feelings."),(0,r.yg)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/4df5kaaKa6I",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("a",{href:"https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html",target:"_blank"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png"}))),(0,r.yg)("h2",{id:"version"},"Version"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Product Version"),(0,r.yg)("th",{parentName:"tr",align:null},"Changes"),(0,r.yg)("th",{parentName:"tr",align:null},"Released Date"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Grove - Digital Light Sensor V1.1"),(0,r.yg)("td",{parentName:"tr",align:null},"Initial"),(0,r.yg)("td",{parentName:"tr",align:null},"Oct 2015")))),(0,r.yg)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,r.yg)("p",null,"With the SenseCAP ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,r.yg)("p",null,"SenseCAP S210x series industrial sensors provide an out-of-box experience for environmental sensing. Please refer to the S2102 Wireless Light Intensity Sensor with higher performance and robustness for light intensity detection. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," for your next successful industrial project."),(0,r.yg)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",{align:"center"},(0,r.yg)("font",{size:4},(0,r.yg)("strong",null,"SenseCAP Industrial Sensor")))),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"}),(0,r.yg)("div",{align:"center"},(0,r.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,r.yg)("img",{width:"20%",src:"https://files.seeedstudio.com/wiki/K1100_overview/S2102-.png"}))))),(0,r.yg)("tr",null,(0,r.yg)("td",{align:"center"},(0,r.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,r.yg)("strong",null,"S2102 Light")))))),(0,r.yg)("h2",{id:"features"},"Features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Selectable detection modes"),(0,r.yg)("li",{parentName:"ul"},"High resolution 16-Bit digital output at 400 kHz I2C Fast-Mode"),(0,r.yg)("li",{parentName:"ul"},"Wide dynamic range: 0.1 - 40,000 LUX"),(0,r.yg)("li",{parentName:"ul"},"Wide operating temperature range: -40\xb0C to 85\xb0C"),(0,r.yg)("li",{parentName:"ul"},"Programmable interrupt function with User-Defined Upper and lower threshold settings"),(0,r.yg)("li",{parentName:"ul"},"I2C Address  0x29")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"If you want to use multiplue I2C devices, please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Arduino_Software_I2C_user_guide/"},"Software I2C"),".")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,r.yg)("h2",{id:"specifications"},"Specifications"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Items"),(0,r.yg)("th",{parentName:"tr",align:null},"Min\xa0\xa0"),(0,r.yg)("th",{parentName:"tr",align:null},"\xa0Typical\xa0"),(0,r.yg)("th",{parentName:"tr",align:null},"\xa0 Max"),(0,r.yg)("th",{parentName:"tr",align:null},"Unit"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Supply voltage, VDD"),(0,r.yg)("td",{parentName:"tr",align:null},"3.3\xa0\xa0"),(0,r.yg)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0 5\xa0\xa0\xa0\xa0"),(0,r.yg)("td",{parentName:"tr",align:null},"\xa0 5.1"),(0,r.yg)("td",{parentName:"tr",align:null},"V")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Operating temperature"),(0,r.yg)("td",{parentName:"tr",align:null},"-30\xa0\xa0"),(0,r.yg)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0 \\\xa0\xa0\xa0"),(0,r.yg)("td",{parentName:"tr",align:null},"\xa0\xa070"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2103")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SCL,SDA input low voltage"),(0,r.yg)("td",{parentName:"tr",align:null},"-0.5\xa0"),(0,r.yg)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0 \\\xa0\xa0\xa0\xa0"),(0,r.yg)("td",{parentName:"tr",align:null},"\xa00.8"),(0,r.yg)("td",{parentName:"tr",align:null},"V")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SCL,SDA input high voltage"),(0,r.yg)("td",{parentName:"tr",align:null},"2.3\xa0\xa0"),(0,r.yg)("td",{parentName:"tr",align:null},"\xa0\xa0\xa0\xa0 \\\xa0\xa0\xa0\xa0"),(0,r.yg)("td",{parentName:"tr",align:null},"\xa0\xa05.1"),(0,r.yg)("td",{parentName:"tr",align:null},"V")))),(0,r.yg)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,r.yg)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,r.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"U1:")," TSL2561 IC, Light-To-Digital Converter. Here is the Functional Block Diagram."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/Functional_Block_Diagram_2.jpg"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Register Map")),(0,r.yg)("p",{parentName:"li"},"The TSL2561 is controlled and monitored by sixteen registers (three are reserved) and a command register accessed through the serial interface. These registers provide for a variety of control functions and can be read to determine results of the ADC conversions. The register set is summarised as shown below."))),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/Register.jpg"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Spectrum Response Curve"))),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/Spectral_responsivity.jpg"})),(0,r.yg)("p",null,"  Two channels of the digital light sensor have different response characteristic. That's why you can choose its working mode by having both of them on or one of them off."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"U3:")," XC6206MR332 IC, Positive Voltage Regulators."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Q1,Q2:")," BSN20 IC, N-channel Enhancement Mode Vertical D-MOS Transistor."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"SCL,SDA:")," I2C Signal Interface"),(0,r.yg)("h2",{id:"getting-started"},"Getting Started"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we firmly recommend you to see ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,r.yg)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,r.yg)("h4",{id:"hardware"},"Hardware"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Seeeduino V4"),(0,r.yg)("th",{parentName:"tr",align:null},"Base Shield"),(0,r.yg)("th",{parentName:"tr",align:null},"Grove - Digital light sensor"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/digital%20light%20sensor_small.jpg"})))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get ONE Now")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html"},"Get ONE Now"))))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 2.")," Connect Grove - Digital light Sensor to ",(0,r.yg)("strong",{parentName:"li"},"I2C")," port of base shield."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 3.")," Plug the base Shield into Arduino."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 4.")," Connect Arduino to PC by using a USB cable.")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/arduino%20connection.jpg"})),(0,r.yg)("h4",{id:"software"},"Software"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 1.")," Download the library from here ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_Digital_Light_Sensor/archive/master.zip"},"Digital Light Sensor Library"),";"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 2.")," Please follow ",(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"how to install an arduino library")," procedures to install library."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 3.")," Open the code directly by the path: ",(0,r.yg)("strong",{parentName:"li"},"File -> Example ->Digital_Light_Sensor->Digital_Light_Sensor"),".")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/library%20example.jpg"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Or copy below code to IDE and upload to Arduino.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},'/*\n    Digital_Light_Sensor.ino\n    A library for TSL2561\n\n    Copyright (c) 2012 seeed technology inc.\n    Author    \xa0: zhangkun\n    Create Time:\n    Change Log\xa0:\n\n    The MIT License (MIT)\n\n    Permission is hereby granted, free of charge, to any person obtaining a copy\n    of this software and associated documentation files (the "Software"), to deal\n    in the Software without restriction, including without limitation the rights\n    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n    copies of the Software, and to permit persons to whom the Software is\n    furnished to do so, subject to the following conditions:\n\n    The above copyright notice and this permission notice shall be included in\n    all copies or substantial portions of the Software.\n\n    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n    THE SOFTWARE.\n*/\n\n#include <Wire.h>\n#include <Digital_Light_TSL2561.h>\nvoid setup()\n{\n  Wire.begin();\n  Serial.begin(9600);\n  TSL2561.init();\n}\n\nvoid loop()\n{\n  Serial.print("The Light value is: ");\n  Serial.println(TSL2561.readVisibleLux());\n  delay(1000);\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 4.")," Open the serial monitor to monitor the result.")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/Digital_Light_Sensor_Score_Picture.jpg"})),(0,r.yg)("h3",{id:"play-with-raspberry-pi"},"Play With Raspberry Pi"),(0,r.yg)("h4",{id:"hardware-1"},"Hardware"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,r.yg)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,r.yg)("th",{parentName:"tr",align:null},"Grove - Digital light sensor"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/digital%20light%20sensor_small.jpg"})))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get ONE Now")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html"},"Get ONE Now"))))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Follow ",(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/GrovePi_Plus/"},"instruction")," to configure the development environment."),(0,r.yg)("li",{parentName:"ul"},"Plug the sensor to grovepi+ socket ",(0,r.yg)("strong",{parentName:"li"},"I2C")," by using a grove cable.")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/pi%20connection.jpg"})),(0,r.yg)("h4",{id:"software-1"},"Software"),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"If you are using ",(0,r.yg)("strong",{parentName:"p"},"Raspberry Pi with Raspberrypi OS >= Bullseye"),", you have to use this command line ",(0,r.yg)("strong",{parentName:"p"},"only with Python3"),".")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 1.")," Follow ",(0,r.yg)("a",{parentName:"p",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 1.")," Navigate to the demos' directory:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cd yourpath/GrovePi/Software/Python/grove_i2c_digital_light_sensor/\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 2.")," To see the code")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'nano grove_i2c_digital_light_sensor.py  # "Ctrl+x" to exit #\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-py"},'#!/usr/bin/python\n# TSL2561 I2C Light-To-Digital converter library for the Raspberry Pi.\n# Datasheet: https://www.adafruit.com/datasheets/TSL2561.pdf\n#\n# This library is based on the work by Cedric Maion https://github.com/cmaion/TSL2561\n#\n# Read http://www.dexterindustries.com/topic/greehouse-project/ for the forum discussion about the sensor\n\nfrom time import sleep\nimport smbus\nfrom Adafruit_I2C import Adafruit_I2C\nimport RPi.GPIO as GPIO\nfrom smbus import SMBus\n\nTSL2561_Control = 0x80\nTSL2561_Timing = 0x81\nTSL2561_Interrupt = 0x86\nTSL2561_Channel0L = 0x8C\nTSL2561_Channel0H = 0x8D\nTSL2561_Channel1L = 0x8E\nTSL2561_Channel1H = 0x8F\n\nTSL2561_Address = 0x29 #device address\n\nLUX_SCALE = 14 # scale by 2^14\nRATIO_SCALE = 9 # scale ratio by 2^9\nCH_SCALE = 10 # scale channel values by 2^10\nCHSCALE_TINT0 = 0x7517 # 322/11 * 2^CH_SCALE\nCHSCALE_TINT1 = 0x0fe7 # 322/81 * 2^CH_SCALE\n\nK1T = 0x0040 # 0.125 * 2^RATIO_SCALE\nB1T = 0x01f2 # 0.0304 * 2^LUX_SCALE\nM1T = 0x01be # 0.0272 * 2^LUX_SCALE\nK2T = 0x0080 # 0.250 * 2^RATIO_SCA\nB2T = 0x0214 # 0.0325 * 2^LUX_SCALE\nM2T = 0x02d1 # 0.0440 * 2^LUX_SCALE\nK3T = 0x00c0 # 0.375 * 2^RATIO_SCALE\nB3T = 0x023f # 0.0351 * 2^LUX_SCALE\nM3T = 0x037b # 0.0544 * 2^LUX_SCALE\nK4T = 0x0100 # 0.50 * 2^RATIO_SCALE\nB4T = 0x0270 # 0.0381 * 2^LUX_SCALE\nM4T = 0x03fe # 0.0624 * 2^LUX_SCALE\nK5T = 0x0138 # 0.61 * 2^RATIO_SCALE\nB5T = 0x016f # 0.0224 * 2^LUX_SCALE\nM5T = 0x01fc # 0.0310 * 2^LUX_SCALE\nK6T = 0x019a # 0.80 * 2^RATIO_SCALE\nB6T = 0x00d2 # 0.0128 * 2^LUX_SCALE\nM6T = 0x00fb # 0.0153 * 2^LUX_SCALE\nK7T = 0x029a # 1.3 * 2^RATIO_SCALE\nB7T = 0x0018 # 0.00146 * 2^LUX_SCALE\nM7T = 0x0012 # 0.00112 * 2^LUX_SCALE\nK8T = 0x029a # 1.3 * 2^RATIO_SCALE\nB8T = 0x0000 # 0.000 * 2^LUX_SCALE\nM8T = 0x0000 # 0.000 * 2^LUX_SCALE\n\n\n\nK1C = 0x0043 # 0.130 * 2^RATIO_SCALE\nB1C = 0x0204 # 0.0315 * 2^LUX_SCALE\nM1C = 0x01ad # 0.0262 * 2^LUX_SCALE\nK2C = 0x0085 # 0.260 * 2^RATIO_SCALE\nB2C = 0x0228 # 0.0337 * 2^LUX_SCALE\nM2C = 0x02c1 # 0.0430 * 2^LUX_SCALE\nK3C = 0x00c8 # 0.390 * 2^RATIO_SCALE\nB3C = 0x0253 # 0.0363 * 2^LUX_SCALE\nM3C = 0x0363 # 0.0529 * 2^LUX_SCALE\nK4C = 0x010a # 0.520 * 2^RATIO_SCALE\nB4C = 0x0282 # 0.0392 * 2^LUX_SCALE\nM4C = 0x03df # 0.0605 * 2^LUX_SCALE\nK5C = 0x014d # 0.65 * 2^RATIO_SCALE\nB5C = 0x0177 # 0.0229 * 2^LUX_SCALE\nM5C = 0x01dd # 0.0291 * 2^LUX_SCALE\nK6C = 0x019a # 0.80 * 2^RATIO_SCALE\nB6C = 0x0101 # 0.0157 * 2^LUX_SCALE\nM6C = 0x0127 # 0.0180 * 2^LUX_SCALE\nK7C = 0x029a # 1.3 * 2^RATIO_SCALE\nB7C = 0x0037 # 0.00338 * 2^LUX_SCALE\nM7C = 0x002b # 0.00260 * 2^LUX_SCALE\nK8C = 0x029a # 1.3 * 2^RATIO_SCALE\nB8C = 0x0000 # 0.000 * 2^LUX_SCALE\nM8C = 0x0000 # 0.000 * 2^LUX_SCALE\n\n# bus parameters\nrev = GPIO.RPI_REVISION\nif rev == 2 or rev == 3:\n bus = smbus.SMBus(1)\nelse:\n bus = smbus.SMBus(0)\ni2c = Adafruit_I2C(TSL2561_Address)\n\ndebug = False\ncooldown_time = 0.005 # measured in seconds\npackageType = 0 # 0=T package, 1=CS package\ngain = 0        # current gain: 0=1x, 1=16x [dynamically selected]\ngain_m = 1      # current gain, as multiplier\ntiming = 2      # current integration time: 0=13.7ms, 1=101ms, 2=402ms [dynamically selected]\ntiming_ms = 0   # current integration time, in ms\nchannel0 = 0    # raw current value of visible+ir sensor\nchannel1 = 0    # raw current value of ir sensor\nschannel0 = 0   # normalized current value of visible+ir sensor\nschannel1 = 0   # normalized current value of ir sensor\n\n\ndef readRegister(address):\n try:\n  byteval = i2c.readU8(address)\n\n  sleep(cooldown_time)\n  if (debug):\n   print("TSL2561.readRegister: returned 0x%02X from reg 0x%02X" % (byteval, address))\n  return byteval\n except IOError:\n  print("TSL2561.readRegister: error reading byte from reg 0x%02X" % address)\n  return -1\n\n\ndef writeRegister(address, val):\n try:\n  i2c.write8(address, val)\n\n  sleep(cooldown_time)\n  if (debug):\n   print("TSL2561.writeRegister: wrote 0x%02X to reg 0x%02X" % (val, address))\n except IOError:\n\n  sleep(cooldown_time)\n  print("TSL2561.writeRegister: error writing byte to reg 0x%02X" % address)\n  return -1\n\ndef powerUp():\n writeRegister(TSL2561_Control, 0x03)\n\ndef powerDown():\n writeRegister(TSL2561_Control, 0x00)\n\ndef setTintAndGain():\n global gain_m, timing_ms\n\n if gain == 0:\n  gain_m = 1\n else:\n  gain_m = 16\n\n if timing == 0:\n  timing_ms = 13.7\n elif timing == 1:\n  timing_ms = 101\n else:\n  timing_ms = 402\n writeRegister(TSL2561_Timing, timing | gain << 4)\n\ndef readLux():\n sleep(float(timing_ms + 1) / 1000)\n\n ch0_low  = readRegister(TSL2561_Channel0L)\n ch0_high = readRegister(TSL2561_Channel0H)\n ch1_low  = readRegister(TSL2561_Channel1L)\n ch1_high = readRegister(TSL2561_Channel1H)\n\n global channel0, channel1\n channel0 = (ch0_high<<8) | ch0_low\n channel1 = (ch1_high<<8) | ch1_low\n\n sleep(cooldown_time)\n if debug:\n  print("TSL2561.readVisibleLux: channel 0 = %i, channel 1 = %i [gain=%ix, timing=%ims]" % (channel0, channel1, gain_m, timing_ms))\n\ndef readVisibleLux():\n global timing, gain\n\n powerUp()\n readLux()\n\n if channel0 < 500 and timing == 0:\n  timing = 1\n  sleep(cooldown_time)\n  if debug:\n   print("TSL2561.readVisibleLux: too dark. Increasing integration time from 13.7ms to 101ms")\n  setTintAndGain()\n  readLux()\n\n if channel0 < 500 and timing == 1:\n  timing = 2\n  sleep(cooldown_time)\n  if debug:\n   print("TSL2561.readVisibleLux: too dark. Increasing integration time from 101ms to 402ms")\n  setTintAndGain()\n  readLux()\n\n if channel0 < 500 and timing == 2 and gain == 0:\n  gain = 1\n  sleep(cooldown_time)\n  if debug:\n   print("TSL2561.readVisibleLux: too dark. Setting high gain")\n  setTintAndGain()\n  readLux()\n\n if (channel0 > 20000 or channel1 > 20000) and timing == 2 and gain == 1:\n  gain = 0\n  sleep(cooldown_time)\n  if debug:\n   print("TSL2561.readVisibleLux: enough light. Setting low gain")\n  setTintAndGain()\n  readLux()\n\n if (channel0 > 20000 or channel1 > 20000) and timing == 2:\n  timing = 1\n  sleep(cooldown_time)\n  if debug:\n   print("TSL2561.readVisibleLux: enough light. Reducing integration time from 402ms to 101ms")\n  setTintAndGain()\n  readLux()\n\n if (channel0 > 10000 or channel1 > 10000) and timing == 1:\n  timing = 0\n  sleep(cooldown_time)\n  if debug:\n   print("TSL2561.readVisibleLux: enough light. Reducing integration time from 101ms to 13.7ms")\n  setTintAndGain()\n  readLux()\n\n powerDown()\n\n if (timing == 0 and (channel0 > 5000 or channel1 > 5000)) or (timing == 1 and (channel0 > 37000 or channel1 > 37000)) or (timing == 2 and (channel0 > 65000 or channel1 > 65000)):\n  # overflow\n  return -1\n\n return calculateLux(channel0, channel1)\n\ndef calculateLux(ch0, ch1):\n chScale = 0\n if timing == 0:   # 13.7 msec\n  chScale = CHSCALE_TINT0\n elif timing == 1: # 101 msec\n  chScale = CHSCALE_TINT1;\n else:           # assume no scaling\n  chScale = (1 << CH_SCALE)\n\n if gain == 0:\n  chScale = chScale << 4 # scale 1X to 16X\n\n # scale the channel values\n global schannel0, schannel1\n schannel0 = (ch0 * chScale) >> CH_SCALE\n schannel1 = (ch1 * chScale) >> CH_SCALE\n\n ratio = 0\n if schannel0 != 0:\n  ratio = (schannel1 << (RATIO_SCALE+1)) / schannel0\n ratio = (ratio + 1) >> 1\n\n if packageType == 0: # T package\n  if ((ratio >= 0) and (ratio <= K1T)):\n   b=B1T; m=M1T;\n  elif (ratio <= K2T):\n   b=B2T; m=M2T;\n  elif (ratio <= K3T):\n   b=B3T; m=M3T;\n  elif (ratio <= K4T):\n   b=B4T; m=M4T;\n  elif (ratio <= K5T):\n   b=B5T; m=M5T;\n  elif (ratio <= K6T):\n   b=B6T; m=M6T;\n  elif (ratio <= K7T):\n   b=B7T; m=M7T;\n  elif (ratio > K8T):\n   b=B8T; m=M8T;\n elif packageType == 1: # CS package\n  if ((ratio >= 0) and (ratio <= K1C)):\n   b=B1C; m=M1C;\n  elif (ratio <= K2C):\n   b=B2C; m=M2C;\n  elif (ratio <= K3C):\n   b=B3C; m=M3C;\n  elif (ratio <= K4C):\n   b=B4C; m=M4C;\n  elif (ratio <= K5C):\n   b=B5C; m=M5C;\n  elif (ratio <= K6C):\n   b=B6C; m=M6C;\n  elif (ratio <= K7C):\n   b=B7C; m=M7C;\n\n temp = ((schannel0*b)-(schannel1*m))\n if temp < 0:\n  temp = 0;\n temp += (1<<(LUX_SCALE-1))\n # strip off fractional portion\n lux = temp>>LUX_SCALE\n sleep(cooldown_time)\n if debug:\n  print("TSL2561.calculateLux: %i" % lux)\n\n return lux\n\ndef init():\n powerUp()\n setTintAndGain()\n writeRegister(TSL2561_Interrupt, 0x00)\n powerDown()\n\ndef main():\n init()\n while (True):\n  print("Lux: %i [Vis+IR=%i, IR=%i @ Gain=%ix, Timing=%.1fms]" % (readVisibleLux(), channel0, channel1, gain_m, timing_ms))\n  sleep(1)\n\nif __name__ == "__main__":\n        main()\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 3.")," Run the demo.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"sudo python3 grove_i2c_digital_light_sensor.py\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 4.")," Here is the Result.")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/Grovepi_digital_light_sensor_00.png"})),(0,r.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/res/Grove-Digital%20%20light%20%20sensor%20v1.0%20eagle%20file.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.yg)("h2",{id:"resources"},"Resources"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[Eagle]")," ",(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/res/Grove-Digital%20%20light%20%20sensor%20v1.0%20eagle%20file.zip"},"Grove - Digital Light Sensor Schematic")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/res/Digital%20light%20sensor%20v1.0%20Sch.pdf"},"Grove - Digital Light Sensor Sch PDF File")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/res/Digital%20light%20sensor%20v1.0%20PCB.pdf"},"Grove - Digital Light Sensor PCB PDF File")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[Library]")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_Digital_Light_Sensor/archive/master.zip"},"Library Github Grove-Digital Light")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[Datasheet]")," ",(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/res/TSL2561T.pdf"},"TSL2561 Datasheet"))),(0,r.yg)("h2",{id:"projects"},"Projects"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Seeed LoRa IoTea Solution"),": An automatic information collection system applied to tea plantation. It is part of intelligent agricultural information collection."),(0,r.yg)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed",width:"350"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Intel Edison IoT Hydroponic Controller"),": An IoT enabled Hydroponics Controller using the Intel Edison during the Boston IoT Hackathon."),(0,r.yg)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/bltrobotics/intel-edison-iot-hydroponic-controller-d7132d/embed",width:"350"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"COI - Light Transmission Meter"),": The finished product uses the light sensor provided in the Grove Starter Kit Plus to measure change in light intensity."),(0,r.yg)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/DigitalFabber/coi-light-transmission-meter-8044fd/embed",width:"350"}),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);