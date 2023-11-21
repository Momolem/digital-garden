"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[7393],{95127:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var s=i(85893),r=i(11151);const t={title:"Source Code Conventions",aliases:null,tags:["cleancode","cleancode/ccd","cleancode/ccd/principle"]},l="Source Code Conventions",o={id:"main/CleanCode/CleanCodeDeveloper/Prinzipien/Source Code Conventions",title:"Source Code Conventions",description:"Warum?",source:"@site/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Source Code Conventions.md",sourceDirName:"main/CleanCode/CleanCodeDeveloper/Prinzipien",slug:"/main/CleanCode/CleanCodeDeveloper/Prinzipien/Source Code Conventions",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Source Code Conventions",draft:!1,unlisted:!1,tags:[{label:"cleancode",permalink:"/docs/tags/cleancode"},{label:"cleancode/ccd",permalink:"/docs/tags/cleancode-ccd"},{label:"cleancode/ccd/principle",permalink:"/docs/tags/cleancode-ccd-principle"}],version:"current",frontMatter:{title:"Source Code Conventions",aliases:null,tags:["cleancode","cleancode/ccd","cleancode/ccd/principle"]},sidebar:"cs",previous:{title:"Single Responsibility Principle",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Single Responsibility Principle"},next:{title:"Tell, don't ask",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Tell, dont ask"}},a={},d=[{value:"Namensregeln",id:"namensregeln",level:2},{value:"Richtig kommentieren",id:"richtig-kommentieren",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"source-code-conventions",children:"Source Code Conventions"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Warum?"}),"\nCode wird h\xe4ufiger gelesen als geschrieben. Daher sind Konventionen wichtig, die ein schnelles Lesen und Erfassen des Codes unterst\xfctzen."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Wir betrachten die folgenden Aspekte als wichtig:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Namensregeln"}),"\n",(0,s.jsx)(n.li,{children:"Richtig Kommentieren"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Damit wollen wir nicht zum Ausdruck bringen, dass andere Konventionen unwichtig sind, wir wollen nur mit diesen beiden beginnen, weil sie uns elementar erscheinen. Bei allen Code Konventionen ist uns n\xe4mlich eines ganz wichtig: es geht weniger um die konkrete Ausgestaltung, sondern um konsequentes Einhalten der Konvention. Und es geht um das Bewusstsein, dass Konventionen notwendig sind."}),"\n",(0,s.jsx)(n.h2,{id:"namensregeln",children:"Namensregeln"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Warum?"}),"\nOhne Namensregeln muss man sich wieder und wieder auf den Stil einzelner Entwickler einstimmen."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Namensregeln sollen den Leser des Codes dabei unterst\xfctzen den Code zu verstehen. Da es z.B. hilfreich ist, Felder von lokalen Variablen zu unterscheiden, k\xf6nnte dies durch eine Namensregel unterst\xfctzt werden. Wie eine solche Konvention im Einzelfall aussieht ist Geschmacksache. Manche bevorzugen \u201ethis.xyz\u201c andere \u201e_xyz\u201c. Welche Variante man w\xe4hlt ist uns nicht wichtig. Uns kommt es darauf an, dass die Konvention konsequent eingehalten wird. Die Notwendigkeit einer Namensregel f\xfcr z.B. Felder h\xe4ngt ferner vom Kontext ab. In einer Klasse mit 400 Zeilen w\xe4re uns eine Namensregel, die Felder gegen\xfcber Variablen hervorhebt, sehr wichtig, in \xfcberschaubaren Klassen tritt sie dagegen eher in den Hintergrund. Mit Hilfe der ",(0,s.jsx)(n.a,{href:"/docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Root%20Cause%20Analysis",children:"Root Cause Analysis"})," geht der ",(0,s.jsx)(n.a,{href:"docs/main/CleanCode/CleanCodeDeveloper.md",children:"CleanCodeDeveloper"})," der eigentlichen Ursache f\xfcr die Notwendigkeit einer Namensregel auf den Grund."]}),"\n",(0,s.jsx)(n.h2,{id:"richtig-kommentieren",children:"Richtig kommentieren"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Warum?"}),"\nUnn\xf6tige oder gar falsche Kommentare halten beim Lesen auf. Der Code sollte so klar und deutlich sein, dass er m\xf6glichst ohne Kommentare auskommt."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Salopp gesagt ist ein Kommentar im Code ein Hinweis darauf, dass der Code noch verbessert werden kann. Typisch f\xfcr solche F\xe4lle sind 3 Zeilen Code, die mit einem Kommentar \xfcberschrieben sind. An der Stelle hilft es wahrscheinlich, die drei Zeilen als Methode zu extrahieren (Refactoring: Extract Method) und den Kommentar als Name der Methode zu verwenden. Ganz allgemein kann der Bedarf an Kommentaren reduziert werden, in dem man gute Namen verwendet f\xfcr Variablen, Methoden, Klassen, etc."}),"\n",(0,s.jsx)(n.p,{children:"Statt"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"int laenge; // in mm\n"})}),"\n",(0,s.jsx)(n.p,{children:"besser"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"int laengeInMM;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Statt"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"public double Preis() {\n\t// Berechnet den Bruttopreis ...\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"besser"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"public Money BruttoPreis() {\n\t...\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Kommentiert werden sollte nicht was man tut, sondern, wenn \xfcberhaupt, wieso man etwas tut."})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var s=i(67294);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);