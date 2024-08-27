"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6910],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),y=n,g=d["".concat(s,".").concat(y)]||d[y]||m[y]||o;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},79801:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(9668),n=(r(96540),r(15680));const o={description:"How to Write an ArduPy Library",title:"How to Write an ArduPy Library",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/ArduPy-Libraries",last_update:{date:"11/20/2022",author:"Matthew"}},i="How to Write an ArduPy Library",l={unversionedId:"Sensor/Wio_Terminal/ArduPy/ArduPy-Libraries",id:"Sensor/Wio_Terminal/ArduPy/ArduPy-Libraries",title:"How to Write an ArduPy Library",description:"How to Write an ArduPy Library",source:"@site/docs/Sensor/Wio_Terminal/ArduPy/ArduPy-Libraries.md",sourceDirName:"Sensor/Wio_Terminal/ArduPy",slug:"/ArduPy-Libraries",permalink:"/ArduPy-Libraries",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/ArduPy/ArduPy-Libraries.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1668902400,formattedLastUpdatedAt:"Nov 20, 2022",frontMatter:{description:"How to Write an ArduPy Library",title:"How to Write an ArduPy Library",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/ArduPy-Libraries",last_update:{date:"11/20/2022",author:"Matthew"}}},s={},u=[{value:"Hardware Required",id:"hardware-required",level:2},{value:"Get Started",id:"get-started",level:2},{value:"1. Arduino Libraries",id:"1-arduino-libraries",level:3},{value:"2. ArduPy Library Structure",id:"2-ardupy-library-structure",level:3},{value:"3. Writing the <code>library.json</code>",id:"3-writing-the-libraryjson",level:3},{value:"4. Writing the <code>wrapper_ardupy_MODULE.cpp</code>",id:"4-writing-the-wrapper_ardupy_modulecpp",level:3},{value:"Functions that takes Parameters",id:"functions-that-takes-parameters",level:4},{value:"5. Writing the <code>mod_ardupy_MODULE.c</code>",id:"5-writing-the-mod_ardupy_modulec",level:3},{value:"Functions that takes Parameters",id:"functions-that-takes-parameters-1",level:4},{value:"6. Building the Firmware",id:"6-building-the-firmware",level:3},{value:"Testing the Libraries",id:"testing-the-libraries",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(d,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"how-to-write-an-ardupy-library"},"How to Write an ArduPy Library"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/ardupy/ardupy_logo.png",alt:null})),(0,n.yg)("p",null,"In this wiki, we will introduce how to write an ArduPy library from scratch and used an example to fully walk through the workflow. By the end of this, you will have a understanding of how to write an ArduPy library and implement into your ArduPy projects! You can convert your favorite Arduino library into MicroPython form factor and use it under ArduPy!"),(0,n.yg)("p",null,"This would require some software programming knowledge, but it should be simple to follow through some key points."),(0,n.yg)("h2",{id:"hardware-required"},"Hardware Required"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,n.yg)("strong",{parentName:"a"},"Wio Terminal")))),(0,n.yg)("h2",{id:"get-started"},"Get Started"),(0,n.yg)("p",null,"Let's walk you through an example and get you better understanding!"),(0,n.yg)("h3",{id:"1-arduino-libraries"},"1. Arduino Libraries"),(0,n.yg)("p",null,"First thing first, to write an ArduPy library, you will need to find the library that is already written in ",(0,n.yg)("strong",{parentName:"p"},"Arduino library")," form. This should be very easy as most our modules will support Arduino and will have an Arduino library on our ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio"},"github"),". Simply search the module on the github and find the repository."),(0,n.yg)("p",null,"In this wiki, I will take the ",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html"},(0,n.yg)("strong",{parentName:"a"},"Grove - Temp&Humi&Barometer Sensor (BME280)"))," as an example and here is the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_BME280"},(0,n.yg)("strong",{parentName:"a"},"Grove-BME280 Arduino Library")),"."),(0,n.yg)("p",null,"!!!Note\nThe first thing to do is better to check that the library is working on the Arduino, so that it won't be a program later on. Simply upload one of the example to see if there is any errors."),(0,n.yg)("h3",{id:"2-ardupy-library-structure"},"2. ArduPy Library Structure"),(0,n.yg)("p",null,"Let's first walk through an ArduPy library structure so we know what is needed!"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-ArduPy-Library/structure.png"})),(0,n.yg)("p",null,"This is the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/seeed-ardupy-bme280"},"ArduPy library for Grove-BME280")," and this is what a ArduPy library consist of:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},".gitigore"))," - specifies intentionally untracked files to ignore for git")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},".travis.yml"))," - our CI test files which can be ignored")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"LICENSE"))," - the license of the library")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"README.md"))," - README doc")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"library.json"))," - ArduPy json file for the library")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"mod_ardupy_bme280.c"))," - core code that converts c to micropython")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"wrapper_ardupy_bme280.cpp"))," - A wrapper for code"))),(0,n.yg)("p",null,"Therefore the important files are only ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"library.json")),", ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"mod_ardupy_bme280.c"))," and ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"wrapper_ardupy_bme280.cpp"))," where others are not needed if you're writing for you own ArduPy library."),(0,n.yg)("p",null,"!!!Note\nAlthough it is not necessary, it is also better to contain all the files list above (LICENSE and README makes it user-friendly)"),(0,n.yg)("h3",{id:"3-writing-the-libraryjson"},"3. Writing the ",(0,n.yg)("inlineCode",{parentName:"h3"},"library.json")),(0,n.yg)("p",null,"Let's get it started by writing the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/library.json"},(0,n.yg)("inlineCode",{parentName:"a"},"library.json"))," first. This is the json files to locate the dependent libraries. For the Grove-BME280 it looks like this:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Seeed ArduPy BME280 ",\n    "version": "1.0.0",\n    "repository": {\n        "type": "git",\n        "url": "https://github.com/Seeed-Studio/seeed-ardupy-bme280.git"\n    },\n    "dependencies": [{\n        "name": "Seeed_Arduino_BME280",\n        "url": "https://github.com/Seeed-Studio/Grove_BME280.git"\n    }]\n}\n')),(0,n.yg)("p",null,"where ",(0,n.yg)("inlineCode",{parentName:"p"},"name")," is the name of the ArduPy library and the ",(0,n.yg)("inlineCode",{parentName:"p"},"url")," under ",(0,n.yg)("inlineCode",{parentName:"p"},"repository")," is url of the library. This ",(0,n.yg)("inlineCode",{parentName:"p"},"url")," is used ArduPy-aip to search. You replace to your own github repo."),(0,n.yg)("p",null,"Under ",(0,n.yg)("inlineCode",{parentName:"p"},"dependencies"),", this is the dependent library (Arduino library):"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"name")," is the name of the Arduino library for later usage, you may also use the format ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"strong"},"Seeed_Arduino_MODULE-NAME")),"."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"url")," is the url for the dependent Arduino library.")),(0,n.yg)("h3",{id:"4-writing-the-wrapper_ardupy_modulecpp"},"4. Writing the ",(0,n.yg)("inlineCode",{parentName:"h3"},"wrapper_ardupy_MODULE.cpp")),(0,n.yg)("p",null,"This is the wrapper for the converting ",(0,n.yg)("inlineCode",{parentName:"p"},"c")," to ",(0,n.yg)("inlineCode",{parentName:"p"},"MicroPython")," code. Let's check ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/wrapper_ardupy_bme280.cpp"},(0,n.yg)("inlineCode",{parentName:"a"},"wrapper_ardupy_bme280.cpp"))," for example."),(0,n.yg)("p",null,"First, need to include the dependent library, something like this:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},'#include "Seeed_Arduino_BME280/Seeed_BME280.h"\n')),(0,n.yg)("p",null,"!!!Note\nMake sure that the name matches."),(0,n.yg)("p",null,"Include the share bindings:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},'extern "C"{\n#include "py/mphal.h"\n#include "py/nlr.h"\n#include "py/objtype.h"\n#include "py/runtime.h"\n#include "shared-bindings/util.h"\n}\n')),(0,n.yg)("p",null,"Initializing the module with format as followed:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"#define bme280 (*(BME280*)self->module)\nvoid * operator new(size_t, void *);\n")),(0,n.yg)("p",null,"where ",(0,n.yg)("inlineCode",{parentName:"p"},"bme280")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"BME280")," will be replaced to your module name."),(0,n.yg)("p",null,"Next up gets a bit tricky. Follow the same format as follow to map functions from the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h"},"Grove-BME280"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},'extern "C" {\n    void common_hal_bme280_construct(abstract_module_t *self){\n        self->module = new (m_new_obj(BME280)) BME280();\n        bme280.init();\n    }\n    void common_hal_bme280_deinit(abstract_module_t *self){\n        bme280.~BME280();\n    }\n    float common_hal_bme280_get_temperature(abstract_module_t *self){\n        return bme280.getTemperature();\n    }\n    uint32_t common_hal_bme280_get_pressure(abstract_module_t *self){\n        return bme280.getPressure();\n    }\n    uint32_t common_hal_bme280_get_humidity(abstract_module_t *self){\n        return bme280.getHumidity();\n    }\n}\n')),(0,n.yg)("p",null,"where ",(0,n.yg)("inlineCode",{parentName:"p"},"common_hal_bme280_construct")," is the initializing function to create an object and it has a format of:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"self->module = new (m_new_obj(BME280)) BME280();\nbme280.init()\n")),(0,n.yg)("p",null,"Replace ",(0,n.yg)("inlineCode",{parentName:"p"},"BME280")," to your module. Initialize the module using ",(0,n.yg)("inlineCode",{parentName:"p"},"bme280.init()")," of which comes from ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h#L47"},"here"),"."),(0,n.yg)("p",null,"For functions, it simply called from the Arduino side which looks like this:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"float common_hal_bme280_get_temperature(abstract_module_t *self){\n    return bme280.getTemperature();\n}\n")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"getTemperature()")," comes from ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h#L48"},"here"),"."),(0,n.yg)("p",null,"You should be able to see the pattern here where you simply map the functions from ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h#L45"},"Grove-BME280")," following the above format."),(0,n.yg)("h4",{id:"functions-that-takes-parameters"},"Functions that takes Parameters"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"If your ",(0,n.yg)("strong",{parentName:"li"},"module have functions that take parameters"),", please read through here.")),(0,n.yg)("p",null,"Let's take an example here in the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/blob/master/src/LIS3DHTR.h#L208"},"Seeed_Arduino_LIS3DHTR")," where it takes one parameter. This function would convert to this in the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/seeed-ardupy-lis3dhtr/blob/master/wrapper_ardupy_lis3dhtr.cpp#L83"},"seeed-ardupy-lis3dhtr"),"."),(0,n.yg)("p",null,"From this:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"void setHighSolution(bool enable);\n")),(0,n.yg)("p",null,"converts to:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"void common_hal_lis3dhtr_setHighSolution(abstract_module_t *self, bool enable)\n{\n    lis.setHighSolution(enable);\n}\n")),(0,n.yg)("p",null,"You should be able to see the pattern here. Here provides ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/seeed-ardupy-my9221/blob/master/wrapper_my9221.cpp#L58"},"an example")," that take 2 parameters."),(0,n.yg)("h3",{id:"5-writing-the-mod_ardupy_modulec"},"5. Writing the ",(0,n.yg)("inlineCode",{parentName:"h3"},"mod_ardupy_MODULE.c")),(0,n.yg)("p",null,"Once the wrapper is done, let's get work on the core, will take ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/mod_ardupy_bme280.c"},(0,n.yg)("inlineCode",{parentName:"a"},"mod_ardupy_bme280.c"))," as example."),(0,n.yg)("p",null,"First, also include the shared bindings:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},'#include "py/mphal.h"\n#include "py/nlr.h"\n#include "py/objtype.h"\n#include "py/runtime.h"\n#include "py/obj.h"\n#include "shared-bindings/util.h"\n')),(0,n.yg)("p",null,"State the previously defined functions from the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/wrapper_ardupy_bme280.cpp"},"wrapper"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"void common_hal_bme280_construct(abstract_module_t *self);\nvoid common_hal_bme280_deinit(abstract_module_t *self);\nfloat common_hal_bme280_get_temperature(abstract_module_t *self);\nuint32_t common_hal_bme280_get_pressure(abstract_module_t *self);\nuint32_t common_hal_bme280_get_humidity(abstract_module_t *self);\nextern const mp_obj_type_t grove_bme280_type;\n")),(0,n.yg)("p",null,"Initialize the module:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"m_generic_make(bme280) {\n    abstract_module_t * self = new_abstruct_module(type);\n    mp_arg_check_num(n_args, n_kw, 0, 0, false);\n    common_hal_bme280_construct(self);\n    return self;\n}\n")),(0,n.yg)("p",null,"where you could follow the same format and replace to you functions and module names."),(0,n.yg)("p",null,"Next up it's the object attributes, you should also write in the following format:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"void bme280_obj_attr(mp_obj_t self_in, qstr attr, mp_obj_t *dest){\n    abstract_module_t *self = (abstract_module_t *)self_in;\n    uint32_t value;\n    float number;\n    if (dest[0] == MP_OBJ_NULL) {\n        if (attr == MP_QSTR_temperature) {\n            number = common_hal_bme280_get_temperature(self); // Call previously defined unction\n            dest[0] = mp_obj_new_float(number); // This the MicroPython float type, should match with the data type\n            return;\n        }\n        else if (attr == MP_QSTR_pressure) {\n            value = common_hal_bme280_get_pressure(self); // Call previously defined unction\n            dest[0] = mp_obj_new_int(value); // This the MicroPython int type, should match with the data type\n            return;\n        }\n        else if (attr == MP_QSTR_humidity) {\n            value = common_hal_bme280_get_humidity(self); // Call previously defined unction\n            dest[0] = mp_obj_new_int(value);\n            return;\n        }\n    }\n    generic_method_lookup(self_in, attr, dest);\n}\n")),(0,n.yg)("p",null,"You can see that it simply return the functions by doing as followed:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"if (attr == MP_QSTR_temperature) {\n    number = common_hal_bme280_get_temperature(self); // Call previously defined unction\n    dest[0] = mp_obj_new_float(number); // This the MicroPython float type, should match with the data type\n    return;\n}\n")),(0,n.yg)("p",null,"This basically converts to ",(0,n.yg)("inlineCode",{parentName:"p"},".temperature")," method in usage (i.e. ",(0,n.yg)("inlineCode",{parentName:"p"},"MP_QSTR_[Function-name]"),"). You should also be able to see pattern here."),(0,n.yg)("p",null,"!!!Note\n",(0,n.yg)("inlineCode",{parentName:"p"},"dest[0]")," data type should match here. There are ",(0,n.yg)("inlineCode",{parentName:"p"},"mp_obj_new_float"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"mp_obj_new_int"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"mp_obj_new_bool"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"mp_obj_new_str")," and etc."),(0,n.yg)("p",null,"Define a look-up table:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"const mp_rom_map_elem_t bme280_locals_dict_table[] = {\n    // instance methods\n    { MP_ROM_QSTR(MP_QSTR_deinit),    MP_ROM_PTR(&bme280_deinit_obj) },\n    { MP_ROM_QSTR(MP_QSTR___enter__), MP_ROM_PTR(&default___enter___obj) },\n    { MP_ROM_QSTR(MP_QSTR___exit__),  MP_ROM_PTR(&bme280_obj___exit___obj) },\n};\n\nMP_DEFINE_CONST_DICT(bme280_locals_dict, bme280_locals_dict_table);\n")),(0,n.yg)("p",null,"Define the initial module type:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"const mp_obj_type_t grove_bme280_type = {\n    {&mp_type_type},\n    .name = MP_QSTR_grove_bme280,\n    .make_new = bme280_make_new,\n    .locals_dict = (mp_obj_t)&bme280_locals_dict,\n    .attr = bme280_obj_attr,\n};\n")),(0,n.yg)("p",null,"This may seem tricky at first, but it's actually replacing module names and very little programming."),(0,n.yg)("h4",{id:"functions-that-takes-parameters-1"},"Functions that takes Parameters"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"If your ",(0,n.yg)("strong",{parentName:"li"},"module have functions that take parameters"),", please read through here.")),(0,n.yg)("p",null,"Let's also take the same example as before to demonstrate. This is the code to implement the function in ",(0,n.yg)("inlineCode",{parentName:"p"},"mod_ardupy_[MODULE].c"),". Follow the same format as below to map functions:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"For function that ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/seeed-ardupy-lis3dhtr/blob/master/mod_ardupy_lis3dhtr.c#L97"},"takes 1 parameter"),":")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"mp_obj_t lis3dhtr_setHighSolution(size_t n_args, const mp_obj_t *pos_args, mp_map_t *kw_args)\n{\n    abstract_module_t *self = (abstract_module_t *)pos_args[0];\n    bool enable = mp_obj_is_true(pos_args[1]);\n    common_hal_lis3dhtr_setHighSolution(self, enable);\n    return mp_const_none;\n}\nMP_DEFINE_CONST_FUN_OBJ_KW(lis3dhtr_setHighSolution_obj, 1, lis3dhtr_setHighSolution);\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"For function that ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/seeed-ardupy-my9221/blob/master/mod_ardupy_my9221.c#L85"},"takes 2 parameters")," (",(0,n.yg)("strong",{parentName:"li"},"this is not the code for lis3dhtr, just to demonstrate"),"):")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"mp_obj_t led_bar_set_brightness(size_t n_args, const mp_obj_t *pos_args, mp_map_t *kw_args){\n    abstract_module_t * self = (abstract_module_t *)(pos_args[0]);\n    uint32_t led_no = mp_obj_get_int(pos_args[1]);\n    float value = mp_obj_get_float(pos_args[2]);\n    common_hal_led_bar_set_brightness(self, led_no, value);\n    return mp_const_none;\n}\n\nMP_DEFINE_CONST_FUN_OBJ_KW(led_bar_set_brightness_obj, 2, led_bar_set_brightness);\n")),(0,n.yg)("p",null,"!!!Note\nSame here, the data types should match, there are ",(0,n.yg)("inlineCode",{parentName:"p"},"mp_obj_is_true"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"mp_obj_get_int"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"mp_obj_get_float"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"mp_obj_get_str")," and etc."),(0,n.yg)("p",null,"Remember to add the function to the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/seeed-ardupy-lis3dhtr/blob/master/mod_ardupy_lis3dhtr.c#L169"},"look-up table"),", which looks like this:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"const mp_rom_map_elem_t lis3dhtr_locals_dict_table[] = {\n    // instance methods\n    {MP_ROM_QSTR(MP_QSTR_deinit), MP_ROM_PTR(&lis3dhtr_deinit_obj)},\n    {MP_ROM_QSTR(MP_QSTR___enter__), MP_ROM_PTR(&default___enter___obj)},\n    {MP_ROM_QSTR(MP_QSTR___exit__), MP_ROM_PTR(&lis3dhtr_obj___exit___obj)},\n    {MP_ROM_QSTR(MP_QSTR_available), MP_ROM_PTR(&lis3dhtr_available_obj)},\n    {MP_ROM_QSTR(MP_QSTR_setPowerMode), MP_ROM_PTR(&lis3dhtr_setPowerMode_obj)},\n    {MP_ROM_QSTR(MP_QSTR_setFullScaleRange), MP_ROM_PTR(&lis3dhtr_setFullScaleRange_obj)},\n    {MP_ROM_QSTR(MP_QSTR_setOutputDataRate), MP_ROM_PTR(&lis3dhtr_setOutputDataRate_obj)},\n    {MP_ROM_QSTR(MP_QSTR_setHighSolution), MP_ROM_PTR(&lis3dhtr_setHighSolution_obj)},\n    {MP_ROM_QSTR(MP_QSTR_openTemp), MP_ROM_PTR(&lis3dhtr_openTemp_obj)},\n    {MP_ROM_QSTR(MP_QSTR_closeTemp), MP_ROM_PTR(&lis3dhtr_closeTemp_obj)},\n};\n")),(0,n.yg)("h3",{id:"6-building-the-firmware"},"6. Building the Firmware"),(0,n.yg)("p",null,"Now once you have written the ArduPy library, you will need to build it and of course debug if there are any errors while building it! You can now upload the entire project sketch to your github repository, for example: ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/seeed-ardupy-bme280"},"https://github.com/Seeed-Studio/seeed-ardupy-bme280"),"."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Download and Install ",(0,n.yg)("inlineCode",{parentName:"li"},"ardupy-aip")," the tool set to build ArduPy library following this ",(0,n.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/ArduPy/#install-aip-with-macos"},(0,n.yg)("strong",{parentName:"a"},"tutorial")),".")),(0,n.yg)("p",null,"Once you have ",(0,n.yg)("inlineCode",{parentName:"p"},"ardupy-aip")," installed, you can run the following to build your ArduPy firmware:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"aip install [Your ArduPy library url]\n# For example: aip install https://github.com/Seeed-Studio/seeed-ardupy-bme280\n")),(0,n.yg)("p",null,"Build the ArduPy library with the firmware:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"aip build\n")),(0,n.yg)("p",null,"If everything goes well, you should be see a screen as follow, meaning that there is no error in the ArduPy library!"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-ArduPy-Library/build.png"})),(0,n.yg)("h2",{id:"testing-the-libraries"},"Testing the Libraries"),(0,n.yg)("p",null,"Once your build was successful, you can use the following command to flash the firmware to your device and test the library:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"aip flash\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Note:")," Make sure that your device is connected to your PC beforehand."),(0,n.yg)("p",null,"Once flashed you can use the shell function to enter repl mode:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},'aip shell -c "repl"\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Import the written module using the following format:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-py"},"from arduino import grove_bme280\n")),(0,n.yg)("p",null,"where ",(0,n.yg)("inlineCode",{parentName:"p"},"grove_bme280")," will be replaced with your library module name."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Initialize the library and call the function as follow:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-py"},'bme280 = grove_bme280()\nprint ("Temperature: ", bme280.temperature, "C")\nprint ("Humidity: ", bme280.humidity, "%")\nprint ("Pressure: ", bme280.pressure, "Pa")\n')),(0,n.yg)("p",null,"If you have gone this far, you have written a ArduPy library successfully! This allows you to convert any Arduino library into ArduPy library."),(0,n.yg)("p",null,"!!!Note\nIf your library stuck at any point or not getting results back, there might be some bugs in the code. Please check carefully."),(0,n.yg)("h2",{id:"resources"},"Resources"),(0,n.yg)("p",null,"There are numbers of ArduPy libraries already available, you can install and build your ArduPy firmware with these easily. You may also use these as templates to write you own ArduPy libraries!"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio?q=ardupy&type=&language="},"ArduPy Libraries available"))),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);