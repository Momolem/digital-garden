"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6973],{4137:(e,n,i)=>{i.d(n,{Zo:()=>p,kt:()=>g});var r=i(7294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function a(e,n){if(null==e)return{};var i,r,t=function(e,n){if(null==e)return{};var i,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)i=l[r],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)i=l[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var c=r.createContext({}),s=function(e){var n=r.useContext(c),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var i=e.components,t=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(i),m=t,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return i?r.createElement(g,o(o({ref:n},p),{},{components:i})):r.createElement(g,o({ref:n},p))}));function g(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=i.length,o=new Array(l);o[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[d]="string"==typeof e?e:t,o[1]=a;for(var s=2;s<l;s++)o[s]=i[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},4784:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=i(7462),t=(i(7294),i(4137));const l={title:"Single Responsibility Principle",aliases:["SRP"],tags:["cleancode","cleancode/ccd","cleancode/ccd/principle"]},o="Single Responsibility Principle (SRP)",a={unversionedId:"main/CleanCode/CleanCodeDeveloper/Prinzipien/Single Responsibility Principle",id:"main/CleanCode/CleanCodeDeveloper/Prinzipien/Single Responsibility Principle",title:"Single Responsibility Principle",description:"Fokus erleichtert das Verst\xe4ndnis. Eine Klasse mit genau einer Aufgabe ist verst\xe4ndlicher als ein Gemischtwarenladen.",source:"@site/docs/main/CleanCode/1. CleanCodeDeveloper/Prinzipien/Single Responsibility Principle.md",sourceDirName:"main/CleanCode/1. CleanCodeDeveloper/Prinzipien",slug:"/main/CleanCode/CleanCodeDeveloper/Prinzipien/Single Responsibility Principle",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Single Responsibility Principle",draft:!1,tags:[{label:"cleancode",permalink:"/docs/tags/cleancode"},{label:"cleancode/ccd",permalink:"/docs/tags/cleancode-ccd"},{label:"cleancode/ccd/principle",permalink:"/docs/tags/cleancode-ccd-principle"}],version:"current",frontMatter:{title:"Single Responsibility Principle",aliases:["SRP"],tags:["cleancode","cleancode/ccd","cleancode/ccd/principle"]},sidebar:"main",previous:{title:"Single Level of Abstraction",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Single Level of Abstraction"},next:{title:"Source Code Conventions",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Source Code Conventions"}},c={},s=[],p={toc:s},d="wrapper";function u(e){let{components:n,...i}=e;return(0,t.kt)(d,(0,r.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"single-responsibility-principle-srp"},"Single Responsibility Principle (SRP)"),(0,t.kt)("p",null,":::question ",(0,t.kt)("strong",{parentName:"p"},"Warum?")),(0,t.kt)("p",null,"Fokus erleichtert das Verst\xe4ndnis. Eine Klasse mit genau einer Aufgabe ist verst\xe4ndlicher als ein Gemischtwarenladen.\n:::"),(0,t.kt)("p",null,"Das Single Responsibility Principle (",(0,t.kt)("a",{parentName:"p",href:"http://web.archive.org/web/20160716150726/http://objectmentor.com/resources/articles/srp.pdf"},"SRP"),") ist eines der\xa0",(0,t.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/SOLID"},"SOLID"),"\xa0Prinzipien. Es lautet: Eine Klasse sollte nur\xa0",(0,t.kt)("strong",{parentName:"p"},"eine"),"\xa0Verantwortlichkeit haben."),(0,t.kt)("p",null,"Hintergrund des Single Responsibility Principle ist die \xdcberlegung, dass \xc4nderungen oder Erweiterungen der Funktionalit\xe4t einer Anwendung sich auf wenige Klassen beschr\xe4nken sollen. Je mehr Klassen angepasst werden m\xfcssen, desto gr\xf6\xdfer ist das Risiko, dass sich durch die erforderlichen \xc4nderungen Probleme an Stellen ergeben, die im Kern nichts mit der Erweiterung zu tun haben. Eine Verletzung des Single Responsibility Principle f\xfchrt zu Kopplung und damit zu erh\xf6hter Komplexit\xe4t, es wird schwieriger den Code zu verstehen."),(0,t.kt)("hr",null),(0,t.kt)("p",null,"Sources:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://clean-code-developer.de/die-grade/orangener-grad/#Single_Responsibility_Principle_SRP"},"https://clean-code-developer.de/die-grade/orangener-grad/#Single_Responsibility_Principle_SRP")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html"},"https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html"))))}u.isMDXComponent=!0}}]);