"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3939],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>m});var i=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=o,m=c["".concat(l,".").concat(u)]||c[u]||g[u]||n;return a?i.createElement(m,r(r({ref:t},d),{},{components:a})):i.createElement(m,r({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<n;p++)r[p]=a[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},57658:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var i=a(9668),o=(a(96540),a(15680));const n={description:"Beginner's Guide to LoRa Communication with Wio-E5 Module and Arduino on PlatformIO",title:"LoRaWAN Using Wio-E5 on PlatformIO",keywords:["lorawan","grove","platformio"],image:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/4.jpg",slug:"/platformio_wio_e5",toc_max_heading_level:4,sidebar_position:1,last_update:{date:new Date("2024-01-26T06:59:58.390Z"),author:"Spencer"}},r="Getting Started with LoRaWAN Using Wio-E5 and Arduino on PlatformIO",s={unversionedId:"Network/SenseCAP_LoRaWAN_Starter_Kit/Application/Platformio",id:"Network/SenseCAP_LoRaWAN_Starter_Kit/Application/Platformio",title:"LoRaWAN Using Wio-E5 on PlatformIO",description:"Beginner's Guide to LoRa Communication with Wio-E5 Module and Arduino on PlatformIO",source:"@site/docs/Network/SenseCAP_LoRaWAN_Starter_Kit/Application/Platformio.md",sourceDirName:"Network/SenseCAP_LoRaWAN_Starter_Kit/Application",slug:"/platformio_wio_e5",permalink:"/platformio_wio_e5",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_LoRaWAN_Starter_Kit/Application/Platformio.md",tags:[],version:"current",lastUpdatedBy:"Spencer",lastUpdatedAt:1706252398.39,formattedLastUpdatedAt:"Jan 26, 2024",sidebarPosition:1,frontMatter:{description:"Beginner's Guide to LoRa Communication with Wio-E5 Module and Arduino on PlatformIO",title:"LoRaWAN Using Wio-E5 on PlatformIO",keywords:["lorawan","grove","platformio"],image:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/4.jpg",slug:"/platformio_wio_e5",toc_max_heading_level:4,sidebar_position:1,last_update:{date:"2024-01-26T06:59:58.390Z",author:"Spencer"}},sidebar:"ProductSidebar",previous:{title:"Get Started with the SenseCAP LoRaWAN Starter Kit",permalink:"/M2_Kit_Getting_Started"},next:{title:"reRouter Guide",permalink:"/reRouter_Intro"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"PlatofmrIO",id:"platofmrio",level:4},{value:"LoRaWAN Network Server (ChirpStack)",id:"lorawan-network-server-chirpstack",level:4},{value:"Preparatory work",id:"preparatory-work",level:2},{value:"LoRaWAN Network",id:"lorawan-network",level:3},{value:"Get Joining Parameters",id:"get-joining-parameters",level:4},{value:"Add Device Profile",id:"add-device-profile",level:4},{value:"Add Application",id:"add-application",level:4},{value:"Add Device",id:"add-device",level:4},{value:"Hands-on",id:"hands-on",level:2},{value:"Starting a New PlatformIO Project",id:"starting-a-new-platformio-project",level:4},{value:"Join the LoRaWAN Network(Testing)",id:"join-the-lorawan-networktesting",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Q1: Issue with Grove_LED_Bar Library",id:"q1-issue-with-grove_led_bar-library",level:3},{value:"Resources",id:"resources",level:2},{value:"LoRaE5 Library",id:"lorae5-library",level:4},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p},c="wrapper";function g(e){let{components:t,...a}=e;return(0,o.yg)(c,(0,i.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"getting-started-with-lorawan-using-wio-e5-and-arduino-on-platformio"},"Getting Started with LoRaWAN Using Wio-E5 and Arduino on PlatformIO"),(0,o.yg)("p",null,"If you want to learn about Long Range and its features such as network architecture and applications, you can check out this article ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/"},"LoRapedia, which introduces Long Range and Long Range in detail"),", It explains what Long Range is, how it works, and its pros and cons."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{width:680,src:"https://wdcdn.qpic.cn/MTIzNDU2Nzg5_993734_kw1N-KbhpVV3i5EZ_1693791639?w=1844&h=904",alt:"LoRaWAN Framework "}),(0,o.yg)("div",{style:{marginTop:"-8px"}},(0,o.yg)("em",null,"LoRaWAN Network Framework"))),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"This guide details using the Wio-E5 LoRa Module with XIAO ESP32S3 on PlatformIO, applicable to any Arduino-compatible board."),(0,o.yg)("p",null,"Key Learnings:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Arduino Library Programming for Wio-E5"),": Utilizing Arduino libraries for efficient programming of the Wio-E5, beyond basic AT command control."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"LoRaWAN Network Integration"),": Steps to connect the Wio-E5 to a LoRaWAN network."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Uplink and Downlink Implementation"),": Managing data transmission to and from the network.")),(0,o.yg)("p",null,"This application modifies the standard hardware setup, incorporating an OLED for direct data visualization and CircleLED for downlink indication, alongside DHT11 sensor data reporting, streamlining the learning process with practical implementations. "),(0,o.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.yg)("h3",{id:"hardware"},"Hardware"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("a",{parentName:"strong",href:"/xiao_esp32s3_getting_started/"},"XIAO ESP32S3")),": A versatile board that's compatible with Arduino, ideal for various IoT projects. You can substitute it with any Arduino compatible board as needed."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("a",{parentName:"strong",href:"/Grove-TemperatureAndHumidity_Sensor"},"Grove - DHT11")),": For environmental data collection, essential in many IoT applications."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("a",{parentName:"strong",href:"/Grove-Circular_LED"},"Grove - Circular LED")),": Used for light control. This is an example of a controllable device; feel free to replace it with a component of your choice."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/Grove-OLED-Display-0.96-SSD1315/"},"Grove - OLED Display")),": Enhances your project with visual data display capabilities. This component is optional but recommended for a more interactive user interface."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("a",{parentName:"strong",href:"/Grove_LoRa_E5_New_Version/"},"Grove - Wio-E5 LoRa Module")),": Provides long-range, low-power wireless communication, making it an excellent choice for LoRaWAN applications."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("a",{parentName:"strong",href:"/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_Multi_Platform_Overview/"},"SenseCAP M2 Multi-Platform Gateway")),": A critical component for enabling communication between your Wio-E5 module and the LoRaWAN network.")),(0,o.yg)("h3",{id:"software"},"Software"),(0,o.yg)("h4",{id:"platofmrio"},"PlatofmrIO"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{class:"border-radius: 10px;",src:"https://cdn.platformio.org/images/platformio-logo.17fdc3bc.png",height:"220",alt:"PlatformIO Logo",title:"PlatformIO: a professional collaborative platform for embedded development"})),(0,o.yg)("p",null,"For this project, we will leverage PlatformIO, which offers numerous advantages:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Efficient Library Management"),": PlatformIO facilitates easy and effective management of libraries, ensuring your project is always aligned with the latest advancements."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"VSCode Integration"),": This integration significantly enhances the development experience, featuring code highlighting and IntelliSense, for a smoother and more efficient coding process."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Simple Library Addition and Configuration"),": With PlatformIO, adding and configuring libraries is a straightforward process, allowing for rapid customization to fit your project's specific needs.")),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"If you're new to PlatformIO or looking to deepen your understanding, you can start with these resources:"),(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/Software-PlatformIO"},"How to Use PlatformIO IDE for Arduino Programming")," \u2013 A beginner-friendly guide to get you started."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://platformio.org/"},"PlatformIO Official Website")," \u2013 For comprehensive and detailed instructions."))),(0,o.yg)("h4",{id:"lorawan-network-server-chirpstack"},"LoRaWAN Network Server (ChirpStack)"),(0,o.yg)("p",null,"This section provides guidance on connecting to a local LoRaWAN network server, using the ",(0,o.yg)("a",{parentName:"p",href:"https://www.chirpstack.io/"},"ChirpStack")," platform as our primary example. We'll specifically focus on using the ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html"},"SenseCAP M2 Multi-Platform LoRaWAN Indoor Gateway (EU868)")," for this purpose."),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"If you are unfamiliar with the following steps on ChirpStack, such as:"),(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},"Creating a Device Profile"),(0,o.yg)("li",{parentName:"ul"},"Adding an Application"),(0,o.yg)("li",{parentName:"ul"},"Registering a device under an application")),(0,o.yg)("p",{parentName:"admonition"},"You can learn more from these resources:"),(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/SenseCAP_Indicator_Application_LoRaWAN/#21-configure-the-sensecap-lorawan-gateway"},"Register the Device on LoRaWAN Network Server")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration"},"SenseCAP M2 MP Gateway LNS tion"))),(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("em",{parentName:"p"},"We'll do it together in the next section"),".")),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"For those preferring alternative platforms like AWS IoT or TTN, refer to the following guides:"),(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT/"},"Connecting to AWS IoT")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network/"},"Connecting to TTN")))),(0,o.yg)("h2",{id:"preparatory-work"},"Preparatory work"),(0,o.yg)("p",null,"Now, let's get started. We'll do following things."),(0,o.yg)("h3",{id:"lorawan-network"},"LoRaWAN Network"),(0,o.yg)("p",null,"To ensure successful communication with the LoRaWAN network via your Wio-E5 module, there are a couple of key aspects you need to verify:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"LoRaWAN Coverage:")," "),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Make sure that your device is within the coverage area of a LoRaWAN network. For instance, in my case, the device is covered by an M2 gateway operating in the EU868 frequency band. This is crucial as the device needs to communicate with a nearby LoRaWAN gateway that supports the same frequency band."))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Gateway Link to LNS:")," "),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"It's also essential to confirm that one of these gateways is linked to the LoRaWAN Network Server (LNS) that you intend to use. This linkage is vital because the gateway not only acts as a bridge between your Wio-E5 device and the network server but also dictates the path your device's data will take to reach the server.")))),(0,o.yg)("h4",{id:"get-joining-parameters"},"Get Joining Parameters"),(0,o.yg)("p",null,"Assuming you have already configured the ChirpStack network server in the previous section, the next step is to gather the necessary network joining parameters. These parameters are vital to ensure your device can successfully join and access the network."),(0,o.yg)("p",null,"For a more detailed step-by-step tutorial, please refer to the ",(0,o.yg)("a",{parentName:"p",href:"/SenseCAP_Indicator_Application_LoRaWAN/#21-configure-the-sensecap-lorawan-gateway"},"Register the Device on LoRaWAN Network Server")," section."),(0,o.yg)("h4",{id:"add-device-profile"},"Add Device Profile"),(0,o.yg)("p",null,"The Wio-E5 module is defaulted to use the Regional Parameter ",(0,o.yg)("em",{parentName:"p"},"V102B"),". This information is according to the ",(0,o.yg)("inlineCode",{parentName:"p"},"4.28.13 VER section")," of the ",(0,o.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf"},"Wio-E5 AT Command Specification"),"."),(0,o.yg)("p",null,"Consequently, we will select ",(0,o.yg)("inlineCode",{parentName:"p"},"LoRaWAN 1.0.2")," as the MAC version and ",(0,o.yg)("inlineCode",{parentName:"p"},"RP002-1.0.2")," for the Regional Parameter revision."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{class:"border-radius: 10px;",width:480,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/device_profile.png"})),(0,o.yg)("p",null,"If you need to use Class C for your device, you can activate it by clicking the following button:"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{class:"border-radius: 10px;",width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/activate_class_c.png"})),(0,o.yg)("h4",{id:"add-application"},"Add Application"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{class:"border-radius: 10px;",width:480,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/add_application.png"})),(0,o.yg)("h4",{id:"add-device"},"Add Device"),(0,o.yg)("p",null,"You should fill in the Device EUI (EUI64) from your Device EUI (EUI64) information, this section is using it."),(0,o.yg)("p",null,"If you have changed it, navigate to this ",(0,o.yg)("a",{parentName:"p",href:"#get_eui"},"section")," to get the ",(0,o.yg)("inlineCode",{parentName:"p"},"DevAddr"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"DevEui"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"AppEui"),"."),(0,o.yg)("p",null,"Alternatively, if you prefer to use a new DevEUi, you can regenerate it and then submit."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{class:"border-radius: 10px;",width:520,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/add_device.png"})),(0,o.yg)("p",null,"And get the ",(0,o.yg)("inlineCode",{parentName:"p"},"AppKey"),":"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{class:"border-radius: 10px;",width:500,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/get_appKey.png"})),(0,o.yg)("admonition",{title:"Device Information",type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Up to this point, we have obtained the following credentials necessary for the join operation with the LoRaWAN network:"),(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"DevEUI:")," ",(0,o.yg)("inlineCode",{parentName:"li"},"2cf7f1205100a785")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"AppKey:")," ",(0,o.yg)("inlineCode",{parentName:"li"},"19aee7bedec56509a9c66a44b7956b6f"))),(0,o.yg)("p",{parentName:"admonition"},"These credentials are essential for the secure registration and communication of your device with the LoRaWAN network.")),(0,o.yg)("admonition",{title:"Why Don't We Need AppEUI?",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"In the context of LoRaWAN, DevEUI and AppKey play critical roles in device identification and secure communication. The AppEUI, also known as JoinEUI in LoRaWAN 1.1 and later versions, is typically used during the device joining process to identify the application server instance to which the device should connect. However, in some network configurations or with certain network server implementations, like The Things Network (TTN), the AppEUI may not be essential or is already predefined. This approach simplifies the device setup process by reducing the number of parameters that need to be configured. Therefore, based on the specificities of your network server and its configuration, the explicit use of an AppEUI might not be necessary for the joining process.")),(0,o.yg)("h2",{id:"hands-on"},"Hands-on"),(0,o.yg)("h4",{id:"starting-a-new-platformio-project"},"Starting a New PlatformIO Project"),(0,o.yg)("p",null,"To begin, you'll create a PlatformIO project. Follow these steps:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Open PlatformIO:")," Start by opening the PlatformIO IDE on your computer. ")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Create a New Project:")," Go to the main menu and select ",(0,o.yg)("strong",{parentName:"p"},"New Project"),". "))),(0,o.yg)("p",null,"Here is an example image showing the new project creation in PlatformIO:"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{class:"border-radius: 10px;",width:500,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/create_project.png"})),(0,o.yg)("p",null,"For this project, choose ",(0,o.yg)("strong",{parentName:"p"},"XIAO ESP32S3")," as the development board."),(0,o.yg)("p",null,"Example of project creation for XIAO ESP32S3:"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{class:"border-radius: 10px;",width:500,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/xiaos3_prj.png"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Add Necessary Libraries:")),(0,o.yg)("p",null,"After creating your project, you need to include several libraries that are essential for your project. You can add these libraries to your ",(0,o.yg)("inlineCode",{parentName:"p"},"platformio.ini")," file to let PlatformIO download them automatically:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ini"},"[env:seeed_xiao_esp32s3]\nplatform = espressif32\nboard = seeed_xiao_esp32s3\nframework = arduino\nlib_deps = \n    olikraus/U8g2@^2.35.9\n    plerup/EspSoftwareSerial@^8.2.0\n    https://github.com/dok-net/ghostl # Issue Fix: https://github.com/plerup/espsoftwareserial/issues/305#issuecomment-1880188894\n    seeed-studio/Grove Temperature And Humidity Sensor@^2.0.2\n    seeed-studio/Grove LED Bar@^1.0.0\n    https://github.com/andresoliva/LoRa-E5\n")),(0,o.yg)("p",null,"Once the PlatformIO Library Manager has finished processing your requests, you will be able to see all the libraries that have been added to your project. These libraries are stored in the ",(0,o.yg)("inlineCode",{parentName:"p"},".pio/libdeps/seeed_xiao_esp32s3")," directory, specific to your selected board, which in this case is the Seeed XIAO ESP32S3."),(0,o.yg)("p",null,"Here's an image showing how your PlatformIO environment will look after the libraries have been successfully added:"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{class:"border-radius: 10px;",width:500,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/platformio_libraries.png"})),(0,o.yg)("p",null,"In this directory, you'll find folders for each library you specified in your ",(0,o.yg)("inlineCode",{parentName:"p"},"platformio.ini")," file. These folders contain the necessary files for each library, such as source code, examples, and additional metadata."),(0,o.yg)("p",null,"This organization makes it easy to manage and update your libraries. PlatformIO automatically handles compatibility and dependency resolution, ensuring that your development process is smooth and efficient. You can also easily update or remove libraries using the PlatformIO Library Manager, keeping your development environment up-to-date with the latest library versions."),(0,o.yg)("h4",{id:"join-the-lorawan-networktesting"},"Join the LoRaWAN Network(Testing)"),(0,o.yg)("p",null,"in this section, we will utilize ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/andresoliva/LoRa-E5"},"andresoliva/LoRa-E5")," to drive Wio-E5 to join the LoRaWAN network, instead of using AT command by hand."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino.h>\n#include <LoRa-E5.h> //main LoRa\n\n#ifdef U8X8_HAVE_HW_SPI\n    #include <SPI.h>\n#endif\n#ifdef U8X8_HAVE_HW_I2C\n    #include <Wire.h>\n#endif\n\n// highlight-start\n#if defined(ARDUINO_ARCH_AVR)\n    #define serialLog Serial\n\n#elif defined(ARDUINO_ARCH_SAMD) || defined(ARDUINO_ARCH_SAM)\n    #define serialLog SerialUSB\n#else\n    #define serialLog Serial\n#endif\n// highlight-end\n\nconst int RXPin = D7, TXPin = D6; // Replace with your Wio-E5 RX,TX pin number\n\n/************************LORA SET UP*******************************************************************/\n#define LoRa_APPKEY           "19aee7bedec56509a9c66a44b7956b6f" /*Custom key for this App*/\n#define LoRa_FREQ_standard    EU868                              /*International frequency band. see*/\n#define LoRa_DR               DR4                                /*DR5=5.2kbps //data rate. see at https://www.thethingsnetwork.org/docs/lorawan/regional-parameters/    */\n#define LoRa_DEVICE_CLASS     CLASS_C                            /*CLASS_A for power restriction/low power nodes. Class C for other device applications */\n#define LoRa_PORT_BYTES       8                                  /*node Port for binary values to send, allowing the app to know it is recieving bytes*/\n#define LoRa_PORT_STRING      7                                  /*Node Port for string messages to send, allowing the app to know it is recieving characters/text */\n#define LoRa_POWER            14                                 /*Node Tx (Transmition) power*/\n#define LoRa_CHANNEL          0                                  /*Node selected Tx channel. Default is 0, we use 2 to show only to show how to set up*/\n#define LoRa_ADR_FLAG         false                              /*ADR(Adaptative Dara Rate) status flag (True or False). Use False if your Node is moving*/\n/*Time to wait for transmiting a packet again*/\n#define Tx_delay_s            9.5 /*delay between transmitions expressed in seconds*/\n/*Packet information*/\n#define PAYLOAD_FIRST_TX      10   /*bytes to send into first packet*/\n#define Tx_and_ACK_RX_timeout 6000 /*6000 for SF12,4000 for SF11,3000 for SF11, 2000 for SF9/8/, 1500 for SF7. All examples consering 50 bytes payload and BW125*/\n/*Buffers used to send*/\nunsigned char buffer_binary[128] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20};\nchar          buffer_char[50]    = "I am sending this message to a LoRa Gateway."; /**/\n/*******************************************************************/\n/*Set up the LoRa module with the desired configuration */\nvoid LoRa_setup(void) {\n    lora.setDeviceMode(LWOTAA); /*LWOTAA or LWABP. We use LWOTAA in this example*/\n    lora.setDataRate((_data_rate_t)LoRa_DR, (_physical_type_t)LoRa_FREQ_standard);\n    lora.setKey(NULL, NULL, LoRa_APPKEY);                /*Only App key is seeted when using OOTA*/\n    lora.setClassType((_class_type_t)LoRa_DEVICE_CLASS); /*set device class*/\n    lora.setPort(LoRa_PORT_BYTES);                       /*set the default port for transmiting data*/\n    lora.setPower(LoRa_POWER);                           /*sets the Tx power*/\n    lora.setChannel(LoRa_CHANNEL);                       /*selects the channel*/\n    lora.setAdaptiveDataRate(LoRa_ADR_FLAG);             /*Enables adaptative data rate*/\n}\n\nvoid setup() {\n    serialLog.begin(9600);\n    while (!serialLog)\n        ; // Wait until Serial is ready\n    lora.init(TXPin, RXPin);\n    /*set up device. You must set up all your parameters BEFORE Joining.\n     If you make any change (outside channel or port setup), you should join again the network for proper working*/\n    LoRa_setup();\n    /*Enters in a while Loop until the join process is completed*/\n    serialLog.println("Waiting to join the network...");\n    while (lora.setOTAAJoin(JOIN, 10000) == 0)\n        ; // will attempt to join network until the ends of time. https://www.thethingsnetwork.org/docs/lorawan/message-types/\n    /*POWER DOWN the LoRa module until next Tx (Transmition) cicle*/\n    lora.setDeviceLowPower();\n    serialLog.println("Joining network successful!");\n}\n\nvoid loop() {\n\n    /*Wake Up the LoRa module*/\n    lora.setDeviceWakeUp(); /*if the module is not in sleep state, this command does nothing*/\n\n    /*-----------sending a string message*/\n    lora.setPort(LoRa_PORT_STRING); /*set port configured in reception Gateway for expecting Strings*/\n    lora.transferPacketWithConfirmed(buffer_char, Tx_and_ACK_RX_timeout);\n    /*--------sending bytes message*/\n    lora.setPort(LoRa_PORT_BYTES); /*set port configured in reception Gateway for expecting bytes*/\n    lora.transferPacketWithConfirmed(buffer_binary, PAYLOAD_FIRST_TX, Tx_and_ACK_RX_timeout);\n\n    /*POWER DOWN the LoRa module until next Tx Transmition (Tx) cicle*/\n    lora.setDeviceLowPower();\n    delay((unsigned int)(Tx_delay_s*1000));/*Convert the value in seconds to miliseconds*/\n}\n')),(0,o.yg)("p",null,"Let's build and flash it to the board."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{class:"border-radius: 10px;",width:500,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/flash_success_lorawan_test.png"})),(0,o.yg)("p",null,"Now we can see there comes the message, and we can see the there is two message out there:"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{class:"border-radius: 10px;",width:500,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/lorawan_event_package.png"})),(0,o.yg)("p",null,"it is easy to understand data ",(0,o.yg)("inlineCode",{parentName:"p"},"00010203040506070809"),", which is from ",(0,o.yg)("inlineCode",{parentName:"p"},"buffer_binary")," array."),(0,o.yg)("p",null,"there also comes data: ",(0,o.yg)("inlineCode",{parentName:"p"},"SSBhbSBzZW5kaW5nIHRoaXMgbWVzc2FnZSB0byBhIExvUmEgR2F0ZXdheS4="),", what is that mean? as the package is codeded in base64.\nwe can utilize the ",(0,o.yg)("a",{parentName:"p",href:"https://emn178.github.io/online-tools/base64_decode.html"},"base64 Decode")," to see the string."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{class:"border-radius: 10px;",width:420,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/lorawan_string_decode.png",alt:"decode "}),(0,o.yg)("div",{style:{marginTop:"-8px"}},(0,o.yg)("em",null,(0,o.yg)("a",{href:"https://emn178.github.io/online-tools/base64_decode.html?input=SSBhbSBzZW5kaW5nIHRoaXMgbWVzc2FnZSB0byBhIExvUmEgR2F0ZXdheS4%3D"},"\ud83d\uddb1\ufe0f Click Here to decode")))),(0,o.yg)("p",null,"Yes, it's from ",(0,o.yg)("inlineCode",{parentName:"p"},"buffer_char")," array: ",(0,o.yg)("inlineCode",{parentName:"p"},"I am sending this message to a LoRa Gateway"),"."),(0,o.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.yg)("h3",{id:"q1-issue-with-grove_led_bar-library"},"Q1: Issue with Grove_LED_Bar Library"),(0,o.yg)("p",null,"If you're experiencing issues with the Grove_LED_Bar library, add the following macro definitions at the start of the ",(0,o.yg)("inlineCode",{parentName:"p"},"Grove_LED_Bar.cpp")," file:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'#include "Grove_LED_Bar.h"\n// Add these macros to resolve conflicts\n// highlight-start\n#define max(a, b) (((a) > (b)) ? (a) : (b))\n#define min(a, b) (((a) < (b)) ? (a) : (b))\n// highlight-end\n')),(0,o.yg)("p",null,"This code defines the ",(0,o.yg)("inlineCode",{parentName:"p"},"max")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"min")," macros, which can help fix compilation errors related to these functions in the library."),(0,o.yg)("h2",{id:"resources"},"Resources"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/Grove_LoRa_E5_New_Version/"},"Grove - Wio-E5 | Wiki")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf"},"Wio-E5 AT Command Specification"))),(0,o.yg)("h4",{id:"lorae5-library"},"LoRaE5 Library"),(0,o.yg)("p",null,"There are serval libraries available for the Wio E5 module:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/andresoliva/LoRa-E5"},"andresoliva/LoRa-E5")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/idreamsi/LoRaE5"},"idreamsi/LoRaE5")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/disk91/Disk91_LoRaE5"},"disk91/Disk91_LoRaE5"))),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}g.isMDXComponent=!0}}]);