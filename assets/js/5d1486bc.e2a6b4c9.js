"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[7638],{19737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=n(85893),s=n(11151);const i={title:"Strategy",aliases:["Strategy Pattern"],tags:["cleancode/designpatterns"]},o="Strategy",r={id:"main/CleanCode/DesignPatterns/Strategy",title:"Strategy",description:"Intent",source:"@site/docs/main/CleanCode/0. DesignPatterns/Strategy.md",sourceDirName:"main/CleanCode/0. DesignPatterns",slug:"/main/CleanCode/DesignPatterns/Strategy",permalink:"/docs/main/CleanCode/DesignPatterns/Strategy",draft:!1,unlisted:!1,tags:[{label:"cleancode/designpatterns",permalink:"/docs/tags/cleancode-designpatterns"}],version:"current",frontMatter:{title:"Strategy",aliases:["Strategy Pattern"],tags:["cleancode/designpatterns"]},sidebar:"cs",previous:{title:"State",permalink:"/docs/main/CleanCode/DesignPatterns/State"},next:{title:"Template Method",permalink:"/docs/main/CleanCode/DesignPatterns/Template Method"}},c={},l=[{value:"Intent",id:"intent",level:2},{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2},{value:"Real-World Analogy",id:"real-world-analogy",level:2},{value:"Structure",id:"structure",level:2},{value:"Pseudocode",id:"pseudocode",level:2},{value:"Applicability",id:"applicability",level:2},{value:"How to Implement",id:"how-to-implement",level:2},{value:"Pro and  Cons",id:"pro-and--cons",level:2},{value:"Relations with Other Patterns",id:"relations-with-other-patterns",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"strategy",children:"Strategy"}),"\n",(0,a.jsx)(t.h2,{id:"intent",children:"Intent"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Strategy"}),"\xa0is a ",(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/#Behavioral%7Cbehavioral%20design%20pattern"})," that lets you define a family of algorithms, put each of them into a separate class, and make their objects\xa0interchangeable."]}),"\n",(0,a.jsx)(t.h2,{id:"problem",children:"Problem"}),"\n",(0,a.jsx)(t.p,{children:"One day you decided to create a navigation app for casual travelers. The app was centered around a beautiful map which helped users quickly orient themselves in any city."}),"\n",(0,a.jsx)(t.p,{children:"One of the most requested features for the app was automatic route planning. A user should be able to enter an address and see the fastest route to that destination displayed on the map."}),"\n",(0,a.jsx)(t.p,{children:"The first version of the app could only build the routes over roads. People who traveled by car were bursting with joy. But apparently, not everybody likes to drive on their vacation. So with the next update, you added an option to build walking routes. Right after that, you added another option to let people use public transport in their routes."}),"\n",(0,a.jsx)(t.p,{children:"However, that was only the beginning. Later you planned to add route building for cyclists. And even later, another option for building routes through all of a city\u2019s tourist attractions."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"cleancode12",src:n(96199).Z+"",width:"330",height:"150"})}),"\n",(0,a.jsx)(t.p,{children:"The code of the navigator became\xa0bloated."}),"\n",(0,a.jsx)(t.p,{children:"While from a business perspective the app was a success, the technical part caused you many headaches. Each time you added a new routing algorithm, the main class of the navigator doubled in size. At some point, the beast became too hard to maintain."}),"\n",(0,a.jsx)(t.p,{children:"Any change to one of the algorithms, whether it was a simple bug fix or a slight adjustment of the street score, affected the whole class, increasing the chance of creating an error in already-working code."}),"\n",(0,a.jsx)(t.p,{children:"In addition, teamwork became inefficient. Your teammates, who had been hired right after the successful release, complain that they spend too much time resolving merge conflicts. Implementing a new feature requires you to change the same huge class, conflicting with the code produced by other people."}),"\n",(0,a.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,a.jsxs)(t.p,{children:["The Strategy pattern suggests that you take a class that does something specific in a lot of different ways and extract all of these algorithms into separate classes called\xa0",(0,a.jsx)(t.em,{children:"strategies"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The original class, called\xa0",(0,a.jsx)(t.em,{children:"context"}),", must have a field for storing a reference to one of the strategies. The context delegates the work to a linked strategy object instead of executing it on its own."]}),"\n",(0,a.jsx)(t.p,{children:"The context isn\u2019t responsible for selecting an appropriate algorithm for the job. Instead, the client passes the desired strategy to the context. In fact, the context doesn\u2019t know much about strategies. It works with all strategies through the same generic interface, which only exposes a single method for triggering the algorithm encapsulated within the selected strategy."}),"\n",(0,a.jsx)(t.p,{children:"This way the context becomes independent of concrete strategies, so you can add new algorithms or modify existing ones without changing the code of the context or other strategies."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"cleancode108",src:n(41129).Z+"",width:"570",height:"280"})}),"\n",(0,a.jsx)(t.p,{children:"Route planning\xa0strategies."}),"\n",(0,a.jsxs)(t.p,{children:["In our navigation app, each routing algorithm can be extracted to its own class with a single\xa0",(0,a.jsx)(t.code,{children:"buildRoute"}),"\xa0method. The method accepts an origin and destination and returns a collection of the route\u2019s checkpoints."]}),"\n",(0,a.jsx)(t.p,{children:"Even though given the same arguments, each routing class might build a different route, the main navigator class doesn\u2019t really care which algorithm is selected since its primary job is to render a set of checkpoints on the map. The class has a method for switching the active routing strategy, so its clients, such as the buttons in the user interface, can replace the currently selected routing behavior with another one."}),"\n",(0,a.jsx)(t.h2,{id:"real-world-analogy",children:"Real-World Analogy"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"cleancode68",src:n(30388).Z+"",width:"640",height:"300"})}),"\n",(0,a.jsx)(t.p,{children:"Various strategies for getting to the\xa0airport."}),"\n",(0,a.jsx)(t.p,{children:"Imagine that you have to get to the airport. You can catch a bus, order a cab, or get on your bicycle. These are your transportation strategies. You can pick one of the strategies depending on factors such as budget or time constraints."}),"\n",(0,a.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"cleancode24",src:n(50978).Z+"",width:"440",height:"370"})}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["The\xa0",(0,a.jsx)(t.strong,{children:"Context"}),"\xa0maintains a reference to one of the concrete strategies and communicates with this object only via the strategy interface."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["The\xa0",(0,a.jsx)(t.strong,{children:"Strategy"}),"\xa0interface is common to all concrete strategies. It declares a method the context uses to execute a strategy."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Concrete Strategies"}),"\xa0implement different variations of an algorithm the context uses."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The context calls the execution method on the linked strategy object each time it needs to run the algorithm. The context doesn\u2019t know what type of strategy it works with or how the algorithm is executed."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"pseudocode",children:"Pseudocode"}),"\n",(0,a.jsxs)(t.p,{children:["In this example, the context uses multiple\xa0",(0,a.jsx)(t.strong,{children:"strategies"}),"\xa0to execute various arithmetic operations."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:"// The strategy interface declares operations common to all\n// supported versions of some algorithm. The context uses this\n// interface to call the algorithm defined by the concrete\n// strategies.\ninterface Strategy is\n    method execute(a, b)\n\n// Concrete strategies implement the algorithm while following\n// the base strategy interface. The interface makes them\n// interchangeable in the context.\nclass ConcreteStrategyAdd implements Strategy is\n    method execute(a, b) is\n        return a + b\n\nclass ConcreteStrategySubtract implements Strategy is\n    method execute(a, b) is\n        return a - b\n\nclass ConcreteStrategyMultiply implements Strategy is\n    method execute(a, b) is\n        return a * b\n\n// The context defines the interface of interest to clients.\nclass Context is\n    // The context maintains a reference to one of the strategy\n    // objects. The context doesn't know the concrete class of a\n    // strategy. It should work with all strategies via the\n    // strategy interface.\n    private strategy: Strategy\n\n    // Usually the context accepts a strategy through the\n    // constructor, and also provides a setter so that the\n    // strategy can be switched at runtime.\n    method setStrategy(Strategy strategy) is\n        this.strategy = strategy\n\n    // The context delegates some work to the strategy object\n    // instead of implementing multiple versions of the\n    // algorithm on its own.\n    method executeStrategy(int a, int b) is\n        return strategy.execute(a, b)\n\n// The client code picks a concrete strategy and passes it to\n// the context. The client should be aware of the differences\n// between strategies in order to make the right choice.\nclass ExampleApplication is\n    method main() is\n        Create context object.\n\n        Read first number.\n        Read last number.\n        Read the desired action from user input.\n\n        if (action == addition) then\n            context.setStrategy(new ConcreteStrategyAdd())\n\n        if (action == subtraction) then\n            context.setStrategy(new ConcreteStrategySubtract())\n\n        if (action == multiplication) then\n            context.setStrategy(new ConcreteStrategyMultiply())\n\n        result = context.executeStrategy(First number, Second number)\n\n        Print result.\n"})}),"\n",(0,a.jsx)(t.h2,{id:"applicability",children:"Applicability"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Use the Strategy pattern when you want to use different variants of an algorithm within an object and be able to switch from one algorithm to another during runtime."}),"\nThe Strategy pattern lets you indirectly alter the object\u2019s behavior at runtime by associating it with different sub-objects which can perform specific sub-tasks in different ways."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Use the Strategy when you have a lot of similar classes that only differ in the way they execute some behavior."}),"\n\xa0  The Strategy pattern lets you extract the varying behavior into a separate class hierarchy and combine the original classes into one, thereby reducing duplicate code."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Use the pattern to isolate the business logic of a class from the implementation details of algorithms that may not be as important in the context of that logic."}),"\nThe Strategy pattern lets you isolate the code, internal data, and dependencies of various algorithms from the rest of the code. Various clients get a simple interface to execute the algorithms and switch them at runtime."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Use the pattern when your class has a massive conditional statement that switches between different variants of the same algorithm."}),"\nThe Strategy pattern lets you do away with such a conditional by extracting all algorithms into separate classes, all of which implement the same interface. The original object delegates execution to one of these objects, instead of implementing all variants of the algorithm."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"how-to-implement",children:"How to Implement"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"In the context class, identify an algorithm that\u2019s prone to frequent changes. It may also be a massive conditional that selects and executes a variant of the same algorithm at runtime."}),"\n",(0,a.jsx)(t.li,{children:"Declare the strategy interface common to all variants of the algorithm."}),"\n",(0,a.jsx)(t.li,{children:"One by one, extract all algorithms into their own classes. They should all implement the strategy interface."}),"\n",(0,a.jsx)(t.li,{children:"In the context class, add a field for storing a reference to a strategy object. Provide a setter for replacing values of that field. The context should work with the strategy object only via the strategy interface. The context may define an interface which lets the strategy access its data."}),"\n",(0,a.jsx)(t.li,{children:"Clients of the context must associate it with a suitable strategy that matches the way they expect the context to perform its primary job."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"pro-and--cons",children:"Pro and  Cons"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Pros"}),(0,a.jsx)(t.th,{children:"Cons"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"You can swap algorithms used inside an object at runtime."}),(0,a.jsx)(t.td,{children:"If you only have a couple of algorithms and they rarely change, there\u2019s no real reason to overcomplicate the program with new classes and interfaces that come along with the pattern."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"You can isolate the implementation details of an algorithm from the code that uses it."}),(0,a.jsx)(t.td,{children:"Clients must be aware of the differences between strategies to be able to select a proper one."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"You can replace inheritance with composition."}),(0,a.jsx)(t.td,{children:"A lot of modern programming languages have functional type support that lets you implement different versions of an algorithm inside a set of anonymous functions. Then you could use these functions exactly as you\u2019d have used the strategy objects, but without bloating your code with extra classes and interfaces."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:[(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/CleanCodeDeveloper/Prinzipien/Open%20Closed%20Principle",children:"Open Closed Principle"}),". You can introduce new strategies without having to change the context."]}),(0,a.jsx)(t.td,{})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"relations-with-other-patterns",children:"Relations with Other Patterns"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Bridge",children:"Bridge"}),", ",(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/State",children:"State"}),", ",(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Strategy",children:"Strategy"})," (and to some degree ",(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Adapter",children:"Adapter"}),") have very similar structures. Indeed, all of these patterns are based on ",(0,a.jsx)(t.a,{href:"composition",children:"composition"}),", which is delegating work to other objects. However, they all solve different problems. A pattern isn\u2019t just a recipe for structuring your code in a specific way. It can also communicate to other developers the problem the pattern solves."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Command",children:"Command"})," and ",(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Strategy",children:"Strategy"})," may look similar because you can use both to parameterize an object with some action. However, they have very different intents.","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["You can use ",(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Command",children:"Command"})," to convert any operation into an object. The operation\u2019s parameters become fields of that object. The conversion lets you defer execution of the operation, queue it, store the history of commands, send commands to remote services, etc."]}),"\n",(0,a.jsxs)(t.li,{children:["On the other hand, ",(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Strategy",children:"Strategy"})," usually describes different ways of doing the same thing, letting you swap these algorithms within a single context class."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Decorator",children:"Decorator"})," lets you change the skin of an object, while ",(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Strategy",children:"Strategy"})," lets you change the guts."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Template%20Method",children:"Template Method"})," is based on inheritance: it lets you alter parts of an algorithm by extending those parts in subclasses. ",(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Strategy",children:"Strategy"})," is based on composition: you can alter parts of the object\u2019s behavior by supplying it with different strategies that correspond to that behavior. Template Method works at the class level, so it\u2019s static. Strategy works on the object level, letting you switch behaviors at runtime."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/State",children:"State"})," can be considered as an extension of Strategy. Both patterns are based on ",(0,a.jsx)(t.a,{href:"composition",children:"composition"}),": they change the behavior of the context by delegating some work to helper objects. ",(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/Strategy",children:"Strategy"})," makes these objects completely independent and unaware of each other. However, ",(0,a.jsx)(t.a,{href:"/docs/main/CleanCode/DesignPatterns/State",children:"State"})," doesn\u2019t restrict dependencies between concrete states, letting them alter the state of the context at will."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},41129:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,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"},96199:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,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"},50978:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cleancode24-7e175743fe72e091d5c5a76742979c61.webp"},30388:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cleancode68-3a8841d7332764f17f18b0ccada54f24.webp"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var a=n(67294);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);