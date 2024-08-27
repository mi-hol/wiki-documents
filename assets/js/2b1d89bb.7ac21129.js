"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[24305],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),c=a,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},30270:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(9668),a=(r(96540),r(15680));const o={description:"Arch GPRS V2",title:"Arch GPRS V2",keywords:["Arch"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Arch_GPRS_V2",last_update:{date:"2/1/2023",author:"hushuxu"}},i=void 0,l={unversionedId:"Sensor/Arch/Arch_GPRS_V2",id:"Sensor/Arch/Arch_GPRS_V2",title:"Arch GPRS V2",description:"Arch GPRS V2",source:"@site/docs/Sensor/Arch/Arch_GPRS_V2.md",sourceDirName:"Sensor/Arch",slug:"/Arch_GPRS_V2",permalink:"/Arch_GPRS_V2",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Arch/Arch_GPRS_V2.md",tags:[],version:"current",lastUpdatedBy:"hushuxu",lastUpdatedAt:1675209600,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{description:"Arch GPRS V2",title:"Arch GPRS V2",keywords:["Arch"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Arch_GPRS_V2",last_update:{date:"2/1/2023",author:"hushuxu"}},sidebar:"ProductSidebar",previous:{title:"Arch GPRS",permalink:"/Arch_GPRS"},next:{title:"Arch Max",permalink:"/Arch_Max"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Arch GPRS V2 vs Arch GPRS",id:"arch-gprs-v2-vs-arch-gprs",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Programming Arch on Windows, Linux or Mac",id:"programming-arch-on-windows-linux-or-mac",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arch_GPRS_V2/img/Arch_GPRS_V2.jpg",alt:null})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Arch GPRS V2")," is the new and improved version of the Arch GPRS development board from ",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com"},"Seeed Studio"),". Like the original Arch GPRS, it is also an ",(0,a.yg)("a",{parentName:"p",href:"http://mbed.org/handbook/mbed-SDK"},"mbed")," enabled development board that houses a cellular networking module along with a microcontroller. Arch GPRS V2 uses the LPC11U37 Microcontroller instead of the LPC11U24 used in the Arch GPRS. You can use the mbed C/C++ SDK, libraries and optimizing online development tools to rapidly build your Arch GPRS V2 based prototype. The cellular networking module on the Arch GPRS is based on the SIM900 Quad-band GSM/GRPS engine from SIMCom. With this, data collection functions can be performed easily using the 2G GSM/GPRS based cellular network.\nArch GPRS V2 has a standard Arduino interface as well as ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/",title:"Grove"},"Grove")," connectors on board. It is convenient to connect existing Shields and ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/",title:"Grove"},"Grove")," products to Arch GPRS V2. You can even connect a solar panel directly to the board to allow the battery to charge from it. A low-power design guarantees easy charging and long hour operations when outdoors!"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Arch-GPRS-V2-p-2026.html"},(0,a.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,a.yg)("div",{class:"admonition note"},(0,a.yg)("p",{class:"admonition-title"},"Note"),"Arch GPRS V2 does not come with ",(0,a.yg)("a",{href:"https://mbed.org/handbook/mbed-HDK"},"an mbed interface"),". To output debug messages, please try ",(0,a.yg)("a",{href:"https://mbed.org/handbook/USBSerial"},"USBSerial"),"."),(0,a.yg)("h2",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"mbed enabled"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Online development tools"),(0,a.yg)("li",{parentName:"ul"},"Easy to use C/C++ SDK"),(0,a.yg)("li",{parentName:"ul"},"Lots of published libraries, projects"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"NXP LPC11U37 Controller"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Low power ARM Cortex-M0 Core"),(0,a.yg)("li",{parentName:"ul"},"On chip 128KB Flash, 12KB SRAM, 4KB EEPROM"),(0,a.yg)("li",{parentName:"ul"},"USB Device, UART, I2C"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"SIM900 Module"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Quad-band (850/900/1800/1900MHz) GSM/GPRS support"),(0,a.yg)("li",{parentName:"ul"},"Supports external SIM card\uff1a 1.8V/3V"),(0,a.yg)("li",{parentName:"ul"},"Control with standard AT Commands"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Select automatically USB5V or Solar panel to charge a battery"))),(0,a.yg)("h2",{id:"arch-gprs-v2-vs-arch-gprs"},"Arch GPRS V2 vs Arch GPRS"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"th"},"Arch GPRS V2")),(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"th"},"Arch GPRS")))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"MCU"),(0,a.yg)("td",{parentName:"tr",align:null},"LPC11U27"),(0,a.yg)("td",{parentName:"tr",align:null},"LPC11U24")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"GSM/GPRS Module"),(0,a.yg)("td",{parentName:"tr",align:null},"SIM900"),(0,a.yg)("td",{parentName:"tr",align:null},"EG-10")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"MicroSD Card"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes"),(0,a.yg)("td",{parentName:"tr",align:null},"No")))),(0,a.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arch_GPRS_V2/img/Arch_GPRS_V2_Pinout.png",alt:null})),(0,a.yg)("h2",{id:"getting-started"},"Getting Started"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arch_GPRS_V2/img/Get_started_with_arch.png",alt:null})),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Login into the mbed environment from ",(0,a.yg)("a",{parentName:"li",href:"http://www.mbed.org"},"here")),(0,a.yg)("li",{parentName:"ol"},"Import the ",(0,a.yg)("a",{parentName:"li",href:"https://mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-GPRS"},"mbed","_","blinky")," program"),(0,a.yg)("li",{parentName:"ol"},"Verify that the code imported in main.cpp in the mbed","_","blinky folder in the mbed online Compiler environment is as indicated in the figure above under Step 3. Ensure that the platform selected for compiling the code for is the Seeeduino-Arch. Now go ahead and compile the code. When asked to save the resultant binary file (.bin), save it to a designated folder on your PC."),(0,a.yg)("li",{parentName:"ol"},"Now connect your Arch board to your PC and long press the reset button. A removable USB drive named CRP DISABLD should automatically appear on your PC. Go to the CRP DISABLD drive, delete the existing firmware file that you see in the folder and copy the downloaded binary file to CRP DISABLD. Quick press the reset button to run the new binary."),(0,a.yg)("li",{parentName:"ol"},"Verify that your code is running successfully by looking at the Arch GPRS V2 board. If the right-most LED from the Pinout shown above is blinking and the other 3 LEDs next to it are all ON, this implies that your code is working.")),(0,a.yg)("p",null,"You can change the code to the following and see what happens:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'\n    #include "mbed.h"\n\n    DigitalOut myled1(LED2); //left most LED if board is held as shown in Pinout diagram above\n    DigitalOut myled2(LED3); //2nd from left\n    DigitalOut myled3(LED4); //3rd from left\n    DigitalOut myled4(LED1); //4th from left (right most)\n\n    int main() {\n        while(1) {\n                    \n            myled1 = 1; //left most LED turns ON, rest off\n            myled2 = 0;\n            myled3 = 0;\n            myled4 = 0;\n            \n            wait(1); //1 sec wait time\n            myled1 = 0;\n            myled2 = 1; //2nd from left LED turns ON, rest off\n            myled3 = 0;\n            myled4 = 0;\n\n            wait(1);\n            myled1 = 0;\n            myled2 = 0;\n            myled3 = 1; //3rd from left LED turns ON, rest off\n            myled4 = 0;\n            \n            wait(1);\n            myled1 = 0;\n            myled2 = 0;\n            myled3 = 0;\n            myled4 = 1; //4th from left (right most) LED turns ON, rest off\n            \n            wait(1);\n        }\n    }\n')),(0,a.yg)("p",null,"When you Compile and Run the above code on the Arch GPRS V2 board, you should see that the LEDs blink in sequence."),(0,a.yg)("p",null,"If you get through the above steps successfully, this means that:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Your Arch GPRS V2 is powering up correctly."),(0,a.yg)("li",{parentName:"ol"},"Your code is being downloaded and run by the Arch GPRS V2 module correctly."),(0,a.yg)("li",{parentName:"ol"},"You are ready to take on more complex projects now!")),(0,a.yg)("h2",{id:"programming-arch-on-windows-linux-or-mac"},"Programming Arch on Windows, Linux or Mac"),(0,a.yg)("p",null,"Arch does not have an mbed interface. It uses USB In-System-Programming (ISP) to upgrade the firmware."),(0,a.yg)("p",null,'To enter the USB ISP mode, connect the Arch with your computer and long press its button, and then a disk named "CRP DISABLD" will appear.'),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"On windows"),(0,a.yg)("ol",{parentName:"li"},(0,a.yg)("li",{parentName:"ol"},'delete firmware.bin in the "CRP DISABLD" disk.'),(0,a.yg)("li",{parentName:"ol"},"copy a new firmware into the disk."))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"On linux"),(0,a.yg)("ol",{parentName:"li"},(0,a.yg)("li",{parentName:"ol"},"if the disk is not mounted, mount the disk at ",(0,a.yg)("strong",{parentName:"li"},"{mnt","_","dir}")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"dd if={new","_","firmware.bin} of={mnt","_","dir}/firmware.bin conv=notrunc")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"On mac you'll need to use Terminal to run the following script to copy you're .bin file to your Arch"),(0,a.yg)("ol",{parentName:"li"},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"dd if={new","_","firmare.bin} of=/Volumes/CRP","\\"," DISABLD/firmware.bin conv=notrunc"))))),(0,a.yg)("p",null,"If you are so inclined, you can also create an ",(0,a.yg)("strong",{parentName:"p"},"Automator"),' application to support drag-and-drop of the file to your board. Just create a "',(0,a.yg)("em",{parentName:"p"},"Run Shell Script"),'" with the following command:'),(0,a.yg)("p",null,"dd if=$","*"," of=/Volumes/CRP","\\"," DISABLD/firmware.bin conv=notrunc"),(0,a.yg)("p",null,"You will also need to change the ",(0,a.yg)("inlineCode",{parentName:"p"},'"Pass Input"')," option from ",(0,a.yg)("inlineCode",{parentName:"p"},'"to stdin"')," to ",(0,a.yg)("inlineCode",{parentName:"p"},'"as arguments"'),"--without this you will get an error ",(0,a.yg)("inlineCode",{parentName:"p"},"\"The action 'Run Shell Script' encountered an error\"")," or ",(0,a.yg)("inlineCode",{parentName:"p"},'"dd: no value specified for if (1)"')," in the log."),(0,a.yg)("p",null,"Also, an improved form of the script is:\n",(0,a.yg)("strong",{parentName:"p"},'dd if="${1}" of=/Volumes/CRP\\ DISABLD/firmware.bin conv=notrunc')),(0,a.yg)("p",null,"Which should handle spaces in the file path and only uses the first file supplied.\nQuick press the button to run the new firmware."),(0,a.yg)("h2",{id:"resources"},"Resources"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://developer.mbed.org/platforms/Seeed-Arch-GPRS/"},"Arch GPRS V2.0 mbed developer platform page"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Design Files")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arch_GPRS_V2/res/Arch_GPRS_v2.0_sch_pcb.zip"},"Schematic and Board files in EAGLE format")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arch_GPRS_V2/res/Arch_GPRS_v2.0_SCH_PDF.pdf"},"Schematic in PDF format"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Applications and Library")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"http://developer.mbed.org/teams/Seeed/code/GPRSInterface/"},"GPRS library")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://mbed.org/users/yihui/notebook/debug-seeeduino-arch-using-cmsis-dap/"},"Use Seeeduino Arch as a debug adapter to debug another Seeeduino Arch")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://mbed.org/users/yihui/notebook/sense-environment/"},"Sense environment")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://mbed.org/cookbook/seeed-grove-RTC"},"Play with Grove RTC")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://mbed.org/cookbook/Seeed-grove-ultrasonic-ranger"},"Play with Grove - Ultrasonic ranger"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"See also")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/GPRS_Shield_V2.0"},"SIM900 GPRS Module Information"))),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);