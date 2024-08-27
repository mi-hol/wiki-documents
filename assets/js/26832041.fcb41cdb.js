"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[57483],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>y});var o=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=o.createContext({}),p=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(a.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,l=g(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,y=m["".concat(a,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(y,s(s({ref:t},l),{},{components:n})):o.createElement(y,s({ref:t},l))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var g={};for(var a in t)hasOwnProperty.call(t,a)&&(g[a]=t[a]);g.originalType=e,g[m]="string"==typeof e?e:i,s[1]=g;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>g,toc:()=>p});var o=n(9668),i=(n(96540),n(15680));const r={description:"\u5f00\u59cb\u5728NVIDIA\xae Jetson\u8bbe\u5907\u4e0a\u4f7f\u7528Lumeo",title:"\u5f00\u59cb\u5728NVIDIA\xae Jetson\u8bbe\u5907\u4e0a\u4f7f\u7528Lumeo",tags:["AI model deploy"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Lumeo-Jetson-Getting-Started",last_update:{date:"03/10/2023",author:"Lakshantha"}},s="\u5f00\u59cb\u5728NVIDIA\xae Jetson\u8bbe\u5907\u4e0a\u4f7f\u7528Lumeo",g={unversionedId:"zh-CN/Edge/NVIDIA_Jetson/Application/Developer_Tools/Lumeo-Jetson-Getting-Started",id:"zh-CN/Edge/NVIDIA_Jetson/Application/Developer_Tools/Lumeo-Jetson-Getting-Started",title:"\u5f00\u59cb\u5728NVIDIA\xae Jetson\u8bbe\u5907\u4e0a\u4f7f\u7528Lumeo",description:"\u5f00\u59cb\u5728NVIDIA\xae Jetson\u8bbe\u5907\u4e0a\u4f7f\u7528Lumeo",source:"@site/docs/zh-CN/Edge/NVIDIA_Jetson/Application/Developer_Tools/Lumeo-Jetson-Getting-Started.md",sourceDirName:"zh-CN/Edge/NVIDIA_Jetson/Application/Developer_Tools",slug:"/cn/Lumeo-Jetson-Getting-Started",permalink:"/cn/Lumeo-Jetson-Getting-Started",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Edge/NVIDIA_Jetson/Application/Developer_Tools/Lumeo-Jetson-Getting-Started.md",tags:[{label:"AI model deploy",permalink:"/tags/ai-model-deploy"}],version:"current",lastUpdatedBy:"Lakshantha",lastUpdatedAt:1678406400,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{description:"\u5f00\u59cb\u5728NVIDIA\xae Jetson\u8bbe\u5907\u4e0a\u4f7f\u7528Lumeo",title:"\u5f00\u59cb\u5728NVIDIA\xae Jetson\u8bbe\u5907\u4e0a\u4f7f\u7528Lumeo",tags:["AI model deploy"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Lumeo-Jetson-Getting-Started",last_update:{date:"03/10/2023",author:"Lakshantha"}}},a={},p=[{value:"\u652f\u6301\u7684\u786c\u4ef6",id:"\u652f\u6301\u7684\u786c\u4ef6",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u521b\u5efaLumeo\u8d26\u6237",id:"\u521b\u5efalumeo\u8d26\u6237",level:2},{value:"\u5728NVIDIA Jetson\u4e0a\u5b89\u88c5Lumeo\u7f51\u5173",id:"\u5728nvidia-jetson\u4e0a\u5b89\u88c5lumeo\u7f51\u5173",level:2},{value:"\u5411\u7f51\u5173\u6dfb\u52a0\u6444\u50cf\u5934",id:"\u5411\u7f51\u5173\u6dfb\u52a0\u6444\u50cf\u5934",level:2},{value:"\u6784\u5efa\u4eba\u5458\u68c0\u6d4b\u6d41\u6c34\u7ebf",id:"\u6784\u5efa\u4eba\u5458\u68c0\u6d4b\u6d41\u6c34\u7ebf",level:2},{value:"\u4e86\u89e3\u66f4\u591a",id:"\u4e86\u89e3\u66f4\u591a",level:2},{value:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",level:2}],l={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(m,(0,o.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"\u5f00\u59cb\u5728nvidia-jetson\u8bbe\u5907\u4e0a\u4f7f\u7528lumeo"},"\u5f00\u59cb\u5728NVIDIA\xae Jetson\u8bbe\u5907\u4e0a\u4f7f\u7528Lumeo"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/thumb.gif"})),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://lumeo.com"},"Lumeo")," \u662f\u4e00\u4e2a\u65e0\u9700\u7f16\u7801\u7684\u89c6\u9891\u5206\u6790\u5e73\u53f0\uff0c\u5b83\u4f7f\u60a8\u80fd\u591f\u5feb\u901f\u8bbe\u8ba1\u3001\u90e8\u7f72\u548c\u76d1\u63a7\u81ea\u5b9a\u4e49\u89c6\u9891\u5206\u6790\u548c\u542f\u7528\u5176\u4ed6\u89c6\u89c9AI\u5e94\u7528\u3002"),(0,i.yg)("p",null,"\u672c\u7ef4\u57fa\u5c06\u5f15\u5bfc\u60a8\u5982\u4f55\u8f7b\u677e\u5730\u5728NVIDIA Jetson\u5e73\u53f0\u4e0a\u5b89\u88c5Lumeo\uff0c\u5e76\u5c06\u5176\u8bbe\u7f6e\u4e3a\u7f51\u5173\uff0c\u4ee5\u4fbf\u60a8\u80fd\u591f\u6267\u884c\u6d41\u6c34\u7ebf\u5e76\u5904\u7406\u6765\u81ea\u540c\u4e00\u7f51\u7edc\u4e0a\u7684\u6d41\u5a92\u4f53\u3001IP\u6444\u50cf\u5934\u6216\u8fde\u63a5\u7684USB\u6444\u50cf\u5934\u7684\u89c6\u9891\u3002"),(0,i.yg)("h2",{id:"\u652f\u6301\u7684\u786c\u4ef6"},"\u652f\u6301\u7684\u786c\u4ef6"),(0,i.yg)("p",null,"Lumeo\u652f\u6301\u4ee5\u4e0b\u5e73\u53f0\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"NVIDIA Jetson"),(0,i.yg)("li",{parentName:"ul"},"\u5e26\u6709Nvidia GPU\u7684x86\u670d\u52a1\u5668"),(0,i.yg)("li",{parentName:"ul"},"AWS\u3001GCP\u3001Azure\u7b49\u4e2d\u7684GPU\u5b9e\u4f8b")),(0,i.yg)("p",null,"\u7136\u800c\uff0c\u5728\u672c\u7ef4\u57fa\u4e2d\uff0c\u6211\u4eec\u5c06\u4ec5\u5173\u6ce8\u5982\u4f55\u5728NVIDIA Jetson\u5e73\u53f0\u4e0a\u90e8\u7f72Lumeo"),(0,i.yg)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u8fd0\u884cNVIDIA JetPack\u4e14\u5df2\u5b89\u88c5\u6240\u6709SDK\u7ec4\u4ef6\u5e76\u8fde\u63a5\u5230\u4e92\u8054\u7f51\u7684NVIDIA Jetson\u8bbe\u5907"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"\u6211\u4eec\u5df2\u5728\u8fd0\u884cJetPack 5.1\u7684",(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/reComputer-J4012-p-5586.html"},"reComputer J4012"),"\u4e0a\u6d4b\u8bd5\u8fc7\u672c\u7ef4\u57fa"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u5177\u6709Windows\u3001Linux\u6216Mac\u64cd\u4f5c\u7cfb\u7edf\u4e14\u8fde\u63a5\u5230\u4e92\u8054\u7f51\u7684\u4e3b\u673aPC"))),(0,i.yg)("h2",{id:"\u521b\u5efalumeo\u8d26\u6237"},"\u521b\u5efaLumeo\u8d26\u6237"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1:")," \u8bbf\u95ee",(0,i.yg)("a",{parentName:"p",href:"https://console.lumeo.com/register"},"\u8fd9\u4e2a\u9875\u9762")," \uff0c\u8f93\u5165\u7535\u5b50\u90ae\u4ef6\u3001\u5bc6\u7801\uff0c\u70b9\u51fb\u590d\u9009\u6846\u540c\u610f\u6761\u6b3e\u5e76\u70b9\u51fb ",(0,i.yg)("strong",{parentName:"p"},"Sign up")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/9.jpg"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2:")," \u6ce8\u518c\u65b0\u8d26\u6237\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u8bbf\u95ee",(0,i.yg)("a",{parentName:"p",href:"https://console.lumeo.com/login"},"\u8fd9\u4e2a\u9875\u9762"),"  \u4f7f\u7528\u4e4b\u524d\u521b\u5efa\u7684\u7535\u5b50\u90ae\u4ef6\u548c\u5bc6\u7801\u767b\u5f55\u60a8\u7684\u8d26\u6237"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 3:"),"  \u8f93\u5165 ",(0,i.yg)("strong",{parentName:"p"},"organization name")," \u548c ",(0,i.yg)("strong",{parentName:"p"},"workspace name")," \u5e76\u70b9\u51fb ",(0,i.yg)("strong",{parentName:"p"},"Start using Lumeo")," "),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:350,src:"https://files.seeedstudio.com/wiki/Lumeo/10.png"})),(0,i.yg)("p",null,"\u73b0\u5728\u60a8\u5c06\u770b\u5230\u5982\u4e0b\u7684 Lumeo \u63a7\u5236\u53f0"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/11.jpg"})),(0,i.yg)("h2",{id:"\u5728nvidia-jetson\u4e0a\u5b89\u88c5lumeo\u7f51\u5173"},"\u5728NVIDIA Jetson\u4e0a\u5b89\u88c5Lumeo\u7f51\u5173"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1:"),"  \u5728Jetson\u8bbe\u5907\u5185\u8fd0\u884c\u5b89\u88c5\u811a\u672c"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"bash <(wget -qO- https://link.lumeo.com/setup)\n")),(0,i.yg)("p",null,"\u6839\u636e\u9700\u8981\u54cd\u5e94\u5b89\u88c5\u811a\u672c\u4e2d\u7684\u63d0\u793a\u3002\u8fd9\u91cc\u53ef\u4ee5\u4fdd\u6301\u6240\u6709\u9ed8\u8ba4\u8bbe\u7f6e"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/1.png"})),(0,i.yg)("p",null,"\u5982\u679c\u60a8\u770b\u5230\u4ee5\u4e0b\u8f93\u51fa\uff0c\u90a3\u610f\u5473\u7740\u5b89\u88c5\u7a0b\u5e8f\u5df2\u6210\u529f\u5b8c\u6210"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Lumeo/2.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2:")," \u5728\u63d0\u793a ",(0,i.yg)("strong",{parentName:"p"},"Enter the command:")," \u65c1\u8fb9\u952e\u5165 ",(0,i.yg)("strong",{parentName:"p"},"Install")," \u6765\u5b89\u88c5\u5305\u542b\u7f51\u5173\u7684\u65b0\u5bb9\u5668"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"Enter the command: \ninstall\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6ce8\u610f:")," \u514d\u8d39\u7684 Lumeo \u8d26\u6237\u53ea\u5141\u8bb8\u90e8\u7f72\u4e00\u4e2a\u7f51\u5173\u3002\u56e0\u6b64\uff0c\u5728\u5c06\u60a8\u81ea\u5df1\u7684\u7f51\u5173\u90e8\u7f72\u5230Jetson\u8bbe\u5907\u4e0a\u4e4b\u524d\uff0c\u60a8\u9700\u8981\u5148\u5220\u9664\u968f Lumeo \u9644\u5e26\u7684\u9ed8\u8ba4\u4e91\u7f51\u5173\u3002\u53ea\u9700\u8fdb\u5165\u9884\u5148\u52a0\u8f7d\u7684\u4e91\u7f51\u5173\u5e76\u70b9\u51fb ",(0,i.yg)("strong",{parentName:"p"},"Delete")," \u4ee5\u5220\u9664\u8be5\u7f51\u5173\u3002"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 3:")," \u5f53\u6709\u63d0\u793a\u65f6\u4e3a\u5bb9\u5668\u8f93\u5165\u4e00\u4e2a\u540d\u79f0\uff0c\u5e76\u5728\u6709\u63d0\u793a\u65f6\u7528\u60a8\u7684 Lumeo \u8d26\u6237\u51ed\u8bc1\u767b\u5f55"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/4.png"})),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/12.jpg"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 4:")," \u5bb9\u5668\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u8f93\u5165 ",(0,i.yg)("strong",{parentName:"p"},"list")," \u5217\u51fa\u60a8\u521a\u521a\u5b89\u88c5\u7684\u5bb9\u5668"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/5.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 5:")," \u8f93\u5165 ",(0,i.yg)("strong",{parentName:"p"},"exit")," \u9000\u51fa\u8fd0\u884c\u7684\u811a\u672c"),(0,i.yg)("p",null,"\u73b0\u5728\u60a8\u5df2\u7ecf\u6210\u529f\u5730\u5728NVIDIA Jetson\u4e0a\u5b89\u88c5\u4e86 Lumeo \u7f51\u5173\u3002\u5982\u679c\u60a8\u8f6c\u5230 Lumeo \u63a7\u5236\u53f0\u5e76\u5bfc\u822a\u5230 ",(0,i.yg)("strong",{parentName:"p"},"Gateways"),"\uff0c\u60a8\u5c06\u770b\u5230\u65b0\u90e8\u7f72\u7684\u7531Jetson\u9a71\u52a8\u7684\u7f51\u5173\u3002"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/13.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 6:")," \u70b9\u51fb\u7f51\u5173\u67e5\u770b\u6709\u5173\u7f51\u5173\u7684\u9644\u52a0\u4fe1\u606f"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Lumeo/14.jpg"})),(0,i.yg)("h2",{id:"\u5411\u7f51\u5173\u6dfb\u52a0\u6444\u50cf\u5934"},"\u5411\u7f51\u5173\u6dfb\u52a0\u6444\u50cf\u5934"),(0,i.yg)("p",null,"\u73b0\u5728\u6211\u4eec\u5c06\u628a\u6444\u50cf\u5934\u6dfb\u52a0\u5230\u6211\u4eec\u5df2\u7ecf\u5728Jetson\u8bbe\u5907\u4e0a\u8bbe\u7f6e\u597d\u7684\u7f51\u5173\u4e2d"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1:")," \u5c06USB\u6444\u50cf\u5934\u8fde\u63a5\u5230Jetson\u8bbe\u5907\u7684\u4e00\u4e2aUSB\u7aef\u53e3\u4e0a\uff0c\u6216\u5c06ONVIF\u6444\u50cf\u5934\u8fde\u63a5\u5230\u4e0eJetson\u8bbe\u5907\u76f8\u540c\u7684\u7f51\u7edc\u4e0a"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2:")," \u5728\u6211\u4eec\u4e4b\u524d\u8bbe\u7f6e\u7684\u7f51\u5173\u4e0b\uff0c\u70b9\u51fb ",(0,i.yg)("strong",{parentName:"p"},"Add Camera")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Lumeo/15.jpg"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 3:")," It \u5b83\u5c06\u5c1d\u8bd5\u81ea\u52a8\u53d1\u73b0\u6240\u6709\u5df2\u8fde\u63a5\u7684USB\u6444\u50cf\u5934\u4ee5\u53ca\u540c\u4e00\u7f51\u7edc\u4e0a\u7684ONVIF\u6444\u50cf\u5934\u3002\u70b9\u51fb\u6444\u50cf\u5934\u65c1\u8fb9\u7684 ",(0,i.yg)("strong",{parentName:"p"},"Link")," \u5c06\u6444\u50cf\u5934\u6dfb\u52a0\u5230\u7f51\u5173"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Lumeo/16.png"})),(0,i.yg)("p",null,"\u5982\u679c\u6ca1\u6709\u68c0\u6d4b\u5230\u4efb\u4f55\u5df2\u8fde\u63a5\u7684\u6444\u50cf\u5934\uff0c\u8bf7\u70b9\u51fb\u53d1\u73b0\u4ee5\u91cd\u65b0\u5f00\u59cb\u81ea\u52a8\u68c0\u6d4b\u8fc7\u7a0b\u3002\u5982\u679c\u4ecd\u7136\u5931\u8d25\uff0c\u70b9\u51fb ",(0,i.yg)("strong",{parentName:"p"},"+ Manually add cameras")," \u5e76\u914d\u7f6e\u6240\u6709\u7684\u6444\u50cf\u5934"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Lumeo/17.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 4:")," \u8f93\u5165 ",(0,i.yg)("strong",{parentName:"p"},"Camera name"),"\uff0c\u5982\u679c\u6444\u50cf\u5934\u9700\u8981\u63d0\u4f9b\u6444\u50cf\u5934\u51ed\u636e\uff0c\u8bf7\u63d0\u4f9b\uff0c\u6700\u540e\u70b9\u51fb ",(0,i.yg)("strong",{parentName:"p"},"Connect camera")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Lumeo/18.png"})),(0,i.yg)("p",null,"\u73b0\u5728\u60a8\u5c06\u770b\u5230\u6444\u50cf\u5934\u6210\u529f\u94fe\u63a5"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Lumeo/19.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 5:")," \u70b9\u51fb\u5df2\u94fe\u63a5\u7684\u6444\u50cf\u5934\u8f93\u51fa\u5982\u4e0b\u9884\u89c8\u5feb\u7167"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Lumeo/20.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 6:")," \u5982\u679c\u60a8\u60f3\u6dfb\u52a0RTSP\u6216HTTP\u6d41\uff0c\u53ef\u4ee5\u5bfc\u822a\u81f3 ",(0,i.yg)("strong",{parentName:"p"},"Deploy > Streams"),"\uff0c\u70b9\u51fb ",(0,i.yg)("strong",{parentName:"p"},"Add input stream")," \u5e76\u914d\u7f6e\u6d41"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/21.jpg"})),(0,i.yg)("h2",{id:"\u6784\u5efa\u4eba\u5458\u68c0\u6d4b\u6d41\u6c34\u7ebf"},"\u6784\u5efa\u4eba\u5458\u68c0\u6d4b\u6d41\u6c34\u7ebf"),(0,i.yg)("p",null,"Lumeo\u63d0\u4f9b\u4e86\u8bb8\u591a\u4e0d\u540c\u7684\u73b0\u6210\u89e3\u51b3\u65b9\u6848\uff0c\u5e26\u6709\u9884\u914d\u7f6e\u7684\u6d41\u6c34\u7ebf\u548c\u9884\u52a0\u8f7d\u7684\u6a21\u578b\u3002\u6211\u4eec\u5c06\u5c1d\u8bd5\u4f7f\u7528Lumeo\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u4eba\u5458\u68c0\u6d4b\u5e94\u7528\u3002"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1:")," \u5728 ",(0,i.yg)("strong",{parentName:"p"},"Design > Solutions")," \u90e8\u5206\u5185\u9009\u62e9 ",(0,i.yg)("strong",{parentName:"p"},"Basics - Detect Objects")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/22.jpg"})),(0,i.yg)("p",null,"\u73b0\u5728\u60a8\u5c06\u770b\u5230\u4e3a\u60a8\u521b\u5efa\u7684\u6a21\u677f\uff0c\u91c7\u7528\u57fa\u4e8e\u5757\u7684\u98ce\u683c\uff0c\u5141\u8bb8\u60a8\u6839\u636e\u4e2a\u4eba\u559c\u597d\u6dfb\u52a0\u66f4\u591a\u81ea\u5b9a\u4e49\u548c\u529f\u80fd\u3002\u5728\u8fd9\u91cc\uff0c\u60a8\u53ef\u4ee5\u6839\u636e\u504f\u597d\u6dfb\u52a0\u3001\u4fee\u6539\u6216\u79fb\u9664\u5757"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/23.jpg"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2:")," \u6b64\u6a21\u677f\u9ed8\u8ba4\u52a0\u8f7d ",(0,i.yg)("strong",{parentName:"p"},"people detection")," \u6a21\u578b\uff0c\u8ddf\u8e2a\u5bf9\u8c61\uff0c\u7f16\u7801\u89c6\u9891\u5e76\u901a\u8fc7WebRTC\u6d41\u5f0f\u4f20\u8f93\u3002\u6211\u4eec\u5c06\u4fdd\u7559\u6240\u6709\u914d\u7f6e\u5757\u4e3a\u9ed8\u8ba4\u8bbe\u7f6e\uff0c\u7136\u540e\u70b9\u51fb ",(0,i.yg)("strong",{parentName:"p"},"Deploy")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Lumeo/24.jpg"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 3:")," \u5728 ",(0,i.yg)("strong",{parentName:"p"},"Select Gateway")," \u4e0b\uff0c\u9009\u62e9\u60a8\u5728Jetson\u4e0a\u90e8\u7f72\u7684\u7f51\u5173\uff0c\u9009\u62e9\u4e4b\u524d\u914d\u7f6e\u7684\u6444\u50cf\u5934\uff0c\u7136\u540e\u70b9\u51fb ",(0,i.yg)("strong",{parentName:"p"},"Deploy")," \u5f00\u59cb\u5c06\u5e94\u7528\u90e8\u7f72\u5230Jetson\u8bbe\u5907"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Lumeo/25.png"})),(0,i.yg)("p",null,"\u5982\u679c\u90e8\u7f72\u6210\u529f\uff0c\u60a8\u5c06\u770b\u5230\u5982\u4e0b\u6240\u793a\u7684\u7eff\u8272\u56fe\u6807 ",(0,i.yg)("strong",{parentName:"p"},"running")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/26.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 4:")," \u70b9\u51fb ",(0,i.yg)("strong",{parentName:"p"},"play button")," \u901a\u8fc7WebRTC\u67e5\u770b\u8f93\u51fa\u6d41"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:550,src:"https://files.seeedstudio.com/wiki/Lumeo/27.png"})),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Lumeo/28.png"})),(0,i.yg)("h2",{id:"\u4e86\u89e3\u66f4\u591a"},"\u4e86\u89e3\u66f4\u591a"),(0,i.yg)("p",null,"Lumeo\u63d0\u4f9b\u4e86\u975e\u5e38\u8be6\u7ec6\u548c\u5168\u9762\u7684\u6587\u6863\u3002\u56e0\u6b64\uff0c\u5f3a\u70c8\u5efa\u8bae\u60a8\u5728",(0,i.yg)("a",{parentName:"p",href:"https://docs.lumeo.com"},"\u8fd9\u91cc"),"\u67e5\u770b\u5b83\u4eec\u3002"),(0,i.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"),(0,i.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u4f7f\u7528\u6211\u4eec\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u7545\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u4e2a\u6c9f\u901a\u6e20\u9053\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);