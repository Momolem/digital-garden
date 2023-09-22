"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7987],{4137:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(t),p=o,f=c["".concat(l,".").concat(p)]||c[p]||m[p]||i;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2358:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(7462),o=(t(7294),t(4137));const i={title:"Continuous Integration",aliases:["CI"]},a=void 0,s={unversionedId:"main/CleanCode/Continuous Integration",id:"main/CleanCode/Continuous Integration",title:"Continuous Integration",description:"tags: #cleancode",source:"@site/docs/main/CleanCode/Continuous Integration.md",sourceDirName:"main/CleanCode",slug:"/main/CleanCode/Continuous Integration",permalink:"/docs/main/CleanCode/Continuous Integration",draft:!1,tags:[],version:"current",frontMatter:{title:"Continuous Integration",aliases:["CI"]},sidebar:"main",previous:{title:"Continuous Delivery",permalink:"/docs/main/CleanCode/Continuous Delivery"},next:{title:"DRY",permalink:"/docs/main/CleanCode/DRY"}},l={},u=[],d={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"tags: #cleancode "),(0,o.kt)("h1",{id:"continuous-integration"},"Continuous Integration"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Warum?"),"\nAutomatisierung und Zentralisierung der Softwareproduktion machen produktiver und reduzieren das Risiko von Fehlern bei der Auslieferung.")),(0,o.kt)("p",null,"Oft wird die Integration der Softwarekomponenten zeitlich nach hinten geschoben und erfolgt aufwendig und fehleranf\xe4llig \u201eper Hand\u201c. Eigentlich sollte die Software aber zu jedem Zeitpunkt vollst\xe4ndig lauff\xe4hig sein. Mit Continuous Integration bezeichnet man einen Prozess, der daf\xfcr sorgt dass der gesamte Code nach der \xdcbermittlung von \xc4nderungen \xfcbersetzt und getestet wird."),(0,o.kt)("p",null,"Der Continuous Integration Prozess ist vor allem f\xfcr Teams wichtig, denn er sorgt daf\xfcr, dass nach der \xdcbermittlung von \xc4nderungen der gesamte Code \xfcbersetzt und getestet wird, nicht nur der Teil an dem ein Entwickler gerade gearbeitet hat. Die automatisierten Tests sollten von jedem Entwickler ausgef\xfchrt werden bevor er \xc4nderungen in die zentrale ",(0,o.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/Version%20Control%20System"},"Versionskontrolle")," \xfcbermittelt. Daran \xe4ndert sich durch Continuous Integration nichts. Um sicherzustellen, dass die Tests tats\xe4chlich ausgef\xfchrt werden und Fehler fr\xfchzeitig erkannt werden, laufen sie in jedem Fall auf dem Continuous Integration Server. Dies entbindet den Entwickler nicht davon die Tests vor dem Commit auszuf\xfchren, schlie\xdflich behindert fehlerhafter Code der in die ",(0,o.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/Version%20Control%20System"},"Versionskontrolle")," eingecheckt wurde das gesamte Team, m\xf6glicherweise sogar weitere Teams. So sorgt der Continuous Integration Prozess daf\xfcr dass team\xfcbergreifend sichergestellt wird dass Fehler so fr\xfch wie m\xf6glich erkannt werden."),(0,o.kt)("p",null,"F\xfcr den Continuous Integration Prozess stehen zahlreiche\xa0",(0,o.kt)("a",{parentName:"p",href:"https://clean-code-developer.de/weitere-infos/werkzeuge/"},"Softwaretools"),"\xa0zur Verf\xfcgung. Neben dem kontinuierlichen Build und Test, der sofort erfolgt, wenn \xc4nderungen in die ",(0,o.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/Version%20Control%20System"},"Versionskontrolle")," \xfcbertragen werden, k\xf6nnen durch Continuous Integration auch l\xe4nger laufende Prozesse, wie z.B. Datenbanktests, automatisiert werden. Diese werden dann z.B. nur nachts ausgef\xfchrt. Im gr\xfcnen Grad wird lediglich der Build- und Testprozess ber\xfccksichtigt. Das kontinuierliche Setup und Deployment der Software folgt erst sp\xe4ter im\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/Blauer%20Grad"},"blauen Grad"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"Martin%20Fowler"},"Martin Fowler")," hat einen sehr guten Artikel zu diesem Thema verfasst, nachzulesen unter\xa0",(0,o.kt)("a",{parentName:"p",href:"http://www.martinfowler.com/articles/continuousIntegration.html"}),(0,o.kt)("a",{parentName:"p",href:"http://www.martinfowler.com/articles/continuousIntegration.html"},"http://www.martinfowler.com/articles/continuousIntegration.html")),(0,o.kt)("p",null,"Siehe auch unter\xa0",(0,o.kt)("a",{parentName:"p",href:"https://clean-code-developer.de/weitere-infos/werkzeuge/"},"Tools"),"."))}m.isMDXComponent=!0}}]);