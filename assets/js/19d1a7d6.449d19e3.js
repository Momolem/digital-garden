"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3681],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),u=o,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||r;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4902:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(7462),o=(a(7294),a(4137));const r={title:"Factory",aliases:[],tags:["cleancode/designpatterns"]},s="Factory",i={unversionedId:"main/CleanCode/Factory",id:"main/CleanCode/Factory",title:"Factory",description:"Intent",source:"@site/docs/main/CleanCode/Factory.md",sourceDirName:"main/CleanCode",slug:"/main/CleanCode/Factory",permalink:"/docs/main/CleanCode/Factory",draft:!1,tags:[{label:"cleancode/designpatterns",permalink:"/docs/tags/cleancode-designpatterns"}],version:"current",frontMatter:{title:"Factory",aliases:[],tags:["cleancode/designpatterns"]},sidebar:"main",previous:{title:"Facade",permalink:"/docs/main/CleanCode/Facade"},next:{title:"Favour Composition over Inheritance",permalink:"/docs/main/CleanCode/Favour Composition over Inheritance"}},l={},c=[{value:"Intent",id:"intent",level:2},{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2},{value:"Structure",id:"structure",level:2},{value:"Pseudocode",id:"pseudocode",level:2},{value:"Applicability",id:"applicability",level:2},{value:"How to Implement",id:"how-to-implement",level:2},{value:"Pro and  Cons",id:"pro-and--cons",level:2},{value:"Relations with Other Patterns",id:"relations-with-other-patterns",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"factory"},"Factory"),(0,o.kt)("h2",{id:"intent"},"Intent"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Factory Method")," is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be\xa0created."),(0,o.kt)("h2",{id:"problem"},"Problem"),(0,o.kt)("p",null,"Imagine that you\u2019re creating a logistics management application. The first version of your app can only handle transportation by trucks, so the bulk of your code lives inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"Truck")," class."),(0,o.kt)("p",null,"After a while, your app becomes pretty popular. Each day you receive dozens of requests from sea transportation companies to incorporate sea logistics into the app."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cleancode44",src:a(5141).Z,width:"600",height:"250"})),(0,o.kt)("p",null,"Adding a new class to the program isn\u2019t that simple if the rest of the code is already coupled to existing\xa0classes."),(0,o.kt)("p",null,"Great news, right? But how about the code? At present, most of your code is coupled to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Truck")," class. Adding ",(0,o.kt)("inlineCode",{parentName:"p"},"Ships")," into the app would require making changes to the entire codebase. Moreover, if later you decide to add another type of transportation to the app, you will probably need to make all of these changes again."),(0,o.kt)("p",null,"As a result, you will end up with pretty nasty code, riddled with conditionals that switch the app\u2019s behavior depending on the class of transportation objects."),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,"The Factory Method pattern suggests that you replace direct object construction calls (using the ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," operator) with calls to a special ",(0,o.kt)("em",{parentName:"p"},"factory")," method. Don\u2019t worry: the objects are still created via the ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," operator, but it\u2019s being called from within the factory method. Objects returned by a factory method are often referred to as ",(0,o.kt)("em",{parentName:"p"},"products.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cleancode36",src:a(651).Z,width:"620",height:"270"})),(0,o.kt)("p",null,"Subclasses can alter the class of objects being returned by the factory\xa0method."),(0,o.kt)("p",null,"At first glance, this change may look pointless: we just moved the constructor call from one part of the program to another. However, consider this: now you can override the factory method in a subclass and change the class of products being created by the method."),(0,o.kt)("p",null,"There\u2019s a slight limitation though: subclasses may return different types of products only if these products have a common base class or interface. Also, the factory method in the base class should have its return type declared as this interface."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cleancode9",src:a(3176).Z,width:"490",height:"250"})),(0,o.kt)("p",null,"All products must follow the same\xa0interface."),(0,o.kt)("p",null,"For example, both ",(0,o.kt)("inlineCode",{parentName:"p"},"Truck")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Ship")," classes should implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"Transport")," interface, which declares a method called ",(0,o.kt)("inlineCode",{parentName:"p"},"deliver"),". Each class implements this method differently: trucks deliver cargo by land, ships deliver cargo by sea. The factory method in the ",(0,o.kt)("inlineCode",{parentName:"p"},"RoadLogistics")," class returns truck objects, whereas the factory method in the ",(0,o.kt)("inlineCode",{parentName:"p"},"SeaLogistics")," class returns ships."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cleancode2",src:a(1578).Z,width:"640",height:"350"})),(0,o.kt)("p",null,"As long as all product classes implement a common interface, you can pass their objects to the client code without breaking\xa0it."),(0,o.kt)("p",null,"The code that uses the factory method (often called the ",(0,o.kt)("em",{parentName:"p"},"client")," code) doesn\u2019t see a difference between the actual products returned by various subclasses. The client treats all the products as abstract ",(0,o.kt)("inlineCode",{parentName:"p"},"Transport"),". The client knows that all transport objects are supposed to have the ",(0,o.kt)("inlineCode",{parentName:"p"},"deliver")," method, but exactly how it works isn\u2019t important to the client."),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cleancode90",src:a(9112).Z,width:"660",height:"380"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Product")," declares the interface, which is common to all objects that can be produced by the creator and its subclasses.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Concrete Products")," are different implementations of the product interface.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Creator")," class declares the factory method that returns new product objects. It\u2019s important that the return type of this method matches the product interface."),(0,o.kt)("p",{parentName:"li"},"You can declare the factory method as ",(0,o.kt)("inlineCode",{parentName:"p"},"abstract")," to force all subclasses to implement their own versions of the method. As an alternative, the base factory method can return some default product type."),(0,o.kt)("p",{parentName:"li"},"Note, despite its name, product creation is ",(0,o.kt)("strong",{parentName:"p"},"not")," the primary responsibility of the creator. Usually, the creator class already has some core business logic related to products. The factory method helps to decouple this logic from the concrete product classes. Here is an analogy: a large software development company can have a training department for programmers. However, the primary function of the company as a whole is still writing code, not producing programmers.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Concrete Creators")," override the base factory method so it returns a different type of product."),(0,o.kt)("p",{parentName:"li"},"Note that the factory method doesn\u2019t have to ",(0,o.kt)("strong",{parentName:"p"},"create")," new instances all the time. It can also return existing objects from a cache, an object pool, or another source."))),(0,o.kt)("h2",{id:"pseudocode"},"Pseudocode"),(0,o.kt)("p",null,"This example illustrates how the ",(0,o.kt)("strong",{parentName:"p"},"Factory Method")," can be used for creating cross-platform UI elements without coupling the client code to concrete UI classes."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cleancode118",src:a(725).Z,width:"640",height:"400"})),(0,o.kt)("p",null,"The cross-platform dialog\xa0example."),(0,o.kt)("p",null,"The base ",(0,o.kt)("inlineCode",{parentName:"p"},"Dialog")," class uses different UI elements to render its window. Under various operating systems, these elements may look a little bit different, but they should still behave consistently. A button in Windows is still a button in Linux."),(0,o.kt)("p",null,"When the factory method comes into play, you don\u2019t need to rewrite the logic of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dialog")," class for each operating system. If we declare a factory method that produces buttons inside the base ",(0,o.kt)("inlineCode",{parentName:"p"},"Dialog")," class, we can later create a subclass that returns Windows-styled buttons from the factory method. The subclass then inherits most of the code from the base class, but, thanks to the factory method, can render Windows-looking buttons on the screen."),(0,o.kt)("p",null,"For this pattern to work, the base ",(0,o.kt)("inlineCode",{parentName:"p"},"Dialog")," class must work with abstract buttons: a base class or an interface that all concrete buttons follow. This way the code within ",(0,o.kt)("inlineCode",{parentName:"p"},"Dialog")," remains functional, whichever type of buttons it works with."),(0,o.kt)("p",null,"Of course, you can apply this approach to other UI elements as well. However, with each new factory method you add to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dialog"),", you get closer to the ",(0,o.kt)("a",{parentName:"p",href:"https://refactoring.guru/design-patterns/abstract-factory"},"Abstract Factory")," pattern. Fear not, we\u2019ll talk about this pattern later."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"// The creator class declares the factory method that must\n// return an object of a product class. The creator's subclasses\n// usually provide the implementation of this method.\nclass Dialog is\n    // The creator may also provide some default implementation\n    // of the factory method.\n    abstract method createButton():Button\n\n    // Note that, despite its name, the creator's primary\n    // responsibility isn't creating products. It usually\n    // contains some core business logic that relies on product\n    // objects returned by the factory method. Subclasses can\n    // indirectly change that business logic by overriding the\n    // factory method and returning a different type of product\n    // from it.\n    method render() is\n        // Call the factory method to create a product object.\n        Button okButton = createButton()\n        // Now use the product.\n        okButton.onClick(closeDialog)\n        okButton.render()\n\n// Concrete creators override the factory method to change the\n// resulting product's type.\nclass WindowsDialog extends Dialog is\n    method createButton():Button is\n        return new WindowsButton()\n\nclass WebDialog extends Dialog is\n    method createButton():Button is\n        return new HTMLButton()\n\n// The product interface declares the operations that all\n// concrete products must implement.\ninterface Button is\n    method render()\n    method onClick(f)\n\n// Concrete products provide various implementations of the\n// product interface.\nclass WindowsButton implements Button is\n    method render(a, b) is\n        // Render a button in Windows style.\n    method onClick(f) is\n        // Bind a native OS click event.\n\nclass HTMLButton implements Button is\n    method render(a, b) is\n        // Return an HTML representation of a button.\n    method onClick(f) is\n        // Bind a web browser click event.\n\nclass Application is\n    field dialog: Dialog\n\n    // The application picks a creator's type depending on the\n    // current configuration or environment settings.\n    method initialize() is\n        config = readApplicationConfigFile()\n\n        if (config.OS == \"Windows\") then\n            dialog = new WindowsDialog()\n        else if (config.OS == \"Web\") then\n            dialog = new WebDialog()\n        else\n            throw new Exception(\"Error! Unknown operating system.\")\n\n    // The client code works with an instance of a concrete\n    // creator, albeit through its base interface. As long as\n    // the client keeps working with the creator via the base\n    // interface, you can pass it any creator's subclass.\n    method main() is\n        this.initialize()\n        dialog.render()\n")),(0,o.kt)("h2",{id:"applicability"},"Applicability"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Use the Factory Method when you don\u2019t know beforehand the exact types and dependencies of the objects your code should work with."),"\nThe Factory Method separates product construction code from the code that actually uses the product. Therefore it\u2019s easier to extend the product construction code independently from the rest of the code."),(0,o.kt)("p",{parentName:"li"},"For example, to add a new product type to the app, you\u2019ll only need to create a new creator subclass and override the factory method in it.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Use the Factory Method when you want to provide users of your library or framework with a way to extend its internal components."),"\nInheritance is probably the easiest way to extend the default behavior of a library or framework. But how would the framework recognize that your subclass should be used instead of a standard component?"),(0,o.kt)("p",{parentName:"li"},"The solution is to reduce the code that constructs components across the framework into a single factory method and let anyone override this method in addition to extending the component itself."),(0,o.kt)("p",{parentName:"li"},"Let\u2019s see how that would work. Imagine that you write an app using an open source UI framework. Your app should have round buttons, but the framework only provides square ones. You extend the standard ",(0,o.kt)("inlineCode",{parentName:"p"},"Button")," class with a glorious ",(0,o.kt)("inlineCode",{parentName:"p"},"RoundButton")," subclass. But now you need to tell the main ",(0,o.kt)("inlineCode",{parentName:"p"},"UIFramework")," class to use the new button subclass instead of a default one."),(0,o.kt)("p",{parentName:"li"},"To achieve this, you create a subclass ",(0,o.kt)("inlineCode",{parentName:"p"},"UIWithRoundButtons")," from a base framework class and override its ",(0,o.kt)("inlineCode",{parentName:"p"},"createButton")," method. While this method returns ",(0,o.kt)("inlineCode",{parentName:"p"},"Button")," objects in the base class, you make your subclass return ",(0,o.kt)("inlineCode",{parentName:"p"},"RoundButton")," objects. Now use the ",(0,o.kt)("inlineCode",{parentName:"p"},"UIWithRoundButtons")," class instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"UIFramework"),". And that\u2019s about it!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Use the Factory Method when you want to save system resources by reusing existing objects instead of rebuilding them each time.")),(0,o.kt)("p",{parentName:"li"}," You often experience this need when dealing with large, resource-intensive objects such as database connections, file systems, and network resources."),(0,o.kt)("p",{parentName:"li"}," Let\u2019s think about what has to be done to reuse an existing object:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"First, you need to create some storage to keep track of all of the created objects."),(0,o.kt)("li",{parentName:"ol"},"When someone requests an object, the program should look for a free object inside that pool."),(0,o.kt)("li",{parentName:"ol"},"\u2026 and then return it to the client code."),(0,o.kt)("li",{parentName:"ol"},"If there are no free objects, the program should create a new one (and add it to the pool).")),(0,o.kt)("p",{parentName:"li"},"That\u2019s a lot of code! And it must all be put into a single place so that you don\u2019t pollute the program with duplicate code."),(0,o.kt)("p",{parentName:"li"},"Probably the most obvious and convenient place where this code could be placed is the constructor of the class whose objects we\u2019re trying to reuse. However, a constructor must always return ",(0,o.kt)("strong",{parentName:"p"},"new objects")," by definition. It can\u2019t return existing instances."))),(0,o.kt)("p",null,"Therefore, you need to have a regular method capable of creating new objects as well as reusing existing ones. That sounds very much like a factory method."),(0,o.kt)("h2",{id:"how-to-implement"},"How to Implement"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make all products follow the same interface. This interface should declare methods that make sense in every product.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add an empty factory method inside the creator class. The return type of the method should match the common product interface.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the creator\u2019s code find all references to product constructors. One by one, replace them with calls to the factory method, while extracting the product creation code into the factory method."),(0,o.kt)("p",{parentName:"li"},"You might need to add a temporary parameter to the factory method to control the type of returned product."),(0,o.kt)("p",{parentName:"li"},"At this point, the code of the factory method may look pretty ugly. It may have a large ",(0,o.kt)("inlineCode",{parentName:"p"},"switch")," statement that picks which product class to instantiate. But don\u2019t worry, we\u2019ll fix it soon enough.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now, create a set of creator subclasses for each type of product listed in the factory method. Override the factory method in the subclasses and extract the appropriate bits of construction code from the base method.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If there are too many product types and it doesn\u2019t make sense to create subclasses for all of them, you can reuse the control parameter from the base class in subclasses."),(0,o.kt)("p",{parentName:"li"},"For instance, imagine that you have the following hierarchy of classes: the base ",(0,o.kt)("inlineCode",{parentName:"p"},"Mail")," class with a couple of subclasses: ",(0,o.kt)("inlineCode",{parentName:"p"},"AirMail")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GroundMail"),"; the ",(0,o.kt)("inlineCode",{parentName:"p"},"Transport")," classes are ",(0,o.kt)("inlineCode",{parentName:"p"},"Plane"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Truck")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Train"),". While the ",(0,o.kt)("inlineCode",{parentName:"p"},"AirMail")," class only uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Plane")," objects, ",(0,o.kt)("inlineCode",{parentName:"p"},"GroundMail")," may work with both ",(0,o.kt)("inlineCode",{parentName:"p"},"Truck")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Train")," objects. You can create a new subclass (say ",(0,o.kt)("inlineCode",{parentName:"p"},"TrainMail"),") to handle both cases, but there\u2019s another option. The client code can pass an argument to the factory method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"GroundMail")," class to control which product it wants to receive.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If, after all of the extractions, the base factory method has become empty, you can make it abstract. If there\u2019s something left, you can make it a default behavior of the method."))),(0,o.kt)("h2",{id:"pro-and--cons"},"Pro and  Cons"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Pros"),(0,o.kt)("th",{parentName:"tr",align:null},"Cons"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"You avoid tight coupling between the creator and the concrete products."),(0,o.kt)("td",{parentName:"tr",align:null},"The code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern. The best case scenario is when you\u2019re introducing the pattern into an existing hierarchy of creator classes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},(0,o.kt)("a",{parentName:"em",href:"/docs/main/CleanCode/Single%20Responsibility%20Principle"},"Single Responsibility Principle")),". You can move the product creation code into one place in the program, making the code easier to support."),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},(0,o.kt)("a",{parentName:"em",href:"/docs/main/CleanCode/Open%20Closed%20Principle"},"Open Closed Principle")),". You can introduce new types of products into the program without breaking existing client code."),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h2",{id:"relations-with-other-patterns"},"Relations with Other Patterns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Many designs start by using Factory Method (less complicated and more customizable via subclasses) and evolve toward ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Abstract%20Factory"},"Abstract Factory"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Prototype"},"Prototype"),", or ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Builder"},"Builder")," (more flexible, but more complicated)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Abstract%20Factory"},"Abstract Factory")," classes are often based on a set of Factory Methods, but you can also use ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Prototype"},"Prototype")," to compose the methods on these classes."),(0,o.kt)("li",{parentName:"ul"},"You can use Factory Method along with ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Iterator"},"Iterator")," to let collection subclasses return different types of iterators that are compatible with the collections."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Prototype"},"Prototype")," isn\u2019t based on inheritance, so it doesn\u2019t have its drawbacks. On the other hand, ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Prototype"},"Prototype")," requires a complicated initialization of the cloned object. Factory Method is based on inheritance but doesn\u2019t require an initialization step."),(0,o.kt)("li",{parentName:"ul"},"Factory Method is a specialization of ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Template%20Method"},"Template Method"),". At the same time, a Factory Method may serve as a step in a large ",(0,o.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/Template%20Method"},"Template Method"),".")))}h.isMDXComponent=!0},725:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cleancode118-30a5c878dd9f31e2a8ca884df1ecf624.webp"},1578:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cleancode2-56a2db59b4185208c04614fc5580d444.webp"},651:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cleancode36-ac76a22206cd906235fb6ac2f3c4b4db.webp"},5141:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cleancode44-4bdce48a82af8c43b6ec3487e5e9781c.webp"},3176:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/webp;base64,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"},9112:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cleancode90-fd23dba221c0393e799beea29ee8a689.webp"}}]);