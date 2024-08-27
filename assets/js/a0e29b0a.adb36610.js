"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[51989],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(r),u=i,y=g["".concat(s,".").concat(u)]||g[u]||m[u]||l;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62524:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(9668),i=(r(96540),r(15680));const l={description:"reTerminal && reTerminal DM-FAQ",title:"How to solve screen refresh rate is too low",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/screen_refresh_rate_low",last_update:{date:"7/2/2024",author:"Parker"}},a=void 0,o={unversionedId:"FAQ/reTerminal/screen_refresh_rate",id:"FAQ/reTerminal/screen_refresh_rate",title:"How to solve screen refresh rate is too low",description:"reTerminal && reTerminal DM-FAQ",source:"@site/docs/FAQ/reTerminal/screen_refresh_rate.md",sourceDirName:"FAQ/reTerminal",slug:"/screen_refresh_rate_low",permalink:"/screen_refresh_rate_low",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/FAQ/reTerminal/screen_refresh_rate.md",tags:[],version:"current",lastUpdatedBy:"Parker",lastUpdatedAt:1719878400,formattedLastUpdatedAt:"Jul 2, 2024",frontMatter:{description:"reTerminal && reTerminal DM-FAQ",title:"How to solve screen refresh rate is too low",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/screen_refresh_rate_low",last_update:{date:"7/2/2024",author:"Parker"}}},s={},p=[{value:"Problem description",id:"problem-description",level:2},{value:"Problem solving",id:"problem-solving",level:2}],c={toc:p},g="wrapper";function m(e){let{components:t,...r}=e;return(0,i.yg)(g,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"problem-description"},"Problem description"),(0,i.yg)("p",null,"Screen has noticeable refresh stutter stripes."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/DM_bug.gif",alt:"pir",width:600,height:"auto"})),(0,i.yg)("h2",{id:"problem-solving"},"Problem solving"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 1.")," Enter the following command in the terminal.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"sudo raspi-config\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 2.")," Select ",(0,i.yg)("inlineCode",{parentName:"li"},"6 Advanced Options")," and press Enter")),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/01.png",alt:"pir",width:600,height:"auto"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 3.")," Select ",(0,i.yg)("inlineCode",{parentName:"li"},"A9 Wayland")," and press Enter")),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/02.png",alt:"pir",width:600,height:"auto"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 4.")," Select ",(0,i.yg)("inlineCode",{parentName:"li"},"Yes")," and press Enter")),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/03.png",alt:"pir",width:600,height:"auto"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 5.")," Select ",(0,i.yg)("inlineCode",{parentName:"li"},"Ok")," and press Enter")),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/04.png",alt:"pir",width:600,height:"auto"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 6.")," Select ",(0,i.yg)("inlineCode",{parentName:"li"},"Finish")," and press Enter")),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/05.png",alt:"pir",width:600,height:"auto"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 7.")," Select reboot now, select ",(0,i.yg)("inlineCode",{parentName:"li"},"Yes")," and press Enter")),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/06.png",alt:"pir",width:600,height:"auto"})),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"If you are using a bullseye system, switching wayland mode may disable your remote login software VNC.\nIf you are using a bookworm system, you will not have this problem.")))}m.isMDXComponent=!0}}]);