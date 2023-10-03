"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6631],{4137:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>f});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=i,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return r?t.createElement(f,a(a({ref:n},d),{},{components:r})):t.createElement(f,a({ref:n},d))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7576:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=r(7462),i=(r(7294),r(4137));const o={title:"DRY",tags:["cleancode/ccd/principle","cleancode/ccd","cleancode"]},a="Don\u2019t Repeat Yourself (DRY)",l={unversionedId:"main/CleanCode/CleanCodeDeveloper/Prinzipien/DRY",id:"main/CleanCode/CleanCodeDeveloper/Prinzipien/DRY",title:"DRY",description:"Warum?",source:"@site/docs/main/CleanCode/1. CleanCodeDeveloper/Prinzipien/DRY.md",sourceDirName:"main/CleanCode/1. CleanCodeDeveloper/Prinzipien",slug:"/main/CleanCode/CleanCodeDeveloper/Prinzipien/DRY",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/DRY",draft:!1,tags:[{label:"cleancode/ccd/principle",permalink:"/docs/tags/cleancode-ccd-principle"},{label:"cleancode/ccd",permalink:"/docs/tags/cleancode-ccd"},{label:"cleancode",permalink:"/docs/tags/cleancode"}],version:"current",frontMatter:{title:"DRY",tags:["cleancode/ccd/principle","cleancode/ccd","cleancode"]},sidebar:"main",previous:{title:"Beware of Premature Optimization",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Beware of Premature Optimization"},next:{title:"Dependency Inversion Principle",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Dependency Inversion Principle"}},c={},p=[],d={toc:p},s="wrapper";function u(e){let{components:n,...r}=e;return(0,i.kt)(s,(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dont-repeat-yourself-dry"},"Don\u2019t Repeat Yourself (DRY)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Warum?"),"\nJede Doppelung von Code oder Handgriffen leistet Inkonsistenzen und Fehlern Vorschub.")),(0,i.kt)("p",null,"Das DRY-Prinzip lautet:\xa0",(0,i.kt)("em",{parentName:"p"},"Don\u2019t Repeat Yourself"),"\xa0\u2013 Wiederhole dich nicht. Es gilt seit den Anf\xe4ngen der Softwareentwicklung \u2013 sonst g\xe4be es keine Unterprogramme und keine Datennormalisierung. Dennoch ist es wahrscheinlich das am meisten missachtete Prinzip. Denn nichts ist einfacher, als Code durch Copy&Paste zu wiederholen. Gerade dann, wenn es mal schnell gehen soll, passiert das allzuoft."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/CleanCodeDeveloper/index"},"index")," \xfcben sich im roten Grad daher darin, dieses Prinzip stets zu beachten. Sie sind sich bewusst, wann sie Code oder andere Artefakte wiederholen. Sie erkennen solche Wiederholungen, die sie selbst oder andere erzeugt haben. Sie bereinigen Wiederholungen durch Refaktorisierungen \u2013 wenn keine anderen Prinzipien oder Beschr\xe4nkungen dagegen sprechen."))}u.isMDXComponent=!0}}]);