"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26159],{15680:(e,t,i)=>{i.d(t,{xA:()=>g,yg:()=>u});var o=i(96540);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)i=s[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)i=s[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},g=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,g=r(e,["components","mdxType","originalType","parentName"]),d=c(i),h=n,u=d["".concat(l,".").concat(h)]||d[h]||p[h]||s;return i?o.createElement(u,a(a({ref:t},g),{},{components:i})):o.createElement(u,a({ref:t},g))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,a=new Array(s);a[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:n,a[1]=r;for(var c=2;c<s;c++)a[c]=i[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}h.displayName="MDXCreateElement"},43939:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=i(9668),n=(i(96540),i(15680));const s={description:"Send message from Watcher & Node-RED to IFTTT",title:"Watcher & Node-RED to IFTTT",keywords:["watcher","IFTTT"],image:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/ifttthead.png",slug:"/watcher_node_red_to_ifttt",last_update:{date:"06/28/2024",author:"Allen"}},a="Watcher To IFTTT Quick Start",r={unversionedId:"Sensor/SenseCAP/SenseCAP_Watcher/Applications/node_red_integration/watcher_node_red_to_ifttt",id:"Sensor/SenseCAP/SenseCAP_Watcher/Applications/node_red_integration/watcher_node_red_to_ifttt",title:"Watcher & Node-RED to IFTTT",description:"Send message from Watcher & Node-RED to IFTTT",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Watcher/Applications/node_red_integration/watcher_node_red_to_ifttt.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Watcher/Applications/node_red_integration",slug:"/watcher_node_red_to_ifttt",permalink:"/watcher_node_red_to_ifttt",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Watcher/Applications/node_red_integration/watcher_node_red_to_ifttt.md",tags:[],version:"current",lastUpdatedBy:"Allen",lastUpdatedAt:1719532800,formattedLastUpdatedAt:"Jun 28, 2024",frontMatter:{description:"Send message from Watcher & Node-RED to IFTTT",title:"Watcher & Node-RED to IFTTT",keywords:["watcher","IFTTT"],image:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/ifttthead.png",slug:"/watcher_node_red_to_ifttt",last_update:{date:"06/28/2024",author:"Allen"}},sidebar:"ProductSidebar",previous:{title:"Watcher to Node-RED",permalink:"/watcher_to_node_red"},next:{title:"Watcher & Node-RED to kafka",permalink:"/watcher_node_red_to_kafka"}},l={},c=[{value:"Part 1. What is IFTTT (If This Then That)",id:"part-1-what-is-ifttt-if-this-then-that",level:2},{value:"Part 2. How to configure IFTTT",id:"part-2-how-to-configure-ifttt",level:2},{value:"Step 1. Configure Webhooks",id:"step-1-configure-webhooks",level:3},{value:"Step 2. Configure Email",id:"step-2-configure-email",level:3},{value:"Step 3. Finish Applet",id:"step-3-finish-applet",level:3},{value:"Part 3. Access IFTTT in Node-RED",id:"part-3-access-ifttt-in-node-red",level:2},{value:"Step 4. Watcher message send to Node-RED",id:"step-4-watcher-message-send-to-node-red",level:3},{value:"Step 5. Process message you want to send to IFTTT",id:"step-5-process-message-you-want-to-send-to-ifttt",level:3},{value:"Part 4. Send message via IFTTT",id:"part-4-send-message-via-ifttt",level:2},{value:"Step 6.Send a task to Watcher",id:"step-6send-a-task-to-watcher",level:3},{value:"Step 7.Check those message in IFTTT and Phone",id:"step-7check-those-message-in-ifttt-and-phone",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],g={toc:c},d="wrapper";function p(e){let{components:t,...i}=e;return(0,n.yg)(d,(0,o.A)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"watcher-to-ifttt-quick-start"},"Watcher To IFTTT Quick Start"),(0,n.yg)("div",{class:"table-center"},(0,n.yg)("iframe",{width:"800",height:"500",src:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/watcher_ifttt.mp4?autoplay=0",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," ")),(0,n.yg)("h2",{id:"part-1-what-is-ifttt-if-this-then-that"},"Part 1. What is ",(0,n.yg)("a",{parentName:"h2",href:"https://ifttt.com/"},"IFTTT (If This Then That)")),(0,n.yg)("p",null,' IFTTT is a web-based service that allows developers to create automations and integrations between various apps, devices, and services without complex programming. It enables users to define simple conditional statements called "applets" that trigger actions based on specific events. It provides a user-friendly interface and a vast library of pre-built applets, making it accessible for developers to create powerful automations and integrations efficiently.'),(0,n.yg)("h2",{id:"part-2-how-to-configure-ifttt"},"Part 2. How to configure IFTTT"),(0,n.yg)("h3",{id:"step-1-configure-webhooks"},"Step 1. Configure Webhooks"),(0,n.yg)("p",null,"First, we need to ",(0,n.yg)("strong",{parentName:"p"},"Create")," a IFTTT Applet."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/1.png",style:{width:1e3,height:"auto"}})),(0,n.yg)("p",null,"We need to ",(0,n.yg)("strong",{parentName:"p"},"Add")," a trigger."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/2.png",style:{width:500,height:"auto"}})),(0,n.yg)("p",null,"Search ",(0,n.yg)("strong",{parentName:"p"},"Webhooks")," and click that service."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/3.png",style:{width:500,height:"auto"}})),(0,n.yg)("p",null,"You will see a brief introduction of Webhooks trigger and we're going to select the second one."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/4.png",style:{width:500,height:"auto"}})),(0,n.yg)("p",null,"Give it a name of your trigger and create it."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/5.png",style:{width:500,height:"auto"}})),(0,n.yg)("h3",{id:"step-2-configure-email"},"Step 2. Configure Email"),(0,n.yg)("p",null,"When trigger fired, we need to take action. So here is what action you want to take."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/6.png",style:{width:500,height:"auto"}})),(0,n.yg)("p",null,"We are going to send a email via Gmail when trigger fired. Of course, there are millions of services you can use."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/7.png",style:{width:800,height:"auto"}})),(0,n.yg)("p",null,"Select Gmail account and fill in email address where you want to send."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/8.png",style:{width:600,height:"auto"}})),(0,n.yg)("p",null,"Customize ",(0,n.yg)("strong",{parentName:"p"},"Subject")," and ",(0,n.yg)("strong",{parentName:"p"},"Body")," as you want or by default."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/9.png",style:{width:600,height:"auto"}})),(0,n.yg)("p",null,"Click ",(0,n.yg)("strong",{parentName:"p"},"Continue")," button."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/11.png",style:{width:600,height:"auto"}})),(0,n.yg)("h3",{id:"step-3-finish-applet"},"Step 3. Finish Applet"),(0,n.yg)("p",null,"You can edit your ",(0,n.yg)("strong",{parentName:"p"},"Applet Title")," or let it by default, and then click ",(0,n.yg)("strong",{parentName:"p"},"Finish"),"."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/12.png",style:{width:600,height:"auto"}})),(0,n.yg)("p",null,"When you finish, you can save this link because we will use it later."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/13.png",style:{width:600,height:"auto"}})),(0,n.yg)("h2",{id:"part-3-access-ifttt-in-node-red"},"Part 3. Access IFTTT in Node-RED"),(0,n.yg)("h3",{id:"step-4-watcher-message-send-to-node-red"},"Step 4. Watcher message send to Node-RED"),(0,n.yg)("p",null,"Drag those module to workspace and connect them together. If you don't know how to send message from watcher to Node-RED yet, ",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/watcher_to_node_red/"},"please click here"),"."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/20.png",style:{width:1e3,height:"auto"}})),(0,n.yg)("h3",{id:"step-5-process-message-you-want-to-send-to-ifttt"},"Step 5. Process message you want to send to IFTTT"),(0,n.yg)("p",null,"Double click ",(0,n.yg)("strong",{parentName:"p"},"function")," module and write some code to get ",(0,n.yg)("strong",{parentName:"p"},"value1")," and ",(0,n.yg)("strong",{parentName:"p"},"value2"),", maybe ",(0,n.yg)("strong",{parentName:"p"},"value3"),". Those value will be sent to IFTTT."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},"var content = msg.payload.value[0].content;\nvar image_url = msg.payload.value[0].image_url;\n\nmsg.payload = {\n    value1: content,\n    value2: image_url,\n};\nreturn msg;\n")),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/21.png",style:{width:1e3,height:"auto"}})),(0,n.yg)("p",null,"Double click ",(0,n.yg)("strong",{parentName:"p"},"http request")," module, select ",(0,n.yg)("strong",{parentName:"p"},"POST")," method and ",(0,n.yg)("strong",{parentName:"p"},"paste URL")," you just copy from IFTTT."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/22.png",style:{width:1e3,height:"auto"}})),(0,n.yg)("p",null,"When finished, don't forget to ",(0,n.yg)("strong",{parentName:"p"},"Deploy")," it."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/23.png",style:{width:800,height:"auto"}})),(0,n.yg)("h2",{id:"part-4-send-message-via-ifttt"},"Part 4. Send message via IFTTT"),(0,n.yg)("h3",{id:"step-6send-a-task-to-watcher"},"Step 6.Send a task to Watcher"),(0,n.yg)("p",null,"First of all, you need to run a task in Watcher following the video below. If you want to know more ",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/getting_started_with_watcher_task/"},"please click here"),"."),(0,n.yg)("div",{class:"table-center"},(0,n.yg)("iframe",{width:"600",height:"338",src:"https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," ")),(0,n.yg)("h3",{id:"step-7check-those-message-in-ifttt-and-phone"},"Step 7.Check those message in IFTTT and Phone"),(0,n.yg)("p",null,"Open ",(0,n.yg)("strong",{parentName:"p"},"My Applets")," and click the applet you created before."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/14.png",style:{width:1e3,height:"auto"}})),(0,n.yg)("p",null,"Scroll down the page and click ",(0,n.yg)("strong",{parentName:"p"},"View activity")," button."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/15.png",style:{width:800,height:"auto"}})),(0,n.yg)("p",null,"Continue to scroll down and click this two button."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/16.png",style:{width:800,height:"auto"}})),(0,n.yg)("p",null,"And then you will see those message sent by Watcher as well as your email."),(0,n.yg)("div",{class:"table-center"},(0,n.yg)("table",{align:"center"},(0,n.yg)("tr",null,(0,n.yg)("th",null,"IFTTT message"),(0,n.yg)("th",null,"Email message")),(0,n.yg)("tr",null,(0,n.yg)("td",null,(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/16_1.png",style:{width:1e3,height:"auto"}}))),(0,n.yg)("td",null,(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/wm.png",style:{width:320,height:"auto"}})))))),(0,n.yg)("p",null,"Congratulations on completing the Watcher to IFTTT email demo! This is just the beginning of your journey with IFTTT. There are countless more applications and integrations waiting for you to discover. Keep exploring, learning, and automating to make your life more efficient and productive. The possibilities are endless with IFTTT, so have fun and happy experimenting!"),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);