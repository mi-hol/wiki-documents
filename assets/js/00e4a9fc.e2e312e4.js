"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[25671],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>h});var o=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},g=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=i,h=p["".concat(l,".").concat(u)]||p[u]||c[u]||a;return n?o.createElement(h,r(r({ref:t},g),{},{components:n})):o.createElement(h,r({ref:t},g))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(9668),i=(n(96540),n(15680));const a={description:"SenseCAP & Node-RED Usage",title:"SenseCAP & Node-RED Usage",keywords:["SenseCap"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/K1100_sensecap_node-red",last_update:{date:"1/13/2023",author:"shuxu hu"}},r="SenseCAP Console with Node-RED Quick Start",s={unversionedId:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_sensecap_node-red",id:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_sensecap_node-red",title:"SenseCAP & Node-RED Usage",description:"SenseCAP & Node-RED Usage",source:"@site/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_sensecap_node-red.md",sourceDirName:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services",slug:"/K1100_sensecap_node-red",permalink:"/K1100_sensecap_node-red",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_sensecap_node-red.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"SenseCAP & Node-RED Usage",title:"SenseCAP & Node-RED Usage",keywords:["SenseCap"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/K1100_sensecap_node-red",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Connect to TTN",permalink:"/Connecting-to-TTN"},next:{title:"SenseCAP & Node-RED to Microsoft Azure IoT Centra",permalink:"/K1100_SenseCAP_to_Azure_IoT_Central"}},l={},d=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Install Node.js\xae",id:"install-nodejs",level:2},{value:"Install Node-RED",id:"install-node-red",level:2},{value:'<span id="jump1">Get the SenseCAP API</span>',id:"get-the-sensecap-api",level:2},{value:"Create a HTTP Node",id:"create-a-http-node",level:2},{value:"http node",id:"http-node",level:3},{value:"http in node",id:"http-in-node",level:4},{value:"http response node",id:"http-response-node",level:4},{value:"template node",id:"template-node",level:4},{value:"Create a MQTT node",id:"create-a-mqtt-node",level:2},{value:"debug node",id:"debug-node",level:3},{value:"mqtt node",id:"mqtt-node",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],g={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,o.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"sensecap-console-with-node-red-quick-start"},"SenseCAP Console with Node-RED Quick Start"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"SenseCAP K1100 - The Sensor Prototype Kit")," represents Seeed Studio concentrating the essence of LoRa\xae communication on technology and edge intelligence products, for the easiest deploying and mastering of LoRa\xae and IoT applications."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/K1100/banner.png"})),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products"},(0,i.yg)("p",null,(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,i.yg)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,i.yg)("p",null,"With the SenseCAP ",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,i.yg)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,i.yg)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,i.yg)("tbody",null,(0,i.yg)("tr",null,(0,i.yg)("td",{colSpan:4,bgcolor:"#0e3c49",align:"center"},(0,i.yg)("font",{color:"white",size:4},(0,i.yg)("strong",null,"SenseCAP Industrial Sensor")))),(0,i.yg)("tr",null,(0,i.yg)("td",{bgcolor:"#0e3c49"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"}),(0,i.yg)("div",{align:"center"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,i.yg)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png"})))),(0,i.yg)("td",{bgcolor:"#0e3c49"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"}),(0,i.yg)("div",{align:"center"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,i.yg)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"})))),(0,i.yg)("td",{bgcolor:"#0e3c49"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"}),(0,i.yg)("div",{align:"center"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,i.yg)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png"})))),(0,i.yg)("td",{bgcolor:"#0e3c49"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"}),(0,i.yg)("div",{align:"center"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,i.yg)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"}))))),(0,i.yg)("tr",null,(0,i.yg)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,i.yg)("strong",null,"S2100 ",(0,i.yg)("br",null)," Data Logger"))),(0,i.yg)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,i.yg)("strong",null,"S2101 ",(0,i.yg)("br",null)," Air Temp & Humidity"))),(0,i.yg)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,i.yg)("strong",null,"S2102 ",(0,i.yg)("br",null)," Light"))),(0,i.yg)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,i.yg)("strong",null,"S2103 ",(0,i.yg)("br",null)," Air Temp & Humidity & CO2")))),(0,i.yg)("tr",null,(0,i.yg)("td",{bgcolor:"#0e3c49"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"}),(0,i.yg)("div",{align:"center"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,i.yg)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png"})))),(0,i.yg)("td",{bgcolor:"#0e3c49"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"}),(0,i.yg)("div",{align:"center"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,i.yg)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png"})))),(0,i.yg)("td",{bgcolor:"#0e3c49"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"}),(0,i.yg)("div",{align:"center"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,i.yg)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png"})))),(0,i.yg)("td",{bgcolor:"#0e3c49"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"}),(0,i.yg)("div",{align:"center"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,i.yg)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png"}))))),(0,i.yg)("tr",null,(0,i.yg)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,i.yg)("strong",null,"S2104 ",(0,i.yg)("br",null)," Soil Moisture & Temp"))),(0,i.yg)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,i.yg)("strong",null,"S2105 ",(0,i.yg)("br",null)," Soil Moisture & Temp & EC"))),(0,i.yg)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,i.yg)("strong",null,"S2110 ",(0,i.yg)("br",null)," LoRaWAN\xae Controller"))),(0,i.yg)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.yg)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,i.yg)("strong",null,"S2120 ",(0,i.yg)("br",null)," 8-in-1 Weather Station")))))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Node-RED")," is a programming tool for wiring together hardware devices, APIs and online services in new and interesting ways."),(0,i.yg)("p",null,"It provides a browser-based editor that makes it easy to wire together flows using the wide range of nodes in the palette that can be deployed to its runtime in a single-click."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/node-red.png"})),(0,i.yg)("p",null,"To make it easier for our users to connect data from the SenseCAP platform to various other Paas platforms for more in-depth data processing. We will do a series of tutorials for ",(0,i.yg)("strong",{parentName:"p"},"SenseCAP & Node-RED"),"."),(0,i.yg)("p",null,"This tutorial, the first in a series, will walk you through installing and using Node-red and calling the SenseCAP backend API to connect to Node-RED."),(0,i.yg)("h2",{id:"install-nodejs"},"Install Node.js\xae"),(0,i.yg)("p",null,"To install Node-RED locally you will need a ",(0,i.yg)("a",{parentName:"p",href:"https://nodered.org/docs/faq/node-versions"},"supported version of Node.js"),"."),(0,i.yg)("p",null,"Download the latest 14.x LTS version of Node.js from the official ",(0,i.yg)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js home page"),". It will offer you the best version for your system."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/k1100-nodered/1.png"})),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Run the downloaded MSI file. Installing Node.js requires local administrator rights; if you are not a local administrator, you will be prompted for an administrator password on install. Accept the defaults when installing. After installation completes, close any open command prompts and re-open to ensure new environment variables are picked up.")),(0,i.yg)("p",null,"When installing Node.js, if you are using a computer that has not had any programming environment installed, we would recommend that you check the box to install the necessary tools while installing Node.js, which will save you a lot of necessary trouble."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/k1100-nodered/2.png"})),(0,i.yg)("p",null,"The easiest way to install Node-RED is, using Node's package management tool, ",(0,i.yg)("strong",{parentName:"p"},"npm"),". However, we do not recommend installing Node-RED with npm 1.x, but rather upgrading it to the latest ",(0,i.yg)("strong",{parentName:"p"},"npm 2.x")," version."),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"On ",(0,i.yg)("strong",{parentName:"p"},"Windows")," (Requires Windows 10 and above), use the ",(0,i.yg)("strong",{parentName:"p"},"Win+R")," shortcut and type ",(0,i.yg)("inlineCode",{parentName:"p"},"cmd")," in the pop-up window to bring up the terminal and execute the following command."),(0,i.yg)("p",{parentName:"admonition"},"If you are using ",(0,i.yg)("strong",{parentName:"p"},"MacOS")," or ",(0,i.yg)("strong",{parentName:"p"},"Linux"),", please execute the following command in the terminal and add ",(0,i.yg)("inlineCode",{parentName:"p"},"sudo")," in front of the command for non-root users.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"npm install -g npm@2.x\n")),(0,i.yg)("p",null,"Once installed, open a command prompt and run the following command to ensure Node.js and npm are installed correctly."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"node --version && npm --version\n")),(0,i.yg)("p",null,"You should receive back output that looks similar to:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"> v16.17.0\n> 2.15.12\n")),(0,i.yg)("h2",{id:"install-node-red"},"Install Node-RED"),(0,i.yg)("p",null,"Installing Node-RED as a global module adds the command ",(0,i.yg)("inlineCode",{parentName:"p"},"node-red")," to your system path. Execute the following at the command prompt:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"npm install -g --unsafe-perm node-red\n")),(0,i.yg)("p",null,"If Node-RED is installed as a global npm package, then execute the command node-red directly:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"node-red\n")),(0,i.yg)("p",null,"This will output the Node-RED log to the terminal. You must keep the terminal open in order to keep Node-RED running."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/k1100-nodered/3.png"})),(0,i.yg)("p",null,"This will allow you to see the Node-RED editor on http://localhost:1880."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/4.png"})),(0,i.yg)("h2",{id:"get-the-sensecap-api"},(0,i.yg)("span",{id:"jump1"},"Get the SenseCAP API")),(0,i.yg)("p",null,"Before proceeding to this section, make sure you have bound your K1100 device in the SenseCAP console."),(0,i.yg)("p",null,"Log in to the ",(0,i.yg)("a",{parentName:"p",href:"https://sensecap.seeed.cc/portal/#/dashboard"},"SenseCAP console"),". In the drop-down bar to the right of the user name at the top of the dashboard, we can find the ",(0,i.yg)("strong",{parentName:"p"},"Organization Information"),", please select it."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/5.png"})),(0,i.yg)("p",null,"In the Organization Information page, you can see the ",(0,i.yg)("strong",{parentName:"p"},"Organization ID"),", which you can record first and we will use it in the later steps."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/6.png"})),(0,i.yg)("p",null,"Then, we also need to get the API key for SenseCAP. Please click on ",(0,i.yg)("strong",{parentName:"p"},"Security -> Access API keys")," on the left side of the dashboard. Then Create an Access Key."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/11.png"})),(0,i.yg)("p",null,"Click on the ",(0,i.yg)("strong",{parentName:"p"},"API ID")," you created and you will get her ",(0,i.yg)("strong",{parentName:"p"},"Access API keys"),", please write it down for now, we will use it in the later steps."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/7.png"})),(0,i.yg)("h2",{id:"create-a-http-node"},"Create a HTTP Node"),(0,i.yg)("p",null,"The editor window consists of four components:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The header at the top, containing the deploy button, main menu, and, if user authentication is enabled, the user menu."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("a",{parentName:"li",href:"https://nodered.org/docs/user-guide/editor/palette"},"palette")," on the left, containing the nodes available to use."),(0,i.yg)("li",{parentName:"ul"},"The main ",(0,i.yg)("a",{parentName:"li",href:"https://nodered.org/docs/user-guide/editor/workspace"},"workspace")," in the middle, where flows are created."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("a",{parentName:"li",href:"https://nodered.org/docs/user-guide/editor/sidebar"},"sidebar")," on the right.")),(0,i.yg)("p",null,"Follow the links above to learn more about each component."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/12.png"})),(0,i.yg)("p",null,"In this example, we will show you how to use MQTT nodes to display the sensor values received by SenseCAP. Before that, let's learn to understand the nodes that we will use more in the future."),(0,i.yg)("h3",{id:"http-node"},"http node"),(0,i.yg)("h4",{id:"http-in-node"},"http in node"),(0,i.yg)("p",null,"The ",(0,i.yg)("strong",{parentName:"p"},"http in")," node can be used to create web services."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/k1100-nodered/13.png"})),(0,i.yg)("p",null,"Drag the node to the workspace and double-click the node to access the node's configuration page."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/14.png"})),(0,i.yg)("p",null,"Here, we need to set a URL for the web service you have created so that you can access the web page you have created through the address ",(0,i.yg)("inlineCode",{parentName:"p"},"http://localhost:1880/<URL>"),"."),(0,i.yg)("h4",{id:"http-response-node"},"http response node"),(0,i.yg)("p",null,"The ",(0,i.yg)("strong",{parentName:"p"},"http response")," node sends the response back to the request received from the HTTP input node."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/k1100-nodered/15.png"})),(0,i.yg)("p",null,"Usually, we don't need to configure it separately, just drag it directly to the workbench for use."),(0,i.yg)("h4",{id:"template-node"},"template node"),(0,i.yg)("p",null,"The template node can set properties based on the provided template."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/k1100-nodered/17.png"})),(0,i.yg)("p",null,"We will use this node and use a simple HTML language to complete the configuration of our web page's display content."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/18.png"})),(0,i.yg)("p",null,'For example, we want to show "Hello World!".'),(0,i.yg)("div",null,"```html",(0,i.yg)("h1",null,"Hello World!"),"```"),(0,i.yg)("p",null,"Finally, we connect the ",(0,i.yg)("strong",{parentName:"p"},"http in")," to the ",(0,i.yg)("strong",{parentName:"p"},"template"),", and connect the ",(0,i.yg)("strong",{parentName:"p"},"template")," to the ",(0,i.yg)("strong",{parentName:"p"},"http response"),". Then click the ",(0,i.yg)("strong",{parentName:"p"},"deploy")," button in the upper right corner, so that a simple web page is created, which is the basic Node-RED operation step."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/19.png"})),(0,i.yg)("p",null,"In this example, we created a sensor data URL, so after deployment, we can enter ",(0,i.yg)("inlineCode",{parentName:"p"},"http://localhost:1880/sensor_data")," in the browser address bar to access the page we just created."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/k1100-nodered/20.png"})),(0,i.yg)("h2",{id:"create-a-mqtt-node"},"Create a MQTT node"),(0,i.yg)("p",null,"In this section, we will describe how to get the data information of SenseCAP through the MQTT node."),(0,i.yg)("h3",{id:"debug-node"},"debug node"),(0,i.yg)("p",null,"Displays selected message properties in the debug sidebar tab and optionally the runtime log. By default it displays msg.payload, but can be configured to display any property, the full message or the result of a JSONata expression."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/k1100-nodered/23.png"})),(0,i.yg)("h3",{id:"mqtt-node"},"mqtt node"),(0,i.yg)("p",null,"Connects to a MQTT broker and subscribes to messages from the specified topic."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/k1100-nodered/26.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 1.")," Add a new mqtt-broker node."),(0,i.yg)("p",null,"Drag out an ",(0,i.yg)("strong",{parentName:"p"},"mqtt in")," node, double-click it to enter the configuration page, then click the edit button after ",(0,i.yg)("strong",{parentName:"p"},"Add new mqtt-broker"),"."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/27.png"})),(0,i.yg)("p",null,"The configuration of mqtt-broker is required to be filled out as follows."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Server: openstream.api.sensecap.seeed.cc"),(0,i.yg)("li",{parentName:"ul"},"Port: 1883"),(0,i.yg)("li",{parentName:"ul"},"Protocol: MQTT V3.1.1"),(0,i.yg)("li",{parentName:"ul"},"Client ID: The format is ",(0,i.yg)("inlineCode",{parentName:"li"},"org-<Organization ID>-<Random ID>"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"<Orgnization ID>")," Your organization ID. We have obtained it in the ",(0,i.yg)("a",{parentName:"li",href:"#jump1"},"Get the SenseCAP API"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"<Random ID>")," uses your own randomly generated numbers or lowercase letters.")))),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/28.png"})),(0,i.yg)("p",null,"Then we fill in the ",(0,i.yg)("strong",{parentName:"p"},"Security")," options field with the Username and Password."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Username: The format is ",(0,i.yg)("inlineCode",{parentName:"li"},"org-<Organization ID>"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"<Orgnization ID>")," Your organization ID. We have obtained it in the ",(0,i.yg)("a",{parentName:"li",href:"#jump1"},"Get the SenseCAP API"),"."))),(0,i.yg)("li",{parentName:"ul"},"Password: Fill in the ",(0,i.yg)("strong",{parentName:"li"},"Access API keys")," that we obtained in the ",(0,i.yg)("a",{parentName:"li",href:"#jump1"},"Get the SenseCAP API"),".")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/29.png"})),(0,i.yg)("p",null,"Finally, click the ",(0,i.yg)("strong",{parentName:"p"},"Add")," button in the upper right corner to return to the configuration page of the ",(0,i.yg)("strong",{parentName:"p"},"mqtt in")," node."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Topic: Configuring a topic in a specific format determines the kind of device and data type to be received.")),(0,i.yg)("p",null,"Topic Format: ",(0,i.yg)("inlineCode",{parentName:"p"},"/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>")),(0,i.yg)("table",{align:"center"},(0,i.yg)("tbody",null,(0,i.yg)("tr",null,(0,i.yg)("td",{align:"center"},"OrgID"),(0,i.yg)("td",{align:"center"},"Your organization ID. We have obtained it in the ",(0,i.yg)("a",{href:"#jump1",target:"_blank"},"Get the SenseCAP API"),".")),(0,i.yg)("tr",null,(0,i.yg)("td",{align:"center"},"DevEUI"),(0,i.yg)("td",{align:"center"},"Unique identification of sensor devices. This information can be found on the sticker on the back of the Grove - Wio E5, as well as in the SenseCAP console device.")),(0,i.yg)("tr",null,(0,i.yg)("td",{align:"center"},"Channel"),(0,i.yg)("td",{align:"center"},"A physical interface on the device to which the sensor is connected. For the K1100 kit, the default value here is 1.")),(0,i.yg)("tr",null,(0,i.yg)("td",{align:"center"},"Reserved"),(0,i.yg)("td",{align:"center"},"Reserved Fields.")),(0,i.yg)("tr",null,(0,i.yg)("td",{align:"center"},"MeasurementID"),(0,i.yg)("td",{align:"center"},"Measured value ID. This ID can be found in the Measurement IDs section of the ",(0,i.yg)("a",{href:"https://sensecap-docs.seeed.cc/sensor_types_list.html",target:"_blank"},"SenseCAP documentation"))))),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"The content of this tutorial only applies to the K1100 kit, so please refer to the content inside the ",(0,i.yg)("strong",{parentName:"p"},"LoraWAN Dev Kit")," for the Measured value ID and do not call other ID.")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:650,src:"https://files.seeedstudio.com/wiki/k1100-nodered/30.png"})),(0,i.yg)("p",null,"For example, if I want to be able to get sensor data for the light values sent by Wio Terminal, then the Topic information I fill in should be:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"/device_sensor_data/424324324324324/2CF7F1C043200002/1/+/4193\n")),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"The ",(0,i.yg)("inlineCode",{parentName:"p"},"<OrgID>"),' field is required, "+" means this field has no filter and can match all. So, "/ + / + / + / +" means listen to all ',(0,i.yg)("inlineCode",{parentName:"p"},"<DeviceEUI>"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"<Channel>"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"<Reserved>"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"<MeasurementID>"),"."),(0,i.yg)("p",{parentName:"admonition"},"If you want to listen to all messages, then the Topic should be:"),(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre"},"    /device_sensor_data/424324324324324/+/+/+/+\n"))),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/31.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 2.")," Add debug node"),(0,i.yg)("p",null,"Then we might as well add debug nodes to it to make it easier to check if everything is working."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/34.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 3.")," Powers up the Wio Terminal and starts sending data to SenseCAP."),(0,i.yg)("p",null,"We click on the ",(0,i.yg)("strong",{parentName:"p"},"Deploy")," button and if everything is set up correctly you will be able to see the ",(0,i.yg)("strong",{parentName:"p"},"mqtt in")," node showing connected. Once the Wio Terminal starts powering up and working and starts sending data to SenseCAP. You will see the data already displayed in the debug window."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100-nodered/33.png"})),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);