"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[59925],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(9668),r=(n(96540),n(15680));const i={description:"LinkIt ONE Tutorial - SMS control the LED",title:"LinkIt ONE Tutorial - SMS control the LED",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-SMS_control_the_LED",last_update:{date:"1/13/2023",author:"shuxu hu"}},a=void 0,l={unversionedId:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-SMS_control_the_LED",id:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-SMS_control_the_LED",title:"LinkIt ONE Tutorial - SMS control the LED",description:"LinkIt ONE Tutorial - SMS control the LED",source:"@site/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-SMS_control_the_LED.md",sourceDirName:"Seeed_Elderly/LinkIt/Linklt ONE",slug:"/LinkIt_ONE_Tutorial-SMS_control_the_LED",permalink:"/LinkIt_ONE_Tutorial-SMS_control_the_LED",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-SMS_control_the_LED.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"LinkIt ONE Tutorial - SMS control the LED",title:"LinkIt ONE Tutorial - SMS control the LED",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-SMS_control_the_LED",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"LinkIt ONE Tutorial - Push Button",permalink:"/LinkIt_ONE_Tutorial-Push_Button"},next:{title:"LinkIt ONE Tutorial - The Basics",permalink:"/LinkIt_ONE_Tutorial-The_Basics"}},s={},u=[{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,o.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"What We're Doing")),(0,r.yg)("p",null,"In this section, we achieve some cool function. Outstanding characteristic of LinkIt One is integrated with the communication module. We are following through GSM communication module to transmit messages, the switch state to pass to change LED. This will be exciting. First connect with the antenna, and then insert a SIMCARD into the slot of the LinkIt One, then according to the schematic connected circuit. Use a mobile phone with GSM, edit the message content ON or OFF, send the specified number (the SIM number), now you can control the LED switch state, And global synchronization."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Things you need")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"LinkIt One x 1")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Break board x 1")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Resistors 1k\u03a9,330\u03a9 x 1")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Transistor\uff082N3904\uff09 x 1")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"GIS ANT x 1"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Schematic")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-SMS_control_the_LED/img/LinkItONE_Kit_1_1.jpg",alt:null})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Connection")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-SMS_control_the_LED/img/LinkItONE_Kit_1_2.png",alt:null})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Code")),(0,r.yg)("p",null,"Please click on the button below to download the code for the kit:"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt"},(0,r.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-SMS_control_the_LED/img/Code_sidekick_linkit.png",alt:null}))),(0,r.yg)("p",null,"You can unzip the file to the ",(0,r.yg)("strong",{parentName:"p"},"Examples")," folder of your Arduino IDE."),(0,r.yg)("p",null,"To access the demo code open:"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Basic -",">"," L9_SMS_Light")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Antenna do not work ?"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Attention to check the antenna connection is stable connection. (Antenna socket on the back, marked as GSM-ANT)"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Send the message without response\uff1f"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"SIMCARD need to unlock free version. (That is not limited to any telephone mobile phone SIMCARD)")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Making it better")),(0,r.yg)("p",null,"Perfect with the GSM module communication function. If we want to do a short time, how to modify the code? Set a time of 60 seconds (send form ON60). Send a message to set the lighting automatically extinguished in a minute after arrival."),(0,r.yg)("p",null,"To access the demo code open:"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Extend_Lesson \u2013",">"," L10_SMS_Light_Advanced")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"More ideas")),(0,r.yg)("p",null,"With Bluetooth, GPS, Wi-Fi function module. What a look whether to have the new play?"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Reference")),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);