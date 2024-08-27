"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[14266],{15680:(e,r,n)=>{n.d(r,{xA:()=>g,yg:()=>m});var t=n(96540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),p=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},g=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,m=u["".concat(s,".").concat(c)]||u[c]||y[c]||a;return n?t.createElement(m,i(i({ref:r},g),{},{components:n})):t.createElement(m,i({ref:r},g))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85352:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var t=n(9668),o=(n(96540),n(15680));const a={description:"reTerminal-FAQ",title:"The screen orientation is incorrect after installing Raspberry Pi OS",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Incorrect_screen_orientation_on_RPiOS_Bullseye",last_update:{date:"11/24/2023",author:"Seraphina"}},i=void 0,l={unversionedId:"FAQ/reTerminal/Incorrect_screen_orientation_on_RPiOS_Bullseye",id:"FAQ/reTerminal/Incorrect_screen_orientation_on_RPiOS_Bullseye",title:"The screen orientation is incorrect after installing Raspberry Pi OS",description:"reTerminal-FAQ",source:"@site/docs/FAQ/reTerminal/Incorrect_screen_orientation_on_RPiOS_Bullseye.md",sourceDirName:"FAQ/reTerminal",slug:"/Incorrect_screen_orientation_on_RPiOS_Bullseye",permalink:"/Incorrect_screen_orientation_on_RPiOS_Bullseye",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/FAQ/reTerminal/Incorrect_screen_orientation_on_RPiOS_Bullseye.md",tags:[],version:"current",lastUpdatedBy:"Seraphina",lastUpdatedAt:1700784e3,formattedLastUpdatedAt:"Nov 24, 2023",frontMatter:{description:"reTerminal-FAQ",title:"The screen orientation is incorrect after installing Raspberry Pi OS",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Incorrect_screen_orientation_on_RPiOS_Bullseye",last_update:{date:"11/24/2023",author:"Seraphina"}}},s={},p=[{value:"Raspberry Pi OS Bullseye",id:"raspberry-pi-os-bullseye",level:3},{value:"Raspberry Pi OS Bookworm",id:"raspberry-pi-os-bookworm",level:3}],g={toc:p},u="wrapper";function y(e){let{components:r,...n}=e;return(0,o.yg)(u,(0,t.A)({},g,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"raspberry-pi-os-bullseye"},"Raspberry Pi OS Bullseye"),(0,o.yg)("p",null,"If you notice an erroneous screen orientation after installing ",(0,o.yg)("strong",{parentName:"p"},"Raspberry Pi OS Bullseye"),", do as follows:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Step 1.")," After flashing ",(0,o.yg)("strong",{parentName:"p"},"Raspberry Pi OS Bullseye")," to reTerminal eMMC, follow ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os"},"this guide")," to install the necessary drivers")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Step 2.")," Create a new file named ",(0,o.yg)("strong",{parentName:"p"},"monitors.xml")," under ",(0,o.yg)("strong",{parentName:"p"},".config")," directory"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"sudo vi ~/.config/monitors.xml\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step 3.")," Copy the following content into the above file to explicitly set the LCD display (DSI-1) and save the file by typing ",(0,o.yg)("strong",{parentName:"li"},":wq")," after pressing ",(0,o.yg)("strong",{parentName:"li"},"ESC"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},'<monitors version="2">\n  <configuration>\n    <logicalmonitor>\n      <x>0</x>\n      <y>0</y>\n      <primary>yes</primary>\n      <monitor>\n        <monitorspec>\n          <connector>DSI-1</connector>\n          <vendor>unknown</vendor>\n          <product>unknown</product>\n          <serial>unknown</serial>\n        </monitorspec>\n        <mode>\n          <width>720</width>\n          <height>1280</height>\n          <rate>60.000</rate>\n        </mode>\n      </monitor>\n      <transform>\n        <rotation>right</rotation>\n      </transform>\n    </logicalmonitor>\n  </configuration>\n</monitors>\n')),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step 4.")," Open ",(0,o.yg)("strong",{parentName:"li"},"/boot/config.txt"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"sudo vi /boot/config.txt\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step 5.")," Add the following into the file")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"dtoverlay=reTerminal,tp_rotate=1\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step 6.")," Reboot reTerminal")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"sudo reboot\n")),(0,o.yg)("p",null,"Now the screen will be displayed in the correct orientation on Raspberry Pi OS Bullseye!"),(0,o.yg)("h3",{id:"raspberry-pi-os-bookworm"},"Raspberry Pi OS Bookworm"),(0,o.yg)("p",null,"If you notice an erroneous screen orientation after installing ",(0,o.yg)("strong",{parentName:"p"},"Raspberry Pi OS Bookworm"),", do as follows:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step 1.")," After flashing ",(0,o.yg)("strong",{parentName:"li"},"Raspberry Pi OS Bookworm")," to reTerminal eMMC, follow ",(0,o.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os"},"this guide")," to install the necessary drivers")),(0,o.yg)("p",null,"If you configured a user other than root, and the Bookworm image from July 24,  I found I had to do:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"sudo chown $USER ~/.config\nsudo chgrp $USER ~/.config\nsudo chmod u+rwx ~/.config\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step 2.")," Open .config/wayfire.ini")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"sudo vi ~/.config/wayfire.ini\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step 3.")," Copy the following content into the above file to explicitly set the LCD display (DSI-1) and save the file by typing ",(0,o.yg)("strong",{parentName:"li"},":wq")," after pressing ",(0,o.yg)("strong",{parentName:"li"},"ESC"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"[output:DSI-1]\nmode = 720x1280@60\ntransform = 270\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step 4.")," Open ",(0,o.yg)("strong",{parentName:"li"},"/boot/config.txt"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"sudo vi /boot/config.txt\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step 5.")," Add the following into the file")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"dtoverlay=reTerminal\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step 6.")," Reboot reTerminal")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"sudo reboot\n")),(0,o.yg)("p",null,"Now the screen will be displayed in the correct orientation on Raspberry Pi OS Bookworm!"))}y.isMDXComponent=!0}}]);