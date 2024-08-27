"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[45515],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},g=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),y=s(a),u=n,m=y["".concat(p,".").concat(u)]||y[u]||d[u]||i;return a?r.createElement(m,l(l({ref:t},g),{},{components:a})):r.createElement(m,l({ref:t},g))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[y]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},80577:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(9668),n=(a(96540),a(15680));const i={description:"Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC -3.3V/5V",title:"Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC -3.3V/5V",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-OLED-Display-1.12-SH1107_V3.0",last_update:{date:"1/9/2023",author:"shuxu hu"}},l=void 0,o={unversionedId:"Sensor/Grove/Grove_Accessories/Display/Grove-OLED-Display-1.12-SH1107_V3.0",id:"Sensor/Grove/Grove_Accessories/Display/Grove-OLED-Display-1.12-SH1107_V3.0",title:"Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC -3.3V/5V",description:"Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC -3.3V/5V",source:"@site/docs/Sensor/Grove/Grove_Accessories/Display/Grove-OLED-Display-1.12-SH1107_V3.0.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Display",slug:"/Grove-OLED-Display-1.12-SH1107_V3.0",permalink:"/Grove-OLED-Display-1.12-SH1107_V3.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Display/Grove-OLED-Display-1.12-SH1107_V3.0.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673222400,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{description:"Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC -3.3V/5V",title:"Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC -3.3V/5V",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-OLED-Display-1.12-SH1107_V3.0",last_update:{date:"1/9/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - OLED Display 1.12&#34",permalink:"/Grove-OLED_Display_1.12inch"},next:{title:"I2C LCD",permalink:"/I2C_LCD"}},p={},s=[{value:"Feature",id:"feature",level:2},{value:"Version",id:"version",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware",id:"hardware",level:3},{value:"<strong>Software (I2C)</strong>",id:"software-i2c",level:3},{value:"Software (<strong>SPI</strong>)",id:"software-spi",level:3},{value:"Play on RaspberryPi",id:"play-on-raspberrypi",level:2},{value:"Get ready for RaspberryPi",id:"get-ready-for-raspberrypi",level:3},{value:"I2C Connection",id:"i2c-connection",level:4},{value:"SPI Connection",id:"spi-connection",level:4},{value:"Software",id:"software",level:4},{value:"U8g2 Library Introduction",id:"u8g2-library-introduction",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],g={toc:s},y="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(y,(0,r.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Main-02.png"})),(0,n.yg)("p",null,"The Grove - OLED Display 1.12 V3.0 (SH1107) is a ",(0,n.yg)("strong",{parentName:"p"},"monochrome")," display with 128*128 resolution. Compared with LCDs, there are many advantages on OLED(Organic Light Emitting Diode) like self-emission, high contrast ratio, slim/thin outline, wide viewing angle and low power consumption. The display works on both 3.3V and 5V supply voltage. You can use either ",(0,n.yg)("strong",{parentName:"p"},"I2C")," or ",(0,n.yg)("strong",{parentName:"p"},"SPI")," interface to light up the display with your microcontroller to display words, images, and whatever you want."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html"},(0,n.yg)("p",null,(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,n.yg)("h2",{id:"feature"},"Feature"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"3.3V/5V power supply compatible"),(0,n.yg)("li",{parentName:"ul"},"Changeable I2C address"),(0,n.yg)("li",{parentName:"ul"},"SPI available"),(0,n.yg)("li",{parentName:"ul"},"Low power consumption"),(0,n.yg)("li",{parentName:"ul"},"monochrome 128\xd7128 pixels"),(0,n.yg)("li",{parentName:"ul"},"High contrast, high brightness"),(0,n.yg)("li",{parentName:"ul"},"Wide operating temperature range: -40\u2103 ~ +85 \u2103")),(0,n.yg)("h2",{id:"version"},"Version"),(0,n.yg)("hr",null),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Product Version"),(0,n.yg)("th",{parentName:"tr",align:null},"Changes"),(0,n.yg)("th",{parentName:"tr",align:null},"Released Date"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},'Grove - OLED Display 1.12" V1.0'),(0,n.yg)("td",{parentName:"tr",align:null},"Initial"),(0,n.yg)("td",{parentName:"tr",align:null},"Mar 2012")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},'Grove - OLED Display 1.12" V2.1'),(0,n.yg)("td",{parentName:"tr",align:null},"Change the driver IC from SSD1327 to SH1107G, upgrade the grayscale pixels from 96X96 to 128X128"),(0,n.yg)("td",{parentName:"tr",align:null},"Nov 2015")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},'Grove - OLED Display 1.12" V3.0'),(0,n.yg)("td",{parentName:"tr",align:null},"Change the driver IC from SSD1107G to SH1107, upgrade the interface from I2C to I2C/SPI"),(0,n.yg)("td",{parentName:"tr",align:null},"July 2021")))),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,n.yg)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.yg)("hr",null),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,n.yg)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("p",null,(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("p",null,(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:"pir",width:200,height:"auto"})))))),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.yg)("h2",{id:"getting-started"},"Getting Started"),(0,n.yg)("h3",{id:"hardware"},"Hardware"),(0,n.yg)("p",null,"Here we will show you how this Grove - OLED Display works via a simple demo. First of all, you need to prepare the below stuffs:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Seeeduino V4"),(0,n.yg)("th",{parentName:"tr",align:null},"Grove - OLED Display 1.12`` V3.0"),(0,n.yg)("th",{parentName:"tr",align:null},"Base Shield"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("p",null,(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("p",null,(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Preview-07-thumbnail.png",alt:"pir",width:600,height:"auto"}))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("p",null,(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"pir",width:600,height:"auto"})))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html"},"Get ONE Now")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get ONE Now"))))),(0,n.yg)("p",null,"This is an easy-to-use module, what you need to do is connect the module to I2C port of a Base Shield. There're 4 pins, defined as below."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"pin"),(0,n.yg)("th",{parentName:"tr",align:null},"Function"),(0,n.yg)("th",{parentName:"tr",align:null},"Note"),(0,n.yg)("th",{parentName:"tr",align:null},"Cable color"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"pin1"),(0,n.yg)("td",{parentName:"tr",align:null},"SCL"),(0,n.yg)("td",{parentName:"tr",align:null},"I2C Clock"),(0,n.yg)("td",{parentName:"tr",align:null},"YELLOW")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"pin2"),(0,n.yg)("td",{parentName:"tr",align:null},"SDA"),(0,n.yg)("td",{parentName:"tr",align:null},"I2C Data"),(0,n.yg)("td",{parentName:"tr",align:null},"WHITE")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"pin3"),(0,n.yg)("td",{parentName:"tr",align:null},"VCC"),(0,n.yg)("td",{parentName:"tr",align:null},"Power, 5V/3.3V"),(0,n.yg)("td",{parentName:"tr",align:null},"RED")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"pin4"),(0,n.yg)("td",{parentName:"tr",align:null},"GND"),(0,n.yg)("td",{parentName:"tr",align:null},"Ground"),(0,n.yg)("td",{parentName:"tr",align:null},"BLACK")))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Hardware Overview (I2C)")),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2185.JPG"})),(0,n.yg)("h3",{id:"software-i2c"},(0,n.yg)("strong",{parentName:"h3"},"Software (I2C)")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 1.")," Connect Grove - OLED Display 1.12'' V3.0.\nto ",(0,n.yg)("strong",{parentName:"p"},"I2C")," port of Base Shield via Grove cable.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 2.")," Open Arduino IDE and the Library Manager ",(0,n.yg)("strong",{parentName:"p"},"(Sketch > Include Library > manage Libraries)")," to install the library of u8g2."))),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_manage_lib.png"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 3."),' Enter "',(0,n.yg)("strong",{parentName:"li"},"u8g2"),'" into the search field and select latest version and Cclick "Install" button.')),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_search_u8g2.png"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 4.")," Upload the demo code below in your Arduino IDE.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino.h>\n#include <U8g2lib.h>\n#include <SPI.h>\n#include <Wire.h>\n \nU8G2_SH1107_SEEED_128X128_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);\n \nvoid setup(void) {\n  u8g2.begin();\n}\n \nvoid loop(void) {\n  u8g2.firstPage();\n\n  do {\n    u8g2.setFont(u8g2_font_luBIS08_tf);\n    u8g2.drawStr(0,24,"Hello Seeed!");\n  } while ( u8g2.nextPage() );\n}\n')),(0,n.yg)("admonition",{type:"success"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"   There will be a \"Hello Seeed!\" displayed on the screen of Grove - OLED Display 1.12'' if everything goes well.\n"))),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2186.JPG"})),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"    If there's no Base Shield with you, [Seeeduino Vx Series](https://www.seeedstudio.com/catalogsearch/result/index/?q=Seeeduino+v&product_list_limit=all) with **I2C interface** do work as well.\n"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Hardware Overview (SPI)")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 1.")," Soldering male header and connect the wires.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 2.")," Please follow the ",(0,n.yg)("strong",{parentName:"p"},"YELLOW")," line to cut down the wire on the board and follow the ",(0,n.yg)("strong",{parentName:"p"},"WHITE")," line to solder the SPI pannels and the middle pannels one by one."))),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back.png",alt:"pir",width:600,height:"auto"})),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"Please **be careful** to cut the wires one by one by following the **YELLOW** lines, otherwise you will damage all the display. We recommand you to cut the wires under magnifying glass.\n"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Caution"),": This is the wrong method to cut wires!"),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/10402049_Back_Wrong.png",alt:"pir",width:600,height:"auto"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 3.")," Follow the picture to connect the display and Seeeduino with wires.")),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/wires.png"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to a PC via a USB cable.")),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2188.JPG"})),(0,n.yg)("h3",{id:"software-spi"},"Software (",(0,n.yg)("strong",{parentName:"h3"},"SPI"),")"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 1.")," Open Arduino IDE and the Library Manager ",(0,n.yg)("strong",{parentName:"li"},"(Sketch > Include Library > manage Libraries)")," to install the library of u8g2.")),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_manage_lib.png"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 2."),' Enter "',(0,n.yg)("strong",{parentName:"li"},"u8g2"),'" into the search field and select latest version and Cclick "Install" button.')),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_search_u8g2.png"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 3.")," Upload the demo code below in your Arduino IDE.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino.h>\n#include <U8g2lib.h>\n#include <SPI.h>\n#include <Wire.h>\n \nU8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, /* cs=*/ 10, /* dc=*/ 9, /* reset=*/ 8);\n \nvoid setup(void) {\n  u8g2.begin();\n}\n \nvoid loop(void) {\n  u8g2.firstPage();\n\n  do {\n    u8g2.setFont(u8g2_font_luBIS08_tf);\n    u8g2.drawStr(0,24,"Hello Seeed!");\n  } while ( u8g2.nextPage() );\n}\n')),(0,n.yg)("admonition",{type:"success"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"   There will be a \"Hello Seeed!\" displayed on the screen of Grove - OLED Display 1.12'' if everything goes well.\n"))),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2186.JPG"})),(0,n.yg)("h2",{id:"play-on-raspberrypi"},"Play on RaspberryPi"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Materials required")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,n.yg)("th",{parentName:"tr",align:null},"Grove Base Hat for Raspberry Pi"),(0,n.yg)("th",{parentName:"tr",align:null},'Grove - OLED Display 1.12" V3.0'))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("p",null,(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("p",null,(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("p",null,(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Preview-07-thumbnail.png",alt:"pir",width:600,height:"auto"})))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html"},"Get ONE Now")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html"},"Get ONE Now"))))),(0,n.yg)("h3",{id:"get-ready-for-raspberrypi"},"Get ready for RaspberryPi"),(0,n.yg)("h4",{id:"i2c-connection"},"I2C Connection"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 1."),' Plug OLED Yellow&Blue Display 0.96" to ',(0,n.yg)("strong",{parentName:"p"},"I2C")," port of Grove - Base Hat.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Hat into RaspberryPi.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 3.")," Connect RaspberryPi to a PC via Serial or SSH."))),(0,n.yg)("h4",{id:"spi-connection"},"SPI Connection"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 1.")," Follow the sheet to connect the wires on Grove - Base Hat.")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},'Grove - OLED Display 1.12" V3.0 Pins'),(0,n.yg)("th",{parentName:"tr",align:null},"Raspberry Pi GPIO"),(0,n.yg)("th",{parentName:"tr",align:null},"BCM2835 Code"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"VCC"),(0,n.yg)("td",{parentName:"tr",align:null},"3.3V"),(0,n.yg)("td",{parentName:"tr",align:null},"3.3V")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"GND"),(0,n.yg)("td",{parentName:"tr",align:null},"GND"),(0,n.yg)("td",{parentName:"tr",align:null},"GND")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"SI"),(0,n.yg)("td",{parentName:"tr",align:null},"MOSI"),(0,n.yg)("td",{parentName:"tr",align:null},"10")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"SCL"),(0,n.yg)("td",{parentName:"tr",align:null},"SCLK"),(0,n.yg)("td",{parentName:"tr",align:null},"11")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"CS"),(0,n.yg)("td",{parentName:"tr",align:null},"CE0"),(0,n.yg)("td",{parentName:"tr",align:null},"8")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"DC"),(0,n.yg)("td",{parentName:"tr",align:null},"GPIO.6"),(0,n.yg)("td",{parentName:"tr",align:null},"25")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"RES"),(0,n.yg)("td",{parentName:"tr",align:null},"GPIO.2"),(0,n.yg)("td",{parentName:"tr",align:null},"27")))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Hat into RaspberryPi.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 3.")," Connect RaspberryPi to a PC via Serial or SSH."))),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/IMG_2190.JPG",alt:"pir",width:600,height:"auto"})),(0,n.yg)("h4",{id:"software"},"Software"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 1."),"  Enable I2C and SPI on RaspberryPi")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install -y i2c-tools\nsudo raspi-config\n")),(0,n.yg)("p",null,"Follow the pictures to enable I2C and SPI on your RaspberryPi."),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon.png",alt:"pir",width:600,height:"auto"})),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon1.png",alt:"pir",width:600,height:"auto"})),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon2.png",alt:"pir",width:600,height:"auto"})),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi.jpg",alt:"pir",width:600,height:"auto"})),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/spi1.jpg",alt:"pir",width:600,height:"auto"})),(0,n.yg)("p",null,"And then reboot your RaspberryPi"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"sudo reboot\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 2.")," Install necessary libraries")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install wget gcc make unzip -y\n")),(0,n.yg)("p",null,"Install WiringPi Library"),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"If you use WiringPi, you need to update WiringPi to version 2.52. This library may not be updated. Other libraries are recommended")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"cd\nsudo apt-get install wiringpi\nwget https://project-downloads.drogon.net/wiringpi-latest.deb\nsudo dpkg -i wiringpi-latest.deb\ngpio -v\n")),(0,n.yg)("p",null,"Install bcm2835"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"cd\nwget http://www.airspayce.com/mikem/bcm2835/bcm2835-1.60.tar.gz\ntar zxvf bcm2835-1.60.tar.gz \ncd bcm2835-1.60/\nsudo ./configure\nsudo make && sudo make check && sudo make install\n")),(0,n.yg)("p",null,"For more information and the newest libraries please refer to website\uff1a",(0,n.yg)("a",{parentName:"p",href:"http://www.airspayce.com/mikem/bcm2835/"},"bcm2835")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 3.")," Download the demo codes")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"1.")," For ",(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiI2C.zip"},(0,n.yg)("strong",{parentName:"a"},"I2C"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"wget https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiI2C.zip\nmkdir I2C\nunzip RaspberryPiI2C.zip ./I2C/\ncd ./I2C/RaspberryPiI2C/c/\nsudo chmod 777 test.sh\n./test.sh\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"2.")," For ",(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiSPI.zip"},(0,n.yg)("strong",{parentName:"a"},"SPI"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"wget https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/demo/RaspberryPiSPI.zip\nmkdir SPI\nunzip RaspberryPiSPI.zip ./SPI/\ncd ./SPI/RaspberryPiSPI/c/\nsudo chmod 777 test.sh\n./test.sh\n")),(0,n.yg)("p",null,"If you want to have more demo, we also have a little video clip."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"sudo chmod 777 badapple.sh\n./badapple.sh\n")),(0,n.yg)("iframe",{width:560,height:315,src:"https://www.youtube.com/embed/mHhZgUNkPM0",title:"YouTube video player",frameBorder:0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,n.yg)("h2",{id:"u8g2-library-introduction"},"U8g2 Library Introduction"),(0,n.yg)("p",null,"U8g2 is a monochrome graphics library for embedded devices. U8g2 supports monochrome OLEDs and LCDs, which include our chip SSD1327/SH1107G."),(0,n.yg)("p",null,"The Arduino library U8g2 can be installed from the library manager of the Arduino IDE. U8g2 also includes U8x8 library:"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"U8g2")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Includes all graphics procedures (line/box/circle draw)."),(0,n.yg)("li",{parentName:"ul"},"Supports many fonts. (Almost) no restriction on the font height."),(0,n.yg)("li",{parentName:"ul"},"Requires some memory in the microcontroller to render the display.")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"U8x8")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Text output only (character) device."),(0,n.yg)("li",{parentName:"ul"},"Only fonts allowed with fit into a 8x8 pixel grid."),(0,n.yg)("li",{parentName:"ul"},"Writes directly to the display. No buffer in the microcontroller required.")),(0,n.yg)("p",null,"Here provides the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/olikraus/u8g2/wiki"},(0,n.yg)("strong",{parentName:"a"},"U8g2 Library wiki"))," as well as the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/olikraus/u8g2/wiki/u8g2reference"},"U8g2 API Reference")," page."),(0,n.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/Grove%20OLED%20Display%201.12%20(SH1107)%20v3.0.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.yg)("h2",{id:"resources"},"Resources"),(0,n.yg)("hr",null),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[Eagle]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/Grove%20OLED%20Display%201.12%20(SH1107)%20v3.0.zip"},"Grove-OLED Display 1.12inch in Eagle")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/Grove%20OLED%20Display%201.12%20(SH1107)%20v3.0.pdf"},"Grove-OLED Display 1.12inch V3.0 Sch")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[Datasheet]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/res/SH1107V2.1.pdf"},"SH1107_datasheet"))),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);