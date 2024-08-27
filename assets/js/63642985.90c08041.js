"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2238],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=p(n),y=a,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||i;return n?r.createElement(m,o(o({ref:t},g),{},{components:n})):r.createElement(m,o({ref:t},g))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},71772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(9668),a=(n(96540),n(15680));const i={description:"Grove - 16x2 LCD",title:"Grove - 16x2 LCD",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-16x2_LCD_Series",last_update:{date:"1/7/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Display/Grove-16x2_LCD_Series",id:"Sensor/Grove/Grove_Accessories/Display/Grove-16x2_LCD_Series",title:"Grove - 16x2 LCD",description:"Grove - 16x2 LCD",source:"@site/docs/Sensor/Grove/Grove_Accessories/Display/Grove-16x2_LCD_Series.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Display",slug:"/Grove-16x2_LCD_Series",permalink:"/Grove-16x2_LCD_Series",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Display/Grove-16x2_LCD_Series.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673049600,formattedLastUpdatedAt:"Jan 7, 2023",frontMatter:{description:"Grove - 16x2 LCD",title:"Grove - 16x2 LCD",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-16x2_LCD_Series",last_update:{date:"1/7/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - 0.54 inch Red Quad Alphanumeric Display",permalink:"/Grove-0.54_inch_Red_Quad_Alphanumeric_Display"},next:{title:"Grove - LCD RGB Backlight",permalink:"/Grove-LCD_RGB_Backlight"}},s={},p=[{value:"Versions",id:"versions",level:2},{value:"Pre-reading",id:"pre-reading",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Typical Applications",id:"typical-applications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Materials required",id:"materials-required",level:4},{value:"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)",id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software-1",level:4},{value:"Play With Wio Terminal (ArduPy)",id:"play-with-wio-terminal-ardupy",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-2",level:4},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],g={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/main.jpg",alt:"pir",width:600,height:"auto"})),(0,a.yg)("p",null,"Grove - 16 x 2 LCD is a perfect I2C LCD display for Arduino and Raspberry Pi with high contrast and easy deployment. 16x2 means two lines and each line has 16 columns, 32 characters in total. With the help of Grove I2C connector, only 2 signal pins and 2 power pins are needed. You don't even need to care about how to connect these pins. Just plug it into the I2C interface on Seeeduino or Arduino/Raspberry Pi+baseshield via the Grove cable. There won't be complicated wiring, soldering, worrying about burning the LCD caused by the wrong current limiting resistor."),(0,a.yg)("h2",{id:"versions"},"Versions"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Version"),(0,a.yg)("th",{parentName:"tr",align:null},"Order"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"The Grove - 16 x 2 LCD (Black on Yellow)"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html"},"Buy Now"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"The Grove - 16 x 2 LCD (Black on Red)"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Red%29-p-3197.html"},"Buy Now"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"The Grove - 16 x 2 LCD (White on Blue)"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-16-x-2-LCD-%28White-on-Blue%29-p-3196.html"},"Buy Now"))))),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre"},"     The [Grove - LCD RGB Backlight](https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/) has been well received since its inception. Based on customer feedback, now, we bring more cost-effective monochrome backlight derivative for you.\n"))),(0,a.yg)("p",null,"Except for RGB backlights, these three products are almost identical to the the Grove - LCD RGB Backlight, they are all 16 characters wide, 2 rows with high brightness backlight."),(0,a.yg)("h2",{id:"pre-reading"},"Pre-reading"),(0,a.yg)("p",null,"An introduction of ",(0,a.yg)("strong",{parentName:"p"},"What is a Grove - 16 x 2 LCD")," and ",(0,a.yg)("strong",{parentName:"p"},"How does it work")," is strongly recommended reading ahead if you are not familiar with it. Please visit our ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"https://www.seeedstudio.com/blog/2020/01/20/how-to-use-16x2-lcd-with-arduino-grove-lcd-rgb-backlight/"},"blog"))," for detailed information."),(0,a.yg)("h2",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Display construction: 16 Characters * 2 Lines"),(0,a.yg)("li",{parentName:"ul"},"Display mode: STN"),(0,a.yg)("li",{parentName:"ul"},"On board MCU"),(0,a.yg)("li",{parentName:"ul"},"I2C-bus interface"),(0,a.yg)("li",{parentName:"ul"},"Support English and Japanese fonts")),(0,a.yg)("h2",{id:"specification"},"Specification"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Item"),(0,a.yg)("th",{parentName:"tr",align:null},"Value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,a.yg)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Operating temperature"),(0,a.yg)("td",{parentName:"tr",align:null},"0 to 50\u2103")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Storage temperature"),(0,a.yg)("td",{parentName:"tr",align:null},"-10 to 60\u2103")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Driving method"),(0,a.yg)("td",{parentName:"tr",align:null},"1/16 duty, 1/5 bias")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Interface"),(0,a.yg)("td",{parentName:"tr",align:null},"I^2^C")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"I^2^C Address"),(0,a.yg)("td",{parentName:"tr",align:null},"0X3E")))),(0,a.yg)("h2",{id:"typical-applications"},"Typical Applications"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Temperature display"),(0,a.yg)("li",{parentName:"ul"},"Time display"),(0,a.yg)("li",{parentName:"ul"},"Any project that requires a simple display")),(0,a.yg)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,a.yg)("th",{parentName:"tr",align:null},"Raspberry"),(0,a.yg)("th",{parentName:"tr",align:null},"ArduPy"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("p",null,(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:600,height:"auto"}))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("p",null,(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:"pir",width:600,height:"auto"}))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("p",null,(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png",alt:"pir",width:600,height:"auto"})))))),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre"},"     The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,a.yg)("h2",{id:"getting-started"},"Getting Started"),(0,a.yg)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,a.yg)("h4",{id:"materials-required"},"Materials required"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,a.yg)("th",{parentName:"tr",align:null},"Base Shield"),(0,a.yg)("th",{parentName:"tr",align:null},"Grove - 16 x 2 LCD"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("p",null,(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"pir",width:600,height:"auto"}))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("p",null,(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"pir",width:600,height:"auto"}))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("p",null,(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg",alt:"pir",width:600,height:"auto"})))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html"},"Get One Now"))))),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre"},"    * Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy.\n\n    * Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.\n")),(0,a.yg)("h4",{parentName:"admonition",id:"hardware-overview"},"Hardware Overview"),(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("strong",{parentName:"p"},"I2C Pull-Up Resistor")),(0,a.yg)("p",{parentName:"admonition"},"The first version of Grove - 16 x 2 LCD series does not have a built-in pull-up resistor, nor does it provide a pad to solder the optional pull-up resistor. We have redesigned the module, and the new version has built-in pull-up resistors.  "),(0,a.yg)("p",{parentName:"admonition"}," If you have an older version on your hand, you can solder a 10k\u03a9 DIP resistor yourself on the back pad of the Grove connector. Please follow the picture below, solder a 10k\u03a9 DIP resistor between ",(0,a.yg)("strong",{parentName:"p"},"VCC")," and ",(0,a.yg)("strong",{parentName:"p"},"SCL")," pins and a 10k\u03a9 DIP resistor between ",(0,a.yg)("strong",{parentName:"p"},"VCC")," and ",(0,a.yg)("strong",{parentName:"p"},"SDA")," pins."),"  ",(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/I2C-R.jpg",alt:"pir",width:600,height:"auto"})),(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("strong",{parentName:"p"},"Outline")),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/outline.jpg",alt:"pir",width:600,height:"auto"})),(0,a.yg)("h4",{parentName:"admonition",id:"hardware-connection"},"Hardware Connection"),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/connect.jpg",alt:"pir",width:600,height:"auto"})),(0,a.yg)("table",{parentName:"admonition"},(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Seeeduino"),(0,a.yg)("th",{parentName:"tr",align:null},"Grove Cable"),(0,a.yg)("th",{parentName:"tr",align:null},"Grove - 16 x 2 LCD"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"GND"),(0,a.yg)("td",{parentName:"tr",align:null},"Black"),(0,a.yg)("td",{parentName:"tr",align:null},"GND")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"5V or 3.3V"),(0,a.yg)("td",{parentName:"tr",align:null},"Red"),(0,a.yg)("td",{parentName:"tr",align:null},"VCC")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"SDA"),(0,a.yg)("td",{parentName:"tr",align:null},"White"),(0,a.yg)("td",{parentName:"tr",align:null},"SDA")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"SCL"),(0,a.yg)("td",{parentName:"tr",align:null},"Yellow"),(0,a.yg)("td",{parentName:"tr",align:null},"SCL")))),(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Step 1.")," Connect the Grove - 16 x 2 LCD to port ",(0,a.yg)("strong",{parentName:"p"},"I^2^C")," of Grove-Base Shield.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino and connect Seeeduino to PC via a USB cable."))),(0,a.yg)("h4",{parentName:"admonition",id:"software"},"Software")),(0,a.yg)("p",null,"   If this is the first time you work with Arduino, we strongly recommend you to see ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.\n:::"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 1.")," Download the ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip"},"Grove-LCD RGB Backlight")," Library from Github.")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre"},"    The Grove - 16 x 2 LCD shares the same library with the [Grove-LCD RGB Backlight](https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/). Their usage is almost the same, except that the Grove - 16 x 2 LCD does not support the RGB color API, such as **setRGB()**.\n"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Step 3.")," Restart the Arduino IDE. Open the example, you can open it in the following three ways\uff1a\n"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"1).")," Open it directly in the Arduino IDE via the path: ",(0,a.yg)("strong",{parentName:"p"},"File --\x3e Examples --\x3e Grove - LCD RGB Backlight --\x3e HelloWorld"),". "),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/path_1.jpg",alt:"pir",width:600,height:"auto"})),"**2).** Open it in your computer by click the **HelloWorld.ino** which you can find in the folder **XXXX\\Arduino\\libraries\\Grove_LCD_RGB_Backlight-master\\examples\\HelloWorld**, **XXXX** is the location you installed the Arduino IDE.",(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/path_2.jpg",alt:"pir",width:600,height:"auto"})),"**3).** Or, you can just click the icon",(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg",alt:"pir",width:50,height:"auto"})),(0,a.yg)("p",null,"in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <Wire.h>\n#include "rgb_lcd.h"\n\nrgb_lcd lcd;\n\n/*\nconst int colorR = 255;\nconst int colorG = 0;\nconst int colorB = 0;\n*/\n\nvoid setup() \n{\n    // set up the LCD\'s number of columns and rows:\n    lcd.begin(16, 2);\n    \n    //lcd.setRGB(colorR, colorG, colorB);\n    \n    // Print a message to the LCD.\n    lcd.print("hello, world!");\n\n    delay(1000);\n}\n\nvoid loop() \n{\n    // set the cursor to column 0, line 1\n    // (note: line 1 is the second row, since counting begins with 0):\n    lcd.setCursor(0, 1);\n    // print the number of seconds since reset:\n    lcd.print(millis()/1000);\n\n    delay(100);\n}\n')),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre"},"    * The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.  \n\n    * Since the **Grove - 16 x 2 LCD** series are all monochrome backlight, you need to comment out the RGB color related code. In the demo code above, i.e., line 6 and line 17.\n"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,a.yg)("admonition",{type:"success"},(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre"},"    If every thing goes well, you will see the LCD shows the classic sentence: **hello world**.\n"))),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/20200624150013.jpg",alt:"pir",width:600,height:"auto"})),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre"},"    If there's no Base Shield with you, Seeeduino VX Series with I2C interface do work as well.\n"))),(0,a.yg)("h3",{id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi"},"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)"),(0,a.yg)("h4",{id:"hardware"},"Hardware"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 1.")," Things used in this project:")),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("table",null,(0,a.yg)("tr",null,(0,a.yg)("th",null,"Raspberry pi"),(0,a.yg)("th",null,"Grove Base Hat for RasPi "),(0,a.yg)("th",null,"Grove - 16x2 LCD")),(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",style:{width:250,height:"auto"}}))),(0,a.yg)("td",null,(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg",style:{width:250,height:"auto"}}))),(0,a.yg)("td",null,(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg",style:{width:250,height:"auto"}})))),(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,a.yg)("td",null,(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,a.yg)("td",null,(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-16-x-2-LCD-Black-on-Yellow.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 2.")," Plug the Grove Base Hat into Raspberry."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 3.")," Connect the Grove - 16 x 2 LCD to I2C port of the Base Hat."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 4.")," Connect the Raspberry Pi to PC through USB cable.")),(0,a.yg)("h4",{id:"software-1"},"Software"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 1.")," Follow ",(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation"},"Setting Software")," to configure the development environment install the grove.py to your raspberry pi."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 2.")," Excute below commands to run the code.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"# virutalenv for Python3\nvirtualenv -p python3 env\nsource env/bin/activate\n#enter commmand\ngrove_16x2_lcd\n")),(0,a.yg)("p",null,"Following is the jhd1802.py code."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"\nfrom grove.display.base import *\nfrom grove.i2c import Bus\nimport time\nimport sys\n\n# sphinx autoapi required\n__all__ = [\"JHD1802\"]\n\nclass JHD1802(Display):\n    '''\n    Grove - 16 x 2 LCD, using chip JHD1802.\n        - Grove - 16 x 2 LCD (Black on Yellow)\n        - Grove - 16 x 2 LCD (Black on Red)\n        - Grove - 16 x 2 LCD (White on Blue)\n\n    Also, it's our class name,\n    which could drive the above three LCDs.\n\n    Args:\n        address(int): I2C device address, default to 0x3E.\n    '''\n    def __init__(self, address = 0x3E):\n        self._bus = Bus()\n        self._addr = address\n        if self._bus.write_byte(self._addr, 0):\n            print(\"Check if the LCD {} inserted, then try again\"\n                    .format(self.name))\n            sys.exit(1)\n        self.textCommand(0x02)\n        time.sleep(0.1)\n        self.textCommand(0x08 | 0x04) # display on, no cursor\n        self.textCommand(0x28)\n\n    @property\n    def name(self):\n        '''\n        Get device name\n\n        Returns:\n            string: JHD1802\n        '''\n        return \"JHD1802\"\n\n    def type(self):\n        '''\n        Get device type\n\n        Returns:\n            int: ``TYPE_CHAR``\n        '''\n        return TYPE_CHAR\n\n    def size(self):\n        '''\n        Get display size\n\n        Returns:\n            (Rows, Columns): the display size, in characters.\n        '''\n        # Charactor 16x2\n        # return (Rows, Columns)\n        return 2, 16\n\n    def clear(self):\n        '''\n        Clears the screen and positions the cursor in the upper-left corner.\n        '''\n        self.textCommand(0x01)\n\n    def draw(self, data, bytes):\n        '''\n        Not implement for char type display device.\n        '''\n        return False\n\n    def home(self):\n        '''\n        Positions the cursor in the upper-left of the LCD.\n        That is, use that location in outputting subsequent text to the display.\n        '''\n        self.textCommand(0x02)\n        time.sleep(0.2)\n\n    def setCursor(self, row, column):\n        '''\n        Position the LCD cursor; that is, set the location\n        at which subsequent text written to the LCD will be displayed.\n\n        Args:\n            row   (int): the row at which to position cursor, with 0 being the first row\n            column(int): the column at which to position cursor, with 0 being the first column\n\n    Returns:\n        None\n        '''\n        # print(\"setCursor: row={}, column={}\".format(row,column))\n        self.textCommand((0x40 * row) + (column % 0x10) + 0x80)\n\n    def write(self, msg):\n        '''\n        Write character(s) to the LCD.\n\n        Args:\n            msg (string): the character(s) to write to the display\n\n        Returns:\n            None\n        '''\n        for c in msg:\n            self._bus.write_byte_data(self._addr,0x40,ord(c))\n\n    def _cursor_on(self, enable):\n        if enable:\n            self.textCommand(0x0E)\n        else:\n            self.textCommand(0x0C)\n            \n            \n    def textCommand(self, cmd):\n        self._bus.write_byte_data(self._addr,0x80,cmd)\n        \ndef main():\n    import time\n\n    lcd = JHD1802()\n    rows, cols = lcd.size()\n    print(\"LCD model: {}\".format(lcd.name))\n    print(\"LCD type : {} x {}\".format(cols, rows))\n\n    lcd.backlight(False)\n    time.sleep(1)\n\n    lcd.backlight(True)\n    lcd.setCursor(0, 0)\n    lcd.write(\"hello world!\")\n    lcd.setCursor(0, cols - 1)\n    lcd.write('X')\n    lcd.setCursor(rows - 1, 0)\n    for i in range(cols):\n        lcd.write(chr(ord('A') + i))\n\n    time.sleep(3)\n    lcd.clear()\n\nif __name__ == '__main__':\n    main()\n\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"(env)pi@raspberrypi:~ grove_16x2_lcd\n")),(0,a.yg)("admonition",{title:"success",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"If everything goes well, you will be able to see the following result")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The backlight will turn off for 1 second, then turn back on."),(0,a.yg)("li",{parentName:"ul"},"LCD will display:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"hello world!   X\nABCDEFGHIJKLMNOP\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"After 3 seconds, the entire display will be cleared, and the screen will be blank.")),(0,a.yg)("p",null,"You can quit this program by simply press ",(0,a.yg)("inlineCode",{parentName:"p"},"ctrl"),"+",(0,a.yg)("inlineCode",{parentName:"p"},"c"),"."),(0,a.yg)("h3",{id:"play-with-wio-terminal-ardupy"},"Play With Wio Terminal (ArduPy)"),(0,a.yg)("h4",{id:"hardware-1"},"Hardware"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Wio Terminal"),(0,a.yg)("th",{parentName:"tr",align:null},"Grove - 16 x 2 LCD"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("p",null,(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png",alt:"pir",width:600,height:"auto"}))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("p",null,(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg",alt:"pir",width:600,height:"auto"})))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Get One Now")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html"},"Get One Now"))))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Step 2.")," Connect Grove - 16 x 2 LCD to ",(0,a.yg)("strong",{parentName:"p"},"I2C")," port of Wio Terminal.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Step 3.")," Connect the Wio Terminal to PC through USB Type-C cable."))),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/WT-LCD.png",alt:"pir",width:600,height:"auto"})),(0,a.yg)("h4",{id:"software-2"},"Software"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Step 1.")," Follow ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/ArduPy/"},(0,a.yg)("strong",{parentName:"a"},"ArduPy Getting Started"))," to configure the ArduPy development environment on Wio Terminal.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Step 2.")," Make sure that the ArduPy firmware contains the Grove - 16 x 2 LCD ArduPy library using the following commands. For more information, please follow ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/ArduPy/#using-aip-to-include-other-ardupy-librariesfrom-arduino-libraries-example"},(0,a.yg)("strong",{parentName:"a"},"here")),"."))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"aip install Seeed-Studio/seeed-ardupy-lcd1602\naip build\naip flash\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 3.")," Copy the following code and save it as ",(0,a.yg)("inlineCode",{parentName:"li"},"ArduPy-LCD1602.py"),":")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'from arduino import grove_lcd1602\nimport time\n\nlcd = grove_lcd1602()\n\ndef main():\n    lcd.print("hello, world!")\n    lcd.is_blink_cursor = True\n    i = 0\n    while True:\n        lcd.set_cursor(1, 2) #column 1, row 2\n        lcd.print(i)\n        time.sleep(1)\n        i = i + 1\n\nif __name__ == "__main__":\n    main()\n')),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre"},"   For more API reference, please refer to [**here**](https://github.com/Seeed-Studio/seeed-ardupy-lcd1602).\n"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 4.")," Save the ",(0,a.yg)("inlineCode",{parentName:"li"},"ArduPy-LCD1602.py")," in a location that you know. Run the following command and ",(0,a.yg)("strong",{parentName:"li"},"replace")," ",(0,a.yg)("inlineCode",{parentName:"li"},"<YourPythonFilePath>")," with your ",(0,a.yg)("inlineCode",{parentName:"li"},"ArduPy-LCD1602.py")," location.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'aip shell -n -c "runfile <YourPythonFilePath>"\n# Example:\n# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-LCD1602.py"\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 5.")," We will see the results on the Grove - 16 x 2 LCD.")),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/Ardupy-LCD1602.png",alt:"pir",width:600,height:"auto"})),(0,a.yg)("h2",{id:"resources"},"Resources"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/res/JDH_1804_Datasheet.pdf"},"JDH_1804_Datasheet"))),(0,a.yg)("h2",{id:"project"},"Project"),(0,a.yg)("p",null,"This is the introduction Video of this product, simple demos, you can have a try."),(0,a.yg)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/3slfeHKSSCw?rel=0",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Grove IR Universal Remote Project"),"\uff1aHave multiple remotes? Have an Arduino? Operate multiple devices with a single press of a Keyes IR remote."),(0,a.yg)("iframe",{frameBorder:0,height:"327.5",scrolling:"no",src:"https://www.hackster.io/ArduinoBasics/grove-ir-universal-remote-project-7ab87f",width:350}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Range tests made easy with the RE-Mote and LCD"),"\uff1aReduce the number of equipment and preparations required for field testing (2.4GHz and 868MHz), pack everything you need in your hand."),(0,a.yg)("iframe",{frameBorder:0,height:"327.5",scrolling:"no",src:"https://www.hackster.io/alinan/range-tests-made-easy-with-the-re-mote-and-lcd-6e78b3",width:350}),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);