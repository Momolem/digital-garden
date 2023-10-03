"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[167],{4137:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),p=a,g=u["".concat(d,".").concat(p)]||u[p]||m[p]||i;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3097:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(7462),a=(t(7294),t(4137));const i={title:"Automated Integrationtests",aliases:null,tags:["cleancode","cleancode/ccd","cleancode/ccd/practic"]},o="Automated Integrationtests",s={unversionedId:"main/CleanCode/CleanCodeDeveloper/Praktiken/Automated Integrationtests",id:"main/CleanCode/CleanCodeDeveloper/Praktiken/Automated Integrationtests",title:"Automated Integrationtests",description:"Warum?",source:"@site/docs/main/CleanCode/1. CleanCodeDeveloper/Praktiken/Automated Integrationtests.md",sourceDirName:"main/CleanCode/1. CleanCodeDeveloper/Praktiken",slug:"/main/CleanCode/CleanCodeDeveloper/Praktiken/Automated Integrationtests",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Automated Integrationtests",draft:!1,tags:[{label:"cleancode",permalink:"/docs/tags/cleancode"},{label:"cleancode/ccd",permalink:"/docs/tags/cleancode-ccd"},{label:"cleancode/ccd/practic",permalink:"/docs/tags/cleancode-ccd-practic"}],version:"current",frontMatter:{title:"Automated Integrationtests",aliases:null,tags:["cleancode","cleancode/ccd","cleancode/ccd/practic"]},sidebar:"main",previous:{title:"Legacy Code",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Legacy Code"},next:{title:"Automated Unit Tests",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Automated Unit Tests"}},d={},l=[],c={toc:l},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"automated-integrationtests"},"Automated Integrationtests"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Warum?"),"\nIntegrationstests stellen sicher dass der Code tut was er soll. Diese wiederkehrende T\xe4tigkeit nicht zu automatisieren w\xe4re Zeitverschwendung.")),(0,a.kt)("p",null,"Die fundamentale Voraussetzung f\xfcr jegliche \xc4nderungen am Code haben wir bereits im\xa0",(0,a.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/CleanCodeDeveloper/Grade/Roter%20Grad"},"Roten Grad"),"\xa0durch den Einsatz eines Versionskontrollsystems gelegt. Wir k\xf6nnen ohne Sorge \xc4nderungen am Code vornehmen, ganze Dateien und Verzeichnisse l\xf6schen, durch das Versionskontrollsystem ist alles wieder abrufbar."),(0,a.kt)("p",null,"Wenn wir nun \xc4nderungen am Code vornehmen, sollten wir uns sicher sein, dass wir dabei nichts kaputt machen. Und diese Sicherheit k\xf6nnen wir nur erlangen, wenn wir nach der \xc4nderung testen, ob die Anwendung sich noch so verh\xe4lt wie zuvor. Diese Tests nach jeder \xc4nderung per Hand durchzuf\xfchren w\xe4re nicht praktikabel, wir m\xfcssen sie automatisieren. Ein gro\xdfes \xdcbel der Softwareentwicklung ist die Angst, bei \xc4nderungen am Code etwas zu \xfcbersehen, ein Detail nicht zu ber\xfccksichtigen, und dadurch einen Fehler zu verursachen in Code der vorher funktionierte. Dabei spielt es in der Regel sogar nicht mal eine Rolle, ob die \xc4nderungen dazu f\xfchren sollen, dass der Code verbessert wird (",(0,a.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/CleanCodeDeveloper/Refaktorisieren"},"Refaktorisieren"),") oder zus\xe4tzliche Anforderungen umgesetzt werden sollen. Solange wir nach Durchf\xfchren einer \xc4nderung nicht sicher sind, dass alles noch so funktioniert wie zuvor, bleibt die Angst. Diese f\xfchrt dazu, dass wir Code im Zweifelsfall so belassen, wie er ist, denn er funktioniert ja. Notwendige Refaktorisierungen werden unterlassen, aus Angst Fehler zu machen."),(0,a.kt)("p",null,"Damit wir uns auch in schon laufenden Projekten (sogenannte\xa0",(0,a.kt)("em",{parentName:"p"},"Brownfield"),"\xa0Projekte, im Gegensatz zu\xa0",(0,a.kt)("em",{parentName:"p"},"Greenfield"),"\xa0\u201eauf der gr\xfcnen Wiese\u201c) dieses Sicherheitsnetz schaffen k\xf6nnen, ben\xf6tigen wir Verfahren, die auf vorhandenen Code angewendet werden k\xf6nnen. Dazu eignen sich automatisierte Integrationstests. Sie setzen entweder ganz oben auf der Benutzerschnittstelle auf und testen die Anwendung durch alle Layer oder setzen weiter unten auf. In jedem Fall werden mehrere Funktionseinheiten im Zusammenspiel getestet."),(0,a.kt)("p",null,"Bevor wir also \xc4nderungen oder Erweiterungen am Code vornehmen, erstellen wir f\xfcr die betroffenen Codebereiche Integrationstests. Dabei k\xf6nnen Tools und Techniken wie WatiN, UI Automation, etc. verwendet werden. W\xfcnschenswert sind nat\xfcrlich auch ",(0,a.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/CleanCodeDeveloper/Unit%20Test"},"Unit Tests"),", welche einzelne Funktionseinheiten isoliert testen. Dazu muss der Code allerdings Voraussetzungen erf\xfcllen, die vermutlich nicht immer gegeben sind: der Code muss bereits das\xa0",(0,a.kt)("em",{parentName:"p"}," ",(0,a.kt)("a",{parentName:"em",href:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Single%20Responsibility%20Principle"},"Single Responsibility Principle")),"\xa0ber\xfccksichtigen. Andernfalls sind die Abh\xe4ngigkeiten zwischen den Funktionseinheiten (Komponenten, Klassen oder Methoden) so gro\xdf, dass sie nicht isoliert getestet werden k\xf6nnen. Das Fernziel ist nat\xfcrlich eine Codebasis, bei der ",(0,a.kt)("a",{parentName:"p",href:"docs/main/CleanCode/1.%20CleanCodeDeveloper/Unit%20Test.md"},"Unit Tests")," m\xf6glich sind. Mehr noch: wir werden in Zukunft die Tests vor der Implementierung erstellen (",(0,a.kt)("em",{parentName:"p"},"Test first"),"). Aber um durch Refaktorisierungen dorthin zu gelangen, bedarf es erst der Integrationstests, um sicherzustellen, dass die Anwendung sich noch so verh\xe4lt wie vor der ",(0,a.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/CleanCodeDeveloper/Refaktorisieren"},"Refaktorisierung"),"."))}m.isMDXComponent=!0}}]);