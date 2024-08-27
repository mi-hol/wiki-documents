"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[47313],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),g=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=g(a),u=r,y=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return a?n.createElement(y,i(i({ref:t},p),{},{components:a})):n.createElement(y,i({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},73467:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var n=a(9668),r=(a(96540),a(15680));const l={description:"Sensor - Gas",title:"Sensor - Gas",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeed_Gas_Sensor_Selection_Guide",last_update:{date:"1/4/2023",author:"shuxu hu"}},i=void 0,o={unversionedId:"Sensor/Grove/Grove_Sensors/Gas/Sensor_gas",id:"Sensor/Grove/Grove_Sensors/Gas/Sensor_gas",title:"Sensor - Gas",description:"Sensor - Gas",source:"@site/docs/Sensor/Grove/Grove_Sensors/Gas/Sensor_gas.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Gas",slug:"/Seeed_Gas_Sensor_Selection_Guide",permalink:"/Seeed_Gas_Sensor_Selection_Guide",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Gas/Sensor_gas.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672790400,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{description:"Sensor - Gas",title:"Sensor - Gas",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeed_Gas_Sensor_Selection_Guide",last_update:{date:"1/4/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Formaldehyde sensor",permalink:"/Grove-Formaldehyde-Sensor"},next:{title:"Grove - Gas Sensor",permalink:"/Grove-Gas_Sensor"}},s={},g=[{value:"Operating Principle",id:"operating-principle",level:2},{value:"Field of Applicaitons",id:"field-of-applicaitons",level:2},{value:"Seeed Gas Sensor",id:"seeed-gas-sensor",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:g},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeed_Gas_Sensor_Selection_Guide/img/Seeed_Gas_Sensor_Selection_Guide.jpg",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",null,"Gas sensor is a device which can detect the presence of various toxic and combustible gases present in the environment. "),(0,r.yg)("h2",{id:"operating-principle"},"Operating Principle"),(0,r.yg)("p",null,"The interaction between the test gas and the sensing surface can be detected by the measurements of change in resistance, capacitance, work function, mass, optical characteristics etc. Below table is from Source",(0,r.yg)("sup",{parentName:"p",id:"fnref-1"},(0,r.yg)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Class of gas sensors"),(0,r.yg)("th",{parentName:"tr",align:null},"Operating principle"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Electrochemical"),(0,r.yg)("td",{parentName:"tr",align:null},"Changes in current, voltage, capacitance/impedance: 1. Voltammetry (including amperometry) 2. Potentiometry 3. Chemically sensitized field-effect transistor 4. Potentiometry with solid electrolytes for gas sensing")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Electrical"),(0,r.yg)("td",{parentName:"tr",align:null},"Metal oxide conductivity Organic conductivity Electrolytic conductivity Heterojunction conductivity (Schottky diode, FET, MOS) Work function Electric permittivity (capacitance)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Mass sensitive"),(0,r.yg)("td",{parentName:"tr",align:null},"Changes in the weight, amplitude, phase or frequency, size, shape, or position: 1. Quartz crystal microbalance 2. Surface acoustic wave propagation 3. Cantilever")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Magnetic"),(0,r.yg)("td",{parentName:"tr",align:null},"Changes of paramagnetic gas properties")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Optical devices"),(0,r.yg)("td",{parentName:"tr",align:null},"Changes in light intensity, color, or emission spectra: 1. Absorbance 2. Reflectance 3. Luminescence 4. Refractive index 5. Optothermal effect 6. Light scattering (Raman scattering, plasmon resonance)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Thermometric (calorimetric)"),(0,r.yg)("td",{parentName:"tr",align:null},"Heat effects of a specific chemical reaction. Changes in temperature, heat flow, heat content: 1. Thermoelectric 2. Pyroelectric 3. Catalytic bead (pellistors) 4. Thermal conductivity")))),(0,r.yg)("div",{align:"center"},(0,r.yg)("b",null,"Table 1."),(0,r.yg)("i",null,"The classification of gas sensors suggested in 1991 by Analytical Chemistry Division of IUPAC, ")),(0,r.yg)("h2",{id:"field-of-applicaitons"},"Field of Applicaitons"),(0,r.yg)("p",null,"There are a numerous use of these gas sensors. Particularly, using these gas sensors human beings can be saved from potential dangers. Hence the gas sensors play important roles in various sectors, which include industry, medical, environmental applications, and domestic applications for monitoring toxic and flammable gases. Below table is from Source",(0,r.yg)("sup",{parentName:"p",id:"fnref-2"},(0,r.yg)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Field of application"),(0,r.yg)("th",{parentName:"tr",align:null},"Function"),(0,r.yg)("th",{parentName:"tr",align:null},"Examples of detected gases"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Environment"),(0,r.yg)("td",{parentName:"tr",align:null},"Monitoring toxic gases present in the atmosphere, due to industrial emissions (weather stations, pollutionmonitoring)"),(0,r.yg)("td",{parentName:"tr",align:null},"CO, CH4, humidity, CO2, O3, VOCs, SOx")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Safety at work"),(0,r.yg)("td",{parentName:"tr",align:null},"Control of indoor air quality; monitoring toxic gases in a working environment, for instance in a factory where dangerous chemicals are used"),(0,r.yg)("td",{parentName:"tr",align:null},"Toxic gases, combustible gases, O2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Domestic safety/household application"),(0,r.yg)("td",{parentName:"tr",align:null},"Detection of poisonous gases or smoke in households, due to accidents such as fires and explosions; intelligent refrigera\xadtor or oven; fire alarm; natural gas heating; leak detection; air quality control; air purifiers; cooking control"),(0,r.yg)("td",{parentName:"tr",align:null},"CO, humidity, CO2, VOCs")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Safety in car"),(0,r.yg)("td",{parentName:"tr",align:null},"Car ventilation control; gasoline vapor detection; alcohol breath tests"),(0,r.yg)("td",{parentName:"tr",align:null},"CO, LPG, VOCs, CH4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Public security"),(0,r.yg)("td",{parentName:"tr",align:null},"Control of indoor air quality, detection of substances dangerous for the safety of the general public"),(0,r.yg)("td",{parentName:"tr",align:null},"Toxic gases, combustible gases, flammable gases, explosives, O2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Medical/clinical"),(0,r.yg)("td",{parentName:"tr",align:null},"Diagnostics(breath analysis, disease detection); point-of-care patient monitoring; drug monitoring; artificial organs and prostheses; new drug discovery"),(0,r.yg)("td",{parentName:"tr",align:null},"O2, NH, NOx, CO2, H2S, H2, CL2, anesthesia gases")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Agriculture"),(0,r.yg)("td",{parentName:"tr",align:null},"Plant/animal diagnostics; soil and water testing; meat/poultry inspect ion; waste/sewage monitoring"),(0,r.yg)("td",{parentName:"tr",align:null},"amines, humidity, CO")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Food quality   control"),(0,r.yg)("td",{parentName:"tr",align:null},"Detection of particular molecules, which are formed when food starts to rot and it is no longer good for consumption"),(0,r.yg)("td",{parentName:"tr",align:null},"humidity, CO2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Utilities/automotive/power plants"),(0,r.yg)("td",{parentName:"tr",align:null},"Control of the concentration of the gases in the engine and gas boiler, to guarantee the highest possible efficiency of the combustion process. The same concept can also be applied to power plants, as the energy is generated by combustion"),(0,r.yg)("td",{parentName:"tr",align:null},"O2, CO, HCs, NOx, SOx, CO2, H2, HCs")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Industry:  Petrochemical Steel/Water treatment/Semiconductor"),(0,r.yg)("td",{parentName:"tr",align:null},"Process monitoring and control; quality control; workplace monitoring; waste stream monitoring; leakage alarm"),(0,r.yg)("td",{parentName:"tr",align:null},"HCs, conventional pollutants, O2, H2, O3, CO2, CL2, CH4,H2S")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Defense/military"),(0,r.yg)("td",{parentName:"tr",align:null},"Detection of chemical, biological, and toxin warfare agents; treaty verification"),(0,r.yg)("td",{parentName:"tr",align:null},"Agents, explosives, propellants")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Aerospace"),(0,r.yg)("td",{parentName:"tr",align:null},"Monitoring of oxygen and toxic and flammable gases in the environ\xadment atmosphere"),(0,r.yg)("td",{parentName:"tr",align:null},"H2, O2, CO3, humidity")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Traffic/tunnels/car parks"),(0,r.yg)("td",{parentName:"tr",align:null},"City traffic control and management; air quality monitoring in tunnels or underground parking garages"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("div",{align:"center"},(0,r.yg)("b",null,"Table 2."),(0,r.yg)("i",null,"Some examples of gas sensor applications")),(0,r.yg)("h2",{id:"seeed-gas-sensor"},"Seeed Gas Sensor"),(0,r.yg)("p",null,"For all the Grove Gas sensors in our bazaar, please click ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/tag/index/index/tag/GAS-SENSOR/?product_list_limit=all"},"bazaar Grove Gas sensors tag")," to check."),(0,r.yg)("p",null,"Or you can click ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/gas_sensor_selection/"},"here"))," to get better view of the table. "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Thumbnail"),(0,r.yg)("th",{parentName:"tr",align:null},"Target  Gas"),(0,r.yg)("th",{parentName:"tr",align:null},"Class of gas sensors"),(0,r.yg)("th",{parentName:"tr",align:null},"Field of application"),(0,r.yg)("th",{parentName:"tr",align:null},"Sensor"),(0,r.yg)("th",{parentName:"tr",align:null},"Detecting Range"),(0,r.yg)("th",{parentName:"tr",align:null},"Accuracy"),(0,r.yg)("th",{parentName:"tr",align:null},"Operate voltage"),(0,r.yg)("th",{parentName:"tr",align:null},"Interface"),(0,r.yg)("th",{parentName:"tr",align:null},"Click to Buy"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-Multichannel-Gas-Sensor-V2/"},"Grove - Multichannel Gas Sensor V2")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/V2.png"})),(0,r.yg)("td",{parentName:"tr",align:null},"Besides Carbon monoxide (CO), Nitrogen dioxide (NO2), Ethyl alcohol(C2H5CH), Volatile Organic Compounds (VOC) and etc"),(0,r.yg)("td",{parentName:"tr",align:null},"Electrical"),(0,r.yg)("td",{parentName:"tr",align:null},"Environment"),(0,r.yg)("td",{parentName:"tr",align:null},"GM102B, GM302B, GM502B, GM702B"),(0,r.yg)("td",{parentName:"tr",align:null},"/"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"3.3V 5V"),(0,r.yg)("td",{parentName:"tr",align:null},"I2C"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html"},"Order"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-Multichannel_Gas_Sensor/"},"Grove - Multichannel Gas Sensor V1")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/V1.png"})),(0,r.yg)("td",{parentName:"tr",align:null},"Carbon monoxide,Nitrogen dioxide, Ethanol, Hydrogen, Ammonia, Methane, Propane, Iso-butane"),(0,r.yg)("td",{parentName:"tr",align:null},"Electrical"),(0,r.yg)("td",{parentName:"tr",align:null},"Environment"),(0,r.yg)("td",{parentName:"tr",align:null},"MiCS-6814"),(0,r.yg)("td",{parentName:"tr",align:null},"CO: 1\u20131000ppm   NO2: 0.05\u201310ppm   H2: 10\u2013500ppm   C2H5OH: 1-1000ppm  NH3: 1-500ppm  CH4: >1000ppm  C3H8: >1000ppm  C4H10: >1000ppm"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"3.3V 5V"),(0,r.yg)("td",{parentName:"tr",align:null},"I2C"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-p-2502.html"},"Order"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-Air_Quality_Sensor_v1.3/"},"Grove - Air Quality Sensor v1.3")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove_Air_Quality_Sensor_small.jpg"})),(0,r.yg)("td",{parentName:"tr",align:null},"Alcohol, Smoke"),(0,r.yg)("td",{parentName:"tr",align:null},"Electrochemical"),(0,r.yg)("td",{parentName:"tr",align:null},"Environment"),(0,r.yg)("td",{parentName:"tr",align:null},"MP503"),(0,r.yg)("td",{parentName:"tr",align:null},"10-1000ppm(Alcohol)"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"3.3V 5V"),(0,r.yg)("td",{parentName:"tr",align:null},"Analog"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html"},"Order"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-Alcohol_Sensor/"},"Grove - Alcohol Sensor ")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/achohol.png"})),(0,r.yg)("td",{parentName:"tr",align:null},"Alcohol"),(0,r.yg)("td",{parentName:"tr",align:null},"Electrochemical"),(0,r.yg)("td",{parentName:"tr",align:null},"Safety in car  Public security"),(0,r.yg)("td",{parentName:"tr",align:null},"MQ303A"),(0,r.yg)("td",{parentName:"tr",align:null},"20-1000ppm Alcohol"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"5V"),(0,r.yg)("td",{parentName:"tr",align:null},"Analog"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Alcohol-Sensor-p-764.html"},"Order"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-CO2_Sensor/"},"Grove - CO2 Sensor ")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/img/45d_small.jpg"})),(0,r.yg)("td",{parentName:"tr",align:null},"CO2"),(0,r.yg)("td",{parentName:"tr",align:null},"Electrochemical"),(0,r.yg)("td",{parentName:"tr",align:null},"Environment  Agriculture"),(0,r.yg)("td",{parentName:"tr",align:null},"MH-Z16"),(0,r.yg)("td",{parentName:"tr",align:null},"0-5000ppm"),(0,r.yg)("td",{parentName:"tr",align:null},"\xb1(50ppm +5%)"),(0,r.yg)("td",{parentName:"tr",align:null},"5V"),(0,r.yg)("td",{parentName:"tr",align:null},"UART"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Carbon-Dioxide-Sensor-MH-Z1-p-1863.html"},"Order"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-CO2_Temperature_Humidity_Sensor-SCD30/"},"Grove - CO2 & Temperature & Humidity Sensor (SCD30)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/thumbnial.png"})),(0,r.yg)("td",{parentName:"tr",align:null},"CO2"),(0,r.yg)("td",{parentName:"tr",align:null},"Optical devices"),(0,r.yg)("td",{parentName:"tr",align:null},"Environment  Agriculture"),(0,r.yg)("td",{parentName:"tr",align:null},"SCD30"),(0,r.yg)("td",{parentName:"tr",align:null},"0-40000ppm"),(0,r.yg)("td",{parentName:"tr",align:null},"\xb1(30 ppm + 3%)"),(0,r.yg)("td",{parentName:"tr",align:null},"3.3V 5V"),(0,r.yg)("td",{parentName:"tr",align:null},"I2C"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/catalog/product/view/id/2911/s/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911/"},"Order"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/"},"Grove - VOC and eCO2 Gas Sensor (SGP30) ")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/thumbnail.jpg"})),(0,r.yg)("td",{parentName:"tr",align:null},"VOC,CO2"),(0,r.yg)("td",{parentName:"tr",align:null},"Electrical"),(0,r.yg)("td",{parentName:"tr",align:null},"Environment  Agriculture"),(0,r.yg)("td",{parentName:"tr",align:null},"SGP30"),(0,r.yg)("td",{parentName:"tr",align:null},"VOC: 0 ppb to 60000ppb  CO2: 400 ppm to 60000 ppm"),(0,r.yg)("td",{parentName:"tr",align:null},"VOC: (0-2008ppb/1ppb, 2008-11110ppb/6ppb, 11110-60000ppb/32ppb)  CO2: (400-1479ppm/1ppm, 1479-5144ppm/3ppm, 5144-17597ppm/9ppm, 17597-60000ppm/31ppm)"),(0,r.yg)("td",{parentName:"tr",align:null},"3.3V 5V"),(0,r.yg)("td",{parentName:"tr",align:null},"I2C"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-SGP30-p-3071.html"},"Order"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ2/"},"Grove - Gas Sensor(MQ2) ")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/45d_small.jpg"})),(0,r.yg)("td",{parentName:"tr",align:null},"LPG, i-butane, propane, methane, alcohol, Hydrogen, smoke"),(0,r.yg)("td",{parentName:"tr",align:null},"Electrochemical"),(0,r.yg)("td",{parentName:"tr",align:null},"Domestic safety/household application  Safety at work"),(0,r.yg)("td",{parentName:"tr",align:null},"MQ2"),(0,r.yg)("td",{parentName:"tr",align:null},"LPG and propane: 200ppm-5000ppm  Butane: 300ppm-5000ppm  Methane: 5000ppm-20000ppm  H2: 300ppm-5000ppm  Alcohol:100ppm-2000ppm"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"5V"),(0,r.yg)("td",{parentName:"tr",align:null},"Analog"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-937.html"},"Order"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ3/"},"Grove - Gas Sensor(MQ3) ")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/45d_small.jpg"})),(0,r.yg)("td",{parentName:"tr",align:null},"High sensitivity to alcohol and small sensitivity to Benzine"),(0,r.yg)("td",{parentName:"tr",align:null},"Electrochemical"),(0,r.yg)("td",{parentName:"tr",align:null},"Safety in car  Public security"),(0,r.yg)("td",{parentName:"tr",align:null},"MQ3"),(0,r.yg)("td",{parentName:"tr",align:null},"Alcohol: 0.05-10mg/L"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"5V"),(0,r.yg)("td",{parentName:"tr",align:null},"Analog"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1418.html"},"Order"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ5/"},"Grove - Gas Sensor(MQ5) ")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/45d_small.jpg"})),(0,r.yg)("td",{parentName:"tr",align:null},"High sensitivity to LPG, natural gas, town gas and Small sensitivity to alcohol, smoke"),(0,r.yg)("td",{parentName:"tr",align:null},"Electrochemical"),(0,r.yg)("td",{parentName:"tr",align:null},"Industry: Petrochemical Steel/Water treatment/Semiconductor  Utilities/automotive/power plants"),(0,r.yg)("td",{parentName:"tr",align:null},"MQ5"),(0,r.yg)("td",{parentName:"tr",align:null},"200-10000ppm"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"5V"),(0,r.yg)("td",{parentName:"tr",align:null},"Analog"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-938.html"},"Order"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ9/"},"Grove - Gas Sensor(MQ9) ")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/45d_small.jpg"})),(0,r.yg)("td",{parentName:"tr",align:null},"High sensitivity to carbon monoxide and CH4\uff0cLPG"),(0,r.yg)("td",{parentName:"tr",align:null},"Electrochemical"),(0,r.yg)("td",{parentName:"tr",align:null},"Safety in car  Industry: Petrochemical Steel/Water treatment/Semiconductor  Utilities/automotive/power plants  Domestic safety/household application"),(0,r.yg)("td",{parentName:"tr",align:null},"MQ9"),(0,r.yg)("td",{parentName:"tr",align:null},"Carbon monoxide: 20-2000ppm    CH4: 500-10000ppm  LPG: 500-10000ppm"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"5V"),(0,r.yg)("td",{parentName:"tr",align:null},"Analog"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1419.html"},"Order"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-Gas_Sensor-O2/"},"Grove - Gas Sensor(O2)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/45d_small.jpg"})),(0,r.yg)("td",{parentName:"tr",align:null},"O2"),(0,r.yg)("td",{parentName:"tr",align:null},"Electrochemical"),(0,r.yg)("td",{parentName:"tr",align:null},"Safety in car  Industry: Petrochemical Steel/Water treatment/Semiconductor  Utilities/automotive/power plants  Domestic safety/household application"),(0,r.yg)("td",{parentName:"tr",align:null},"ME2-O2-\u042420"),(0,r.yg)("td",{parentName:"tr",align:null},"0\uff5e25%Vol"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"3.3V 5V"),(0,r.yg)("td",{parentName:"tr",align:null},"Analog"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Oxygen-Sensor-ME2-O2-2-p-1541.html"},"Order"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-HCHO_Sensor/"},"Grove - HCHO Sensor")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/45d_small.jpg"})),(0,r.yg)("td",{parentName:"tr",align:null},"Toluene, methanal, benzene, alcohol, acetone"),(0,r.yg)("td",{parentName:"tr",align:null},"Electrochemical"),(0,r.yg)("td",{parentName:"tr",align:null},"Environment"),(0,r.yg)("td",{parentName:"tr",align:null},"WSP2110"),(0,r.yg)("td",{parentName:"tr",align:null},"1\uff5e50ppm"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"3.3V 5V"),(0,r.yg)("td",{parentName:"tr",align:null},"Analog"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-HCHO-Sensor-p-1593.html"},"Order"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680/"},"Grove - Temperature, Humidity, Pressure and Gas Sensor (BME680)")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/thumbnail.jpg"})),(0,r.yg)("td",{parentName:"tr",align:null},"IAQ"),(0,r.yg)("td",{parentName:"tr",align:null},"Electrical"),(0,r.yg)("td",{parentName:"tr",align:null},"Environment  Domestic safety/household application"),(0,r.yg)("td",{parentName:"tr",align:null},"BME680"),(0,r.yg)("td",{parentName:"tr",align:null},"0-500"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"3.3V 5V"),(0,r.yg)("td",{parentName:"tr",align:null},"I2C"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-BME68-p-3109.html"},"Order"))))),(0,r.yg)("p",null,"|"),(0,r.yg)("div",{align:"center"},(0,r.yg)("b",null,"Table 3."),(0,r.yg)("i",null,"Seeed Gas Sensor Category")),(0,r.yg)("h2",{id:"projects"},"Projects"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Smart Crops: Implementing IoT in Conventional Agriculture!"),": Our mission with nature is to preserve it, designing and implementing technologies and monitoring methods with the help of IoT via Helium."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"A website to see the environment data around you"),":"),(0,r.yg)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/kevin-lee2/a-website-to-see-the-environment-data-around-you-1aea66/embed",width:"350"}),(0,r.yg)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed",width:"350"}),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})),(0,r.yg)("div",{className:"footnotes"},(0,r.yg)("hr",{parentName:"div"}),(0,r.yg)("ol",{parentName:"div"},(0,r.yg)("li",{parentName:"ol",id:"fn-1"},"Source: Reprinted from I lulanicki et al. (1991). Published by International Union of Pure and Applied Chemistry.",(0,r.yg)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.yg)("li",{parentName:"ol",id:"fn-2"},"Source: Data from Taylor (1996), Stcttcr et al. (2003), Capone ct al. (2003), etc. HCs hydrocarbons, VOCs volatile organic compounds.",(0,r.yg)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);