"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[11828],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,g=d["".concat(s,".").concat(p)]||d[p]||y[p]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},40755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(9668),r=(n(96540),n(15680));const l={description:"Data_OpenStream_API_Quickstart",title:"Data OpenStream API Reference",keywords:["Cloud and Chain"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},o=void 0,i={unversionedId:"Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Reference",id:"Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Reference",title:"Data OpenStream API Reference",description:"Data_OpenStream_API_Quickstart",source:"@site/docs/Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Reference.md",sourceDirName:"Cloud_Chain/SenseCAP_API/Data_OpenStream_API",slug:"/Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Reference",permalink:"/Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Reference",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Reference.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1676332800,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{description:"Data_OpenStream_API_Quickstart",title:"Data OpenStream API Reference",keywords:["Cloud and Chain"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"Data OpenStream API Quickstart",permalink:"/Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Quickstart"},next:{title:"List of Sensor Types",permalink:"/Cloud_Chain/SenseCAP_API/Appendix/List_of_Sensor_Types"}},s={},u=[],c={toc:u},d="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("div",{class:"post-content"},(0,r.yg)("div",{id:"toc"}),(0,r.yg)("h2",{id:"the-connection-information",class:"clickable-header top-level-header"},"The Connection Information"),(0,r.yg)("i",{class:"icon-arrow-up back-to-top"}),(0,r.yg)("ul",null,(0,r.yg)("li",null,"Host: China Station: sensecap-openstream.seeed.cn Global Station: sensecap-openstream.seeed.cc"),(0,r.yg)("li",null,"Port: 1883 for MQTT, or 8083 for MQTT Over WebSocket"),(0,r.yg)("li",null,"ClientID: org-<Organization ID>-<Random ID>, replace <Orgnization ID> with you got from SenseCAP Portal, and replace <Random ID> with you randomly generated Numbers and lowercase letters."),(0,r.yg)("li",null,"Username: org-<Organization ID>, replace <Organization ID> with you got from dashboard (refer to the quickstart)."),(0,r.yg)("li",null,"Password: Get Access API keys on your SenseCAP Portal \u201csecurity /API Access Key\u201d (refer to the quickstart).")),(0,r.yg)("h2",{id:"publish-and-subscribe-model",class:"clickable-header top-level-header"},"Publish And Subscribe Model"),(0,r.yg)("i",{class:"icon-arrow-up back-to-top"}),"SenseCAP OpenStream API implements \u201cPublish And Subscribe Model\u201d, as the MQTT protocol does. You can connect your server to SenseCAP OpenStream API through MQTT or MQTT Over WebSocket to communicate with the standard pub-sub protocol.",(0,r.yg)("p",null,"You can \u201csubscribe\u201d to receive messages. \u201csubscribe\u201d is the most common way to continuously monitor the telemetry data from devices."),(0,r.yg)("h2",{id:"message-topic",class:"clickable-header top-level-header"},"Message Topic"),(0,r.yg)("i",{class:"icon-arrow-up back-to-top"}),(0,r.yg)("h3",{id:"receive-devices-telemeasuring-data"},"Receive Device\u2019s Telemeasuring Data"),"Topic Format: /device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>",(0,r.yg)("table",null,(0,r.yg)("thead",null,(0,r.yg)("tr",null,(0,r.yg)("th",null,"Field"),(0,r.yg)("th",null,"Description"))),(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"OrgID"),(0,r.yg)("td",null,"Your \u201cOrganization ID\u201d, you can find this on SenseCAP Portal. You own a unique Organization ID, and all the topics will need it.")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"DeviceEUI"),(0,r.yg)("td",null,"Unique identification of device")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"Channel"),(0,r.yg)("td",null,"A physical socket on the device for a sensor to be connected")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"Reserved"),(0,r.yg)("td",null,"Reserved")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"MeasurementID"),(0,r.yg)("td",null,"Please refer to \u201cList of Measurement IDs\u201d in this documentation")))),(0,r.yg)("div",{class:"alert alert-info",role:"alert"},(0,r.yg)("i",{class:"fa fa-info-circle"}),"\xa0",(0,r.yg)("b",null,"Note:"),"\xa0\u201c+\u201d means that there is no filtering condition for this field, matching all possible configurations. So, \u201c/+/+/+/+\u201d means to listen for all \u201c<DeviceEUI>\u201d, \u201c<Channel>\u201d, \u201c<SensorEUI>\u201d, \u201c<MeasurementID>\u201d"),"Topic can specify filtering conditions to implement listening on specified devices, channels and measurement types. For example, you can only listen for Device whose device ID is \u201c2F000000000000\u201d, then you can replace the <DeviceEUI> field with 2F000000000000.",(0,r.yg)("p",null,"The \u201c2F000000000000\u201d in this example must be a device that you have already bound to your account. And you should always remember to replace ","<","OrgID",">"," with your own \u201cOrganization ID\u201d."),(0,r.yg)("h4",{id:"message-body"},"Message Body"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "value": "437",\n    "timestamp": "1544151922137"\n}\n')),(0,r.yg)("p",null,"This is a sensor measurement data uploaded by a device, which conforms to the JSON format and can be parsed by JSON parser. In general, for most functional requirements, a body needs to be used in conjunction with some fields in the topic."),(0,r.yg)("table",null,(0,r.yg)("thead",null,(0,r.yg)("tr",null,(0,r.yg)("th",null,"Field"),(0,r.yg)("th",null,"Description"))),(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"value"),(0,r.yg)("td",null,"Sensor\u2019s Measurement Value")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"timestamp"),(0,r.yg)("td",null,"The collection timestamp of the data, unit millisecond")))),(0,r.yg)("h3",{id:"receive-devices-status-data"},"Receive Device\u2019s Status Data"),"Topic Format: /device_status_event/<OrgID>/<DeviceEUI>/<Reserved>/<StatusID>",(0,r.yg)("table",null,(0,r.yg)("thead",null,(0,r.yg)("tr",null,(0,r.yg)("th",null,"Field"),(0,r.yg)("th",null,"Description"))),(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"OrgID"),(0,r.yg)("td",null,"Your \u201cOrganization ID\u201d, you can find this on SenseCAP Portal. You own a unique Organization ID, and all the topics will need it.")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"DeviceEUI"),(0,r.yg)("td",null,"Unique identification of device")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"Reserved"),(0,r.yg)("td",null,"Reserved")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"StatusID"),(0,r.yg)("td",null,"Please refer to \u201cList of Device Status IDs\u201d in this documentation")))),"Subscribe to the required StatusID according to the list of device state IDs to avoid subscribing to unexpected IDs",(0,r.yg)("h4",{id:"message-body-1"},"Message Body"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "value": "437",\n    "timestamp": "1544151922137"\n}\n')),(0,r.yg)("table",null,(0,r.yg)("thead",null,(0,r.yg)("tr",null,(0,r.yg)("th",null,"Field"),(0,r.yg)("th",null,"Description"))),(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"value"),(0,r.yg)("td",null,"Sensor\u2019s Status Value")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"timestamp"),(0,r.yg)("td",null,"The collection timestamp of the data, unit millisecond"))))))}y.isMDXComponent=!0}}]);