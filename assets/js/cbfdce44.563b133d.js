"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[77510],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,y=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return a?n.createElement(y,o(o({ref:t},g),{},{components:a})):n.createElement(y,o({ref:t},g))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},45e3:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(9668),r=(a(96540),a(15680));const i={description:"Grove - IMU 9DOF(lcm20600+AK09918)",title:"Grove - IMU 9DOF(lcm20600+AK09918)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-IMU_9DOF-lcm20600+AK09918",last_update:{date:"1/5/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-IMU_9DOF-lcm20600+AK09918",id:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-IMU_9DOF-lcm20600+AK09918",title:"Grove - IMU 9DOF(lcm20600+AK09918)",description:"Grove - IMU 9DOF(lcm20600+AK09918)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-IMU_9DOF-lcm20600+AK09918.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Accelerometer",slug:"/Grove-IMU_9DOF-lcm20600+AK09918",permalink:"/Grove-IMU_9DOF-lcm20600+AK09918",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-IMU_9DOF-lcm20600+AK09918.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{description:"Grove - IMU 9DOF(lcm20600+AK09918)",title:"Grove - IMU 9DOF(lcm20600+AK09918)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-IMU_9DOF-lcm20600+AK09918",last_update:{date:"1/5/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - IMU 9DOF v2.0",permalink:"/Grove-IMU_9DOF_v2.0"},next:{title:"Grove-Single Axis Analog Gyro",permalink:"/Grove-Single_Axis_Analog_Gyro"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Applications",id:"applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Out",id:"pin-out",level:3},{value:"Schemaitc",id:"schemaitc",level:3},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Fuction table",id:"fuction-table",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],g={toc:s},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/Main.jpg",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",null," The Grove - IMU 9DOF (lcm20600+AK09918) is a 9 Degrees of Freedom ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Inertial_measurement_unit"},"IMU")," (Inertial measurement unit) which combines gyroscope, accelerometer and electronic compass. We use two chips LCM20600+AK09918 to implement those 3 functions."),(0,r.yg)("p",null," The LCM20600 is a 6-axis MotionTracking device that combines a 3-axis gyroscope, 3-axis accelerometer. ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Gyroscope"},"Gyroscope")," is a device used for measuring or maintaining orientation and angular velocity, normally, we use it to measure spin and twist. ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Accelerometer"},"Accelerometer")," is a device that measures proper acceleration."),(0,r.yg)("p",null," The AK09918 is a 3-axis ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Magnetometer"},"electronic compass")," IC with high sensitive Hall sensor technology. We use an electronic compass to measure the magnetic force, which can provide us with the direction information. "),(0,r.yg)("p",null," As its name suggests just use this single small module and you can measure 9 Degrees of Freedom: angular rotation in x/y/z axis, acceleration in x/y/z axis, and magnetic force in x/y/z axis. "),(0,r.yg)("p",null," What an amazing module! Just use this module to build your own motion and orientation system\ud83d\ude04"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html"},(0,r.yg)("p",null,(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,r.yg)("h2",{id:"features"},"Features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"3-Axis Gyroscope with Programmable FSR of \xb1250 dps, \xb1500 dps, \xb11000 dps, and \xb12000 dps"),(0,r.yg)("li",{parentName:"ul"},"3-Axis Accelerometer with Programmable FSR of \xb12g, \xb14g, \xb18g, and \xb116g"),(0,r.yg)("li",{parentName:"ul"},"3-Axis Electronic Compass with 0.15 \u03bcT/LSB (typ.) sensitivity"),(0,r.yg)("li",{parentName:"ul"},"User-programmable interrupts"),(0,r.yg)("li",{parentName:"ul"},"16-bit ADC resolution and Programmable Filters for acceleration measurements"),(0,r.yg)("li",{parentName:"ul"},"16-bit ADC resolution for magnetic measurements"),(0,r.yg)("li",{parentName:"ul"},"1 KB FIFO buffer enables the applications processor to read the data in bursts(LCM20600)"),(0,r.yg)("li",{parentName:"ul"},"Embedded temperature sensor"),(0,r.yg)("li",{parentName:"ul"},"Magnetic sensor overflow monitor function"),(0,r.yg)("li",{parentName:"ul"},"Built-in oscillator for internal clock source")),(0,r.yg)("h2",{id:"specification"},"Specification"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Item"),(0,r.yg)("th",{parentName:"tr",align:null},"Value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Operating voltage"),(0,r.yg)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Operating temperature"),(0,r.yg)("td",{parentName:"tr",align:null},"-30\xb0C to +85\xb0C")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Gyroscope Full-Scale Range"),(0,r.yg)("td",{parentName:"tr",align:null},"\xb1250 dps, \xb1500 dps, \xb11000 dps, \xb12000 dps")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Gyroscope Sensitivity Scale Factor"),(0,r.yg)("td",{parentName:"tr",align:null},"131 LSB/(dps)@\xb1250 dps 65.5 LSB/(dps)@\xb1500 dps 32.8 LSB/(dps)@\xb11000 dps 16.4 LSB/(dps)@\xb12000 dps")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Accelerometer Full-Scale Range"),(0,r.yg)("td",{parentName:"tr",align:null},"\xb12g, \xb14g, \xb18g, \xb116g")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Accelerometer Sensitivity Scale Factor"),(0,r.yg)("td",{parentName:"tr",align:null},"16384 LSB/g@\xb12g / 8192 LSB/g@\xb14g / 4096 LSB/g@\xb18g  /  2048 LSB/g@\xb116g")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Magnetic sensor measurement range"),(0,r.yg)("td",{parentName:"tr",align:null},"\xb14912\u03bcT (typical)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Magnetic sensor sensitivity"),(0,r.yg)("td",{parentName:"tr",align:null},"0.15\u03bcT (typical)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Interface"),(0,r.yg)("td",{parentName:"tr",align:null},"I^2^C")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"I^2^C Address"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"LCM20600")," /  0x69(default) /  0x68(optional) /  ",(0,r.yg)("strong",{parentName:"td"},"AK09918"),"  /  0x0C")))),(0,r.yg)("h2",{id:"applications"},"Applications"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Smartphones and Tablets"),(0,r.yg)("li",{parentName:"ul"},"Wearable Sensors")),(0,r.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.yg)("h3",{id:"pin-out"},"Pin Out"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map.jpg",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map_back.jpg",alt:"pir",width:600,height:"auto"})),(0,r.yg)("admonition",{type:"danger"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"    The default I2C address of LCM20600 is 0x69, you can change it to 0x68. The central pad is connected to the address wire, you can change the I2C address by cutting the wire and re-welding it. For the safety of you and others, please be careful with knife or welding gun you may use.\n"))),(0,r.yg)("h3",{id:"schemaitc"},"Schemaitc"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Power")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic.jpg",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",null,"Since the operating voltage range of LCM20600 is 1.71V to 3.45V, and the operating voltage range of AK09918 is 1.65V to 1.95V, we use a power conversion chip ",(0,r.yg)("strong",{parentName:"p"},"XC6206P182MR")," to provide a stable 1.8V for both chips."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Bi-directional level shifter circuit")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic_1.jpg",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",null,"This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I",(0,r.yg)("sup",null,"2"),"C bus of two chips use 1.8V, if the I",(0,r.yg)("sup",null,"2"),"C bus of the Arduino use 5V or 3.3V, this circuit will be needed. In the schematic above, ",(0,r.yg)("strong",{parentName:"p"},"Q1")," and ",(0,r.yg)("strong",{parentName:"p"},"Q2")," are N-Channel MOSFET ",(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/CJ2102.pdf"},"CJ2102"),", which act as a bidirectional switch. In order to better understand this part, you can refer to the ",(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf"},"AN10441")),(0,r.yg)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,r.yg)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",null,(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",null,(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:"pir",width:200,height:"auto"})))))),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,r.yg)("h2",{id:"getting-started"},"Getting Started"),(0,r.yg)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,r.yg)("h4",{id:"hardware"},"Hardware"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Materials required")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,r.yg)("th",{parentName:"tr",align:null},"Base Shield"),(0,r.yg)("th",{parentName:"tr",align:null},"Grove - IMU 9DOF"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",null,(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"pir",width:600,height:"auto"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",null,(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"pir",width:600,height:"auto"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",null,(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/thumbnail.jpg",alt:"pir",width:600,height:"auto"})))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{href:"https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html",target:"_blank"},"Get One Now"))))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"**1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy\n\n**2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.\n"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 1.")," Connect the Grove - IMU 9DOF (lcm20600+AK09918) to port ",(0,r.yg)("strong",{parentName:"p"},"I^2^C")," of Grove-Base Shield.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC via a USB cable."))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/connect.jpg",alt:"pir",width:600,height:"auto"})),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"    If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.\n"))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Seeeduino"),(0,r.yg)("th",{parentName:"tr",align:null},"Grove - IMU 9DOF"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"5V"),(0,r.yg)("td",{parentName:"tr",align:null},"Red")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GND"),(0,r.yg)("td",{parentName:"tr",align:null},"Black")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SDA"),(0,r.yg)("td",{parentName:"tr",align:null},"White")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SCL"),(0,r.yg)("td",{parentName:"tr",align:null},"Yellow")))),(0,r.yg)("h4",{id:"software"},"Software"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_ICM20600_AK09918"},"Grove - IMU 9DOF (lcm20600+AK09918)")," Library from Github.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 3.")," Restart the Arduino IDE. Open the example, you can open it in the following three ways\uff1a"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open it directly in the Arduino IDE via the path: ",(0,r.yg)("strong",{parentName:"p"},"File --\x3e Examples --\x3e Grove IMU 9DOF ICM20600 AK09918 --\x3e compass"),". "),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/path.jpg",alt:"pir",width:600,height:"auto"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open it in your computer by click the ",(0,r.yg)("strong",{parentName:"p"},"compass.ino")," which you can find in the folder ",(0,r.yg)("strong",{parentName:"p"},"XXXX\\Arduino\\libraries\\Seeed_ICM20600_AK09918-master\\examples\\compass"),", ",(0,r.yg)("strong",{parentName:"p"},"XXXX")," is the location you installed the Arduino IDE."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/path_1.jpg",alt:"pir",width:600,height:"auto"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Or, you can just click the icon "),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg",alt:"pir",width:50,height:"auto"})),"in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include "AK09918.h"\n#include "ICM20600.h"\n#include <Wire.h>\n\nAK09918_err_type_t err;\nint32_t x, y, z;\nAK09918 ak09918;\nICM20600 icm20600(true);\nint16_t acc_x, acc_y, acc_z;\nint32_t offset_x, offset_y, offset_z;\ndouble roll, pitch;\n// Find the magnetic declination at your location\n// http://www.magnetic-declination.com/\ndouble declination_shenzhen = -2.2;\n\nvoid setup()\n{\n    // join I2C bus (I2Cdev library doesn\'t do this automatically)\n    Wire.begin();\n\n    err = ak09918.initialize();\n    icm20600.initialize();\n    ak09918.switchMode(AK09918_POWER_DOWN);\n    ak09918.switchMode(AK09918_CONTINUOUS_100HZ);\n    Serial.begin(9600);\n\n    err = ak09918.isDataReady();\n    while (err != AK09918_ERR_OK) \n    {\n        Serial.println("Waiting Sensor");\n        delay(100);\n        err = ak09918.isDataReady();\n    }\n\n    Serial.println("Start figure-8 calibration after 2 seconds.");\n    delay(2000);\n    calibrate(10000, &offset_x, &offset_y, &offset_z);\n    Serial.println("");\n}\n\nvoid loop()\n{\n    // get acceleration\n    acc_x = icm20600.getAccelerationX();\n    acc_y = icm20600.getAccelerationY();\n    acc_z = icm20600.getAccelerationZ();\n\n    Serial.print("A:  ");\n    Serial.print(acc_x);\n    Serial.print(",  ");\n    Serial.print(acc_y);\n    Serial.print(",  ");\n    Serial.print(acc_z);\n    Serial.println(" mg");\n\n    Serial.print("G:  ");\n    Serial.print(icm20600.getGyroscopeX());\n    Serial.print(",  ");\n    Serial.print(icm20600.getGyroscopeY());\n    Serial.print(",  ");\n    Serial.print(icm20600.getGyroscopeZ());\n    Serial.println(" dps");\n\n    ak09918.getData(&x, &y, &z);\n    x = x - offset_x;\n    y = y - offset_y;\n    z = z - offset_z;\n\n    Serial.print("M:  ");\n    Serial.print(x);\n    Serial.print(",  ");\n    Serial.print(y);\n    Serial.print(",  ");\n    Serial.print(z);\n    Serial.println(" uT");\n\n    // roll/pitch in radian\n    roll = atan2((float)acc_y, (float)acc_z);\n    pitch = atan2(-(float)acc_x, sqrt((float)acc_y*acc_y+(float)acc_z*acc_z));\n    Serial.print("Roll: ");\n    Serial.println(roll*57.3);\n    Serial.print("Pitch: ");\n    Serial.println(pitch*57.3);\n\n    double Xheading = x * cos(pitch) + y * sin(roll) * sin(pitch) + z * cos(roll) * sin(pitch);\n    double Yheading = y * cos(roll) - z * sin(pitch);\n    \n\n    double heading = 180 + 57.3*atan2(Yheading, Xheading) + declination_shenzhen;\n\n    Serial.print("Heading: ");\n    Serial.println(heading);\n    Serial.println("--------------------------------");\n  \n    delay(500);\n    \n}\n\nvoid calibrate(uint32_t timeout, int32_t *offsetx, int32_t *offsety, int32_t*offsetz)\n{\n  int32_t value_x_min = 0;\n  int32_t value_x_max = 0;\n  int32_t value_y_min = 0;\n  int32_t value_y_max = 0;\n  int32_t value_z_min = 0;\n  int32_t value_z_max = 0;\n  uint32_t timeStart = 0;\n\n  ak09918.getData(&x, &y, &z);\n\n  value_x_min = x;\n  value_x_max = x;\n  value_y_min = y;\n  value_y_max = y;\n  value_z_min = z;\n  value_z_max = z;\n  delay(100);\n\n  timeStart = millis();\n  \n  while((millis() - timeStart) < timeout)\n  {\n    ak09918.getData(&x, &y, &z);\n    \n    /* Update x-Axis max/min value */\n    if(value_x_min > x)\n    {\n      value_x_min = x;\n      // Serial.print("Update value_x_min: ");\n      // Serial.println(value_x_min);\n\n    } \n    else if(value_x_max < x)\n    {\n      value_x_max = x;\n      // Serial.print("update value_x_max: ");\n      // Serial.println(value_x_max);\n    }\n\n    /* Update y-Axis max/min value */\n    if(value_y_min > y)\n    {\n      value_y_min = y;\n      // Serial.print("Update value_y_min: ");\n      // Serial.println(value_y_min);\n\n    } \n    else if(value_y_max < y)\n    {\n      value_y_max = y;\n      // Serial.print("update value_y_max: ");\n      // Serial.println(value_y_max);\n    }\n\n    /* Update z-Axis max/min value */\n    if(value_z_min > z)\n    {\n      value_z_min = z;\n      // Serial.print("Update value_z_min: ");\n      // Serial.println(value_z_min);\n\n    } \n    else if(value_z_max < z)\n    {\n      value_z_max = z;\n      // Serial.print("update value_z_max: ");\n      // Serial.println(value_z_max);\n    }\n    \n    Serial.print(".");\n    delay(100);\n\n  }\n\n  *offsetx = value_x_min + (value_x_max - value_x_min)/2;\n  *offsety = value_y_min + (value_y_max - value_y_min)/2;\n  *offsetz = value_z_min + (value_z_max - value_z_min)/2;\n}\n')),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"    There are 3 demos in the library:  \n    **test_6axis**\n    >This example shows how to get gyroscope and acceleration data from ICM20600.  \n    \n    **test_magnet**  \n    >This example shows how to get magnetic data from AK09918.  \n    \n    **compass**  \n    >This example gets magnetic data and acceleration data, to count pitch and roll, and make a compass application.\n"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 5.")," Open the ",(0,r.yg)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,r.yg)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to ",(0,r.yg)("strong",{parentName:"p"},"9600"),"."))),(0,r.yg)("admonition",{type:"success"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},' If every thing goes well, when you open the Serial Monitor, the notice will pop up--*Start figure-8 calibration after 2 seconds.*  Which means in order to calibrate this module, you should move it and draw the number 8 trajectory in the air. When the "......." appears, you can start your calibration.\n'))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"Start figure-8 calibration after 2 seconds.\n.......................................................................\nA:  -362,  -205,  738 mg\nG:  -45,  12,  -1 dps\nM:  -6,  -23,  -33 uT\nRoll: -15.53\nPitch: 25.30\nHeading: 23.99\n--------------------------------\nA:  -269,  583,  61 mg\nG:  102,  377,  -2 dps\nM:  18,  -21,  -18 uT\nRoll: 84.03\nPitch: 24.65\nHeading: 215.58\n--------------------------------\nA:  -495,  229,  37 mg\nG:  -43,  -231,  201 dps\nM:  7,  -30,  6 uT\nRoll: 80.83\nPitch: 64.90\nHeading: 21.76\n--------------------------------\n\n")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"    As you can see, the result of compass example includes three parameter: roll, pitch and Heading. There are the terminology of **[Euler angles](https://en.wikipedia.org/wiki/Euler_angles)**(click to check more information).\n"))),(0,r.yg)("h4",{id:"fuction-table"},"Fuction table"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Function"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"ICM20600")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"initialize()"),(0,r.yg)("td",{parentName:"tr",align:null},"Initialize the chip LCM20600, by default: the measurement range of gyroscope is \xb12000 dps / the measurement range of accelerometer is \xb116g")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"setGyroScaleRange(gyro_scale_type_t range)"),(0,r.yg)("td",{parentName:"tr",align:null},"After the initialization, you can set the gyroscope range to meet your own needs, the parameter gyro_scale_type_t range list: ",(0,r.yg)("strong",{parentName:"td"},"RANGE_250_DPS")," / ",(0,r.yg)("strong",{parentName:"td"},"RANGE_500_DPS")," / ",(0,r.yg)("strong",{parentName:"td"},"RANGE_1K_DPS")," / ",(0,r.yg)("strong",{parentName:"td"},"RANGE_2K_DPS"),"  / e.g. /  ",(0,r.yg)("strong",{parentName:"td"},"icm20600.setGyroScaleRange(RANGE_1K_DPS);")," / this code line will change the gyroscope measurement range to \xb11000dps")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"setAccScaleRange(acc_scale_type_t range)"),(0,r.yg)("td",{parentName:"tr",align:null},"After the initialization, you can set the accelerometer range to meet your own needs, the parameter acc_scale_type_t range list: ",(0,r.yg)("strong",{parentName:"td"},"RANGE_2G")," / ",(0,r.yg)("strong",{parentName:"td"},"RANGE_4G")," / ",(0,r.yg)("strong",{parentName:"td"},"RANGE_8G")," / ",(0,r.yg)("strong",{parentName:"td"},"RANGE_16G"),"  / e.g. /  ",(0,r.yg)("strong",{parentName:"td"},"icm20600.setAccScaleRange(RANGE_8G);")," / this code line will change the accelerometer measurement range to \xb18g")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"getGyroscope(int16_t",(0,r.yg)("em",{parentName:"td"}," x, int16_t")," y, int16_t* z))"),(0,r.yg)("td",{parentName:"tr",align:null},"You can use this function to get the gyroscope X/Y/Z 3-axis data at the same time, and the unit of the data is ",(0,r.yg)("strong",{parentName:"td"},"dps"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"getGyroscopeX(void)  getGyroscopeY(void)  getGyroscopeZ(void)"),(0,r.yg)("td",{parentName:"tr",align:null},"Or, you can get the gyroscope X/Y/Z 3-axis data separately by using those three functions, and the unit of the data is ",(0,r.yg)("strong",{parentName:"td"},"dps"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"getRawGyroscopeX(void)  getRawGyroscopeX(void)  getRawGyroscopeX(void)"),(0,r.yg)("td",{parentName:"tr",align:null},"Those three functions get the raw data directly from the register of ICM20600 without convert the data unit to ",(0,r.yg)("strong",{parentName:"td"},"dps"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"getAcceleration(int16_t",(0,r.yg)("em",{parentName:"td"}," x, int16_t")," y, int16_t* z)"),(0,r.yg)("td",{parentName:"tr",align:null},"You can use this function to get the X/Y/Z 3-axis acceleration at the same time, and the unit of the data is ",(0,r.yg)("strong",{parentName:"td"},"mg"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"getAccelerationX(void)  getAccelerationY(void)  getAccelerationZ(void)"),(0,r.yg)("td",{parentName:"tr",align:null},"Or, you can get the X/Y/Z 3-axis acceleration separately by using those three functions, and the unit of the data is ",(0,r.yg)("strong",{parentName:"td"},"mg"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"getRawAccelerationX(void)  getRawAccelerationY(void)  getRawAccelerationZ(void)"),(0,r.yg)("td",{parentName:"tr",align:null},"Those three functions get the raw data directly from the register of ICM20600 without convert the data unit to ",(0,r.yg)("strong",{parentName:"td"},"mg"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"getTemperature(void)"),(0,r.yg)("td",{parentName:"tr",align:null},"You ca use this function to get the temperature")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"AK09918")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"getData(int32_t ",(0,r.yg)("em",{parentName:"td"},"axis_x, int32_t "),"axis_y, int32_t *axis_z)"),(0,r.yg)("td",{parentName:"tr",align:null},"You can use this function to get the magnetic force of 3-axis.")))),(0,r.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/Grove%20-%20IMU%209DOF%20(ICM20600%20%26%20AK09918).zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.yg)("h2",{id:"resources"},"Resources"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"[Zip]")," ",(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/Grove%20-%20IMU%209DOF%20(ICM20600%20%26%20AK09918).zip"},"Grove - IMU 9DOF (lcm20600+AK09918) Eagle Files"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"[Zip]")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_ICM20600_AK09918/archive/master.zip"},"Seeed ICM20600+AK09918 Library"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"[PDF]")," ",(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/ICM-20600.pdf"},"Datasheet of ICM-20600"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"[PDF]")," ",(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/AK09918.pdf"},"Datasheet of AK09918"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"[PDF]")," ",(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/CJ2102.pdf"},"Datasheet of CJ2102")))),(0,r.yg)("h2",{id:"project"},"Project"),(0,r.yg)("p",null,"This is the introduction Video of this product, simple demos, you can have a try."),(0,r.yg)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/oFmvKxoZIuw?rel=0",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);