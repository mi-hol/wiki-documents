"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[11299],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,y=c["".concat(d,".").concat(m)]||c[m]||p[m]||r;return n?o.createElement(y,i(i({ref:t},u),{},{components:n})):o.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(9668),a=(n(96540),n(15680));const r={description:"Xadow - BLE Slave",title:"Xadow - BLE Slave",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_BLE_Slave",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_BLE_Slave",id:"Seeed_Elderly/Xadow/Xadow_BLE_Slave",title:"Xadow - BLE Slave",description:"Xadow - BLE Slave",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_BLE_Slave.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_BLE_Slave",permalink:"/Xadow_BLE_Slave",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_BLE_Slave.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Xadow - BLE Slave",title:"Xadow - BLE Slave",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_BLE_Slave",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - BLE (Dual Model) v1.0",permalink:"/Xadow_BLE_Dual_Model_V1.0"},next:{title:"Xadow - Breakout",permalink:"/Xadow_Breakout"}},d={},s=[{value:"Specification",id:"specification",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:s},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Xadow_ble_01.jpg",alt:null})),(0,a.yg)("p",null,"This is a Bluetooth 4.0 module\uff08Bluetooth 4.0 slave module\uff09. Compared with Bluetooth version 2.0 and 3.0, it's more advanced for its lower power consumption. You can easily connect your own project to the primary device of Bluetooth 4.0 by using this module. For instance, it can transfer the detected data which is about the information of your body to phone for displaying or analyzing, then, help you better manage your physical condition."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-BLE-Slave-p-1546.html"},(0,a.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,a.yg)("h2",{id:"specification"},"Specification"),(0,a.yg)("hr",null),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Bluetooth 4.0 Module"),(0,a.yg)("li",{parentName:"ul"},"PIN:0000"),(0,a.yg)("li",{parentName:"ul"},"Default Baudrate:38400"),(0,a.yg)("li",{parentName:"ul"},"Dimensions: 25.43mm x 20.35mm")),(0,a.yg)("h2",{id:"demonstration"},"Demonstration"),(0,a.yg)("hr",null),(0,a.yg)("p",null,"The demo is going to show you how to connect bluetooth device with Xadow BLE Slave and communicate. You can use it to communicate with phone(with Bluetooth 4.0). Now let us have a test:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'Connect the Xadow BLE Slave to Xadow Main Board and connect Main Board to PC with a USB cable. In normal mode, the blue LED will blink once a time. If the blue led is off, please click the "reset" button on Xadow Main Board .')),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/XadowBLE.jpg",alt:null})),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre"},"When connect XadowBLE Slave to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module).\n"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Upload the test code to your Xadow Main Board.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"int error=0;\nint n;\nvoid setup()\n{\n    Serial.begin(38400);\n    delay(100);\n    PORTB|=0x04;\n    TESTIO();\n    if(error==0)\n    {\n        DDRB|=0x81;\n        for(n=0;n<40;n++)\n        {\n            PORTB&=~0x81;\n            delay(50);\n            PORTB|=0x81;\n        }\n    }\n\n    Serial1.begin(38400);\n}\nvoid loop()\n{\n    boot();\n}\nvoid TESTIO(void)\n{\n    DDRB|=0x0e;\n    PORTB&=~0x0e;\n    DDRF|=0x01;\n    PORTF&=~0x01;\n    DDRD&=~0x0f;\n\n    PORTB|=0x04;\n    PORTF|=0x01;\n    delay(30);\n    if(!(PIND&0x01))\n    {\n        error=1;\n    }\n    if(PIND&0x02)\n    {\n        error=1;\n    }\n    if(!(PIND&0x04))\n    {\n        error=1;\n    }\n    if(PIND&0x08)\n    {\n        error=1;\n    }\n    PORTB&=~0x04;\n    PORTB|=0x0a;\n    PORTF&=~0x01;\n    delay(30);\n    if(PIND&0x01)\n    {\n        error=1;\n    }\n    if(!(PIND&0x02))\n    {\n        error=1;\n    }\n    if(PIND&0x04)\n    {\n        error=1;\n    }\n    if(!(PIND&0x08))\n    {\n        error=1;\n    }\n    Serial.println(error);\n}\nvoid boot(void)\n{\n    for(;;)\n    {\n        if(Serial.available())\n        {\n            Serial1.write(Serial.read());\n        }\n        if(Serial1.available())\n        {\n            Serial.write(Serial1.read());\n        }\n    }\n}\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Select a serial tool to send and receive data. Here we use the ",(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/res/Sscom32E.zip"},"Sscom32E"),". BaudRate should be 38400.")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Open_serial_tool.jpg",alt:null})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Get your Phone device ready and install ",(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/res/BlueSPP_V4.0.zip"},"\u201cBlueSPP\u201d APP")," and launch the BlueSPP. Remember that your device should be Bluetooth 4.0.")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Open_Bluetooth.jpg",alt:null})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},'Click "search" to find the devices. Find the Xadow BLE Slave device and press to start connecting Bluetooth device.')),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("admonition",{parentName:"li",title:"s",type:"tip"},(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre"},"You should pair phone with BLE module first in the device manager of phone if the 'BlueSPP' can't find the BLE module.\n"))),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Search_device.jpg",alt:null}))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"After connecting, the screen on Device is as following. You could type texts and data will send. It will show on serial tool of your PC. Of course, you can send data to phone by serial tool of your PC."))),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Send_and_Receive_Data.jpg",alt:null}),"\n",(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/BLE_Slave_send_data.jpg",alt:null})),(0,a.yg)("h2",{id:"resources"},"Resources"),(0,a.yg)("hr",null),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/res/Xadow_BLE_Slave.zip"},"Xadow BLE Slave")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/res/BlueSPP_V4.0.zip"},"\u201cBlueSPP\u201d APP"))),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);