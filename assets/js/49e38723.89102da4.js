"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8716],{4137:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>f});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return r?t.createElement(f,o(o({ref:n},d),{},{components:r})):t.createElement(f,o({ref:n},d))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7982:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var t=r(7462),a=(r(7294),r(4137));const i={title:"Simple Refactorings",tags:["cleancode","cleancode/ccd","cleancode/ccd/practic"]},o="Simple Refactorings",l={unversionedId:"main/CleanCode/CleanCodeDeveloper/Praktiken/Simple Refactorings",id:"main/CleanCode/CleanCodeDeveloper/Praktiken/Simple Refactorings",title:"Simple Refactorings",description:"Warum?",source:"@site/docs/main/CleanCode/1. CleanCodeDeveloper/Praktiken/Simple Refactorings.md",sourceDirName:"main/CleanCode/1. CleanCodeDeveloper/Praktiken",slug:"/main/CleanCode/CleanCodeDeveloper/Praktiken/Simple Refactorings",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Simple Refactorings",draft:!1,tags:[{label:"cleancode",permalink:"/docs/tags/cleancode"},{label:"cleancode/ccd",permalink:"/docs/tags/cleancode-ccd"},{label:"cleancode/ccd/practic",permalink:"/docs/tags/cleancode-ccd-practic"}],version:"current",frontMatter:{title:"Simple Refactorings",tags:["cleancode","cleancode/ccd","cleancode/ccd/practic"]},sidebar:"main",previous:{title:"Share Experience",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Share Experience"},next:{title:"Statical Code Analysis",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Statical Code Analysis"}},c={},s=[],d={toc:s},p="wrapper";function u(e){let{components:n,...r}=e;return(0,a.kt)(p,(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"simple-refactorings"},"Simple Refactorings"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Warum?"),"\nCode verbessern ist leichter, wenn man typische Verbesserungshandgriffe kennt. Ihre Anwendungsszenarien machen sensibel f\xfcr Schwachpunkte im eigenen Code. Als anerkannte Muster st\xe4rken sie den Mut, sie anzuwenden.")),(0,a.kt)("p",null,"Um Code immer ein wenig besser zu hinterlassen, als man ihn vorgefunden hat, sind mehr oder weniger gro\xdfe Eingriffe n\xf6tig. Die kann ein Clean Code Developer dank des Versionskontrollsystems angstfrei vornehmen. Doch wie macht er sich die Arbeit m\xf6glichst einfach?"),(0,a.kt)("p",null,"Das Schl\xfcsselwort lautet \u201eRefaktorisierung\u201c.\xa0",(0,a.kt)("a",{parentName:"p",href:"Martin%20Fowler"},"Martin Fowler"),"\xa0hat das\xa0",(0,a.kt)("a",{parentName:"p",href:"http://www.amazon.de/Refactoring-Studentenausgabe-vorhandener-verbessern-Programmers/dp/3827322782"},"Refaktorisieren/Refactoring"),"\xa0in seinem gleichnamigen Buch als grundlegende Technik zur Erh\xf6hung der Codequalit\xe4t beschrieben. Er definiert darin eine Anzahl von Codever\xe4nderungsmustern, um \u201ecode smells\u201c, d.h. suboptimale Strukturen oder allgemeiner Missachtungen von Prinzipien, zu bereinigen."),(0,a.kt)("p",null,"F\xfcr den roten Grad ist darin vor allem die Refaktorisierung\xa0",(0,a.kt)("a",{parentName:"p",href:"http://martinfowler.com/refactoring/catalog/extractMethod.html"},"Methode extrahieren"),"\xa0relevant, um dem DRY-Prinzip zu gen\xfcgen. Die wenden Clean Code Developer an, um mehrfach vorkommenden Code in eine Methode zu extrahieren, die statt seiner an den Wiederholungsorten aufgerufen wird."),(0,a.kt)("p",null,"Als zweite Refaktorisierung sollte bei der Arbeit am roten Grad das\xa0",(0,a.kt)("a",{parentName:"p",href:"http://martinfowler.com/refactoring/catalog/renameMethod.html"},"Umbenennen"),"\xa0wo n\xf6tig eingesetzt werden. Sie passt zur Pfadfinderregel, denn eine oft anzutreffende \u201eUnsauberkeit\u201c im Quellcode sind kryptische Namen."),(0,a.kt)("p",null,"Refaktorisierungen k\xf6nnen von Hand angewandt werden, doch es gibt auch Werkzeugunterst\xfctzung. Moderne IDEs wie Visual Studio bieten einige Refactoringmuster, weitere Tools listet unsere\xa0",(0,a.kt)("a",{parentName:"p",href:"https://clean-code-developer.de/weitere-infos/werkzeuge/"},"Werkzeugliste"),"."),(0,a.kt)("p",null,"\u201eRefactoring\u201c wie \u201eClean Code\u201c geh\xf6ren zur\xa0",(0,a.kt)("a",{parentName:"p",href:"https://clean-code-developer.de/weitere-infos/literatur/"},"Pflichtlekt\xfcre"),"\xa0jedes Clean Code Developers ab dem roten Grad."),(0,a.kt)("p",null,"F\xfcr weitere Informationen siehe auch unter\xa0",(0,a.kt)("a",{parentName:"p",href:"http://refactoring-legacy-code.net/category/einfache-refactorings/"},"refactoring-legacy-code.net"),"."))}u.isMDXComponent=!0}}]);