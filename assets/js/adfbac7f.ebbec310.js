"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9630],{4137:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,u=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(u,i(i({ref:t},h),{},{components:n})):a.createElement(u,i({ref:t},h))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:o,i[1]=r;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=n(7462),o=(n(7294),n(4137));const l={title:"Singleton",aliases:[]},i=void 0,r={unversionedId:"main/CleanCode/Singleton",id:"main/CleanCode/Singleton",title:"Singleton",description:"tags: #cleancode/designpatterns",source:"@site/docs/main/CleanCode/Singleton.md",sourceDirName:"main/CleanCode",slug:"/main/CleanCode/Singleton",permalink:"/docs/main/CleanCode/Singleton",draft:!1,tags:[],version:"current",frontMatter:{title:"Singleton",aliases:[]},sidebar:"main",previous:{title:"Single Responsibility Principle",permalink:"/docs/main/CleanCode/Single Responsibility Principle"},next:{title:"Source Code Conventions",permalink:"/docs/main/CleanCode/Source Code Conventions"}},s={},c=[{value:"Intent",id:"intent",level:2},{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2},{value:"Real-World Analogy",id:"real-world-analogy",level:2},{value:"Structure",id:"structure",level:2},{value:"Pseudocode",id:"pseudocode",level:2},{value:"Applicability",id:"applicability",level:2},{value:"How to Implement",id:"how-to-implement",level:2},{value:"Pro and  Cons",id:"pro-and--cons",level:2},{value:"Relationship with Other Patterns",id:"relationship-with-other-patterns",level:2}],h={toc:c},d="wrapper";function p(e){let{components:t,...l}=e;return(0,o.kt)(d,(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"tags: #cleancode/designpatterns "),(0,o.kt)("h1",{id:"singleton"},"Singleton"),(0,o.kt)("h2",{id:"intent"},"Intent"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Singleton"),"\xa0is a ",(0,o.kt)("a",{parentName:"p",href:"/docs/main/CleanCode/Design%20Patterns#Creational%7Ccreational%20design%20pattern"})," that lets you ensure that a class has ",(0,o.kt)("strong",{parentName:"p"},"only one instance"),", while providing a global access point to this\xa0instance."),(0,o.kt)("h2",{id:"problem"},"Problem"),(0,o.kt)("p",null,"The Singleton pattern solves two problems at the same time, violating the\xa0",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"/docs/main/CleanCode/Single%20Responsibility%20Principle"},"Single Responsibility Principle")),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Ensure that a class has just a single instance"),". Why would anyone want to control how many instances a class has? The most common reason for this is to control access to some shared resource\u2014for example, a database or a file."),(0,o.kt)("p",{parentName:"li"},"Here\u2019s how it works: imagine that you created an object, but after a while decided to create a new one. Instead of receiving a fresh object, you\u2019ll get the one you already created."),(0,o.kt)("p",{parentName:"li"},"Note that this behavior is impossible to implement with a regular constructor since a constructor call\xa0",(0,o.kt)("strong",{parentName:"p"},"must"),"\xa0always return a new object by design."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cleancode11",src:n(2412).Z,width:"600",height:"300"})),(0,o.kt)("p",null,"Clients may not even realize that they\u2019re working with the same object all the\xa0time."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Provide a global access point to that instance"),". Remember those global variables that you (all right, me) used to store some essential objects? While they\u2019re very handy, they\u2019re also very unsafe since any code can potentially overwrite the contents of those variables and crash the app."),(0,o.kt)("p",{parentName:"li"},"Just like a global variable, the Singleton pattern lets you access some object from anywhere in the program. However, it also protects that instance from being overwritten by other code."),(0,o.kt)("p",{parentName:"li"},"There\u2019s another side to this problem: you don\u2019t want the code that solves problem #1 to be scattered all over your program. It\u2019s much better to have it within one class, especially if the rest of your code already depends on it."))),(0,o.kt)("p",null,"Nowadays, the Singleton pattern has become so popular that people may call something a\xa0",(0,o.kt)("em",{parentName:"p"},"singleton"),"\xa0even if it solves just one of the listed problems."),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,"All implementations of the Singleton have these two steps in common:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make the default constructor private, to prevent other objects from using the\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"new"),"\xa0operator with the Singleton class."),(0,o.kt)("li",{parentName:"ul"},"Create a static creation method that acts as a constructor. Under the hood, this method calls the private constructor to create an object and saves it in a static field. All following calls to this method return the cached object.")),(0,o.kt)("p",null,"If your code has access to the Singleton class, then it\u2019s able to call the Singleton\u2019s static method. So whenever that method is called, the same object is always returned."),(0,o.kt)("h2",{id:"real-world-analogy"},"Real-World Analogy"),(0,o.kt)("p",null,"The government is an excellent example of the Singleton pattern. A country can have only one official government. Regardless of the personal identities of the individuals who form governments, the title, \u201cThe Government of X\u201d, is a global point of access that identifies the group of people in charge."),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cleancode112",src:n(7498).Z,width:"430",height:"290"})),(0,o.kt)("h2",{id:"pseudocode"},"Pseudocode"),(0,o.kt)("p",null,"In this example, the database connection class acts as a\xa0",(0,o.kt)("strong",{parentName:"p"},"Singleton"),". This class doesn\u2019t have a public constructor, so the only way to get its object is to call the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"getInstance"),"\xa0method. This method caches the first created object and returns it in all subsequent calls."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// The Database class defines the `getInstance` method that lets\n// clients access the same instance of a database connection\n// throughout the program.\nclass Database is\n    // The field for storing the singleton instance should be\n    // declared static.\n    private static field instance: Database\n\n    // The singleton\'s constructor should always be private to\n    // prevent direct construction calls with the `new`\n    // operator.\n    private constructor Database() is\n        // Some initialization code, such as the actual\n        // connection to a database server.\n        // ...\n\n    // The static method that controls access to the singleton\n    // instance.\n    public static method getInstance() is\n        if (Database.instance == null) then\n            acquireThreadLock() and then\n                // Ensure that the instance hasn\'t yet been\n                // initialized by another thread while this one\n                // has been waiting for the lock\'s release.\n                if (Database.instance == null) then\n                    Database.instance = new Database()\n        return Database.instance\n\n    // Finally, any singleton should define some business logic\n    // which can be executed on its instance.\n    public method query(sql) is\n        // For instance, all database queries of an app go\n        // through this method. Therefore, you can place\n        // throttling or caching logic here.\n        // ...\n\nclass Application is\n    method main() is\n        Database foo = Database.getInstance()\n        foo.query("SELECT ...")\n        // ...\n        Database bar = Database.getInstance()\n        bar.query("SELECT ...")\n        // The variable `bar` will contain the same object as\n        // the variable `foo`.\n')),(0,o.kt)("h2",{id:"applicability"},"Applicability"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\xa0",(0,o.kt)("strong",{parentName:"p"},"Use the Singleton pattern when a class in your program should have just a single instance available to all clients; for example, a single database object shared by different parts of the program."),"\n\xa0The Singleton pattern disables all other means of creating objects of a class except for the special creation method. This method either creates a new object or returns an existing one if it has already been created.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Use the Singleton pattern when you need stricter control over global variables."),"\nUnlike global variables, the Singleton pattern guarantees that there\u2019s just one instance of a class. Nothing, except for the Singleton class itself, can replace the cached instance."),(0,o.kt)("p",{parentName:"li"},"Note that you can always adjust this limitation and allow creating any number of Singleton instances. The only piece of code that needs changing is the body of the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"getInstance"),"\xa0method."))),(0,o.kt)("h2",{id:"how-to-implement"},"How to Implement"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a private static field to the class for storing the singleton instance."),(0,o.kt)("li",{parentName:"ol"},"Declare a public static creation method for getting the singleton instance."),(0,o.kt)("li",{parentName:"ol"},"Implement \u201clazy initialization\u201d inside the static method. It should create a new object on its first call and put it into the static field. The method should always return that instance on all subsequent calls."),(0,o.kt)("li",{parentName:"ol"},"Make the constructor of the class private. The static method of the class will still be able to call the constructor, but not the other objects."),(0,o.kt)("li",{parentName:"ol"},"Go over the client code and replace all direct calls to the singleton\u2019s constructor with calls to its static creation method.")),(0,o.kt)("h2",{id:"pro-and--cons"},"Pro and  Cons"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Pros"),(0,o.kt)("th",{parentName:"tr",align:null},"Cons"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"You can be sure that a class has only a single instance."),(0,o.kt)("td",{parentName:"tr",align:null},"Violates the\xa0",(0,o.kt)("em",{parentName:"td"},(0,o.kt)("a",{parentName:"em",href:"/docs/main/CleanCode/Single%20Responsibility%20Principle"},"Single Responsibility Principle")),". The pattern solves two problems at the time.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"You gain a global access point to that instance."),(0,o.kt)("td",{parentName:"tr",align:null},"The Singleton pattern can mask bad design, for instance, when the components of the program know too much about each other.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"The singleton object is initialized only when it\u2019s requested for the first time."),(0,o.kt)("td",{parentName:"tr",align:null},"The Singleton pattern can mask bad design, for instance, when the components of the program know too much about each other.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"The Singleton pattern can mask bad design, for instance, when the components of the program know too much about each other.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"The pattern requires special treatment in a multithreaded environment so that multiple threads won\u2019t create a singleton object several times.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"It may be difficult to ",(0,o.kt)("a",{parentName:"td",href:"/docs/main/CleanCode/Unit%20Test"},"Unit Test")," the client code of the Singleton because many test frameworks rely on inheritance when producing mock objects. Since the constructor of the singleton class is private and overriding static methods is impossible in most languages, you will need to think of a creative way to mock the singleton. Or just don\u2019t write the tests. Or don\u2019t use the Singleton pattern.")))),(0,o.kt)("h2",{id:"relationship-with-other-patterns"},"Relationship with Other Patterns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A\xa0",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Facade"},"Facade"),"\xa0class can often be transformed into a\xa0",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Singleton"},"Singleton"),"\xa0since a single facade object is sufficient in most cases."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Flyweight"},"Flyweight"),"\xa0would resemble\xa0",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Singleton"},"Singleton"),"\xa0if you somehow managed to reduce all shared states of the objects to just one flyweight object. But there are two fundamental differences between these patterns:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"There should be only one Singleton instance, whereas a\xa0",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("a",{parentName:"em",href:"/docs/main/CleanCode/Flyweight"},"Flyweight")),"\xa0class can have multiple instances with different intrinsic states."),(0,o.kt)("li",{parentName:"ol"},"The\xa0",(0,o.kt)("em",{parentName:"li"},"Singleton"),"\xa0object can be mutable. ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Flyweight"},"Flyweight")," objects are immutable."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Abstract%20Factory"},"Abstract Factory"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Builder"},"Builder"),"\xa0and\xa0",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Prototype"},"Prototype"),"\xa0can all be implemented as\xa0",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Singleton"},"Singleton"),".")))}p.isMDXComponent=!0},2412:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cleancode11-05a9b6c9207dceb1577f50dbfacf3249.webp"},7498:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,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"}}]);