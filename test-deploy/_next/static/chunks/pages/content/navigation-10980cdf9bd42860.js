(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7931],{30876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=i,f=h["".concat(l,".").concat(u)]||h[u]||d[u]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"===typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"===typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},95145:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content/navigation",function(){return n(32494)}])},43857:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var a=n(52322),i=n(2784),r=n(97729),o=n(64033),s=n(30876),l=n(21925),p=n(76808),c=n(55165),d=n(63637),h=n.n(d);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}var m=["id"],k=["id"],x="chakra-skip-nav",g={userSelect:"none",border:"0",height:"1px",width:"1px",margin:"-1px",padding:"0",outline:"0",overflow:"hidden",position:"absolute",clip:"rect(0 0 0 0)",_focus:{clip:"auto",width:"auto",height:"auto"}},N=(0,p.Gp)((function(e,t){var n=(0,p.mq)("SkipLink",e),a=(0,p.Lr)(e),r=a.id,o=void 0===r?x:r,s=f(a,m),l=h()({},g,n);return i.createElement(p.m$.a,u({},s,{ref:t,href:"#"+o,__css:l}))}));c.Ts&&(N.displayName="SkipNavLink");var w=(0,p.Gp)((function(e,t){var n=e.id,a=void 0===n?x:n,r=f(e,k);return i.createElement(p.m$.div,u({ref:t,id:a,tabIndex:-1,style:{outline:0}},r))}));c.Ts&&(w.displayName="SkipNavContent");var v=n(46977),y=n(96882),b=function(e){var t;return(0,a.jsxs)(o.xu,{display:{base:"none",xl:"block"},children:["Table Of Contents",(0,a.jsx)(o.GS,{spacing:1,ml:"0",mt:"4",styleType:"none",children:null===(t=e.tableOfContents)||void 0===t?void 0:t.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#".concat(e.id),children:e.text})},e.text)}))})]})},O=function(e){var t=i.useContext(v.Il).bannerExpanded,n="72px",r="calc(100vh - 88px - ".concat(t?n:"0px",")"),s="calc(100vh - 88px - 105px - ".concat(t?n:"0px",")");return(0,a.jsxs)(o.xu,{minH:"100vh",children:[(0,a.jsx)(N,{children:"Skip to Main Content"}),(0,a.jsxs)(o.kC,{flexDir:"column",padding:"2",children:[(0,a.jsx)(y._g,{}),(0,a.jsx)(o.iz,{}),(0,a.jsx)(o.kC,{children:(0,a.jsx)(o.xu,{as:"main",w:"100%",mx:"auto",children:(0,a.jsxs)(o.xu,{display:{md:"flex"},children:[(0,a.jsx)(o.xu,{display:{base:"none",md:"block"},overflow:"auto",maxH:r,pr:"8",ml:"4",children:(0,a.jsx)(y.Hy,{})}),(0,a.jsxs)(o.xu,{flex:"1",minW:"0",overflow:"auto",maxH:r,children:[(0,a.jsxs)(o.xu,{minH:s,children:[(0,a.jsx)(w,{}),e.children]}),(0,a.jsx)(o.xu,{pt:"20",children:(0,a.jsx)(y.$_,{})})]}),e.tableOfContents&&(0,a.jsx)(b,{tableOfContents:e.tableOfContents})]})})})]})]})};function j(e){return function(t){return(0,a.jsxs)(O,{children:[(0,a.jsx)(r.default,{children:(0,a.jsxs)("title",{children:["Player - ",e.title]})}),(0,a.jsx)(o.kC,{alignItems:"center",children:(0,a.jsx)(o.W2,{maxW:"container.lg",children:(0,a.jsx)(s.Zo,{components:l.tl,children:t.children})})})]})}}},32494:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});n(2784);var a=n(30876),i=n(43857);function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o={},s=(0,i.Z)({title:"Navigation",tableOfContents:[{text:"Navigation",id:"navigation",level:1},{text:"Flows",id:"flows",level:2},{text:"Navigation State Types",id:"navigation-state-types",level:2},{text:"VIEW",id:"view",level:3},{text:"ACTION",id:"action",level:3},{text:"END",id:"end",level:3},{text:"EXTERNAL",id:"external",level:3},{text:"FLOW",id:"flow",level:3},{text:"Examples",id:"examples",level:2},{text:"Single Flow",id:"single-flow",level:3},{text:"Flow with onStart expression",id:"flow-with-onstart-expression",level:3},{text:"Flow with multiple expressions",id:"flow-with-multiple-expressions",level:3}]});function l(e){var t=e.components,n=r(e,["components"]);return(0,a.kt)(s,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",Object.assign({},{id:"navigation"}),(0,a.kt)("a",Object.assign({parentName:"h1"},{href:"#navigation"}),"Navigation")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"navigation")," section of the content describes the path the user goes through as they progress. In simple terms, this can be thought of as a set of finite state machines, and the user progresses through each state until they hit a ",(0,a.kt)("inlineCode",{parentName:"p"},"DONE")," node."),(0,a.kt)("p",null,"The navigation object contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"BEGIN")," property that contains a reference to a flow to start Player with. Once an end state is reached for that flow, Player will end its processing and return that outcome."),(0,a.kt)("h2",Object.assign({},{id:"flows"}),(0,a.kt)("a",Object.assign({parentName:"h2"},{href:"#flows"}),"Flows")),(0,a.kt)("p",null,"Flows are a state machine with 1 start state and at least 1 end state. The nodes are processed in order until an end state is reached. The flow that initiated Player (the ",(0,a.kt)("inlineCode",{parentName:"p"},"BEGIN")," reference) will be executed until its ",(0,a.kt)("inlineCode",{parentName:"p"},"END")," state is reached."),(0,a.kt)("p",null,"Flows can also contain an ",(0,a.kt)("inlineCode",{parentName:"p"},"onStart")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"onEnd")," property which is an expression that will be evaluated before processing of the first start state takes place, or just prior to ending the flow."),(0,a.kt)("h2",Object.assign({},{id:"navigation-state-types"}),(0,a.kt)("a",Object.assign({parentName:"h2"},{href:"#navigation-state-types"}),"Navigation State Types")),(0,a.kt)("p",null,"There are a few main navigation state types defined. Each has a slightly different interaction with how it progresses to the end."),(0,a.kt)("p",null,"All state types (except the ",(0,a.kt)("inlineCode",{parentName:"p"},"END")," node) contain a ",(0,a.kt)("inlineCode",{parentName:"p"},"transitions")," property. This is an object describing the relationship on how to proceed to the next node. The key is the name of the transition that is performed, the value is the name of the state to transition to. A key of ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," can be used as a fallback for ",(0,a.kt)("em",{parentName:"p"},"any")," transition value given that doesn\u2019t match a pre-defined one."),(0,a.kt)("h3",Object.assign({},{id:"view"}),(0,a.kt)("a",Object.assign({parentName:"h3"},{href:"#view"}),(0,a.kt)("inlineCode",{parentName:"a"},"VIEW"))),(0,a.kt)("p",null,"The view node is the simplest and most widely used. It supports transitions and contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," property that corresponds with an ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," of the view in the ",(0,a.kt)("em",{parentName:"p"},"views")," array."),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "state_type": "VIEW",\n  "ref": "view-1",\n  "transitions": {\n    "next": "VIEW_2"\n  }\n}\n')),(0,a.kt)("h3",Object.assign({},{id:"action"}),(0,a.kt)("a",Object.assign({parentName:"h3"},{href:"#action"}),(0,a.kt)("inlineCode",{parentName:"a"},"ACTION"))),(0,a.kt)("p",null,"An action node allows users to evaluate one of more expressions before proceeding to the next node. The value of the expression (the last value is used if the expression is an array), as the transition value to the next node:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "state_type": "ACTION",\n  "exp": ["{{foo.value}} = 1 + 2", "{{foo.value}} > 0"],\n  "transitions": {\n    "true": "VIEW_1",\n    "false": "VIEW_2"\n  }\n}\n')),(0,a.kt)("h3",Object.assign({},{id:"end"}),(0,a.kt)("a",Object.assign({parentName:"h3"},{href:"#end"}),(0,a.kt)("inlineCode",{parentName:"a"},"END"))),(0,a.kt)("p",null,"The end state represents a completion of a flow. It contains an optional ",(0,a.kt)("inlineCode",{parentName:"p"},"outcome")," property that can describe the circumstance for ending the flow. No transition state exists as this marks the completion of the flow."),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "state_type": "END",\n  "outcome": "Done_FWD"\n}\n')),(0,a.kt)("h3",Object.assign({},{id:"external"}),(0,a.kt)("a",Object.assign({parentName:"h3"},{href:"#external"}),(0,a.kt)("inlineCode",{parentName:"a"},"EXTERNAL"))),(0,a.kt)("p",null,"The external state represents a state that can\u2019t be resolved by Player itself \u2014 it defers resolution of the transition value to the application. This is typically used in conjunction with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ExternalActionPlugin")," in order to wire up the proper handler that can process these values."),(0,a.kt)("p",null,"Similar to the view node, external states contain a ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," to describe the external state type:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "state_type": "EXTERNAL",\n  "ref": "custom-state",\n  "transitions": {\n    "next": "VIEW_2"\n  }\n}\n')),(0,a.kt)("p",null,"Player will remain in this state until the external handler responds with a transition value to move the current state in the state machine."),(0,a.kt)("h3",Object.assign({},{id:"flow"}),(0,a.kt)("a",Object.assign({parentName:"h3"},{href:"#flow"}),(0,a.kt)("inlineCode",{parentName:"a"},"FLOW"))),(0,a.kt)("p",null,"The flow state executes the referenced flow, and its ",(0,a.kt)("inlineCode",{parentName:"p"},"outcome")," determines the transition to use."),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "state_type": "FLOW",\n  "ref": "FLOW-2",\n  "transitions": {\n    "next": "VIEW_2"\n  }\n}\n')),(0,a.kt)("p",null,"Reaching this state will execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"FLOW_2")," flow \u2014 and if ",(0,a.kt)("inlineCode",{parentName:"p"},"FLOW_2")," reaches an ",(0,a.kt)("inlineCode",{parentName:"p"},"END")," state with an ",(0,a.kt)("inlineCode",{parentName:"p"},"outcome")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"next"),", will transition to the ",(0,a.kt)("inlineCode",{parentName:"p"},"VIEW_2")," state"),(0,a.kt)("p",null,"State types can also contain ",(0,a.kt)("inlineCode",{parentName:"p"},"onStart")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"onEnd")," properties for evaluating expressions. Order of operations:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"onStart")," - Evaluated at the start of a node\u2019s lifecycle; useful for updating data before it\u2019s resolved"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"exp")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"onEnd")," - Evaluated last, right before transition. If a transition is halted (by validation or otherwise), the expression won\u2019t be executed.")),(0,a.kt)("h2",Object.assign({},{id:"examples"}),(0,a.kt)("a",Object.assign({parentName:"h2"},{href:"#examples"}),"Examples")),(0,a.kt)("h3",Object.assign({},{id:"single-flow"}),(0,a.kt)("a",Object.assign({parentName:"h3"},{href:"#single-flow"}),"Single Flow")),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "BEGIN": "FLOW_1",\n  "FLOW_1": {\n    "startState": "VIEW_1",\n    "VIEW_1": {\n      "state_type": "VIEW",\n      "ref": "view-1",\n      "transitions": {\n        "*": "END_1"\n      }\n    },\n    "END_1": {\n      "state_type": "END",\n      "outcome": "Done"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"This is the simplest of flows. The navigation begins with executing ",(0,a.kt)("inlineCode",{parentName:"p"},"FLOW_1"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"FLOW_1")," begins with the ",(0,a.kt)("inlineCode",{parentName:"p"},"VIEW_1")," state. ",(0,a.kt)("inlineCode",{parentName:"p"},"VIEW_1")," shows the view with id ",(0,a.kt)("inlineCode",{parentName:"p"},"view-1"),", and any transition from that view goes to ",(0,a.kt)("inlineCode",{parentName:"p"},"END_1")," which completes Player\u2019s execution with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Done")," outcome."),(0,a.kt)("p",null,(0,a.kt)("img",Object.assign({parentName:"p"},{src:"https://mockimages.s3-us-west-2.amazonaws.com/docs/simple-flow.png",alt:"Single Flow Example"}))),(0,a.kt)("h3",Object.assign({},{id:"flow-with-onstart-expression"}),(0,a.kt)("a",Object.assign({parentName:"h3"},{href:"#flow-with-onstart-expression"}),"Flow with ",(0,a.kt)("inlineCode",{parentName:"a"},"onStart")," expression")),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "BEGIN": "FLOW_1",\n  "FLOW_1": {\n    "startState": "VIEW_1",\n    "VIEW_1": {\n      "state_type": "VIEW",\n      "ref": "{{dynamicRef}}",\n      "onStart": "{{dynamicRef}} = \'view-1\'",\n      "transitions": {\n        "*": "END_1"\n      }\n    },\n    "END_1": {\n      "state_type": "END",\n      "outcome": "Done"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"view")," node in this flow utilizes an ",(0,a.kt)("inlineCode",{parentName:"p"},"onStart")," expression to update the ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," property dynamically. The expression is evaluated before the data is resolved, and the node references the updated ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,a.kt)("h3",Object.assign({},{id:"flow-with-multiple-expressions"}),(0,a.kt)("a",Object.assign({parentName:"h3"},{href:"#flow-with-multiple-expressions"}),"Flow with multiple expressions")),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "BEGIN": "FLOW_1",\n  "FLOW_1": {\n    "startState": "VIEW_1",\n    "VIEW_1": {\n      "state_type": "VIEW",\n      "ref": "view-1",\n      "onStart": "{{nextState}} = \'VIEW_2\'",\n      "exp": "{{nextState}} = \'VIEW_3\'",\n      "onEnd": "{{nextState}} = \'END_1\'",\n      "transitions": {\n        "*": "{{nextState}}"\n      }\n    },\n    "VIEW_2": {\n      "state_type": "VIEW",\n      "ref": "view-2",\n      "transitions": {\n        "*": "END_1"\n      }\n    },\n    "VIEW_3": {\n      "state_type": "VIEW",\n      "ref": "view-3",\n      "transitions": {\n        "*": "END_1"\n      }\n    },\n    "END_1": {\n      "state_type": "END",\n      "outcome": "Done"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"This flow demonstrates the order of operations for multiple expressions. On transition to ",(0,a.kt)("inlineCode",{parentName:"p"},"VIEW_1")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"onStart")," property\u2019s expression is evaluated first, updating ",(0,a.kt)("inlineCode",{parentName:"p"},"nextState")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"VIEW_2"),", followed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"exp")," updating it to ",(0,a.kt)("inlineCode",{parentName:"p"},"VIEW_3"),". Right before the next transition the ",(0,a.kt)("inlineCode",{parentName:"p"},"onEnd")," expression is evaluated; the flow transitions to the ",(0,a.kt)("inlineCode",{parentName:"p"},"END_1")," node."))}l.isMDXComponent=!0}},function(e){e.O(0,[6525,204,3795,9774,2888,179],(function(){return t=95145,e(e.s=t);var t}));var t=e.O();_N_E=t}]);