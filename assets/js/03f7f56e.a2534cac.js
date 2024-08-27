"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[23301],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>c});var i=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},y=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,g=a(e,["components","mdxType","originalType","parentName"]),p=d(t),y=r,c=p["".concat(s,".").concat(y)]||p[y]||u[y]||l;return t?i.createElement(c,o(o({ref:n},g),{},{components:t})):i.createElement(c,o({ref:n},g))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=y;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:r,o[1]=a;for(var d=2;d<l;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}y.displayName="MDXCreateElement"},41105:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var i=t(9668),r=(t(96540),t(15680));const l={description:"Seeed Studio XIAO RP2040\u4e0eArduino",title:"Arduino",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/XIAO-RP2040-with-Arduino",last_update:{date:"11/1/2023",author:"\u91d1 \u83ca"}},o="\u5b66\u4e60\u4f7f\u7528 Arduino \u5bf9 XIAO RP2040 \u8fdb\u884c\u7f16\u7a0b",a={unversionedId:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/CN_XIAO-RP2040-with-Arduino",id:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/CN_XIAO-RP2040-with-Arduino",title:"Arduino",description:"Seeed Studio XIAO RP2040\u4e0eArduino",source:"@site/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/CN_XIAO-RP2040-with-Arduino.md",sourceDirName:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040",slug:"/cn/XIAO-RP2040-with-Arduino",permalink:"/cn/XIAO-RP2040-with-Arduino",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/CN_XIAO-RP2040-with-Arduino.md",tags:[],version:"current",lastUpdatedBy:"\u91d1 \u83ca",lastUpdatedAt:1698796800,formattedLastUpdatedAt:"Nov 1, 2023",frontMatter:{description:"Seeed Studio XIAO RP2040\u4e0eArduino",title:"Arduino",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/XIAO-RP2040-with-Arduino",last_update:{date:"11/1/2023",author:"\u91d1 \u83ca"}},sidebar:"CNSidebar",previous:{title:"\u5165\u95e8\u6307\u5357",permalink:"/cn/XIAO-RP2040"},next:{title:"MicroPython",permalink:"/cn/XIAO-RP2040-with-MicroPython"}},s={},d=[{value:"<strong>\u5165\u95e8\u6307\u5357</strong>",id:"\u5165\u95e8\u6307\u5357",level:2},{value:"<strong>\u786c\u4ef6\u8bbe\u7f6e</strong>",id:"\u786c\u4ef6\u8bbe\u7f6e",level:3},{value:"<strong>\u8f6f\u4ef6\u8bbe\u7f6e</strong>",id:"\u8f6f\u4ef6\u8bbe\u7f6e",level:3},{value:"<strong>Seeed Studio XIAO RP2040\u4e0a\u7684\u5f15\u811a\u590d\u7528\uff1a</strong>",id:"seeed-studio-xiao-rp2040\u4e0a\u7684\u5f15\u811a\u590d\u7528",level:2},{value:"<strong>\u6570\u5b57\u5f15\u811a</strong>",id:"\u6570\u5b57\u5f15\u811a",level:3},{value:"<strong>\u6a21\u62df</strong>",id:"\u6a21\u62df",level:3},{value:"<strong>\u4f7f\u7528\u4e32\u53e3\uff08Serial\uff09</strong>",id:"\u4f7f\u7528\u4e32\u53e3serial",level:3},{value:"<strong>RGB LED</strong>",id:"rgb-led",level:3},{value:"<strong>I2C</strong>",id:"i2c",level:3},{value:"<strong>SPI</strong>",id:"spi",level:3},{value:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",level:2}],g={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,i.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u5b66\u4e60\u4f7f\u7528-arduino-\u5bf9-xiao-rp2040-\u8fdb\u884c\u7f16\u7a0b"},"\u5b66\u4e60\u4f7f\u7528 Arduino \u5bf9 XIAO RP2040 \u8fdb\u884c\u7f16\u7a0b"),(0,r.yg)("p",null,"\u8fd9\u662f\u6211\u4eec\u5c06\u8981\u8fde\u63a5Seeed Studio XIAO RP2040\u5e76\u4f7f\u7528Arduino\u8fdb\u884c\u7f16\u7a0b\u7684\u9875\u9762\u3002\u8fd9\u91cc\u5c06\u6709\u51e0\u4e2a\u5173\u4e8e\u5f15\u811a\u590d\u7528\u7684\u9879\u76ee\u3002"),(0,r.yg)("h2",{id:"\u5165\u95e8\u6307\u5357"},(0,r.yg)("strong",{parentName:"h2"},"\u5165\u95e8\u6307\u5357")),(0,r.yg)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u5c06\u628aSeeed Studio XIAO RP2040\u8fde\u63a5\u5230\u8ba1\u7b97\u673a\uff0c\u5e76\u4eceArduino\u4e0a\u4f20\u4e00\u4e2a\u7b80\u5355\u7684\u4ee3\u7801\u6765\u68c0\u67e5\u677f\u5b50\u662f\u5426\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,r.yg)("h3",{id:"\u786c\u4ef6\u8bbe\u7f6e"},(0,r.yg)("strong",{parentName:"h3"},"\u786c\u4ef6\u8bbe\u7f6e")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6240\u9700\u6750\u6599:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Seeed Studio XIAO RP2040 x1"),(0,r.yg)("li",{parentName:"ul"},"\u8ba1\u7b97\u673a x1"),(0,r.yg)("li",{parentName:"ul"},"USB Type-C \u6570\u636e\u7ebf x1")),(0,r.yg)("p",null,":::\u63d0\u793a\n\u4e00\u4e9bUSB\u6570\u636e\u7ebf\u53ea\u80fd\u4f9b\u7535\uff0c\u65e0\u6cd5\u4f20\u8f93\u6570\u636e\u3002\u5982\u679c\u60a8\u6ca1\u6709USB\u6570\u636e\u7ebf\u6216\u4e0d\u77e5\u9053\u60a8\u7684USB\u6570\u636e\u7ebf\u662f\u5426\u80fd\u4f20\u8f93\u6570\u636e\uff0c\u60a8\u53ef\u4ee5\u67e5\u770b",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html"},"sSeeed USB Type C\u652f\u6301USB 3.1"),"\u3002\n:::\n",(0,r.yg)("strong",{parentName:"p"},"\u786c\u4ef6\u8fde\u63a5:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u6b65\u9aa4\u4e00. \u6309\u4f4fBOOT\u6309\u94ae\uff0c\u7136\u540e\u5c06Seeed Studio XIAO RP2040\u8fde\u63a5\u5230\u8ba1\u7b97\u673a\u3002")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'\u6b65\u9aa4\u4e8c. \u5982\u679c\u8ba1\u7b97\u673a\u4e0a\u663e\u793a\u51fa"RPI-RP2"\u78c1\u76d8\uff0c\u5e76\u4e14Seeed Studio XIAO RP2040\u4e0a\u7684\u7535\u6e90LED\u4eae\u8d77\uff0c\u8fde\u63a5\u5b8c\u6210\u3002')),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png"})),(0,r.yg)("h3",{id:"\u8f6f\u4ef6\u8bbe\u7f6e"},(0,r.yg)("strong",{parentName:"h3"},"\u8f6f\u4ef6\u8bbe\u7f6e")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4\u4e00.")," \u6839\u636e\u60a8\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e0b\u8f7d\u5e76\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684Arduino IDE\u3002")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("a",{href:"https://www.arduino.cc/en/software",target:"_blank"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Download_IDE.png"}))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4\u4e8c.")," \u542f\u52a8Arduino\u5e94\u7528\u7a0b\u5e8f\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4\u4e09."),"  \u5c06Seeed Studio XIAO RP2040\u677f\u5305\u6dfb\u52a0\u5230Arduino IDE\u4e2d\u3002"))),(0,r.yg)("p",null,"\u5bfc\u822a\u5230 ",(0,r.yg)("strong",{parentName:"p"},"\u6587\u4ef6")," > ",(0,r.yg)("strong",{parentName:"p"},"\u9996\u9009\u9879"),", \u5728 ",(0,r.yg)("strong",{parentName:"p"},"\u9644\u52a0\u7684\u5f00\u53d1\u677f\u7ba1\u7406\u5668\u7f51\u5740")," \u4e2d\u586b\u5165\u4ee5\u4e0bURL\uff1a"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:"700",src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/5.png"})),(0,r.yg)("p",null,"\u5bfc\u822a\u5230 ",(0,r.yg)("strong",{parentName:"p"},"\u5de5\u5177-> \u5f00\u53d1\u677f-> \u5f00\u53d1\u677f\u7ba1\u7406\u5668..."),', \u5728\u641c\u7d22\u6846\u4e2d\u8f93\u5165\u5173\u952e\u5b57 "',(0,r.yg)("strong",{parentName:"p"},"RP2040"),'" \u3002\u9009\u62e9\u6700\u65b0\u7248\u672c\u7684"Raspberry Pi Pico/RP2040"\u5e76\u5b89\u88c5\u5b83\u3002'),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:"700",src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/2.png"})),(0,r.yg)("p",null,":::\u6ce8\u610f\n\u5df2\u7ecf ",(0,r.yg)("strong",{parentName:"p"},"\u6ca1\u6709\u540d\u4e3aSeeed XIAO RP2040\u7684\u677f\u5305\u53ef\u7528"),", \u8bf7\u4e0d\u8981\u4e0b\u8f7d\u548c\u4f7f\u7528\u5b83\uff01"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:"600",src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/3.png"})),":::",(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4\u56db.")," \u9009\u62e9\u60a8\u7684\u5f00\u53d1\u677f\u548c\u7aef\u53e3\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4\u4e94.")," \u901a\u8fc7\u5bfc\u822a\u5230 ",(0,r.yg)("strong",{parentName:"p"},'"\u6587\u4ef6 --\x3e \u793a\u4f8b ---\x3e01.\u57fa\u7840 --\x3e \u95ea\u70c1"'),"\u6765\u6253\u5f00\u95ea\u70c1\u793a\u4f8b\u3002"))),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:"550",src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/select_blink.png"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u5f00\u53d1\u677f")),(0,r.yg)("p",null,"\u5b89\u88c5\u5b8c\u5f00\u53d1\u677f\u5305\u540e\uff0c\u627e ",(0,r.yg)("strong",{parentName:"p"},"\u5de5\u5177-> \u5f00\u53d1\u677f"),', \u627e\u5230 "',(0,r.yg)("strong",{parentName:"p"},"Seeed Studio XIAO RP2040"),'" \u5e76\u9009\u62e9\u5b83\u3002\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u5b8c\u6210\u4e86\u5728Arduino IDE\u4e2d\u8bbe\u7f6eSeeed Studio XIAO RP2040\u7684\u6b65\u9aa4\u3002'),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/4.png"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u63a5\u53e3")),(0,r.yg)("p",null,"\u5bfc\u822a\u5230\u5de5\u5177 > \u7aef\u53e3\uff0c\u9009\u62e9\u5df2\u8fde\u63a5\u7684Seeed Studio XIAO RP2040\u7684\u4e32\u53e3\u540d\u79f0\u3002\u901a\u5e38\u4e3aCOM3\u6216\u66f4\u9ad8 (",(0,r.yg)("strong",{parentName:"p"},"COM1")," \u548c ",(0,r.yg)("strong",{parentName:"p"},"COM2"),' \u901a\u5e38\u4fdd\u7559\u7ed9\u786c\u4ef6\u4e32\u53e3)\u3002\u5df2\u8fde\u63a5\u7684Seeed Studio XIAO RP2040\u7684\u4e32\u53e3\u901a\u5e38\u5305\u542b\u5199\u7740"Seeed Studio XIAO RP2040"\u7684\u62ec\u53f7\u3002'),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:"600",src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4\u516d.")," \u70b9\u51fb ",(0,r.yg)("strong",{parentName:"li"},"\u4e0a\u4f20")," \u6309\u94ae\u5c06\u95ea\u70c1\u793a\u4f8b\u4ee3\u7801\u4e0a\u4f20\u5230\u5f00\u53d1\u677f\u3002")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:"500",src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl5.png"})),(0,r.yg)("p",null,"\u4e0a\u4f20\u5b8c\u6210\u540e\uff0c\u60a8\u5e94\u8be5\u80fd\u591f\u770b\u5230\u677f\u5b50\u4e0a\u768425\u53f7\u5f15\u811a\u7eff\u8272\uff08USER\uff09LED\u6bcf\u79d2\u95ea\u70c1\u4e00\u6b21\u3002\u5982\u679c\u662f\u8fd9\u6837\uff0c\u606d\u559c\uff01\u8fd9\u610f\u5473\u7740\u8fde\u63a5\u6210\u529f\uff0c\u73b0\u5728\u60a8\u53ef\u4ee5\u4f7f\u7528Seeed Studio XIAO RP2040\u8fdb\u884c\u66f4\u591a\u9879\u76ee\u7684\u63a2\u7d22\u4e86\uff01"),(0,r.yg)("p",null,':::\u6ce8\u610f\n\u5982\u679c\u4e0a\u4f20Arduino\u7a0b\u5e8f\u5931\u8d25\uff0c\u8bf7\u5c1d\u8bd5\u6309\u4f4f"BOOT"\u6309\u94ae\uff0c\u7136\u540e\u70b9\u51fb"RUN"\u6309\u94ae\u3002\u6b64\u65f6\uff0cSeeed Studio XIAO RP2040\u5c06\u8fdb\u5165\u5f15\u5bfc\u6a21\u5f0f\uff08\u60a8\u7684\u8ba1\u7b97\u673a\u5c06\u52a0\u8f7d\u4e00\u4e2a\u53ef\u79fb\u52a8\u78c1\u76d8\uff09\uff0c\u60a8\u5c06\u80fd\u591f\u518d\u6b21\u4e0a\u4f20Arduino\u7a0b\u5e8f\u3002\n:::'),(0,r.yg)("h2",{id:"seeed-studio-xiao-rp2040\u4e0a\u7684\u5f15\u811a\u590d\u7528"},(0,r.yg)("strong",{parentName:"h2"},"Seeed Studio XIAO RP2040\u4e0a\u7684\u5f15\u811a\u590d\u7528\uff1a")),(0,r.yg)("p",null,"Seeed Studio XIAO RP2040\u677f\u4e0a\u670911\u4e2a\u6570\u5b57\u5f15\u811a\uff0c4\u4e2a\u6a21\u62df\u5f15\u811a\uff0c11\u4e2aPWM\u5f15\u811a\uff0c1\u4e2aI2C\u63a5\u53e3\uff0c1\u4e2aUART\u63a5\u53e3\uff0c1\u4e2aSPI\u63a5\u53e3\uff0c1\u4e2aSWD Bonding pad\u63a5\u53e3\u3002\u6211\u4eec\u5c06\u63d0\u4f9b\u6709\u5173\u8fd9\u4e9b\u63a5\u53e3\u7684\u6559\u7a0b\uff0c\u4ee5\u5e2e\u52a9\u60a8\u7684\u9879\u76ee\u3002"),(0,r.yg)("h3",{id:"\u6570\u5b57\u5f15\u811a"},(0,r.yg)("strong",{parentName:"h3"},"\u6570\u5b57\u5f15\u811a")),(0,r.yg)("p",null,"\u8fde\u63a5\u4e00\u4e2a\u6309\u94ae\u5230D0\u5f15\u811a\uff0c\u5c06\u4e00\u4e2aLED\u8fde\u63a5\u523025\u53f7\u5f15\u811a\u3002\u7136\u540e\u4e0a\u4f20\u4ee5\u4e0b\u4ee3\u7801\uff0c\u4f7f\u7528\u6309\u94ae\u63a7\u5236LED\u7684\u5f00\u5173\u3002"),(0,r.yg)("p",null,":::\u8b66\u544a\n\u8bf7\u6ce8\u610f\uff0cSeeed Studio XIAO RP2040\u7684\u5de5\u4f5c\u7535\u538b\u662f3.3V\uff0c\u5982\u679c\u5c06\u4f20\u611f\u5668\u9519\u8bef\u5730\u8fde\u63a5\u52305V\u4e0a\uff0c\u4e3b\u677f\u53ef\u80fd\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u3002\n:::"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"const int buttonPin = D0;     // the number of the pushbutton pin\nconst int ledPin =  25;      // the number of the LED pin\n \nint buttonState = 0;         // variable for reading the pushbutton status\n \nvoid setup() {\n  // initialize the LED pin as an output:\n  pinMode(ledPin, OUTPUT);\n  // initialize the pushbutton pin as an input:\n  pinMode(buttonPin, INPUT);\n}\n \nvoid loop() {\n  // read the state of the pushbutton value:\n  buttonState = digitalRead(buttonPin);\n \n  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:\n  if (buttonState == HIGH) {\n    // turn LED off:\n    digitalWrite(ledPin, HIGH);\n  } else {\n    // turn LED on:\n    digitalWrite(ledPin, LOW);\n  }\n}\n")),(0,r.yg)("h3",{id:"\u6a21\u62df"},(0,r.yg)("strong",{parentName:"h3"},"\u6a21\u62df")),(0,r.yg)("p",null,"\u5c06\u4e00\u4e2a\u7535\u4f4d\u8ba1\u8fde\u63a5\u5230\u5f15\u811aA0\uff0c\u5e76\u5c06\u4e00\u4e2aLED\u8fde\u63a5\u5230\u5f15\u811a25\u3002\u7136\u540e\u4e0a\u4f20\u4ee5\u4e0b\u4ee3\u7801\uff0c\u901a\u8fc7\u65cb\u8f6c\u7535\u4f4d\u8ba1\u65cb\u94ae\u6765\u63a7\u5236LED\u7684\u95ea\u70c1\u95f4\u9694\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"const int sensorPin = A0;\nconst int ledPin =  25; \nvoid setup() {\n  // declare the ledPin as an OUTPUT:\n  pinMode(sensorPin, INPUT);\n  pinMode(ledPin, OUTPUT);\n}\n \nvoid loop() {\n  // read the value from the sensor:\nint sensorValue = analogRead(sensorPin);\n  // turn the ledPin on\n  digitalWrite(ledPin, HIGH);\n  // stop the program for <sensorValue> milliseconds:\n  delay(sensorValue);\n  // turn the ledPin off:\n  digitalWrite(ledPin, LOW);\n  // stop the program for for <sensorValue> milliseconds:\n  delay(sensorValue);\n}\n")),(0,r.yg)("h3",{id:"\u4f7f\u7528\u4e32\u53e3serial"},(0,r.yg)("strong",{parentName:"h3"},"\u4f7f\u7528\u4e32\u53e3\uff08Serial\uff09")),(0,r.yg)("p",null,'\u4f7f\u7528\u5f15\u811aD6\u4f5c\u4e3aUART\u7684TX\u5f15\u811a\uff0c\u5f15\u811aD7\u4f5c\u4e3aUART\u7684RX\u5f15\u811a\uff0c\u53d1\u9001\u6d88\u606f "Hello World!"\u3002'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'void setup() {\n    Serial.begin(115200);\n    while (!Serial);\n}\n\nvoid loop() {\n    Serial.println("Hello,World");\n    delay(1000);\n}\n')),(0,r.yg)("h3",{id:"rgb-led"},(0,r.yg)("strong",{parentName:"h3"},"RGB LED")),(0,r.yg)("p",null,"\u5f15\u811a11\u662fRGB LED\u7684\u4f7f\u80fd\u5f15\u811a\u3002\u901a\u8fc7\u5c06\u5f15\u811a11\u8bbe\u7f6e\u4e3a\u9ad8\u7535\u5e73\uff0c\u53ef\u4ee5\u70b9\u4eaeRGB LED\u3002\u4ee5\u4e0b\u662f\u5236\u4f5c\u95ea\u70c1\u6548\u679c\u7684\u4ee3\u7801\u3002\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a\u7b2c\u4e09\u65b9\u5e93\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4\u4e00.")," \u6253\u5f00Arduino IDE\uff0c\u5bfc\u822a\u5230  ",(0,r.yg)("inlineCode",{parentName:"li"},"Sketch > Include Library > Manage Libraries..."),' \u641c\u7d22\u5e93\u3002\u5728Arduino\u5e93\u7ba1\u7406\u5668\u4e2d\u641c\u7d22\u5173\u952e\u5b57 "Adafruit_NeoPixel"\uff0c\u5b89\u88c5\u6700\u65b0\u7248\u672c\u3002')),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:780,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png"})),(0,r.yg)("p",null,'\u5728Arduino\u5e93\u7ba1\u7406\u5668\u4e2d\u8f93\u5165\u5173\u952e\u8bcd "Adafruit_NeoPixel"\uff0c\u5e76\u5b89\u88c5\u6700\u65b0\u7248\u672c\u3002'),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:780,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl6.png"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4\u4e8c.")," \u5c06\u4ee3\u7801\u590d\u5236\u5230Arduino\u5e76\u70b9\u51fb ",(0,r.yg)("strong",{parentName:"li"},"\u4e0a\u4f20")," \u6309\u94ae\u8fdb\u884c\u4e0a\u4f20\u3002RGB LED\u5c06\u663e\u793a\u5f69\u8679\u8272\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"#include <Adafruit_NeoPixel.h>\n\nint Power = 11;\nint PIN  = 12;\n#define NUMPIXELS 1\n\nAdafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);\n\nvoid setup() {\n  pixels.begin();\n  pinMode(Power,OUTPUT);\n  digitalWrite(Power, HIGH);\n\n}\n\nvoid loop() { \n  pixels.clear();\n  pixels.setPixelColor(0, pixels.Color(15, 25, 205));\n  delay(400);\n  pixels.show();\n  pixels.clear();\n  pixels.setPixelColor(0, pixels.Color(103, 25, 205));\n  delay(400);\n  pixels.show();\n  pixels.clear();\n  pixels.setPixelColor(0, pixels.Color(233, 242, 205));\n  delay(400);\n  pixels.show();\n  pixels.clear();\n  pixels.setPixelColor(0, pixels.Color(233, 23, 23));\n  delay(400);\n  pixels.show();\n  pixels.clear();\n  pixels.setPixelColor(0, pixels.Color(12, 66, 101));\n  delay(400);\n  pixels.show();\n  delay(500);\n\n}\n")),(0,r.yg)("p",null,"RGB LED\u5c06\u663e\u793a\u5f69\u8679\u989c\u8272\u3002"),(0,r.yg)("h3",{id:"i2c"},(0,r.yg)("strong",{parentName:"h3"},"I2C")),(0,r.yg)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u5c06\u4f7f\u7528IIC\u5c06Seeed Studio XIAO RP2040\u4e0e ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html"},'Grove - OLED Display 0.96" (SSD1315)'),' \u8fde\u63a5\u8d77\u6765\uff0c\u5e76\u663e\u793a "Hello world"\u3002'),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u8fde\u63a5\u65b9\u5f0f"),":"),(0,r.yg)("p",null,"\u6211\u4eec\u5c06\u4f7f\u7528PIN 5\u4f5c\u4e3aSCL\u5f15\u811a\uff0cPIN 4\u4f5c\u4e3aSDA\u5f15\u811a\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:550,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4\u4e00.")," \u6253\u5f00 Arduino IDE, \u5bfc\u822a\u5230 ",(0,r.yg)("inlineCode",{parentName:"li"},"Sketch > Include Library > Manage Libraries...")," \u641c\u7d22\u5e93\u3002")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:780,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png"})),(0,r.yg)("p",null,'\u5728Arduino\u5e93\u7ba1\u7406\u5668\u4e2d\u641c\u7d22\u5173\u952e\u5b57 "U8G2"\uff0c\u5b89\u88c5\u6700\u65b0\u7248\u672c\u3002'),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:780,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl7.png"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4\u4e8c.")," \u5c06\u4ee3\u7801\u590d\u5236\u5230Arduino\u5e76\u70b9\u51fb ",(0,r.yg)("strong",{parentName:"li"},"Upload")," \u6309\u94ae\u8fdb\u884c\u4e0a\u4f20\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino.h>\n#include <U8g2lib.h>\n \n#ifdef U8X8_HAVE_HW_SPI\n#include <SPI.h>\n#endif\n#ifdef U8X8_HAVE_HW_I2C\n#include <Wire.h>\n#endif\n\nU8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);\n \nvoid setup(void) {\n  u8g2.begin();\n}\n \nvoid loop(void) {\n  u8g2.clearBuffer();                   // clear the internal memory\n  u8g2.setFont(u8g2_font_ncenB08_tr);   // choose a suitable font\n  u8g2.drawStr(0,10,"Hello Wrold!");    // write something to the internal memory\n  u8g2.drawStr(0,30,"Hello Werold!"); \n  u8g2.drawStr(0,50,"Hello Wrrrold!"); \n  u8g2.sendBuffer();                    // transfer internal memory to the display\n  delay(1000);  \n}\n')),(0,r.yg)("p",null,"\u7ed3\u679c\u5c55\u793a\u5982\u4e0b:"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl8.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("h3",{id:"spi"},(0,r.yg)("strong",{parentName:"h3"},"SPI")),(0,r.yg)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u5c06\u901a\u8fc7SPI\u8fde\u63a5 ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html"},"Grove - OLED Yellow&Blue Display 0.96 (SSD1315)"),' \uff0c\u5e76\u663e\u793a "Hello World"\u3002OLED\u663e\u793a\u5668\u652f\u6301IIC\u548cSPI\u901a\u4fe1\uff0c\u4f46\u9ed8\u8ba4\u901a\u4fe1\u6a21\u5f0f\u4e3aIIC\u3002\u9700\u8981',(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com//Grove-OLED-Yellow&Blue-Display-0.96-SSD1315_V1.0/"},"\u5c06IIC\u529f\u80fd\u66f4\u6539\u4e3aSPI\u529f\u80fd")," \u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u8fde\u63a5\u65b9\u5f0f"),":"),(0,r.yg)("p",null,"\u6211\u4eec\u5c06\u4f7f\u7528PIN 8\u4f5c\u4e3aSCK\u5f15\u811a\uff0cPIN 9\u4f5c\u4e3aMISO\u5f15\u811a\uff0cPIN 10\u4f5c\u4e3aMOSI\u5f15\u811a\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:780,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl9.png"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4\u4e00.")," \u6253\u5f00 Arduino IDE, \u5bfc\u822a\u5230 ",(0,r.yg)("inlineCode",{parentName:"li"},"Sketch > Include Library > Manage Libraries...")," \u641c\u7d22\u5e93")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:780,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png"})),(0,r.yg)("p",null,'\u5728Arduino\u5e93\u7ba1\u7406\u5668\u4e2d\u641c\u7d22\u5173\u952e\u5b57 "Adafruit_GFX"\uff0c\u5b89\u88c5\u6700\u65b0\u7248\u672c\u3002'),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:780,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/board10.png"})),(0,r.yg)("p",null,'\u5728Arduino\u5e93\u7ba1\u7406\u5668\u4e2d\u641c\u7d22\u5173\u952e\u5b57 "Adafruit_SSD1306"\uff0c\u5b89\u88c5\u6700\u65b0\u7248\u672c\u3002'),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:780,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl11.png"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4\u4e8c.")," \u5c06\u4ee3\u7801\u590d\u5236\u5230Arduino\u5e76\u70b9\u51fb ",(0,r.yg)("strong",{parentName:"li"},"\u4e0a\u4f20")," \u6309\u94ae\u8fdb\u884c\u4e0a\u4f20\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <SPI.h>\n#include <Wire.h>\n#include <Adafruit_GFX.h>\n#include <Adafruit_SSD1306.h>\n\n#define SCREEN_WIDTH 128 // OLED display width, in pixels\n#define SCREEN_HEIGHT 64 // OLED display height, in pixels\n\n// Declaration for SSD1306 display connected using software SPI (default case):\n#define OLED_MOSI  MOSI   //Connect SSD1315 D1\n#define OLED_CLK  SCK     //Connect SSD1315 D0\n#define OLED_DC  D4      //Connect SSD1315 D/C\n#define OLED_CS  SS      //Connect SSD1315 CS\n#define OLED_RESET  D5   //Connect SSD1315 RES\nAdafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT,\n  OLED_MOSI, OLED_CLK, OLED_DC, OLED_RESET, OLED_CS);\n\nvoid setup() {\n  Serial.begin(9600);\n  if(!display.begin(SSD1306_SWITCHCAPVCC)) {\n    Serial.println(F("SSD1306 allocation failed"));\n    for(;;); // Don\'t proceed, loop forever\n  }\n}\n\nvoid loop() {\n  display.clearDisplay();\n  display.setTextSize(1);             // Normal 1:1 pixel scale\n  display.setTextColor(SSD1306_WHITE);        // Draw white text\n  display.setCursor(0,3);             // Start at top-left corner\n  display.println(F("Hello"));\n  display.setTextSize(2); \n  display.setCursor(0,16);  \n  display.println(F("Hello"));\n  display.setTextSize(3); \n  display.setCursor(0,38);  \n  display.println(F("Hello"));\n  display.display();\n  delay(2000);\n}\n')),(0,r.yg)("p",null,"\u7ed3\u679c\u5c55\u793a\u5982\u4e0b:"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl12.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"),(0,r.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u81f4\u529b\u4e8e\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u5bf9\u6211\u4eec\u7684\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u7545\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);