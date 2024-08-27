"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[33080],{15680:(e,t,o)=>{o.d(t,{xA:()=>u,yg:()=>c});var r=o(96540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=s(o),m=n,c=g["".concat(l,".").concat(m)]||g[m]||d[m]||a;return o?r.createElement(c,i(i({ref:t},u),{},{components:o})):r.createElement(c,i({ref:t},u))}));function c(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[g]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},16033:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=o(9668),n=(o(96540),o(15680));const a={description:"Motor Bridge Cape v1.0",title:"Motor Bridge Cape v1.0",keywords:["Beagle_Bone"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Motor_Bridge_Cape_v1.0",last_update:{date:"1/10/2022",author:"jianjing Huang"}},i=void 0,p={unversionedId:"Edge/Beagle_Bone/Extension_Board/Motor_Bridge_Cape_v1.0",id:"Edge/Beagle_Bone/Extension_Board/Motor_Bridge_Cape_v1.0",title:"Motor Bridge Cape v1.0",description:"Motor Bridge Cape v1.0",source:"@site/docs/Edge/Beagle_Bone/Extension_Board/Motor_Bridge_Cape_v1.0.md",sourceDirName:"Edge/Beagle_Bone/Extension_Board",slug:"/Motor_Bridge_Cape_v1.0",permalink:"/Motor_Bridge_Cape_v1.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Beagle_Bone/Extension_Board/Motor_Bridge_Cape_v1.0.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1641772800,formattedLastUpdatedAt:"Jan 10, 2022",frontMatter:{description:"Motor Bridge Cape v1.0",title:"Motor Bridge Cape v1.0",keywords:["Beagle_Bone"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Motor_Bridge_Cape_v1.0",last_update:{date:"1/10/2022",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove Base Cape for BeagleBone\xae v2",permalink:"/Grove_Base_Cape_for_BeagleBone_v2"},next:{title:"Skeleton box for BeagleBone\xae",permalink:"/Skeleton_box_for_Beaglebone"}},l={},s=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Install the dependencies",id:"install-the-dependencies",level:3},{value:"Stepper Motor",id:"stepper-motor",level:3},{value:"The functions of Stepper Motor",id:"the-functions-of-stepper-motor",level:4},{value:"Example of Stepper Motor",id:"example-of-stepper-motor",level:4},{value:"DC Motor",id:"dc-motor",level:3},{value:"The functions of DC Motor",id:"the-functions-of-dc-motor",level:4},{value:"Example of DC Motor",id:"example-of-dc-motor",level:4},{value:"Servo",id:"servo",level:3},{value:"The functions of Servo",id:"the-functions-of-servo",level:4},{value:"Example of Servo",id:"example-of-servo",level:4},{value:"Upgrade the Firmware",id:"upgrade-the-firmware",level:2},{value:"Known issues",id:"known-issues",level:3},{value:"Can&#39;t find the I2C address",id:"cant-find-the-i2c-address",level:4},{value:"Can&#39;t update the firmware",id:"cant-update-the-firmware",level:4},{value:"The Cape is still not working",id:"the-cape-is-still-not-working",level:4},{value:"fail to run make flash",id:"fail-to-run-make-flash",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:s},g="wrapper";function d(e){let{components:t,...o}=e;return(0,n.yg)(g,(0,r.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/Motor_bridge_driver.jpg",alt:null})),(0,n.yg)("p",null,"The\xa0Motor\xa0Bridge\xa0Cape\xa0features\xa0bi-directional\xa0motor\xa0control\xa0using\xa0two\xa0TB6612FNG\xa0integrated\xa0dual\xa0H-bridge,\xa0so\xa0it\xa0can\xa0control\xa0two\xa0stepper\xa0motors\xa0or\xa0four\xa0brushed\xa0DC\xa0motors\xa0with\xa06\xa0~15V DC  ower\xa0and\xa0about\xa01A\xa0current\xa0draw\xa0per motor. The cape provides 5V regulated power to BBG or BBB with a max input voltage of 15V. It also\xa0has\xa0six\xa0servo\xa0control\xa0interfaces\xa0and\xa0six\xa0expand\xa0I\\O.\xa0 All\xa0the\xa0features\xa0are\xa0provided\xa0by\xa0the\xa0on\xa0board\xa0STM32F0\xa0coprocessor.\xa0The\xa0MCU can\xa0communicate\xa0with\xa0BeagleBone\xae\xa0by\xa0I",(0,n.yg)("sup",null,"2"),"C\xa0or\xa0UART\xa0interface."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Motor-Bridge-Cape-p-2569.html"},(0,n.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,n.yg)("h2",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Can drive 4 DC Motors or 2 Stepper Motors"),(0,n.yg)("li",{parentName:"ul"},"Can drive 6 Servos"),(0,n.yg)("li",{parentName:"ul"},"Mbed Platform"),(0,n.yg)("li",{parentName:"ul"},"STM32F0\xa0coprocessor"),(0,n.yg)("li",{parentName:"ul"},"Two TB6612FNG"),(0,n.yg)("li",{parentName:"ul"},"6 expand I\\Os"),(0,n.yg)("li",{parentName:"ul"},"Communicate with BBG by I",(0,n.yg)("sup",null,"2"),"C or UART interface")),(0,n.yg)("h2",{id:"specifications"},"Specifications"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Battery Input Voltage: 6~15V"),(0,n.yg)("li",{parentName:"ul"},"H-bridge Working Voltage: 6~15V"),(0,n.yg)("li",{parentName:"ul"},"DC/DC 5V output current: 2A max"),(0,n.yg)("li",{parentName:"ul"},"3V3 output current: 350mA max"),(0,n.yg)("li",{parentName:"ul"},"4 H-bridge driver,each rated current:1.2A, peak current:3.2A"),(0,n.yg)("li",{parentName:"ul"},"6 Servo driver, working voltage: 5V, total current is not more than 1.5A"),(0,n.yg)("li",{parentName:"ul"},"Input reverse connect protection"),(0,n.yg)("li",{parentName:"ul"},"Over current protection: 3A one-off quick fuse")),(0,n.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/Motor_Bridge_Hardware_overview.jpg",alt:null})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"3A one time Fuse"),": Over-current protection"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Reset Button"),": Reset the coprocessor"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"SWD Interface"),": Debug interface"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Prototype board"),": Extend other circuits"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"GPIOs"),": Extend other circuits"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Servos"),": Servo motor interface"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"STM32F030R8"),": The coprocessor"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"DC/DC"),": Voltage conversion circuit"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"TB6612FNG"),": H-bridge IC"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Indicator"),": Indicating lamp for motor direction"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Working Mode Switch"),": Standby or Working"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Input Reverse Protection"),": Protect circuit"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Motor4/Motor3"),": Drive 2 DC motors or 1 Stepper motor"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Motor2/Motor1"),": Drive 2 DC motors or 1 Stepper motor"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Battery"),": Supply power for motor")),(0,n.yg)("h2",{id:"getting-started"},"Getting Started"),(0,n.yg)("p",null,"After this section, I will show you how to use the Motor Bridge Cape on BBG. Before you get started, please download the Motor Bridge Cape Driver library code from the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/MotorBridgeCapeforBBG_BBB"},"Github"),"."),(0,n.yg)("p",null,"To use the Motor Bridge Cape Library simply add the MotorBridge.py file to your project. And import the python file to your project, and create a object of the Motor Bridge Cape."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"import MotorBridge\nmotor = MotorBridge.MotorBridgeCape()\n")),(0,n.yg)("h3",{id:"install-the-dependencies"},"Install the dependencies"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"sudo apt-get update\nsudo apt-get install build-essential python-pip python-dev python-smbus git\nsudo pip install Adafruit-GPIO\n")),(0,n.yg)("h3",{id:"stepper-motor"},"Stepper Motor"),(0,n.yg)("p",null,"The Stepper Motor Interface of Motor Bridge Cape just as the picture below shows."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/StepperMotor.jpg",alt:null})),(0,n.yg)("h4",{id:"the-functions-of-stepper-motor"},"The functions of Stepper Motor"),(0,n.yg)("p",null,"Here is the brief description about the function of stepper motor."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("u",null,"StepperMotorAInit()"))),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Description"),": Init the Stepper Motor A port."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("u",null,"StepperMotorAMove(MoveSteps,StepDelayTime)"))),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Description"),": Drive the Stepper Motor A."),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"MoveSteps"),": How many steps the stepper motor will move. ",(0,n.yg)("strong",{parentName:"p"},"Positive")," stands for clock wise direction. ",(0,n.yg)("strong",{parentName:"p"},"Negative")," stands for counter-clock wise direction."),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"StepDelayTime"),": The dead time for every step. unit: us."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("u",null,"StepperMotorBInit()"))),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Description"),": Init the Stepper Motor B port."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("u",null,"StepperMotorBMove(MoveSteps,StepDelayTime)"))),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Description"),": Drive the Stepper Motor B."),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"MoveSteps"),": How many steps the stepper motor will move. ",(0,n.yg)("strong",{parentName:"p"},"Positive")," stands for clock wise direction. ",(0,n.yg)("strong",{parentName:"p"},"Negative")," stands for counter-clock wise direction."),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"StepDelayTime"),": The dead time for every step. unit: us."),(0,n.yg)("h4",{id:"example-of-stepper-motor"},"Example of Stepper Motor"),(0,n.yg)("p",null,"Copy the following code to your project and save it as a python file."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"import MotorBridge\nimport time\n\xa0\ndef StepperMotorATest():\n    print 'Hello From MotorBridge'\n    motor.StepperMotorAInit()\n    motor.StepperMotorAMove(1000,1000) # 1000 steppers  1000us every step\n    time.sleep(1)\n    motor.StepperMotorAMove(-1000,1000) #1000 steppers  1000us every step\n    time.sleep(1)\n\xa0\ndef StepperMotorBTest():\n    print 'Hello From MotorBridge'\n    motor.StepperMotorBInit()\n    motor.StepperMotorBMove(1000,1000) # 1000steppers  1000us every step\n    time.sleep(1)\n    motor.StepperMotorBMove(-1000,1000) # 1000 steppers  1000us every step\n    time.sleep(1)\n\xa0\n\xa0\nif __name__==\"__main__\":\n    motor = MotorBridge.MotorBridgeCape()\n    StepperMotorATest()\n    StepperMotorBTest()\n")),(0,n.yg)("h3",{id:"dc-motor"},"DC Motor"),(0,n.yg)("p",null,"The DC Motor Interface of Motor Bridge Cape just as the picture below shows."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/DCMotorBBG.jpg",alt:null})),(0,n.yg)("h4",{id:"the-functions-of-dc-motor"},"The functions of DC Motor"),(0,n.yg)("p",null,"Here is the brief description about the functions of DC motor."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("u",null,"DCMotorInit(MotorName,Frequency)"))),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Description"),": Init the DC Motor ant set the frequency."),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"MotorName"),": 1 ~ 4 stands for Motor1 ~ Motor4."),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Frequency"),": Set the frequency of the DC motor."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"If you change the DC motor frequency, the other DC Motors's frequency will change too.")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("u",null,"DCMotorMove(MotorName,Direction,PWMDuty)"))),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Description"),": Drive the DC Motor. Set the direction and PWMDuty."),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"MotorName"),": 1 ~ 4 stands for Motor1 ~ Motor4."),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Direction"),": 1 stands for clock wise. 2 stands for counter-clock wise. 3 Stop the motor."),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"PWMDuty"),": 0 ~ 100 stands for 0%~ 100% of the pwm duty."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("u",null,"motor.DCMotorStop(MotorName)"))),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Description"),": Stop the DC Motor."),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"MotorName"),": 1 ~ 4 stands for Motor1 ~ Motor4."),(0,n.yg)("h4",{id:"example-of-dc-motor"},"Example of DC Motor"),(0,n.yg)("p",null,"Copy the following code to your project and save it as a python file."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'import MotorBridge\nimport time\n\xa0\nMotorName        = 1\nClockWise        = 1\nCounterClockWise = 2\nPwmDuty          = 90\nFrequency        = 1000\n\xa0\nif __name__=="__main__":\n    motor = MotorBridge.MotorBridgeCape()\n    motor.DCMotorInit(MotorName,Frequency)\n    while True:\n        motor.DCMotorMove(MotorName,ClockWise,PwmDuty)\n        time.sleep(2)\n        motor.DCMotorMove(MotorName,CounterClockWise,PwmDuty)\n        time.sleep(2)\n        print "hello"\n        motor.DCMotorStop(MotorName)\n        time.sleep(2)\n')),(0,n.yg)("h3",{id:"servo"},"Servo"),(0,n.yg)("p",null,"The Servo Interface of Motor Bridge Cape just as the picture below shows."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/ServoBBG.jpg",alt:null})),(0,n.yg)("h4",{id:"the-functions-of-servo"},"The functions of Servo"),(0,n.yg)("p",null,"Here is the brief description about the functions of Servo."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("u",null,"ServoInit(ServoName,Frequency)"))),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Description"),": Init the Servo and set the frequency."),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"ServoName"),": 1 ~ 6 stands for Servo1 ~ Servo6."),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Frequency"),": Set the frequency of the Servo, the default value is 50 Hz."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("u",null,"ServoMoveAngle(ServoName,Angle)"))),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Description"),": Drive the Servo. Set the Servo angle."),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"ServoName"),": 1 ~ 6 stands for Servo1 ~ Servo6."),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Angle"),": 0 ~ 180 stands for 0 degrees to 180 degrees."),(0,n.yg)("h4",{id:"example-of-servo"},"Example of Servo"),(0,n.yg)("p",null,"Copy the following code to your project and save it as a python file."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"import MotorBridge\nimport time\nServoName   =  2\nFrequency   =  50\nAngle1      =  20\nAngle2      =  160\n\xa0\nif __name__==\"__main__\":\n    motor = MotorBridge.MotorBridgeCape()\n    motor.ServoInit(ServoName,Frequency)\n\xa0\n    while True:\n        print 'Servo Test'\n        motor.ServoMoveAngle(ServoName,Angle1)\n        time.sleep(2)\n        motor.ServoMoveAngle(ServoName,Angle2)\n        time.sleep(2)\n")),(0,n.yg)("h2",{id:"upgrade-the-firmware"},"Upgrade the Firmware"),(0,n.yg)("p",null,"If there is something wrong with your cape, try to upgrade it. This section show how to upgrade the Motor Bridge Cape Firmware using BeagleBone\xae Green. It also works on BBGW and BBB."),(0,n.yg)("p",null,"1.Insert the Motor Bridge Cape to BBG/BBGW/BBB, and connect BBG to your computer via USB cable."),(0,n.yg)("p",null,"2.Let your BBG connect to the internet, and access it via SSH as the picture below shows."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/BBG1.PNG",alt:null})),(0,n.yg)("p",null,"3.Download the code from Github by execute following commands"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"git clone https://github.com/Seeed-Studio/MotorBridgeCapeFirmware\n")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/BBG2.PNG",alt:null})),(0,n.yg)("p",null,'4.Navigate to "MotorBridgeCapeFirmware" and execute "make flash" command to flash the firmware.'),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"cd MotorBridgeCapeFirmware/ && make flash\n")),(0,n.yg)("p",null,'After a few seconds, you can see "Verification OK" information from the terminal'),(0,n.yg)("p",null,"5.Check if the firmware is flash well by execute following command"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"i2cdetect -y -r 1\n")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/BBG3.PNG",alt:null})),(0,n.yg)("p",null,"If you find the I2C address 0x4b,it means you have already refreshed the firmware successfully."),(0,n.yg)("h3",{id:"known-issues"},"Known issues"),(0,n.yg)("h4",{id:"cant-find-the-i2c-address"},"Can't find the I2C address"),(0,n.yg)("p",null,"Q: I have already updated the firmware, but can't detect the i2c address?"),(0,n.yg)("p",null,"A\uff1aBe sure that the P9_23 Pin is High, since the P9_23 is connect to Reset pin of STM32, I set the P9_23 pin to high level in the initialization function of MotorBridgeCape class."),(0,n.yg)("h4",{id:"cant-update-the-firmware"},"Can't update the firmware"),(0,n.yg)("p",null,"Q: When I update the firmware, the error information says that can't find the UART2?"),(0,n.yg)("p",null,"A: You should enable the BB-UART2, since the BBG flash the firmware to Motor Bridge Cape by UART2.."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"vi /boot/uEnv.txt\n")),(0,n.yg)("p",null,'Then uncomment "cape_enable=capemgr.enable_partno=BB-UART2". Save and exit the editor, at last reboot your board.'),(0,n.yg)("h4",{id:"the-cape-is-still-not-working"},"The Cape is still not working"),(0,n.yg)("p",null,"Q: I have already updated the firmware successfully and can detect the I2C address, but why I still can't get the cape working?"),(0,n.yg)("p",null,"A: Please mention that there's a working mode switch on the board, be sure the switch is turn to working. If you still have other questions, please come to our forum."),(0,n.yg)("h4",{id:"fail-to-run-make-flash"},"fail to run make flash"),(0,n.yg)("p",null,"Q: Can't run make flash with error code \"Can't init. Ensure BOOT0=1 BOOT1=0, and reset Device\""),(0,n.yg)("p",null,"A: Please follow below steps to solve the issue."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Step 1: Run sudo nano /boot/uEnv.txt and then add below 2 lines at bottom of the uEnv.txt.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"uboot_overlay_addr0=/lib/firmware/BB-UART2-00A0.dtbo\nenable_uboot_cape_universal=1  \n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Step 2. Restart the BBGW"),(0,n.yg)("li",{parentName:"ul"},"Step 3. Run the Sudo make flash again.")),(0,n.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/res/Motor%20Bridge%20Cape%20v1.0%20eagle%20file.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.yg)("p",null,"We have this part available in ",(0,n.yg)("a",{parentName:"p",href:"https://geppetto.seeedstudio.com/"},"geppetto"),", easy modular electronic design with Seeed and Geppeto. Build it Now. ",(0,n.yg)("a",{parentName:"p",href:"https://geppetto.seeedstudio.com/"},"geppetto.seeedstudio.com")),(0,n.yg)("h2",{id:"resources"},"Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/res/Motor_Bridge_Cape_v1.0_sch.pdf"},"Schematic in PDF")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/res/Motor_Bridge_Cape_v1.0brd.rar"},"PCB in Eagle File")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/res/Motor_Bridge_Cape_v1.0sch.rar"},"Schematic in Eagle File")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/MotorBridgeCapeforBBG_BBB"},"Motor Bridge Cape Library")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Lee-Kevin/MotorBridgeCapeFirmwareSourceCode"},"Motor Bridge Cape Firmware Source Code"))),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);