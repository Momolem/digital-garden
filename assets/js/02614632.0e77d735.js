"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6025],{4137:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6200:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),o=(t(7294),t(4137));const i={title:"Favour Composition over Inheritance"},a=void 0,l={unversionedId:"main/CleanCode/Favour Composition over Inheritance",id:"main/CleanCode/Favour Composition over Inheritance",title:"Favour Composition over Inheritance",description:"Warum?",source:"@site/docs/main/CleanCode/Favour Composition over Inheritance.md",sourceDirName:"main/CleanCode",slug:"/main/CleanCode/Favour Composition over Inheritance",permalink:"/docs/main/CleanCode/Favour Composition over Inheritance",draft:!1,tags:[],version:"current",frontMatter:{title:"Favour Composition over Inheritance"},sidebar:"main",previous:{title:"Factory",permalink:"/docs/main/CleanCode/Factory"},next:{title:"Flyweight",permalink:"/docs/main/CleanCode/Flyweight"}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"#cleancode "),(0,o.kt)("h1",{id:"favour-composition-over-inheritance-fcoi"},"Favour Composition over Inheritance (FCoI)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Warum?"),"\nKomposition f\xf6rdert die lose Kopplung und die Testbarkeit eines Systems und ist oft flexibler.")),(0,o.kt)("p",null,"F\xfcr die Wiederverwendung von Funktionalit\xe4t kennt die Objektorientierte Programmierung (",(0,o.kt)("a",{parentName:"p",href:"OOP"},"OOP"),") zwei sehr bekannte Kandidaten: Die Vererbung (whitebox \u2013 reuse) und die Komposition (blackbox \u2013 reuse). Verwendet man Funktionalit\xe4t wieder durch das Ableiten von einer Klasse, so ist die Subklasse abh\xe4ngig von der Elternklasse. Dies macht ein System in vielen F\xe4llen unn\xf6tig komplex, schlechter testbar und erschwert das Austauschen von Funktionalit\xe4t zur Laufzeit. ",(0,o.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/Clean%20Code%20Developer"},"Clean Code Developer")," hat f\xfcr das korrekte Ableiten das ",(0,o.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/Liskov%20Substitution%20Principle"},"Liskov Substitution Principle")," bereit, das es dabei zu befolgen gilt."),(0,o.kt)("p",null,"Bei der Komposition verwendet eine Klasse eine andere. Verwendet man dazu eine klar definierte Schnittstelle, f\xf6rdert das die Entkopplung. Auch k\xf6nnen verschiedene Implementationen einfach ausgetauscht werden. Bevor man sich also der  stellt, fordert Favour Composition over Inheritance, sich die Frage zu stellen, ob man der Komposition nicht Vorrang geben kann."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u201e",(0,o.kt)("em",{parentName:"p"},"Because inheritance exposes a subclass to details of its parent\u2019s implementation, it\u2019s often said that \u201ainheritance breaks encapsulation"),"\u201e. (Gang of Four 1995:19)")))}d.isMDXComponent=!0}}]);