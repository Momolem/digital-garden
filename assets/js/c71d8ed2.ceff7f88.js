"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[2295],{86404:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=i(85893),t=i(11151);const o={title:"Inversion of Control Container",aliases:["IoC"],tags:["cleancode","cleancode/ccd","cleancode/ccd/practic"]},s="Inversion of Control Container",a={id:"main/CleanCode/CleanCodeDeveloper/Praktiken/Inversion of Control Container",title:"Inversion of Control Container",description:"Warum?",source:"@site/docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Inversion of Control Container.md",sourceDirName:"main/CleanCode/CleanCodeDeveloper/Praktiken",slug:"/main/CleanCode/CleanCodeDeveloper/Praktiken/Inversion of Control Container",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Inversion of Control Container",draft:!1,unlisted:!1,tags:[{label:"cleancode",permalink:"/docs/tags/cleancode"},{label:"cleancode/ccd",permalink:"/docs/tags/cleancode-ccd"},{label:"cleancode/ccd/practic",permalink:"/docs/tags/cleancode-ccd-practic"}],version:"current",frontMatter:{title:"Inversion of Control Container",aliases:["IoC"],tags:["cleancode","cleancode/ccd","cleancode/ccd/practic"]},sidebar:"cs",previous:{title:"Incremental Development",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Incremental Development"},next:{title:"Issue Tracking",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Issue Tracking"}},l={},d=[];function c(e){const n={a:"a",blockquote:"blockquote",em:"em",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"inversion-of-control-container",children:"Inversion of Control Container"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Warum?"}),"\nNur, was nicht fest verdrahtet ist, kann leichter umkonfiguriert werden."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Bereits im ",(0,r.jsx)(n.a,{href:"/docs/main/CleanCode/CleanCodeDeveloper/Grade/Gelber%20Grad",children:"gelben Grad"}),"\xa0hat der ",(0,r.jsx)(n.a,{href:"docs/main/CleanCode/CleanCodeDeveloper.md",children:"CCD"})," das ",(0,r.jsx)(n.a,{href:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Dependency%20Inversion%20Principle",children:"Dependency Inversion Principle"})," kennengelernt. Dabei wurden die Abh\xe4ngigkeiten noch \u201evon Hand\u201c aufgel\xf6st. Der n\xe4chste logische Schritt besteht nun darin, das Aufl\xf6sen der Abh\xe4ngigkeiten zu automatisieren. Dazu stehen zwei Verfahren zur Verf\xfcgung:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Locator"}),"\n",(0,r.jsx)(n.li,{children:"Container"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Beide verwenden einen sogenannten\xa0",(0,r.jsx)(n.em,{children:"Inversion of Control Container"}),"\xa0(IoC Container). Vor der Verwendung des Containers m\xfcssen die verwendeten Klassen im Container hinterlegt werden. Anschlie\xdfend kann der Container Instanzen der hinterlegten Klassen liefern. Beim\xa0",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.a,{href:"Locator",children:"Locator"})}),"\xa0geschieht dies explizit. Dies hat den Vorteil, dass die Abh\xe4ngigkeiten nicht alle im Konstruktor der Klasse aufgef\xfchrt werden m\xfcssen. Bei Querschnittsaufgaben wie beispielsweise\xa0",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.a,{href:"Logging",children:"Logging"})}),"\xa0ist dies ein \xfcbliches Vorgehen. In der Regel werden die Abh\xe4ngigkeiten jedoch als Parameter des Konstruktors aufgef\xfchrt. Dies hat den Vorteil dass alle Abh\xe4ngigkeiten sichtbar sind. Der Container ist damit in der Lage die Abh\xe4ngigkeiten implizit aufzul\xf6sen in dem er rekursiv alle ben\xf6tigten Objekte \xfcber den Container instanziert."]}),"\n",(0,r.jsxs)(n.p,{children:["IoC Container werden wichtig, sobald die Anzahl der Klassen w\xe4chst. Wenn man\xa0",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.a,{href:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Separation%20of%20Concerns",children:"Separation of Concerns"})}),"\xa0beherzigt, entstehen viele kleine Klassen mit \xfcberschaubaren Aufgaben. Das Zusammensetzen von Instanzen dieser Klassen wird entsprechend aufwendiger. Genau hier setzt der IoC Container an, er hilft beim Instanziieren und Verbinden der vielen kleinen Objekte."]}),"\n",(0,r.jsxs)(n.p,{children:["Ein weiterer Vorteil von IoC Containern ist die Tatsache, dass der\xa0",(0,r.jsx)(n.em,{children:"Lebenszyklus"}),"\xa0eines Objektes per Konfiguration bestimmt werden kann. Soll es zur Laufzeit nur eine einzige Instanz eines Objektes geben (",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.a,{href:"/docs/main/CleanCode/DesignPatterns/Singleton",children:"Singleton"})}),") kann der Container angewiesen werden, immer ein und dieselbe Instanz zu liefern. Auch andere Lebenszyklen wie z.B.\xa0",(0,r.jsx)(n.em,{children:"eine Instanz pro Session"}),"\xa0werden unterst\xfctzt."]}),"\n",(0,r.jsxs)(n.p,{children:["Um bei Verwendung eines Locators nicht in Abh\xe4ngigkeit zu einem bestimmten IoC Container zu geraten, kann der\xa0",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.a,{href:"Microsoft%20Common%20Service%20Locator",children:"Microsoft Common Service Locator"})}),"\xa0(siehe Tools) verwendet werden. Dieser bietet eine vereinheitlichte Schnittstelle zu den g\xe4ngigen IoC Containern."]}),"\n",(0,r.jsx)(n.p,{children:"Zum Verst\xe4ndnis der Mechanik die hinter einem IoC Container steckt, ist es n\xfctzlich die Funktionalit\xe4t einmal selber zu implementieren. Dabei soll kein vollst\xe4ndiger Container implementiert werden sondern lediglich die Grundfunktionen."}),"\n",(0,r.jsxs)(n.p,{children:["Siehe auch unter\xa0",(0,r.jsx)(n.a,{href:"https://clean-code-developer.de/weitere-infos/werkzeuge/",children:"Tools"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var r=i(67294);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);