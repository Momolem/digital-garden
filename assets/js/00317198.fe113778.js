"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6373],{4137:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=i,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6454:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(7462),i=(t(7294),t(4137));const a={title:"Design before Implementation",aliases:null,tags:["cleancode","cleancode/ccd","cleancode/ccd/practic"]},o="Design before Implementation",l={unversionedId:"main/CleanCode/CleanCodeDeveloper/Praktiken/Design before Implementation",id:"main/CleanCode/CleanCodeDeveloper/Praktiken/Design before Implementation",title:"Design before Implementation",description:"Warum?",source:"@site/docs/main/CleanCode/1. CleanCodeDeveloper/Praktiken/Design before Implementation.md",sourceDirName:"main/CleanCode/1. CleanCodeDeveloper/Praktiken",slug:"/main/CleanCode/CleanCodeDeveloper/Praktiken/Design before Implementation",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Design before Implementation",draft:!1,tags:[{label:"cleancode",permalink:"/docs/tags/cleancode"},{label:"cleancode/ccd",permalink:"/docs/tags/cleancode-ccd"},{label:"cleancode/ccd/practic",permalink:"/docs/tags/cleancode-ccd-practic"}],version:"current",frontMatter:{title:"Design before Implementation",aliases:null,tags:["cleancode","cleancode/ccd","cleancode/ccd/practic"]},sidebar:"main",previous:{title:"Daily Reflection",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Daily Reflection"},next:{title:"Error Measurement",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Error Measurement"}},c={},s=[],d={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"design-before-implementation"},"Design before Implementation"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Warum?"),"\nVor der Umsetzung muss eine L\xf6sung entworfen werden. Andernfalls findet kein konsequentes Nachdenken \xfcber die L\xf6sung statt.")),(0,i.kt)("p",null,"Die Aufgabe eines Entwicklers besteht darin, Anforderungen in Code zu \xfcbersetzen. Dazu ist es erforderlich, eine L\xf6sung f\xfcr die Anforderungen zu entwickeln. Es muss nachgedacht werden. Wie kann das aber auf gute Weise geschehen, wenn Entwickler direkt ins Codieren springen?"),(0,i.kt)("p",null,"In trivialen F\xe4llen mag es m\xf6glich sein, direkt Code zu schreiben. Dennoch wird auch beim unmittelbaren Sprung ins Codieren \xfcber die L\xf6sung nachgedacht. Allerdings geschieht dies eher unbewusst, vor allem aber\xa0",(0,i.kt)("em",{parentName:"p"},"w\xe4hrend"),"\xa0der Umsetzung. Der Entwickler denkt ein wenig nach, codiert, denk nach, codiert, usw. Es fehlt hier ein konsequentes Durchdenken der L\xf6sung, getrennt von der Umsetzung."),(0,i.kt)("p",null,"Sp\xe4testens, wenn eine Gruppe von Entwicklern gemeinsam als Team arbeiten m\xf6chte, muss der Entwurf zeitlich getrennt von der Umsetzung stattfinden. Andernfalls ist keine fl\xfcssige arbeitsteilige Vorgehensweise m\xf6glich."),(0,i.kt)("p",null,"Der Entwurf erm\xf6glicht es dem Team bzw. einem einzelnen Entwickler, bereits vor der Codierung \xfcber wichtige Prinzipien nachzudenken. Es entstehen bspw. erst gar keine Methoden oder Klassen mit mehreren Verantwortlichkeiten, da schon auf der Ebene des Entwurfs \xfcber das\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Single%20Responsibility%20Principle"},"Single Responsibility Principle"),"\xa0nachgedacht werden kann. Damit erspart sich das Team den Refaktorisierungsaufwand der entsteht, wenn \u201edrauf los\u201c codiert wird."),(0,i.kt)("p",null,"Siehe auch\xa0",(0,i.kt)("a",{parentName:"p",href:"https://flow-design.info/"}),(0,i.kt)("a",{parentName:"p",href:"https://flow-design.info"},"https://flow-design.info"),"."))}u.isMDXComponent=!0}}]);