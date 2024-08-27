"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[92572],{15680:(e,t,i)=>{i.d(t,{xA:()=>g,yg:()=>m});var n=i(96540);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},g=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=p(i),u=r,m=c["".concat(s,".").concat(u)]||c[u]||d[u]||a;return i?n.createElement(m,o(o({ref:t},g),{},{components:i})):n.createElement(m,o({ref:t},g))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},70226:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=i(9668),r=(i(96540),i(15680));const a={description:"Grove - 6-Position DIP Switch",title:"Grove - 6-Position DIP Switch",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-6-Position_DIP_Switch",last_update:{date:"1/10/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Switch&Button/Grove-6-Position_DIP_Switch",id:"Sensor/Grove/Grove_Accessories/Switch&Button/Grove-6-Position_DIP_Switch",title:"Grove - 6-Position DIP Switch",description:"Grove - 6-Position DIP Switch",source:"@site/docs/Sensor/Grove/Grove_Accessories/Switch&Button/Grove-6-Position_DIP_Switch.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Switch&Button",slug:"/Grove-6-Position_DIP_Switch",permalink:"/Grove-6-Position_DIP_Switch",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Switch&Button/Grove-6-Position_DIP_Switch.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673308800,formattedLastUpdatedAt:"Jan 10, 2023",frontMatter:{description:"Grove - 6-Position DIP Switch",title:"Grove - 6-Position DIP Switch",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-6-Position_DIP_Switch",last_update:{date:"1/10/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Red LED Matrix w/Driver",permalink:"/Grove-Red_LED_Matrix_w_Driver"},next:{title:"Grove - Button",permalink:"/Grove-Button"}},s={},p=[{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Applications",id:"applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Map",id:"pin-map",level:3},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],g={toc:p},c="wrapper";function d(e){let{components:t,...i}=e;return(0,r.yg)(c,(0,n.A)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/img/main.jpg"})),(0,r.yg)("p",null,"The Grove - 6-Position DIP Switch has 6 individual switch positions, which use I2C to transmit date. It works great as a multi-channel control switches."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("a",{href:"https://www.seeedstudio.com/Grove-6-Position-DIP-Switch-p-3137.html",target:"_blank"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,r.yg)("h2",{id:"version"},"Version"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Product Version"),(0,r.yg)("th",{parentName:"tr",align:null},"Changes"),(0,r.yg)("th",{parentName:"tr",align:null},"Released Date"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Grove - 6-Position DIP Switch"),(0,r.yg)("td",{parentName:"tr",align:null},"Initial"),(0,r.yg)("td",{parentName:"tr",align:null},"Jun 2018")))),(0,r.yg)("h2",{id:"features"},"Features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"6 individual switch"),(0,r.yg)("li",{parentName:"ul"},"Good heat resistance"),(0,r.yg)("li",{parentName:"ul"},"Long operating Life"),(0,r.yg)("li",{parentName:"ul"},"Grove compatible")),(0,r.yg)("h2",{id:"specification"},"Specification"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Item"),(0,r.yg)("th",{parentName:"tr",align:null},"Value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Operating voltage"),(0,r.yg)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Interface"),(0,r.yg)("td",{parentName:"tr",align:null},"I2C")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Default I2C Address"),(0,r.yg)("td",{parentName:"tr",align:null},"0x03")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Size"),(0,r.yg)("td",{parentName:"tr",align:null},"L: 40mm W: 20mm H: 13mm")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Weight"),(0,r.yg)("td",{parentName:"tr",align:null},"5g")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Package size"),(0,r.yg)("td",{parentName:"tr",align:null},"L: 140mm W: 90mm H: 10mm")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Gross Weight"),(0,r.yg)("td",{parentName:"tr",align:null},"11g")))),(0,r.yg)("h2",{id:"applications"},"Applications"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Multifunction control")),(0,r.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.yg)("h3",{id:"pin-map"},"Pin Map"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/img/pin_map.jpg"})),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/img/pin_map_back.jpg"})),(0,r.yg)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,r.yg)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,r.yg)("h2",{id:"getting-started"},"Getting Started"),(0,r.yg)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,r.yg)("h4",{id:"hardware"},"Hardware"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Materials required")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,r.yg)("th",{parentName:"tr",align:null},"Base Shield"),(0,r.yg)("th",{parentName:"tr",align:null},"Grove - 6-Position DIP Switch"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/img/thumbnail.jpg"})))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{href:"https://www.seeedstudio.com/Grove-6-Position-DIP-Switch-p-3137.html",target:"_blank"},"Get One Now"))))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"1")," Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"here")," to buy"),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"2")," Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html"},"here")," to buy.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 1.")," Connect the Grove - 6-Position DIP Switch to the ",(0,r.yg)("strong",{parentName:"p"},"I2C")," port of the Base Shield.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC via a USB cable."))),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/img/connect.jpg"})),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Seeeduino"),(0,r.yg)("th",{parentName:"tr",align:null},"Grove - 6-Position DIP Switch"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"5V"),(0,r.yg)("td",{parentName:"tr",align:null},"Red")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GND"),(0,r.yg)("td",{parentName:"tr",align:null},"Black")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SDA"),(0,r.yg)("td",{parentName:"tr",align:null},"White")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SCL"),(0,r.yg)("td",{parentName:"tr",align:null},"Yellow")))),(0,r.yg)("h4",{id:"software"},"Software"),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_Multi_Switch"},"Grove Multi Switch")," Library from Github.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 3.")," Restart the Arduino IDE. Open example via the path: ",(0,r.yg)("strong",{parentName:"p"},"File --\x3e Examples --\x3e Grove Multi Switch Library --\x3e Grove_Switch_Events"),"."))),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/path.jpg"})),(0,r.yg)("p",null,"Or, you can just click the icon ",(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg",alt:null})," in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include "Grove_Multi_Switch.h"\n\nGroveMultiSwitch mswitch[1];\nconst char* grove_5way_tactile_keys[] = {\n "KEY A",\n "KEY B",\n "KEY C",\n "KEY D",\n "KEY E",\n};\nconst char* grove_6pos_dip_switch_keys[] = {\n "POS 1",\n "POS 2",\n "POS 3",\n "POS 4",\n "POS 5",\n "POS 6",\n};\n\nconst char** key_names;\n\nint deviceDetect(void) {\n if (!mswitch->begin()) {\n  Serial.println("***** Device probe failed *****");\n  return -1;\n }\n\n Serial.println("***** Device probe OK *****");\n if (PID_VAL(mswitch->getDevID()) == PID_5_WAY_TACTILE_SWITCH) {\n  Serial.println("Grove 5-Way Tactile Switch Inserted!");\n  key_names = grove_5way_tactile_keys;\n } else if (PID_VAL(mswitch->getDevID()) == PID_6_POS_DIP_SWITCH) {\n  Serial.println("Grove 6-Position DIP Switch Inserted!");\n  key_names = grove_6pos_dip_switch_keys;\n }\n\n // enable event detection\n mswitch->setEventMode(true);\n\n // report device model\n Serial.print("A ");\n Serial.print(mswitch->getSwitchCount());\n Serial.print(" Button/Switch Device ");\n Serial.println(mswitch->getDevVer());\n return 0;\n}\n\nvoid setup()\n{\n Serial.begin(115200);\n Serial.println("Grove Multi Switch");\n\n // Initial device probe\n if (deviceDetect() < 0) {\n  Serial.println("Insert Grove 5-Way Tactile");\n  Serial.println("or Grove 6-Position DIP Switch");\n  for (;;);\n }\n\n return;\n}\n\nvoid loop()\n{\n GroveMultiSwitch::ButtonEvent_t* evt;\n\n delay(1);\n\n evt = mswitch->getEvent();\n if (!evt) {\n  // dynamic device probe\n  deviceDetect();\n  delay(1000);\n  return;\n }\n\n if (!(evt->event & GroveMultiSwitch::BTN_EV_HAS_EVENT)) {\n  #if 0\n  Serial.print("No event, errno = ");\n  Serial.println(mswitch->errno);\n  #endif\n  return;\n }\n\n for (int i = 0; i < mswitch->getSwitchCount(); i++) {\n  Serial.print(key_names[i]);\n  Serial.print(": RAW - ");\n  Serial.print((evt->button[i] & GroveMultiSwitch::BTN_EV_RAW_STATUS)?\n               "HIGH ": "LOW ");\n  if (PID_VAL(mswitch->getDevID()) == PID_5_WAY_TACTILE_SWITCH) {\n   Serial.print((evt->button[i] & GroveMultiSwitch::BTN_EV_RAW_STATUS)?\n                "RELEASED ": "PRESSED ");\n  } else if (PID_VAL(mswitch->getDevID()) == PID_6_POS_DIP_SWITCH) {\n   Serial.print((evt->button[i] & GroveMultiSwitch::BTN_EV_RAW_STATUS)?\n                "OFF ": "ON ");\n  }\n  Serial.println("");\n }\n\n for (int i = 0; i < mswitch->getSwitchCount(); i++) {\n  if (evt->button[i] & ~GroveMultiSwitch::BTN_EV_RAW_STATUS) {\n   Serial.println("");\n   Serial.print(key_names[i]);\n   Serial.print(": EVENT - ");\n  }\n  if (evt->button[i] & GroveMultiSwitch::BTN_EV_SINGLE_CLICK) {\n   Serial.print("SINGLE-CLICK ");\n  }\n  if (evt->button[i] & GroveMultiSwitch::BTN_EV_DOUBLE_CLICK) {\n   Serial.print("DOUBLE-CLICK ");\n  }\n  if (evt->button[i] & GroveMultiSwitch::BTN_EV_LONG_PRESS) {\n   Serial.print("LONG-PRESS ");\n  }\n  if (evt->button[i] & GroveMultiSwitch::BTN_EV_LEVEL_CHANGED) {\n   Serial.print("LEVEL-CHANGED ");\n  }\n }\n Serial.println("");\n}\n\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 5.")," Open the ",(0,r.yg)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,r.yg)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ",(0,r.yg)("inlineCode",{parentName:"p"},"ctrl"),"+",(0,r.yg)("inlineCode",{parentName:"p"},"shift"),"+",(0,r.yg)("inlineCode",{parentName:"p"},"m")," key at the same time. Set the baud rate to ",(0,r.yg)("strong",{parentName:"p"},"115200"),"."))),(0,r.yg)("admonition",{title:"success",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"If every thing goes well, you will get the result. For instance, the default switch is off-High, when you turn the ",(0,r.yg)("strong",{parentName:"p"},"Switch6")," to ",(0,r.yg)("strong",{parentName:"p"},"ON"),", the output will be ",(0,r.yg)("strong",{parentName:"p"},"POS 6: RAW - LOW ON"),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"Grove Multi Switch\n***** Device probe OK *****\nGrove 6-Position DIP Switch Inserted!\nA 6 Button/Switch Device BN-6--0.1\nPOS 1: RAW - HIGH OFF \nPOS 2: RAW - HIGH OFF \nPOS 3: RAW - HIGH OFF \nPOS 4: RAW - HIGH OFF \nPOS 5: RAW - HIGH OFF \nPOS 6: RAW - LOW ON \n\nPOS 6: EVENT - LEVEL-CHANGED \nPOS 1: RAW - LOW ON \nPOS 2: RAW - HIGH OFF \nPOS 3: RAW - HIGH OFF \nPOS 4: RAW - HIGH OFF \nPOS 5: RAW - HIGH OFF \nPOS 6: RAW - LOW ON \n")),(0,r.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/res/Grove-5-Way_Switch.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.yg)("h2",{id:"resources"},"Resources"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[Zip]")," ",(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/res/Grove-5-Way_Switch.zip"},"Grove - 6-Position DIP Switch eagle files")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[Zip]")," ",(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/res/Grove-6-Position_DIP_Switch.zip"},"Grove Multi Switch Library"))),(0,r.yg)("h2",{id:"project"},"Project"),(0,r.yg)("p",null,"This is the introduction Video of this product, simple demos, you can have a try."),(0,r.yg)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/wz1GzW2-VW4?rel=0",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);