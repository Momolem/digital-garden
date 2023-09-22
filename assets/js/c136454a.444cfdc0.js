"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1454],{4137:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(t),f=i,h=c["".concat(l,".").concat(f)]||c[f]||m[f]||a;return t?r.createElement(h,s(s({ref:n},u),{},{components:t})):r.createElement(h,s({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=f;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var d=2;d<a;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4936:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=t(7462),i=(t(7294),t(4137));const a={title:"Statical Code Analysis",aliases:[]},s=void 0,o={unversionedId:"main/CleanCode/Statical Code Analysis",id:"main/CleanCode/Statical Code Analysis",title:"Statical Code Analysis",description:"tags:  #cleancode",source:"@site/docs/main/CleanCode/Statical Code Analysis.md",sourceDirName:"main/CleanCode",slug:"/main/CleanCode/Statical Code Analysis",permalink:"/docs/main/CleanCode/Statical Code Analysis",draft:!1,tags:[],version:"current",frontMatter:{title:"Statical Code Analysis",aliases:[]},sidebar:"main",previous:{title:"State",permalink:"/docs/main/CleanCode/State"},next:{title:"Strategy",permalink:"/docs/main/CleanCode/Strategy"}},l={},d=[],u={toc:d},c="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"tags:  #cleancode "),(0,i.kt)("h1",{id:"statical-code-analysis"},"Statical Code Analysis"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Warum?"),"\nVertrauen ist gut, Kontrolle ist besser \u2013 und je automatischer, desto leichter ist sie.")),(0,i.kt)("p",null,"Wie definiert sich eigentlich die Qualit\xe4t einer Codeeinheit, z.B. einer Klasse oder Komponente? Reicht es, dass sie funktional die Anforderungen des Kunden erf\xfcllt? Reicht es, dass er schnell genug und skalierbar genug ist? Automatische Tests und schlie\xdflich Tests durch den Kunden geben dar\xfcber ja Auskunft. Ohne solche Anforderungskonformit\xe4t hat Software nat\xfcrlich keine relevante Qualit\xe4t. Wenn sie dem Kunden nicht n\xfctzt, er\xfcbrigt sich jede weitere Frage."),(0,i.kt)("p",null,"Auf der anderen Seite reicht es, entgegen immer noch weit verbreiteter Annahme, allerdings auch nicht, anforderungskonform zu sein. Hohe Qualit\xe4t ergibt sich nicht allein aus Funktionalit\xe4t und z.B. Performance. Denn neben den funktionalen und nicht funktionalen Anforderungen gibt es auch noch eine meist unausgesprochene verborgene Anforderung: Kunden wollen auch immer, dass Software nicht nur heute ihre Anforderungen erf\xfcllt, sondern auch noch morgen und \xfcbermorgen. Kunden wollen Investitionsschutz durch Wandelbarkeit."),(0,i.kt)("p",null,"F\xfcr Kunden ist diese Anforderung meist implizit. Sie glauben, es sei selbstverst\xe4ndlich, dass ein immaterielles Produkt wie Software sich quasi unendlich und auf Knopfdruck an neue Anforderungen anpassen lie\xdfe. Auch F\xfchrungskr\xe4fte, die nicht aus der Softwareentwicklung stammen, glauben das oft. Und sogar Softwareentwickler selbst!"),(0,i.kt)("p",null,"Gr\xf6\xdfer k\xf6nnte das Missverst\xe4ndnis \xfcber Software jedoch kaum sein. Wandelbarkeit ist weder selbstverst\xe4ndlich im Sinne eines von jedem Softwareentwickler ohnehin verfolgten Zieles, noch ergibt sie sich durch irgendetwas quasi von selbst. Wandelbarkeit ist vielmehr harte Arbeit und muss st\xe4ndig gegen andere Werte abgewogen werden."),(0,i.kt)("p",null,"Wenn sonstige Anforderungskonformit\xe4t sich nun durch (automatisierte) Tests feststellen l\xe4sst, wie steht es dann mit der Wandelbarkeit? L\xe4sst sich die Qualit\xe4t von Code im Hinblick auf seine (\xdcber)Lebensf\xe4higkeit auch automatisch messen? Zum Teil. Nicht alle Aspekte, die Software evolvierbar machen, sind automatisch pr\xfcfbar. Ob zum Beispiel Software offen f\xfcr Erweiterungen durch ein Add-In-Konzept gehalten wird, ist nicht automatisiert erkennbar."),(0,i.kt)("p",null,"Dennoch gibt es\xa0",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Software_metric"},"Metriken"),", deren Wert f\xfcr eine Software sich \u201eausrechnen\u201c l\xe4sst.\xa0",(0,i.kt)("a",{parentName:"p",href:"https://clean-code-developer.de/weitere-infos/werkzeuge/"},"Tools"),"\xa0helfen dabei. Diese Tools sollten daher in jedem Softwareprojekt zum Einsatz kommen."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"F\xfcr ",(0,i.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Legacy%20Code"},"Legacy Code")," k\xf6nnen die Tools den Status Quo erheben und somit eine Grundlinie definieren, mit der die weitere Entwicklung des Codes (zum Besseren) verglichen werden kann."),(0,i.kt)("li",{parentName:"ul"},"F\xfcr neuen Code, der mit Wandelbarkeit im Blick geplant wurde, zeigt solch statische Codeanalyse, ob er das Ideal der Planung erf\xfcllt.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/Clean%20Code%20Developer"},"CCD")," sind nicht damit zufrieden, Code nur automatisiert zu testen. Sie haben auch immer ein Auge auf seine Wandelbarkeit, denn sie wissen, dass Kunden daran genauso interessiert sind \u2013 egal, ob sie es explizit gesagt haben oder nicht."),(0,i.kt)("p",null,"Siehe auch unter\xa0",(0,i.kt)("a",{parentName:"p",href:"https://clean-code-developer.de/weitere-infos/werkzeuge/"},"Tools"),"."))}m.isMDXComponent=!0}}]);