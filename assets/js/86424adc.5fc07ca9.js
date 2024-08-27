"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[64701],{15680:(e,t,a)=>{a.d(t,{xA:()=>l,yg:()=>m});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(a),u=i,m=h["".concat(d,".").concat(u)]||h[u]||p[u]||o;return a?n.createElement(m,r(r({ref:t},l),{},{components:a})):n.createElement(m,r({ref:t},l))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[h]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},329:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(9668),i=(a(96540),a(15680));const o={description:"Get_Started_with_EcoEye\u2013Embedded_Vision_Camera",title:"Get Started with EcoEye\u2013Embedded Vision Camera",keywords:["EcoEye\u2013Embedded_Vision_Camera"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Get_Started_with_EcoEye_Embedded_Vision_Camera",last_update:{date:"11/24/2023",author:"Yvonne"}},r="EcoEye\u2013Embedded_Vision_Camera Introduction",s={unversionedId:"Sensor/Beyond_Grove/EcoEye_Embedded_Vison_Camera/Get_Started_with_EcoEye",id:"Sensor/Beyond_Grove/EcoEye_Embedded_Vison_Camera/Get_Started_with_EcoEye",title:"Get Started with EcoEye\u2013Embedded Vision Camera",description:"Get_Started_with_EcoEye\u2013Embedded_Vision_Camera",source:"@site/docs/Sensor/Beyond_Grove/EcoEye_Embedded_Vison_Camera/Get_Started_with_EcoEye.md",sourceDirName:"Sensor/Beyond_Grove/EcoEye_Embedded_Vison_Camera",slug:"/Get_Started_with_EcoEye_Embedded_Vision_Camera",permalink:"/Get_Started_with_EcoEye_Embedded_Vision_Camera",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Beyond_Grove/EcoEye_Embedded_Vison_Camera/Get_Started_with_EcoEye.md",tags:[],version:"current",lastUpdatedBy:"Yvonne",lastUpdatedAt:1700784e3,formattedLastUpdatedAt:"Nov 24, 2023",frontMatter:{description:"Get_Started_with_EcoEye\u2013Embedded_Vision_Camera",title:"Get Started with EcoEye\u2013Embedded Vision Camera",keywords:["EcoEye\u2013Embedded_Vision_Camera"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Get_Started_with_EcoEye_Embedded_Vision_Camera",last_update:{date:"11/24/2023",author:"Yvonne"}},sidebar:"ProductSidebar",previous:{title:"Wireless Sensor Node - Solar Kit",permalink:"/Wireless_Sensor_Node-Solar_Kit"},next:{title:"Essentials Introduction",permalink:"/Essentials"}},d={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Preparing the Hardware",id:"preparing-the-hardware",level:3},{value:"Preparing the Software",id:"preparing-the-software",level:3},{value:"Create your first object detection application",id:"create-your-first-object-detection-application",level:3},{value:"Collecting data",id:"collecting-data",level:4},{value:"Training the model",id:"training-the-model",level:4},{value:"Running the model",id:"running-the-model",level:4},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],l={toc:c},h="wrapper";function p(e){let{components:t,...a}=e;return(0,i.yg)(h,(0,n.A)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"ecoeyeembedded_vision_camera-introduction"},"EcoEye\u2013Embedded_Vision_Camera Introduction"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/1-101991121-EcoEye-%E2%80%93-Embedded-Vision-Camera-first.jpg"})),(0,i.yg)("p",null,"EcoEye is a camera with on-board machine vision capabilities encased in a portable and waterproof housing designed for remote deployments.  Based on the openMV H7 Plus Cam, it is easy to set up and flexible to numerous applications. The internal power management and control system enables long-term operation and allows the integration of solar panel, countless sensors, and other external devices. The camera is thoroughly field tested, and results published in a scientific article."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("a",{href:"https://www.seeedstudio.com/EcoEye-Embedded-Vision-Camera-p-5843.html",target:"_blank"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png",border:"0"}))),(0,i.yg)("h2",{id:"getting-started"},"Getting Started"),(0,i.yg)("p",null,"Before starting this guide and to keep it simple, please get familiar with the hardware and software of the ecoEye described in the ",(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/101991121/EcoEye%20User%20Manual.pdf"},"User Guide"),". "),(0,i.yg)("h3",{id:"preparing-the-hardware"},"Preparing the Hardware"),(0,i.yg)("p",null,"Open the ecoEye camera and insert 3 equally charged lithium-ion 18650 batteries with the same capacity in the designated compartment while respecting the polarity markings. On the openMV board, install a formatted micro-SD card with at least 8GB storage capacity.  "),(0,i.yg)("h3",{id:"preparing-the-software"},"Preparing the Software"),(0,i.yg)("p",null,"Download and install the ",(0,i.yg)("a",{parentName:"p",href:"https://openmv.io/pages/download"},"openMV IDE")," to your computer. Open the software and plug the USB-A to USB-C cable between the computer and the external connector on the ecoEye camera. After pressing the push button once, the LED on the front side should flash green a few times before shining white for half a second. Now, the computer should recognize the device card and open a window with the content on the SD card.  You can now copy all the script files found ",(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/101991121/ecoEye%20scripts.zip"},"here"),". At the same time, a USB logo should have appeared next to the plug symbol in the bottom left corner of the IDE interface. Click this button to establish the connection with the camera. If prompted to update the firmware, click yes and go through the steps to do so.  "),(0,i.yg)("p",null,"Open the ecomain.py code and run it by pressing the green play button in the bottom left corner. Sometimes an OSError will occur. Just ignore it and try again. The camera is now running in continuous mode without saving any images but displaying them on the IDE frame buffer. By changing the MODE parameter to 2 and running the script again, the camera will save all the capture images. "),(0,i.yg)("p",null,"To allow the camera to run without necessarily being connected to the computer and IDE, the ecomain.py script with adjusted parameters to achieve the desired application must be renamed as main.py, still located on the root of the SD card. This can also be done by navigating to Tools > Save open script to OpenMV Cam (as main.py) in the tabs of the openMV IDE while still connected with the camera. "),(0,i.yg)("p",null,"When starting a deployment without connection to the IDE, the user must press the push button once to turn on the system, and once again when the front LED shines blue to confirm the start of a run. Similarly, to turn stop a deployment and turn the system off, the user must press the push button a first time and then again when the light blue LED turns on (which can take a few seconds). A long press on the push button will force turn off the system but is not recommended if not necessary. "),(0,i.yg)("h3",{id:"create-your-first-object-detection-application"},"Create your first object detection application"),(0,i.yg)("p",null,"For this step-by-step guide, we will collect data using the ecoEye camera, train a model by manually identifying objects in the dataset using edge impulse, and finally run the create model on the camera while observing the results."),(0,i.yg)("h4",{id:"collecting-data"},"Collecting data"),(0,i.yg)("p",null,"Place the camera in front of a flat monocolour surface such as a wall, a white board or even facing down on the table. Connect it to the IDE and run MODE 0 to see the captured images. If necessary, re-position the camera so that o foreign objects appear in front of the background. While looking at the live image on the frame buffer, carefully adjust the focus by turning the lens. Once the perfect focus found, stop the script and gather 2 or 3 different type of objects that you would like to classify.\nNow, change the MODE parameter to 2 and run the script again. The images shown in the frame buffer are also saved onto the SD card. While leaving the script running place the objects in front of the camera in different positions, places and in different combinations. Once gathered around 100 good images, stop the script and reset the openMV cam (in Tools > Reset) to see the folder with all the saved images."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture1.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture2.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("h4",{id:"training-the-model"},"Training the model"),(0,i.yg)("p",null,"After selecting about 100 images for the model, log into your ",(0,i.yg)("a",{parentName:"p",href:"https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fprofile%2Fprojects&err=Your%20session%20expired%2C%20please%20log%20in%20again"},"Edge Impulse")," account and create a new project. In Data Acquisition from the left menu, upload the selected images as a dataset. Now, each individual image in both the training and test datasets must be labelled manually by clicking the three dots next to the image and selecting Edit labels. Make sure to always use the same names for each type of object which can be check with the filter button. "),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture3.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",null,"Next, navigate to Create impulse in the left menu. Add a processing block type Image and a learning block type Object Detection (Images) and save the impulse. After that, greyed Images and Object detection labels should have appeared in the left menu under Impulse Design. In the new Images tab, leave everything as is, simply click the Save parameters and Generate features buttons. After this process is done, the model can be trained in the Object detection tab leaving the parameters by default for now."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture4.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",null,"To test the performance of the new model, go to the Model testing tab in the left Menu and click Classify all.  This will run the object detection model on the test dataset that was labelled in the beginning but was not used for training and is therefore unseen to the model. Once done, the result will show the model accuracy and the wrongly classified objects. If the final score is not satisfying, either the image dataset can be improved, or the training parameters tweaked."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture5.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",null,"To export the model for the ecoEye camera, navigate to the Deployment tab in the left menu. Search and select the openMV Library before hitting Build. From the automatically downloaded zip file, extract the files and copy the labels.txt and trained.tflite files to the SD card."),(0,i.yg)("h4",{id:"running-the-model"},"Running the model"),(0,i.yg)("p",null,"We can now run the camera with automatic object classification using the trained model. In the ecomain.py file, change the parameters MODE = 1, sensor_windowing = True, classify_mode = \u201cobjects\u201d and indicators = True. Run the script while paying attention to press the push button when the blue LED turns on or the serial terminal prints out \u2018Waiting for second button press...\u2019. The frame buffer should now show the captured images with bounding boxes around an object whenever the model detects one of the objects it was trained on. These images are also saved on the SD card and the detections with the coordinates of the bounding boxes are saved in a csv file."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture6.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture7.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture8.png",alt:"pir",width:800,height:"auto"})),(0,i.yg)("p",null,"This application can also be produced without connection to the IDE by just renaming the ecomain.py to main.py, disconnecting the cable and starting the script with the two-push button procedure."),(0,i.yg)("h2",{id:"resources"},"Resources"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[PDF]")," ",(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/101991121/EcoEye%20-%20Embedded%20Vision%20Camera%20datasheet.pdf"},"EcoEye \u2013 Embedded Vision Camera Datasheet"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[PDF]")," ",(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/101991121/EcoEye%20User%20Manual.pdf"},"EcoEye \u2013 Embedded Vision Camera User Manual"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[CODE]")," ",(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/101991121/ecoEye%20scripts.zip"},"EcoEye \u2013 Embedded Vision Camera User Manual")))),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);