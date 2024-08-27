"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[58951],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>g});var r=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(a),h=o,g=c["".concat(l,".").concat(h)]||c[h]||p[h]||i;return a?r.createElement(g,n(n({ref:t},d),{},{components:a})):r.createElement(g,n({ref:t},d))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,n[1]=s;for(var u=2;u<i;u++)n[u]=a[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},96611:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=a(9668),o=(a(96540),a(15680));const i={title:"DSO Quad:Calibration",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/DSO_Quad-Calibration/",slug:"/DSO_Quad-Calibration",last_update:{date:"02/03/2022",author:"gunengyu"}},n=void 0,s={unversionedId:"Sensor/Beyond_Grove/Accessories/Tools/DSO_Quad-Calibration",id:"Sensor/Beyond_Grove/Accessories/Tools/DSO_Quad-Calibration",title:"DSO Quad:Calibration",description:"The calibration consists of different parts:",source:"@site/docs/Sensor/Beyond_Grove/Accessories/Tools/DSO_Quad-Calibration.md",sourceDirName:"Sensor/Beyond_Grove/Accessories/Tools",slug:"/DSO_Quad-Calibration",permalink:"/DSO_Quad-Calibration",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Beyond_Grove/Accessories/Tools/DSO_Quad-Calibration.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1643846400,formattedLastUpdatedAt:"Feb 3, 2022",frontMatter:{title:"DSO Quad:Calibration",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/DSO_Quad-Calibration/",slug:"/DSO_Quad-Calibration",last_update:{date:"02/03/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"DSO Quad:Building Firmware",permalink:"/DSO_Quad-Building_Firmware"},next:{title:"Mini Soldering Iron",permalink:"/Mini_Soldering_Iron"}},l={},u=[{value:"Zero Offset",id:"zero-offset",level:2},{value:"Gain Calibration",id:"gain-calibration",level:2},{value:"AC calibration",id:"ac-calibration",level:2},{value:"See Also",id:"see-also",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,o.yg)(c,(0,r.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"The calibration consists of different parts:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"DC Calibration with")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Zero Offset")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Gain")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"AC Calibration (slope response, overshooting)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"For 1 ... 10V/div")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"For 50 ... 500mV/div")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"For x10 probe"))),(0,o.yg)("h2",{id:"zero-offset"},"Zero Offset"),(0,o.yg)("p",null,'This calibration is done nearly automatically. The DSO should be well at operating temperature for this. So you should have turned it on at least about 10 minutes earlier. After selection of "Calibr" from the "Save/Recall" menu ("Square" Button, scrolling to last item, pushing -/+ button) you are asked to short CH_A input to GND. If you are using a probe, this should be in "x1" mode, not "x10". It\'s started by pressing the "Square" button. After a few seconds it\'s finished and waiting for the 1st step of the Gain calibration. If you don\'t want to do the gain calibration here, go the "arrow right" through all ranges without modifying anything with the -/+ navigator. Then you can repeat it (square button) or go "to the next operation" with "right" from the navigator and do the zero adjustment och CH_B. Additional Info: Even if the input voltage is zero, a real amplifier has a small non-zero value at the output. And this value changes, if the resistors for the range are changed. This zero offset is evaluated here for each range and that values are used in future to corrected in the digital part by adding/subtracting that offset'),(0,o.yg)("h2",{id:"gain-calibration"},"Gain Calibration"),(0,o.yg)("p",null,'For the gain calibration additional external hardware is required! In each range a well known DC voltage of about 80 ... 100% of the full scale range needs to be applied. That "full scale range" e.g. 50mV/div ',(0,o.yg)("em",{parentName:"p"},"6 div = 0.3V or 10V/div")," 6 div = 60V. So you need the following voltages:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"0.25... 0.3 V for 50mV/div range\n0.5 ... 0.6 V for 0.1V/div range\n1.0 ... 1.2 V for 0.2V/div range\n2.5 ... 3.0 V for 0.5V/div range\n5.0 ... 6.0 V for   1V/div range\n10  ... 12  V for   2V/div range\n25  ... 30  V for   5V/div range\n50  ... 60  V for  10V/div range\n")),(0,o.yg)("p",null,"I am suggesting to use some resistors as voltage divider and a voltage multimeter to measure the voltage. Please be aware, that the very cheap volt meters are often not accurate. But a meter with a price of 25 ... 40 \u20ac (or US-$) should be accurate enough. The lower voltages can be taken e.g. from an USB charger of you may have e.g. a 12V supply or a 19V notebook supply. The 50 ... 60V may be most difficult to have available. But you may to calibrate only the smaller ranges and stay with a worse accuracy in the higher ranges. A possible solution for the higher voltage may be to use DC/DC converters, e.g. two 5V to 24V converters, which are available for about 5\u20ac per piece. A output current of 5mA is sufficient. A full circuit, which can be supplied with 5V may look like this: [",(0,o.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/DSO_Quad-Calibration/res/GainCalibrationCircuit.PNG"},"[1]"),"] The given output values may vary e.g. with the input voltage and the resistor tolerances. But will be in the required range given above. ",(0,o.yg)("strong",{parentName:"p"},"Attention:")," The 54V is a hazardous voltage!"),(0,o.yg)("p",null,"With this equipment you can connect the volt meter and the channel of the DSO step by step the the output of that circuit and use the -/+ to adjust the DSO value to the same value as the volt meter."),(0,o.yg)("h2",{id:"ac-calibration"},"AC calibration"),(0,o.yg)("p",null,"While the DC calibration is applied in the digital part of the DSO, the AC calibration is done by changing the values of some capacitors in the hardware. The divider ratio of the capacitors need to match the divider ration of the resistors."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/DSO_Quad-Calibration/img/DSO203_AC-Cal_Circuit_Diagr.PNG",alt:null}),"."),(0,o.yg)("p",null,"The calibration procedure for the Quad DSO it is already described, e.g. here: ",(0,o.yg)("a",{parentName:"p",href:"http://neophob.com/2012/03/dso-quad-for-dummies/"},"[2]")," It uses the build-in square wave output. For Ch_A first set the probe to x1 and adjust A1 (=C5A) in the 1V/div range. Then adjust A2 (C3A) in the 500mV/div range. Then check the A1 setting again, then the A2 again as each is influencing also the other a little. Finally set the probe to x10, select a siutable range and adjust A3."),(0,o.yg)("h2",{id:"see-also"},"See Also"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"/DSO_Quad",title:"DSO Quad"},"DSO Quad"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"/DSO_Quad-Building_Firmware",title:"DSO Quad:Upgrading Firmware"},"DSO Quad:Upgrading Firmware")))),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);