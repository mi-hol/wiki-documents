"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[10437],{15680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(y,i(i({ref:t},g),{},{components:r})):n.createElement(y,i({ref:t},g))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(9668),a=(r(96540),r(15680));const o={title:"Grove - I2C\u7535\u673a\u9a71\u52a8\u5668\uff08L298P\uff09",description:"Grove - I2C\u7535\u673a\u9a71\u52a8\u5668\uff08L298P\uff09",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-I2C-Motor-Driver-L298P/",slug:"/cn/Grove-I2C-Motor-Driver-L298P",last_update:{date:"03/20/2024",author:"WuFeifei"}},i=void 0,l={unversionedId:"zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-I2C-Motor-Driver-L298P",id:"zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-I2C-Motor-Driver-L298P",title:"Grove - I2C\u7535\u673a\u9a71\u52a8\u5668\uff08L298P\uff09",description:"Grove - I2C\u7535\u673a\u9a71\u52a8\u5668\uff08L298P\uff09",source:"@site/docs/zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-I2C-Motor-Driver-L298P.md",sourceDirName:"zh-CN/Sensor/Grove/Grove_Accessories/Actuator",slug:"/cn/Grove-I2C-Motor-Driver-L298P",permalink:"/cn/Grove-I2C-Motor-Driver-L298P",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-I2C-Motor-Driver-L298P.md",tags:[],version:"current",lastUpdatedBy:"WuFeifei",lastUpdatedAt:1710892800,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{title:"Grove - I2C\u7535\u673a\u9a71\u52a8\u5668\uff08L298P\uff09",description:"Grove - I2C\u7535\u673a\u9a71\u52a8\u5668\uff08L298P\uff09",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-I2C-Motor-Driver-L298P/",slug:"/cn/Grove-I2C-Motor-Driver-L298P",last_update:{date:"03/20/2024",author:"WuFeifei"}},sidebar:"CNSidebar",previous:{title:"Grove - I2C\u7535\u673a\u9a71\u52a8\u5668V1.3",permalink:"/cn/Grove-I2C_Motor_Driver_V1.3"},next:{title:"Grove - \u7ea2\u5916\u53d1\u5c04\u5668",permalink:"/cn/Grove-Infrared_Emitter"}},p={},s=[{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"\u89c4\u683c",id:"\u89c4\u683c",level:2},{value:"\u652f\u6301\u7684\u5e73\u53f0",id:"\u652f\u6301\u7684\u5e73\u53f0",level:2},{value:"\u5165\u95e8\u6307\u5357",id:"\u5165\u95e8\u6307\u5357",level:2},{value:"\u4f7f\u7528Arduino\u5e73\u53f0",id:"\u4f7f\u7528arduino\u5e73\u53f0",level:3},{value:"\u6240\u9700\u6750\u6599",id:"\u6240\u9700\u6750\u6599",level:4},{value:"<strong>\u786c\u4ef6\u8fde\u63a5</strong>",id:"\u786c\u4ef6\u8fde\u63a5",level:4},{value:"<strong>\u8f6f\u4ef6\u4ee3\u7801 1 - \u76f4\u6d41\u7535\u673a</strong>",id:"\u8f6f\u4ef6\u4ee3\u7801-1---\u76f4\u6d41\u7535\u673a",level:4},{value:"<strong>\u8f6f\u4ef6\u4ee3\u7801 2 - \u6b65\u8fdb\u7535\u673a</strong>",id:"\u8f6f\u4ef6\u4ee3\u7801-2---\u6b65\u8fdb\u7535\u673a",level:4},{value:"<strong>\u539f\u7406\u56fe\u5728\u7ebf\u67e5\u770b\u5668</strong>",id:"\u539f\u7406\u56fe\u5728\u7ebf\u67e5\u770b\u5668",level:2},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2},{value:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",level:2}],g={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/105020093/img/105020093_wiki.png",alt:null})),(0,a.yg)("p",null,"Grove - I2C\u7535\u673a\u9a71\u52a8\u5668(L298P)\u662f\u4e00\u79cd\u5e38\u7528\u7684\u6b65\u8fdb\u7535\u673a\u548c\u4f3a\u670d\u7535\u673a\u9a71\u52a8\u5668\u3002\u5b83\u5d4c\u5165\u4e86\u4e00\u4e2aSTM32\u82af\u7247\uff0c\u7528\u4e8e\u70e7\u5f55\u63a7\u5236\u7535\u673a\u9a71\u52a8\u5668\u7684\u4ee3\u7801\u3002\u8fd9\u662f\u4e00\u4e2a\u53cc\u901a\u9053\u7535\u673a\u9a71\u52a8\u5668\uff0c\u6bcf\u4e2a\u901a\u9053\u53ef\u4ee5\u652f\u6301\u9ad8\u8fbe1A\u7684\u7535\u6d41\u3002\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528I2C\u63a5\u53e3\u4ece\u5916\u56f4\u5fae\u63a7\u5236\u5668\u4f20\u8f93\u6570\u636e\u3002\u9ed8\u8ba4\u7684I2C\u5730\u5740\u662f0x0f\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fde\u63a5I2C\u7ebf\u5e3d\u6765\u6539\u53d8\u7535\u673a\u9a71\u52a8\u5668\u7684\u5730\u5740\u3002I2C\u5730\u5740\u53ef\u4ece0x00\u9009\u62e9\u81f30X0f\u3002"),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("a",{href:"https://www.seeedstudio.com/Grove-I2C-Motor-Driver-L298P-p-4534.html",target:"_blank"},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png",width:200,height:38,border:0}))),(0,a.yg)("h2",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"MCU: STM32f030f4P6\u5fae\u63a7\u5236\u5668\uff0c\u7528\u4e8e\u70e7\u5f55\u4ee3\u7801\u5e76\u63a7\u5236\u7535\u673a\u9a71\u52a8\u5668\u3002"),(0,a.yg)("li",{parentName:"ul"},"L298P\u7535\u673a\u9a71\u52a8\u82af\u7247\uff1a\u901a\u5e38\u7528\u4f5c\u7535\u673a\u9a71\u52a8\u5668\uff0c\u53ef\u9a71\u52a8\u6b65\u8fdb\u7535\u673a\u548c\u4f3a\u670d\u7535\u673a\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u53ef\u9009\u7684I2C\u5730\u5740\uff1a\u6539\u53d8\u7ebf\u5e3d\u7684\u8fde\u63a5\uff0c\u5373\u53ef\u83b7\u53d6\u4ece0x00\u52300x0f\u7684I2C\u5730\u5740\uff0c\u9ed8\u8ba4I2C\u5730\u5740\u4e3a0x0f\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u53cc\u901a\u9053\u8f93\u51fa\uff1a\u6bcf\u4e2a\u901a\u9053\u80fd\u591f\u652f\u63011A\u7684\u7535\u6d41\uff0c\u6700\u59272A\u7535\u6d41\uff1b\u9700\u89816V-12V\u76f4\u6d41\u7535\u538b\u8f93\u5165\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u7528\u6237LED\uff1a\u6bcf\u4e2a\u901a\u9053\u7684\u7eff\u8272LED\u4eae\u8868\u793a\u987a\u65f6\u9488\u65b9\u5411\uff0c\u7ea2\u8272LED\u4eae\u8868\u793a\u9006\u65f6\u9488\u65b9\u5411\u3002")),(0,a.yg)("h2",{id:"\u89c4\u683c"},"\u89c4\u683c"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u9879\u76ee"),(0,a.yg)("th",{parentName:"tr",align:null},"\u503c"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"MCU"),(0,a.yg)("td",{parentName:"tr",align:null},"STM32f030f4P6")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u7535\u6e90\u4f9b\u5e94"),(0,a.yg)("td",{parentName:"tr",align:null},"6-12V DC")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u63a5\u53e3"),(0,a.yg)("td",{parentName:"tr",align:null},"Grove I2C")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"I2C\u5730\u5740"),(0,a.yg)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u4e3a0x0f\uff0c\u53ef\u901a\u8fc7\u8fde\u63a5\u7ebf\u5e3d\u8fdb\u884c\u66f4\u6539")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u901a\u9053\u6570"),(0,a.yg)("td",{parentName:"tr",align:null},"2")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u7535\u6d41"),(0,a.yg)("td",{parentName:"tr",align:null},"\u6700\u59272A\uff0c\u6bcf\u4e2a\u901a\u90531A")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u7535\u538b"),(0,a.yg)("td",{parentName:"tr",align:null},"5V")))),(0,a.yg)("h2",{id:"\u652f\u6301\u7684\u5e73\u53f0"},"\u652f\u6301\u7684\u5e73\u53f0"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,a.yg)("th",{parentName:"tr",align:null},"\u6811\u8393\u6d3e"),(0,a.yg)("th",{parentName:"tr",align:null}),(0,a.yg)("th",{parentName:"tr",align:null}),(0,a.yg)("th",{parentName:"tr",align:null}))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,a.yg)("h2",{id:"\u5165\u95e8\u6307\u5357"},"\u5165\u95e8\u6307\u5357"),(0,a.yg)("h3",{id:"\u4f7f\u7528arduino\u5e73\u53f0"},"\u4f7f\u7528Arduino\u5e73\u53f0"),(0,a.yg)("h4",{id:"\u6240\u9700\u6750\u6599"},"\u6240\u9700\u6750\u6599"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,a.yg)("th",{parentName:"tr",align:null},"\u57fa\u7840\u6269\u5c55\u677f"),(0,a.yg)("th",{parentName:"tr",align:null},"Grove - I2C \u7535\u673a\u9a71\u52a8\u5668 (L298P)"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/105020093/img/105020093_thumbnail.jpg",alt:"enter image description here"}))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"\u7acb\u5373\u83b7\u53d6")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"\u7acb\u5373\u83b7\u53d6")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-I2C-Motor-Driver-L298P-p-4534.html"},"\u7acb\u5373\u83b7\u53d6"))))),(0,a.yg)("h4",{id:"\u786c\u4ef6\u8fde\u63a5"},(0,a.yg)("strong",{parentName:"h4"},"\u786c\u4ef6\u8fde\u63a5")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-4.jpg",alt:null})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1")," \u5c06Grove - I2C\u7535\u673a\u9a71\u52a8\u5668\uff08L298P\uff09\u8fde\u63a5\u5230Grove\u57fa\u7840\u6269\u5c55\u677f\u7684I2C\u7aef\u53e3\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2")," \u5c06Grove\u57fa\u7840\u6269\u5c55\u677f\u63d2\u5165\u5230Seeeduino\u4e0a\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 3")," \u901a\u8fc7USB\u7535\u7f06\u5c06Seeeduino\u8fde\u63a5\u5230PC\u3002"))),(0,a.yg)("h4",{id:"\u8f6f\u4ef6\u4ee3\u7801-1---\u76f4\u6d41\u7535\u673a"},(0,a.yg)("strong",{parentName:"h4"},"\u8f6f\u4ef6\u4ee3\u7801 1 - \u76f4\u6d41\u7535\u673a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'#include "Grove_I2C_Motor_Driver.h"\n\n// default I2C address is 0x0f\n#define I2C_ADDRESS 0x0f\n\nvoid setup() {\n    Serial.begin(9600);\n    Motor.begin(I2C_ADDRESS);\n}\n\nvoid loop() {\n    // Set speed of MOTOR1, Clockwise, speed: -100~100\n    Motor.speed(MOTOR1, 50);\n    // Set speed of MOTOR2, Anticlockwise\n    Motor.speed(MOTOR2, -70);\n    delay(2000);\n    // Change speed and direction of MOTOR1\n    Motor.speed(MOTOR1, -100);\n    // Change speed and direction of MOTOR2\n    Motor.speed(MOTOR2, 100);\n    delay(2000);\n    // Stop MOTOR1 and MOTOR2\n    Motor.stop(MOTOR1);\n    Motor.stop(MOTOR2);\n    delay(2000);\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1")," \u4eceGithub\u4e0b\u8f7d ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3/archive/master.zip"},"Grove_I2C_Motor_Driver_v1_3 \u5e93"),"\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2")," \u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"\u5982\u4f55\u5b89\u88c5\u5e93")," \u6765\u4e3aArduino\u5b89\u88c5\u5e93\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 3")," \u5c06\u4ee3\u7801\u590d\u5236\u5230Arduino IDE\u5e76\u4e0a\u4f20\u3002\u5982\u679c\u4f60\u4e0d\u77e5\u9053\u5982\u4f55\u4e0a\u4f20\u4ee3\u7801\uff0c\u8bf7\u67e5\u770b ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"\u5982\u4f55\u4e0a\u4f20\u4ee3\u7801"),"\u3002"))),(0,a.yg)("p",null,"\u4f7f\u7528 speed() \u51fd\u6570\uff0c\u4f60\u53ef\u4ee5\u4ee5\u4f60\u60f3\u8981\u7684\u901f\u5ea6\u9a71\u52a8\u4e00\u4e2a\u7535\u673a\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"motor_id")," \u8868\u793a\u4f7f\u7528\u54ea\u4e2a\u7535\u673a\u3002\u4f60\u53ef\u4ee5\u586b\u5199 MOTOR1 \u6216 MOTOR2\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"_speed")," \u8868\u793a\u4f60\u4e3a\u7535\u673a\u8bbe\u5b9a\u7684\u901f\u5ea6\u3002\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u586b\u5199 -100~100\u3002\u5f53 _speed>0 \u65f6\uff0c\u76f4\u6d41\u7535\u673a\u987a\u65f6\u9488\u8fd0\u884c\uff0c\u800c\u5f53 _speed<0 \u65f6\uff0c\u76f4\u6d41\u7535\u673a\u9006\u65f6\u9488\u8fd0\u884c\u3002_speed \u7684\u7edd\u5bf9\u503c\u8d8a\u5927\uff0c\u76f4\u6d41\u7535\u673a\u7684\u901f\u5ea6\u5c31\u8d8a\u5feb\u3002"))),(0,a.yg)("p",null,"\u4f7f\u7528 stop() \u51fd\u6570\uff0c\u4f60\u53ef\u4ee5\u505c\u6b62\u6b63\u5728\u8fd0\u884c\u7684\u76f4\u6d41\u7535\u673a\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"motor_id")," \u8868\u793a\u4f7f\u7528\u54ea\u4e2a\u7535\u673a\u3002\u4f60\u53ef\u4ee5\u586b\u5199 MOTOR1 \u6216 MOTOR2\u3002")),(0,a.yg)("h4",{id:"\u8f6f\u4ef6\u4ee3\u7801-2---\u6b65\u8fdb\u7535\u673a"},(0,a.yg)("strong",{parentName:"h4"},"\u8f6f\u4ef6\u4ee3\u7801 2 - \u6b65\u8fdb\u7535\u673a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"#include <Grove_I2C_Motor_Driver.h>\n\n// default I2C address is 0x0f\n#define I2C_ADDRESS 0x0f\n\n\nvoid setup() {\n    Serial.begin(9600);\n    Motor.begin(I2C_ADDRESS);\n    // Drive a stepper motor\n    // _step: -1024~1024, when _step>0, stepper motor runs clockwise; _step<0, stepper\n    // motor runs anticlockwise; when _step is 512, the stepper motor will run a complete\n    // turn; if step is 1024, the stepper motor will run 2 turns.\n    Motor.StepperRun(-1024);\n    Motor.StepperRun(512);\n}\n\nvoid loop() {\n\n}\n")),(0,a.yg)("p",null,"\u4ee5",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/high-quality-stepper-motor-12v-p-335.html?cPath=170_171"},"24BYJ48\u6b65\u8fdb\u7535\u673a"),"\u4e3a\u4f8b\uff0c\u786c\u4ef6\u5b89\u88c5\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_control_a_Stepper_Motor.jpg",alt:null})),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/high-quality-stepper-motor-12v-p-335.html?cPath=170_171"},"24BYJ48"),"\u6b65\u8fdb\u7535\u673a\u4e0eI2C\u7535\u673a\u9a71\u52a8\u5668\u4e4b\u95f4\u7684\u8fde\u63a5\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_Connector.jpg",alt:null})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"_step")," \u4ee3\u8868\u4f60\u4e3a\u6b65\u8fdb\u7535\u673a\u8bbe\u7f6e\u7684\u8fd0\u884c\u6b65\u6570\u3002\u4f60\u53ef\u4ee5\u586b\u5199-1024\u52301024\u3002\u5f53 _step>0 \u65f6\uff0c\u6b65\u8fdb\u7535\u673a\u987a\u65f6\u9488\u8fd0\u884c\uff1b\u800c\u5f53 _step<0 \u65f6\uff0c\u6b65\u8fdb\u7535\u673a\u9006\u65f6\u9488\u8fd0\u884c\u3002\u5f53 _step \u662f512/-512\u65f6\uff0c\u6b65\u8fdb\u7535\u673a\u4f1a\u8f6c\u4e00\u6574\u5708\uff1b\u800c\u5f53 _step \u662f1024/-1024\u65f6\uff0c\u6b65\u8fdb\u7535\u673a\u4f1a\u8f6c\u4e24\u5708\u3002\u6b65\u8fdb\u7535\u673a\u4f1a\u5728\u5b8c\u6210\u6240\u6709\u6b65\u6570\u540e\u81ea\u52a8\u505c\u6b62\u3002")),(0,a.yg)("h2",{id:"\u539f\u7406\u56fe\u5728\u7ebf\u67e5\u770b\u5668"},(0,a.yg)("strong",{parentName:"h2"},"\u539f\u7406\u56fe\u5728\u7ebf\u67e5\u770b\u5668")),(0,a.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/products/105020093/doc/Grove-I2C-Motor-Driver-L298P.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.yg)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"[PDF]")," ",(0,a.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/105020093/doc/STM32F030F4;TSSOP-20_%E8%A7%84%E6%A0%BC%E4%B9%A6.pdf"},"STM32f030f4P6 \u6570\u636e\u624b\u518c"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"[PDF]")," ",(0,a.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/105020093/doc/L298P;PowerSO-20_%E7%89%A9%E6%96%99%E8%A7%84%E6%A0%BC%E4%B9%A6.pdf"},"L298P \u6570\u636e\u624b\u518c"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"[PDF]")," ",(0,a.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/105020093/doc/Grove%20-%20I2C%20Motor%20Driver%20(L298P)_v1.0_SCH_191210.pdf"},"\u786c\u4ef6\u539f\u7406\u56fe"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"[Zip]")," ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3/archive/master.zip"},"\u7535\u673a\u9a71\u52a8\u8f66")))),(0,a.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"),(0,a.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u65f6\u5c3d\u53ef\u80fd\u987a\u5229\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);