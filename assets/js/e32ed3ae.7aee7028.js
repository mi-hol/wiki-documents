"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[10157],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>m});var t=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},u=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),y=i,m=d["".concat(p,".").concat(y)]||d[y]||g[y]||r;return a?t.createElement(m,l(l({ref:n},u),{},{components:a})):t.createElement(m,l({ref:n},u))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=y;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},52811:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var t=a(9668),i=(a(96540),a(15680));const r={description:"The description of ArduPy",title:"ArduPy with Wio Terminal",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ArduPy",last_update:{date:"8/7/2023",author:"cessarr"}},l="ArduPy Get Started",o={unversionedId:"Sensor/Wio_Terminal/ArduPy/ArduPy",id:"Sensor/Wio_Terminal/ArduPy/ArduPy",title:"ArduPy with Wio Terminal",description:"The description of ArduPy",source:"@site/docs/Sensor/Wio_Terminal/ArduPy/ArduPy.md",sourceDirName:"Sensor/Wio_Terminal/ArduPy",slug:"/ArduPy",permalink:"/ArduPy",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/ArduPy/ArduPy.md",tags:[],version:"current",lastUpdatedBy:"cessarr",lastUpdatedAt:1691366400,formattedLastUpdatedAt:"Aug 7, 2023",frontMatter:{description:"The description of ArduPy",title:"ArduPy with Wio Terminal",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ArduPy",last_update:{date:"8/7/2023",author:"cessarr"}}},p={},s=[{value:"Supported Boards",id:"supported-boards",level:2},{value:"Quick Start with ArduPy",id:"quick-start-with-ardupy",level:2},{value:"Install <code>aip</code> with macOS",id:"install-aip-with-macos",level:2},{value:"Install <code>aip</code> with Windows",id:"install-aip-with-windows",level:2},{value:"Install <code>aip</code> with Linux",id:"install-aip-with-linux",level:2},{value:"ArduPy-aip CLI",id:"ardupy-aip-cli",level:2},{value:"Running your First Script",id:"running-your-first-script",level:3},{value:"Usage under ardupy-mpfshell",id:"usage-under-ardupy-mpfshell",level:3},{value:"Using aip to include Other ArduPy Libraries Example",id:"using-aip-to-include-other-ardupy-libraries-example",level:2},{value:"Library Example Usage",id:"library-example-usage",level:4},{value:"FAQ",id:"faq",level:3},{value:"Time and Delay",id:"time-and-delay",level:2},{value:"Pin and GPIO",id:"pin-and-gpio",level:2},{value:"Pinout Diagram for Seeeduino XIAO",id:"pinout-diagram-for-seeeduino-xiao",level:3},{value:"Pinout Diagram for Wio Terminal",id:"pinout-diagram-for-wio-terminal",level:3},{value:"Map",id:"map",level:2},{value:"PWM (Pulse Width Modulation)",id:"pwm-pulse-width-modulation",level:2},{value:"ADC",id:"adc",level:2},{value:"DAC",id:"dac",level:2},{value:"LCD",id:"lcd",level:2},{value:"IDE Getting Started",id:"ide-getting-started",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:s},d="wrapper";function g(e){let{components:n,...a}=e;return(0,i.yg)(d,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"ardupy-get-started"},"ArduPy Get Started"),(0,i.yg)("p",null,"To get started with ArduPy, first need to install ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"aip")," - ArduPy Integrated Platform")," is a utility to develop ArduPy and interact with ArduPy board. It enables users to quickly get started with ardupy. ",(0,i.yg)("inlineCode",{parentName:"p"},"aip")," is meant to be a simple command line tool. You can customize your own ardupy firmware through it, without needing to know more details about ArduPy."),(0,i.yg)("h2",{id:"supported-boards"},"Supported Boards"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,i.yg)("strong",{parentName:"a"},"Wio Terminal")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},(0,i.yg)("strong",{parentName:"a"},"Seeeduino XIAO"))))),(0,i.yg)("h2",{id:"quick-start-with-ardupy"},"Quick Start with ArduPy"),(0,i.yg)("p",null,"The following method is used to experience the ArduPy software in the simplest way. Follow the procedures to get started now!"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"STEP.1 Entering bootloader mode"))),(0,i.yg)("p",null,"Connect your device to your PC via USB connection. Enter the bootloader mode by resetting the device quickly."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"For ",(0,i.yg)("strong",{parentName:"li"},"Wio Terminal"),", please refer ",(0,i.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq"},"here"),"."),(0,i.yg)("li",{parentName:"ol"},"For ",(0,i.yg)("strong",{parentName:"li"},"Seeeduino XIAO"),", please refer ",(0,i.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino-XIAO/#reset"},"here"),".")),(0,i.yg)("p",null,"There should a USB drive named ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Arduino"))," appeared in your PC. Go into the Arduino USB drive location."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/USBdrive.png"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"STEP.2 Download ArduPy UF2 Firmware"))),(0,i.yg)("p",null,"Download the ArduPy firmware in the form of UF2 files."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"For ",(0,i.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/ArduPy_wio_terminal_lastest.uf2"},"Wio Terminal")),(0,i.yg)("li",{parentName:"ol"},"For ",(0,i.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/ArduPy_xiao_lastest.uf2"},"Seeeduino XIAO"))),(0,i.yg)("p",null,"and save it in your drive."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"STEP.3 Flashing ArduPy Firmware to the Device"))),(0,i.yg)("p",null,"Once downloaded the firmware for your device. Drag the ",(0,i.yg)("inlineCode",{parentName:"p"},".UF2")," files to the ",(0,i.yg)("inlineCode",{parentName:"p"},"ARDUINO")," USB drive. Now, your board will disappear from PC. Reset the board and it has loaded ArduPy firmware into it!"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"STEP.4 Blinking the device"))),(0,i.yg)("p",null,"Now, there will be a USB drive named ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"ARDUPY"))," appeared in your PC. Open the ",(0,i.yg)("inlineCode",{parentName:"p"},"ARDUPY")," and you will see a ",(0,i.yg)("inlineCode",{parentName:"p"},"main.py")," python file. Open the ",(0,i.yg)("inlineCode",{parentName:"p"},"main.py")," with your favorite editor such as ",(0,i.yg)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Microsoft Visual Studio Code"),", ",(0,i.yg)("a",{parentName:"p",href:"https://atom.io/"},"Atom"),", ",(0,i.yg)("a",{parentName:"p",href:"https://www.sublimetext.com/"},"Sublime Text")," and etc. Copy the following code and save the ",(0,i.yg)("inlineCode",{parentName:"p"},"main.py"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-py"},"from machine import Pin, Map\nimport time\n\nLED = Pin(Map.LED_BUILTIN, Pin.OUT)\n\nwhile True:\n    LED.on()\n    time.sleep(1)\n    LED.off()\n    time.sleep(1)\n")),(0,i.yg)("p",null,"Now you should see your device's built-in LED starts to blink! Check the below sections to find out more about ArduPy! You will learn about ",(0,i.yg)("inlineCode",{parentName:"p"},"ArduPy-aip")," tool and how to use ",(0,i.yg)("inlineCode",{parentName:"p"},"aip")," to build and flash your own firmware to devices!"),(0,i.yg)("h2",{id:"install-aip-with-macos"},"Install ",(0,i.yg)("inlineCode",{parentName:"h2"},"aip")," with macOS"),(0,i.yg)("p",null,"For macOS user, you can simply run the following in Terminal to install ArduPy-aip:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"pip3 install ardupy-aip\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note:")," please make sure that you have installed ",(0,i.yg)("strong",{parentName:"p"},"Python 3")," on macOS. To install Python 3, you can use ",(0,i.yg)("a",{parentName:"p",href:"https://brew.sh/"},(0,i.yg)("strong",{parentName:"a"},"Homebrew"))," which is a software package manager for macOS. Once installed Homebrew, run the following to install python 3: ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"brew install python3")),". You can also download and install ",(0,i.yg)("a",{parentName:"p",href:"https://www.python.org/downloads/mac-osx/"},"Python 3 from the official Python website"),"."),(0,i.yg)("h2",{id:"install-aip-with-windows"},"Install ",(0,i.yg)("inlineCode",{parentName:"h2"},"aip")," with Windows"),(0,i.yg)("p",null,"You can download the latest versions of ArduPy for windows in the below session. Once downloaded, extract the binary ",(0,i.yg)("inlineCode",{parentName:"p"},"aip")," into a directory that is in your ",(0,i.yg)("inlineCode",{parentName:"p"},"PATH"),"."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/ardupy/tools/aip-0.5.0/aip.exe"},(0,i.yg)("strong",{parentName:"a"},"For Windows 64 Bit")))),(0,i.yg)("p",null,"Or if you have ",(0,i.yg)("strong",{parentName:"p"},"Python 3")," environment, you can also install using ",(0,i.yg)("inlineCode",{parentName:"p"},"pip3"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"pip3 install ardupy-aip\n")),(0,i.yg)("h2",{id:"install-aip-with-linux"},"Install ",(0,i.yg)("inlineCode",{parentName:"h2"},"aip")," with Linux"),(0,i.yg)("p",null,"For Linux user, you can simply run the following in Terminal to install ArduPy-aip:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"pip3 install ardupy-aip\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note:")," please make sure you have ",(0,i.yg)("strong",{parentName:"p"},"Python 3")," installed and ",(0,i.yg)("inlineCode",{parentName:"p"},"pip3")," is up to date."),(0,i.yg)("h2",{id:"ardupy-aip-cli"},"ArduPy-aip CLI"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"aip")," is a command-line interface for ArduPy, you can use aip to install ArduPy libraries, build and flash ArduPy firmware to hardware with ease. Simply use ",(0,i.yg)("inlineCode",{parentName:"p"},"help")," to get more information:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"aip help\n")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-help.png"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"To get board information (firmware info.):")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"aip board\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"To install Arduino libraries binding with ArduPy:")),(0,i.yg)("p",null,"Please check here for the available ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio?q=seeed-ardupy&type=&language="},(0,i.yg)("strong",{parentName:"a"},"ArduPy libraries")),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"aip install <ArduPy Library Path> \n# Example Usage: \n# aip install Seeed-Studio/seeed-ardupy-ultrasonic-sensor\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"To uninstall ArduPy libraries:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"aip uninstall <ArduPy Library Path> \n# Example Usage: \n# aip uninstall Seeed-Studio/seeed-ardupy-ultrasonic-sensor\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"To list installed ArduPy Libraries")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"aip list\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"To build ArduPy Firmware contains the libraries you installed and the basic ArduPy features. Note that, you can now choose to build for ",(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Seeeduino XIAO")," or ",(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Wio Terminal")," now!")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"aip build --board=<board>\n# For Seeeduino XIAO:\n# aip build --board=xiao\n# For Wio Terminal:\n# aip build --board=wio_terminal\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"To flash ArduPy Firmware into hardware:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"aip flash\n")),(0,i.yg)("p",null,"!!!Note\nAfter commands, you use ",(0,i.yg)("inlineCode",{parentName:"p"},"-h")," flags to see more usage for that command. For example, ",(0,i.yg)("inlineCode",{parentName:"p"},"aip flash -h"),"."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"To interact with the board (shell-based file explorer):")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"aip shell\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note:")," Once entered the ardupy-mpfshell, you can use ",(0,i.yg)("inlineCode",{parentName:"p"},"help")," for more information and commands."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Entering ",(0,i.yg)("strong",{parentName:"li"},"REPL")," mode:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},'aip shell -c "repl"\n')),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-shell.png"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"To run Python file:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},'aip shell -n -c "runfile <YourPythonFilePath> [Path]"\n# Example Usage:\n# aip shell -n -c "runfile /Users/ansonhe/Desktop/ur.py"\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"To load files into the board using shell:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},'aip shell -n -c "put <YourPythonFilePath> [Path]"\n# Example Usage:\n# aip shell -n -c "put /Users/ansonhe/Desktop/ur.py"\n')),(0,i.yg)("h3",{id:"running-your-first-script"},"Running your First Script"),(0,i.yg)("p",null,"Once flashed the ArduPy firmware, there should be a USB drive named ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"ARDUPY"))," appear in your PC. You can create the following Python files to get started."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"boot.py")))),(0,i.yg)("p",null,"To run a MicroPython script from boot up, simply name your project ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"boot.py"))," in the root location of the board. ",(0,i.yg)("strong",{parentName:"p"},"This script is executed when the device boots up.")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"main.py")))),(0,i.yg)("p",null,"This is the default python script, but this does not run on boot up. The ",(0,i.yg)("inlineCode",{parentName:"p"},"main.py")," runs when ",(0,i.yg)("inlineCode",{parentName:"p"},"main.py")," has changes saved to it. i.e. it can auto reload."),(0,i.yg)("h3",{id:"usage-under-ardupy-mpfshell"},"Usage under ardupy-mpfshell"),(0,i.yg)("p",null,"Once entered ardupy-mpfshell, use ",(0,i.yg)("inlineCode",{parentName:"p"},"help")," to check commands usage. Here listed some useful commands:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"To list files on the deivces:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"ls\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"To remove a file (or a directory) on the device:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"rm <File/Directory>\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"To upload e.g. the local file ",(0,i.yg)("inlineCode",{parentName:"li"},"boot.py")," to the device:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"put <YourPythonFilePath> [Path]\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"To execute the files i.e. ",(0,i.yg)("inlineCode",{parentName:"li"},"test.py")," on the device:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"execfile test.py\n")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-mpfshell.png"})),(0,i.yg)("h2",{id:"using-aip-to-include-other-ardupy-libraries-example"},"Using aip to include Other ArduPy Libraries Example"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"aip")," is one of the key feature of ArduPy, which can be used to convert Arduino Libraries to Python Interface to be used for ArduPy. Here we provide an example, how to include the ArduPy library into ArduPy Firmware using Wio Terminal:"),(0,i.yg)("p",null,"1.Open Terminal/Powershell, run the following to install ardupy libraries."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"aip install Seeed-Studio/seeed-ardupy-ultrasonic-sensor\n")),(0,i.yg)("p",null,"2.Build the firmware:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"aip build --board=wio_terminal\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note:")," Usage of flashing firmware will appeared at the bottom of build."),(0,i.yg)("p",null,'3.Flash the "',(0,i.yg)("strong",{parentName:"p"},"NEW"),'" firmware into the board ',(0,i.yg)("strong",{parentName:"p"},"by copying the usage from end of build"),". Here aip will automatically look for the board connected to the PC and upload the firmware. If board is not connected, an error will appear."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"aip flash\n")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-install-new.gif"})),(0,i.yg)("h4",{id:"library-example-usage"},"Library Example Usage"),(0,i.yg)("p",null,"Once the library is included within the ArduPy firmware and flashed into the device, you can import and use the module as follow:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},'aip shell -n -c "put /Users/ansonhe/Desktop/ur.py"\n')),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Replace ",(0,i.yg)("inlineCode",{parentName:"p"},"/Users/ansonhe/Desktop")," to your path.")),(0,i.yg)("p",null,"where the ",(0,i.yg)("inlineCode",{parentName:"p"},"ur.py")," is:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-py"},"from arduino import grove_ultra_ranger\nimport time\n\nur = grove_ultra_ranger(0)\n\nwhile True:\n    print (\"The distance to obstacles in front is:\", ur.cm, 'centimeter')\n    time.sleep(1)\n")),(0,i.yg)("p",null,"For more reference, please check the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/seeed-ardupy-ultrasonic-sensor"},"seeed-ardupy-ultrasonic-sensor"),"."),(0,i.yg)("h3",{id:"faq"},"FAQ"),(0,i.yg)("p",null,"For more aip reference, please visit ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ardupy-aip"},"ardupy-aip")," to find out more."),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"time-and-delay"},"Time and Delay"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Importing time module and delaying:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-py"},"import time\n\ntime.sleep(1)           # Delay for 1 second\ntime.sleep_ms(500)      # Delay for 500 milliseconds\ntime.sleep_us(500)      # Delay for 500 microseconds\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Using time counter:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-py"},"import time\n\ntime.ticks_ms()          # milliseconds counter\nstart = time.ticks_us()  # microseconds counter\ntime.ticks_diff(time.tick_us(), start) # Measure the difference between counters\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note:")," You can use the ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"TAB"))," key to auto-suggest and see all the functions available.For example, after typing ",(0,i.yg)("inlineCode",{parentName:"p"},"time."),", press ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"TAB"))," to sell all the functions in time."),(0,i.yg)("p",null,"For more reference, please visit ",(0,i.yg)("a",{parentName:"p",href:"https://docs.micropython.org/en/latest/library/utime.html"},"MicroPython time related functions"),"."),(0,i.yg)("h2",{id:"pin-and-gpio"},"Pin and GPIO"),(0,i.yg)("h3",{id:"pinout-diagram-for-seeeduino-xiao"},"Pinout Diagram for Seeeduino XIAO"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout.jpg",alt:null})),(0,i.yg)("h3",{id:"pinout-diagram-for-wio-terminal"},"Pinout Diagram for Wio Terminal"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg",alt:null})),(0,i.yg)("p",null,"To reference GPIO in ArduPy, simply use the physical pin map of the device that you are using. For example, for Wio Terminal, Pin 1 is 3.3V and Pin 2 is 5V."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Importing Pin and configuring GPIO:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-py"},"from machine import Pin\np3 = Pin(3, Pin.OUT)    # Setting Pin 3 as a output pin\np3.on()                 # Setting Pin 3 to HIGH\np3.off()                # Setting Pin 3 to LOW\n\np3.value(1)             # Setting Pin 3 to HIGH using value method\n\n\np5 = Pin(5, Pin.IN)     # Setting Pin 5 as input pin\np5.value()              # Prints the value of the input pin\n\np3 = Pin(3, Pin.OUT, value=1) # Setting Pin 3 as output pin and HIGH in one line\np5 = Pin(5, Pin.IN, Pin.PULL_UP) # Setting Pin 5 as input with pull-up resistors\n")),(0,i.yg)("h2",{id:"map"},"Map"),(0,i.yg)("p",null,"To make it easier access to the Boards peripherals\uff0cArduPy has mapped the same calling methods from Arduino:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-py"},"from machine import Pin, Map\nimport time\n\nLED = Pin(Map.LED_BUILTIN, Pin.OUT) # Setting builtin LED as output\n\nwhile True:\n    LED.on()\n    time.sleep(1)\n    LED.on()\n    time.sleep(1)\n")),(0,i.yg)("h2",{id:"pwm-pulse-width-modulation"},"PWM (Pulse Width Modulation)"),(0,i.yg)("p",null,"To use PWM, you must use the PWM channels on the device. Please refer this back to the device pin map, and indicate where the PWM channels are."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Using PWM:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-py"},"from machine import Pin, PWM\n\npwm0 = PWM(Pin(13))     # Creating PWM Channel on Pin 13\npwm0.freq()             # Current frequency\npwm0.freq(1000)         # Sets the frequency to 1000Hz\npwm0.duty()             # Current duty cycle\npwm0.duty(200)          # Sets the duty cycle to 200\npwm0.deinit()           # Switch off PWM on the pin\n\npwm1 = PWM(Pin(16), freq=1000, duty=200) # PWM in one line\n")),(0,i.yg)("h2",{id:"adc"},"ADC"),(0,i.yg)("p",null,"To use ADC on the device, you must use the analog pins. For example, Pin 13(A0) on Wio Terminal."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note: ADC channel on Wio Terminal is 10 bit(0-1023).")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Using ADC")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-py"},"from machine import ADC, Pin\n\nadc = ADC(Pin(13))      # Crating ADC on Pin 13\nadc.read()              # reading ADC value, 0 ~ 1023\n")),(0,i.yg)("h2",{id:"dac"},"DAC"),(0,i.yg)("p",null,"To use DAC on the device, you must use the DAC pins or PWM pins on the board. For example, Pin 11(DAC0) on Wio Terminal."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note: DAC channel on Wio Terminal is 12 bit(0-4095).")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Using DAC:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-py"},"from machine import DAC, Pin\n\ndac0 = DAC(Pin(11))      # Creating DAC on Pin 11\ndac0.write(512)          # Writing value to DAC, 512/4096*3.3 = 0.4125 V\n\ndac1 = DAC(Pin(26), resolution=10)  # Creating DAC on Pin 26 and using 10 bit resolution\ndac1.write(1023)                    # Writing max output to DAC, 3.3V\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note:")," When using DAC on PWM pins, the resolution on the channel will be only 8-bit."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-py"},"# Using DAC om PWM Pins\nfrom machine import DAC, Pin\n\ndac2 = DAC(Pin(16))     # Creating DAC on Pin 16\ndac2.write(128)         # Writing value to DAC, 128/255*3.3 = 1.65V\n")),(0,i.yg)("h2",{id:"lcd"},"LCD"),(0,i.yg)("p",null,"For Wio Terminal, the TFT LCD display can be used as followed. For more LCD reference, please visit ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/ArduPy-LCD/"},(0,i.yg)("strong",{parentName:"a"},"ArduPy LCD API Reference")),"."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Using the LCD module:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-py"},'from machine import LCD\n\nlcd = LCD()                            # Initialize LCD and turn the backlight\nlcd.fillScreen(lcd.color.BLACK)        # Fill the LCD screen with color black\nlcd.setTextSize(2)                     # Setting font size to 2\nlcd.setTextColor(lcd.color.GREEN)      # Setting test color to Green\nlcd.drawString("Hello World!", 0, 0)   # Printing Hello World at (0, 0)\n')),(0,i.yg)("p",null,"Note: Use ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"tab")),"  to see the available functions."),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"ide-getting-started"},"IDE Getting Started"),(0,i.yg)("p",null,"As mentioned before, you can use your preferred editor to write your Python program. To run and test program easily, you can simply edit the ",(0,i.yg)("inlineCode",{parentName:"p"},"main.py")," file in the ",(0,i.yg)("inlineCode",{parentName:"p"},"ARDUPY")," USB  location (auto re-load feature). Here will demonstrate another quick example  using ",(0,i.yg)("strong",{parentName:"p"},"Wio Terminal"),":"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Make sure you have followed the above procedures before the next session.")),(0,i.yg)("p",null,"1.Open ",(0,i.yg)("inlineCode",{parentName:"p"},"main.py")," in ",(0,i.yg)("inlineCode",{parentName:"p"},"ARDUPY")," USB location."),(0,i.yg)("p",null,"2.Copy the following code to ",(0,i.yg)("inlineCode",{parentName:"p"},"main.py")," and save the file."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-py"},'from machine import LCD\nimport time, math\n\nDEG2RAD = 0.0174532925\nlcd = LCD()\nlcd.fillScreen(lcd.color.BLACK)\n\n# DRAW CIRCLE SEGMENTS\n# x,y == coords of centre of circle\n# start_angle = 0 - 359\n# sub_angle   = 0 - 360 = subtended angle\n# r = radius\n# colour = 16 bit colour value\n\ndef fillSegment(x, y, startAngle, subAngle, r, color):\n    # Calculate first pair of coordinates for segment start\n    sx = math.cos((startAngle - 90) * DEG2RAD)\n    sy = math.sin((startAngle - 90) * DEG2RAD)\n    x1 = sx * r + x\n    y1 = sy * r + y\n\n    # Draw colour blocks every inc degrees\n    for i in range(startAngle, startAngle+subAngle, 1):\n        # Calculate pair of coordinates for segment end\n        x2 = math.cos((i + 1 - 90) * DEG2RAD) * r + x\n        y2 = math.sin((i + 1 - 90) * DEG2RAD) * r + y\n\n        lcd.fillTriangle(int(x1), int(y1), int(x2), int(y2), x, y, color)\n\n        # Copy segment end to segment start for next segment\n        x1 = x2\n        y1 = y2\n\ndef main():\n    # Draw 4 pie chart segments\n    fillSegment(160, 120, 0, 60, 100, lcd.color.RED)\n    fillSegment(160, 120, 60, 30, 100, lcd.color.GREEN)\n    fillSegment(160, 120, 60 + 30, 120, 100, lcd.color.BLUE)\n    fillSegment(160, 120, 60 + 30 + 120, 150, 100, lcd.color.YELLOW)\n    time.sleep(1)\n    fillSegment(160, 120, 0, 360, 100, lcd.color.BLACK)\n\nif __name__ == "__main__":\n    while True:\n        main()\n')),(0,i.yg)("p",null,"3.You should see the Wio Terminal starts drawing pie chart on the screen instantly!"),(0,i.yg)("p",null,"The auto re-load can be very useful when testing on small programs."),(0,i.yg)("h2",{id:"tech-support"},"Tech Support"),(0,i.yg)("p",null,"Please submit any technical issue into our ",(0,i.yg)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),(0,i.yg)("br",null),(0,i.yg)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}g.isMDXComponent=!0}}]);