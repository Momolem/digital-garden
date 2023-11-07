"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[4665],{75507:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=i(85893),r=i(11151);const s={title:"Single Level of Abstraction",aliases:null,tags:["cleancode","cleancode/ccd","cleancode/ccd/principle"]},a="Single Level of Abstraction (SLA)",l={id:"main/CleanCode/CleanCodeDeveloper/Prinzipien/Single Level of Abstraction",title:"Single Level of Abstraction",description:"Warum?",source:"@site/docs/main/CleanCode/1. CleanCodeDeveloper/Prinzipien/Single Level of Abstraction.md",sourceDirName:"main/CleanCode/1. CleanCodeDeveloper/Prinzipien",slug:"/main/CleanCode/CleanCodeDeveloper/Prinzipien/Single Level of Abstraction",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Single Level of Abstraction",draft:!1,unlisted:!1,tags:[{label:"cleancode",permalink:"/docs/tags/cleancode"},{label:"cleancode/ccd",permalink:"/docs/tags/cleancode-ccd"},{label:"cleancode/ccd/principle",permalink:"/docs/tags/cleancode-ccd-principle"}],version:"current",frontMatter:{title:"Single Level of Abstraction",aliases:null,tags:["cleancode","cleancode/ccd","cleancode/ccd/principle"]},sidebar:"cs",previous:{title:"Separation of Concerns",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Separation of Concerns"},next:{title:"Single Responsibility Principle",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Single Responsibility Principle"}},o={},c=[];function d(e){const n={blockquote:"blockquote",h1:"h1",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"single-level-of-abstraction-sla",children:"Single Level of Abstraction (SLA)"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Warum?"}),"\nDie Einhaltung eines Abstraktionsniveaus f\xf6rdert die Lesbarkeit"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Eine Codezeile kann auf verschiedenen Abstraktionsniveaus liegen. Die Zuweisung eines Wertes an eine Variable liegt auf einem niedrigeren Abstraktionsniveau als etwa ein Methodenaufruf. Schlie\xdflich kann sich hinter dem Methodenaufruf weit mehr Logik befinden als in der Zuweisung einer Variable. Selbst Methodenaufrufe k\xf6nnen auf unterschiedlichen Abstraktionsniveaus stehen. Der Aufruf einer Methode aus einem Framework steht auf einem anderen Niveau, als der Aufruf einer Methode der Anwendung."}),"\n",(0,t.jsx)(n.p,{children:"Damit Code gut zu lesen und zu verstehen ist, sollte in einer Methode nur ein Abstraktionsniveau verwendet werden. Andernfalls f\xe4llt es dem Leser schwer, Essentielles von Details zu unterscheiden. Wenn Bitpfriemeleien erforderlich sind, sollten diese nicht mit dem Aufruf von Methoden vermischt werden."}),"\n",(0,t.jsx)(n.p,{children:"Hilfreich als Analogie ist der Blick auf Artikel in der Tageszeitung: dort steht zu oberst das Allerwichtigste, die \xdcberschrift. Aus ihr sollte in groben Z\xfcgen hervorgehen, wovon der Artikel handelt. Im ersten Satz des Artikels wird dies auf einem hohen Abstraktionsniveau beschrieben. Je weiter man im Artikel fortschreitet, desto mehr Details tauchen auf. So k\xf6nnen wir auch unseren Code strukturieren. Der Name der Klasse ist die \xdcberschrift. Dann folgen die \xf6ffentlichen Methoden auf hohem Abstraktionsniveau. Diese rufen m\xf6glicherweise Methoden auf niedrigerem Niveau auf, bis zuletzt die \u201eBitpfriemelmethoden\u201c \xfcbrig bleiben. Durch diese Einteilung kann ich als Leser der Klasse entscheiden, welchen Detaillierungsgrad ich mir ansehen m\xf6chte. Interessiert mich nur grob, wie die Klasse arbeitet, brauche ich mir nur die \xf6ffentlichen Methoden anzuschauen. In ihnen wird die Funktionalit\xe4t auf einem hohen Abstraktionsniveau gel\xf6st. Interessieren mich weitere Details, kann ich tiefer einsteigen und mir die privaten Methoden ansehen."})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>a});var t=i(67294);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);