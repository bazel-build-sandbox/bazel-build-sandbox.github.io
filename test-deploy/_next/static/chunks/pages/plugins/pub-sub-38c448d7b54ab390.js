(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5065],{30876:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"===typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=u(t),d=a,f=b["".concat(l,".").concat(d)]||b[d]||c[d]||i;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"===typeof e||a){var i=t.length,s=new Array(i);s[0]=b;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"===typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},41620:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugins/pub-sub",function(){return t(60187)}])},43857:function(e,n,t){"use strict";t.d(n,{Z:function(){return N}});var r=t(52322),a=t(2784),i=t(97729),s=t(64033),o=t(30876),l=t(21925),u=t(76808),p=t(55165),c=t(63637),b=t.n(c);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function f(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}var m=["id"],g=["id"],h="chakra-skip-nav",y={userSelect:"none",border:"0",height:"1px",width:"1px",margin:"-1px",padding:"0",outline:"0",overflow:"hidden",position:"absolute",clip:"rect(0 0 0 0)",_focus:{clip:"auto",width:"auto",height:"auto"}},v=(0,u.Gp)((function(e,n){var t=(0,u.mq)("SkipLink",e),r=(0,u.Lr)(e),i=r.id,s=void 0===i?h:i,o=f(r,m),l=b()({},y,t);return a.createElement(u.m$.a,d({},o,{ref:n,href:"#"+s,__css:l}))}));p.Ts&&(v.displayName="SkipNavLink");var x=(0,u.Gp)((function(e,n){var t=e.id,r=void 0===t?h:t,i=f(e,g);return a.createElement(u.m$.div,d({ref:n,id:r,tabIndex:-1,style:{outline:0}},i))}));p.Ts&&(x.displayName="SkipNavContent");var k=t(46977),j=t(96882),O=function(e){var n;return(0,r.jsxs)(s.xu,{display:{base:"none",xl:"block"},children:["Table Of Contents",(0,r.jsx)(s.GS,{spacing:1,ml:"0",mt:"4",styleType:"none",children:null===(n=e.tableOfContents)||void 0===n?void 0:n.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.id),children:e.text})},e.text)}))})]})},P=function(e){var n=a.useContext(k.Il).bannerExpanded,t="72px",i="calc(100vh - 88px - ".concat(n?t:"0px",")"),o="calc(100vh - 88px - 105px - ".concat(n?t:"0px",")");return(0,r.jsxs)(s.xu,{minH:"100vh",children:[(0,r.jsx)(v,{children:"Skip to Main Content"}),(0,r.jsxs)(s.kC,{flexDir:"column",padding:"2",children:[(0,r.jsx)(j._g,{}),(0,r.jsx)(s.iz,{}),(0,r.jsx)(s.kC,{children:(0,r.jsx)(s.xu,{as:"main",w:"100%",mx:"auto",children:(0,r.jsxs)(s.xu,{display:{md:"flex"},children:[(0,r.jsx)(s.xu,{display:{base:"none",md:"block"},overflow:"auto",maxH:i,pr:"8",ml:"4",children:(0,r.jsx)(j.Hy,{})}),(0,r.jsxs)(s.xu,{flex:"1",minW:"0",overflow:"auto",maxH:i,children:[(0,r.jsxs)(s.xu,{minH:o,children:[(0,r.jsx)(x,{}),e.children]}),(0,r.jsx)(s.xu,{pt:"20",children:(0,r.jsx)(j.$_,{})})]}),e.tableOfContents&&(0,r.jsx)(O,{tableOfContents:e.tableOfContents})]})})})]})]})};function N(e){return function(n){return(0,r.jsxs)(P,{children:[(0,r.jsx)(i.default,{children:(0,r.jsxs)("title",{children:["Player - ",e.title]})}),(0,r.jsx)(s.kC,{alignItems:"center",children:(0,r.jsx)(s.W2,{maxW:"container.lg",children:(0,r.jsx)(o.Zo,{components:l.tl,children:n.children})})})]})}}},60187:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});t(2784);var r=t(30876),a=t(43857);function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s,o=(s="PlatformTabs",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",Object.assign({},e))}),l={},u=(0,a.Z)({title:"PubSub",platform:"core,react,ios,android",tableOfContents:[{text:"PubSub Plugin",id:"pubsub-plugin",level:1},{text:"Usage",id:"usage",level:2},{text:"Publish Expression",id:"publish-expression",level:2}]});function p(e){var n=e.components,t=i(e,["components"]);return(0,r.kt)(u,Object.assign({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",Object.assign({},{id:"pubsub-plugin"}),(0,r.kt)("a",Object.assign({parentName:"h1"},{href:"#pubsub-plugin"}),"PubSub Plugin")),(0,r.kt)("p",null,"The PubSub plugin adds a publish/subscribe interface between the host app and Player\u2019s content. "),(0,r.kt)("h2",Object.assign({},{id:"usage"}),(0,r.kt)("a",Object.assign({parentName:"h2"},{href:"#usage"}),"Usage")),(0,r.kt)(o,{mdxType:"PlatformTabs"},(0,r.kt)("core",null,(0,r.kt)("p",null,"Add the plugin to Player:"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { Player } from '@player-ui/player';\nimport { PubSubPlugin } from '@player-ui/pub-sub-plugin';\n\nconst pubsub = new PubSubPlugin();\n\nconst token = pubsub.subscribe('some-event', () => {\n  // Callback\n});\n\nconst player = new Player({\n  plugins: [pubsub]\n})\n")),(0,r.kt)("p",null,"To unsubscribe:"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"pubsub.unsubscribe(token);\n"))),(0,r.kt)("ios",null,(0,r.kt)("p",null,"If your content uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"@[ publish() ]@")," expression for actions, you can subscribe to these events by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"PubSubPlugin")," to your plugin array:"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-swift"}),'let eventHandler: (String, AnyType?) -> Void = { (eventName, eventData) in\n  // Handle event\n}\nlet plugin = PubSubPlugin([("eventName", eventHandler)])\n')),(0,r.kt)("p",null,"If your content uses a different name for publishing (such as publishEvent) you can customize the expression name that the plugin uses:"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-swift"}),'let plugin = PubSubPlugin([("eventName", eventHandler)], options: PubSubPluginOptions(expressionName: "publishEvent"))\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: AnyType is a custom enum type to handle the arbitrary types that can be received from these events, as the data is set in your Player Content, ensure that it matches either String, ","[String]",", or ","[String: String]","."))),(0,r.kt)("android",null,(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"PubSubPlugin")," provides support for handling the publish expressions in Player content at the app level. The PubSubPlugin is included by default in the Android Player, so configuring events subscriptions can be done on Player using the provided extension methods."),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "id": "action",\n  "type": "action",\n  "exp": "@[ publish(\'some-event\', {{foo.bar}}) ]@"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-kotlin"}),'val player = AndroidPlayer(context)\n\n// extension method for subscribing to some event\nval token = player.subscribe("some-event") { name: String, data: Any? ->\n    // name of event can be used for logging\n    // data can be any structure passed by the content, if any\n    // handle event\n}\n\n// extension method for removing a specific event subscription \nplayer.unsubscribe(token)\n')))),(0,r.kt)("h2",Object.assign({},{id:"publish-expression"}),(0,r.kt)("a",Object.assign({parentName:"h2"},{href:"#publish-expression"}),"Publish Expression")),(0,r.kt)("p",null,"To trigger an event to be published, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"publish()")," expression in Player\u2019s content: "),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "asset": {\n    "id": "sample",\n    "type": "action",\n    "exp": "@[ publish(\'some-event\', \'some optional data\') ]@""\n  }\n}\n')))}p.isMDXComponent=!0}},function(e){e.O(0,[6525,204,3795,9774,2888,179],(function(){return n=41620,e(e.s=n);var n}));var n=e.O();_N_E=n}]);