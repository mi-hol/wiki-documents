"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[44919],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(t),h=a,g=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return t?i.createElement(g,l(l({ref:n},p),{},{components:t})):i.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=h;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},72609:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(9668),a=(t(96540),t(15680));const r={description:"WireLess_Gate_Shield_V1.0",title:"WireLess Gate Shield V1.0",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/WireLess_Gate_Shield_V1.0",last_update:{date:"02/02/2023",author:"Eico"},no_comments:!1},l=void 0,o={unversionedId:"Top_Brand/Arduino/shield/WireLess_Gate_Shield_V1.0",id:"Top_Brand/Arduino/shield/WireLess_Gate_Shield_V1.0",title:"WireLess Gate Shield V1.0",description:"WireLess_Gate_Shield_V1.0",source:"@site/docs/Top_Brand/Arduino/shield/WireLess_Gate_Shield_V1.0.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/WireLess_Gate_Shield_V1.0",permalink:"/WireLess_Gate_Shield_V1.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/WireLess_Gate_Shield_V1.0.md",tags:[],version:"current",lastUpdatedBy:"Eico",lastUpdatedAt:1675296e3,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{description:"WireLess_Gate_Shield_V1.0",title:"WireLess Gate Shield V1.0",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/WireLess_Gate_Shield_V1.0",last_update:{date:"02/02/2023",author:"Eico"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"Renbotics Servo Shield Rev",permalink:"/Renbotics_ServoShield_Rev"},next:{title:"2.7inch Triple-Color E-link Shield for Arduino",permalink:"/2.7inch-Triple-Color-E-Ink-Shield-for-Arduino"}},s={},d=[{value:"Features",id:"features",level:2},{value:"Layout and schematics",id:"layout-and-schematics",level:2},{value:"Basic functionality",id:"basic-functionality",level:2},{value:"Expansion Capabilities",id:"expansion-capabilities",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Features  WireLess Gate Shield",id:"features--wireless-gate-shield",level:2},{value:"Wireless Modules",id:"wireless-modules",level:3},{value:"Automatic display of the wireless modules",id:"automatic-display-of-the-wireless-modules",level:3},{value:"Features",id:"features-1",level:3},{value:"Modification to control via IR",id:"modification-to-control-via-ir",level:3},{value:"Libraries",id:"libraries",level:2},{value:"Required Library",id:"required-library",level:3},{value:"Features  use libraries",id:"features--use-libraries",level:3},{value:"Demonstration",id:"demonstration",level:2},{value:"Code for the main unit with WireLess Gate Shield (works with RTC, IR, RFM69HW, nRF24l01 +)",id:"code-for-the-main-unit-with-wireless-gate-shield-works-with-rtc-ir-rfm69hw-nrf24l01-",level:3},{value:"Code for &quot;receiver&quot; (for the test used Arduino Nano and RFM69HW module on the breadboard)",id:"code-for-receiver-for-the-test-used-arduino-nano-and-rfm69hw-module-on-the-breadboard",level:3},{value:"Product versions",id:"product-versions",level:2},{value:"Applications",id:"applications",level:2},{value:"Questions and Answers",id:"questions-and-answers",level:2},{value:"How to buy",id:"how-to-buy",level:2},{value:"Links",id:"links",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:d},u="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,i.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/WireLess_Gate_Shield_V1.0/img/WLG_h.jpg",alt:"pir",width:600,height:"auto"})),(0,a.yg)("p",null,"WireLess Gate Shield is an Arduino-compatible expansion card designed to build a system of receiving / transmitting and broadcasting various wireless commands and data. For maximum coverage possible wireless communication interfaces on the board has an IR receiver interface for connecting popular  transceiver nRF24L01 + and RFM69HW. Additionally, the board has a real time clock module DS1307."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/WireLess_Gate_Shield_V1.0/img/WLG_intro.jpg",alt:"pir",width:600,height:"auto"})),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("a",{href:"https://www.seeedstudio.com/WireLess-Gate-Shield-p-2117.html",target:"_blank"},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,a.yg)("h2",{id:"features"},"Features"),(0,a.yg)("hr",null),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Interface to connect the transceiver 315/433/868/915 MHz (depending on the version) ",(0,a.yg)("a",{parentName:"p",href:"http://devicter.ru/goods/RFM69HW-RF-transceiver"},"RFM69HW"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Interface to connect the transceiver at 2.4 GHz ",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/s/nRF24L01.html?search_in_description=0"},"nRF24L01 +"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"IR receiver")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Real-time clock module based on DS1307 with battery backup")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"LED automatic activity radio modules")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"LED for user")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Clock button to operate")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/Grove-t-3.html?ref=top"},"GROVE"),"-compatible connector: I2C")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Fully compatible with ",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/W5200-Ethernet-Shield-p-1577.html"},"Ethernet Shield")))),(0,a.yg)("h2",{id:"layout-and-schematics"},"Layout and schematics"),(0,a.yg)("hr",null),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/WireLess_Gate_Shield_V1.0/img/Wl-top.png",alt:"pir",width:600,height:"auto"})),(0,a.yg)("p",null,"On the left side WireLess Gate Shield are interfaces to wireless modules:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'nRF24l01 +, including the enhanced ("PA") version (above)'),(0,a.yg)("li",{parentName:"ul"},"RFM69HW (bottom).")),(0,a.yg)("p",null,"Between wireless modules is U.FL connector for external antenna for RFM69HW. If you plan to use the regular antenna (bit of wire required length) - it is possible to solder directly to the board Schild (near the connector U.FL)"),(0,a.yg)("p",null,'To the right and slightly above the module is RFM69HW LED LED1 "RF433"'),(0,a.yg)("p",null,"In the central part of the board is a slot for a backup battery for clock module DS1307"),(0,a.yg)("p",null,"To the right and slightly below the slot for the battery - I2C-connector."),(0,a.yg)("p",null,"On the right side is (top-down):"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'LED LED2 "RF24"'),(0,a.yg)("li",{parentName:"ul"},"IR receiver"),(0,a.yg)("li",{parentName:"ul"},"LED LED3 - user"),(0,a.yg)("li",{parentName:"ul"},"Clock button S1")),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/WireLess_Gate_Shield_V1.0/img/Wl-Scheme.PNG",alt:"pir",width:600,height:"auto"})),(0,a.yg)("h2",{id:"basic-functionality"},"Basic functionality"),(0,a.yg)("hr",null),(0,a.yg)("p",null,"In the basic version (without the use of Ethernet Shield) may organize a wireless gateway between the radios and the IR receiver."),(0,a.yg)("p",null,"Command (or data) can be broadcast between all three wireless interfaces according to the logic of that program the user."),(0,a.yg)("p",null,"Availability of real-time clock module will automate the sending of any data or commands with reference to the date / time."),(0,a.yg)("p",null,"Device Management can be organized using a button located on the Shield."),(0,a.yg)("h2",{id:"expansion-capabilities"},"Expansion Capabilities"),(0,a.yg)("hr",null),(0,a.yg)("p",null,"Additionally WireLess Gate Shield can connect any i2c device using Grove-compatible connections (sensors, displays, etc.)."),(0,a.yg)("p",null,"WireLess Gate Shield was designed to be fully compatible with ",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/W5200-Ethernet-Shield-p-1577.html"},"Ethernet Shield")," - so you can use these two together Schild to create even more advanced wireless control device (logging on SD-card and presenting data on a web page, manage wireless devices via the web)."),(0,a.yg)("h2",{id:"interfaces"},"Interfaces"),(0,a.yg)("hr",null),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Interface for RF-module nRF24L01 +:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"D11 - MOSI"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"D12 - MISO"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"D13 - SCK"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"D7 - RF24_CE")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"D8 - RF24_CSN")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"D2 - RF24_IRQ")))))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Interface for RF-module RFM69HW:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"D11 - MOSI"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"D12 - MISO"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"D13 - SCK"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"D9 - RF433_NSS")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"A0 - RF433_RESET")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"D3 - RF433_IRQ")))))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},'A4 (SDA), A5 (SCL) - displayed on the connector "I2C" (the other two pins in the connector - VCC and GND for sensor supply)')),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"A4 (SDA), A5 (SCL) - are involved in parallel for RTC DS1307")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"A1 - Button")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"D6 - Custom LED (LED3)"))),(0,a.yg)("h2",{id:"features--wireless-gate-shield"},"Features  WireLess Gate Shield"),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"wireless-modules"},"Wireless Modules"),(0,a.yg)("p",null,"Both wireless module RFM69HW and nRF24l01 + connected hardware bus SPI."),(0,a.yg)("p",null,"Selection of a particular wireless module is a low potential for the establishment of the appropriate chip select pin:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"CSN (D8) for the module nRF24l01 +"),(0,a.yg)("li",{parentName:"ul"},"NSS (D9) for the module RFM69HW")),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"'Warning', 'If you have installed, but the software is not involved RFM69HW, be sure to install NSS pin of this module in state HIGH (otherwise it will interfere with the normal operation nRF24l01 + and Ethernet Shield.")),(0,a.yg)("h3",{id:"automatic-display-of-the-wireless-modules"},"Automatic display of the wireless modules"),(0,a.yg)("p",null,"LED indication of the wireless module is implemented as follows:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'LED cathode LED1 "RF24" connected to pin CSN (D8) module nRF24l01 +, the anode of the LED (through a current limiting resistor) - to pin SCK bus SPI (D13)'),(0,a.yg)("li",{parentName:"ul"},'LED cathode LED2 "RF433" connected to pin NSS (D9) module RFM69HW, the anode of the LED (through a current limiting resistor) - to pin SCK bus SPI (D13)')),(0,a.yg)("p",null,'When radios are not active - at the appropriate pines chip select (CSN and NSS) there is a high potential, with the appearance of the clock at pin SCK does not lead to the ignition of the LEDs.\nIf the same MK "communicates" with any wireless module to select it at the appropriate Pina (CSN and NSS) is set low potential and at the same timing pulses at pin SCK "ignite" the corresponding LED.'),(0,a.yg)("p",null,"Thus, the user is not required to arrange for any additional programming work on the MC to indicate operation of the module."),(0,a.yg)("h3",{id:"features-1"},"Features"),(0,a.yg)("p",null,"If necessary, SMD-LED to replace the usual outs (eg to embed the finished device in a cute case with display):"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The board is close to the equipment corresponding LED is seating where you can solder terminals LEDs (or the appropriate cable)."),(0,a.yg)("li",{parentName:"ul"},"Current-limiting resistor is on the board (for the output of the LED series resistor is not required)"),(0,a.yg)("li",{parentName:"ul"},"SMD-LED when setting the output of the LED must be removed from the board")),(0,a.yg)("h3",{id:"modification-to-control-via-ir"},"Modification to control via IR"),(0,a.yg)("p",null,"Custom LED can be replaced by LED3 pin IR LED and thereby further expand the use of WireLess Gate Shield (for example, a command sent via any wireless interface or LAN - control devices using infrared commands)."),(0,a.yg)("h2",{id:"libraries"},"Libraries"),(0,a.yg)("h3",{id:"required-library"},"Required Library"),(0,a.yg)("p",null,"To use the WireLess Gate Shield requires the following libraries:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Work with the transceiver nRF24L01 + - ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/maniacbug/RF24/archive/master.zip"},"RF24"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Work with the transceiver RFM69HW - ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/LowPowerLab/RFM69/archive/master.zip"},"RFM69"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Real-time clock (RTC) - ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/adafruit/RTClib/archive/master.zip"},"RTClib"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"IR-receiver - ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/shirriff/Arduino-IRremote/archive/master.zip"},"IRremote")))),(0,a.yg)("p",null,"Additionally required libraries that are used when working RF24 and LCD-display:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"SPI")),(0,a.yg)("p",null,"Libraries are examples of them just to understand how they work."),(0,a.yg)("h3",{id:"features--use-libraries"},"Features  use libraries"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"NRF24l01 +")),(0,a.yg)("p",null,"Module Initialization nRF24l01 + as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"//RF24 radio(CE,CSN);\nRF24 radio(7,8);\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"RFM69HW")),(0,a.yg)("p",null,"To work with a wireless module RFM69HW need to make minor corrections to the file RFM69.h follows:"),(0,a.yg)("p",null,"At the beginning of the file to find the line:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"#define SPI_CS               SS // SS is the SPI slave select pin, for instance D10 on atmega328\n#define RF69_IRQ_PIN          2 // INT0 on AVRs should be connected to DIO0 (ex on Atmega328 it's D2)\n")),(0,a.yg)("p",null,"And replace them with:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"//#define SPI_CS               SS // SS is the SPI slave select pin, for instance D10 on atmega328\n//#define RF69_IRQ_PIN          2 // INT0 on AVRs should be connected to DIO0 (ex on Atmega328 it's D2)\n#define SPI_CS               9 // SS is the SPI slave select pin, for WireLess Gate Shield - D9\n#define RF69_IRQ_PIN          3 // INT1 on AVRs should be connected to DIO0 (ex on Atmega328 it's D3)\n")),(0,a.yg)("p",null,"Additionally, the file RFM69.cpp need to find the line:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"void RFM69::isr0() { selfPointer-&gt;interruptHandler(); }\n")),(0,a.yg)("p",null,"And replace them with:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"//void RFM69::isr0() { selfPointer-&gt;interruptHandler(); }\nvoid RFM69::isr1() { selfPointer-&gt;interruptHandler(); }\n")),(0,a.yg)("p",null,"Module Initialization RFM69HW as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"  resetRFM69();\n  radio.setCS(9); // NSS - D9\n  radio.initialize(FREQUENCY,NODEID,NETWORKID);\n")),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"'Note:'")," Working with RFM69HW determined by the state of its registers. For more tinctures for specific endpoints required by the rules in the file RFM69.cpp function RFM69 :: initialize\nTo better understand the purpose registers read the file RFM69registers.h (also included in the library), and documentation ",(0,a.yg)("a",{parentName:"p",href:"http://st.devicter.ru/9/1115/243/RFM69HW.pdf"},"radio RFM69HW")),(0,a.yg)("h2",{id:"demonstration"},"Demonstration"),(0,a.yg)("h3",{id:"code-for-the-main-unit-with-wireless-gate-shield-works-with-rtc-ir-rfm69hw-nrf24l01-"},"Code for the main unit with WireLess Gate Shield (works with RTC, IR, RFM69HW, nRF24l01 +)"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Sends a structure to another RFM69HW and receives a response (ping-pong)."),(0,a.yg)("li",{parentName:"ul"},"Listen nRF24l01 + comes and if appropriate package - outputs it to monitor"),(0,a.yg)("li",{parentName:"ul"},"Accepts commands via IR receiver (the recognized commands are displayed in the monitor) and lights custom LED")),(0,a.yg)("p",null,"All results are displayed in the Serial Monitor"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <RFM69.h>\n#include <SPI.h>\n#include "RF24.h"\n#include <IRremote.h>\n#include <Wire.h>\n#include "RTClib.h"\n\nRF24 radio24(7,8);\n\nRTC_DS1307 RTC;\n\nint RECV_PIN = 5;\n\nIRrecv irrecv(RECV_PIN);\n\ndecode_results results;\n\n// create a framework for the transmission of values\ntypedef struct{\n    int SensorID;        // ID sensor\n    int CommandTo;       // command module number ...\n    int Command;         // command\n    // 0 - answer\n    // 1 - get the value\n    // 2 - set the value\n    int ParamID;         // parameter identifier\n    float ParamValue;    // value\n    boolean Status;      // status\n    // 0 - read-only (RO)\n    // 1 -  can change the (RW)\n    char Comment[16];    // comment\n}\nMessage;\n\nMessage sensor;\n\nconst uint64_t pipes[2] = {\n0xF0F0F0F0E1LL, 0xF0F0F0F0D2LL };\n\nvolatile boolean waitRF24 = false;\n\n#define NODEID      99\n#define NETWORKID   100\n#define GATEWAYID   1\n#define FREQUENCY   RF69_433MHZ //Match this with the version of your Moteino! (others: RF69_433MHZ, RF69_868MHZ)\n#define KEY         "thisIsEncryptKey" //has to be same 16 characters/bytes on all nodes, not more not less!\n#define LED         6\n#define SERIAL_BAUD 115200\n#define ACK_TIME    30  // # of ms to wait for an ack\n\n#define RFM69_RESET 14  //A0\n#define RFM69_NSS 9\n#define RFM69_DIO0 3\n\n#define BUTTON 15 // A1\n\n#define MOSI 11\n#define MISO 12\n#define SCK 13\n\nint TRANSMITPERIOD = 500; //transmit a packet to gateway so often (in ms)\nbyte sendSize=0;\nboolean requestACK = false;\nRFM69 radio;\n\nint delta=2000;\n\nunsigned long blinkStop;\nunsigned long timeReady;\n\ntypedef struct {\n    int           nodeId; //store this nodeId\n    unsigned long uptime; //uptime in ms\n    float         temp;   //temperature maybe?\n}\nPayload;\nPayload theData;\n\nvoid setup() {\n    Serial.begin(SERIAL_BAUD);\n\n    pinMode(LED, OUTPUT);\n\n    pinMode(RFM69_NSS, OUTPUT);\n    pinMode(7, OUTPUT);\n    pinMode(8, OUTPUT);\n    pinMode(MOSI, OUTPUT);\n    pinMode(MISO, INPUT);\n    pinMode(SCK, OUTPUT);\n\n    pinMode(RFM69_RESET, OUTPUT);\n    pinMode(RFM69_DIO0, INPUT);\n\n    pinMode(BUTTON, INPUT);\n\n    digitalWrite(RFM69_NSS, HIGH);\n    digitalWrite(7, HIGH);\n\n    resetRFM69();\n    radio.setCS(RFM69_NSS);\n    radio.initialize(FREQUENCY,NODEID,NETWORKID);\n\n    //radio.setHighPower(); //uncomment only for RFM69HW!\n\n    radio.encrypt(KEY);\n    char buff[50];\n    sprintf(buff, "\\nTransmitting at %d Mhz...", FREQUENCY==RF69_433MHZ ? 433 : FREQUENCY==RF69_868MHZ ? 868 : 915);\n    Serial.println(buff);\n\n    radio24.begin();\n    // optionally, increase the delay between retries & # of retries\n    radio24.setRetries(15,15);\n    radio24.setChannel(119);\n    // \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0421\u041b\u0423\u0428\u0410\u0415\u041c\n    radio24.openWritingPipe(pipes[1]);\n    radio24.openReadingPipe(1,pipes[0]);\n    radio24.startListening();\n\n    delay(20);\n\n    attachInterrupt(0, isr_RF24, FALLING);\n\n    irrecv.enableIRIn();\n\n    Wire.begin();\n    RTC.begin();\n\n    if (! RTC.isrunning()) {\n        Serial.println("RTC is NOT running!");\n        // following line sets the RTC to the date & time this sketch was compiled\n        RTC.adjust(DateTime(__DATE__, __TIME__));\n    }\n}\n\nlong lastPeriod = -1;\nvoid loop() {\n\n    //check for any received packets\n    if (radio.receiveDone())\n    {\n        Serial.print(\'[\');\n        Serial.print(radio.SENDERID, DEC);\n        Serial.print("] ");\n        for (byte i = 0; i < radio.DATALEN; i++)\n        Serial.print((char)radio.DATA[i]);\n        Serial.print("   [RX_RSSI:");\n        Serial.print(radio.readRSSI());\n        Serial.print("]");\n\n        if (radio.ACK_REQUESTED)\n        {\n            radio.sendACK();\n            Serial.print(" - ACK sent");\n            delay(10);\n        }\n        Serial.println();\n    }\n\n    int currPeriod = millis()/TRANSMITPERIOD;\n    if (currPeriod != lastPeriod)\n    {\n        //fill in the struct with new values\n        theData.nodeId = NODEID;\n        theData.uptime = millis();\n        theData.temp = radio.readTemperature();//91.23; //it\'s hot!\n\n        Serial.print("Sending struct (");\n        Serial.print(sizeof(theData));\n        Serial.print(" bytes) ... ");\n        if (radio.sendWithRetry(GATEWAYID, (const void*)(&theData), sizeof(theData)))\n        Serial.print(" ok!");\n        else Serial.print(" nothing...");\n        Serial.println();\n        lastPeriod=currPeriod;\n    }\n\n    listenRF24();\n\n    if (irrecv.decode(&results)) {\n        Serial.println(results.value, HEX);\n        irrecv.resume(); // Receive the next value\n        blinkStop=millis()+100;\n        digitalWrite(LED, HIGH);\n    }\n\n    if (digitalRead(BUTTON)==LOW) {\n        blinkStop=millis()+1000;\n        digitalWrite(LED, HIGH);\n    }\n\n    if (millis()>blinkStop) {\n        digitalWrite(LED, LOW);\n    }\n\n    if(millis()>timeReady){\n        timeReady=millis()+2000;\n        DateTime now = RTC.now();\n\n        Serial.print(now.year(), DEC);\n        Serial.print(\'/\');\n        Serial.print(now.month(), DEC);\n        Serial.print(\'/\');\n        Serial.print(now.day(), DEC);\n        Serial.print(\' \');\n        Serial.print(now.hour(), DEC);\n        Serial.print(\':\');\n        Serial.print(now.minute(), DEC);\n        Serial.print(\':\');\n        Serial.print(now.second(), DEC);\n        Serial.println();\n    }\n}\n\nvoid Blink(byte PIN, int DELAY_MS)\n{\n    pinMode(PIN, OUTPUT);\n    digitalWrite(PIN,HIGH);\n    delay(DELAY_MS);\n    digitalWrite(PIN,LOW);\n}\n\nvoid resetRFM69(){\n    digitalWrite(RFM69_RESET, HIGH);\n    delay(1);\n    digitalWrite(RFM69_RESET, LOW);\n    delay(10);\n}\n\nvoid isr_RF24(){\n    waitRF24 = true;\n}\n\nvoid listenRF24() {\n    if (waitRF24) {\n        waitRF24 = false;\n        if ( radio24.available() )\n        {\n            bool done = false;\n            while (!done)\n            {\n                done = radio24.read( &sensor, sizeof(sensor) );\n                if(sensor.Command == 0) {\n                    Serial.print(sensor.SensorID);\n                    Serial.print("  ");\n                    Serial.print(sensor.ParamID);\n                    Serial.print("  ");\n                    Serial.print(sensor.ParamValue);\n                    Serial.print(" ");\n                    Serial.println(sensor.Comment);\n                }\n            }\n        }\n    }\n}\n')),(0,a.yg)("h3",{id:"code-for-receiver-for-the-test-used-arduino-nano-and-rfm69hw-module-on-the-breadboard"},'Code for "receiver" (for the test used Arduino Nano and RFM69HW module on the breadboard)'),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Takes using RFM69HW structure"),(0,a.yg)("li",{parentName:"ul"},"Accountable for admission"),(0,a.yg)("li",{parentName:"ul"},"Prints additional information regarding the module RFM69HW (registers, etc.)")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <RFM69.h>\n#include <SPI.h>\n\n#define NODEID      1\n#define NETWORKID   100\n#define FREQUENCY   RF69_433MHZ //Match this with the version of your Moteino! (others: RF69_433MHZ, RF69_868MHZ)\n#define KEY         "thisIsEncryptKey" //has to be same 16 characters/bytes on all nodes, not more not less!\n#define LED         6\n#define SERIAL_BAUD 115200\n#define ACK_TIME    30  // # of ms to wait for an ack\n\n#define RFM69_RESET 14\n\nRFM69 radio;\nbool promiscuousMode = false; //set to \'true\' to sniff all packets on the same network\n\ntypedef struct {\n    int           nodeId; //store this nodeId\n    unsigned long uptime; //uptime in ms\n    float         temp;   //temperature maybe?\n} Payload;\nPayload theData;\n\nvoid setup() {\n    Serial.begin(SERIAL_BAUD);\n    pinMode(RFM69_RESET, OUTPUT);\n    pinMode(3, INPUT);\n    resetRFM69();\n    radio.setCS(9);\n    //delay(10);\n    radio.initialize(FREQUENCY,NODEID,NETWORKID);\n\n    //radio.setHighPower(); //uncomment only for RFM69HW!\n\n    radio.encrypt(KEY);\n    radio.promiscuous(promiscuousMode);\n    char buff[50];\n    sprintf(buff, "\\nListening at %d Mhz...", FREQUENCY==RF69_433MHZ ? 433 : FREQUENCY==RF69_868MHZ ? 868 : 915);\n    Serial.println(buff);\n}\n\nbyte ackCount=0;\nvoid loop() {\n    //process any serial input\n    if (Serial.available() > 0)\n    {\n        char input = Serial.read();\n        if (input == \'r\') //d=dump all register values\n        radio.readAllRegs();\n        if (input == \'E\') //E=enable encryption\n        radio.encrypt(KEY);\n        if (input == \'e\') //e=disable encryption\n        radio.encrypt(null);\n        if (input == \'p\')\n        {\n            promiscuousMode = !promiscuousMode;\n            radio.promiscuous(promiscuousMode);\n            Serial.print("Promiscuous mode ");Serial.println(promiscuousMode ? "on" : "off");\n        }\n\n        if (input == \'d\') //d=dump flash area\n        {\n            Serial.println("Flash content:");\n            int counter = 0;\n\n            while(counter<=256){\n                //Serial.print(flash.readByte(counter++), HEX);\n                Serial.print(\'.\');\n            }\n            //while(flash.busy());\n            Serial.println();\n        }\n        if (input == \'D\')\n        {\n            Serial.print("Deleting Flash chip content... ");\n            //flash.chipErase();\n            //while(flash.busy());\n            Serial.println("DONE");\n        }\n        if (input == \'i\')\n        {\n            Serial.print("DeviceID: ");\n            //word jedecid = flash.readDeviceId();\n            //Serial.println(jedecid, HEX);\n        }\n    }\n\n    if (radio.receiveDone())\n    {\n        Serial.print(\'[\');Serial.print(radio.SENDERID, DEC);Serial.print("] ");\n        Serial.print(" [RX_RSSI:");Serial.print(radio.readRSSI());Serial.print("]");\n        if (promiscuousMode)\n        {\n            Serial.print("to [");Serial.print(radio.TARGETID, DEC);Serial.print("] ");\n        }\n\n        if (radio.DATALEN != sizeof(Payload))\n        Serial.print("Invalid payload received, not matching Payload struct!");\n        else\n        {\n            theData = *(Payload*)radio.DATA; //assume radio.DATA actually contains our struct and not something else\n            Serial.print(" nodeId=");\n            Serial.print(theData.nodeId);\n            Serial.print(" uptime=");\n            Serial.print(theData.uptime);\n            Serial.print(" temp=");\n            Serial.print(theData.temp);\n        }\n\n        if (radio.ACK_REQUESTED)\n        {\n            byte theNodeID = radio.SENDERID;\n            radio.sendACK();\n            Serial.print(" - ACK sent.");\n\n            // When a node requests an ACK, respond to the ACK\n            // and also send a packet requesting an ACK (every 3rd one only)\n            // This way both TX/RX NODE functions are tested on 1 end at the GATEWAY\n            if (ackCount++%3==0)\n            {\n                Serial.print(" Pinging node ");\n                Serial.print(theNodeID);\n                Serial.print(" - ACK...");\n                delay(3); //need this when sending right after reception .. ?\n                if (radio.sendWithRetry(theNodeID, "ACK TEST", 8, 0))  // 0 = only 1 attempt, no retries\n                Serial.print("ok!");\n                else Serial.print("nothing");\n            }\n        }\n        Serial.println();\n        Blink(LED,3);\n    }\n}\n\nvoid Blink(byte PIN, int DELAY_MS)\n{\n    pinMode(PIN, OUTPUT);\n    digitalWrite(PIN,HIGH);\n    delay(DELAY_MS);\n    digitalWrite(PIN,LOW);\n}\n\nvoid resetRFM69(){\n    digitalWrite(RFM69_RESET, HIGH);\n    delay(1);\n    digitalWrite(RFM69_RESET, LOW);\n    delay(10);\n}\n')),(0,a.yg)("h2",{id:"product-versions"},"Product versions"),(0,a.yg)("table",{cellPadding:5,cellSpacing:0},(0,a.yg)("tbody",null,(0,a.yg)("tr",null,(0,a.yg)("td",{width:150}," ",(0,a.yg)("strong",null,"Revision")),(0,a.yg)("td",{width:450}," ",(0,a.yg)("strong",null,"Description")),(0,a.yg)("td",{width:80}," ",(0,a.yg)("strong",null,"Release"))),(0,a.yg)("tr",{style:{fontSize:"90%"}},(0,a.yg)("td",null," 0.9"),(0,a.yg)("td",null," Prototype"),(0,a.yg)("td",null," 05.05.2014")),(0,a.yg)("tr",{style:{fontSize:"90%"}},(0,a.yg)("td",null," 1.0"),(0,a.yg)("td",null," Public version"),(0,a.yg)("td",null," 05.07.2014")))),(0,a.yg)("h2",{id:"applications"},"Applications"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Universal Wireless Gateway RF2.4 GHz (nRF24l01 +), RF433 MHz (RFM69HW), IR and LAN (using Ethernet Shield)"),(0,a.yg)("li",{parentName:"ul"},"Logging system commands and data wireless devices with the time (using the Ethernet Shield)"),(0,a.yg)("li",{parentName:"ul"},'Design and construction of administering various wireless commands at a certain time (for example, "turn on the light August 23, 2014 at 18:02" or "every day to include an automatic watering at 5:00")')),(0,a.yg)("h2",{id:"questions-and-answers"},"Questions and Answers"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Blog WireLess Gate Shield RU")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Ask a question by e-mail ",(0,a.yg)("a",{parentName:"p",href:"mailto:support@devicter.ru"},"support@devicter.ru")))),(0,a.yg)("h2",{id:"how-to-buy"},"How to buy"),(0,a.yg)("p",null,"This product can be purchased:"),(0,a.yg)("p",null,"China (shipping worldwide)"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"http://www.elecrow.com/wireless-gate-shield-p-1139.html"},"Elecrow store")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/wireless-gate-shield.html"},"Seeed store")),(0,a.yg)("p",null,"Russia"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"http://devicter.ru/goods/WireLess-Gate-Shield"},"Devicter store")),(0,a.yg)("h2",{id:"links"},"Links"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"http://st.devicter.ru/9/1115/243/RFM69HW.pdf"},"Description RFM69HW"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"ftp://imall.iteadstudio.com/Modules/IM120606002_nRF24L01_module/DS_nRF24L01.pdf"},"Description nRF24l01+"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"http://wiki.devicter.ru/images/c/c7/Wl-Scheme.PNG"},"schematic of the device")))),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);