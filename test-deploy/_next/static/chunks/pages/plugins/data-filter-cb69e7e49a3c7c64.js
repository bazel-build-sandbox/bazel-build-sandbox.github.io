(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5324],{30876:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"===typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(t),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"===typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"===typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},24002:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugins/data-filter",function(){return t(57208)}])},43857:function(e,n,t){"use strict";t.d(n,{Z:function(){return P}});var r=t(52322),a=t(2784),i=t(97729),o=t(64033),l=t(30876),c=t(21925),s=t(76808),u=t(55165),p=t(63637),f=t.n(p);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function m(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}var x=["id"],h=["id"],y="chakra-skip-nav",g={userSelect:"none",border:"0",height:"1px",width:"1px",margin:"-1px",padding:"0",outline:"0",overflow:"hidden",position:"absolute",clip:"rect(0 0 0 0)",_focus:{clip:"auto",width:"auto",height:"auto"}},b=(0,s.Gp)((function(e,n){var t=(0,s.mq)("SkipLink",e),r=(0,s.Lr)(e),i=r.id,o=void 0===i?y:i,l=m(r,x),c=f()({},g,t);return a.createElement(s.m$.a,d({},l,{ref:n,href:"#"+o,__css:c}))}));u.Ts&&(b.displayName="SkipNavLink");var v=(0,s.Gp)((function(e,n){var t=e.id,r=void 0===t?y:t,i=m(e,h);return a.createElement(s.m$.div,d({ref:n,id:r,tabIndex:-1,style:{outline:0}},i))}));u.Ts&&(v.displayName="SkipNavContent");var j=t(46977),O=t(96882),k=function(e){var n;return(0,r.jsxs)(o.xu,{display:{base:"none",xl:"block"},children:["Table Of Contents",(0,r.jsx)(o.GS,{spacing:1,ml:"0",mt:"4",styleType:"none",children:null===(n=e.tableOfContents)||void 0===n?void 0:n.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.id),children:e.text})},e.text)}))})]})},w=function(e){var n=a.useContext(j.Il).bannerExpanded,t="72px",i="calc(100vh - 88px - ".concat(n?t:"0px",")"),l="calc(100vh - 88px - 105px - ".concat(n?t:"0px",")");return(0,r.jsxs)(o.xu,{minH:"100vh",children:[(0,r.jsx)(b,{children:"Skip to Main Content"}),(0,r.jsxs)(o.kC,{flexDir:"column",padding:"2",children:[(0,r.jsx)(O._g,{}),(0,r.jsx)(o.iz,{}),(0,r.jsx)(o.kC,{children:(0,r.jsx)(o.xu,{as:"main",w:"100%",mx:"auto",children:(0,r.jsxs)(o.xu,{display:{md:"flex"},children:[(0,r.jsx)(o.xu,{display:{base:"none",md:"block"},overflow:"auto",maxH:i,pr:"8",ml:"4",children:(0,r.jsx)(O.Hy,{})}),(0,r.jsxs)(o.xu,{flex:"1",minW:"0",overflow:"auto",maxH:i,children:[(0,r.jsxs)(o.xu,{minH:l,children:[(0,r.jsx)(v,{}),e.children]}),(0,r.jsx)(o.xu,{pt:"20",children:(0,r.jsx)(O.$_,{})})]}),e.tableOfContents&&(0,r.jsx)(k,{tableOfContents:e.tableOfContents})]})})})]})]})};function P(e){return function(n){return(0,r.jsxs)(w,{children:[(0,r.jsx)(i.default,{children:(0,r.jsxs)("title",{children:["Player - ",e.title]})}),(0,r.jsx)(o.kC,{alignItems:"center",children:(0,r.jsx)(o.W2,{maxW:"container.lg",children:(0,r.jsx)(l.Zo,{components:c.tl,children:n.children})})})]})}}},57208:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});t(2784);var r=t(30876),a=t(43857);function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o,l=(o="PlatformTabs",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",Object.assign({},e))}),c={},s=(0,a.Z)({title:"Data Filter",platform:"react,core",tableOfContents:[{text:"Data Filter Plugin",id:"data-filter-plugin",level:1},{text:"Usage",id:"usage",level:2}]});function u(e){var n=e.components,t=i(e,["components"]);return(0,r.kt)(s,Object.assign({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",Object.assign({},{id:"data-filter-plugin"}),(0,r.kt)("a",Object.assign({parentName:"h1"},{href:"#data-filter-plugin"}),"Data Filter Plugin")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"data-filter-plugin")," enables users to filter out segments of the data-model during serialization."),(0,r.kt)("h2",Object.assign({},{id:"usage"}),(0,r.kt)("a",Object.assign({parentName:"h2"},{href:"#usage"}),"Usage")),(0,r.kt)(l,{mdxType:"PlatformTabs"},(0,r.kt)("core",null,(0,r.kt)("p",null,"Add the plugin to Player and configure the exclusion paths:"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { Player } from '@player-ui/player';\nimport { DataFilterPlugin } from '@player-ui/data-filter-plugin';\n\nconst player = new Player({\n  plugins: [\n    new DataFilterPlugin({\n      paths: ['local', 'constants'],\n    }),\n  ],\n});\n")),(0,r.kt)("p",null,"This will exclude any top-level ",(0,r.kt)("inlineCode",{parentName:"p"},"local")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"constants")," paths in the data-model from appearing in the serialized response."))))}u.isMDXComponent=!0}},function(e){e.O(0,[6525,204,3795,9774,2888,179],(function(){return n=24002,e(e.s=n);var n}));var n=e.O();_N_E=n}]);