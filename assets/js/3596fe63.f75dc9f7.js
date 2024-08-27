"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4760],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>c});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,c=d["".concat(s,".").concat(u)]||d[u]||y[u]||l;return n?a.createElement(c,r(r({ref:t},g),{},{components:n})):a.createElement(c,r({ref:t},g))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(9668),i=(n(96540),n(15680));const l={description:"SenseCAP M2 Multi-Platform Gateway LNS Configuration",title:"SenseCAP M2 Multi-Platform Gateway LNS Configuration",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"08/29/2023",author:"Jessie"}},r=void 0,o={unversionedId:"Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration",id:"Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration",title:"SenseCAP M2 Multi-Platform Gateway LNS Configuration",description:"SenseCAP M2 Multi-Platform Gateway LNS Configuration",source:"@site/docs/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration.md",sourceDirName:"Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform",slug:"/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration",permalink:"/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1693267200,formattedLastUpdatedAt:"Aug 29, 2023",frontMatter:{description:"SenseCAP M2 Multi-Platform Gateway LNS Configuration",title:"SenseCAP M2 Multi-Platform Gateway LNS Configuration",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"08/29/2023",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"SenseCAP M2 Multi-Platform Gateway Overview",permalink:"/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_Multi_Platform_Overview"},next:{title:"Quick Start",permalink:"/quick_start_with_M2_MP"}},s={},p=[{value:"Gateway Configuration",id:"gateway-configuration",level:2},{value:"Channel Plan Settings",id:"channel-plan-settings",level:3},{value:"Local Network Server Configuration",id:"local-network-server-configuration",level:3},{value:"ChirpStack GUI Configuration",id:"chirpstack-gui-configuration",level:2},{value:"Check the Regions",id:"check-the-regions",level:3},{value:"Add Device Profile",id:"add-device-profile",level:3},{value:"Add Gateway",id:"add-gateway",level:3},{value:"Add Device",id:"add-device",level:3},{value:"Check the device status",id:"check-the-device-status",level:3},{value:"Integrations",id:"integrations",level:2},{value:"MQTT",id:"mqtt",level:3},{value:"Topic",id:"topic",level:4},{value:"Payload",id:"payload",level:4},{value:"HTTP",id:"http",level:3},{value:"Downlink",id:"downlink",level:3}],g={toc:p},d="wrapper";function y(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"gateway-configuration"},"Gateway Configuration"),(0,i.yg)("p",null,"Configure the gateway via the Web UI, please check the ",(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/SenseCAP%20M2/Quick%20Start%20for%20SenseCAP%20M2%20Multi-Platfrom%20Gateway%20&%20Sensors.pdf"},"Quick Start")," to log into Luci."),(0,i.yg)("h3",{id:"channel-plan-settings"},"Channel Plan Settings"),(0,i.yg)("p",null,"Navigate to\xa0",(0,i.yg)("inlineCode",{parentName:"p"},"LoRa")," >\xa0",(0,i.yg)("inlineCode",{parentName:"p"},"Channel Plan")," "),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP3.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",null,"Select the Region and Frequency plan."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP4.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",null,"After setting, click ",(0,i.yg)("inlineCode",{parentName:"p"},"Save&Apply")),(0,i.yg)("h3",{id:"local-network-server-configuration"},"Local Network Server Configuration"),(0,i.yg)("p",null,"Navigate to\xa0",(0,i.yg)("inlineCode",{parentName:"p"},"LoRa")," >\xa0",(0,i.yg)("inlineCode",{parentName:"p"},"LoRa Network")),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP1.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",null,"Set Mode to ",(0,i.yg)("inlineCode",{parentName:"p"},"Local Network Server"),", add your MQTT info (Broker Host/Port/User/Password), other parameters can keep the default value."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP2.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",null,"Click ",(0,i.yg)("inlineCode",{parentName:"p"},"Save&Apply")," to apply your settings."),(0,i.yg)("admonition",{title:"Note",type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"It will take about 1 min to start the process , then you can access the GUI configuration.")),(0,i.yg)("h2",{id:"chirpstack-gui-configuration"},"ChirpStack GUI Configuration"),(0,i.yg)("p",null,"Login to the ChirpStack GUI via ",(0,i.yg)("inlineCode",{parentName:"p"},"http://localhost:8080"),"."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",null,"The default account and password: ",(0,i.yg)("inlineCode",{parentName:"p"},"admin"),"."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP5.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",null,"Then you will see the dashboard page."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP6.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("h3",{id:"check-the-regions"},"Check the Regions"),(0,i.yg)("p",null,"Navigate to ",(0,i.yg)("inlineCode",{parentName:"p"},"Network Server")," > ",(0,i.yg)("inlineCode",{parentName:"p"},"Regions"),"."),(0,i.yg)("p",null,"There should be a Region ID, click it and confirm the info, it should be same as your settings in the previous step."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP7.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP8.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("h3",{id:"add-device-profile"},"Add Device Profile"),(0,i.yg)("p",null,"Navigate to ",(0,i.yg)("inlineCode",{parentName:"p"},"Tenant")," > ",(0,i.yg)("inlineCode",{parentName:"p"},"Device Profiles"),", and click ",(0,i.yg)("inlineCode",{parentName:"p"},"Add Profile"),"."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP9.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"MAC version"),": LoRaWAN 1.0.3"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Regional parameters reversion"),": A"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"ADR algorithm"),": Default ADR algorithm(LoRa only)"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Expected uplink interval"),": Customize, default 3600s"),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP10.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",null,"Navigate to ",(0,i.yg)("inlineCode",{parentName:"p"},"Codec"),", and select ",(0,i.yg)("inlineCode",{parentName:"p"},"JavaScript functions"),", copy the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/SenseCAP-Decoder"},"SenseCAP Decoder for TTN")," and submit it."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/decode.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("h3",{id:"add-gateway"},"Add Gateway"),(0,i.yg)("p",null,"Navigate to ",(0,i.yg)("inlineCode",{parentName:"p"},"Gateway"),", and click ",(0,i.yg)("inlineCode",{parentName:"p"},"Add Gateway"),"."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP11.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",null,"Define the Name and Gateway ID(you can click  to randomly generate the ID), then submit it."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP13.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("h3",{id:"add-device"},"Add Device"),(0,i.yg)("p",null,"Navigate to ",(0,i.yg)("inlineCode",{parentName:"p"},"Tenant")," > ",(0,i.yg)("inlineCode",{parentName:"p"},"Application"),", and click Add ",(0,i.yg)("inlineCode",{parentName:"p"},"Application"),"."),(0,i.yg)("p",null,"Name your application and submit it."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/add-applications.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",null,"Navigate to your application, and click ",(0,i.yg)("inlineCode",{parentName:"p"},"Add device"),"."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP14.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",null,"Paste your device EUI and select the device profile we added before, then submit it."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP15.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",null,"Paste the Application key and click submit."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP16.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("h3",{id:"check-the-device-status"},"Check the device status"),(0,i.yg)("p",null,"Check the ",(0,i.yg)("inlineCode",{parentName:"p"},"Events")," of your device, you will get the join packet when the device joins the network."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP17.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",null,"You can also check the packet details."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP18.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("h2",{id:"integrations"},"Integrations"),(0,i.yg)("p",null,"This chapter is for cloud service development, the following guideline is for reference."),(0,i.yg)("h3",{id:"mqtt"},"MQTT"),(0,i.yg)("h4",{id:"topic"},"Topic"),(0,i.yg)("p",null,"The MQTT integration exposes all events as documented by Event types. "),(0,i.yg)("p",null,"The default event topic is: "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"application/APPLICATION\\_ID/device/DEV\\_EUI/event/EVENT\n")),(0,i.yg)("p",null,"Check ",(0,i.yg)("a",{parentName:"p",href:"https://www.chirpstack.io/docs/chirpstack/integrations/events.html"},"Event Types")," for more details."),(0,i.yg)("p",null,"You can find the Application id on your application tab:"),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP19.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Event types"))),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"up"),(0,i.yg)("th",{parentName:"tr",align:null},"Uplink event"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"status"),(0,i.yg)("td",{parentName:"tr",align:null},"Margin and battery status")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"join"),(0,i.yg)("td",{parentName:"tr",align:null},"Device join event")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ack"),(0,i.yg)("td",{parentName:"tr",align:null},"Confirmed downlink (n)ack")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"txack"),(0,i.yg)("td",{parentName:"tr",align:null},"Downlink transmission ack")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"log"),(0,i.yg)("td",{parentName:"tr",align:null},"Log (or error) event")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"location"),(0,i.yg)("td",{parentName:"tr",align:null},"Location event")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"integration"),(0,i.yg)("td",{parentName:"tr",align:null},"Integration event")))),(0,i.yg)("admonition",{title:"Note",type:"info"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("inlineCode",{parentName:"p"},"+")," means to receive all messages")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Example"),": "),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"To receive uplink messages from all devices under a certain gateway:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"gateway/<GATEWAY\\_EUI>/device/+/event/up\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"To receive all messages from all devices under the application:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"application/+/device/+/event/+\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"To receive all device messages from all gateways:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"gateway/+/device/+/event/+\n")),(0,i.yg)("p",null,"You can check the ",(0,i.yg)("inlineCode",{parentName:"p"},"gatewayid")," to distinguish the gateways."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/gateway-id.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("h4",{id:"payload"},"Payload"),(0,i.yg)("p",null,"When the object.valid is true, means the data analysis is successful, then you can traverse the object.messages, and extract the data type you need."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP20.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",null,"1) Up event for SenseCAP LoRaWAN S210X Sensors payload example description:"),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP21.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"upload\\_battery"),": Battery"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"upload\\_interval"),": upload interval, unit: Second"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"upload\\_version"),": Hardware/Firmware Version"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"report\\_telemetry"),": Measurement value")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"measurementId")," in the \u2018report","_","telemetry\u2019 message please check ",(0,i.yg)("a",{parentName:"p",href:"https://sensecap-statics.seeed.cn/hardware/lorapp/httpserver/src/constants/sensor-name-lang-dictionary.json"},"SenseCAP Measurement ID")," for more details."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP22.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",null,"1) Up event for SenseCAP Data logger payload example description:"),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP23.png",alt:"pir",width:600,height:"auto"})),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"measurementId")," in the \u2018report","_","telemetry\u2019 message please check ",(0,i.yg)("a",{parentName:"p",href:"https://sensecap-statics.seeed.cn/hardware/lorapp/httpserver/src/constants/sensor-name-lang-dictionary.json"},"SenseCAP Measurement ID")," for more details."),(0,i.yg)("h3",{id:"http"},"HTTP"),(0,i.yg)("p",null,"Click ",(0,i.yg)("inlineCode",{parentName:"p"},"+")," in the HTTP tab to add a new HTTP integration."),(0,i.yg)("p",null,"LNS will send messages as POST to the configured URL. "),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP24.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",null,"Submit your URL info."),(0,i.yg)("admonition",{title:"Note",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Support http only, not https.")),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP25.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",null,"The HTTP integration will make\xa0POST\xa0requests to the configured event endpoint or endpoints (multiple URLs can be configured, comma separated). The\xa0event\xa0URL query parameter indicates the type of the event."),(0,i.yg)("p",null,"The HTTP integration exposes all events as documented by ",(0,i.yg)("a",{parentName:"p",href:"https://www.chirpstack.io/docs/chirpstack/integrations/events.html"},"Event Type"),"."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Example"),":"),(0,i.yg)("p",null,"(main.py) "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'from http.server import HTTPServer, BaseHTTPRequestHandler \n\nfrom urllib.parse import urlparse, parse\\_qs \n\nfrom chirpstack\\_api import integration \n\nfrom google.protobuf.json\\_format import Parse \n\nclass Handler(BaseHTTPRequestHandler): \n\n\\# True - JSON marshaler \n\n\\# False - Protobuf marshaler (binary) \n\njson = False \n\ndef do\\_POST(self): \n\nself.send\\_response(200) \n\nself.end\\_headers() \n\nquery\\_args = parse\\_qs(urlparse(self.path).query) \n\ncontent\\_len = int(self.headers.get(\'Content-Length\', 0)) \n\nbody = self.rfile.read(content\\_len) \n\nif query\\_args["event"][0] == "up": \n\nself.up(body) \n\nelif query\\_args["event"][0] == "join": \n\nself.join(body) \n\nelse:\n\nprint("handler for event %s is not implemented" % query\\_args["event"][0]) \n\ndef up(self, body): \n\nup = self.unmarshal(body, integration.UplinkEvent()) \n\nprint("Uplink received from: %s with payload: %s" % (up.device\\_info.dev\\_eui, up.data.hex())) \n\ndef join(self, body): \n\njoin = self.unmarshal(body, integration.JoinEvent()) \n\nprint("Device: %s joined with DevAddr: %s" % (join.device\\_info.dev\\_eui, join.dev\\_addr)) \n\ndef unmarshal(self, body, pl): \n\nif self.json: \n\nreturn Parse(body, pl) \n\npl.ParseFromString(body) \n\nreturn pl \n\nhttpd = HTTPServer((\'\', 8090), Handler) \n\nhttpd.serve\\_forever() \n')),(0,i.yg)("h3",{id:"downlink"},"Downlink"),(0,i.yg)("p",null,"Downlink message: "),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"It\u2019s recommended to mark the downlink as retained, Then the command will not be executed repeatedly.")),(0,i.yg)("p",null,"The default Topic is\uff1a",(0,i.yg)("inlineCode",{parentName:"p"},"application/APPLICATION\\_ID/device/DEV\\_EUI/command/down")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"command"),": Please check the downlink command in ",(0,i.yg)("strong",{parentName:"p"},"Device User Manual")," for more details."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Topic"),(0,i.yg)("th",{parentName:"tr",align:"left"},"application/APPLICATION","_","ID/device/DEV","_","EUI/command/down"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"devEUI"),(0,i.yg)("td",{parentName:"tr",align:"left"},"Device EUI")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"confirmed"),(0,i.yg)("td",{parentName:"tr",align:"left"},"true/false(whether the payload must be sent as confirmed data down or not)")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"fPort"),(0,i.yg)("td",{parentName:"tr",align:"left"},"FPort to use (must be > 0)")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"data"),(0,i.yg)("td",{parentName:"tr",align:"left"},"base64 encoded data (plaintext, will be encrypted by ChirpStack)")))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Example"),":"),(0,i.yg)("p",null,"1) Reboot SenseCAP S210x LoRaWAN Sensors:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Topic"),":"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"application/dbf6\\*\\*\\*\\*6c92/device/2CF7F1C2\\*\\*\\*/command/down"),"\n",(0,i.yg)("strong",{parentName:"p"},"Json\uff1a")," "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'{\n\n"devEui":"2CF7F1C2\\*\\*\\*", \n\n"confirmed":true, \n\n"fPort":2, \n\n"data":"AMgAAAAAACsm" \n\n} \n')),(0,i.yg)("p",null,"1) Set the upload interval of the SenseCAP S210x LoRaWAN Sensors to 1min :"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Topic"),"\uff1a"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"application/dbf6\\*\\*\\*\\*6c92/device/2CF7F1C2\\*\\*\\*/command/down")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Json"),"\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'{\n\n"devEui":"2CF7F1C2\\*\\*\\*", \n\n"confirmed":true, \n\n"fPort":2, \n\n"data":"AIkAESIBAJBQ\n\n" \n} \n')))}y.isMDXComponent=!0}}]);