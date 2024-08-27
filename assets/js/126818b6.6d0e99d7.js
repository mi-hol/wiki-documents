"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[70827],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>h});var i=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=i.createContext({}),l=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=l(r),c=o,h=g["".concat(p,".").concat(c)]||g[c]||u[c]||n;return r?i.createElement(h,a(a({ref:t},d),{},{components:r})):i.createElement(h,a({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[g]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<n;l++)a[l]=r[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},98233:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var i=r(9668),o=(r(96540),r(15680));const n={description:"Grove - LED Strip Driver",title:"Grove - LED Strip Driver",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-LED_Strip_Driver",last_update:{date:"1/7/2023",author:"shuxu hu"}},a=void 0,s={unversionedId:"Sensor/Grove/Grove_Accessories/LED/Grove-LED_Strip_Driver",id:"Sensor/Grove/Grove_Accessories/LED/Grove-LED_Strip_Driver",title:"Grove - LED Strip Driver",description:"Grove - LED Strip Driver",source:"@site/docs/Sensor/Grove/Grove_Accessories/LED/Grove-LED_Strip_Driver.md",sourceDirName:"Sensor/Grove/Grove_Accessories/LED",slug:"/Grove-LED_Strip_Driver",permalink:"/Grove-LED_Strip_Driver",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/LED/Grove-LED_Strip_Driver.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673049600,formattedLastUpdatedAt:"Jan 7, 2023",frontMatter:{description:"Grove - LED Strip Driver",title:"Grove - LED Strip Driver",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-LED_Strip_Driver",last_update:{date:"1/7/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - LED String Light",permalink:"/Grove-LED_String_Light"},next:{title:"Grove - RGB LED Matrix w/Driver",permalink:"/Grove-RGB_LED_Matrix_w-Driver"}},p={},l=[{value:"Specifications",id:"specifications",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Hardware installation",id:"hardware-installation",level:3},{value:"Software Programming",id:"software-programming",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:l},g="wrapper";function u(e){let{components:t,...r}=e;return(0,o.yg)(g,(0,i.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/Grove-LED_Strip_Driver.jpg",alt:"pir",width:600,height:"auto"})),(0,o.yg)("p",null,"The LED Strip Driver with 4-pin Grove interface provides easy connectivity to your standard Arduino device or Seeed Stalker. It can help you control the luminance of a single-color LED strip, as well as the color and the luminance of an RGB LED strip through Arduino or Seeeduino."),(0,o.yg)("p",null,"It has 2 terminals and 2 Grove interfaces. The power for LED strip comes in through the 2-pin terminal. And the LED controlling voltages output through the 4-pin terminal. The 2 Grove interfaces are respectively screen-printed \u201cIN\u201d (for controlling data input) and \u201cOUT\u201d (for controlling data shared with the next strip driver)."),(0,o.yg)("p",null,"It can drive an LED strip 1 to 2 meters long with 9 V, while 1 to 5 meters long with 12 V. The driver in conjunction with the colorful LED strips can add a wonderful effect to indoor or outdoor usages."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Grove - LED Strip Driver V1.1\uff1a")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"SI5904 is used to level translation."),(0,o.yg)("li",{parentName:"ol"},"78M05 is a Voltage Regulator, the output voltage is 5V.")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Grove - LED Strip Driver V1.2:")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"replace SI5904 with two 2N7002."),(0,o.yg)("li",{parentName:"ol"},"The package of 100nF capacitors is 0603, not 0402."),(0,o.yg)("li",{parentName:"ol"},"3.3K discrete resistors change to exclusion.")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("pre",{parentName:"admonition"},(0,o.yg)("code",{parentName:"pre"},"Clock/data IO requires 5V logic level.\n"))),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-LED-Strip-Driver-p-1197.html"},(0,o.yg)("p",null,(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,o.yg)("h2",{id:"specifications"},"Specifications"),(0,o.yg)("hr",null),(0,o.yg)("table",null,(0,o.yg)("tr",null,(0,o.yg)("td",{width:"150"}," **Power supply**"),(0,o.yg)("td",{width:"150"}," **LED Strip**"),(0,o.yg)("td",{width:"100"}," **LED Color**"),(0,o.yg)("td",{width:"100"}," **Length(m)**"),(0,o.yg)("td",{width:"150"}," **Max current(mA)**")),(0,o.yg)("tr",null,(0,o.yg)("td",{rowspan:"5"}," 12V/5A"),(0,o.yg)("td",{rowspan:"5"}," RGB LED strip"),(0,o.yg)("td",{rowspan:"5"}," White"),(0,o.yg)("td",null," 1"),(0,o.yg)("td",null," 1032")),(0,o.yg)("tr",null,(0,o.yg)("td",null," 2"),(0,o.yg)("td",null," 1822")),(0,o.yg)("tr",null,(0,o.yg)("td",null," 3"),(0,o.yg)("td",null," 2430")),(0,o.yg)("tr",null,(0,o.yg)("td",null," 4"),(0,o.yg)("td",null," 2800")),(0,o.yg)("tr",null,(0,o.yg)("td",null," 5"),(0,o.yg)("td",null," 3000")),(0,o.yg)("tr",null,(0,o.yg)("td",{rowspan:"2"}," 9V/1A"),(0,o.yg)("td",{rowspan:"2"}," RGB LED strip"),(0,o.yg)("td",{rowspan:"2"}," White"),(0,o.yg)("td",null," 1"),(0,o.yg)("td",null," 365")),(0,o.yg)("tr",null,(0,o.yg)("td",null," 2"),(0,o.yg)("td",null," 627"))),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_Interface3.jpg",alt:"pir",width:600,height:"auto"})),(0,o.yg)("p",null," ",(0,o.yg)("strong",{parentName:"p"},"12V Power Supply")," \u2013 Screw terminal for 9~12v power supply."),(0,o.yg)("p",null," ",(0,o.yg)("strong",{parentName:"p"},"Chainable Input")," \u2013 Connected to Grove - Base Shield] or the other driver's chainable output. Pin definition: ",(0,o.yg)("strong",{parentName:"p"},"CLK DIN NC GND"),"."),(0,o.yg)("p",null," ",(0,o.yg)("strong",{parentName:"p"},"Chainable Output")," \u2013 Connected to the other driver's chainable input. Pin definition: ",(0,o.yg)("strong",{parentName:"p"},"CLK DOUT NC GND")),(0,o.yg)("p",null," ",(0,o.yg)("strong",{parentName:"p"},"LED strip interface")," \u2013 Screw terminals for LED strip. Pin definition: ",(0,o.yg)("strong",{parentName:"p"},"+ B R G")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note"),":VCC of Arduino/Seeeduino is not connected to the Grove interface."),(0,o.yg)("h2",{id:"demonstration"},"Demonstration"),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"hardware-installation"},"Hardware installation"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step1.jpg",alt:"pir",width:600,height:"auto"})),(0,o.yg)("p",null,'1.Connect the Grove socket marked "IN" on the LED Strip Driver and digital port 2 on the Base Shield with a Grove cable.'),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step2.jpg",alt:"pir",width:600,height:"auto"})),(0,o.yg)("p",null,"2.Connect the LED strip to the 4 pin terminal of Grove - LED Strip Driver. Make sure the wire marked ",(0,o.yg)("strong",{parentName:"p"},'"+12v"')," of the LED strip goes into the seat marked ",(0,o.yg)("strong",{parentName:"p"},'"+"')," of the terminal, and ",(0,o.yg)("strong",{parentName:"p"},'"B"')," into ",(0,o.yg)("strong",{parentName:"p"},'"B"'),",",(0,o.yg)("strong",{parentName:"p"},'"R"')," into ",(0,o.yg)("strong",{parentName:"p"},'"R"')," and ",(0,o.yg)("strong",{parentName:"p"},'"G"')," into ",(0,o.yg)("strong",{parentName:"p"},'"G"'),".Most of the LED strips we are selling have 4 wires as the picture above except ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/white-led-flexistrip-60-led1m-p-1122.html?cPath=207"},"White LED Flexi-Strip - 60 LED - 1m"),". If this is the kind you are going to use, the connection steps can be a little different. Still plug the wire marked ",(0,o.yg)("strong",{parentName:"p"},'"+12V"')," into the seat marked ",(0,o.yg)("strong",{parentName:"p"},'"+"'),", but the other wire can go into whichever seat of ",(0,o.yg)("strong",{parentName:"p"},'"B"'),", ",(0,o.yg)("strong",{parentName:"p"},'"R"')," and ",(0,o.yg)("strong",{parentName:"p"},'"G"'),". And run the demo code named ",(0,o.yg)("strong",{parentName:"p"},'"DemoForWhiteLEDStrip"')," instead in the following software steps."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step3.jpg",alt:"pir",width:600,height:"auto"})),(0,o.yg)("p",null,"3.Connect the 12V DC or 9V DC power wires to the 2 pin terminal."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step4.jpg",alt:"pir",width:600,height:"auto"})),(0,o.yg)("p",null,'4.In cases that you want to utilize the cascade feature, prepare another driver and strip first. Then use a Grove cable to connect the Grove socket marked "out" on the first board and the Grove socket marked "IN" on the second board. Done. Two strips will shine in sync now.'),(0,o.yg)("h3",{id:"software-programming"},"Software Programming"),(0,o.yg)("p",null,"1.Download ",(0,o.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LEDStripDriver_library.zip"},"the LED Strip Driver Library"),". Unzip and import it into Arduino-1.0 Libraries: ..\\arduino-1.0\\libraries."),(0,o.yg)("p",null,"2.Upload the SingleLEDStrip demo code if you only use a single driver."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/SingleLEDStripDemo.jpg",alt:"pir",width:600,height:"auto"})),(0,o.yg)("p",null,"3.In case of two LED strips, upload the DualLEDStrip demo code instead."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/DualLEDStripDemo.jpg",alt:"pir",width:600,height:"auto"})),(0,o.yg)("h1",{id:"led-strip-driver-eagle-files-v11"},"LED Strip driver eagle files V1.1"),(0,o.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_driver_eagle_files.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.yg)("h1",{id:"led-strip-driver-eagle-files-v12"},"LED Strip driver eagle files V1.2"),(0,o.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_Driver_eagle_file_V1.2.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.yg)("h2",{id:"resources"},"Resources"),(0,o.yg)("hr",null),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_driver_eagle_files.zip"},"LED Strip driver eagle files V1.1"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_Driver_eagle_file_V1.2.zip"},"LED Strip driver eagle files V1.2"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_driver.pdf"},"Schematic V1.1 in PDF"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/Grove-LED_Strip_driver_V1.2.pdf"},"Schematic V1.2 in PDF"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/P9813_datasheet.pdf"},"P9813 Datasheet"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/N-MOSFET_DMN3016LK3_Datasheet.pdf"},"N-MOSFET DMN3016LK3 Datasheet"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LEDStripDriver_library.zip"},"LED Strip Driver library"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/LED_Strip_Suli"},"Suli Library")))),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);