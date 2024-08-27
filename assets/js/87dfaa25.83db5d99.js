"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91247],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>c});var a=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=p(r),m=i,c=g["".concat(l,".").concat(m)]||g[m]||u[m]||o;return r?a.createElement(c,n(n({ref:t},d),{},{components:r})):a.createElement(c,n({ref:t},d))}));function c(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:i,n[1]=s;for(var p=2;p<o;p++)n[p]=r[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15782:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(9668),i=(r(96540),r(15680));const o={description:"Grove - IMU 10DOF v2.0",title:"Grove - IMU 10DOF v2.0",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-IMU_10DOF_v2.0",last_update:{date:"1/5/2023",author:"shuxu hu"}},n=void 0,s={unversionedId:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-IMU_10DOF_v2.0",id:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-IMU_10DOF_v2.0",title:"Grove - IMU 10DOF v2.0",description:"Grove - IMU 10DOF v2.0",source:"@site/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-IMU_10DOF_v2.0.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Accelerometer",slug:"/Grove-IMU_10DOF_v2.0",permalink:"/Grove-IMU_10DOF_v2.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-IMU_10DOF_v2.0.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{description:"Grove - IMU 10DOF v2.0",title:"Grove - IMU 10DOF v2.0",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-IMU_10DOF_v2.0",last_update:{date:"1/5/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - IMU 10DOF",permalink:"/Grove-IMU_10DOF"},next:{title:"Grove - IMU 9DOF v2.0",permalink:"/Grove-IMU_9DOF_v2.0"}},l={},p=[{value:"Version",id:"version",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Play with Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p},g="wrapper";function u(e){let{components:t,...r}=e;return(0,i.yg)(g,(0,a.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/Grove-imu-10dof-v2.0.jpg",alt:"pir",width:600,height:"auto"})),(0,i.yg)("p",null,"Grove-IMU 10DOF v2.0 is a upgrade version of Grove-IMU-10DOF\uff0c which replace BMP180 with BMP280. As the successor to the widely adopted BMP180, the BMP280 delivers high performance in all applications that require precise pressure measurement. This module is base on MPU-9250 and BMP280, the MPU-9250 is a 9-axis MotionTracking device that combines a 3-axis gyroscope, 3-axis accelerometer, 3-axis magnetometer and a Digital Motion Processor(DMP), and BMP280 is a high precision, ultra-low power digital pressure sensors for consumer applications. This module is very suitable for the application of smartphones, tablets and wearable devices."),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-IMU-10DOF-v2.0-p-2691.html"},(0,i.yg)("p",null,(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,i.yg)("h2",{id:"version"},"Version"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Product Version"),(0,i.yg)("th",{parentName:"tr",align:null},"Changes"),(0,i.yg)("th",{parentName:"tr",align:null},"Released Date"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Grove - IMU 10DOF"),(0,i.yg)("td",{parentName:"tr",align:null},"Built on ",(0,i.yg)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/MPU-9250A_Product_Specification.pdf"},"MPU-9250 ")," and ",(0,i.yg)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/BMP180.pdf"},"BMP180 ")),(0,i.yg)("td",{parentName:"tr",align:null},"March 2015")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Grove - IMU 10DOF v2.0"),(0,i.yg)("td",{parentName:"tr",align:null},"Upgrade BMP180 sensor to ",(0,i.yg)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf"},"BMP280 ")," from BOSCH"),(0,i.yg)("td",{parentName:"tr",align:null},"September 2016")))),(0,i.yg)("h2",{id:"specifications"},"Specifications"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"I2C Grove interface, include GND, VCC, SDA, SCL."),(0,i.yg)("li",{parentName:"ul"},"MPU-9250 I2C address selectable"),(0,i.yg)("li",{parentName:"ul"},"Low Power Consumption"),(0,i.yg)("li",{parentName:"ul"},"400kHz Fast Mode I2C for communicating with all registers"),(0,i.yg)("li",{parentName:"ul"},"Digital-output X-, Y-, and Z-Axis angular rate sensors (gyroscopes) with a user-programmable full-scale range of \xb1250, \xb1500, \xb11000, and \xb12000\xb0/sec"),(0,i.yg)("li",{parentName:"ul"},"Digital-output 3-Axis accelerometer with a programmable full scale range of \xb12g, \xb14g, \xb18g and \xb116g"),(0,i.yg)("li",{parentName:"ul"},"Digital-output magnetometer with a full scale range of \xb14800uT"),(0,i.yg)("li",{parentName:"ul"},"Digital-output barometer with range of 300 ~ 1100hPa(+9000m ~ -500m relating to sea level)"),(0,i.yg)("li",{parentName:"ul"},"Dimensions: 25.43mm x 20.35mm"),(0,i.yg)("li",{parentName:"ul"},"I2C Address: default connected a and b address from I2C select pad is 0x68, if connect b and c address is 0x69")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre"},"If you want to use multiplue I2C devices, please refer to [Software I2C](https://wiki.seeedstudio.com/Arduino_Software_I2C_user_guide/).\n"))),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,i.yg)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,i.yg)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("p",null,(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("p",null,(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:"pir",width:200,height:"auto"})))))),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,i.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/dimensions.jpg",alt:"pir",width:600,height:"auto"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"MPU-9250 I2C address select Pad, default connected ",(0,i.yg)("strong",{parentName:"p"},"a")," and ",(0,i.yg)("strong",{parentName:"p"},"b")," address is 0x68, if connect ",(0,i.yg)("strong",{parentName:"p"},"b")," and ",(0,i.yg)("strong",{parentName:"p"},"c")," address is 0x69")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"MPU-9250 interrupt pin, the interrupt should be configured, available interrupt sources are: motion detection, fifo overflow, data ready, i2c master error")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Orientation of Axes:\nThe diagram below shows the orientation of the axes of sensitivity and the polarity of rotation."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Imu-10dof-dir-axes.png",alt:"pir",width:600,height:"auto"}))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The BMP280 is an absolute barometric pressure sensor especially designed for mobile applications. The sensor module is housed in an extremely compact 8-pin metal-lid LGA package with a footprint of only 2.0 \xd7 2.5 mm2 and 0.95 mm package height. Its small dimensions and its low power consumption of 2.7 \u03bcA @1Hz allow the implementation in battery driven devices such as mobile phones, GPS modules or watches."))),(0,i.yg)("h2",{id:"getting-started"},"Getting started"),(0,i.yg)("h3",{id:"play-with-arduino"},"Play with Arduino"),(0,i.yg)("h4",{id:"hardware"},"Hardware"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,i.yg)("th",{parentName:"tr",align:null},"Base Shield"),(0,i.yg)("th",{parentName:"tr",align:null},"Base Shield"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("p",null,(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"pir",width:600,height:"auto"}))),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("p",null,(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"pir",width:600,height:"auto"}))),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("p",null,(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/Grove-imu-10dof-v2.0_s.jpg",alt:"pir",width:600,height:"auto"})))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-IMU-10DOF-v2.0-p-2691.html"},"Get One Now"))))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 2.")," Connect Grove - IMU 10DOF v2.0 to ",(0,i.yg)("strong",{parentName:"li"},"I2C")," port of base shield."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/with_ardu.jpg",alt:"pir",width:600,height:"auto"})),(0,i.yg)("h4",{id:"software"},"Software"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 1.")," Download the ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_IMU_10DOF_v2.0/archive/master.zip"},"Grove-IMU_10DOF_v2 library.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 2.")," Please follow ",(0,i.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"how to install an arduino library")," procedures to install library."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 3.")," Restart the Arduino IDE. Open \u201c IMM_10DOF_Test example via the path: ",(0,i.yg)("strong",{parentName:"li"},"File -> Example ->GROVE_IMU_10DOF_V2-master-> IMU_10DOF_V2_Test"),".")),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/library%20example.jpg",alt:"pir",width:600,height:"auto"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 4.")," Upload the code. Note that we should select the correct board type and COM port.\nWe can see:")),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/ardu_result.jpg",alt:"pir",width:600,height:"auto"})),(0,i.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/res/Grove%20-%20IMU%2010DOF%20v2.0.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.yg)("h2",{id:"resources"},"Resources"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"[Eagle]")," ",(0,i.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/res/Grove%20-%20IMU%2010DOF%20v2.0.zip"},"Grove - IMU 10DOF v2 eagle file")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"[Library]")," ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_IMU_10DOF_v2.0/archive/master.zip"},"Get library from github")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"[Dtasheet]")," ",(0,i.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/res/BMP280-Datasheet.pdf"},"BMP280 datasheet")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"[Dtasheet]")," ",(0,i.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/MPU-9250A_Product_Specification.pdf"},"MPU-9250 datasheet"))),(0,i.yg)("h2",{id:"projects"},"Projects"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Motorcycle Data App"),": Learn from your ride like a pro! Motorcycle race teams have used IMU data for years, with RideData+Arduino it's easy for you to do the same."),(0,i.yg)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/RideData/motorcycle-data-app-11698f/embed",width:"350"}),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);