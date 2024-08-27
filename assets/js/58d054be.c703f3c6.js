"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[73848],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var i=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=u(n),p=r,m=g["".concat(l,".").concat(p)]||g[p]||c[p]||a;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},77984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=n(9668),r=(n(96540),n(15680));const a={description:"Connect N3uron with MQTT and Modbus Support Devices",title:"Connect N3uron with MQTT and Modbus Support Devices",keywords:["reTerminal DM","MQTT","IIoT","Industrial","N3uron","Modbus"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminalDM_N3uron_modbus_mqtt",last_update:{date:"5/6/2024",author:"Kasun Thushara and Xabier Fern\xe1ndez"}},o=void 0,s={unversionedId:"Edge/Raspberry_Pi_Devices/reTerminal-DM/N3uron/reTerminal_DM_N3uron_modbus_mqtt",id:"Edge/Raspberry_Pi_Devices/reTerminal-DM/N3uron/reTerminal_DM_N3uron_modbus_mqtt",title:"Connect N3uron with MQTT and Modbus Support Devices",description:"Connect N3uron with MQTT and Modbus Support Devices",source:"@site/docs/Edge/Raspberry_Pi_Devices/reTerminal-DM/N3uron/reTerminal_DM_N3uron_modbus_mqtt.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reTerminal-DM/N3uron",slug:"/reTerminalDM_N3uron_modbus_mqtt",permalink:"/reTerminalDM_N3uron_modbus_mqtt",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reTerminal-DM/N3uron/reTerminal_DM_N3uron_modbus_mqtt.md",tags:[],version:"current",lastUpdatedBy:"Kasun Thushara and Xabier Fern\xe1ndez",lastUpdatedAt:1714953600,formattedLastUpdatedAt:"May 6, 2024",frontMatter:{description:"Connect N3uron with MQTT and Modbus Support Devices",title:"Connect N3uron with MQTT and Modbus Support Devices",keywords:["reTerminal DM","MQTT","IIoT","Industrial","N3uron","Modbus"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminalDM_N3uron_modbus_mqtt",last_update:{date:"5/6/2024",author:"Kasun Thushara and Xabier Fern\xe1ndez"}},sidebar:"ProductSidebar",previous:{title:"Connect AWS IoT Core with N3uron",permalink:"/reTerminalDM_N3uron_AWS"},next:{title:"Integrating Historian Module for Visualizing on reTerminal DM",permalink:"/reTerminalDM_N3uron_Historian"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Configure Ethernet settings",id:"configure-ethernet-settings",level:3},{value:"Modbus Module Create and Configuration",id:"modbus-module-create-and-configuration",level:2},{value:"Channel Creation and Configuration",id:"channel-creation-and-configuration",level:3},{value:"Tag Configuration",id:"tag-configuration",level:2},{value:"Create a MQTT Module Instance Within N3uron\u2019s WebUI Interface",id:"create-a-mqtt-module-instance-within-n3urons-webui-interface",level:2},{value:"Configure N3uron\u2019s MQTT Module",id:"configure-n3urons-mqtt-module",level:2},{value:"Subscribe to a Topic Using N3uron\u2019s MQTT Module",id:"subscribe-to-a-topic-using-n3urons-mqtt-module",level:2},{value:"Create a Tag",id:"create-a-tag",level:2},{value:"Bonus : Lets Publish Status of Factory with AWS",id:"bonus--lets-publish-status-of-factory-with-aws",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:u},g="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,i.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"In industrial automation, Modbus stands out as one of the most common protocols. MQTT has emerged as the leading protocol for IoT in industrial automation due to many characteristics. Its lightweight design, efficiency, scalability, and support for asynchronous messaging are notable. In MQTT, devices communicate only when there's a reportable event, contrasting with constant update checks. This event-driven approach, coupled with reporting by exception\u2014sending data only when it deviates from norms or on specific triggers\u2014conserves bandwidth and resources, optimizing data transmission for critical IoT applications."),(0,r.yg)("p",null,"The potent pairing of reTerminal DM and ",(0,r.yg)("a",{parentName:"p",href:"https://n3uron.com/"},"N3uron")," Duo facilitates efficient plant management by providing robust connectivity and data manipulation capabilities. This Wiki emphasizes the significance of Modbus TCP in industrial settings, highlighting the seamless integration of MQTT devices to further enhance connectivity."),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("h3",{id:"hardware"},"Hardware"),(0,r.yg)("div",{class:"table-center"},(0,r.yg)("table",{class:"table-nobg"},(0,r.yg)("tr",{class:"table-trnobg"},(0,r.yg)("th",{class:"table-trnobg"},"reTerminal DM")),(0,r.yg)("tr",{class:"table-trnobg"}),(0,r.yg)("tr",{class:"table-trnobg"},(0,r.yg)("td",{class:"table-trnobg"},(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png",style:{width:300,height:"auto"}})))),(0,r.yg)("tr",{class:"table-trnobg"}),(0,r.yg)("tr",{class:"table-trnobg"},(0,r.yg)("td",{class:"table-trnobg"},(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reTerminal-DM-p-5616.html"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,r.yg)("h3",{id:"software"},"Software"),(0,r.yg)("p",null,"We highly recommend studying the ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminalDM_N3uron_Get_Start/"},"Getting Started with N3uron")," guide. It provides essential insights into navigating the N3uron web interface, understanding concepts such as the Web UI and Web Vision module, grasping the concept of tags, and creating basic dashboards. If you haven't explored these fundamentals yet, it's advisable to do so before proceeding further. You can access the guide through the provided link."),(0,r.yg)("h3",{id:"configure-ethernet-settings"},"Configure Ethernet settings"),(0,r.yg)("p",null,"Since your PLC IP domain is different from your wireless settings, you may have to change the IP configuration manually. For that,"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 01: Run the following command:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo nano /etc/dhcpcd.conf\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 02: Then configure the Ethernet port settings according to your PLC network domain and set priorities using the 'metric' command. The lowest metric has the highest priority.")),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/ipconfig.PNG"})),(0,r.yg)("h2",{id:"modbus-module-create-and-configuration"},"Modbus Module Create and Configuration"),(0,r.yg)("p",null,"Create a Module Instance Within N3uron\u2019s WebUI Interface"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 01: In the Navigation panel, select ",(0,r.yg)("strong",{parentName:"li"},"Config"),"."),(0,r.yg)("li",{parentName:"ul"},"Step 02: In the Explorer panel, select ",(0,r.yg)("strong",{parentName:"li"},"Modules"),"."),(0,r.yg)("li",{parentName:"ul"},"Step 03: Click on the Model menu and select ",(0,r.yg)("strong",{parentName:"li"},"New Module"),".")),(0,r.yg)("center",null,(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/modbusmodule.PNG"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 04: The instance can be given any name but for the example, we will use ",(0,r.yg)("strong",{parentName:"li"},"ModbusClient"),"."),(0,r.yg)("li",{parentName:"ul"},"Step 05: Set the Module Type property to ",(0,r.yg)("strong",{parentName:"li"},"ModbusClient"),". Leave the rest of the properties as their default values and click ",(0,r.yg)("strong",{parentName:"li"},"Save"),".")),(0,r.yg)("center",null,(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/modbusmodule2.PNG"})),(0,r.yg)("h3",{id:"channel-creation-and-configuration"},"Channel Creation and Configuration"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 01: Under the created Modbus Client and Model, select ",(0,r.yg)("strong",{parentName:"li"},"New Channel"),". Give the channel name as ",(0,r.yg)("strong",{parentName:"li"},"Client"),".")),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/newmodbuschannel.PNG"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 02: Now, we are going to communicate with the PLC using Modbus TCP. Please provide the ",(0,r.yg)("strong",{parentName:"li"},"IP address")," for the PLC and the ",(0,r.yg)("strong",{parentName:"li"},"port address"),".")),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/clientconfig.PNG"})),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"}," If you are using Modbus RTU, there are various configurations to consider. To do that, you need to provide details such as the COM port, baud rate, etc. For more information on configuring both Modbus RTU and TCP protocols on N3uron, refer to the provided ",(0,r.yg)("a",{parentName:"p",href:"https://docs.n3uron.com/docs/modbus-client-configuration"},"guide"),".")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 03: Add a device: Each channel can have one or more devices. Set a ",(0,r.yg)("strong",{parentName:"li"},"name")," for the device and proceed with the configuration. In this case, the device name is ",(0,r.yg)("strong",{parentName:"li"},"PLC"),".")),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/adddevice.PNG"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 04: There are a few settings that you can adjust through this interface. You can find more details from this link. However, for this case, we'll keep them as they are.")),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/deviceconfig.PNG"})),(0,r.yg)("h2",{id:"tag-configuration"},"Tag Configuration"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 01: Go to the ",(0,r.yg)("strong",{parentName:"li"},"WebUI"),", select ",(0,r.yg)("strong",{parentName:"li"},"Config"),", and then click on ",(0,r.yg)("strong",{parentName:"li"},"Tag"),". In the Model section, click on the menu and choose ",(0,r.yg)("strong",{parentName:"li"},"New Tag"),". Name it Q1. Normally Q is used to indicate the output coil. ")),(0,r.yg)("center",null,(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/addtag.PNG"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 02: Then you need to do the following configurations. ",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"- Source : Enabled/Yes\n- Module Type : ModbusClient \n- ModuleName: ModbusClient\n- Config: Device: Client/PLC\n- Modbus address: 008931\n- Data type: Boolean \n")),"and ",(0,r.yg)("strong",{parentName:"li"},"Save")," it.")),(0,r.yg)("center",null,(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/tagconfig.PNG"})),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"}," It is advisable to refer to the PLC or device manufacturer's datasheet regarding Modbus addresses. There, you will find details about input, output, and holding addresses. According to these specifications, adjustments should be made in the Modbus address line in the tag configuration. For instance, if the manufacturer notates the output coil Q1 as 8193, the address should be configured as 008193. Similarly, if the network input is denoted as 1 and it is a coil type, the address should be set as 000001.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 03: Real-time simulation ")),(0,r.yg)("p",null,"Once connected to the system, you can view the real-time status of output coils and input coils."),(0,r.yg)("center",null,(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/realtimeview.PNG"})),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"}," Interaction with the PLC via the N3uron interface requires appropriate access permissions, including both read and write capabilities.")),(0,r.yg)("h2",{id:"create-a-mqtt-module-instance-within-n3urons-webui-interface"},"Create a MQTT Module Instance Within N3uron\u2019s WebUI Interface"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 01: In the Navigation panel, select ",(0,r.yg)("strong",{parentName:"li"},"Config"),"."),(0,r.yg)("li",{parentName:"ul"},"Step 02: In the Explorer panel, select ",(0,r.yg)("strong",{parentName:"li"},"Modules"),"."),(0,r.yg)("li",{parentName:"ul"},"Step 03: Click on the Model menu and select ",(0,r.yg)("strong",{parentName:"li"},"New Module"),".")),(0,r.yg)("center",null,(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqqtmodule.PNG"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 04: The instance can be given any name but for the example, we will use ",(0,r.yg)("strong",{parentName:"li"},"MQTT"),"."),(0,r.yg)("li",{parentName:"ul"},"Step 05: Set the Module Type property to ",(0,r.yg)("strong",{parentName:"li"},"MqttClient"),". Leave the rest of the properties as their default values and click ",(0,r.yg)("strong",{parentName:"li"},"Save"),".")),(0,r.yg)("center",null,(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqqtmodule2.PNG"})),(0,r.yg)("h2",{id:"configure-n3urons-mqtt-module"},"Configure N3uron\u2019s MQTT Module"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Step 01: In the Explorer panel, select the MQTT instance you have just created.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Step 02: Click on the Model menu button and select New Connection.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Step 03: Give the New connection a name. In this example, it has been named ",(0,r.yg)("strong",{parentName:"p"},"MqttClient"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"- Destination broker : Custom \n- Authentication mode: Password\n- Username : Your Broker Username\n- Password: Your Broker Password\n- Protocol:MQTT\n- Broker URL:Broker ip\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Save")," configurations "))),(0,r.yg)("center",null,(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqttchannelconfig.PNG"})),(0,r.yg)("h2",{id:"subscribe-to-a-topic-using-n3urons-mqtt-module"},"Subscribe to a Topic Using N3uron\u2019s MQTT Module"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 01: In the Model panel, right-click on the AWS Connection, select New Subscriber, and give it a name. In this example, we will simply use Subscriber.")),(0,r.yg)("center",null,(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqttconnection.PNG"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 02: Click on it and add a name in the Topic field. In this example, we have used device/data.")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"For testing and hands-on experience, we have provided you with an ",(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/MQTT_N3uron.ino"},"Arduino code")," that can be run on XIAO. Additionally, you will need to input your own credentials into this code before uploading it.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Step 03: Set the following properties using the values shown below, leaving the rest of them as their default values:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"- Qos: Qos 0.\n- Encoding: UTF8\n- Compression: None\n- Serialization: JSON\n- Data parser/Type: MqttClient JSON\n")),(0,r.yg)("p",{parentName:"li"},"And ",(0,r.yg)("strong",{parentName:"p"},"Save")," it."))),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/subscriberconfig.PNG"})),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"}," Here, we utilize a data parser configured for MQTTClient JSON format. The XIAO device publishes data to the broker in this format. If your device does not publish data in this specific format, you will need to identify the format it uses and create a custom JavaScript code snippet to handle the devices accordingly. For further guidance, please refer to the provided ",(0,r.yg)("a",{parentName:"p",href:"https://docs.n3uron.com/docs/mqtt-client-custom-parser"},"guidelines"),".")),(0,r.yg)("h2",{id:"create-a-tag"},"Create a Tag"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 01: Within the Explorer panel, select ",(0,r.yg)("strong",{parentName:"li"},"Tags"),"."),(0,r.yg)("li",{parentName:"ul"},"Step 02: In the Model menu, right-click on the folder icon, select ",(0,r.yg)("strong",{parentName:"li"},"New Tag"),", and give it a name. In this example, we will use ",(0,r.yg)("strong",{parentName:"li"},"test"),".")),(0,r.yg)("center",null,(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqtttag.PNG"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Step 03: In the Configuration panel, set the following properties using the values shown below, leaving the rest of them as their default values:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"- Type: Number.\n- Source/Enabled: Yes\n- Module Type: MqttClient\n- Module name: MQTT\n- Config/Subscriber: MqttClient/Subscriber\n")),(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"Save"),"."))),(0,r.yg)("center",null,(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqtttagconfig.PNG"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 04: Real-time simulation\nOnce connected to the system, you can view the real-time status of output from the MQTT Broker.")),(0,r.yg)("center",null,(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/realtimeview2.PNG"})),(0,r.yg)("h2",{id:"bonus--lets-publish-status-of-factory-with-aws"},"Bonus : Lets Publish Status of Factory with AWS"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"}," We have provided step-by-step instructions on how to connect an ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminal-DM_AWS_first/"},"AWS cloud to your reTerminal DM device"),". If you are new to this wiki, please refer to this link.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 01: In the Explorer panel, select the ",(0,r.yg)("strong",{parentName:"li"},"MQTT")," instance you have just created."),(0,r.yg)("li",{parentName:"ul"},"Step 02: Click on the Model menu button and select ",(0,r.yg)("strong",{parentName:"li"},"New Connection"),"."),(0,r.yg)("li",{parentName:"ul"},"Step 03: Give the New connection a name. In this example, it has been named ",(0,r.yg)("strong",{parentName:"li"},"MqttPublisher"),".")),(0,r.yg)("center",null,(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/newpublisher.PNG"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Step 04: Configure the connection properties:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"A: Select ",(0,r.yg)("strong",{parentName:"li"},"Amazon Web Services")," from the ",(0,r.yg)("strong",{parentName:"li"},"Destination Broker")," drop down menu. ",(0,r.yg)("strong",{parentName:"li"},"Authentication mode")," will be ",(0,r.yg)("strong",{parentName:"li"},"Certificate"),". Also ",(0,r.yg)("strong",{parentName:"li"},"Client Id")," is ",(0,r.yg)("strong",{parentName:"li"},"N3uron")," in this example."),(0,r.yg)("li",{parentName:"ul"},"B: Load the ",(0,r.yg)("strong",{parentName:"li"},"Certificate, Private key and CA certificate")," you downloaded and saved when you created the Thing in the AWS IoT Console."),(0,r.yg)("li",{parentName:"ul"},"C: In the AWS IoT console, in the left-hand menu, go to ",(0,r.yg)("strong",{parentName:"li"},"Settings")," and copy your ",(0,r.yg)("strong",{parentName:"li"},"Device Data Endpoint"),". Go back to N3uron and paste it in the ",(0,r.yg)("strong",{parentName:"li"},"Broker URL")," field."),(0,r.yg)("li",{parentName:"ul"},"D: Leave the rest of the properties as their default values and click on ",(0,r.yg)("strong",{parentName:"li"},"Save"),".")))),(0,r.yg)("center",null,(0,r.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/publisherconfig.PNG"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 05: Within the Model panel, right-click on the ",(0,r.yg)("strong",{parentName:"li"},"MqttPublisher")," Connection you have just configured, select ",(0,r.yg)("strong",{parentName:"li"},"New Publisher"),", and give it a name. In this example, we will simply use ",(0,r.yg)("strong",{parentName:"li"},"AWS"),".")),(0,r.yg)("center",null,(0,r.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/newpublisheraws.PNG"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Step 06: Click on it and add a name in the ",(0,r.yg)("strong",{parentName:"p"},"Topic")," field. In this example, we have used ",(0,r.yg)("strong",{parentName:"p"},"N3uron"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Step 07: Click on the ",(0,r.yg)("strong",{parentName:"p"},"Tag Filter")," button, select ",(0,r.yg)("strong",{parentName:"p"},"New Tag Filter"),", and change the default name. In this example we have used ",(0,r.yg)("strong",{parentName:"p"},"TagFilter"),". Leave Mode, Path, and Regex pattern as their default values. With this configuration, every tag configured in N3uron will be published to our AWS Broker."))),(0,r.yg)("center",null,(0,r.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/awssettings.PNG"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 08: Go to the AWS IoT console and in the left-hand menu, select ",(0,r.yg)("strong",{parentName:"li"},"MQTT test client"),".Click on the ",(0,r.yg)("strong",{parentName:"li"},"Subscribe to a topic")," tab, enter ",(0,r.yg)("strong",{parentName:"li"},"N3uron")," in the Topic filter to subscribe to everything, and click on ",(0,r.yg)("strong",{parentName:"li"},"Subscribe"),". ")),(0,r.yg)("center",null,(0,r.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/awsend.PNG"})),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);