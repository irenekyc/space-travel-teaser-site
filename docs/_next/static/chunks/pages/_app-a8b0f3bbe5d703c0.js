(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4184:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)){if(t.length){var i=a.apply(null,t);i&&e.push(i)}}else if("object"===o)if(t.toString===Object.prototype.toString)for(var l in t)r.call(t,l)&&t[l]&&e.push(l);else e.push(t.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(n,[]))||(e.exports=t)}()},6363:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(846)}])},8418:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(u){l=!0,a=u}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var o,i=(o=t(7294))&&o.__esModule?o:{default:o},l=t(6273),u=t(387),c=t(7190);var s={};function f(e,n,t,r){if(e&&l.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(a?"%"+a:"")]=!0}}var _=function(e){var n,t=!1!==e.prefetch,r=u.useRouter(),o=i.default.useMemo((function(){var n=a(l.resolveHref(r,e.href,!0),2),t=n[0],o=n[1];return{href:t,as:e.as?l.resolveHref(r,e.as):o||t}}),[r,e.href,e.as]),_=o.href,v=o.as,d=e.children,m=e.replace,p=e.shallow,h=e.scroll,b=e.locale;"string"===typeof d&&(d=i.default.createElement("a",null,d));var y=(n=i.default.Children.only(d))&&"object"===typeof n&&n.ref,g=a(c.useIntersection({rootMargin:"200px"}),2),x=g[0],j=g[1],M=i.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);i.default.useEffect((function(){var e=j&&t&&l.isLocalURL(_),n="undefined"!==typeof b?b:r&&r.locale,a=s[_+"%"+v+(n?"%"+n:"")];e&&!a&&f(r,_,v,{locale:n})}),[v,_,j,b,t,r]);var w={ref:M,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,i,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[a?"replace":"push"](t,r,{shallow:o,locale:u,scroll:i}))}(e,r,_,v,m,p,h,b)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l.isLocalURL(_)&&f(r,_,v,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var I="undefined"!==typeof b?b:r&&r.locale,N=r&&r.isLocaleDomain&&l.getDomainLocale(v,I,r&&r.locales,r&&r.domainLocales);w.href=N||l.addBasePath(l.addLocale(v,I,r&&r.defaultLocale))}return i.default.cloneElement(n,w)};n.default=_},7190:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(u){l=!0,a=u}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,r=e.disabled||!l,c=o.useRef(),s=a(o.useState(!1),2),f=s[0],_=s[1],v=a(o.useState(n?n.current:null),2),d=v[0],m=v[1],p=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||f||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,i=r.elements;return i.set(e,n),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),u.delete(a))}}(e,(function(e){return e&&_(e)}),{root:d,rootMargin:t}))}),[r,d,t,f]);return o.useEffect((function(){if(!l&&!f){var e=i.requestIdleCallback((function(){return _(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){n&&m(n.current)}),[n]),[p,f]};var o=t(7294),i=t(9311),l="undefined"!==typeof IntersectionObserver;var u=new Map},846:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return S}});var r=t(5893),a=(t(2100),t(7294)),o=t(663),i=t.n(o),l=t(4184),u=t.n(l),c=t(7892),s=t.n(c),f=[{number:"00",vanityName:"Home",route:"/"},{number:"01",vanityName:"Destination",route:"/destination"},{number:"02",vanityName:"Crew",route:"/crew"},{number:"03",vanityName:"Technology",route:"/technology"}],_=t(1664),v=function(e){var n=e.className;return(0,r.jsx)(_.default,{href:{pathname:"/"},passHref:!0,children:(0,r.jsx)("a",{className:u()(s().logo,n),children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",children:(0,r.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,r.jsx)("circle",{cx:"24",cy:"24",r:"24",fill:"#FFF"}),(0,r.jsx)("path",{fill:"#0B0D17",d:"M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"})]})})})})};v.defaultProps={className:""};var d=v,m=function(){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"21",children:(0,r.jsx)("g",{fill:"#D0D6F9",fillRule:"evenodd",children:(0,r.jsx)("path",{d:"M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"})})})},p=function(){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"21",children:(0,r.jsxs)("g",{fill:"#D0D6F9",fillRule:"evenodd",children:[(0,r.jsx)("path",{d:"M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"}),(0,r.jsx)("path",{d:"M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"})]})})},h=t(472),b=t.n(h),y=t(1163);var g=function(e){var n,t,a,o=e.navData,i=e.className,l=e.clickOnItem,c=o.vanityName,s=o.route,f=o.number,v=(0,y.useRouter)().pathname===s;return(0,r.jsx)("div",{className:u()(b().navItem,i,(n={},t=b().navItem__active,a=v,t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n)),onClick:l,children:(0,r.jsx)(_.default,{href:{pathname:s},passHref:!0,children:(0,r.jsxs)("a",{children:[(0,r.jsx)("strong",{className:b().navItem__number,children:f}),(0,r.jsx)("span",{className:b().navItem__text,children:c})]})})})};g.defaultProps={className:""};var x=g,j=t(1504),M=t.n(j);function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var I=function(e){var n,t=e.isOpen,a=e.clickOnNavItem;return(0,r.jsx)("div",{className:u()(M().mobileMenu,(n={},w(n,M().mobileMenu__active,t),w(n,M().mobileMenu__close,!t),n)),children:(0,r.jsx)("ul",{children:f.map((function(e){return(0,r.jsx)("li",{className:M().mobileMenu__item,children:(0,r.jsx)(x,{navData:e,className:M().mobileMenu__tab,clickOnItem:a})},e.number)}))})})},N=function(){var e=(0,a.useState)(!1),n=e[0],t=e[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("header",{className:i().header,children:(0,r.jsxs)("nav",{className:i().nav,children:[(0,r.jsxs)("div",{className:i().nav__left,children:[(0,r.jsx)(d,{}),(0,r.jsx)("button",{onClick:function(){return t(!n)},className:u()(i().hideInMD,i().nav__mobileMenuButton),children:n?(0,r.jsx)(p,{}):(0,r.jsx)(m,{})})]}),(0,r.jsx)("div",{className:i().nav__right,children:(0,r.jsx)("ul",{children:f.map((function(e){return(0,r.jsx)("li",{className:i().nav__item,children:(0,r.jsx)(x,{navData:e,clickOnItem:function(){}})},e.number)}))})})]})}),(0,r.jsx)(I,{isOpen:n,clickOnNavItem:function(){return t(!1)}})]})},O=t(3630),E=t.n(O),H=function(e){var n=e.children;return(0,r.jsxs)("div",{className:E().layout,children:[(0,r.jsx)(N,{}),n]})};function k(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function L(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){k(e,n,t[n])}))}return e}var S=function(e){var n=e.Component,t=e.pageProps;return(0,r.jsx)(H,{children:(0,r.jsx)(n,L({},t))})}},663:function(e){e.exports={header:"Header_header__RW35m",nav:"Header_nav__zzP3p",nav__left:"Header_nav__left__zWIRV",nav__right:"Header_nav__right__8hOI1",nav__item:"Header_nav__item__w_aaT",nav__mobileMenuButton:"Header_nav__mobileMenuButton__Mj8b5",hideInMD:"Header_hideInMD__r47c5","blend-in":"Header_blend-in__2HxsH"}},3630:function(e){e.exports={layout:"Layout_layout__LZ0W_"}},7892:function(e){e.exports={logo:"Logo_logo__GvmSc","blend-in":"Logo_blend-in__4CtPC"}},1504:function(e){e.exports={mobileMenu:"MobileMenu_mobileMenu__EEZJ6",mobileMenu__active:"MobileMenu_mobileMenu__active__fWHxE",mobileMenu__close:"MobileMenu_mobileMenu__close__guhbB",mobileMenu__tab:"MobileMenu_mobileMenu__tab__1NX9j","blend-in":"MobileMenu_blend-in__afvi_"}},472:function(e){e.exports={navItem:"NavItem_navItem__7gNOq",navItem__active:"NavItem_navItem__active__J5b0R",navItem__text:"NavItem_navItem__text__8ZtKy",navItem__number:"NavItem_navItem__number__5ajJ_","blend-in":"NavItem_blend-in__HmIbX"}},2100:function(){},1664:function(e,n,t){e.exports=t(8418)},1163:function(e,n,t){e.exports=t(387)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(6363),n(387)}));var t=e.O();_N_E=t}]);