"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6648],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>c});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=l(r),m=n,c=g["".concat(s,".").concat(m)]||g[m]||d[m]||o;return r?a.createElement(c,i(i({ref:t},u),{},{components:r})):a.createElement(c,i({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[g]="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42795:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=r(9668),n=(r(96540),r(15680));const o={description:"reComputer for Jetson Series",title:"reComputer for Jetson Series Introduction",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_Jetson_Series_Introduction",last_update:{date:"01/03/2023",author:"w0x7ce"}},i="reComputer for Jetson Series Introduction",p={unversionedId:"Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_Jetson_Series_Introduction",id:"Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_Jetson_Series_Introduction",title:"reComputer for Jetson Series Introduction",description:"reComputer for Jetson Series",source:"@site/docs/Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_Jetson_Series_Introduction.md",sourceDirName:"Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10",slug:"/reComputer_Jetson_Series_Introduction",permalink:"/reComputer_Jetson_Series_Introduction",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/reComputer_Jetson_Series/reComputer_J10/reComputer_Jetson_Series_Introduction.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672704e3,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{description:"reComputer for Jetson Series",title:"reComputer for Jetson Series Introduction",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_Jetson_Series_Introduction",last_update:{date:"01/03/2023",author:"w0x7ce"}},sidebar:"ProductSidebar",previous:{title:"reComputer Industrial J40, J30 Hardware and Interfaces Usage",permalink:"/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage"},next:{title:"Getting start with reComputer J1010",permalink:"/reComputer_J1010_with_Jetson_getting_start"}},s={},l=[{value:"\u2728 Contributor Project",id:"-contributor-project",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Interface Details",id:"interface-details",level:2},{value:"J1010 carrier board",id:"j1010-carrier-board",level:3},{value:"Jetson A206 carrier board",id:"jetson-a206-carrier-board",level:3},{value:"What&#39;s in the box",id:"whats-in-the-box",level:2},{value:"reComputer J1010",id:"recomputer-j1010",level:3},{value:"reComputer J1020",id:"recomputer-j1020",level:3},{value:"reComputer J2011",id:"recomputer-j2011",level:3},{value:"reComputer J2012",id:"recomputer-j2012",level:3},{value:"What\u2018s More",id:"whats-more",level:2},{value:'<a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_00.png" target="_blank"><span>NVIDIA\xae Jetson Module Powered Devices Comparison</span></a>',id:"nvidia-jetson-module-powered-devices-comparison",level:3},{value:'<a href="https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_01.png" target="_blank"><span>NVIDIA\xae Jetson Module Compatible Carrier Boards Comparison</span></a>',id:"nvidia-jetson-module-compatible-carrier-boards-comparison",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:l},g="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(g,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"recomputer-for-jetson-series-introduction"},"reComputer for Jetson Series Introduction"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:900,src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerheadline.png"})),(0,n.yg)("h2",{id:"-contributor-project"},"\u2728 Contributor Project"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Public Seeed Studio Wiki Platform Updates"),(0,n.yg)("li",{parentName:"ul"},"We have a task list for updating this page, which is categorized under our ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479"},"contributor project"),", as we are dedicated to enhancing the user experience and providing better support through the development of our wiki platform."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35025656"},"Your contribution to this page")," is essential to us! We really value your input and would greatly appreciate your assistance in generating ideas.")),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"reComputer for Jetson series are compact edge computers built with NVIDIA advanced AI embedded systems: reComputer J10 (Nano) and reComputer J20 (Xavier NX). With rich extension modules, industrial peripherals, thermal management combined with decades of Seeed\u2019s hardware expertise, reComputer for Jetson is ready to help you accelerate and scale the next-gen AI product emerging in diverse AI scenarios."),(0,n.yg)("p",null,"The series is compatible with NVIDIA Jetson software stack, cloud-native workflows, industry-leading AI frameworks, helping deliver seamless AI integration. Currently, we have launched four of them as shown below:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Product"),(0,n.yg)("th",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"th",href:"https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html"},"reComputer J1010")),(0,n.yg)("th",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"th",href:"https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html"},"reComputer J1020")),(0,n.yg)("th",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"th",href:"https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html"},"reComputer J2011")),(0,n.yg)("th",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"th",href:"https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html"},"reComputer J2012")))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"SKU"),(0,n.yg)("td",{parentName:"tr",align:null},"110061362"),(0,n.yg)("td",{parentName:"tr",align:null},"110061361"),(0,n.yg)("td",{parentName:"tr",align:null},"110061363"),(0,n.yg)("td",{parentName:"tr",align:null},"110061401")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Side View"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview3_1.png"})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png"})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png"})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png"}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Equipped Module"),(0,n.yg)("td",{parentName:"tr",align:null},"Jetson Nano 4GB"),(0,n.yg)("td",{parentName:"tr",align:null},"Jetson Nano 4GB"),(0,n.yg)("td",{parentName:"tr",align:null},"Jetson Xavier NX 8GB"),(0,n.yg)("td",{parentName:"tr",align:null},"Jetson Xavier NX 16GB")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Operating carrier Board"),(0,n.yg)("td",{parentName:"tr",align:null},"J1010 Carrier Board"),(0,n.yg)("td",{parentName:"tr",align:null},"Jetson A206"),(0,n.yg)("td",{parentName:"tr",align:null},"Jetson A206"),(0,n.yg)("td",{parentName:"tr",align:null},"Jetson A206")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Power Interface"),(0,n.yg)("td",{parentName:"tr",align:null},"Type-C connector"),(0,n.yg)("td",{parentName:"tr",align:null},"DC power adapter"),(0,n.yg)("td",{parentName:"tr",align:null},"DC power adapter"),(0,n.yg)("td",{parentName:"tr",align:null},"DC power adapter")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Link"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{href:"https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html",target:"_blank"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png",alt:"pir",width:"200",height:"auto"}))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{href:"https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html",target:"_blank"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png",alt:"pir",width:"200",height:"auto"}))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{href:"https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html",target:"_blank"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png",alt:"pir",width:"200",height:"auto"}))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{href:"https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html",target:"_blank"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/getonenow.png",alt:"pir",width:"200",height:"auto"})))))),(0,n.yg)("h2",{id:"interface-details"},"Interface Details"),(0,n.yg)("p",null,"The current 4 reComputer products have the same appearance, the difference lies in the interface on the back. ",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html"},"reComputer J1010")," uses one interface combination, and the other three use the same other interface combination because there are two different carrier boards used in the chassis."),(0,n.yg)("h3",{id:"j1010-carrier-board"},"J1010 carrier board"),(0,n.yg)("p",null,"This carrier board is suitable for ",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html"},"reComputer J1010"),"."),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-a01mark.png",alt:"pir",width:900,height:"auto"})),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Mark."),(0,n.yg)("th",{parentName:"tr",align:null},"Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Note"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("image",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num1.png",width:"30px",height:"30px"})),(0,n.yg)("td",{parentName:"tr",align:null},"DCIN(Type-C interface)"),(0,n.yg)("td",{parentName:"tr",align:null},"Power supply only")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("image",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num5.png",width:"30px",height:"30px"})),(0,n.yg)("td",{parentName:"tr",align:null},"HDMI"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("image",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num4.png",width:"30px",height:"30px"})),(0,n.yg)("td",{parentName:"tr",align:null},"1x USB 3.0 Type-A port"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("image",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num3.png",width:"30px",height:"30px"})),(0,n.yg)("td",{parentName:"tr",align:null},"2x USB 2.0 Type-A ports"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("image",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num2.png",width:"30px",height:"30px"})),(0,n.yg)("td",{parentName:"tr",align:null},"LAN"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("image",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num6.png",width:"30px",height:"30px"})),(0,n.yg)("td",{parentName:"tr",align:null},"USB Type-C port"),(0,n.yg)("td",{parentName:"tr",align:null},"Data transmitted only")))),(0,n.yg)("h3",{id:"jetson-a206-carrier-board"},"Jetson A206 carrier board"),(0,n.yg)("p",null,"This carrier board is for ",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html"},"reComputer J1020"),", ",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html"},"reComputer J2011"),", and ",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html"},"reComputer J2012"),"."),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-h01mark.png",alt:"pir",width:900,height:"auto"})),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Mark."),(0,n.yg)("th",{parentName:"tr",align:null},"Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Note"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("image",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num1.png",width:"30px",height:"30px"})),(0,n.yg)("td",{parentName:"tr",align:null},"DCIN(circular interface)"),(0,n.yg)("td",{parentName:"tr",align:null},"Power supply only")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("image",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num5.png",width:"30px",height:"30px"})),(0,n.yg)("td",{parentName:"tr",align:null},"DP"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("image",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num4.png",width:"30px",height:"30px"})),(0,n.yg)("td",{parentName:"tr",align:null},"HDMI"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("image",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num3.png",width:"30px",height:"30px"})),(0,n.yg)("td",{parentName:"tr",align:null},"4x USB 3.0 Type-A ports"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("image",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num2.png",width:"30px",height:"30px"})),(0,n.yg)("td",{parentName:"tr",align:null},"LAN"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("image",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/num6.png",width:"30px",height:"30px"})),(0,n.yg)("td",{parentName:"tr",align:null},"Micro-B port"),(0,n.yg)("td",{parentName:"tr",align:null},"Data transmitted only")))),(0,n.yg)("h2",{id:"whats-in-the-box"},"What's in the box"),(0,n.yg)("p",null,"Before powering up and starting up, you need to make all the checks and preparations for the first turn on of the reComputer. Unpack the product you received and check that the contents of the package are complete according to the product model you purchased."),(0,n.yg)("h3",{id:"recomputer-j1010"},(0,n.yg)("a",{parentName:"h3",href:"https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html"},"reComputer J1010")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-10-1-A0shangxiang.png",alt:"pir",width:500,height:"auto"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"The list of box included:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"reComputer J1010, including:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"4G Jetson Nano module1 x1"),(0,n.yg)("li",{parentName:"ul"},"J1010 carrier board x1")))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Accessories not included but required to power on:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"USB Keyboard and mouse"),(0,n.yg)("li",{parentName:"ul"},"Display screen"),(0,n.yg)("li",{parentName:"ul"},"Type-C power cable and power supply")),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"There will be no Type-C power cable and power supply included in the product.\n"))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"recomputer-j1020"},(0,n.yg)("a",{parentName:"h3",href:"https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html"},"reComputer J1020")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-10-1-H0shangxiang.png",alt:"pir",width:500,height:"auto"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"The list of box included:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"reComputer J1020, including:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"4G Jetson Nano module1 x1"),(0,n.yg)("li",{parentName:"ul"},"Jetson A206 carrier board x1"))),(0,n.yg)("li",{parentName:"ul"},"12V/2A Power adapter (with 5 interchangeable adapter plugs) x1")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Accessories not included but required to power on:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"USB Keyboard and mouse"),(0,n.yg)("li",{parentName:"ul"},"Display screen")),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"There will be 5 selectable power adapter for you. Type-C power cable and power supply included in the product. Hence, you can choose the one that is right for your country or region to power the reComputer without having to any additional power supply perchasing.")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"recomputer-j2011"},(0,n.yg)("a",{parentName:"h3",href:"https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html"},"reComputer J2011")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-20-1-H1shangxiang.png",alt:"pir",width:500,height:"auto"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"The list of box included:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"reComputer Jetson J2011, including:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"8G Jetson Xavier NX module x1"),(0,n.yg)("li",{parentName:"ul"},"Jetson A206 carrier board x1"))),(0,n.yg)("li",{parentName:"ul"},"19V/4.74A (MAX 90W) Power adapter (without power supply cable) x1")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Accessories not included but required to power on:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"USB Keyboard and mouse"),(0,n.yg)("li",{parentName:"ul"},"Display screen"),(0,n.yg)("li",{parentName:"ul"},"Adapter power supply cable")),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Please match the power supply cable for the power adapter according to your local power plug standard.")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"recomputer-j2012"},(0,n.yg)("a",{parentName:"h3",href:"https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html"},"reComputer J2012")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-20-1-H2shangxiang.png",alt:"pir",width:500,height:"auto"})),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/jetson-20-1-H2shangxiang1.png",alt:"pir",width:500,height:"auto"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"The list of box included:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"reComputer J2012, including:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"16G Jetson Xavier NX module x1"),(0,n.yg)("li",{parentName:"ul"},"Jetson A206 carrier board x1"))),(0,n.yg)("li",{parentName:"ul"},"19V/4.74A (MAX 90W) Power adapter (without power supply cable) x1")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Accessories not included but required to power on:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"USB Keyboard and mouse"),(0,n.yg)("li",{parentName:"ul"},"Display screen"),(0,n.yg)("li",{parentName:"ul"},"Adapter power supply cable")),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Please match the power supply cable for the power adapter according to your local power plug standard.")),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"whats-more"},"What\u2018s More"),(0,n.yg)("p",null,"We here present you more complete tables about NVIDIA\xae Jetson Module Powered Devices Comparison and NVIDIA\xae Jetson Module Compatible Carrier Boards Comparison. You can click the image or the title for a better look."),(0,n.yg)("h3",{id:"nvidia-jetson-module-powered-devices-comparison"},(0,n.yg)("a",{href:"https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_00.png",target:"_blank"},(0,n.yg)("span",null,"NVIDIA\xae Jetson Module Powered Devices Comparison"))),(0,n.yg)("div",{class:"document"},(0,n.yg)("div",{class:"document"},(0,n.yg)("p",{class:"paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"},"\xa0"),(0,n.yg)("p",{class:"paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"},(0,n.yg)("a",{href:"https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_00.png",target:"_blank",rel:"noopener"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_00.png",alt:""}))))),(0,n.yg)("h3",{id:"nvidia-jetson-module-compatible-carrier-boards-comparison"},(0,n.yg)("a",{href:"https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_01.png",target:"_blank"},(0,n.yg)("span",null,"NVIDIA\xae Jetson Module Compatible Carrier Boards Comparison"))),(0,n.yg)("div",{class:"document"},(0,n.yg)("div",{class:"document"},(0,n.yg)("p",{class:"paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"},"\xa0"),(0,n.yg)("p",{class:"paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"},(0,n.yg)("a",{href:"https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_01.png",target:"_blank",rel:"noopener"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision_01.png",alt:""}))))),(0,n.yg)("h2",{id:"resources"},"Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/reComputer/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf"},"NVIDIA Jetson Devices and carrier boards comparision"))),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);