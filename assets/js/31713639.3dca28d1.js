"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[71312],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>h});var o=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),g=n,h=c["".concat(p,".").concat(g)]||c[g]||m[g]||a;return r?o.createElement(h,i(i({ref:t},u),{},{components:r})):o.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},70928:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(9668),n=(r(96540),r(15680));const a={description:"JavaScript for RePhone",title:"JavaScript for RePhone",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/JavaScript_for_RePhone",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,s={unversionedId:"Seeed_Elderly/rePhone/Program with rePhone/JavaScript_for_RePhone",id:"Seeed_Elderly/rePhone/Program with rePhone/JavaScript_for_RePhone",title:"JavaScript for RePhone",description:"JavaScript for RePhone",source:"@site/docs/Seeed_Elderly/rePhone/Program with rePhone/JavaScript_for_RePhone.md",sourceDirName:"Seeed_Elderly/rePhone/Program with rePhone",slug:"/JavaScript_for_RePhone",permalink:"/JavaScript_for_RePhone",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/rePhone/Program with rePhone/JavaScript_for_RePhone.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"JavaScript for RePhone",title:"JavaScript for RePhone",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/JavaScript_for_RePhone",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Eclipse IDE for RePhone Kit",permalink:"/Eclipse_IDE_for_RePhone_Kit"},next:{title:"Lua for RePhone",permalink:"/Lua_for_RePhone"}},p={},l=[{value:"Install Driver and Update Firmware",id:"install-driver-and-update-firmware",level:2},{value:"Download JavaScript for RePhone Application",id:"download-javascript-for-rephone-application",level:2},{value:"Use JavaScript Shell",id:"use-javascript-shell",level:2},{value:"Examples",id:"examples",level:2},{value:"RePhone Community",id:"rephone-community",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:l},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(c,(0,o.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Xadow_GSMPlusBLE_pingguo.JPG",alt:null})),(0,n.yg)("p",null,"RePhone can be a learning tool for you to start interesting projects. Currently, RePhone supports various development environment and development languages, you can either built applications with C/C++ based on Eclipse IDE, Arduino IDE, or with Lua and JavaScript."),(0,n.yg)("p",null,"This wiki is a User Guide to help you start your RePhone project with JavaScript."),(0,n.yg)("h2",{id:"install-driver-and-update-firmware"},"Install Driver and Update Firmware"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"To ",(0,n.yg)("strong",{parentName:"p"},"Install the Driver"),", please refer to the ",(0,n.yg)("strong",{parentName:"p"},"section 2 of ",(0,n.yg)("a",{href:"/JavaScript_for_RePhone"},(0,n.yg)("span",null,(0,n.yg)("font",{color:"000000",size:"3"}," Arduino IDE for RePhone Kit")))))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"To ",(0,n.yg)("strong",{parentName:"p"},"Update Firmware"),", please refer to ",(0,n.yg)("strong",{parentName:"p"},"section 3 of ",(0,n.yg)("a",{href:"/JavaScript_for_RePhone"},(0,n.yg)("span",null,(0,n.yg)("font",{color:"000000",size:"3"}," Arduino IDE for RePhone Kit"))))))),(0,n.yg)("h2",{id:"download-javascript-for-rephone-application"},"Download JavaScript for RePhone Application"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 1.")," Go to ",(0,n.yg)("strong",{parentName:"p"},"JavaScript for RePhone")," project's github release channel to download ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"js_for_rephone_xxx.zip"))),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/JavaScript_for_RePhone/releases"},"Download JavaScript for RePhone")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 2.")," Set your RePhone into storage mode by ",(0,n.yg)("strong",{parentName:"p"},"plugging in the battery")," and connect it to PC with a Micro USB cable."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Connect_Xadow_GSMPlusBLE_to_PC.png",alt:null})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 3.")," Unzip the ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"js_for_rephone_xxx.zip"))," file into the 5MB disk of RePhone, you can also put some music files (mp3 format) into the disk. Here I have put the 'music1.mp3' and 'music2.mp3' in it."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Lua_1.png",alt:null})),(0,n.yg)("h2",{id:"use-javascript-shell"},"Use JavaScript Shell"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 1.")," Now press and hold the power key of your RePhone (Xadow GSM+BLE, see the diagram above in step 3 of section 2) for ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"2 seconds"))," to turn it on, then identify the COM number for the serial port, which will be ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"MTK USB Modem Port"))," showing in the ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Device Manager")),", also please note that ",(0,n.yg)("em",{parentName:"p"},"the COM number might be different on different PC"),"."),(0,n.yg)("p",null,"Open ",(0,n.yg)("strong",{parentName:"p"},"Device Manager")," by clicking the ",(0,n.yg)("strong",{parentName:"p"},"Start")," button, clicking ",(0,n.yg)("strong",{parentName:"p"},"Control Panel"),", clicking ",(0,n.yg)("strong",{parentName:"p"},"System and Security"),", and then, under ",(0,n.yg)("strong",{parentName:"p"},"System"),", clicking ",(0,n.yg)("strong",{parentName:"p"},"Device Manager"),". If you're prompted for an administrator password or confirmation, type the password or provide confirmation. See the following image:"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Check_ports.png",alt:null})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 2.")," We use a serial terminal tool such as ",(0,n.yg)("a",{parentName:"p",href:"http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html"},"PuTTY")," to access the Lua shell running on the RePhone."),(0,n.yg)("p",null,"If you use PuTTY, please remember to enable ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},'"implicit CR in every LF"'))," option. Otherwise, line breaks will be weird. As Lua shell of RePhone use LF ('\\n') as EOL, while PuTTY uses CR LF (\"\\r\\n\") as default EOL."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Putty_EOL.png",alt:null})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 3."),"Open the MTK USB Modem Port (its baudrate doesn't matter as it is a USB virtual serial port) and type \"print('hello, world')\", you will get your first Lua code running on the RePhone."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/RePhone_Lua_Shell.png",alt:null})),(0,n.yg)("p",null,"If you have some music files in the RePhone, type \"audio.play('music.mp3')\" to play it. If you have a SIM card inserted, type \"gsm.call('phone_number')\" to call someone or \"gsm.text('phone_number', 'message from rephone')\" to send a text message."),(0,n.yg)("h2",{id:"examples"},"Examples"),(0,n.yg)("p",null,"1.Play a music repeatedly."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"function aplay() { audio.play('music.mp3'); }\nt = timer.create(10000, aplay)\n")),(0,n.yg)("p",null,"2.Auto-reply message."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"function re(f, c) { print('message:', c, ' from:', f); gsm.text(f, 'Thanks for your message'); }\ngsm.on_new_message(re)\n")),(0,n.yg)("h2",{id:"rephone-community"},"RePhone Community"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},(0,n.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/RePhone_Community-2.png",alt:null}))),(0,n.yg)("p",null,"We have been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules\u2019 development in the future. And then here we go, the RePhone Community."),(0,n.yg)("p",null,"Now join us in the ",(0,n.yg)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},"RePhone Community"),"!"),(0,n.yg)("p",null,"Together we seek answers, make interesting stuff, care about each other, and share our experiences."),(0,n.yg)("h2",{id:"resources"},"Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/JavaScript_for_RePhone"},"Source Code of JavaScript for RePhone"))),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);