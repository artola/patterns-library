!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var n="@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.m-link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  text-decoration: none;\n  color: #00008f; }\n  .m-link:hover, .m-link:focus, .m-link:active {\n    cursor: pointer;\n    text-decoration: underline; }\n  .m-link:hover, .m-link:focus, .m-link:active {\n    color: #00005b; }\n\n.m-link--deco {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  text-decoration: underline; }\n  .m-link--deco:hover, .m-link--deco:focus, .m-link--deco:active {\n    cursor: pointer;\n    text-decoration: none; }\n\n.m-link--red {\n  color: #f07662; }\n  .m-link--red:hover, .m-link--red:focus, .m-link--red:active {\n    color: #ec4d33; }\n\n.m-link--white {\n  color: #fff; }\n  .m-link--white:hover, .m-link--white:focus, .m-link--white:active {\n    color: #f5f5f5; }\n\n.m-link--icon,\n.m-link--arrow,\n.m-link--listed {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  display: inline-block;\n  text-transform: uppercase;\n  font-weight: bold !important; }\n  @media (min-width: 576px) {\n    .m-link--icon,\n    .m-link--arrow,\n    .m-link--listed {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .m-link--icon:hover, .m-link--icon:active, .m-link--icon:focus,\n  .m-link--arrow:hover,\n  .m-link--arrow:active,\n  .m-link--arrow:focus,\n  .m-link--listed:hover,\n  .m-link--listed:active,\n  .m-link--listed:focus {\n    text-decoration: none; }\n\n.m-link--email {\n  text-transform: none; }\n\n.m-link--arrow {\n  padding-right: 23px; }\n\n.m-link--icon,\n.m-link--listed {\n  padding-left: 23px; }\n\n.m-link__icon,\n.m-link__arrow,\n.m-link__listed {\n  width: 13px;\n  height: 13px;\n  display: block;\n  fill: currentColor;\n  position: absolute; }\n\n.m-link__icon,\n.m-link__listed {\n  left: 0; }\n\n.m-link__icon {\n  top: 0;\n  margin-top: 0; }\n\n.m-link__arrow {\n  top: 50%;\n  margin-top: -6.5px;\n  right: 0; }\n\n.m-link__listed {\n  top: 50%;\n  margin-top: -6.5px; }\n\n.m-link--motion:hover .m-link__arrow,\n.m-link--motion:hover .m-link__listed, .m-link--motion:active .m-link__arrow,\n.m-link--motion:active .m-link__listed, .m-link--motion:focus .m-link__arrow,\n.m-link--motion:focus .m-link__listed {\n  -webkit-animation-duration: 0.6s;\n          animation-duration: 0.6s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-name: fadeOutRightInLeft;\n          animation-name: fadeOutRightInLeft; }\n",p=/\n[\s]+$/,f=/^\n[\s]+/,h=/[\s]+$/,v=/^[\s]+/,m=/[\n\s]+/g,y=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],b=["code","pre","textarea"],_=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var c=n[l];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),l===s-1&&(a=!1,-1===y.indexOf(i)&&-1===b.indexOf(i)?""===(r=u.nodeValue.replace(f,"").replace(h,"").replace(p,"").replace(m," "))?t.removeChild(u):u.nodeValue=r:-1===b.indexOf(i)&&(o=0===l?"":" ",r=u.nodeValue.replace(f,o).replace(v," ").replace(h,"").replace(p,"").replace(m," "),u.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===y.indexOf(i)&&-1===b.indexOf(i)?""===(r=u.nodeValue.replace(f,"").replace(p,"").replace(m," "))?t.removeChild(u):u.nodeValue=r:-1===b.indexOf(i)&&(r=u.nodeValue.replace(v," ").replace(f,"").replace(p,"").replace(m," "),u.nodeValue=r));var d=c.nodeName;d&&(i=d.toLowerCase()),t.appendChild(c)}}}};var e,k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),g=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},o=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},x=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},w=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var l=i.set;void 0!==l&&l.call(o,r)}return r},l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},O=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},C=(function(e){!function(){var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=void 0===n?"undefined":k(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===r)for(var o in n)i.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}(e={exports:{}},e.exports),e.exports);function s(e,t){var n,r,o,i,a,l=e.color,s=e.size,c=e.motion,u=e.arrow,d=e.href,p=void 0===d?"#":d,f=e.listed,h=e.icon,v=e.iconsPathPrefix,m=void 0===v?"true":v,y=e.deco,b=C("m-link",(g(n={},"m-link--"+l,l),g(n,"m-link--"+s,s),g(n,"m-link--motion",c),g(n,"m-link--arrow",u),g(n,"m-link--listed",f),g(n,"m-link--icon",h),g(n,"m-link--deco",y),n));return(r=document.createElement("a")).setAttribute("href",""+String(p)),r.setAttribute("class",""+String(b)),_(r,["\n      ",h&&(o=document.createElement("axa-icon"),o.setAttribute("path-prefix",""+String(m)),o.setAttribute("icon",""+String(h)),o.setAttribute("classes","m-link__icon"),o),"\n      ",f&&(i=document.createElement("axa-icon"),i.setAttribute("path-prefix",""+String(m)),i.setAttribute("icon","arrow"),i.setAttribute("classes","m-link__listed"),i),"\n      ",t,"\n      ",u&&(a=document.createElement("axa-icon"),a.setAttribute("path-prefix",""+String(m)),a.setAttribute("icon","arrow"),a.setAttribute("classes","m-link__arrow"),a),"\n    "]),r}var t={},c=function(e){return e in t||(t[e]=0),++t[e]},A=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,r,i,l);var c=s.preventDefault;return s.preventDefault=function(){c.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}();function N(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new A(t,i({},r,{detail:n}));return e.dispatchEvent(o)}var E=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function P(e){for(var o=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var l=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(o);var n,r;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&l}var j=/\s+/,T={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function S(n,e,r,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,l=t.passive,s=void 0===l||l;if(T[e]&&(e=T[e]),!n||!e)return null;var c=void 0===r?"undefined":k(r),u=r&&"string"===c;if("function"===c){if(o){var d=o;a=d.capture,s=d.passive}o=r}for(var p=E?{capture:a,passive:s}:a,f=u?function(e){var t=e.target;for(;!P(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,h=e.split(j),v=h.length,m=0;m<v;++m)n.addEventListener(h[m],f,p);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],f,p);!function(e,t){if(!e)return;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,e)}}function R(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,l=e.maxWait,s=void 0!==l&&l,c=void 0,u=void 0,d=void 0,p=void 0,f=!1,h=o!==s,v=!1!==s;function m(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,h&&(u&&clearTimeout(u),u=setTimeout(y,o)),v&&!d&&(d=setTimeout(b,s)),i&&!f&&(f=!0,p=r.apply(void 0,O(c))),p}return m.flush=function(){(u||d)&&(p=r.apply(void 0,O(c)));return k(),p},m.cancel=k,m;function y(){d&&clearTimeout(d),_()}function b(){u&&clearTimeout(u),_()}function _(){a&&(p=r.apply(void 0,O(c))),d=u=null,f=!1}function k(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),c=void 0,f=!1}}var L={};function M(e,t){var n=S(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);L[e]||(L[e]={count:0});var r,o=L[e];return o.count++,o.onsubscribe||(o.onsubscribe=R((r=e,function(){N(document,"pubsub/onsubscribe",r),N(document,"pubsub/onsubscribe/"+r,r),L[r]&&delete L[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete L[e]}}S(document,"pubsub/onsubscribe",function(e){var t=e.detail;L[t]||(L[t]={count:0});var n=L[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=l(e,3),n=t[0],r=t[1],o=t[2];N(o,n,r)}),delete n.queue)});var D,V=function(e,t){return e===t},U=((D=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:V;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,t))?D.apply(void 0,arguments):void 0}}}})()(!0),function(e){function s(e,t){var n;u(this,s);for(var r="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",o=arguments.length,i=Array(2<o?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];var l=x(this,(n=s.__proto__||Object.getPrototypeOf(s)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(l,s),l.name="PropertyExistsException",l}return o(s,e),s}(Error)),I=/[A-Z]/g;function F(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var z=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function H(t,n){var e=t;if(t&&n!==t){if(z.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}var W=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,q=/[-_]+/g;function $(e){return e.replace(W,B)}function B(e,t){return 0==+e||q.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var K=["title","checked","disabled"],G=[];var Z=1,J=3,X=8;function Q(e,t){var n=e.nodeType,r=e.nodeName;n===Z&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,l=null,s=r.length-1;0<=s;--s)if(l=r[s],a=l.name,o=l.namespaceURI,i=l.value,o){var c=l.localName;t.getAttributeNS(o,c||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var u=n.length-1;0<=u;--u)!1!==(l=n[u]).specified&&(a=l.name,(o=l.namespaceURI)?(a=l.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==J&&n!==X||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;Y(e,t,"checked"),Y(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?Y(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function Y(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var ee=3;function te(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(Q(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,l=0;n=t.childNodes[l],r=e.childNodes[l-a],n||r;l++)if(r)if(n)if(ne(r,n))(o=te(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var s=l;s<t.childNodes.length;s++)if(ne(t.childNodes[s],r)){i=t.childNodes[s];break}i?((o=te(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=te(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),l--}(e,t),t):null:e}function ne(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===ee&&e.nodeValue===t.nodeValue)}var re=function(e){function l(e){var t;u(this,l);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=x(this,(t=l.__proto__||Object.getPrototypeOf(l)).call.apply(t,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,l),a.name="TemplateNoStringReturnException",a}return o(l,e),l}(Error),oe=!!document.createDocumentFragment().children;function ie(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(ie.prototype,HTMLElement.prototype),Object.setPrototypeOf(ie,HTMLElement);var ae=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=x(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=M("context/available",n._makeContextReady)},x(n,t)}return o(a,t),r(a,[{key:"connectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;L[e]||(L[e]={count:0,queue:[]});var r=L[e].queue;Array.isArray(r)?r.push([e,t,n]):N(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return u(this,n),x(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,t),r(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else w(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else w(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else w(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function c(e){u(this,c);var s=x(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));s._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,o=s._hasKeys[t];if(-1===K.indexOf(t)&&o)throw new U(t,s);var i="_"+t,a=n[t],l=s[i];return r||s.shouldUpdateCallback(a,l)?(s[i]=a,s._props[t]=a,o&&w(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,a,s),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},s._isConnected=!1,s._props={},s._hasKeys={},s.updatedDebounced=R(function(){return s.updated&&s.updated()},50);var t=s.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,n=$(e),r=n in s;if(-1===K.indexOf(n)&&r)throw new U(n,s);s._hasKeys[n]=r,Object.defineProperty(s,n,t={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,r&&w(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),s}return o(c,t),r(c,[{key:"connectedCallback",value:function(){var o=this;if(d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this)&&d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=$(e);if(o.hasAttribute(e)){var n=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=H(n,t)}(o,e),r=o._hasKeys[t];o._props[t]=n,r&&w(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,n,o)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[$(e)]=H(n))}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<n.indexOf(e.replace(I,F))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),c}()},function(t){return function(e){function s(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);u(this,s);var r=x(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,n));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return o(s,t),r(s,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});oe||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this._props,this.childrenFragment),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new re(this);a.appendChild(i)}if(e)d(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"appendChild",this).call(this,a);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":k(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":k(t)))throw new Error("componentMorph: newTree should be an object");te(t,e)}(this,l),function(){for(var e=void 0;e=G.pop();)delete e.isSameNode;G=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),s}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,r=a(e,["styles"]);u(this,i);var o=x(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return o._styles=n,o}return o(i,t),r(i,[{key:"connectedCallback",value:function(){d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function n(e){u(this,n);var t=x(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=c(t.nodeName),t}return o(n,ie),r(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),le={},se=function(e){function a(){var e,t,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=x(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},x(n,t)}return o(a,ae),r(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:ae.uuidv4();if(e&&!le[t]){var n=document.createElement("style"),r=document.createTextNode(e);le[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var ce,ue,de=function(e){function t(){return u(this,t),x(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:n,template:s}))}return o(t,se),r(t,null,[{key:"observedAttributes",get:function(){return["color","size","motion","arrow","href","listed","icon","deco","icons-path-prefix"]}}]),t}();return de.tagName="axa-link",ce=de.tagName,ue=de,customElements.get(ce)||window.addEventListener("DOMContentLoaded",function(){customElements.define(ce,ue)}),de});
