"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91568],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),y=i,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},27912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(9668),i=(n(96540),n(15680));const o={description:"Wi-Fi",title:"Wi-Fi",keywords:["SenseCAP Indicator ESP32 Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/SenseCAP_Indicator_ESP32_Wi-Fi",last_update:{date:"3/3/2024",author:"DuKaiyin"}},a="**Wi-Fi**",p={unversionedId:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32S3/cn-Wi-Fi",id:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32S3/cn-Wi-Fi",title:"Wi-Fi",description:"Wi-Fi",source:"@site/docs/zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32S3/cn-Wi-Fi.md",sourceDirName:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32S3",slug:"/cn/SenseCAP_Indicator_ESP32_Wi-Fi",permalink:"/cn/SenseCAP_Indicator_ESP32_Wi-Fi",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32S3/cn-Wi-Fi.md",tags:[],version:"current",lastUpdatedBy:"DuKaiyin",lastUpdatedAt:1709424e3,formattedLastUpdatedAt:"Mar 3, 2024",frontMatter:{description:"Wi-Fi",title:"Wi-Fi",keywords:["SenseCAP Indicator ESP32 Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/SenseCAP_Indicator_ESP32_Wi-Fi",last_update:{date:"3/3/2024",author:"DuKaiyin"}}},l={},s=[],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"wi-fi"},(0,i.yg)("strong",{parentName:"h1"},"Wi-Fi")),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/espressif/esp-idf/tree/master/examples/wifi"},(0,i.yg)("strong",{parentName:"a"},"\u793a\u4f8b"))),(0,i.yg)("p",null,"\u8fd9\u4e2a ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/espressif/esp-idf/tree/master/examples/wifi"},"\u76ee\u5f55")," \u5305\u542b\u4e86\u4e00\u7cfb\u5217\u6f14\u793a Wi-Fi \u529f\u80fd\u7684\u9879\u76ee\u793a\u4f8b\uff0c\u5e76\u63d0\u4f9b\u4e86\u60a8\u53ef\u4ee5\u590d\u5236\u548c\u8c03\u6574\u5230\u81ea\u5df1\u9879\u76ee\u4e2d\u7684\u4ee3\u7801\u3002"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u4f7f\u7528\u5b9e\u4f8b")),(0,i.yg)("p",null,"\u5728\u6784\u5efa\u793a\u4f8b\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u6309\u7167 ESP-IDF \u5165\u95e8\u6307\u5357\u786e\u4fdd\u60a8\u62e5\u6709\u6240\u9700\u7684\u5f00\u53d1\u73af\u5883\u3002"),(0,i.yg)("p",null,"\u6784\u5efa\u793a\u4f8b\u4e0e\u6784\u5efa\u4efb\u4f55\u5176\u4ed6\u9879\u76ee\u76f8\u540c\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 1: \u5207\u6362\u5230\u60a8\u60f3\u6784\u5efa\u7684\u65b0\u793a\u4f8b\u7684\u76ee\u5f55\u3002\n\u5728\u6253\u5f00\u9879\u76ee\u914d\u7f6e\u83dc\u5355\u4e4b\u524d\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u9009\u62e9\u8981\u6784\u5efa\u7684\u6b63\u786e\u82af\u7247\u76ee\u6807\uff1a")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"idf.py set-target esp32s3")),(0,i.yg)("p",null,"(\u5207\u6362\u5230\u60a8\u60f3\u6784\u5efa\u7684\u65b0\u793a\u4f8b\u7684\u76ee\u5f55\u3002\u5728\u6253\u5f00\u9879\u76ee\u914d\u7f6e\u83dc\u5355\u4e4b\u524d\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u9009\u62e9\u8981\u6784\u5efa\u7684\u6b63\u786e\u82af\u7247\u76ee\u6807\uff1a)"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 2: \u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6253\u5f00\u9879\u76ee\u914d\u7f6e\u83dc\u5355\uff1a")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"idf.py menuconfig")),(0,i.yg)("p",null,"\u8fd9\u91cc\u5927\u591a\u6570\u793a\u4f8b\u90fd\u6709\u4e00\u4e2a\u7279\u5b9a\u4e8e\u9879\u76ee\u7684\u201c\u793a\u4f8b\u914d\u7f6e\u201d\u90e8\u5206\uff08\u4f8b\u5982\uff0c\u8bbe\u7f6e\u8981\u4f7f\u7528\u7684WiFi SSID\u548c\u5bc6\u7801\uff09"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 3: \u6784\u9020\u5b9e\u4f8b:")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"idf.py build")),(0,i.yg)("p",null,"\u6309\u7167\u6253\u5370\u7684\u8bf4\u660e\u8fdb\u884c\u70e7\u5f55\uff0c\u6216\u8fd0\u884c\n",(0,i.yg)("inlineCode",{parentName:"p"},"idf.py -p PORT flash")),(0,i.yg)("h1",{id:"\u6280\u672f\u652f\u6301"},(0,i.yg)("strong",{parentName:"h1"},"\u6280\u672f\u652f\u6301")),(0,i.yg)("p",null,"   \u522b\u62c5\u5fc3\uff0c\u6211\u4eec\u4e3a\u60a8\u63d0\u4f9b\u4e86\u652f\u6301\uff01\u8bf7\u8bbf\u95ee\u6211\u4eec\u7684",(0,i.yg)("a",{parentName:"p",href:"https://discord.com/invite/QqMgVwHT3X"},"Seeed\u5b98\u65b9Discord\u9891\u9053"),"\u63d0\u51fa\u60a8\u7684\u95ee\u9898\uff01"),(0,i.yg)("p",null,"\u5982\u679c\u60a8\u6709\u5927\u91cf\u8ba2\u5355\u6216\u5b9a\u5236\u9700\u6c42\uff0c\u8bf7\u8054\u7cfb ",(0,i.yg)("a",{parentName:"p",href:"mailto:iot@seeed.cc"},"iot@seeed.cc")))}d.isMDXComponent=!0}}]);