"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7336],{15680:(e,t,o)=>{o.d(t,{xA:()=>c,yg:()=>h});var n=o(96540);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(o),g=r,h=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return o?n.createElement(h,s(s({ref:t},c),{},{components:o})):n.createElement(h,s({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:r,s[1]=a;for(var p=2;p<i;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},42390:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=o(9668),r=(o(96540),o(15680));const i={description:"Grove - HCHO Sensor",title:"Grove - HCHO Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-HCHO_Sensor",last_update:{date:"1/5/2023",author:"shuxu hu"}},s=void 0,a={unversionedId:"Sensor/Grove/Grove_Sensors/Gas/Grove-HCHO_Sensor",id:"Sensor/Grove/Grove_Sensors/Gas/Grove-HCHO_Sensor",title:"Grove - HCHO Sensor",description:"Grove - HCHO Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Gas/Grove-HCHO_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Gas",slug:"/Grove-HCHO_Sensor",permalink:"/Grove-HCHO_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Gas/Grove-HCHO_Sensor.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{description:"Grove - HCHO Sensor",title:"Grove - HCHO Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-HCHO_Sensor",last_update:{date:"1/5/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - VOC Gas Sensor (SGP40)",permalink:"/grove_voc_gas_sensor_sgp40"},next:{title:"Grove - Multichannel Gas Sensor",permalink:"/Grove-Multichannel_Gas_Sensor"}},l={},p=[{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.yg)(d,(0,n.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/HCHO_Sensor_01.jpg",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",null,"The Grove - HCHO Sensor is a semiconductor VOC gas sensor. Its design is based on WSP2110 whose conductivity changes with the concentration of VOC gas in air. Through the circuit, the conductivity can be converted to output signal that corresponding to the gas concentration. This sensor can detect the gas whose concentration is up to 1ppm. It\u2019s suitable for detecting formaldehyde, benzene, toluene and other volatile components. This product can be used to detect harmful gas in the home environment. Therefore, it\u2019s a good assistant for you to improve indoor environment quality of life."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-HCHO-Sensor.html"},(0,r.yg)("p",null,(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,r.yg)("div",{class:"admonition warning"},(0,r.yg)("p",{class:"admonition-title"},"Warning"),"The sensor value only reflects the approximated trend of gas concentration in a permissible error range, it DOES NOT represent the exact gas concentration. The detection of certain components in the air usually requires a more precise and costly instrument, which cannot be done with a single gas sensor. If your project is aimed at obtaining the gas concentration at a very precise level, then we do not recommend this gas sensor."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"We've released the [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/Sensor_gas/), it will help you choose the gas sensor that best suits your needs.\n"))),(0,r.yg)("h2",{id:"specifications"},"Specifications"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Operating Voltage: 5.0V \xb1 0.3V"),(0,r.yg)("li",{parentName:"ul"},"Target Gases: HCHO, Benzene,Toluene,Alcohol"),(0,r.yg)("li",{parentName:"ul"},"Concentration Range: 1~50 ppm"),(0,r.yg)("li",{parentName:"ul"},"Sensor Resistance Value(Rs): 10K\u03a9-100K\u03a9(in 10ppm HCHO)"),(0,r.yg)("li",{parentName:"ul"},"Sensitivity: Rs(in air)/Rs(10ppm HCHO)\u22655")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,r.yg)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,r.yg)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",null,(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",null,(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:"pir",width:200,height:"auto"})))))),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,r.yg)("h2",{id:"getting-started"},"Getting Started"),(0,r.yg)("p",null,"The Grove - HCHO Sensor can be used to detect VOCs, such as HCHO,toluene, benzene, alcohol. Here we take HCHO for an example to demonstrate how to use this sensor."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/HCHO_Hardware_Connection.jpg",alt:"pir",width:600,height:"auto"})),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'// demo of Grove - HCHO Sensor\n\n#define Vc 4.95\n\nvoid setup()\n{\n    Serial.begin(9600);\n}\n\nvoid loop()\n{\n    int sensorValue=analogRead(A0);\n    float R0=(1023.0/sensorValue)-1;\n    Serial.print("R0 = ");\n    Serial.println(R0);\n    delay(500);\n}\n')),(0,r.yg)("p",null,"After uploading the code, open the serial monitor to get the R0 under normal condition(outdoor is the best)."),(0,r.yg)("p",null,"Adjust the resistance of R1(the blue potentiometer) with a small screwer to make the number of R0 in the range of 10-100 and record that number(my R0 number here is 34.28)."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/R0.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",null,"Type your number of R0 in ",(0,r.yg)("inlineCode",{parentName:"p"},"#define R0 ***"),", then uploading the code. Remember not to screw R1 anymore, unless you decide to detect R0 again."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'// demo of Grove - HCHO Sensor\n#include <math.h>\n#define Vc 4.95\n//the number of R0 you detected just now\n#define R0 34.28\n\nvoid setup()\n{\n    Serial.begin(9600);\n}\n\nvoid loop()\n{\n    int sensorValue=analogRead(A0);\n    double Rs=(1023.0/sensorValue)-1;\n    Serial.print("Rs = ");\n    Serial.println(Rs);\n    double ppm=pow(10.0,((log10(Rs/R0)-0.0827)/(-0.4807)));\n    Serial.print("HCHO ppm = ");\n    Serial.println(ppm);\n    delay(1000);\n}\n')),(0,r.yg)("p",null,"Then move the sensor into the office, and read the HCHO ppm value:"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/Rs.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",null,"From the Typical Sensitivity Curve we could know that the detection range is 1-50ppm."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/Sensitivity_Characteristic.jpg",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",null,"To detect other VOC gas, you could calculate Rs/R0, then refer to the sensitivity characteristic diagram and find the gas concentration. Or use the following python script to fit the typical sensitivity curve and calculate the value of a and b:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"ppm = 10 ^ ((log10(Rs/R0) + a) / b)")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"# coding=utf-8\n# calculate a and b of HCHO\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n#get the measure data from the Typical Sensitivity Curve\nx = np.array([1, 5, 10, 20, 40])\ny = np.array([1.21, 0.56, 0.4, 0.3, 0.21])\n\nplt.subplot(221)\nplt.loglog(x,y,lw=2)\n#plt.ylim(0,1.5)  \nplt.xlabel('log(x)')  \nplt.ylabel('log(y)')  \nplt.show()  \n")),(0,r.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Grove-HCHO_Sensor_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.yg)("h2",{id:"resources"},"Resources"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Grove-HCHO_Sensor_Eagle_File.zip"},"Grove - HCHO Sensor Eagle File")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Grove%20-%20HCHO%20Sensor.pdf"},"Grove - HCHO Sensor Schematic in PDF")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/WSP2110.pdf"},"WSP2110 Datasheet (Chinese)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Wsp2110-1-.pdf"},"WSP2110 Datasheet (English)"))),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})),(0,r.yg)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,r.yg)("p",null,"With the SenseCAP ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,r.yg)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,r.yg)("div",{align:"center"},(0,r.yg)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}u.isMDXComponent=!0}}]);