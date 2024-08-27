"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[92344],{15680:(e,t,r)=>{r.d(t,{xA:()=>y,yg:()=>g});var o=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},y=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),c=p(r),u=n,g=c["".concat(s,".").concat(u)]||c[u]||d[u]||a;return r?o.createElement(g,i(i({ref:t},y),{},{components:r})):o.createElement(g,i({ref:t},y))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},86684:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(9668),n=(r(96540),r(15680));const a={title:"Grove - Dry-Reed Relay",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Dry-Reed_Relay/",slug:"/Grove-Dry-Reed_Relay",last_update:{date:"01/09/2022",author:"gunengyu"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Actuator/Grove-Dry-Reed_Relay",id:"Sensor/Grove/Grove_Accessories/Actuator/Grove-Dry-Reed_Relay",title:"Grove - Dry-Reed Relay",description:"The Grove-Dry Reed Relay is a relay module which works through magnetizing the vibration reed via the current in the coils. Compared to electromagnetic relays, the contacts completely sealed is the biggest feature of the Dry-Reed Relay. Besides, it features simplicity in construct, compactness, fast speed and long life, which make it widely applied in many fields such as microelectronic detection, Automatic Control etc.",source:"@site/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-Dry-Reed_Relay.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Actuator",slug:"/Grove-Dry-Reed_Relay",permalink:"/Grove-Dry-Reed_Relay",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-Dry-Reed_Relay.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641686400,formattedLastUpdatedAt:"Jan 9, 2022",frontMatter:{title:"Grove - Dry-Reed Relay",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Dry-Reed_Relay/",slug:"/Grove-Dry-Reed_Relay",last_update:{date:"01/09/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Chainable RGB LED",permalink:"/Grove-Chainable_RGB_LED"},next:{title:"Grove - EL Driver",permalink:"/Grove-EL_Driver"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Usage",id:"usage",level:2},{value:"With Arduino",id:"with-arduino",level:3},{value:"With Raspberry Pi",id:"with-raspberry-pi",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],y={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(c,(0,o.A)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Dry-Reed_Relay/img/DryReed_Relay_01.jpg",alt:null})),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},"Grove-Dry Reed Relay")," is a relay module which works through magnetizing the vibration reed via the current in the coils. Compared to electromagnetic relays, the contacts completely sealed is the biggest feature of the Dry-Reed Relay. Besides, it features simplicity in construct, compactness, fast speed and long life, which make it widely applied in many fields such as microelectronic detection, Automatic Control etc."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Dry-Reed-Relay-p-1412.html"},(0,n.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,n.yg)("h2",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Grove Interface"),(0,n.yg)("li",{parentName:"ul"},"High Speed"),(0,n.yg)("li",{parentName:"ul"},"Good stability"),(0,n.yg)("li",{parentName:"ul"},"Long contact life"),(0,n.yg)("li",{parentName:"ul"},"Contact fully sealed")),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,n.yg)("h2",{id:"specifications"},"Specifications"),(0,n.yg)("table",{border:"1",cellspacing:"0",width:"80%"},(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"col"},"Item"),(0,n.yg)("th",{scope:"col"},"Min"),(0,n.yg)("th",{scope:"col"},"Typical"),(0,n.yg)("th",{scope:"col"},"Max"),(0,n.yg)("th",{scope:"col"},"Unit")),(0,n.yg)("tr",{align:"center"},(0,n.yg)("th",{scope:"row"},"Voltage"),(0,n.yg)("td",null,"4.8"),(0,n.yg)("td",null,"5.0"),(0,n.yg)("td",null,"5.2"),(0,n.yg)("td",null,"VDC")),(0,n.yg)("tr",{align:"center"},(0,n.yg)("th",{scope:"row"},"Coil Resistance"),(0,n.yg)("td",null,"225"),(0,n.yg)("td",null,"250"),(0,n.yg)("td",null,"275"),(0,n.yg)("td",null,"\u03a9")),(0,n.yg)("tr",{align:"center"},(0,n.yg)("th",{scope:"row"},"Pick-Up Voltage"),(0,n.yg)("td",{colspan:"3"},"3.75"),(0,n.yg)("td",null,"VDC")),(0,n.yg)("tr",{align:"center"},(0,n.yg)("th",{scope:"row"},"Switching Current(Max)"),(0,n.yg)("td",{colspan:"3"},"0.5"),(0,n.yg)("td",null,"A")),(0,n.yg)("tr",{align:"center"},(0,n.yg)("th",{scope:"row"},"Switching Voltage(Max)"),(0,n.yg)("td",{colspan:"3"},"120 VAC/60VDC"),(0,n.yg)("td",null,"-")),(0,n.yg)("tr",{align:"center"},(0,n.yg)("th",{scope:"row"},"Carrying Current(Max)"),(0,n.yg)("td",{colspan:"3"},"1.0"),(0,n.yg)("td",null,"A")),(0,n.yg)("tr",{align:"center"},(0,n.yg)("th",{scope:"row"},"Operate Time(Max)"),(0,n.yg)("td",{colspan:"3"},"1.0"),(0,n.yg)("td",null,"mS")),(0,n.yg)("tr",{align:"center"},(0,n.yg)("th",{scope:"row"},"Release Time(Max)"),(0,n.yg)("td",{colspan:"3"},"0.5"),(0,n.yg)("td",null,"mS")),(0,n.yg)("tr",{align:"center"},(0,n.yg)("th",{scope:"row"},"Mechanical Life(at no load)"),(0,n.yg)("td",{colspan:"3"},"1\xd7108 operations"),(0,n.yg)("td",null,"-")),(0,n.yg)("tr",{align:"center"},(0,n.yg)("th",{scope:"row"},"Ambient Temperature"),(0,n.yg)("td",null,"-30"),(0,n.yg)("td",null,"/"),(0,n.yg)("td",null,"70"),(0,n.yg)("td",null,"\u02daC"))),(0,n.yg)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,n.yg)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.yg)("th",{parentName:"tr",align:null}),(0,n.yg)("th",{parentName:"tr",align:null}),(0,n.yg)("th",{parentName:"tr",align:null}))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg",alt:null}))))),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)("h3",{id:"with-arduino"},"With Arduino"),(0,n.yg)("p",null,"The Dry-Reed Relay can support up to 60VDC 1A load. You can use it to control resistance load,",(0,n.yg)("font",{color:"red"}," ",(0,n.yg)("strong",{parentName:"p"},"but it is not applicable to inductive load(such as Motor)")),"."),(0,n.yg)("p",null,"The usage of this Dry-reed relay is quite alike that of common relays."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Connect electric light to Grove - Dry-Reed Relay and power for electric light.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Connect Grove - Dry-Reed Relay to port D2 of Grove - Base Shield and plug it into Arduino/Seeeduino.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Upload the below code."))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"    int Relay = 2;\n\n    // the setup routine runs once when you press reset:\n    void setup() {                \n      // initialize the digital pin as an output.\n      pinMode(Relay, OUTPUT);     \n    }\n\n    // the loop routine runs over and over again forever:\n    void loop() {\n      digitalWrite(Relay, HIGH);   //the Relay close(HIGH is the voltage level)\n      delay(5000);               // wait for five seconds\n      digitalWrite(Relay, LOW);    //the Relay normally open by making the voltage LOW\n      delay(5000);               // wait for five seconds\n    }\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The electric light will light up for seconds ,then off for seconds, repeatedly.For the special applications, you may need to write the code by yourself.")),(0,n.yg)("h3",{id:"with-raspberry-pi"},"With Raspberry Pi"),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"}," If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.\n"))),(0,n.yg)("p",null,"1.You should have got a raspberry pi and a grovepi or grovepi+."),(0,n.yg)("p",null,"2.You should have completed configuring the development enviroment, otherwise follow ",(0,n.yg)("a",{parentName:"p",href:"/GrovePi_Plus"},"here"),"."),(0,n.yg)("p",null,"3.Connection"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Plug the sensor to grovepi socket D4 by using a grove cable.")),(0,n.yg)("p",null,"4.Navigate to the demos' directory:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"    cd yourpath/GrovePi/Software/Python/\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"To see the code")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'    nano grove_relay.py   # "Ctrl+x" to exit #\n')),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'    import time\n    import grovepi\n\n    # Connect the Grove Relay to digital port D4\n    # SIG,NC,VCC,GND\n    relay = 4\n\n    grovepi.pinMode(relay,"OUTPUT")\n\n    while True:\n        try:\n            # switch on for 5 seconds\n            grovepi.digitalWrite(relay,1)\n            print "on"\n            time.sleep(5)\n\n            # switch off for 5 seconds\n            grovepi.digitalWrite(relay,0)\n            print "off"\n            time.sleep(5)\n\n        except KeyboardInterrupt:\n            grovepi.digitalWrite(relay,0)\n            break\n        except IOError:\n            print "Error"\n')),(0,n.yg)("p",null,"5.Run the demo."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"    sudo python3 grove_relay.py\n")),(0,n.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Dry-Reed_Relay/res/Grove-Dry-Reed_Relay_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.yg)("h2",{id:"resources"},"Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Dry-Reed_Relay/res/Grove-Dry-Reed_Relay_Eagle_File.zip"},"Grove - Dry-Reed Relay Eagle File")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Dry-Reed_Relay/res/Dry-Reed_Relay_Datasheet.pdf"},"Dry-Reed Relay Datasheet"))),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);