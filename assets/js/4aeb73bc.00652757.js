"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[40608],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>h});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(h,s(s({ref:t},l),{},{components:n})):o.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(9668),r=(n(96540),n(15680));const i={title:"LAN_Communications",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/LAN_Communications/",slug:"/LAN_Communications",last_update:{date:"01/11/2022",author:"gunengyu"}},s=void 0,a={unversionedId:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/LAN_Communications",id:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/LAN_Communications",title:"LAN_Communications",description:"1. Configure the LAN Server",source:"@site/docs/Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/LAN_Communications.md",sourceDirName:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board",slug:"/LAN_Communications",permalink:"/LAN_Communications",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/LAN_Communications.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"Jan 11, 2022",frontMatter:{title:"LAN_Communications",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/LAN_Communications/",slug:"/LAN_Communications",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Wio RP2040 mini Dev Board with Arduino",permalink:"/Wio-RP2040-with-Arduino-WIFI"},next:{title:"Use MQTT to remotely light up LED lights",permalink:"/Use_MQTT_to_remotely_light_up_LED_lights"}},u={},c=[{value:"1. Configure the LAN Server",id:"1-configure-the-lan-server",level:3},{value:"2. Debug MicroPython program",id:"2-debug-micropython-program",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],l={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,o.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"1-configure-the-lan-server"},"1. Configure the LAN Server"),(0,r.yg)("p",null,'This project requires the Server and the main control board to work in the same local area network. The principle: Setup one PC as a server, connect the main control board to the Server through the local area network, and then PC and board communicate through a fixed port.\nFirst, download and install the network debugging assistant (Net Assistant network debugging assistant software in this project).\nIf the installation is successful, open the software, select "TCP Server" in the upper left corner to set the "Protocol", and then set the "Local host addr" and "Local host port" below. If all were done, click "Open" to enter the Server.'),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_8.png",alt:"image.png"})),(0,r.yg)("h3",{id:"2-debug-micropython-program"},"2. Debug MicroPython program"),(0,r.yg)("p",null,"Enter the following code into the code editor:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'import network\nimport usocket\nfrom machine import Pin, I2C, ADC, UART, SPI, PWM\nfrom time import sleep\n\nN1 = network.WLAN_SPI(network.STA_IF)\nN1.active(True)\n\nprint("API list:")\ndir(N1)\n\nprint("wifi list:")\nlis = N1.scan()\nfor q in lis:\n    print(q)\n    \nN1.connect("CHCK","depot0510")\nif N1.isconnected():\n    print("    ip               gateway           netmask            MAC            ssid")\n    print(N1.ifconfig())\n    s=usocket.socket()\n    addr=(\'192.168.9.243\',9999)\n    s.connect(addr)\n    s.send(\'Hello! Wio RP2040\')\n')),(0,r.yg)("p",null,"Please fill in line 17 (the name and password of the WiFi ) and line 22\uff08the IP address and port number of the computer server). Then run the program, you should see the message sent by the main control board in the Data log of the network debugging assistant."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_9.png",alt:"image.png"})),(0,r.yg)("hr",null),(0,r.yg)("p",null,'If you want to run other codes after running a program with network functions, please click the "RUN" button on the main control board to restart. After restarting, the main control board can run other programs.'),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null," if you have any technical issue.  submit the issue into our ",(0,r.yg)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),".\nThank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);