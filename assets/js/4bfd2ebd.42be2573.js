"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[47430],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>y});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(r),g=i,y=c["".concat(u,".").concat(g)]||c[g]||d[g]||o;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},65803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(9668),i=(r(96540),r(15680));const o={description:"reRouter Introduction",title:"reRouter Introduction",keywords:["Device"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Raspberry-OpenWrt-Getting-Started",last_update:{date:"1/10/2022",author:"jianjing Huang"}},a="Getting Started with OpenWrt on Your Router",s={unversionedId:"Network/RaspberryPi_Devices/reRouter/Raspberry-OpenWrt-Getting-Started",id:"Network/RaspberryPi_Devices/reRouter/Raspberry-OpenWrt-Getting-Started",title:"reRouter Introduction",description:"reRouter Introduction",source:"@site/docs/Network/RaspberryPi_Devices/reRouter/Raspberry-OpenWrt-Getting-Started.md",sourceDirName:"Network/RaspberryPi_Devices/reRouter",slug:"/Raspberry-OpenWrt-Getting-Started",permalink:"/Raspberry-OpenWrt-Getting-Started",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/RaspberryPi_Devices/reRouter/Raspberry-OpenWrt-Getting-Started.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1641772800,formattedLastUpdatedAt:"Jan 10, 2022",frontMatter:{description:"reRouter Introduction",title:"reRouter Introduction",keywords:["Device"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Raspberry-OpenWrt-Getting-Started",last_update:{date:"1/10/2022",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"reRouter Guide",permalink:"/reRouter_Intro"},next:{title:"reRouter carrier board",permalink:"/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4"}},u={},p=[{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Quick Start with Mini Router",id:"quick-start-with-mini-router",level:2},{value:"OpenWrt Pre-Installed",id:"openwrt-pre-installed",level:3},{value:"2 Step to run Mini Router with OpenWrt",id:"2-step-to-run-mini-router-with-openwrt",level:2},{value:"FAQ",id:"faq",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],l={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,i.yg)(c,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"getting-started-with-openwrt-on-your-router"},"Getting Started with OpenWrt on Your Router"),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview.png",alt:"pir",width:"650",height:"auto"})),(0,i.yg)("p",null,"This Mini Router is equipped with dual Gigabit Ethernet ports and dual USB 3.0 ports, making it suitable for soft router applications, while keeping the hardware to a minimum. We have pre-installed a Raspberry Pi Compute Module 4 with 4GB RAM and 32GB eMMC to enable fast boot-up times and a smooth overall experience."),(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,i.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview1.png",alt:"pir",width:"650",height:"auto"})),(0,i.yg)("h2",{id:"quick-start-with-mini-router"},"Quick Start with Mini Router"),(0,i.yg)("h3",{id:"openwrt-pre-installed"},"OpenWrt Pre-Installed"),(0,i.yg)("p",null,"The Compute Module 4 comes with\xa0",(0,i.yg)("a",{href:"https://wiki.seeedstudio.com/OpenWrt-Getting-Started/",target:"_blank"},(0,i.yg)("span",null,"OpenWrt Firmware"))," out-of-the-box. This means you just need to unbox the package, take out the board, connect to your existing home network and have your own mini router!"),(0,i.yg)("p",null,"OpenWrt is an open-source Linux operating system which runs on embedded devices/ routers. It offers more features, performance, and security than a traditional router. It has a filesystem that\u2019s fully writable and includes a package management system. You can make use of these packages to suit your applications in various ways. Once you connect this board to your home network and access the router from a web browser, you will be presented with a beautiful and interactive dashboard as follows."),(0,i.yg)("h2",{id:"2-step-to-run-mini-router-with-openwrt"},"2 Step to run Mini Router with OpenWrt"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Hardware Required")),(0,i.yg)("p",null,"You need to prepare the following hardware before getting started with OpenWRT on Mini Router"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"1 x\xa0Mini Router"),(0,i.yg)("li",{parentName:"ul"},"1 x\xa0Power adapter (5V/3A) with USB Type-C cable"),(0,i.yg)("li",{parentName:"ul"},"2 x Ethernet cables")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Instruction")),(0,i.yg)("p",null,"Once the ethernet cables are connected,"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 1."),"\xa0Power on the board"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 2."),"\xa0Open a web browser and type\xa0192.168.2.1\nYou will see the OpenWrt Luci web-interface here. The OpenWrt image compiled by Seeed is included with many packages out-of-the-box. So you can use these package to realize many applications!")),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview2.png",alt:"pir",width:"650",height:"auto"})),(0,i.yg)("h2",{id:"faq"},"FAQ"),(0,i.yg)("p",null,"For details, please click ",(0,i.yg)("a",{parentName:"p",href:"/FAQs_For_openWrt"},(0,i.yg)("strong",{parentName:"a"},"here"))),(0,i.yg)("h2",{id:"resources"},"Resources"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[Web Page]")," ",(0,i.yg)("a",{parentName:"p",href:"https://openwrt.org"},"OpenWrt Offficial Documentation"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[GitHub]")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/seeed-linux-openwrt"},"Seeed OpenWrt"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[OneDrive]")," ",(0,i.yg)("a",{parentName:"p",href:"https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd"},"Seeed OpenWrt Images")))),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);