"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[31435],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),c=o,m=p["".concat(u,".").concat(c)]||p[c]||g[c]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(9668),o=(n(96540),n(15680));const a={description:"Seeeduino V2.21",title:"Seeeduino V2.21",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino_v2.21",last_update:{date:"1/11/2023",author:"shuxu hu"}},i=void 0,s={unversionedId:"Sensor/Seeeduino Series/Seeeduino/Seeeduino_v2.21",id:"Sensor/Seeeduino Series/Seeeduino/Seeeduino_v2.21",title:"Seeeduino V2.21",description:"Seeeduino V2.21",source:"@site/docs/Sensor/Seeeduino Series/Seeeduino/Seeeduino_v2.21.md",sourceDirName:"Sensor/Seeeduino Series/Seeeduino",slug:"/Seeeduino_v2.21",permalink:"/Seeeduino_v2.21",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Seeeduino Series/Seeeduino/Seeeduino_v2.21.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"Seeeduino V2.21",title:"Seeeduino V2.21",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino_v2.21",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Seeeduino V2.2",permalink:"/Seeeduino_V2.2"},next:{title:"Seeeduino v3.0",permalink:"/Seeeduino_v3.0"}},u={},l=[{value:"Features",id:"features",level:2},{value:"FAQ",id:"faq",level:2},{value:"What is Seeeduino",id:"what-is-seeeduino",level:3},{value:"How do I use the Seeduino 328 with the Arduino IDE?",id:"how-do-i-use-the-seeduino-328-with-the-arduino-ide",level:3},{value:"What voltages can I feed through the JST power connector",id:"what-voltages-can-i-feed-through-the-jst-power-connector",level:3},{value:"What is the use of M_RST_A switch\xa0?",id:"what-is-the-use-of-m_rst_a-switch",level:3},{value:"Support",id:"support",level:2},{value:"Version Tracker",id:"version-tracker",level:2},{value:"Bug Tracker",id:"bug-tracker",level:2},{value:"Additional Idea",id:"additional-idea",level:2},{value:"How to buy",id:"how-to-buy",level:2},{value:"Licensing",id:"licensing",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:l},p="wrapper";function g(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_v2.21/img/Seeeduino-168p.jpg",alt:"enter image description here"})," ",(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_v2.21/img/Seeeduino_fritzing.png",alt:"enter image description here"})),(0,o.yg)("p",null,"Here is the wiki page for Both Seeeduino V2.21 Atmega 168P and Seeeduino V2.21 Atmega 328P."),(0,o.yg)("p",null,"Seeeduino is Arduino compatible board. Its design is based on Diecimila scheme, 100% compatible to its existing program, shield and IDEs. On the hardware part, remarkable changes are taken to improve the flexibility and user experience."),(0,o.yg)("h2",{id:"features"},"Features"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Inherits all of Arduino Diecimila's features.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Compatible to Diecimila's pin layout, screw hole and dimensions.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Evolved with SMD components")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Improved on extensibility and convenience"))),(0,o.yg)("h2",{id:"faq"},"FAQ"),(0,o.yg)("p",null,"Here is the Seeeduino FAQ, now the version is v2.21, users can list the Frequently Asked Questions here, example as below:"),(0,o.yg)("h3",{id:"what-is-seeeduino"},"What is Seeeduino"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Answer:")," Seeeduino is a ..."),(0,o.yg)("h3",{id:"how-do-i-use-the-seeduino-328-with-the-arduino-ide"},"How do I use the Seeduino 328 with the Arduino IDE?"),(0,o.yg)("p",null,'Answer: Select the "Arduino Dueminalove 328" in the Arduino IDE and also make sure the reset switch is set to AUTO for programming.'),(0,o.yg)("h3",{id:"what-voltages-can-i-feed-through-the-jst-power-connector"},"What voltages can I feed through the JST power connector"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Answer:")," This is a non-authoritative (user-submitted) response. The JST connector is connected to a L1117-50 voltage regulator which takes the input voltage down to 5.0 VDC. The L1117 is a LDO (low-drop out) regulator, so it needs a minimum of +1.2 volts over the regulated voltage to operate.  In conclusion, you need a minimum of at least 6.2 VDC but more is preferred. The maximum voltage is 15 volts DC for the regulator, however this assumes best-case scenario for the regulator. To be on the safe side with adequate margins on both ends, you should keep the voltage between 7 VDC and 13 VDC."),(0,o.yg)("h3",{id:"what-is-the-use-of-m_rst_a-switch"},"What is the use of M_RST_A switch\xa0?"),(0,o.yg)("p",null,"\"\"Answer:\"\"M_RST_A switch , turn on 'M' mean when you download the program the board will auto restart , turn on 'A' will not auto restart ,default to turn on 'M'"),(0,o.yg)("h2",{id:"support"},"Support"),(0,o.yg)("p",null,"If you have questions or other better design ideas, you can go to our ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/forum"},"forum")," or ",(0,o.yg)("strong",{parentName:"p"},"wish")," to discuss."),(0,o.yg)("h2",{id:"version-tracker"},"Version Tracker"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Revision"),(0,o.yg)("th",{parentName:"tr",align:null},"Descriptions"),(0,o.yg)("th",{parentName:"tr",align:null},"Release Date"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Seeeduino V0.9"),(0,o.yg)("td",{parentName:"tr",align:null},"Initial public release"),(0,o.yg)("td",{parentName:"tr",align:null})),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Seeeduino v1.1"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"1.")," Fixed bug - unnessesary via on Pin4 wire.",(0,o.yg)("strong",{parentName:"td"},"2.")," Fixed bug - Lable mistakenly covered by switches. ",(0,o.yg)("strong",{parentName:"td"},"3.")," Added I2C and sensor port.",(0,o.yg)("strong",{parentName:"td"},"4.")," Added an 100uF capacitor for vcc switch.",(0,o.yg)("strong",{parentName:"td"},"5.")," Grouped new 100mil grid pins.",(0,o.yg)("strong",{parentName:"td"},"6.")," Replaced reset buttons with metal ones.",(0,o.yg)("strong",{parentName:"td"},"7.")," Rearranged texts and lables for clearer indications."),(0,o.yg)("td",{parentName:"tr",align:null})),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Seeeduino v2.12"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"1.")," Zero external power consumption when switched off ",(0,o.yg)("strong",{parentName:"td"},"2.")," Stronger Switches",(0,o.yg)("strong",{parentName:"td"},"3.")," Second power supply for 5V direct input. ","[Caution]"," USE 5V ONLY!",(0,o.yg)("strong",{parentName:"td"},"4.")," 150mA driver capacity under 3.3V",(0,o.yg)("strong",{parentName:"td"},"5.")," 1.0mm slim PCB for lighter weighs",(0,o.yg)("strong",{parentName:"td"},"6.")," Extra row reserved for pin headers"),(0,o.yg)("td",{parentName:"tr",align:null})),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Seeeduino v2.2"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("strong",{parentName:"td"},"1.")," USB/EXT power auto select",(0,o.yg)("strong",{parentName:"td"},"2.")," Upgrade power capacitor",(0,o.yg)("strong",{parentName:"td"},"3.")," Clean up layouts",(0,o.yg)("strong",{parentName:"td"},"4.")," Reset easier",(0,o.yg)("strong",{parentName:"td"},"5.")," Real Quartz Crystal",(0,o.yg)("strong",{parentName:"td"},"6.")," Extern power Diode change to 1N4004(more power on Vin pin)"),(0,o.yg)("td",{parentName:"tr",align:null},"Dec 16, 2010")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Seeeduino v2.21"),(0,o.yg)("td",{parentName:"tr",align:null},"1.Upgraded to Stronger mini USB connector."),(0,o.yg)("td",{parentName:"tr",align:null},"Jan 12, 2011")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Seeeduino v3.0"),(0,o.yg)("td",{parentName:"tr",align:null},"1.change JST connector to DC Jack connector"),(0,o.yg)("td",{parentName:"tr",align:null},"Jan 1, 2012")))),(0,o.yg)("h2",{id:"bug-tracker"},"Bug Tracker"),(0,o.yg)("p",null,"Bug Tracker is the place you can publish any bugs you think you might have found during use. Please write down what you have to say, your answers will help us improve our products."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The mini-USB connector can break off the board very easily if you apply sidewise force while a mini-USB cable is connected. Consider using an extension USB cable and refrain for plugging/unplugging the mini-USB cable to/from the Seeduino board very often.")),(0,o.yg)("h2",{id:"additional-idea"},"Additional Idea"),(0,o.yg)("p",null,"The Additional Idea is the place to write your project ideas about this product, or other usages you've found. Or you can write them on Projects page."),(0,o.yg)("h2",{id:"how-to-buy"},"How to buy"),(0,o.yg)("p",null,"Here to buy Seeeduino v2.21 ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/seeeduino-v221-atmega-168p-p-690.html"},"(Atmega 168P)")," and Seeeduino v3.0 ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=132_133"},"(Atmega 328P)")," on SEEED ",(0,o.yg)("strong",{parentName:"p"},"Bazaar")),(0,o.yg)("h2",{id:"licensing"},"Licensing"),(0,o.yg)("p",null,"This documentation is licensed under the Creative Commons ",(0,o.yg)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-sa/3.0/"},"Attribution-ShareAlike License 3.0")," Source code and libraries are licensed under ",(0,o.yg)("a",{parentName:"p",href:"http://www.gnu.org/licenses/gpl.html"},"GPL/LGPL"),", see source code files for details."),(0,o.yg)("h2",{id:"resources"},"Resources"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,o.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino_v2.21/res/Seeeduino_v2.21.pdf"},"Schematic in pdf"))),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);