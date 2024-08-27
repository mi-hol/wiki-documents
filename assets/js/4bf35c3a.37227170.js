"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15816],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=r,y=c["".concat(s,".").concat(g)]||c[g]||d[g]||i;return n?o.createElement(y,a(a({ref:t},u),{},{components:n})):o.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(9668),r=(n(96540),n(15680));const i={description:"LinkIt ONE Tutorial - Mini Servo",title:"LinkIt ONE Tutorial - Mini Servo",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt-ONE-Tutorial---Mini-Servo",last_update:{date:"1/13/2023",author:"shuxu hu"}},a=void 0,l={unversionedId:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt-ONE-Tutorial---Mini-Servo",id:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt-ONE-Tutorial---Mini-Servo",title:"LinkIt ONE Tutorial - Mini Servo",description:"LinkIt ONE Tutorial - Mini Servo",source:"@site/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt-ONE-Tutorial---Mini-Servo.md",sourceDirName:"Seeed_Elderly/LinkIt/Linklt ONE",slug:"/LinkIt-ONE-Tutorial---Mini-Servo",permalink:"/LinkIt-ONE-Tutorial---Mini-Servo",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt-ONE-Tutorial---Mini-Servo.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"LinkIt ONE Tutorial - Mini Servo",title:"LinkIt ONE Tutorial - Mini Servo",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt-ONE-Tutorial---Mini-Servo",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"LinkIt ONE Tutorial - Marquee",permalink:"/LinkIt_ONE_Tutorial-Marquee"},next:{title:"LinkIt ONE Tutorial - Push Button",permalink:"/LinkIt_ONE_Tutorial-Push_Button"}},s={},p=[{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"What We're Doing")),(0,r.yg)("p",null,"Servo motor (servo) is commonly used in small robots and other machines to control angular position. It is wrapped by a small gear box, and positioned by the timing control pulses. In this section we control the angular position of the mini servo with the help of potentiometer."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Things you need")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"LinkIt One x 1")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Break board x 1")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Slide Potentiometer 10k\u03a9 x 1")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Servo x 1"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Schematic")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt-ONE-Tutorial---Mini-Servo/img/LinkItONE_Kit_7_1.jpg",alt:null})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Connection")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt-ONE-Tutorial---Mini-Servo/img/LinkItONE_Kit_7_2.jpg",alt:null})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Code")),(0,r.yg)("p",null,"Please click on the button below to download the code for the kit:"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt"},(0,r.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/LinkIt-ONE-Tutorial---Mini-Servo/img/Code_sidekick_linkit.png",alt:null}))),(0,r.yg)("p",null,"You can unzip the file to the ",(0,r.yg)("strong",{parentName:"p"},"Examples")," folder of your Arduino IDE."),(0,r.yg)("p",null,"To access the demo code open:"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Basic -",">"," L7_Servo")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"#include <Servo.h>\n\nServo myservo;              // create servo object to control a servo\nint potpin = A0;             // analog pin used to connect the potentiometer\nint val;                    // variable to read the value from the analog pin\n\nvoid setup()\n{\n    myservo.attach(9);                  // attaches the servo on pin 9 to the servo object\n}\n\nvoid loop() {\n    val = analogRead(potpin);          // reads the value of the potentiometer (value between 0 and 1023)\n    val = map(val, 0, 1023, 0, 179);   // scale it to use it with the servo (value between 0 and 180)\n    myservo.write(val);                // sets the servo position according to the scaled value\n    delay(15);                         // waits for the servo to get there\n}\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Troubleshooting")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"There are three pins in servos and they are color coded respective to their functionality yellow-analog port red \u2013 positive, dark brown \u2013 ground. So please make connections according to its functionality.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Ensure that 5v power supply is connected to the board."))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Making it better")),(0,r.yg)("p",null,"If the mini steering worked, we can adjust the speed of rotation by using a potentiometer. Upload the following code to produce different functionality."),(0,r.yg)("p",null,"To access the demo code open:"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Extend_Lesson \u2013",">"," L7_Servo_Speed")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"More ideas")),(0,r.yg)("p",null,"How do you control two servo motors simultaneously so that you can make a robot?"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Reference")),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);