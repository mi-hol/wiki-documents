"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[83055],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},56611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(9668),a=(n(96540),n(15680));const o={description:"Change the LoRa Antenna Path of the Wio Tracker 1110 Board",title:"Change Antenna Path",keywords:["Antenna","Tracker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/change_antenna_path",last_update:{date:"7/8/2024",author:"Jessie"}},i=void 0,c={unversionedId:"Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/change_antenna_path",id:"Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/change_antenna_path",title:"Change Antenna Path",description:"Change the LoRa Antenna Path of the Wio Tracker 1110 Board",source:"@site/docs/Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/change_antenna_path.md",sourceDirName:"Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board",slug:"/change_antenna_path",permalink:"/change_antenna_path",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/change_antenna_path.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1720396800,formattedLastUpdatedAt:"Jul 8, 2024",frontMatter:{description:"Change the LoRa Antenna Path of the Wio Tracker 1110 Board",title:"Change Antenna Path",keywords:["Antenna","Tracker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/change_antenna_path",last_update:{date:"7/8/2024",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Home Assistant Integration",permalink:"/wio_tracker_home_assistant"},next:{title:"Setup Your Toolchain",permalink:"/setup_toolchain_for_wio_tracker"}},s={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The Wio Tracker 1110 Dev board is using the onboard LoRa antenna by default, to get a better signal, we may need an external antenna, this chapter will guide users to change the antenna path to connect an external LoRa antenna. "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Remove ",(0,a.yg)("inlineCode",{parentName:"li"},"R3"),"."),(0,a.yg)("li",{parentName:"ul"},"Change ",(0,a.yg)("inlineCode",{parentName:"li"},"R4")," to 0R.")),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/path.png",alt:"pir",width:600,height:"auto"})),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("iframe",{width:"666",height:"360",src:"https://www.youtube.com/embed/r1hJnt0wZg8",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))}d.isMDXComponent=!0}}]);