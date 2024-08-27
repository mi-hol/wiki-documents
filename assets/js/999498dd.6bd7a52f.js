"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[40521],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>y});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),g=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=g(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=g(t),c=r,y=p["".concat(l,".").concat(c)]||p[c]||u[c]||o;return t?n.createElement(y,i(i({ref:a},d),{},{components:t})):n.createElement(y,i({ref:a},d))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var g=2;g<o;g++)i[g]=t[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},38414:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var n=t(9668),r=(t(96540),t(15680));const o={description:"In this tutorial, we will guide you through installing Grafana on a Raspberry Pi-powered EdgeBox RPi 200. We will also show you how to connect Grafana to an existing InfluxDB database and create a detailed, illustrative dashboard",title:"Edge Box RPi 200 with Grafana",keywords:["Edge Box Rpi 200","IIoT","Grafana","Dash board","SCADA"],image:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg",slug:"/edgebox_rpi_200_grafana",last_update:{date:"6/24/2024",author:"Kasun Thushara"}},i=void 0,s={unversionedId:"Edge/Raspberry_Pi_Devices/Edge_Box_RPi_200/Node_Red/Edge_box_rpi_200_grafana",id:"Edge/Raspberry_Pi_Devices/Edge_Box_RPi_200/Node_Red/Edge_box_rpi_200_grafana",title:"Edge Box RPi 200 with Grafana",description:"In this tutorial, we will guide you through installing Grafana on a Raspberry Pi-powered EdgeBox RPi 200. We will also show you how to connect Grafana to an existing InfluxDB database and create a detailed, illustrative dashboard",source:"@site/docs/Edge/Raspberry_Pi_Devices/Edge_Box_RPi_200/Node_Red/Edge_box_rpi_200_grafana.md",sourceDirName:"Edge/Raspberry_Pi_Devices/Edge_Box_RPi_200/Node_Red",slug:"/edgebox_rpi_200_grafana",permalink:"/edgebox_rpi_200_grafana",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/Edge_Box_RPi_200/Node_Red/Edge_box_rpi_200_grafana.md",tags:[],version:"current",lastUpdatedBy:"Kasun Thushara",lastUpdatedAt:1719187200,formattedLastUpdatedAt:"Jun 24, 2024",frontMatter:{description:"In this tutorial, we will guide you through installing Grafana on a Raspberry Pi-powered EdgeBox RPi 200. We will also show you how to connect Grafana to an existing InfluxDB database and create a detailed, illustrative dashboard",title:"Edge Box RPi 200 with Grafana",keywords:["Edge Box Rpi 200","IIoT","Grafana","Dash board","SCADA"],image:"https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg",slug:"/edgebox_rpi_200_grafana",last_update:{date:"6/24/2024",author:"Kasun Thushara"}},sidebar:"ProductSidebar",previous:{title:"Edge Box RPi 200 with Node Red and InfluxDB",permalink:"/edge_box_rpi_200_node_red_influxdb"},next:{title:"Getting Started with Ignition Edge",permalink:"/Edgebox-rpi-200-ignition-edge"}},l={},g=[{value:"Introduction",id:"introduction",level:2},{value:"Hardware Preparation",id:"hardware-preparation",level:3},{value:"Software Preparation",id:"software-preparation",level:3},{value:"Adding Grafana Repository",id:"adding-grafana-repository",level:2},{value:"Installing Grafana on EdgeBox",id:"installing-grafana-on-edgebox",level:2},{value:"Create Your First Dashboard",id:"create-your-first-dashboard",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:g},p="wrapper";function u(e){let{components:a,...t}=e;return(0,r.yg)(p,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://grafana.com/oss/grafana/"},"Grafana")," is an open-source visualization and analytics software that enables you to query, visualize, alert on, and explore your metrics, logs, and traces from any storage location. It offers tools to transform your time-series database (TSDB) data into insightful graphs and visualizations. As a powerful monitoring solution, Grafana helps in making informed decisions, enhancing system performance, and streamlining troubleshooting. In this wiki, we will guide you through the installation of Grafana on a Raspberry Pi-powered EdgeBox RPi 200, connect it to an existing InfluxDB database, and create an illustrative dashboard."),(0,r.yg)("h3",{id:"hardware-preparation"},"Hardware Preparation"),(0,r.yg)("div",{class:"table-center"},(0,r.yg)("table",{class:"table-nobg"},(0,r.yg)("tr",{class:"table-trnobg"},(0,r.yg)("th",{class:"table-trnobg"},"Edge Box RPi 200")),(0,r.yg)("tr",{class:"table-trnobg"}),(0,r.yg)("tr",{class:"table-trnobg"},(0,r.yg)("td",{class:"table-trnobg"},(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg",style:{width:300,height:"auto"}})))),(0,r.yg)("tr",{class:"table-trnobg"}),(0,r.yg)("tr",{class:"table-trnobg"},(0,r.yg)("td",{class:"table-trnobg"},(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,r.yg)("h3",{id:"software-preparation"},"Software Preparation"),(0,r.yg)("p",null,"It is recommended to refer to a previous tutorial on ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/edge_box_rpi_200_node_red_influxdb/"},"How to create the InfluxDB database"),". In this tutorial, we will use an existing InfluxDB connection for the setup."),(0,r.yg)("h2",{id:"adding-grafana-repository"},"Adding Grafana Repository"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Ensure all currently installed packages on your Raspberry Pi are up to date"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Add the Grafana APT Key:")),(0,r.yg)("p",null,"To add the Grafana APT key to your Raspberry Pi\u2019s keychain, run the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"curl https://apt.grafana.com/gpg.key | gpg --dearmor | sudo tee /usr/share/keyrings/grafana-archive-keyrings.gpg >/dev/null\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Add the Grafana Repository:")),(0,r.yg)("p",null,"Use the following command on your Raspberry Pi to add the Grafana repository to the list:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'echo "deb [signed-by=/usr/share/keyrings/grafana-archive-keyrings.gpg] https://apt.grafana.com stable main" | sudo tee /etc/apt/sources.list.d/grafana.list\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Update Package List:")),(0,r.yg)("p",null,"As we have made changes to our package list, we need to run an update:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\n")),(0,r.yg)("h2",{id:"installing-grafana-on-edgebox"},"Installing Grafana on EdgeBox"),(0,r.yg)("p",null,"Install the latest version of Grafana by running the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo apt install grafana\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Configuring Grafana to Start at Boot")),(0,r.yg)("p",null,"Enable Grafana to start at boot:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable grafana-server\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Starting Grafana")),(0,r.yg)("p",null,"Start the Grafana server software by running the command below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start grafana-server\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Accessing Grafana")),(0,r.yg)("p",null,"To access the Grafana web interface, open a web browser and navigate to:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"http://<IPADDRESS>:3000\n")),(0,r.yg)("p",null,"Replace ",(0,r.yg)("inlineCode",{parentName:"p"},"<IPADDRESS>")," with the IP address of your EdgeBox RPi 200."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Logging In")),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/grafana/login.PNG"})),(0,r.yg)("p",null,"The default username and password are:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Username:")," ",(0,r.yg)("inlineCode",{parentName:"li"},"admin")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Password:")," ",(0,r.yg)("inlineCode",{parentName:"li"},"admin"))),(0,r.yg)("p",null,"Once you have logged in, you will be prompted to change the default password."),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/grafana/updatepsw.PNG"})),(0,r.yg)("h2",{id:"create-your-first-dashboard"},"Create Your First Dashboard"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Navigate to Dashboards:")),(0,r.yg)("p",null,"Click on ",(0,r.yg)("strong",{parentName:"p"},"Dashboards")," in the left-side menu."),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/grafana/dashboard1.PNG"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Create a New Dashboard:")),(0,r.yg)("p",null,"On the Dashboards page, click ",(0,r.yg)("strong",{parentName:"p"},"New")," and select ",(0,r.yg)("strong",{parentName:"p"},"New Dashboard"),"."),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/grafana/dashboard2.PNG"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Add a Visualization:")),(0,r.yg)("p",null,"On the dashboard, click ",(0,r.yg)("strong",{parentName:"p"},"+ Add visualization"),"."),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/grafana/dashboard3.PNG"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Select Data Source:")),(0,r.yg)("p",null,"You will be redirected to select a data source. In the last tutorial, we created an InfluxDB database. Click on ",(0,r.yg)("strong",{parentName:"p"},"Configure a new data source"),"."),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/grafana/configuresource.PNG"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Configure InfluxDB:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Select ",(0,r.yg)("strong",{parentName:"p"},"InfluxDB")," under time series databases."),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/grafana/addsource.PNG"}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Provide the ",(0,r.yg)("strong",{parentName:"p"},"URL"),", ",(0,r.yg)("strong",{parentName:"p"},"database name"),", and ",(0,r.yg)("strong",{parentName:"p"},"user privileges"),"."))),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/grafana/configuresource2.PNG"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Click ",(0,r.yg)("strong",{parentName:"li"},"Save & Test"),". If there are no warnings, you are good to go.")),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/grafana/saveandtest.PNG"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Build Your Dashboard:")),(0,r.yg)("p",null,"You will see a message confirming the data source configuration. Click on ",(0,r.yg)("strong",{parentName:"p"},"Building a dashboard"),"."),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/grafana/saveandtest2.png"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Add Visualization:")),(0,r.yg)("p",null,"You will be redirected to the new dashboard page. Click on ",(0,r.yg)("strong",{parentName:"p"},"Add visualization"),"."),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/grafana/dashboard3.PNG"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Select Data Source:")),(0,r.yg)("p",null,"You will be redirected to select a data source. we created an InfluxDB database connection. Click on ",(0,r.yg)("strong",{parentName:"p"},"InfluxDB"),"."),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/grafana/datasource.PNG"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Configure Visualization")),(0,r.yg)("p",null,"Grafana provides a user-friendly interface to select measurements, fields, and other relevant data points. We will create a time series visualization. On the left-hand side, you will see options to enter the Panel title, Legends, Axis settings, and Graph settings.\nPay attention to the following visual elements to add a simple graph to your first dashboard.\nFor more detailed settings and customization, refer to the ",(0,r.yg)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/panels-visualizations/visualizations/"},"Grafana documentation"),"."),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Edge_Box/grafana/grafana.gif"})),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);