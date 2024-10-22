"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[76597],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,m=d["".concat(s,".").concat(c)]||d[c]||g[c]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(96540),a=n(20053);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>b});var o=n(9668),a=n(96540),r=n(20053),i=n(23104),l=n(56347),s=n(57485),u=n(31682),p=n(89466);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:a}}=e;return{value:t,label:n,attributes:o,default:a}}))}function g(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const o=(0,l.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=g(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[s,u]=m({queryString:n,groupId:o}),[d,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,p.Dv)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),h=(()=>{const e=s??d;return c({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),y(e)}),[u,y,r]),tabValues:r}}var h=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),g=e=>{const t=e.currentTarget,n=p.indexOf(t),o=u[n].value;o!==l&&(d(t),s(o))},c=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,o.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:c,onClick:g},i,{className:(0,r.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:o}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function N(e){const t=y(e);return a.createElement("div",{className:(0,r.A)("tabs-container",f.tabList)},a.createElement(w,(0,o.A)({},e,t)),a.createElement(v,(0,o.A)({},e,t)))}function b(e){const t=(0,h.A)();return a.createElement(N,(0,o.A)({key:String(t)},e))}},92793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var o=n(9668),a=(n(96540),n(15680)),r=n(11470),i=n(19365);const l={description:"reComputerJ2021 | J202",title:"J202 Carrier Board",keywords:["Edge","Jetson","reComputer JetPack\u2122_OS_Installation"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_J2021_J202_Flash_Jetpack",last_update:{date:"08/27/2024",author:"Youjiang"},no_comments:!1},s="Getting Started with reComputer J202",u={unversionedId:"Edge/NVIDIA_Jetson/Carrier_Boards/J202/reComputer_J2021_J202_Flash_Jetpack",id:"Edge/NVIDIA_Jetson/Carrier_Boards/J202/reComputer_J2021_J202_Flash_Jetpack",title:"J202 Carrier Board",description:"reComputerJ2021 | J202",source:"@site/docs/Edge/NVIDIA_Jetson/Carrier_Boards/J202/reComputer_J2021_J202_Flash_Jetpack.md",sourceDirName:"Edge/NVIDIA_Jetson/Carrier_Boards/J202",slug:"/reComputer_J2021_J202_Flash_Jetpack",permalink:"/reComputer_J2021_J202_Flash_Jetpack",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/Carrier_Boards/J202/reComputer_J2021_J202_Flash_Jetpack.md",tags:[],version:"current",lastUpdatedBy:"Youjiang",lastUpdatedAt:1724716800,formattedLastUpdatedAt:"Aug 27, 2024",frontMatter:{description:"reComputerJ2021 | J202",title:"J202 Carrier Board",keywords:["Edge","Jetson","reComputer JetPack\u2122_OS_Installation"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_J2021_J202_Flash_Jetpack",last_update:{date:"08/27/2024",author:"Youjiang"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"J101 Carrier Board",permalink:"/reComputer_J1010_J101_Flash_Jetpack"},next:{title:"Flash Jetpack",permalink:"/reComputer_J4012_Flash_Jetpack"}},p={},d=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Supported Module",id:"supported-module",level:2},{value:"Flash JetPack",id:"flash-jetpack",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"EnterForce Recovery Mode",id:"enterforce-recovery-mode",level:3},{value:"Flash to Jetson",id:"flash-to-jetson",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Troubleshooting Installation with NVIDIA SDK Manager",id:"troubleshooting-installation-with-nvidia-sdk-manager",level:3},{value:"Troubleshooting installation using the command line",id:"troubleshooting-installation-using-the-command-line",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],g={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,o.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"getting-started-with-recomputer-j202"},"Getting Started with reComputer J202"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/carrier_board-Photoroom.png"})),(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/recomputer-j202-carrier-board-for-jetson-nano-xavier-nx-without-power-adapter-p-5435.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,a.yg)("p",null,"reComputer J202 has nearly the same design and function as NVIDIA\xae Jetson Xavier NX\u2122 carrier board, perfectly works with Jetson Nano/Xavier NX/TX2 NX module, and consists of 4x USB 3.2 gen 2 ports, M.2 key E for WIFI, M.2 Key M for SSD, RTC, CAN, Raspberry Pi GPIO 40-pin, and so on."),(0,a.yg)("h2",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Perfectly Suited:")," Design for Jetson Nano/Xavier NX/TX2 NX (260-pin SODIMM)."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Rich Peripherals:")," Higher performance stability consists of USB 3.1 ports(4x), M.2 key E for WIFI, M.2 Key M for SSD, RTC, CAN, Raspberry Pi GPIO 40-pin, and so on."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"High Versatility:")," Suitable for complicated AI graphical applications."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Comprehensive Certificates:")," includes FCC, CE, RoHS."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Flexible Customization:")," provides changing accessories modules, logo, and hardware interfaces modification services based on J202 original design.")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Since the Jetson Nano has only one PCIe lane, if the module uses the Jetson Nano to connect to the J202 carrier board, it can only select the M.2 Key M for SSD.")),(0,a.yg)("h2",{id:"specifications"},"Specifications"),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("table",{style:{textAlign:"center"}},(0,a.yg)("tbody",null,(0,a.yg)("tr",null,(0,a.yg)("td",{colspan:2},"Storage"),(0,a.yg)("td",null,"1x M.2 Key M")),(0,a.yg)("tr",null,(0,a.yg)("td",{rowspan:2},"Networking"),(0,a.yg)("td",null,"Ethernet"),(0,a.yg)("td",null,"1x RJ-45 Gigabit Ethernet (10/100/1000M)")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"M.2 KEY E"),(0,a.yg)("td",null,"1x M.2 Key E for WiFi/Bluetooth module")),(0,a.yg)("tr",null,(0,a.yg)("td",{rowspan:7},"I/O"),(0,a.yg)("td",null,"USB"),(0,a.yg)("td",null,"4x USB 3.1 Type-A (10Gbps for Xavier NX, 5Gbps for Nano) ",(0,a.yg)("br",null)," 1x USB2.0 Type-C (Device Mode)")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"Camera"),(0,a.yg)("td",null,"2x CSI")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"Display"),(0,a.yg)("td",null,"1x HDMI 2.1, 1x DP")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"Fan"),(0,a.yg)("td",null,"1x Fan Connector")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"CAN"),(0,a.yg)("td",null,"1x CAN")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"Multifunctional Port"),(0,a.yg)("td",null,"1x 40-Pin Expansion header ",(0,a.yg)("br",null)," 1x 12-Pin Control and UART header")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"RTC"),(0,a.yg)("td",null,"1x RTC 2-pin")),(0,a.yg)("tr",null,(0,a.yg)("td",{colspan:2},"Power"),(0,a.yg)("td",null,"DC 12V/5A")),(0,a.yg)("tr",null,(0,a.yg)("td",{rowspan:2},"Mechanical"),(0,a.yg)("td",null,"Dimensions (W x D)"),(0,a.yg)("td",null,"100mm x 80mm")),(0,a.yg)("tr",null,(0,a.yg)("td",null,"Installation"),(0,a.yg)("td",null,"Desk, wall-mounting")),(0,a.yg)("tr",null,(0,a.yg)("td",{colspan:2},"Operating Temperature"),(0,a.yg)("td",null,"10\u2103~60\u2103"))))),(0,a.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"1000",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/J202_1.jpg"})),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"1000",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/J202_2.jpg"})),(0,a.yg)("h2",{id:"supported-module"},"Supported Module"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/NVIDIAr-Jetson-Nanotm-Module-1.html"},"NVIDIA\xae Jetson Nano\u2122 4GB")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/NVIDIAr-Jetson-Xaviertm-NX-Module-1.html"},"NVIDIA\xae Jetson Xavier\u2122 NX 8GB")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/NVIDIAr-Jetson-Xaviertm-NX-Module-16GB-1.html"},"NVIDIA\xae Jetson Xavier\u2122 NX 16GB"))),(0,a.yg)("h2",{id:"flash-jetpack"},"Flash JetPack"),(0,a.yg)("admonition",{type:"danger"},(0,a.yg)("p",{parentName:"admonition"},"Flashing JetPack will erase all data on the device. Please proceed with caution."),(0,a.yg)("p",{parentName:"admonition"},"If you purchased the complete system rather than just the carrier board, it will come pre-installed with the JetPack operating system, allowing you to start it up and use it directly. However, you can also follow the tutorial below to install a new operating system if you prefer.")),(0,a.yg)("p",null,"The following content will demonstrate how to flash the JetPack 4.6.1 system onto the J2021. You can refer to this process to flash your desired JetPack version onto other device."),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Refer ",(0,a.yg)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetson-linux-archive"},"here")," to determine the supported system versions for different ",(0,a.yg)("a",{parentName:"p",href:"#supported-module"},"Jetson modules"),".")),(0,a.yg)("h3",{id:"prerequisite"},"Prerequisite"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Host Computer")," with ",(0,a.yg)("strong",{parentName:"li"},"Ubuntu 18.04 OS or Ubuntu 20.04 OS")),(0,a.yg)("li",{parentName:"ul"},"reComputer J1020/J2021/J2022 or J202 carrier board + Nvidia Jetson module"),(0,a.yg)("li",{parentName:"ul"},"9V-12V/5A Power Supply"),(0,a.yg)("li",{parentName:"ul"},"USB Type-C cable"),(0,a.yg)("li",{parentName:"ul"},"Jumper pin or Female-to-Female Dupont wire")),(0,a.yg)("h3",{id:"enterforce-recovery-mode"},"EnterForce Recovery Mode"),(0,a.yg)("p",null,"Before we can move on to the installation steps, we need to make sure that our reComputer is in the force recovery mode."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1.")," Before you start, you need to disconnect power of the reComputer."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2.")," To enter recovery mode, you need to connect ",(0,a.yg)("strong",{parentName:"p"},"FC REC")," and ",(0,a.yg)("strong",{parentName:"p"},"GND")," using jumpers."),(0,a.yg)("table",{align:"center"},(0,a.yg)("tbody",null,(0,a.yg)("tr",null,(0,a.yg)("th",null," "),(0,a.yg)("th",{align:"center"},"Button Header"),(0,a.yg)("th",{align:"center"},"Description"),(0,a.yg)("th",{align:"center"},"Button Header"),(0,a.yg)("th",{align:"center"},"Description")),(0,a.yg)("tr",null,(0,a.yg)("td",{rowSpan:6},(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/J202-b.png"}))),(0,a.yg)("td",{align:"center"},"1"),(0,a.yg)("td",{align:"center"},"PWR BTN"),(0,a.yg)("td",{align:"center"},"7"),(0,a.yg)("td",{align:"center"},"AUTO ON")),(0,a.yg)("tr",null,(0,a.yg)("td",{align:"center"},"2"),(0,a.yg)("td",{align:"center"},"GND"),(0,a.yg)("td",{align:"center"},"8"),(0,a.yg)("td",{align:"center"},"DISABLE")),(0,a.yg)("tr",null,(0,a.yg)("td",{align:"center"},"3"),(0,a.yg)("td",{align:"center"},"FC REC"),(0,a.yg)("td",{align:"center"},"9"),(0,a.yg)("td",{align:"center"},"UART TXD")),(0,a.yg)("tr",null,(0,a.yg)("td",{align:"center"},"4"),(0,a.yg)("td",{align:"center"},"GND"),(0,a.yg)("td",{align:"center"},"10"),(0,a.yg)("td",{align:"center"},"UART RXD")),(0,a.yg)("tr",null,(0,a.yg)("td",{align:"center"},"5"),(0,a.yg)("td",{align:"center"},"SYS RET"),(0,a.yg)("td",{align:"center"},"11"),(0,a.yg)("td",{align:"center"},"LED +")),(0,a.yg)("tr",null,(0,a.yg)("td",{align:"center"},"6"),(0,a.yg)("td",{align:"center"},"GND"),(0,a.yg)("td",{align:"center"},"12"),(0,a.yg)("td",{align:"center"},"LED -")))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 3.")," Power up the reComputer with 12V/5A DC cable on the left of the reComputer and use a Type-C cable to connect the Linux Host PC on the right of the reComputer."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 4.")," On the Linux host PC screen, we can right click the mouse to open a Terminal and enter the command ",(0,a.yg)("inlineCode",{parentName:"p"},"lsusb"),". When the returned content has the ",(0,a.yg)("inlineCode",{parentName:"p"},"ID 0955:xxxx NVidia Corp.")," in it, it means that your J202 Carrier Board is in force recovery mode and you can proceed to the subsequent operations."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png"})),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"For NVIDIA\xae Jetson Nano\u2122: 0955:7f21 NVidia Corp"),(0,a.yg)("li",{parentName:"ul"},"For NVIDIA\xae Jetson Xavier\u2122 NX: 0955:7e19 NVidia Corp"))),(0,a.yg)("h3",{id:"flash-to-jetson"},"Flash to Jetson"),(0,a.yg)("p",null,"There are two optional ways of flash JetPack OS into the reComputer J2021, For the beginners to NVIDIA Jetson, we highly recommand NVIDIA SDK Manager:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#flashing-jetpack-os-via-nvidia-sdk-manager"},"Flashing JetPack OS via NVIDIA SDK Manage")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#flashing-to-emmc-with-command-line"},"Flashing JetPack OS via Command Line"))),(0,a.yg)(r.A,{mdxType:"Tabs"},(0,a.yg)(i.A,{value:"SDK Manager",label:"SDK Manager",mdxType:"TabItem"},(0,a.yg)("p",null,"The NVIDIA SDK Manager is an all-in-one tool that bundles developer software and provides an end-to-end development environment setup solution for NVIDIA SDKs. Thus, it is recommended for the beginners."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"}," In this tutorial, we will use Ubuntu 18.04 LTS operating system on the host computer and the Jetpack Verison to be install is 4.6.1 in this guide.")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1."),"  Install NVIDIA SDK Manager on the Linux Host PC"),(0,a.yg)("p",null,"First of all you need to create a  ",(0,a.yg)("a",{href:"https://developer.nvidia.com/login",target:"_blank"},"NVIDIA account")," in order to use sdkmanager. Then on the Linux Host PC download the ",(0,a.yg)("a",{href:"https://developer.nvidia.com/nvidia-sdk-manager",target:"_blank"},"NVIDIA SDK Manager")," from the NVIDIA official website."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2."),"  Open NVIDIA SDK Manager and login"),(0,a.yg)("p",null,"On the Linux host PC screen, we can right click the mouse and open a Terminal. Then we can type the command below to start the SDK Manager:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"sdkmanager\n")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"The first time you use NVIDIA SDK Manager, a web page will pop up prompting you to log in with your previously registered NVIDIA account.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 3."),"  Select the target device"),(0,a.yg)("p",null,"Since we have already connected the reComputer J2021, there will be a window pop up to let you select the hardware device."),(0,a.yg)("p",null,"The reComputer J2021 has equipped with ",(0,a.yg)("strong",{parentName:"p"},"NVIDIA Jetson Xavier 8GB module"),", so we can choose ",(0,a.yg)("inlineCode",{parentName:"p"},"Jetson Xavier NX"),"(The first option)."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/J202/1.png"})),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Please note that the interface of different versions of SDK Manager may vary slightly. Choose the appropriate options based on your actual situation.")),(0,a.yg)("p",null,"There are more selections for you to choose in the first screen:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("strong",{parentName:"li"},"Jetson")," in the Product Category panel need to be selected."),(0,a.yg)("li",{parentName:"ul"},"In the Hardware Configuration panel, we recommend that you ",(0,a.yg)("strong",{parentName:"li"},"do not select Host Machine"),". This will take more time to install the NVIDIA components for your current Ubuntu host. You can choose it if you need."),(0,a.yg)("li",{parentName:"ul"},"In the Target Operating System panel, we can select different ",(0,a.yg)("strong",{parentName:"li"},"operating system")," and ",(0,a.yg)("strong",{parentName:"li"},"JetPack version"),". But be careful the version of JetPack, different modules may support different type of JetPack such as ",(0,a.yg)("inlineCode",{parentName:"li"},"JetPack 4.6.1"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"JetPack 5.1.x")," and so on. We recommand ",(0,a.yg)("strong",{parentName:"li"},"JetPack 4.6.1")," here."),(0,a.yg)("li",{parentName:"ul"},"In the Additional SDKs, since the storage space of eMMC is only 16GB, it will be out of memory if we install DeepStream here.")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png"})),(0,a.yg)("p",null,"Click Continue to proceed to the next step."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 4."),"  Review wanted components"),(0,a.yg)("p",null,"From ",(0,a.yg)("strong",{parentName:"p"},"Details and License"),", you can expand the host components and target components panels to review the components that will be installed on your system."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png"})),(0,a.yg)("p",null,"If you only need to install the system, you can uncheck the SDK component."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png"})),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"When choosing which components to install, you may want to keep an eye on the capacity used. The built-in eMMC size is only 16GB, please allocate and use this space wisely according to your actual needs."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png"})),"After actual testing, there is only about 500MB of eMMC space left after installing the full set of SDK components.",(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg"})),"If you want to check how to solve the problem of insufficient capacity, please refer to:",(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space"},"https://wiki.seeedstudio.com/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space")," .")),(0,a.yg)("p",null,"If you want SDK Manager to download all the files to a location other than the default path, go to the Download & Install Options located at the bottom of the screen, then select the path you wish to use."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png"})),(0,a.yg)("p",null,"Select Continue to proceed to the next step."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 5.")," Install the system"),(0,a.yg)("p",null,"Before the installation begins, SDK Manager prompts you to enter your ",(0,a.yg)("inlineCode",{parentName:"p"},"sudo")," password."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png"})),(0,a.yg)("p",null,"After a while, we will be asked to set up the new system for our reComputer. Since we manually force into recovery mode, we select ",(0,a.yg)("inlineCode",{parentName:"p"},"Manual setup: set the target to Force Recovery Mode via manual operations")," here. Meanwhile, we choose the default ",(0,a.yg)("strong",{parentName:"p"},"Pre-Config"),"."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png"})),(0,a.yg)("p",null,"After that, we need to enter the name and password of our new Jetson system to our reComputer, it is set by yourself."),(0,a.yg)("p",null,"When ready, click ",(0,a.yg)("inlineCode",{parentName:"p"},"Flash")," to continue."),(0,a.yg)("p",null,"The display shows the progress of the download and installation of the software. Please wait patiently for the installation to complete."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"(Optional)Step 6.")," Install the SDK components"),(0,a.yg)("p",null,"If you checked the installation of the component in the previous ",(0,a.yg)("strong",{parentName:"p"},"step 4"),", you will need to go through this step."),(0,a.yg)("p",null,"After a moment, you will be able to see a new window pop up in the NVIDIA SDK Manager, prompting you that you need to connect to your device via IP address. It means the system has been alreadly installed and the components installing will be proceeded."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png"})),(0,a.yg)("p",null,"In this case, we can ",(0,a.yg)("strong",{parentName:"p"},"pull out the jumper")," and restart the reComputer. Then we need to connect the reComputer to a monitor via HDMI, enter the password you entered in ",(0,a.yg)("strong",{parentName:"p"},"step 4"),", and log in to the main interface."),(0,a.yg)("p",null,"At this point you need to connect the reComputer to the same LAN as the Linux host PC and determine the ",(0,a.yg)("strong",{parentName:"p"},"IP address")," of the Jetson by using the command ",(0,a.yg)("inlineCode",{parentName:"p"},"ifconfig"),"."),(0,a.yg)("p",null,"Go back to the Linux host PC and enter the IP address you just obtained. NVIDIA SDK Manager will try to connect to the Jetson device and proceed to complete the installation of the next SDK components."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png"})),(0,a.yg)("p",null,"When you see the following window appear, the installation has been done. You can start using Jetson or continue to follow the steps below to complete some basic configuration of your new system."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png"})),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Be sure to unplug the jumper and exit force recovery mode before re-powering into the system."))),(0,a.yg)(i.A,{value:"Command Line",label:"Command Line",mdxType:"TabItem"},(0,a.yg)("p",null,"Thanks to the freedom to customize the BSP(NVIDIA Linux Driver Package), flashing JetPack OS via command line can be very easy for the Linux knowledge base users."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1.")," Download the proper NVIDIA Linux Driver Package"),(0,a.yg)("p",null,"On the ",(0,a.yg)("strong",{parentName:"p"},"Linux host PC"),", we need to open a browser and go the ",(0,a.yg)("a",{href:"https://developer.nvidia.com/embedded/jetson-linux-archive",target:"_blank"},(0,a.yg)("span",null,"Jetson Linux Archive")),". First we should check if the version of Jetson Linux is supported our reComputer Jetson module."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack2.png"})),(0,a.yg)("p",null,'Once you find the proper version, click to go to the downloaded page. Find and click the "L4T Driver Package (BSP)" and "Sample Root Filesystem" to download the driver files. The names of the files are like ',(0,a.yg)("inlineCode",{parentName:"p"},"Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Jetson-210_Linux_Rxx.x.x_aarch64.tbz2"),"."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk2.png"})),(0,a.yg)("p",null,"As the example, we choose the NVIDIA L4T 35.1 version since it is included as part of JetPack 5.0.2 and supports the Jetson Xavier NX module. The names of the files:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2"),(0,a.yg)("li",{parentName:"ul"},"Jetson_Linux_R35.1.0_aarch64.tbz2")),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"You can also choose other version like NVIDIA L4T 32.7.2 which supports Jetpack 4.6.2.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2."),"  Unzip Package Files and Assemble the Rootfs via Command Line"),(0,a.yg)("p",null,"On the Linux host PC, we should find a folder and store the package files we download before. Then open a command line window(Terminal) at the folder and use the command line below to unzip the files and assemble the rootfs:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"tar xf ${L4T_RELEASE_PACKAGE}\ncd Linux_for_Tegra/rootfs/\nsudo tar xpf ../../${SAMPLE_FS_PACKAGE}\ncd ..\nsudo ./apply_binaries.sh\n")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"${}")," is where you put the names of the files.")),(0,a.yg)("p",null,"As the example of ",(0,a.yg)("strong",{parentName:"p"},"NVIDIA L4T 35.1"),", the downloaded files are stored in ",(0,a.yg)("inlineCode",{parentName:"p"},"/Desktop/L4T_Drivers"),", so under the '/Desktop/L4T_Drivers' path we open the command line window(Terminal) and execute the following command."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"tar xf Jetson_Linux_R35.1.0_aarch64.tbz2\ncd Linux_for_Tegra/rootfs/\nsudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2\ncd ..\nsudo ./apply_binaries.sh\n")),(0,a.yg)("p",null,"The output should be like:"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 3."),"  Flash the System to reComputer"),(0,a.yg)("p",null,"Since we alreadly force the reComputer J2021 into the recovery mode and the module is Jetson Xavier NX. We can directly flash the system into the reComputer execute following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"sudo ./flash.sh jetson-xavier-nx-devkit-emmc mmcblk0p1\n")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png"})),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Flashing L4T takes about 10 minutes, or more under a slow host computer.")),(0,a.yg)("p",null,"At this moment, we can unplug the jumper and then power up the reComputer again to use it."))),(0,a.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.yg)("h3",{id:"troubleshooting-installation-with-nvidia-sdk-manager"},"Troubleshooting Installation with NVIDIA SDK Manager"),(0,a.yg)("p",null,"There are many causes of various installation errors. Below is a checklist of common installation issues, which may help you recover from a broken installation."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Review the summary table to identify which component failed."),(0,a.yg)("p",{parentName:"li"},'a. Expand the group with the "Error" status.'),(0,a.yg)("p",{parentName:"li"},"b. When you find the failed component, click the details icon to the right of Install Error to be redirected to the Terminal tab, which will display the exact error."))),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png"})),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"If the error is related to an environment issue, such as a broken apt repository or missing prerequisite, try to fix it manually, then click the Retry Failed Items button.")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png"})),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Retrying the installation is also available in two other ways:"),(0,a.yg)("p",{parentName:"li"},"a. From ",(0,a.yg)("strong",{parentName:"p"},"Flashing to eMMC with SDK Manager -- Step 3"),', use the Repair/Uninstall button to get to the Manage NVIDIA SDKs page. If needed, expand the SDK that has the "Broken" status, then click Repair for the relevant part (Host or Target).'))),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png"})),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"At ",(0,a.yg)("strong",{parentName:"p"},"Flashing to eMMC with SDK Manager -- Step 3"),", select the required SDK and run through the installation again.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Finally, try to uninstall and reinstall the relevant SDK."))),(0,a.yg)("h3",{id:"troubleshooting-installation-using-the-command-line"},"Troubleshooting installation using the command line"),(0,a.yg)("p",null,"The command line installation method is relatively simple, and is often prone to error in scenarios where force recovery mode is used."),(0,a.yg)("p",null,"If you encounter the error shown below in ",(0,a.yg)("strong",{parentName:"p"},"Flashing to eMMC with command-line -- Step 2"),", you probably did not succeed in getting the Jetson-202 Carrier Board into force recovery mode. Please pay special attention, do not enter force recovery mode with the Jetson-202 Carrier Board powered on, as this is not valid."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg"})),(0,a.yg)("p",null,"If you can't get into the system in ",(0,a.yg)("strong",{parentName:"p"},"Flashing to eMMC with command-line -- Step 3")," and are stuck on the boot up display command line, you probably did not exit force recovery mode. Likewise, it is not valid for you to unplug the jumper to exit force recovery mode while the Jetson-202 Carrier Board is powered up, this all needs to be done while you are powered down."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg"})),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"If more storage space is needed, we can use SD card to expand the capacity, or burn the system on SD card, you can refer to our recommended solution  ",(0,a.yg)("a",{parentName:"p",href:"/J101_Enable_SD_Card"},"Flash System on SD card"))),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);