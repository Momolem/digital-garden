"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5214],{4137:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>C});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=c(t),p=o,C=m["".concat(l,".").concat(p)]||m[p]||u[p]||i;return t?r.createElement(C,s(s({ref:n},d),{},{components:t})):r.createElement(C,s({ref:n},d))}));function C(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[m]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4959:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(7462),o=(t(7294),t(4137));const i={title:"Version Control System",aliases:["Version Control","VCS","Versionskontrolle"],tags:["cleancode","cleancode/ccd","cleancode/ccd/practic"]},s="Version Control System",a={unversionedId:"main/CleanCode/CleanCodeDeveloper/Praktiken/Version Control System",id:"main/CleanCode/CleanCodeDeveloper/Praktiken/Version Control System",title:"Version Control System",description:"Warum?",source:"@site/docs/main/CleanCode/1. CleanCodeDeveloper/Praktiken/Version Control System.md",sourceDirName:"main/CleanCode/1. CleanCodeDeveloper/Praktiken",slug:"/main/CleanCode/CleanCodeDeveloper/Praktiken/Version Control System",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Version Control System",draft:!1,tags:[{label:"cleancode",permalink:"/docs/tags/cleancode"},{label:"cleancode/ccd",permalink:"/docs/tags/cleancode-ccd"},{label:"cleancode/ccd/practic",permalink:"/docs/tags/cleancode-ccd-practic"}],version:"current",frontMatter:{title:"Version Control System",aliases:["Version Control","VCS","Versionskontrolle"],tags:["cleancode","cleancode/ccd","cleancode/ccd/practic"]},sidebar:"main",previous:{title:"Test First",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Test First"},next:{title:"Beware of Premature Optimization",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Beware of Premature Optimization"}},l={},c=[],d={toc:c},m="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"version-control-system"},"Version Control System"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Warum?"),"\nSymptome behandeln bringt vielleicht schnell eine Linderung \u2013 langfristig kostet es aber mehr Aufwand. Wer stattdessen unter die Oberfl\xe4che von Problemen schaut, arbeitet am Ende effizienter.")),(0,o.kt)("p",null,"Unabdingbare Voraussetzung f\xfcr jeden ",(0,o.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/CleanCodeDeveloper/CleanCodeDeveloper"},"1. CleanCodeDeveloper")," ist es, seinen Code unter den Schutz eines Versionskontrollsystems zu stellen. Ob das Mercurial, Git, Subversion, VSS, TFS oder Vault ist, spielt dabei keine Rolle. Wir meinen nur, dass heute keine Arbeit an Code mehr durchgef\xfchrt werden sollte, ohne ihn in einem Versionskontrollsystem zu pflegen. Der Grund daf\xfcr ist ganz simpel: Ein Versionskontrollsystem befreit von Angst. Und Angstfreiheit ist n\xf6tig, um mutig die Prinzipien und Praktiken des CCD-Wertesystems umzusetzen."),(0,o.kt)("p",null,"Ein Versionskontrollsystem nimmt die Angst, etwas falsch und damit kaputt zu machen. Wenn Code in ihm gehalten wird, kann jeder CCD den Code nach Belieben ver\xe4ndern, ohne bef\xfcrchten zu m\xfcssen, einen erreichten Stand zu zerst\xf6ren. Nichts geht verloren. Das Versionskontrollsystem ist wie eine Zeitmaschine f\xfcr Code."),(0,o.kt)("p",null,"Damit ist ein Versionskontrollsystem die allerbeste Grundlage f\xfcr alles Lernen. Denn Lernen bedeutet Fehler machen. Mit einem Versionskontrollsystem als Sicherheitsnetz k\xf6nnen wir uns alle Fehler erlauben. Deshalb: Erste Voraussetzung f\xfcr den Einstieg ins Clean Code Development ist der st\xe4ndige Gebrauch eines Versionskontrollsystems."),(0,o.kt)("p",null,"Wo das im Projekt nicht m\xf6glich ist, sehen wir das Fundament f\xfcr Clean Code Development abwesend. Wir w\xfcrden auch nicht verstehen, warum der Einsatz eines Versionskontrollwerkzeuges nicht m\xf6glich sein sollte. Kosten m\xfcssen daf\xfcr nicht anfallen und der Einarbeitungsaufwand in die einfachsten Funktionen ist minimal. CCD schreibt ja keine bestimmte Nutzung eines Versionskontrollsystems vor, sondern nur, dass eines benutzt werden muss."))}u.isMDXComponent=!0}}]);