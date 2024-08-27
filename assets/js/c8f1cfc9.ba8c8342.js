"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[30770],{15680:(e,t,i)=>{i.d(t,{xA:()=>g,yg:()=>m});var n=i(96540);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},g=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=p(i),c=r,m=d["".concat(s,".").concat(c)]||d[c]||u[c]||o;return i?n.createElement(m,a(a({ref:t},g),{},{components:i})):n.createElement(m,a({ref:t},g))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=i[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},98857:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=i(9668),r=(i(96540),i(15680));const o={description:"Motion Recognition based on Edge Impulse",title:"Motion Recognition based on Edge Impulse",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-RP2040-EI",last_update:{date:"04/17/2023",author:"Citric"}},a="TinyML on SEEED XIAO RP2040 (Motion Recognition)",l={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/Embedded ML/XIAO-RP2040-EI",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/Embedded ML/XIAO-RP2040-EI",title:"Motion Recognition based on Edge Impulse",description:"Motion Recognition based on Edge Impulse",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/Embedded ML/XIAO-RP2040-EI.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/Embedded ML",slug:"/XIAO-RP2040-EI",permalink:"/XIAO-RP2040-EI",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/Embedded ML/XIAO-RP2040-EI.md",tags:[],version:"current",lastUpdatedBy:"Citric",lastUpdatedAt:1681689600,formattedLastUpdatedAt:"Apr 17, 2023",frontMatter:{description:"Motion Recognition based on Edge Impulse",title:"Motion Recognition based on Edge Impulse",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-RP2040-EI",last_update:{date:"04/17/2023",author:"Citric"}},sidebar:"ProductSidebar",previous:{title:"XIAO RP2040 With Zephyr(RTOS)",permalink:"/XIAO-RP2040-Zephyr-RTOS"},next:{title:"Getting Started with Seeed Studio XIAO RP2350",permalink:"/getting-started-xiao-rp2350"}},s={},p=[{value:"Materials Required",id:"materials-required",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Get started",id:"get-started",level:2},{value:"Check the circuit connection and accelerometer",id:"check-the-circuit-connection-and-accelerometer",level:3},{value:"Connected with Edge Impulse",id:"connected-with-edge-impulse",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],g={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.yg)(d,(0,n.A)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"tinyml-on-seeed-xiao-rp2040-motion-recognition"},"TinyML on SEEED XIAO RP2040 (Motion Recognition)"),(0,r.yg)("p",null,"In this wiki, we will show you how to utilize the accelerometer on Seeed Studio XIAO RP2040 combined with Edge Impulse to enable motion recognition. The codes we present here are supported by latest version of  XIAO RP2040 Boards."),(0,r.yg)("h2",{id:"materials-required"},"Materials Required"),(0,r.yg)("h3",{id:"hardware"},"Hardware"),(0,r.yg)("p",null,"In this wiki, we need to prepare the following materials:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html"},"Seeed Studio XIAO RP2040")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html"},"Grove - Shield for Seeeduino Xiao")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html"},"Grove - 3-Axis Digital Accelerometer(\xb11.5g)"))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_all_in_one.jpg",alt:"pir",width:800,height:"auto"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Hardware Set up")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_all_in_one_connect.jpg",alt:"pir",width:400,height:"auto"})),(0,r.yg)("h3",{id:"software"},"Software"),(0,r.yg)("p",null,"The required libraries are listed below. It is highly recommanded that use the codes here to check whether the hardware is functioning well. If you have problem about installing the library, please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"here"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Seeed_Arduino_LSM6DS3-master.zip"},"Seeed_Arduino_LSM6DS3-master"))),(0,r.yg)("h2",{id:"get-started"},"Get started"),(0,r.yg)("p",null,"First we are going run some demos to check whether the board and the display screen is functioning well. If yours are fine, you can move on to the next instruction."),(0,r.yg)("h3",{id:"check-the-circuit-connection-and-accelerometer"},"Check the circuit connection and accelerometer"),(0,r.yg)("p",null,"Open the Arduino IDE, navigate to Sketch -> Include Library -> Manage Libraries... and Search and Install ",(0,r.yg)("inlineCode",{parentName:"p"},"U8g2 library")," in the Library Manager."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition29.png",alt:"pir",width:400,height:"auto"})),(0,r.yg)("p",null,"After the installation, copy the following code run it."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"#include <Wire.h>\n#include \"MMA7660.h\"\nMMA7660 accelemeter;\n#define CONVERT_G_TO_MS2    9.80665f\n\nvoid setup() {\n    Serial.begin(115200);\n    while (!Serial);\n    accelemeter.init();\n}\n\n \nvoid loop() {\n\n    float ax, ay, az;\n    accelemeter.getAcceleration(&ax, &ay, &az);\n\n    Serial.print(ax * CONVERT_G_TO_MS2,4);\n    Serial.print('\\t');\n    Serial.print(ay * CONVERT_G_TO_MS2,4);\n    Serial.print('\\t');\n    Serial.println(az * CONVERT_G_TO_MS2,4);\n    \n}\n\n")),(0,r.yg)("p",null,"After uploading the code and unplugging Seeed Studio XIAO RP2040 .\nThen , open the serial monitor  you will see the output like this:"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_serial_monitor.jpg",alt:"pir",width:400,height:"auto"})),(0,r.yg)("p",null,"If all is fine, we can move on and connect Seeed Studio XIAO RP2040 to Edge Impulse."),(0,r.yg)("h2",{id:"connected-with-edge-impulse"},"Connected with Edge Impulse"),(0,r.yg)("p",null,"The precision of the training model is very important to the final result. If your output training results are as low as less than 65%, we highly recommand you train for more times or add more data ."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 1.")," Create a new project in ",(0,r.yg)("a",{parentName:"li",href:"https://studio.edgeimpulse.com/"},"Edge Impulse"))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/01.jpg",alt:"pir",width:800,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 2."),' Choose "Accelerometer data" and click "Let\u2019s get started!"')),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/02.jpg",alt:"pir",width:800,height:"auto"})),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/03.jpg",alt:"pir",width:800,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 3.")," Install ",(0,r.yg)("a",{parentName:"p",href:"https://docs.edgeimpulse.com/docs/cli-installation"},"Edge Impulse CLI")," in your computer.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 4.")," Run the command in your ",(0,r.yg)("inlineCode",{parentName:"p"},"terminal")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"cmd")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"powershell")," to start it."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo edge-impulse-data-forwarder\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 5.")," We need to use the CLI to connect the Seeed Studio XIAO RP2040 with Edge Impulse. First, login your account and choose your project")),(0,r.yg)("p",null,"Name the accelerometer and the device."),(0,r.yg)("p",null,'Move back to Edge Impulse "Data acquisition" page, the outcome should be like this if the connection is successful. You can find the Device of "XIAO RP2040" is shown on the right of the page.'),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/04.jpg",alt:"pir",width:800,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 6."),'  Select the sensor as "3 axes". Name your label as ',(0,r.yg)("inlineCode",{parentName:"li"},"up")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"down"),", modify Sample length (ms.) to 20000 and click start sampling.")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/05.jpg",alt:"pir",width:800,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 7.")," Swing the ",(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/XIAO-RP2040/"},"Seeed Studio XIAO RP2040")," up and down and keep the motion for 20 seconds. You can find the acquistion is shown up like this:")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/06.jpg",alt:"pir",width:800,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 8."),' Split the data by clicking the raw data right top and choose "Split Sample". Click +Add Segment and then click the graph. Repeat it more than 20 time to add segments. Click Split and you will see the the sample data each for 1 second.')),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/07.jpg",alt:"pir",width:800,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 9.")," Repeat ",(0,r.yg)("strong",{parentName:"li"},"Step 7.")," and ",(0,r.yg)("strong",{parentName:"li"},"Step 8.")," and label data with different name to click different motion data, like ",(0,r.yg)("inlineCode",{parentName:"li"},"circle")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"line")," and so on. The example provided is classifying up and down, left and right, and circle. You can change it as you may want to change here.")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"In Step 8. the split time is 1 second which means you at least do one swing of up and down in one second in Step 7. Otherwise, the results will not be accurate. Meanwhile, you can adjust the split time according to your own motion speed.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 10.")," Create Impulse")),(0,r.yg)("p",null,"Click ",(0,r.yg)("strong",{parentName:"p"},"Create impulse")," -> Add a processing block -> Choose ",(0,r.yg)("strong",{parentName:"p"},"Spectral Analysis")," -> Add a learning block -> Choose ",(0,r.yg)("strong",{parentName:"p"},"Classification (Keras)")," -> Save Impulse"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/08.jpg",alt:"pir",width:800,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 11.")," Spectral features")),(0,r.yg)("p",null,"Click and Set up"),(0,r.yg)("p",null,"Click ",(0,r.yg)("strong",{parentName:"p"},"Spectral features")," -> Drop down page to click Save parameters -> Click ",(0,r.yg)("strong",{parentName:"p"},"Generate features")),(0,r.yg)("p",null,"The output page should be like:"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/09.jpg",alt:"pir",width:800,height:"auto"})),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/10.jpg",alt:"pir",width:800,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 12.")," Training your model")),(0,r.yg)("p",null,"Click NN Classifier -> Click Start training -> Choose Unoptimized (float32)"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/11.jpg",alt:"pir",width:800,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 13.")," Model testing")),(0,r.yg)("p",null,"Click Model testing -> Click Classify all"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"If your accuracy is low, you can check you dataset by increasing the  training set and extending the sample time")),(0,r.yg)("p",null,"We are also able to get the evaluation when downloading the model"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/12.jpg",alt:"pir",width:800,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 14.")," Build Arduino library")),(0,r.yg)("p",null,"Click Deployment -> Click Arduino Library -> Click ",(0,r.yg)("strong",{parentName:"p"},"Build")," -> Download the .ZIP file"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/13.jpg",alt:"pir",width:800,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 15."),' The name of .ZIP file is very important, it is set up as your name of the Edge Impulse project by default. Like here the project of the name is "RP2040". Select the file as ""Add the ".ZIP file" to your Arduino libraries')),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/14.jpg",alt:"pir",width:800,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 16.")," Open Arduino -> Click Sketch -> Click ",(0,r.yg)("strong",{parentName:"li"},"Include Library")," ->\n",(0,r.yg)("strong",{parentName:"li"},"ADD .ZIP Library"))),(0,r.yg)("p",null,"Copy the code below, if the project name on edgeimpluse is customised, then the zip archive text will be the same name. You can change the first line of the include to your header file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},'#include <XIAO_RP2040_inferencing.h> // customed name need change this header file to your own file name\n#include <Wire.h>\n#include "MMA7660.h"\nMMA7660 accelemeter;\n\n#define CONVERT_G_TO_MS2    9.80665f\n#define MAX_ACCEPTED_RANGE  2.0f         \n\nstatic bool debug_nn = false; \n\nvoid setup()\n{\n    Serial.begin(115200);\n    while (!Serial);\n    Serial.println("Edge Impulse Inferencing Demo");\n    accelemeter.init();\n}\n\nfloat ei_get_sign(float number) {\n    return (number >= 0.0) ? 1.0 : -1.0;\n}\n\nvoid loop()\n{\n    ei_printf("\\nStarting inferencing in 2 seconds...\\n");\n\n    delay(2000);\n\n    ei_printf("Sampling...\\n");\n\n    // Allocate a buffer here for the values we\'ll read from the IMU\n    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };\n\n    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {\n        // Determine the next tick (and then sleep later)\n        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);\n        accelemeter.getAcceleration(&buffer[ix], &buffer[ix + 1], &buffer[ix + 2]);\n\n        for (int i = 0; i < 3; i++) {\n            if (fabs(buffer[ix + i]) > MAX_ACCEPTED_RANGE) {\n                buffer[ix + i] = ei_get_sign(buffer[ix + i]) * MAX_ACCEPTED_RANGE;\n            }\n        }\n\n        buffer[ix + 0] *= CONVERT_G_TO_MS2;\n        buffer[ix + 1] *= CONVERT_G_TO_MS2;\n        buffer[ix + 2] *= CONVERT_G_TO_MS2;\n\n        delayMicroseconds(next_tick - micros());\n    }\n\n    // Turn the raw buffer in a signal which we can the classify\n    signal_t signal;\n    int err = numpy::signal_from_buffer(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, &signal);\n    if (err != 0) {\n        ei_printf("Failed to create signal from buffer (%d)\\n", err);\n        return;\n    }\n\n    // Run the classifier\n    ei_impulse_result_t result = { 0 };\n\n    err = run_classifier(&signal, &result, debug_nn);\n    if (err != EI_IMPULSE_OK) {\n        ei_printf("ERR: Failed to run classifier (%d)\\n", err);\n        return;\n    }\n\n    // print the predictions\n    ei_printf("Predictions ");\n    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",\n        result.timing.dsp, result.timing.classification, result.timing.anomaly);\n    ei_printf(": \\n");\n    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {\n        ei_printf("    %s: %.5f\\n", result.classification[ix].label, result.classification[ix].value);\n    }\n#if EI_CLASSIFIER_HAS_ANOMALY == 1\n    ei_printf("    anomaly score: %.3f\\n", result.anomaly);\n#endif\n\n}\n\n')),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/15.jpg",alt:"pir",width:800,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 17.")," Move or hold the Seeed Studio XIAO RP2040 and check the results:")),(0,r.yg)("p",null,"Click the monitor on the top right corner of Arduino."),(0,r.yg)("p",null,"When you move the Seeed Studio XIAO RP2040 in the ",(0,r.yg)("strong",{parentName:"p"},"circle and line")," direction:"),(0,r.yg)("p",null,"The monitor will output something like:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"15:45:45.434 -> \n15:45:45.434 -> Starting inferencing in 2 seconds...\n15:45:47.414 -> Sampling...\n15:45:48.439 -> Predictions (DSP: 6 ms., Classification: 1 ms., Anomaly: 0 ms.): \n15:45:48.439 ->     Circle: 0.59766\n15:45:48.439 ->     line: 0.40234\n15:45:48.439 -> \n")),(0,r.yg)("p",null,"Congratulation! You acheve the end of the project. It is encouraged that you can try more directions and check which one will perform the best output."),(0,r.yg)("h2",{id:"resources"},"Resources"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/XIAO-RP2040/"},"Seeed Studio XIAO RP2040")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation"},"Edge Impluse CLI"))),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);