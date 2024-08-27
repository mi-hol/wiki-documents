"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[86957],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),g=u(n),c=i,y=g["".concat(s,".").concat(c)]||g[c]||p[c]||o;return n?r.createElement(y,l(l({ref:t},d),{},{components:n})):r.createElement(y,l({ref:t},d))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=c;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[g]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},88378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(9668),i=(n(96540),n(15680));const o={title:"Grove - Serial RF Pro",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Sensor_communication/",slug:"/Grove-Serial_RF_Pro",last_update:{date:"01/06/2022",author:"gunengyu"}},l=void 0,a={unversionedId:"Sensor/Grove/Grove_Sensors_Network/RF/Grove-Serial_RF_Pro",id:"Sensor/Grove/Grove_Sensors_Network/RF/Grove-Serial_RF_Pro",title:"Grove - Serial RF Pro",description:"Grove-Serial RF Pro is a low cost, high performance transparent FSK transceiver with operating at 433/470/868/915 MHz, and the best performance is at 433M(Default). There is a UART interface that is easy to realize the wireless data transmission with only providing the UART data. It is flexible for the users to set the UART baud rate, frequency, output power, data rate, frequency deviation, receiving bandwidth etc parameters. It is your ideal choice for designing wireless data transmission products which can be widely used on wireless data transmission field.",source:"@site/docs/Sensor/Grove/Grove_Sensors_Network/RF/Grove-Serial_RF_Pro.md",sourceDirName:"Sensor/Grove/Grove_Sensors_Network/RF",slug:"/Grove-Serial_RF_Pro",permalink:"/Grove-Serial_RF_Pro",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors_Network/RF/Grove-Serial_RF_Pro.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641427200,formattedLastUpdatedAt:"Jan 6, 2022",frontMatter:{title:"Grove - Serial RF Pro",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Sensor_communication/",slug:"/Grove-Serial_RF_Pro",last_update:{date:"01/06/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Long Range 868MHz",permalink:"/Grove_LoRa_Radio"},next:{title:"Grove - DMX512",permalink:"/Grove-DMX512"}},s={},u=[{value:"Version Tracker",id:"version-tracker",level:2},{value:"Features",id:"features",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Specification",id:"specification",level:2},{value:"Interface Function",id:"interface-function",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Config and Inquiry methods",id:"config-and-inquiry-methods",level:3},{value:"Communication Mode",id:"communication-mode",level:3},{value:"Reference",id:"reference",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:u},g="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(g,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/Twigrf.jpg",alt:null})),(0,i.yg)("p",null,"Grove-Serial RF Pro is a low cost, high performance transparent FSK transceiver with operating at 433/470/868/915 MHz, and the best performance is at 433M(Default). There is a UART interface that is easy to realize the wireless data transmission with only providing the UART data. It is flexible for the users to set the UART baud rate, frequency, output power, data rate, frequency deviation, receiving bandwidth etc parameters. It is your ideal choice for designing wireless data transmission products which can be widely used on wireless data transmission field."),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Serial-RF-Pro-p-794.html"},(0,i.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,i.yg)("h2",{id:"version-tracker"},"Version Tracker"),(0,i.yg)("table",null,(0,i.yg)("tr",null,(0,i.yg)("th",null," Revision"),(0,i.yg)("th",null," Descriptions"),(0,i.yg)("th",null," Release")),(0,i.yg)("tr",null,(0,i.yg)("td",{width:"300px"}," v0.9b"),(0,i.yg)("td",{width:"500px"}," Initial public release"),(0,i.yg)("td",{width:"200px"}," NA"))),(0,i.yg)("h2",{id:"features"},"Features"),(0,i.yg)("hr",null),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Grove compatible"),(0,i.yg)("li",{parentName:"ul"},"High output power"),(0,i.yg)("li",{parentName:"ul"},"High output power"),(0,i.yg)("li",{parentName:"ul"},"Small size"),(0,i.yg)("li",{parentName:"ul"},"Longer transmission distance")),(0,i.yg)("h2",{id:"application-ideas"},"Application Ideas"),(0,i.yg)("hr",null),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Remote control, remote measurement system"),(0,i.yg)("li",{parentName:"ul"},"Wireless meter"),(0,i.yg)("li",{parentName:"ul"},"Access control"),(0,i.yg)("li",{parentName:"ul"},"Identification system"),(0,i.yg)("li",{parentName:"ul"},"Data collection"),(0,i.yg)("li",{parentName:"ul"},"IT household appliance"),(0,i.yg)("li",{parentName:"ul"},"Baby monitoring system")),(0,i.yg)("h2",{id:"specification"},"Specification"),(0,i.yg)("hr",null),(0,i.yg)("table",{cellspacing:"0",width:"80%"},(0,i.yg)("tr",null,(0,i.yg)("th",{scope:"col"}," Item"),(0,i.yg)("th",{scope:"col"}," Min"),(0,i.yg)("th",{scope:"col"}," Typical"),(0,i.yg)("th",{scope:"col"}," Max"),(0,i.yg)("th",{scope:"col"}," Unit")),(0,i.yg)("tr",null,(0,i.yg)("td",{scope:"row"},"Working Voltage"),(0,i.yg)("td",null," 4.75"),(0,i.yg)("td",null," 5.0"),(0,i.yg)("td",null," 5.25"),(0,i.yg)("td",null," VDC")),(0,i.yg)("tr",null,(0,i.yg)("td",{scope:"row"}," Current at sleep mode"),(0,i.yg)("td",{colspan:"3"}," 1"),(0,i.yg)("td",null," uA")),(0,i.yg)("tr",null,(0,i.yg)("td",{scope:"row"}," output power"),(0,i.yg)("td",null," 1"),(0,i.yg)("td",null," -"),(0,i.yg)("td",null," 20"),(0,i.yg)("td",null," dB")),(0,i.yg)("tr",null,(0,i.yg)("td",{scope:"row"}," Communication Speed"),(0,i.yg)("td",null," 1.2"),(0,i.yg)("td",null,"  -"),(0,i.yg)("td",null," 115.2"),(0,i.yg)("td",null," Kbps")),(0,i.yg)("tr",null,(0,i.yg)("td",{scope:"row"}," Transmission Distance(Max)"),(0,i.yg)("td",{colspan:"3"}," 1"),(0,i.yg)("td",null," Km")),(0,i.yg)("tr",null,(0,i.yg)("td",{scope:"row"}," Sensitivity"),(0,i.yg)("td",{colspan:"3"}," -117"),(0,i.yg)("td",null," dBm")),(0,i.yg)("tr",null,(0,i.yg)("td",{scope:"row"}," Communication Protocol"),(0,i.yg)("td",{colspan:"3"},"  UART"),(0,i.yg)("td",null," /")),(0,i.yg)("tr",null,(0,i.yg)("td",{scope:"row"}," Operate Temperature"),(0,i.yg)("td",null," -40"),(0,i.yg)("td",null,"  -"),(0,i.yg)("td",null," +85"),(0,i.yg)("td",null," \u2103"))),(0,i.yg)("h2",{id:"interface-function"},"Interface Function"),(0,i.yg)("hr",null),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/Serial_RF_Pro1.jpg",alt:null})),(0,i.yg)("table",null,(0,i.yg)("tr",null,(0,i.yg)("th",null," Pad Type (5V Logic level)"),(0,i.yg)("th",null," Description")),(0,i.yg)("tr",null,(0,i.yg)("td",{width:"100px"}," G(GND)"),(0,i.yg)("td",{width:"450px"}," Ground port")),(0,i.yg)("tr",null,(0,i.yg)("td",null," EN(ENABLE)"),(0,i.yg)("td",null," Set low for normal mode as data transceiver (Default is low with 10k to GND). Set high to put into sleep mode.")),(0,i.yg)("tr",null,(0,i.yg)("td",null," CON(CONFIG)"),(0,i.yg)("td",null," Set low for configuration mode (connect to GND). Set high for communication (Default is high).")),(0,i.yg)("tr",null,(0,i.yg)("td",null," RX"),(0,i.yg)("td",null," UART Data input")),(0,i.yg)("tr",null,(0,i.yg)("td",null," TX"),(0,i.yg)("td",null," UART Data output")),(0,i.yg)("tr",null,(0,i.yg)("td",null," V(VCC)"),(0,i.yg)("td",null," Designed for 5V(+)supply")),(0,i.yg)("tr",null,(0,i.yg)("td",null," AT"),(0,i.yg)("td",null," Antenna pin"))),(0,i.yg)("h2",{id:"getting-started"},"Getting Started"),(0,i.yg)("hr",null),(0,i.yg)("p",null,"Here we show two RF Pro Grove units mutually transmitting/receiving data. You need two RF Pro Grove units and two Seeeduino to do the demo."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Connect one Grove - Serial RF Pro to UART of ",(0,i.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Base_Shield_V2/"},"Grove - Base Shield")," and plug Grove - Base Shield into Seeeduino.")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/Rfdemo.jpg",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Connect another Grove - Serial RF Pro to Seeeduino using the same method.")),(0,i.yg)("h3",{id:"config-and-inquiry-methods"},"Config and Inquiry methods"),(0,i.yg)("p",null,"The module will be ready for Config status if ENABLE pin is low, CONFIG pin is low. It will be in Config\nif the red and green LED keep lighting. Then you can Config ","&"," inquiry on the module."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Connect CON pin to LOW/GND to enter configure mode.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Send command to modify and query the config of the module. Config ","&"," Inquiry instruction description see ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-Serial_RF_Pro/#reference"},"Reference"),"."))),(0,i.yg)("p",null,"The Config instruction format is as AA+FA+","[instruction]","+","[parameter]",". The instruction is 1 byte, the parameter is the HEX data of 0-4 bytes (in big-endian ordering, with the high byte before the low byte)."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note:")),(0,i.yg)("p",null,"1) Do remember the UART transfer speed (default is 9600, better not change) if you make some change, or you won't be able to control the module. The instruction\u2019s transfer speed will change accordingly if changes the transfer speed of UART. The range of transfer speed of the instruction is from 1.2Kbps \u2013 115.2K bps."),(0,i.yg)("p",null,"2) LED Function Description:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The red and green LED will flash when there is power and the module is working.")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The module will be ready for configuration mode if EN(ENABLE) pin is low(default is low)\uff0cCON(Config) pin is low. When in configuration mode, the red and green LED will both be solidly lit. - The green and red LED will not be solidly lit if the module is not in configuration mode."),(0,i.yg)("li",{parentName:"ul"},"The red LED flash when the module is transmitting, the red LED will be off when the transmission is finished."),(0,i.yg)("li",{parentName:"ul"},"The green LED is off when the module is waiting for data to be received, the green LED will flash once when the module receives data.")),(0,i.yg)("h3",{id:"communication-mode"},"Communication Mode"),(0,i.yg)("p",null,"Upload the below code into Seeeduino, Please click ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code"},"here")," if you do not know how to upload."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'//send data routine\n\n// link between the computer and the SoftSerial Shield\n//at 9600 bps 8-N-1\n//Computer is connected to Hardware UART\n//SoftSerial Shield is connected to the Software UART:D2&D3\n\n#include <SoftwareSerial.h>\n\nSoftwareSerial SoftSerial(11, 10); // TX, RX\nint buffer[64];\nint count=0;\nvoid setup()\n{\n    SoftSerial.begin(9600);               // the SoftSerial baud rate\n    Serial.begin(9600);             // the Serial port of Arduino baud rate.\n\n}\n\nvoid loop()\n{\n    delay(1000);\n    SoftSerial.write(0xAA);\n    SoftSerial.write(0xFA);\n    SoftSerial.write(0xE1);\n\n    if (SoftSerial.available())              // if date is coming from software serial port ==> data is coming from SoftSerial shield\n    {\n        while(SoftSerial.available())          // reading data into char array\n        {\n            buffer[count++]=SoftSerial.read();     // writing data into array\n            if(count == 64)break;\n        }\n        for (int i=0; i<count; i++) {\n            Serial.print(buffer[i],HEX);            // if no data transmission ends, write buffer to hardware serial port\n        }\n        clearBufferArray();              // call clearBufferArray function to clear the stored data from the array\n        count = 0;                       // set counter of while loop to zero\n    }\n    if (Serial.available())            // if data is available on hardware serial port ==> data is coming from PC or notebook\n    SoftSerial.write(Serial.read());       // write it to the SoftSerial shield\n    Serial.println("...");\n}\nvoid clearBufferArray()              // function to clear buffer array\n{\n    for (int i=0; i<count;i++)\n    { buffer[i]=NULL;}                  // clear all index of array with command NULL\n}\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"You can see as show below after open serial monitor.")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/Communication_result.jpg",alt:null})),(0,i.yg)("h2",{id:"reference"},"Reference"),(0,i.yg)("hr",null),(0,i.yg)("p",null,"The following table lists the commands and responses involved in interacting with Serial RF Pro v0.9b."),(0,i.yg)("table",null,(0,i.yg)("tbody",null,(0,i.yg)("tr",null,(0,i.yg)("th",null,"Instruction(HEX)"),(0,i.yg)("th",null,"Description"),(0,i.yg)("th",null,"Config instruction(HEX)"),(0,i.yg)("th",null,"Return Value")),(0,i.yg)("tr",null,(0,i.yg)("td",null,"F0"),(0,i.yg)("td",null,"Reset to default parameters (except UART transfer speed), no parameter follows"),(0,i.yg)("td",{width:"400px"},"AA FA F0"),(0,i.yg)("td",null,"4F 4B 0D 0A \uff08OK /r/n)")),(0,i.yg)("tr",null,(0,i.yg)("td",null,"E1"),(0,i.yg)("td",null,"Reading the current Config parameter, no parameter follows"),(0,i.yg)("td",null,"AA FA E1"),(0,i.yg)("td",null,"16 bytes: (**following the order below**)",(0,i.yg)("pre",null,"working frequency-4 bytes,","\n","wireless data rate-4 bytes,","\n","receiving bandwidth-2 bytes,","\n","frequency deviation-1 byte,","\n","transmission power-1 byte,","\n","UART transfer speed-4 bytes","\n"))),(0,i.yg)("tr",null,(0,i.yg)("td",null,"D2"),(0,i.yg)("td",null,"Set up working frequency\uff0c[parameter]4 byte\uff0c[parameter] Unit :Hz. Set up range: *HM-TRP-433: 414000000-454000000Hz; *   HM-TRP-470: 450000000-490000000Hz; *HM-TRP-868: 849000000-889000000Hz; *   HM-TRP-915: 895000000-935000000Hz"),(0,i.yg)("td",null,"Example: *Config instruction: AA FA D2 **36 89 CA C0**, set up frequency as 915000000Hz.(**0x36 89 CA C0=915000000**) *   Config instruction: AA FA D2 **19 DE 50 80**, set up frequency as 434000000Hz.(**0x19 DE 50 80=434000000**)"),(0,i.yg)("td",null,"4F 4B 0D 0A \uff08OK /r/n)")),(0,i.yg)("tr",null,(0,i.yg)("td",null,"C3"),(0,i.yg)("td",null,"Set up wireless data rate\uff0c[parameter]4 byte\uff0c[parameter] unit :bps. Set up range:1200-115200 bps"),(0,i.yg)("td",null,"Example: *Config instruction: AA FA C3 **00 00 25 80**,set up transfer speed as 9600bps.(**0x00 00 25 80=9600**) *   Config instruction: AA FA C3 **00 00 96 00**, set up transfer speed as 38400bps.(**0x00 00 96 00=38400**)"),(0,i.yg)("td",null,"4F 4B 0D 0A \uff08OK /r/n)")),(0,i.yg)("tr",null,(0,i.yg)("td",null,"B4"),(0,i.yg)("td",null,"Set up receiving bandwidth\uff0c[parameter]2 byte\uff0c[parameter]Unit :KHz Set up range:30-620KHz"),(0,i.yg)("td",null,"Example: *Config instruction: AA FA B4 **00 69**, set up receiving band as 105KHz.(**0x00 69=105**) *   Config instruction: AA FA B4 **01 2C**, set up receiving band as 300KHz.(**0x01 2C=300**)"),(0,i.yg)("td",null,"4F 4B 0D 0A \uff08OK /r/n)")),(0,i.yg)("tr",null,(0,i.yg)("td",null,"A5"),(0,i.yg)("td",null,"Set up frequency deviation\uff0c[parameter]1 byte\uff0c[parameter]Unit :KHz Set up range:10-160KHz"),(0,i.yg)("td",null,"Example: *Config instruction: AA FA A5 **23**, set up modulation frequency as 35KHz.(**0x23=35**) *   Config instruction: AA FA A5 **32**, set up modulation frequency as 50KHz.(**0x32=50**)"),(0,i.yg)("td",null,"4F 4B 0D 0A \uff08OK /r/n)")),(0,i.yg)("tr",null,(0,i.yg)("td",null,"96"),(0,i.yg)("td",null,"Set up transmission power ,[parameter]1 byte\uff0c0~7level Set up range:0-7level(1-20 dBm)"),(0,i.yg)("td",null,"Example: *Config instruction: AA FA 96 **07**, set up transmission power as level 7 (+20 dBm) *   Config instruction:AA FA 96 **03**, set up transmission power as level 3 (+8 dBm)",(0,i.yg)("pre",null,"Transmission power level","     ","Transmission power","\n","7","                                 ","+20dBm","\n","6","                                 ","+17dBm","\n","5","                                 ","+14dBm","\n","4","                                 ","+11dBm","\n","3","                                 ","+8dBm","\n","2","                                 ","+5dBm","\n","1","                                 ","+2dBm","\n","0","                                 ","+1dBm","\n")),(0,i.yg)("td",null,"4F 4B 0D 0A \uff08OK /r/n)")),(0,i.yg)("tr",null,(0,i.yg)("td",null,"1E"),(0,i.yg)("td",null,"Set up UART transfer speed\uff0c[parameter]4 byte\uff0c[parameter] unit: bps Set up range:1200-115200 bps"),(0,i.yg)("td",null,"Example: *Config Instruction :AA FA 1E **00 00 25 80**,set up speed as 9600bps.(**0x00 00 25 80=9600**) *   Config instruction :AA FA 1E **00 00 96 00**, set up speed as 38400bps.(**0x00 00 96 00=38400**)"),(0,i.yg)("td",null,"4F 4B 0D 0A \uff08OK /r/n)")),(0,i.yg)("tr",null,(0,i.yg)("td",null,"87"),(0,i.yg)("td",null,"Wireless signal strength when receiving useful data, follows no [parameter]"),(0,i.yg)("td",null,"Config Instruction\uff1aAA FA 87 ![](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/WirelesssignalstrengthRSSI.jpg)"),(0,i.yg)("td",null,"RSSI value is 8 bit, range: 0-255")),(0,i.yg)("tr",null,(0,i.yg)("td",null,"78"),(0,i.yg)("td",null,"Disturb wireless signal strength, follows no [parameter] Note\uff1a *Modulation index : h = Fd/Rb, Range is 0.5 ~ 32. *   If h>1, BW =Rb+2Fd; If h<1, BW =2Rb+ Fd."),(0,i.yg)("td",null,"Config Instruction\uff1aAA FA 78"),(0,i.yg)("td",null,"RSSI value is 8 bit , range: 0-255")))),(0,i.yg)("h2",{id:"resources"},"Resources"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[Code]")," ",(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/res/Grove-Serial_RF_Pro_Demo_Code.zip"},"Serial RF Pro Demo Code"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[Datasheet]")," ",(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/res/HM-TRP-RS232_enV1.0_20120604.pdf"},"HopeRF HM-TRP Series 100mW Transceiver modules V1.0 Datasheet")))),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);