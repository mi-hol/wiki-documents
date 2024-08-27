"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[22454],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>h});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),g=o,h=p["".concat(u,".").concat(g)]||p[g]||c[g]||a;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},44114:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(9668),o=(r(96540),r(15680));const a={description:"Light Sensor and LED Bar",title:"Light Sensor and LED Bar",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Light_Sensor_and_LED_Bar",last_update:{date:"2/15/2023",author:"jianjing Huang"}},i=void 0,s={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Light_Sensor_and_LED_Bar",id:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Light_Sensor_and_LED_Bar",title:"Light Sensor and LED Bar",description:"Light Sensor and LED Bar",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Light_Sensor_and_LED_Bar.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects",slug:"/Light_Sensor_and_LED_Bar",permalink:"/Light_Sensor_and_LED_Bar",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Light_Sensor_and_LED_Bar.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676419200,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{description:"Light Sensor and LED Bar",title:"Light Sensor and LED Bar",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Light_Sensor_and_LED_Bar",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Joystick Control RGB Led",permalink:"/Joystick_Control_RGB_Led"},next:{title:"LightView 201k Digital display module",permalink:"/LightView_201k_Digital_display_module"}},u={},l=[{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:l},p="wrapper";function c(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This demo will show you how to use light sensor. In order to indicate the intensity of light, we need a Led Bar."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Hardware Required\uff1a")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Arduino")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Light Sensor")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"LED Bar"))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Circuit\uff1a")),(0,o.yg)("p",null,"The output of Light Sensor is analog signal, so we connect it to A0 of Seeeduino."),(0,o.yg)("p",null,"LED Bar needs 10 IOs, about the connection, please refer to ",(0,o.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/BarGraph"},"LED Bar"),"."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Light_Sensor_and_LED_Bar/img/Sidekick_33_1.png",alt:null})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Code:")),(0,o.yg)("p",null,"Open Arduino IDE, click File -",">"," Sketchbook -",">"," light_sensor."),(0,o.yg)("p",null,"We can use analogRead() to read the value of light sensor, this value will indicate the intensity of light. When the light stronger, the value larger."),(0,o.yg)("p",null,"To make the data more smoothly, we need some simple filtering. We read the value 32 times, and take the average value."),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);