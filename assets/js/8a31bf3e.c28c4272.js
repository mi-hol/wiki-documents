"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62930],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=g(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,y=m["".concat(o,".").concat(u)]||m[u]||d[u]||l;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[m]="string"==typeof e?e:a,i[1]=g;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>g,toc:()=>p});var r=n(9668),a=(n(96540),n(15680));const l={title:"Grove - 16\u901a\u9053PWM\u9a71\u52a8\u5668 (PCA9685)",description:"Grove - 16\u901a\u9053PWM\u9a71\u52a8\u5668 (PCA9685)",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",slug:"/cn/Grove-16-Channel_PWM_Driver-PCA9685",last_update:{date:"03/19/2024",author:"WuFeifei"}},i=void 0,g={unversionedId:"zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-16-Channel_PWM_Driver-PCA9685",id:"zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-16-Channel_PWM_Driver-PCA9685",title:"Grove - 16\u901a\u9053PWM\u9a71\u52a8\u5668 (PCA9685)",description:"Grove - 16\u901a\u9053PWM\u9a71\u52a8\u5668 (PCA9685)",source:"@site/docs/zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-16-Channel_PWM_Driver-PCA9685.md",sourceDirName:"zh-CN/Sensor/Grove/Grove_Accessories/Actuator",slug:"/cn/Grove-16-Channel_PWM_Driver-PCA9685",permalink:"/cn/Grove-16-Channel_PWM_Driver-PCA9685",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-16-Channel_PWM_Driver-PCA9685.md",tags:[],version:"current",lastUpdatedBy:"WuFeifei",lastUpdatedAt:1710806400,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Grove - 16\u901a\u9053PWM\u9a71\u52a8\u5668 (PCA9685)",description:"Grove - 16\u901a\u9053PWM\u9a71\u52a8\u5668 (PCA9685)",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-16-Channel_PWM_Driver-PCA9685/",slug:"/cn/Grove-16-Channel_PWM_Driver-PCA9685",last_update:{date:"03/19/2024",author:"WuFeifei"}},sidebar:"CNSidebar",previous:{title:"Grove - \u6c34\u96fe\u5316\u5668",permalink:"/cn/Grove-Water_Atomization"},next:{title:"Grove - I2C\u7535\u673a\u9a71\u52a8\u5668\uff08TB6612FNG\uff09",permalink:"/cn/Grove-I2C_Motor_Driver-TB6612FNG"}},o={},p=[{value:"\u7248\u672c",id:"\u7248\u672c",level:2},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"\u89c4\u683c",id:"\u89c4\u683c",level:2},{value:"\u5178\u578b\u5e94\u7528",id:"\u5178\u578b\u5e94\u7528",level:2},{value:"\u786c\u4ef6\u6982\u8ff0",id:"\u786c\u4ef6\u6982\u8ff0",level:2},{value:"\u5f15\u811a\u6620\u5c04",id:"\u5f15\u811a\u6620\u5c04",level:3},{value:"\u786c\u4ef6\u7ec6\u8282",id:"\u786c\u4ef6\u7ec6\u8282",level:3},{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u652f\u6301\u7684\u5e73\u53f0",id:"\u652f\u6301\u7684\u5e73\u53f0",level:2},{value:"\u5165\u95e8\u6307\u5357",id:"\u5165\u95e8\u6307\u5357",level:2},{value:"\u73a9\u8f6c Arduino",id:"\u73a9\u8f6c-arduino",level:3},{value:"\u786c\u4ef6",id:"\u786c\u4ef6",level:4},{value:"\u8f6f\u4ef6",id:"\u8f6f\u4ef6",level:4},{value:"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668",id:"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668",level:2},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2},{value:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",level:2}],s={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/main.jpg",alt:null})),(0,a.yg)("p",null,"Grove - 16\u901a\u9053PWM\u9a71\u52a8\u5668\u57fa\u4e8eNXP PCA9685\uff0c\u8fd9\u662f\u4e00\u6b3e16\u901a\u9053\u300112\u4f4dI2C PWM\u9a71\u52a8\u5668\u3002\u8be5\u677f\u53ef\u4ee5\u901a\u8fc7\u5916\u90e8\u7535\u6e90\u9a71\u52a8\u6700\u591a16\u4e2a\u4f3a\u670d\u5668\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7I2C Grove\u63a5\u53e3\u8f7b\u677e\u5730\u4f7f\u7528Arduino\u6765\u63a7\u5236\u6b64\u677f\u3002\u6b64\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u5c06\u6b64\u677f\u7528\u4f5cLED\u63a7\u5236\u5668\u3002"),(0,a.yg)("p",{style:{}},(0,a.yg)("a",{href:"https://www.seeedstudio.com/Grove-16-Channel-PWM-Driver-(PCA9685)-p-3221.html",target:"_blank"},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,a.yg)("h2",{id:"\u7248\u672c"},"\u7248\u672c"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u4ea7\u54c1\u7248\u672c"),(0,a.yg)("th",{parentName:"tr",align:null},"\u53d8\u66f4\u5185\u5bb9"),(0,a.yg)("th",{parentName:"tr",align:null},"\u53d1\u5e03\u65e5\u671f"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Grove - 16\u901a\u9053PWM\u9a71\u52a8\u5668 (PCA9685)"),(0,a.yg)("td",{parentName:"tr",align:null},"\u521d\u59cb\u7248"),(0,a.yg)("td",{parentName:"tr",align:null},"2018\u5e749\u6708")))),(0,a.yg)("h2",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u517c\u5bb91 MHz\u5feb\u901f\u6a21\u5f0f+\u7684I2C\u603b\u7ebf"),(0,a.yg)("li",{parentName:"ul"},"6\u4e2a\u786c\u4ef6\u5730\u5740\u5f15\u811a\u5141\u8bb8\u5c0662\u4e2aPCA9685\u8bbe\u5907\u8fde\u63a5\u5230\u540c\u4e00\u4e2aI2C\u603b\u7ebf"),(0,a.yg)("li",{parentName:"ul"},"\u4f4e\u5f85\u673a\u7535\u6d41"),(0,a.yg)("li",{parentName:"ul"},"SDA/SCL\u8f93\u5165\u7aef\u5e26\u6709\u566a\u58f0\u6ee4\u6ce2\u5668")),(0,a.yg)("h2",{id:"\u89c4\u683c"},"\u89c4\u683c"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u9879\u76ee"),(0,a.yg)("th",{parentName:"tr",align:null},"\u503c"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"MCU\u5de5\u4f5c\u7535\u538b"),(0,a.yg)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"PWM\u4f9b\u7535\u7535\u538b"),(0,a.yg)("td",{parentName:"tr",align:null},"2.3V ~ 5.5V")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u5bb9\u5fcd\u8f93\u5165\u7535\u538b"),(0,a.yg)("td",{parentName:"tr",align:null},"5.5V")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"pin LEDn\u4e0a\u7684\u8f93\u51fa\u7535\u6d41"),(0,a.yg)("td",{parentName:"tr",align:null},"25mA")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u63a5\u5730\u4f9b\u7535\u7535\u6d41"),(0,a.yg)("td",{parentName:"tr",align:null},"400mA")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u5de5\u4f5c\u6e29\u5ea6"),(0,a.yg)("td",{parentName:"tr",align:null},"-40\uff5e85\u2103")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u63a5\u53e3"),(0,a.yg)("td",{parentName:"tr",align:null},"I2C")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"I2C\u5730\u5740\u8303\u56f4"),(0,a.yg)("td",{parentName:"tr",align:null},"0x40 ~ 0x7f(\u9ed8\u8ba4)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u5c3a\u5bf8"),(0,a.yg)("td",{parentName:"tr",align:null},"L: 60mm W: 40mm H: 18mm")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u91cd\u91cf"),(0,a.yg)("td",{parentName:"tr",align:null},"14.3g")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u5305\u88c5\u5c3a\u5bf8"),(0,a.yg)("td",{parentName:"tr",align:null},"L: 135mm W: 85mm H: 19mm")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u603b\u91cd\u91cf"),(0,a.yg)("td",{parentName:"tr",align:null},"21g")))),(0,a.yg)("h2",{id:"\u5178\u578b\u5e94\u7528"},"\u5178\u578b\u5e94\u7528"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4f3a\u670d\u9a71\u52a8\u5668"),(0,a.yg)("li",{parentName:"ul"},"RGB\u6216RGBA LED\u9a71\u52a8\u5668")),(0,a.yg)("h2",{id:"\u786c\u4ef6\u6982\u8ff0"},"\u786c\u4ef6\u6982\u8ff0"),(0,a.yg)("h3",{id:"\u5f15\u811a\u6620\u5c04"},"\u5f15\u811a\u6620\u5c04"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/pin-out/pin_out.jpg",alt:null})),(0,a.yg)("p",null,":::\u6ce8\u610f\n\u4e0d\u652f\u6301\u70ed\u63d2\u62d4\uff0c\u5728\u8fdb\u884c\u4efb\u4f55\u66f4\u6362\u6216\u66f4\u6539\u4e4b\u524d\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u5148\u5c06Arduino\u4ece\u7535\u6e90\u65ad\u5f00\u3002\n:::"),(0,a.yg)("h3",{id:"\u786c\u4ef6\u7ec6\u8282"},"\u786c\u4ef6\u7ec6\u8282"),(0,a.yg)("hr",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"I2C\u63a5\u53e3")),(0,a.yg)("p",null,"\u8be5\u677f\u4f7f\u7528I2C\u63a5\u53e3\u6765\u5141\u8bb8\u677f\u8f7dMCU\u4e0e\u4e3b\u673a\u7535\u8111\u901a\u4fe1\u3002"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"GND: \u5c06\u6b64\u6a21\u5757\u8fde\u63a5\u5230\u7cfb\u7edfGND",(0,a.yg)("br",{parentName:"p"}),"\n","VCC: \u6b64\u6a21\u5757\u53ef\u4ee5\u4f7f\u75285V\u62163.3V",(0,a.yg)("br",{parentName:"p"}),"\n","SDA: I2C\u4e32\u884c\u6570\u636e",(0,a.yg)("br",{parentName:"p"}),"\n","SCL: I2C\u4e32\u884c\u65f6\u949f")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/pin-out/pin-out-1.jpg",alt:null})),(0,a.yg)("hr",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u7535\u6e90\u8f93\u5165")),(0,a.yg)("p",null,"\u4e3a\u4f3a\u670d\u5668\u63d0\u4f9b5V\u76f4\u6d41\u7535\u6e90\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/pin-out/pin-out-2.jpg",alt:null})),(0,a.yg)("hr",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"PWM\u8f93\u51fa")),(0,a.yg)("p",null,"\u8be5\u677f\u4e0a\u670916\u7ec4\u5f15\u811a\uff081-16\uff09\uff0c\u6bcf\u7ec4\u5f15\u811a\u5305\u542b\u4e00\u4e2aPWM\u4fe1\u53f7\u5f15\u811a\u3001\u4e00\u4e2a5V\u7535\u6e90\u5f15\u811a\u548c\u4e00\u4e2a\u63a5\u5730\u5f15\u811a\u3002\n",(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/pin-out/pin-out-0.jpg",alt:null})),(0,a.yg)("hr",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"I2C\u5730\u5740")),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"\u60a8\u53ef\u4ee5\u70b9\u51fb\u4ee5\u4e0b\u56fe\u7247\u67e5\u770b\u539f\u59cb\u6587\u4ef6")),(0,a.yg)("p",null,"\u8be5\u677f\u80cc\u9762\u76846\u4e2a\u53ef\u9009\u710a\u76d8\uff0c\u90fd\u62e5\u670964\u4e2a\u53ef\u9009\u7684I2C\u5730\u5740\u3002"),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/i2c_ad.jpg",alt:"pir",width:600,height:"auto"})),(0,a.yg)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u6240\u6709\u5730\u5740\u710a\u76d8\u9ed8\u8ba4\u8fde\u63a5\u5230\u9ad8\u7535\u5e73\u3002\u5730\u5740\u89c4\u5219\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/i2c_ad_1.jpg",alt:null})),(0,a.yg)("p",null,"\u5730\u5740\u75317\u4f4d\u7ec4\u6210\uff0c\u6700\u9ad8\u4f4d\u56fa\u5b9a\u4e3a1\u3002\u5f53\u6211\u4eec\u5c06\u5730\u5740\u8f6c\u6362\u4e3a\u5341\u516d\u8fdb\u5236\u6570\u65f6\uff0c\u9700\u8981\u5728\u6700\u9ad8\u4f4d\u7684\u5de6\u4fa7\u6dfb\u52a0\u4e00\u4e2a0\u3002"),(0,a.yg)("p",null,"\u56e0\u6b64\uff0c\u9ed8\u8ba4\u5730\u5740\u662f",(0,a.yg)("strong",{parentName:"p"},"111 1111"),"\uff0c\u5f53\u6211\u4eec\u6dfb\u52a0\u4e00\u4e2a0\u65f6\uff0c\u5b83\u53d8\u4e3a",(0,a.yg)("strong",{parentName:"p"},"0111 1111"),"\uff0c\u53730x7f\u3002\n\u5982\u679c\u6211\u4eec\u5c06\u6240\u6709\u5730\u5740\u710a\u76d8\u8fde\u63a5\u5230\u5730\u7ebf\uff0c\u5b83\u53d8\u4e3a",(0,a.yg)("strong",{parentName:"p"},"100 0000"),"\uff0c\u5f53\u6211\u4eec\u6dfb\u52a0\u4e00\u4e2a0\u65f6\uff0c\u5b83\u53d8\u4e3a",(0,a.yg)("strong",{parentName:"p"},"0100 0000"),"\uff0c\u53730x40\u3002"),(0,a.yg)("h2",{id:"\u5de5\u4f5c\u539f\u7406"},"\u5de5\u4f5c\u539f\u7406"),(0,a.yg)("h2",{id:"\u652f\u6301\u7684\u5e73\u53f0"},"\u652f\u6301\u7684\u5e73\u53f0"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,a.yg)("th",{parentName:"tr",align:null},"\u6811\u8393\u6d3e"),(0,a.yg)("th",{parentName:"tr",align:null}),(0,a.yg)("th",{parentName:"tr",align:null}),(0,a.yg)("th",{parentName:"tr",align:null}))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,a.yg)("h2",{id:"\u5165\u95e8\u6307\u5357"},"\u5165\u95e8\u6307\u5357"),(0,a.yg)("h3",{id:"\u73a9\u8f6c-arduino"},"\u73a9\u8f6c Arduino"),(0,a.yg)("h4",{id:"\u786c\u4ef6"},"\u786c\u4ef6"),(0,a.yg)("p",null,"\u6240\u9700\u6750\u6599"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,a.yg)("th",{parentName:"tr",align:null},"\u57fa\u7840\u5e95\u677f"),(0,a.yg)("th",{parentName:"tr",align:null},"Grove - 16\u901a\u9053PWM\u9a71\u52a8\u5668"),(0,a.yg)("th",{parentName:"tr",align:null},"LED"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"enter image description here"})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"enter image description here"})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/thumbnail.jpg",alt:"enter image description here"})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/red_led.jpg",alt:"enter image description here"}))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"\u7acb\u5373\u83b7\u53d6")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"\u7acb\u5373\u83b7\u53d6")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-16-Channel-PWM-Driver-PCA968-p-3221.html"},"\u7acb\u5373\u83b7\u53d6")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/3mm-LED-Red-25-PCs-p-1588.html"},"\u7acb\u5373\u83b7\u53d6"))))),(0,a.yg)("p",null,":::\u6ce8\u610f\n",(0,a.yg)("strong",{parentName:"p"},"1")," \u8bf7\u8f7b\u8f7b\u63d2\u5165USB\u7ebf\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u635f\u574f\u7aef\u53e3\u3002\u8bf7\u4f7f\u7528\u5185\u90e8\u67094\u6839\u7ebf\u7684USB\u7ebf\uff0c2\u6839\u7ebf\u7684\u7535\u7f06\u65e0\u6cd5\u4f20\u8f93\u6570\u636e\u3002\u5982\u679c\u60a8\u4e0d\u786e\u5b9a\u81ea\u5df1\u62e5\u6709\u7684\u7ebf\u7f06\u7c7b\u578b\uff0c\u53ef\u4ee5\u70b9\u51fb",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"\u8fd9\u91cc"),"\u8fdb\u884c\u8d2d\u4e70\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"**2** \u6bcf\u4e2aGrove\u6a21\u5757\u5728\u8d2d\u4e70\u65f6\u90fd\u4f1a\u9644\u5e26\u4e00\u6839Grove\u7535\u7f06\u3002\u5982\u679c\u60a8\u9057\u5931\u4e86Grove\u7535\u7f06\uff0c\u53ef\u4ee5\u70b9\u51fb[\u8fd9\u91cc](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) \u8fdb\u884c\u8d2d\u4e70\u3002\n\n**3** \u60a8\u8fd8\u9700\u8981\u51c6\u5907\u81f3\u5c11\u4e24\u6839\u8df3\u7ebf\uff0c\u5982\u679c\u60a8\u6ca1\u6709\uff0c\u53ef\u4ee5\u70b9\u51fb[\u8fd9\u91cc](https://www.seeedstudio.com/20-pin-dual-female-splittable-jumper-wire-300mm-p-629.html)\u8fdb\u884c\u8d2d\u4e70\u3002\n")),(0,a.yg)("p",null,":::"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1.")," \u4f7f\u7528\u53cc\u6bcd\u5934\u8df3\u7ebf\u5c06\u7ea2\u8272LED\u8fde\u63a5\u5230GND\u548cP1\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2.")," \u5c06Grove - 16\u901a\u9053PWM\u9a71\u52a8\u5668\u8fde\u63a5\u5230Grove\u57fa\u7840\u5e95\u677f\u7684",(0,a.yg)("strong",{parentName:"p"},"I^2^C"),"\u7aef\u53e3\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2.")," \u5c06Grove\u57fa\u7840\u5e95\u677f\u63d2\u5165Seeeduino\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 3.")," \u901a\u8fc7USB\u7535\u7f06\u5c06Seeeduino\u8fde\u63a5\u5230PC\u3002"))),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/connect1.jpg",alt:null})),(0,a.yg)("p",null,":::\u6ce8\u610f\n\u5728\u8fd9\u4e2aLED\u7684\u793a\u4f8b\u4e2d\uff0c\u56e0\u4e3a\u6211\u4eec\u6ca1\u6709\u5728\u8f93\u51fa\u7ec4\u4e2d\u4f7f\u7528\u201c5V\u201d\u5f15\u811a\uff0c\u6240\u4ee5\u6211\u4eec\u4e0d\u9700\u8981\u4e3a\u7535\u6e90\u8f93\u5165\u7aef\u53e3\u4f9b\u7535\u3002\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u4f3a\u670d\u5668\uff0c\u4f60\u9700\u8981\u5c065V\u5f15\u811a\u8fde\u63a5\u5230\u4f3a\u670d\u5668\u7684\u7535\u6e90\u5f15\u811a\uff0c\u5e76\u4e14\u4f60\u9700\u8981\u4e3a",(0,a.yg)("strong",{parentName:"p"},"Power In"),"\u7aef\u53e3\u63d0\u4f9b\u5916\u90e8\u7535\u6e90\u3002\n:::\n\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u4f3a\u670d\u5668\uff0c\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u65b9\u5f0f\u8fde\u63a5\uff1a"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/connect2.jpg",alt:null})),(0,a.yg)("h4",{id:"\u8f6f\u4ef6"},"\u8f6f\u4ef6"),(0,a.yg)("p",null,":::\u6ce8\u610f\n\u5982\u679c\u60a8\u662f\u7b2c\u4e00\u6b21\u4f7f\u7528Arduino\uff0c\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u5728\u5f00\u59cb\u4e4b\u524d\u5148\u67e5\u770b",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Arduino\u5165\u95e8\u6307\u5357"),"\u3002\n:::"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 1.")," \u4eceGithub\u4e0b\u8f7d",(0,a.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_PCA9685/archive/master.zip"},"Grove-16-Channel_PWM_Driver-PCA9685"),"\u5e93\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 2.")," \u53c2\u8003",(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"\u5982\u4f55\u5b89\u88c5\u5e93"),"\u4e3aArduino\u5b89\u88c5\u5e93\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 3.")," \u91cd\u542fArduino IDE\u3002\u6253\u5f00\u793a\u4f8b\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4e09\u79cd\u65b9\u5f0f\u6253\u5f00\u5b83\uff1a",(0,a.yg)("ol",{parentName:"li"},(0,a.yg)("li",{parentName:"ol"},"\u901a\u8fc7\u8def\u5f84\u5728Arduino IDE\u4e2d\u76f4\u63a5\u6253\u5f00\u5b83\uff1a",(0,a.yg)("strong",{parentName:"li"},"\u6587\u4ef6 --\x3e \u793a\u4f8b --\x3e Seeed_PCA9685 --\x3e led"),"\u3002\n",(0,a.yg)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/ard1.jpg",alt:null})),(0,a.yg)("li",{parentName:"ol"},"\u901a\u8fc7\u70b9\u51fb",(0,a.yg)("strong",{parentName:"li"},"basic_demo.ino"),"\u6587\u4ef6\u5728\u7535\u8111\u4e2d\u6253\u5f00\u5b83\uff0c\u8be5\u6587\u4ef6\u4f4d\u4e8e",(0,a.yg)("strong",{parentName:"li"},"XXXX\\Arduino\\libraries\\Seeed_PCA9685\\examples\\led\\led.ino"),"\u6587\u4ef6\u5939\u4e2d\uff0c\u5176\u4e2d",(0,a.yg)("strong",{parentName:"li"},"XXXX"),"\u662f\u60a8\u5b89\u88c5Arduino IDE\u7684\u4f4d\u7f6e\u3002\n",(0,a.yg)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/ard2.jpg",alt:null})),(0,a.yg)("li",{parentName:"ol"},"\u6216\u8005\uff0c\u60a8\u4e5f\u53ef\u4ee5\u76f4\u63a5\u70b9\u51fb\u4ee3\u7801\u5757\u53f3\u4e0a\u89d2\u7684 ",(0,a.yg)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg",alt:null})," \u56fe\u6807\uff0c\u5c06\u4ee5\u4e0b\u4ee3\u7801\u590d\u5236\u5230Arduino IDE\u4e2d\u7684\u65b0\u8349\u56fe\u4e2d\u3002")))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'\n#include "PCA9685.h"\n#include <Wire.h>\n\nPCA9685 led;\n\n\nvoid setup()\n{\n    // join I2C bus (I2Cdev library doesn\'t do this automatically)\n    Wire.begin();\n    Serial.begin(9600);\n    led.init(0x7f);\n    // Set freq to 100Hz, range from 24Hz~1526hz\n    led.setFrequency(100);\n\n    for (int i=1;i<17;i++){\n        led.setPwm(i, 0, 1024);\n    }\n}\n\nvoid loop()\n{\n}\n\n')),(0,a.yg)("p",null,":::\u6ce8\u610f\n\u5e93\u6587\u4ef6\u53ef\u80fd\u4f1a\u66f4\u65b0\u3002\u6b64\u4ee3\u7801\u53ef\u80fd\u4e0d\u9002\u7528\u4e8e\u66f4\u65b0\u7684\u5e93\u6587\u4ef6\uff0c\u56e0\u6b64\u6211\u4eec\u5efa\u8bae\u60a8\u4f7f\u7528\u524d\u4e24\u79cd\u65b9\u6cd5\u3002\n:::"),(0,a.yg)("p",null,"::\u63d0\u793a\n\u5982\u679c\u4e00\u5207\u987a\u5229\uff0c\u60a8\u5c06\u80fd\u591f\u770b\u5230LED\u4eae\u8d77\u3002\n:::"),(0,a.yg)("h2",{id:"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668"},"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668"),(0,a.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/res/Grove%20-%2016-Channel%20PWM%20Driver%20(PCA9685).zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.yg)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"[Zip]")," ",(0,a.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/res/Grove%20-%2016-Channel%20PWM%20Driver%20(PCA9685).zip"},"Grove - 16\u901a\u9053PWM \u9a71\u52a8\u5668(PCA9685) Eagle\u6587\u4ef6"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"[Zip]")," ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_PCA9685/archive/master.zip"},"Seeed_PCA9685 \u8f6f\u4ef6\u5e93"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"[PDF]")," ",(0,a.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/res/PCA9685.pdf"},"PCA9685 \u6570\u636e\u624b\u518c")))),(0,a.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"),(0,a.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u5404\u79cd\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u5728\u4f7f\u7528\u6211\u4eec\u4ea7\u54c1\u65f6\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u7545\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);