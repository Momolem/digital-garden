"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[1838],{7312:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=s(85893),a=s(11151);const r={title:"Code Coverage Analysis",aliases:null,tags:["cleancode","cleancode/ccd","cleancode/ccd/practic"]},t="Code Coverage Analysis",d={id:"main/CleanCode/CleanCodeDeveloper/Praktiken/Code Coverage Analysis",title:"Code Coverage Analysis",description:"Warum?",source:"@site/docs/main/CleanCode/1. CleanCodeDeveloper/Praktiken/Code Coverage Analysis.md",sourceDirName:"main/CleanCode/1. CleanCodeDeveloper/Praktiken",slug:"/main/CleanCode/CleanCodeDeveloper/Praktiken/Code Coverage Analysis",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Code Coverage Analysis",draft:!1,unlisted:!1,tags:[{label:"cleancode",permalink:"/docs/tags/cleancode"},{label:"cleancode/ccd",permalink:"/docs/tags/cleancode-ccd"},{label:"cleancode/ccd/practic",permalink:"/docs/tags/cleancode-ccd-practic"}],version:"current",frontMatter:{title:"Code Coverage Analysis",aliases:null,tags:["cleancode","cleancode/ccd","cleancode/ccd/practic"]},sidebar:"cs",previous:{title:"Boy Scout Rule",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Boy Scout Rule"},next:{title:"Code Reviews",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Code Reviews"}},c={},o=[];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"code-coverage-analysis",children:"Code Coverage Analysis"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Warum?"}),"\nTraue nur Tests, von denen du wei\xdft, dass sie auch wirklich das Testareal abdecken."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/main/CleanCode/CleanCodeDeveloper/Unit%20Test",children:"Unit Tests"})," sollten nach M\xf6glichkeit alle Pfade durch unseren Code abdecken. Nur so gewinnen wir das Vertrauen, dass der Code korrekt arbeitet. Um in Erfahrung zu bringen, welche Codebereiche bislang nicht durch Tests abgedeckt sind, bedienen wir uns der\xa0",(0,i.jsx)(n.em,{children:"Code Coverage Analyse"}),". Diese dient dazu, Bereiche im Code aufzudecken, die noch nicht w\xe4hrend der automatisierten Tests ausgef\xfchrt werden."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/main/CleanCode/CleanCodeDeveloper/Unit%20Test",children:"Unit Tests"})," sollten eigentlich 100% des zu testenden Codes abdecken. Zwar bedeutet das nicht automatisch, dass gen\xfcgend Tests existieren, doch weniger als 100% Code Coverage zeigen an, dass es noch Taschen von Code gibt, \xfcber die \xfcberhaupt noch keine Korrektheitsaussage gemacht werden kann. 100% Codeabdeckung sind deshalb immer anzustreben."]}),"\n",(0,i.jsx)(n.p,{children:"In der Praxis zeigt es sich jedoch, dass 100% Codeabdeckung nicht immer mit unmittelbar vertretbarem Aufwand erreicht werden k\xf6nnen. Wie auch sonst im Leben kann die M\xfche f\xfcr die letzten 2,3,4 Prozent \xfcberproportional wachsen. Deshalb kann es nach genauer Analyse der Abdeckungslage akzeptabel sein, mit weniger als 100% zufrieden zu sein."}),"\n",(0,i.jsx)(n.p,{children:"Unterhalb von 90% ist die Abdeckung dann allerdings so l\xf6chrig, dass sie als unprofessionell anzusehen ist. Wer also mit automatischen Tests beginnt, sollte immer auch gleichzeitig die Codeabdeckung messen. Sonst l\xe4sst sich keine Aussage \xfcber die Qualit\xe4t der Tests machen."}),"\n",(0,i.jsx)(n.p,{children:"F\xfcr die Messung der Code\xfcberdeckung gibt es zwei einfache Kennzahlen, die als C0- und C1-Kennzahlen bezeichnet werden. Die C0-Kennzahl misst die Anweisungs\xfcberdeckung, wogegen die C1-Kennzahl die Entscheidungs\xfcberdeckung bzw. die Zweig\xfcberdeckung misst."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"C0 = (Anzahl der getesteten Anweisungen / Anzahl der gesamten Anweisungen) * 100%\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"C1 = (Anzahl der getesteten Entscheidungen bzw. Zweige / Anzahl der gesamten Entscheidungen bzw. Zweige) * 100%\n"})}),"\n",(0,i.jsx)(n.p,{children:"C1 ist dabei die st\xe4rkere Kennzahl, da 100% Entscheidungs\xfcberdeckung bzw. Zweig\xfcberdeckung 100% Anweisungs\xfcberdeckung impliziert. Der Umkehrschluss gilt nicht."}),"\n",(0,i.jsxs)(n.p,{children:["Der Anweisungs\xfcberdeckungstest sowie der Zweig\xfcberdeckungstest arbeiten auf Basis eines ",(0,i.jsx)(n.a,{href:"http://de.wikipedia.org/wiki/Kontrollflussgraph",children:"Kontrollflussgraphen"})," w\xe4hrend der Entscheidungs\xfcberdeckungstest direkt auf dem Quellcode basiert. Die Testverfahren Anweisungs\xfcberdeckungstest und Zweig\xfcberdeckungstest sind sehr gut unter\xa0",(0,i.jsx)(n.a,{href:"http://de.wikipedia.org/wiki/Kontrollflussorientierte_Testverfahren"}),(0,i.jsx)(n.a,{href:"http://de.wikipedia.org/wiki/Kontrollflussorientierte_Testverfahren",children:"http://de.wikipedia.org/wiki/Kontrollflussorientierte_Testverfahren"}),"\xa0beschrieben."]}),"\n",(0,i.jsxs)(n.p,{children:["Siehe auch unter\xa0",(0,i.jsx)(n.a,{href:"https://clean-code-developer.de/weitere-infos/werkzeuge/",children:"Tools"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>t});var i=s(67294);const a={},r=i.createContext(a);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);