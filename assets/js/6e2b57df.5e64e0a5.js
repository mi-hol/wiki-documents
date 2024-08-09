"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91714],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>h});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),g=a,h=d["".concat(i,".").concat(g)]||d[g]||c[g]||o;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(96540),a=r(20053);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,s),hidden:r},t)}},11470:(e,t,r)=>{r.d(t,{A:()=>b});var n=r(58168),a=r(96540),o=r(20053),s=r(23104),l=r(56347),i=r(57485),u=r(31682),p=r(89466);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function c(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function g(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=c(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,u]=h({queryString:r,groupId:n}),[d,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),y=(()=>{const e=i??d;return g({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var y=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function _(e){let{className:t,block:r,selectedValue:l,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=p.indexOf(t),n=u[r].value;n!==l&&(d(t),i(n))},g=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:g,onClick:c},s,{className:(0,o.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":l===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=m(e);return a.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},a.createElement(_,(0,n.A)({},e,t)),a.createElement(w,(0,n.A)({},e,t)))}function b(e){const t=(0,y.A)();return a.createElement(v,(0,n.A)({key:String(t)},e))}},39942:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=r(58168),a=(r(96540),r(15680)),o=r(11470),s=r(19365);const l={description:"This article provides a detailed guide on how to flash the JetPack operating system onto the A608 carrier board, which supports NVIDIA Jetson Orin NX/Nano modules. It covers everything from the prerequisites and entering force recovery mode, to downloading the system image and drivers, and finally flashing the operating system onto an NVMe SSD, USB flash drive, or SD card, ensuring that users can successfully complete the system installation and startup.",title:"A608 Carrier Board",keywords:["Edge","reComputer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_A608_Flash_System",last_update:{date:"01/19/2024",author:"Youjiang"}},i="Flash JetPack OS to A608 Carrier Board (NVIDIA Jetson Orin NX/Nano supported)",u={unversionedId:"Edge/NVIDIA_Jetson/Carrier_Boards/A608/A608_Flash_JetPack",id:"Edge/NVIDIA_Jetson/Carrier_Boards/A608/A608_Flash_JetPack",title:"A608 Carrier Board",description:"This article provides a detailed guide on how to flash the JetPack operating system onto the A608 carrier board, which supports NVIDIA Jetson Orin NX/Nano modules. It covers everything from the prerequisites and entering force recovery mode, to downloading the system image and drivers, and finally flashing the operating system onto an NVMe SSD, USB flash drive, or SD card, ensuring that users can successfully complete the system installation and startup.",source:"@site/docs/Edge/NVIDIA_Jetson/Carrier_Boards/A608/A608_Flash_JetPack.md",sourceDirName:"Edge/NVIDIA_Jetson/Carrier_Boards/A608",slug:"/reComputer_A608_Flash_System",permalink:"/reComputer_A608_Flash_System",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/Carrier_Boards/A608/A608_Flash_JetPack.md",tags:[],version:"current",lastUpdatedBy:"Youjiang",lastUpdatedAt:1705622400,formattedLastUpdatedAt:"Jan 19, 2024",frontMatter:{description:"This article provides a detailed guide on how to flash the JetPack operating system onto the A608 carrier board, which supports NVIDIA Jetson Orin NX/Nano modules. It covers everything from the prerequisites and entering force recovery mode, to downloading the system image and drivers, and finally flashing the operating system onto an NVMe SSD, USB flash drive, or SD card, ensuring that users can successfully complete the system installation and startup.",title:"A608 Carrier Board",keywords:["Edge","reComputer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_A608_Flash_System",last_update:{date:"01/19/2024",author:"Youjiang"}},sidebar:"ProductSidebar",previous:{title:"A607 Carrier Board",permalink:"/reComputer_A607_Flash_System"},next:{title:"reComputer-Jetson\xae Guide",permalink:"/reComputer_Intro"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enter Force Recovery Mode",id:"enter-force-recovery-mode",level:2},{value:"Download the system image package to the PC host",id:"download-the-system-image-package-to-the-pc-host",level:2},{value:"Download the system image package to the PC host",id:"download-the-system-image-package-to-the-pc-host-1",level:2},{value:"Download the system image package to the PC host",id:"download-the-system-image-package-to-the-pc-host-2",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:d},g="wrapper";function h(e){let{components:t,...r}=e;return(0,a.yg)(g,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"flash-jetpack-os-to-a608-carrier-board-nvidia-jetson-orin-nxnano-supported"},"Flash JetPack OS to A608 Carrier Board (NVIDIA Jetson Orin NX/Nano supported)"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608CB.jpg"})),(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Jetson-A608-Carrier-Board-for-Orin-NX-Orin-Nano-Series-p-5853.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,a.yg)("p",null,"In this wiki, we will show you how to flash Jetpack to an NVMe SSD and a USB Flash drive connected to the A608 Carrier Board which supports both NVIDIA Jetson Orin NX module and NVIDIA Jetson Orin Nano module."),(0,a.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Ubuntu Host PC "),(0,a.yg)("li",{parentName:"ul"},"A608 Carrier Board with Jetson Orin NX or Jetson Orin Nano module"),(0,a.yg)("li",{parentName:"ul"},"USB Type-C data transmission cable")),(0,a.yg)("h2",{id:"enter-force-recovery-mode"},"Enter Force Recovery Mode"),(0,a.yg)("p",null,"Before we can move on to the installation steps, we need to make sure that the board is in force recovery mode."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1.")," Turn off the system power, please ensure that the power is turned off instead of entering standby mode."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2.")," Use the Type C to USB Type A cable to connect the carrier and host."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 3.")," Use the GH1.25MM locking terminal wire to short-circuit pin1 and pin2 at Recovery to make it enter recovery mode."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/hardware_connection.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 4.")," Power up the device."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 5.")," On the Linux host PC, open a Terminal window and enter the command ",(0,a.yg)("inlineCode",{parentName:"p"},"lsusb"),". If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"For Orin NX 16GB: ",(0,a.yg)("strong",{parentName:"li"},"0955:7323 NVidia Corp")),(0,a.yg)("li",{parentName:"ul"},"For Orin NX 8GB: ",(0,a.yg)("strong",{parentName:"li"},"0955:7423 NVidia Corp")),(0,a.yg)("li",{parentName:"ul"},"For Orin Nano 8GB: ",(0,a.yg)("strong",{parentName:"li"},"0955:7523 NVidia Corp")),(0,a.yg)("li",{parentName:"ul"},"For Orin Nano 4GB: ",(0,a.yg)("strong",{parentName:"li"},"0955:7623 NVidia Corp"))),(0,a.yg)("p",null,"The below image is for Orin NX 8GB"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/lsusb.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 6.")," Remove the short-circuit wire"),(0,a.yg)(o.A,{mdxType:"Tabs"},(0,a.yg)(s.A,{value:"JP5.1.1",label:"JP5.1.1",mdxType:"TabItem"},(0,a.yg)("h2",{id:"download-the-system-image-package-to-the-pc-host"},"Download the system image package to the PC host"),(0,a.yg)("p",null,"Here we will use NVIDIA L4T 35.3.1 to install Jetpack 5.1.1 on the A608 Carrier Board with Jetson Orin NX module."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1.")," ",(0,a.yg)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetson-linux-r3531"},"Download")," the NVIDIA drivers on the host PC. The required drivers are shown below:"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/nvidia_driver.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2.")," ",(0,a.yg)("a",{parentName:"p",href:"http://recomputer-jetson.oss-us-west-1.aliyuncs.com/A608/608_jp511.zip"},"Download")," peripheral drivers and put all the drivers in same folder."),(0,a.yg)("p",null,"Now you will see three compressed files in the same folder:"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/drivers.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 3.")," Prepare system image."),(0,a.yg)("p",null,"Open a terminal window on the host PC and run the following command\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cd <path to drivers>\nsudo apt install unzip \ntar xf Jetson_Linux_R35.3.1_aarch64.tbz2\nsudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/\ncd Linux_for_Tegra/\nsudo ./apply_binaries.sh\nsudo ./tools/l4t_flash_prerequisites.sh\ncd ..\nunzip 608_jp511.zip\ncp -r ./608_jp511/Linux_for_Tegra/* ./Linux_for_Tegra/\n\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 4.")," Flash the system to A608."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Flash to NVMe",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal\n'))),(0,a.yg)("li",{parentName:"ul"},"Flash to USB",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal\n'))),(0,a.yg)("li",{parentName:"ul"},"Flash to SD",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device mmcblk1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal\n')))),(0,a.yg)("p",null,"You will see the following output if the flashing process is successful."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/flash.png"})),(0,a.yg)("p",null,"After flashing, power on Jetson Device again and log into the system.")),(0,a.yg)(s.A,{value:"JP5.1.2",label:"JP5.1.2",mdxType:"TabItem"},(0,a.yg)("h2",{id:"download-the-system-image-package-to-the-pc-host-1"},"Download the system image package to the PC host"),(0,a.yg)("p",null,"Here we will use NVIDIA L4T 35.4.1 to install Jetpack 5.1.2 on the A608 Carrier Board with Jetson Orin NX module."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1.")," ",(0,a.yg)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetson-linux-r3541"},"Download")," the NVIDIA drivers on the host PC. The required drivers are shown below:"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P1.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2.")," ",(0,a.yg)("a",{parentName:"p",href:"http://recomputer-jetson.oss-us-west-1.aliyuncs.com/A608/608_jp512.zip"},"Download")," peripheral drivers and put all the drivers in same folder."),(0,a.yg)("p",null,"Now you will see three compressed files in the same folder:"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P2.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 3.")," Prepare system image."),(0,a.yg)("p",null,"Open a terminal window on the host PC and run the following command\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cd <path to drivers>\nsudo apt install unzip \ntar xf Jetson_Linux_R35.4.1_aarch64.tbz2\nsudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/\ncd Linux_for_Tegra/\nsudo ./apply_binaries.sh\nsudo ./tools/l4t_flash_prerequisites.sh\ncd ..\nunzip a608_jp512.zip\ncp -r ./608_jp512/Linux_for_Tegra/* ./Linux_for_Tegra/\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 4.")," Flash the system to A608."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Flash to NVMe",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal\n'))),(0,a.yg)("li",{parentName:"ul"},"Flash to USB",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal\n'))),(0,a.yg)("li",{parentName:"ul"},"Flash to SD",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device mmcblk1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal\n')))),(0,a.yg)("p",null,"You will see the following output if the flashing process is successful."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png"})),(0,a.yg)("p",null,"After flashing, power on Jetson Device again and log into the system.")),(0,a.yg)(s.A,{value:"JP6.0",label:"JP6.0",mdxType:"TabItem"},(0,a.yg)("h2",{id:"download-the-system-image-package-to-the-pc-host-2"},"Download the system image package to the PC host"),(0,a.yg)("p",null,"Here we will use NVIDIA L4T 36.3 to install Jetpack 6.0 on the A608 Carrier Board with Jetson Orin NX module."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1.")," ",(0,a.yg)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetson-linux-r363"},"Download")," the NVIDIA drivers on the host PC. The required drivers are shown below:"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P1.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2.")," ",(0,a.yg)("a",{parentName:"p",href:"https://recomputer-jetson.oss-us-west-1.aliyuncs.com/A608/608_jp60.zip"},"Download")," peripheral drivers and put all the drivers in same folder."),(0,a.yg)("p",null,"Now you will see three compressed files in the same folder:"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/6.0.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 3.")," Prepare system image."),(0,a.yg)("p",null,"Open a terminal window on the host PC and run the following command\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cd <path to drivers>\nsudo apt install unzip \ntar xf Jetson_Linux_R35.4.1_aarch64.tbz2\nsudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/\ncd Linux_for_Tegra/\nsudo ./apply_binaries.sh\nsudo ./tools/l4t_flash_prerequisites.sh\ncd ..\nunzip a608_jp60.zip\nsudo cp -r ./608_jp60/Linux_for_Tegra/* ./Linux_for_Tegra/\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 4.")," Flash the system to A608."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Flash to NVMe",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal\n'))),(0,a.yg)("li",{parentName:"ul"},"Flash to USB",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal\n'))),(0,a.yg)("li",{parentName:"ul"},"Flash to SD",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device mmcblk1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal\n')))),(0,a.yg)("p",null,"You will see the following output if the flashing process is successful."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png"})),(0,a.yg)("p",null,"After flashing, power on Jetson Device again and log into the system."))),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}h.isMDXComponent=!0}}]);