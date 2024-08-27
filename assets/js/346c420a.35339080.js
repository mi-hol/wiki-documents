"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[93808],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>u});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=p(a),m=n,u=g["".concat(s,".").concat(m)]||g[m]||c[m]||i;return a?r.createElement(u,o(o({ref:t},d),{},{components:a})):r.createElement(u,o({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},16290:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(9668),n=(a(96540),a(15680));const i={description:"Covers the device's construction and operation, detailing how each component contributes to the SenseCAP Indicator's overall functionality.",title:"Dive into the Hardware",keywords:["Indicator Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_Dive_into_the_Hardware",sidebar_position:1,last_update:{date:"11/17/2023",author:"Spencer"}},o="**Overview**",l={unversionedId:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Dive_into_the_Hardware",id:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Dive_into_the_Hardware",title:"Dive into the Hardware",description:"Covers the device's construction and operation, detailing how each component contributes to the SenseCAP Indicator's overall functionality.",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Dive_into_the_Hardware.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial",slug:"/SenseCAP_Indicator_Dive_into_the_Hardware",permalink:"/SenseCAP_Indicator_Dive_into_the_Hardware",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Dive_into_the_Hardware.md",tags:[],version:"current",lastUpdatedBy:"Spencer",lastUpdatedAt:1700179200,formattedLastUpdatedAt:"Nov 17, 2023",sidebarPosition:1,frontMatter:{description:"Covers the device's construction and operation, detailing how each component contributes to the SenseCAP Indicator's overall functionality.",title:"Dive into the Hardware",keywords:["Indicator Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_Dive_into_the_Hardware",sidebar_position:1,last_update:{date:"11/17/2023",author:"Spencer"}},sidebar:"ProductSidebar",previous:{title:"Development Tutorial",permalink:"/Develop_with_SenseCAP_Indicator"},next:{title:"BLE",permalink:"/SenseCAP_Indicator_ESP32_BLE"}},s={},p=[{value:"<strong>Hardware Diagram</strong>",id:"hardware-diagram",level:2},{value:"<strong>ESP32-S3</strong>",id:"esp32-s3",level:2},{value:"<strong>RP2040</strong>",id:"rp2040",level:2},{value:"<strong>ESP32-S3 and RP2040 Communication</strong>",id:"esp32-s3-and-rp2040-communication",level:2}],d={toc:p},g="wrapper";function c(e){let{components:t,...a}=e;return(0,n.yg)(g,(0,r.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"overview"},(0,n.yg)("strong",{parentName:"h1"},"Overview")),(0,n.yg)("p",null,"The SenseCAP Indicator is a 4-inch touch screen device that is powered by the ESP32 and RP2040 dual MCUs. ESP32 and RP2040 are both highly capable microcontrollers that offer a range of features and functions."),(0,n.yg)("p",null,"This chapter will provide detailed information about ESP32 and RP2040 of SenseCAP Indicator, including their functions and usage. It covers include programming, interfacing with sensors, and communicating with other devices\uff0cetc."),(0,n.yg)("h1",{id:"dive-into-the-hardware"},(0,n.yg)("strong",{parentName:"h1"},"Dive into the Hardware")),(0,n.yg)("h2",{id:"hardware-diagram"},(0,n.yg)("strong",{parentName:"h2"},"Hardware Diagram")),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"})),(0,n.yg)("p",null,"As shown in the figure, the SenseCAP Indicator is primarily driven by the ESP32 and RP2040 MCUs, which are connected to the LoRa transceiver, LCD, and other peripheral circuits.\nIn the following sections, we will provide an overview of the ESP32 and RP2040 development and their respective capabilities."),(0,n.yg)("h2",{id:"esp32-s3"},(0,n.yg)("strong",{parentName:"h2"},"ESP32-S3")),(0,n.yg)("p",null,"ESP32-S3 is a highly integrated system-on-chip (SoC) that combines a powerful CPU, 2.4 GHz Wi-Fi, and Bluetooth 5.0 capabilities, also includes a range of input/output pins and interfaces, such as UART, SPI, I2C, and PWM, which allow it to interface with other devices and sensors."),(0,n.yg)("h2",{id:"rp2040"},(0,n.yg)("strong",{parentName:"h2"},"RP2040")),(0,n.yg)("p",null,"SenseCAP Indicator is embeded with ",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html?"},"RP2040"),", RP2040 features a dual-core ARM Cortex-M0+ processor with clock speeds up to 133 MHz, 264KB of RAM, and a range of peripherals such as USB, UART, SPI, and I2C. It also includes a unique feature called Programmable I/O (PIO), which allows users to implement custom digital interfaces without the need for specialized hardware."),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/rppinout.png"})),(0,n.yg)("h2",{id:"esp32-s3-and-rp2040-communication"},(0,n.yg)("strong",{parentName:"h2"},"ESP32-S3 and RP2040 Communication")),(0,n.yg)("p",null,"ESP32 and RP2040 use serial port communication, using the ",(0,n.yg)("a",{parentName:"p",href:"http://www.stuartcheshire.org/papers/COBSforToN.pdf"},"COBS")," communication protocol."),(0,n.yg)("p",null,"Libraries used in ESP32:  ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/cmcqueen/cobs-c"},"https://github.com/cmcqueen/cobs-c"),"\nArduino library used by RP2040:  ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/bakercp/PacketSerial"},"https://github.com/bakercp/PacketSerial")),(0,n.yg)("p",null,"In the terminal demo, the following data frames are used for transmission\uff1a"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Byte0"),(0,n.yg)("th",{parentName:"tr",align:null},"Byte1-4"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"PKT_TYPE"),(0,n.yg)("td",{parentName:"tr",align:null},"PKT_PARA (Little Endia)")))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"PKT_TYPE list")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Note"),": The following commands are for reference only, of course you can also define your own commands."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"PKT_TYPE"),(0,n.yg)("th",{parentName:"tr",align:"left"},"DIR"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"0x00"),(0,n.yg)("td",{parentName:"tr",align:"left"},"ESP32<->RP2040"),(0,n.yg)("td",{parentName:"tr",align:"left"},"ACK, string, value:'ACK'")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"0xA0"),(0,n.yg)("td",{parentName:"tr",align:"left"},"ESP32->RP2040"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Collect Interval CMD, PKT_PARA is uint32_t")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"0xA1"),(0,n.yg)("td",{parentName:"tr",align:"left"},"ESP32->RP2040"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Beep on CMD, PKT_PARA is uint32_t")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"0xA2"),(0,n.yg)("td",{parentName:"tr",align:"left"},"ESP32->RP2040"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Beep off CMD, PKT_PARA is uint32_t")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"0xA3"),(0,n.yg)("td",{parentName:"tr",align:"left"},"ESP32->RP2040"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Shutdown CMD, PKT_PARA is uint32_t")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"0xA4"),(0,n.yg)("td",{parentName:"tr",align:"left"},"ESP32->RP2040"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Power On CMD, PKT_PARA is uint32_t")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"0xA0~0xAF"),(0,n.yg)("td",{parentName:"tr",align:"left"},"ESP32->RP2040"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Other data or cmd")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"0xB0"),(0,n.yg)("td",{parentName:"tr",align:"left"},"RP2040->ESP32"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SCD41 Temperature data, PKT_PARA is float")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"0xB1"),(0,n.yg)("td",{parentName:"tr",align:"left"},"RP2040->ESP32"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SCD41 Humidity data, PKT_PARA is float")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"0xB2"),(0,n.yg)("td",{parentName:"tr",align:"left"},"RP2040->ESP32"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SCD41 CO2 data, PKT_PARA is float")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"0xB3"),(0,n.yg)("td",{parentName:"tr",align:"left"},"RP2040->ESP32"),(0,n.yg)("td",{parentName:"tr",align:"left"},"ATH20 Temperature data, PKT_PARA is float")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"0xB4"),(0,n.yg)("td",{parentName:"tr",align:"left"},"RP2040->ESP32"),(0,n.yg)("td",{parentName:"tr",align:"left"},"ATH20 Humidity data, PKT_PARA is float")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"0xB5"),(0,n.yg)("td",{parentName:"tr",align:"left"},"RP2040->ESP32"),(0,n.yg)("td",{parentName:"tr",align:"left"},"SGP40 tVOC data, PKT_PARA is float. 0~500 index")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"0xB6~0xBF"),(0,n.yg)("td",{parentName:"tr",align:"left"},"RP2040->ESP32"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Other data or cmd, PKT_PARA is float")))),(0,n.yg)("h1",{id:"tech-support"},(0,n.yg)("strong",{parentName:"h1"},"Tech Support")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Need help with your SenseCAP Indicator? We're here to assist you!")),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.com/invite/QqMgVwHT3X",class:"button_tech_support_sensecap"}),(0,n.yg)("a",{href:"https://support.sensecapmx.com/portal/en/home",class:"button_tech_support_sensecap3"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"mailto:support@sensecapmx.com",class:"button_tech_support_sensecap2"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);