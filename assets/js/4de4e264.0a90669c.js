"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62907],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>h});var i=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return a?i.createElement(h,n(n({ref:t},d),{},{components:a})):i.createElement(h,n({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,n=new Array(r);n[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,n[1]=l;for(var c=2;c<r;c++)n[c]=a[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},57966:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=a(9668),o=(a(96540),a(15680));const r={description:"Micro_bit bitwear",title:"BitWear",keywords:["Micro_bit"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/BitWear",last_update:{date:"12/29/2023",author:"Seraphina"}},n=void 0,l={unversionedId:"Top_Brand/Micro_bit/expansion_board/BitWear",id:"Top_Brand/Micro_bit/expansion_board/BitWear",title:"BitWear",description:"Micro_bit bitwear",source:"@site/docs/Top_Brand/Micro_bit/expansion_board/BitWear.md",sourceDirName:"Top_Brand/Micro_bit/expansion_board",slug:"/BitWear",permalink:"/BitWear",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Micro_bit/expansion_board/BitWear.md",tags:[],version:"current",lastUpdatedBy:"Seraphina",lastUpdatedAt:1703808e3,formattedLastUpdatedAt:"Dec 29, 2023",frontMatter:{description:"Micro_bit bitwear",title:"BitWear",keywords:["Micro_bit"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/BitWear",last_update:{date:"12/29/2023",author:"Seraphina"}},sidebar:"ProductSidebar",previous:{title:"Microsoft MakeCode",permalink:"/Microsoft_MakeCode"},next:{title:"BitMaker",permalink:"/BitMaker"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Tutorials",id:"tutorials",level:2},{value:"1. Wake-Up Alarm",id:"1-wake-up-alarm",level:3},{value:"1.1 Implementation",id:"11-implementation",level:4},{value:"1.2 Write a Program",id:"12-write-a-program",level:4},{value:"1.3 Connect a Device",id:"13-connect-a-device",level:4},{value:"1.4 Download a Program",id:"14-download-a-program",level:4},{value:"1.5 Run a Program",id:"15-run-a-program",level:4},{value:"2. Light Detector",id:"2-light-detector",level:3},{value:"2.1 Implementation",id:"21-implementation",level:4},{value:"2.2 Write a Program",id:"22-write-a-program",level:4},{value:"2.3 Connect a Device",id:"23-connect-a-device",level:4},{value:"2.4 Download a Program",id:"24-download-a-program",level:4},{value:"2.5 Run a Program",id:"25-run-a-program",level:4},{value:"Course Materials",id:"course-materials",level:2},{value:"Attachments",id:"attachments",level:2},{value:"Attachment: BitWear Tutorial Source Code",id:"attachment-bitwear-tutorial-source-code",level:4},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.yg)(p,(0,i.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitwear/1.png",alt:null})),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"BitWear is a low-cost compact accessory for micro:bit users to make fun wearable gadgets. The BitWear is simply attached to the micro:bit with 5 screws (M3x5mm), and powered with two CR2032 batteries, which are securely clipped in and unable to be taken out unless you unscrew the BitWear. There is a vibration motor, a buzzer and an addressable RGB LED on board, all designed for your fun wearable projects. Our goal design for the BitWear is to maximize micro:bit functions while minimizing the space footprint to provide new micro:bit users with enriched wearable experience."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitwear/2.png",alt:null})),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Users should prepare two C2032 batteries and five M3*5 screws separately.")),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitwear/3.png",alt:null})),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"When testing a program, do not install batteries on BitWear first. Use a USB cable instead to provide power and ensure program transmission. Only install batteries when a program completes and offline implementation is required.")),(0,o.yg)("h2",{id:"tutorials"},"Tutorials"),(0,o.yg)("p",null,"Here are some related tutorials to help you get started with the BitWear."),(0,o.yg)("h3",{id:"1-wake-up-alarm"},"1. Wake-Up Alarm"),(0,o.yg)("h4",{id:"11-implementation"},"1.1 Implementation"),(0,o.yg)("p",null,"This is a magical gadget that can wake you up! Once the project completes, use the double-sided tape to secure the gadget onto your back. Slowly bend down as if you are falling to sleep, and see if it can send out a remind."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitwear/4.png",alt:null})),(0,o.yg)("h4",{id:"12-write-a-program"},"1.2 Write a Program"),(0,o.yg)("p",null,"First, add a forever block. Connect the block show icon inside. Keep this heart icon on it.\nNext, add an IF-THEN statement. Connect a comparison block \u201c<\u201d into it. Inside the block, add the block acceleration (mg) from the tab Input to the box on the left; and input 800 into the box on the right.\nThen, go to the tab Music and connect the block start melody (dadadum) repeating (once) underneath."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitwear/5.png",alt:null})),(0,o.yg)("h4",{id:"13-connect-a-device"},"1.3 Connect a Device"),(0,o.yg)("p",null,"Attach the BitWear onto the micro:bit. Use a USB cable to connect the micro:bit and your PC together. Ensure that the LED indicator on the micro:bit lights up."),(0,o.yg)("h4",{id:"14-download-a-program"},"1.4 Download a Program"),(0,o.yg)("p",null,"You have been introduced how to download a program in the ",(0,o.yg)("a",{parentName:"p",href:"https://docproxy.tinkergen.com/web/#/2?page_id=329"},"previous tutorials"),", which can be simplified into steps as: rename a program, click the \u201cDownload\u201d button and send it to the micro:bit."),(0,o.yg)("h4",{id:"15-run-a-program"},"1.5 Run a Program"),(0,o.yg)("p",null,"Turn on the power switch on the BitWear and see if the program can run normally."),(0,o.yg)("h3",{id:"2-light-detector"},"2. Light Detector"),(0,o.yg)("h4",{id:"21-implementation"},"2.1 Implementation"),(0,o.yg)("p",null,"With a BitWear attached, the micro:bit shows a smiley face if the light level is greater than 80; if not, the BitWear vibrates, and the micro:bit shows a sad face and plays the melody Baddy. (The specified light level may differ in a real scenario; you can adjust it as needed.)"),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitwear/6.png",alt:null})),(0,o.yg)("h4",{id:"22-write-a-program"},"2.2 Write a Program"),(0,o.yg)("p",null,"Note that MakeCode does not provide blocks to control the BitWear. Therefore we need to manually add an extension in MakeCode to make sure everything goes well. Let\u2019s learn how to do it now!\nHow to Add a BitWear Extension:\nGo to MakeCode:\n",(0,o.yg)("a",{parentName:"p",href:"https://makecode.microbit.org/"},"https://makecode.microbit.org")),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitwear/7.png",alt:null})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Step 2: Select Extensions from the drop-down list which takes you to the extensions page.")),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitwear/8.png",alt:null})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Step 3: Input the address of the BitWear extension into the search box: ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/TinkerGen/pxt-BitWear"},"https://github.com/TinkerGen/pxt-BitWear"),(0,o.yg)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/microbit/bitwear/9.png",alt:null}))),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"If it prompts that the extension does not exist, close the browser and enter MakeCode to try again.")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Step 4: Click the extension package which takes you back to the workspace. You will see that the BitWear extension is then successfully added.",(0,o.yg)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/microbit/bitwear/10.png",alt:null}))),(0,o.yg)("p",null,"Let\u2019s move on to the task after we added the extension."),(0,o.yg)("p",null,"First, add a forever block and connect an IF-THEN-ELSE statement inside.\nFollow this program logic and code: if the light level is greater than 80, then the micro:bit will show a smiley face; if not, the BitWear will vibrate, and the micro:bit will show a sad face and play the melody Baddy."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitwear/11.png",alt:null})),(0,o.yg)("h4",{id:"23-connect-a-device"},"2.3 Connect a Device"),(0,o.yg)("p",null,"Attach the BitWear onto the micro:bit. Use a USB cable to connect the micro:bit and your PC together. Ensure that the LED indicator on the micro:bit lights up."),(0,o.yg)("h4",{id:"24-download-a-program"},"2.4 Download a Program"),(0,o.yg)("p",null,"You have been introduced how to download a program in the previous tutorials, which can be simplified into steps as: rename a program, click the \u201cDownload\u201d button and send it to the micro:bit."),(0,o.yg)("h4",{id:"25-run-a-program"},"2.5 Run a Program"),(0,o.yg)("p",null,"Turn on the power switch on the BitWear and see if the program can run normally."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Due to no light sensor is built on a micro:bit, the micro:bit uses the LED matrix to sense the light around it. The LED actuators are constantly converted into input signals and take sample of the voltage attenuation duration, which is roughly proportional to the light level from an ambient environment.")),(0,o.yg)("h2",{id:"course-materials"},"Course Materials"),(0,o.yg)("p",null,"You can see related course materials about the micro:bit and BitWear on our online learning platform Make2Learn via this address: ",(0,o.yg)("a",{parentName:"p",href:"https://make2learn.tinkergen.com/"},"https://make2learn.tinkergen.com/")),(0,o.yg)("h2",{id:"attachments"},"Attachments"),(0,o.yg)("h4",{id:"attachment-bitwear-tutorial-source-code"},(0,o.yg)("a",{parentName:"h4",href:"https://tinkergen.com/filedownload/179236"},"Attachment: BitWear Tutorial Source Code")),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);