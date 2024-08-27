"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[81370],{15680:(e,n,i)=>{i.d(n,{xA:()=>g,yg:()=>y});var t=i(96540);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var o=t.createContext({}),p=function(e){var n=t.useContext(o),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},g=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),m=p(i),d=r,y=m["".concat(o,".").concat(d)]||m[d]||u[d]||a;return i?t.createElement(y,l(l({ref:n},g),{},{components:i})):t.createElement(y,l({ref:n},g))}));function y(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<a;p++)l[p]=i[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}d.displayName="MDXCreateElement"},26857:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=i(9668),r=(i(96540),i(15680));const a={description:"\u8bc6\u522b\u996e\u6599",title:"\u8bc6\u522b\u996e\u6599",keywords:["Wio_terminal","Embedded_ML","Projects_based_Edge_Impulse"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-TinyML-EI-5",last_update:{date:"3/06/2024",author:"\u91d1\u83ca"}},l="\u4f7f\u7528Wio Terminal\u548cEdge Impulse\u8bc6\u522b\u591a\u901a\u9053\u6c14\u4f53\u4f20\u611f\u5668\u4e2d\u7684\u996e\u6599",s={unversionedId:"zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/CN-Wio-Terminal-TinyML-EI-5",id:"zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/CN-Wio-Terminal-TinyML-EI-5",title:"\u8bc6\u522b\u996e\u6599",description:"\u8bc6\u522b\u996e\u6599",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/CN-Wio-Terminal-TinyML-EI-5.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse",slug:"/cn/Wio-Terminal-TinyML-EI-5",permalink:"/cn/Wio-Terminal-TinyML-EI-5",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/CN-Wio-Terminal-TinyML-EI-5.md",tags:[],version:"current",lastUpdatedBy:"\u91d1\u83ca",lastUpdatedAt:1709683200,formattedLastUpdatedAt:"Mar 6, 2024",frontMatter:{description:"\u8bc6\u522b\u996e\u6599",title:"\u8bc6\u522b\u996e\u6599",keywords:["Wio_terminal","Embedded_ML","Projects_based_Edge_Impulse"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-TinyML-EI-5",last_update:{date:"3/06/2024",author:"\u91d1\u83ca"}},sidebar:"CNSidebar",previous:{title:"\u4eba\u6570\u7edf\u8ba1\u4e0e\u8d85\u58f0\u6ce2\u4f20\u611f\u5668",permalink:"/cn/Wio-Terminal-TinyML-EI-4"},next:{title:"\u7528\u4e8e\u9884\u6d4b\u6027\u7ef4\u62a4\u7684\u5f02\u5e38\u68c0\u6d4b",permalink:"/cn/Wio-Terminal-TinyML-EI-6"}},o={},p=[{value:"\u6240\u9700\u786c\u4ef6",id:"\u6240\u9700\u786c\u4ef6",level:2},{value:"\u5165\u95e8\u6307\u5357",id:"\u5165\u95e8\u6307\u5357",level:2},{value:"1. \u8fde\u63a5\u5230 Edge Impulse",id:"1-\u8fde\u63a5\u5230-edge-impulse",level:3},{value:"\u2460 \u5c06\u6700\u65b0\u7684\u8bbe\u5907\u56fa\u4ef6\u52a0\u8f7d\u5230 Wio Terminal",id:"-\u5c06\u6700\u65b0\u7684\u8bbe\u5907\u56fa\u4ef6\u52a0\u8f7d\u5230-wio-terminal",level:4},{value:"\u2461 \u4f7f\u7528WebUSB\u8fdb\u884c\u8fde\u63a5",id:"-\u4f7f\u7528webusb\u8fdb\u884c\u8fde\u63a5",level:4},{value:"2. \u6570\u636e\u91c7\u96c6",id:"2-\u6570\u636e\u91c7\u96c6",level:3},{value:"3. \u8bbe\u8ba1 Impulse",id:"3-\u8bbe\u8ba1-impulse",level:3},{value:"4. \u8bad\u7ec3\u6570\u636e",id:"4-\u8bad\u7ec3\u6570\u636e",level:3},{value:"5. \u5b9e\u65f6\u5206\u7c7b",id:"5-\u5b9e\u65f6\u5206\u7c7b",level:3},{value:"\u90e8\u7f72\u5230 Wio Terminal",id:"\u90e8\u7f72\u5230-wio-terminal",level:2},{value:"\u5b8c\u6574\u4ee3\u7801",id:"\u5b8c\u6574\u4ee3\u7801",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],g={toc:p},m="wrapper";function u(e){let{components:n,...i}=e;return(0,r.yg)(m,(0,t.A)({},g,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u4f7f\u7528wio-terminal\u548cedge-impulse\u8bc6\u522b\u591a\u901a\u9053\u6c14\u4f53\u4f20\u611f\u5668\u4e2d\u7684\u996e\u6599"},"\u4f7f\u7528Wio Terminal\u548cEdge Impulse\u8bc6\u522b\u591a\u901a\u9053\u6c14\u4f53\u4f20\u611f\u5668\u4e2d\u7684\u996e\u6599"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg"})),(0,r.yg)("p",null,"\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,r.yg)("strong",{parentName:"a"},"Wio Terminal"))," \u548c ",(0,r.yg)("a",{parentName:"p",href:"http://edgeimpulse.com/"},(0,r.yg)("strong",{parentName:"a"},"Edge Impulse")),"\u7b80\u5355\u90e8\u7f72\u4e00\u4e2a\u673a\u5668\u5b66\u4e60\u9879\u76ee\u3002\u642d\u914d",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/category/Grove-c-1003.html"},(0,r.yg)("strong",{parentName:"a"},"Grove systems")),"\u7684Wio Terminal\u975e\u5e38\u5f3a\u5927\uff0c\u53ef\u4ee5\u5e26\u5165\u6570\u767e\u4e2a\u4f20\u611f\u5668\u6570\u636e\u8fdb\u884c\u5206\u6790\uff0c\u5e76\u53ef\u80fd\u8bc4\u4f30\u4e0d\u540c\u7684\u573a\u666f!"),(0,r.yg)("p",null,"\u8fd9\u4e2a\u9879\u76ee\u53d7\u5230\u4e86 ",(0,r.yg)("a",{parentName:"p",href:"https://twitter.com/kartben/status/1258791793073815552"},"Benjamin Cab\xe9's Artificial nose project")," \u9879\u76ee\u7684\u542f\u53d1\u3002\u901a\u8fc7\u672c\u6587\uff0c\u60a8\u5c06\u4e86\u89e3\u4f7f\u7528Wio Terminal\u7684Edge Impulse\u7684\u5de5\u4f5c\u6d41\u7a0b\u3002"),(0,r.yg)("h2",{id:"\u6240\u9700\u786c\u4ef6"},"\u6240\u9700\u786c\u4ef6"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,r.yg)("strong",{parentName:"a"},"Wio Terminal")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html"},(0,r.yg)("strong",{parentName:"a"},"Grove - Multichannel Gas Sensor v2")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u4e00\u4e9b\u9152\u7cbe\u3001\u5496\u5561\u3001\u53ef\u4e50"))),(0,r.yg)("h2",{id:"\u5165\u95e8\u6307\u5357"},"\u5165\u95e8\u6307\u5357"),(0,r.yg)("p",null,"\u8ba9\u6211\u4eec\u6765\u4ecb\u7ecd\u4e00\u4e0b\u4f7f\u7528Wio Terminal\u548cEdge Impulse\u7684\u5de5\u4f5c\u6d41\u7a0b\u3002"),(0,r.yg)("h3",{id:"1-\u8fde\u63a5\u5230-edge-impulse"},"1. \u8fde\u63a5\u5230 Edge Impulse"),(0,r.yg)("h4",{id:"-\u5c06\u6700\u65b0\u7684\u8bbe\u5907\u56fa\u4ef6\u52a0\u8f7d\u5230-wio-terminal"},"\u2460 \u5c06\u6700\u65b0\u7684\u8bbe\u5907\u56fa\u4ef6\u52a0\u8f7d\u5230 Wio Terminal"),(0,r.yg)("p",null,"\u5c06Wio Terminal\u8fde\u63a5\u5230\u60a8\u7684\u8ba1\u7b97\u673a\u3002\u901a\u8fc7\u5feb\u901f\u6ed1\u52a8\u7535\u6e90\u5f00\u5173\u4e24\u6b21\uff0c\u8fdb\u5165\u5f15\u5bfc\u6a21\u5f0f\u3002\u66f4\u591a\u53c2\u8003\uff0c\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq"},"\u8fd9\u91cc"),"."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/dfu.gif"})),(0,r.yg)("p",null,"\u60a8\u7684\u7535\u8111\u4e0a\u5e94\u8be5\u4f1a\u51fa\u73b0\u4e00\u4e2a\u540d\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"Arduino")," \u7684\u5916\u90e8\u9a71\u52a8\u5668\u3002\u5c06\u4e0b\u8f7d\u7684 ",(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/edge_impulse_firmware.uf2"},(0,r.yg)("strong",{parentName:"a"},"Edge Impulse uf2 firmware files"))," \u62d6\u653e\u5230Arduino\u9a71\u52a8\u5668\u4e2d\u3002\u73b0\u5728\uff0cEdge Impulse \u5df2\u52a0\u8f7d\u5230 Seeeduino Wio Terminal \u4e0a\uff01"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6ce8:")," \u8fd9\u662f ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_edgeimpulse"},"Wio Terminal Edge Impulse \u6e90\u4ee3\u7801")," , \u60a8\u4e5f\u53ef\u4ee5\u4ece\u8fd9\u91cc\u6784\u5efa\u56fa\u4ef6\u3002"),(0,r.yg)("h4",{id:"-\u4f7f\u7528webusb\u8fdb\u884c\u8fde\u63a5"},"\u2461 \u4f7f\u7528WebUSB\u8fdb\u884c\u8fde\u63a5"),(0,r.yg)("p",null," \u8fdb\u5165\u60a8\u7684Edge Impulse\u9879\u76ee\uff0c\u70b9\u51fb\u201c\u6570\u636e\u91c7\u96c6\u201d\u9009\u9879\u5361\uff0c\u7136\u540e\u60a8\u53ef\u4ee5\u5728\u53f3\u4e0a\u89d2\u770b\u5230 ",(0,r.yg)("inlineCode",{parentName:"p"},"Connect using WebUSB")," \u7684\u9009\u9879\u3002\u70b9\u51fb\u5b83\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/webusb.jpg"})),'\u7136\u540e\uff0c\u60a8\u4f1a\u770b\u5230\u4e00\u4e2a\u5f39\u51fa\u63d0\u793a\uff0c\u9009\u62e9\u914d\u5bf9\u7684\u4e32\u884c\u7aef\u53e3\uff0c\u5e76\u9009\u62e9 "Connect" \uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002',(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/paired.jpg"})),"\u73b0\u5728\uff0c\u60a8\u5df2\u6210\u529f\u5c06Wio Terminal\u4e0eEdge Impulse\u8fde\u63a5\u3002",(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/connected.jpg"})),(0,r.yg)("h3",{id:"2-\u6570\u636e\u91c7\u96c6"},"2. \u6570\u636e\u91c7\u96c6"),(0,r.yg)("p",null,"\u5c06 ",(0,r.yg)("strong",{parentName:"p"},"Grove - Multichannel Gas Sensor v2 \u8fde\u63a5\u5230 Wio Terminal\u7684 Grove I2C \u7aef\u53e3"),"."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/I2C.jpg"})),(0,r.yg)("p",null,"\u5c06Grove - Multichannel Gas Sensor v2\u653e\u7f6e\u5728\u60a8\u8981\u6d4b\u8bd5\u7684\u996e\u6599\u4e0a\uff0c\u4ee5\u6211\u7684\u60c5\u51b5\u4e3a\u4f8b\uff0c\u9996\u5148\u662f\u53ef\u4e50\u3002\u8fd9\u91cc\u9700\u8981\u6307\u51fa\u7684\u4e00\u4ef6\u4e8b\u662f\uff0c ",(0,r.yg)("strong",{parentName:"p"},"Grove - Multichannel Gas Sensor v2 \u5f88\u5bb9\u6613\u53d7\u5230\u5468\u56f4\u73af\u5883\u7684\u5f71\u54cd\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u4f7f\u7528\u4fdd\u62a4\u7f69\u6765\u786e\u4fdd\u5b83\u53ea\u611f\u5e94\u5230\u6d4b\u8bd5\u5185\u5bb9\u3002")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/test.jpg"})),(0,r.yg)("p",null,"\u5728 ",(0,r.yg)("strong",{parentName:"p"},"Edge Impulse dashboard"),"\u4e0a, \u5bfc\u822a\u81f3 ",(0,r.yg)("strong",{parentName:"p"},"Data acquisition"),", \u9009\u62e9\u60a8\u7684\u8bbe\u5907\uff0c\u5e76\u4e3a",(0,r.yg)("strong",{parentName:"p"},"Label"),"\u547d\u540d\u3002 \u6b63\u5982\u5176\u542b\u4e49\uff0c\u6807\u7b7e\u5e94\u6839\u636e\u60a8\u7684\u6d4b\u8bd5\u5185\u5bb9\u8fdb\u884c\u547d\u540d\uff0c\u56e0\u6b64\u8fd9\u91cc\u5c06\u662f",(0,r.yg)("strong",{parentName:"p"},"cola")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Sample length (ms.)")," \u5c06\u662f\u60a8\u91c7\u6837\u65f6\u95f4\u7684\u957f\u5ea6(\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d), ",(0,r.yg)("strong",{parentName:"p"},"Sensor")," \u9009\u62e9 ",(0,r.yg)("strong",{parentName:"p"},"External multichannel gas\uff08\u5916\u90e8\u591a\u901a\u9053\u6c14\u4f53\uff09"),"\uff0c",(0,r.yg)("strong",{parentName:"p"},"Frequency")," \u9009\u62e9 ",(0,r.yg)("strong",{parentName:"p"},"10Hz"),"."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/cola.jpg"})),(0,r.yg)("p",null,"\u70b9\u51fb ",(0,r.yg)("strong",{parentName:"p"},"Start Sampling")," \u5b83\u5c06\u5f00\u59cb\u6536\u96c6\u6570\u636e\u3002"),(0,r.yg)("p",null,"\u5728\u6211\u7684\u6d4b\u8bd5\u4e2d\uff0c\u6211\u5df2\u7ecf\u4e3a ",(0,r.yg)("strong",{parentName:"p"},"10s")," \u7684\u65f6\u95f4\u5185\u91c7\u96c6\u4e86 ",(0,r.yg)("strong",{parentName:"p"},"9 times")," \u7684\u53ef\u4e50\u6570\u636e\uff0c\u6bcf\u6b21\u7ed3\u679c\u90fd\u76f8\u4f3c\u3002\u60a8\u9700\u8981\u62e5\u6709\u76f8\u4e92\u4e4b\u95f4\u76f8\u5f53\u76f8\u4f3c\u7684\u6570\u636e\u96c6\u3002"),(0,r.yg)("p",null,":::\u6ce8\n\u5982\u679c\u60a8\u7684\u6570\u636e\u6ce2\u52a8\u5f88\u5927\uff0c\u53ef\u80fd\u662f\u7531\u4e8e\u5468\u56f4\u73af\u5883\u7684\u539f\u56e0\u3002\n:::"),(0,r.yg)("p",null,"\u4e00\u65e6\u60a8\u5bf9\u4e00\u4e2a\u6807\u7b7e\u6709\u8db3\u591f\u7684\u6570\u636e\uff0c\u60a8\u53ef\u4ee5\u5bf9\u5176\u4ed6\u6807\u7b7e\u6267\u884c\u5b8c\u5168\u76f8\u540c\u7684\u6b65\u9aa4\uff01\u5728\u6211\u7684\u6d4b\u8bd5\u4e2d\uff0c\u6211\u8fd8\u6709\u5176\u4ed6\u4e09\u4e2a\u6570\u636e\u96c6\uff1aair\uff08\u7a7a\u6c14\uff09\u3001coffee\uff08\u5496\u5561\uff09\u548calcohol\uff08\u9152\u7cbe\uff09\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"**air\u6570\u636e\u96c6\uff1a"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/air.jpg"}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"coffee\u6570\u636e\u96c6:")))),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/coffee.jpg"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"alcohol\u6570\u636e\u96c6:"))),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/alcohol.jpg"})),(0,r.yg)("p",null,"\u60a8\u5e94\u8be5\u6ce8\u610f\u5230\u4e0d\u540c\u7684\u996e\u6599\u5c06\u5177\u6709\u4e0d\u540c\u7684\u6c14\u4f53\u503c\uff0c\u8fd9\u5bf9\u4e8e\u673a\u5668\u5b66\u4e60\u6765\u8bf4\u975e\u5e38\u7406\u60f3\uff01\u53e6\u5916\uff0c\u4e3a\u4e86\u8fdb\u884c\u540e\u7eed\u8bad\u7ec3\uff0c\u62e5\u6709\u66f4\u591a\u6570\u636e\u603b\u662f\u66f4\u597d\u7684\uff0c\u6240\u4ee5\u8bf7\u968f\u65f6\u6536\u96c6\u66f4\u591a\u6570\u636e\uff01"),(0,r.yg)("p",null,":::\u6ce8\n\u53ef\u4ee5\u5c1d\u8bd5\u6dfb\u52a0\u66f4\u591a\u79cd\u7c7b\u7684\u9152\u7cbe\uff01\n:::"),(0,r.yg)("h3",{id:"3-\u8bbe\u8ba1-impulse"},"3. \u8bbe\u8ba1 Impulse"),(0,r.yg)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u9700\u8981\u901a\u8fc7\u70b9\u51fb ",(0,r.yg)("strong",{parentName:"p"},"Impulse Design")," -> ",(0,r.yg)("strong",{parentName:"p"},"Create Impulse")," \u6765\u8bbe\u8ba1Impulse\u3002Impulse\u63a5\u53d7\u539f\u59cb\u6570\u636e\uff0c\u4f7f\u7528\u4fe1\u53f7\u5904\u7406\u63d0\u53d6\u7279\u5f81\uff0c\u7136\u540e\u4f7f\u7528\u5b66\u4e60\u6a21\u5757\u5bf9\u65b0\u6570\u636e\u8fdb\u884c\u5206\u7c7b\u3002\u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u6dfb\u52a0\u4e86\u4e00\u4e2a\u5305\u542b\u6240\u6709\u8f93\u5165\u8f74\u7684 ",(0,r.yg)("strong",{parentName:"p"},"raw data")," \u5904\u7406\u6a21\u5757\uff0c\u5e76\u6dfb\u52a0\u4e86\u4e00\u4e2a",(0,r.yg)("strong",{parentName:"p"},"Neural Network (Keras)")," \u5b66\u4e60\u6a21\u5757\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/impulse.jpg"})),(0,r.yg)("p",null,"\u70b9\u51fb ",(0,r.yg)("strong",{parentName:"p"},"Save Impulse")," \u5728Impulse\u8bbe\u8ba1\u4e0b\u70b9\u51fb ",(0,r.yg)("strong",{parentName:"p"},"Raw data")," \uff0c\u60a8\u5e94\u8be5\u4f1a\u770b\u5230\u6570\u636e\u96c6\u7684\u539f\u59cb\u7279\u5f81\uff1a"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/rawdata.jpg"})),(0,r.yg)("p",null,"\u70b9\u51fb ",(0,r.yg)("strong",{parentName:"p"},"Save parameters")," \u7136\u540e\u5c06\u5bfc\u822a\u5230\u53e6\u4e00\u4e2a\u9875\u9762\u3002\u70b9\u51fb ",(0,r.yg)("strong",{parentName:"p"},"Generate Features"),"."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/feature.jpg"})),(0,r.yg)("p",null,"\u70b9\u51fbSave parameters\uff0c\u7136\u540e\u5c06\u5bfc\u822a\u5230\u53e6\u4e00\u4e2a\u9875\u9762\u3002\u70b9\u51fbGenerate Features\u3002"),(0,r.yg)("p",null,"\u8fd9\u5c06\u4ece\u5148\u524d\u7684\u6570\u636e\u96c6\u751f\u6210\u7279\u5f81\uff0c\u5e76\u5728\u53f3\u4fa7\u663e\u793a\u4e00\u4e2a\u56fe\u8868\u3002\u5982\u679c\u6570\u636e\u96c6\u4e4b\u95f4\u5206\u79bb\uff0c\u5373\u6570\u636e\u96c6\u5f7c\u6b64\u72ec\u7279\uff0c\u8fd9\u5bf9\u4e8e\u673a\u5668\u5b66\u4e60\u6765\u8bf4\u66f4\u597d\uff0c\u56e0\u4e3a\u6709\u4e86\u5dee\u5f02\u6027\u3002"),(0,r.yg)("h3",{id:"4-\u8bad\u7ec3\u6570\u636e"},"4. \u8bad\u7ec3\u6570\u636e"),(0,r.yg)("p",null,"\u5728 ",(0,r.yg)("strong",{parentName:"p"},"Impulse Design")," \u4e0b, \u70b9\u51fb ",(0,r.yg)("strong",{parentName:"p"},"NN Classifier")," \u4ee5\u914d\u7f6e\u795e\u7ecf\u7f51\u7edc\u7684\u8bbe\u7f6e\uff0c\u4ee5\u4e0b\u662f\u6211\u7684\u8bbe\u7f6e\uff1a"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/net.jpg"})),(0,r.yg)("p",null,"\u60a8\u53ef\u80fd\u9700\u8981\u6839\u636e\u81ea\u5df1\u7684\u9700\u8981\u8c03\u6574\u8fd9\u4e9b\u8bbe\u7f6e\uff0c\u5e76\u914d\u7f6e\u60a8\u7684 ",(0,r.yg)("strong",{parentName:"p"},"Neural network architecture"),", \u7136\u540e\u70b9\u51fb ",(0,r.yg)("strong",{parentName:"p"},"Start training"),"! \u8fd9\u5c06\u8fdb\u884c\u8bad\u7ec3\uff0c\u53ef\u80fd\u9700\u8981\u4e00\u4e9b\u65f6\u95f4\u3002"),(0,r.yg)("p",null,"\u8bad\u7ec3\u5b8c\u6210\u540e\uff0c\u60a8\u5c06\u770b\u5230\u4e00\u4e2a\u8bad\u7ec3\u6027\u80fd\u8868\u683c\u3002\u5982\u679c\u60a8\u7684\u6570\u636e\u96c6\u5f7c\u6b64\u72ec\u7279\uff0c\u60a8\u5e94\u8be5\u4f1a\u5f97\u5230\u76f8\u5f53\u4e0d\u9519\u7684\u7ed3\u679c\uff01\u8fd9\u662f\u6211\u7684\u6027\u80fd\uff1a"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/performance.jpg"})),(0,r.yg)("p",null,"\u4ece\u4e2d\u53ef\u4ee5\u770b\u51fa\uff0c\u51c6\u786e\u7387\u8fd8\u4e0d\u9519\uff0c\u8fd9\u662f\u56e0\u4e3a\u53ea\u67094\u79cd\u60c5\u51b5\u3002\u60a8\u53ef\u80fd\u5e0c\u671b\u5c06\u66f4\u591a\u60c5\u51b5/\u6d4b\u8bd5\u6dfb\u52a0\u5230\u8fd9\u4e2a\u793a\u4f8b\u4e2d\u3002"),(0,r.yg)("h3",{id:"5-\u5b9e\u65f6\u5206\u7c7b"},"5. \u5b9e\u65f6\u5206\u7c7b"),(0,r.yg)("p",null,"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u8bad\u7ec3\u597d\u4e86\u6a21\u578b\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u65b0\u6570\u636e\u6765\u6d4b\u8bd5\u6a21\u578b\u3002\u5bfc\u822a\u81f3 ",(0,r.yg)("strong",{parentName:"p"},"Live classification"),", \u5e76\u91c7\u6837\u65b0\u7684\u6570\u636e\u96c6\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u6d4b\u8bd5\u793a\u4f8b 1:")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/test1.jpg"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u6d4b\u8bd5\u793a\u4f8b 2:")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/test2.jpg"})),(0,r.yg)("p",null,"\u4ece\u7ed3\u679c\u4e2d\u53ef\u4ee5\u770b\u51fa\uff0c\u4f7f\u7528Grove - Multichannel Gas Sensor v2\u548cEdge Impulse\u7684\u5e2e\u52a9\uff0c\u60a8\u53ef\u4ee5\u5f88\u597d\u5730\u533a\u5206\u9152\u7cbe\uff01"),(0,r.yg)("h2",{id:"\u90e8\u7f72\u5230-wio-terminal"},"\u90e8\u7f72\u5230 Wio Terminal"),(0,r.yg)("p",null,"\u63a5\u4e0b\u6765\u662f\u5728\u8bbe\u5907\u4e0a\u90e8\u7f72\u3002\u5728\u70b9\u51fb\u90e8\u7f72\u9009\u9879\u5361\u540e\uff0c\u9009\u62e9Arduino\u5e93\u5e76\u4e0b\u8f7d\u5b83\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/deploy.png"})),(0,r.yg)("p",null,"\u89e3\u538b\u7f29\u5b58\u6863\u5e76\u5c06\u5176\u653e\u7f6e\u5728Arduino\u5e93\u6587\u4ef6\u5939\u4e2d\u3002\u6253\u5f00Arduino IDE\u5e76\u9009\u62e9\u9759\u6001\u7f13\u51b2\u533a\u793a\u4f8b\uff08\u4f4d\u4e8e\u6587\u4ef6->\u793a\u4f8b->\u60a8\u7684\u9879\u76ee\u540d\u79f0->\u9759\u6001\u7f13\u51b2\u533a\uff09\uff0c\u5176\u4e2d\u5df2\u7ecf\u6709\u4e86\u7528\u4e8e\u4f7f\u7528\u60a8\u7684\u6a21\u578b\u8fdb\u884c\u5206\u7c7b\u7684\u6240\u6709\u6837\u677f\u4ee3\u7801\u3002\u5f88\u68d2\uff01"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/code.jpg"})),(0,r.yg)("p",null,"\u552f\u4e00\u9700\u8981\u7528\u6237\u586b\u5199\u7684\u662f\u51fd\u6570raw_feature_get_data(size_t offset, size_t length, float *out_ptr)\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"int raw_feature_get_data(size_t offset, size_t length, float *out_ptr) {\n    float features[4];\n    features[0]=gas.getGM102B();\n    features[1] = gas.getGM302B();\n    features[2]=gas.getGM502B();\n    features[3]=gas.getGM702B();\n    memcpy(out_ptr, features + offset, length * sizeof(float));\n    return 0;\n}\n")),(0,r.yg)("h2",{id:"\u5b8c\u6574\u4ee3\u7801"},"\u5b8c\u6574\u4ee3\u7801"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <coffee_cola_alcohol_big_inferencing.h>\n#include <Multichannel_Gas_GMXXX.h>\n#include <Wire.h>\nGAS_GMXXX<TwoWire> gas;\n\nint raw_feature_get_data(size_t offset, size_t length, float *out_ptr) {\n    float features[4];\n\n    features[0]=gas.getGM102B();\n    features[1] = gas.getGM302B();\n    features[2]=gas.getGM502B();\n    features[3]=gas.getGM702B();\n    memcpy(out_ptr, features + offset, length * sizeof(float));\n    return 0;\n}\n\nvoid setup()\n{\n    // put your setup code here, to run once:\n    Serial.begin(115200);\n    gas.begin(Wire, 0x08); // use the hardware I2C\n    Serial.println("Edge Impulse Inferencing Demo");\n}\n\nvoid loop()\n{\n    ei_printf("Edge Impulse standalone inferencing (Arduino)\\n");\n\n \n    ei_impulse_result_t result = { 0 };\n\n    // the features are stored into flash, and we don\'t want to load everything into RAM\n    signal_t features_signal;\n    features_signal.total_length = sizeof(features) / sizeof(features[0]);\n    features_signal.get_data = &raw_feature_get_data;\n\n    // invoke the impulse\n    EI_IMPULSE_ERROR res = run_classifier(&features_signal, &result, false /* debug */);\n    ei_printf("run_classifier returned: %d\\n", res);\n\n    if (res != 0) return;\n\n    // print the predictions\n    ei_printf("Predictions ");\n    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",\n        result.timing.dsp, result.timing.classification, result.timing.anomaly);\n    ei_printf(": \\n");\n    ei_printf("[");\n    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {\n        ei_printf("%.5f", result.classification[ix].value);\n#if EI_CLASSIFIER_HAS_ANOMALY == 1\n        ei_printf(", ");\n#else\n        if (ix != EI_CLASSIFIER_LABEL_COUNT - 1) {\n            ei_printf(", ");\n        }\n#endif\n    }\n#if EI_CLASSIFIER_HAS_ANOMALY == 1\n    ei_printf("%.3f", result.anomaly);\n#endif\n    ei_printf("]\\n");\n\n    // human-readable predictions\n    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {\n        ei_printf("    %s: %.5f\\n", result.classification[ix].label, result.classification[ix].value);\n    }\n#if EI_CLASSIFIER_HAS_ANOMALY == 1\n    ei_printf("    anomaly score: %.3f\\n", result.anomaly);\n#endif\n\n    delay(1);\n}\n\n/**\n * @brief      Printf function uses vsnprintf and output using Arduino Serial\n *\n * @param[in]  format     Variable argument list\n */\nvoid ei_printf(const char *format, ...) {\n    static char print_buf[1024] = { 0 };\n\n    va_list args;\n    va_start(args, format);\n    int r = vsnprintf(print_buf, sizeof(print_buf), format, args);\n    va_end(args);\n\n    if (r > 0) {\n        Serial.write(print_buf);\n    }\n}\n')),(0,r.yg)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://twitter.com/kartben/status/1258791793073815552"},"Benjamin Cab\xe9's Artificial nose project"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://studio.edgeimpulse.com/public/37392/latest"},"Edge Impulse Public project"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"http://wiki.seeedstudio.com/Wio-Terminal-Edge-Impulse"},"Project Github")))))}u.isMDXComponent=!0}}]);