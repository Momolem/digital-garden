"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[8518],{60638:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=s(85893),a=s(11151);const i={title:"Template Method",aliases:null,tags:["cleancode/designpatterns"]},o="Template Method",l={id:"main/CleanCode/DesignPatterns/Template Method",title:"Template Method",description:"Intent",source:"@site/docs/main/CleanCode/DesignPatterns/Template Method.md",sourceDirName:"main/CleanCode/DesignPatterns",slug:"/main/CleanCode/DesignPatterns/Template Method",permalink:"/docs/main/CleanCode/DesignPatterns/Template Method",draft:!1,unlisted:!1,tags:[{label:"cleancode/designpatterns",permalink:"/docs/tags/cleancode-designpatterns"}],version:"current",frontMatter:{title:"Template Method",aliases:null,tags:["cleancode/designpatterns"]},sidebar:"cs",previous:{title:"Strategy",permalink:"/docs/main/CleanCode/DesignPatterns/Strategy"},next:{title:"Visitor",permalink:"/docs/main/CleanCode/DesignPatterns/Visitor"}},r={},d=[{value:"Intent",id:"intent",level:2},{value:"Problem",id:"problem",level:2},{value:"\xa0Solution",id:"solution",level:2},{value:"\xa0Real-World Analogy",id:"real-world-analogy",level:2},{value:"\xa0Structure",id:"structure",level:2},{value:"\xa0Pseudocode",id:"pseudocode",level:2},{value:"Applicability",id:"applicability",level:2},{value:"How to Implement",id:"how-to-implement",level:2},{value:"Pro and  Cons",id:"pro-and--cons",level:2},{value:"Relations with Other Patterns",id:"relations-with-other-patterns",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"template-method",children:"Template Method"}),"\n",(0,n.jsx)(t.h2,{id:"intent",children:"Intent"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Template Method"}),"\xa0is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its\xa0structure."]}),"\n",(0,n.jsx)(t.h2,{id:"problem",children:"Problem"}),"\n",(0,n.jsx)(t.p,{children:"Imagine that you\u2019re creating a data mining application that analyzes corporate documents. Users feed the app documents in various formats (PDF, DOC, CSV), and it tries to extract meaningful data from these docs in a uniform format."}),"\n",(0,n.jsx)(t.p,{children:"The first version of the app could work only with DOC files. In the following version, it was able to support CSV files. A month later, you \u201ctaught\u201d it to extract data from PDF files."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"cleancode62",src:s(79568).Z+"",width:"620",height:"460"})}),"\n",(0,n.jsx)(t.p,{children:"Data mining classes contained a lot of duplicate\xa0code."}),"\n",(0,n.jsx)(t.p,{children:"At some point, you noticed that all three classes have a lot of similar code. While the code for dealing with various data formats was entirely different in all classes, the code for data processing and analysis is almost identical. Wouldn\u2019t it be great to get rid of the code duplication, leaving the algorithm structure intact?"}),"\n",(0,n.jsx)(t.p,{children:"There was another problem related to client code that used these classes. It had lots of conditionals that picked a proper course of action depending on the class of the processing object. If all three processing classes had a common interface or a base class, you\u2019d be able to eliminate the conditionals in client code and use polymorphism when calling methods on a processing object."}),"\n",(0,n.jsx)(t.h2,{id:"solution",children:"\xa0Solution"}),"\n",(0,n.jsxs)(t.p,{children:["The Template Method pattern suggests that you break down an algorithm into a series of steps, turn these steps into methods, and put a series of calls to these methods inside a single\xa0",(0,n.jsx)(t.em,{children:"template method."}),"\xa0The steps may either be\xa0",(0,n.jsx)(t.code,{children:"abstract"}),", or have some default implementation. To use the algorithm, the client is supposed to provide its own subclass, implement all abstract steps, and override some of the optional ones if needed (but not the template method itself)."]}),"\n",(0,n.jsx)(t.p,{children:"Let\u2019s see how this will play out in our data mining app. We can create a base class for all three parsing algorithms. This class defines a template method consisting of a series of calls to various document-processing steps."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"cleancode22",src:s(97859).Z+"",width:"600",height:"420"})}),"\n",(0,n.jsx)(t.p,{children:"Template method breaks the algorithm into steps, allowing subclasses to override these steps but not the actual\xa0method."}),"\n",(0,n.jsxs)(t.p,{children:["At first, we can declare all steps\xa0",(0,n.jsx)(t.code,{children:"abstract"}),", forcing the subclasses to provide their own implementations for these methods. In our case, subclasses already have all necessary implementations, so the only thing we might need to do is adjust signatures of the methods to match the methods of the superclass."]}),"\n",(0,n.jsx)(t.p,{children:"Now, let\u2019s see what we can do to get rid of the duplicate code. It looks like the code for opening/closing files and extracting/parsing data is different for various data formats, so there\u2019s no point in touching those methods. However, implementation of other steps, such as analyzing the raw data and composing reports, is very similar, so it can be pulled up into the base class, where subclasses can share that code."}),"\n",(0,n.jsx)(t.p,{children:"As you can see, we\u2019ve got two types of steps:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"abstract steps"}),"\xa0must be implemented by every subclass"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"optional steps"}),"\xa0already have some default implementation, but still can be overridden if needed"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["There\u2019s another type of step, called\xa0",(0,n.jsx)(t.em,{children:"hooks"}),". A hook is an optional step with an empty body. A template method would work even if a hook isn\u2019t overridden. Usually, hooks are placed before and after crucial steps of algorithms, providing subclasses with additional extension points for an algorithm."]}),"\n",(0,n.jsx)(t.h2,{id:"real-world-analogy",children:"\xa0Real-World Analogy"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"cleancode1",src:s(48524).Z+"",width:"590",height:"340"})}),"\n",(0,n.jsx)(t.p,{children:"A typical architectural plan can be slightly altered to better fit the client\u2019s\xa0needs."}),"\n",(0,n.jsx)(t.p,{children:"The template method approach can be used in mass housing construction. The architectural plan for building a standard house may contain several extension points that would let a potential owner adjust some details of the resulting house."}),"\n",(0,n.jsx)(t.p,{children:"Each building step, such as laying the foundation, framing, building walls, installing plumbing and wiring for water and electricity,\xa0etc., can be slightly changed to make the resulting house a little bit different from others."}),"\n",(0,n.jsx)(t.h2,{id:"structure",children:"\xa0Structure"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"cleancode15",src:s(1362).Z+"",width:"340",height:"380"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["The\xa0",(0,n.jsx)(t.strong,{children:"Abstract Class"}),"\xa0declares methods that act as steps of an algorithm, as well as the actual template method which calls these methods in a specific order. The steps may either be declared\xa0",(0,n.jsx)(t.code,{children:"abstract"}),"\xa0or have some default implementation."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Concrete Classes"}),"\xa0can override all of the steps, but not the template method itself."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"pseudocode",children:"\xa0Pseudocode"}),"\n",(0,n.jsxs)(t.p,{children:["In this example, the\xa0",(0,n.jsx)(t.strong,{children:"Template Method"}),"\xa0pattern provides a \u201cskeleton\u201d for various branches of artificial intelligence in a simple strategy video game."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"cleancode10",src:s(99317).Z+"",width:"430",height:"430"})}),"\n",(0,n.jsx)(t.p,{children:"AI classes of a simple video\xa0game."}),"\n",(0,n.jsx)(t.p,{children:"All races in the game have almost the same types of units and buildings. Therefore you can reuse the same AI structure for various races, while being able to override some of the details. With this approach, you can override the orcs\u2019 AI to make it more aggressive, make humans more defense-oriented, and make monsters unable to build anything. Adding a new race to the game would require creating a new AI subclass and overriding the default methods declared in the base AI class."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:"// The abstract class defines a template method that contains a\n// skeleton of some algorithm composed of calls, usually to\n// abstract primitive operations. Concrete subclasses implement\n// these operations, but leave the template method itself\n// intact.\nclass GameAI is\n    // The template method defines the skeleton of an algorithm.\n    method turn() is\n        collectResources()\n        buildStructures()\n        buildUnits()\n        attack()\n\n    // Some of the steps may be implemented right in a base\n    // class.\n    method collectResources() is\n        foreach (s in this.builtStructures) do\n            s.collect()\n\n    // And some of them may be defined as abstract.\n    abstract method buildStructures()\n    abstract method buildUnits()\n\n    // A class can have several template methods.\n    method attack() is\n        enemy = closestEnemy()\n        if (enemy == null)\n            sendScouts(map.center)\n        else\n            sendWarriors(enemy.position)\n\n    abstract method sendScouts(position)\n    abstract method sendWarriors(position)\n\n// Concrete classes have to implement all abstract operations of\n// the base class but they must not override the template method\n// itself.\nclass OrcsAI extends GameAI is\n    method buildStructures() is\n        if (there are some resources) then\n            // Build farms, then barracks, then stronghold.\n\n    method buildUnits() is\n        if (there are plenty of resources) then\n            if (there are no scouts)\n                // Build peon, add it to scouts group.\n            else\n                // Build grunt, add it to warriors group.\n\n    // ...\n\n    method sendScouts(position) is\n        if (scouts.length > 0) then\n            // Send scouts to position.\n\n    method sendWarriors(position) is\n        if (warriors.length > 5) then\n            // Send warriors to position.\n\n// Subclasses can also override some operations with a default\n// implementation.\nclass MonstersAI extends GameAI is\n    method collectResources() is\n        // Monsters don't collect resources.\n\n    method buildStructures() is\n        // Monsters don't build structures.\n\n    method buildUnits() is\n        // Monsters don't build units.\n\n"})}),"\n",(0,n.jsx)(t.h2,{id:"applicability",children:"Applicability"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Use the Template Method pattern when you want to let clients extend only particular steps of an algorithm, but not the whole algorithm or its structure."}),"\nThe Template Method lets you turn a monolithic algorithm into a series of individual steps which can be easily extended by subclasses while keeping intact the structure defined in a superclass."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Use the pattern when you have several classes that contain almost identical algorithms with some minor differences. As a result, you might need to modify all classes when the algorithm changes."}),"\nWhen you turn such an algorithm into a template method, you can also pull up the steps with similar implementations into a superclass, eliminating code duplication. Code that varies between subclasses can remain in subclasses."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"how-to-implement",children:"How to Implement"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Analyze the target algorithm to see whether you can break it into steps. Consider which steps are common to all subclasses and which ones will always be unique."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Create the abstract base class and declare the template method and a set of abstract methods representing the algorithm\u2019s steps. Outline the algorithm\u2019s structure in the template method by executing corresponding steps. Consider making the template method\xa0",(0,n.jsx)(t.code,{children:"final"}),"\xa0to prevent subclasses from overriding it."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"It\u2019s okay if all the steps end up being abstract. However, some steps might benefit from having a default implementation. Subclasses don\u2019t have to implement those methods."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Think of adding hooks between the crucial steps of the algorithm."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["For each variation of the algorithm, create a new concrete subclass. It\xa0",(0,n.jsx)(t.em,{children:"must"}),"\xa0implement all of the abstract steps, but\xa0",(0,n.jsx)(t.em,{children:"may"}),"\xa0also override some of the optional ones."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"pro-and--cons",children:"Pro and  Cons"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Pros"}),(0,n.jsx)(t.th,{children:"Cons"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"You can let clients override only certain parts of a large algorithm, making them less affected by changes that happen to other parts of the algorithm."}),(0,n.jsx)(t.td,{children:"Some clients may be limited by the provided skeleton of an algorithm."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"You can pull the duplicate code into a superclass."}),(0,n.jsxs)(t.td,{children:["You might violate the ",(0,n.jsx)(t.a,{href:"/docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Liskov%20Substitution%20Principle",children:"Liskov Substitution Principle"})," by suppressing a default step implementation via a subclass."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Template methods tend to be harder to maintain the more steps they have."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"relations-with-other-patterns",children:"Relations with Other Patterns"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Factory",children:"Factory"})," Method is a specialization of Template Method. At the same time, a ",(0,n.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Factory",children:"Factory"})," Method may serve as a step in a large Template Method."]}),"\n",(0,n.jsxs)(t.li,{children:["Template Method is based on inheritance: it lets you alter parts of an algorithm by extending those parts in subclasses. ",(0,n.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Strategy",children:"Strategy"})," is based on composition: you can alter parts of the object\u2019s behavior by supplying it with different strategies that correspond to that behavior. Template Method works at the class level, so it\u2019s static. ",(0,n.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Strategy",children:"Strategy"})," works on the object level, letting you switch behaviors at runtime."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},48524:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/cleancode1-76bce47b6897cd9fdca7f9db235110f3.webp"},99317:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/cleancode10-b84d146566ca8a3da42eb565836ceadc.webp"},1362:(e,t,s)=>{s.d(t,{Z:()=>n});const n="data:image/webp;base64,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"},97859:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/cleancode22-8bbcbacb67a3f478b7e6539bf29ef717.webp"},79568:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/cleancode62-f3abcb4f6e2204f759970a21d65766d1.webp"},11151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>o});var n=s(67294);const a={},i=n.createContext(a);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);