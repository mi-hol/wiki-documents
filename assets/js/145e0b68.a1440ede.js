"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[80202],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),g=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=g(r),m=a,y=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(y,o(o({ref:t},d),{},{components:r})):n.createElement(y,o({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var g=2;g<i;g++)o[g]=r[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77124:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var n=r(9668),a=(r(96540),r(15680));const i={description:"Grove - Flame Sensor",title:"Grove - Flame Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Flame_Sensor",last_update:{date:"1/5/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Light/Grove-Flame_Sensor",id:"Sensor/Grove/Grove_Sensors/Light/Grove-Flame_Sensor",title:"Grove - Flame Sensor",description:"Grove - Flame Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Light/Grove-Flame_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Light",slug:"/Grove-Flame_Sensor",permalink:"/Grove-Flame_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Light/Grove-Flame_Sensor.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{description:"Grove - Flame Sensor",title:"Grove - Flame Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Flame_Sensor",last_update:{date:"1/5/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Line Finder V1.1",permalink:"/Grove-Line_Finder"},next:{title:"Grove - Infrared Reflective Sensor",permalink:"/Grove-Infrared_Reflective_Sensor"}},s={},g=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Play with Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play with Codecraft",id:"play-with-codecraft",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Play With Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Hardware",id:"hardware-2",level:4},{value:"Software",id:"software-2",level:4},{value:"Reference",id:"reference",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],d={toc:g},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/Flame_Sensor_01.jpg"})),(0,a.yg)("p",null,"The Grove - Flame Sensor can be used to detect fire source or other light sources of the wavelength in the range of 760nm - 1100 nm. It is based on the YG1006 sensor which is a high speed and high sensitive NPN silicon phototransistor. Due to its black epoxy, the sensor is sensitive to infrared radiation. In fire fighting robot game, the sensor plays a very important role, it can be used as a robot eyes to find the fire source."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("a",{href:"https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html",target:"_blank"},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png"}))),(0,a.yg)("h2",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Grove Interface"),(0,a.yg)("li",{parentName:"ul"},"High Photo Sensitivity"),(0,a.yg)("li",{parentName:"ul"},"Fast Response Time"),(0,a.yg)("li",{parentName:"ul"},"Easy to use"),(0,a.yg)("li",{parentName:"ul"},"Sensitivity is adjustable")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,a.yg)("h2",{id:"specifications"},"Specifications"),(0,a.yg)("table",{border:"1",cellspacing:"0",width:"80%"},(0,a.yg)("tr",null,(0,a.yg)("th",{scope:"col"},"Item"),(0,a.yg)("th",{scope:"col"},"Min"),(0,a.yg)("th",{scope:"col"},"Typical"),(0,a.yg)("th",{scope:"col"},"Max"),(0,a.yg)("th",{scope:"col"},"Unit")),(0,a.yg)("tr",{align:"center"},(0,a.yg)("th",{scope:"row"},"Voltage"),(0,a.yg)("td",null,"4.75"),(0,a.yg)("td",null,"5.0"),(0,a.yg)("td",null,"5.30"),(0,a.yg)("td",null,"VDC")),(0,a.yg)("tr",{align:"center"},(0,a.yg)("th",{scope:"row"},"Current"),(0,a.yg)("td",null,"/"),(0,a.yg)("td",null,"20"),(0,a.yg)("td",null,"/"),(0,a.yg)("td",null,"mA")),(0,a.yg)("tr",{align:"center"},(0,a.yg)("th",{scope:"row"},"Range of Spectral Bandwidth"),(0,a.yg)("td",null,"760"),(0,a.yg)("td",null,"940"),(0,a.yg)("td",null,"1100"),(0,a.yg)("td",null,"nm")),(0,a.yg)("tr",{align:"center"},(0,a.yg)("th",{scope:"row"},"Detection range"),(0,a.yg)("td",null,"0"),(0,a.yg)("td",null,"~"),(0,a.yg)("td",null,"1"),(0,a.yg)("td",null,"m")),(0,a.yg)("tr",{align:"center"},(0,a.yg)("th",{scope:"row"},"Response Time"),(0,a.yg)("td",{colspan:"3"},"15"),(0,a.yg)("td",null,"\u03bcS")),(0,a.yg)("tr",{align:"center"},(0,a.yg)("th",{scope:"row"},"Operating Temperature"),(0,a.yg)("td",null,"-25"),(0,a.yg)("td",null,"~"),(0,a.yg)("td",null,"85"),(0,a.yg)("td",null,"\u2103"))),(0,a.yg)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,a.yg)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,a.yg)("th",{parentName:"tr",align:null}),(0,a.yg)("th",{parentName:"tr",align:null}),(0,a.yg)("th",{parentName:"tr",align:null}))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg"}))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,a.yg)("h2",{id:"getting-started"},"Getting started"),(0,a.yg)("p",null,"The module is mainly used to detect the infrared light. It outputs digital signal 0 and 1 through a Comparator output. The output value will be 0\u200b\u200b when infrared light is detected. And the sensitivity is adjustable by the precision potentiometer."),(0,a.yg)("h3",{id:"play-with-arduino"},"Play with Arduino"),(0,a.yg)("p",null,"The module is mainly used to detect the infrared light. It outputs digital signal 0 and 1 through a Comparator output. The output value will be 0\u200b\u200b when infrared light is detected. And the sensitivity is adjustable by the precision potentiometer."),(0,a.yg)("h4",{id:"hardware"},"Hardware"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,a.yg)("th",{parentName:"tr",align:null},"Base Shield"),(0,a.yg)("th",{parentName:"tr",align:null},"Grove-Flame_Sensor"),(0,a.yg)("th",{parentName:"tr",align:null},"Grove - Red LED"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"}))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg"}))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/45d_small.jpg"}))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg"})))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html"},"Get One Now")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html"},"Get One Now"))))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 2.")," Connect Grove-Flame_Sensor to port ",(0,a.yg)("strong",{parentName:"li"},"D2")," of Grove-Base Shield."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 3.")," Connect Grove - Red LED to port ",(0,a.yg)("strong",{parentName:"li"},"D3")," of Grove-Base Shield."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 4.")," Plug Grove - Base Shield into Seeeduino."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 5.")," Connect Seeeduino to PC via a USB cable.")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/with_ardu.jpg"})),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Seeeduino"),(0,a.yg)("th",{parentName:"tr",align:null},"Grove-Flame_Sensor"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"5V"),(0,a.yg)("td",{parentName:"tr",align:null},"Red")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"GND"),(0,a.yg)("td",{parentName:"tr",align:null},"Black")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Not Conencted"),(0,a.yg)("td",{parentName:"tr",align:null},"White")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"D2"),(0,a.yg)("td",{parentName:"tr",align:null},"Yellow")))),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Seeeduino"),(0,a.yg)("th",{parentName:"tr",align:null},"Grove - Red LED"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"5V"),(0,a.yg)("td",{parentName:"tr",align:null},"Red")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"GND"),(0,a.yg)("td",{parentName:"tr",align:null},"Black")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Not Conencted"),(0,a.yg)("td",{parentName:"tr",align:null},"White")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"D3"),(0,a.yg)("td",{parentName:"tr",align:null},"Yellow")))),(0,a.yg)("h4",{id:"software"},"Software"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1.")," Copy the code and flash it into the controller board."),(0,a.yg)("p",null,"Here is the code"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},"    /******************************************************************************/\n\n#define FLAME_SENSOR 2 //connect SENSOR to digital pin2\n#define LED 3 //connect Grove - LED to pin3\n\nvoid setup()\n{\n    pinsInit();\n}\nvoid loop()\n{\n    if(isFlameDetected())\n    turnOnLED();\n    else turnOffLED();\n}\n    /********************************/\nvoid pinsInit()\n{\n    pinMode(FLAME_SENSOR, INPUT);\n    pinMode(LED,OUTPUT);\n    digitalWrite(LED,LOW);\n}\nvoid turnOnLED()\n{\n    digitalWrite(LED,HIGH);\n}\nvoid turnOffLED()\n{\n    digitalWrite(LED,LOW);\n}\nboolean isFlameDetected()\n{\n    if(digitalRead(FLAME_SENSOR))\n    return false;\n    else return true;\n}\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2.")," The LED will light up when there is infrared light."),(0,a.yg)("h3",{id:"play-with-codecraft"},"Play with Codecraft"),(0,a.yg)("h4",{id:"hardware-1"},"Hardware"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1.")," Connect a Grove - Flame Sensor to port D2, and connect a Grove - Red LED to port D3 of a Base Shield."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2.")," Plug the Base Shield to your Seeeduino/Arduino."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 3.")," Link Seeeduino/Arduino to your PC via an USB cable."),(0,a.yg)("h4",{id:"software-1"},"Software"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1.")," Open ",(0,a.yg)("a",{parentName:"p",href:"https://ide.chmakered.com/"},"Codecraft"),", add Arduino support, and drag a main procedure to working area."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"If this is your first time using Codecraft, see also ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/"},"Guide for Codecraft using Arduino"),".")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2.")," Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/cc_Flame_Sensor.png"})),(0,a.yg)("p",null,"Upload the program to your Arduino/Seeeduino."),(0,a.yg)("admonition",{title:"success",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"When the code finishes uploaded, the LED will goes on when Flame Sensor detects flame.")),(0,a.yg)("h3",{id:"play-with-raspberry-pi"},"Play With Raspberry Pi"),(0,a.yg)("h4",{id:"hardware-2"},"Hardware"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,a.yg)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,a.yg)("th",{parentName:"tr",align:null},"Grove-Flame_Sensor"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg"}))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg"}))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/45d_small.jpg"})))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get One Now")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get One Now")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html"},"Get One Now"))))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 2.")," Plug the GrovePi_Plus into Raspberry."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 3.")," Connect Grove-Flame_Sensor  to ",(0,a.yg)("strong",{parentName:"li"},"D2")," port of GrovePi_Plus."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 4.")," Connect the Raspberry to PC through USB cable.")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/with_rpi.jpg"})),(0,a.yg)("h4",{id:"software-2"},"Software"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 1.")," Follow ",(0,a.yg)("a",{parentName:"li",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 2.")," Git clone the Github repository.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"cd ~\ngit clone https://github.com/DexterInd/GrovePi.git\n\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 3.")," Excute below commands to use this sensor")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"cd ~/GrovePi/Software/Python\npython grove_flame_sensor.py\n")),(0,a.yg)("p",null,"Here is the code of example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Python"},'#!/usr/bin/env python\n#\n# GrovePi Example for using the Grove Flame Sensor (https://www.seeedstudio.com/wiki/Grove_-_Flame_Sensor)\n#\n# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi\n#\n# Have a question about this example?  Ask on the forums here:  http://forum.dexterindustries.com/c/grovepi\n#\n\'\'\'\n## License\nThe MIT License (MIT)\nGrovePi for the Raspberry Pi: an open source platform for connecting Grove Sensors to the Raspberry Pi.\nCopyright (C) 2017  Dexter Industries\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n\'\'\'\nimport time\nimport grovepi\n\n# Connect the Grove Flame Sensor to digital port D2\n# SIG,NC,VCC,GND\nflame_sensor = 2\n\ngrovepi.pinMode(flame_sensor,"INPUT")\n\nwhile True:\n    try:\n        print(grovepi.digitalRead(flame_sensor))\n        time.sleep(.5)\n\n    except IOError:\n        print ("Error")\n')),(0,a.yg)("h2",{id:"reference"},"Reference"),(0,a.yg)("p",null,"The sensor can detect the light source whose wavelength is in the range of 760nm - 1100 nm. The picture below shows the spectral sensitivity."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/img/Spectral_Sensitive.jpg"})),(0,a.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/Grove-Directional_Light_Sensor_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.yg)("h2",{id:"resources"},"Resources"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"[Eagle]")," ",(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/Grove-Directional_Light_Sensor_Eagle_File.zip"},"Grove - Flame Sensor Eagle File")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"[Library]")," ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_Flame_Sensor"},"Github repository for Grove_Flame_Sensor Library")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"[Datasheet]")," ",(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/LM293D.pdf"},"LM293D datasheet")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"[Codecraft]")," ",(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Flame_Sensor/res/Grove_Flame_Sensor_CDC_File.zip"},"CDC File"))),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})),(0,a.yg)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,a.yg)("p",null,"With the SenseCAP ",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,a.yg)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,a.yg)("div",{align:"center"},(0,a.yg)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}u.isMDXComponent=!0}}]);