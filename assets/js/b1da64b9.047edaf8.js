"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[87864],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var i=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=i.createContext({}),l=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(a.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=l(n),y=r,g=c["".concat(a,".").concat(y)]||c[y]||d[y]||o;return n?i.createElement(g,s(s({ref:t},p),{},{components:n})):i.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=y;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u[c]="string"==typeof e?e:r,s[1]=u;for(var l=2;l<o;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}y.displayName="MDXCreateElement"},47897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var i=n(9668),r=(n(96540),n(15680));const o={description:"Seeed Studio XIAO nRF52840 with CircuitPython",title:"CircuitPython",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/XIAO-BLE_CircutPython",last_update:{date:"10/30/2023",author:"\u5434\u98de\u98de"}},s="\u5b66\u4e60\u4f7f\u7528 CircuitPython \u5bf9 XIAO nRF52840 \u8fdb\u884c\u7f16\u7a0b",u={unversionedId:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/CN_XIAO-BLE_CircutPython",id:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/CN_XIAO-BLE_CircutPython",title:"CircuitPython",description:"Seeed Studio XIAO nRF52840 with CircuitPython",source:"@site/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/CN_XIAO-BLE_CircutPython.md",sourceDirName:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense",slug:"/cn/XIAO-BLE_CircutPython",permalink:"/cn/XIAO-BLE_CircutPython",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/CN_XIAO-BLE_CircutPython.md",tags:[],version:"current",lastUpdatedBy:"\u5434\u98de\u98de",lastUpdatedAt:1698624e3,formattedLastUpdatedAt:"Oct 30, 2023",frontMatter:{description:"Seeed Studio XIAO nRF52840 with CircuitPython",title:"CircuitPython",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/XIAO-BLE_CircutPython",last_update:{date:"10/30/2023",author:"\u5434\u98de\u98de"}},sidebar:"CNSidebar",previous:{title:"Zephyr(RTOS) \u7f16\u7a0b",permalink:"/cn/XIAO-nRF52840-Zephyr-RTOS"},next:{title:"6\u8f74\u52a0\u901f\u5ea6\u8ba1\uff08IMU\uff09\u4f7f\u7528",permalink:"/cn/XIAO-BLE-Sense-IMU-Usage"}},a={},l=[{value:"<strong>\u5f00\u59cb</strong>",id:"\u5f00\u59cb",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u5e94\u7528",id:"\u5e94\u7528",level:3},{value:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",level:2}],p={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u5b66\u4e60\u4f7f\u7528-circuitpython-\u5bf9-xiao-nrf52840-\u8fdb\u884c\u7f16\u7a0b"},"\u5b66\u4e60\u4f7f\u7528 CircuitPython \u5bf9 XIAO nRF52840 \u8fdb\u884c\u7f16\u7a0b"),(0,r.yg)("p",null,"CircuitPython \u662f\u4e00\u79cd\u7f16\u7a0b\u8bed\u8a00\uff0c\u65e8\u5728\u7b80\u5316\u5728\u4f4e\u6210\u672c\u5fae\u63a7\u5236\u5668\u677f\u4e0a\u7f16\u7a0b\u7684\u5b9e\u9a8c\u548c\u5b66\u4e60\u3002\u5b83\u4f7f\u5165\u95e8\u6bd4\u4ee5\u5f80\u4efb\u4f55\u65f6\u5019\u90fd\u66f4\u5bb9\u6613\uff0c\u65e0\u9700\u9884\u5148\u8fdb\u884c\u684c\u9762\u4e0b\u8f7d\u3002\u8bbe\u7f6e\u597d\u770b\u677f\u540e\uff0c\u6253\u5f00\u4efb\u4f55\u6587\u672c\u7f16\u8f91\u5668\uff0c\u7136\u540e\u5f00\u59cb\u7f16\u8f91\u4ee3\u7801\u3002\u5c31\u662f\u8fd9\u4e48\u7b80\u5355\u3002"),(0,r.yg)("h2",{id:"\u5f00\u59cb"},(0,r.yg)("strong",{parentName:"h2"},"\u5f00\u59cb")),(0,r.yg)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1")," \u8fdb\u5165\u5f15\u5bfc\u52a0\u8f7d\u7a0b\u5e8f\u6a21\u5f0f"),(0,r.yg)("p",null,"\u5728\u5c06 CircuitPython \u5b89\u88c5\u5230 Seeed Studio XIAO nRF52840 \u4e4b\u524d\uff0c\u5b83\u9700\u8981\u5f15\u5bfc\u52a0\u8f7d\u7a0b\u5e8f\u6a21\u5f0f\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5355\u51fb\u4e24\u6b21\u91cd\u7f6e\u6309\u94ae\u8fdb\u5165bootloadrer\u6a21\u5f0f\uff1a"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/functional2b.jpg",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",null,"\u7136\u540e\u78c1\u76d8\u5c06\u663e\u793a\uff1a"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu1.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2")," \u4e0b\u8f7dSeeed Studio XIAO nRF52840 \u7684",(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-Circuitpython.uf2"},"\u56fa\u4ef6")," "),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 3"),' \u5c06 .urf \u6587\u4ef6\u62d6\u62fd\u5230\u78c1\u76d8\u9a71\u52a8\u7a0b\u5e8f("XIAO-SENSE")'),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu3.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 4"),' \u68c0\u67e5\u78c1\u76d8\u9a71\u52a8\u7a0b\u5e8f\u7684\u540d\u79f0\u662f\u5426\u5df2\u66f4\u6539\u4e3a "CIRCUITPY".'),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",null,"\u73b0\u5728\uff0c\u60a8\u5df2\u6210\u529f\u5c06 CircuitPython \u5b89\u88c5\u5230 Seeed Studio XIAO nRF52840 \u677f\u4e0a\u3002"),(0,r.yg)("h3",{id:"\u5e94\u7528"},"\u5e94\u7528"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1")," \u4e0b\u8f7d CircuitPython \u7f16\u8f91\u5668 - ",(0,r.yg)("a",{parentName:"p",href:"https://codewith.mu/en/download"},"Mu Editor")," \u5e76\u6253\u5f00\u5b83"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2"),' \u5355\u51fb "Mode" \u5e76\u9009\u62e9\u6a21\u5f0f\u4e3a"CircuitPython"'),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu4.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 3")," \u590d\u5236\u5e76\u4e0a\u4f20\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'"""Example for Seeed Studio XIAO nRF52840. Blinks the built-in LED."""\nimport time\nimport board\nimport digitalio\n\nled = digitalio.DigitalInOut(board.LED)\nled.direction = digitalio.Direction.OUTPUT\n\nwhile True:\n    led.value = True\n    time.sleep(0.5)\n    led.value = False\n    time.sleep(0.5)\n')),(0,r.yg)("p",null,"\u5355\u51fb \"\u4e32\u884c\" \u6253\u5f00 REPL, \u5c06\u4ee3\u7801\u4fdd\u5b58\u4e3a 'code.py' \u6216 'main.py'"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu5.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",null,"Seeed Studio XIAO nRF52840\u4e0a\u7684\u7528\u6237LED\u5c06\u95ea\u70c1\u3002"),(0,r.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"),(0,r.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u5bf9\u6211\u4eec\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u7545\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);