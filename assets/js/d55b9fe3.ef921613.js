"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[37018],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),c=a,y=p["".concat(l,".").concat(c)]||p[c]||h[c]||o;return n?r.createElement(y,s(s({ref:t},d),{},{components:n})):r.createElement(y,s({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(9668),a=(n(96540),n(15680));const o={description:"SenseCAP M4 FAQ",title:"SenseCAP M4 FAQ",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},s="FAQ",i={unversionedId:"Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_FAQ",id:"Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_FAQ",title:"SenseCAP M4 FAQ",description:"SenseCAP M4 FAQ",source:"@site/docs/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_FAQ.md",sourceDirName:"Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway",slug:"/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_FAQ",permalink:"/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_FAQ",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_FAQ.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1676332800,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{description:"SenseCAP M4 FAQ",title:"SenseCAP M4 FAQ",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"SenseCAP M4 Quick Start",permalink:"/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Quick_Start"},next:{title:"SenseCAP LoRaWAN Outdoor Gateway",permalink:"/Network/SenseCAP_Network/SenseCAP_LoRaWAN_Outdoor_Gateway/SenseCAP_LoRaWAN_Outdoor_Gateway_Overview"}},l={},u=[{value:"<strong>What&#39;s the average flux chain sync time for the node?</strong>",id:"whats-the-average-flux-chain-sync-time-for-the-node",level:3},{value:"<strong>Does SenseCAP M4 Square support NIMBUS and STRATUS?</strong>",id:"does-sensecap-m4-square-support-nimbus-and-stratus",level:3},{value:"<strong>How to check if my port is open?</strong>",id:"how-to-check-if-my-port-is-open",level:3},{value:"<strong>Does M4 need static IP and is it possible to run multiple SenseCAP M4 Squares in the same external IP?</strong>",id:"does-m4-need-static-ip-and-is-it-possible-to-run-multiple-sensecap-m4-squares-in-the-same-external-ip",level:3},{value:"<strong>How to test the network bandwidth to meet the request?</strong>",id:"how-to-test-the-network-bandwidth-to-meet-the-request",level:3},{value:"<strong>What is the different between flux and flux tokens</strong>",id:"what-is-the-different-between-flux-and-flux-tokens",level:3},{value:"<strong>If I am a professional user, can I erase the original system and install other one?</strong>",id:"if-i-am-a-professional-user-can-i-erase-the-original-system-and-install-other-one",level:3},{value:"<strong>Do I need to choose the power plug myself?</strong>",id:"do-i-need-to-choose-the-power-plug-myself",level:3},{value:"<strong>Need an external antenna\uff1f</strong>",id:"need-an-external-antenna",level:3},{value:"<strong>Do I need to stake the 1000Flux?</strong>",id:"do-i-need-to-stake-the-1000flux",level:3},{value:"<strong>Can my M1 turn into FluxNode, and convert an 8GB Pi into a FluxNode?</strong>",id:"can-my-m1-turn-into-fluxnode-and-convert-an-8gb-pi-into-a-fluxnode",level:3}],d={toc:u},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"faq"},"FAQ"),(0,a.yg)("h3",{id:"whats-the-average-flux-chain-sync-time-for-the-node"},(0,a.yg)("strong",{parentName:"h3"},"What's the average flux chain sync time for the node?")),(0,a.yg)("p",null,"Download and load a 20GB snapshot file, and chain sync for about an hour to catch up with the latest block. The correct sync time depends on the device network, make sure the device has a good network."),(0,a.yg)("h3",{id:"does-sensecap-m4-square-support-nimbus-and-stratus"},(0,a.yg)("strong",{parentName:"h3"},"Does SenseCAP M4 Square support NIMBUS and STRATUS?")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"No"),",SenseCAP M4 Square only support CUMULUS. if need NIMBUS please click ",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/flux?utm_source=discord&utm_campaign=sensecapm4"},"here")),(0,a.yg)("h3",{id:"how-to-check-if-my-port-is-open"},(0,a.yg)("strong",{parentName:"h3"},"How to check if my port is open?")),(0,a.yg)("p",null,"SenseCAP M4 Square opens all ports required by Flux. SenseCAP Hotspot App provides UPNP detection. If the UPNP status is ON, the ports are open. If the status is OFF, please check your router's UPNP. For more detail,please visit ",(0,a.yg)("a",{parentName:"p",href:"https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup"},"Flux Node Network Setup")),(0,a.yg)("h3",{id:"does-m4-need-static-ip-and-is-it-possible-to-run-multiple-sensecap-m4-squares-in-the-same-external-ip"},(0,a.yg)("strong",{parentName:"h3"},"Does M4 need static IP and is it possible to run multiple SenseCAP M4 Squares in the same external IP?")),(0,a.yg)("p",null,"An external IP is required."),(0,a.yg)("p",null,"Max run 8 devices per IP, and make sure your router supports UPnP or port forward."),(0,a.yg)("h3",{id:"how-to-test-the-network-bandwidth-to-meet-the-request"},(0,a.yg)("strong",{parentName:"h3"},"How to test the network bandwidth to meet the request?")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.speedtest.net"},"https://www.speedtest.net")),(0,a.yg)("h3",{id:"what-is-the-different-between-flux-and-flux-tokens"},(0,a.yg)("strong",{parentName:"h3"},"What is the different between flux and flux tokens")),(0,a.yg)("p",null,'Flux tokens are Flux. Flux tokens are Parallel Assets that are paid on different blockchains, like ETH Flux, BSC Flux, etc. They are claimable in the Fusion app inside Zelcore. Select "Parallel Mining Claim" from the three dots top right. You will only see a claimable amount if your Flux-Token amount is higher than the fees required to claim.'),(0,a.yg)("h3",{id:"if-i-am-a-professional-user-can-i-erase-the-original-system-and-install-other-one"},(0,a.yg)("strong",{parentName:"h3"},"If I am a professional user, can I erase the original system and install other one?")),(0,a.yg)("p",null,"This is not a recommended operation. However, it is an x86-based device and you can reinstall any system you want, before it, please make sure that you know what you are doing."),(0,a.yg)("p",null,"But keep in mind that if erase the standard system, you will lose your warranty, and it's hard to revert back to the origin system."),(0,a.yg)("h3",{id:"do-i-need-to-choose-the-power-plug-myself"},(0,a.yg)("strong",{parentName:"h3"},"Do I need to choose the power plug myself?")),(0,a.yg)("p",null,"M4 Square includes a wide range input power adapter and has US/AU/UK/EU plug."),(0,a.yg)("h3",{id:"need-an-external-antenna"},(0,a.yg)("strong",{parentName:"h3"},"Need an external antenna\uff1f")),(0,a.yg)("p",null,"The wifi antenna is inside the device. SenseCAP M4 Square-Fluxnode does not require an external antenna."),(0,a.yg)("h3",{id:"do-i-need-to-stake-the-1000flux"},(0,a.yg)("strong",{parentName:"h3"},"Do I need to stake the 1000Flux?")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Yes"),", the 1000 Flux is not included in the hardware, so you need to stake it by yourself."),(0,a.yg)("h3",{id:"can-my-m1-turn-into-fluxnode-and-convert-an-8gb-pi-into-a-fluxnode"},(0,a.yg)("strong",{parentName:"h3"},"Can my M1 turn into FluxNode, and convert an 8GB Pi into a FluxNode?")),(0,a.yg)("p",null,"At present, Raspi 8GB is supported by Flux, but it requires an external SSD, and the stability cannot be guaranteed, which may affect the stable equipment running."))}h.isMDXComponent=!0}}]);