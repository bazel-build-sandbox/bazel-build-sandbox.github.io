(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5908],{30876:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(2784);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"===typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=s,x=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(x,a(a({ref:n},p),{},{components:t})):r.createElement(x,a({ref:n},p))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"===typeof e||s){var i=t.length,a=new Array(i);a[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"===typeof e?e:s,a[1]=o;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},44415:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugins/expression",function(){return t(56108)}])},43857:function(e,n,t){"use strict";t.d(n,{Z:function(){return E}});var r=t(52322),s=t(2784),i=t(97729),a=t(64033),o=t(30876),l=t(21925),u=t(76808),p=t(55165),c=t(63637),d=t.n(c);function m(){return(m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function x(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}var g=["id"],f=["id"],y="chakra-skip-nav",h={userSelect:"none",border:"0",height:"1px",width:"1px",margin:"-1px",padding:"0",outline:"0",overflow:"hidden",position:"absolute",clip:"rect(0 0 0 0)",_focus:{clip:"auto",width:"auto",height:"auto"}},b=(0,u.Gp)((function(e,n){var t=(0,u.mq)("SkipLink",e),r=(0,u.Lr)(e),i=r.id,a=void 0===i?y:i,o=x(r,g),l=d()({},h,t);return s.createElement(u.m$.a,m({},o,{ref:n,href:"#"+a,__css:l}))}));p.Ts&&(b.displayName="SkipNavLink");var v=(0,u.Gp)((function(e,n){var t=e.id,r=void 0===t?y:t,i=x(e,f);return s.createElement(u.m$.div,m({ref:n,id:r,tabIndex:-1,style:{outline:0}},i))}));p.Ts&&(v.displayName="SkipNavContent");var j=t(46977),O=t(96882),k=function(e){var n;return(0,r.jsxs)(a.xu,{display:{base:"none",xl:"block"},children:["Table Of Contents",(0,r.jsx)(a.GS,{spacing:1,ml:"0",mt:"4",styleType:"none",children:null===(n=e.tableOfContents)||void 0===n?void 0:n.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.id),children:e.text})},e.text)}))})]})},w=function(e){var n=s.useContext(j.Il).bannerExpanded,t="72px",i="calc(100vh - 88px - ".concat(n?t:"0px",")"),o="calc(100vh - 88px - 105px - ".concat(n?t:"0px",")");return(0,r.jsxs)(a.xu,{minH:"100vh",children:[(0,r.jsx)(b,{children:"Skip to Main Content"}),(0,r.jsxs)(a.kC,{flexDir:"column",padding:"2",children:[(0,r.jsx)(O._g,{}),(0,r.jsx)(a.iz,{}),(0,r.jsx)(a.kC,{children:(0,r.jsx)(a.xu,{as:"main",w:"100%",mx:"auto",children:(0,r.jsxs)(a.xu,{display:{md:"flex"},children:[(0,r.jsx)(a.xu,{display:{base:"none",md:"block"},overflow:"auto",maxH:i,pr:"8",ml:"4",children:(0,r.jsx)(O.Hy,{})}),(0,r.jsxs)(a.xu,{flex:"1",minW:"0",overflow:"auto",maxH:i,children:[(0,r.jsxs)(a.xu,{minH:o,children:[(0,r.jsx)(v,{}),e.children]}),(0,r.jsx)(a.xu,{pt:"20",children:(0,r.jsx)(O.$_,{})})]}),e.tableOfContents&&(0,r.jsx)(k,{tableOfContents:e.tableOfContents})]})})})]})]})};function E(e){return function(n){return(0,r.jsxs)(w,{children:[(0,r.jsx)(i.default,{children:(0,r.jsxs)("title",{children:["Player - ",e.title]})}),(0,r.jsx)(a.kC,{alignItems:"center",children:(0,r.jsx)(a.W2,{maxW:"container.lg",children:(0,r.jsx)(o.Zo,{components:l.tl,children:n.children})})})]})}}},56108:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});t(2784);var r=t(30876),s=t(43857);function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var a,o=(a="PlatformTabs",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",Object.assign({},e))}),l={},u=(0,s.Z)({title:"Expression",platform:"react,core,ios,android",tableOfContents:[{text:"Expression Plugin",id:"expression-plugin",level:1},{text:"Usage",id:"usage",level:2},{text:"Use",id:"use",level:3},{text:"Arguments",id:"arguments",level:3}]});function p(e){var n=e.components,t=i(e,["components"]);return(0,r.kt)(u,Object.assign({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",Object.assign({},{id:"expression-plugin"}),(0,r.kt)("a",Object.assign({parentName:"h1"},{href:"#expression-plugin"}),"Expression Plugin")),(0,r.kt)("p",null,"This plugin assists with exposing custom expressions to Player content."),(0,r.kt)("h2",Object.assign({},{id:"usage"}),(0,r.kt)("a",Object.assign({parentName:"h2"},{href:"#usage"}),"Usage")),(0,r.kt)(o,{mdxType:"PlatformTabs"},(0,r.kt)("core",null,(0,r.kt)("p",null,"Define handlers for the expressions you wish to add:"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { ExpressionHandler, ExpressionContext } from '@player-ui/expression-plugin';\n\nconst customExpressionHandler: ExpressionHandler = (ctx: ExpressionContext) => {\n  return 'Hello World!'\n}\n")),(0,r.kt)("p",null,"Register with Player. Subsequent registrations of an expression with the same name will override previous values."),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { Player } from '@player-ui/player';\nimport { ExpressionPlugin } from '@player-ui/expression-plugin';\n\nconst player = new Player({\n  plugins: [\n    new ExpressionPlugin([\n      ['myCustomFunction', customExpressionHandler]\n    ])\n  ]\n})\n")),(0,r.kt)("p",null,"Any calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"myCustomFunction()")," within the flow will utilize the newly registered expression:"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "asset": {\n    "id": "sample",\n    "type": "text",\n    "value": "@[ myCustomFunction() ]@"\n  }\n}\n'))),(0,r.kt)("ios",null,(0,r.kt)("h3",Object.assign({},{id:"use"}),(0,r.kt)("a",Object.assign({parentName:"h3"},{href:"#use"}),"Use")),(0,r.kt)("p",null,"The ExpressionPlugin lets you register custom expressions to run native code:"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "id": "textAsset",\n  "type": "text",\n  "value": "@[ myExpression() ]@"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-swift"}),'let expressionPlugin = ExpressionPlugin(expressions: [\n  "myExpression": { _ in\n        return "Some Value"\n    }\n])\n')),(0,r.kt)("h3",Object.assign({},{id:"arguments"}),(0,r.kt)("a",Object.assign({parentName:"h3"},{href:"#arguments"}),"Arguments")),(0,r.kt)("p",null,"Arguments can be passed to custom expressions, and your handler receives the arguments as an array of Any:"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "id": "textAsset",\n  "type": "text",\n  "value": "@[ myExpression(\'world\') ]@"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-swift"}),'let expressionPlugin = ExpressionPlugin(expressions: [\n  "myExpression": { (args: [Any]) -> Any? in\n        guard let string = args.first as? String else { return nil }\n        return "Hello " + string\n    }\n])\n'))),(0,r.kt)("android",null,(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ExpressionPlugin")," enables consumers to register custom expressions in native JVM code. Simply supply a map of expression name to handler on instantiation, and the expressions will be available within the content. Handlers receive arguments are as a ",(0,r.kt)("inlineCode",{parentName:"p"},"List<Any?>")," and are permitted to return ",(0,r.kt)("inlineCode",{parentName:"p"},"Any?"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-kotlin"}),'// A convenience constructor is provided that takes\n// varargs pairs of the expressions to register\nval expressionPlugin = ExpressionPlugin(\n     "hello" to { args: List<Any?> ->\n        when (val name = args.firstOfNull()) {\n            null -> "goodbye"\n            else -> "hello $name"\n        }\n    }\n)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "id": "hello-world-text",\n  "type": "text",\n  "value": "@[hello(\'world\')]@"\n}\n')))))}p.isMDXComponent=!0}},function(e){e.O(0,[6525,204,3795,9774,2888,179],(function(){return n=44415,e(e.s=n);var n}));var n=e.O();_N_E=n}]);