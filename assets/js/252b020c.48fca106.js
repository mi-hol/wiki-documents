"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[49165],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var r=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(a),g=i,y=s["".concat(p,".").concat(g)]||s[g]||d[g]||n;return a?r.createElement(y,l(l({ref:t},c),{},{components:a})):r.createElement(y,l({ref:t},c))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<n;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},63663:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var r=a(9668),i=(a(96540),a(15680));const n={description:"Sidekick Advanced Kit",title:"Sidekick Advanced Kit",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Sidekick_Advanced_Kit",last_update:{date:"1/13/2023",author:"shuxu hu"}},l=void 0,o={unversionedId:"Seeed_Elderly/Discrete Product/Sidekick_Advanced_Kit",id:"Seeed_Elderly/Discrete Product/Sidekick_Advanced_Kit",title:"Sidekick Advanced Kit",description:"Sidekick Advanced Kit",source:"@site/docs/Seeed_Elderly/Discrete Product/Sidekick_Advanced_Kit.md",sourceDirName:"Seeed_Elderly/Discrete Product",slug:"/Sidekick_Advanced_Kit",permalink:"/Sidekick_Advanced_Kit",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Discrete Product/Sidekick_Advanced_Kit.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Sidekick Advanced Kit",title:"Sidekick Advanced Kit",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Sidekick_Advanced_Kit",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Serial port bluetooth module(Master/Slave)",permalink:"/Serial_port_bluetooth_module_Master-Slave"},next:{title:"Stepper Motor Driver",permalink:"/Stepper_Motor_Driver"}},p={},u=[{value:"Basics",id:"basics",level:2},{value:"Digital",id:"digital",level:2},{value:"Analog",id:"analog",level:2},{value:"Display",id:"display",level:2},{value:"LiquidCrystal",id:"liquidcrystal",level:2},{value:"Motor",id:"motor",level:2},{value:"Sensor",id:"sensor",level:2},{value:"Reference",id:"reference",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:u},s="wrapper";function d(e){let{components:t,...a}=e;return(0,i.yg)(s,(0,r.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Sidekick_Advanced_Kit/img/SKP-0.jpg",alt:null})),(0,i.yg)("p",null,"Welcome to the world of electronic creation! Sidekick Advanced Kit is an Arduino electronics kit that can lead you to world of electronic. It contains the most common electronic components such as resistors, Leds etc. Also contains a large number of rich expansion functional modules, such as temperature and humity sensors, 16x2 LCD display, servo, stepper and so on. This tutorial content of the discussion from the official Arduino tutorials with Seeed resource. This kit contains 39 examples, which can help to start your Arduino development quickly."),(0,i.yg)("h2",{id:"basics"},"Basics"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Sidekick_Advanced_Kit/img/SKP-1.jpg",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/Blink"},"1. Blink"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/DigitalReadSerial"},"2. DigitalReadSerial"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/AnalogReadSerial"},"3. AnalogReadSerial"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/Fade"},"4. Fade"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/ReadAnalogVoltage"},"5. ReadAnalogVoltage")))),(0,i.yg)("h2",{id:"digital"},"Digital"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Sidekick_Advanced_Kit/img/SKP-2.jpg",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/BlinkWithoutDelay"},"6. BlinkWithoutDelay"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/Button"},"7. Button"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/Debounce"},"8. Debounce"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/ButtonStateChange"},"9. ButtonStateChange"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/Tone"},"10. Tone"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/Tone2"},"11. Tone Pitch Follower"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/Tone3"},"12. Tone Keyboard"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/Tone4"},"13. Tone Multiple")))),(0,i.yg)("h2",{id:"analog"},"Analog"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Sidekick_Advanced_Kit/img/SKP-3.jpg",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/AnalogInOutSerial"},"14. AnalogInOutSerial"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/AnalogInput"},"15. AnalogInput"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/AnalogWriteMega"},"16. AnalogWriteMega"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/Calibration"},"17. Calibration"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/Smoothing"},"18. Smoothing")))),(0,i.yg)("h2",{id:"display"},"Display"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Sidekick_Advanced_Kit/img/SKP-4.jpg",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/BarGraph"},"19. LED Bar"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/RowColumnScanning"},"20. Row Column Scanning")))),(0,i.yg)("h2",{id:"liquidcrystal"},"LiquidCrystal"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Sidekick_Advanced_Kit/img/SKP-5.jpg",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/LiquidCrystal"},"21. Hello World!"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/LiquidCrystalBlink"},"22. Blink"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/LiquidCrystalCursor"},"23. Cursor"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/LiquidCrystalDisplay"},"24. Display"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/LiquidCrystalTextDirection"},"25. Text Direction"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/LiquidCrystalScroll"},"26. Scroll"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/LiquidCrystalSerial"},"27. Serial Input"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/LiquidCrystalSetCursor"},"28. Set Cursor"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/LiquidCrystalAutoscroll"},"29. Autoscroll")))),(0,i.yg)("h2",{id:"motor"},"Motor"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Sidekick_Advanced_Kit/img/SKP-6.jpg",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/Knob"},"30. Servo Knob"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/Sweep"},"31. Servo Sweep"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/MotorKnob"},"32. Stepper Knob")))),(0,i.yg)("h2",{id:"sensor"},"Sensor"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Sidekick_Advanced_Kit/img/SKP-7.jpg",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://seeeddoc.github.io/Light_Sensor_and_LED_Bar/"},"33. Light Sensor and LED Bar"))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://seeeddoc.github.io/Sound_Sensor_And_LED_Bar/"},"35. Sound Sensor And Led Bar"))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://seeeddoc.github.io/Relay_Control_LED/"},"37. Relay Control LED"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://seeeddoc.github.io/Joystick_Control_RGB_Led/"},"38. Joystick Control RGB LED")))),(0,i.yg)("h2",{id:"reference"},"Reference"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://arduino.cc/en/Tutorial/HomePage"},"Arduino Tutorial"))),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);