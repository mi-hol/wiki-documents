"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[68449],{15680:(e,i,n)=>{n.d(i,{xA:()=>d,yg:()=>c});var a=n(96540);function r(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function t(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?t(Object(n),!0).forEach((function(i){r(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function l(e,i){if(null==e)return{};var n,a,r=function(e,i){if(null==e)return{};var n,a,r={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],i.indexOf(n)>=0||(r[n]=e[n]);return r}(e,i);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var i=a.useContext(s),n=i;return e&&(n="function"==typeof e?e(i):o(o({},i),e)),n},d=function(e){var i=u(e.components);return a.createElement(s.Provider,{value:i},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},g=a.forwardRef((function(e,i){var n=e.components,r=e.mdxType,t=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,c=p["".concat(s,".").concat(g)]||p[g]||m[g]||t;return n?a.createElement(c,o(o({ref:i},d),{},{components:n})):a.createElement(c,o({ref:i},d))}));function c(e,i){var n=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var t=n.length,o=new Array(t);o[0]=g;var l={};for(var s in i)hasOwnProperty.call(i,s)&&(l[s]=i[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<t;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},22872:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>t,metadata:()=>l,toc:()=>u});var a=n(9668),r=(n(96540),n(15680));const t={description:"Build a HMI Display for Windows/MacOS using Wio Terminal",title:"Build a HMI Display for Windows/MacOS using Wio Terminal",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-HMI-Usermode-SDK",last_update:{date:"1/17/2023",author:"jianjing Huang"}},o="Build a HMI Display for Windows/MacOS using Wio Terminal",l={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-HMI-Usermode-SDK",id:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-HMI-Usermode-SDK",title:"Build a HMI Display for Windows/MacOS using Wio Terminal",description:"Build a HMI Display for Windows/MacOS using Wio Terminal",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-HMI-Usermode-SDK.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client",slug:"/Wio-Terminal-HMI-Usermode-SDK",permalink:"/Wio-Terminal-HMI-Usermode-SDK",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-HMI-Usermode-SDK.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673913600,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{description:"Build a HMI Display for Windows/MacOS using Wio Terminal",title:"Build a HMI Display for Windows/MacOS using Wio Terminal",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-HMI-Usermode-SDK",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"MIDI",permalink:"/Wio-Terminal-USBCLIENT-MIDI"},next:{title:"Build a DAPLink Device using Wio Terminal",permalink:"/Wio-Terminal-DAPLink"}},s={},u=[{value:"Hardware Required",id:"hardware-required",level:2},{value:"Wio Terminal Firmware",id:"wio-terminal-firmware",level:2},{value:"<code>uf2</code> Method",id:"uf2-method",level:3},{value:"Host Device Firmware",id:"host-device-firmware",level:2},{value:"MacOS/Linux OS - C++ SDK",id:"macoslinux-os---c-sdk",level:3},{value:"Multiple Screens",id:"multiple-screens",level:4},{value:"Windows - Python SDK",id:"windows---python-sdk",level:3},{value:"Multiple Screens",id:"multiple-screens-1",level:4},{value:"Simple Demo",id:"simple-demo",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:u},p="wrapper";function m(e){let{components:i,...n}=e;return(0,r.yg)(p,(0,a.A)({},d,n,{components:i,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"build-a-hmi-display-for-windowsmacos-using-wio-terminal"},"Build a HMI Display for Windows/MacOS using Wio Terminal"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/banner.png"})),(0,r.yg)("p",null,"In this wiki, we will introduce how to use ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,r.yg)("strong",{parentName:"a"},"Wio Terminal"))," as HMI display using the ",(0,r.yg)("strong",{parentName:"p"},"usermode SDK for runing on Windows/Linux/Mac OS.")," This extends the possibilities of Wio Terminal in Industrial usage!"),(0,r.yg)("p",null,"If you want to use Wio Terminal with Raspberry Pi as HMI display, please check this ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-HMI/"},"wiki"),"."),(0,r.yg)("h2",{id:"hardware-required"},"Hardware Required"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,r.yg)("strong",{parentName:"a"},"Wio Terminal")))),(0,r.yg)("h2",{id:"wio-terminal-firmware"},"Wio Terminal Firmware"),(0,r.yg)("p",null,"First, you will need to upload an Arduino program to your Wio Terminal via your PC."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Download the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_USBDISP"},(0,r.yg)("strong",{parentName:"a"},"Seeed_Arduino_USBDISP"))," library here.")),(0,r.yg)("p",null,"There are two ",(0,r.yg)("strong",{parentName:"p"},"examples"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"NullFunctional")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"USBDisplayAndMouseControl"),":"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"If you want ",(0,r.yg)("strong",{parentName:"li"},"higher screen refresh rate on Wio Terminal"),", upload ",(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"NullFunctional"))," to Wio Terminal."),(0,r.yg)("li",{parentName:"ol"},"If you want ",(0,r.yg)("strong",{parentName:"li"},"Wio Terminal to also act as a USB Mouse"),", upload ",(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"strong"},"USBDisplayAndMouseControl"))," to Wio Terminal.")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Please ",(0,r.yg)("strong",{parentName:"p"},"make sure read the notes"),", for usermode SDK, ",(0,r.yg)("inlineCode",{parentName:"p"},"USBDISP().begin(true);")," becomes ",(0,r.yg)("inlineCode",{parentName:"p"},"USBDISP().begin(true, true);"),".")),(0,r.yg)("h3",{id:"uf2-method"},(0,r.yg)("inlineCode",{parentName:"h3"},"uf2")," Method"),(0,r.yg)("p",null,"For convenience, we also provide ",(0,r.yg)("inlineCode",{parentName:"p"},"uf2")," methods of uploading Wio Terminal's firmware. Simply download the ",(0,r.yg)("inlineCode",{parentName:"p"},"uf2")," files from below."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Download the ",(0,r.yg)("a",{parentName:"p",href:"http://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/NullFunctional-sdk.uf2"},"NullFunctional")," ",(0,r.yg)("inlineCode",{parentName:"p"},"uf2")," files.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Download the ",(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/USBDisplayAndMouseControl-sdk.uf2"},"USBDisplayAndMouseControl")," ",(0,r.yg)("inlineCode",{parentName:"p"},"uf2")," files."))),(0,r.yg)("p",null,"Entering the bootloader mode by sliding the power switch twice quickly. For more reference, please also see ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq"},"here"),"."),(0,r.yg)("p",null,"An external drive named ",(0,r.yg)("inlineCode",{parentName:"p"},"Arduino")," should appear in your PC. Drag the the downloaded uf2 files to the ",(0,r.yg)("inlineCode",{parentName:"p"},"Arduino")," drive."),(0,r.yg)("h2",{id:"host-device-firmware"},"Host Device Firmware"),(0,r.yg)("p",null,"This time our host device becomes our PC, let's walk through how you can use Wio Terminal as HMI display with the usermode SDK!"),(0,r.yg)("h3",{id:"macoslinux-os---c-sdk"},"MacOS/Linux OS - C++ SDK"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Download the firmware repo:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"cd ~\ngit clone https://github.com/Seeed-Studio/seeed-linux-usbdisp.git\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Navigate to the usermode sdk path:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"cd ~/seeed-linux-usbdisp/drivers/usermode-sdk/rpusbdisp-drv/src\n")),(0,r.yg)("p",null,"Open the ",(0,r.yg)("inlineCode",{parentName:"p"},"rpusbdisp.cc")," and ",(0,r.yg)("strong",{parentName:"p"},"define macros depending on your Wio Terminals firmware (Nullfunctional or USBDisplayAndMouseControl)"),". Uncomment the one that you are using:"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/macros.png"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Navigate back to the usermode sdk path:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"cd ~/seeed-linux-usbdisp/drivers/usermode-sdk\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Make and build the driver:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"make\n")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"You may require some dependent library such as ",(0,r.yg)("inlineCode",{parentName:"p"},"lisusb"),". MacOS can use ",(0,r.yg)("a",{parentName:"p",href:"https://brew.sh/"},(0,r.yg)("inlineCode",{parentName:"a"},"brew"))," and Linux OS can use ",(0,r.yg)("inlineCode",{parentName:"p"},"apt-get")," to install.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Navigate the build directory:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"cd ~/seeed-linux-usbdisp/drivers/usermode-sdk/build/\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Run the demo:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo ./rpusbdispdemo --demo 1\n")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/demo.gif"})),(0,r.yg)("p",null,"You should see that Wio Terminal is starting to display, the graphics are drawn. The source code for this is under: ",(0,r.yg)("inlineCode",{parentName:"p"},"seeed-linux-usbdisp/drivers/usermode-sdk/demo/src/main.cc"),"."),(0,r.yg)("h4",{id:"multiple-screens"},"Multiple Screens"),(0,r.yg)("p",null,"This C++ SDK also supports multiple screens (multiple Wio Terminals), for 2 screens usage simply run the demo 2:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo ./rpusbdispdemo --demo 2\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," Here provides 4 demos up to using 4 screens, you may check the source code for referencing your applications."),(0,r.yg)("h3",{id:"windows---python-sdk"},"Windows - Python SDK"),(0,r.yg)("p",null,"For Windows, you can run the usermode sdk on Python! First, make sure you have installed python and install the dependent library:"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"Python is cross-platform and you can run this demo on all platforms, including Windows/Linux/MacOS"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"pip3 install pyusb\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Go to the python-demo path:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"cd ~/seeed-linux-usbdisp/drivers/python-demo/\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Open the ",(0,r.yg)("inlineCode",{parentName:"li"},"simple-test.py")," and define the right macros with the firmware inside your Wio Terminal, and save.")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/macros-2.png"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Run the Python demo:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"python3 simple-test.py\n")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/simple-test.gif"})),(0,r.yg)("h4",{id:"multiple-screens-1"},"Multiple Screens"),(0,r.yg)("p",null,"This Python SDK also supports multiple screens (multiple Wio Terminals), you may check the ",(0,r.yg)("inlineCode",{parentName:"p"},"USBDisplay.py")," as reference."),(0,r.yg)("p",null,"This examples use 4 Wio Terminals as displays, which has a format looks like the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-py"},"devices = list(usb.core.find(find_all=True, idVendor=0x2886, idProduct=0x802D))\ndev1 = devices[0] # device 0\ndev2 = devices[1] # device 1\ndev3 = devices[2] # device 2\ndev4 = devices[3] # device 3\n")),(0,r.yg)("h2",{id:"simple-demo"},"Simple Demo"),(0,r.yg)("p",null,"This example simple transfer a image from PC side to the Wio Terminal using Python."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Go to the demo path:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"cd ~/seeed-linux-usbdisp/drivers/python-demo/\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Download the ",(0,r.yg)("inlineCode",{parentName:"li"},"image.jpg")," and save it in the same location as ",(0,r.yg)("inlineCode",{parentName:"li"},"image-test.py"),".")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," Please ",(0,r.yg)("strong",{parentName:"p"},"choose the macros that match your Wio Terminal firmware"),", otherwise there will be an error."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Run the demo:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"python3 image-test.py\n")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/image-demo.png"})),(0,r.yg)("h2",{id:"resource"},"Resource"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/rpusbdisp_interface_protocol.pdf"},"rpusbdisp interface protocols document"))),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);