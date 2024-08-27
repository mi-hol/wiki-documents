"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[56643],{15680:(e,t,o)=>{o.d(t,{xA:()=>u,yg:()=>h});var r=o(96540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(o),g=n,h=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return o?r.createElement(h,i(i({ref:t},u),{},{components:o})):r.createElement(h,i({ref:t},u))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},45237:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=o(9668),n=(o(96540),o(15680));const a={title:"DSO Nano/gcc",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/DSO_Nano-gcc/",slug:"/DSO_Nano-gcc",last_update:{date:"02/03/2022",author:"gunengyu"}},i="How to build the DSO Nano firmware using gcc",c={unversionedId:"Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano-gcc",id:"Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano-gcc",title:"DSO Nano/gcc",description:"The DSO Nano firmware can be build with a gcc toolchain. The gcc-specific files reside in the project/gcc folder of the firmware source code tree.",source:"@site/docs/Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano-gcc.md",sourceDirName:"Sensor/Beyond_Grove/Accessories/Tools",slug:"/DSO_Nano-gcc",permalink:"/DSO_Nano-gcc",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano-gcc.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1643846400,formattedLastUpdatedAt:"Feb 3, 2022",frontMatter:{title:"DSO Nano/gcc",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/DSO_Nano-gcc/",slug:"/DSO_Nano-gcc",last_update:{date:"02/03/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"DSO Nano/Qemu gdb",permalink:"/DSO_Nano-Qemu_gdb"},next:{title:"DSO Quad",permalink:"/DSO_Quad"}},s={},l=[{value:"Get a ARM cross-building gcc toolchain",id:"get-a-arm-cross-building-gcc-toolchain",level:2},{value:"Get and build the firmware source code",id:"get-and-build-the-firmware-source-code",level:2},{value:"Compile the application part",id:"compile-the-application-part",level:3},{value:"Compile the library part",id:"compile-the-library-part",level:3},{value:"Testing",id:"testing",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...o}=e;return(0,n.yg)(p,(0,r.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"how-to-build-the-dso-nano-firmware-using-gcc"},"How to build the DSO Nano firmware using gcc"),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"/DSO_Nano",title:"DSO Nano"},"DSO Nano")," firmware can be build with a gcc toolchain. The gcc-specific files reside in the project/gcc folder of the firmware source code tree."),(0,n.yg)("h2",{id:"get-a-arm-cross-building-gcc-toolchain"},"Get a ARM cross-building gcc toolchain"),(0,n.yg)("p",null,"The ARM toolchain most of us use is the GCC from ARM at ","<",(0,n.yg)("a",{parentName:"p",href:"https://launchpad.net/gcc-arm-embedded"},"https://launchpad.net/gcc-arm-embedded"),">","."),(0,n.yg)("p",null,'For Linux, you can choose the tarball or the installer. The latter is a much larger download than the former, for some reason. In any case make sure you have the toolchain\'s "bin" directory in your path. For example, if you extracted the tarball to /opt, type this in your shell, or add it to your .bashrc or .pam_environment:'),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"PATH=/opt/gcc-arm-none-eabi-4_6-2012q2/bin:$PATH\n")),(0,n.yg)("p",null,"Once you have the toolchain set up correctly, simply typing:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"arm-none-eabi-gcc -v\n")),(0,n.yg)("p",null,"should list the compiler version and the options it was built with. If you instead get an error, please fix your toolchain installation before continuing."),(0,n.yg)("p",null,"If you can not find a pre-built ARM toolchain for your platform, or otherwise want to build the toolchain yourself, you can download the source or check out ",(0,n.yg)("a",{parentName:"p",href:"https://open-bldc.org/wiki/Building_ARM_Toolchain"},"https://open-bldc.org/wiki/Building_ARM_Toolchain")),(0,n.yg)("h2",{id:"get-and-build-the-firmware-source-code"},"Get and build the firmware source code"),(0,n.yg)("p",null,"For now, get the code from Tormod's gitlab tree:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"git clone https://gitlab.com/dsonano/dso-firmware.git\ncd dso-firmware\n")),(0,n.yg)("p",null,"If you later want to update your tree to latest git:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"git pull\n")),(0,n.yg)("h3",{id:"compile-the-application-part"},"Compile the application part"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"cd DS0201_APP/project/gcc\nmake\n")),(0,n.yg)("h3",{id:"compile-the-library-part"},"Compile the library part"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"cd ../../../DS0201_LIB/project/gcc\nmake clean\nmake\n")),(0,n.yg)("h2",{id:"testing"},"Testing"),(0,n.yg)("p",null,"Use ",(0,n.yg)("a",{parentName:"p",href:"/Dfu-util",title:"Dfu-util"},"Dfu-util")," to download the dso-lib.bin and dso-app.bin files to your Nano V1 or V2. For the Nano V3 model, copy the dso-lib.hex and dso-app.hex one at a time to the DFU virtual USB drive."),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);