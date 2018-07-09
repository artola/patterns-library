var StyleGuideWebComponent=function(){"use strict";var e,m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0},i=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function e(t,n,o,i){var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,i)}else if("value"in r&&r.writable)r.value=o;else{var s=r.set;void 0!==s&&s.call(i,o)}return o},r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},k=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},f=(function(e){!function(){var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=void 0===n?"undefined":m(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===o)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}(e={exports:{}},e.exports),e.exports),n="@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.m-header-mobile-navigation {\n  display: block; }\n  .m-header-mobile-navigation:first-child {\n    margin-top: -20px; }\n\n.m-header-mobile-navigation--relative {\n  position: relative;\n  overflow: hidden; }\n\n.m-header-mobile-navigation__nav {\n  display: block;\n  background: #fff; }\n  .m-header-mobile-navigation__nav .m-header-mobile-navigation__nav {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    z-index: 1050;\n    min-height: 100%;\n    -webkit-transform: translateX(110%);\n            transform: translateX(110%);\n    -webkit-transition: -webkit-transform 0.2s ease;\n    transition: -webkit-transform 0.2s ease;\n    transition: transform 0.2s ease;\n    transition: transform 0.2s ease, -webkit-transform 0.2s ease; }\n    @media (min-width: 576px) {\n      .m-header-mobile-navigation__nav .m-header-mobile-navigation__nav {\n        left: 10px;\n        -webkit-box-shadow: -5px 0 10px -5px rgba(0, 0, 0, 0.3);\n                box-shadow: -5px 0 10px -5px rgba(0, 0, 0, 0.3); } }\n  .is-header-mobile-navigation-nav-open > .m-header-mobile-navigation__nav {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n\n.m-header-mobile-navigation--gpu .m-header-mobile-navigation__nav .m-header-mobile-navigation--gpu .m-header-mobile-navigation__nav {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform: translate3d(110%, 0, 0);\n          transform: translate3d(110%, 0, 0); }\n\n.is-header-mobile-navigation-nav-open > .m-header-mobile-navigation--gpu .m-header-mobile-navigation__nav {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.m-header-mobile-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none; }\n\n.m-header-mobile-navigation__list-item {\n  display: block;\n  border-bottom: 1px solid #ccc; }\n  .m-header-mobile-navigation__list-item:first-child {\n    border-top: 1px solid #ccc; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__back,\n.m-header-mobile-navigation__list-link {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  color: #00008f;\n  cursor: pointer;\n  position: relative;\n  display: block;\n  padding-left: 60px;\n  padding-right: 40px;\n  text-transform: uppercase; }\n  .m-header-mobile-navigation__category.is-header-mobile-navigation-active, .m-header-mobile-navigation__category:hover, .m-header-mobile-navigation__category:active, .m-header-mobile-navigation__category:focus,\n  .m-header-mobile-navigation__back.is-header-mobile-navigation-active,\n  .m-header-mobile-navigation__back:hover,\n  .m-header-mobile-navigation__back:active,\n  .m-header-mobile-navigation__back:focus,\n  .m-header-mobile-navigation__list-link.is-header-mobile-navigation-active,\n  .m-header-mobile-navigation__list-link:hover,\n  .m-header-mobile-navigation__list-link:active,\n  .m-header-mobile-navigation__list-link:focus {\n    color: #00005b; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__back {\n  background: transparent;\n  border: none;\n  background: transparent;\n  text-align: left; }\n  .m-header-mobile-navigation__category:hover, .m-header-mobile-navigation__category:active, .m-header-mobile-navigation__category:focus,\n  .m-header-mobile-navigation__back:hover,\n  .m-header-mobile-navigation__back:active,\n  .m-header-mobile-navigation__back:focus {\n    outline: none;\n    cursor: pointer; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__list-link {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n  @media (min-width: 576px) {\n    .m-header-mobile-navigation__category,\n    .m-header-mobile-navigation__list-link {\n      font-size: 16px; } }\n\n.m-header-mobile-navigation__category {\n  padding-right: 70px; }\n\n.m-header-mobile-navigation__back {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  padding-left: 105px; }\n  @media (min-width: 576px) {\n    .m-header-mobile-navigation__back {\n      font-size: 24px;\n      line-height: 1.2; } }\n\n.m-header-mobile-navigation__icon-next,\n.m-header-mobile-navigation__icon-back {\n  width: 15px;\n  height: 15px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  margin-top: -7.5px;\n  pointer-events: none; }\n\n.m-header-mobile-navigation__icon-next {\n  right: 40px;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.m-header-mobile-navigation__icon-back {\n  left: 60px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n",v=/\n[\s]+$/,b=/^\n[\s]+/,_=/[\s]+$/,y=/^[\s]+/,g=/[\n\s]+/g,x=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],C=["code","pre","textarea"],O=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var d=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,d&&"#text"===d.nodeName?d.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),d=c),s===l-1&&(a=!1,-1===x.indexOf(r)&&-1===C.indexOf(r)?""===(o=d.nodeValue.replace(b,"").replace(_,"").replace(v,"").replace(g," "))?t.removeChild(d):d.nodeValue=o:-1===C.indexOf(r)&&(i=0===s?"":" ",o=d.nodeValue.replace(b,i).replace(y," ").replace(_,"").replace(v,"").replace(g," "),d.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===x.indexOf(r)&&-1===C.indexOf(r)?""===(o=d.nodeValue.replace(b,"").replace(v,"").replace(g," "))?t.removeChild(d):d.nodeValue=o:-1===C.indexOf(r)&&(o=d.nodeValue.replace(y," ").replace(b,"").replace(v,"").replace(g," "),d.nodeValue=o));var u=c.nodeName;u&&(r=u.toLowerCase()),t.appendChild(c)}}}};function l(e){var t,n,o,i,r=e.name,a=e.url,s=void 0===a?"":a,l=e.isActive,c=e.items,d=!!c,u={"is-header-mobile-navigation-active":l},p=f("m-header-mobile-navigation__category","js-header-mobile-navigation__category",u),h=f("m-header-mobile-navigation__list-link","js-header-mobile-navigation__list-link","js-header-mobile-close",u);return(t=document.createElement("li")).setAttribute("class","m-header-mobile-navigation__list-item"),O(t,["\n      ",d?[(o=document.createElement("button"),o.setAttribute("type","button"),o.setAttribute("class",""+String(p)),O(o,["\n          ",r,"\n          ",(n=document.createElement("axa-icon"),n.setAttribute("icon","angle-bracket-down"),n.setAttribute("classes","m-header-mobile-navigation__icon-next"),n),"\n        "]),o),w(c,e)]:(i=document.createElement("a"),i.setAttribute("href",""+String(s)),i.setAttribute("class",""+String(h)),O(i,[r]),i),"\n    "]),t}function w(e,t){var n,o,i,r;return(o=document.createElement("div")).setAttribute("class",""+String(f("m-header-mobile-navigation__nav",{"js-header-mobile-navigation__nav":!t}))),O(o,["\n      ",t&&(r=document.createElement("button"),r.setAttribute("type","button"),r.setAttribute("class","m-header-mobile-navigation__back js-header-mobile-navigation__back"),O(r,["\n          ",(i=document.createElement("axa-icon"),i.setAttribute("icon","angle-bracket-down"),i.setAttribute("classes","m-header-mobile-navigation__icon-back"),i),"\n          ",t.name,"\n        "]),r),"\n      ",(n=document.createElement("ul"),n.setAttribute("class","m-header-mobile-navigation__list"),O(n,["\n        ",t&&l(a({},t,{name:"index page",items:null})),"\n        ",Array.isArray(e)&&e.map(l),"\n      "]),n),"\n    "]),o}var c=function(e){return w(e.items)},t={},A=function(e){return e in t||(t[e]=0),++t[e]},N=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,r,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function E(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=new N(t,a({},o,{detail:n}));return e.dispatchEvent(i)}var j=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),P=/^\s+|\s{2,}|\s+$/g;function T(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function S(e,t){var n=t.className;return t.hasClass||e.push(n),e}function R(e){for(var n=e.className,o=!1,i=!0,t=arguments.length,r=Array(1<t?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];var s=r.map(function(e){var t=T(e).test(n);t?o=!0:i=!1;return{className:e,hasClass:t}});return!(!i&&!o)&&s}function M(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=R.apply(void 0,[e].concat(n));if(!1!==i){var r=[].concat(n);if(Array.isArray(i)&&(r=i.reduce(D,[])),r){var a=e.className;e.className=r.reduce(L,a)}}}function D(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function L(e,t){var n=T(t,"g");return e.replace(n," ").replace(P," ")}var U=/\s+/,V={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(void 0!==e[i=n[r]])return t[i];return""}()};function F(n,e,o,i){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},r=t.capture,a=void 0!==r&&r,s=t.passive,l=void 0===s||s;if(V[e]&&(e=V[e]),!n||!e)return null;var c=void 0===o?"undefined":m(o),d=o&&"string"===c;if("function"===c){if(i){var u=i;a=u.capture,l=u.passive}i=o}for(var p=j?{capture:a,passive:l}:a,h=d?function(e){var t=e.target;for(;!R(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return i(e,t)}:i,f=e.split(U),v=f.length,b=0;b<v;++b)n.addEventListener(f[b],h,p);return function e(){for(var t=0;t<v;++t)n.removeEventListener(f[t],h,p);!function(e,t){if(!e)return;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}}(this,e)}}function I(o){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,r=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,c=void 0,d=void 0,u=void 0,p=void 0,h=!1,f=i!==l,v=!1!==l;function b(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,f&&(d&&clearTimeout(d),d=setTimeout(m,i)),v&&!u&&(u=setTimeout(_,l)),r&&!h&&(h=!0,p=o.apply(void 0,k(c))),p}return b.flush=function(){(d||u)&&(p=o.apply(void 0,k(c)));return g(),p},b.cancel=g,b;function m(){u&&clearTimeout(u),y()}function _(){d&&clearTimeout(d),y()}function y(){a&&(p=o.apply(void 0,k(c))),u=d=null,h=!1}function g(){d&&(clearTimeout(d),d=null),u&&(clearTimeout(u),u=null),c=void 0,h=!1}}var z={};function B(e,t){var n=F(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);z[e]||(z[e]={count:0});var o,i=z[e];return i.count++,i.onsubscribe||(i.onsubscribe=I((o=e,function(){E(document,"pubsub/onsubscribe",o),E(document,"pubsub/onsubscribe/"+o,o),z[o]&&delete z[o].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete z[e]}}F(document,"pubsub/onsubscribe",function(e){var t=e.detail;z[t]||(z[t]={count:0});var n=z[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=r(e,3),n=t[0],o=t[1],i=t[2];E(i,n,o)}),delete n.queue)});var H,q=function(e,t){return e===t},W=((H=function(){var e;return(e=console).log.apply(e,arguments)},function(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:q;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return i.apply(void 0,[].concat(o,t))?H.apply(void 0,arguments):void 0}}}})()(!0),function(e){function l(e,t){var n;d(this,l);for(var o="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",i=arguments.length,r=Array(2<i?i-2:0),a=2;a<i;a++)r[a-2]=arguments[a];var s=p(this,(n=l.__proto__||Object.getPrototypeOf(l)).call.apply(n,[this,o].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(s,l),s.name="PropertyExistsException",s}return i(l,e),l}(Error)),$=/[A-Z]/g;function X(e,t,n){var o=e.toLowerCase(),i=n.charAt(t+1);return 0===t||i.toUpperCase()===i?o:"-"+o}var K=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function G(t,n){var e=t;if(t&&n!==t){if(K.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}var Z=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,J=/[-_]+/g;function Q(e){return e.replace(Z,Y)}function Y(e,t){return 0==+e||J.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var ee=["title","checked","disabled"],te=[];var ne=1,oe=3,ie=8;function re(e,t){var n=e.nodeType,o=e.nodeName;n===ne&&function(e,t){for(var n=t.attributes,o=e.attributes,i=null,r=null,a=null,s=null,l=o.length-1;0<=l;--l)if(s=o[l],a=s.name,i=s.namespaceURI,r=s.value,i){var c=s.localName;t.getAttributeNS(i,c||a)!==r&&t.setAttributeNS(i,a,r)}else t.hasAttribute(a)?t.getAttribute(a)!==r&&("null"===r||"undefined"===r?t.removeAttribute(a):t.setAttribute(a,r)):t.setAttribute(a,r);for(var d=n.length-1;0<=d;--d)!1!==(s=n[d]).specified&&(a=s.name,(i=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(i,a)||t.removeAttributeNS(i,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==oe&&n!==ie||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;ae(e,t,"checked"),ae(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?ae(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function ae(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var se=3;function le(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(re(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,i=void 0,r=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(ce(o,n))(i=le(o,n))!==n&&(t.replaceChild(i,n),a++);else{r=null;for(var l=s;l<t.childNodes.length;l++)if(ce(t.childNodes[l],o)){r=t.childNodes[l];break}r?((i=le(o,r))!==r&&a++,t.insertBefore(i,n)):o.id||n.id?(t.insertBefore(o,n),a++):(i=le(o,n))!==n&&(t.replaceChild(i,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function ce(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===se&&e.nodeValue===t.nodeValue)}var de=function(e){function s(e){var t;d(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,i=Array(1<o?o-1:0),r=1;r<o;r++)i[r-1]=arguments[r];var a=p(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return i(s,e),s}(Error),ue=!!document.createDocumentFragment().children;function pe(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(pe.prototype,HTMLElement.prototype),Object.setPrototypeOf(pe,HTMLElement);var he=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;d(this,a);for(var o=arguments.length,i=Array(o),r=0;r<o;r++)i[r]=arguments[r];return(t=n=p(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(i))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=B("context/available",n._makeContextReady)},p(n,t)}return i(a,t),o(a,[{key:"connectedCallback",value:function(){u(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&u(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){u(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&u(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;z[e]||(z[e]={count:0,queue:[]});var o=z[e].queue;Array.isArray(o)?o.push([e,t,n]):E(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return d(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,t),o(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function c(e){d(this,c);var l=p(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));l._reduceProps=function(e,t){var n=e.props,o=e.shouldUpdate,i=l._hasKeys[t];if(-1===ee.indexOf(t)&&i)throw new W(t,l);var r="_"+t,a=n[t],s=l[r];return o||l.shouldUpdateCallback(a,s)?(l[r]=a,l._props[t]=a,i&&h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,a,l),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},l._isConnected=!1,l._props={},l._hasKeys={},l.updatedDebounced=I(function(){return l.updated&&l.updated()},50);var t=l.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,n=Q(e),o=n in l;if(-1===ee.indexOf(n)&&o)throw new W(n,l);l._hasKeys[n]=o,Object.defineProperty(l,n,t={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,o&&h(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),l}return i(c,t),o(c,[{key:"connectedCallback",value:function(){var i=this;if(u(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this)&&u(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=Q(e);if(i.hasAttribute(e)){var n=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=G(n,t)}(i,e),o=i._hasKeys[t];i._props[t]=n,o&&h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,n,i)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[Q(e)]=G(n))}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<n.indexOf(e.replace($,X))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),c}()},function(t){return function(e){function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=s(e,["template"]);d(this,l);var o=p(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,n));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return i(l,t),o(l,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),i=[];this.firstChild;)i.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=i,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});ue||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var r=t(this._props,this.childrenFragment),a=document.createDocumentFragment();if(Array.isArray(r))r.forEach(function(e){a.appendChild(e)});else if(r){if("string"==typeof r)throw new de(this);a.appendChild(r)}if(e)u(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":m(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":m(t)))throw new Error("componentMorph: newTree should be an object");le(t,e)}(this,s),function(){for(var e=void 0;e=te.pop();)delete e.isSameNode;te=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),l}()},function(t){return function(e){function r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=s(e,["styles"]);d(this,r);var i=p(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,o));return i._styles=n,i}return i(r,t),o(r,[{key:"connectedCallback",value:function(){u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),r}()})(function(e){function n(e){d(this,n);var t=p(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=A(t.nodeName),t}return i(n,pe),o(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),fe={},ve=function(e){function a(){var e,t,n;d(this,a);for(var o=arguments.length,i=Array(o),r=0;r<o;r++)i[r]=arguments[r];return(t=n=p(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(i))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},p(n,t)}return i(a,he),o(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:he.uuidv4();if(e&&!fe[t]){var n=document.createElement("style"),o=document.createTextNode(e);fe[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var be=function(){function n(e,t){var r=this;d(this,n),this.open=function(){r.isOpen=!0},this.close=function(){r.isOpen=!1},this.fadeFinish=function(){if(!r.isOpen&&r.opened)for(var e=r.opened.pop();e;){M(e.parentNode,r.options.isSubMenuOpenClass),e=r.opened.pop()}},this.handleCategoryClick=function(e,t){r.options.preventDefault||e.preventDefault();var n=t.parentNode;if(n.lastChild!==t){var o=r.wcNode.parentNode.parentNode,i=o.scrollTop;!function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=R.apply(void 0,[e].concat(n));if(!0!==i){var r=[].concat(n);Array.isArray(i)&&(r=i.reduce(S,[])),r&&(e.className+=" "+r.join(" "))}}(n,r.options.isSubMenuOpenClass),o.scrollTop=0,r.opened.push({parentNode:n,scrollTop:i})}},this.handleBackClick=function(e){r.options.preventDefault||e.preventDefault();var t=r.opened.pop(),n=t.parentNode,o=t.scrollTop,i=r.wcNode.parentNode.parentNode;M(n,r.options.isSubMenuOpenClass),i.scrollTop=o},this.wcNode=e,this.options=a({},n.DEFAULTS,t),this.isOpen=!1,this.opened=[],this.init()}return o(n,[{key:"init",value:function(){this.nav=this.wcNode.querySelector(this.options.nav),this.on()}},{key:"on",value:function(){this.off(),this.unCategoryClick=F(this.nav,"click",this.options.category,this.handleCategoryClick,{passive:!1}),this.unBackClick=F(this.nav,"click",this.options.back,this.handleBackClick,{passive:!1})}},{key:"off",value:function(){this.unCategoryClick&&this.unCategoryClick(),this.unBackClick&&this.unBackClick(),this.offContextEnabled()}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeOpen=B("header-mobile/open",this.open,this._contextNode),this.unSubscribeClose=B("header-mobile/close",this.close,this._contextNode),this.unSubscribeFadeFinish=B("header-mobile/fade-finish",this.fadeFinish,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeOpen&&this.unSubscribeOpen(),this.unSubscribeClose&&this.unSubscribeClose()}},{key:"destroy",value:function(){this.off(),delete this.wcNode,delete this.nav,delete this._contextNode,delete this.opened}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),n}();be.DEFAULTS={nav:".js-header-mobile-navigation__nav",category:"js-header-mobile-navigation__category",back:"js-header-mobile-navigation__back",isSubMenuOpenClass:"is-header-mobile-navigation-nav-open"};var me,_e,ye=function(e){function t(){d(this,t);var e=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:n,template:c}));return e.consumeContext("axa-header"),e}return i(t,ve),o(t,null,[{key:"observedAttributes",get:function(){return["items","relative"]}}]),o(t,[{key:"contextCallback",value:function(e){this.interaction&&(this.interaction.contextNode=e)}},{key:"willRenderCallback",value:function(){var e=this.gpu,t=this.relative;this.className=f(this.initialClassName,"m-header-mobile-navigation",{"m-header-mobile-navigation--gpu":e,"m-header-mobile-navigation--relative":t})}},{key:"didRenderCallback",value:function(){var e=this.contextNode;this.interaction&&this.interaction.destroy(),this.interaction=new be(this),e&&this.contextCallback(e)}},{key:"disconnectedCallback",value:function(){u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.interaction.destroy(),delete this.interaction}}]),t}();return ye.tagName="axa-header-mobile-navigation",me=ye.tagName,_e=ye,customElements.get(me)||window.addEventListener("DOMContentLoaded",function(){customElements.define(me,_e)}),ye}();
