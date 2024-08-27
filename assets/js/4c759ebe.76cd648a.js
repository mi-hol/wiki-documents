"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[35941],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var i=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=r,y=c["".concat(s,".").concat(g)]||c[g]||u[g]||o;return n?i.createElement(y,a(a({ref:t},d),{},{components:n})):i.createElement(y,a({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},65197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(9668),r=(n(96540),n(15680));const o={description:"Getting started with L76-L GNSS for XIAO",title:"L76-L GNSS for XIAO",keywords:["gps","gnss"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/gnss_for_xiao",last_update:{date:"10/09/2023",author:"Stephen Lo"}},a="L76-L GNSS for XIAO",l={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/gnss-for-xiao",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/gnss-for-xiao",title:"L76-L GNSS for XIAO",description:"Getting started with L76-L GNSS for XIAO",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/gnss-for-xiao.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board",slug:"/gnss_for_xiao",permalink:"/gnss_for_xiao",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/gnss-for-xiao.md",tags:[],version:"current",lastUpdatedBy:"Stephen Lo",lastUpdatedAt:1696809600,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{description:"Getting started with L76-L GNSS for XIAO",title:"L76-L GNSS for XIAO",keywords:["gps","gnss"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/gnss_for_xiao",last_update:{date:"10/09/2023",author:"Stephen Lo"}}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Features",id:"features",level:3},{value:"Specification",id:"specification",level:3},{value:"Applications",id:"applications",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware Preparation",id:"hardware-preparation",level:3},{value:"Soldering the Headers",id:"soldering-the-headers",level:4},{value:"Connecting XIAO to Expansion Board",id:"connecting-xiao-to-expansion-board",level:4},{value:"Software Preparation",id:"software-preparation",level:3},{value:"EspSoftwareSerial (Only for XIAO ESP32 series)",id:"espsoftwareserial-only-for-xiao-esp32-series",level:4},{value:"TinyGPSPlus",id:"tinygpsplus",level:4},{value:"XIAO nRF52840 Example",id:"xiao-nrf52840-example",level:2},{value:"Work without XIAO",id:"work-without-xiao",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,i.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"l76-l-gnss-for-xiao"},"L76-L GNSS for XIAO"),(0,r.yg)("admonition",{type:"danger"},(0,r.yg)("p",{parentName:"admonition"},"This product is on hold.")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://raw.githubusercontent.com/Longan-Labs/XIAO_GPS/main/IMG/back.png",alt:"pir",width:250,height:"auto"})),(0,r.yg)("p",null,"Welcome to the L76-L GNSS for XIAO - the latest addition to the XIAO product series by Seeed Studio. This GNSS module not only offers precise positioning capabilities for your projects but its seamless integration with the XIAO main controller makes it a powerful tool. Whether you're designing a mobile application, a tracking device, or simply wish to add geolocation capabilities to your project, this module is your go-to choice."),(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"/gnss_for_xiao"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("h3",{id:"features"},"Features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Multi-Constellation Support: Supports GPS, GLONASS, Galileo, and QZSS."),(0,r.yg)("li",{parentName:"ul"},"High Performance: Equipped with 33 tracking channels, 99 acquisition channels, and 210 PRN channels."),(0,r.yg)("li",{parentName:"ul"},"XIAO Compatibility: Designed for seamless integration with the XIAO main controller."),(0,r.yg)("li",{parentName:"ul"},"Flexible Connectivity: Apart from the connection with XIAO, it also provides pads like VCC, GND for broader applications.")),(0,r.yg)("h3",{id:"specification"},"Specification"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"GNSS Type: L76-L"),(0,r.yg)("li",{parentName:"ul"},"Supported Satellite Systems: GPS, GLONASS, Galileo, and QZSS."),(0,r.yg)("li",{parentName:"ul"},"Connection Port: Tailored for XIAO."),(0,r.yg)("li",{parentName:"ul"},"Connection Port for XIAO: D2/D3(TX/RX)"),(0,r.yg)("li",{parentName:"ul"},"Additional Pads: VCC, GND, TX, RX")),(0,r.yg)("h3",{id:"applications"},"Applications"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Mobile Applications: Provide precise geolocation capabilities for your mobile apps."),(0,r.yg)("li",{parentName:"ul"},"Tracking Devices: Design and build location and tracking devices."),(0,r.yg)("li",{parentName:"ul"},"Geolocation Features: Add geolocation capabilities to your projects.")),(0,r.yg)("h2",{id:"getting-started"},"Getting Started"),(0,r.yg)("p",null,"Welcome to the quick start guide for the L76-L GNSS for XIAO. This guide aims to help you set up and get started with your new GPS expansion board in conjunction with the XIAO nRF52840 main controller."),(0,r.yg)("h3",{id:"hardware-preparation"},"Hardware Preparation"),(0,r.yg)("h4",{id:"soldering-the-headers"},"Soldering the Headers"),(0,r.yg)("p",null,"Upon receiving your product, some soldering will be required. We've provided two pin headers with the package. You'll need to solder these headers onto the expansion board. "),(0,r.yg)("h4",{id:"connecting-xiao-to-expansion-board"},"Connecting XIAO to Expansion Board"),(0,r.yg)("p",null,"Once the soldering is complete, you can proceed to connect the expansion board to the XIAO main controller."),(0,r.yg)("h3",{id:"software-preparation"},"Software Preparation"),(0,r.yg)("h4",{id:"espsoftwareserial-only-for-xiao-esp32-series"},"EspSoftwareSerial (Only for XIAO ESP32 series)"),(0,r.yg)("p",null,"If you are using the XIAO ESP32 series as a master, then you may need to download the library for the soft serial port separately."),(0,r.yg)("div",{class:"github_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"github_item",href:"https://www.arduino.cc/reference/en/libraries/espsoftwareserial/"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"},"Download the Libraries")))," ",(0,r.yg)("svg",{"aria-hidden":"true",focusable:"false",role:"img",className:"mr-2",viewBox:"-3 10 9 1",width:16,height:16,fill:"currentColor",style:{textAlign:"center",display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}},(0,r.yg)("path",{d:"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"})))),(0,r.yg)("br",null),(0,r.yg)("p",null,"You can search for and install the ",(0,r.yg)("inlineCode",{parentName:"p"},"EspSoftwareSerial")," library directly from the Library Manager in the Arduino IDE."),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/gnss-xiao/1.png",style:{width:400,height:"auto"}})),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"If you are using another series of XIAO, then you don't need to download the library for the soft serial port separately.")),(0,r.yg)("h4",{id:"tinygpsplus"},"TinyGPSPlus"),(0,r.yg)("p",null,"We also need a library to parse the GPS data messages reported by the expansion board. You can download this ",(0,r.yg)("strong",{parentName:"p"},"TinyGPSPlus")," library by clicking the button below."),(0,r.yg)("div",{class:"github_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"github_item",href:"https://www.arduino.cc/reference/en/libraries/tinygpsplus/"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"},"Download the Libraries")))," ",(0,r.yg)("svg",{"aria-hidden":"true",focusable:"false",role:"img",className:"mr-2",viewBox:"-3 10 9 1",width:16,height:16,fill:"currentColor",style:{textAlign:"center",display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}},(0,r.yg)("path",{d:"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"})))),(0,r.yg)("br",null),(0,r.yg)("p",null,"You can search for and install the ",(0,r.yg)("inlineCode",{parentName:"p"},"TinyGPSPlus")," library directly from the Library Manager in the Arduino IDE."),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/gnss-xiao/2.png",style:{width:400,height:"auto"}})),(0,r.yg)("h2",{id:"xiao-nrf52840-example"},"XIAO nRF52840 Example"),(0,r.yg)("p",null,"The L76-L module outputs GPS information via the serial port every 1 second. In this example, we print the content received from the serial port. You will be able to see a lot of information, including time, satellites, as well as latitude and longitude. Here's the code."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <TinyGPSPlus.h>\n#include <SoftwareSerial.h>\n\nstatic const int RXPin = D3, TXPin = D2;\nstatic const uint32_t GPSBaud = 9600;\n\n// The TinyGPSPlus object\nTinyGPSPlus gps;\n\n// The serial connection to the GPS device\nSoftwareSerial ss(RXPin, TXPin);\n\nvoid setup()\n{\n    Serial.begin(115200);\n    ss.begin(GPSBaud);\n\n    Serial.println(F("DeviceExample.ino"));\n    Serial.println(F("A simple demonstration of TinyGPSPlus with an attached GPS module"));\n    Serial.print(F("Testing TinyGPSPlus library v. ")); Serial.println(TinyGPSPlus::libraryVersion());\n    Serial.println(F("by Mikal Hart"));\n    Serial.println();\n}\n\nvoid loop()\n{\n    // This sketch displays information every time a new sentence is correctly encoded.\n    while (ss.available() > 0)\n    if (gps.encode(ss.read()))\n    displayInfo();\n\n    if (millis() > 5000 && gps.charsProcessed() < 10)\n    {\n        Serial.println(F("No GPS detected: check wiring."));\n        while(true);\n    }\n}\n\nvoid displayInfo()\n{\n    Serial.print(F("Location: "));\n    if (gps.location.isValid())\n    {\n        Serial.print(gps.location.lat(), 6);\n        Serial.print(F(","));\n        Serial.print(gps.location.lng(), 6);\n    }\n    else\n    {\n        Serial.print(F("INVALID"));\n    }\n\n    Serial.print(F("  Date/Time: "));\n    if (gps.date.isValid())\n    {\n        Serial.print(gps.date.month());\n        Serial.print(F("/"));\n        Serial.print(gps.date.day());\n        Serial.print(F("/"));\n        Serial.print(gps.date.year());\n    }\n    else\n    {\n        Serial.print(F("INVALID"));\n    }\n\n    Serial.print(F(" "));\n    if (gps.time.isValid())\n    {\n        if (gps.time.hour() < 10) Serial.print(F("0"));\n        Serial.print(gps.time.hour());\n        Serial.print(F(":"));\n        if (gps.time.minute() < 10) Serial.print(F("0"));\n        Serial.print(gps.time.minute());\n        Serial.print(F(":"));\n        if (gps.time.second() < 10) Serial.print(F("0"));\n        Serial.print(gps.time.second());\n        Serial.print(F("."));\n        if (gps.time.centisecond() < 10) Serial.print(F("0"));\n        Serial.print(gps.time.centisecond());\n    }\n    else\n    {\n        Serial.print(F("INVALID"));\n    }\n\n    Serial.println();\n}\n')),(0,r.yg)("p",null,"Make sure that the GPS module is used in a more open location so that it can get a good GPS signal. With a good GPS signal, within five minutes, the serial port will see the latitude, longitude and time information returned by the GPS module."),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/gnss-xiao/3.png",style:{width:700,height:"auto"}})),(0,r.yg)("h2",{id:"work-without-xiao"},"Work without XIAO"),(0,r.yg)("p",null,"If you wish to utilize the GPS module with other microcontrollers, they can make use of the four solder pads available on the circuit board: 3V, GND, TX, and RX."),(0,r.yg)("p",null,"By connecting these pads to the respective pins on the desired microcontroller, the L76-L module can be integrated and operated without the XIAO. Ensure to refer to the specific microcontroller's documentation for proper pin configurations and connections."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"L76-L module"),(0,r.yg)("th",{parentName:"tr",align:null},"Others MCU"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"3V"),(0,r.yg)("td",{parentName:"tr",align:null},"3.3V")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GND"),(0,r.yg)("td",{parentName:"tr",align:null},"GND")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TX"),(0,r.yg)("td",{parentName:"tr",align:null},"RX")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"RX"),(0,r.yg)("td",{parentName:"tr",align:null},"TX")))),(0,r.yg)("h2",{id:"resources"},"Resources"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[Zip]")," ",(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/gnss-xiao/XIAO_GPS_SCH&PCB.zip"},"Eagle file")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/gnss-xiao/L76-L_doc.zip"},"Datasheet - L76-L"))),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"table-center"},(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}u.isMDXComponent=!0}}]);