"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[29898],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var i=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,m=u["".concat(s,".").concat(c)]||u[c]||g[c]||r;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},43551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(9668),o=(n(96540),n(15680));const r={title:"Wio Extension RTC (Real Time Clock)",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Extension-RTC/",slug:"/Wio-Extension-RTC",last_update:{date:"01/11/2022",author:"gunengyu"}},a=void 0,l={unversionedId:"Sensor/Wio_Series/Wio_Tracker/Wio-Extension-RTC",id:"Sensor/Wio_Series/Wio_Tracker/Wio-Extension-RTC",title:"Wio Extension RTC (Real Time Clock)",description:"The Wio Extension - RTC is an extension board for Wio LTE, it can provide the Real-Time Clock function via the I2C port. This board is based on NXP PCF8523 chip, which can provide year, month, day, weekday, hours, minutes, and seconds information.",source:"@site/docs/Sensor/Wio_Series/Wio_Tracker/Wio-Extension-RTC.md",sourceDirName:"Sensor/Wio_Series/Wio_Tracker",slug:"/Wio-Extension-RTC",permalink:"/Wio-Extension-RTC",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_Tracker/Wio-Extension-RTC.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"Jan 11, 2022",frontMatter:{title:"Wio Extension RTC (Real Time Clock)",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Extension-RTC/",slug:"/Wio-Extension-RTC",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Wio LTE Cat M1/NB-IoT Tracker",permalink:"/Wio_LTE_Cat_M1_NB-IoT_Tracker"},next:{title:"Grove Starter Kit for Wio LTE",permalink:"/Grove_Starter_Kit_for_Wio_LTE"}},s={},p=[{value:"Feature",id:"feature",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,i.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/p/r/preview_4_2.png",alt:null})),(0,o.yg)("p",null,"The Wio Extension - RTC is an extension board for Wio LTE, it can provide the Real-Time Clock function via the I2C port. This board is based on NXP PCF8523 chip, which can provide year, month, day, weekday, hours, minutes, and seconds information. "),(0,o.yg)("p",null,"This board is powered by Micro-USB port, communicate with the Wio LTE via I2C port, and we also provide a USB power output which can be turned off/on by a on-board switch, so that you can use the Wio Extension - RTC board to power the Wio LTE. When the power supply to Wio boards ( Like the following picture), the standby current of whole system is less than 1 uA."),(0,o.yg)("p",{style:{}},(0,o.yg)("a",{href:"https://www.seeedstudio.com/Wio-Extension-RTC-p-4002.html",target:"_blank"},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,o.yg)("h2",{id:"feature"},"Feature"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Extensibility"),(0,o.yg)("li",{parentName:"ul"},"Able to supply Wio boards with 3.3 voltage.")),(0,o.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,o.yg)("div",{align:"center"},(0,o.yg)("figure",null,(0,o.yg)("p",{style:{}},(0,o.yg)("a",{href:"https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/pinout.jpg",target:"_blank"},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/pinout.jpg"}))))),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/rtc_diagram.png",alt:null})),(0,o.yg)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,o.yg)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,o.yg)("th",{parentName:"tr",align:null}),(0,o.yg)("th",{parentName:"tr",align:null}),(0,o.yg)("th",{parentName:"tr",align:null}))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg",alt:null})),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,o.yg)("h2",{id:"getting-started"},"Getting Started"),(0,o.yg)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Materials required")),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Wio LTE Boards"),(0,o.yg)("th",{parentName:"tr",align:null},"Wio-Extension-RTC"),(0,o.yg)("th",{parentName:"tr",align:null},"Grove - Buzzer"),(0,o.yg)("th",{parentName:"tr",align:null},"Grove - Red LED"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("img",{parentName:"td",src:"https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedfile2018-06bazaar837387_img_0005a.jpg",alt:"enter image description here"})),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("img",{parentName:"td",src:"https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/p/r/preview_4_2.png",alt:"enter image description here"})),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Buzzer/images/Grove%20Buzzer.jpg",alt:"enter image description here"})),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("img",{parentName:"td",src:"https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedfile2018-09bazaar939479_1040300054.jpg",alt:"enter image description here"}))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Wio-Extension-RTC-p-4002.html"},"Get ONE Now")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Buzzer.html"},"Get ONE Now")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Red-LED-p-1142.html"},"Get ONE Now"))))),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Since Wio Extension - RTC just controlling USB power supply set from I2C, you can use this board to manage the power supply almost for every MCU boards powering from USB.")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("pre",{parentName:"admonition"},(0,o.yg)("code",{parentName:"pre"},"    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy \n\n    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.                   \n"))),(0,o.yg)("h4",{id:"hardware"},"Hardware"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Step 1.")," Connect the Wio-Extension-RTC to the ",(0,o.yg)("strong",{parentName:"p"},"I2C")," port of the Wio LTE Boards.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Step 2."),"  Connect Wio LTE Boards.to PC via a USB cable.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Step 3.")," Connect ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Buzzer-p-768.html"},"Grove - Buzzer")," or ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Red-LED-p-1142.html"},"Grove - Red LED")," to D38 of Wio LTE."))),(0,o.yg)("div",{align:"center"},(0,o.yg)("figure",null,(0,o.yg)("p",{style:{}},(0,o.yg)("a",{href:"https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/connection.png",target:"_blank"},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/connection.png"}))))),(0,o.yg)("h4",{id:"software"},"Software"),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("pre",{parentName:"admonition"},(0,o.yg)("code",{parentName:"pre"},"If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.The driver of this board is rely on the head file of   `Seeed STM32F4 Board(JP mirror) by Seeed K.K.` , so whether you have installed your wio board with the  tutorial of  [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/), you need to do the following step.\n"))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 1")," Install library\nOpen your Arudino IDE, click on File > Preferences, and copy below url to Additional Boards Manager URLs.",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"http://www.seeed.co.jp/package_SeeedJP_index.json"),(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("img",{parentName:"p",src:"https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Preferences.png",alt:null}),"  "),(0,o.yg)("p",null,"Click on Toos > Board > Board Manager, and enter ",(0,o.yg)("inlineCode",{parentName:"p"},"Wio")," to the text box."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Boards_Manager.png",alt:null})),(0,o.yg)("p",null,"Click ",(0,o.yg)("inlineCode",{parentName:"p"},"Seeed STM32F4 Board(JP mirror) by Seeed K.K.")," then an Install button appear, click on it to finish the step, this process takes about 5 minutes to half an hour, which depend on the speed of your network.\nClick on Tools > Manage Libraries, and enter ",(0,o.yg)("inlineCode",{parentName:"p"},"Wio")," to the text box."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Library_Manager.png",alt:null}),"\nClick ",(0,o.yg)("inlineCode",{parentName:"p"},"Wio LTE for Arduino by Seeed K.K.")," then an Install button appear, click on it to finish the step."),(0,o.yg)("p",null,"Unzip the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/wiortc-sample.zip"},"sample sketch"),", and open ",(0,o.yg)("inlineCode",{parentName:"p"},"wiortc-sample.ino")," with Arduino IDE."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step2")," Download the code"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Press and hold BOOT button at back side of the Wio LTE and plug the USB to PC.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"We will see STM BOOTLARDER in device manager.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Select Tools\u2192Boards\u2192Wio_Tracker_LTE.\n",(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/Snipaste_2019-04-10_15-15-20.jpg",alt:"Alt text"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Select Sketch\u2192Upload to upload the code to Wio_LTE.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Press RST button to enable the COM port.\n",(0,o.yg)("strong",{parentName:"p"},"Tips")),(0,o.yg)("blockquote",{parentName:"li"},(0,o.yg)("p",{parentName:"blockquote"},"When you download most Arduino bords, you need to choose a right COM port, but for this board, you must keep the COM configuration to be blank. ")))),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/port.jpg",alt:"Alt text"}))),(0,o.yg)("ol",{start:6},(0,o.yg)("li",{parentName:"ol"},"Use Serial monitor to print the serial message. ")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <WioLTEforArduino.h>\n#include "WioRTC.h"\n\n////////////////////////////////////////////////////////////////////////////////\n// Defines\n\n#define BOOT_INTERVAL   (30)  // [sec.]\n\n////////////////////////////////////////////////////////////////////////////////\n// Global variables\n\nWioLTE Wio;\nWioRTC Rtc;\n\n////////////////////////////////////////////////////////////////////////////////\n// setup and loop\n\nvoid setup()\n{\n  delay(200);\n\n  SerialUSB.begin(115200);\n  SerialUSB.println("");\n  SerialUSB.println("--- START ---------------------------------------------------");\n\n  ////////////////////////////////////////\n  // Low-level initialize\n\n  SerialUSB.println("### I/O Initialize.");\n  Wio.Init();\n\n  SerialUSB.println("### Power supply ON.");\n  Wio.PowerSupplyGrove(true);\n  delay(500);\n  \n  ////////////////////////////////////////\n  // Device initialize\n  \n  SerialUSB.println("### Device initialize.");\n  Wire.begin();\n  Rtc.begin();\n\n  ////////////////////////////////////////\n  // Completed\n\n  SerialUSB.println("### Completed.");\n}\n\nvoid loop()\n{\n  uint8_t val;\n  Rtc.EepromRead(0, &val, sizeof(val));\n  SerialUSB.print("EEPROM value is ");\n  SerialUSB.println(val);\n  \n  val++;\n  Rtc.EepromWrite(0, &val, sizeof(val));\n  \n  SerialUSB.println("Beep.");\n  pinMode(WIO_D38, OUTPUT);\n  digitalWrite(WIO_D38, HIGH);\n  delay(200);\n  digitalWrite(WIO_D38, LOW);\n  \n  SerialUSB.println("Shutdown.");\n  Rtc.SetWakeupPeriod(BOOT_INTERVAL);\n  Rtc.Shutdown();\n  while (1) {}\n}\n')),(0,o.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Wio_Extension-RTC/res/Wio%20Extension%20%E2%80%93%20RTC%20v1.0.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.yg)("h2",{id:"resources"},"Resources"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"[ZIP]")," ",(0,o.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wio_Extension-RTC/res/Wio%20Extension%20%E2%80%93%20RTC%20v1.0.zip"}," Wio-Extension-RTC")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"[Sample]")," ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Wio_Extension_RTC/blob/master/wiortc-sample.zip"},"Wio-Extension-RTC Sample Code"))),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null," if you have any technical issue.  submit the issue into our ",(0,o.yg)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),".\nThank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);