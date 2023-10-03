"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1449],{4137:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),p=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return i.createElement(c.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return t?i.createElement(f,o(o({ref:n},s),{},{components:t})):i.createElement(f,o({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6248:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=t(7462),r=(t(7294),t(4137));const a={title:"Information Hiding Principle",tags:["cleancode","cleancode/ccd","cleancode/ccd/principle"]},o="Information Hiding Principle",l={unversionedId:"main/CleanCode/CleanCodeDeveloper/Prinzipien/Information Hiding Principle",id:"main/CleanCode/CleanCodeDeveloper/Prinzipien/Information Hiding Principle",title:"Information Hiding Principle",description:"Warum?",source:"@site/docs/main/CleanCode/1. CleanCodeDeveloper/Prinzipien/Information Hiding Principle.md",sourceDirName:"main/CleanCode/1. CleanCodeDeveloper/Prinzipien",slug:"/main/CleanCode/CleanCodeDeveloper/Prinzipien/Information Hiding Principle",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Information Hiding Principle",draft:!1,tags:[{label:"cleancode",permalink:"/docs/tags/cleancode"},{label:"cleancode/ccd",permalink:"/docs/tags/cleancode-ccd"},{label:"cleancode/ccd/principle",permalink:"/docs/tags/cleancode-ccd-principle"}],version:"current",frontMatter:{title:"Information Hiding Principle",tags:["cleancode","cleancode/ccd","cleancode/ccd/principle"]},sidebar:"main",previous:{title:"Implementation Reflects Design",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Implementation Reflects Design"},next:{title:"Integration Operation Segregation Principle (IOSP)",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Integration Operation Segregation Principle (IOSP)"}},c={},p=[],s={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"information-hiding-principle"},"Information Hiding Principle"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Warum?"),"\nDurch das Verbergen von Details in einer Schnittstelle werden die Abh\xe4ngigkeiten reduziert.")),(0,r.kt)("p",null,"Beim Design einer Schnittstelle sollte man sich fragen, welche Details au\xdfen unbedingt sichtbar sein m\xfcssen. Mit Schnittstelle sind hier nicht nur Interfaces im objektorientierten Sinne gemeint, sondern auch implizite Schnittstellen. Jede Klasse hat zwangsl\xe4ufig eine implizite Schnittstelle \u2013 sie enth\xe4lt alle nach au\xdfen sichtbaren Details. Je mehr Details von au\xdfen sichtbar sind, desto h\xf6her ist die Kopplung zwischen der Klasse und ihren Verwendern. Benutzen die Verwender einer Klasse erstmal ein Detail, wird es schwerer, dieses Detail zu ver\xe4ndern. Dies steht der Wandelbarkeit der Software entgegen."))}m.isMDXComponent=!0}}]);