"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[72829],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>m});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),y=p(r),d=o,m=y["".concat(c,".").concat(d)]||y[d]||u[d]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[y]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(9668),o=(r(96540),r(15680));const i={description:"Remotely connect to Raspberry Pi/reComputer",title:"Remotely connect to Raspberry Pi",keywords:["Raspberry_Pi","Official_Raspberry_Pi_Board"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/remote_connect",last_update:{date:"2/15/2023",author:"jianjing Huang"}},a="Remotely connect to Raspberry Pi/reComputer",s={unversionedId:"Top_Brand/Raspberry_Pi/Official_Raspberry_Pi_Board/remote_connect",id:"Top_Brand/Raspberry_Pi/Official_Raspberry_Pi_Board/remote_connect",title:"Remotely connect to Raspberry Pi",description:"Remotely connect to Raspberry Pi/reComputer",source:"@site/docs/Top_Brand/Raspberry_Pi/Official_Raspberry_Pi_Board/remote_connect.md",sourceDirName:"Top_Brand/Raspberry_Pi/Official_Raspberry_Pi_Board",slug:"/remote_connect",permalink:"/remote_connect",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Raspberry_Pi/Official_Raspberry_Pi_Board/remote_connect.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676419200,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{description:"Remotely connect to Raspberry Pi/reComputer",title:"Remotely connect to Raspberry Pi",keywords:["Raspberry_Pi","Official_Raspberry_Pi_Board"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/remote_connect",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Raspberry Pi 3 Model B",permalink:"/Raspberry_Pi_3_Model_B"},next:{title:"Update EEPROM for Compute Module 4",permalink:"/Raspberry_pi_CM4_update_eeprom"}},c={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Materials Required",id:"materials-required",level:3},{value:"Remote Connection",id:"remote-connection",level:3}],l={toc:p},y="wrapper";function u(e){let{components:t,...r}=e;return(0,o.yg)(y,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"remotely-connect-to-raspberry-pirecomputer"},"Remotely connect to Raspberry Pi/reComputer"),(0,o.yg)("p",null,"It often happens that the user cannot physically access the Raspberry Pi (reComputer or other edge devices) due to certain constraints (such as no additional monitor, etc.). Therefore, it is very necessary to connect the Raspberry Pi remotely. Depending on the operating system you're running, there are several ways to establish a connection to a remote edge devices. In this project, according to using operation system (Linux) of Raspberry Pi, we could use Secure Shell Protocol (SSH) to control machines remotely."),(0,o.yg)("h2",{id:"getting-started"},"Getting Started"),(0,o.yg)("p",null,"SSH, also known as Secure Shell or Secure Socket Shell, is a network protocol that gives users, particularly system administrators, a secure way to access a computer over an unsecured network. SSH is widely used by network administrators to manage systems and applications remotely, enabling them to log in to another computer over a network, execute commands and move files from one computer to another. An SSH server, by default, listens on the standard Transmission Control Protocol (TCP) port 22."),(0,o.yg)("h3",{id:"materials-required"},"Materials Required"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Linux-based devices (Raspberry Pi or reComputer)"),(0,o.yg)("li",{parentName:"ul"},"PC")),(0,o.yg)("h3",{id:"remote-connection"},"Remote Connection"),(0,o.yg)("p",null,"Take Raspberry Pi as an example, we will open the Raspberry Pi SSH port and call it remotely using the SSH interface on the PC. To connect to the Raspberry Pi from the computer, we need to know the IP address of the Pi."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Notice: make sure the PC and Raspberry Pi are under the same LAN.")),(0,o.yg)("p",null,"If your device is reComputer, you can skip step 1 to step 3 since the ssh port is open by default.There are the following steps to connect Raspberry Pi with the computer."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 1.")," Open a new terminal on Raspberry Pi and execute ",(0,o.yg)("inlineCode",{parentName:"p"},"sudo raspi-config."),"The menu will be shown as below and we need to select \u201cInterfacing Options\u201d and then press ENTER"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_2.png"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 2.")," Select \u201cSSH\u201d and press ENTER."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_3.png"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 3.")," Select \u201cYes\u201d and press ENTER."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_4.png"})),(0,o.yg)("p",null,"After a while, we will get a message \u201cThe SSH server is enabled\u201d."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_5.png"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 4."),"  Open a Terminal on Raspberry Pi and execute ",(0,o.yg)("inlineCode",{parentName:"p"},"ifconfig"),"\nWe can see the IP address of Raspberry Pi shown as below:"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_6.png"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 5.")," Open the PC\u2019s Terminal and execute ",(0,o.yg)("inlineCode",{parentName:"p"},"ssh pi@192.168.6.215")," and input Raspberry Pi's password. The PC then will connect to Raspberry Pi remotely."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_7.png"})))}u.isMDXComponent=!0}}]);