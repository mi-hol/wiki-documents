"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[19929],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),o=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(g.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,g=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=o(a),u=r,y=d["".concat(g,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(y,l(l({ref:t},s),{},{components:a})):n.createElement(y,l({ref:t},s))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var p={};for(var g in t)hasOwnProperty.call(t,g)&&(p[g]=t[g]);p.originalType=e,p[d]="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},37481:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var n=a(9668),r=(a(96540),a(15680));const i={description:"Grove - 4\u901a\u905316\u4f4d\u6a21\u6570\u8f6c\u6362\u5668\uff08ADS1115\uff09",title:"Grove - 4\u901a\u905316\u4f4d\u6a21\u6570\u8f6c\u6362\u5668\uff08ADS1115\uff09",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Grove-16-bit-ADC-ADS1115",last_update:{date:"03/23/2024",author:"WuFeifei"}},l=void 0,p={unversionedId:"zh-CN/Sensor/Grove/Grove_Accessories/Input_Output/cn-Grove-16-bit-ADC-ADS1115",id:"zh-CN/Sensor/Grove/Grove_Accessories/Input_Output/cn-Grove-16-bit-ADC-ADS1115",title:"Grove - 4\u901a\u905316\u4f4d\u6a21\u6570\u8f6c\u6362\u5668\uff08ADS1115\uff09",description:"Grove - 4\u901a\u905316\u4f4d\u6a21\u6570\u8f6c\u6362\u5668\uff08ADS1115\uff09",source:"@site/docs/zh-CN/Sensor/Grove/Grove_Accessories/Input_Output/cn-Grove-16-bit-ADC-ADS1115.md",sourceDirName:"zh-CN/Sensor/Grove/Grove_Accessories/Input_Output",slug:"/cn/Grove-16-bit-ADC-ADS1115",permalink:"/cn/Grove-16-bit-ADC-ADS1115",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Grove/Grove_Accessories/Input_Output/cn-Grove-16-bit-ADC-ADS1115.md",tags:[],version:"current",lastUpdatedBy:"WuFeifei",lastUpdatedAt:1711152e3,formattedLastUpdatedAt:"Mar 23, 2024",frontMatter:{description:"Grove - 4\u901a\u905316\u4f4d\u6a21\u6570\u8f6c\u6362\u5668\uff08ADS1115\uff09",title:"Grove - 4\u901a\u905316\u4f4d\u6a21\u6570\u8f6c\u6362\u5668\uff08ADS1115\uff09",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Grove-16-bit-ADC-ADS1115",last_update:{date:"03/23/2024",author:"WuFeifei"}},sidebar:"CNSidebar",previous:{title:"Grove - \u4e32\u884c\u76f8\u673a",permalink:"/cn/Grove-Serial_Camera"},next:{title:"Grove - \u903b\u8f91\u975e\u95e8",permalink:"/cn/Grove-NOT"}},g={},o=[{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"\u89c4\u683c",id:"\u89c4\u683c",level:2},{value:"\u786c\u4ef6\u6982\u8ff0",id:"\u786c\u4ef6\u6982\u8ff0",level:2},{value:"\u652f\u6301\u7684\u5e73\u53f0",id:"\u652f\u6301\u7684\u5e73\u53f0",level:2},{value:"\u5165\u95e8\u6307\u5357",id:"\u5165\u95e8\u6307\u5357",level:2},{value:"\u73a9\u8f6c Arduino",id:"\u73a9\u8f6c-arduino",level:3},{value:"\u786c\u4ef6\u8fde\u63a5",id:"\u786c\u4ef6\u8fde\u63a5",level:4},{value:"\u8f6f\u4ef6",id:"\u8f6f\u4ef6",level:4},{value:"\u73a9\u8f6c Raspberry Pi",id:"\u73a9\u8f6c-raspberry-pi",level:3},{value:"\u786c\u4ef6",id:"\u786c\u4ef6",level:3},{value:"\u8f6f\u4ef6",id:"\u8f6f\u4ef6-1",level:3},{value:"\u73a9\u8f6c Wio Terminal",id:"\u73a9\u8f6c-wio-terminal",level:3},{value:"\u8f6f\u4ef6",id:"\u8f6f\u4ef6-2",level:4},{value:"\u4f7f\u7528Wio Terminal\uff08ArduPy\uff09",id:"\u4f7f\u7528wio-terminalardupy",level:3},{value:"\u786c\u4ef6",id:"\u786c\u4ef6-1",level:4},{value:"\u8f6f\u4ef6",id:"\u8f6f\u4ef6-3",level:4},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668",id:"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668",level:2},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2},{value:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",level:2}],s={toc:o},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-45.png",alt:null})),(0,r.yg)("p",null,"\u5bf9\u4e8e\u6ca1\u6709\u6a21\u6570\u8f6c\u6362\u5668\uff08ADC\uff09\u7684\u5fae\u63a7\u5236\u5668\uff0c\u6216\u8005\u5f53\u4f60\u9700\u8981\u66f4\u7cbe\u786e\u7684ADC\u65f6\uff0c\u6211\u4eec\u63d0\u4f9bGrove - 4\u901a\u905316\u4f4dADC\uff08ADS1115\uff09\u3002\u8fd9\u662f\u4e00\u6b3e\u57fa\u4e8e\u5fb7\u5dde\u4eea\u5668ADS1115\u76844\u901a\u9053ADC\uff0c\u662f\u4e00\u6b3e\u9ad8\u7cbe\u5ea6\u3001\u4f4e\u529f\u8017\u768416\u4f4dADC\u82af\u7247\u3002\u5b83\u652f\u63014\u4e2a\u5355\u7aef\u8f93\u5165\u62162\u4e2a\u5dee\u5206\u8f93\u5165\u3002\u6b64\u5916\uff0c\u5b83\u8fd8\u5177\u6709\u53ef\u7f16\u7a0b\u7684\u6570\u636e\u901f\u7387\u8303\u56f4\uff0c\u4ece8 SPS\u5230860 SPS\uff0c\u4ee5\u53ca\u7528\u4e8e\u5c0f\u4fe1\u53f7\u7684\u5185\u90e8\u53ef\u7f16\u7a0b\u589e\u76ca\uff08\u6700\u9ad8\u53ef\u8fbex16\uff09\u3002"),(0,r.yg)("p",null,"\u8be5\u6a21\u5757\u8fd8\u5305\u542b\u4e00\u4e2aGrove\u7aef\u53e3\uff0c\u8be5\u7aef\u53e3\u5185\u90e8\u8fde\u63a5\u5230\u5176\u901a\u90530\u548c\u901a\u90531\uff0c\u8fd9\u4f7f\u5f97\u5b83\u4e0eGrove\u751f\u6001\u7cfb\u7edf\u4e00\u8d77\u4f7f\u7528\u66f4\u52a0\u4fbf\u6377\u3002"),(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-ADS1115-16-bit-ADC-p-4599.html"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," \u7acb\u5373\u83b7\u53d6 \ud83d\uddb1\ufe0f"))))),(0,r.yg)("h2",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5bbd\u7535\u6e90\u7535\u538b\u8303\u56f4\uff1a2.0V ~ 5.5V\uff0c\u652f\u63013.3V\u62165V\u7cfb\u7edf"),(0,r.yg)("li",{parentName:"ul"},"16\u4f4d\u9ad8\u5206\u8fa8\u7387ADC"),(0,r.yg)("li",{parentName:"ul"},"\u53ef\u7f16\u7a0b\u6570\u636e\u901f\u7387\uff1a8 SPS\u81f3860 SPS"),(0,r.yg)("li",{parentName:"ul"},"\u5185\u90e8\u53ef\u7f16\u7a0b\u589e\u76ca\uff1ax16\uff0c\u5e26\u6709\u5185\u90e8\u4f4e\u6f02\u79fb\u7535\u538b\u57fa\u51c6\u548c\u632f\u8361\u5668"),(0,r.yg)("li",{parentName:"ul"},"\u5185\u7f6ePGA\u589e\u76ca\u53ef\u8c03\uff0c\u53ef\u7531\u8f6f\u4ef6\u63a7\u5236"),(0,r.yg)("li",{parentName:"ul"},"4\u4e2a\u5355\u7aef\u8f93\u5165\u62162\u4e2a\u5dee\u5206\u8f93\u5165")),(0,r.yg)("h2",{id:"\u89c4\u683c"},"\u89c4\u683c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.yg)("th",{parentName:"tr",align:null},"\u503c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u8f93\u5165\u7535\u538b"),(0,r.yg)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ADC\u5206\u8fa8\u7387"),(0,r.yg)("td",{parentName:"tr",align:null},"16 Bit")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u7f16\u7a0b\u6570\u636e\u901f\u7387"),(0,r.yg)("td",{parentName:"tr",align:null},"8SPS - 860 SPS")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u901a\u9053\u6570"),(0,r.yg)("td",{parentName:"tr",align:null},"4\u901a\u9053\u5355\u7aef\u8f93\u5165\u62162\u901a\u9053\u5dee\u5206\u8f93\u5165")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u63a5\u53e3"),(0,r.yg)("td",{parentName:"tr",align:null},"I2C\uff0c\u9ed8\u8ba4\u5730\u5740\uff1a0x48")))),(0,r.yg)("h2",{id:"\u786c\u4ef6\u6982\u8ff0"},"\u786c\u4ef6\u6982\u8ff0"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-HW.png"})),(0,r.yg)("h2",{id:"\u652f\u6301\u7684\u5e73\u53f0"},"\u652f\u6301\u7684\u5e73\u53f0"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6811\u8393\u6d3e"),(0,r.yg)("th",{parentName:"tr",align:null},"ArduPy"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png",alt:null}))))),(0,r.yg)("p",null,":::\u8b66\u544a\n\u4e0a\u8ff0\u63d0\u5230\u7684\u652f\u6301\u5e73\u53f0\u8868\u793a\u6a21\u5757\u7684\u8f6f\u4ef6\u6216\u7406\u8bba\u4e0a\u7684\u517c\u5bb9\u6027\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ea\u9488\u5bf9Arduino\u5e73\u53f0\u63d0\u4f9b\u8f6f\u4ef6\u5e93\u6216\u4ee3\u7801\u793a\u4f8b\u3002\u7531\u4e8e\u65e0\u6cd5\u4e3a\u6240\u6709\u53ef\u80fd\u7684MCU\u5e73\u53f0\u63d0\u4f9b\u8f6f\u4ef6\u5e93/\u793a\u4f8b\u4ee3\u7801\uff0c\u56e0\u6b64\u7528\u6237\u9700\u8981\u81ea\u884c\u7f16\u5199\u81ea\u5df1\u7684\u8f6f\u4ef6\u5e93\u3002\n:::"),(0,r.yg)("h2",{id:"\u5165\u95e8\u6307\u5357"},"\u5165\u95e8\u6307\u5357"),(0,r.yg)("h3",{id:"\u73a9\u8f6c-arduino"},"\u73a9\u8f6c Arduino"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6240\u9700\u6750\u6599")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,r.yg)("th",{parentName:"tr",align:null},"\u57fa\u7840\u6269\u5c55\u677f"),(0,r.yg)("th",{parentName:"tr",align:null},"Grove - 16Bit ADC (ADS1115)"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"enter image description here"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"enter image description here"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png",alt:"enter image description here"}))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"\u7acb\u5373\u83b7\u53d6")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"\u7acb\u5373\u83b7\u53d6")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html"},"\u7acb\u5373\u83b7\u53d6"))))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6b64\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u8003\u8651\u6211\u4eec\u65b0\u63a8\u51fa\u7684",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html"},"Seeeduino Lotus M0+"),"\uff0c\u5b83\u76f8\u5f53\u4e8eSeeeduino V4.2\u4e0e\u57fa\u7840\u6269\u5c55\u677f\u7684\u7ec4\u5408\u3002")),(0,r.yg)("h4",{id:"\u786c\u4ef6\u8fde\u63a5"},"\u786c\u4ef6\u8fde\u63a5"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1.")," \u5c06Grove - 16\u4f4dADC\uff08ADS1115\uff09\u63d2\u5165\u5230Grove - \u57fa\u7840\u6269\u5c55\u677f\u7684",(0,r.yg)("strong",{parentName:"p"},"I2C"),"\u7aef\u53e3\u4e0a\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2.")," \u5c06Grove - \u57fa\u7840\u6269\u5c55\u677f\u63d2\u5165Seeeduino\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 3.")," \u901a\u8fc7USB\u7ebf\u5c06Seeeduino\u8fde\u63a5\u5230\u7535\u8111\u4e0a\u3002"))),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-connect.png"})),(0,r.yg)("h4",{id:"\u8f6f\u4ef6"},"\u8f6f\u4ef6"),(0,r.yg)("p",null,":::\u8b66\u544a\n\u5982\u679c\u60a8\u662f\u7b2c\u4e00\u6b21\u4f7f\u7528Arduino\uff0c\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u5728\u5f00\u59cb\u4e4b\u524d\u5148\u67e5\u770b",(0,r.yg)("a",{parentName:"p",href:"http://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Arduino\u5165\u95e8\u6307\u5357"),"\u3002\n:::"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 1.")," \u4eceGithub\u4e0b\u8f7d",(0,r.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_ADS1115"},"Seeed Arduino ADS1115"),"\u5e93\u3002")),(0,r.yg)("p",null,":::\u6ce8\u610f\n\u8bf7\u53c2\u7167\u5982\u4f55\u5b89\u88c5\u5e93\u7684\u8bf4\u660e\uff0c\u5c06\u5e93\u5b89\u88c5\u5230",(0,r.yg)("a",{parentName:"p",href:"http://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"Arduino"),"\u4e2d\u3002\n:::"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 2.")," \u91cd\u542fArduino IDE\u3002\u901a\u8fc7\u8def\u5f84\uff1a",(0,r.yg)("strong",{parentName:"li"},"\u6587\u4ef6")," \u2192 ",(0,r.yg)("strong",{parentName:"li"},"\u793a\u4f8b")," \u2192 ",(0,r.yg)("strong",{parentName:"li"},"Grove - ADS1115")," \u2192 ",(0,r.yg)("strong",{parentName:"li"},"single_ended")," \u6253\u5f00",(0,r.yg)("strong",{parentName:"li"},"Seeed_Arduino_ADS1115"),"\u793a\u4f8b\u3002")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"single_ended"),"\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Cpp"},'#include "ADS1115.h"\n\n#ifdef SOFTWAREWIRE\n    #include <SoftwareWire.h>\n    SoftwareWire myWire(3, 2);\n    ADS1115<SoftwareWire> ads(myWire);//IIC\n#else\n    #include <Wire.h>\n    ADS1115<TwoWire> ads(Wire);//IIC\n#endif\n\nvoid setup(void)\n{\n    Serial.begin(115200);\n    while(!ads.begin(0x48)){\n        Serial.print("ads1115 init failed!!!");\n        delay(1000);\n    }\n    //ads.begin(0x49)\n    //ads.begin(0x4A)\n    //ads.begin(0x4B)\n\n    ads.setOperateMode(ADS1115_OS_SINGLE);\n    ads.setOperateStaus(ADS1115_MODE_SINGLE);\n\n  ads.setPGAGain(ADS1115_PGA_6_144);    // 2/3x gain +/- 6.144V  1 bit =  0.1875mV (default)\n    // ads.setPGAGain(ADS1115_PGA_4_096); // 1x gain   +/- 4.096V  1 bit =  0.125mV\n    // ads.setPGAGain(ADS1115_PGA_2_048); // 2x gain   +/- 2.048V  1 bit =  0.0625mV\n    // ads.setPGAGain(ADS1115_PGA_1_024); // 4x gain   +/- 1.024V  1 bit =  0.03125mV\n    // ads.setPGAGain(ADS1115_PGA_0_512); // 8x gain   +/- 0.512V  1 bit =  0.015625mV\n    // ads.setPGAGain(ADS1115_PGA_0_256); // 16x gain  +/- 0.256V  1 bit =  0.0078125mV\n\n    ads.setSampleRate(ADS1115_DR_8); //8 SPS\n    // ads.setSampleRate(ADS1115_DR_16); //16 SPS\n    // ads.setSampleRate(ADS1115_DR_32); //32 SPS\n    // ads.setSampleRate(ADS1115_DR_64); //64 SPS\n    // ads.setSampleRate(ADS1115_DR_128); //128 SPS\n    // ads.setSampleRate(ADS1115_DR_250); //250 SPS\n    // ads.setSampleRate(ADS1115_DR_475); //475 SPS\n    // ads.setSampleRate(ADS1115_DR_860); //860 SPS\n}\nvoid loop(void)\n{\n    int16_t adc0,adc1,adc2,adc3;\n    adc0 = ads.getConversionResults(channel0); //P = AIN0, N = GND\n    adc1 = ads.getConversionResults(channel1); //P = AIN1, N = GND\n    adc2 = ads.getConversionResults(channel2); //P = AIN2, N = GND\n    adc3 = ads.getConversionResults(channel3); //P = AIN3, N = GND\n    Serial.print("AIN0: "); Serial.println(adc0);\n    Serial.print("AIN1: "); Serial.println(adc1);\n    Serial.print("AIN2: "); Serial.println(adc2);\n    Serial.print("AIN3: "); Serial.println(adc3);\n    Serial.println(" ");\n    delay(1000);\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 3.")," \u4e0a\u4f20\u793a\u4f8b\u4ee3\u7801\u3002\u5982\u679c\u60a8\u4e0d\u77e5\u9053\u5982\u4f55\u4e0a\u4f20\u4ee3\u7801\uff0c\u8bf7\u67e5\u770b",(0,r.yg)("a",{parentName:"p",href:"http://wiki.seeedstudio.com/Upload_Code/"},"\u5982\u4f55\u4e0a\u4f20\u4ee3\u7801"),"\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 4.")," \u70b9\u51fb",(0,r.yg)("strong",{parentName:"p"},"\u5de5\u5177->\u4e32\u884c\u76d1\u89c6\u5668"),"\u6253\u5f00Arduino IDE\u7684",(0,r.yg)("strong",{parentName:"p"},"\u4e32\u884c\u76d1\u89c6\u5668"),"\u3002\u6216\u8005\u540c\u65f6\u6309\u4e0b++ctrl+shift+m++\u952e\u3002\u5c06\u6ce2\u7279\u7387\u8bbe\u7f6e\u4e3a",(0,r.yg)("strong",{parentName:"p"},"115200"),"\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 5.")," \u5bf9\u4e8e4\u4e2a\u901a\u9053\uff0c\u7ed3\u679c\u5e94\u8be5\u50cf\u8fd9\u6837\uff1a"))),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/result.gif"})),(0,r.yg)("p",null,":::\u6ce8\u610f\n\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u8bbe\u7f6e\u4e862/3\u500d\u589e\u76ca\uff0c\u56e0\u6b64\u9700\u8981\u5c06\u503c\u4e58\u4ee50.1875mV\u3002\u4f8b\u5982\uff0c10201 x 0.1875mV = 1.91V\u3002\n:::"),(0,r.yg)("h3",{id:"\u73a9\u8f6c-raspberry-pi"},"\u73a9\u8f6c Raspberry Pi"),(0,r.yg)("h3",{id:"\u786c\u4ef6"},"\u786c\u4ef6"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,r.yg)("th",{parentName:"tr",align:null},"Grove Base Hat for RasPi"),(0,r.yg)("th",{parentName:"tr",align:null},"Grove - 16 Bit ADC(ADS1115)"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"enter image description here"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg",alt:"enter image description here"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png",alt:"enter image description here"}))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"\u7acb\u5373\u83b7\u53d6")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html"},"\u7acb\u5373\u83b7\u53d6")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#"},"\u7acb\u5373\u83b7\u53d6"))))),(0,r.yg)("h3",{id:"\u8f6f\u4ef6-1"},"\u8f6f\u4ef6"),(0,r.yg)("p",null,"Grove - 16\u4f4dADC\uff08ADS1115\uff09\u4e0eRaspberry Pi\u76844\u901a\u905316\u4f4dADC\uff08ADS1115\uff09\u7528\u6cd5\u76f8\u540c\uff0c\u56e0\u6b64\u8bf7\u9075\u5faa",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/#getting-started"},"\u8fd9\u91cc"),"\u7684\u6559\u7a0b\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,r.yg)("h3",{id:"\u73a9\u8f6c-wio-terminal"},"\u73a9\u8f6c Wio Terminal"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6240\u9700\u6750\u6599")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Wio Terminal"),(0,r.yg)("th",{parentName:"tr",align:null},"Grove - 16Bit ADC (ADS1115)"),(0,r.yg)("th",{parentName:"tr",align:null},"Grove - Rotary Angle Sensor"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png",alt:"enter image description here"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png",alt:"enter image description here"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rorary_s.jpg",alt:"enter image description here"}))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"\u7acb\u5373\u83b7\u53d6")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#"},"\u7acb\u5373\u83b7\u53d6")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor--p-1242.html"},"\u7acb\u5373\u83b7\u53d6"))))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1.")," \u5c06Grove - 16\u4f4dADC\uff08ADS1115\uff09\u63d2\u5165\u5230Wio Terminal\u7684",(0,r.yg)("strong",{parentName:"p"},"I2C"),"\u7aef\u53e3\u4e0a\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2.")," \u901a\u8fc7USB\u7ebf\u5c06Wio Terminal\u8fde\u63a5\u5230\u7535\u8111\u4e0a\u3002"))),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-wt.png"})),(0,r.yg)("h4",{id:"\u8f6f\u4ef6-2"},"\u8f6f\u4ef6"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 1.")," \u4eceGithub\u4e0b\u8f7d",(0,r.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_ADS1115"},"Seeed Arduino ADS1115"),"\u5e93\u3002")),(0,r.yg)("p",null,":::\u6ce8\u610f\n\u5728\u8fdb\u884c\u4ee5\u4e0b\u6b65\u9aa4\u4e4b\u524d\uff0c\u8bf7\u9075\u5faa",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/"},"Wio Terminal\u7684\u5165\u95e8\u6307\u5357"),"\u3002\n:::"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2.")," \u4e0b\u8f7d\u8fd9\u91cc\u7684",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal-ADS1115"},(0,r.yg)("strong",{parentName:"a"},"\u793a\u4f8b\u4ee3\u7801")),"\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 3.")," \u4e0a\u4f20\u793a\u4f8b\u4ee3\u7801\u3002\u5982\u679c\u60a8\u4e0d\u77e5\u9053\u5982\u4f55\u4e0a\u4f20\u4ee3\u7801\uff0c\u8bf7\u67e5\u770b",(0,r.yg)("a",{parentName:"p",href:"http://wiki.seeedstudio.com/Upload_Code/"},"\u5982\u4f55\u4e0a\u4f20\u4ee3\u7801"),"\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 4.")," \u8c03\u6574\u65cb\u8f6c\u4f20\u611f\u5668\uff0c\u60a8\u5c06\u5728Wio Terminal\u7684LCD\u5c4f\u5e55\u4e0a\u770b\u5230\u76f8\u5e94\u7684\u7535\u538b\u503c\uff1a"))),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/WT-ADS1115.gif"})),(0,r.yg)("h3",{id:"\u4f7f\u7528wio-terminalardupy"},"\u4f7f\u7528Wio Terminal\uff08ArduPy\uff09"),(0,r.yg)("h4",{id:"\u786c\u4ef6-1"},"\u786c\u4ef6"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 1.")," \u51c6\u5907\u4ee5\u4e0b\u7269\u54c1\uff1a")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Wio Terminal"),(0,r.yg)("th",{parentName:"tr",align:null},"Grove - 16 Bit ADC(ADS1115)"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png",alt:"enter image description here"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png",alt:"enter image description here"}))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"\u7acb\u5373\u83b7\u53d6")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#"},"\u7acb\u5373\u83b7\u53d6"))))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2.")," \u5c06Grove - 16\u4f4dADC\uff08ADS1115\uff09\u8fde\u63a5\u5230Wio Terminal\u7684",(0,r.yg)("strong",{parentName:"p"},"I2C"),"\u7aef\u53e3\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 3.")," \u901a\u8fc7USB Type-C\u7535\u7f06\u5c06Wio Terminal\u8fde\u63a5\u5230\u7535\u8111\u3002"))),(0,r.yg)("h4",{id:"\u8f6f\u4ef6-3"},"\u8f6f\u4ef6"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 1.")," \u6309\u7167",(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/ArduPy/"},(0,r.yg)("strong",{parentName:"a"},"ArduPy\u5165\u95e8\u6307\u5357")),"\u5728Wio Terminal\u4e0a\u914d\u7f6eArduPy\u5f00\u53d1\u73af\u5883\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 2.")," \u786e\u4fdd\u5c06\u5e26\u6709ADS1115\u5e93\u7684ArduPy\u56fa\u4ef6\u70e7\u5f55\u5230Wio Terminal\u4e2d\u3002\u66f4\u591a\u4fe1\u606f\u8bf7\u9075\u5faa",(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/ArduPy/#ardupy-aip-cli-getting-started"},(0,r.yg)("strong",{parentName:"a"},"\u8fd9\u91cc")),"\u7684\u8bf4\u660e\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"aip install Seeed-Studio/seeed-ardupy-ads1115\naip build\naip flash\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 3.")," \u590d\u5236\u4ee5\u4e0b\u4ee3\u7801\u5e76\u5c06\u5176\u4fdd\u5b58\u4e3a",(0,r.yg)("inlineCode",{parentName:"li"},"ArduPy-ads1115.py"),"\uff1a")),(0,r.yg)("p",null,"\u6ce8\u610f\uff1a\u66f4\u591aAPI\u8bf7\u67e5\u770b",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/seeed-ardupy-ads1115"},"\u8fd9\u91cc"),"\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'from arduino import grove_ads1115\nimport time\n\nads = grove_ads1115()\nads.setPGAGain(0x0000)\n\nwhile True:\n    print ("The channel0 value is :", ads.channel0)\n    print ("The channel1 value is :", ads.channel1)\n    print ("The channel2 value is :", ads.channel2)\n    print ("The channel3 value is :", ads.channel3)\n    time.sleep(1)\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 4.")," \u5c06",(0,r.yg)("inlineCode",{parentName:"li"},"ArduPy-ads1115.py"),"\u4fdd\u5b58\u5728\u60a8\u77e5\u9053\u7684\u4f4d\u7f6e\u3002\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5e76\u5c06",(0,r.yg)("inlineCode",{parentName:"li"},"<YourPythonFilePath>"),(0,r.yg)("strong",{parentName:"li"},"\u66ff\u6362"),"\u4e3a\u60a8\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"ArduPy-ads1115.py"),"\u6587\u4ef6\u4f4d\u7f6e\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'aip shell -n -c "runfile <YourPythonFilePath>"\n# Example:\n# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ads1115.py"\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 5.")," \u6211\u4eec\u5c06\u5728\u7ec8\u7aef\u770b\u5230\u5982\u4e0b\u663e\u793a\u7684ADC\u503c\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},'ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ads1115.py"\nPositional argument (/dev/cu.usbmodem1413101) takes precedence over --open.\nConnected to ardupy\nThe channel0 value is : 17487.0\nThe channel1 value is : 3790.0\nThe channel2 value is : 3170.0\nThe channel3 value is : 3122.0\nThe channel0 value is : 17486.0\nThe channel1 value is : 3272.0\nThe channel2 value is : 3064.0\nThe channel3 value is : 3063.0\nThe channel0 value is : 17486.0\nThe channel1 value is : 3482.0\nThe channel2 value is : 3201.0\nThe channel3 value is : 3185.0\nThe channel0 value is : 17487.0\nThe channel1 value is : 17261.0\nThe channel2 value is : 5055.0\nThe channel3 value is : 4480.0\nThe channel0 value is : 11839.0\nThe channel1 value is : 3540.0\nThe channel2 value is : 1690.0\nThe channel3 value is : 1562.0\n')),(0,r.yg)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.yg)("p",null,":::\u8b66\u793a\u5371\u9669\n\u5f53\u5728\u87ba\u4e1d\u63a5\u7ebf\u7aef\u5b50\u7684",(0,r.yg)("strong",{parentName:"p"},"A0"),"\u548c",(0,r.yg)("strong",{parentName:"p"},"A1"),"\u4e0a\u4f7f\u7528\u591a\u901a\u9053\u65f6\uff0c\u8bf7\u8bb0\u4f4f\u4e0d\u8981\u5728Grove\u63a5\u53e3\u4e0a\u8fde\u63a5\u4efb\u4f55\u4e1c\u897f\uff0c\u56e0\u4e3a\u5b83\u4eec\u4e5f\u4f7f\u7528A0\u548cA1\u3002\u5728\u5904\u7406\u7535\u6c60\u65f6\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5f88\u5371\u9669\u3002\n:::"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5728\u4f7f\u7528\u65f6\uff0c\u6700\u5927\u7535\u538b",(0,r.yg)("strong",{parentName:"p"},"\u4e0d\u5f97\u8d85\u8fc75.5V"),"\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5728\u4f7f\u7528\u591a\u901a\u9053\u91c7\u96c6\u65f6\uff0c\u91c7\u6837\u9891\u7387\u5fc5\u987b\u8bbe\u7f6e\u5728250SPS\u4ee5\u4e0a\uff0c\u5426\u5219\u91c7\u6837\u9891\u7387\u8fc7\u6162\uff0c\u6709\u53ef\u80fd\u51fa\u73b0\u524d\u4e00\u4e2a\u901a\u9053\u5c1a\u672a\u8f6c\u6362\u5b8c\uff0c\u4e0b\u4e00\u4e2a\u901a\u9053\u5df2\u7ecf\u5f00\u59cb\u7684\u60c5\u51b5\uff0c\u5bfc\u81f4\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u3002"))),(0,r.yg)("h2",{id:"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668"},"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668"),(0,r.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/Grove-ADS1115.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.yg)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"[ZIP]")," ",(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/Grove-ADS1115.zip"},"Grove - 16 \u4f4d ADC(ADS1115 \u539f\u7406\u56fe\u6587\u4ef6)"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"[PDF]")," ",(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115.pdf"},"\u5fb7\u5dde\u4eea\u5668ADS1115 \u6570\u636e\u624b\u518c")))),(0,r.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"),(0,r.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u5404\u79cd\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u4f7f\u7528\u6211\u4eec\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u7545\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);