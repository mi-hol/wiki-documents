"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[48274],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=d(n),y=a,m=g["".concat(u,".").concat(y)]||g[y]||s[y]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},16265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(9668),a=(n(96540),n(15680));const o={description:"Seeed Studio XIAO SAMD21 with MicroPython",title:"MicroPython",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-SAMD21-MicroPython",last_update:{date:"1/11/2023",author:"shuxu hu"}},i="**Seeed Studio XIAO SAMD21 with MicroPython**",l={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/XIAO-SAMD21-MicroPython",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/XIAO-SAMD21-MicroPython",title:"MicroPython",description:"Seeed Studio XIAO SAMD21 with MicroPython",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/XIAO-SAMD21-MicroPython.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21",slug:"/XIAO-SAMD21-MicroPython",permalink:"/XIAO-SAMD21-MicroPython",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/XIAO-SAMD21-MicroPython.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"Seeed Studio XIAO SAMD21 with MicroPython",title:"MicroPython",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-SAMD21-MicroPython",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"CircuitPython",permalink:"/Seeeduino-XIAO-CircuitPython"},next:{title:"TinyML on Seeed Studio XIAO SAMD21",permalink:"/Seeeduino-XIAO-TinyML"}},u={},d=[{value:"<strong>Introduction of MicroPython</strong>",id:"introduction-of-micropython",level:2},{value:"<strong>Getting Started</strong>",id:"getting-started",level:2},{value:"<strong>Hardware Setup</strong>",id:"hardware-setup",level:3},{value:"<strong>Software Setup</strong>",id:"software-setup",level:3},{value:"<strong>Connect Seeed Studio XIAO SAMD21 to the PC and Light it up</strong>",id:"connect-seeed-studio-xiao-samd21-to-the-pc-and-light-it-up",level:3},{value:"Software Development",id:"software-development",level:2},{value:"SEEED XIAO SAMD21 pin assignment table",id:"seeed-xiao-samd21-pin-assignment-table",level:3},{value:"Upload your code",id:"upload-your-code",level:3},{value:"GPIO TEST (LED)",id:"gpio-test-led",level:3},{value:"GPIO Control Relays",id:"gpio-control-relays",level:3},{value:"Human detection for automatic control",id:"human-detection-for-automatic-control",level:3},{value:"I2C Support",id:"i2c-support",level:3},{value:"MicroPython Device Console",id:"micropython-device-console",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:d},g="wrapper";function s(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"seeed-studio-xiao-samd21-with-micropython"},(0,a.yg)("strong",{parentName:"h1"},"Seeed Studio XIAO SAMD21 with MicroPython")),(0,a.yg)("h2",{id:"introduction-of-micropython"},(0,a.yg)("strong",{parentName:"h2"},"Introduction of MicroPython")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/micropython/micropython/wiki"},"MicroPython")," is a Python interprer with a partial native code compilation feature. It provides a subset of Python 3.5 features, implemented for embedded processors and constrained systems. It is different from CPython and you can read more about the differences ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/micropython/micropython/wiki/Differences"},"here"),"."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png"})),(0,a.yg)("h2",{id:"getting-started"},(0,a.yg)("strong",{parentName:"h2"},"Getting Started")),(0,a.yg)("p",null,"First, we are going to connect the Seeed Studio XIAO SAMD21 to the computer and upload a simple code from MicroPython to check whether the board is functioning well."),(0,a.yg)("h3",{id:"hardware-setup"},(0,a.yg)("strong",{parentName:"h3"},"Hardware Setup")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Seeed Studio XIAO SAMD21")," x1"),(0,a.yg)("li",{parentName:"ul"},"Type-C cable x1"),(0,a.yg)("li",{parentName:"ul"},"PC x1")),(0,a.yg)("h3",{id:"software-setup"},(0,a.yg)("strong",{parentName:"h3"},"Software Setup")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 1"),". Download and Install the latest version of ",(0,a.yg)("a",{parentName:"li",href:"https://thonny.org/"},"Thonny editor")," according to your operating system")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:550,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Step 2"),". Launch the Thonny")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Step 3"),". Click ",(0,a.yg)("strong",{parentName:"p"},'"Tools--\x3eOptions"')," to open the settings."))),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:550,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 4"),'. Chose the "Interpreter" interface and select the device as ',(0,a.yg)("strong",{parentName:"li"},'"MicroPython(generic)"')," and the port as ",(0,a.yg)("strong",{parentName:"li"},'"Try to detect port automatically"'))),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:550,src:"https://files.seeedstudio.com/wiki/XIAO_SAMD/img/1.jpg"})),(0,a.yg)("h3",{id:"connect-seeed-studio-xiao-samd21-to-the-pc-and-light-it-up"},(0,a.yg)("strong",{parentName:"h3"},"Connect Seeed Studio XIAO SAMD21 to the PC and Light it up")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 1"),'. Press and hold the "BOOT" button and then connect the Seeed Studio XIAO SAMD21 to the PC through the Type-C cable. If it works well, there is an "Arduino" desk shown on the PC.')),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/XIAO_SAMD/img/2.jpg"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 2"),". Flash the firmware")),(0,a.yg)("p",null,"For windows:"),(0,a.yg)("p",null,"Copy the ",(0,a.yg)("a",{parentName:"p",href:"https://micropython.org/resources/firmware/SEEED_XIAO-20220618-v1.19.1.uf2"},"Seeed XIAO SAMD21 firmware for MicroPython Support ")," and place it in this folder"),(0,a.yg)("p",null,"For Linux:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'wget "https://micropython.org/resources/firmware/SEEED_XIAO-20220618-v1.19.1.uf2"\ncp SEEED_XIAO-20220618-v1.19.1.uf2 /media/$USER/Arduino/\n')),(0,a.yg)("p",null,"It is also possible to ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Compiling_MicroPython_for_embedded_devices/"},"compile your own firmware")," in order to ensure security and support for the latest features, but this is not necessary."),(0,a.yg)("h2",{id:"software-development"},"Software Development"),(0,a.yg)("h3",{id:"seeed-xiao-samd21-pin-assignment-table"},"SEEED XIAO SAMD21 pin assignment table"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Pin"),(0,a.yg)("th",{parentName:"tr",align:null},"GPIO"),(0,a.yg)("th",{parentName:"tr",align:null},"Xiao Pin name"),(0,a.yg)("th",{parentName:"tr",align:null},"IRQ"),(0,a.yg)("th",{parentName:"tr",align:null},"ADC"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"2"),(0,a.yg)("td",{parentName:"tr",align:null},"PA02"),(0,a.yg)("td",{parentName:"tr",align:null},"0"),(0,a.yg)("td",{parentName:"tr",align:null},"2"),(0,a.yg)("td",{parentName:"tr",align:null},"0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"4"),(0,a.yg)("td",{parentName:"tr",align:null},"PA04"),(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"4"),(0,a.yg)("td",{parentName:"tr",align:null},"4")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"10"),(0,a.yg)("td",{parentName:"tr",align:null},"PA10"),(0,a.yg)("td",{parentName:"tr",align:null},"2"),(0,a.yg)("td",{parentName:"tr",align:null},"10"),(0,a.yg)("td",{parentName:"tr",align:null},"18")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"11"),(0,a.yg)("td",{parentName:"tr",align:null},"PA11"),(0,a.yg)("td",{parentName:"tr",align:null},"3"),(0,a.yg)("td",{parentName:"tr",align:null},"11"),(0,a.yg)("td",{parentName:"tr",align:null},"19")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"8"),(0,a.yg)("td",{parentName:"tr",align:null},"PA08"),(0,a.yg)("td",{parentName:"tr",align:null},"4"),(0,a.yg)("td",{parentName:"tr",align:null},"*"),(0,a.yg)("td",{parentName:"tr",align:null},"16")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"9"),(0,a.yg)("td",{parentName:"tr",align:null},"PA09"),(0,a.yg)("td",{parentName:"tr",align:null},"5"),(0,a.yg)("td",{parentName:"tr",align:null},"9"),(0,a.yg)("td",{parentName:"tr",align:null},"17")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"40"),(0,a.yg)("td",{parentName:"tr",align:null},"PB082"),(0,a.yg)("td",{parentName:"tr",align:null},"6"),(0,a.yg)("td",{parentName:"tr",align:null},"8"),(0,a.yg)("td",{parentName:"tr",align:null},"2")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"41"),(0,a.yg)("td",{parentName:"tr",align:null},"PB09"),(0,a.yg)("td",{parentName:"tr",align:null},"7"),(0,a.yg)("td",{parentName:"tr",align:null},"9"),(0,a.yg)("td",{parentName:"tr",align:null},"3")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"7"),(0,a.yg)("td",{parentName:"tr",align:null},"PA07"),(0,a.yg)("td",{parentName:"tr",align:null},"8"),(0,a.yg)("td",{parentName:"tr",align:null},"7"),(0,a.yg)("td",{parentName:"tr",align:null},"7")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"5"),(0,a.yg)("td",{parentName:"tr",align:null},"PA05"),(0,a.yg)("td",{parentName:"tr",align:null},"9"),(0,a.yg)("td",{parentName:"tr",align:null},"5"),(0,a.yg)("td",{parentName:"tr",align:null},"5")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"6"),(0,a.yg)("td",{parentName:"tr",align:null},"PA06"),(0,a.yg)("td",{parentName:"tr",align:null},"10"),(0,a.yg)("td",{parentName:"tr",align:null},"6"),(0,a.yg)("td",{parentName:"tr",align:null},"6")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"18"),(0,a.yg)("td",{parentName:"tr",align:null},"PA18"),(0,a.yg)("td",{parentName:"tr",align:null},"RX_LED"),(0,a.yg)("td",{parentName:"tr",align:null},"2"),(0,a.yg)("td",{parentName:"tr",align:null},"*")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"30"),(0,a.yg)("td",{parentName:"tr",align:null},"PA30"),(0,a.yg)("td",{parentName:"tr",align:null},"SWCLK"),(0,a.yg)("td",{parentName:"tr",align:null},"10"),(0,a.yg)("td",{parentName:"tr",align:null},"*")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"31"),(0,a.yg)("td",{parentName:"tr",align:null},"PA31"),(0,a.yg)("td",{parentName:"tr",align:null},"SWDIO"),(0,a.yg)("td",{parentName:"tr",align:null},"11"),(0,a.yg)("td",{parentName:"tr",align:null},"*")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"19"),(0,a.yg)("td",{parentName:"tr",align:null},"PA19"),(0,a.yg)("td",{parentName:"tr",align:null},"TX_LED"),(0,a.yg)("td",{parentName:"tr",align:null},"3"),(0,a.yg)("td",{parentName:"tr",align:null},"*")))),(0,a.yg)("h3",{id:"upload-your-code"},"Upload your code"),(0,a.yg)("p",null,'Upload the codes by clicking the "Run current script" button. For the first time, Thonny will ask where you want to save your codes file. Both ',(0,a.yg)("strong",{parentName:"p"},"This Computer")," and ",(0,a.yg)("strong",{parentName:"p"},"MicroPython device")," are fine."),(0,a.yg)("p",null,"If you want to use the program offline, you should save the program to XIAO SAMD21"),(0,a.yg)("p",null,"Press and hold Ctrl + Shift + S at the same time , then select save to ",(0,a.yg)("strong",{parentName:"p"},"MicroPython device")," "),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/XIAO_SAMD/img/6.jpg"})),(0,a.yg)("h3",{id:"gpio-test-led"},"GPIO TEST (LED)"),(0,a.yg)("p",null,"We need to prepare:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Seeed Studio XIAO SAMD21"))),(0,a.yg)("p",null,"Copy the following codes to Thonny."),(0,a.yg)("p",null,"We can see that the blue RX_LED is lit up and blinks once per second"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Python"},"from machine import Pin, Timer\n \nled = Pin(18, Pin.OUT)\nCounter = 0\nFun_Num = 0\n \ndef fun(tim):\n    global Counter\n    Counter = Counter + 1 \n    print(Counter)\n    led.value(Counter%2)\n \ntim = Timer(-1)\ntim.init(period=500, mode=Timer.PERIODIC, callback=fun)\n")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/XIAO_SAMD/img/3.gif"})),(0,a.yg)("h3",{id:"gpio-control-relays"},"GPIO Control Relays"),(0,a.yg)("p",null,"We need to prepare:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board/"},"Seeeduino-XIAO-Expansion-Board")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-Relay.html"},"Grove-Relay")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Seeed Studio XIAO SAMD21"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Python"},"from machine import Pin, Timer\n\noutput_4 = Pin(8, Pin.OUT)\ndetect_1 = Pin(4, Pin.IN, Pin.PULL_UP)\noutput_value = Pin(2, Pin.OUT)\nCounter = 0\n     \ndef fun(tim):\n    global Counter\n    Counter = Counter + 1\n    output_4.value(Counter%2)\n    print(Counter%2,detect_1.value())\n    if detect_1.value() :\n        output_value.value(1)\n    else:\n        output_value.value(0)\n \ntim = Timer(-1)\ntim.init(period=200, mode=Timer.PERIODIC, callback=fun)\n")),(0,a.yg)("div",{align:"center"},(0,a.yg)("video",{width:600,height:240,controls:!0},(0,a.yg)("source",{src:"https://files.seeedstudio.com/wiki/XIAO_SAMD/img/4.mp4",type:"video/mp4"}),"Your browser does not support the video tag.")),(0,a.yg)("h3",{id:"human-detection-for-automatic-control"},"Human detection for automatic control"),(0,a.yg)("p",null,"We need to prepare:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html?queryID=32e8107bce436db9b886cf1b8c698667&objectID=5304&indexName=bazaar_retailer_products"},"Doppler radar for human detection")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board/"},"Seeeduino-XIAO-Expansion-Board")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-Relay.html"},"Grove-Relay")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Seeed Studio XIAO SAMD21"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Python"},"from machine import Pin, Timer\n\nled = Pin(8, Pin.OUT)\n\ninput_value_1 = Pin(4, Pin.IN, Pin.PULL_UP)\ninput_value_2 = Pin(10, Pin.IN, Pin.PULL_UP)\noutput_value = Pin(2, Pin.OUT)\n\nCounter = 0\nFun_Num = 0\n     \ndef fun(tim):\n    global Counter\n    Counter = Counter + 1\n    led.value(Counter%2)\n    print(input_value_1.value(),input_value_2.value())\n    if input_value_1.value() :\n        output_value.value(1)\n    else:\n        output_value.value(0)\n \ntim = Timer(-1)\ntim.init(period=50, mode=Timer.PERIODIC, callback=fun)\n")),(0,a.yg)("div",{align:"center"},(0,a.yg)("video",{width:600,height:240,controls:!0},(0,a.yg)("source",{src:"https://files.seeedstudio.com/wiki/XIAO_SAMD/img/5.mp4",type:"video/mp4"}),"Your browser does not support the video tag.")),(0,a.yg)("h3",{id:"i2c-support"},"I2C Support"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Python"},"from machine import Pin, SoftI2C\n\ni2c = SoftI2C(scl=Pin(9), sda=Pin(8), freq=100000)\ndevices = i2c.scan()\nfor device in devices:  \n    print(\"Decimal address: \",device,\" | Hexa address: \",hex(device))\n\ni2c.writeto(0x51, 'b')\nprint(i2c.readfrom(0x51, 4))   # read 4 bytes from device with address 0x51\ni2c.writeto(0x51, 'a') # write 'a' to device with address 0x51\nprint(i2c.readfrom(0x51, 4))   # read 4 bytes from device with address 0x51\ni2c.writeto(0x51, 'b')\nprint(i2c.readfrom(0x51, 4)) \n\n")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO_SAMD/img/8.png"})),(0,a.yg)("p",null,"Familiarity with micropython allows you to do more , we are looking forward to creating more value for you. Feel free to share your projects with us too!"),(0,a.yg)("h2",{id:"micropython-device-console"},"MicroPython Device Console"),(0,a.yg)("p",null,"Our partner ",(0,a.yg)("strong",{parentName:"p"},"Neil")," has written a command line console program for XIAO using MicroPython. With this programme you can easily upload, download and delete files. We thank him for his contribution to XIAO!"),(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}s.isMDXComponent=!0}}]);