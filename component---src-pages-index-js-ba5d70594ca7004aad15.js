"use strict";(self.webpackChunkgatsby_starter_portfolio_minimal_theme=self.webpackChunkgatsby_starter_portfolio_minimal_theme||[]).push([[678],{4088:function(e,t,a){a.d(t,{T:function(){return v}});var l=a(7294),r=a(1883),c=a(8032);!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var l=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===a&&l.firstChild?l.insertBefore(r,l.firstChild):l.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}('.styles_skeleton__tyzRD{background:#eff1f6;display:inline-block;line-height:1;overflow:hidden;position:relative}.styles_skeleton__tyzRD:before{animation:styles_skeleton-progress__aezri 1.2s ease-in-out infinite;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0));content:"";height:100%;left:-500px;position:absolute;top:0;width:500px}@keyframes styles_skeleton-progress__aezri{0%{left:-500px}to{left:100%}}');var n=a(5400),o="style-module--Banner--d401d",i="style-module--Card--c661d",s="style-module--Category--eeb92",m="style-module--DescriptionWrapper--5f867",d="style-module--Details--5ba4b",u="style-module--Image--43f10",h="style-module--ImageWrapper--50300",g="style-module--ReadingTime--a0392",f="style-module--Title--de70d";function v(e){const{globalState:t}=(0,n.j1)(),a=t.theme===n.Q2.Dark,v=e.data.link.indexOf("://")>0||0===e.data.link.indexOf("//"),p=l.createElement("article",{className:i,style:a?{border:"0.125rem solid var(--primary-color)"}:void 0},e.showBanner&&l.createElement("div",{className:o},e.data.image&&e.data.image.src&&l.createElement(c.G,{className:h,imgClassName:u,image:e.data.image.src.childImageSharp.gatsbyImageData,alt:e.data.image.alt||e.data.title})),l.createElement("div",{className:m},l.createElement("span",{className:s},l.createElement("u",null,e.data.category)),l.createElement("h4",{className:f},e.data.title),l.createElement("div",{className:d},["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][(E=e.data.publishedAt).getMonth()]+" "+E.getDate()+", "+E.getFullYear(),e.data.readingTime&&l.createElement("span",{className:g},e.data.readingTime))));var E;return v?l.createElement("a",{href:e.data.link,target:"_blank",rel:"nofollow noopener noreferrer",title:e.data.title},p):l.createElement(r.Link,{to:e.data.link,title:e.data.title},p)}},2311:function(e,t,a){a.d(t,{z:function(){return o},L:function(){return n}});var l=a(7294),r=a(1883),c="style-module--Button--82b1f";let n;function o(e){if(e.type===n.LINK){if(e.url)return e.externalLink?l.createElement("a",{id:e.id,className:c,href:e.url,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},e.label):l.createElement(r.Link,{id:e.id,to:e.url,className:c},e.label);throw new Error("Button should be a "+e.type+" but no URL is given!")}if(e.type===n.BUTTON||e.type===n.SUBMIT){if(!e.onClickHandler)throw new Error("Button should be a "+e.type+" but no onClickHandler is given!");return l.createElement("button",{id:e.id,className:c,type:e.type,onClick:e.onClickHandler},e.label)}throw new Error("Unknown button type specified.")}!function(e){e.BUTTON="button",e.SUBMIT="submit",e.LINK="link"}(n||(n={}))},1187:function(e,t,a){a.d(t,{$:function(){return o}});var l=a(7294),r="style-module--ContentWrapper --36dde",c="style-module--Heading--2c002",n="style-module--Section--1d871";function o(e){let t;return t=e.additionalClasses?e.additionalClasses.concat(r).join(" "):r,l.createElement("section",{id:e.anchor,className:n},l.createElement("div",{className:t},e.heading&&l.createElement("h3",{className:c},e.heading),e.children))}},8768:function(e,t,a){a.d(t,{i:function(){return c}});var l=a(7294),r="style-module--SlideContainer--60bf2";function c(e){let t;return t=e.additionalClasses?e.additionalClasses.concat(r).join(" "):r,l.createElement("div",{className:t,style:e.style},e.children)}},9691:function(e,t,a){a.r(t),a.d(t,{default:function(){return Se}});var l=a(7294),r=a(947),c=a(533),n=a(8032),o=a(1391),i=a(1883);const s=e=>{const t=null==e?void 0:e.username;return(0,l.useEffect)((()=>{t&&setTimeout((()=>{var t,a,l,r;null===(t=Calendly)||void 0===t||t.initBadgeWidget({url:"https://calendly.com/"+(null==e?void 0:e.username),text:null!==(a=null==e?void 0:e.label)&&void 0!==a?a:"Schedule time with me",color:null!==(l=null==e?void 0:e.colorButton)&&void 0!==l?l:"#0069ff",textColor:null!==(r=null==e?void 0:e.colorText)&&void 0!==r?r:"#ffffff"})}),1e3)}),[]),t?l.createElement(l.Fragment,null,l.createElement("link",{href:"https://assets.calendly.com/assets/external/widget.css",rel:"stylesheet"}),l.createElement(i.Script,{id:"calendlyScript",src:"https://assets.calendly.com/assets/external/widget.js",type:"text/javascript",async:!0})):l.createElement(l.Fragment,null)};var m=a(1187),d=a(1379);function u(e){return l.createElement("svg",{version:"1.1",role:"img",fill:e.color||"var(--primary-color)",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"430.123px",height:"430.123px",viewBox:"0 0 430.123 430.123"},l.createElement("g",null,l.createElement("path",{id:"Behance",d:"M388.432,119.12H280.659V92.35h107.782v26.77H388.432z M208.912,228.895 c6.954,10.771,10.429,23.849,10.429,39.203c0,15.878-3.918,30.122-11.889,42.704c-5.071,8.326-11.367,15.359-18.932,21.021 c-8.52,6.548-18.607,11.038-30.203,13.437c-11.633,2.403-24.224,3.617-37.787,3.617H0V81.247h129.25 c32.579,0.53,55.676,9.969,69.315,28.506c8.184,11.369,12.239,25.011,12.239,40.868c0,16.362-4.104,29.454-12.368,39.401 c-4.597,5.577-11.388,10.65-20.378,15.229C191.675,210.236,202.007,218.086,208.912,228.895z M61.722,186.76h56.632 c11.638,0,21.046-2.212,28.292-6.634c7.241-4.415,10.854-12.263,10.854-23.531c0-12.449-4.784-20.712-14.375-24.689 c-8.244-2.763-18.792-4.186-31.591-4.186H61.722V186.76z M162.953,264.275c0-13.902-5.682-23.513-17.023-28.67 c-6.342-2.931-15.29-4.429-26.763-4.536H61.722v71.322h56.556c11.619,0,20.612-1.521,27.102-4.694 C157.084,291.863,162.953,280.76,162.953,264.275z M428.419,220.736c1.302,8.756,1.891,21.46,1.652,38.065H290.493 c0.77,19.266,7.421,32.739,20.035,40.449c7.607,4.835,16.83,7.196,27.63,7.196c11.388,0,20.67-2.879,27.815-8.797 c3.893-3.137,7.327-7.565,10.296-13.152h51.16c-1.34,11.379-7.5,22.92-18.57,34.648c-17.151,18.641-41.205,27.988-72.097,27.988 c-25.52,0-48.011-7.883-67.533-23.592C249.772,307.777,240,282.211,240,246.746c0-33.257,8.773-58.712,26.378-76.43 c17.67-17.751,40.474-26.586,68.583-26.586c16.661,0,31.68,2.978,45.079,8.965c13.357,5.993,24.396,15.425,33.09,28.388 C420.998,192.499,426.058,205.699,428.419,220.736z M378.062,225.73c-0.938-13.322-5.386-23.405-13.395-30.296 c-7.943-6.91-17.866-10.379-29.706-10.379c-12.886,0-22.836,3.708-29.906,10.996c-7.118,7.273-11.547,17.161-13.362,29.68H378.062 L378.062,225.73z"})))}function h(e){return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 194.818 194.818",x:"0px",y:"0px",role:"img",fill:e.color||"var(--primary-color)",width:"194.818px",height:"194.818px"},l.createElement("g",null,l.createElement("path",{d:"M185.8,2.2l-56.6,0c-4.8,0-9,3.6-9.3,8.4c-0.3,5.2,3.8,9.6,9,9.6h13.5c8.1,0,12.1,9.7,6.4,15.4L78,106.2 c-3.6,3.6-3.8,9.6-0.1,13.1c1.7,1.7,4,2.5,6.2,2.5c2.3,0,4.6-0.9,6.4-2.6l70.9-70.9c5.7-5.7,15.4-1.7,15.4,6.4v13.1 c0,4.8,3.6,9,8.4,9.3c5.2,0.3,9.6-3.8,9.6-9v-57C194.8,6.2,190.8,2.2,185.8,2.2z"}),l.createElement("path",{d:"M147.7,77.3c-4.5,0.6-7.7,4.7-7.7,9.2c0,14.6,0,59.7,0,79.1c0,5-4.1,9-9,9H27c-5,0-9-4.1-9-9V61.7c0-5,4.1-9,9-9l84.4,0 c4.8,0,9-3.6,9.3-8.4c0.3-5.2-3.8-9.6-9-9.6H9c-5,0-9,4.1-9,9v139.9c0,5,4.1,9,9,9H149c5,0,9-4.1,9-9V86.2 C158,80.8,153.2,76.5,147.7,77.3z"})))}function g(e){return l.createElement("svg",{version:"1.1",role:"img",fill:e.color||"var(--primary-color)",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"262 -262 1024 1024"},l.createElement("path",{d:"M774-249.4c-282.9,0-512,229.1-512,512c0,226.6,146.6,417.9,350.1,485.8c25.6,4.5,35.2-10.9,35.2-24.3 c0-12.2-0.6-52.5-0.6-95.4c-128.6,23.7-161.9-31.4-172.2-60.2c-5.8-14.7-30.7-60.2-52.5-72.3c-17.9-9.6-43.5-33.3-0.6-33.9 c40.3-0.6,69.1,37.1,78.7,52.5c46.1,77.4,119.7,55.7,149.1,42.2c4.5-33.3,17.9-55.7,32.6-68.5c-113.9-12.8-233-57-233-252.8 c0-55.7,19.8-101.8,52.5-137.6c-5.1-12.8-23-65.3,5.1-135.7c0,0,42.9-13.4,140.8,52.5c41-11.5,84.5-17.3,128-17.3 c43.5,0,87,5.8,128,17.3c97.9-66.6,140.8-52.5,140.8-52.5c28.2,70.4,10.2,122.9,5.1,135.7c32.6,35.8,52.5,81.3,52.5,137.6 c0,196.5-119.7,240-233.6,252.8c18.6,16,34.6,46.7,34.6,94.7c0,68.5-0.6,123.5-0.6,140.8c0,13.4,9.6,29.4,35.2,24.3 c202.2-67.8,348.8-259.8,348.8-485.8C1286-20.2,1056.9-249.4,774-249.4z"}))}function f(e){return l.createElement("svg",{viewBox:"0 0 24 24",height:"48",width:"48",focusable:"false",role:"img",fill:e.color||"var(--primary-color)",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"m22.351 8.019-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z"}))}function v(e){return l.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:e.color||"var(--primary-color)",x:"0px",y:"0px",width:"430.117px",height:"430.117px",viewBox:"0 0 430.117 430.117"},l.createElement("g",null,l.createElement("path",{d:"M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z"})))}function p(e){return l.createElement("svg",{version:"1.1",id:"Mail",fill:e.color||"var(--primary-color)",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 433.664 433.664"},l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M229.376,271.616c-4.096,2.56-8.704,3.584-12.8,3.584s-8.704-1.024-12.8-3.584L0,147.2v165.376c0,35.328,28.672,64,64,64 h305.664c35.328,0,64-28.672,64-64V147.2L229.376,271.616z"}))),l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M369.664,57.088H64c-30.208,0-55.808,21.504-61.952,50.176l215.04,131.072l214.528-131.072 C425.472,78.592,399.872,57.088,369.664,57.088z"}))))}function E(e){return l.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:e.color||"var(--primary-color)",x:"0px",y:"0px",viewBox:"-237 239 24 24"},l.createElement("path",{d:"M-234.2,245.9c0-0.3-0.1-0.6-0.3-0.8l-2.2-2.7V242h7l5.4,11.8l4.7-11.8h6.6v0.4l-1.9,1.8c-0.2,0.1-0.2,0.3-0.2,0.5v13.5 c0,0.2,0,0.4,0.2,0.5l1.9,1.8v0.4h-9.4v-0.4l1.9-1.9c0.2-0.2,0.2-0.2,0.2-0.5v-10.9l-5.4,13.7h-0.7l-6.3-13.7v9.2 c-0.1,0.4,0.1,0.8,0.3,1.1l2.5,3.1v0.4h-7.1v-0.4l2.5-3.1c0.3-0.3,0.4-0.7,0.3-1.1C-234.2,256.5-234.2,245.9-234.2,245.9z"}))}function w(e){return l.createElement("svg",{version:"1.1",id:"Mail",fill:e.color||"var(--primary-color)",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 310 310"},l.createElement("g",{id:"XMLID_826_"},l.createElement("path",{id:"XMLID_827_",d:"M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73 c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783 c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598 C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467 c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977 c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889 c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597 c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961 c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895 c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367 c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998 C307.394,57.037,305.009,56.486,302.973,57.388z"})))}function y(e){return l.createElement("svg",{version:"1.1",id:"Mail",fill:e.color||"var(--primary-color)",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 480 480"},l.createElement("g",{id:"XMLID_826_"},l.createElement("path",{d:"M480,173.59c0-104.13-68.26-134.65-68.26-134.65C377.3,23.15,318.2,16.5,256.8,16h-1.51c-61.4.5-120.46,7.15-154.88,22.94,0,0-68.27,30.52-68.27,134.65,0,23.85-.46,52.35.29,82.59C34.91,358,51.11,458.37,145.32,483.29c43.43,11.49,80.73,13.89,110.76,12.24,54.47-3,85-19.42,85-19.42l-1.79-39.5s-38.93,12.27-82.64,10.77c-43.31-1.48-89-4.67-96-57.81a108.44,108.44,0,0,1-1-14.9,558.91,558.91,0,0,0,96.39,12.85c32.95,1.51,63.84-1.93,95.22-5.67,60.18-7.18,112.58-44.24,119.16-78.09C480.84,250.42,480,173.59,480,173.59ZM399.46,307.75h-50V185.38c0-25.8-10.86-38.89-32.58-38.89-24,0-36.06,15.53-36.06,46.24v67H231.16v-67c0-30.71-12-46.24-36.06-46.24-21.72,0-32.58,13.09-32.58,38.89V307.75h-50V181.67q0-38.65,19.75-61.39c13.6-15.15,31.4-22.92,53.51-22.92,25.58,0,44.95,9.82,57.75,29.48L256,147.69l12.45-20.85c12.81-19.66,32.17-29.48,57.75-29.48,22.11,0,39.91,7.77,53.51,22.92Q399.5,143,399.46,181.67Z",fill:"white"})))}function b(e){return l.createElement("svg",{viewBox:"0 0 24 24",height:"48",width:"48",focusable:"false",role:"img",fill:e.color||"var(--primary-color)",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"m20.216 6.415-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 0 0-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 0 0-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 0 1-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 0 1 3.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 0 1-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 0 1-4.743.295 37.059 37.059 0 0 1-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0 0 11.343.376.483.483 0 0 1 .535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 0 1 .39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 0 1-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 0 1-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 0 0-1.322-.238c-.826 0-1.491.284-2.26.613z"}))}function x(e){return l.createElement("svg",{viewBox:"0 32 447.99999999999994 448",xmlns:"http://www.w3.org/2000/svg",fill:e.color||"var(--primary-color)",width:"2500",height:"2321",focusable:"false",role:"img"},l.createElement("path",{d:"M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"}))}function z(e){return l.createElement("svg",{viewBox:"0 0 24 24",height:"48",width:"48",focusable:"false",role:"img",fill:e.color||"var(--primary-color)",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"}))}function I(e){return l.createElement("svg",{viewBox:"0 0 24 24",height:"48",width:"48",focusable:"false",role:"img",fill:e.color||"var(--primary-color)",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M20.66 6.98a9.932 9.932 0 0 0-3.641-3.64C15.486 2.447 13.813 2 12 2s-3.486.447-5.02 1.34c-1.533.893-2.747 2.107-3.64 3.64S2 10.187 2 12s.446 3.487 1.34 5.02a9.924 9.924 0 0 0 3.641 3.64C8.514 21.553 10.187 22 12 22s3.486-.447 5.02-1.34a9.932 9.932 0 0 0 3.641-3.64C21.554 15.487 22 13.813 22 12s-.446-3.487-1.34-5.02zM12 3.66c2 0 3.772.64 5.32 1.919-.92 1.174-2.286 2.14-4.1 2.9-1.002-1.813-2.088-3.327-3.261-4.54A7.715 7.715 0 0 1 12 3.66zM5.51 6.8a8.116 8.116 0 0 1 2.711-2.22c1.212 1.201 2.325 2.7 3.34 4.5-2 .6-4.114.9-6.341.9-.573 0-1.006-.013-1.3-.04A8.549 8.549 0 0 1 5.51 6.8zM3.66 12c0-.054.003-.12.01-.2.007-.08.01-.146.01-.2.254.014.641.02 1.161.02 2.666 0 5.146-.367 7.439-1.1.187.373.381.793.58 1.26-1.32.293-2.674 1.006-4.061 2.14S6.4 16.247 5.76 17.5c-1.4-1.587-2.1-3.42-2.1-5.5zM12 20.34c-1.894 0-3.594-.587-5.101-1.759.601-1.187 1.524-2.322 2.771-3.401 1.246-1.08 2.483-1.753 3.71-2.02a29.441 29.441 0 0 1 1.56 6.62 8.166 8.166 0 0 1-2.94.56zm7.08-3.96a8.351 8.351 0 0 1-2.58 2.621c-.24-2.08-.7-4.107-1.379-6.081.932-.066 1.765-.1 2.5-.1.799 0 1.686.034 2.659.1a8.098 8.098 0 0 1-1.2 3.46zm-1.24-5c-1.16 0-2.233.047-3.22.14a27.053 27.053 0 0 0-.68-1.62c2.066-.906 3.532-2.006 4.399-3.3 1.2 1.414 1.854 3.027 1.96 4.84-.812-.04-1.632-.06-2.459-.06z"}))}function M(e){return l.createElement("svg",{viewBox:"0 0 24 24",height:"48",width:"48",focusable:"false",role:"img",fill:e.color||"var(--primary-color)",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M20.892 9.889a.664.664 0 0 0-.025-.087l-2.104-6.479a.84.84 0 0 0-.8-.57.822.822 0 0 0-.789.575l-2.006 6.175H8.834L6.826 3.327a.823.823 0 0 0-.786-.575h-.006a.837.837 0 0 0-.795.575L3.133 9.815c0 .005-.005.01-.007.016l-1.067 3.281a1.195 1.195 0 0 0 .435 1.34l9.227 6.706c.167.121.393.12.558-.003l9.229-6.703a1.2 1.2 0 0 0 .435-1.34l-1.051-3.223zM17.97 3.936l1.809 5.566H16.16l1.81-5.566zm-11.94 0 1.812 5.566H4.228L6.03 3.936zm-2.982 9.752a.253.253 0 0 1-.093-.284l.793-2.437 5.817 7.456-6.517-4.735zm1.499-3.239h3.601l2.573 7.916-6.174-7.916zm7.452 8.794-2.856-8.798h5.718l-1.792 5.515-1.07 3.283zm1.282-.877 2.467-7.588.106-.329h3.604l-5.586 7.156-.591.761zm7.671-4.678-6.519 4.733.022-.029 5.794-7.425.792 2.436a.25.25 0 0 1-.089.285z"}))}function k(e){return l.createElement("svg",{viewBox:"0 0 448 512",height:"48",width:"48",focusable:"false",role:"img",fill:e.color||"var(--primary-color)",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M299.9 191.2c5.1 37.3-4.7 79-35.9 100.7-22.3 15.5-52.8 14.1-70.8 5.7-37.1-17.3-49.5-58.6-46.8-97.2 4.3-60.9 40.9-87.9 75.3-87.5 46.9-.2 71.8 31.8 78.2 78.3zM448 88v336c0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56V88c0-30.9 25.1-56 56-56h336c30.9 0 56 25.1 56 56zM330 313.2s-.1-34-.1-217.3h-29v40.3c-.8.3-1.2-.5-1.6-1.2-9.6-20.7-35.9-46.3-76-46-51.9.4-87.2 31.2-100.6 77.8-4.3 14.9-5.8 30.1-5.5 45.6 1.7 77.9 45.1 117.8 112.4 115.2 28.9-1.1 54.5-17 69-45.2.5-1 1.1-1.9 1.7-2.9.2.1.4.1.6.2.3 3.8.2 30.7.1 34.5-.2 14.8-2 29.5-7.2 43.5-7.8 21-22.3 34.7-44.5 39.5-17.8 3.9-35.6 3.8-53.2-1.2-21.5-6.1-36.5-19-41.1-41.8-.3-1.6-1.3-1.3-2.3-1.3h-26.8c.8 10.6 3.2 20.3 8.5 29.2 24.2 40.5 82.7 48.5 128.2 37.4 49.9-12.3 67.3-54.9 67.4-106.3z"}))}function C(e){return l.createElement("svg",{viewBox:"0 0 24 24",height:"48",width:"48",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",fill:e.color||"var(--primary-color)"},l.createElement("path",{d:"M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"}),l.createElement("circle",{cx:"16.806",cy:"7.207",r:"1.078"}),l.createElement("path",{d:"M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"}))}function N(e){return l.createElement("svg",{viewBox:"0 0 24 24",height:"48",width:"48",focusable:"false",role:"img",fill:e.color||"var(--primary-color)",xmlns:"http://www.w3.org/2000/svg"},l.createElement("circle",{cx:"14.508",cy:"9.831",r:"6.496"}),l.createElement("path",{d:"M2.996 3.335H6.17v17.33H2.996z"}))}function H(e){return l.createElement("svg",{viewBox:"0 0 24 24",height:"48",width:"48",focusable:"false",role:"img",fill:e.color||"var(--primary-color)",xmlns:"http://www.w3.org/2000/svg"},l.createElement("circle",{cx:"9.67",cy:"13",r:"1.001"}),l.createElement("path",{d:"M14.09 15.391A3.28 3.28 0 0 1 12 16a3.271 3.271 0 0 1-2.081-.63.27.27 0 0 0-.379.38c.71.535 1.582.809 2.471.77a3.811 3.811 0 0 0 2.469-.77v.04a.284.284 0 0 0 .006-.396.28.28 0 0 0-.396-.003zm.209-3.351a1 1 0 0 0 0 2l-.008.039c.016.002.033 0 .051 0a1 1 0 0 0 .958-1.038 1 1 0 0 0-1.001-1.001z"}),l.createElement("path",{d:"M12 2C6.479 2 2 6.477 2 12c0 5.521 4.479 10 10 10s10-4.479 10-10c0-5.523-4.479-10-10-10zm5.859 11.33c.012.146.012.293 0 .439 0 2.24-2.609 4.062-5.83 4.062s-5.83-1.82-5.83-4.062a2.681 2.681 0 0 1 0-.439 1.46 1.46 0 0 1-.455-2.327 1.458 1.458 0 0 1 2.063-.063 7.145 7.145 0 0 1 3.899-1.23l.743-3.47v-.004A.313.313 0 0 1 12.82 6l2.449.49a1.001 1.001 0 1 1-.131.61L13 6.65l-.649 3.12a7.123 7.123 0 0 1 3.85 1.23 1.46 1.46 0 0 1 2.469 1c.01.563-.307 1.08-.811 1.33z"}))}function B(e){return l.createElement("svg",{viewBox:"0 0 24 24",height:"48",width:"48",focusable:"false",role:"img",fill:e.color||"var(--primary-color)",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M17.24 19.399v-4.804h1.6V21H4.381v-6.405h1.598v4.804H17.24zM7.582 17.8h8.055v-1.604H7.582V17.8zm.195-3.64 7.859 1.641.34-1.552-7.861-1.642-.338 1.553zm1.018-3.794 7.281 3.398.678-1.463-7.281-3.399-.678 1.454v.01zm2.037-3.589 6.166 5.142 1.018-1.216-6.162-5.14-1.016 1.213-.006.001zm3.982-3.778-1.311.969 4.803 6.454 1.313-.971-4.807-6.452h.002z"}))}function L(e){return l.createElement("svg",{viewBox:"0 0 24 24",height:"48",width:"48",focusable:"false",role:"img",fill:e.color||"var(--primary-color)",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M4.265 3 3 6.236v13.223h4.502V21l2.531.85 2.392-2.391h3.658l4.923-4.924V3H4.265zm15.052 10.691-2.813 2.814h-4.502l-2.391 2.391v-2.391H5.813V4.688h13.504v9.003zm-2.812-5.767v4.923h-1.688V7.924h1.688zm-4.502 0v4.923h-1.688V7.924h1.688z"}))}function S(e){return l.createElement("svg",{viewBox:"0 0 24 24",height:"48",width:"48",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",fill:e.color||"var(--primary-color)"},l.createElement("path",{d:"M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"}))}function T(e){switch(e.name.toLowerCase()){case"external":return l.createElement(h,{color:e.color});case"behance":return l.createElement(u,{color:e.color});case"github":return l.createElement(g,{color:e.color});case"linkedin":return l.createElement(v,{color:e.color});case"mail":return l.createElement(p,{color:e.color});case"medium":return l.createElement(E,{color:e.color});case"twitter":return l.createElement(w,{color:e.color});case"mastodon":return l.createElement(y,{color:e.color});case"hashnode":return l.createElement(f,{color:e.color});case"buymeacoffee":return l.createElement(b,{color:e.color});case"devto":return l.createElement(x,{color:e.color});case"discord":return l.createElement(z,{color:e.color});case"dribble":return l.createElement(I,{color:e.color});case"gitlab":return l.createElement(M,{color:e.color});case"goodreads":return l.createElement(k,{color:e.color});case"instagram":return l.createElement(C,{color:e.color});case"patreon":return l.createElement(N,{color:e.color});case"reddit":return l.createElement(H,{color:e.color});case"stackoverflow":return l.createElement(B,{color:e.color});case"twitch":return l.createElement(L,{color:e.color});case"youtube":return l.createElement(S,{color:e.color});default:return null}}var _=a(8768);const D={behance:"Behance",github:"GitHub",medium:"Medium",linkedin:"LinkedIn",mail:"Mail",twitter:"Twitter",mastodon:"Mastodon",hashnode:"Hashnode",devto:"Dev.to",instagram:"Instagram",youtube:"YouTube",twitch:"Twitch",gitlab:"GitLab",stackoverflow:"StackOverflow",buymeacoffee:"BuyMeACoffee",discord:"Discord",dribble:"Dribble",goodreads:"Goodreads",patreon:"Patreon",reddit:"Reddit"};var P="style-module--Profile--c97ff";let V;function A(e){const t=(0,d.$)(),a=e.from.map((e=>{const a=e.toLowerCase();if(Object.values(V).includes(a))return{id:a,label:D[a],url:t.social[a]};throw new Error("Unknown social profile "+e+".")}));return l.createElement(_.i,null,a.map(((t,a)=>t.label&&t.url?l.createElement("a",{key:a,className:P,href:t.url,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":t.label,style:e.showIcon?{padding:"0.5rem 1.25rem"}:void 0},e.showIcon?l.createElement(T,{name:t.id}):void 0," ",t.label):null)))}!function(e){e.Behance="behance",e.GitHub="github",e.Medium="medium",e.Mail="mail",e.LinkedIn="linkedin",e.Twitter="twitter",e.Mastodon="mastodon",e.Hashnode="hashnode",e.DevTo="devto",e.Instagram="instagram",e.YouTube="youtube",e.Twitch="twitch",e.Dribble="dribble",e.GitLab="gitlab",e.StackOverflow="stackoverflow",e.BuyMeACoffee="buymeacoffee",e.Discord="discord",e.Goodreads="goodreads",e.Patreon="patreon",e.Reddit="reddit"}(V||(V={}));const j=()=>(0,i.useStaticQuery)("3525841079");var G="style-module--Hero--12fbf",U="style-module--HeroContainer--061a0",O="style-module--Image--8d569",J="style-module--ImagePrefix--6dc4f",Q="style-module--Intro--6a01f",W="style-module--Subtitle--aa123",$="style-module--Title--4f076",R="style-module--heroImage--9e361",F="style-module--heroImageCont--20e7f";function K(e){var t,a;const r=j().allHeroJson.sections[0],c=s(r.calendly);return l.createElement(o.f,{type:"fadeUp",delay:400},c,l.createElement(m.$,{anchor:e.sectionId,additionalClasses:[U]},(null===(t=r.heroPhoto)||void 0===t?void 0:t.src)&&l.createElement("div",{className:F},l.createElement(n.G,{className:R,image:r.heroPhoto.src.childImageSharp.gatsbyImageData,alt:r.heroPhoto.alt||"Profile Image",loading:"eager"})),l.createElement("div",{className:G},l.createElement("div",{className:Q},r.intro&&l.createElement("span",{className:J},r.intro),(null===(a=r.image)||void 0===a?void 0:a.src)&&l.createElement(o.f,{className:O,type:"waving-hand",duration:2500,iterationCount:3},l.createElement(n.G,{image:r.image.src.childImageSharp.gatsbyImageData,alt:r.image.alt||"Intro Image",loading:"eager"}))),l.createElement("h1",{className:$},r.title),l.createElement("h2",{className:W},r.subtitle.prefix,l.createElement("u",null,r.subtitle.highlight),r.subtitle.suffix),l.createElement("p",null,r.description),l.createElement(o.f,{type:"fadeLeft",delay:600},r.socialProfiles&&l.createElement(A,{from:r.socialProfiles.from,showIcon:r.socialProfiles.showIcons})))))}a(4088);var X;!function(e){e.Medium="medium",e.Blog="blog"}(X||(X={}));const Y=()=>(0,i.useStaticQuery)("1764120992");var q="style-module--About--0f660",Z="style-module--Description--2e019",ee="style-module--Image--57f3b",te="style-module--ImageWrapper--a41ba";function ae(e){const t=Y().allAboutMarkdown.sections[0];return l.createElement(o.f,{type:"fadeUp"},l.createElement(m.$,{anchor:e.sectionId,heading:e.heading},l.createElement("div",{className:q},l.createElement("div",{className:Z,dangerouslySetInnerHTML:{__html:t.html}}),l.createElement(o.f,{type:"fadeLeft",delay:200},l.createElement("div",{className:te},l.createElement(n.G,{image:t.frontmatter.imageSrc.childImageSharp.gatsbyImageData,className:ee,alt:t.frontmatter.imageAlt||"About Image"}))))))}var le=a(2311);const re=()=>(0,i.useStaticQuery)("2442753764");var ce="style-module--Icon--4b6f8",ne="style-module--Interest--4bfd4",oe="style-module--Interests--3d3b3";function ie(e){var t;const a=re().allInterestsJson.sections[0],r=!1!==a.button.visible,c=null!==(t=a.button.initiallyShownInterests)&&void 0!==t?t:5,[i,s]=l.useState(r?c:a.interests.length);return l.createElement(o.f,{type:"fadeUp"},l.createElement(m.$,{anchor:e.sectionId,heading:e.heading},l.createElement("div",{className:oe},a.interests.slice(0,i).map(((e,t)=>l.createElement(o.f,{key:t,className:ne,type:"scaleIn",delay:100*t},e.image.src&&l.createElement(n.G,{image:e.image.src.childImageSharp.gatsbyImageData,className:ce,alt:e.image.alt||"Interest "+e.label})," ",e.label))),r&&i<a.interests.length&&l.createElement(o.f,{type:"scaleIn",delay:100*(i+1)},l.createElement(le.z,{type:le.L.BUTTON,onClickHandler:function(){s(a.interests.length)},label:a.button.label})))))}var se,me=a(8758),de="style-module--Category--f3034",ue="style-module--Details--f22f0",he="style-module--Links--7602a",ge="style-module--Project--6d27a",fe="style-module--ProjectImage--8eee9",ve="style-module--ProjectImageWrapper--668f6",pe="style-module--Tags--d7936",Ee="style-module--Title--8501a";function we(e){const t=(0,me.a)("(min-width: 992px)");return l.createElement(o.f,{type:"fadeUp",className:ge,style:{flexDirection:t&&e.index%2==0?"row-reverse":void 0}},l.createElement("div",{className:ue},l.createElement("span",{className:de},e.data.category),l.createElement("h4",{className:Ee},e.data.title),l.createElement("p",null,e.data.description),l.createElement("div",{className:pe},e.data.tags&&0!==e.data.tags.length&&e.data.tags.map(((e,t)=>l.createElement("span",{key:t},l.createElement("u",null,e))))),l.createElement("div",{className:he},e.data.links&&0!==e.data.links.length&&e.data.links.map(((e,t)=>l.createElement("a",{key:t,href:e.url,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},l.createElement(T,{name:e.type,color:"var(--subtext-color)"})))))),e.data.image.src&&e.data.image.linkTo&&l.createElement("a",{href:e.data.image.linkTo,target:"_blank",rel:"noopener noreferrer","aria-label":"External Link"},l.createElement(n.G,{className:ve,imgClassName:fe,image:e.data.image.src.childImageSharp.gatsbyImageData,alt:e.data.image.alt||"Project "+e.data.title})),e.data.image.src&&!e.data.image.linkTo&&l.createElement(n.G,{className:ve,imgClassName:fe,image:e.data.image.src.childImageSharp.gatsbyImageData,alt:e.data.image.alt||"Project "+e.data.title}))}!function(e){e.External="external",e.Github="github"}(se||(se={}));const ye=()=>(0,i.useStaticQuery)("513457919");var be="style-module--MoreProjects--06375",xe="style-module--Projects--a4194";function ze(e){const t=ye().allProjectsJson.sections[0];return l.createElement(o.f,{type:"fadeIn"},l.createElement(m.$,{anchor:e.sectionId,heading:e.heading},l.createElement(_.i,{additionalClasses:[xe]},t.projects.map(((e,t)=>e.visible?l.createElement(we,{key:t,index:t,data:e}):null))),void 0!==t.button&&!1!==t.button.visible&&l.createElement(o.f,{className:be,type:"fadeIn"},l.createElement(le.z,{type:le.L.LINK,externalLink:!0,url:t.button.url,label:t.button.label}))))}const Ie=()=>(0,i.useStaticQuery)("2572006233");var Me="style-module--Avatar--fda4c",ke="style-module--Contact--1c6f8",Ce="style-module--ContactDetails--70da4",Ne="style-module--Description--87aea",He="style-module--Name--8248f",Be="style-module--Profile--3b0af";function Le(e){const t=Ie().allContactJson.sections[0];return l.createElement(o.f,{type:"fadeUp"},l.createElement(m.$,{anchor:e.sectionId,heading:e.heading,additionalClasses:[ke]},t.description&&l.createElement("p",{className:Ne},t.description),l.createElement("div",{className:Be},t.image.src&&l.createElement(n.G,{className:Me,image:t.image.src.childImageSharp.gatsbyImageData,alt:t.image.alt||"Profile "+t.name}),l.createElement("div",{className:Ce},l.createElement("div",{className:He},t.name),l.createElement("u",null,l.createElement("a",{href:"mailto:"+t.email},t.email)))),t.socialProfiles&&l.createElement(A,{from:t.socialProfiles.from,showIcon:t.socialProfiles.showIcons})))}function Se(){return l.createElement(l.Fragment,null,l.createElement(c.p,{title:"Hyunuk's Portfolio Website"}),l.createElement(r.T,{useSplashScreenAnimation:!0},l.createElement(K,{sectionId:"hero"}),l.createElement(ae,{sectionId:"about",heading:"About Me"}),l.createElement(ie,{sectionId:"details",heading:"Details"}),l.createElement(ze,{sectionId:"features",heading:"Projects"}),l.createElement(Le,{sectionId:"github",heading:"Issues?"})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-ba5d70594ca7004aad15.js.map