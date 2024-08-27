"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[61321],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>c});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),y=p(a),u=r,c=y["".concat(s,".").concat(u)]||y[u]||m[u]||l;return a?n.createElement(c,i(i({ref:t},g),{},{components:a})):n.createElement(c,i({ref:t},g))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[y]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},72174:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(9668),r=(a(96540),a(15680));const l={description:"reTerminal DM Flash OS",title:"reTerminal DM Flash OS",keywords:["Edge","reTerminal-DM","Flash OS"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reterminal-dm-flash-OS",last_update:{date:"04/23/2023",author:"Peter Pan"}},i="reTerminal DM Flash Raspbian OS to eMMC",o={unversionedId:"Edge/Raspberry_Pi_Devices/reTerminal-DM/reterminal-dm-flash-OS",id:"Edge/Raspberry_Pi_Devices/reTerminal-DM/reterminal-dm-flash-OS",title:"reTerminal DM Flash OS",description:"reTerminal DM Flash OS",source:"@site/docs/Edge/Raspberry_Pi_Devices/reTerminal-DM/reterminal-dm-flash-OS.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reTerminal-DM",slug:"/reterminal-dm-flash-OS",permalink:"/reterminal-dm-flash-OS",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reTerminal-DM/reterminal-dm-flash-OS.md",tags:[],version:"current",lastUpdatedBy:"Peter Pan",lastUpdatedAt:1682208e3,formattedLastUpdatedAt:"Apr 23, 2023",frontMatter:{description:"reTerminal DM Flash OS",title:"reTerminal DM Flash OS",keywords:["Edge","reTerminal-DM","Flash OS"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reterminal-dm-flash-OS",last_update:{date:"04/23/2023",author:"Peter Pan"}},sidebar:"ProductSidebar",previous:{title:"reTerminal DM Getting Started",permalink:"/reterminal-dm"},next:{title:"reTerminal DM Warranty",permalink:"/reterminal-dm-warranty"}},s={},p=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Software Requirements",id:"software-requirements",level:2},{value:"Steps for Flashing Raspbian OS",id:"steps-for-flashing-raspbian-os",level:2},{value:"For Windows",id:"for-windows",level:3},{value:"For MAC",id:"for-mac",level:3},{value:"For Linux",id:"for-linux",level:3},{value:"Install Drivers",id:"install-drivers",level:2},{value:"Access reTerminal DM via SSH",id:"access-reterminal-dm-via-ssh",level:3},{value:"For Windows",id:"for-windows-1",level:5},{value:"For Mac/Linux",id:"for-maclinux",level:5},{value:"Install reTerminal drivers after flashing new Raspbian OS",id:"install-reterminal-drivers-after-flashing-new-raspbian-os",level:3},{value:"FAQ",id:"faq",level:2},{value:"Touch Screen orientation",id:"touch-screen-orientation",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],g={toc:p},y="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(y,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"reterminal-dm-flash-raspbian-os-to-emmc"},"reTerminal DM Flash Raspbian OS to eMMC"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg",alt:"pir",width:"600",height:"auto"})),(0,r.yg)("p",null,'reTerminal DM is A 10.1" open-source industrial HMI - an Integrated Device Master to unify data flow and manage the onsite device.'),(0,r.yg)("p",null,"Based on Raspberry Pi CM4, and as a Panel PC, HMI, PLC, IIoT Gateway all-in-one device, reTerminal DM is a new generation of interactive sensing hub with an IP65 industrial-grade large screen."),(0,r.yg)("p",null,"It is equipped with rich scalability and hybrid connectivity, supporting CAN bus, RS485, RS232, Gigabit Ethernet port, and other interfaces, as well as powerful wireless communication capabilities such as 4G, LoRa\xae, WiFi, and BLE."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"*","4G and LoRa\xae modules does not come with reTerminal DM by default, please purchase the relevant modules accordingly, for\n",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html"},"4G bundle"))),(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reTerminal-DM-p-5616.html"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"The Sensecraft Edge OS can be download from ",(0,r.yg)("a",{parentName:"p",href:"https://sourceforge.net/projects/reterminal-dm/files/Sensecraft-edge-OS-V0.3.10.tar.gz/download"},(0,r.yg)("strong",{parentName:"a"},"Here")),", please note that this Sensecraft Edge OS is currently developed based on reTerminal DM and only works with Production version reTerminal DM")),(0,r.yg)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,r.yg)("p",null,"You need to prepare the following hardware"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"reTerminal DM x 1"),(0,r.yg)("li",{parentName:"ul"},"Host Computer (Windows/Mac/Linux) x 1"),(0,r.yg)("li",{parentName:"ul"},"Ethernet cable x 1"),(0,r.yg)("li",{parentName:"ul"},"Power adapter (12V-24V) BYO"),(0,r.yg)("li",{parentName:"ul"},"USB Type-C cable x 1 ")),(0,r.yg)("h2",{id:"software-requirements"},"Software Requirements"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/raspberrypi/usbboot"},"usbboot tool")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.raspberrypi.com/software/"},"Raspberry Pi Imager APP"))),(0,r.yg)("h2",{id:"steps-for-flashing-raspbian-os"},"Steps for Flashing Raspbian OS"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 1.")," Flip the ",(0,r.yg)("inlineCode",{parentName:"p"},"boot mode switch")," located next to the USB Type-C port, make sure switch is set to ",(0,r.yg)("inlineCode",{parentName:"p"},"disable eMMC boot mode")," according to the diagram below:"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/flash.png",alt:"pir",width:"800",height:"auto"}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 2.")," Please use the USB Type-C data cable connect to the Type-C port on the reTerminal DM, as shown in the above image,")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 3.")," Please connect the Power Cord from the power supply to the reTerminal DM power port."))),(0,r.yg)("admonition",{type:"danger"},(0,r.yg)("p",{parentName:"admonition"},"Please make sure you have connected the power cord in the right polarity. ")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/power.png",alt:"pir",width:"800",height:"auto"})),(0,r.yg)("p",null,"Now let's move on to software set up on your host computer. Please follow the steps according to your desired operating system"),(0,r.yg)("h3",{id:"for-windows"},"For Windows"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,r.yg)("strong",{parentName:"p"},"rpiboot setup installer")," by click ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe"},"here"))," to install the necessary drivers and the boot tool")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 2.")," Connect reTerminal DM to the PC via USB Type-C cable"))),(0,r.yg)("p",null,"Windows will now find the hardware and install the necessary drivers"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 3.")," Search for ",(0,r.yg)("strong",{parentName:"p"},"rpiboot")," tool that we installed before and open it")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 4.")," Open ",(0,r.yg)("strong",{parentName:"p"},"file explorer")," and you will see the eMMC of the Computer Module 4 shown as a ",(0,r.yg)("strong",{parentName:"p"},"USB mass storage device"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 5.")," Download ",(0,r.yg)("strong",{parentName:"p"},"Raspberry Pi Imager")," software from ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"https://www.raspberrypi.org/software/"},"here")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 6.")," Open Raspberry Pi Imager software"))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png",alt:"pir",width:"600",height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 7.")," Press ",(0,r.yg)("strong",{parentName:"li"},"CTRL + SHIFT + X")," on the keyboard to open ",(0,r.yg)("strong",{parentName:"li"},"Advanced options")," window")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png",alt:"pir",width:"600",height:"auto"})),(0,r.yg)("p",null,"Here you can ",(0,r.yg)("strong",{parentName:"p"},"set a hostname, enable SSH, set a password, configure wiFi, set locale settings")," and more"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 8.")," Click ",(0,r.yg)("strong",{parentName:"li"},"CHOOSE OS")," and select your preferred OS")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png",alt:"pir",width:"600",height:"auto"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"NOTE:")," You can select other OS such as ",(0,r.yg)("strong",{parentName:"p"},"64-bit Ubuntu")," by navigating into ",(0,r.yg)("strong",{parentName:"p"},"Other general purpose OS")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg",alt:"pir",width:"1000",height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 9.")," Click ",(0,r.yg)("strong",{parentName:"p"},"CHOOSE STORAGE")," and select the connected eMMC drive")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 10.")," Finally, click ",(0,r.yg)("strong",{parentName:"p"},"WRITE")))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png",alt:"pir",width:"600",height:"auto"})),(0,r.yg)("p",null,"Please wait a few minutes until the flashing process is complete."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 11.")," Flip the ",(0,r.yg)("strong",{parentName:"li"},"Boot Mode switch")," back to the original position")),(0,r.yg)("p",null,"Now you can skip to ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"#install-drivers"},"here"))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Once the above steps finished and you have reapply the power to the reTerminal DM, the Power LED should turn on yellow color and the ACT LED should flashing green color, but the screen is blank and no backlight. please do not panic, you just need to following the ",(0,r.yg)("a",{parentName:"p",href:"#install-drivers"},"install drivers")," steps to revive the screen.")),(0,r.yg)("h3",{id:"for-mac"},"For MAC"),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"You need to install ",(0,r.yg)("a",{parentName:"strong",href:"https://brew.sh/"},"homebrew")," before proceed the following steps."),"\nPlease open a terminal and type ",(0,r.yg)("inlineCode",{parentName:"p"},"brew -V")," to check if you have setup the correct homebrew environment, you should see the version of the homebrew environment you have installed.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 1.")," Clone the ",(0,r.yg)("strong",{parentName:"li"},"usbboot")," repository")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"git clone --depth=1 https://github.com/raspberrypi/usbboot\ncd usbboot\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 2.")," Install ",(0,r.yg)("strong",{parentName:"li"},"libusb"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"brew install libusb\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 3.")," Install ",(0,r.yg)("strong",{parentName:"li"},"pkg-config"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"brew install pkg-config\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 4.")," Build using make")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"make\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 5.")," Run the binary")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo ./rpiboot\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 6.")," Connect reTerminal to the your Mac computer via USB Type-C cable")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 7.")," Download and Install ",(0,r.yg)("strong",{parentName:"p"},"Raspberry Pi Imager")," Application by visiting ",(0,r.yg)("a",{parentName:"p",href:"https://www.raspberrypi.org/software/"},"this link"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 8.")," Open the ",(0,r.yg)("strong",{parentName:"p"},"Raspberry Pi Imager")," Application"))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png",alt:"pir",width:"600",height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 9.")," Press ",(0,r.yg)("strong",{parentName:"li"},"CTRL + SHIFT + X")," on the keyboard to open ",(0,r.yg)("strong",{parentName:"li"},"Advanced options")," window")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png",alt:"pir",width:"600",height:"auto"})),(0,r.yg)("p",null,"Here you can ",(0,r.yg)("strong",{parentName:"p"},"set a hostname, enable SSH, set a password, configure wifi, set locale settings")," and more"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 10.")," Click ",(0,r.yg)("strong",{parentName:"li"},"CHOOSE OS")," and select your preferred OS")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png",alt:"pir",width:"600",height:"auto"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"NOTE:")," You can select OS such as ",(0,r.yg)("strong",{parentName:"p"},"64-bit Ubuntu")," by navigating into ",(0,r.yg)("strong",{parentName:"p"},"Other general purpose OS")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg",alt:"pir",width:"1000",height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 11.")," Click ",(0,r.yg)("strong",{parentName:"p"},"CHOOSE STORAGE")," and select the connected eMMC drive")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 12.")," Finally, click ",(0,r.yg)("strong",{parentName:"p"},"WRITE")))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png",alt:"pir",width:"600",height:"auto"})),(0,r.yg)("p",null,"Please wait a few minutes until the flashing process is complete."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 13.")," Flip the ",(0,r.yg)("strong",{parentName:"li"},"Boot Mode switch")," back to the original position")),(0,r.yg)("p",null,"Now you can skip to ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"#install-drivers"},"here"))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Once the above steps finished and you have reapply the power to the reTerminal DM, you should experience that the Power LED should turn on yellow color and the ACT LED should flashing green color, but the screen is blank and no backlight. please do not panic, you just need to following the ",(0,r.yg)("a",{parentName:"p",href:"#install-drivers"},"install drivers")," steps to revive the screen.")),(0,r.yg)("h3",{id:"for-linux"},"For Linux"),(0,r.yg)("p",null,"We will use Git to obtain the ",(0,r.yg)("strong",{parentName:"p"},"rpiboot")," source code, so make sure Git is installed"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 1.")," Open a ",(0,r.yg)("strong",{parentName:"li"},"Terminal")," window and type the following to update the ",(0,r.yg)("strong",{parentName:"li"},"packages list"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get update\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 2.")," Install ",(0,r.yg)("strong",{parentName:"li"},"Git")," by the following command")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt install git libusb-1.0-0-dev pkg-config build-essential\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 3.")," Git might produce an error if the date is not set properly. Type the following to correct this")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo date MMDDhhmm\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"NOTE:")," Where ",(0,r.yg)("strong",{parentName:"p"},"MM")," is the month, ",(0,r.yg)("strong",{parentName:"p"},"DD")," is the date, and ",(0,r.yg)("strong",{parentName:"p"},"hh")," and ",(0,r.yg)("strong",{parentName:"p"},"mm")," are hours and minutes respectively."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 4.")," Clone the ",(0,r.yg)("strong",{parentName:"li"},"usbboot")," tool repository")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"git clone --depth=1 https://github.com/raspberrypi/usbboot\ncd usbboot\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 5.")," Build and install the usbboot tool")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"make\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 6.")," Run the usbboot tool and it will wait for a connection")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo ./rpiboot\n")),(0,r.yg)("p",null,"The result is shown as below:"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/result_of_command.png",alt:"pir",width:"1000",height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 7.")," Connect reTerminal to the PC via USB Type-C cable")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 8.")," Download snap "))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt install snap\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 9.")," Download ",(0,r.yg)("strong",{parentName:"li"},"rpi-imager")," ")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"snap install rpi-imager\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 10.")," Open Raspberry Pi Imager software")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"rpi-imager\n")),(0,r.yg)("p",null,"The result is shown as below:"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png",alt:"pir",width:"600",height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 11.")," Press ",(0,r.yg)("strong",{parentName:"li"},"CTRL + SHIFT + X")," on the keyboard to open ",(0,r.yg)("strong",{parentName:"li"},"Advanced options")," window")),(0,r.yg)("p",null,"Set a hostname, set a password, configure wifi, set locale settings"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/cltaltx.png",alt:"pir",width:"600",height:"auto"})),(0,r.yg)("p",null,"Enable SSH"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png",alt:"pir",width:"600",height:"auto"})),(0,r.yg)("p",null,"Here you can ",(0,r.yg)("strong",{parentName:"p"},"set a hostname, enable SSH, set a password, configure wifi, set locale settings")," and more"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 11.")," Click ",(0,r.yg)("strong",{parentName:"li"},"CHOOSE OS")," and select your preferred OS")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png",alt:"pir",width:"600",height:"auto"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"NOTE:")," You can select OS such as ",(0,r.yg)("strong",{parentName:"p"},"64-bit Ubuntu")," by navigating into ",(0,r.yg)("strong",{parentName:"p"},"Other general purpose OS")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg",alt:"pir",width:"1000",height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 12.")," Click ",(0,r.yg)("strong",{parentName:"p"},"CHOOSE STORAGE")," and select the connected eMMC drive")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 13.")," Finally, click ",(0,r.yg)("strong",{parentName:"p"},"NEXT")," and ",(0,r.yg)("strong",{parentName:"p"},"YES")))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png",alt:"pir",width:"600",height:"auto"})),(0,r.yg)("p",null,"Please wait a few minutes until the flashing process is complete.\nThe result is shown as below:"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png",alt:"pir",width:"600",height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 14.")," Flip the ",(0,r.yg)("strong",{parentName:"li"},"Boot Mode Switch")," back to the original position")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Once the above steps finished and you have reapply the power to the reTerminal DM, you should experience that the Power LED should turn on yellow color and the ACT LED should flashing green color, but the screen is blank and no backlight. please do not panic, you just need to following the ",(0,r.yg)("a",{parentName:"p",href:"#install-drivers"},"install drivers")," steps to revive the screen.")),(0,r.yg)("h2",{id:"install-drivers"},"Install Drivers"),(0,r.yg)("h3",{id:"access-reterminal-dm-via-ssh"},"Access reTerminal DM via SSH"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"The following steps require some basic Linux command line knowledge, Please prepare yourself a cup of coffee and getting ready.")),(0,r.yg)("p",null,"As following the above flashing OS steps, the reTerminal DM should have SSH enabled with the hostname of ",(0,r.yg)("inlineCode",{parentName:"p"},"raspberrypi.local"),"."),(0,r.yg)("p",null,"Now please connect the Ethernet cable to the reTerminal DM and a router which is on the same network as your host computer."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"To test if your reTerminal DM is on the same network with host computer, you can use ",(0,r.yg)("inlineCode",{parentName:"p"},"ping raspberrypi.local")),(0,r.yg)("p",{parentName:"admonition"},"if you see the following output after the ping command which means both devices are on the same network:"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/ping.png",alt:"pir",width:"600",height:"auto"}))),(0,r.yg)("h5",{id:"for-windows-1"},"For Windows"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 1.")," Open ",(0,r.yg)("strong",{parentName:"li"},"Command Prompt")," and type the following")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"# ssh username@hostname\nssh pi@raspberrypi.local\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 2.")," Type ",(0,r.yg)("strong",{parentName:"li"},"yes")," for the prompt")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png",alt:"pir",width:"750",height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 3.")," Enter the password as follows")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"raspberry\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 4.")," If you have sucessfully logged into the Raspberry Pi OS, you will see the following output")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png",alt:"pir",width:"1000",height:"auto"})),(0,r.yg)("h5",{id:"for-maclinux"},"For Mac/Linux"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 1.")," Open ",(0,r.yg)("strong",{parentName:"li"},"Terminal")," on the computer and type the following")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"ssh pi@raspberrypi.local\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 2.")," Type ",(0,r.yg)("strong",{parentName:"li"},"yes")," for the following message")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"ECDSA key fingerprint is SHA256:XXXXXXX.\nAre you sure you want to continue connecting (yes/no/[fingerprint])?\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 3.")," When it asks for the password, type the following")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"raspberry\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 4.")," If you have sucessfully logged into the Raspberry Pi OS, you will see the following output")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png",alt:"pir",width:"900",height:"auto"})),(0,r.yg)("h3",{id:"install-reterminal-drivers-after-flashing-new-raspbian-os"},"Install reTerminal drivers after flashing new Raspbian OS"),(0,r.yg)("p",null,"reTerminal DM comes with the necessary drivers pre-installed out-of-the-box so you don't need to install any additional drivers. However, if you flash new OS by yourself, you need to install the necessary drivers separately."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"For install 32-bit OS driver, Please carefully follow the steps below:")),(0,r.yg)("p",{parentName:"admonition"},"The Operating System that pre-installed on reTerminal DM is 64-bit, if you wish to install 32-bit OS please use the following method to install the DTS drivers."),(0,r.yg)("p",{parentName:"admonition"},"Please follow the ",(0,r.yg)("a",{parentName:"p",href:"#access-reterminal-dm-via-ssh"},(0,r.yg)("strong",{parentName:"a"},"Access reTerminal DM via SSH"))," step, and then enter the following command:"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"echo arm_64bit=0 | sudo tee -a /boot/config.txt\n")),(0,r.yg)("p",{parentName:"admonition"},"Then continue the ",(0,r.yg)("a",{parentName:"p",href:"#install-reterminal-drivers-after-flashing-new-raspbian-os"},(0,r.yg)("strong",{parentName:"a"},"Install drivers after flashing new Raspbian OS process")))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 1.")," Clone the following repo in the ssh shell you have connected to reTerminal DM from the above steps")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt install git -y\ngit clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 2.")," Enter the repo")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"cd seeed-linux-dtoverlays\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 3.")," Type the following to install the drivers")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo ./scripts/reTerminal.sh --device reTerminal-plus\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 4.")," Reboot the reTerminal DM")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo reboot\n")),(0,r.yg)("p",null,"Now your screen should light up and run normally."),(0,r.yg)("h2",{id:"faq"},"FAQ"),(0,r.yg)("h3",{id:"touch-screen-orientation"},"Touch Screen orientation"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Q: The screen touch panel is orientate differently from the screen display?")," "),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"A: Please carefully follow the steps below:")),(0,r.yg)("p",null,"Please follow the ",(0,r.yg)("a",{parentName:"p",href:"#access-reterminal-dm-via-ssh"},"access reTerminal DM via SSH")," step, and then enter the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'echo \'ATTRS{name}=="gt9271", ENV{LIBINPUT_CALIBRATION_MATRIX}="0  1.0  0 -1.0 0 1.0 0 0 1.0"\' | sudo tee -a /etc/udev/rules.d/98-touchscreen-cal.rules\n')),(0,r.yg)("p",null,"Then reboot:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo reboot\n")),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);