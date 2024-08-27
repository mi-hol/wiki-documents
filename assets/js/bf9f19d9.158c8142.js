"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[85805],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var i=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,g=p["".concat(d,".").concat(h)]||p[h]||c[h]||o;return n?i.createElement(g,a(a({ref:t},u),{},{components:n})):i.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(9668),r=(n(96540),n(15680));const o={description:"Seeed BLE Shield v1",title:"Seeed BLE Shield v1",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeed_BLE_Shield",last_update:{date:"2/16/2023",author:"jianjing Huang"}},a=void 0,l={unversionedId:"Top_Brand/Arduino/shield/Seeed_BLE_Shield",id:"Top_Brand/Arduino/shield/Seeed_BLE_Shield",title:"Seeed BLE Shield v1",description:"Seeed BLE Shield v1",source:"@site/docs/Top_Brand/Arduino/shield/Seeed_BLE_Shield.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Seeed_BLE_Shield",permalink:"/Seeed_BLE_Shield",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/Seeed_BLE_Shield.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676505600,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{description:"Seeed BLE Shield v1",title:"Seeed BLE Shield v1",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeed_BLE_Shield",last_update:{date:"2/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"EL Shield",permalink:"/EL_Shield"},next:{title:"Small e-Paper Shield V2",permalink:"/Small_e-Paper_Shield_V2"}},d={},s=[{value:"Specifications",id:"specifications",level:2},{value:"Hardwarw Overview",id:"hardwarw-overview",level:2},{value:"Applications",id:"applications",level:2},{value:"Hardware Connection",id:"hardware-connection",level:3},{value:"SoftwareSerial Communication",id:"softwareserial-communication",level:3},{value:"HardwareSerial Communication",id:"hardwareserial-communication",level:3},{value:"AT Commands",id:"at-commands",level:3},{value:"Related Reading",id:"related-reading",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:s},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,i.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/img/Seeed_BLE-4.png",alt:null})),(0,r.yg)("p",null,"This Seeed BLE Shield utilizes an HM-11 module to provide your Arduino/Seeeduino with serial BLE function. It only takes two pins of the micro controller to communicate your device with this shield. With support for a BLE ComAssistant APK, this BLE Shield can talk to your mobile phone more easily without pairing. You can use it in many conditions, like robot controls or remote control equipment ,etc. We prepared an easy and convenient command set for this shield so that you can use neat and concise code to run the function."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeed-BLE-Shield-p-1859.html"},(0,r.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,r.yg)("h2",{id:"specifications"},"Specifications"),(0,r.yg)("hr",null),(0,r.yg)("table",null,(0,r.yg)("tr",null,(0,r.yg)("th",null," Specifications"),(0,r.yg)("th",null," Value")),(0,r.yg)("tr",null,(0,r.yg)("td",{width:"300px"}," BT Version"),(0,r.yg)("td",{width:"500px"}," Bluetooth Specification V4.0 BLE")),(0,r.yg)("tr",null,(0,r.yg)("td",null," Working Frequency"),(0,r.yg)("td",null," 2.4GHz ISM band")),(0,r.yg)("tr",null,(0,r.yg)("td",null," Working Current"),(0,r.yg)("td",null," < 15 mA")),(0,r.yg)("tr",null,(0,r.yg)("td",null," Sourcing Current"),(0,r.yg)("td",null," < 30 mA")),(0,r.yg)("tr",null,(0,r.yg)("td",null," Sleeping Current"),(0,r.yg)("td",null," < 3 mA")),(0,r.yg)("tr",null,(0,r.yg)("td",null," Modulation Method"),(0,r.yg)("td",null," GFSK(Gaussian Frequency Shift Keying)")),(0,r.yg)("tr",null,(0,r.yg)("td",null," RF Power"),(0,r.yg)("td",null," -23dbm, -6dbm, 0dbm, 6dbm, can modify through AT Command AT+POWE")),(0,r.yg)("tr",null,(0,r.yg)("td",null," Speed"),(0,r.yg)("td",null," Asynchronous: 6K Bytes, Synchronous: 6K Bytes")),(0,r.yg)("tr",null,(0,r.yg)("td",null," Sensibility"),(0,r.yg)("td",null," \u2264-84dBm at 0.1% BER")),(0,r.yg)("tr",null,(0,r.yg)("td",null," Security"),(0,r.yg)("td",null," Authentication and encryption")),(0,r.yg)("tr",null,(0,r.yg)("td",null," Service"),(0,r.yg)("td",null," Central & Peripheral UUID FFE0,FFE1")),(0,r.yg)("tr",null,(0,r.yg)("td",null," Supply Power"),(0,r.yg)("td",null," 5v")),(0,r.yg)("tr",null,(0,r.yg)("td",null," Working Temperature"),(0,r.yg)("td",null," \u20135 ~ +65 Centigrade")),(0,r.yg)("tr",null,(0,r.yg)("td",null," Size"),(0,r.yg)("td",null," 68mm x 43mm")),(0,r.yg)("tr",null,(0,r.yg)("td",null," PIN Code"),(0,r.yg)("td",null," 000000(by default)"))),(0,r.yg)("h2",{id:"hardwarw-overview"},"Hardwarw Overview"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/img/BLE_Shield.png",alt:null})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"HM-11: The basic module is HM-11, more information you can refer to this wiki of ",(0,r.yg)("a",{parentName:"p",href:"/Bluetooth_V4.0_HM_11_BLE_Module"},"HM-11"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Signal lamp: Lamp will blink if no one connect BLE, but the lamp would keep lighting after BLE has been connected.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Grove connectors: There are two Grove connectors onto the BLE shield, you can plug Grove products onto the board conveniently.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Hard or Softserial port: You can choose two of seven digital pins as the communication channel. Just plug the jumpers into the headers. ",(0,r.yg)("strong",{parentName:"p"},'There are two mistakes on the silkscreen, please kindly regard "WIFI_TX" and "WIFI_RX" as "BLE_TX" and "BLE_RX".'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Reserved pinouts from HM-11: There are some reserved pinouts from HM-11 module, such as CTS1, RTS1 and PIO2, etc.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Reset button: Press the reset button if you need to reset the BLE Shield. However, this reset button does not affect the state of the main board(such as Arduino Uno) if BLE Shield is plugged onto the main board."))),(0,r.yg)("h2",{id:"applications"},"Applications"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"hardware-connection"},"Hardware Connection"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/img/Seeed_BLE-2.png",alt:null})),(0,r.yg)("p",null,"Plug Seeed BLE Shield onto the Arduino/Seeeduino directly. ",(0,r.yg)("strong",{parentName:"p"},"Please pay attention to the position of jumpers on the BLE Shield.")),(0,r.yg)("h3",{id:"softwareserial-communication"},"SoftwareSerial Communication"),(0,r.yg)("p",null,"Seeed BLE Shield can be acted as a master or slave, you can use the one via different demos.",(0,r.yg)("strong",{parentName:"p"},"If you are going to use the following SoftwareSerial program, please refer to the way of connection in the previous pic. BLE_TX--",">","D2, BLE_RX--",">","D3.")),(0,r.yg)("p",null,"Open Arduino IDE, copy the following program and upload it onto the Arduino/Seeeduino board. And then two BLE Shields can communicate with each other."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Demo : BLE Slave")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'#include <SoftwareSerial.h>   //Software Serial Port\n#define RxD 2\n#define TxD 3\n\n#define DEBUG_ENABLED  1\n\nSoftwareSerial BLE(RxD,TxD);\n\nvoid setup()\n{\n    Serial.begin(9600);\n    pinMode(RxD, INPUT);\n    pinMode(TxD, OUTPUT);\n    setupBleConnection();\n\n}\n\nvoid loop()\n{\n    char recvChar;\n    while(1){\n        if(BLE.available()){//check if there\'s any data sent from the remote BLE shield\n            recvChar = BLE.read();\n            Serial.print(recvChar);\n        }\n        if(Serial.available()){//check if there\'s any data sent from the local serial terminal, you can add the other applications here\n            recvChar  = Serial.read();\n            BLE.print(recvChar);\n        }\n    }\n}\n\nvoid setupBleConnection()\n{\n    BLE.begin(9600); //Set BLE BaudRate to default baud rate 9600\n    BLE.print("AT+CLEAR"); //clear all previous setting\n    BLE.print("AT+ROLE0"); //set the bluetooth name as a slaver\n    BLE.print("AT+SAVE1");  //don\'t save the connect information\n}\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Demo : BLE Master")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'#include <SoftwareSerial.h>   //Software Serial Port\n#define RxD 2\n#define TxD 3\n\n#define DEBUG_ENABLED  1\n\nSoftwareSerial BLE(RxD,TxD);\n\nvoid setup()\n{\n    Serial.begin(9600);\n    pinMode(RxD, INPUT);\n    pinMode(TxD, OUTPUT);\n    setupBleConnection();\n\n}\n\nvoid loop()\n{\n    char recvChar;\n    while(1){\n        if(BLE.available()){//check if there\'s any data sent from the remote BLE shield\n            recvChar = BLE.read();\n            Serial.print(recvChar);\n        }\n        if(Serial.available()){//check if there\'s any data sent from the local serial terminal, you can add the other applications here\n            recvChar  = Serial.read();\n            BLE.print(recvChar);\n        }\n    }\n}\n\nvoid setupBleConnection()\n{\n    BLE.begin(9600); //Set BLE BaudRate to default baud rate 9600\n    BLE.print("AT+CLEAR"); //clear all previous setting\n    BLE.print("AT+ROLE1"); //set the bluetooth name as a master\n    BLE.print("AT+SAVE1");  //don\'t save the connect information\n}\n')),(0,r.yg)("h3",{id:"hardwareserial-communication"},"HardwareSerial Communication"),(0,r.yg)("p",null,"Besides, you can use BLE Shield via AT commands without any program, ",(0,r.yg)("strong",{parentName:"p"},"but you need to change the positions of two jumpers. BLE_TX--",">","D1, BLE_RX--",">","D0.")),(0,r.yg)("p",null,"Then open a Serial Port Tool, like CoolTerm or others.The following are some settings : ",(0,r.yg)("strong",{parentName:"p"},"Baudrate: 9600(default) , Data Bits: 8, Parity: none, Stop Bits: 1.")),(0,r.yg)("p",null,'First, you can send a(some) "AT" command(s) to BLE Shield to have a test. If it returns an "OK", then you can do the following steps. ',(0,r.yg)("strong",{parentName:"p"},"If not, you can upload a blank program to Arduino/Seeeduino"),", and see whether you can get response from Serial Port Tool via the previous operation."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"void setup()\n{\n}\n\nvoid loop()\n{\n}\n")),(0,r.yg)("p",null,'Then, send an "AT+ROLE0" command to BLE Shield; it will return an "OK+Set:0", which means now the BLE Shield is ready to act as a slave.'),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/img/Seeed_BLE-3.png",alt:null})),(0,r.yg)("h3",{id:"at-commands"},"AT Commands"),(0,r.yg)("p",null,"More information about the AT Commands please refer to the data sheet of BLE module. You can download it from the Resource space."),(0,r.yg)("h2",{id:"related-reading"},"Related Reading"),(0,r.yg)("hr",null),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_BLE_Shield"},"FAQ about Seeed BLE Shield"),". ",(0,r.yg)("em",{parentName:"li"},'Also, you can enter the FAQ page by clicking the "FAQ" button which in the right side of product\'s wiki page.'))),(0,r.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/res/BLE_Shield_v1.0.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.yg)("h2",{id:"resource"},"Resource"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/res/BLE_Shield_v1.0.zip"},"Schematic of Seeed BLE Shield")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/res/HMBLEComAssistant.rar"},"BLE_apk_for_Android")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeed_BLE_Shield/res/Bluetooth4_en.pdf"},"DataSheet of BLE module")),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);