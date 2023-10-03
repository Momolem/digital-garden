"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7511],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(n),u=a,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||r;return n?o.createElement(m,s(s({ref:t},p),{},{components:n})):o.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(7462),a=(n(7294),n(4137));const r={title:"Prototype",aliases:["Clone"],tags:["cleancode/designpatterns"]},s="Prototype",i={unversionedId:"main/CleanCode/DesignPatterns/Prototype",id:"main/CleanCode/DesignPatterns/Prototype",title:"Prototype",description:"Intent",source:"@site/docs/main/CleanCode/0. DesignPatterns/Prototype.md",sourceDirName:"main/CleanCode/0. DesignPatterns",slug:"/main/CleanCode/DesignPatterns/Prototype",permalink:"/docs/main/CleanCode/DesignPatterns/Prototype",draft:!1,tags:[{label:"cleancode/designpatterns",permalink:"/docs/tags/cleancode-designpatterns"}],version:"current",frontMatter:{title:"Prototype",aliases:["Clone"],tags:["cleancode/designpatterns"]},sidebar:"main",previous:{title:"Observer",permalink:"/docs/main/CleanCode/DesignPatterns/Observer"},next:{title:"Proxy",permalink:"/docs/main/CleanCode/DesignPatterns/Proxy"}},l={},c=[{value:"Intent",id:"intent",level:2},{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2},{value:"Real-World Analogy",id:"real-world-analogy",level:2},{value:"Structure",id:"structure",level:2},{value:"Basic implementation",id:"basic-implementation",level:4},{value:"Prototype registry implementation",id:"prototype-registry-implementation",level:4},{value:"Pseudocode",id:"pseudocode",level:2},{value:"Applicability",id:"applicability",level:2},{value:"How to Implement",id:"how-to-implement",level:2},{value:"Pro and  Cons",id:"pro-and--cons",level:2},{value:"Relations with Other Patterns",id:"relations-with-other-patterns",level:2}],p={toc:c},h="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prototype"},"Prototype"),(0,a.kt)("h2",{id:"intent"},"Intent"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prototype"),"\xa0is a creational design pattern that lets you copy existing objects without making your code dependent on their\xa0classes."),(0,a.kt)("h2",{id:"problem"},"Problem"),(0,a.kt)("p",null,"Say you have an object, and you want to create an exact copy of it. How would you do it? First, you have to create a new object of the same class. Then you have to go through all the fields of the original object and copy their values over to the new object."),(0,a.kt)("p",null,"Nice! But there\u2019s a catch. Not all objects can be copied that way because some of the object\u2019s fields may be private and not visible from outside of the object itself."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cleancode13",src:n(5757).Z,width:"600",height:"300"})),(0,a.kt)("p",null,"Copying an object \u201cfrom the outside\u201d\xa0",(0,a.kt)("a",{parentName:"p",href:"https://refactoring.guru/cargo-cult"},"isn\u2019t"),"\xa0always\xa0possible."),(0,a.kt)("p",null,"There\u2019s one more problem with the direct approach. Since you have to know the object\u2019s class to create a duplicate, your code becomes dependent on that class. If the extra dependency doesn\u2019t scare you, there\u2019s another catch. Sometimes you only know the interface that the object follows, but not its concrete class, when, for example, a parameter in a method accepts any objects that follow some interface."),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("p",null,"The Prototype pattern delegates the cloning process to the actual objects that are being cloned. The pattern declares a common interface for all objects that support cloning. This interface lets you clone an object without coupling your code to the class of that object. Usually, such an interface contains just a single\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"clone"),"\xa0method."),(0,a.kt)("p",null,"The implementation of the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"clone"),"\xa0method is very similar in all classes. The method creates an object of the current class and carries over all of the field values of the old object into the new one. You can even copy private fields because most programming languages let objects access private fields of other objects that belong to the same class."),(0,a.kt)("p",null,"An object that supports cloning is called a\xa0",(0,a.kt)("em",{parentName:"p"},"prototype"),". When your objects have dozens of fields and hundreds of possible configurations, cloning them might serve as an alternative to subclassing."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cleancode75",src:n(60).Z,width:"343",height:"300"})),(0,a.kt)("p",null,"Pre-built prototypes can be an alternative to\xa0subclassing."),(0,a.kt)("p",null,"Here\u2019s how it works: you create a set of objects, configured in various ways. When you need an object like the one you\u2019ve configured, you just clone a prototype instead of constructing a new object from scratch."),(0,a.kt)("h2",{id:"real-world-analogy"},"Real-World Analogy"),(0,a.kt)("p",null,"In real life, prototypes are used for performing various tests before starting mass production of a product. However, in this case, prototypes don\u2019t participate in any actual production, playing a passive role instead."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cleancode85",src:n(1603).Z,width:"600",height:"300"})),(0,a.kt)("p",null,"The division of a\xa0cell."),(0,a.kt)("p",null,"Since industrial prototypes don\u2019t really copy themselves, a much closer analogy to the pattern is the process of mitotic cell division (biology, remember?). After mitotic division, a pair of identical cells is formed. The original cell acts as a prototype and takes an active role in creating the copy."),(0,a.kt)("h2",{id:"structure"},"Structure"),(0,a.kt)("h4",{id:"basic-implementation"},"Basic implementation"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cleancode124",src:n(7282).Z,width:"500",height:"400"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The\xa0",(0,a.kt)("strong",{parentName:"li"},"Prototype"),"\xa0interface declares the cloning methods. In most cases, it\u2019s a single\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"clone"),"\xa0method."),(0,a.kt)("li",{parentName:"ol"},"The\xa0",(0,a.kt)("strong",{parentName:"li"},"Concrete Prototype"),"\xa0class implements the cloning method. In addition to copying the original object\u2019s data to the clone, this method may also handle some edge cases of the cloning process related to cloning linked objects, untangling recursive dependencies,\xa0etc."),(0,a.kt)("li",{parentName:"ol"},"The\xa0",(0,a.kt)("strong",{parentName:"li"},"Client"),"\xa0can produce a copy of any object that follows the prototype interface.")),(0,a.kt)("h4",{id:"prototype-registry-implementation"},"Prototype registry implementation"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cleancode60",src:n(1654).Z,width:"550",height:"480"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The\xa0",(0,a.kt)("strong",{parentName:"li"},"Prototype Registry"),"\xa0provides an easy way to access frequently-used prototypes. It stores a set of pre-built objects that are ready to be copied. The simplest prototype registry is a\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"name \u2192 prototype"),"\xa0hash map. However, if you need better search criteria than a simple name, you can build a much more robust version of the registry.")),(0,a.kt)("h2",{id:"pseudocode"},"Pseudocode"),(0,a.kt)("p",null,"In this example, the\xa0",(0,a.kt)("strong",{parentName:"p"},"Prototype"),"\xa0pattern lets you produce exact copies of geometric objects, without coupling the code to their classes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cleancode98",src:n(3776).Z,width:"470",height:"330"})),(0,a.kt)("p",null,"Cloning a set of objects that belong to a class\xa0hierarchy."),(0,a.kt)("p",null,"All shape classes follow the same interface, which provides a cloning method. A subclass may call the parent\u2019s cloning method before copying its own field values to the resulting object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"// Base prototype.\nabstract class Shape is\n    field X: int\n    field Y: int\n    field color: string\n\n    // A regular constructor.\n    constructor Shape() is\n        // ...\n\n    // The prototype constructor. A fresh object is initialized\n    // with values from the existing object.\n    constructor Shape(source: Shape) is\n        this()\n        this.X = source.X\n        this.Y = source.Y\n        this.color = source.color\n\n    // The clone operation returns one of the Shape subclasses.\n    abstract method clone():Shape\n\n// Concrete prototype. The cloning method creates a new object\n// in one go by calling the constructor of the current class and\n// passing the current object as the constructor's argument.\n// Performing all the actual copying in the constructor helps to\n// keep the result consistent: the constructor will not return a\n// result until the new object is fully built; thus, no object\n// can have a reference to a partially-built clone.\nclass Rectangle extends Shape is\n    field width: int\n    field height: int\n\n    constructor Rectangle(source: Rectangle) is\n        // A parent constructor call is needed to copy private\n        // fields defined in the parent class.\n        super(source)\n        this.width = source.width\n        this.height = source.height\n\n    method clone():Shape is\n        return new Rectangle(this)\n\nclass Circle extends Shape is\n    field radius: int\n\n    constructor Circle(source: Circle) is\n        super(source)\n        this.radius = source.radius\n\n    method clone():Shape is\n        return new Circle(this)\n\n// Somewhere in the client code.\nclass Application is\n    field shapes: array of Shape\n\n    constructor Application() is\n        Circle circle = new Circle()\n        circle.X = 10\n        circle.Y = 10\n        circle.radius = 20\n        shapes.add(circle)\n\n        Circle anotherCircle = circle.clone()\n        shapes.add(anotherCircle)\n        // The `anotherCircle` variable contains an exact copy\n        // of the `circle` object.\n\n        Rectangle rectangle = new Rectangle()\n        rectangle.width = 10\n        rectangle.height = 20\n        shapes.add(rectangle)\n\n    method businessLogic() is\n        // Prototype rocks because it lets you produce a copy of\n        // an object without knowing anything about its type.\n        Array shapesCopy = new Array of Shapes.\n\n        // For instance, we don't know the exact elements in the\n        // shapes array. All we know is that they are all\n        // shapes. But thanks to polymorphism, when we call the\n        // `clone` method on a shape the program checks its real\n        // class and runs the appropriate clone method defined\n        // in that class. That's why we get proper clones\n        // instead of a set of simple Shape objects.\n        foreach (s in shapes) do\n            shapesCopy.add(s.clone())\n\n        // The `shapesCopy` array contains exact copies of the\n        // `shape` array's children.\n")),(0,a.kt)("h2",{id:"applicability"},"Applicability"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Use the Prototype pattern when your code shouldn\u2019t depend on the concrete classes of objects that you need to copy."),"\nThis happens a lot when your code works with objects passed to you from 3rd-party code via some interface. The concrete classes of these objects are unknown, and you couldn\u2019t depend on them even if you wanted to."),(0,a.kt)("p",{parentName:"li"},"The Prototype pattern provides the client code with a general interface for working with all objects that support cloning. This interface makes the client code independent from the concrete classes of objects that it clones.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Use the pattern when you want to reduce the number of subclasses that only differ in the way they initialize their respective objects."),"\n\xa0Suppose you have a complex class that requires a laborious configuration before it can be used. There are several common ways to configure this class, and this code is scattered through your app. To reduce the duplication, you create several subclasses and put every common configuration code into their constructors. You solved the duplication problem, but now you have lots of dummy subclasses."),(0,a.kt)("p",{parentName:"li"},"The Prototype pattern lets you use a set of pre-built objects configured in various ways as prototypes. Instead of instantiating a subclass that matches some configuration, the client can simply look for an appropriate prototype and clone it."))),(0,a.kt)("h2",{id:"how-to-implement"},"How to Implement"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create the prototype interface and declare the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"clone"),"\xa0method in it. Or just add the method to all classes of an existing class hierarchy, if you have one.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A prototype class must define the alternative constructor that accepts an object of that class as an argument. The constructor must copy the values of all fields defined in the class from the passed object into the newly created instance. If you\u2019re changing a subclass, you must call the parent constructor to let the superclass handle the cloning of its private fields."),(0,a.kt)("p",{parentName:"li"},"If your programming language doesn\u2019t support method overloading, you won\u2019t be able to create a separate \u201cprototype\u201d constructor. Thus, copying the object\u2019s data into the newly created clone will have to be performed within the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"clone"),"\xa0method. Still, having this code in a regular constructor is safer because the resulting object is returned fully configured right after you call the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"new"),"\xa0operator.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The cloning method usually consists of just one line: running a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"new"),"\xa0operator with the prototypical version of the constructor. Note, that every class must explicitly override the cloning method and use its own class name along with the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"new"),"\xa0operator. Otherwise, the cloning method may produce an object of a parent class.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Optionally, create a centralized prototype registry to store a catalog of frequently used prototypes."),(0,a.kt)("p",{parentName:"li"},"You can implement the registry as a new factory class or put it in the base prototype class with a static method for fetching the prototype. This method should search for a prototype based on search criteria that the client code passes to the method. The criteria might either be a simple string tag or a complex set of search parameters. After the appropriate prototype is found, the registry should clone it and return the copy to the client."),(0,a.kt)("p",{parentName:"li"},"Finally, replace the direct calls to the subclasses\u2019 constructors with calls to the factory method of the prototype registry."))),(0,a.kt)("h2",{id:"pro-and--cons"},"Pro and  Cons"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Pros"),(0,a.kt)("th",{parentName:"tr",align:null},"Cons"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"You can clone objects without coupling to their concrete classes."),(0,a.kt)("td",{parentName:"tr",align:null},"Cloning complex objects that have circular references might be very tricky.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"You can get rid of repeated initialization code in favor of cloning pre-built prototypes."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"You can produce complex objects more conveniently."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"You get an alternative to inheritance when dealing with configuration presets for complex objects."),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"relations-with-other-patterns"},"Relations with Other Patterns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Many designs start by using ",(0,a.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/DesignPatterns/Factory"},"Factory")," Method (less complicated and more customizable via subclasses) and evolve toward ",(0,a.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/DesignPatterns/Abstract%20Factory"},"Abstract Factory"),", Prototype, or ",(0,a.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/DesignPatterns/Builder"},"Builder")," (more flexible, but more complicated)."),(0,a.kt)("li",{parentName:"ul"},"Abstract ",(0,a.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/DesignPatterns/Factory"},"Factory")," classes are often based on a set of ",(0,a.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/DesignPatterns/Factory"},"Factory")," Methods, but you can also use Prototype to compose the methods on these classes."),(0,a.kt)("li",{parentName:"ul"},"Prototype can help when you need to save copies of Commands into history."),(0,a.kt)("li",{parentName:"ul"},"Designs that make heavy use of Composite and Decorator can often benefit from using Prototype. Applying the pattern lets you clone complex structures instead of re-constructing them from scratch."),(0,a.kt)("li",{parentName:"ul"},"Prototype isn\u2019t based on inheritance, so it doesn\u2019t have its drawbacks. On the other hand, Prototype requires a complicated initialization of the cloned object. ",(0,a.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/DesignPatterns/Factory"},"Factory")," Method is based on inheritance but doesn\u2019t require an initialization step."),(0,a.kt)("li",{parentName:"ul"},"Sometimes Prototype can be a simpler alternative to Memento. This works if the object, the state of which you want to store in the history, is fairly straightforward and doesn\u2019t have links to external resources, or the links are easy to re-establish."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/DesignPatterns/Abstract%20Factory"},"Abstract Factory"),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/DesignPatterns/Builder"},"Builders")," and ",(0,a.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/DesignPatterns/Prototype"},"Prototype")," can all be implemented as ",(0,a.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/DesignPatterns/Singleton"},"Singleton"),".")))}d.isMDXComponent=!0},7282:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cleancode124-76d4dc9c27b5477bd0f9bd7f4fe9d83e.webp"},5757:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cleancode13-4c814e45a063fcf269d665735dbdd6cb.webp"},1654:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cleancode60-d229f676a3c5f62ecc1e8fe63f2a244f.webp"},60:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cleancode75-74dfddc82b1a8fa639f6a681184547e9.webp"},1603:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cleancode85-fd7f8f39dbe67a7d36becff7f9cab810.webp"},3776:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/webp;base64,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"}}]);