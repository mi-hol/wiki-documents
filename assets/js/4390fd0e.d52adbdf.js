"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[73484],{15680:(e,i,l)=>{l.d(i,{xA:()=>o,yg:()=>h});var t=l(96540);function r(e,i,l){return i in e?Object.defineProperty(e,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[i]=l,e}function a(e,i){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),l.push.apply(l,t)}return l}function n(e){for(var i=1;i<arguments.length;i++){var l=null!=arguments[i]?arguments[i]:{};i%2?a(Object(l),!0).forEach((function(i){r(e,i,l[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(l,i))}))}return e}function y(e,i){if(null==e)return{};var l,t,r=function(e,i){if(null==e)return{};var l,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)l=a[t],i.indexOf(l)>=0||(r[l]=e[l]);return r}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)l=a[t],i.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var w=t.createContext({}),k=function(e){var i=t.useContext(w),l=i;return e&&(l="function"==typeof e?e(i):n(n({},i),e)),l},o=function(e){var i=k(e.components);return t.createElement(w.Provider,{value:i},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},g=t.forwardRef((function(e,i){var l=e.components,r=e.mdxType,a=e.originalType,w=e.parentName,o=y(e,["components","mdxType","originalType","parentName"]),d=k(l),g=r,h=d["".concat(w,".").concat(g)]||d[g]||p[g]||a;return l?t.createElement(h,n(n({ref:i},o),{},{components:l})):t.createElement(h,n({ref:i},o))}));function h(e,i){var l=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var a=l.length,n=new Array(a);n[0]=g;var y={};for(var w in i)hasOwnProperty.call(i,w)&&(y[w]=i[w]);y.originalType=e,y[d]="string"==typeof e?e:r,n[1]=y;for(var k=2;k<a;k++)n[k]=l[k];return t.createElement.apply(null,n)}return t.createElement.apply(null,l)}g.displayName="MDXCreateElement"},78406:(e,i,l)=>{l.r(i),l.d(i,{assets:()=>w,contentTitle:()=>n,default:()=>p,frontMatter:()=>a,metadata:()=>y,toc:()=>k});var t=l(9668),r=(l(96540),l(15680));const a={description:"Weekly Wiki",title:"Weekly Wiki",keywords:["weeely wiki"],image:"https://files.seeedstudio.com/wiki/IndexWiki/logo_image.jpg",slug:"/weekly_wiki",last_update:{date:"10/28/2024",author:"Frank"}},n=void 0,y={unversionedId:"weekly_wiki",id:"weekly_wiki",title:"Weekly Wiki",description:"Weekly Wiki",source:"@site/docs/weekly_wiki.md",sourceDirName:".",slug:"/weekly_wiki",permalink:"/weekly_wiki",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/weekly_wiki.md",tags:[],version:"current",lastUpdatedBy:"Frank",lastUpdatedAt:1730073600,formattedLastUpdatedAt:"Oct 28, 2024",frontMatter:{description:"Weekly Wiki",title:"Weekly Wiki",keywords:["weeely wiki"],image:"https://files.seeedstudio.com/wiki/IndexWiki/logo_image.jpg",slug:"/weekly_wiki",last_update:{date:"10/28/2024",author:"Frank"}},sidebar:"ProductSidebar",previous:{title:"Getting Started with Seeed Studio Wiki Platform",permalink:"/Getting_Started"},next:{title:"Sensors and Sensing",permalink:"/Sensor_Network"}},w={},k=[{value:"Greetings",id:"greetings",level:2},{value:"Latest Wiki Launched",id:"latest-wiki-launched",level:2},{value:"Enclosure Installation Guide with ReSpeaker Lite",id:"enclosure-installation-guide-with-respeaker-lite",level:3},{value:"reComputer R1000 V1.1 Product Change Description",id:"recomputer-r1000-v11-product-change-description",level:3},{value:"Configuring Wio-SX1262 with XIAO ESP32S3 kit as LoRaWAN Sensor Node",id:"configuring-wio-sx1262-with-xiao-esp32s3-kit-as-lorawan-sensor-node",level:3},{value:"Existing Wiki Updated",id:"existing-wiki-updated",level:2},{value:"Getting Started with reServer Industrial",id:"getting-started-with-reserver-industrial",level:3},{value:"The Efforts of Contributor",id:"the-efforts-of-contributor",level:2},{value:"Past Weekly wiki",id:"past-weekly-wiki",level:2}],o={toc:k},d="wrapper";function p(e){let{components:i,...l}=e;return(0,r.yg)(d,(0,t.A)({},o,l,{components:i,mdxType:"MDXLayout"}),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/IndexWiki/logo.png"})),(0,r.yg)("h2",{id:"greetings"},"Greetings"),(0,r.yg)("p",null,"This is Frank in Seeed Studio and welcome to the Seeed Studio weekly wiki! Each Monday, I will introduce you our latest wiki, including the ones related to our new products, the interesting projects published by Seeed Studio, and the tutorials, introductions, etc... You name it."),(0,r.yg)("p",null,'\u2728 For each week, when a collaborator contributes a project or fixes something important, we put the stars at the end of title of "Weekly Wiki" for more people be able to see their efforts\ud83d\udc4d.'),(0,r.yg)("p",null,"Today is October 28th, and a brand new week has begun! Check out what Seeed Studio did last week!"),(0,r.yg)("h2",{id:"latest-wiki-launched"},"Latest Wiki Launched"),(0,r.yg)("h3",{id:"enclosure-installation-guide-with-respeaker-lite"},(0,r.yg)("a",{parentName:"h3",href:"https://wiki.seeedstudio.com/respeaker_enclosure/"},"Enclosure Installation Guide with ReSpeaker Lite")),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/thingsboard.gif",style:{width:600}})),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://thingsboard.io/"},"ThingsBoard Community Edition"),", an open-source platform, offers powerful features for creating interactive dashboards that stand out among other open-source IoT solutions. With a variety of graphical tools, ThingsBoard allows users to easily visualize and monitor data collected from IoT devices, making it ideal for managing and analyzing real-time data. Whether for industrial automation, smart city projects, or environmental monitoring, ThingsBoard provides a versatile and user-friendly way to track and respond to IoT data insights."),(0,r.yg)("h3",{id:"recomputer-r1000-v11-product-change-description"},(0,r.yg)("a",{parentName:"h3",href:"https://wiki.seeedstudio.com/recomputer_r1000_v1_1_description/"},"reComputer R1000 V1.1 Product Change Description")),(0,r.yg)("p",null,"We found that some users have trouble with DE pin control when using the modbus function of reComputer R1000 V1.0. For better user experience, we modified the pin assignment to make RS485 more usable.And made some adjustments to the overall product."),(0,r.yg)("h3",{id:"configuring-wio-sx1262-with-xiao-esp32s3-kit-as-lorawan-sensor-node"},(0,r.yg)("a",{parentName:"h3",href:"https://wiki.seeedstudio.com/wio_sx1262_xiao_esp32s3_for_lora_sensor_node/"},"Configuring Wio-SX1262 with XIAO ESP32S3 kit as LoRaWAN Sensor Node")),(0,r.yg)("p",null,"This wiki provides a step-by-step guide on configuring the Wio-SX1262 with XIAO ESP32S3 to act as a LoRaWAN sensor node, connecting a DHT20 temperature and humidity sensor, adding an M2 LoRaWAN gateway, and sending data to the The Things Network LNS platform. It also covers the configuration of a format decoder."),(0,r.yg)("h2",{id:"existing-wiki-updated"},"Existing Wiki Updated"),(0,r.yg)("h3",{id:"getting-started-with-reserver-industrial"},(0,r.yg)("a",{parentName:"h3",href:"https://wiki.seeedstudio.com/reServer_Industrial_Getting_Started/"},"Getting Started with reServer Industrial")),(0,r.yg)("p",null,"We provided an ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reServer_Industrial_Getting_Started/#binding-physical-network-ports-to-eth-numbers"},"operational demonstration")," for reServer on binding physical network ports to eth numbers."),(0,r.yg)("h2",{id:"the-efforts-of-contributor"},"The Efforts of Contributor"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Check on ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6"},"GitHub")," for more information."),(0,r.yg)("li",{parentName:"ul"},"We will be really appreciate if you can ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35179519"},"share your ideas")," with us!")),(0,r.yg)("h2",{id:"past-weekly-wiki"},"Past Weekly wiki"),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Click here"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki227"},"weekly wiki on 2.27th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki306"},"weekly wiki on 3.06th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki313"},"weekly wiki on 3.13th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki320"},"weekly wiki on 3.20th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki327"},"weekly wiki on 3.27th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki403"},"weekly wiki on 4.03rd")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki410"},"weekly wiki on 4.10th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki417"},"weekly wiki on 4.17th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki424"},"weekly wiki on 4.24th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki515"},"weekly wiki on 5.15th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki522"},"weekly wiki on 5.22nd")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki529"},"weekly wiki on 5.29th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki605"},"weekly wiki on 6.05th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki612"},"weekly wiki on 6.12th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki619"},"weekly wiki on 6.19th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki703"},"weekly wiki on 7.03th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki710"},"weekly wiki on 7.10th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki717"},"weekly wiki on 7.17th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki724"},"weekly wiki on 7.24th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki731"},"weekly wiki on 7.31th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki807"},"weekly wiki on 8.07th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki821"},"weekly wiki on 8.21st")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki828"},"weekly wiki on 8.28th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki911"},"weekly wiki on 9.11st")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki918"},"weekly wiki on 9.18th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki925"},"weekly wiki on 9.25th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1009"},"weekly wiki on 10.9th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1016"},"weekly wiki on 10.16th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1023"},"weekly wiki on 10.23th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1030"},"weekly wiki on 10.30th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1106"},"weekly wiki on 11.06th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1113"},"weekly wiki on 11.13th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1120"},"weekly wiki on 11.20th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1127"},"weekly wiki on 11.27th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1204"},"weekly wiki on 12.04th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1211"},"weekly wiki on 12.11th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1218"},"weekly wiki on 12.18th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1225"},"weekly wiki on 12.25th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240108"},"weekly wiki on 2024.1.08th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240115"},"weekly wiki on 2024.1.15th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240122"},"weekly wiki on 2024.1.22nd")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240129"},"weekly wiki on 2024.1.29th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240219"},"weekly wiki on 2024.2.19th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240226"},"weekly wiki on 2024.2.26th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240304"},"weekly wiki on 2024.3.04th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240311"},"weekly wiki on 2024.3.11th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240318"},"weekly wiki on 2024.3.18th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240325"},"weekly wiki on 2024.3.25th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240401"},"weekly wiki on 2024.4.01st")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240408"},"weekly wiki on 2024.4.08th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240415"},"weekly wiki on 2024.4.15th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240422"},"weekly wiki on 2024.4.22nd")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240429"},"weekly wiki on 2024.4.29th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240506"},"weekly wiki on 2024.5.06th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240513"},"weekly wiki on 2024.5.13th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240520"},"weekly wiki on 2024.5.20th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240527"},"weekly wiki on 2024.5.27th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240603"},"weekly wiki on 2024.6.03rd")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240610"},"weekly wiki on 2024.6.10th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240617"},"weekly wiki on 2024.6.17th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240624"},"weekly wiki on 2024.6.24th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240701"},"weekly wiki on 2024.7.01st")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240708"},"weekly wiki on 2024.7.08th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240716"},"weekly wiki on 2024.7.16th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240722"},"weekly wiki on 2024.7.22th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240729"},"weekly wiki on 2024.7.29th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240805"},"weekly wiki on 2024.8.05th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240812"},"weekly wiki on 2024.8.12th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240819"},"weekly wiki on 2024.8.19th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240826"},"weekly wiki on 2024.8.26th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240902"},"weekly wiki on 2024.9.02nd")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240909"},"weekly wiki on 2024.9.09th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240918"},"weekly wiki on 2024.9.16th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240923"},"weekly wiki on 2024.9.23th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240930"},"weekly wiki on 2024.9.30th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki241007"},"weekly wiki on 2024.10.07th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki241014"},"weekly wiki on 2024.10.14th")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki241021"},"weekly wiki on 2024.10.21th")))))}p.isMDXComponent=!0}}]);