(this["webpackJsonpapps-collection"]=this["webpackJsonpapps-collection"]||[]).push([[0],{17:function(e,n,a){e.exports=a(31)},22:function(e,n,a){},23:function(e,n,a){},24:function(e,n,a){},25:function(e,n,a){},31:function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),r=a(15),c=a.n(r),s=(a(22),a(10)),l=a(1),i=(a(23),a(24),function(){return o.a.createElement("div",{className:"home-container"},o.a.createElement("h1",null,"Home"),o.a.createElement("div",{className:"apps-container"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("h2",null,"FAQ page"),o.a.createElement("div",{className:"app-description"},o.a.createElement("p",null,"Using the accordion approach"),o.a.createElement("p",null,"The questions are local"))))))}),m=a(8),u=function(e){var n=e.faq,a=e.index,t=e.onToggleQ;return o.a.createElement("div",{className:"faq "+(n.open?"open":"")},o.a.createElement("div",{className:"faq-question"},n.question,o.a.createElement("span",{onClick:function(){t(a)}},"\u2193")),o.a.createElement("div",{className:"faq-answer"},n.answer))},p=(a(25),[{question:"how many programmers does it take to screw in a ligthbulb?",answer:"None, we don't adress hardware issues. \ud83e\udd2a",tag:"funny",open:!0},{question:"Who is the most awesome person?",answer:"You, \ud83d\ude43",open:!1},{question:"How many questions does it take to make a successful FAQ page?",answer:"Thiiiiiiiis many. \ud83d\udcc8",open:!1},{question:"What's a Programmer?",answer:"An organism that turns caffeine and pizza into software.",open:!1},{question:"What's an Algorithm?",answer:"Word used by a programmer when they do not want to explain what they did.",open:!1},{question:"QA vs Developer",answer:"Two people from different planets working together to deliver a quality product.",open:!1},{question:"What is the difference between an element and a component in React?",answer:"An element is a plain JavaScript object that represents a DOM node or component. Components can be either classes or functions, that take props as an input and return an element tree as the output.",open:!1}]),h=function(){var e=Object(t.useState)([]),n=Object(m.a)(e,2),a=n[0],r=n[1],c=Object(t.useState)(""),s=Object(m.a)(c,2),l=s[0],i=s[1],h=Object(t.useState)([]),f=Object(m.a)(h,2),d=f[0],E=f[1];Object(t.useEffect)((function(){r(p)}),[a]);var w=function(e){r(a.map((function(n,a){return n.open=a===e&&!n.open,n})))};return Object(t.useEffect)((function(){E(a.filter((function(e){return e.question.toLocaleLowerCase().includes(l.toLocaleLowerCase())})))}),[l,a]),o.a.createElement("div",{className:"faq-page-container"},o.a.createElement("header",null,"the best faq page ever!"),o.a.createElement("div",{className:"search-question-container"},o.a.createElement("input",{name:"search",type:"text",value:l,autoComplete:"off",placeholder:"Search question",onChange:function(e){i(e.target.value)},autoFocus:!0})),o.a.createElement("div",{className:"faqs"},0===d.length?o.a.createElement("span",{className:"no-matches"},"no questions found.. \ud83d\ude2d"):d.map((function(e,n){return o.a.createElement(o.a.Fragment,{key:n},o.a.createElement(u,{faq:e,index:n,onToggleQ:w}))}))))},f=function(){return o.a.createElement("h2",null,"App2")},d=[{path:"/",exact:!0,name:"Home",component:o.a.createElement(i,null)},{path:"/accordion",name:"FAQ page",component:o.a.createElement(h,null)},{path:"/app2",name:"App 2",component:o.a.createElement(f,null)}];var E=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(s.a,null,o.a.createElement("div",{className:"inner-container"},o.a.createElement("section",{className:"sidebar"},o.a.createElement("h1",null,"My Apps \ud83d\udcaa"),o.a.createElement("ul",null,d.map((function(e,n){return o.a.createElement("li",{key:n},o.a.createElement(s.b,{to:e.path},e.name))})))),o.a.createElement("section",{className:"content"},o.a.createElement(l.c,null,d.map((function(e,n){return o.a.createElement(l.a,{exact:e.exact,key:n,path:e.path,children:e.component})})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.60061eee.chunk.js.map