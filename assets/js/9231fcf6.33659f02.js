"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6083],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var i=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function x(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=x(e,["components","mdxType","originalType","parentName"]),d=s(t),p=r,g=d["".concat(l,".").concat(p)]||d[p]||u[p]||a;return t?i.createElement(g,o(o({ref:n},c),{},{components:t})):i.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=p;var x={};for(var l in n)hasOwnProperty.call(n,l)&&(x[l]=n[l]);x.originalType=e,x[d]="string"==typeof e?e:r,o[1]=x;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},41668:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>x,toc:()=>s});var i=t(9668),r=(t(96540),t(15680));const a={description:"Accessing to GitHub using Wio Terminal",title:"Accessing to GitHub using Wio Terminal",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Reading-Github",last_update:{date:"1/31/2023",author:"jianjing Huang"}},o="Reading Github Repository Stats from Wio Terminal",x={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Reading-Github",id:"Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Reading-Github",title:"Accessing to GitHub using Wio Terminal",description:"Accessing to GitHub using Wio Terminal",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Reading-Github.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial",slug:"/Wio-Terminal-Reading-Github",permalink:"/Wio-Terminal-Reading-Github",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Reading-Github.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"Accessing to GitHub using Wio Terminal",title:"Accessing to GitHub using Wio Terminal",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Reading-Github",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Edge Impulse Tuner",permalink:"/Edge-Impulse-Tuner"},next:{title:"Getting Started with ReSpeaker Lite",permalink:"/reSpeaker_usb_v3"}},l={},s=[{value:"Part List",id:"part-list",level:2},{value:"Features",id:"features",level:2},{value:"Arduino libraries needed",id:"arduino-libraries-needed",level:2},{value:"Arduino Instructions",id:"arduino-instructions",level:2},{value:"Complete Code",id:"complete-code",level:2}],c={toc:s},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,i.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"reading-github-repository-stats-from-wio-terminal"},"Reading Github Repository Stats from Wio Terminal"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Github.gif"})),(0,r.yg)("p",null,"This wiki introduces how to use Wio Terminal to access to ",(0,r.yg)("strong",{parentName:"p"},"HTTPS")," server, which means you could use Wio Terminal to grab live data from the internet! Here, Wio Terminal is connected to a Wi-Fi and obtain data from the Github."),(0,r.yg)("p",null,"With this, you can implement the Demo to others api such as grabbing Weather information, Youtube Stats and etc."),(0,r.yg)("h2",{id:"part-list"},"Part List"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Wio Terminal"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html"},"Wio Terminal Battery Chassis")))),(0,r.yg)("h2",{id:"features"},"Features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Connects to a https server")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Grab repo stats from Github")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Can change to any Github Repositories"))),(0,r.yg)("h2",{id:"arduino-libraries-needed"},"Arduino libraries needed"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Install the LCD screen Library ",(0,r.yg)("inlineCode",{parentName:"p"},"Seeed_Arduino_LCD"),", please visit ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/"},"Wio Terminal LCD")," for more information.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Visit the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/bblanchon/ArduinoJson"},"ArduinoJson")," repositories and download the entire repo to your local drive."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Now, the ArduinoJson library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,r.yg)("inlineCode",{parentName:"li"},"sketch")," -> ",(0,r.yg)("inlineCode",{parentName:"li"},"Include Library")," -> ",(0,r.yg)("inlineCode",{parentName:"li"},"Add .ZIP Library"),", and choose the ",(0,r.yg)("inlineCode",{parentName:"li"},"ArduinoJson")," file that you've have just downloaded."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"For more information about Https connection, please visit ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Wi-Fi/#wi-fi-https-connection-example-code"},(0,r.yg)("strong",{parentName:"a"},"here")),"."))),(0,r.yg)("h2",{id:"arduino-instructions"},"Arduino Instructions"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Download the ",(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/Free_Fonts.h"},(0,r.yg)("inlineCode",{parentName:"a"},"Free_Fonts.h"))," header file so that can use abbreviations for the free fonts included in the LCD library. Please make sure to put this header file in the same location as the Arduino Sketch.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Download the Complete code ",(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/GitHubStats.zip"},"here")," or copy the following.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Upload the code."))),(0,r.yg)("h2",{id:"complete-code"},"Complete Code"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," Change the ",(0,r.yg)("inlineCode",{parentName:"p"},"ssid")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"password")," to your Network Wi-Fi."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include "rpcWiFi.h"\n#include <WiFiClientSecure.h>\n#include <ArduinoJson.h>\n#include"Free_Fonts.h"\n#include"TFT_eSPI.h"\nTFT_eSPI tft;\n\nconst char* ssid     = "yourNetworkName";\nconst char* password = "yourNetworkPassword";\n\n//29*27\nconst unsigned char watchIMG[] = {\n  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, \n  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xE0, 0x00, 0x00, \n  0x00, 0xFC, 0x07, 0x00, 0x00, 0xFF, 0x1F, 0x00, 0x80, 0x1F, 0x3F, 0x00, \n  0xC0, 0x07, 0x7C, 0x00, 0xE0, 0x03, 0xF8, 0x00, 0xF0, 0xE1, 0xF0, 0x01, \n  0xF8, 0xF1, 0xF1, 0x01, 0xF8, 0xF8, 0xF1, 0x03, 0xFC, 0xF8, 0xF1, 0x03, \n  0xF8, 0xF0, 0xF1, 0x03, 0xF0, 0xF1, 0xF0, 0x01, 0xF0, 0x01, 0xF8, 0x00, \n  0xE0, 0x03, 0x78, 0x00, 0xC0, 0x07, 0x3E, 0x00, 0x80, 0xFF, 0x1F, 0x00, \n  0x00, 0xFE, 0x0F, 0x00, 0x00, 0xF8, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00, \n  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, \n  };\n\nconst unsigned char starIMG[] = {\n  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, \n  0x00, 0xC0, 0x00, 0x00, 0x00, 0xE0, 0x00, 0x00, 0x00, 0xE0, 0x01, 0x00, \n  0x00, 0xF0, 0x01, 0x00, 0x00, 0xF0, 0x03, 0x00, 0x00, 0xF8, 0x03, 0x00, \n  0x00, 0xF8, 0x07, 0x00, 0x00, 0xFE, 0x0F, 0x00, 0xFE, 0xFF, 0xFF, 0x1F, \n  0xFE, 0xFF, 0xFF, 0x0F, 0xFC, 0xFF, 0xFF, 0x07, 0xF8, 0xFF, 0xFF, 0x03, \n  0xF0, 0xFF, 0xFF, 0x01, 0xC0, 0xFF, 0xFF, 0x00, 0x80, 0xFF, 0x7F, 0x00, \n  0x00, 0xFF, 0x3F, 0x00, 0x80, 0xFF, 0x3F, 0x00, 0x80, 0xFF, 0x3F, 0x00, \n  0x80, 0xFF, 0x3F, 0x00, 0x80, 0xFF, 0x7F, 0x00, 0x80, 0xBF, 0x7F, 0x00, \n  0xC0, 0x1F, 0x7E, 0x00, 0xC0, 0x07, 0x78, 0x00, 0xC0, 0x01, 0x70, 0x00, \n  0x40, 0x00, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, \n  };\n\nconst unsigned char forkIMG[] = {\n  0xF8, 0x00, 0x00, 0x00, 0xFE, 0x03, 0x00, 0x00, 0x0F, 0x07, 0x00, 0x01, \n  0x07, 0x07, 0xE0, 0x0F, 0x07, 0x07, 0x78, 0x1E, 0x9E, 0x07, 0x38, 0x38, \n  0xFC, 0x01, 0x38, 0x38, 0xF8, 0x00, 0x38, 0x3C, 0xF8, 0x00, 0xF0, 0x1F, \n  0xF8, 0x00, 0xE0, 0x07, 0xF8, 0x00, 0xC0, 0x07, 0xF8, 0x00, 0xE0, 0x07, \n  0xF8, 0x00, 0xE0, 0x07, 0xF8, 0x00, 0xF8, 0x03, 0xF8, 0x00, 0xFE, 0x01, \n  0xF8, 0xE0, 0xFF, 0x00, 0xF8, 0xFF, 0x7F, 0x00, 0xF8, 0xFF, 0x1F, 0x00, \n  0xF8, 0xFF, 0x03, 0x00, 0xF8, 0x1F, 0x00, 0x00, 0xF8, 0x03, 0x00, 0x00, \n  0xF8, 0x01, 0x00, 0x00, 0xF8, 0x00, 0x00, 0x00, 0xFC, 0x01, 0x00, 0x00, \n  0x9E, 0x07, 0x00, 0x00, 0x07, 0x07, 0x00, 0x00, 0x07, 0x07, 0x00, 0x00, \n  0x0F, 0x07, 0x00, 0x00, 0xFE, 0x03, 0x00, 0x00, 0xF8, 0x00, 0x00, 0x00, \n  };\n\nconst char*  server = "api.github.com";  // Server URL\n\nconst char* test_root_ca = \\\n                            "-----BEGIN CERTIFICATE-----\\n"\n                            "MIIEsTCCA5mgAwIBAgIQBOHnpNxc8vNtwCtCuF0VnzANBgkqhkiG9w0BAQsFADBs\\n"\n                            "MQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3\\n"\n                            "d3cuZGlnaWNlcnQuY29tMSswKQYDVQQDEyJEaWdpQ2VydCBIaWdoIEFzc3VyYW5j\\n"\n                            "ZSBFViBSb290IENBMB4XDTEzMTAyMjEyMDAwMFoXDTI4MTAyMjEyMDAwMFowcDEL\\n"\n                            "MAkGA1UEBhMCVVMxFTATBgNVBAoTDERpZ2lDZXJ0IEluYzEZMBcGA1UECxMQd3d3\\n"\n                            "LmRpZ2ljZXJ0LmNvbTEvMC0GA1UEAxMmRGlnaUNlcnQgU0hBMiBIaWdoIEFzc3Vy\\n"\n                            "YW5jZSBTZXJ2ZXIgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC2\\n"\n                            "4C/CJAbIbQRf1+8KZAayfSImZRauQkCbztyfn3YHPsMwVYcZuU+UDlqUH1VWtMIC\\n"\n                            "Kq/QmO4LQNfE0DtyyBSe75CxEamu0si4QzrZCwvV1ZX1QK/IHe1NnF9Xt4ZQaJn1\\n"\n                            "itrSxwUfqJfJ3KSxgoQtxq2lnMcZgqaFD15EWCo3j/018QsIJzJa9buLnqS9UdAn\\n"\n                            "4t07QjOjBSjEuyjMmqwrIw14xnvmXnG3Sj4I+4G3FhahnSMSTeXXkgisdaScus0X\\n"\n                            "sh5ENWV/UyU50RwKmmMbGZJ0aAo3wsJSSMs5WqK24V3B3aAguCGikyZvFEohQcft\\n"\n                            "bZvySC/zA/WiaJJTL17jAgMBAAGjggFJMIIBRTASBgNVHRMBAf8ECDAGAQH/AgEA\\n"\n                            "MA4GA1UdDwEB/wQEAwIBhjAdBgNVHSUEFjAUBggrBgEFBQcDAQYIKwYBBQUHAwIw\\n"\n                            "NAYIKwYBBQUHAQEEKDAmMCQGCCsGAQUFBzABhhhodHRwOi8vb2NzcC5kaWdpY2Vy\\n"\n                            "dC5jb20wSwYDVR0fBEQwQjBAoD6gPIY6aHR0cDovL2NybDQuZGlnaWNlcnQuY29t\\n"\n                            "L0RpZ2lDZXJ0SGlnaEFzc3VyYW5jZUVWUm9vdENBLmNybDA9BgNVHSAENjA0MDIG\\n"\n                            "BFUdIAAwKjAoBggrBgEFBQcCARYcaHR0cHM6Ly93d3cuZGlnaWNlcnQuY29tL0NQ\\n"\n                            "UzAdBgNVHQ4EFgQUUWj/kK8CB3U8zNllZGKiErhZcjswHwYDVR0jBBgwFoAUsT7D\\n"\n                            "aQP4v0cB1JgmGggC72NkK8MwDQYJKoZIhvcNAQELBQADggEBABiKlYkD5m3fXPwd\\n"\n                            "aOpKj4PWUS+Na0QWnqxj9dJubISZi6qBcYRb7TROsLd5kinMLYBq8I4g4Xmk/gNH\\n"\n                            "E+r1hspZcX30BJZr01lYPf7TMSVcGDiEo+afgv2MW5gxTs14nhr9hctJqvIni5ly\\n"\n                            "/D6q1UEL2tU2ob8cbkdJf17ZSHwD2f2LSaCYJkJA69aSEaRkCldUxPUd1gJea6zu\\n"\n                            "xICaEnL6VpPX/78whQYwvwt/Tv9XBZ0k7YXDK/umdaisLRbvfXknsuvCnQsH6qqF\\n"\n                            "0wGjIChBWUMo0oHjqvbsezt3tkBigAVBRQHvFwY+3sAzm2fTYS5yh+Rp/BIAV0Ae\\n"\n                            "cPUeybQ=\\n"\n                            "-----END CERTIFICATE-----\\n";\n\n// You can use x.509 client certificates if you want\n//const char* test_client_key = "";   //to verify the client\n//const char* test_client_cert = "";  //to verify the client\n\nString github_data;\n\nWiFiClientSecure client;\n\nvoid setup() {\n    //Initialize serial and wait for port to open:\n    Serial.begin(115200);\n    delay(100);\n\n    Serial.print("Attempting to connect to SSID: ");\n    Serial.println(ssid);\n    WiFi.begin(ssid, password);\n\n    tft.begin();\n    tft.setRotation(3);\n    tft.fillScreen(TFT_BLACK);\n    tft.setTextSize(2);\n    tft.setCursor((320 - tft.textWidth("Connecting to Wi-Fi.."))/2, 120);\n    tft.print("Connecting to Wi-Fi..");\n\n    // attempt to connect to Wifi network:\n    while (WiFi.status() != WL_CONNECTED) {\n        Serial.print(".");\n        // wait 1 second for re-trying\n        delay(1000);\n    }\n\n    Serial.print("Connected to ");\n    Serial.println(ssid);\n\n    tft.fillScreen(TFT_BLACK);\n    tft.setCursor((320 - tft.textWidth("Connected!"))/2, 120);\n    tft.print("Connected!");\n\n    getData();\n}\n\nvoid loop() {\n    // do nothing\n}\n\nvoid getData() {\n    client.setCACert(test_root_ca);\n  //client.setCertificate(test_client_key); // for client verification\n  //client.setPrivateKey(test_client_cert); // for client verification\n\n    tft.fillScreen(TFT_BLACK);\n    tft.setCursor((320 - tft.textWidth("Conectting to Server.."))/2, 120);\n    tft.print("Connecting to Server..");\n\n    Serial.println("\\nStarting connection to server...");\n    if (!client.connect(server, 443)) {\n        Serial.println("Connection failed!");\n        tft.fillScreen(TFT_BLACK);\n        tft.setCursor((320 - tft.textWidth("Connection failed!"))/2, 120);\n        tft.print("Connection failed!");\n    } else {\n        Serial.println("Connected to server!");\n        tft.fillScreen(TFT_BLACK);\n        tft.setCursor((320 - tft.textWidth("Connected to Server!"))/2, 120);\n        tft.print("Connected to Server!");\n\n        // Make a HTTP request:\n        client.println("GET https://api.github.com/repos/micropython/micropython HTTP/1.0");\n        client.println("Host: api.github.com");\n        client.println("User-Agent: Seeed-Studio");\n        client.println("Connection: close");\n        client.println();\n\n        while (client.connected()) {\n            String line = client.readStringUntil(\'\\n\');\n            if (line == "\\r") {\n                Serial.println("headers received");\n                break;\n            }\n        }\n\n        while(client.available())\n        {\n          String line = client.readStringUntil(\'\\r\');\n          github_data = line;\n        }\n        //Serial.println(github_data);\n        client.stop();\n        Serial.println("closing connection");          \n    }\n\n    //ArduinoJson to parse data, plesae check ArduinoJson for more info\n    const size_t capacity = 2*JSON_OBJECT_SIZE(18) + JSON_OBJECT_SIZE(77) + 6050;\n    DynamicJsonDocument doc(capacity);\n    deserializeJson(doc, github_data);\n\n    int subscribers_count = doc["subscribers_count"];\n    int forks = doc["forks"];\n    int stargazers_count = doc["stargazers_count"];\n\n    Serial.println(subscribers_count);\n    Serial.println(forks);\n    Serial.println(stargazers_count);\n\n    //TFT SCREEN SESSION\n    tft.setFreeFont(FSS9);\n    tft.setTextSize(1);\n    tft.setTextColor(TFT_WHITE);\n    tft.fillScreen(TFT_BLACK);\n    tft.drawString("MicroPython Github",20,10);\n    tft.drawFastHLine(185,18,120 ,TFT_RED);\n    tft.drawFastHLine(185,19,120 ,TFT_RED);\n    tft.drawFastHLine(185,20,120 ,TFT_RED);\n    tft.drawFastHLine(10,33,300 ,TFT_NAVY);\n    tft.drawFastHLine(10,34,300 ,TFT_NAVY);\n    tft.drawFastHLine(10,35,300 ,TFT_NAVY);\n\n    tft.drawXBitmap(20,60, watchIMG, 29, 27, TFT_WHITE);\n    tft.drawXBitmap(20,120, starIMG, 30, 30, TFT_WHITE);\n    tft.drawXBitmap(20,180, forkIMG, 30, 30, TFT_WHITE);\n\n    tft.setFreeFont(FMB9);\n    tft.drawString("Watchers: ",60, 68);\n    tft.drawString("Stars: ",60, 128);\n    tft.drawString("Forks: ",60, 188);\n\n    tft.drawNumber(subscribers_count, 165, 68);\n    tft.drawNumber(stargazers_count, 130, 128);\n    tft.drawNumber(forks, 130, 188);\n}\n')))}u.isMDXComponent=!0}}]);