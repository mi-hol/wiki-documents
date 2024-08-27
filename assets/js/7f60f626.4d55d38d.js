"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[60678],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=d(n),p=r,y=g["".concat(s,".").concat(p)]||g[p]||c[p]||o;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(9668),r=(n(96540),n(15680));const o={title:"Grove- I2C ADC",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-I2C_ADC/",slug:"/Grove-I2C_ADC",last_update:{date:"01/06/2022",author:"gunengyu"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors_Network/Standard_Protocol/Grove-I2C_ADC",id:"Sensor/Grove/Grove_Sensors_Network/Standard_Protocol/Grove-I2C_ADC",title:"Grove- I2C ADC",description:"Grove - I2C ADC is a 12-bit precision ADC module based on ADC121C021. It helps you increase the accuracy of value collected from analog sensor by providing a constant reference voltage. Because its address is changeable, you can use up to 9 I2C ADC at the same time at most. At the other hand, this module provides auto sleep function which lowers the power consumption considerably.",source:"@site/docs/Sensor/Grove/Grove_Sensors_Network/Standard_Protocol/Grove-I2C_ADC.md",sourceDirName:"Sensor/Grove/Grove_Sensors_Network/Standard_Protocol",slug:"/Grove-I2C_ADC",permalink:"/Grove-I2C_ADC",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors_Network/Standard_Protocol/Grove-I2C_ADC.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641427200,formattedLastUpdatedAt:"Jan 6, 2022",frontMatter:{title:"Grove- I2C ADC",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-I2C_ADC/",slug:"/Grove-I2C_ADC",last_update:{date:"01/06/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - DMX512",permalink:"/Grove-DMX512"},next:{title:"Grove - I2C FM Receiver",permalink:"/Grove-I2C_FM_Receiver"}},s={},d=[{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"With Arduino",id:"with-arduino",level:3},{value:"Reference",id:"reference",level:2},{value:"I2C Address Setting",id:"i2c-address-setting",level:3},{value:"How much does the I2C ADC increase the accuracy?",id:"how-much-does-the-i2c-adc-increase-the-accuracy",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:d},g="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-RGB-LED-Stick-20-WS2813-Mini/img/ssd.jpg",alt:null})),(0,r.yg)("p",null,"Grove - I2C ADC is a 12-bit precision ADC module based on ADC121C021. It helps you increase the accuracy of value collected from analog sensor by providing a constant reference voltage. Because its address is changeable, you can use up to 9 I2C ADC at the same time at most. At the other hand, this module provides auto sleep function which lowers the power consumption considerably."),(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-I2C-ADC.html"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,r.yg)("h2",{id:"version"},"Version"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Version"),(0,r.yg)("th",{parentName:"tr",align:null},"Default I2C Address"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Grove - I2C ADC v1.0/v1.1"),(0,r.yg)("td",{parentName:"tr",align:null},"0x55")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Grove - I2C ADC v1.2"),(0,r.yg)("td",{parentName:"tr",align:null},"0x50")))),(0,r.yg)("h2",{id:"features"},"Features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Low power consumption"),(0,r.yg)("li",{parentName:"ul"},"High precision"),(0,r.yg)("li",{parentName:"ul"},"Automatic power-down mode"),(0,r.yg)("li",{parentName:"ul"},"Address changeable")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,r.yg)("h2",{id:"specifications"},"Specifications"),(0,r.yg)("hr",null),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Item"),(0,r.yg)("th",{parentName:"tr",align:null},"Typical"),(0,r.yg)("th",{parentName:"tr",align:null},"Unit"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Working Voltage"),(0,r.yg)("td",{parentName:"tr",align:null},"5.0"),(0,r.yg)("td",{parentName:"tr",align:null},"VDC")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Resolution"),(0,r.yg)("td",{parentName:"tr",align:null},"12"),(0,r.yg)("td",{parentName:"tr",align:null},"Bit")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Sample Rate"),(0,r.yg)("td",{parentName:"tr",align:null},"188.9"),(0,r.yg)("td",{parentName:"tr",align:null},"ksps")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Dimension"),(0,r.yg)("td",{parentName:"tr",align:null},"40X20"),(0,r.yg)("td",{parentName:"tr",align:null},"mm")))),(0,r.yg)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,r.yg)("hr",null),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,r.yg)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg",alt:null})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg",alt:null}))))),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,r.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.yg)("hr",null),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"J1:")," used to connect Arduino IIC Interface as Grove - I2C ADC output interface."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"J2:")," used to connect analog sensor as Grove - I2C ADC input interface."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"U1:")," ADC121C021 IC,12-Bit Analog-to-Digital Converter"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},'The black line area is used to set the IIC address. ADDR0 and ADDR1 are shipped connected to L. You can change them to "H" or floating by a little modification on the board(floating is neither connecting "H" nor connecting "L"). Find details in the Reference.')),(0,r.yg)("h2",{id:"getting-started"},"Getting Started"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"with-arduino"},"With Arduino"),(0,r.yg)("p",null,"Grove - I2C ADC has two interfaces: input socket(J2) and output socket(J1). Connect an analog sensor to its input socket and connect the I2C ADC to Arduino/Seeeduino also via Grove cables."),(0,r.yg)("p",null,"Take Grove - Gas Sensor as an example, and now we learn how to read sensor data using Grove - I2C ADC.\nThe hardware installation should be like this:"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Read_gas_sensor_data_using_I2C_ADC.jpg",alt:null})),(0,r.yg)("p",null,"Now you can read the gas sensor value using the code below."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'#include <Wire.h>\n\xa0\n#define ADDR_ADC121             0x50 // For v1.0 & v1.1, I2C address is 0x55\n\xa0\n#define V_REF 3.00\n\xa0\n#define REG_ADDR_RESULT         0x00\n#define REG_ADDR_ALERT          0x01\n#define REG_ADDR_CONFIG         0x02\n#define REG_ADDR_LIMITL         0x03\n#define REG_ADDR_LIMITH         0x04\n#define REG_ADDR_HYST           0x05\n#define REG_ADDR_CONVL          0x06\n#define REG_ADDR_CONVH          0x07\n\xa0\nunsigned int getData;\nfloat analogVal=0;         // convert\nvoid init_adc()\n{\n  Wire.beginTransmission(ADDR_ADC121);        // transmit to device\n  Wire.write(REG_ADDR_CONFIG);                // Configuration Register\n  Wire.write(0x20);\n  Wire.endTransmission();  \n}\n\xa0\nvoid read_adc()     //unsigned int *data\n{\n\xa0\n\xa0\n    Wire.beginTransmission(ADDR_ADC121);        // transmit to device\n    Wire.write(REG_ADDR_RESULT);                // get result\n    Wire.endTransmission();\n\xa0\n    Wire.requestFrom(ADDR_ADC121, 2);           // request 2byte from device\n    delay(1);\n    if(Wire.available()<=2)\n    {\n      getData = (Wire.read()&0x0f)<<8;\n      getData |= Wire.read();\n    }\n    Serial.print("getData:");\n    Serial.println(getData);\n    delay(5);\n    Serial.print("The analog value is:");\n    Serial.print(getData*V_REF*2/4096); \n    Serial.println("V");\n}\nvoid setup()\n{\n  Serial.begin(9600);\n  Wire.begin();\n  init_adc();\n}\n\xa0\nvoid loop()\n{  read_adc();//adcRead);\n   delay(50);\n}\n')),(0,r.yg)("p",null,"In the code above, we defined the Vref as 3.0V which is decided by the I2C ADC module. This reference voltage is more accurate than one generated by microcontroller. And you can make that more accurate by measuring the voltage between VA and GND and use that value to replace 3.00 in the code above."),(0,r.yg)("p",null,"Now you can upload the code."),(0,r.yg)("p",null,"Afterwards, open the serial monitor and read the values:"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/IIC_ADC_Read_Result.jpg",alt:null})),(0,r.yg)("div",{class:"admonition note"},(0,r.yg)("p",{class:"admonition-title"},"note"),"The address of Grove - I2C ADC is changeable which means you can redefine its address. That requires some hardware modification on the board. If you are thinking about using more than one I2C ADCs at the same time, follow the instructions in the Reference part below to do so. The maximum number of I2C ADCs that can be used simultaneously is 9, but there are only 4 I2C sockets on Grove - Base Shield V1.2, so if you want to use more than 4 I2C ADC, take a ",(0,r.yg)("a",{href:"/Grove-I2C_Hub"},"Grove - I2C Hub")," to create more I2C sockets."),"### With Beaglebone Green",(0,r.yg)("p",null,"To begin editing programs that live on BBG, you can use the Cloud9 IDE.\nAs a simple exercise to become familiar with Cloud9 IDE, creating a simple application to blink one of the 4 user programmable LEDs on the BeagleBone is a good start."),(0,r.yg)("p",null,"If this is your first time to use Cloud9 IDE, please follow this ",(0,r.yg)("a",{parentName:"p",href:"/BeagleBone_Green"},(0,r.yg)("strong",{parentName:"a"},"link")),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step1:")," Set the Grove - UART socket as a Grove - GPIO Socket, just follow this ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/recipe/362-how-to-use-the-grove-uart-port-as-a-gpio-on-bbg.html"},(0,r.yg)("strong",{parentName:"a"},"link")),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step2:"),' Click the "+" in the top-right to create a new file.'),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/C9-create-tab.png",alt:null})),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/C9_newfile.jpg",alt:null})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step3:")," Copy and paste the following code into the new tab"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"from Adafruit_I2C import Adafruit_I2C\nimport time\n\xa0\nADDR_ADC121 = 0x50\n\xa0\nREG_ADDR_RESULT = 0x00\nREG_ADDR_ALERT = 0x01\nREG_ADDR_CONFIG = 0x02\nREG_ADDR_LIMITL = 0x03\nREG_ADDR_LIMITH = 0x04\nREG_ADDR_HYST = 0x05\nREG_ADDR_CONVL = 0x06\nREG_ADDR_CONVH = 0x07\n\xa0\ni2c = Adafruit_I2C(ADDR_ADC121)           \n\xa0\nclass I2cAdc:\n    def __init__(self):\n        i2c.write8(REG_ADDR_CONFIG, 0x20)\n\xa0\n    def read_adc(self):\n        \"Read ADC data 0-4095.\"\n        data_list = i2c.readList(REG_ADDR_RESULT, 2)\n        #print 'data list', data_list\n        data = ((data_list[0] & 0x0f) << 8 | data_list[1]) & 0xfff\n        return data\n\xa0\nif __name__ == '__main__':\n    # Connect the Grove - I2C ADC to I2C Grove port of Beaglebone Green.\n    adc = I2cAdc()\n    while True:\n        print 'sensor value ', adc.read_adc()\n        time.sleep(.2)\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step4:")," Save the file by clicking the disk icon and giving the file a name with the .py extension."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step5:")," Connect Grove I2C ADC to Grove I2C socket on BBG."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step6:")," Run the code. You'll find that the terminal outputs AD value every 2 seconds."),(0,r.yg)("h2",{id:"reference"},"Reference"),(0,r.yg)("h3",{id:"i2c-address-setting"},"I2C Address Setting"),(0,r.yg)("p",null,"The ADC I2C has a seven-bit hardware address which is decided by ADR0 and ADR1. ADR0 and ADR1 are connected to L inside the board as default. But you can change it. For example, use a knife to cut off the connection between L and ADR0(as the picture shown below), then you make the state of ADR0 into Floating(connected to nothing). And if you solder up ADR0 and H this time, then you make the value of ADR0 H."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Change_I2C_Address.jpg",alt:null})),(0,r.yg)("p",null,"You can find the relationship of hardware I2C address and the values of ADR0 and ADR1 in the following table."),(0,r.yg)("table",{border:"1",cellspacing:"0",width:"50%"},(0,r.yg)("tr",null,(0,r.yg)("th",{rowspan:"2",scope:"col"},"Slave Address[A6 - A0]"),(0,r.yg)("th",{colspan:"2",scope:"col"},"ADR0 and ADR1 inputs state")),(0,r.yg)("tr",null,(0,r.yg)("td",{scope:"col"},"ADR1"),(0,r.yg)("td",{scope:"col"},"ADR0")),(0,r.yg)("tr",null,(0,r.yg)("td",{scope:"row"},"1010000(0x50)"),(0,r.yg)("td",null,"Floating"),(0,r.yg)("td",null,"Floating")),(0,r.yg)("tr",null,(0,r.yg)("td",{scope:"row"},"1010001(0x51)"),(0,r.yg)("td",null,"Floating"),(0,r.yg)("td",null,"L")),(0,r.yg)("tr",null,(0,r.yg)("td",{scope:"row"},"1010010(0x52)"),(0,r.yg)("td",null,"Floating"),(0,r.yg)("td",null,"H")),(0,r.yg)("tr",null,(0,r.yg)("td",{scope:"row"},"1010100(0x54)"),(0,r.yg)("td",null,"L"),(0,r.yg)("td",null,"Floating")),(0,r.yg)("tr",null,(0,r.yg)("td",{scope:"row"},"1010101(default 0x55)"),(0,r.yg)("td",null,"L"),(0,r.yg)("td",null,"L")),(0,r.yg)("tr",null,(0,r.yg)("td",{scope:"row"},"1010110(0x56)"),(0,r.yg)("td",null,"L"),(0,r.yg)("td",null,"H")),(0,r.yg)("tr",null,(0,r.yg)("td",{scope:"row"},"1011000(0x58)"),(0,r.yg)("td",null,"H"),(0,r.yg)("td",null,"Floating")),(0,r.yg)("tr",null,(0,r.yg)("td",{scope:"row"},"1011001(0x59)"),(0,r.yg)("td",null,"H"),(0,r.yg)("td",null,"L")),(0,r.yg)("tr",null,(0,r.yg)("td",{scope:"row"},"1011010(0x5A)"),(0,r.yg)("td",null,"H"),(0,r.yg)("td",null,"H"))),(0,r.yg)("h3",{id:"how-much-does-the-i2c-adc-increase-the-accuracy"},"How much does the I2C ADC increase the accuracy?"),(0,r.yg)("p",null,"Here is an experiment we make to give you a sense about how much the I2C ADC increase the accuracy of an analog sensor. First, let's check the values collected directly through analog port on Arduino/Seeeduino from an Grove - Gas Sensor(MQ5)"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Read_Gas_Sensor_data.jpg",alt:null})),(0,r.yg)("p",null,"We upload the code below to get the data."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'    /*\n     * Grove - Gas Sensor(MQ5)  \n     *\n     * The Gas Sensor detect the related Gas density, \n     * Arduino get the result by analogread. the gas Density is \n     * 0~1, larger the output is, the denser the gas.\n     * Connect the Sensor to A0 in this demo;\n     * \n     *  By: https://www.seeedstudio.com\n    */\n    #define Vref 4.95\n    void setup() {\n      Serial.begin(9600);\n    }\n     \n    void loop() {\n      float vol;\n      int sensorValue = analogRead(A0);\n      vol=(float)sensorValue/1023*Vref;\n      Serial.print("The sensorValue is ");\n      Serial.println(sensorValue);\n      Serial.print("The analog value is ");\n      Serial.print(vol);\n      Serial.println("V");\n      delay(100);\n    }\n')),(0,r.yg)("p",null,"The result is:"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Read_ADC_2.jpg",alt:null})),(0,r.yg)("p",null,"As default, Vref is generated by Arduino which is theoretically 5V. But actually that is a value afloat which results the deviation of the final data. This kind of inaccuracy is avoided when using Grove - I2C ADC, because it provides a strict 3.0V as Vref.\nTo contrast, in the same condition, sensor values collected by the circuit with Grove - I2C ADC in the scope is shown below:"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/IIC_ADC_Read_Result.jpg",alt:null})),(0,r.yg)("p",null,"In order to find out which result is more close to the actual condition, here we use a multimeter to measure the voltage between the pin SIG and pin GND of the sensor."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Measure_the_real_sensor_value_using_DMM.JPG",alt:null})),(0,r.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-I2C_ADC/res/I2C_ADC_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.yg)("h2",{id:"resources"},"Resources"),(0,r.yg)("hr",null),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-I2C_ADC/res/I2C_ADC_Eagle_File.zip"},"I2C ADC Eagle File")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-I2C_ADC/res/ADC121C021_Datasheet.pdf"},"ADC121C021 Datasheet"))),(0,r.yg)("h2",{id:"project"},"Project"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"BeagleBone Green Temperature Monitor on Artik Cloud")," Publish Grove Temperature Sensor values collected by a BeagleBone Green to Artik Cloud."),(0,r.yg)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/LaurenceHR/beaglebone-green-temperature-monitor-on-artik-cloud-08ca3b/embed",width:"350"}),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);