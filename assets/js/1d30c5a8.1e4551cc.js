"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8011],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(a),u=o,m=p["".concat(s,".").concat(u)]||p[u]||h[u]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2949:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=a(7462),o=(a(7294),a(4137));const r={title:"Abstract Factory",aliases:[]},i=void 0,c={unversionedId:"main/CleanCode/Abstract Factory",id:"main/CleanCode/Abstract Factory",title:"Abstract Factory",description:"tags:  #cleancode/designpatterns",source:"@site/docs/main/CleanCode/Abstract Factory.md",sourceDirName:"main/CleanCode",slug:"/main/CleanCode/Abstract Factory",permalink:"/docs/main/CleanCode/Abstract Factory",draft:!1,tags:[],version:"current",frontMatter:{title:"Abstract Factory",aliases:[]},sidebar:"main",previous:{title:"Introduction",permalink:"/docs/main/Introduction"},next:{title:"Adapter",permalink:"/docs/main/CleanCode/Adapter"}},s={},l=[{value:"Intent",id:"intent",level:2},{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2},{value:"Structure",id:"structure",level:2},{value:"Pseudocode",id:"pseudocode",level:2},{value:"Applicability",id:"applicability",level:2},{value:"How to Implement",id:"how-to-implement",level:2},{value:"Pro and  Cons",id:"pro-and--cons",level:2},{value:"Relations with Other Patterns",id:"relations-with-other-patterns",level:2}],d={toc:l},p="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"tags:  #cleancode/designpatterns "),(0,o.kt)("h1",{id:"abstract-factory"},"Abstract Factory"),(0,o.kt)("h2",{id:"intent"},"Intent"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Abstract Factory"),"\xa0is a creational design pattern that lets you produce families of related objects without specifying their concrete\xa0classes."),(0,o.kt)("h2",{id:"problem"},"Problem"),(0,o.kt)("p",null,"Imagine that you\u2019re creating a furniture shop simulator. Your code consists of classes that represent:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A family of related products, say:\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Chair"),"\xa0+\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Sofa"),"\xa0+\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"CoffeeTable"),"."),(0,o.kt)("li",{parentName:"ol"},"Several variants of this family. For example, products\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Chair"),"\xa0+\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Sofa"),"\xa0+\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"CoffeeTable"),"\xa0are available in these variants:\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Modern"),",\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Victorian"),",\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"ArtDeco"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cleancode130",src:a(5408).Z,width:"420",height:"300"})),(0,o.kt)("p",null,"Product families and their\xa0variants."),(0,o.kt)("p",null,"You need a way to create individual furniture objects so that they match other objects of the same family. Customers get quite mad when they receive non-matching furniture."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cleancode94",src:a(2447).Z,width:"600",height:"300"})),(0,o.kt)("p",null,"A Modern-style sofa doesn\u2019t match Victorian-style\xa0chairs."),(0,o.kt)("p",null,"Also, you don\u2019t want to change existing code when adding new products or families of products to the program. Furniture vendors update their catalogs very often, and you wouldn\u2019t want to change the core code each time it happens."),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,"The first thing the Abstract Factory pattern suggests is to explicitly declare interfaces for each distinct product of the product family (e.g., chair, sofa or coffee table). Then you can make all variants of products follow those interfaces. For example, all chair variants can implement the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Chair"),"\xa0interface; all coffee table variants can implement the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"CoffeeTable"),"\xa0interface, and so on."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cleancode97",src:a(6337).Z,width:"420",height:"280"})),(0,o.kt)("p",null,"All variants of the same object must be moved to a single class\xa0hierarchy."),(0,o.kt)("p",null,"The next move is to declare the\xa0",(0,o.kt)("em",{parentName:"p"},"Abstract Factory"),"\u2014an interface with a list of creation methods for all products that are part of the product family (for example,\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"createChair"),",\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"createSofa"),"\xa0and\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"createCoffeeTable"),"). These methods must return\xa0",(0,o.kt)("strong",{parentName:"p"},"abstract"),"\xa0product types represented by the interfaces we extracted previously:\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Chair"),",\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Sofa"),",\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"CoffeeTable"),"\xa0and so on."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cleancode39",src:a(5400).Z,width:"640",height:"320"})),(0,o.kt)("p",null,"Each concrete factory corresponds to a specific product\xa0variant."),(0,o.kt)("p",null,"Now, how about the product variants? For each variant of a product family, we create a separate factory class based on the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractFactory"),"\xa0interface. A factory is a class that returns products of a particular kind. For example, the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"ModernFurnitureFactory"),"\xa0can only create\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"ModernChair"),",\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"ModernSofa"),"\xa0and\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"ModernCoffeeTable"),"\xa0objects."),(0,o.kt)("p",null,"The client code has to work with both factories and products via their respective abstract interfaces. This lets you change the type of a factory that you pass to the client code, as well as the product variant that the client code receives, without breaking the actual client code."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cleancode115",src:a(2965).Z,width:"600",height:"300"})),(0,o.kt)("p",null,"The client shouldn\u2019t care about the concrete class of the factory it works\xa0with."),(0,o.kt)("p",null,"Say the client wants a factory to produce a chair. The client doesn\u2019t have to be aware of the factory\u2019s class, nor does it matter what kind of chair it gets. Whether it\u2019s a Modern model or a Victorian-style chair, the client must treat all chairs in the same manner, using the abstract\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"Chair"),"\xa0interface. With this approach, the only thing that the client knows about the chair is that it implements the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"sitOn"),"\xa0method in some way. Also, whichever variant of the chair is returned, it\u2019ll always match the type of sofa or coffee table produced by the same factory object."),(0,o.kt)("p",null,"There\u2019s one more thing left to clarify: if the client is only exposed to the abstract interfaces, what creates the actual factory objects? Usually, the application creates a concrete factory object at the initialization stage. Just before that, the app must select the factory type depending on the configuration or the environment settings."),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cleancode119",src:a(4821).Z,width:"700",height:"450"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Abstract Products"),"\xa0declare interfaces for a set of distinct but related products which make up a product family."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Concrete Products"),"\xa0are various implementations of abstract products, grouped by variants. Each abstract product (chair/sofa) must be implemented in all given variants (Victorian/Modern)."),(0,o.kt)("li",{parentName:"ol"},"The\xa0",(0,o.kt)("strong",{parentName:"li"},"Abstract Factory"),"\xa0interface declares a set of methods for creating each of the abstract products."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Concrete Factories"),"\xa0implement creation methods of the abstract factory. Each concrete factory corresponds to a specific variant of products and creates only those product variants."),(0,o.kt)("li",{parentName:"ol"},"Although concrete factories instantiate concrete products, signatures of their creation methods must return corresponding\xa0",(0,o.kt)("em",{parentName:"li"},"abstract"),"\xa0products. This way the client code that uses a factory doesn\u2019t get coupled to the specific variant of the product it gets from a factory. The\xa0",(0,o.kt)("strong",{parentName:"li"},"Client"),"\xa0can work with any concrete factory/product variant, as long as it communicates with their objects via abstract interfaces.")),(0,o.kt)("h2",{id:"pseudocode"},"Pseudocode"),(0,o.kt)("p",null,"This example illustrates how the\xa0",(0,o.kt)("strong",{parentName:"p"},"Abstract Factory"),"\xa0pattern can be used for creating cross-platform UI elements without coupling the client code to concrete UI classes, while keeping all created elements consistent with a selected operating system."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cleancode93",src:a(9287).Z,width:"640",height:"450"})),(0,o.kt)("p",null,"The cross-platform UI classes\xa0example."),(0,o.kt)("p",null,"The same UI elements in a cross-platform application are expected to behave similarly, but look a little bit different under different operating systems. Moreover, it\u2019s your job to make sure that the UI elements match the style of the current operating system. You wouldn\u2019t want your program to render macOS controls when it\u2019s executed in Windows."),(0,o.kt)("p",null,"The Abstract Factory interface declares a set of creation methods that the client code can use to produce different types of UI elements. Concrete factories correspond to specific operating systems and create the UI elements that match that particular OS."),(0,o.kt)("p",null,"It works like this: when an application launches, it checks the type of the current operating system. The app uses this information to create a factory object from a class that matches the operating system. The rest of the code uses this factory to create UI elements. This prevents the wrong elements from being created."),(0,o.kt)("p",null,"With this approach, the client code doesn\u2019t depend on concrete classes of factories and UI elements as long as it works with these objects via their abstract interfaces. This also lets the client code support other factories or UI elements that you might add in the future."),(0,o.kt)("p",null,"As a result, you don\u2019t need to modify the client code each time you add a new variation of UI elements to your app. You just have to create a new factory class that produces these elements and slightly modify the app\u2019s initialization code so it selects that class when appropriate."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// The abstract factory interface declares a set of methods that\n// return different abstract products. These products are called\n// a family and are related by a high-level theme or concept.\n// Products of one family are usually able to collaborate among\n// themselves. A family of products may have several variants,\n// but the products of one variant are incompatible with the\n// products of another variant.\ninterface GUIFactory is\n    method createButton():Button\n    method createCheckbox():Checkbox\n\n// Concrete factories produce a family of products that belong\n// to a single variant. The factory guarantees that the\n// resulting products are compatible. Signatures of the concrete\n// factory\'s methods return an abstract product, while inside\n// the method a concrete product is instantiated.\nclass WinFactory implements GUIFactory is\n    method createButton():Button is\n        return new WinButton()\n    method createCheckbox():Checkbox is\n        return new WinCheckbox()\n\n// Each concrete factory has a corresponding product variant.\nclass MacFactory implements GUIFactory is\n    method createButton():Button is\n        return new MacButton()\n    method createCheckbox():Checkbox is\n        return new MacCheckbox()\n\n// Each distinct product of a product family should have a base\n// interface. All variants of the product must implement this\n// interface.\ninterface Button is\n    method paint()\n\n// Concrete products are created by corresponding concrete\n// factories.\nclass WinButton implements Button is\n    method paint() is\n        // Render a button in Windows style.\n\nclass MacButton implements Button is\n    method paint() is\n        // Render a button in macOS style.\n\n// Here\'s the base interface of another product. All products\n// can interact with each other, but proper interaction is\n// possible only between products of the same concrete variant.\ninterface Checkbox is\n    method paint()\n\nclass WinCheckbox implements Checkbox is\n    method paint() is\n        // Render a checkbox in Windows style.\n\nclass MacCheckbox implements Checkbox is\n    method paint() is\n        // Render a checkbox in macOS style.\n\n// The client code works with factories and products only\n// through abstract types: GUIFactory, Button and Checkbox. This\n// lets you pass any factory or product subclass to the client\n// code without breaking it.\nclass Application is\n    private field factory: GUIFactory\n    private field button: Button\n    constructor Application(factory: GUIFactory) is\n        this.factory = factory\n    method createUI() is\n        this.button = factory.createButton()\n    method paint() is\n        button.paint()\n\n// The application picks the factory type depending on the\n// current configuration or environment settings and creates it\n// at runtime (usually at the initialization stage).\nclass ApplicationConfigurator is\n    method main() is\n        config = readApplicationConfigFile()\n\n        if (config.OS == "Windows") then\n            factory = new WinFactory()\n        else if (config.OS == "Mac") then\n            factory = new MacFactory()\n        else\n            throw new Exception("Error! Unknown operating system.")\n\n        Application app = new Application(factory)\n')),(0,o.kt)("h2",{id:"applicability"},"Applicability"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Use the Abstract Factory when your code needs to work with various families of related products, but you don\u2019t want it to depend on the concrete classes of those products\u2014they might be unknown beforehand or you simply want to allow for future extensibility."),"\nThe Abstract Factory provides you with an interface for creating objects from each class of the product family. As long as your code creates objects via this interface, you don\u2019t have to worry about creating the wrong variant of a product which doesn\u2019t match the products already created by your app.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Consider implementing the Abstract Factory when you have a class with a set of\xa0",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Factory"},"Factory"),"\xa0that blur its primary responsibility."),(0,o.kt)("li",{parentName:"ul"},"In a well-designed program\xa0",(0,o.kt)("em",{parentName:"li"},"each class is responsible only for one thing"),". When a class deals with multiple product types, it may be worth extracting its factory methods into a stand-alone factory class or a full-blown Abstract Factory implementation.")))),(0,o.kt)("h2",{id:"how-to-implement"},"How to Implement"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Map out a matrix of distinct product types versus variants of these products."),(0,o.kt)("li",{parentName:"ol"},"Declare abstract product interfaces for all product types. Then make all concrete product classes implement these interfaces."),(0,o.kt)("li",{parentName:"ol"},"Declare the abstract factory interface with a set of creation methods for all abstract products."),(0,o.kt)("li",{parentName:"ol"},"Implement a set of concrete factory classes, one for each product variant."),(0,o.kt)("li",{parentName:"ol"},"Create factory initialization code somewhere in the app. It should instantiate one of the concrete factory classes, depending on the application configuration or the current environment. Pass this factory object to all classes that construct products."),(0,o.kt)("li",{parentName:"ol"},"Scan through the code and find all direct calls to product constructors. Replace them with calls to the appropriate creation method on the factory object.W")),(0,o.kt)("h2",{id:"pro-and--cons"},"Pro and  Cons"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Pros"),(0,o.kt)("th",{parentName:"tr",align:null},"Cons"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"You can be sure that the products you\u2019re getting from a factory are compatible with each other."),(0,o.kt)("td",{parentName:"tr",align:null},"The code may become more complicated than it should be, since a lot of new interfaces and classes are introduced along with the pattern.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"You avoid tight coupling between concrete products and client code."),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},(0,o.kt)("a",{parentName:"em",href:"/docs/main/CleanCode/Single%20Responsibility%20Principle"},"Single Responsibility Principle")),". You can extract the product creation code into one place, making the code easier to support."),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},(0,o.kt)("a",{parentName:"em",href:"/docs/main/CleanCode/Open%20Closed%20Principle"},"Open Closed Principle")),". You can introduce new variants of products without breaking existing client code."),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h2",{id:"relations-with-other-patterns"},"Relations with Other Patterns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Many designs start by using ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Factory"},"Factory")," Method (less complicated and more customizable via subclasses) and evolve toward ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Abstract%20Factory"},"Abstract Factory"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Prototype"},"Prototype"),", or ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Builder"},"Builder")," (more flexible, but more complicated)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Builder"},"Builder")," focuses on constructing complex objects step by step. ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Abstract%20Factory"},"Abstract Factory")," specializes in creating families of related objects. ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Abstract%20Factory"},"Abstract Factory")," returns the product immediately, whereas ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Builder"},"Builder")," lets you run some additional construction steps before fetching the product."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Abstract%20Factory"},"Abstract Factory")," classes are often based on a set of ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Factory"},"Factory")," Methods, but you can also use ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Prototype"},"Prototype")," to compose the methods on these classes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Abstract%20Factory"},"Abstract Factory")," can serve as an alternative to ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Facade"},"Facade")," when you only want to hide the way the subsystem objects are created from the client code."),(0,o.kt)("li",{parentName:"ul"},"You can use ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Abstract%20Factory"},"Abstract Factory")," along with ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Bridge"},"Bridge"),". This pairing is useful when some abstractions defined by ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Bridge"},"Bridge")," can only work with specific implementations. In this case, ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Abstract%20Factory"},"Abstract Factory")," can encapsulate these relations and hide the complexity from the client code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Abstract%20Factory"},"Abstract Factory"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Builder"},"Builder")," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Prototype"},"Prototype")," can all be implemented as ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Singleton"},"Singleton"),".")))}h.isMDXComponent=!0},2965:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cleancode115-9ec5baceb127fd71bfe3a5720ebb3df3.webp"},4821:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cleancode119-899a628dd0a9e853826787d47b4d222e.webp"},5408:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cleancode130-c55053d2afb95f87d195b8010b84e56c.webp"},5400:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cleancode39-5252a38d4e9bbe83d8bf9c40c71d7c09.webp"},9287:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cleancode93-819ed84335ab5844da231f86d2cbeac8.webp"},2447:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cleancode94-5b6d12cd8ed9356545f525be73fd12f6.webp"},6337:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/webp;base64,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"}}]);