"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[3581],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},l=Object.keys(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=i.createContext({}),s=function(t){var e=i.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=s(t.components);return i.createElement(p.Provider,{value:e},t.children)},d="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=s(n),u=r,k=d["".concat(p,".").concat(u)]||d[u]||y[u]||l;return n?i.createElement(k,a(a({ref:e},c),{},{components:n})):i.createElement(k,a({ref:e},c))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,a=new Array(l);a[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,a[1]=o;for(var s=2;s<l;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32544:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const l={},a="Create Api Client",o={type:"api",id:"create-api-client",unversionedId:"create-api-client",title:"Create Api Client",description:"",slug:"/create-api-client",frontMatter:{},api:{tags:["admin"],operationId:"create_api_client_api_v1_admin_api_client_post",requestBody:{content:{"application/json":{schema:{title:"CreateApiClientRequest",required:["description","frontend_type"],type:"object",properties:{description:{title:"Description",type:"string"},frontend_type:{title:"Frontend Type",type:"string"},trusted:{title:"Trusted",type:"boolean",default:!1},admin_email:{title:"Admin Email",type:"string"}}}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Response Create Api Client Api V1 Admin Api Client Post",type:"string"}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{HTTPBearer:[]}],description:"Create Api Client",method:"post",path:"/api/v1/admin/api_client",securitySchemes:{"api-key":{type:"apiKey",in:"header",name:"X-API-Key"},"oasst-user":{type:"apiKey",in:"header",name:"x-oasst-user"},HTTPBearer:{type:"http",scheme:"bearer"},APIKeyCookie:{type:"apiKey",in:"cookie",name:"next-auth.session-token"}},jsonRequestBodyExample:{description:"string",frontend_type:"string",trusted:!1,admin_email:"string"},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Create Api Client",description:{type:"text/plain"},url:{path:["api","v1","admin","api_client"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "description": "<string>",\n    "frontend_type": "<string>",\n    "trusted": false,\n    "admin_email": "<string>"\n}'},auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},source:"@site/docs/api/openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/create-api-client",previous:{title:"Get Text Toxicity",permalink:"/Open-Assistant/api/get-text-toxicity"},next:{title:"Get Backend Settings Full",permalink:"/Open-Assistant/api/get-backend-settings-full"}},p=[],s={toc:p},c="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,i.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-api-client"},"Create Api Client"),(0,r.kt)("p",null,"Create Api Client"),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"description"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Description"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"frontend_type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Frontend Type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"trusted"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Trusted"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"admin_email"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Admin Email"))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"200")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Successful Response"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{style:{opacity:"0.6"}}," string")))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"422")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Validation Error"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"detail"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"loc"),(0,r.kt)("span",{style:{opacity:"0.6"}}," undefined[]"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"msg"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Message"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," Error Type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED")))))))))))))))}d.isMDXComponent=!0}}]);