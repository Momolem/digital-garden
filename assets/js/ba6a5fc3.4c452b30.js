"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[960],{4137:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>m});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=c(o),u=n,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||r;return o?a.createElement(m,i(i({ref:t},h),{},{components:o})):a.createElement(m,i({ref:t},h))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},1275:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=o(7462),n=(o(7294),o(4137));const r={title:"Iterator",aliases:null,tags:["cleancode/designpatterns"]},i="Iterator",l={unversionedId:"main/CleanCode/DesignPatterns/Iterator",id:"main/CleanCode/DesignPatterns/Iterator",title:"Iterator",description:"Intent",source:"@site/docs/main/CleanCode/0. DesignPatterns/Iterator.md",sourceDirName:"main/CleanCode/0. DesignPatterns",slug:"/main/CleanCode/DesignPatterns/Iterator",permalink:"/docs/main/CleanCode/DesignPatterns/Iterator",draft:!1,tags:[{label:"cleancode/designpatterns",permalink:"/docs/tags/cleancode-designpatterns"}],version:"current",frontMatter:{title:"Iterator",aliases:null,tags:["cleancode/designpatterns"]},sidebar:"main",previous:{title:"Flyweight",permalink:"/docs/main/CleanCode/DesignPatterns/Flyweight"},next:{title:"Mediator",permalink:"/docs/main/CleanCode/DesignPatterns/Mediator"}},s={},c=[{value:"Intent",id:"intent",level:2},{value:"Problem",id:"problem",level:2},{value:"\xa0Solution",id:"solution",level:2},{value:"\xa0Real-World Analogy",id:"real-world-analogy",level:2},{value:"\xa0Structure",id:"structure",level:2},{value:"\xa0Pseudocode",id:"pseudocode",level:2},{value:"Applicability",id:"applicability",level:2},{value:"\xa0How to Implement",id:"how-to-implement",level:2},{value:"Pro and  Cons",id:"pro-and--cons",level:2},{value:"Relations with Other Patterns",id:"relations-with-other-patterns",level:2}],h={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iterator"},"Iterator"),(0,n.kt)("h2",{id:"intent"},"Intent"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Iterator"),"\xa0is a behavioral design pattern that lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree,\xa0etc.).\nCollections are one of the most used data types in programming. Nonetheless, a collection is just a container for a group of objects."),(0,n.kt)("h2",{id:"problem"},"Problem"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cleancode101",src:o(5547).Z,width:"490",height:"100"})),(0,n.kt)("p",null,"Various types of\xa0collections."),(0,n.kt)("p",null,"Most collections store their elements in simple lists. However, some of them are based on stacks, trees, graphs and other complex data structures."),(0,n.kt)("p",null,"But no matter how a collection is structured, it must provide some way of accessing its elements so that other code can use these elements. There should be a way to go through each element of the collection without accessing the same elements over and over."),(0,n.kt)("p",null,"This may sound like an easy job if you have a collection based on a list. You just loop over all of the elements. But how do you sequentially traverse elements of a complex data structure, such as a tree? For example, one day you might be just fine with depth-first traversal of a tree. Yet the next day you might require breadth-first traversal. And the next week, you might need something else, like random access to the tree elements."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cleancode71",src:o(4590).Z,width:"600",height:"160"})),(0,n.kt)("p",null,"The same collection can be traversed in several different\xa0ways."),(0,n.kt)("p",null,"Adding more and more traversal algorithms to the collection gradually blurs its primary responsibility, which is efficient data storage. Additionally, some algorithms might be tailored for a specific application, so including them into a generic collection class would be weird."),(0,n.kt)("p",null,"On the other hand, the client code that\u2019s supposed to work with various collections may not even care how they store their elements. However, since collections all provide different ways of accessing their elements, you have no option other than to couple your code to the specific collection classes."),(0,n.kt)("h2",{id:"solution"},"\xa0Solution"),(0,n.kt)("p",null,"The main idea of the Iterator pattern is to extract the traversal behavior of a collection into a separate object called an\xa0",(0,n.kt)("em",{parentName:"p"},"iterator"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cleancode32",src:o(2623).Z,width:"400",height:"470"})),(0,n.kt)("p",null,"Iterators implement various traversal algorithms. Several iterator objects can traverse the same collection at the same\xa0time."),(0,n.kt)("p",null,"In addition to implementing the algorithm itself, an iterator object encapsulates all of the traversal details, such as the current position and how many elements are left till the end. Because of this, several iterators can go through the same collection at the same time, independently of each other."),(0,n.kt)("p",null,"Usually, iterators provide one primary method for fetching elements of the collection. The client can keep running this method until it doesn\u2019t return anything, which means that the iterator has traversed all of the elements."),(0,n.kt)("p",null,"All iterators must implement the same interface. This makes the client code compatible with any collection type or any traversal algorithm as long as there\u2019s a proper iterator. If you need a special way to traverse a collection, you just create a new iterator class, without having to change the collection or the client."),(0,n.kt)("h2",{id:"real-world-analogy"},"\xa0Real-World Analogy"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cleancode28",src:o(3616).Z,width:"640",height:"300"})),(0,n.kt)("p",null,"Various ways to walk around\xa0Rome."),(0,n.kt)("p",null,"You plan to visit Rome for a few days and visit all of its main sights and attractions. But once there, you could waste a lot of time walking in circles, unable to find even the Colosseum."),(0,n.kt)("p",null,"On the other hand, you could buy a virtual guide app for your smartphone and use it for navigation. It\u2019s smart and inexpensive, and you could be staying at some interesting places for as long as you want."),(0,n.kt)("p",null,"A third alternative is that you could spend some of the trip\u2019s budget and hire a local guide who knows the city like the back of his hand. The guide would be able to tailor the tour to your likings, show you every attraction and tell a lot of exciting stories. That\u2019ll be even more fun; but, alas, more expensive, too."),(0,n.kt)("p",null,"All of these options\u2014the random directions born in your head, the smartphone navigator or the human guide\u2014act as iterators over the vast collection of sights and attractions located in Rome."),(0,n.kt)("h2",{id:"structure"},"\xa0Structure"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cleancode7",src:o(8315).Z,width:"480",height:"430"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The\xa0",(0,n.kt)("strong",{parentName:"p"},"Iterator"),"\xa0interface declares the operations required for traversing a collection: fetching the next element, retrieving the current position, restarting iteration,\xa0etc.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Concrete Iterators"),"\xa0implement specific algorithms for traversing a collection. The iterator object should track the traversal progress on its own. This allows several iterators to traverse the same collection independently of each other.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The\xa0",(0,n.kt)("strong",{parentName:"p"},"Collection"),"\xa0interface declares one or multiple methods for getting iterators compatible with the collection. Note that the return type of the methods must be declared as the iterator interface so that the concrete collections can return various kinds of iterators.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Concrete Collections"),"\xa0return new instances of a particular concrete iterator class each time the client requests one. You might be wondering, where\u2019s the rest of the collection\u2019s code? Don\u2019t worry, it should be in the same class. It\u2019s just that these details aren\u2019t crucial to the actual pattern, so we\u2019re omitting them.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The\xa0",(0,n.kt)("strong",{parentName:"p"},"Client"),"\xa0works with both collections and iterators via their interfaces. This way the client isn\u2019t coupled to concrete classes, allowing you to use various collections and iterators with the same client code."),(0,n.kt)("p",{parentName:"li"},"Typically, clients don\u2019t create iterators on their own, but instead get them from collections. Yet, in certain cases, the client can create one directly; for example, when the client defines its own special iterator."))),(0,n.kt)("h2",{id:"pseudocode"},"\xa0Pseudocode"),(0,n.kt)("p",null,"In this example, the\xa0",(0,n.kt)("strong",{parentName:"p"},"Iterator"),"\xa0pattern is used to walk through a special kind of collection which encapsulates access to Facebook\u2019s social graph. The collection provides several iterators that can traverse profiles in various ways."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cleancode4",src:o(3824).Z,width:"600",height:"630"})),(0,n.kt)("p",null,"Example of iterating over social\xa0profiles."),(0,n.kt)("p",null,"The \u2018friends\u2019 iterator can be used to go over the friends of a given profile. The \u2018colleagues\u2019 iterator does the same, except it omits friends who don\u2019t work at the same company as a target person. Both iterators implement a common interface which allows clients to fetch profiles without diving into implementation details such as authentication and sending REST requests."),(0,n.kt)("p",null,"The client code isn\u2019t coupled to concrete classes because it works with collections and iterators only through interfaces. If you decide to connect your app to a new social network, you simply need to provide new collection and iterator classes without changing the existing code."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},'// The collection interface must declare a factory method for\n// producing iterators. You can declare several methods if there\n// are different kinds of iteration available in your program.\ninterface SocialNetwork is\n    method createFriendsIterator(profileId):ProfileIterator\n    method createCoworkersIterator(profileId):ProfileIterator\n\n// Each concrete collection is coupled to a set of concrete\n// iterator classes it returns. But the client isn\'t, since the\n// signature of these methods returns iterator interfaces.\nclass Facebook implements SocialNetwork is\n    // ... The bulk of the collection\'s code should go here ...\n\n    // Iterator creation code.\n    method createFriendsIterator(profileId) is\n        return new FacebookIterator(this, profileId, "friends")\n    method createCoworkersIterator(profileId) is\n        return new FacebookIterator(this, profileId, "coworkers")\n\n// The common interface for all iterators.\ninterface ProfileIterator is\n    method getNext():Profile\n    method hasMore():bool\n\n// The concrete iterator class.\nclass FacebookIterator implements ProfileIterator is\n    // The iterator needs a reference to the collection that it\n    // traverses.\n    private field facebook: Facebook\n    private field profileId, type: string\n\n    // An iterator object traverses the collection independently\n    // from other iterators. Therefore it has to store the\n    // iteration state.\n    private field currentPosition\n    private field cache: array of Profile\n\n    constructor FacebookIterator(facebook, profileId, type) is\n        this.facebook = facebook\n        this.profileId = profileId\n        this.type = type\n\n    private method lazyInit() is\n        if (cache == null)\n            cache = facebook.socialGraphRequest(profileId, type)\n\n    // Each concrete iterator class has its own implementation\n    // of the common iterator interface.\n    method getNext() is\n        if (hasMore())\n            currentPosition++\n            return cache[currentPosition]\n\n    method hasMore() is\n        lazyInit()\n        return currentPosition < cache.length\n\n// Here is another useful trick: you can pass an iterator to a\n// client class instead of giving it access to a whole\n// collection. This way, you don\'t expose the collection to the\n// client.\n//\n// And there\'s another benefit: you can change the way the\n// client works with the collection at runtime by passing it a\n// different iterator. This is possible because the client code\n// isn\'t coupled to concrete iterator classes.\nclass SocialSpammer is\n    method send(iterator: ProfileIterator, message: string) is\n        while (iterator.hasMore())\n            profile = iterator.getNext()\n            System.sendEmail(profile.getEmail(), message)\n\n// The application class configures collections and iterators\n// and then passes them to the client code.\nclass Application is\n    field network: SocialNetwork\n    field spammer: SocialSpammer\n\n    method config() is\n        if working with Facebook\n            this.network = new Facebook()\n        if working with LinkedIn\n            this.network = new LinkedIn()\n        this.spammer = new SocialSpammer()\n\n    method sendSpamToFriends(profile) is\n        iterator = network.createFriendsIterator(profile.getId())\n        spammer.send(iterator, "Very important message")\n\n    method sendSpamToCoworkers(profile) is\n        iterator = network.createCoworkersIterator(profile.getId())\n        spammer.send(iterator, "Very important message")\n')),(0,n.kt)("h2",{id:"applicability"},"Applicability"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Use the Iterator pattern when your collection has a complex data structure under the hood, but you want to hide its complexity from clients (either for convenience or security reasons)."),"\n\xa0The iterator encapsulates the details of working with a complex data structure, providing the client with several simple methods of accessing the collection elements. While this approach is very convenient for the client, it also protects the collection from careless or malicious actions which the client would be able to perform if working with the collection directly."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Use the pattern to reduce duplication of the traversal code across your app."),"\n\xa0The code of non-trivial iteration algorithms tends to be very bulky. When placed within the business logic of an app, it may blur the responsibility of the original code and make it less maintainable. Moving the traversal code to designated iterators can help you make the code of the application more lean and clean."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Use the Iterator when you want your code to be able to traverse different data structures or when types of these structures are unknown beforehand."),"\n\xa0The pattern provides a couple of generic interfaces for both collections and iterators. Given that your code now uses these interfaces, it\u2019ll still work if you pass it various kinds of collections and iterators that implement these interfaces.")),(0,n.kt)("h2",{id:"how-to-implement"},"\xa0How to Implement"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Declare the iterator interface. At the very least, it must have a method for fetching the next element from a collection. But for the sake of convenience you can add a couple of other methods, such as fetching the previous element, tracking the current position, and checking the end of the iteration."),(0,n.kt)("li",{parentName:"ol"},"Declare the collection interface and describe a method for fetching iterators. The return type should be equal to that of the iterator interface. You may declare similar methods if you plan to have several distinct groups of iterators."),(0,n.kt)("li",{parentName:"ol"},"Implement concrete iterator classes for the collections that you want to be traversable with iterators. An iterator object must be linked with a single collection instance. Usually, this link is established via the iterator\u2019s constructor."),(0,n.kt)("li",{parentName:"ol"},"Implement the collection interface in your collection classes. The main idea is to provide the client with a shortcut for creating iterators, tailored for a particular collection class. The collection object must pass itself to the iterator\u2019s constructor to establish a link between them."),(0,n.kt)("li",{parentName:"ol"},"Go over the client code to replace all of the collection traversal code with the use of iterators. The client fetches a new iterator object each time it needs to iterate over the collection elements.")),(0,n.kt)("h2",{id:"pro-and--cons"},"Pro and  Cons"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Pros"),(0,n.kt)("th",{parentName:"tr",align:null},"Cons"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},(0,n.kt)("a",{parentName:"em",href:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Single%20Responsibility%20Principle"},"Single Responsibility Principle")),". You can clean up the client code and the collections by extracting bulky traversal algorithms into separate classes."),(0,n.kt)("td",{parentName:"tr",align:null},"Applying the pattern can be an overkill if your app only works with simple collections.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Open%20Closed%20Principle"},"Open Closed Principle"),". You can implement new types of collections and iterators and pass them to existing code without breaking anything."),(0,n.kt)("td",{parentName:"tr",align:null},"Using an iterator may be less efficient than going through elements of some specialized collections directly.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"You can iterate over the same collection in parallel because each iterator object contains its own iteration state."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"For the same reason, you can delay an iteration and continue it when needed."),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"relations-with-other-patterns"},"Relations with Other Patterns"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can use Iterators to traverse ",(0,n.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/DesignPatterns/Composite"},"Composite")," trees."),(0,n.kt)("li",{parentName:"ul"},"You can use ",(0,n.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/DesignPatterns/Factory"},"Factory")," Method along with Iterator to let collection subclasses return different types of iterators that are compatible with the collections."),(0,n.kt)("li",{parentName:"ul"},"You can use ",(0,n.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/DesignPatterns/Memento"},"Memento")," along with Iterator to capture the current iteration state and roll it back if necessary."),(0,n.kt)("li",{parentName:"ul"},"You can use ",(0,n.kt)("a",{parentName:"li",href:"/docs/main/CleanCode/DesignPatterns/Visitor"},"Visitor")," along with Iterator to traverse a complex data structure and execute some operation over its elements, even if they all have different classes.")))}p.isMDXComponent=!0},5547:(e,t,o)=>{o.d(t,{Z:()=>a});const a="data:image/webp;base64,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"},3616:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/cleancode28-37d63fcd13088844a7b5d6e630f835aa.webp"},2623:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/cleancode32-d56ea0649350f5a8b28fafab21553527.webp"},3824:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/cleancode4-8ec834ddc658b08a83891fc930d0824f.webp"},8315:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/cleancode7-b425e28b832a8d3844f0fe96355a84e8.webp"},4590:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/cleancode71-acad7354f6cf4359ab36dd0025d9223d.webp"}}]);