(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8686],{30876:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(2784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"===typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(t),d=i,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"===typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"===typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},87917:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugins/set-timeout",function(){return t(27235)}])},43857:function(e,n,t){"use strict";t.d(n,{Z:function(){return P}});var r=t(52322),i=t(2784),o=t(97729),a=t(64033),l=t(30876),u=t(21925),c=t(76808),s=t(55165),p=t(63637),f=t.n(p);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function m(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}var x=["id"],h=["id"],g="chakra-skip-nav",y={userSelect:"none",border:"0",height:"1px",width:"1px",margin:"-1px",padding:"0",outline:"0",overflow:"hidden",position:"absolute",clip:"rect(0 0 0 0)",_focus:{clip:"auto",width:"auto",height:"auto"}},v=(0,c.Gp)((function(e,n){var t=(0,c.mq)("SkipLink",e),r=(0,c.Lr)(e),o=r.id,a=void 0===o?g:o,l=m(r,x),u=f()({},y,t);return i.createElement(c.m$.a,d({},l,{ref:n,href:"#"+a,__css:u}))}));s.Ts&&(v.displayName="SkipNavLink");var b=(0,c.Gp)((function(e,n){var t=e.id,r=void 0===t?g:t,o=m(e,h);return i.createElement(c.m$.div,d({ref:n,id:r,tabIndex:-1,style:{outline:0}},o))}));s.Ts&&(b.displayName="SkipNavContent");var j=t(46977),O=t(96882),k=function(e){var n;return(0,r.jsxs)(a.xu,{display:{base:"none",xl:"block"},children:["Table Of Contents",(0,r.jsx)(a.GS,{spacing:1,ml:"0",mt:"4",styleType:"none",children:null===(n=e.tableOfContents)||void 0===n?void 0:n.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.id),children:e.text})},e.text)}))})]})},w=function(e){var n=i.useContext(j.Il).bannerExpanded,t="72px",o="calc(100vh - 88px - ".concat(n?t:"0px",")"),l="calc(100vh - 88px - 105px - ".concat(n?t:"0px",")");return(0,r.jsxs)(a.xu,{minH:"100vh",children:[(0,r.jsx)(v,{children:"Skip to Main Content"}),(0,r.jsxs)(a.kC,{flexDir:"column",padding:"2",children:[(0,r.jsx)(O._g,{}),(0,r.jsx)(a.iz,{}),(0,r.jsx)(a.kC,{children:(0,r.jsx)(a.xu,{as:"main",w:"100%",mx:"auto",children:(0,r.jsxs)(a.xu,{display:{md:"flex"},children:[(0,r.jsx)(a.xu,{display:{base:"none",md:"block"},overflow:"auto",maxH:o,pr:"8",ml:"4",children:(0,r.jsx)(O.Hy,{})}),(0,r.jsxs)(a.xu,{flex:"1",minW:"0",overflow:"auto",maxH:o,children:[(0,r.jsxs)(a.xu,{minH:l,children:[(0,r.jsx)(b,{}),e.children]}),(0,r.jsx)(a.xu,{pt:"20",children:(0,r.jsx)(O.$_,{})})]}),e.tableOfContents&&(0,r.jsx)(k,{tableOfContents:e.tableOfContents})]})})})]})]})};function P(e){return function(n){return(0,r.jsxs)(w,{children:[(0,r.jsx)(o.default,{children:(0,r.jsxs)("title",{children:["Player - ",e.title]})}),(0,r.jsx)(a.kC,{alignItems:"center",children:(0,r.jsx)(a.W2,{maxW:"container.lg",children:(0,r.jsx)(l.Zo,{components:u.tl,children:n.children})})})]})}}},27235:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});t(2784);var r=t(30876),i=t(43857);function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a={},l=(0,i.Z)({title:"setTimeout Plugin",platform:"android",tableOfContents:[{text:"setTimeout Plugin",id:"settimeout-plugin",level:1},{text:"Usage",id:"usage",level:2}]});function u(e){var n=e.components,t=o(e,["components"]);return(0,r.kt)(l,Object.assign({},a,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",Object.assign({},{id:"settimeout-plugin"}),(0,r.kt)("a",Object.assign({parentName:"h1"},{href:"#settimeout-plugin"}),"setTimeout Plugin")),(0,r.kt)("p",null,"The only explicit runtime plugin in the core Android plugin set, the ",(0,r.kt)("inlineCode",{parentName:"p"},"SetTimeoutPlugin")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"RuntimePlugin")," written to provide the global ",(0,r.kt)("inlineCode",{parentName:"p"},"setTimeout")," method to the runtime."),(0,r.kt)("h2",Object.assign({},{id:"usage"}),(0,r.kt)("a",Object.assign({parentName:"h2"},{href:"#usage"}),"Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-kotlin"}),"class PluginThatNeedsSetTimeout : RuntimePlugin {\n\n    override fun apply(runtime: Runtime) {\n        SetTimeoutPlugin().apply(runtime)\n        // do other plugin setup\n    }\n\n}\n")))}u.isMDXComponent=!0}},function(e){e.O(0,[6525,204,3795,9774,2888,179],(function(){return n=87917,e(e.s=n);var n}));var n=e.O();_N_E=n}]);