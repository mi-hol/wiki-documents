"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[76559],{15680:(e,t,o)=>{o.d(t,{xA:()=>d,yg:()=>y});var r=o(96540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(o),m=n,y=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return o?r.createElement(y,i(i({ref:t},d),{},{components:o})):r.createElement(y,i({ref:t},d))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},98582:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=o(9668),n=(o(96540),o(15680));const a={description:"Upload Code",title:"Upload Code",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Upload_Code",last_update:{date:"02/01/2023",author:"w0x7ce"},no_comments:!1},i=void 0,s={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Upload_Code",id:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Upload_Code",title:"Upload Code",description:"Upload Code",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Upload_Code.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage",slug:"/Upload_Code",permalink:"/Upload_Code",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Upload_Code.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1675209600,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{description:"Upload Code",title:"Upload Code",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Upload_Code",last_update:{date:"02/01/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"How to use and write a library",permalink:"/How_to_use_and_write_a_library"},next:{title:"Use External Editor",permalink:"/Use_External_Editor"}},p={},l=[{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:l},u="wrapper";function c(e){let{components:t,...o}=e;return(0,n.yg)(u,(0,r.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"The specific steps for uploading the code:")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Select the type of Arduino board that you are using by the path: Tools --",">"," Board --",">"," for example, Arduino UNO after you have open a demo.\n",(0,n.yg)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Upload_Code/img/Open_code.jpg",alt:null}))),(0,n.yg)("p",null,"It may be your wrong choice of board type If there appears the below image, please re-select the Arduino board that you are using."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Upload_Code/img/Error_score.jpg",alt:null})),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"Select the correct serial port you are using by the path: Tools --",">"," Serial Port --",">"," for example, COM3."),(0,n.yg)("li",{parentName:"ol"},"Upload the demo code as below show:")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Upload_Code/img/Upload_state.jpg",alt:null})),(0,n.yg)("p",null,'When there appears "Done uploading", congratulate you upload successfully.'),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);