"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9550],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=o,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},58437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(9668),o=(n(96540),n(15680));const i={description:"Send message from Watcher & Node-RED to Open Interpreter",title:"Watcher & Node-RED to Open Interpreter",keywords:["watcher","Open Interpreter"],image:"https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/banner.png",slug:"/watcher_node_red_to_open_interpreter",last_update:{date:"08/19/2024",author:"Allen"}},a="Watcher To Open Interpreter Quick Start",s={unversionedId:"Sensor/SenseCAP/SenseCAP_Watcher/Applications/node_red_integration/watcher_node_red_to_open_interpreter",id:"Sensor/SenseCAP/SenseCAP_Watcher/Applications/node_red_integration/watcher_node_red_to_open_interpreter",title:"Watcher & Node-RED to Open Interpreter",description:"Send message from Watcher & Node-RED to Open Interpreter",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Watcher/Applications/node_red_integration/watcher_node_red_to_open_interpreter.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Watcher/Applications/node_red_integration",slug:"/watcher_node_red_to_open_interpreter",permalink:"/watcher_node_red_to_open_interpreter",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Watcher/Applications/node_red_integration/watcher_node_red_to_open_interpreter.md",tags:[],version:"current",lastUpdatedBy:"Allen",lastUpdatedAt:1724025600,formattedLastUpdatedAt:"Aug 19, 2024",frontMatter:{description:"Send message from Watcher & Node-RED to Open Interpreter",title:"Watcher & Node-RED to Open Interpreter",keywords:["watcher","Open Interpreter"],image:"https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/banner.png",slug:"/watcher_node_red_to_open_interpreter",last_update:{date:"08/19/2024",author:"Allen"}},sidebar:"ProductSidebar",previous:{title:"Watcher & Node-RED to kafka",permalink:"/watcher_node_red_to_kafka"},next:{title:"Watcher & Node-RED to P5JS",permalink:"/watcher_node_red_to_p5js"}},l={},p=[{value:"Part 1.What is Open Interpreter",id:"part-1what-is-open-interpreter",level:2},{value:"Part 2.Operations in Node-RED",id:"part-2operations-in-node-red",level:2},{value:"Step 1.Configure SenseCap Watcher OpenSteam module",id:"step-1configure-sensecap-watcher-opensteam-module",level:3},{value:"Step 2.Configure function module",id:"step-2configure-function-module",level:3},{value:"Step 3.Configure http request module",id:"step-3configure-http-request-module",level:3},{value:"Step 4.Configure debug module",id:"step-4configure-debug-module",level:3},{value:"Part 3.Operations in Open Interpreter",id:"part-3operations-in-open-interpreter",level:2},{value:"Step 5.Install Open Interpreter",id:"step-5install-open-interpreter",level:3},{value:"Step 6.Start Open Interpreter",id:"step-6start-open-interpreter",level:3},{value:"Online mode",id:"online-mode",level:4},{value:"Local mode",id:"local-mode",level:4},{value:"Step 7.Run commands",id:"step-7run-commands",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"watcher-to-open-interpreter-quick-start"},"Watcher To Open Interpreter Quick Start"),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/banner.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("h2",{id:"part-1what-is-open-interpreter"},"Part 1.What is ",(0,o.yg)("a",{parentName:"h2",href:"https://docs.openinterpreter.com/getting-started/introduction"},"Open Interpreter")),(0,o.yg)("p",null,"Open Interpreter is an open-source tool that facilitates interaction between users and their computers by enabling natural language commands to execute code in various programming languages. It acts as a bridge, allowing users to write instructions in plain language, which the interpreter then translates into executable code. This enhances productivity and makes programming more accessible, especially for those who may not be familiar with coding syntax."),(0,o.yg)("h2",{id:"part-2operations-in-node-red"},"Part 2.Operations in Node-RED"),(0,o.yg)("p",null,"In this part, we need 4 modules to finish the job. There are ",(0,o.yg)("strong",{parentName:"p"},"SenseCap Watcher OpenSteam, function, http request and debug")," module."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/6.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"SenseCap Watcher OpenSteam module"),": Get message from Watcher to Node-RED."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"function module"),": Process data to get what message you want."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"http request module"),": Send message to Open Interpreter via http potocal."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"debug module"),": Debug the whole work flow to check if everything is ok.")),(0,o.yg)("p",null,"We will show you how to configure those modules in following steps."),(0,o.yg)("h3",{id:"step-1configure-sensecap-watcher-opensteam-module"},"Step 1.Configure SenseCap Watcher OpenSteam module"),(0,o.yg)("p",null,"Fisrt of all, you need to run a task in Watcher following the video below. If you want to know more ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/getting_started_with_watcher_task/"},"please click here"),"."),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("iframe",{width:"600",height:"338",src:"https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," ")),(0,o.yg)("p",null,"If you don't know how to send message from Watcher to Node_RED yet, ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/watcher_to_node_red/"},"please click here"),"."),(0,o.yg)("h3",{id:"step-2configure-function-module"},"Step 2.Configure function module"),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/7.png",style:{width:800,height:"auto"}})),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"msg.payload = {\n    content: msg.payload.value[0].content,\n    image_url: msg.payload.value[0].image_url\n};\nreturn msg;\n")),(0,o.yg)("h3",{id:"step-3configure-http-request-module"},"Step 3.Configure http request module"),(0,o.yg)("p",null,"We use POST request for security and send to port 3000, and we will use Open Interpreter to keep listening port 3000 later."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/8.png",style:{width:800,height:"auto"}})),(0,o.yg)("h3",{id:"step-4configure-debug-module"},"Step 4.Configure debug module"),(0,o.yg)("p",null,"Select as following image."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/9.png",style:{width:800,height:"auto"}})),(0,o.yg)("p",null,"When finished configuration, don't forget to ",(0,o.yg)("strong",{parentName:"p"},"Deploy")," them."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/10.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("h2",{id:"part-3operations-in-open-interpreter"},"Part 3.Operations in Open Interpreter"),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Before we keep continue, the prerequisite is you need to have Python development enviroment in your computer. "),(0,o.yg)("p",{parentName:"admonition"},"If you haven't, ",(0,o.yg)("a",{parentName:"p",href:"https://phoenixnap.com/kb/how-to-install-python-3-windows"},"please click here for your reference."))),(0,o.yg)("h3",{id:"step-5install-open-interpreter"},"Step 5.Install Open Interpreter"),(0,o.yg)("p",null,"After installing Python, you can install Open Interpreter via Python easily, just one command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},"pip install open-interpreter\n")),(0,o.yg)("h3",{id:"step-6start-open-interpreter"},"Step 6.Start Open Interpreter"),(0,o.yg)("p",null,"Interpreter have two mode, online mode and local mode. By default, Interpreter select online mode, using OpenAI GhatGPT gpt-4-turbo API Key. You can also set it to local mode that means you need to download model to run locally."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"I would recommend online mode because online mode is much faster and smarter than local mode and local mode often stuck.")),(0,o.yg)("h4",{id:"online-mode"},"Online mode"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Before we start, we need a OpenAI API Key. ",(0,o.yg)("a",{parentName:"li",href:"https://platform.openai.com/api-keys"},"You can click here")," to get one if you are a OpenAI GPT-4 paid member.")),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/16.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"And then, we input ",(0,o.yg)("inlineCode",{parentName:"li"},"interpreter")," this command to start it and it require us input API Key. After that, we set the model to gpt-4-turbo successfully.")),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/2_1.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("h4",{id:"local-mode"},"Local mode"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Before we start, we need to download a model to run it locally. I would recommend ",(0,o.yg)("strong",{parentName:"li"},"Ollama")," here. ",(0,o.yg)("a",{parentName:"li",href:"https://ollama.com/"},"Click here to jump.")," You should download this application and install it.")),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/12.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"When you install it successfully, run ",(0,o.yg)("inlineCode",{parentName:"li"},"ollama")," in your ",(0,o.yg)("strong",{parentName:"li"},"PowerShell(or Terminal)"),",it will like following image. And then, run ",(0,o.yg)("inlineCode",{parentName:"li"},"ollama run llama3.1")," to download model ",(0,o.yg)("strong",{parentName:"li"},"llama3.1")," and run. ")),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/15.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"If you want to try other models, ",(0,o.yg)("a",{parentName:"li",href:"https://ollama.com/library"},"click here to jump.")," Just run ",(0,o.yg)("inlineCode",{parentName:"li"},"ollama run xxx"),".")),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/13.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("ol",{start:4},(0,o.yg)("li",{parentName:"ol"},"After installing model and run successfully, we can continue. We need to input ",(0,o.yg)("inlineCode",{parentName:"li"},"interpreter -l")," this command to get into it\uff0cand then select ",(0,o.yg)("strong",{parentName:"li"},"ollama")," and ",(0,o.yg)("strong",{parentName:"li"},"llama3.1"),"(the model you just download).")),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/11.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("h3",{id:"step-7run-commands"},"Step 7.Run commands"),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"I try many times to run the following command in Interpreter, but not every times the reaction of Interpreter are the same."),(0,o.yg)("p",{parentName:"admonition"},"So you need to interact with Interpreter according to its reaction. Sometimes you need to reboot it and try again.")),(0,o.yg)("p",null,"Here is my natural language command sent to Open Interpreter."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"i want you to keep listening computer port 3000 and extract the image_url and open it in browser.\n")),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/2.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"In the first time, Interpreter said she initial setup only support GET requests for simplicity but my request is POST for security, so she can't support it and suggeset me to modify the server to handle POST requests. I said yes and she will run automatically."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/3.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"As you can see, the code run successfully, listening port 3000. "),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/4.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Now, use Watcher to detect yourself. The image will be captured and opened in browser automatically."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/5.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Congratulations on successfully integrating the Watcher and Open Interpreter applications! This achievement marks a significant step in your journey, showcasing your dedication and skill. As you move forward, you'll find even more fascinating concepts and tools to explore. Embrace the challenges and discoveries that lie ahead, and enjoy every moment of this exciting adventure!"),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);