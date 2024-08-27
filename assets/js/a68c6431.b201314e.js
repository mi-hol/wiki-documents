"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[22111],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),g=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=g(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=g(r),d=n,y=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return r?a.createElement(y,i(i({ref:t},u),{},{components:r})):a.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var g=2;g<l;g++)i[g]=r[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19276:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var a=r(9668),n=(r(96540),r(15680));const l={description:"Grove - RS232\u63a5\u53e3",title:"Grove - RS232\u63a5\u53e3",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Grove-RS232",last_update:{date:"03/23/2024",author:"WuFeifei"}},i=void 0,o={unversionedId:"zh-CN/Sensor/Grove/Grove_Accessories/Input_Output/cn-Grove-RS232",id:"zh-CN/Sensor/Grove/Grove_Accessories/Input_Output/cn-Grove-RS232",title:"Grove - RS232\u63a5\u53e3",description:"Grove - RS232\u63a5\u53e3",source:"@site/docs/zh-CN/Sensor/Grove/Grove_Accessories/Input_Output/cn-Grove-RS232.md",sourceDirName:"zh-CN/Sensor/Grove/Grove_Accessories/Input_Output",slug:"/cn/Grove-RS232",permalink:"/cn/Grove-RS232",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Grove/Grove_Accessories/Input_Output/cn-Grove-RS232.md",tags:[],version:"current",lastUpdatedBy:"WuFeifei",lastUpdatedAt:1711152e3,formattedLastUpdatedAt:"Mar 23, 2024",frontMatter:{description:"Grove - RS232\u63a5\u53e3",title:"Grove - RS232\u63a5\u53e3",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Grove-RS232",last_update:{date:"03/23/2024",author:"WuFeifei"}}},p={},g=[{value:"\u7248\u672c",id:"\u7248\u672c",level:2},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"\u89c4\u683c",id:"\u89c4\u683c",level:2},{value:"\u5178\u578b\u5e94\u7528",id:"\u5178\u578b\u5e94\u7528",level:2},{value:"\u786c\u4ef6\u6982\u8ff0",id:"\u786c\u4ef6\u6982\u8ff0",level:2},{value:"\u5f15\u811a\u8f93\u51fa",id:"\u5f15\u811a\u8f93\u51fa",level:3},{value:"\u5165\u95e8\u6307\u5357",id:"\u5165\u95e8\u6307\u5357",level:2},{value:"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668",id:"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668",level:2},{value:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",level:2}],u={toc:g},m="wrapper";function s(e){let{components:t,...r}=e;return(0,n.yg)(m,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-RS232/img/mian.jpg",alt:null})),(0,n.yg)("p",null,"\u5927\u591a\u6570\u5fae\u63a7\u5236\u5668\uff08MCU\uff09\u4f7f\u7528TTL\u7535\u5e73\uff0c\u800c\u8ba1\u7b97\u673a\u7684\u4e32\u53e3\u901a\u5e38\u4f7f\u7528RS-232\u7535\u5e73\u3002\u5982\u679c\u6211\u4eec\u60f3\u8ba9\u8ba1\u7b97\u673a\u4e0e\u5fae\u63a7\u5236\u5668\u8fdb\u884c\u901a\u4fe1\uff0c\u6211\u4eec\u9700\u8981\u8fd9\u6b3e",(0,n.yg)("strong",{parentName:"p"},"Grove - 232"),"\u3002\u96c6\u6210\u7684Grove\u63a5\u53e3\u5c06\u4f7f\u60a8\u7684Arduino\u4e0e\u8ba1\u7b97\u673a\u4e4b\u95f4\u7684\u901a\u4fe1\u53d8\u5f97\u5f02\u5e38\u65b9\u4fbf\u3002"),(0,n.yg)("p",null,"\u8be5\u6a21\u5757\u57fa\u4e8eMax3232\uff0c\u652f\u6301\u591a\u79cd\u6ce2\u7279\u7387\u901a\u4fe1\uff0c\u7406\u8bba\u4e0a\u652f\u6301\u6700\u9ad8\u8fbe230400bps\u7684\u6ce2\u7279\u7387\u901a\u4fe1\u3002"),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("a",{href:"https://www.seeedstudio.com/Grove-RS232-P-2852.html",target:"_blank"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.yg)("h2",{id:"\u7248\u672c"},"\u7248\u672c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u4ea7\u54c1\u7248\u672c"),(0,n.yg)("th",{parentName:"tr",align:null},"\u53d8\u66f4"),(0,n.yg)("th",{parentName:"tr",align:null},"\u53d1\u5e03\u65e5\u671f"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Grove - RS232"),(0,n.yg)("td",{parentName:"tr",align:null},"\u521d\u59cb\u7248"),(0,n.yg)("td",{parentName:"tr",align:null},"2018\u5e7410\u6708")))),(0,n.yg)("h2",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u4f7f\u7528\u7b80\u4fbf"),(0,n.yg)("li",{parentName:"ul"},"\u7a33\u5b9a\uff0c\u9ad8\u901f"),(0,n.yg)("li",{parentName:"ul"},"\u9ad8\u6027\u4ef7\u6bd4"),(0,n.yg)("li",{parentName:"ul"},"\xb115-kV\u9759\u7535\u653e\u7535\uff08ESD\uff09\u4fdd\u62a4"),(0,n.yg)("li",{parentName:"ul"},"\u4f4e\u529f\u8017"),(0,n.yg)("li",{parentName:"ul"},"\u4e24\u4e2a\u9a71\u52a8\u5668\u548c\u4e24\u4e2a\u63a5\u6536\u5668")),(0,n.yg)("h2",{id:"\u89c4\u683c"},"\u89c4\u683c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u9879\u76ee"),(0,n.yg)("th",{parentName:"tr",align:null},"\u6570\u503c"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u4f9b\u7535\u7535\u538b"),(0,n.yg)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u9a71\u52a8\u5668\u8f93\u5165\u7535\u538b"),(0,n.yg)("td",{parentName:"tr",align:null},"0V ~ 5.5V")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u63a5\u6536\u5668\u8f93\u5165\u7535\u538b"),(0,n.yg)("td",{parentName:"tr",align:null},"-25V ~ +25V")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u65e0\u8d1f\u8f7d\u4f9b\u7535\u7535\u6d41"),(0,n.yg)("td",{parentName:"tr",align:null},"0.3mA")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u5de5\u4f5c\u81ea\u7531\u7a7a\u6c14\u6e29\u5ea6"),(0,n.yg)("td",{parentName:"tr",align:null},"-40\u2103 ~ 85\u2103")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u5b58\u50a8\u6e29\u5ea6\u8303\u56f4"),(0,n.yg)("td",{parentName:"tr",align:null},"-65\u2103 ~ 150\u2103")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u6700\u5927\u6570\u636e\u4f20\u8f93\u901f\u7387"),(0,n.yg)("td",{parentName:"tr",align:null},"250 Kbit/s")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u652f\u6301\u6ce2\u7279\u7387"),(0,n.yg)("td",{parentName:"tr",align:null},"300bps ~ 230400bps")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u957f\u5ea6"),(0,n.yg)("td",{parentName:"tr",align:null},"46mm")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u5bbd\u5ea6"),(0,n.yg)("td",{parentName:"tr",align:null},"42mm")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u9ad8\u5ea6"),(0,n.yg)("td",{parentName:"tr",align:null},"16.5mm")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u5c3a\u5bf8"),(0,n.yg)("td",{parentName:"tr",align:null},"L: 40mm W: 40mm H: 15mm")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u91cd\u91cf"),(0,n.yg)("td",{parentName:"tr",align:null},"13.3g")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u5305\u88c5\u5c3a\u5bf8"),(0,n.yg)("td",{parentName:"tr",align:null},"L: 140mm W: 90mm H: 15mm")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"\u6bdb\u91cd"),(0,n.yg)("td",{parentName:"tr",align:null},"20g")))),(0,n.yg)("h2",{id:"\u5178\u578b\u5e94\u7528"},"\u5178\u578b\u5e94\u7528"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u624b\u6301\u8bbe\u5907"),(0,n.yg)("li",{parentName:"ul"},"\u638c\u4e0a\u7535\u8111")),(0,n.yg)("h2",{id:"\u786c\u4ef6\u6982\u8ff0"},"\u786c\u4ef6\u6982\u8ff0"),(0,n.yg)("h3",{id:"\u5f15\u811a\u8f93\u51fa"},"\u5f15\u811a\u8f93\u51fa"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-RS232/img/pin_out/pin_out.jpg",alt:null})),(0,n.yg)("h2",{id:"\u5165\u95e8\u6307\u5357"},"\u5165\u95e8\u6307\u5357"),(0,n.yg)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u6a21\u5757\uff0c\u53ea\u9700\u5c06\u76f8\u5e94\u7684\u63a5\u53e3\u8fde\u63a5\u5230\u5bf9\u5e94\u7684\u8bbe\u5907\u4e0a\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u4e32\u53e3\u5de5\u5177\u4f20\u8f93\u6570\u636e\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5f53\u8fde\u63a5TTL\u8bbe\u5907\u65f6\uff0c\u6a21\u5757\u7684RX\u5f15\u811a\u9700\u8981\u8fde\u63a5\u5230\u8bbe\u5907\u7684TX\u5f15\u811a\uff0c\u53cd\u4e4b\u4ea6\u7136\uff0c\u6a21\u5757\u7684TX\u5f15\u811a\u9700\u8981\u8fde\u63a5\u5230\u8bbe\u5907\u7684RX\u5f15\u811a\u3002"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-RS232/img/connect.jpg",alt:null})),(0,n.yg)("h2",{id:"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668"},"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668"),(0,n.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-RS232/res/Grove-RS232.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),"## \u8d44\u6e90",(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"[Zip]")," ",(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-RS232/res/Grove-RS232.zip"},"Grove-RS232 Eagle \u6587\u4ef6"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"[PDF]")," ",(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-RS232/res/Max3232.pdf"},"MAX3232 \u6570\u636e\u624b\u518c"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"[PDF]")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/SeeedDocument/Grove-RS232/tree/master/res/Grove-RS232.pdf"},"PDF \u683c\u5f0f\u7684\u4ea7\u54c1\u8bf4\u660e")))),(0,n.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"),(0,n.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u5728\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u65f6\u83b7\u5f97\u5c3d\u53ef\u80fd\u987a\u7545\u7684\u4f53\u9a8c\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}s.isMDXComponent=!0}}]);