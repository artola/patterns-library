!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.StyleGuideWebComponent=e()}(this,function(){"use strict";var t,n,i,r,e=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}},o={},_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}(),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},p=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},h=function(t,e){var n={};for(var r in t)0<=e.indexOf(r)||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},d=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},c=function t(e,n,r,o){var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var a=Object.getPrototypeOf(e);null!==a&&t(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},f=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},O=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},v=(t=Object,n=t.getPrototypeOf||function(t){return t.__proto__},i=t.setPrototypeOf||function(t,e){return t.__proto__=e,t},r="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(t,e,n){var r,o=[null];return o.push.apply(o,e),r=t.bind.apply(t,o),i(new r,n.prototype)},function(t){var e=n(t);return i(t,i(function(){return r(e,arguments,n(this).constructor)},e))}),y=function(n){return v(function(t){function e(){return l(this,e),d(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return p(e,n),s(e,[{key:"init",value:function(){var t;this._id=((t=this.nodeName)in o||(o[t]=0),++o[t]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),e}())},b={},m=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,r=void 0!==n&&n,o=e.cancelable,i=void 0!==o&&o,a=e.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(t,r,i,s);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},c}}();function g(t,e,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new m(e,a({},r,{detail:n}));return t.dispatchEvent(o)}var x=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}();function C(t){for(var o=t.className,i=!1,a=!0,e=arguments.length,n=Array(1<e?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var s=n.map(function(t){var e=(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(o);var n,r;e?i=!0:a=!1;return{className:t,hasClass:e}});return!(!a&&!i)&&s}var k=/\s+/,w={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==t[o=n[i]])return e[o];return""}()};function T(n,t,r,o){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=e.capture,a=void 0!==i&&i,s=e.passive,c=void 0===s||s;if(w[t]&&(t=w[t]),!n||!t)return null;var l=void 0===r?"undefined":_(r),u=r&&"string"===l;if("function"===l){if(o){var p=o;a=p.capture,c=p.passive}o=r}for(var h=x?{capture:a,passive:c}:a,d=u?function(t){var e=t.target;for(;!C(e,r)&&e!==n;)e=e.parentNode;if(e!==n)return o(t,e)}:o,f=t.split(k),v=f.length,y=0;y<v;++y)n.addEventListener(f[y],d,h);return function t(){for(var e=0;e<v;++e)n.removeEventListener(f[e],d,h);!function(t,e){if(!t)return;for(var n=Object.keys(t),r=n.length,o=0;o<r;++o){var i=n[o];if(t[i]===e)return delete t[i]}}(this,t)}}function j(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},e=t.leading,i=void 0!==e&&e,n=t.trailing,a=void 0===n||n,s=t.maxWait,c=void 0!==s&&s,l=void 0,u=void 0,p=void 0,h=void 0,d=!1,f=o!==c,v=!1!==c;function y(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return l=e,f&&(u&&clearTimeout(u),u=setTimeout(_,o)),v&&!p&&(p=setTimeout(b,c)),i&&!d&&(d=!0,h=r.apply(void 0,O(l))),h}return y.flush=function(){(u||p)&&(h=r.apply(void 0,O(l)));return g(),h},y.cancel=g,y;function _(){p&&clearTimeout(p),m()}function b(){u&&clearTimeout(u),m()}function m(){a&&(h=r.apply(void 0,O(l))),p=u=null,d=!1}function g(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),l=void 0,d=!1}}window.__subscriptions=window.__subscriptions||{};var P=window.__subscriptions;function E(t,e){var n=T(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,t,e);P[t]||(P[t]={count:0});var r,o=P[t];return o.count++,o.onsubscribe||(o.onsubscribe=j((r=t,function(){g(document,"pubsub/onsubscribe",r),g(document,"pubsub/onsubscribe/"+r,r),P[r]&&delete P[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete P[t]}}T(document,"pubsub/onsubscribe",function(t){var e=t.detail;P[e]||(P[e]={count:0});var n=P[e],r=n.queue;Array.isArray(r)&&(r.forEach(function(t){var e=f(t,3),n=e[0],r=e[1],o=e[2];g(o,n,r)}),delete n.queue)});var N,A=function(t,e){return t===e},S=((N=function(){var t;return(t=console).log.apply(t,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:A;return function(){for(var t=arguments.length,r=Array(t),e=0;e<t;e++)r[e]=arguments[e];return function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,e))?N.apply(void 0,arguments):void 0}}}})()(!0),[]);var R=1,D=3,L=8;function U(t,e){var n=t.nodeType,r=t.nodeName;n===R&&function(t,e){for(var n=e.skipChildren&&e.skipChildren(),r=e.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(t){return n&&o&&-1===r.indexOf(t)},a=e.attributes,s=t.attributes,c=null,l=null,u=null,p=null,h=s.length-1;0<=h;--h)if(p=s[h],u=p.name,c=p.namespaceURI,l=p.value,!i(u))if(c){var d=p.localName;e.getAttributeNS(c,d||u)!==l&&e.setAttributeNS(c,u,l)}else e.hasAttribute(u)?e.getAttribute(u)!==l&&("null"===l||"undefined"===l?e.removeAttribute(u):e.setAttribute(u,l)):e.setAttribute(u,l);for(var f=a.length-1;0<=f;--f)if(!1!==(p=a[f]).specified){if(u=p.name,c=p.namespaceURI,i(u))continue;c?(u=p.localName||u,t.hasAttributeNS(c,u)||e.removeAttributeNS(c,u)):t.hasAttributeNS(null,u)||e.removeAttribute(u)}}(t,e),n!==D&&n!==L||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue),"INPUT"===r?function(t,e){var n=t.value,r=e.value;M(t,e,"checked"),M(t,e,"disabled"),n!==r&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===r?M(t,e,"selected"):"TEXTAREA"===r&&function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e)}function M(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var I=3;function z(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(U(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=e.childNodes[s],r=t.childNodes[s-a],n||r;s++)if(r)if(n)if(q(r,n))(o=z(r,n))!==n&&(e.replaceChild(o,n),a++);else{i=null;for(var c=s;c<e.childNodes.length;c++)if(q(e.childNodes[c],r)){i=e.childNodes[c];break}i?((o=z(r,i))!==i&&a++,e.insertBefore(o,n)):r.id||n.id?(e.insertBefore(r,n),a++):(o=z(r,n))!==n&&(e.replaceChild(o,n),a++)}else e.appendChild(r),a++;else e.removeChild(n),s--}(t,e),e):null:t}function q(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===I&&t.nodeValue===e.nodeValue)}var F,V,K,H,W=(F=Object,V=F.getPrototypeOf||function(t){return t.__proto__},K=F.setPrototypeOf||function(t,e){return t.__proto__=e,t},H="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(t,e,n){var r,o=[null];return o.push.apply(o,e),r=t.bind.apply(t,o),K(new r,n.prototype)},function(t){var e=V(t);return K(t,K(function(){return H(e,arguments,V(this).constructor)},e))})(function(t){function s(t){var e;l(this,s);for(var n="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=d(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return p(s,t),s}(Error)),B=!!document.createDocumentFragment().children;var G=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}})()&&Object.assign;var Y="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function Z(){}var X,Q=(function(t){t.exports=function(){function t(t,e,n,r,o,i){if(i!==Y){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}var n={array:t.isRequired=t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=Z,n.PropTypes=n}()}(X={exports:{}},X.exports),X.exports),tt=0;function et(t,e){var n=t[e];return"function"==typeof n&&(t[e]=function(e){function n(){return e.apply(void 0,arguments)}return 0===tt&&(tt++,Object.keys(e).map(function(t){return n[t]=e[t],t}).reduce(et,n),tt--),n}(n)),t}var nt=Q;Object.keys(nt).reduce(et,nt);var rt=nt.oneOf(["left","center","right"]),ot=nt.oneOf(["left","right"]),it=(nt.oneOf(["top","bottom"]),nt.oneOf(["up","down"])),at=nt.oneOf(["ok","pending","error","unknown"]),st=nt.oneOf(["row","col","rowgroup","colgroup","auto"]),ct=nt.oneOfType([nt.string,nt.number]),lt={text:ct,value:nt.any,rowspan:ct,colspan:ct,scope:st,align:rt,dense:nt.bool},ut={float:ot,strong:nt.bool,bold:nt.bool},pt=nt.oneOfType([nt.string,nt.number]),ht=nt.oneOfType([pt,nt.shape(a({},lt,{sort:it,sortActive:nt.bool}))]),dt=nt.oneOfType([pt,nt.shape(a({},lt,ut,{action:nt.bool,state:at}))]),ft=nt.oneOfType([pt,nt.shape(a({},lt,ut))]),vt=nt.oneOfType([nt.arrayOf(ht),nt.shape({cells:nt.arrayOf(ht)})]),yt=nt.oneOfType([nt.arrayOf(dt),nt.shape({cells:nt.arrayOf(dt),action:nt.bool})]),_t=nt.oneOfType([nt.arrayOf(ft),nt.shape({cells:nt.arrayOf(ft)})]),bt=(nt.oneOfType([vt,nt.arrayOf(vt)]),nt.oneOfType([yt,nt.arrayOf(yt)]),nt.oneOfType([_t,nt.arrayOf(_t)]),/[A-Z]/g);function mt(t){return t.replace(bt,gt)}function gt(t,e,n){var r=t.toLowerCase(),o=n.charAt(e+1);return 0===e||o.toUpperCase()===o?r:"-"+r}var Ot=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function xt(e,n,t){var r=e;if(t)return function(e,n,t){var r=e;switch(t){case nt.string:case nt.string.isRequired:return e;case nt.bool:case nt.bool.isRequired:if(!e||n===e)return!0;case nt.number:case nt.number.isRequired:case nt.object:case nt.object.isRequired:case nt.array:case nt.array.isRequired:default:if(Ot.test(e))try{r=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}return r}(e,n,t);if(e&&n!==e){if(Ot.test(e))try{r=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}else r=!0;return r}var Ct=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,kt=/[-_]+/g;function wt(t){return t.replace(Ct,Tt)}function Tt(t,e){return 0==+t||kt.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}function jt(t,e,n){var r=1===t.nodeType,o=t.constructor.propTypes,i=n;!n&&r&&(i=(void 0===o?{}:o)[wt(e)]);if(r&&!t.hasAttribute(e))return i!==nt.bool&&i!==nt.bool.isRequired&&void 0;var a=t.value;return e?a=t.getAttribute(e):e=t.name,a=xt(a,e,i)}var Pt=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Et(n,t,r){var e,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=o.capture,a=void 0===i||i,s=o.passive,c=void 0===s||s,l=n.ownerDocument.documentElement,u=T(l,t,function(t){var e=t.target;if(!n.contains(e)&&n!==e)return r(t)},{capture:a,passive:c});return e=l,Pt&&(e.style.cursor="pointer"),u}var Nt=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var r=e.length,o={},i=0;i<r;++i){var a=e[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),At="axa-change",St="data-prevent-default";(function(){function r(t){var i=this,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};l(this,r),this._handleClick=function(t,e){i.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault();var n=!i._lastToggleNode,r=e!==i._lastToggleNode,o=!n&&!r;n?(i._notify(Nt.ENTER,e),i._onInteractive()):r&&i._notify(Nt.MOVE,e,i._lastToggleNode),i._lastToggleNode=e,o&&i._options.sameClickClose&&i._close()},this._handleClose=function(t,e){i.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault(),i._close()},this._handleKeyUp=function(t){(t.key===Nt.ESCAPE||t.key===Nt.ESC||27===t.keyCode)&&(t.preventDefault(),i._close())},this._init(t,e)}return s(r,[{key:"_init",value:function(t,e){t&&(this._wcNode=t),e&&(this._options=a({},r.DEFAULTS,e));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=T(this._container,Nt.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=T(this._container,Nt.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=Et(this._container,Nt.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=T(this._container.ownerDocument,Nt.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(t){return t.hasAttribute(St)?jt(t,St):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Nt.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(t,e,n){t in this&&"function"==typeof this[t]&&this[t](e,n)}},{key:"enter",value:function(t){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(t,e){}},{key:"leave",value:function(t){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),r}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Rt=e(function(n){var t,e;return e=t=function(t){function e(){return l(this,e),d(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return p(e,n),e}(),t.version="2.0.1-beta.222",e},function(e){return function(t){function a(){var t,e,n;l(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=n=d(this,(t=a.__proto__||Object.getPrototypeOf(a)).call.apply(t,[this].concat(o))))._makeContextReady=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,t)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=E("context/available",n._makeContextReady)},d(n,e)}return p(a,e),s(a,[{key:"connectedCallback",value:function(){u(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&u(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){u(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&u(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;P[t]||(P[t]={count:0,queue:[]});var r=P[t].queue;Array.isArray(r)?r.push([t,e,n]):g(n,t,e)}("context/available",this.__contextName=t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),a}()},function(e){return function(t){function n(){return l(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,e),s(n,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",t,this)}}]),n}()},function(e){return function(t){function i(){var t,e,s;l(this,i);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=s=d(this,(t=i.__proto__||Object.getPrototypeOf(i)).call.apply(t,[this].concat(r))))._reduceProps=function(t,e){var n=t.props,r=t.shouldUpdate,o="_"+e,i=n[e],a=s[o];return r||s.shouldUpdateCallback(i,a)?(s.props[e]=i,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},d(s,e)}return p(i,e),s(i,[{key:"init",value:function(t){var e=this;u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,t),this._isConnected=!1,this.props={},this.updatedDebounced=j(function(){return e.updated&&e.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(t){wt(t)})}},{key:"connectedCallback",value:function(){var r=this;if(u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var o=this.constructor.propTypes;t.forEach(function(t){var e=wt(t);if(r.hasAttribute(t)){var n=jt(r,t,o[e]);r.props[e]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,n){if(u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,t,e,n),this.shouldUpdateCallback(n,e)){var r=wt(t);if(this.hasAttribute(t)){var o=this.constructor.propTypes;this.props[r]=xt(n,t,o[r])}else this.props[r]=null;this.checkPropTypes(),"value"===t&&null!==n&&g(this,At,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(t){var e=this.constructor.observedAttributes,n=void 0===e?[]:e,r=Object.keys(t).filter(function(t){return-1<n.indexOf(mt(t))}).reduce(this._reduceProps,{props:t,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var t=this.constructor,e=t.propTypes,n=t.tagName;e&&nt.checkPropTypes(e,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var t=this.propTypes;return t&&Object.keys(t).map(mt)}}]),i}()},function(e){return function(t){function c(){return l(this,c),d(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return p(c,e),s(c,[{key:"init",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.template,n=h(t,["template"]);u(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"init",this).call(this,n),this._template=e,this._hasTemplate=!!e,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var e=this._template;try{if(t){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(t){var e=t.cloneNode(!0);n.childrenFragment.appendChild(e)});B||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(t){return 1===t.nodeType}));var i=e(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(t){a.appendChild(t)});else if(i){if("string"==typeof i)throw new W(this);a.appendChild(i)}if(t)u(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: newTree should be an object");z(e,t)}(this,s),function(){for(var t=void 0;t=S.pop();)delete t.isSameNode;S=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),c}()},function(e){return function(t){function o(){return l(this,o),d(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return p(o,e),s(o,[{key:"init",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,n=void 0===e?"":e,r=h(t,["styles"]);u(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"init",this).call(this,r),this._styles=n}},{key:"connectedCallback",value:function(){u(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&u(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),o}()}),Dt=(e(Rt,y),e(Rt,function(o){return function(t){function a(){var t,e,n;l(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=n=d(this,(t=a.__proto__||Object.getPrototypeOf(a)).call.apply(t,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},d(n,e)}return p(a,o),s(a,null,[{key:"appendGlobalStyles",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:o.uuidv4();if(t&&!b[e]){var n=document.createElement("style"),r=document.createTextNode(t);b[e]=!0,n.appendChild(r),n.setAttribute("data-c-name",e.toLowerCase()),document.head.appendChild(n)}}}]),a}()},y)(HTMLElement));var Lt,Ut,Mt,It=function(t,e){return e},zt=function(t){function e(){return l(this,e),d(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return p(e,Dt),s(e,[{key:"init",value:function(){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).call(this,{styles:'.a-vertical-rhythm {\n  display: block; }\n  .a-vertical-rhythm > :first-child {\n    padding-top: 40px; }\n    .a-vertical-rhythm > :first-child::before {\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em;\n      position: relative;\n      display: block;\n      color: #fff;\n      text-align: center;\n      height: 40px;\n      margin-top: -40px;\n      background: #b5d0ee;\n      content: "padding-top: 40px"; }\n      @media (min-width: 576px) {\n        .a-vertical-rhythm > :first-child::before {\n          font-size: 18px; } }\n  @media (min-width: 768px) {\n    .a-vertical-rhythm > :first-child {\n      padding-top: 60px; }\n      .a-vertical-rhythm > :first-child::before {\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 1.5;\n        letter-spacing: 0.01em;\n        position: relative;\n        display: block;\n        color: #fff;\n        text-align: center;\n        height: 60px;\n        margin-top: -60px;\n        background: #b5d0ee;\n        content: "padding-top: 60px"; } }\n    @media (min-width: 768px) and (min-width: 576px) {\n      .a-vertical-rhythm > :first-child::before {\n        font-size: 18px; } }\n  @media (min-width: 992px) {\n    .a-vertical-rhythm > :first-child {\n      padding-top: 70px; }\n      .a-vertical-rhythm > :first-child::before {\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 1.5;\n        letter-spacing: 0.01em;\n        position: relative;\n        display: block;\n        color: #fff;\n        text-align: center;\n        height: 70px;\n        margin-top: -70px;\n        background: #b5d0ee;\n        content: "padding-top: 70px"; } }\n    @media (min-width: 992px) and (min-width: 576px) {\n      .a-vertical-rhythm > :first-child::before {\n        font-size: 18px; } }\n  .a-vertical-rhythm > :last-child {\n    padding-bottom: 40px; }\n    .a-vertical-rhythm > :last-child::after {\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em;\n      position: relative;\n      display: block;\n      color: #fff;\n      text-align: center;\n      height: 40px;\n      margin-bottom: -40px;\n      background: #b5d0ee;\n      content: "padding-bottom: 40px"; }\n      @media (min-width: 576px) {\n        .a-vertical-rhythm > :last-child::after {\n          font-size: 18px; } }\n  @media (min-width: 768px) {\n    .a-vertical-rhythm > :last-child {\n      padding-bottom: 60px; }\n      .a-vertical-rhythm > :last-child::after {\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 1.5;\n        letter-spacing: 0.01em;\n        position: relative;\n        display: block;\n        color: #fff;\n        text-align: center;\n        height: 60px;\n        margin-bottom: -60px;\n        background: #b5d0ee;\n        content: "padding-bottom: 60px"; } }\n    @media (min-width: 768px) and (min-width: 576px) {\n      .a-vertical-rhythm > :last-child::after {\n        font-size: 18px; } }\n  .a-vertical-rhythm > * {\n    margin-top: 20px;\n    background: #fff;\n    display: block; }\n    .a-vertical-rhythm > *:first-child {\n      margin-top: 0; }\n    .a-vertical-rhythm > *::before {\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em;\n      position: relative;\n      display: block;\n      color: #fff;\n      text-align: center;\n      height: 20px;\n      margin-top: -20px;\n      background: #fad6de;\n      content: "margin-top: 20px"; }\n      @media (min-width: 576px) {\n        .a-vertical-rhythm > *::before {\n          font-size: 18px; } }\n    @media (min-width: 768px) {\n      .a-vertical-rhythm > * {\n        margin-top: 40px; }\n        .a-vertical-rhythm > *:first-child {\n          margin-top: 0; }\n        .a-vertical-rhythm > *::before {\n          font-size: 16px;\n          font-weight: 400;\n          line-height: 1.5;\n          letter-spacing: 0.01em;\n          position: relative;\n          display: block;\n          color: #fff;\n          text-align: center;\n          height: 40px;\n          margin-top: -40px;\n          background: #fad6de;\n          content: "margin-top: 40px"; } }\n    @media (min-width: 768px) and (min-width: 576px) {\n      .a-vertical-rhythm > *::before {\n        font-size: 18px; } }\n    @media (min-width: 992px) {\n      .a-vertical-rhythm > * {\n        margin-top: 60px; }\n        .a-vertical-rhythm > *:first-child {\n          margin-top: 0; }\n        .a-vertical-rhythm > *::before {\n          font-size: 16px;\n          font-weight: 400;\n          line-height: 1.5;\n          letter-spacing: 0.01em;\n          position: relative;\n          display: block;\n          color: #fff;\n          text-align: center;\n          height: 60px;\n          margin-top: -60px;\n          background: #fad6de;\n          content: "margin-top: 60px"; } }\n    @media (min-width: 992px) and (min-width: 576px) {\n      .a-vertical-rhythm > *::before {\n        font-size: 18px; } }\n',template:It})}},{key:"connectedCallback",value:function(){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" a-vertical-rhythm"}}]),e}();return zt.tagName="axa-vertical-rhythm",Lt=zt.tagName,Ut=zt,customElements.get(Lt)||customElements.define(Lt,Ut,Mt),zt});
