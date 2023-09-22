"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4295],{4137:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7476:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),o=(t(7294),t(4137));const a={title:"DRY"},i=void 0,l={unversionedId:"main/CleanCode/DRY",id:"main/CleanCode/DRY",title:"DRY",description:"Warum?",source:"@site/docs/main/CleanCode/DRY.md",sourceDirName:"main/CleanCode",slug:"/main/CleanCode/DRY",permalink:"/docs/main/CleanCode/DRY",draft:!1,tags:[],version:"current",frontMatter:{title:"DRY"},sidebar:"main",previous:{title:"Continuous Integration",permalink:"/docs/main/CleanCode/Continuous Integration"},next:{title:"Daily Reflection",permalink:"/docs/main/CleanCode/Daily Reflection"}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"#cleancode "),(0,o.kt)("h1",{id:"dont-repeat-yourself-dry"},"Don\u2019t Repeat Yourself (DRY)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Warum?"),"\nJede Doppelung von Code oder Handgriffen leistet Inkonsistenzen und Fehlern Vorschub.")),(0,o.kt)("p",null,"Das DRY-Prinzip lautet:\xa0",(0,o.kt)("em",{parentName:"p"},"Don\u2019t Repeat Yourself"),"\xa0\u2013 Wiederhole dich nicht. Es gilt seit den Anf\xe4ngen der Softwareentwicklung \u2013 sonst g\xe4be es keine Unterprogramme und keine Datennormalisierung. Dennoch ist es wahrscheinlich das am meisten missachtete Prinzip. Denn nichts ist einfacher, als Code durch Copy&Paste zu wiederholen. Gerade dann, wenn es mal schnell gehen soll, passiert das allzuoft."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/Clean%20Code%20Developer"},"Clean Code Developer")," \xfcben sich im roten Grad daher darin, dieses Prinzip stets zu beachten. Sie sind sich bewusst, wann sie Code oder andere Artefakte wiederholen. Sie erkennen solche Wiederholungen, die sie selbst oder andere erzeugt haben. Sie bereinigen Wiederholungen durch Refaktorisierungen \u2013 wenn keine anderen Prinzipien oder Beschr\xe4nkungen dagegen sprechen."))}d.isMDXComponent=!0}}]);