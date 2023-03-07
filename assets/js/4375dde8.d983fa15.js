"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[3489],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var l=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,l,i=function(t,e){if(null==t)return{};var n,l,i={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var o=l.createContext({}),p=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=p(t.components);return l.createElement(o.Provider,{value:e},t.children)},y="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,o=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),y=p(n),c=i,k=y["".concat(o,".").concat(c)]||y[c]||u[c]||r;return n?l.createElement(k,a(a({ref:e},d),{},{components:n})):l.createElement(k,a({ref:e},d))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,a=new Array(r);a[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[y]="string"==typeof t?t:i,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},14955:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>a,default:()=>y,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var l=n(87462),i=(n(67294),n(3905));const r={},a="Get Tree By Frontend Id",s={type:"api",id:"get-tree-by-frontend-id",unversionedId:"get-tree-by-frontend-id",title:"Get Tree By Frontend Id",description:"",slug:"/get-tree-by-frontend-id",frontMatter:{},api:{tags:["frontend_messages"],description:"Get all messages belonging to the same message tree.\nMessage is identified by its frontend ID.",operationId:"get_tree_by_frontend_id_api_v1_frontend_messages__message_id__tree_get",parameters:[{required:!0,schema:{title:"Message Id",type:"string"},name:"message_id",in:"path"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"MessageTree",required:["id"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},messages:{title:"Messages",type:"array",items:{title:"Message",required:["text","is_assistant"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},user_id:{title:"User Id",type:"string",format:"uuid"},frontend_message_id:{title:"Frontend Message Id",type:"string"},text:{title:"Text",type:"string"},lang:{title:"Lang",type:"string"},is_assistant:{title:"Is Assistant",type:"boolean"},emojis:{title:"Emojis",type:"object",additionalProperties:{type:"integer"}},user_emojis:{title:"User Emojis",type:"array",items:{type:"string"}},parent_id:{title:"Parent Id",type:"string",format:"uuid"},created_date:{title:"Created Date",type:"string",format:"date-time"},review_result:{title:"Review Result",type:"boolean"},review_count:{title:"Review Count",type:"integer"}},description:"Represents a message in a conversation between the user and the assistant."},default:[]}},description:"All messages belonging to the same message tree."}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{"api-key":[]},{"api-key":[]}],method:"get",path:"/api/v1/frontend_messages/{message_id}/tree",securitySchemes:{"api-key":{type:"apiKey",in:"header",name:"X-API-Key"},"oasst-user":{type:"apiKey",in:"header",name:"x-oasst-user"},HTTPBearer:{type:"http",scheme:"bearer"},APIKeyCookie:{type:"apiKey",in:"cookie",name:"next-auth.session-token"}},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Get Tree By Frontend Id",description:{content:"Get all messages belonging to the same message tree.\nMessage is identified by its frontend ID.",type:"text/plain"},url:{path:["api","v1","frontend_messages",":message_id","tree"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"message_id"}]},method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/get-tree-by-frontend-id",previous:{title:"Get Conv By Frontend Id",permalink:"/Open-Assistant/api/get-conv-by-frontend-id"},next:{title:"Get Children By Frontend Id",permalink:"/Open-Assistant/api/get-children-by-frontend-id"}},o=[],p={toc:o},d="wrapper";function y(t){let{components:e,...n}=t;return(0,i.kt)(d,(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"get-tree-by-frontend-id"},"Get Tree By Frontend Id"),(0,i.kt)("p",null,"Get all messages belonging to the same message tree.\nMessage is identified by its frontend ID."),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"message_id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Message Id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"200")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Successful Response"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"messages"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"user_id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"frontend_message_id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Frontend Message Id"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"text"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Text"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"lang"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Lang"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"is_assistant"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Is Assistant"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"emojis"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"user_emojis"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string[]"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"parent_id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"created_date"),(0,i.kt)("span",{style:{opacity:"0.6"}}," date-time"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"review_result"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Review Result"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"review_count"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Review Count")))))))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"422")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Validation Error"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"detail"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"loc"),(0,i.kt)("span",{style:{opacity:"0.6"}}," undefined[]"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"msg"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Message"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," Error Type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED")))))))))))))))}y.isMDXComponent=!0}}]);