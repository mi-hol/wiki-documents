"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[54361],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),g=i,h=u["".concat(s,".").concat(g)]||u[g]||p[g]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},10035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(9668),i=(n(96540),n(15680));const o={description:"Continuous Motion Recognition",title:"Continuous Motion Recognition",keywords:["Wio_terminal","Embedded_ML","Projects_based_Edge_Impulse"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-TinyML-EI-2",last_update:{date:"1/30/2023",author:"jianjing Huang"}},r="Wio Terminal Edge Impulse Continuous Motion Recognition with Built-in Accelerometer",l={unversionedId:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-2",id:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-2",title:"Continuous Motion Recognition",description:"Continuous Motion Recognition",source:"@site/docs/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-2.md",sourceDirName:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse",slug:"/Wio-Terminal-TinyML-EI-2",permalink:"/Wio-Terminal-TinyML-EI-2",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-2.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675036800,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{description:"Continuous Motion Recognition",title:"Continuous Motion Recognition",keywords:["Wio_terminal","Embedded_ML","Projects_based_Edge_Impulse"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-TinyML-EI-2",last_update:{date:"1/30/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Edge Impulse Getting Started",permalink:"/Wio-Terminal-TinyML-EI-1"},next:{title:"Audio scene recognition",permalink:"/Wio-Terminal-TinyML-EI-3"}},s={},d=[{value:"1. Prerequisites",id:"1-prerequisites",level:2},{value:"2. Collecting your first data",id:"2-collecting-your-first-data",level:2},{value:"3. Designing an impulse",id:"3-designing-an-impulse",level:2},{value:"Configuring the spectral analysis block",id:"configuring-the-spectral-analysis-block",level:3},{value:"Configuring the neural network",id:"configuring-the-neural-network",level:3},{value:"4. Classifying new data",id:"4-classifying-new-data",level:2},{value:"5. Anomaly detection",id:"5-anomaly-detection",level:2},{value:"6. Deploying back to device",id:"6-deploying-back-to-device",level:2},{value:"7. Conclusion",id:"7-conclusion",level:2},{value:"Reference",id:"reference",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"wio-terminal-edge-impulse-continuous-motion-recognition-with-built-in-accelerometer"},"Wio Terminal Edge Impulse Continuous Motion Recognition with Built-in Accelerometer"),(0,i.yg)("p",null,"In this tutorial, you'll use machine learning to build a gesture recognition system that runs on Wio Terminal. This is a hard task to solve using rule based programming, as people don't perform gestures in the exact same way every time. But machine learning can handle these variations with ease. You'll learn how to collect high-frequency data from real sensors, use signal processing to clean up data, build a neural network classifier, and how to deploy your model back to a device. At the end of this tutorial you'll have a firm understanding of applying machine learning in embedded devices using Edge Impulse."),(0,i.yg)("p",null,"There is also a video version of this tutorial:"),(0,i.yg)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/FseGCn-oBA0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.yg)("h2",{id:"1-prerequisites"},"1. Prerequisites"),(0,i.yg)("p",null,"For this tutorial you'll need a supported device. Follow ",(0,i.yg)("a",{parentName:"p",href:"http://wiki.seeedstudio.com/Wio-Terminal-Edge-Impulse"},(0,i.yg)("strong",{parentName:"a"},"Wio Terminal Edge Impulse"))," tutorial fist before the followings."),(0,i.yg)("p",null,"Apart from ",(0,i.yg)("strong",{parentName:"p"},"Wio Terminal"),", here are other supported devices."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.edgeimpulse.com/docs/unboxing-the-st-b-l475e-iot01a"},"ST B-L475E-IOT01A")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.edgeimpulse.com/docs/arduino-nano-33-ble-sense"},"Arduino Nano 33 BLE Sense")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.edgeimpulse.com/docs/eta-compute-ecm3532-ai-sensor"},"Eta Compute ECM3532 AI Sensor")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.edgeimpulse.com/docs/using-your-mobile-phone"},"Any mobile phone"))),(0,i.yg)("p",null,"If your device is connected under Devices in the studio you can proceed:"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/device.png"})),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Edge Impulse can ingest data from any device - including embedded devices that you already have in production. See the documentation for the ",(0,i.yg)("a",{parentName:"p",href:"https://docs.edgeimpulse.com/reference-link/ingestion-api"},"Ingestion service")," for more information.")),(0,i.yg)("h2",{id:"2-collecting-your-first-data"},"2. Collecting your first data"),(0,i.yg)("p",null,"With your device connected we can collect some data. In the studio go to the ",(0,i.yg)("strong",{parentName:"p"},"Data acquisition")," tab. This is the place where all your raw data is stored, and - if your device is connected to the remote management API - where you can start sampling new data."),(0,i.yg)("p",null,"Under ",(0,i.yg)("strong",{parentName:"p"},"Record new data"),", select your device, set the label to ",(0,i.yg)("inlineCode",{parentName:"p"},"idle"),", the sample length to ",(0,i.yg)("inlineCode",{parentName:"p"},"5000"),", the sensor to ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Built-in accelerometer"))," and the frequency to ",(0,i.yg)("inlineCode",{parentName:"p"},"62.5Hz"),". This indicates that you want to record data for 10 seconds, and label the recorded data as ",(0,i.yg)("inlineCode",{parentName:"p"},"idle"),". You can later edit these labels if needed."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/record.png"})),(0,i.yg)("p",null,"After you click Start sampling move your device up and down in a continuous motion. In about twelve seconds the device should complete sampling and upload the file back to Edge Impulse. You see a new line appear under 'Collected data' in the studio. When you click it you now see the raw data graphed out. As the accelerometer on the development board has three axes you'll notice three different lines, one for each axis."),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"It's important to do continuous movements as we'll later slice up the data in smaller windows.")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/data.png"})),(0,i.yg)("p",null,"Machine learning works best with lots of data, so a single sample won't cut it. Now is the time to start building your own dataset. For example, use the following three classes, and record around 3 minutes of data per class:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Idle - just sitting on your desk while you're working."),(0,i.yg)("li",{parentName:"ul"},"Wave - waving the device from left to right."),(0,i.yg)("li",{parentName:"ul"},"Circle - drawing circles.")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Make sure to perform variations on the motions. E.g. do both slow and fast movements and vary the orientation of the board. You'll never know how your user will use the device. It's best to collect samples of ~10 seconds each.")),(0,i.yg)("h2",{id:"3-designing-an-impulse"},"3. Designing an impulse"),(0,i.yg)("p",null,"With the training set in place you can design an impulse. An impulse takes the raw data, slices it up in smaller windows, uses signal processing blocks to extract features, and then uses a learning block to classify new data. Signal processing blocks always return the same values for the same input and are used to make raw data easier to process, while learning blocks learn from past experiences."),(0,i.yg)("p",null,"For this tutorial we'll use the 'Spectral analysis' signal processing block. This block applies a filter, performs spectral analysis on the signal, and extracts frequency and spectral power data. Then we'll use a 'Neural Network' learning block, that takes these spectral features and learns to distinguish between the three (idle, circle, wave) classes."),(0,i.yg)("p",null,"In the studio go to ",(0,i.yg)("strong",{parentName:"p"},"Create impulse"),", set the window size to ",(0,i.yg)("inlineCode",{parentName:"p"},"2000")," (you can click on the ",(0,i.yg)("inlineCode",{parentName:"p"},"2000 ms"),". text to enter an exact value), the window increase to ",(0,i.yg)("inlineCode",{parentName:"p"},"80"),", and add the ",(0,i.yg)("inlineCode",{parentName:"p"},"Spectral Analysis")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Neural Network (Keras)")," blocks. Then click ",(0,i.yg)("strong",{parentName:"p"},"Save impulse"),"."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/impulse-motion.png"})),(0,i.yg)("h3",{id:"configuring-the-spectral-analysis-block"},"Configuring the spectral analysis block"),(0,i.yg)("p",null,"To configure your signal processing block, click ",(0,i.yg)("strong",{parentName:"p"},"Spectral features")," in the menu on the left. This will show you the raw data on top of the screen (you can select other files via the drop down menu), and the results of the signal processing through graphs on the right. For the spectral features block you'll see the following graphs:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"After filter - the signal after applying a low-pass filter. This will remove noise."),(0,i.yg)("li",{parentName:"ul"},"Frequency domain - the frequency at which signal is repeating (e.g. making one wave movement per second will show a peak at 1 Hz)."),(0,i.yg)("li",{parentName:"ul"},"Spectral power - the amount of power that went into the signal at each frequency.")),(0,i.yg)("p",null,"A good signal processing block will yield similar results for similar data. If you move the sliding window (on the raw data graph) around, the graphs should remain similar. Also, when you switch to another file with the same label, you should see similar graphs, even if the orientation of the device was different."),(0,i.yg)("p",null,"Once you're happy with the result, click ",(0,i.yg)("strong",{parentName:"p"},"Save parameters"),". This will send you to the ",(0,i.yg)("inlineCode",{parentName:"p"},"Feature generation")," screen. In here you'll:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Split all raw data up in windows (based on the window size and the window increase)."),(0,i.yg)("li",{parentName:"ol"},"Apply the spectral features block on all these windows.")),(0,i.yg)("p",null,"Click ",(0,i.yg)("strong",{parentName:"p"},"Generate features")," to start the process."),(0,i.yg)("p",null,"Afterwards the ",(0,i.yg)("inlineCode",{parentName:"p"},"Feature explorer")," will load. This is a plot of all the extracted features against all the generated windows. You can use this graph to compare your complete data set. E.g. by plotting the height of the first peak on the X-axis against the spectral power between 0.5 Hz and 1 Hz on the Y-axis. A good rule of thumb is that if you can visually separate the data on a number of axes, then the machine learning model will be able to do so as well."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/features-motion.png"})),(0,i.yg)("h3",{id:"configuring-the-neural-network"},"Configuring the neural network"),(0,i.yg)("p",null,"With all data processed it's time to start training a neural network. Neural networks are a set of algorithms, modeled loosely after the human brain, that are designed to recognize patterns. The network that we're training here will take the signal processing data as an input, and try to map this to one of the three classes."),(0,i.yg)("p",null,"So how does a neural network know what to predict? A neural network consists of layers of neurons, all interconnected, and each connection has a weight. One such neuron in the input layer would be the height of the first peak of the X-axis (from the signal processing block); and one such neuron in the output layer would be wave (one the classes). When defining the neural network all these connections are intialized randomly, and thus the neural network will make random predictions. During training we then take all the raw data, ask the network to make a prediction, and then make tiny alterations to the weights depending on the outcome (this is why labeling raw data is important)."),(0,i.yg)("p",null,"This way, after a lot of iterations, the neural network learns; and will eventually become much better at predicting new data. Let's try this out by clicking on ",(0,i.yg)("strong",{parentName:"p"},"NN Classifier")," in the menu."),(0,i.yg)("p",null,"Set ",(0,i.yg)("inlineCode",{parentName:"p"},"Number of training cycles")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"1"),".. This will limit training to a single iteration. And then click Start training."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/perf-motion.png"})),(0,i.yg)("p",null,"Now change ",(0,i.yg)("inlineCode",{parentName:"p"},"Number of training cycles")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"2")," and you'll see performance go up. Finally, change ",(0,i.yg)("inlineCode",{parentName:"p"},"Number of training cycles")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"100")," or more and let training finish. You've just trained your first neural network!"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/perf-2.png"})),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"You might end up with a 100% accuracy after training for 100 training cycles. This is not necessarily a good thing, as it might be a sign that the neural network is too tuned for the specific test set and might perform poorly on new data (overfitting). The best way to reduce this is by adding more data or ",(0,i.yg)("a",{parentName:"p",href:"https://docs.edgeimpulse.com/docs/reducing-the-learning-rate"},"reducing the learning rate"),".")),(0,i.yg)("h2",{id:"4-classifying-new-data"},"4. Classifying new data"),(0,i.yg)("p",null,"From the statistics in the previous step we know that the model works against our training data, but how well would the network perform on new data? Click on Live classification in the menu to find out. Your device should (just like in step 2) show as online under ",(0,i.yg)("inlineCode",{parentName:"p"},"Classify new data"),". Set the ",(0,i.yg)("inlineCode",{parentName:"p"},"Sample length")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"5000")," (5 seconds), click ",(0,i.yg)("strong",{parentName:"p"},"Start sampling")," and start doing movements. Afterwards you'll get a full report on what the network thought that you did."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/test.png"})),(0,i.yg)("p",null,"If the network performed great, fantastic! But what if it performed poorly? There could be a variety of reasons, but the most common ones are:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"There is not enough data. Neural networks need to learn patterns in data sets, and the more data the better."),(0,i.yg)("li",{parentName:"ol"},"The data does not look like other data the network has seen before. This is common when someone uses the device in a way that you didn't add to the test set. You can add the current file to the test set by clicking, then selecting ",(0,i.yg)("strong",{parentName:"li"},"Move to training set"),". Make sure to update the label under ",(0,i.yg)("inlineCode",{parentName:"li"},"Data acquisition")," before training."),(0,i.yg)("li",{parentName:"ol"},"The model has not been trained enough. Up the number of epochs to ",(0,i.yg)("inlineCode",{parentName:"li"},"200")," and see if performance increases (the classified file is stored, and you can load it through ",(0,i.yg)("inlineCode",{parentName:"li"},"Classify existing validation sample"),")."),(0,i.yg)("li",{parentName:"ol"},"The model is overfitting and thus performs poorly on new data. Try reducing the learning rate or add more data."),(0,i.yg)("li",{parentName:"ol"},"The neural network architecture is not a great fit for your data. Play with the number of layers and neurons and see if performance improves.")),(0,i.yg)("p",null,"As you see there is still a lot of trial and error when building neural networks, but we hope the visualizations help a lot. You can also run the network against the complete validation set through ",(0,i.yg)("inlineCode",{parentName:"p"},"Model validation"),". Think of the model validation page as a set of unit tests for your model!"),(0,i.yg)("p",null,"With a working model in place we can look at places where our current impulse performs poorly..."),(0,i.yg)("h2",{id:"5-anomaly-detection"},"5. Anomaly detection"),(0,i.yg)("p",null,"Neural networks are great, but they have one big flaw. They're terrible at dealing with data they have never seen before (like a new gesture). Neural networks cannot judge this, as they are only aware of the training data. If you give it something unlike anything it has seen before it'll still classify as one of the three classes."),(0,i.yg)("p",null,"Let's look at how this works in practice. Go to ",(0,i.yg)("inlineCode",{parentName:"p"},"Live classification")," and record some new data, but now vividly shake your device. Take a look and see how the network will predict something regardless."),(0,i.yg)("p",null,"So... how can we do better? If you look at the feature explorer on the accX RMS, accY RMS and accZ RMS axes, you should be able to visually separate the classified data from the training data. We can use this to our advantage by training a new (second) network that creates clusters around data that we have seen before, and compares incoming data against these clusters. If the distance from a cluster is too large you can flag the sample as an anomaly, and not trust the neural network."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/ano.png"})),(0,i.yg)("p",null,"To add this block go to ",(0,i.yg)("strong",{parentName:"p"},"Create impulse"),", click ",(0,i.yg)("strong",{parentName:"p"},"Add learning block"),", and select ",(0,i.yg)("inlineCode",{parentName:"p"},"K-means Anomaly Detection"),". Then click ",(0,i.yg)("strong",{parentName:"p"},"Save impulse"),"."),(0,i.yg)("p",null,"To configure the clustering model click on ",(0,i.yg)("strong",{parentName:"p"},"Anomaly detection")," in the menu. Here we need to specify:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The number of clusters. Here use ",(0,i.yg)("inlineCode",{parentName:"li"},"32"),"."),(0,i.yg)("li",{parentName:"ul"},"The axes that we want to select during clustering. As we can visually separate the data on the accX RMS, accY RMS and accZ RMS axes, select those.")),(0,i.yg)("p",null,"Click ",(0,i.yg)("strong",{parentName:"p"},"Start training")," to generate the clusters. You can load existing validation samples into the anomaly explorer with the dropdown menu."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/ano-2.png"})),(0,i.yg)("p",null,"Known clusters in blue, the shake data in orange. It's clearly outside of any known clusters and can thus be tagged as an anomaly."),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"The anomaly explorer only plots two axes at the same time. Under ",(0,i.yg)("inlineCode",{parentName:"p"},"average axis distance")," you see how far away from each axis the validation sample is. Use the dropdown menu's to change axes.")),(0,i.yg)("h2",{id:"6-deploying-back-to-device"},"6. Deploying back to device"),(0,i.yg)("p",null,"With the impulse designed, trained and verified you can deploy this model back to your device. This makes the model run without an internet connection, minimizes latency, and runs with minimum power consumption. Edge Impulse can package up the complete impulse - including the signal processing code, neural network weights, and classification code - up in a single C++ library that you can include in your embedded software."),(0,i.yg)("p",null,"After clicking on Deployment tab, choose Arduino library and download it. Extract the archive and place it in your Arduino libraries folder. Open Arduino IDE and choose Examples-> name of your project Inferencing Edge Impulse - > nano_ble33_sense_accelerometer sketch. Our board is similar to Arduino Nano BLE33 Sense, but uses different accelerometer (LIS3DHTR instead of LSM9DS1), so we will need to change the data acquisition section accordingly. Also, since Wio Terminal has an LCD screen, we're going to display name of the detected class if this class confidence value is above threshold.\nFirst change the header"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"#include <Arduino_LSM9DS1.h>\n")),(0,i.yg)("p",null,"to"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'#include"LIS3DHTR.h"\n#include"TFT_eSPI.h"\nLIS3DHTR<TwoWire> lis;\nTFT_eSPI tft;\n')),(0,i.yg)("p",null,"Then change initialization in setup function"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'    if (!IMU.begin()) {\n        ei_printf("Failed to initialize IMU!\\r\\n");\n    }\n    else {\n        ei_printf("IMU initialized\\r\\n");\n    }\n')),(0,i.yg)("p",null,"to"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'    tft.begin();\n    tft.setRotation(3);\n    tft.fillScreen(TFT_WHITE);\n\n lis.begin(Wire1);\n    \n    if (!lis.available()) {\n    Serial.println("Failed to initialize IMU!");\n    while (1);\n    }\n    else {\n        ei_printf("IMU initialized\\r\\n");\n    }\n    lis.setOutputDataRate(LIS3DHTR_DATARATE_100HZ); // Setting output data rage to 25Hz, can be set up tp 5kHz \n    lis.setFullScaleRange(LIS3DHTR_RANGE_16G); // Setting scale range to 2g, select from 2,4,8,16g\n')),(0,i.yg)("p",null,"We do data collection and inference within loop function, here is where we need to change data acquisition with LSM9DS1 to data acquisition function for LIS3DHTR"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"IMU.readAcceleration(buffer[ix], buffer[ix + 1], buffer[ix + 2]);\n")),(0,i.yg)("p",null,"to"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"lis.getAcceleration(&buffer[ix], &buffer[ix + 1], &buffer[ix + 2]);\n")),(0,i.yg)("p",null,"And then to display the class name on the LCD screen, after"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'#if EI_CLASSIFIER_HAS_ANOMALY == 1\n    ei_printf("    anomaly score: %.3f\\n", result.anomaly);\n#endif\n')),(0,i.yg)("p",null,"add the following code block, in which we check confidence values of every class and if one of them is higher than threshold, change the color of the screen and display that classes name."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'   if (result.classification[1].value > 0.7) {\n    tft.fillScreen(TFT_PURPLE);\n    tft.setFreeFont(&FreeSansBoldOblique12pt7b);\n    tft.drawString("Wave", 20, 80);\n    delay(1000);\n    tft.fillScreen(TFT_WHITE);\n   }\n   \n   if (result.classification[2].value > 0.7) {\n    tft.fillScreen(TFT_RED);\n    tft.setFreeFont(&FreeSansBoldOblique12pt7b);\n    tft.drawString("Circle", 20, 80);\n    delay(1000);\n    tft.fillScreen(TFT_WHITE);\n   }\n')),(0,i.yg)("p",null,"Then compile and upload - open the serial monitor and perform one the gestures! You will be able to see the inference results displayed on the Serial monitor and also on LCD screen."),(0,i.yg)("h2",{id:"7-conclusion"},"7. Conclusion"),(0,i.yg)("p",null,"Machine learning is a super interesting field: it allows you to build complex systems that learn from past experiences, automatically find patterns in sensor data, and search for anomalies without explicitly programming things out. We think there's a huge opportunity for machine learning on embedded systems. There are huge amounts of sensor data currently collected, but 99% of this data is currently discarded due to cost, bandwidth or power constraints."),(0,i.yg)("p",null,"Edge Impulse helps you unlock this data. By processing data directly on the device you no longer have to send raw data to the cloud, but can draw conclusions directly where it matters. We can't wait to see what you will build!"),(0,i.yg)("h2",{id:"reference"},"Reference"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://docs.edgeimpulse.com/docs/continuous-motion-recognition"},"Edge Impulse Continuous motion recognition"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"http://wiki.seeedstudio.com/Wio-Terminal-Edge-Impulse"},"Wio Terminal Edge Impulse Getting Started")))))}p.isMDXComponent=!0}}]);