"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7640],{4137:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),p=i,h=c["".concat(s,".").concat(p)]||c[p]||m[p]||a;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7161:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(7462),i=(t(7294),t(4137));const a={title:"Implementation Reflects Design",aliases:[]},o=void 0,l={unversionedId:"main/CleanCode/Implementation Reflects Design",id:"main/CleanCode/Implementation Reflects Design",title:"Implementation Reflects Design",description:"tags: #cleancode",source:"@site/docs/main/CleanCode/Implementation Reflects Design.md",sourceDirName:"main/CleanCode",slug:"/main/CleanCode/Implementation Reflects Design",permalink:"/docs/main/CleanCode/Implementation Reflects Design",draft:!1,tags:[],version:"current",frontMatter:{title:"Implementation Reflects Design",aliases:[]},sidebar:"main",previous:{title:"Gr\xfcner Grad",permalink:"/docs/main/CleanCode/Gr\xfcner Grad"},next:{title:"Incremental Development",permalink:"/docs/main/CleanCode/Incremental Development"}},s={},d=[],u={toc:d},c="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"tags: #cleancode "),(0,i.kt)("h1",{id:"implementation-reflects-design"},"Implementation Reflects Design"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Warum?"),"\nUmsetzung, die von der Planung beliebig abweichen kann, f\xfchrt direkt in die Unwartbarkeit. Umsetzung braucht daher einen durch die Planung vorgegebenen physischen Rahmen.")),(0,i.kt)("p",null,"Architektur und Implementation sollen nicht \xfcberlappen, damit sie das ",(0,i.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/DRY"},"DRY"),"-Prinzip nicht verletzten. So werden Inkonsistenzen vermieden, die dadurch entstehen k\xf6nnen, dass auf der einen Seite etwas ge\xe4ndert wird, ohne diese \xc4nderung auf der anderen Seite nachzuf\xfchren."),(0,i.kt)("p",null,"Nichtsdestotrotz macht die Architektur aber ja Aussagen \xfcber die Implementation. Nicht ihre Details, aber ihre grunds\xe4tzliche Form. Architektur definiert die Strukturelemente und deren Beziehungen innerhalb eines Codesystems. Implementation existiert also auch bei Abwesenheit von \xdcberlappungen nicht unabh\xe4ngig von Architektur, sondern sozusagen in ihr."),(0,i.kt)("p",null,"Genau das sollte sich dann aber auch in der Implementation ausdr\xfccken. So wird die leichter verst\xe4ndlich, so kann besser sichergestellt werden, dass die Implementation tats\xe4chlich der Architektur folgt. Die von der Architektur auf verschiedenen Abstraktionsebenen definierten Strukturelemente sollten deshalb nicht in einem gro\xdfen \u201eCodetopf\u201c (z.b. eine gro\xdfe Visual Studio Solution) \u201ezusammenger\xfchrt werden\u201c. Viel besser auch im Sinne hoher Produktivit\xe4t und einfacher Testbarkeit ist es, die logischen Strukturen der Architektur so physisch wie m\xf6glich zu manifestieren."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Die von der Architektur geplanten Strukturen auf verschiedenen Abstraktionsebenen sollten sich so weitgehend wie m\xf6glich in der Codeorganisation widerspiegeln. Das bedeutet zum einen, dass die Architektur als Strukturelemente vor allem physische Codeeinheiten benutzt. Und zum anderen sollen diese Strukturelemente dann aber auch im Quellcode bzw. in der Codeorganisation im Repository klar sichtbar sein."),(0,i.kt)("li",{parentName:"ol"},"Bei der Arbeit an der Implementation der Strukturelemente und insbesondere innerhalb von Komponenten sollen Architektur\xe4nderungen \u201eim Vorbeigehen\u201c unm\xf6glich sein. Wer in bzw. an einem Strukturelement arbeitet, also an einem Teil, darf nicht ad hoc die umliegende Struktur, d.h. das Ganze, \xe4ndern k\xf6nnen. Nur wenn das gew\xe4hrleistet ist, w\xe4chst die Entropie einer Software nicht unkontrolliert. Das ist wichtig, da das Hauptziel von Architektur ist, die Entropie und damit die Komplexit\xe4t von Software zu minimieren.")),(0,i.kt)("p",null,"Planung muss sein. Implementation darf Planung nicht torpedieren. (Wenn auch Erkenntnisse w\xe4hrend der Implementation nat\xfcrlich auf die Planung zur\xfcckwirken d\xfcrfen.) Deshalb sind Planung und Implementation zu entkoppeln. Und wo das nicht m\xf6glich ist, da sollte die Planung mit Mitteln der Implementation arbeiten und die Implementation physisch die Planung widerspiegeln."))}m.isMDXComponent=!0}}]);