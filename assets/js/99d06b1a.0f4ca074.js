"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62915],{15680:(e,t,i)=>{i.d(t,{xA:()=>u,yg:()=>m});var n=i(96540);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=n.createContext({}),g=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=g(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=g(i),y=a,m=d["".concat(p,".").concat(y)]||d[y]||s[y]||l;return i?n.createElement(m,r(r({ref:t},u),{},{components:i})):n.createElement(m,r({ref:t},u))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=i.length,r=new Array(l);r[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,r[1]=o;for(var g=2;g<l;g++)r[g]=i[g];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}y.displayName="MDXCreateElement"},61976:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var n=i(9668),a=(i(96540),i(15680));const l={description:"\u4f7f\u7528XIAO\u76846x10 RGB MATRIX\u5165\u95e8\u6307\u5357",title:"\u57fa\u4e8e XIAO \u7684 6x10 \u9635\u5217 RGB \u706f\u6269\u5c55\u677f",keywords:["XIAO RGB"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/cn/rgb_matrix_for_xiao",last_update:{date:"10/31/2023",author:"\u91d1 \u83ca"}},r="\u57fa\u4e8e XIAO \u7684 6x10 \u9635\u5217 RGB \u706f\u6269\u5c55\u677f",o={unversionedId:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/CN_xiao-rgb-matrix",id:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/CN_xiao-rgb-matrix",title:"\u57fa\u4e8e XIAO \u7684 6x10 \u9635\u5217 RGB \u706f\u6269\u5c55\u677f",description:"\u4f7f\u7528XIAO\u76846x10 RGB MATRIX\u5165\u95e8\u6307\u5357",source:"@site/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/CN_xiao-rgb-matrix.md",sourceDirName:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board",slug:"/cn/rgb_matrix_for_xiao",permalink:"/cn/rgb_matrix_for_xiao",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/CN_xiao-rgb-matrix.md",tags:[],version:"current",lastUpdatedBy:"\u91d1 \u83ca",lastUpdatedAt:1698710400,formattedLastUpdatedAt:"Oct 31, 2023",frontMatter:{description:"\u4f7f\u7528XIAO\u76846x10 RGB MATRIX\u5165\u95e8\u6307\u5357",title:"\u57fa\u4e8e XIAO \u7684 6x10 \u9635\u5217 RGB \u706f\u6269\u5c55\u677f",keywords:["XIAO RGB"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/cn/rgb_matrix_for_xiao",last_update:{date:"10/31/2023",author:"\u91d1 \u83ca"}},sidebar:"CNSidebar",previous:{title:"\u57fa\u4e8e XIAO \u7684\u7535\u6c60\u7ba1\u7406\u82af\u7247\u7684 Grove \u63a5\u53e3\u6269\u5c55\u677f",permalink:"/cn/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip"},next:{title:"\u57fa\u4e8e XIAO \u7684 \u58a8\u6c34\u5c4f\u63a5\u53e3\u6269\u5c55\u677f",permalink:"/cn/XIAO-eInk-Expansion-Board"}},p={},g=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:3},{value:"\u89c4\u683c",id:"\u89c4\u683c",level:3},{value:"\u5e94\u7528\u9886\u57df",id:"\u5e94\u7528\u9886\u57df",level:3},{value:"\u5165\u95e8\u6307\u5357",id:"\u5165\u95e8\u6307\u5357",level:2},{value:"\u786c\u4ef6\u8fde\u63a5",id:"\u786c\u4ef6\u8fde\u63a5",level:3},{value:"\u8f6f\u4ef6\u51c6\u5907",id:"\u8f6f\u4ef6\u51c6\u5907",level:3},{value:"Arduino\u5e93\u6982\u8ff0",id:"arduino\u5e93\u6982\u8ff0",level:2},{value:"\u51fd\u6570",id:"\u51fd\u6570",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u793a\u4f8b: \u6d41\u52a8\u706f\u6548",id:"\u793a\u4f8b-\u6d41\u52a8\u706f\u6548",level:2},{value:"\u591a\u4e2a\u706f\u677f\u7684\u62fc\u63a5",id:"\u591a\u4e2a\u706f\u677f\u7684\u62fc\u63a5",level:2},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2},{value:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",level:2}],u={toc:g},d="wrapper";function s(e){let{components:t,...i}=e;return(0,a.yg)(d,(0,n.A)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u57fa\u4e8e-xiao-\u7684-6x10-\u9635\u5217-rgb-\u706f\u6269\u5c55\u677f"},"\u57fa\u4e8e XIAO \u7684 6x10 \u9635\u5217 RGB \u706f\u6269\u5c55\u677f"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiao-rgb-matrix/1.jpg",style:{width:700,height:"auto"}})),(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/6x10-RGB-MATRIX-for-XIAO-p-5771.html#"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," \u70b9\u51fb\u8d2d\u4e70 \ud83d\uddb1\ufe0f"))))),(0,a.yg)("br",null),(0,a.yg)("p",null,'\u4ecb\u7ecd"6x10 RGB-MATRIX for XIAO" - \u8fd9\u662fSeeed Studio XIAO\u7cfb\u5217\u4ea7\u54c1\u4e2d\u4ee4\u4eba\u773c\u82b1\u7f2d\u4e71\u7684\u65b0\u6210\u5458\u3002\u73b0\u5728\uff0c\u6709\u4e866x10 RGB-MATRIX\uff0c\u60a8\u53ef\u4ee5\u7528\u5404\u79cd\u989c\u8272\u7ed9\u60a8\u7684\u9879\u76ee\u589e\u6dfb\u5149\u5f69\u3002\u8be5\u77e9\u9635\u753160\u9897\u7cbe\u5fc3\u6392\u5217\u7684WS2812 LED\u7ec4\u6210\uff0c\u5b83\u4e0d\u4ec5\u4ec5\u662f\u7f8e\u89c2\u7684\u88c5\u9970\u54c1\uff0c\u66f4\u662f\u5c06\u60a8\u7684\u521b\u610f\u6784\u60f3\u53d8\u4e3a\u73b0\u5b9e\u7684\u5de5\u5177\u3002\u65e0\u8bba\u60a8\u662f\u5236\u4f5c\u4e92\u52a8\u827a\u672f\u54c1\uff0c\u8bbe\u8ba1\u52a8\u6001\u901a\u77e5\u7cfb\u7edf\uff0c\u8fd8\u662f\u4ec5\u4ec5\u5e0c\u671b\u4e3a\u60a8\u7684\u4f5c\u54c1\u589e\u6dfb\u4e00\u62b9\u8272\u5f69\uff0c\u8fd9\u4e2a\u77e9\u9635\u90fd\u662f\u60a8\u7684\u521b\u4f5c\u753b\u5e03\u3002\u5b83\u4e0eXIAO\u4e3b\u63a7\u5668\u5b8c\u7f8e\u96c6\u6210\uff0c\u8fd8\u914d\u5907\u4e86VCC\u3001GND\u548cDIN\u710a\u63a5\u63a5\u70b9\uff0c\u786e\u4fdd\u5728\u5404\u79cd\u60c5\u51b5\u4e0b\u7684\u7075\u6d3b\u6027\u3002'),(0,a.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.yg)("h3",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"60\u9897WS2812 LED\uff1a\u4ee56x10\u7684\u7f51\u683c\u6392\u5217\uff0c\u8fd9\u4e9bLED\u975e\u5e38\u9002\u5408\u521b\u5efa\u751f\u52a8\u7684\u663e\u793a\u6548\u679c\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u7d27\u51d1\u8bbe\u8ba1\uff1a\u6bcf\u4e2aLED\u53ea\u670910mm x 10mm\u5927\u5c0f\uff0c\u63d0\u4f9b\u9ad8\u5bc6\u5ea6\u663e\u793a\uff0c\u4e0d\u5360\u7528\u592a\u591a\u7a7a\u95f4\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u591a\u529f\u80fd\u8fde\u63a5\uff1a\u867d\u7136\u5b83\u662f\u4e3aXIAO\u4e3b\u63a7\u5668\u8bbe\u8ba1\u7684\uff0c\u4f46\u6211\u4eec\u8fd8\u7279\u522b\u52a0\u5165\u4e86VCC\u3001GND\u548cDIN\u710a\u63a5\u63a5\u70b9\uff0c\u4ee5\u9002\u5e94\u66f4\u5e7f\u6cdb\u7684\u5e94\u7528\u573a\u666f\u3002"),(0,a.yg)("li",{parentName:"ul"},"RGB\u529f\u80fd\uff1a\u6bcf\u4e2aLED\u90fd\u53ef\u4ee5\u663e\u793a\u591a\u79cd\u989c\u8272\uff0c\u8ba9\u60a8\u6709\u81ea\u7531\u521b\u9020\u52a8\u6001\u4e14\u4e30\u5bcc\u591a\u5f69\u7684\u663e\u793a\u6548\u679c\u7684\u7a7a\u95f4\u3002")),(0,a.yg)("h3",{id:"\u89c4\u683c"},"\u89c4\u683c"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"LED \u7c7b\u578b: WS2812"),(0,a.yg)("li",{parentName:"ul"},"LED\u6570\u91cf: 60"),(0,a.yg)("li",{parentName:"ul"},"\u6392\u5217\u65b9\u5f0f\uff1a6\u884cx 10\u5217"),(0,a.yg)("li",{parentName:"ul"},"LED \u578b\u53f7: 10mm x 10mm"),(0,a.yg)("li",{parentName:"ul"},"XIAO\u7684\u8fde\u63a5\u7aef\u53e3: D0"),(0,a.yg)("li",{parentName:"ul"},"\u9644\u52a0\u63a5\u70b9: VCC, GND, DIN, DOUT")),(0,a.yg)("h3",{id:"\u5e94\u7528\u9886\u57df"},"\u5e94\u7528\u9886\u57df"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4ea4\u4e92\u5f0f\u663e\u793a:\u5728\u60a8\u7684\u9879\u76ee\u4e2d\u4f7f\u7528LED\u77e9\u9635\u8fdb\u884c\u52a8\u6001\u89c6\u89c9\u53cd\u9988\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u901a\u77e5:\u4e3a\u60a8\u7684\u8bbe\u5907\u521b\u5efa\u5f69\u8272\u901a\u77e5\u6216\u8b66\u62a5\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u827a\u672f\u88c5\u7f6e:\u5c06LED\u77e9\u9635\u6574\u5408\u5230\u827a\u672f\u4f5c\u54c1\u4e2d\uff0c\u5177\u6709\u73b0\u4ee3\u611f\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u53ef\u7a7f\u6234\u6280\u672f:\u878d\u5165\u670d\u88c5\u6216\u914d\u9970\u4e2d\uff0c\u6253\u9020\u672a\u6765\u611f\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6e38\u620f:\u901a\u8fc7\u751f\u52a8\u7684\u89c6\u89c9\u6548\u679c\u589e\u5f3a\u6e38\u620f\u4f53\u9a8c\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4e00\u822c\u7167\u660e:\u7528\u4e8e\u73af\u5883\u7167\u660e\u6216\u5404\u79cd\u73af\u5883\u7684\u60c5\u7eea\u8bbe\u7f6e\u3002")),(0,a.yg)("h2",{id:"\u5165\u95e8\u6307\u5357"},"\u5165\u95e8\u6307\u5357"),(0,a.yg)("p",null,"\u6b22\u8fce\u6765\u52306x10 RGB-MATRIX for XIAO\u7684\u5feb\u901f\u5165\u95e8\u6307\u5357\u3002\u672c\u6307\u5357\u65e8\u5728\u5e2e\u52a9\u60a8\u4e0eXIAO RP2040\u4e3b\u63a7\u5236\u5668\u4e00\u8d77\u8bbe\u7f6e\u5e76\u5f00\u59cb\u4f7f\u7528\u65b0\u7684LED\u77e9\u9635\u6269\u5c55\u677f\u3002"),(0,a.yg)("h3",{id:"\u786c\u4ef6\u8fde\u63a5"},"\u786c\u4ef6\u8fde\u63a5"),(0,a.yg)("p",null,"\u5728\u6536\u5230\u60a8\u7684\u4ea7\u54c1\u540e\uff0c\u9700\u8981\u8fdb\u884c\u4e00\u4e9b\u710a\u63a5\u3002\u6211\u4eec\u5728\u5305\u88c5\u4e2d\u63d0\u4f9b\u4e86\u4e24\u4e2a\u5f15\u811a\u5934\u3002\u4f60\u9700\u8981\u628a\u8fd9\u4e9b\u5934\u710a\u5230\u6269\u5c55\u677f\u4e0a\u3002"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiao-rgb-matrix/2.png",style:{width:700,height:"auto"}})),(0,a.yg)("p",null,"\u4e00\u65e6\u710a\u63a5\u5b8c\u6210\uff0c\u60a8\u53ef\u4ee5\u7ee7\u7eed\u5c06\u6269\u5c55\u677f\u8fde\u63a5\u5230XIAO RP2040\u4e3b\u63a7\u5236\u5668\u3002"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiao-rgb-matrix/3.jpg",style:{width:700,height:"auto"}})),(0,a.yg)("p",null,":::\u6ce8\u610f\n\u8fde\u63a5\u65f6\u8bf7\u7279\u522b\u5c0f\u5fc3\uff0c\u4e0d\u8981\u5728XIAO\u901a\u7535\u65f6\u8fde\u63a5\uff0c\u4e5f\u4e0d\u8981\u63a5\u9519\u7535\u6e90\u5f15\u811a\u3002\u5426\u5219\uff0c\u5b83\u5f88\u53ef\u80fd\u4f1a\u70e7\u574f\u3002\n:::"),(0,a.yg)("h3",{id:"\u8f6f\u4ef6\u51c6\u5907"},"\u8f6f\u4ef6\u51c6\u5907"),(0,a.yg)("p",null,"\u672c\u6559\u7a0b\u5c06\u4f7f\u7528XIAO RP2040\u4f5c\u4e3a\u4e3b\u6559\u7a0b\uff0c\u5982\u679c\u60a8\u662f\u7b2c\u4e00\u6b21\u4f7f\u7528XIAO RP2040\uff0c\u8bf7\u9605\u8bfb\u5176\u5165\u95e8Wiki\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/"},"\u4f7f\u7528Arduino\u67e5\u770bStudio XIAO RP2040"))),(0,a.yg)("p",null,"\u540c\u65f6\uff0c\u672c\u6559\u7a0b\u4e2d\u63d0\u4f9b\u7684\u6240\u6709\u793a\u4f8b\u7a0b\u5e8f\u4e5f\u53ef\u4ee5\u5728\u5176\u4ed6XIAO\u4e0a\u8fd0\u884c\uff0c\u60a8\u4e5f\u53ef\u4ee5\u6839\u636e\u60a8\u4f7f\u7528\u7684XIAO\u63d0\u524d\u914d\u7f6eArduino\u5f00\u53d1\u73af\u5883\u3002"),(0,a.yg)("h2",{id:"arduino\u5e93\u6982\u8ff0"},"Arduino\u5e93\u6982\u8ff0"),(0,a.yg)("p",null,":::\u63d0\u793a"),(0,a.yg)("p",null,"\u5982\u679c\u8fd9\u662f\u4f60\u7b2c\u4e00\u6b21\u4f7f\u7528Arduino\uff0c\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u4f60\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"\u5f00\u59cb\u4f7f\u7528Arduino"),"\u3002\n:::"),(0,a.yg)("h3",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,a.yg)("p",null,"\u5728\u6211\u4eec\u5f00\u59cb\u5f00\u53d1\u8349\u56fe\u4e4b\u524d\uff0c\u8ba9\u6211\u4eec\u770b\u4e00\u4e0b\u5e93\u7684\u53ef\u7528\u51fd\u6570\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"Adafruit_NeoPixel(uint16_t n, int16_t pin = 6, neoPixelType type = NEO_GRB + NEO_KHZ800);")," \u2014\u2014 \u5f53\u957f\u5ea6\u3001\u5f15\u811a\u548c\u50cf\u7d20\u7c7b\u578b\u5728\u7f16\u8bd1\u65f6\u5df2\u77e5\u65f6\uff0c\u4f7f\u7528NeoPixel\u6784\u9020\u51fd\u6570\u3002"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u8f93\u5165\u53c2\u6570"),":"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"n"),": \u94fe\u4e2d\u7684\u65b0\u50cf\u7d20\u6570\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"p"),": Arduino\u5f15\u811a\u53f7\uff0c\u5b83\u5c06\u9a71\u52a8NeoPixel\u6570\u636e\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"t"),": \u50cf\u7d20\u7c7b\u578b\u2014\u5c06Adafruit",(0,a.yg)("em",{parentName:"li"},"NeoPixel.h\u4e2d\u5b9a\u4e49\u7684NEO"),"*\u5e38\u91cf\u76f8\u52a0\uff0c\u4f8b\u5982NeoPixels\u7684 ",(0,a.yg)("inlineCode",{parentName:"li"},"NEO_GRB+NEO_KHZ800")," \u9884\u671f\u4e3a800 KHz (vs 400 KHz)\u6570\u636e\u6d41\uff0c\u989c\u8272\u5b57\u8282\u4ee5\u6bcf\u4e2a\u50cf\u7d20\u7684\u7eff\u8272\uff0c\u7ea2\u8272\uff0c\u84dd\u8272\u987a\u5e8f\u8868\u793a\u3002")),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u8fd4\u56de\u503c"),": Adafruit_NeoPixel\u5bf9\u8c61\u3002\u5728\u4f7f\u7528\u4e4b\u524d\u8c03\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"begin()")," \u51fd\u6570\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"void begin(void)")," \u2014\u2014 \u914d\u7f6eNeoPixel\u5f15\u811a\u8f93\u51fa\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"void show(void)")," \u2014\u2014 \u5c06RAM\u4e2d\u7684\u50cf\u7d20\u6570\u636e\u4f20\u8f93\u5230NeoPixels\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"void setPin(int16_t p)")," \u2014\u2014 \u8bbe\u7f6e/\u66f4\u6539NeoPixel\u8f93\u51fa\u5f15\u811a\u7f16\u53f7\u3002\u524d\u4e00\u4e2a\u5f15\u811a(\u5982\u679c\u6709\u7684\u8bdd)\u8bbe\u7f6e\u4e3aINPUT\uff0c\u65b0\u5f15\u811a\u8bbe\u7f6e\u4e3aOUTPUT\u3002"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u8f93\u5165\u53c2\u6570"),":"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"p"),": Arduino\u5f15\u811a\u7f16\u53f7(-1 =\u65e0\u5f15\u811a)\u3002"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"void setPixelColor(uint16_t n, uint8_t r, uint8_t g, uint8_t b, uint8_t w)")," \u2014\u2014 \u4f7f\u7528\u5355\u72ec\u7684\u7ea2\u3001\u7eff\u3001\u84dd\u548c\u767d\u7ec4\u4ef6\u8bbe\u7f6e\u50cf\u7d20\u7684\u989c\u8272(\u4ec5\u9002\u7528\u4e8eRGBW\u65b0\u50cf\u7d20)\u3002"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u8f93\u5165\u53c2\u6570"),":"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"n"),": \u50cf\u7d20\u7d22\u5f15\uff0c\u4ece0\u5f00\u59cb"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"r"),": \u7ea2\u8272\u4eae\u5ea6\uff0c0 =\u6700\u5c0f\u503c(\u5173\u95ed)\uff0c255 =\u6700\u5927\u503c\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"g"),": \u7eff\u8272\u4eae\u5ea6\uff0c0 =\u6700\u5c0f(\u5173\u95ed)\uff0c255 =\u6700\u5927\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"b"),": \u84dd\u8272\u4eae\u5ea6\uff0c0 =\u6700\u5c0f\u503c(\u5173\u95ed)\uff0c255 =\u6700\u5927\u503c\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"w")," (\u53ef\u9009):\u767d\u8272\u4eae\u5ea6\uff0c0 =\u6700\u5c0f(\u5173\u95ed)\uff0c255 =\u6700\u5927\uff0c\u5982\u679c\u4f7f\u7528RGB\u50cf\u7d20\u5219\u5ffd\u7565\u3002"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"void setPixelColor(uint16_t n, uint32_t c)")," \u2014\u2014 \u4f7f\u752832\u4f4d\u7684\u201c\u6253\u5305\u201dRGB\u6216RGBW\u503c\u8bbe\u7f6e\u50cf\u7d20\u7684\u989c\u8272\u3002"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u8f93\u5165\u53c2\u6570"),":"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"n"),": \u50cf\u7d20\u7d22\u5f15\uff0c\u4ece0\u5f00\u59cb\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"c"),": 32\u4f4d\u989c\u8272\u503c\u3002\u6700\u91cd\u8981\u7684\u5b57\u8282\u662f\u767d\u8272(\u5bf9\u4e8eRGBW\u50cf\u7d20)\u6216\u5ffd\u7565(\u5bf9\u4e8eRGB\u50cf\u7d20)\uff0c\u5176\u6b21\u662f\u7ea2\u8272\uff0c\u7136\u540e\u662f\u7eff\u8272\uff0c\u6700\u4e0d\u91cd\u8981\u7684\u5b57\u8282\u662f\u84dd\u8272\u3002"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"void fill(uint32_t c = 0, uint16_t first = 0, uint16_t count = 0)")," \u2014\u2014 \u7528\u4e00\u79cd\u989c\u8272\u586b\u5145\u5168\u90e8\u6216\u90e8\u5206NeoPixel\u6761\u3002"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u8f93\u5165\u53c2\u6570"),":"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"c"),": 32\u4f4d\u989c\u8272\u503c\u3002\u6700\u91cd\u8981\u7684\u5b57\u8282\u662f\u767d\u8272(\u5bf9\u4e8eRGBW\u50cf\u7d20)\u6216\u5ffd\u7565(\u5bf9\u4e8eRGB\u50cf\u7d20)\uff0c\u5176\u6b21\u662f\u7ea2\u8272\uff0c\u7136\u540e\u662f\u7eff\u8272\uff0c\u6700\u4e0d\u91cd\u8981\u7684\u5b57\u8282\u662f\u84dd\u8272\u3002\u5982\u679c\u6240\u6709\u53c2\u6570\u90fd\u672a\u6307\u5b9a\uff0c\u5219\u8be5\u503c\u4e3a0(\u5173\u95ed)\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"first"),": \u8981\u586b\u5145\u7684\u7b2c\u4e00\u4e2a\u50cf\u7d20\u7684\u7d22\u5f15\uff0c\u4ece0\u5f00\u59cb\u3002\u5fc5\u987b\u5728\u754c\u5185\uff0c\u4e0d\u6267\u884c\u88c1\u526a\u3002\u5982\u679c\u672a\u6307\u5b9a\u5219\u4e3a0\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"count"),": \u8981\u586b\u5145\u7684\u50cf\u7d20\u6570\uff0c\u4e3a\u6b63\u503c\u3002\u4f20\u90120\u6216\u4e0d\u6307\u5b9a\u5c06\u586b\u5145\u5230\u6761\u5e26\u7684\u672b\u5c3e\u3002"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"void setBrightness(uint8_t b)")," \u2014\u2014 \u8c03\u8282\u8f93\u51fa\u4eae\u5ea6\u3002\u4e0d\u4f1a\u7acb\u5373\u5f71\u54cd\u5f53\u524d\u663e\u793a\u5728led\u4e0a\u7684\u5185\u5bb9\u3002\u4e0b\u4e00\u6b21\u8c03\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"show()")," \u5c06\u5237\u65b0\u6b64\u7ea7\u522b\u7684led\u3002\n",(0,a.yg)("strong",{parentName:"p"},"\u8f93\u5165\u53c2\u6570"),":"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"b"),": \u4eae\u5ea6\u8bbe\u7f6e\uff0c0=\u6700\u5c0f(\u5173\u95ed)\uff0c255=\u6700\u4eae\u3002"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"void clear(void)")," \u2014\u2014  \u75280 / black / off\u586b\u5145\u6574\u4e2aNeoPixel\u6761\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"void updateLength(uint16_t n)")," \u2014\u2014 \u66f4\u6539\u5148\u524d\u58f0\u660e\u7684Adafruit_NeoPixel\u6761\u5bf9\u8c61\u7684\u957f\u5ea6\u3002\u65e7\u6570\u636e\u88ab\u91ca\u653e\uff0c\u65b0\u6570\u636e\u88ab\u6e05\u9664\u3002\u5f15\u811a\u7f16\u53f7\u548c\u50cf\u7d20\u683c\u5f0f\u4e0d\u53d8\u3002"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u8f93\u5165\u53c2\u6570"),":"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"n"),": \u6761\u7684\u65b0\u957f\u5ea6\uff0c\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d\u3002"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"void updateType(neoPixelType t)")," \u2014\u2014 \u66f4\u6539\u5148\u524d\u58f0\u660e\u7684Adafruit_NeoPixel\u6761\u5e26\u5bf9\u8c61\u7684\u50cf\u7d20\u683c\u5f0f\u3002\u5982\u679c\u683c\u5f0f\u4eceRGB\u53d8\u4f53\u4e4b\u4e00\u66f4\u6539\u4e3aRGBW\u53d8\u4f53\uff08\u6216\u4eceRGBW\u66f4\u6539\u4e3aRGB\uff09\uff0c\u5219\u65e7\u6570\u636e\u5c06\u88ab\u91ca\u653e\u5e76\u6e05\u9664\u65b0\u6570\u636e\u3002\u5426\u5219\uff0c\u65e7\u6570\u636e\u5c06\u4fdd\u7559\u5728RAM\u4e2d\uff0c\u5e76\u4e14\u4e0d\u4f1a\u6309\u7167\u65b0\u683c\u5f0f\u91cd\u65b0\u6392\u5e8f\uff0c\u56e0\u6b64\u5efa\u8bae\u968f\u540e\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"clear()"),"\u8fdb\u884c\u6e05\u9664\u3002"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u8f93\u5165\u53c2\u6570"),":"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"t"),": \u50cf\u7d20\u7c7b\u578b - \u5c06Adafruit",(0,a.yg)("em",{parentName:"li"},"NeoPixel.h\u4e2d\u5b9a\u4e49\u7684NEO"),"*\u5e38\u91cf\u76f8\u52a0\uff0c\u4f8b\u5982\u5bf9\u4e8e\u671f\u671b\u4ee5800 KHz\uff08\u800c\u4e0d\u662f400 KHz\uff09\u6570\u636e\u6d41\u4f20\u8f93\u7684NeoPixels\uff0c\u6bcf\u4e2a\u50cf\u7d20\u7684\u989c\u8272\u5b57\u8282\u6309\u7167\u7eff\u8272\u3001\u7ea2\u8272\u3001\u84dd\u8272\u7684\u987a\u5e8f\u8868\u793a\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"li"},"NEO_GRB+NEO_KHZ800")," \u3002"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"static uint32_t Color(uint8_t r, uint8_t g, uint8_t b)")," \u2014\u2014 \u5c06\u72ec\u7acb\u7684\u7ea2\u8272\u3001\u7eff\u8272\u548c\u84dd\u8272\u503c\u8f6c\u6362\u4e3a\u5355\u4e2a\u201c\u6253\u5305\u201d\u768432\u4f4dRGB\u989c\u8272\u3002"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u8f93\u5165\u53c2\u6570"),":"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"r"),": \u7ea2\u8272\u4eae\u5ea6\uff0c\u8303\u56f4\u4ece0\u5230255\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"g"),": \u7eff\u8272\u4eae\u5ea6\uff0c\u8303\u56f4\u4ece0\u5230255\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"b"),": \u84dd\u8272\u4eae\u5ea6\uff0c\u8303\u56f4\u4ece0\u5230255\u3002")),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u8fd4\u56de"),": 32\u4f4d\u6253\u5305\u7684RGB\u503c\uff0c\u53ef\u4ee5\u5c06\u5176\u5206\u914d\u7ed9\u53d8\u91cf\u4ee5\u4f9b\u4ee5\u540e\u4f7f\u7528\uff0c\u6216\u4f20\u9012\u7ed9 ",(0,a.yg)("inlineCode",{parentName:"p"},"setPixelColor()")," \u51fd\u6570\u3002\u6253\u5305\u7684RGB\u683c\u5f0f\u662f\u53ef\u9884\u6d4b\u7684\uff0c\u4e0d\u53d7LED\u4e32\u989c\u8272\u987a\u5e8f\u7684\u5f71\u54cd\u3002"))),(0,a.yg)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u65b9\u6cd5\u4e00"))),(0,a.yg)("p",null,"\u5728\u672c\u6559\u7a0b\u4e2d\u5c06\u4f7f\u7528 ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"https://github.com/adafruit/Adafruit_NeoPixel"},"Adafruit NeoPixel\u5e93"))," \uff0c\u60a8\u53ef\u4ee5\u5728Arduino\u7684\u5e93\u7ba1\u7406\u5668\u4e2d\u641c\u7d22\u5e76\u4e0b\u8f7d\u5b89\u88c5\u5b83\u3002"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiao-rgb-matrix/4.png",style:{width:1e3,height:"auto"}})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u65b9\u6cd5\u4e8c"))),(0,a.yg)("p",null,"\u901a\u8fc7\u4e0b\u9762\u6309\u94ae\u4e0b\u8f7d\u5e93"),(0,a.yg)("div",{class:"github_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"github_item",href:"https://github.com/adafruit/Adafruit_NeoPixel"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," \u4e0b\u8f7d\u5e93")))," ",(0,a.yg)("svg",{"aria-hidden":"true",focusable:"false",role:"img",className:"mr-2",viewBox:"-3 10 9 1",width:16,height:16,fill:"currentColor",style:{textAlign:"center",display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}},(0,a.yg)("path",{d:"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"})))),(0,a.yg)("br",null),(0,a.yg)("p",null,"\u65e2\u7136\u60a8\u5df2\u7ecf\u4e0b\u8f7d\u4e86zip\u5e93\u6587\u4ef6\uff0c\u8bf7\u6253\u5f00Arduino IDE\uff0c\u70b9\u51fb ",(0,a.yg)("strong",{parentName:"p"},"Sketch > Include Library > Add .ZIP Library"),"\u3002 \u9009\u62e9\u521a\u521a\u4e0b\u8f7d\u7684zip\u6587\u4ef6\uff0c\u5982\u679c\u5e93\u6b63\u786e\u5b89\u88c5\uff0c\u60a8\u5c06\u5728\u901a\u77e5\u7a97\u53e3\u4e2d\u770b\u5230 ",(0,a.yg)("strong",{parentName:"p"},"Library added to your libraries")," \u3002\u8fd9\u610f\u5473\u7740\u5e93\u5df2\u6210\u529f\u5b89\u88c5\u3002"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png",style:{width:800,height:"auto"}})),(0,a.yg)("h2",{id:"\u793a\u4f8b-\u6d41\u52a8\u706f\u6548"},"\u793a\u4f8b: \u6d41\u52a8\u706f\u6548"),(0,a.yg)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u7a0b\u5e8f\u7528\u4e8e\u5b9e\u73b0\u6d41\u52a8\u706f\u6548\u679c\uff0c\u5176\u4e2d\u706f\u73e0\u5c06\u9010\u4e2a\u987a\u5e8f\u70b9\u4eae\u3002\u8be5\u7a0b\u5e8f\u9002\u7528\u4e8e\u6240\u6709XIAO\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"#include <Adafruit_NeoPixel.h>\n#ifdef __AVR__\n #include <avr/power.h> // Required for 16 MHz Adafruit Trinket\n#endif\n\n// Which pin on the Arduino is connected to the NeoPixels?\n#define PIN        A0 // On Trinket or Gemma, suggest changing this to 1\n\n// How many NeoPixels are attached to the Arduino?\n#define NUMPIXELS 60 // Popular NeoPixel ring size\n\n// When setting up the NeoPixel library, we tell it how many pixels,\n// and which pin to use to send signals. Note that for older NeoPixel\n// strips you might need to change the third parameter -- see the\n// strandtest example for more information on possible values.\nAdafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);\n\n#define DELAYVAL 500 // Time (in milliseconds) to pause between pixels\n\nvoid setup() {\n  // These lines are specifically to support the Adafruit Trinket 5V 16 MHz.\n  // Any other board, you can remove this part (but no harm leaving it):\n#if defined(__AVR_ATtiny85__) && (F_CPU == 16000000)\n  clock_prescale_set(clock_div_1);\n#endif\n  // END of Trinket-specific code.\n\n  pixels.begin(); // INITIALIZE NeoPixel strip object (REQUIRED)\n}\n\nvoid loop() {\n  pixels.clear(); // Set all pixel colors to 'off'\n\n  // The first NeoPixel in a strand is #0, second is 1, all the way up\n  // to the count of pixels minus one.\n  for(int i=0; i<NUMPIXELS; i++) { // For each pixel...\n\n    // pixels.Color() takes RGB values, from 0,0,0 up to 255,255,255\n    // Here we're using a moderately bright green color:\n    pixels.setPixelColor(i, pixels.Color(0, 10, 0));\n\n    pixels.show();   // Send the updated pixel colors to the hardware.\n\n    delay(DELAYVAL); // Pause before next pass through loop\n  }\n}\n")),(0,a.yg)("p",null,"\u4e0a\u4f20\u7a0b\u5e8f\uff0c\u5982\u679c\u4e00\u5207\u987a\u5229\uff0c\u60a8\u5c06\u53ef\u4ee5\u770b\u5230\u706f\u73e0\u9010\u4e2a\u70b9\u4eae\u3002"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiao-rgb-matrix/5.jpg",style:{width:600,height:"auto"}})),(0,a.yg)("p",null,":::\u6ce8\u610f\n\u8fd9\u4e2a\u7a0b\u5e8f\u7279\u610f\u964d\u4f4e\u4e86\u706f\u73e0\u7684\u4eae\u5ea6\uff0c\u5982\u679c\u4eae\u5ea6\u62c9\u5230\u6700\u5927\uff0c\u957f\u65f6\u95f4\u76f4\u63a5\u76ef\u7740\u706f\u73e0\u53ef\u80fd\u4f1a\u5bf9\u60a8\u7684\u773c\u775b\u9020\u6210\u4f24\u5bb3\u3002\n:::"),(0,a.yg)("h2",{id:"\u591a\u4e2a\u706f\u677f\u7684\u62fc\u63a5"},"\u591a\u4e2a\u706f\u677f\u7684\u62fc\u63a5"),(0,a.yg)("p",null,"RGB MATRIX for XIAO\u652f\u6301\u591a\u4e2a\u62fc\u63a5\u6269\u5c55\uff0c\u5e76\u63d0\u4f9b\u53ef\u9760\u7684\u7535\u6e90\u4f9b\u5e94\u3002\u60a8\u53ef\u4ee5\u6309\u7167\u4e0b\u56fe\u7684\u6307\u793a\u987a\u5e8f\u62fc\u63a5\u591a\u4e2a\u706f\u677f\u3002"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiao-rgb-matrix/6.jpg",style:{width:800,height:"auto"}})),(0,a.yg)("p",null,":::\u6ce8\u610f\n\u5f53\u591a\u4e2a\u706f\u677f\u62fc\u63a5\u5728\u4e00\u8d77\u65f6\uff0c\u5b83\u4eec\u53ef\u80fd\u4f1a\u53d8\u5f97\u53d1\u70ed\u4e14\u4f9b\u7535\u4e0d\u8db3\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u706f\u677f\u53ef\u80fd\u4f1a\u663e\u793a\u5f02\u5e38\u3002\u8bf7\u4e3a\u6bcf\u4e2a\u706f\u677f\u63d0\u4f9b\u7a33\u5b9a\u76845V\u8f93\u5165\uff0c\u4ee5\u786e\u4fdd\u5176\u6b63\u5e38\u5de5\u4f5c\u3002\n:::"),(0,a.yg)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"[ZIP]")," ",(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/xiao-rgb-matrix/EAGLE_XIAO_MATRIX.zip"},"PCB&SCH Eagle \u6587\u4ef6")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/xiao-rgb-matrix/WS2812B-1010-DATASHEET.pdf%22"}," WS2812B\u6570\u636e\u624b\u518c"))),(0,a.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"),(0,a.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1!\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u4f7f\u7528\u6211\u4eec\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u7545\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u8fce\u5408\u4e0d\u540c\u7684\u559c\u597d\u548c\u9700\u6c42\u3002"),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}s.isMDXComponent=!0}}]);