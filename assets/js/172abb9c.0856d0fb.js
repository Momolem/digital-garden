"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[1169],{39432:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=i(85893),s=i(11151);const a={title:"Statical Code Analysis",aliases:null,tags:["cleancode","cleancode/ccd","cleancode/ccd/practic"]},r="Statical Code Analysis",l={id:"main/CleanCode/CleanCodeDeveloper/Praktiken/Statical Code Analysis",title:"Statical Code Analysis",description:"Warum?",source:"@site/docs/main/CleanCode/1. CleanCodeDeveloper/Praktiken/Statical Code Analysis.md",sourceDirName:"main/CleanCode/1. CleanCodeDeveloper/Praktiken",slug:"/main/CleanCode/CleanCodeDeveloper/Praktiken/Statical Code Analysis",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Statical Code Analysis",draft:!1,unlisted:!1,tags:[{label:"cleancode",permalink:"/docs/tags/cleancode"},{label:"cleancode/ccd",permalink:"/docs/tags/cleancode-ccd"},{label:"cleancode/ccd/practic",permalink:"/docs/tags/cleancode-ccd-practic"}],version:"current",frontMatter:{title:"Statical Code Analysis",aliases:null,tags:["cleancode","cleancode/ccd","cleancode/ccd/practic"]},sidebar:"cs",previous:{title:"Simple Refactorings",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Simple Refactorings"},next:{title:"Test First",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Test First"}},o={},d=[];function c(e){const n={a:"a",blockquote:"blockquote",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"statical-code-analysis",children:"Statical Code Analysis"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Warum?"}),"\nVertrauen ist gut, Kontrolle ist besser \u2013 und je automatischer, desto leichter ist sie."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Wie definiert sich eigentlich die Qualit\xe4t einer Codeeinheit, z.B. einer Klasse oder Komponente? Reicht es, dass sie funktional die Anforderungen des Kunden erf\xfcllt? Reicht es, dass er schnell genug und skalierbar genug ist? Automatische Tests und schlie\xdflich Tests durch den Kunden geben dar\xfcber ja Auskunft. Ohne solche Anforderungskonformit\xe4t hat Software nat\xfcrlich keine relevante Qualit\xe4t. Wenn sie dem Kunden nicht n\xfctzt, er\xfcbrigt sich jede weitere Frage."}),"\n",(0,t.jsx)(n.p,{children:"Auf der anderen Seite reicht es, entgegen immer noch weit verbreiteter Annahme, allerdings auch nicht, anforderungskonform zu sein. Hohe Qualit\xe4t ergibt sich nicht allein aus Funktionalit\xe4t und z.B. Performance. Denn neben den funktionalen und nicht funktionalen Anforderungen gibt es auch noch eine meist unausgesprochene verborgene Anforderung: Kunden wollen auch immer, dass Software nicht nur heute ihre Anforderungen erf\xfcllt, sondern auch noch morgen und \xfcbermorgen. Kunden wollen Investitionsschutz durch Wandelbarkeit."}),"\n",(0,t.jsx)(n.p,{children:"F\xfcr Kunden ist diese Anforderung meist implizit. Sie glauben, es sei selbstverst\xe4ndlich, dass ein immaterielles Produkt wie Software sich quasi unendlich und auf Knopfdruck an neue Anforderungen anpassen lie\xdfe. Auch F\xfchrungskr\xe4fte, die nicht aus der Softwareentwicklung stammen, glauben das oft. Und sogar Softwareentwickler selbst!"}),"\n",(0,t.jsx)(n.p,{children:"Gr\xf6\xdfer k\xf6nnte das Missverst\xe4ndnis \xfcber Software jedoch kaum sein. Wandelbarkeit ist weder selbstverst\xe4ndlich im Sinne eines von jedem Softwareentwickler ohnehin verfolgten Zieles, noch ergibt sie sich durch irgendetwas quasi von selbst. Wandelbarkeit ist vielmehr harte Arbeit und muss st\xe4ndig gegen andere Werte abgewogen werden."}),"\n",(0,t.jsx)(n.p,{children:"Wenn sonstige Anforderungskonformit\xe4t sich nun durch (automatisierte) Tests feststellen l\xe4sst, wie steht es dann mit der Wandelbarkeit? L\xe4sst sich die Qualit\xe4t von Code im Hinblick auf seine (\xdcber)Lebensf\xe4higkeit auch automatisch messen? Zum Teil. Nicht alle Aspekte, die Software evolvierbar machen, sind automatisch pr\xfcfbar. Ob zum Beispiel Software offen f\xfcr Erweiterungen durch ein Add-In-Konzept gehalten wird, ist nicht automatisiert erkennbar."}),"\n",(0,t.jsxs)(n.p,{children:["Dennoch gibt es\xa0",(0,t.jsx)(n.a,{href:"http://en.wikipedia.org/wiki/Software_metric",children:"Metriken"}),", deren Wert f\xfcr eine Software sich \u201eausrechnen\u201c l\xe4sst.\xa0",(0,t.jsx)(n.a,{href:"https://clean-code-developer.de/weitere-infos/werkzeuge/",children:"Tools"}),"\xa0helfen dabei. Diese Tools sollten daher in jedem Softwareprojekt zum Einsatz kommen."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["F\xfcr ",(0,t.jsx)(n.a,{href:"/docs/main/CleanCode/CleanCodeDeveloper/Legacy%20Code",children:"Legacy Code"})," k\xf6nnen die Tools den Status Quo erheben und somit eine Grundlinie definieren, mit der die weitere Entwicklung des Codes (zum Besseren) verglichen werden kann."]}),"\n",(0,t.jsx)(n.li,{children:"F\xfcr neuen Code, der mit Wandelbarkeit im Blick geplant wurde, zeigt solch statische Codeanalyse, ob er das Ideal der Planung erf\xfcllt."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/main/CleanCode/CleanCodeDeveloper/CleanCodeDeveloper",children:"CCD"})," sind nicht damit zufrieden, Code nur automatisiert zu testen. Sie haben auch immer ein Auge auf seine Wandelbarkeit, denn sie wissen, dass Kunden daran genauso interessiert sind \u2013 egal, ob sie es explizit gesagt haben oder nicht."]}),"\n",(0,t.jsxs)(n.p,{children:["Siehe auch unter\xa0",(0,t.jsx)(n.a,{href:"https://clean-code-developer.de/weitere-infos/werkzeuge/",children:"Tools"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var t=i(67294);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);