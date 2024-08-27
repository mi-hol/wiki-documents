"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[23052],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var i=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),p=r,g=u["".concat(l,".").concat(p)]||u[p]||h[p]||o;return t?i.createElement(g,a(a({ref:n},c),{},{components:t})):i.createElement(g,a({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<o;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},54963:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=t(9668),r=(t(96540),t(15680));const o={description:"Develop SenseCAP Indicator both chips with Arduino",title:"Develop both chips with Arduino",keywords:["SenseCAP Indicator"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_ESP32_Arduino",last_update:{date:"9/24/2023",author:"Hendra"},craft:!0},a=void 0,s={unversionedId:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/SenseCAP_Indicator_Arduino",id:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/SenseCAP_Indicator_Arduino",title:"Develop both chips with Arduino",description:"Develop SenseCAP Indicator both chips with Arduino",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/SenseCAP_Indicator_Arduino.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial",slug:"/SenseCAP_Indicator_ESP32_Arduino",permalink:"/SenseCAP_Indicator_ESP32_Arduino",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/SenseCAP_Indicator_Arduino.md",tags:[],version:"current",lastUpdatedBy:"Hendra",lastUpdatedAt:1695513600,formattedLastUpdatedAt:"Sep 24, 2023",frontMatter:{description:"Develop SenseCAP Indicator both chips with Arduino",title:"Develop both chips with Arduino",keywords:["SenseCAP Indicator"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_ESP32_Arduino",last_update:{date:"9/24/2023",author:"Hendra"},craft:!0},sidebar:"ProductSidebar",previous:{title:"How to Create your own UI",permalink:"/SenseCAP_Indicator_How_to_Create_your_own_UI"},next:{title:"Update and Flash Firmware",permalink:"/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware"}},l={},d=[{value:"Hardware Preparation",id:"hardware-preparation",level:2},{value:"Hardware Overview and Develop Knowledge",id:"hardware-overview-and-develop-knowledge",level:3},{value:"Software Preparation",id:"software-preparation",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Develop with Screen which connects ESP32S3 chip",id:"develop-with-screen-which-connects-esp32s3-chip",level:3},{value:"Read the sensors which link to the RP2040 chip",id:"read-the-sensors-which-link-to-the-rp2040-chip",level:3},{value:"Combine two examples and display the sensors data on the screen",id:"combine-two-examples-and-display-the-sensors-data-on-the-screen",level:3},{value:"What&#39;s More",id:"whats-more",level:2},{value:"Special Thanks",id:"special-thanks",level:2},{value:"\u2728 Contributor Project",id:"-contributor-project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:d},u="wrapper";function h(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,i.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{type:"danger"},(0,r.yg)("p",{parentName:"admonition"},"There are some issues while you running this wiki. We are still looking for someone who can help us improve this firmare, under our ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=70900433"},"Contributor Program"))),(0,r.yg)("h1",{id:"develop-sensecap-indicator-both-chips-with-arduino"},"Develop SenseCAP Indicator both chips with Arduino"),(0,r.yg)("p",null,"The SenseCAP Indicator is a 4-inch touch screen device that is powered by the ESP32 and RP2040 dual MCUs. ESP32 and RP2040 are both highly capable microcontrollers that offer a range of features and functions."),(0,r.yg)("p",null,"This tutorial will guide you to develop your own custom project/firmware for the Sensecap Indicator using the simplicity and Flexibility of the Arduino Framework."),(0,r.yg)("h2",{id:"hardware-preparation"},"Hardware Preparation"),(0,r.yg)("p",null,"I am using SenseCAP Indicator as the hardware here and there are four types of sensors(CO2, Temp, Humi, TVOC) on it. The contents here should include:"),(0,r.yg)("div",{class:"table-center"},(0,r.yg)("table",{align:"center"},(0,r.yg)("tr",null,(0,r.yg)("th",null,"SenseCAP Indicator D1S")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png",style:{width:"auto",height:200}})))),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/SenseCAP-Indicator-D1S-p-5645.html"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,r.yg)("h3",{id:"hardware-overview-and-develop-knowledge"},"Hardware Overview and Develop Knowledge"),(0,r.yg)("p",null,"The Indicator is designed with two MCU where there are RP2040 and ESP32S3 working at the same time."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"})),(0,r.yg)("p",null,"Based on the diagram above we know that: "),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"All the sensors are connected to RP2040 Microcontroller using I2C protocol"),(0,r.yg)("li",{parentName:"ol"},"There is one I2C IO expander module using the PCA9535 IC"),(0,r.yg)("li",{parentName:"ol"},"The screen are connected to ESP32S3 microcontroller with 2 Pin (CS, RESET) connected to the PCA9535 I2C expander"),(0,r.yg)("li",{parentName:"ol"},"The RP2040 are connected to the ESP32S3 via pin 20 and pin 19 on the ESP32S3 using UART Interfaces")),(0,r.yg)("p",null,"Thus, if the Sensecap Indicator plugged into the Computer you will be presented with 2 Serial Port one for the RP2040 and one for the ESP32S3. The one with the information ",(0,r.yg)("strong",{parentName:"p"},"USB-SERIAL CH340")," is the one that's connected to the ESP32S3 and this is the one will be use for the rest of the tutorial."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/1.jpg"})),(0,r.yg)("h2",{id:"software-preparation"},"Software Preparation"),(0,r.yg)("p",null,"We are using Artduino here. "),(0,r.yg)("div",{class:"download_arduino_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"download_arduino_item",href:"https://www.arduino.cc/en/software"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"},"Download Arduino IDE"))))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Before continue with the tutorial there are a few things needed to do in the Arduino IDE."),(0,r.yg)("ol",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ol"},"Make sure the ESP32 board definition is already installed and at the newest version. You can follow ",(0,r.yg)("a",{parentName:"li",href:"https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html"},"this guide")," if the ESP32 board is not in the Arduino IDE yet."),(0,r.yg)("li",{parentName:"ol"},"Choose the ESP32S3 Dev Module as the Board definition"),(0,r.yg)("li",{parentName:"ol"},"For the content of this tutorial, you need to turn on the PSRAM function of the Arduino IDE to ensure that the screen will working properly")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/2.jpg"}))),(0,r.yg)("p",null,"And the related and needed libraries in this tutorial are also presented here:"),(0,r.yg)("div",{class:"table-center"},(0,r.yg)("table",{align:"center"},(0,r.yg)("tr",null,(0,r.yg)("th",null,"Develop with Screen")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/Arduino_GFX-master.zip"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Download \u23ec"))))))))),(0,r.yg)("h2",{id:"getting-started"},"Getting Started"),(0,r.yg)("p",null,"We can now develop with screen which connect ESP32S3 chip and read the sensors which link to the RP2040 chip. Finally combine them both."),(0,r.yg)("h3",{id:"develop-with-screen-which-connects-esp32s3-chip"},"Develop with Screen which connects ESP32S3 chip"),(0,r.yg)("p",null,'The Sensecap Indicator is using the ST7701 module for the screen and it uses parallel interfaces and already connected to the pins on the ESP32S3 MCU.\nIn order to be able to drive the screen a few arduino library is needed. It is presented in the "Software Preparation" and you can also download ',(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/Arduino_GFX-master.zip"},"here")),(0,r.yg)("p",null,"After the library is downloaded open the Arduino, on the sketch menu choose add zip library"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/3.jpg"})),(0,r.yg)("p",null,"Add the downloaded library into the Arduino IDE."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/4.jpg"})),(0,r.yg)("p",null,'Meanwhile, you need to check the same sketch menu and choose "manage libraries" then search for "PCA9535" and choose the one made by hidea kitai then install it'),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/5.jpg"})),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"The PCA9535 library is needed because the CS pin of the ST7701 is connected the PCA9535 i2c expander module. Specifically the Pin 4 of the i2c module.")),(0,r.yg)("p",null,"After all the necessary libraries is installed upload the code below to test if the screen is working with the Arduino environment. You can upload the code below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino_GFX_Library.h>\n#include <PCA95x5.h>\n#define GFX_BL DF_GFX_BL // default backlight pin, you may replace DF_GFX_BL to actual backlight pin\n\n/* More dev device declaration: https://github.com/moononournation/Arduino_GFX/wiki/Dev-Device-Declaration */\n#if defined(DISPLAY_DEV_KIT)\nArduino_GFX *gfx = create_default_Arduino_GFX();\n#else /* !defined(DISPLAY_DEV_KIT) */\n\n#define GFX_DEV_DEVICE ESP32_S3_RGB\n#define GFX_BL 45\nArduino_DataBus *bus = new Arduino_SWSPI(\n    GFX_NOT_DEFINED /* DC */, PCA95x5::Port::P04 /* CS */,\n    41 /* SCK */, 48 /* MOSI */, GFX_NOT_DEFINED /* MISO */);\n\n// option 1:\n// Uncomment for 4" rect display\nArduino_ESP32RGBPanel *rgbpanel = new Arduino_ESP32RGBPanel(\n    18 /* DE */, 17 /* VSYNC */, 16 /* HSYNC */, 21 /* PCLK */,\n    4 /* R0 */, 3 /* R1 */, 2 /* R2 */, 1 /* R3 */, 0 /* R4 */,\n    10 /* G0 */, 9 /* G1 */, 8 /* G2 */, 7 /* G3 */, 6 /* G4 */, 5 /* G5 */,\n    15 /* B0 */, 14 /* B1 */, 13 /* B2 */, 12 /* B3 */, 11 /* B4 */,\n    1 /* hsync_polarity */, 10 /* hsync_front_porch */, 8 /* hsync_pulse_width */, 50 /* hsync_back_porch */,\n    1 /* vsync_polarity */, 10 /* vsync_front_porch */, 8 /* vsync_pulse_width */, 20 /* vsync_back_porch */);\nArduino_RGB_Display *gfx = new Arduino_RGB_Display(\n    480 /* width */, 480 /* height */, rgbpanel, 2 /* rotation */, true /* auto_flush */,\n    bus, GFX_NOT_DEFINED /* RST */, st7701_type1_init_operations, sizeof(st7701_type1_init_operations));\n\n#endif /* !defined(DISPLAY_DEV_KIT) */\n/*******************************************************************************\n * End of Arduino_GFX setting\n ******************************************************************************/\n\nvoid setup(void)\n{\n  Serial.begin(115200);\n  // Serial.setDebugOutput(true);\n  // while(!Serial);\n  Serial.println("Arduino_GFX Hello World example");\n\n#ifdef GFX_EXTRA_PRE_INIT\n  GFX_EXTRA_PRE_INIT();\n#endif\n\n  // Init Display\n  if (!gfx->begin())\n  {\n    Serial.println("gfx->begin() failed!");\n  }\n  gfx->fillScreen(BLACK);\n\n#ifdef GFX_BL\n  pinMode(GFX_BL, OUTPUT);\n  digitalWrite(GFX_BL, HIGH);\n#endif\n\n  gfx->setCursor(10, 10);\n  gfx->setTextColor(RED);\n  gfx->println("Sensecap Indicator");\n\n  delay(5000); // 5 seconds\n}\n\nvoid loop()\n{\n  gfx->setCursor(random(gfx->width()), random(gfx->height()));\n  gfx->setTextColor(random(0xffff), random(0xffff));\n  gfx->setTextSize(random(6) /* x scale */, random(6) /* y scale */, random(2) /* pixel_margin */);\n  gfx->println("Sensecap Indicator");\n\n  delay(1000); // 1 second\n}\n')),(0,r.yg)("p",null,'If everything goes well a "Sensecap Indicator" text will be printed randomly on the screen.'),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/6.jpg"})),(0,r.yg)("h3",{id:"read-the-sensors-which-link-to-the-rp2040-chip"},"Read the sensors which link to the RP2040 chip"),(0,r.yg)("p",null,"As mentioned above on the preparation section, all the sensors are connected to the RP2040. Assuming that you still have the default firmware on the RP2040 the sensor data are sent to the ESP32S3 using the UART interface."),(0,r.yg)("p",null,"In order for the ESP32S3 to be able to read the data a library need to be installed called ",(0,r.yg)("strong",{parentName:"p"},"PacketSerial"),"."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/7.jpg"})),(0,r.yg)("p",null,"After the library is installed you can upload the code below to get the sensor data on the ESP32S3:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'//\n// Copyright (c) 2012 Christopher Baker <https://christopherbaker.net>\n//\n// SPDX-License-Identifier: MIT\n//\n\n\n#include <PacketSerial.h>\n\nPacketSerial myPacketSerial;\n\n#define RXD2 20\n#define TXD2 19\n\n#define PKT_TYPE_SENSOR_SCD41_CO2 0XB2\n#define PKT_TYPE_SENSOR_SHT41_TEMP 0XB3\n#define PKT_TYPE_SENSOR_SHT41_HUMIDITY 0XB4\n#define PKT_TYPE_SENSOR_TVOC_INDEX 0XB5\n#define DEBUG   0\n\nvoid setup()\n{\n  // We begin communication with our PacketSerial object by setting the\n  // communication speed in bits / second (baud).\n  myPacketSerial.begin(115200);\n\n  // If we want to receive packets, we must specify a packet handler function.\n  // The packet handler is a custom function with a signature like the\n  // onPacketReceived function below.\n \n  Serial1.begin(115200, SERIAL_8N1, RXD2, TXD2);\n  myPacketSerial.setStream(&Serial1);\n  myPacketSerial.setPacketHandler(&onPacketReceived);\n}\n\n\nvoid loop()\n{\n  // Do your program-specific loop() work here as usual.\n\n  // The PacketSerial::update() method attempts to read in any incoming serial\n  // data and emits received and decoded packets via the packet handler\n  // function specified by the user in the void setup() function.\n  //\n  // The PacketSerial::update() method should be called once per loop(). Failure\n  // to call the PacketSerial::update() frequently enough may result in buffer\n  // serial overflows.\n  myPacketSerial.update();\n\n  // Check for a receive buffer overflow (optional).\n  if (myPacketSerial.overflow())\n  {\n    // Send an alert via a pin (e.g. make an overflow LED) or return a\n    // user-defined packet to the sender.\n    //\n    // Ultimately you may need to just increase your recieve buffer via the\n    // template parameters (see the README.md).\n  }\n}\n\n\n\nvoid onPacketReceived(const uint8_t *buffer, size_t size) {\n\n  \n  Serial.printf("<--- recv len:%d, data: ", size);\n\n\n  if (size < 1) {\n    return;\n  }\n  //byte serbytes[] = buffer[i];\n  float dataval;\n  switch (buffer[0]) {\n    case PKT_TYPE_SENSOR_SCD41_CO2:\n      {\n        memcpy(&dataval, &buffer[1], sizeof(float));\n        Serial.print("CO2 Level:  ");\n        Serial.println(dataval);\n        break;\n      }\n    default:\n      break;\n  }\n   switch (buffer[0]) {\n    case PKT_TYPE_SENSOR_SHT41_TEMP:\n      {\n        memcpy(&dataval, &buffer[1], sizeof(float));\n        Serial.print("sht temp:  ");\n        Serial.println(dataval, 2);\n        break;\n      }\n    default:\n      break;\n  }\n   switch (buffer[0]) {\n    case PKT_TYPE_SENSOR_SHT41_HUMIDITY:\n      {\n        memcpy(&dataval, &buffer[1], sizeof(float));\n        Serial.print("sht humidity:  ");\n        Serial.println(dataval, 2);\n        break;\n      }\n    default:\n      break;\n  }\n   switch (buffer[0]) {\n    case PKT_TYPE_SENSOR_TVOC_INDEX:\n      {\n        memcpy(&dataval, &buffer[1], sizeof(float));\n        Serial.print("TVOC INDEX:  ");\n        Serial.println(dataval);\n        break;\n      }\n    default:\n      break;\n  }\n}\n')),(0,r.yg)("p",null,"Click and open the Serial monitor and set the Baud Rate to 115200 the you will be presented the sensors data from the RP2040"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/8.jpg"})),(0,r.yg)("h3",{id:"combine-two-examples-and-display-the-sensors-data-on-the-screen"},"Combine two examples and display the sensors data on the screen"),(0,r.yg)("p",null,"Open the example menu on the Arduino IDE and guide yourself to ",(0,r.yg)("strong",{parentName:"p"},"GFX library for Arduino")," then choose the ",(0,r.yg)("strong",{parentName:"p"},"SI_displaysensordata")," example and upload it."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/9.jpg"})),(0,r.yg)("p",null,"If successfully uploaded you will be presented with sensors data displayed on the screen."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/10.jpg"})),(0,r.yg)("p",null,"Congratulation now you can develop the Sensecap Indicator using Arduino IDE!"),(0,r.yg)("h2",{id:"whats-more"},"What's More"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"There is still Phase ONE for the development and what is not configured in this tutorial is the touchscreen part. I already try few arduino library for the FT6336 module but none have a successful result. "),(0,r.yg)("li",{parentName:"ol"},"This due to the INT Pin and RESET pin of the FT6366 module connected to the PCA9535 I2C expander and it need to configured manually in the library. I might get back to try this in the future.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"By the way, for more understanding on using the Arduino GFX library you can visit the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/moononournation/Arduino_GFX"},"Arduino_GFX github page"))),(0,r.yg)("h2",{id:"special-thanks"},"Special Thanks"),(0,r.yg)("p",null,"thanks to github user ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/u4mzu4"},"u4mzu4")," for the SWSPI config file that support the Sensecap indicator"),(0,r.yg)("h2",{id:"-contributor-project"},"\u2728 Contributor Project"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"This project is supported by the Seeed Studio ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479"},"Contributor Project"),"."),(0,r.yg)("li",{parentName:"ul"},"Thanks ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35925769"},"Hendra")," and u4mzu4's efforts and your work will be exhibited.")),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}h.isMDXComponent=!0}}]);