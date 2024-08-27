"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[66892],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var i=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||g[d]||a;return n?i.createElement(m,s(s({ref:t},p),{},{components:n})):i.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:o,s[1]=r;for(var c=2;c<a;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(9668),o=(n(96540),n(15680));const a={description:"Train and deploy a custom classification model with YOLOv8",title:"Train and deploy a custom classification model with YOLOv8",keywords:["yolov8","custom classification model","classification model"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/train_and_deploy_a_custom_classification_model_with_yolov8",last_update:{date:"06/11/2024",author:"Bruno"}},s="Train and deploy a custom classification model with YOLOv8",r={unversionedId:"Edge/NVIDIA_Jetson/Application/Computer_Vision/YOLOv8_custom_classification_model",id:"Edge/NVIDIA_Jetson/Application/Computer_Vision/YOLOv8_custom_classification_model",title:"Train and deploy a custom classification model with YOLOv8",description:"Train and deploy a custom classification model with YOLOv8",source:"@site/docs/Edge/NVIDIA_Jetson/Application/Computer_Vision/YOLOv8_custom_classification_model.md",sourceDirName:"Edge/NVIDIA_Jetson/Application/Computer_Vision",slug:"/train_and_deploy_a_custom_classification_model_with_yolov8",permalink:"/train_and_deploy_a_custom_classification_model_with_yolov8",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/Application/Computer_Vision/YOLOv8_custom_classification_model.md",tags:[],version:"current",lastUpdatedBy:"Bruno",lastUpdatedAt:1718064e3,formattedLastUpdatedAt:"Jun 11, 2024",frontMatter:{description:"Train and deploy a custom classification model with YOLOv8",title:"Train and deploy a custom classification model with YOLOv8",keywords:["yolov8","custom classification model","classification model"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/train_and_deploy_a_custom_classification_model_with_yolov8",last_update:{date:"06/11/2024",author:"Bruno"}},sidebar:"ProductSidebar",previous:{title:"Deploy YOLOv8 with TensorRT",permalink:"/YOLOv8-TRT-Jetson"},next:{title:"AI NVR with Jetson Orin",permalink:"/ai_nvr_with_jetson"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Overview",id:"overview",level:2},{value:"Image Classification",id:"image-classification",level:3},{value:"Materials Requirements",id:"materials-requirements",level:2},{value:"Hardware Setup",id:"hardware-setup",level:3},{value:"Software Setup",id:"software-setup",level:3},{value:"Preparing the reComputer",id:"preparing-the-recomputer",level:2},{value:"Change boot mode",id:"change-boot-mode",level:3},{value:"Change power mode",id:"change-power-mode",level:3},{value:"Training the model",id:"training-the-model",level:2},{value:"The model",id:"the-model",level:3},{value:"Creating the environment",id:"creating-the-environment",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"YOLOv8",id:"yolov8",level:3},{value:"Install YOLOv8",id:"install-yolov8",level:4},{value:"Train",id:"train",level:3},{value:"Preparing the config file",id:"preparing-the-config-file",level:4},{value:"Exporting the model",id:"exporting-the-model",level:2},{value:"ONNX",id:"onnx",level:3},{value:"Inference",id:"inference",level:2},{value:"photo",id:"photo",level:3},{value:"Camera",id:"camera",level:3},{value:"\u2728 Contributor Project",id:"-contributor-project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"train-and-deploy-a-custom-classification-model-with-yolov8"},"Train and deploy a custom classification model with YOLOv8"),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"On this guide we will explain how to train and deploy a custom classification model with YOLOv8"),(0,o.yg)("h2",{id:"overview"},"Overview"),(0,o.yg)("p",null,"We wil create a virtual environment where we will install YOLOv8, download a classification model from roboflow, train it and deploy it."),(0,o.yg)("h3",{id:"image-classification"},"Image Classification"),(0,o.yg)("p",null,"Image classification is the simplest task of computer vision and involves classifying an image into one of predefined classes.\nWhat we get as an output is single class label and a confidence score. "),(0,o.yg)("p",null,"Image classification is useful when we don\\'t need to know the location of the object in the image and we just need to know what class the image belongs to. "),(0,o.yg)("h2",{id:"materials-requirements"},"Materials Requirements"),(0,o.yg)("h3",{id:"hardware-setup"},"Hardware Setup"),(0,o.yg)("p",null,"For this tutorial, we're going to need a Nvidia ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/reComputer-J4012-p-5586.html"},"Jetson Orin NX 16GB"),"."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png"})),(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=3d7dba9378be2accafeaff54420edb6a&objectID=5586&indexName=bazaar_retailer_products"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,o.yg)("h3",{id:"software-setup"},"Software Setup"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"JetPack 6.0 installed in the reComputer"),(0,o.yg)("li",{parentName:"ul"},"a Roboflow account to download the dataset")),(0,o.yg)("h2",{id:"preparing-the-recomputer"},"Preparing the reComputer"),(0,o.yg)("p",null,"The reComputer J4012 from Seeed Studio is a Jetson Orin NX 16GB.\nIt's a powerfull machine, but the Tegra Linux comes with a lot of things and, boots to graphical mode. Let's change that. "),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"I'm going to run the examples and programing remotly using VScode and a SSH terminal with X forwarding enable.\nX forwarding is an option with SSH that can run some graphical applications on our side of the connection, instead of the remote computer. ")),(0,o.yg)("p",null,"If you're going to connect to your reComputer with monitor, keyboard and mouse, skip the next step."),(0,o.yg)("h3",{id:"change-boot-mode"},"Change boot mode"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/1_image.png"})),"It's all good, but we aren't going to need graphics and, in idle mode, it's consuming around 1.5GB of memory.",(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/2_image.png"})),(0,o.yg)("p",null,"We're going to make it boot to the command line instead."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl set-default multi-user\n")),(0,o.yg)("p",null,"As of now, our reComputer upon boot will boot to the CLI.\nIf you want you can reboot now or just we can go into CLI with one command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl isolate multi-user\n")),(0,o.yg)("p",null,"We've now passed from using 1.5GB of memory to 700MB. Every memory byte counts when using Machine Learning."),(0,o.yg)("h3",{id:"change-power-mode"},"Change power mode"),(0,o.yg)("p",null,"By default, our reComputer should be running on level 2 - 15W .\nWhen training, or even infering a ML model, if we can run at full power, it should be better. "),(0,o.yg)("p",null,"Let's learn how to change it. "),(0,o.yg)("p",null,"In the file /etc/nvpmodel.conf, we have the power modes available."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"< POWER_MODEL ID=0 NAME=MAXN >\n< POWER_MODEL ID=1 NAME=10W >\n< POWER_MODEL ID=2 NAME=15W >\n< POWER_MODEL ID=3 NAME=25W >\n")),(0,o.yg)("p",null,"We can then use ",(0,o.yg)("em",{parentName:"p"},"sudo nvpmodel -m <#power model>")," to change the power mode. And, according to ",(0,o.yg)("a",{parentName:"p",href:"https://forums.developer.nvidia.com/t/power-mode-in-terminal/287224"},"this thread post"),", the settings are kept even after reboots.\nTo see what power level are we on now,"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"sudo nvpmodel -q\n")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/3_image.png"})),(0,o.yg)("p",null,"Let's select the max power mode for the training of our model"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"sudo nvpmodel -m 0\n")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/4_image.png"})),(0,o.yg)("p",null,"After a reboot, we can confirm that we're running full power"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/5_image.png"})),(0,o.yg)("h2",{id:"training-the-model"},"Training the model"),(0,o.yg)("p",null,"For the model training, we're going to use YOLOv8. Bellow are the steps needed to install it with CUDA support.\nWe're also going to need a ",(0,o.yg)("a",{parentName:"p",href:"https://roboflow.com/"},"roboflow")," account. "),(0,o.yg)("h3",{id:"the-model"},"The model"),(0,o.yg)("p",null,"I'm going to create a model to classify birds.\nThis is part of a project for a Smart Bird Feeder that I'm going to place at my garden and I want to know what birds are those that are feeding there. "),(0,o.yg)("p",null,"Because this is a classification task, we don't need to know the position of the bird in the photo. "),(0,o.yg)("p",null,"You can use another dataset of your choice, as long as it is a Classification dataset or model"),(0,o.yg)("p",null,"I have procured 12 classes of birds that I know live in my area and are common near me and created a ",(0,o.yg)("a",{parentName:"p",href:"https://universe.roboflow.com/bruno-santos-omqsq/bird-classification-19z7c/dataset/1"},"classification dataset")," in Roboflow."),(0,o.yg)("p",null,"The classes of birds that I'm going to try to identify are:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Barn Swallow"),(0,o.yg)("li",{parentName:"ul"},"Common Firecrest"),(0,o.yg)("li",{parentName:"ul"},"Common Nightingale"),(0,o.yg)("li",{parentName:"ul"},"Eurasian Chaffinch"),(0,o.yg)("li",{parentName:"ul"},"Eurasian Crag Martin"),(0,o.yg)("li",{parentName:"ul"},"European Goldfinch"),(0,o.yg)("li",{parentName:"ul"},"European Greenfinch"),(0,o.yg)("li",{parentName:"ul"},"European Serin"),(0,o.yg)("li",{parentName:"ul"},"House Sparrow"),(0,o.yg)("li",{parentName:"ul"},"Spanish Sparrow"),(0,o.yg)("li",{parentName:"ul"},"Western House Martin"),(0,o.yg)("li",{parentName:"ul"},"white Wagtail")),(0,o.yg)("p",null,'Choose your dataset and download it from roboflow.\nOnce you\'ve selected your dataset, select "Download Dataset". - You need an account for that. '),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/7_image.png"})),(0,o.yg)("p",null,"Next, select ",(0,o.yg)("em",{parentName:"p"},"Folder Structure")," on the Format and select ",(0,o.yg)("em",{parentName:"p"},"show download code"),". "),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/8_image.png"})),(0,o.yg)("p",null,"Next, select ",(0,o.yg)("em",{parentName:"p"},"Jupyter")," if you're going to use a Jupyter Notebook or ",(0,o.yg)("em",{parentName:"p"},"Terminal")," if your're planing on doing this in the terminal."),(0,o.yg)("p",null,"I've select Jupyter, to use this in a Jupyter notebook. Copy the code. "),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/9_image.png"})),(0,o.yg)("h2",{id:"creating-the-environment"},"Creating the environment"),(0,o.yg)("p",null,"We're going to create a virtual environment, install PyTorch and install YOLOv8.\n",(0,o.yg)("a",{parentName:"p",href:"https://docs.ultralytics.com/quickstart/#install-ultralytics"},"Per YOLOv8 documentation tip"),", it's better to install PyTorch first and then ultralytics."),(0,o.yg)("p",null,"Also, I'm installing jupyterlab packages to use with VSCode. The notebook is attached to this tutorial."),(0,o.yg)("p",null,"Let's install some dependencies first."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"NOTE:")," Because we're going to use YOLOv8, we need to do some steps that normally we wouldn't need."),(0,o.yg)("p",null,"Just installing Torch following the ",(0,o.yg)("a",{parentName:"p",href:"https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html"},"NVIDIA deep learning documentation")," is enough to have Torch with CUDA support."),(0,o.yg)("p",null,"If we install PyTorch normally with PIP, it would not have CUDA support. "),(0,o.yg)("h3",{id:"dependencies"},"Dependencies"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"sudo apt install libopenblas-dev cuda-toolkit libcudnn8 tensorrt python3-libnvinfer nvidia-l4t-dla-compiler\n")),(0,o.yg)("p",null,"Create the Python virtual environment"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"python -m venv birdClassificationModel\n")),(0,o.yg)("p",null,"If you get an error, is because the package python3-venv is not installed. Let's install it and repeat the above command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"sudo apt install python3-venv\n")),(0,o.yg)("p",null,"Activate the virtual environment"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"source birdClassificationModel/bin/activate\n")),(0,o.yg)("p",null,"You can confirm is active because the name of it is placed before your prompt."),(0,o.yg)("h3",{id:"yolov8"},"YOLOv8"),(0,o.yg)("p",null,"Before, and to ",(0,o.yg)("a",{parentName:"p",href:"https://docs.ultralytics.com/quickstart/#conda-docker-image"},"follow on the documentation tip"),", let's first install PyTorch."),(0,o.yg)("p",null,"I'm using JetPack 6.0 , that comes with NVIDIA Jetson Linux  36.3 and CUDA 12.2.\nLet's upgrade PIP first"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"pip install -U pip\n")),(0,o.yg)("p",null,"Installing Torch to be able to use it with YOLOv8, we need to ",(0,o.yg)("a",{parentName:"p",href:"https://forums.developer.nvidia.com/t/pytorch-for-jetson/72048"},"follow the steps in the NVIDIA forums"),"."),(0,o.yg)("p",null,"This will be done with the virtual environment active, so that it is installed in it.\nDownload Torch version 2.3 from NVIDIA"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://nvidia.box.com/shared/static/mp164asf3sceb570wvjsrezk1p4ftj8t.whl -O torch-2.3.0-cp310-cp310-linux_aarch64.whl\nsudo apt-get install python3-pip libopenblas-base libopenmpi-dev libomp-dev\npip3 install 'Cython<3'\npip install numpy torch-2.3.0-cp310-cp310-linux_aarch64.whl\n")),(0,o.yg)("p",null,"After this, let's compile torchvision. If we install it from the wheels, it will not have CUDA support."),(0,o.yg)("p",null,"The branch version is for the Torch version installed. You can see more details in the forum page."),(0,o.yg)("p",null,"Remember, you need to have the virtual environment active so this will all be installed in it."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install libjpeg-dev zlib1g-dev libpython3-dev libopenblas-dev libavcodec-dev libavformat-dev libswscale-dev\ngit clone --branch v0.18.0 https://github.com/pytorch/vision torchvision\ncd torchvision/\nexport BUILD_VERSION=0.18.0\npython setup.py install\n")),(0,o.yg)("p",null,"After a while, it will be compiled and installed."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/10_image.png"})),"After installing, let's see if Cuda is available.",(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/11_image.png"})),(0,o.yg)("p",null,"From the command line"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'python -c "import torch;print (torch.cuda.is_available())"\n')),(0,o.yg)("p",null,"This should return True"),(0,o.yg)("h4",{id:"install-yolov8"},"Install YOLOv8"),(0,o.yg)("p",null,"Now that we have PyTorch installed with CUDA support, when we install YOLOv8, it will use the installed version instead of trying to install a new package (albeit being the same version) without the CUDA support. "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"pip install ultralytics\n")),(0,o.yg)("p",null,"Let's install roboflow and jupyterlab"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"pip install roboflow jupyterlab\n")),(0,o.yg)("p",null,"Now, let's download the dataset.\nIf you're using the notebook, just replace the code there."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},'rf = Roboflow(api_key="<your_api_key>")\nproject = rf.workspace("bruno-santos-omqsq").project("bird-classification-19z7c")\nversion = project.version(1)\ndataset = version.download("folder")\n')),(0,o.yg)("p",null,"After downloading the model, we now have a set of three directories (test, train, valid), each one with a certain number of images from each class. Each image from each class is in its own directory.\nBecause this is for image classification, we don't need to label the images.\nYOLOv8 will know the classes, not only from the configuration file we'll create later, but also from the directories. "),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/12_image.png"})),(0,o.yg)("h3",{id:"train"},"Train"),(0,o.yg)("p",null,"Usually a dataset has the images and the labels (or annotations) with the object coordinates. Since this is a classification task, we don't need any of that. Just that the images be in each directory that's the name of the class."),(0,o.yg)("h4",{id:"preparing-the-config-file"},"Preparing the config file"),(0,o.yg)("p",null,"We still need a config file for YOLOv8 to recognize the classses.",(0,o.yg)("br",{parentName:"p"}),"\n","This file should be placed inside the dataset directory, with .yaml extension. The name is not important. "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cd <dataset_directory>\nvi birdClassificationModel.yaml\n")),(0,o.yg)("p",null,"Insert the following text in the file"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'train: train/\nvalid: valid/\ntest: test/\n\n# number of classes\nnc: 12\n\n# class names\n\nnames: ["Barn Swallow","Common Firecrest","Common Nightingale","Eurasian Chaffinch","Eurasian Crag Martin","European Goldfinch","European Greenfinch","European Serin","House Sparrow","Spanish Sparrow","Western House Martin","white Wagtail"]\n')),(0,o.yg)("p",null,"For the classification, we're going to use one of ",(0,o.yg)("a",{parentName:"p",href:"https://docs.ultralytics.com/tasks/classify/"},"pre-trained models already available from Ultralytics"),"."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/13_image.png"})),(0,o.yg)("p",null,"This models have been trained on ImageNet and are fine tuned for classification.\nWe're going to use it and train it on our data."),(0,o.yg)("p",null,"This is what's know as ",(0,o.yg)("a",{parentName:"p",href:"https://neptune.ai/blog/transfer-learning-guide-examples-for-images-and-text-in-keras"},"transfer learning"),"."),(0,o.yg)("p",null,"I'm going to use the model ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/ultralytics/assets/releases/download/v8.2.0/yolov8l-cls.pt"},"YOLOv8l-cls"),". Probably others will work fine too, but because we don't need real time, its a trade off on speed and accuracy. "),(0,o.yg)("p",null,"Let's then train the model, using YOLOv8 CLI interface"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"yolo task=classify mode=train model=yolov8l-cls.pt data=Bird-Classification-1 epochs=100\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"task=classify : We're going to classify images"),(0,o.yg)("li",{parentName:"ul"},"mode=train : We're training the model"),(0,o.yg)("li",{parentName:"ul"},"model=yolov8l-cls.pt : We're using a pre-trained model on classification"),(0,o.yg)("li",{parentName:"ul"},"data=Bird-Classification-1 : the directory where our dataset is located"),(0,o.yg)("li",{parentName:"ul"},"epochs=100 : for how long we're training the model. ")),(0,o.yg)("p",null,"Now that's it's running, here's some statistics using jtop (tegra-stats)"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/14_image.png"})),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/15_image.png"})),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/16_image.png"})),(0,o.yg)("p",null,"After a couple of hours, the training is complete. "),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/17_image.png"})),(0,o.yg)("p",null,"Now, let's see how the model behaves. Let's test it."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"yolo task=classify mode=predict model='./runs/classify/train6/weights/best.pt' source=Bird-Classification-1/test/**/*.jpg\n")),(0,o.yg)("p",null,"This will make yolo to go into the test directories and try to predict each"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/18_image.png"})),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/19_image.png"})),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/20_image.png"})),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/21_image.png"})),(0,o.yg)("p",null,"The results are all correct. Let's try with two images that it has never seen. "),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/22_image.png"})),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/23_image.png"})),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"yolo task=classify mode=predict model='./runs/classify/train6/weights/best.pt' source=house_sparrow.jpg\n")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/24_image.png"})),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"yolo task=classify mode=predict model='./runs/classify/train6/weights/best.pt' source=white_wagtail.jpg\n")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/25_image.png"})),(0,o.yg)("p",null,"I'm going to say that these results are great"),(0,o.yg)("h2",{id:"exporting-the-model"},"Exporting the model"),(0,o.yg)("p",null,"We can use the model as it is for the inference, we just need to open it and use it.\nFor faster inference times we can export it to TensorRT, since we're on a NVIDIA Jetson Orin NX, or even ONNX, for example. "),(0,o.yg)("p",null,"Is not that we need faster inference times for this project - I'm not going to use this on real time video - but it's nice we can take advantage of the platform we're on."),(0,o.yg)("p",null,"Unfortunately, due to the virtual environment I was unable to export it to TensorRT. For some reason, I couldn't import tensorrt in Python, but outside the virtual environment, I had no problem with tensorrt libraries."),(0,o.yg)("h3",{id:"onnx"},"ONNX"),(0,o.yg)("p",null,"We can export the model to ONNX format like this"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"yolo export model='./runs/classify/train6/weights/best.pt' format=onnx imgsz=640\n")),(0,o.yg)("p",null,"We get a best.onnx that we can use to run inference with."),(0,o.yg)("p",null,"To run inference using ONNX, we need to install the onnxruntime_gpu wheel. "),(0,o.yg)("p",null,"To install onnxruntime-gpu with JetPack 6.0, we need to download it from the ",(0,o.yg)("a",{parentName:"p",href:"https://elinux.org/Jetson_Zoo#ONNX_Runtime"},"Jetson Zoo"),". "),(0,o.yg)("p",null,"We're going to download onnxruntime_gpu 1.18.0"),(0,o.yg)("p",null,"Download the pip wheel for our Python version (Python-3.10)"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://nvidia.box.com/shared/static/48dtuob7meiw6ebgfsfqakc9vse62sg4.whl -O onnxruntime_gpu-1.18.0-cp310-cp310-linux_aarch64.whl\n")),(0,o.yg)("p",null,"and then, install it"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"pip install onnxruntime_gpu-1.18.0-cp310-cp310-linux_aarch64.whl\n")),(0,o.yg)("h2",{id:"inference"},"Inference"),(0,o.yg)("h3",{id:"photo"},"photo"),(0,o.yg)("p",null,"I've used the following code to run inference with the best.pt model and see the results"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},'# running inference\nfrom ultralytics import YOLO\n# load the  model\nbird_model = YOLO("./runs/classify/train6/weights/best.pt")\n#run inference\nresults = bird_model("house_sparrow.jpg")[0]\n# get class names\nclass_names = results.names\n# get top class with more probability\ntop1 = results.probs.top1\n# print the class name with the highest probability\nprint (f" The detected bird is: {class_names[top1]}")\n')),(0,o.yg)("p",null,"That the code above does is load the model, run inference in an image and save the results to the results variable."),(0,o.yg)("p",null,"Because results is ",(0,o.yg)("a",{parentName:"p",href:"http://ultralytics.engine.results.results/"},"ultralytics.engine.results.Results")," object of type list with one item, which is an instance of Results. The ","[0]"," in the results variable to hold the inference result will allow us to get to the results that we want."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},'results = bird_model("house_sparrow.jpg")[0]\n')),(0,o.yg)("p",null,"Next, we use the results to get the class names. Not that we don't know them, but like this will allow this code to work in other models too."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},"class_names = results.names\n")),(0,o.yg)("p",null,"One of the results is a top1 variable that holds the TOP 1 class with more probabilities. That TOP1 is given by the probs list."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},"top1 = results.probs.top1\n")),(0,o.yg)("p",null,"Next, we print the highest probability class that should be the bird species."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},'print (f" The detected bird is: {class_names[top1]}")\nThe detected bird is: House Sparrow\n')),(0,o.yg)("h3",{id:"camera"},"Camera"),(0,o.yg)("p",null,"Now, let's use a camera to run inference."),(0,o.yg)("p",null,"Jetson can use a USB camera or a RPI camera. I'm going to connect a USB camera."),(0,o.yg)("p",null,"The following code will check if can display a camera feed."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},"#Lets test if we can use a USB camera\nimport cv2\ncap = cv2.VideoCapture(0)\nwhile True:\n    ret, img = cap.read()\n    cv2.imshow('Camera', img)\n    if cv2.waitKey(1) & 0xFF == ord('q'):\n        break\ncap.release()\ncv2.destroyAllWindows\n")),(0,o.yg)("p",null,"This is me, on my desktop computer. Just use ",(0,o.yg)("em",{parentName:"p"},"ssh -X username@jetson_ip")," and the X11 window will be forwarded to your desktop. This works because I'm using Linux too. I think that WSL could also work."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/26_image.png"})),(0,o.yg)("p",null,"Now, let's try to run inference on a video feed, displaying the class with the higher probability"),(0,o.yg)("p",null,"Here's the code"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},"# again, save this code in a file a run it from the Jetson\n\nimport cv2\nfrom ultralytics import YOLO\nimport time\n#define confidence level\n#only equal or above this level we say it's a class of bird\nconfidence = 0.95\n# time when processed last frame\nprev_frame = 0\n# time processed current frame\ncur_time = 0\n# load the  model\nbird_model = YOLO(\"./runs/classify/train6/weights/best.pt\")\n# cv2 font\nfont = cv2.FONT_HERSHEY_SIMPLEX\n# open camera\ncap = cv2.VideoCapture(0)\nwhile True:\n    ret, img = cap.read()\n    # to display fps\n    cur_frame = time.time()\n    fps = 1 / (cur_frame - prev_frame)\n    prev_frame = cur_frame\n    fps = int(fps)\n    fps = str(fps)\n    cv2.putText (img, fps, (550,50), font, 1, (124,10,120), 2, cv2.LINE_AA)\n\n    # inference current frame\n    results = bird_model(img, verbose=False)[0]\n    # get class names\n    class_names = results.names\n    # get top class with more probability\n    top1 = results.probs.top1\n    top1conf = results.probs.top1conf.tolist()\n    # we will only show the class name if the confidence is higher than defined level\n    # print the class name with the highest probability\n    if (top1conf >= confidence):\n        bird_class = class_names[top1]\n        print (f\" The detected bird is: {class_names[top1]}\")\n        # color is in BGR\n        confid = round(top1conf,2)\n        img = cv2.putText(img, bird_class, (50,50), font, 0.9, (0, 0, 255), 2, cv2.LINE_AA)\n        img = cv2.putText(img, \"Conf: \" + str(confid), (50,80), font, 0.6, (255, 0, 255), 1, cv2.LINE_AA)\n        cv2.imshow('Camera', img)\n    else:\n        img = cv2.imshow('Camera', img)\n    if cv2.waitKey(1) & 0xFF == ord('q'):\n        break\ncap.release()\ncv2.destroyAllWindows\n")),(0,o.yg)("p",null,"Here's a video showing the inference on a video feed"),(0,o.yg)("iframe",{width:560,height:315,src:"https://www.youtube.com/embed/ovoSMaoA9As?si=-d2buntx0T5oRtr4",title:"YouTube video player",frameBorder:0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0}),(0,o.yg)("h2",{id:"-contributor-project"},"\u2728 Contributor Project"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"This project is supported by the Seeed Studio Contributor Project."),(0,o.yg)("li",{parentName:"ul"},"Thanks ",(0,o.yg)("strong",{parentName:"li"},"Bruno's efforts")," and your work will be ",(0,o.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Honorary-Contributors/"},"exhibited"),".")),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);