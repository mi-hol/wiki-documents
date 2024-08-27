"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[74811],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var o=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=d(a),u=i,m=g["".concat(l,".").concat(u)]||g[u]||p[u]||n;return a?o.createElement(m,r(r({ref:t},c),{},{components:a})):o.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<n;d++)r[d]=a[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},30135:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var o=a(9668),i=(a(96540),a(15680));const n={description:"Send message from Watcher & Node-RED to kafka",title:"Watcher & Node-RED to kafka",keywords:["watcher","kafka"],image:"https://files.seeedstudio.com/wiki/watcher_to_kafka_image/head_image.png",slug:"/watcher_node_red_to_kafka",last_update:{date:"07/24/2024",author:"Allen"}},r="Watcher & Node-RED To Kafka Quick Start",s={unversionedId:"Sensor/SenseCAP/SenseCAP_Watcher/Applications/node_red_integration/watcher_node_red_to_kafka",id:"Sensor/SenseCAP/SenseCAP_Watcher/Applications/node_red_integration/watcher_node_red_to_kafka",title:"Watcher & Node-RED to kafka",description:"Send message from Watcher & Node-RED to kafka",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Watcher/Applications/node_red_integration/watcher_node_red_to_kafka.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Watcher/Applications/node_red_integration",slug:"/watcher_node_red_to_kafka",permalink:"/watcher_node_red_to_kafka",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Watcher/Applications/node_red_integration/watcher_node_red_to_kafka.md",tags:[],version:"current",lastUpdatedBy:"Allen",lastUpdatedAt:1721779200,formattedLastUpdatedAt:"Jul 24, 2024",frontMatter:{description:"Send message from Watcher & Node-RED to kafka",title:"Watcher & Node-RED to kafka",keywords:["watcher","kafka"],image:"https://files.seeedstudio.com/wiki/watcher_to_kafka_image/head_image.png",slug:"/watcher_node_red_to_kafka",last_update:{date:"07/24/2024",author:"Allen"}},sidebar:"ProductSidebar",previous:{title:"Watcher & Node-RED to IFTTT",permalink:"/watcher_node_red_to_ifttt"},next:{title:"Watcher & Node-RED to Open Interpreter",permalink:"/watcher_node_red_to_open_interpreter"}},l={},d=[{value:"Part 1.What is Kafka",id:"part-1what-is-kafka",level:2},{value:"Part 2.Build Kafka cluster in Docker",id:"part-2build-kafka-cluster-in-docker",level:2},{value:"Step 1. Download Docker",id:"step-1-download-docker",level:3},{value:"Step 2. Install WSL(Windows Subsystem for Linux)",id:"step-2-install-wslwindows-subsystem-for-linux",level:3},{value:"Step 3.Build Kafka image and run",id:"step-3build-kafka-image-and-run",level:3},{value:"Part 3.Run Kafka message module in Node-RED",id:"part-3run-kafka-message-module-in-node-red",level:2},{value:"Step 4. Install Kafka message module",id:"step-4-install-kafka-message-module",level:3},{value:"Step 5. Configure Kafka message module",id:"step-5-configure-kafka-message-module",level:3},{value:"Part 4.Run a task in Watcher",id:"part-4run-a-task-in-watcher",level:2},{value:"Part 5.Receive data in Kafka",id:"part-5receive-data-in-kafka",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:d},g="wrapper";function p(e){let{components:t,...a}=e;return(0,i.yg)(g,(0,o.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"watcher--node-red-to-kafka-quick-start"},"Watcher & Node-RED To Kafka Quick Start"),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_kafka_image/head_image.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("h2",{id:"part-1what-is-kafka"},"Part 1.What is ",(0,i.yg)("a",{parentName:"h2",href:"https://kafka.apache.org/"},"Kafka")),(0,i.yg)("p",null,"Apache Kafka is a distributed event streaming platform designed for high-throughput, fault-tolerant data processing. It enables real-time data feeds by allowing producers to publish messages to topics, while consumers can subscribe to these topics to process the data. Kafka is widely used for building data pipelines, real-time analytics, and integrating various data sources. Its robust architecture ensures scalability and durability, making it a popular choice for modern data-driven applications."),(0,i.yg)("h2",{id:"part-2build-kafka-cluster-in-docker"},"Part 2.Build Kafka cluster in Docker"),(0,i.yg)("p",null,"Why use Docker? Because Docker can simulate the environment of multiple computers on a single machine and deploy applications with great ease. Therefore, in this project, we will use Docker to set up the environment and improve efficiency."),(0,i.yg)("h3",{id:"step-1-download-docker"},"Step 1. Download Docker"),(0,i.yg)("p",null,"According to your computer to download different types of installer. Click ",(0,i.yg)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop/"},"here")," to jump."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/1.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"If your computer is ",(0,i.yg)("strong",{parentName:"p"},"Windows"),", please don't install docker until you finish ",(0,i.yg)("strong",{parentName:"p"},"Step 2"),".")),(0,i.yg)("h3",{id:"step-2-install-wslwindows-subsystem-for-linux"},"Step 2. Install WSL(Windows Subsystem for Linux)"),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"This step is for ",(0,i.yg)("strong",{parentName:"p"},"Windows"),". You can skip this step if you computer is Mac or Linux.")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Run the following code as an administrator.")),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/3.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart\ndism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart\n")),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Download this tool from ",(0,i.yg)("a",{parentName:"p",href:"https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi"},"here")," and double click to install it.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Go to your ",(0,i.yg)("strong",{parentName:"p"},"Microsoft Store")," to search and download linux version you like, here I installed Ubuntu."))),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/4.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("ol",{start:4},(0,i.yg)("li",{parentName:"ol"},"After installing Linux, you need to open it and set your username and password, and then need to wait a minute to initialize.")),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/5.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("ol",{start:5},(0,i.yg)("li",{parentName:"ol"},"Run the following instructions to use ",(0,i.yg)("strong",{parentName:"li"},"WSL"),".")),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/6.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("ol",{start:6},(0,i.yg)("li",{parentName:"ol"},"After installing WSL, now you can double click you docker installer to install it. When you see the following image that means it work.")),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/2.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("h3",{id:"step-3build-kafka-image-and-run"},"Step 3.Build Kafka image and run"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Find a place to create ",(0,i.yg)("strong",{parentName:"li"},"docker-compose.yml")," file and copy the following codes into it.")),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_kafka_image/15.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yml"},'services:\n  zookeeper:\n    image: wurstmeister/zookeeper   ## image\n    container_name: zookeeper\n    ports:\n      - "2181:2181"                 ## Externally exposed port number\n  kafka:\n    image: wurstmeister/kafka       ## image\n    container_name: kafka\n    volumes: \n        - ./volume:/volume ## Mounting location\n    ports:\n      - "9092:9092"\n    environment:\n      KAFKA_ADVERTISED_HOST_NAME: 127.0.0.1         ## Host machine IP\n      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181       ## Running Kafka is base to zookeeper\n      KAFKA_ADVERTISED_PORT: 9092\n      KAFKA_LOG_RETENTION_HOURS: 120\n      KAFKA_MESSAGE_MAX_BYTES: 10000000\n      KAFKA_REPLICA_FETCH_MAX_BYTES: 10000000\n      KAFKA_GROUP_MAX_SESSION_TIMEOUT_MS: 60000\n      KAFKA_NUM_PARTITIONS: 3\n      KAFKA_DELETE_RETENTION_MS: 1000\n  kafka-manager:\n    image: sheepkiller/kafka-manager                ## image: open source web manage interface about kafka cluster\n    container_name: kafka-manager\n    environment:\n        ZK_HOSTS: 127.0.0.1                         ## host machine IP\n    ports:  \n      - "9009:9000"                                 ## exposed port\n')),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Run Kafka in container and get into it")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"docker-compose up -d\n\ndocker exec -it kafka /bin/bash\n")),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_kafka_image/1.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},"Create a new topic, produce something and comsume something. To test if Kafka works well.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"kafka-topics.sh --create --topic watcher --zookeeper zookeeper:2181 --replication-factor 1 --partitions 1\n\nkafka-console-producer.sh --topic=watcher --broker-list kafka:9092\n\nkafka-console-consumer.sh --bootstrap-server kafka:9092 --from-beginning --topic watcher\n")),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_kafka_image/2.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("h2",{id:"part-3run-kafka-message-module-in-node-red"},"Part 3.Run Kafka message module in Node-RED"),(0,i.yg)("h3",{id:"step-4-install-kafka-message-module"},"Step 4. Install Kafka message module"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Click ",(0,i.yg)("strong",{parentName:"li"},"Manage palette"),". If you don't install Node_RED yet, ",(0,i.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/watcher_to_node_red/"},"please click here"),".")),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_kafka_image/3.png",style:{width:600,height:"auto"}})),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Search ",(0,i.yg)("strong",{parentName:"li"},"kafka-manager")," and install it")),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_kafka_image/4.png",style:{width:600,height:"auto"}})),(0,i.yg)("h3",{id:"step-5-configure-kafka-message-module"},"Step 5. Configure Kafka message module"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Drag those modules(",(0,i.yg)("strong",{parentName:"li"},"inject, kafka producer, kafka consumer, debug"),") into workspace")),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_kafka_image/5.png",style:{width:800,height:"auto"}})),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Double click ",(0,i.yg)("strong",{parentName:"li"},"Kafka Producer")," to configure it. When you do step 3, you should ",(0,i.yg)("strong",{parentName:"li"},"add a new broker"),".")),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_kafka_image/6.png",style:{width:800,height:"auto"}})),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},"Double click ",(0,i.yg)("strong",{parentName:"li"},"Kafka Consumer")," to configure it as below.")),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_kafka_image/7.png",style:{width:800,height:"auto"}})),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_kafka_image/12.png",style:{width:600,height:"auto"}})),(0,i.yg)("ol",{start:4},(0,i.yg)("li",{parentName:"ol"},"When finish Configuration, click the ",(0,i.yg)("strong",{parentName:"li"},"Deploy")," botton to deploy it.")),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_kafka_image/8.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Any change, you should click the ",(0,i.yg)("strong",{parentName:"p"},"Deploy")," button.")),(0,i.yg)("ol",{start:5},(0,i.yg)("li",{parentName:"ol"},"Click the ",(0,i.yg)("strong",{parentName:"li"},"square button")," to send a timestamp to test if the whole process works. If it works well, you should receive timestamp in ",(0,i.yg)("strong",{parentName:"li"},"kafka consumer")," end.")),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_kafka_image/9.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("h2",{id:"part-4run-a-task-in-watcher"},"Part 4.Run a task in Watcher"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"First of all, you need to run a task in Watcher following the video below. If you want to know more ",(0,i.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/getting_started_with_watcher_task/"},"please click here"),".")),(0,i.yg)("div",{class:"table-center"},(0,i.yg)("iframe",{width:"600",height:"338",src:"https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," ")),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"When you finish running a task in watcher, you should ",(0,i.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/watcher_to_node_red/"},"refer this link")," to send watcher message to Node-RED.")),(0,i.yg)("h2",{id:"part-5receive-data-in-kafka"},"Part 5.Receive data in Kafka"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Replace ",(0,i.yg)("strong",{parentName:"li"},"timestamp")," module to ",(0,i.yg)("strong",{parentName:"li"},"OpenStream")," and ",(0,i.yg)("strong",{parentName:"li"},"function")," module and double click to configure them. Remember to Deploy it.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"node.send({ payload: msg.payload.value[0].content });\n\nnode.send({ payload: msg.payload.value[0].image_url });\n")),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_kafka_image/10.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"I run a ",(0,i.yg)("strong",{parentName:"li"},"People Detection")," model in Watcher. So when Watcher will send message to Kafka when it detects people and you will see the photo when open the link.")),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_to_kafka_image/11.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("p",null,"Congratulations on completing the watcher to Kafka application! There's a wealth of useful features in Kafka waiting for you to explore. Keep up the great work and dive into the exciting possibilities ahead!"),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);