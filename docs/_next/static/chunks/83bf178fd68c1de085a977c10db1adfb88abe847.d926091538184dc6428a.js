(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,l=d.length;u<l;u++){var s=d[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],p=r[s]||new Set;"name"===s&&i||!p.has(f)?(p.add(f),r[s]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},KhfJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n("nKUr"),o=n("ODXe"),a=n("Ff2n"),i=n("q1tI"),c=n.n(i),u=n("LvDl"),l=n.n(u),s=c.a.createContext({});function f(e){var t,n,i,u,f=e.children,d=Object(a.a)(e,["children"]),p=c.a.useState(null!==(t=d.subtotal)&&void 0!==t?t:0),h=Object(o.a)(p,2),v=h[0],m=h[1],g=c.a.useState(null!==(n=d.shipping)&&void 0!==n?n:0),y=Object(o.a)(g,2),b=y[0],x=y[1],_=c.a.useState(null!==(i=d.total)&&void 0!==i?i:0),j=Object(o.a)(_,2),O=j[0],w=j[1],M=c.a.useState(null!==(u=d.items)&&void 0!==u?u:[]),C=Object(o.a)(M,2),S=C[0],k=C[1];return Object(r.jsx)(s.Provider,{value:{items:S,subtotal:v,shipping:b,total:O,handleAddItem:function(e){var t=S;t.push(e);var n,r=l.a.sumBy(t,(function(e){return e.price}));n=r>250?0:b+10,m(r),x(n),w(r+n),k(t)},handleRemoveItem:function(e){var t,n=l.a.filter(S,(function(t){return t.id!=e.id})),r=l.a.sumBy(n,(function(e){return e.price}));t=0==b?10*n.length:r>250?0:b,m(r),x(t),w(r+t),k(n)}},children:f})}},LY0y:function(e,t){(function(t){e.exports=function(){var e={880:function(e){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}},n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={exports:{}},a=!0;try{e[t](o,o.exports,r),a=!1}finally{a&&delete n[t]}return o.exports}return r.ab=t+"/",r(880)}()}).call(this,"/")},Nuje:function(e,t,n){e.exports={container:"container___FNdjX",containerleft:"containerleft___1SWsh",containerright:"containerright___moOUA",title:"title___2iwIS",logo:"logo___2MaY7",iconcart:"iconcart___1Qz6Q",badgecart:"badgecart___Q55Sj",textbadge:"textbadge___2p6dx",textlightMode:"textlightMode___2ZKZx",textdarkMode:"textdarkMode___hohRF",lightMode:"lightMode___1CmKM",darkMode:"darkMode___2AT-E"}},ODXe:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return o}))},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),f=function(e){i(n,e);var t=l(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),i=n("elyg"),c=n("nOHt"),u=n("vNVm"),l={};function s(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,m=e.shallow,g=e.scroll,y=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var b=a.Children.only(h),x=b&&"object"===typeof b&&b.ref,_=(0,u.useIntersection)({rootMargin:"200px"}),j=r(_,2),O=j[0],w=j[1],M=a.default.useCallback((function(e){O(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,O]);(0,a.useEffect)((function(){var e=w&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof y?y:n&&n.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(n,d,p,{locale:r})}),[p,d,w,y,t,n]);var C={ref:M,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,n,d,p,v,m,g,y)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),s(n,d,p,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var S="undefined"!==typeof y?y:n&&n.locale,k=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(p,S,n&&n.locales,n&&n.domainLocales);C.href=k||(0,i.addBasePath)((0,i.addLocale)(p,S,n&&n.defaultLocale))}return a.default.cloneElement(b,C)};t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},iuhU:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"===typeof e||"number"===typeof e)o+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},jrVH:function(e,t,n){"use strict";var r=n("nKUr"),o=n("q1tI"),a=n.n(o),i=n("YFqc"),c=n.n(i),u=n("iuhU"),l=n("tphb"),s=n("KhfJ"),f=n("Nuje"),d=n.n(f);t.a=function(){a.a.useContext(l.a).theme;var e=a.a.useContext(s.a),t=e.items;e.subtotal,e.shipping,e.total;return Object(r.jsxs)("div",{className:Object(u.a)(d.a.container,d.a.lightMode),children:[Object(r.jsxs)("div",{className:d.a.containerleft,children:[Object(r.jsx)("img",{src:"".concat("https://challenge-ecommerce-gamer-4n54ih5sn-oliveiraginelli.vercel.app/","/logo.svg"),className:d.a.logo}),Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("h3",{className:Object(u.a)(d.a.title,d.a.textdarkMode),children:"GameStore"})})]}),Object(r.jsxs)("div",{className:d.a.containerright,children:[Object(r.jsx)(c.a,{href:"/cart",children:Object(r.jsx)("img",{src:"".concat("https://challenge-ecommerce-gamer-4n54ih5sn-oliveiraginelli.vercel.app/","/assets/cart-icon.svg"),className:d.a.iconcart})}),t.length>0&&Object(r.jsx)("span",{className:d.a.badgecart,children:Object(r.jsx)("p",{className:d.a.textbadge,children:t.length})})]})]})}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},p46w:function(e,t,n){var r,o;!function(a){if(void 0===(o="function"===typeof(r=a)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=a(),!!0){var i=window.Cookies,c=window.Cookies=a();c.noConflict=function(){return window.Cookies=i,c}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function a(t,n,a){if("undefined"!==typeof document){"number"===typeof(a=e({path:"/"},o.defaults,a)).expires&&(a.expires=new Date(1*new Date+864e5*a.expires)),a.expires=a.expires?a.expires.toUTCString():"";try{var i=JSON.stringify(n);/^[\{\[]/.test(i)&&(n=i)}catch(l){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var u in a)a[u]&&(c+="; "+u,!0!==a[u]&&(c+="="+a[u].split(";")[0]));return document.cookie=t+"="+n+c}}function i(e,n){if("undefined"!==typeof document){for(var o={},a=document.cookie?document.cookie.split("; "):[],i=0;i<a.length;i++){var c=a[i].split("="),u=c.slice(1).join("=");n||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var l=t(c[0]);if(u=(r.read||r)(u,l)||t(u),n)try{u=JSON.parse(u)}catch(s){}if(o[l]=u,e===l)break}catch(s){}}return e?o[e]:o}}return o.set=a,o.get=function(e){return i(e,!1)},o.getJSON=function(e){return i(e,!0)},o.remove=function(t,n){a(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},tphb:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n("nKUr"),o=n("ODXe"),a=n("Ff2n"),i=n("q1tI"),c=n.n(i),u=n("p46w"),l=n.n(u),s=c.a.createContext({});function f(e){var t,n,i=e.children,u=Object(a.a)(e,["children"]),f=c.a.useState(null!==(t=u.theme)&&void 0!==t?t:"light-mode"),d=Object(o.a)(f,2),p=d[0],h=d[1],v=c.a.useState(null===(n=u.checked)||void 0===n||n),m=Object(o.a)(v,2),g=m[0],y=m[1];c.a.useEffect((function(){l.a.set("theme",String(p)),l.a.set("checked",String(g))}),[p,g]);return Object(r.jsx)(s.Provider,{value:{theme:p,toggleTheme:function(){h("light-mode"===p?"dark-mode":"light-mode"),y(!g)},checked:g},children:i})}},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,u=(0,o.useRef)(),l=(0,o.useState)(!1),s=r(l,2),f=s[0],d=s[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=n("q1tI"),a=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var c=new Map}}]);