!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},d=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},o=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},u=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},k=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function c(){}var f,v=(function(e){e.exports=function(){function e(e,t,n,o,r,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=c,n.PropTypes=n}()}(f={exports:{}},f.exports),f.exports),y={},b=function(e){return e in y||(y[e]=0),++y[e]},g=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,o,i,s);var c=u.preventDefault;return u.preventDefault=function(){c.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}}();function m(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new g(t,i({},o,{detail:n}));return e.dispatchEvent(r)}var C=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function O(e,t){var n=t.className;return t.hasClass||e.push(n),e}function w(e){for(var r=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var s=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",o)).test(r);var n,o;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&s}var T=/\s+/,A={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function x(n,e,o,r){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,u=void 0===s||s;if(A[e]&&(e=A[e]),!n||!e)return null;var c=void 0===o?"undefined":_(o),l=o&&"string"===c;if("function"===c){if(r){var d=r;a=d.capture,u=d.passive}r=o}for(var p=C?{capture:a,passive:u}:a,h=l?function(e){var t=e.target;for(;!w(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return r(e,t)}:r,f=e.split(T),v=f.length,y=0;y<v;++y)n.addEventListener(f[y],h,p);return function e(){for(var t=0;t<v;++t)n.removeEventListener(f[t],h,p);!function(e,t){if(!e)return;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,e)}}function N(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,u=void 0!==s&&s,c=void 0,l=void 0,d=void 0,p=void 0,h=!1,f=r!==u,v=!1!==u;function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,f&&(l&&clearTimeout(l),l=setTimeout(_,r)),v&&!d&&(d=setTimeout(b,u)),i&&!h&&(h=!0,p=o.apply(void 0,k(c))),p}return y.flush=function(){(l||d)&&(p=o.apply(void 0,k(c)));return m(),p},y.cancel=m,y;function _(){d&&clearTimeout(d),g()}function b(){l&&clearTimeout(l),g()}function g(){a&&(p=o.apply(void 0,k(c))),d=l=null,h=!1}function m(){l&&(clearTimeout(l),l=null),d&&(clearTimeout(d),d=null),c=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var E=window.__subscriptions;function D(e,t){var n=x(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);E[e]||(E[e]={count:0});var o,r=E[e];return r.count++,r.onsubscribe||(r.onsubscribe=N((o=e,function(){m(document,"pubsub/onsubscribe",o),m(document,"pubsub/onsubscribe/"+o,o),E[o]&&delete E[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete E[e]}}x(document,"pubsub/onsubscribe",function(e){var t=e.detail;E[t]||(E[t]={count:0});var n=E[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=u(e,3),n=t[0],o=t[1],r=t[2];m(r,n,o)}),delete n.queue)});var S,P=function(e,t){return e===t},j=((S=function(){var e;return(e=console).log.apply(e,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:P;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,t))?S.apply(void 0,arguments):void 0}}}})()(!0),function(e){function u(e,t){var n;l(this,u);for(var o="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",r=arguments.length,i=Array(2<r?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var s=p(this,(n=u.__proto__||Object.getPrototypeOf(u)).call.apply(n,[this,o].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(s,u),s.name="PropertyExistsException",s}return o(u,e),u}(Error)),L=/[A-Z]/g;function I(e){return e.replace(L,R)}function R(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var B=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function M(t,n,e){var o=t;if(e)return function(t,n,e){var o=t;switch(e){case v.string:return t;case v.bool:if(!t||n===t)return!0;case v.number:case v.object:case v.array:default:if(B.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return o}(t,n,e);if(t&&n!==t){if(B.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else o=!0;return o}var V=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,U=/[-_]+/g;function q(e){return e.replace(V,Y)}function Y(e,t){return 0==+e||U.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function F(e,t,n){var o=n,r=1===e.nodeType;if(r&&!e.hasAttribute(t))return!1;var i=e.value;if(t?i=e.getAttribute(t):t=e.name,!n&&r){var a=e.constructor.propTypes;o=(void 0===a?{}:a)[q(t)]}return i=M(i,t,o)}var z=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function K(n,e,o){var t,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=r.capture,a=void 0===i||i,s=r.passive,u=void 0===s||s,c=n.ownerDocument.documentElement,l=x(c,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:u});return t=c,z&&(t.style.cursor="pointer"),l}var H=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),W="axa-click",$="axa-load",Z="axa-change",G="data-prevent-default";(function(){function o(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};l(this,o),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,o=t!==i._lastToggleNode,r=!n&&!o;n?(i._notify(H.ENTER,t),i._onInteractive()):o&&i._notify(H.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===H.ESCAPE||e.key===H.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return r(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=x(this._container,H.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=x(this._container,H.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=K(this._container,H.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=x(this._container.ownerDocument,H.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(G)?F(e,G):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(H.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var J=["title","checked","disabled"],X=[];var Q=1,ee=3,te=8;function ne(e,t){var n=e.nodeType,o=e.nodeName;n===Q&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,u=null,c=null,l=null,d=null,p=s.length-1;0<=p;--p)if(d=s[p],l=d.name,u=d.namespaceURI,c=d.value,!i(l))if(u){var h=d.localName;t.getAttributeNS(u,h||l)!==c&&t.setAttributeNS(u,l,c)}else t.hasAttribute(l)?t.getAttribute(l)!==c&&("null"===c||"undefined"===c?t.removeAttribute(l):t.setAttribute(l,c)):t.setAttribute(l,c);for(var f=a.length-1;0<=f;--f)if(!1!==(d=a[f]).specified){if(l=d.name,u=d.namespaceURI,i(l))continue;u?(l=d.localName||l,e.hasAttributeNS(u,l)||t.removeAttributeNS(u,l)):e.hasAttributeNS(null,l)||t.removeAttribute(l)}}(e,t),n!==ee&&n!==te||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;oe(e,t,"checked"),oe(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?oe(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function oe(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var re=3;function ie(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(ne(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(ae(o,n))(r=ie(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var u=s;u<t.childNodes.length;u++)if(ae(t.childNodes[u],o)){i=t.childNodes[u];break}i?((r=ie(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=ie(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function ae(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===re&&e.nodeValue===t.nodeValue)}var se=function(e){function s(e){var t;l(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=p(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return o(s,e),s}(Error),ue=!!document.createDocumentFragment().children;function ce(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(ce.prototype,HTMLElement.prototype),Object.setPrototypeOf(ce,HTMLElement);var le=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;l(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=p(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=D("context/available",n._makeContextReady)},p(n,t)}return o(a,t),r(a,[{key:"connectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;E[e]||(E[e]={count:0,queue:[]});var o=E[e].queue;Array.isArray(o)?o.push([e,t,n]):m(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return l(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,t),r(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function c(e){l(this,c);var u=p(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));u._reduceProps=function(e,t){var n=e.props,o=e.shouldUpdate,r=u._hasKeys[t];if(-1===J.indexOf(t)&&r)throw new j(t,u);var i="_"+t,a=n[t],s=u[i];return o||u.shouldUpdateCallback(a,s)?(u[i]=a,u._props[t]=a,r&&h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,a,u),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},u._isConnected=!1,u._props={},u._hasKeys={},u.updatedDebounced=N(function(){return u.updated&&u.updated()},50);var t=u.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,n=q(e),o=n in u;if(-1===J.indexOf(n)&&o)throw new j(n,u);u._hasKeys[n]=o,Object.defineProperty(u,n,t={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,o&&h(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this.updatedDebounced())}})}),u}return o(c,t),r(c,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(I)}}]),r(c,[{key:"connectedCallback",value:function(){var r=this;if(d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this)&&d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var i=this.constructor.propTypes;e.forEach(function(e){var t=q(e);if(r.hasAttribute(e)){var n=F(r,e,i[t]),o=r._hasKeys[t];r._props[t]=n,o&&h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,n,r)}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var o=q(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this[o]=M(n,e,r[o])}else this[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&m(this,Z,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return-1<n.indexOf(I(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&v.checkPropTypes(t,this._props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),c}()},function(t){return function(e){function u(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);l(this,u);var o=p(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,n));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return o(u,t),r(u,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});ue||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this._props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new se(this);a.appendChild(i)}if(e)d(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");ie(t,e)}(this,s),function(){for(var e=void 0;e=X.pop();)delete e.isSameNode;X=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),u}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=a(e,["styles"]);l(this,i);var r=p(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return r._styles=n,r}return o(i,t),r(i,[{key:"connectedCallback",value:function(){d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function n(e){l(this,n);var t=p(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=b(t.nodeName),t}return o(n,ce),r(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),de={},pe=function(e){function a(){var e,t,n;l(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=p(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},p(n,t)}return o(a,le),r(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:le.uuidv4();if(e&&!de[t]){var n=document.createElement("style"),o=document.createTextNode(e);de[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var he=/^[a-z]{2,4}(-([A-Z][a-z]{3}|[0-9]{3}))?(-([A-Z]{2}|[0-9]{3}))?$/;var fe=function(o){function e(e,t,n){return null==e[t]?null:o(e,t,n)}return e.isRequired=o,e}(function(e,t,n){if(!he.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid locale.")}),ve=".o-datepicker {\n  position: relative;\n  display: block; }\n\n.o-datepicker__calender {\n  position: absolute;\n  z-index: 1100;\n  display: none;\n  background-color: #fff; }\n\n.o-datepicker__input {\n  display: inline-block;\n  width: auto;\n  min-width: 150px;\n  vertical-align: middle; }\n\n.a-input__icon__button {\n  background-color: transparent; }\n\n.o-datepicker__calender--move-up {\n  top: -385px; }\n",ye=/\n[\s]+$/,_e=/^\n[\s]+/,be=/[\s]+$/,ge=/^[\s]+/,me=/[\n\s]+/g,ke=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Ce=["code","pre","textarea"],Oe=/ |,|\.|-|\//,we=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"en-uk";return(1<arguments.length&&void 0!==arguments[1]?arguments[1]:new Date).toLocaleString(e,{day:"numeric",month:"numeric",year:"numeric"})},Te=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"en-uk",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",n=new Date(2017,10,23);if(!Intl.DateTimeFormat.supportedLocalesOf(e).length)throw new Error("locale not supported: "+e);var o=new Intl.DateTimeFormat(e).format(n).toString(),r=o.match(Oe)[0]||null;if(!r)return null;var i=t.split(r),a=o.split(r),s=a.indexOf("11"),u=a.indexOf("23"),c=a.indexOf("2017"),l=new Date(i[c],i[s]-1,i[u]);return l instanceof Date&&!isNaN(l)?l:null},Ae=function(e,t,n){var o,r,i,a,s=e.classes,u=e.locale,c=void 0===u?"en-uk":u,l=e.outputIso,d=void 0!==l&&l,p=e.higherEndYear,h=void 0!==p&&p,f=e.lowerEndYear,v=void 0!==f&&f,y=e.open;n.datepicker.locale=c;var _=n.datepicker,b=_.localeValue,g=_.value;return(o=document.createElement("article")).setAttribute("class",""+String(s)),function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,u=n.length;s<u;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var l=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,l&&"#text"===l.nodeName?l.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),l=c),s===u-1&&(a=!1,-1===ke.indexOf(i)&&-1===Ce.indexOf(i)?""===(o=l.nodeValue.replace(_e,"").replace(be,"").replace(ye,"").replace(me," "))?t.removeChild(l):l.nodeValue=o:-1===Ce.indexOf(i)&&(r=0===s?"":" ",o=l.nodeValue.replace(_e,r).replace(ge," ").replace(be,"").replace(ye,"").replace(me," "),l.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===ke.indexOf(i)&&-1===Ce.indexOf(i)?""===(o=l.nodeValue.replace(_e,"").replace(ye,"").replace(me," "))?t.removeChild(l):l.nodeValue=o:-1===Ce.indexOf(i)&&(o=l.nodeValue.replace(ge," ").replace(_e,"").replace(ye,"").replace(me," "),l.nodeValue=o));var d=c.nodeName;d&&(i=d.toLowerCase()),t.appendChild(c)}}}}(o,["\n      ",b?(r=document.createElement("axa-input"),r.setAttribute("placeholder",""+String(we(c))),r.setAttribute("value",""+String(b)),r.setAttribute("name","get-local-day-month-year"),r.setAttribute("icon","datepicker"),r.setAttribute("inline","inline"),r.setAttribute("class","o-datepicker__input js-datepicker__input"),r):(i=document.createElement("axa-input"),i.setAttribute("placeholder",""+String(we(c))),i.setAttribute("name","get-local-day-month-year"),i.setAttribute("icon","datepicker"),i.setAttribute("inline","inline"),i.setAttribute("class","o-datepicker__input js-datepicker__input"),i),"\n      ",y?(a=document.createElement("axa-m-datepicker"),a.setAttribute("higher-end-year",""+String(h)),a.setAttribute("lower-end-year",""+String(v)),a.setAttribute("output-iso",""+String(d)),a.setAttribute("selected-day",""+String(!!g&&g.getDate())),a.setAttribute("start-month",""+String(g?g.getMonth():"TODAY")),a.setAttribute("start-year",""+String(g?g.getFullYear():"TODAY")),a.setAttribute("locale",""+String(c)),a.setAttribute("button-ok","bestätigen"),a.setAttribute("button-cancel","abbrechen"),a.setAttribute("class","o-datepicker__calender js-datepicker__calender"),a):"","\n    "]),o};function xe(e){var t=e.ownerDocument;return t.defaultView||t.parentWindow}var Ne,Ee,De=".js-device-state",Se=/\s/g,Pe=/^['"]+|['"]+$/g,je=function(){function e(){var r=this;l(this,e),this.handleResize=function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0],t=r.getContent(),n=t.hasStateChanged,o=t.content;"function"==typeof r.callbackOnChange&&(n||e)&&r.callbackOnChange(r.getDeviceState(o))},this.parsePair=function(e,t){var n=t.split(":"),o=u(n,2),r=o[0],i=o[1];return e[r]=+i||i,e},this.window=null,this.lastContent="",this.hasStateChanged=!1}return r(e,[{key:"init",value:function(){this.node||(this.node=document.body,function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=w.apply(void 0,[e].concat(n));if(!0!==r){var i=[].concat(n);Array.isArray(r)&&(i=r.reduce(O,[])),i&&(e.className+=" "+i.join(" "))}}(this.node,De));var e=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0===o||o,i=n.trailing;return N(e,t,{leading:r,maxWait:t,trailing:void 0===i||i})}(this.handleResize,100);this.offResize=x(xe(this.node),"resize",e),this.offOrientationchange=x(xe(this.node),"orientationchange",e)}},{key:"listen",value:function(e){var t=this;return this.node=document.querySelector(De),this.callbackOnChange=e,this.init(),function(){t.offResize(),t.offOrientationchange()}}},{key:"triggerOnce",value:function(){this.handleResize(!0)}},{key:"getContent",value:function(){if(!this.window&&this.node&&(this.window=xe(this.node)),!this.node||!this.window)return!1;var e=this.window.getComputedStyle(this.node,":after").getPropertyValue("content")||this.window.getComputedStyle(this.node,"::after").getPropertyValue("content");return!!e&&{hasStateChanged:e!==this.lastContent,content:this.lastContent=e}}},{key:"getDeviceState",value:function(e){return e.replace(Se,"").replace(Pe,"").split(",").reduce(this.parsePair,{})}}]),e}(),Le="ok",Ie=["xs","sm"],Re=(function(){function t(e){var n=this;l(this,t),this.handleChangeDropdownMonth=function(e){e.preventDefault(),e.stopPropagation();var t=e.target.getAttribute("value");(t||0===t)&&n.datepickerBody.setAttribute("month",t)},this.handleChangeDropdownYear=function(e){e.preventDefault(),e.stopPropagation();var t=e.target.getAttribute("value");(t||0===t)&&n.datepickerBody.setAttribute("year",t)},this.handleChangeDatepickerBody=function(e){e.preventDefault(),e.stopPropagation();var t=e.target;n.changeDropDowns(t)},this.wcNode=e,this.deviceStateObserver=new je}r(t,[{key:"init",value:function(e){this.outputIso=e,this.datepickerBody=this.wcNode.querySelector(".js-datepicker__datepicker-body"),this.dropdownMonth=this.wcNode.querySelector(".js-datepicker__dropdown__month"),this.dropdownYear=this.wcNode.querySelector(".js-datepicker__dropdown__year"),this.okButton=this.wcNode.querySelector(".js-datepicker__button__Ok"),this.cancelButton=this.wcNode.querySelector(".js-datepicker__button__Cancel"),this.listenToChanges(),this.listenToButtons(),this.listenToDeviceStateChange()}},{key:"listenToDeviceStateChange",value:function(){var o=this;this.offListenToDeviceStateChange(),this.unListenToDeviceStateChange=this.deviceStateObserver.listen(function(e){if(o.dropdownMonth&&o.dropdownYear){var t=e.breakpoint,n=!!~Ie.indexOf(t);o.dropdownMonth.setAttribute("native",n),o.dropdownYear.setAttribute("native",n)}}),this.deviceStateObserver.triggerOnce()}},{key:"offListenToDeviceStateChange",value:function(){this.unListenToDeviceStateChange&&this.unListenToDeviceStateChange()}},{key:"listenToChanges",value:function(){this.offListenToChanges(),this.unListenToDropdownMonth=x(this.dropdownMonth,Z,"",this.handleChangeDropdownMonth,{capture:!0,passive:!1}),this.unListenToDropdownYear=x(this.dropdownYear,Z,"",this.handleChangeDropdownYear,{capture:!0,passive:!1}),this.unListenToDatepickerBody=x(this.datepickerBody,Z,"",this.handleChangeDatepickerBody,{capture:!0,passive:!1})}},{key:"offListenToChanges",value:function(){this.unListenToDropdownMonth&&this.unListenToDropdownMonth(),this.unListenToDropdownYear&&this.unListenToDropdownYear(),this.unListenToDatepickerBody&&this.unListenToDatepickerBody()}},{key:"listenToButtons",value:function(){var r=this;this.offListenToButtons(),this.unCancelButtonListenerEnd=x(this.wcNode.querySelector(".js-datepicker__button__Cancel"),H.CLICK,function(){m(r.cancelButton,W,{value:"",button:"cancel"},{bubbles:!0,cancelable:!0,composed:!0})}),this.unOkButtonListenerEnd=x(this.wcNode.querySelector(".js-datepicker__button__Ok"),H.CLICK,function(){var e=r.datepickerBody.getAttribute("year"),t=r.datepickerBody.getAttribute("month"),n=r.datepickerBody.getAttribute("value");if(n){var o=new Date(e,t,n);r.outputIso?m(r.okButton,W,{value:o.getTime(),button:Le},{bubbles:!0,cancelable:!0,composed:!0}):m(r.okButton,W,{value:o,button:Le},{bubbles:!0,cancelable:!0,composed:!0})}else m(r.okButton,W,{value:"",button:Le},{bubbles:!0,cancelable:!0,composed:!0})})}},{key:"offListenToButtons",value:function(){this.unCancelButtonListenerEnd&&this.unCancelButtonListenerEnd(),this.unOkButtonListenerEnd&&this.unOkButtonListenerEnd()}},{key:"changeDropDowns",value:function(e){var t=e.getAttribute("month"),n=e.getAttribute("year");(t||0===t)&&this.dropdownMonth.setAttribute("value",t),(n||0===n)&&this.dropdownYear.setAttribute("value",n)}},{key:"destroy",value:function(){this.offListenToDeviceStateChange(),this.offListenToChanges()}}])}(),function(){function t(e){var r=this;l(this,t),this.handleClickDatepickerCalender=function(e){e.preventDefault(),e.stopPropagation();var t=e.detail;if(t){var n=t.button,o=t.value;n&&(n===Le?(r._value=o,r._localeValue=we(r._locale,r._value)):r._value=null,r.displayDatepicker())}},this.handleClickDatepickerInput=function(e){e.preventDefault(),e.stopPropagation(),r.displayDatepicker()},this.handleInputChange=function(e){e.preventDefault(),e.stopPropagation();var t=e.detail;r.setDateValueOfString(t)},this.setDateValueOfString=function(e){var t=Te(r._locale,e);r._value=t||!1,r.wcNode.setAttribute("value",r._value)},this.wcNode=e,this._value="",this._locale="",this._localValue=""}return r(t,[{key:"init",value:function(){this.datepickerInput=this.wcNode.querySelector(".js-datepicker__input"),this.datepickerCalender=this.wcNode.querySelector(".js-datepicker__calender"),this.datepicker=this.wcNode.querySelector(".js-datepicker"),this.listenToButtons(),this.listenToInput(),this.datepickerCalender&&this.isItemInLowerHalf(this.datepickerInput)&&this.datepickerCalender.classList.add("o-datepicker__calender--move-up")}},{key:"listenToButtons",value:function(){this.offListenToButtons(),this.unListenDatepickerCalender=x(this.datepickerCalender,W,"",this.handleClickDatepickerCalender,{capture:!0,passive:!1}),this.unListenToDatepickerInput=x(this.datepickerInput,W,"",this.handleClickDatepickerInput,{capture:!0,passive:!1})}},{key:"offListenToButtons",value:function(){this.unListenDatepickerCalender&&this.unListenDatepickerCalender(),this.unListenToDatepickerInput&&this.unListenToDatepickerInput()}},{key:"listenToInput",value:function(){this.offListenToInput(),this.unListenToInputChange=x(this.datepickerInput,Z,"",this.handleInputChange,{capture:!0,passive:!1}),this.unListenToInputLoad=x(this.datepickerInput,$,"",this.handleInputChange,{capture:!0,passive:!1})}},{key:"offListenToInput",value:function(){this.unListenToInputChange&&this.unListenToInputChange(),this.unListenToInputLoad&&this.unListenToInputLoad()}},{key:"displayDatepicker",value:function(){!0===F(this.wcNode,"open")?this.wcNode.removeAttribute("open"):this.wcNode.setAttribute("open",!0)}},{key:"isItemInLowerHalf",value:function(e){var t=e.getBoundingClientRect(),n=t.top+t.height/2;return window.innerHeight-n<n}},{key:"destroy",value:function(){this.offListenToButtons(),this.offListenToInput()}},{key:"localeValue",get:function(){return this._localeValue}},{key:"value",get:function(){return this._value}},{key:"locale",set:function(e){this._locale=e}}]),t}()),Be=function(e){function t(){l(this,t);var e=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:ve,template:Ae}));return e.datepicker=new Re(e),e}return o(t,pe),r(t,[{key:"connectedCallback",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" o-datepicker"}},{key:"disconnectedCallback",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.datepicker.destroy()}},{key:"didRenderCallback",value:function(){this.datepicker.init()}}]),t}();return Be.tagName="axa-datepicker",Be.propTypes={classes:v.string,locale:fe,open:v.bool,lowerEndYear:v.number,higherEndYear:v.number,value:v.string},Ne=Be.tagName,Ee=Be,customElements.get(Ne)||customElements.define(Ne,Ee),Be});
