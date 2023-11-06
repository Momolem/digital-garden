"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[6713],{88462:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=i(85893),t=i(11151);const o={title:"Integration Operation Segregation Principle (IOSP)",tags:["cleancode","cleancode/ccd","cleancode/ccd/principle"]},l="Integration Operation Segregation Principle (IOSP)",a={id:"main/CleanCode/CleanCodeDeveloper/Prinzipien/Integration Operation Segregation Principle (IOSP)",title:"Integration Operation Segregation Principle (IOSP)",description:"Warum?",source:"@site/docs/main/CleanCode/1. CleanCodeDeveloper/Prinzipien/Integration Operation Segregation Principle (IOSP).md",sourceDirName:"main/CleanCode/1. CleanCodeDeveloper/Prinzipien",slug:"/main/CleanCode/CleanCodeDeveloper/Prinzipien/Integration Operation Segregation Principle (IOSP)",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Integration Operation Segregation Principle (IOSP)",draft:!1,unlisted:!1,tags:[{label:"cleancode",permalink:"/docs/tags/cleancode"},{label:"cleancode/ccd",permalink:"/docs/tags/cleancode-ccd"},{label:"cleancode/ccd/principle",permalink:"/docs/tags/cleancode-ccd-principle"}],version:"current",frontMatter:{title:"Integration Operation Segregation Principle (IOSP)",tags:["cleancode","cleancode/ccd","cleancode/ccd/principle"]},sidebar:"cs",previous:{title:"Information Hiding Principle",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Information Hiding Principle"},next:{title:"Interface Segragation Principle",permalink:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Interface Segragation Principle"}},s={},c=[];function d(e){const n={a:"a",blockquote:"blockquote",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"integration-operation-segregation-principle-iosp",children:"Integration Operation Segregation Principle (IOSP)"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Warum?"}),"\nEin deutliches Symptom schlecht wandelbaren Codes sind tiefe Hierarchien funktionaler Abh\xe4ngigkeit. Sie reduzieren die Verst\xe4ndlichkeit und erschweren automatisierte Tests wie Refactoring."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Indem in Methoden verhaltenserzeugende Anweisungen (Logik) gemischt mit Aufrufen anderer Methoden derselben Codebasis steht, ist nicht mehr klar erkennbar, wie Gesamtverhalten\xa0entsteht; die Anweisungen sind ja verschmiert\xa0\xfcber eine u.U. sehr tiefe Hierarchie. Zudem tendieren Methoden mit solcher Mischung dazu, unbegrenzt zu wachsen."}),"\n",(0,r.jsx)(n.p,{children:"Dem stellt sich das IOSP mit einer klaren Trennung entgegen:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Entweder enth\xe4lt eine Methode nur Logik, d.h. Transformationen, Kontrollstrukturen oder I/O- bzw. allgemeiner: API-Aufrufe. Dann wird sie\xa0",(0,r.jsx)(n.em,{children:"Operation"}),"\xa0genannt."]}),"\n",(0,r.jsxs)(n.li,{children:["Oder eine Methode enth\xe4lt keinerlei Logik, sondern nur Aufrufe von anderen Methoden derselben Codebasis. Dann wird sie\xa0",(0,r.jsx)(n.em,{children:"Integration"}),"\xa0genannt."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Diese strikte Unterscheidung f\xfchrt zu mehrerlei positiven Effekten:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Methoden tendieren dazu, sehr kurz zu bleiben. Denn mehr als 10, 20 oder 30 Zeilen reine Logik oder ausschlie\xdflich Methodenaufrufe \u201ef\xfchlen sich nicht gut an\u201c. Da eine Mischung nicht erlaubt ist, werden weitere kleine Methoden extrahiert."}),"\n",(0,r.jsx)(n.li,{children:"Kurze Methoden, die nur Logik enthalten, sind leicht zu testen, da sie keine Abh\xe4ngigkeiten haben."}),"\n",(0,r.jsx)(n.li,{children:"Kurze Methoden, die nur Logik enthalten, sind vergleichsweise leicht zu verstehen. Der Methodenname kann wirklich bedeutungsstiftend wirken."}),"\n",(0,r.jsx)(n.li,{children:"Kurze Methoden, die ausschlie\xdflich integrieren, sind sehr gut zu verstehen und beschreiben \u201eauf einen Blick\u201c, was geschieht."}),"\n",(0,r.jsx)(n.li,{children:"Die Korrektheit von Integrationen l\xe4sst sich sehr leicht durch Augenscheinnahme pr\xfcfen. Es ist lediglich festzustellen, ob Verarbeitungsschritte grunds\xe4tzlich in der korrekten Reihenfolge angeordnet sind. Den Rest \xfcbernimmt der Compiler \u2013 bzw. die Testabdeckung der Operationen."}),"\n",(0,r.jsx)(n.li,{children:"Integrationen lassen sich leicht durch \u201eZwischenschieben\u201c weiterer Methoden erweitern, um neue Anforderungen zu erf\xfcllen. Die Verst\xe4ndlichkeit bleibt dabei erhalten."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Das IOSP l\xe4sst sich \u201eaus dem Stand\u201c von jedem Entwickler guten Willens anwenden. Seine Einhaltung ist durch jedermann leicht zu \xfcberpr\xfcfen. Integrationen und Operationen unterscheiden sich in der Form deutlich. Weitere Details, insbesondere zur Abgrenzung zum\xa0",(0,r.jsx)(n.a,{href:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Dependency%20Inversion%20Principle",children:"Dependency Inversion Principle"}),",\xa0",(0,r.jsx)(n.a,{href:"https://ccd-akademie.de/dip-oder-iosp/",children:"findest du bspw. hier"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>l});var r=i(67294);const t={},o=r.createContext(t);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);