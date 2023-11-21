"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[5224],{18985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=n(85893),s=n(11151);const i={title:"Facade",aliases:null,tags:["cleancode/designpatterns"]},o="Facade",r={id:"main/CleanCode/DesignPatterns/Facade",title:"Facade",description:"Intent",source:"@site/docs/main/CleanCode/DesignPatterns/Facade.md",sourceDirName:"main/CleanCode/DesignPatterns",slug:"/main/CleanCode/DesignPatterns/Facade",permalink:"/docs/main/CleanCode/DesignPatterns/Facade",draft:!1,unlisted:!1,tags:[{label:"cleancode/designpatterns",permalink:"/docs/tags/cleancode-designpatterns"}],version:"current",frontMatter:{title:"Facade",aliases:null,tags:["cleancode/designpatterns"]},sidebar:"cs",previous:{title:"Decorator",permalink:"/docs/main/CleanCode/DesignPatterns/Decorator"},next:{title:"Factory",permalink:"/docs/main/CleanCode/DesignPatterns/Factory"}},c={},l=[{value:"Intent",id:"intent",level:2},{value:"Problem",id:"problem",level:2},{value:"\xa0Solution",id:"solution",level:2},{value:"\xa0Real-World Analogy",id:"real-world-analogy",level:2},{value:"\xa0Structure",id:"structure",level:2},{value:"\xa0Pseudocode",id:"pseudocode",level:2},{value:"Applicability",id:"applicability",level:2},{value:"How to Implement",id:"how-to-implement",level:2},{value:"Pro and  Cons",id:"pro-and--cons",level:2},{value:"Relations with Other Patterns",id:"relations-with-other-patterns",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"facade",children:"Facade"}),"\n",(0,a.jsx)(t.h2,{id:"intent",children:"Intent"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Facade"}),"\xa0is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of\xa0classes."]}),"\n",(0,a.jsx)(t.h2,{id:"problem",children:"Problem"}),"\n",(0,a.jsx)(t.p,{children:"Imagine that you must make your code work with a broad set of objects that belong to a sophisticated library or framework. Ordinarily, you\u2019d need to initialize all of those objects, keep track of dependencies, execute methods in the correct order, and so on."}),"\n",(0,a.jsx)(t.p,{children:"As a result, the business logic of your classes would become tightly coupled to the implementation details of 3rd-party classes, making it hard to comprehend and maintain."}),"\n",(0,a.jsx)(t.h2,{id:"solution",children:"\xa0Solution"}),"\n",(0,a.jsx)(t.p,{children:"A facade is a class that provides a simple interface to a complex subsystem which contains lots of moving parts. A facade might provide limited functionality in comparison to working with the subsystem directly. However, it includes only those features that clients really care about."}),"\n",(0,a.jsx)(t.p,{children:"Having a facade is handy when you need to integrate your app with a sophisticated library that has dozens of features, but you just need a tiny bit of its functionality."}),"\n",(0,a.jsxs)(t.p,{children:["For instance, an app that uploads short funny videos with cats to social media could potentially use a professional video conversion library. However, all that it really needs is a class with the single method\xa0",(0,a.jsx)(t.code,{children:"encode(filename, format)"}),". After creating such a class and connecting it with the video conversion library, you\u2019ll have your first facade."]}),"\n",(0,a.jsx)(t.h2,{id:"real-world-analogy",children:"\xa0Real-World Analogy"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"cleancode116",src:n(59454).Z+"",width:"490",height:"190"})}),"\n",(0,a.jsx)(t.p,{children:"Placing orders by\xa0phone."}),"\n",(0,a.jsx)(t.p,{children:"When you call a shop to place a phone order, an operator is your facade to all services and departments of the shop. The operator provides you with a simple voice interface to the ordering system, payment gateways, and various delivery services."}),"\n",(0,a.jsx)(t.h2,{id:"structure",children:"\xa0Structure"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"cleancode129",src:n(77744).Z+"",width:"600",height:"380"})}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["The\xa0",(0,a.jsx)(t.strong,{children:"Facade"}),"\xa0provides convenient access to a particular part of the subsystem\u2019s functionality. It knows where to direct the client\u2019s request and how to operate all the moving parts."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["An\xa0",(0,a.jsx)(t.strong,{children:"Additional Facade"}),"\xa0class can be created to prevent polluting a single facade with unrelated features that might make it yet another complex structure. Additional facades can be used by both clients and other facades."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["The\xa0",(0,a.jsx)(t.strong,{children:"Complex Subsystem"}),"\xa0consists of dozens of various objects. To make them all do something meaningful, you have to dive deep into the subsystem\u2019s implementation details, such as initializing objects in the correct order and supplying them with data in the proper format."]}),"\n",(0,a.jsx)(t.p,{children:"Subsystem classes aren\u2019t aware of the facade\u2019s existence. They operate within the system and work with each other directly."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["The\xa0",(0,a.jsx)(t.strong,{children:"Client"}),"\xa0uses the facade instead of calling the subsystem objects directly."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"pseudocode",children:"\xa0Pseudocode"}),"\n",(0,a.jsxs)(t.p,{children:["In this example, the\xa0",(0,a.jsx)(t.strong,{children:"Facade"}),"\xa0pattern simplifies interaction with a complex video conversion framework."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"cleancode17",src:n(74231).Z+"",width:"570",height:"380"})}),"\n",(0,a.jsx)(t.p,{children:"An example of isolating multiple dependencies within a single facade\xa0class."}),"\n",(0,a.jsx)(t.p,{children:"Instead of making your code work with dozens of the framework classes directly, you create a facade class which encapsulates that functionality and hides it from the rest of the code. This structure also helps you to minimize the effort of upgrading to future versions of the framework or replacing it with another one. The only thing you\u2019d need to change in your app would be the implementation of the facade\u2019s methods."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:'// These are some of the classes of a complex 3rd-party video\n// conversion framework. We don\'t control that code, therefore\n// can\'t simplify it.\n\nclass VideoFile\n// ...\n\nclass OggCompressionCodec\n// ...\n\nclass MPEG4CompressionCodec\n// ...\n\nclass CodecFactory\n// ...\n\nclass BitrateReader\n// ...\n\nclass AudioMixer\n// ...\n\n// We create a facade class to hide the framework\'s complexity\n// behind a simple interface. It\'s a trade-off between\n// functionality and simplicity.\nclass VideoConverter is\n    method convert(filename, format):File is\n        file = new VideoFile(filename)\n        sourceCodec = new CodecFactory.extract(file)\n        if (format == "mp4")\n            destinationCodec = new MPEG4CompressionCodec()\n        else\n            destinationCodec = new OggCompressionCodec()\n        buffer = BitrateReader.read(filename, sourceCodec)\n        result = BitrateReader.convert(buffer, destinationCodec)\n        result = (new AudioMixer()).fix(result)\n        return new File(result)\n\n// Application classes don\'t depend on a billion classes\n// provided by the complex framework. Also, if you decide to\n// switch frameworks, you only need to rewrite the facade class.\nclass Application is\n    method main() is\n        convertor = new VideoConverter()\n        mp4 = convertor.convert("funny-cats-video.ogg", "mp4")\n        mp4.save()\n'})}),"\n",(0,a.jsx)(t.h2,{id:"applicability",children:"Applicability"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Use the Facade pattern when you need to have a limited but straightforward interface to a complex subsystem."}),"\nOften, subsystems get more complex over time. Even applying design patterns typically leads to creating more classes. A subsystem may become more flexible and easier to reuse in various contexts, but the amount of configuration and boilerplate code it demands from a client grows ever larger. The Facade attempts to fix this problem by providing a shortcut to the most-used features of the subsystem which fit most client requirements."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Use the Facade when you want to structure a subsystem into layers."}),"\nCreate facades to define entry points to each level of a subsystem. You can reduce coupling between multiple subsystems by requiring them to communicate only through facades."]}),"\n",(0,a.jsxs)(t.p,{children:["For example, let\u2019s return to our video conversion framework. It can be broken down into two layers: video- and audio-related. For each layer, you can create a facade and then make the classes of each layer communicate with each another via those facades. This approach looks very similar to the ",(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Mediator",children:"Mediator"})," pattern."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"how-to-implement",children:"How to Implement"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Check whether it\u2019s possible to provide a simpler interface than what an existing subsystem already provides. You\u2019re on the right track if this interface makes the client code independent from many of the subsystem\u2019s classes."}),"\n",(0,a.jsx)(t.li,{children:"Declare and implement this interface in a new facade class. The facade should redirect the calls from the client code to appropriate objects of the subsystem. The facade should be responsible for initializing the subsystem and managing its further life cycle unless the client code already does this."}),"\n",(0,a.jsx)(t.li,{children:"To get the full benefit from the pattern, make all the client code communicate with the subsystem only via the facade. Now the client code is protected from any changes in the subsystem code. For example, when a subsystem gets upgraded to a new version, you will only need to modify the code in the facade."}),"\n",(0,a.jsxs)(t.li,{children:["If the facade becomes\xa0",(0,a.jsx)(t.a,{href:"Large%20Class",children:"Large Class"}),", consider extracting part of its behavior to a new, refined facade class."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"pro-and--cons",children:"Pro and  Cons"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Pros"}),(0,a.jsx)(t.th,{children:"Cons"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"You can isolate your code from the complexity of a subsystem."}),(0,a.jsx)(t.td,{children:"A facade can become a god object coupled to all classes of an app."})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"relations-with-other-patterns",children:"Relations with Other Patterns"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Facade",children:"Facade"})," defines a new interface for existing objects, whereas ",(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Adapter",children:"Adapter"})," tries to make the existing interface usable. Adapter usually wraps just one object, while Facade works with an entire subsystem of objects."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Abstract%20Factory",children:"Abstract Factory"}),"can serve as an alternative to ",(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Facade",children:"Facade"})," when you only want to hide the way the subsystem objects are created from the client code."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Flyweight",children:"Flyweight"})," shows how to make lots of little objects, whereas ",(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Facade",children:"Facade"})," shows how to make a single object that represents an entire subsystem."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Facade",children:"Facade"})," and ",(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Mediator",children:"Mediator"})," have similar jobs: they try to organize collaboration between lots of tightly coupled classes.","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Facade",children:"Facade"})," defines a simplified interface to a subsystem of objects, but it doesn\u2019t introduce any new functionality. The subsystem itself is unaware of the facade. Objects within the subsystem can communicate directly."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Mediator",children:"Mediator"})," centralizes communication between components of the system. The components only know about the mediator object and don\u2019t communicate directly."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["A ",(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Facade",children:"Facade"})," class can often be transformed into a ",(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Singleton",children:"Singleton"})," since a single facade object is sufficient in most cases."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Facade",children:"Facade"})," is similar to ",(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Proxy",children:"Proxy"})," in that both buffer a complex entity and initialize it on its own. Unlike ",(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Facade",children:"Facade"}),", ",(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Proxy",children:"Proxy"})," has the same interface as its service object, which makes them interchangeable."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},59454:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cleancode116-0dc68a16c1e07f0fe01f1c312bbc8fe9.webp"},77744:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cleancode129-43b39a8df0d411887f08fb8eaf9acc03.webp"},74231:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cleancode17-788ca761a818362e4e22372f19215b9d.webp"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var a=n(67294);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);