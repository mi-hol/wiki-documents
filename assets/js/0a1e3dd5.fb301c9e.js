"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[66232],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,u=m["".concat(s,".").concat(c)]||m[c]||f[c]||i;return n?o.createElement(u,l(l({ref:t},p),{},{components:n})):o.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[m]="string"==typeof e?e:a,l[1]=r;for(var d=2;d<i;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},44765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=n(9668),a=(n(96540),n(15680));const i={description:"YOLOv8 from training to deployment",title:"Training and deployment of YOLOv8 pose estimation model",keywords:["YOLOv8","we2","pose detection"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ma_deploy_yolov8_pose",last_update:{date:"04/02/2024",author:"Jack Mu"}},l="YOLOv8 pose estimation model deployment",r={unversionedId:"Topics/TinyML/ModelAssistant/deploy/ma_deploy_yolov8_pose",id:"Topics/TinyML/ModelAssistant/deploy/ma_deploy_yolov8_pose",title:"Training and deployment of YOLOv8 pose estimation model",description:"YOLOv8 from training to deployment",source:"@site/docs/Topics/TinyML/ModelAssistant/deploy/ma_deploy_yolov8_pose.md",sourceDirName:"Topics/TinyML/ModelAssistant/deploy",slug:"/ma_deploy_yolov8_pose",permalink:"/ma_deploy_yolov8_pose",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Topics/TinyML/ModelAssistant/deploy/ma_deploy_yolov8_pose.md",tags:[],version:"current",lastUpdatedBy:"Jack Mu",lastUpdatedAt:1712016e3,formattedLastUpdatedAt:"Apr 2, 2024",frontMatter:{description:"YOLOv8 from training to deployment",title:"Training and deployment of YOLOv8 pose estimation model",keywords:["YOLOv8","we2","pose detection"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ma_deploy_yolov8_pose",last_update:{date:"04/02/2024",author:"Jack Mu"}},sidebar:"ProductSidebar",previous:{title:"Train and deploy the YOLOv8 object detection model",permalink:"/ma_deploy_yolov8"},next:{title:"Open Source",permalink:"/open_source_topic"}},s={},d=[{value:"Dataset preparation",id:"dataset-preparation",level:2},{value:"Install YOLOv8 command line tool",id:"install-yolov8-command-line-tool",level:2},{value:"Train",id:"train",level:2},{value:"Export model to tflite",id:"export-model-to-tflite",level:2},{value:"Model graph optimization",id:"model-graph-optimization",level:3},{value:"Deploy",id:"deploy",level:2}],p={toc:d},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,o.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"yolov8-pose-estimation-model-deployment"},"YOLOv8 pose estimation model deployment"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/sscma/static/detection_pose.png",style:{width:600,height:"auto"}})),(0,a.yg)("p",null,"This wiki will introduce how to train the official YOLOv8 attitude estimation model and deploy the trained model to ",(0,a.yg)("inlineCode",{parentName:"p"},"Grove Vision AI(V2)")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"XIAO ESP32S3")," devices."),(0,a.yg)("h2",{id:"dataset-preparation"},"Dataset preparation"),(0,a.yg)("p",null,"For the pose estimation data set, it is recommended to check ",(0,a.yg)("a",{parentName:"p",href:"https://docs.ultralytics.com/datasets/pose/coco8-pose/"},"YOLOv8 official documentation"),"."),(0,a.yg)("h2",{id:"install-yolov8-command-line-tool"},"Install YOLOv8 command line tool"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"By default, you already have the ",(0,a.yg)("inlineCode",{parentName:"li"},"python")," environment and ",(0,a.yg)("inlineCode",{parentName:"li"},"pip")," package management tool, and python>=3.8.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# Clone the official repository\ngit clone https://github.com/ultralytics/ultralytics\n\n# Go into the cloned folder\ncd ultralytics\n\n# Install in developer mode so that subsequent modifications can be synchronized\npip install -e .\n")),(0,a.yg)("p",null,"The reason why it is recommended to install using Git is that some code needs to be modified later, so it needs to be installed in developer mode."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"You can use the version query command to test whether the ",(0,a.yg)("inlineCode",{parentName:"li"},"yolo")," command line tool is successfully installed.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# Version query\nyolo -v\n")),(0,a.yg)("h2",{id:"train"},"Train"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"First, go to the downloaded data set folder")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Execute the following command to start training the model"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"yolo train detect model=yolov8n-pose.pt data=./data_pose.yaml imgsz=192\n")),(0,a.yg)("h2",{id:"export-model-to-tflite"},"Export model to tflite"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"After training, the model will be in the ",(0,a.yg)("inlineCode",{parentName:"p"},"runs/train/exp*/weights/")," folder. Make sure that the evaluation indicators of your model meet your needs.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Afterwards, you need to modify the official code to reduce some post-processing of the model. First modify the ",(0,a.yg)("inlineCode",{parentName:"p"},"forward")," functions of the ",(0,a.yg)("inlineCode",{parentName:"p"},"Detect")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Pose")," classes under the ",(0,a.yg)("inlineCode",{parentName:"p"},"~/ultralytics/ultralytics/nn/modules/head.py")," file. After modification, it is as follows Show"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'# forward function of Detect class\n    def forward(self, x):\n        """Concatenates and returns predicted bounding boxes and class probabilities."""\n        shape = x[0].shape  # BCHW\n\n        if self.export:\n            return [\n                torch.permute(j, (0, 2, 3, 1)).reshape(j.shape[0], -1, x.shape[1])\n                for j in [self.cv2[i](x[i]) for i in range(self.nl)]\n                + [self.cv3[i](x[i]) for i in range(self.nl)]\n            ]\n        else:\n            for i in range(self.nl):\n                x[i] = torch.cat((self.cv2[i](x[i]), self.cv3[i](x[i])), 1)\n        if self.training:\n            return x\n        elif self.dynamic or self.shape != shape:\n            self.anchors, self.strides = (\n                x.transpose(0, 1) for x in make_anchors(x, self.stride, 0.5)\n            )\n            self.shape = shape\n\n        x_cat = torch.cat([xi.view(shape[0], self.no, -1) for xi in x], 2)\n        if self.export and self.format in (\n            "saved_model",\n            "pb",\n            "tflite",\n            "edgetpu",\n            "tfjs",\n        ):  # avoid TF FlexSplitV ops\n            box = x_cat[:, : self.reg_max * 4]\n            cls = x_cat[:, self.reg_max * 4 :]\n        else:\n            box, cls = x_cat.split((self.reg_max * 4, self.nc), 1)\n        dbox = (\n            dist2bbox(self.dfl(box), self.anchors.unsqueeze(0), xywh=True, dim=1)\n            * self.strides\n        )\n\n        if self.export and self.format in ("tflite", "edgetpu"):\n            # Normalize xywh with image size to mitigate quantization error of TFLite integer models as done in YOLOv5:\n            # https://github.com/ultralytics/yolov5/blob/0c8de3fca4a702f8ff5c435e67f378d1fce70243/models/tf.py#L307-L309\n            # See this PR for details: https://github.com/ultralytics/ultralytics/pull/1695\n            img_h = shape[2] * self.stride[0]\n            img_w = shape[3] * self.stride[0]\n            img_size = torch.tensor(\n                [img_w, img_h, img_w, img_h], device=dbox.device\n            ).reshape(1, 4, 1)\n            dbox /= img_size\n\n        y = torch.cat((dbox, cls.sigmoid()), 1)\n        return y if self.export else (y, x)\n\n# forward function of Pose class\n    def forward(self, x):\n        """Perform forward pass through YOLO model and return predictions."""\n        bs = x[0].shape[0]  # batch size\n        kpt = torch.cat([self.cv4[i](x[i]).view(bs, self.nk, -1) for i in range(self.nl)], -1)  # (bs, 17*3, h*w)\n        x = self.detect(self, x)\n        if self.training:\n            return x, kpt\n        if self.export:\n            return x, torch.permute(kpt, (0, 2, 1))\n        pred_kpt = self.kpts_decode(bs, kpt)\n        return torch.cat([x, pred_kpt], 1) if self.export else (torch.cat([x[0], pred_kpt], 1), (x[1], kpt))\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"In order to avoid abnormal errors on the command line, you can also modify the ",(0,a.yg)("inlineCode",{parentName:"li"},"export_saved_model")," method code of the ",(0,a.yg)("inlineCode",{parentName:"li"},"Exporter")," class under the ",(0,a.yg)("inlineCode",{parentName:"li"},"~/ultralytics/ultralytics/engine/exporter.py")," file as follows")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"    @try_export\n    def export_saved_model(self, prefix=colorstr('TensorFlow SavedModel:')):\n        \"\"\"YOLOv8 TensorFlow SavedModel export.\"\"\"\n        cuda = torch.cuda.is_available()\n        try:\n            import tensorflow as tf  # noqa\n        except ImportError:\n            check_requirements(f\"tensorflow{'-macos' if MACOS else '-aarch64' if ARM64 else '' if cuda else '-cpu'}\")\n            import tensorflow as tf  # noqa\n        check_requirements(\n            ('onnx', 'onnx2tf>=1.15.4,<=1.17.5', 'sng4onnx>=1.0.1', 'onnxsim>=0.4.33', 'onnx_graphsurgeon>=0.3.26',\n             'tflite_support', 'onnxruntime-gpu' if cuda else 'onnxruntime'),\n            cmds='--extra-index-url https://pypi.ngc.nvidia.com')  # onnx_graphsurgeon only on NVIDIA\n\n        LOGGER.info(f'\\n{prefix} starting export with tensorflow {tf.__version__}...')\n        check_version(tf.__version__,\n                      '<=2.13.1',\n                      name='tensorflow',\n                      verbose=True,\n                      msg='https://github.com/ultralytics/ultralytics/issues/5161')\n        f = Path(str(self.file).replace(self.file.suffix, '_saved_model'))\n        if f.is_dir():\n            import shutil\n            shutil.rmtree(f)  # delete output folder\n\n        # Pre-download calibration file to fix https://github.com/PINTO0309/onnx2tf/issues/545\n        onnx2tf_file = Path('calibration_image_sample_data_20x128x128x3_float32.npy')\n        if not onnx2tf_file.exists():\n            attempt_download_asset(f'{onnx2tf_file}.zip', unzip=True, delete=True)\n\n        # Export to ONNX\n        self.args.simplify = True\n        f_onnx, _ = self.export_onnx()\n\n        # Export to TF\n        tmp_file = f / 'tmp_tflite_int8_calibration_images.npy'  # int8 calibration images file\n        if self.args.int8:\n            verbosity = '--verbosity info'\n            if self.args.data:\n                # Generate calibration data for integer quantization\n                LOGGER.info(f\"{prefix} collecting INT8 calibration images from 'data={self.args.data}'\")\n                data = check_det_dataset(self.args.data)\n                dataset = YOLODataset(data['val'], data=data, imgsz=self.imgsz[0], augment=False)\n                images = []\n                for i, batch in enumerate(dataset):\n                    if i >= 100:  # maximum number of calibration images\n                        break\n                    im = batch['img'].permute(1, 2, 0)[None]  # list to nparray, CHW to BHWC\n                    images.append(im)\n                f.mkdir()\n                images = torch.cat(images, 0).float()\n                # mean = images.view(-1, 3).mean(0)  # imagenet mean [123.675, 116.28, 103.53]\n                # std = images.view(-1, 3).std(0)  # imagenet std [58.395, 57.12, 57.375]\n                np.save(str(tmp_file), images.numpy())  # BHWC\n                int8 = f'-oiqt -qt per-tensor -cind images \"{tmp_file}\" \"[[[[0, 0, 0]]]]\" \"[[[[255, 255, 255]]]]\"'\n            else:\n                int8 = '-oiqt -qt per-tensor'\n        else:\n            verbosity = '--non_verbose'\n            int8 = ''\n\n        cmd = f'onnx2tf -i \"{f_onnx}\" -o \"{f}\" -nuo {verbosity} {int8}'.strip()\n        LOGGER.info(f\"{prefix} running '{cmd}'\")\n        subprocess.run(cmd, shell=True)\n        yaml_save(f / 'metadata.yaml', self.metadata)  # add metadata.yaml\n\n        # Remove/rename TFLite models\n        if self.args.int8:\n            tmp_file.unlink(missing_ok=True)\n            for file in f.rglob('*_dynamic_range_quant.tflite'):\n                file.rename(file.with_name(file.stem.replace('_dynamic_range_quant', '_int8') + file.suffix))\n            for file in f.rglob('*_integer_quant_with_int16_act.tflite'):\n                file.unlink()  # delete extra fp16 activation TFLite files\n\n        # Add TFLite metadata\n        # for file in f.rglob('*.tflite'):\n            # f.unlink() if 'quant_with_int16_act.tflite' in str(f) else self._add_tflite_metadata(file)\n\n        return str(f), tf.saved_model.load(f, tags=None, options=None)  # load saved_model as Keras model\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Use the following command to export the tflite model")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"yolo export model=${your model path}  format=tflite imgsz=192 int8\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"You will then see a ",(0,a.yg)("inlineCode",{parentName:"li"},"yolov8n-pose_saved_model")," folder under the current folder, which contains the ",(0,a.yg)("inlineCode",{parentName:"li"},"yolov8n-pose_full_integer_quant.tflite")," model file, This model file can be deployed to ",(0,a.yg)("inlineCode",{parentName:"li"},"Grove Vision AI(V2)")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"XIAO ESP32S3")," devices.")),(0,a.yg)("h3",{id:"model-graph-optimization"},"Model graph optimization"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Grove Vision AI (V2) supports vela-optimized models and can also accelerate model inference. First, execute the following command to install the vela command line tool (",(0,a.yg)("inlineCode",{parentName:"li"},"XIAO ESP32S3")," device is not supported yet).")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"\npip3 install ethos-u-vela\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"After that, you need to ",(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/sscma/configs/vela_config.ini"},"download")," ",(0,a.yg)("inlineCode",{parentName:"li"},"vela")," related configuration file, or copy the following content into a file, which can be named ",(0,a.yg)("inlineCode",{parentName:"li"},"vela_config.ini"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"; file: my_vela_cfg.ini ; ----------------------------------------------------------------------------- \n; Vela configuration file ; ----------------------------------------------------------------------------- \n; System Configuration \n\n; My_Sys_Cfg \n[System_Config.My_Sys_Cfg] \ncore_clock=400e6 \naxi0_port=Sram \naxi1_port=OffChipFlash \nSram_clock_scale=1.0 \nSram_burst_length=32 \nSram_read_latency=16 \nSram_write_latency=16 \nDram_clock_scale=0.75 \nDram_burst_length=128 \nDram_read_latency=500 \nDram_write_latency=250 \nOnChipFlash_clock_scale=0.25 \nOffChipFlash_clock_scale=0.015625 \nOffChipFlash_burst_length=32 \nOffChipFlash_read_latency=64 \nOffChipFlash_write_latency=64 \n; ----------------------------------------------------------------------------- \n; Memory Mode \n; My_Mem_Mode_Parent \n[Memory_Mode.My_Mem_Mode_Parent] \nconst_mem_area=Axi1 \narena_mem_area=Axi0 \ncache_mem_area=Axi0\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Finally, use the following command to optimize the graph")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"vela --accelerator-config ethos-u55-64 \\ \n    --config vela_config.ini \\\n    --system-config My_Sys_Cfg \\\n    --memory-mode My_Mem_Mode_Parent \\\n    --output-dir ${Save path of the optimized model} \\\n    ${The path of the tflite model that needs to be optimized}\n")),(0,a.yg)("h2",{id:"deploy"},"Deploy"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The model file that needs to be deployed is the ",(0,a.yg)("inlineCode",{parentName:"p"},"tflite")," file exported above. You can burn the model file to the target device according to the following tutorial.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"We strongly recommend using our web tool to burn the trained tflite model into the device. Detailed operations are provided in the ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/ModelAssistant_Deploy_Overview/"},"Deployment Tutorial")))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Note:")," Since the ",(0,a.yg)("inlineCode",{parentName:"p"},"ESP32S3")," device does not support model deployment after ",(0,a.yg)("inlineCode",{parentName:"p"},"vela")," graph optimization, you do not need to perform ",(0,a.yg)("inlineCode",{parentName:"p"},"tflite")," model graph optimization if you want to deploy the model to the ",(0,a.yg)("inlineCode",{parentName:"p"},"XIAO ESP32S3")," device."))}f.isMDXComponent=!0}}]);