"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7389],{4137:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),o=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=o(e.components);return r.createElement(d.Provider,{value:n},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=o(t),m=i,g=c["".concat(d,".").concat(m)]||c[m]||h[m]||a;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[c]="string"==typeof e?e:i,l[1]=s;for(var o=2;o<a;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8023:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var r=t(7462),i=(t(7294),t(4137));const a={title:"You Ain't Gonna Need It",aliases:["YAGNI"]},l=void 0,s={unversionedId:"main/CleanCode/You Aint Gonna Need It",id:"main/CleanCode/You Aint Gonna Need It",title:"You Ain't Gonna Need It",description:"tags: #cleancode",source:"@site/docs/main/CleanCode/You Aint Gonna Need It.md",sourceDirName:"main/CleanCode",slug:"/main/CleanCode/You Aint Gonna Need It",permalink:"/docs/main/CleanCode/You Aint Gonna Need It",draft:!1,tags:[],version:"current",frontMatter:{title:"You Ain't Gonna Need It",aliases:["YAGNI"]},sidebar:"main",previous:{title:"Wei\xdfer Grad",permalink:"/docs/main/CleanCode/Wei\xdfer Grad"},next:{title:"Abbruch und R\xfcckg\xe4ngigmachen von Aktionen",permalink:"/docs/main/UI & UX/Interaktive Systeme/Abbruch und R\xfcckg\xe4ngigmachen von Aktionen"}},d={},o=[],u={toc:o},c="wrapper";function h(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"tags: #cleancode "),(0,i.kt)("h1",{id:"you-aint-gonna-need-it"},"You Ain\u2019t Gonna Need It"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Warum?"),"\nDinge die niemand braucht, haben keinen Wert. Verschwende an sie also keine Zeit.")),(0,i.kt)("p",null,"Das YAGNI-Prinzip (",(0,i.kt)("em",{parentName:"p"},"You Ain\xb4t Gonna Need It"),") ist eines der einfachsten in der Softwareentwicklung \u2013 und doch wohl das nach dem ",(0,i.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/DRY"},"DRY"),"-Prinzip am h\xe4ufigsten verletzte Prinzip. Deshalb steht YAGNI nicht nur am Anfang des\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/Roter%20Grad"},"roten Grades"),", sondern auch hier gegen Ende des Weges durch das\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/Clean%20Code%20Developer#Wertesystem%7CWertesystem"}),"."),(0,i.kt)("p",null,"Geschuldet ist das YAGNI-Prinzip dem in der Softwareentwicklung besonderen Verh\xe4ltnis von Anforderungsgenauigkeit und Produktmaterialit\xe4t. Anforderungen sind notorisch ungenau oder wechselnd und das Produkt, in dem sie umgesetzt werden sollen, immateriell. Im Vergleich zum Maschinen- oder Geb\xe4udebau ist das Material also unendlich flexibel und kann sich prinzipiell mit vergleichsweise wenig Aufwand an quasi jede Anforderung anpassen lassen. Hohe Volatili\xe4t bzw. Ungenauigkeit trifft also auf hohe Flexibilit\xe4t. Das scheint zun\xe4chst einmal ideal."),(0,i.kt)("p",null,"Die Praxis zeigt jedoch, dass gerade in diesem Verh\xe4ltnis der Keim des Misserfolges vieler Projekte liegt. Kurzfristig betrachtet, versuchen die Projekte mit dem Naheliegenden auch das Richtige zu tun:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ungenaue Anforderungen werden oft kompensiert durch Produkte, die versuchen, die Ungenauigkeit zu kompensieren. Die Immaterialit\xe4t von Software wird dazu genutzt, so breit und flexibel zu implementieren, dass auch noch unbekannte oder schwammige Anforderungen quasi schon im vorauseilenden Gehorsam erf\xfcllt werden."),(0,i.kt)("li",{parentName:"ul"},"St\xe4ndig wechselnde Anforderungen werden im Produkt m\xf6glichst schnell nachgef\xfchrt, weil das dank seiner Immaterialit\xe4t m\xf6glich ist.")),(0,i.kt)("p",null,"Langfristig ist solches Verhalten allerdings kontraproduktiv:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Der vorauseilende Gehorsam f\xfchrt zu Breite und Flexibilit\xe4t, die nicht wirklich gebraucht werden. Er realisiert Features, die keine Anwendung finden."),(0,i.kt)("li",{parentName:"ul"},"Schnelle Umbauten an Software aufgrund wechselnder Anforderungen f\xfchren zu Qualit\xe4tserosionen im Code. Software ist zwar immateriell und flexibel \u2013 aber nicht jede Softwarestruktur ist evolvierbar oder auch nur verst\xe4ndlich.")),(0,i.kt)("p",null,"Unklare und wechselnde Anforderungssituationen vor dem Hintergrund der hohen grunds\xe4tzlichen Flexibilit\xe4t von Software f\xfchren schnell zu unn\xf6tigen Aufw\xe4nden und spr\xf6dem Code. Eine gro\xdfe Anzahl von Projekten, die ihre Budgetgrenzen gesprengt haben, und eine noch gr\xf6\xdfere Zahl von Projekten, die schon nach wenigen Jahren unwartbar geworden sind, sind daf\xfcr beredtes Zeugnis."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/Clean%20Code%20Developer"},"CCD")," als professionelle Softwareentwickler sehen es als ihre Pflicht, sich solcher Entwicklung jeden Tag entgegen zu stemmen. Angesichts der nicht zu leugnenden Natur von Software \u2013 sie ist und bleibt immateriell -, liegt der Ansatz daf\xfcr beim Umgang mit den Anforderungen. Das ist der Ursprung des YAGNI-Prinzips."),(0,i.kt)("p",null,"Das YAGNI-Prinzip ist wie ein scharfes Messer: Wer sie anwendet, schneidet ein Problem in kleine W\xfcrfel des unmittelbar N\xf6tigen. Nach dem YAGNI-Prinzip wird nur das unzweifelhaft und unmittelbar Nutzbringende implementiert. Alles andere\u2026 nun, das kommt sp\xe4ter. Insofern geht YAGNI Hand in Hand mit der Regel \u201eEntscheide so sp\xe4t wie m\xf6glich\u201c des\xa0",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Lean_software_development#Decide_as_late_as_possible"},"Lean Software Development"),"."),(0,i.kt)("p",null,"Das YAGNI-Prinzip ist relevant auf allen Ebenen der Softwareentwicklung und in allen Phasen. Wann immer Sie sich Fragen \u201eSollte ich diesen Aufwand wirklich treiben?\u201c oder \u201eBrauchen wir das wirklich?\u201c \u2013 und sei es auch nur ganz versch\xe4mt und leise im Hinterkopf -, dann ist das ein Anwendungsfall f\xfcr das YAGNI-Prinzip. Es besagt: Wenn im Zweifel, entscheide dich gegen den Aufwand."),(0,i.kt)("p",null,"Das klingt leicht, ist aber schwer. Daher auch die h\xe4ufigen Zuwiderhandlungen. Es gibt viele Kr\xe4fte, die der Entscheidung gegen einen Aufwand widersprechen. \u201eAch, das ist doch gar nicht soviel Aufwand\u201c oder \u201eWenn wir jetzt nicht vorausschauen, dann k\xf6nnen wir in Zukunft nicht mehr anders\u201c sind nur zwei naheliegende Begr\xfcndungen f\xfcr Aufwand, auch wenn Zweifel an seinem Nutzen bestehen. Das betrifft architektonische Entscheidungen (z.B. Soll schon mit einer verteilten Architektur begonnen werden, auch wenn die heutige Last sie noch nicht br\xe4uchte?) wie lokale Entscheidungen (z.B. Soll der Algorithmus schon jetzt optimiert werden, auch wenn er im Augenblick noch keine Performanceprobleme macht?)."),(0,i.kt)("p",null,"Der Kunde bezahlt nur f\xfcr unmittelbaren Nutzen. Was er heute nicht klar spezifizieren kann, nutzt ihm nicht. Es in der Implementation voraussehen zu wollen, investiert also Aufwand ohne Nutzen zu generieren. Wenn der Kunde sp\xe4ter einmal genauer wei\xdf, was er will, dann \u2013 und nicht fr\xfcher! \u2013 ist es Zeit, seinem Willen nachzukommen. Wo immer aber ein Projekt versucht, diesen Willen vorwegzunehmen riskiert es, von der morgigen Willensrealit\xe4t des Kunden widerlegt zu werden. Ein Feature \u2013 funktional oder nicht-funktional -, das heute ohne klare Anforderung implementiert wird, interessiert den Kunden morgen vielleicht schon nicht mehr. Oder es ist ihm nicht mehr so wichtig wie ein anderes Feature."),(0,i.kt)("p",null,"Das bedeutet f\xfcr die Softwareentwicklung:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ausschlie\xdflich klare Anforderungen implementieren."),(0,i.kt)("li",{parentName:"ul"},"Der Kunde priorisiert seine klaren Anforderungen."),(0,i.kt)("li",{parentName:"ul"},"Die klaren Anforderungen in der Reihenfolge ihrer Priorisierung umsetzen."),(0,i.kt)("li",{parentName:"ul"},"Entwicklungsprozess und Codestruktur im Gro\xdfen und Kleinen so aufsetzen, dass keine Angst aufkommt, sich \xe4ndernde und neue Anforderungen zu realisieren.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/Clean%20Code%20Developer"},"CCD")," als professionelle Entwickler kommunizieren diese Vorgehensweise unmissverst\xe4ndlich dem Kunden gegen\xfcber. Dadurch werden sie:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"servicewillig, denn sie m\xfcssen dem Kunden keine klare Anforderung abschlagen"),(0,i.kt)("li",{parentName:"ul"},"verantwortungsbewusst, weil sie das Budget nur f\xfcr klar formulierten Nutzen einsetzen"),(0,i.kt)("li",{parentName:"ul"},"besch\xfctzend dem Code gegen\xfcber, weil sie ihn gegen \xdcberladung mit letztlich Unn\xf6tigem bewahren")),(0,i.kt)("p",null,"YAGNI ist deshalb nicht nur ein Prinzip, das jeder Entwickler befolgen soll, sondern auch ein Prinzip f\xfcr Projekte und Teams, also auf Organisationsebene. YAGNI ist immer in Anschlag zu bringen, genauso wie ",(0,i.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/DRY"},"DRY"),". Wenn im Zweifel, dann verschiebe die Entscheidung falls m\xf6glich. Ansonsten entscheide dich gegen den Aufwand. Das entspannt und entschlackt und f\xfchrt schneller zum Erfolg."))}h.isMDXComponent=!0}}]);