"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[16843],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var a=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),g=i,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||o;return r?a.createElement(m,n(n({ref:t},u),{},{components:r})):a.createElement(m,n({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,n[1]=l;for(var p=2;p<o;p++)n[p]=r[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},51791:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(9668),i=(r(96540),r(15680));const o={title:"USB To Uart 3V3",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Scream_out_loud-110dBA_fixed_tone_Siren/",slug:"/USB_To_Uart_3V3",last_update:{date:"02/03/2022",author:"jianjing Huang"}},n=void 0,l={unversionedId:"Sensor/Beyond_Grove/Accessories/Input_Output/USB_To_Uart_3V3",id:"Sensor/Beyond_Grove/Accessories/Input_Output/USB_To_Uart_3V3",title:"USB To Uart 3V3",description:"\x3c!-- ---",source:"@site/docs/Sensor/Beyond_Grove/Accessories/Input_Output/USB_To_Uart_3V3.md",sourceDirName:"Sensor/Beyond_Grove/Accessories/Input_Output",slug:"/USB_To_Uart_3V3",permalink:"/USB_To_Uart_3V3",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Beyond_Grove/Accessories/Input_Output/USB_To_Uart_3V3.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1643846400,formattedLastUpdatedAt:"Feb 3, 2022",frontMatter:{title:"USB To Uart 3V3",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Scream_out_loud-110dBA_fixed_tone_Siren/",slug:"/USB_To_Uart_3V3",last_update:{date:"02/03/2022",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"2.8inch TFT Touch Shield V1.0",permalink:"/2.8inch-TFT_Touch_Shield_V1.0"},next:{title:"USB To Uart 5V",permalink:"/USB_To_Uart_5V"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Interface Function",id:"interface-function",level:2},{value:"Usage",id:"usage",level:2},{value:"Driver Install",id:"driver-install",level:4},{value:"Windows/Linux",id:"windowslinux",level:5},{value:"Mac OS",id:"mac-os",level:5},{value:"Hardware",id:"hardware",level:4},{value:"Example",id:"example",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,i.yg)(c,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/Photo_USB_To_Uart_5V_3V3.JPG",alt:null})),(0,i.yg)("p",null,"USB To Uart 3V3 is a USB to serial adapter, which is based on CH340, a USB bus convert chip. It can realize the convert of USB to serial interface/IrDA infrared/printer interface. This module can be used for uploading code or communicating with MCUs."),(0,i.yg)("h2",{id:"features"},"Features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Full speed USB device interface, conforms to USB Specification Version 2.0")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Supports baud rate varies from 2400bps to 115200bps.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Hardware full duplex serial interface, set transceiver buffer")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"LED Indicator"))),(0,i.yg)("h2",{id:"specification"},"Specification"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Working Voltage \uff1aDC 5V")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Working Current ","<","10mA")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Operation System\uff1a Windows\u3001Linux\u3001Mac"))),(0,i.yg)("h2",{id:"interface-function"},"Interface Function"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/USB_To_Uart_3V3_Interface.jpg",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u2460\uff1aPower Indicator")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u2461\uff1aMicro USB")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u2462\uff1aTX Indicator")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u2463\uff1aRX Indicator")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u2464\uff1aUart Breakout"))),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)("h4",{id:"driver-install"},"Driver Install"),(0,i.yg)("p",null,"USB To Uart 5V/3V3 is used as USB To Serial Port interface.It need to install driver."),(0,i.yg)("h5",{id:"windowslinux"},"Windows/Linux"),(0,i.yg)("p",null,"Totally compatible with serial application program in computer endpoint Windows operation system"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"1)You plug it to computer by USB Port.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"2)Wait a  minute,you can find it in Device Manager.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"3)If you can not find the port,please download Driver from ",(0,i.yg)("a",{parentName:"p",href:"http://wch-ic.com/download/list.asp?id=127"},"Here")))),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/CH340_Driver.jpg",alt:null})),(0,i.yg)("h5",{id:"mac-os"},"Mac OS"),(0,i.yg)("p",null,"Driver download:  ",(0,i.yg)("a",{parentName:"p",href:"http://www.wch.cn/download/CH341SER_MAC_ZIP.html"},"http://www.wch.cn/download/CH341SER_MAC_ZIP.html")),(0,i.yg)("p",null,"On Mac OS Yosemite:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"1) Install the CH340 driver")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"2) Open Terminal program (located in /Applications/Utilities/)")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},'3) Type command: sudo nvram boot-args="debug=0x146 kext-dev-mode=1"')),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"4\uff09Type password;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"5\uff09Restart your computer;"))),(0,i.yg)("p",null,"If you want restore your Mac\u2019s setting,You can exit developer mode by redefining the boot-arg to your previous settings, or clear your boot-args as follows:  sudo nvram -d boot-args"),(0,i.yg)("h4",{id:"hardware"},"Hardware"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/USB_To_Uart_Download.jpg",alt:null})),(0,i.yg)("p",null,"You should like this connect your circuit."),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("p",null,"We can download code to Seeeduino Ethernet by USB To Uart 3V3."),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/USB_To_Uart_5V_3v3_Usage.jpg",alt:null})),(0,i.yg)("p",null,"Note that you should select the correct board type and COM port."),(0,i.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_3V3_Eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.yg)("h2",{id:"resource"},"Resource"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[Eagle]"),(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_3V3_Eagle.zip"},"USB To Uart 3V3 v1.0 Eagle File"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[PDF]"),(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB%20To%20Uart_3V3_Eagle/USB%20To%20Uart_3V3.pdf"},"USB To Uart_3V3 pdf"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[EAGLE]"),(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB%20To%20Uart_3V3_Eagle/USB%20To%20Uart_3V3.sch"},"USB To Uart_3V3 sch"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[PDF]"),(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_3V3_SCH.pdf"},"Schematic in pdf"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[Datasheet]"),(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/CH340DS1_EN.PDF"},"Datasheet of CH340")))),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);