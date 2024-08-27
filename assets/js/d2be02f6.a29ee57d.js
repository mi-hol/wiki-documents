"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[57768],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),g=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=g(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=g(a),y=r,m=d["".concat(p,".").concat(y)]||d[y]||u[y]||l;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},14511:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var n=a(9668),r=(a(96540),a(15680));const l={title:"Grove - Solid State Relay",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Solid_State_Relay/",slug:"/Grove-Solid_State_Relay",last_update:{date:"01/09/2022",author:"gunengyu"}},i=void 0,o={unversionedId:"Sensor/Grove/Grove_Accessories/Actuator/Grove-Solid_State_Relay",id:"Sensor/Grove/Grove_Accessories/Actuator/Grove-Solid_State_Relay",title:"Grove - Solid State Relay",description:"Grove \u2013 Solid State Relay is a non-contact electronic switch module that has relay features. Based on S208T02, it has a maximum output of 250VAC/4A, with a switching speed less than 10ms. This module is equipped with acrylic base and a 3D-printed protection insulation shield, for user\u2019s safety. The featured LED indicates that the relay is on. It can be widely used in various areas such as computer peripheral interfaces, temperature/speed/light adjustment, servo control, petrochemical, medical instrumentations, financial devices, coal, meters, traffic signals, etc.",source:"@site/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-Solid_State_Relay.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Actuator",slug:"/Grove-Solid_State_Relay",permalink:"/Grove-Solid_State_Relay",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-Solid_State_Relay.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641686400,formattedLastUpdatedAt:"Jan 9, 2022",frontMatter:{title:"Grove - Solid State Relay",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Solid_State_Relay/",slug:"/Grove-Solid_State_Relay",last_update:{date:"01/09/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - 2-Channel SPDT Relay",permalink:"/Grove-2-Channel_SPDT_Relay"},next:{title:"Grove - Solid State Relay V2",permalink:"/Grove-Solid_State_Relay_V2"}},p={},g=[{value:"Features",id:"features",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Specification",id:"specification",level:2},{value:"Interface Function",id:"interface-function",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Materials required",id:"materials-required",level:4},{value:"Hardwave",id:"hardwave",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software-1",level:4},{value:"Test Report",id:"test-report",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],s={toc:g},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Grove_Solid_State_Relay_1.jpg",alt:null})),(0,r.yg)("p",null,"Grove \u2013 Solid State Relay is a non-contact electronic switch module that has relay features. Based on S208T02, it has a maximum output of 250VAC/4A, with a switching speed less than 10ms. This module is equipped with acrylic base and a 3D-printed protection insulation shield, for user\u2019s safety. The featured LED indicates that the relay is on. It can be widely used in various areas such as computer peripheral interfaces, temperature/speed/light adjustment, servo control, petrochemical, medical instrumentations, financial devices, coal, meters, traffic signals, etc."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"    This module only works with AC load for the output. If you use DC load, once the relay is turned on, it will always stay on.\n"))),(0,r.yg)("p",{style:{}},(0,r.yg)("a",{href:"https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html",target:"_blank"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,r.yg)("h2",{id:"features"},"Features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"3D-printed protection insulation shield"),(0,r.yg)("li",{parentName:"ul"},"Compatible with both 3.3V and 5V control level"),(0,r.yg)("li",{parentName:"ul"},"Low switching latency (\u226410ms)"),(0,r.yg)("li",{parentName:"ul"},"LED on-state indicator"),(0,r.yg)("li",{parentName:"ul"},"Featured radiator provide better stability"),(0,r.yg)("li",{parentName:"ul"},"Acrylic base and insulation paper increase safety performance"),(0,r.yg)("li",{parentName:"ul"},"Grove compatible")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,r.yg)("h2",{id:"application-ideas"},"Application Ideas"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Operations that require low-latency switching, e.g. stage light control"),(0,r.yg)("li",{parentName:"ul"},"Devices that require high stability, e.g. medical devices, traffic signals"),(0,r.yg)("li",{parentName:"ul"},"Situations that require explosion-proof, anticorrosion, moisture-proof, e.g. coal, chemical industries.")),(0,r.yg)("h2",{id:"specification"},"Specification"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Item"),(0,r.yg)("th",{parentName:"tr",align:null},"Min"),(0,r.yg)("th",{parentName:"tr",align:null},"Typical"),(0,r.yg)("th",{parentName:"tr",align:null},"Max"),(0,r.yg)("th",{parentName:"tr",align:null},"Uint"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Input Voltage"),(0,r.yg)("td",{parentName:"tr",align:null},"3.0"),(0,r.yg)("td",{parentName:"tr",align:null},"3.3"),(0,r.yg)("td",{parentName:"tr",align:null},"5.0"),(0,r.yg)("td",{parentName:"tr",align:null},"VDC")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Input Current"),(0,r.yg)("td",{parentName:"tr",align:null},"16"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"50"),(0,r.yg)("td",{parentName:"tr",align:null},"mA")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Output Voltage"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"220"),(0,r.yg)("td",{parentName:"tr",align:null},"250"),(0,r.yg)("td",{parentName:"tr",align:null},"VAC")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Output Current"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"4.0"),(0,r.yg)("td",{parentName:"tr",align:null},"A")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Operating frequency"),(0,r.yg)("td",{parentName:"tr",align:null},"45"),(0,r.yg)("td",{parentName:"tr",align:null},"50"),(0,r.yg)("td",{parentName:"tr",align:null},"65"),(0,r.yg)("td",{parentName:"tr",align:null},"Hz")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Operating temperature"),(0,r.yg)("td",{parentName:"tr",align:null},"-25"),(0,r.yg)("td",{parentName:"tr",align:null},"25"),(0,r.yg)("td",{parentName:"tr",align:null},"85"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2103")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Turn-on time"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"ms")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Turn-off time"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"ms")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Dimension"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"44x44x32"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"mm")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Net Weight"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"25.5"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"g")))),(0,r.yg)("h2",{id:"interface-function"},"Interface Function"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Ssr_interface.jpg",alt:null})),(0,r.yg)("admonition",{title:"s",type:"caution"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"    **1.** If the output voltage is higher than 36V, you need to ensure the module is in the off state before you operate with the screws.\n\n    **2.** The heat sink can be in very high temperature, do not touch it during use.\n"))),(0,r.yg)("h2",{id:"getting-started"},"Getting Started"),(0,r.yg)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"    This demon works with 220V AC load, please pay attention for your safety.\n"))),(0,r.yg)("h4",{id:"materials-required"},"Materials required"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,r.yg)("th",{parentName:"tr",align:null},"Base Shield"),(0,r.yg)("th",{parentName:"tr",align:null},"Bulb"),(0,r.yg)("th",{parentName:"tr",align:null},"Grove - Solid State Relay"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/bulb.jpg",alt:"enter image description here"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/thumbnail.jpg",alt:null}))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,r.yg)("td",{parentName:"tr",align:null},"Use your own bulb :)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{href:"https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html",target:"_blank"},"Get One Now"))))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"**1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy\n\n**2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy\n"))),(0,r.yg)("h4",{id:"hardwave"},"Hardwave"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 1.")," Connect the Grove - Solid State Relay to port ",(0,r.yg)("strong",{parentName:"p"},"D3")," of Grove-Base Shield.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 2.")," Connect the wire of the bulb to the ",(0,r.yg)("strong",{parentName:"p"},"output port")," of the Grove - Solid State Relay.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 3.")," Plug Grove - Base Shield into Seeeduino.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 4.")," Connect Seeeduino to PC via a Micro-USB cable."))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"If we don't have the base shield, we also can directly connect the Grove-Relay and Grove-Button to Arduino board. Please follow below connection.\n"))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Grove - Solid State"),(0,r.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,r.yg)("th",{parentName:"tr",align:null},"Grove Cable"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GND"),(0,r.yg)("td",{parentName:"tr",align:null},"GND"),(0,r.yg)("td",{parentName:"tr",align:null},"Black")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VCC"),(0,r.yg)("td",{parentName:"tr",align:null},"5V"),(0,r.yg)("td",{parentName:"tr",align:null},"Red")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SIG"),(0,r.yg)("td",{parentName:"tr",align:null},"D3"),(0,r.yg)("td",{parentName:"tr",align:null},"Yellow")))),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Arduino_relay.jpg",alt:null})),(0,r.yg)("h4",{id:"software"},"Software"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 1.")," Open the Arduino IDE and copy the following code into a new sketch.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"/*\n  Grove - Solid State Relay Demo Code\n  The ssr will turn on for 5s and then turn off for 5s, and so on.\n  https://www.seeedstudio.com\n*/\n\nint ssrControlPin = 3;\nvoid setup() {\n    // initialize the digital pin as an output.\n    pinMode(ssrControlPin, OUTPUT);\n}\n\nvoid loop() {\n    digitalWrite(ssrControlPin, HIGH);      // set the SSR on\n    delay(5000);                            // wait for 5 second\n    digitalWrite(ssrControlPin, LOW);       // set the SSR off\n    delay(5000);                            // wait for 5 second\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 2.")," Upload the demo. If you do not know how to upload the code, please check ",(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,r.yg)("p",null,"Done uploading, then you will see the bulb turn on 5s and then turn off 5s continuously."),(0,r.yg)("h3",{id:"play-with-raspberry-pi"},"Play With Raspberry Pi"),(0,r.yg)("h4",{id:"hardware"},"Hardware"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Materials required")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,r.yg)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,r.yg)("th",{parentName:"tr",align:null},"Grove-Relay"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg",alt:"enter image description here"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg",alt:"enter image description here"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/thumbnail.jpg",alt:null}))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html",target:"_blank"},"Get One Now")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html",target:"_blank"},"Get One Now")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{href:"https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html",target:"_blank"},"Get One Now"))))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 1.")," Plug the GrovePi_Plus into Raspberry.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 2.")," Connect the Grove-Relay to ",(0,r.yg)("strong",{parentName:"p"},"D4")," port of GrovePi_Plus.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 3.")," Connect the wire of the bulb to the ",(0,r.yg)("strong",{parentName:"p"},"output port")," of the Grove - Solid State Relay.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 4.")," Connect the Raspberry to PC via USB cable."))),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/PI_RELAY.jpg",alt:null})),(0,r.yg)("h4",{id:"software-1"},"Software"),(0,r.yg)("p",null,"If this is the first time you use GrovePi, please do this part step by step. If you are an old friend with GrovePi, you can skip ",(0,r.yg)("strong",{parentName:"p"},"Step1")," and ",(0,r.yg)("strong",{parentName:"p"},"Step2"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 1.")," Setting Up The Software. In the command line, type the following commands:")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"}," If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you **cannot use this command line**.\n"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"sudo curl -kL dexterindustries.com/update_grovepi | bash\n\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"sudo reboot\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cd /home/pi/Desktop\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"git clone https://github.com/DexterInd/GrovePi.git\n")),(0,r.yg)("p",null,"For more detail about this part, please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 2.")," Follow ",(0,r.yg)("a",{parentName:"li",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/"},"Updating the Firmware")," to update the latest firmware of GrovePi.")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"We firmly suggest you to update the firmware, or for some sensors you may get errors.\n"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 3.")," Run the following command to run the demo and get the result.")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"}," If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.\n"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cd /home/pi/Desktop/GrovePi/Software/Python/\n\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"sudo python3 grove_solid_state_relay.py \n")),(0,r.yg)("p",null,"The result should be like:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"pi@raspberrypi:~/Desktop/GrovePi/Software/Python$ sudo python3 grove_solid_state_relay.py\non\noff\non\noff\non\noff\non\noff\non\noff\non\noff\n\n")),(0,r.yg)("p",null,"If you want to check the code, please type the command below."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'nano grove_solid_state_relay.py   # "Ctrl+x" to exit #\n')),(0,r.yg)("p",null,"The code is:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'import time\nimport grovepi\n\n# Connect the Grove Solid State Relay to digital port D4\n# CTR,NC,VCC,GND\nrelay = 4\n\ngrovepi.pinMode(relay,"OUTPUT")\n\nwhile True:\n    try:\n        # switch on for 5 seconds\n        grovepi.digitalWrite(relay,1)\n        print "on"\n        time.sleep(5)\n\n        # switch off for 5 seconds\n        grovepi.digitalWrite(relay,0)\n        print "off"\n        time.sleep(5)\n\n    except KeyboardInterrupt:\n        grovepi.digitalWrite(relay,0)\n        break\n    except IOError:\n        print "Error"\n')),(0,r.yg)("h2",{id:"test-report"},"Test Report"),(0,r.yg)("hr",null),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1.Experimental purposes")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Thermal performance of Grove \u2013 Solid State Relay(S208T02)."),(0,r.yg)("li",{parentName:"ul"},"Limit load current of Grove \u2013 SSR."),(0,r.yg)("li",{parentName:"ul"},"Measures to improve the limit load current.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2.Experimental Principle")),(0,r.yg)("p",null,"By recording SSR chip temperature at different current and different time points, analysis the data and draw conclusions."),(0,r.yg)("p",null,"Figure 1 is screenshot from S208T02 datasheet, we can see that at different heat sink and different temperature, SSR\u2019s current is different."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Figure_1.jpg",alt:null})),(0,r.yg)("p",null,"There needs a temperature sensor to get the temperature of the chip. I use DS18B20 whose detection range is -25-125\u2103 to meet the requirements."),(0,r.yg)("p",null,"Figure 2 shows the experimental equipment and installation plans, the temperature sensor is tied to the right side of the heat sink, to make the temperature that 18b20 detects as close as possible to the heat sink temperature, smear between the sensor and the heat sink thermal plastic. Between the heat sink and SSR coated thermal plastic. Therefore\uff0c the temperature of the 18b20 is equal to the temperature of SSR."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Grove-ssr-report-image2.JPG",alt:null})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"3.Experimental data")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"-"),(0,r.yg)("th",{parentName:"tr",align:null},"1min"),(0,r.yg)("th",{parentName:"tr",align:null},"5min"),(0,r.yg)("th",{parentName:"tr",align:null},"10min"),(0,r.yg)("th",{parentName:"tr",align:null},"20min"),(0,r.yg)("th",{parentName:"tr",align:null},"stable time"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"0.5A"),(0,r.yg)("td",{parentName:"tr",align:null},"31.40"),(0,r.yg)("td",{parentName:"tr",align:null},"33.75"),(0,r.yg)("td",{parentName:"tr",align:null},"34.75"),(0,r.yg)("td",{parentName:"tr",align:null},"35.00"),(0,r.yg)("td",{parentName:"tr",align:null},"15min")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1A"),(0,r.yg)("td",{parentName:"tr",align:null},"31.8"),(0,r.yg)("td",{parentName:"tr",align:null},"36.75"),(0,r.yg)("td",{parentName:"tr",align:null},"39.6"),(0,r.yg)("td",{parentName:"tr",align:null},"40.56"),(0,r.yg)("td",{parentName:"tr",align:null},"18min")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"2A"),(0,r.yg)("td",{parentName:"tr",align:null},"34.5"),(0,r.yg)("td",{parentName:"tr",align:null},"46.6"),(0,r.yg)("td",{parentName:"tr",align:null},"48.88"),(0,r.yg)("td",{parentName:"tr",align:null},"51.13"),(0,r.yg)("td",{parentName:"tr",align:null},"20min")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"3A"),(0,r.yg)("td",{parentName:"tr",align:null},"35.56"),(0,r.yg)("td",{parentName:"tr",align:null},"52.81"),(0,r.yg)("td",{parentName:"tr",align:null},"58.88"),(0,r.yg)("td",{parentName:"tr",align:null},"60.06"),(0,r.yg)("td",{parentName:"tr",align:null},"17min")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"4A"),(0,r.yg)("td",{parentName:"tr",align:null},"38.00"),(0,r.yg)("td",{parentName:"tr",align:null},"57.88"),(0,r.yg)("td",{parentName:"tr",align:null},"63.88"),(0,r.yg)("td",{parentName:"tr",align:null},"67.00"),(0,r.yg)("td",{parentName:"tr",align:null},"19min")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"5A"),(0,r.yg)("td",{parentName:"tr",align:null},"44.00"),(0,r.yg)("td",{parentName:"tr",align:null},"66.00"),(0,r.yg)("td",{parentName:"tr",align:null},"73.12"),(0,r.yg)("td",{parentName:"tr",align:null},"75.37"),(0,r.yg)("td",{parentName:"tr",align:null},"19min")))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"1. The unit of temperature in the table is \u2103\n2. When tested room temperature is 28 \u2103\n"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"4.Expansion experiment")),(0,r.yg)("p",null,"  In order to prove that improve the level of heat sink will improve the SSR limit operating current, I did an expansion experiment."),(0,r.yg)("p",null,"  Cuz I hadn\u2019t a larger heat sink on hand, so I installed a fan (which I take for my PC\u2019s CPU) above the SSR. As shown in Figure 3."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Grove-ssr-report-image3.JPG",alt:null})),(0,r.yg)("p",null,"I just test the stable time of different operating current, as shown in Table 2."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"-"),(0,r.yg)("th",{parentName:"tr",align:null},"6.0A"),(0,r.yg)("th",{parentName:"tr",align:null},"6.5A"),(0,r.yg)("th",{parentName:"tr",align:null},"7.0A"),(0,r.yg)("th",{parentName:"tr",align:null},"7.5A"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Stable time"),(0,r.yg)("td",{parentName:"tr",align:null},"54.44\u2103"),(0,r.yg)("td",{parentName:"tr",align:null},"57.63\u2103"),(0,r.yg)("td",{parentName:"tr",align:null},"60.06\u2103"),(0,r.yg)("td",{parentName:"tr",align:null},"62.38\u2103")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"5.Expansion experiment")),(0,r.yg)("p",null,"From the above experimental results, the following conclusions can be drawn:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"When current is fixed, with the passage of time, the temperature will stabilize at a certain value. This value is related with the current, the current increases, the stable temperature are greater. At 2A, stable temperature will be more that 50 \u2103, So, when the SSR work, you should not touch it.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Combined with Figure 1 and our data, I consider that the Grove \u2013 SSR can operator 4A load current at max.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"If load current larger than 5A, such as 7A, you should install a fun on it , or other cooling measures, but it\u2019s not recommended."))),(0,r.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/Ssr_eaglefile.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.yg)("h2",{id:"resources"},"Resources"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[Zip]")," ",(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/Ssr_eaglefile.zip"},"Grove - Solid State Relay Eagle File")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[RAR]")," ",(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/SSR_Demo_Code.rar"},"Grove - Solid State Relay Demo Code")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/S208t02_datasheet.pdf"},"S208T02 Datasheet")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/SSR_v0.9b.pdf"},"Grove - Solid State Relay in PDF")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/Grove-SSR_Test_Report_V0.3.pdf"},"Grove - Solid State Relay Test Report"))),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);