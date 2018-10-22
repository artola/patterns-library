var StyleGuideWebComponent=function(){"use strict";var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},d=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},o=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},h=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},k=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function r(){}var c,v=(function(e){e.exports=function(){function e(e,t,n,r,o,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n}()}(c={exports:{}},c.exports),c.exports),y={},b=function(e){return e in y||(y[e]=0),++y[e]},g=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function m(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new g(t,i({},r,{detail:n}));return e.dispatchEvent(o)}var C=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function O(e){for(var o=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var s=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(o);var n,r;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&s}var w=/\s+/,x={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function T(n,e,r,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,l=void 0===s||s;if(x[e]&&(e=x[e]),!n||!e)return null;var c=void 0===r?"undefined":_(r),u=r&&"string"===c;if("function"===c){if(o){var d=o;a=d.capture,l=d.passive}o=r}for(var p=C?{capture:a,passive:l}:a,h=u?function(e){var t=e.target;for(;!O(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,f=e.split(w),v=f.length,y=0;y<v;++y)n.addEventListener(f[y],h,p);return function e(){for(var t=0;t<v;++t)n.removeEventListener(f[t],h,p);!function(e,t){if(!e)return;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,e)}}function N(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,d=void 0,p=void 0,h=!1,f=o!==l,v=!1!==l;function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,f&&(u&&clearTimeout(u),u=setTimeout(_,o)),v&&!d&&(d=setTimeout(b,l)),i&&!h&&(h=!0,p=r.apply(void 0,k(c))),p}return y.flush=function(){(u||d)&&(p=r.apply(void 0,k(c)));return m(),p},y.cancel=m,y;function _(){d&&clearTimeout(d),g()}function b(){u&&clearTimeout(u),g()}function g(){a&&(p=r.apply(void 0,k(c))),d=u=null,h=!1}function m(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),c=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var P=window.__subscriptions;function E(e,t){var n=T(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);P[e]||(P[e]={count:0});var r,o=P[e];return o.count++,o.onsubscribe||(o.onsubscribe=N((r=e,function(){m(document,"pubsub/onsubscribe",r),m(document,"pubsub/onsubscribe/"+r,r),P[r]&&delete P[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete P[e]}}T(document,"pubsub/onsubscribe",function(e){var t=e.detail;P[t]||(P[t]={count:0});var n=P[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=l(e,3),n=t[0],r=t[1],o=t[2];m(o,n,r)}),delete n.queue)});var j,A=function(e,t){return e===t},D=((j=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:A;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,t))?j.apply(void 0,arguments):void 0}}}})()(!0),function(e){function l(e,t){var n;u(this,l);for(var r="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",o=arguments.length,i=Array(2<o?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];var s=h(this,(n=l.__proto__||Object.getPrototypeOf(l)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(s,l),s.name="PropertyExistsException",s}return o(l,e),l}(Error)),S=/[A-Z]/g;function I(e){return e.replace(S,M)}function M(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var R=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function L(t,n,e){var r=t;if(e)return function(t,n,e){var r=t;switch(e){case v.string:return t;case v.bool:if(!t||n===t)return!0;case v.number:case v.object:case v.array:default:if(R.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return r}(t,n,e);if(t&&n!==t){if(R.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else r=!0;return r}var U=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,V=/[-_]+/g;function F(e){return e.replace(U,Y)}function Y(e,t){return 0==+e||V.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function K(e,t,n){var r=n,o=1===e.nodeType;if(o&&!e.hasAttribute(t))return!1;var i=e.value;if(t?i=e.getAttribute(t):t=e.name,!n&&o){var a=e.constructor.propTypes;r=(void 0===a?{}:a)[F(t)]}return i=L(i,t,r)}var q=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function H(n,e,r){var t,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=o.capture,a=void 0===i||i,s=o.passive,l=void 0===s||s,c=n.ownerDocument.documentElement,u=T(c,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return r(e)},{capture:a,passive:l});return t=c,q&&(t.style.cursor="pointer"),u}var z=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),W="axa-change",B="data-prevent-default";(function(){function r(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,r),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,r=t!==i._lastToggleNode,o=!n&&!r;n?(i._notify(z.ENTER,t),i._onInteractive()):r&&i._notify(z.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,o&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===z.ESCAPE||e.key===z.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return d(r,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},r.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=T(this._container,z.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=T(this._container,z.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=H(this._container,z.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=T(this._container.ownerDocument,z.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(B)?K(e,B):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(z.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),r}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var $=["title","checked","disabled"],Z=[];var G=1,J=3,X=8;function Q(e,t){var n=e.nodeType,r=e.nodeName;n===G&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),r=t.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(e){return n&&o&&-1===r.indexOf(e)},a=t.attributes,s=e.attributes,l=null,c=null,u=null,d=null,p=s.length-1;0<=p;--p)if(d=s[p],u=d.name,l=d.namespaceURI,c=d.value,!i(u))if(l){var h=d.localName;t.getAttributeNS(l,h||u)!==c&&t.setAttributeNS(l,u,c)}else t.hasAttribute(u)?t.getAttribute(u)!==c&&("null"===c||"undefined"===c?t.removeAttribute(u):t.setAttribute(u,c)):t.setAttribute(u,c);for(var f=a.length-1;0<=f;--f)if(!1!==(d=a[f]).specified){if(u=d.name,l=d.namespaceURI,i(u))continue;l?(u=d.localName||u,e.hasAttributeNS(l,u)||t.removeAttributeNS(l,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==J&&n!==X||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;ee(e,t,"checked"),ee(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?ee(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function ee(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var te=3;function ne(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(Q(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(re(r,n))(o=ne(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(re(t.childNodes[l],r)){i=t.childNodes[l];break}i?((o=ne(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=ne(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function re(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===te&&e.nodeValue===t.nodeValue)}var oe=function(e){function s(e){var t;u(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=h(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return o(s,e),s}(Error),ie=!!document.createDocumentFragment().children;function ae(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(ae.prototype,HTMLElement.prototype),Object.setPrototypeOf(ae,HTMLElement);var se=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=h(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=E("context/available",n._makeContextReady)},h(n,t)}return o(a,t),d(a,[{key:"connectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;P[e]||(P[e]={count:0,queue:[]});var r=P[e].queue;Array.isArray(r)?r.push([e,t,n]):m(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return u(this,n),h(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,t),d(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function c(e){u(this,c);var l=h(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));l._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,o=l._hasKeys[t];if(-1===$.indexOf(t)&&o)throw new D(t,l);var i="_"+t,a=n[t],s=l[i];return r||l.shouldUpdateCallback(a,s)?(l[i]=a,l._props[t]=a,o&&f(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,a,l),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},l._isConnected=!1,l._props={},l._hasKeys={},l.updatedDebounced=N(function(){return l.updated&&l.updated()},50);var t=l.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,n=F(e),r=n in l;if(-1===$.indexOf(n)&&r)throw new D(n,l);l._hasKeys[n]=r,Object.defineProperty(l,n,t={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,r&&f(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this.updatedDebounced())}})}),l}return o(c,t),d(c,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(I)}}]),d(c,[{key:"connectedCallback",value:function(){var o=this;if(p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this)&&p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var i=this.constructor.propTypes;e.forEach(function(e){var t=F(e);if(o.hasAttribute(e)){var n=K(o,e,i[t]),r=o._hasKeys[t];o._props[t]=n,r&&f(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,n,o)}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var r=F(e);if(this.hasAttribute(e)){var o=this.constructor.propTypes;this[r]=L(n,e,o[r])}else this[r]=null;this.checkPropTypes(),"value"===e&&null!==n&&m(this,W,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,r=Object.keys(e).filter(function(e){return-1<n.indexOf(I(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&v.checkPropTypes(t,this._props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),c}()},function(t){return function(e){function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);u(this,l);var r=h(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,n));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return o(l,t),d(l,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});ie||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this._props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new oe(this);a.appendChild(i)}if(e)p(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");ne(t,e)}(this,s),function(){for(var e=void 0;e=Z.pop();)delete e.isSameNode;Z=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),l}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,r=a(e,["styles"]);u(this,i);var o=h(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return o._styles=n,o}return o(i,t),d(i,[{key:"connectedCallback",value:function(){p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function n(e){u(this,n);var t=h(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=b(t.nodeName),t}return o(n,ae),d(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),le={},ce=function(e){function a(){var e,t,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=h(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},h(n,t)}return o(a,se),d(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:se.uuidv4();if(e&&!le[t]){var n=document.createElement("style"),r=document.createTextNode(e);le[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var ue=/^[a-z]{2,4}(-([A-Z][a-z]{3}|[0-9]{3}))?(-([A-Z]{2}|[0-9]{3}))?$/;var de=function(r){function e(e,t,n){return null==e[t]?null:r(e,t,n)}return e.isRequired=r,e}(function(e,t,n){if(!ue.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid locale.")}),pe=".m-datepicker-body {\n  padding-top: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.m-datepicker-body__cell {\n  width: 35.28571px;\n  height: 35.28571px;\n  padding-left: 0;\n  padding-right: 0;\n  background-color: transparent;\n  border-radius: 100px;\n  cursor: pointer;\n  border: none; }\n\n.m-datepicker-body__cell:focus {\n  outline: none; }\n\n.m-datepicker-body__not-current-month {\n  color: #ccc; }\n\n.m-datepicker-body__current-month {\n  color: #333; }\n\n.m-datepicker-body__current-month:hover {\n  -webkit-box-shadow: 0 0 0 3px #00008f inset;\n          box-shadow: 0 0 0 3px #00008f inset;\n  background-color: #fff;\n  color: #333;\n  opacity: 0.5; }\n\n.m-datepicker-body__current-month:hover.m-datepicker-body__selected-day,\n.m-datepicker-body__current-month:hover.m-datepicker-body__today {\n  background-color: #00008f;\n  color: #fff;\n  opacity: 1; }\n\n.m-datepicker-body__selected-day,\n.m-datepicker-body__today {\n  background-color: #00008f;\n  color: #fff; }\n",he=/\n[\s]+$/,fe=/^\n[\s]+/,ve=/[\s]+$/,ye=/^[\s]+/,_e=/[\n\s]+/g,be=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ge=["code","pre","textarea"],me=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===be.indexOf(i)&&-1===ge.indexOf(i)?""===(r=u.nodeValue.replace(fe,"").replace(ve,"").replace(he,"").replace(_e," "))?t.removeChild(u):u.nodeValue=r:-1===ge.indexOf(i)&&(o=0===s?"":" ",r=u.nodeValue.replace(fe,o).replace(ye," ").replace(ve,"").replace(he,"").replace(_e," "),u.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===be.indexOf(i)&&-1===ge.indexOf(i)?""===(r=u.nodeValue.replace(fe,"").replace(he,"").replace(_e," "))?t.removeChild(u):u.nodeValue=r:-1===ge.indexOf(i)&&(r=u.nodeValue.replace(ye," ").replace(fe,"").replace(he,"").replace(_e," "),u.nodeValue=r));var d=c.nodeName;d&&(i=d.toLowerCase()),t.appendChild(c)}}}},ke=function(e,t,n){var r,o;return(r=document.createElement("div")).setAttribute("class","m-datepicker-body js-datepicker-body"),me(r,["\n    ",(o=n.datepickerBody.store,o?o.getCells():[]).map(function(e,t){var n;return(n=document.createElement("button")).setAttribute("data-index",""+String(t)),n.setAttribute("class",""+String(e.getClasses())),me(n,[e.getText()]),n}),"\n  "]),r},Ce=function(){function r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,n=2<arguments.length&&void 0!==arguments[2]&&arguments[2];u(this,r),this.text=e,this.index=t,this.isToday=n}return d(r,[{key:"getClasses",value:function(){return r.classes}},{key:"getIndex",value:function(){return this.index}},{key:"getText",value:function(){return this.text}},{key:"getIsToday",value:function(){return this.isToday}}]),r}();Ce.classes="m-datepicker-body__cell js-datepicker__calender-body__cell";var Oe=function(e){function t(){return u(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,Ce),d(t,[{key:"getClasses",value:function(){return p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();Oe.classes="m-datepicker-body__not-current-month";var we=function(e){function t(){return u(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,Ce),d(t,[{key:"getClasses",value:function(){return p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();we.classes="m-datepicker-body__not-current-month";var xe=function(e){function t(){return u(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,Ce),d(t,[{key:"getClasses",value:function(){return p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();xe.classes="m-datepicker-body__current-month";var Te=function(e){function t(){return u(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,xe),d(t,[{key:"getClasses",value:function(){return p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();Te.classes="m-datepicker-body__today";var Ne=function(e){function t(){return u(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,xe),d(t,[{key:"getClasses",value:function(){return p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();Ne.classes="m-datepicker-body__selected-day";var Pe,Ee,je=function(){function o(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:(new Date).getFullYear(),n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:(new Date).getMonth(),r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;u(this,o),this.cells=[],this.today=new Date,this.init(e,t,n,r)}return d(o,[{key:"init",value:function(e,i,a,s){var t=new Date(i,a,1),l=new Date(i,a+1,0).getDate(),c=new Date(i,a,0),u=new Date(i,a+1,1),d=function(){for(var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"en-uk",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:new Date,n=new Date,r=n.getDay(),o=n.getDate(),i=e.toLocaleString(t,{weekday:"long"}),a=null,s=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();1!==r;)o<s?o+=1:(o=1,n.setMonth(n.getMonth()+1)),n.setDate(o),r=n.getDay();return[].concat(k(Array(7).keys())).forEach(function(e){n.setDate(o+e),i===n.toLocaleString(t,{weekday:"long"})&&(a=e)}),a}(e,t),p=this.today.getFullYear(),h=this.today.getMonth(),f=s||this.today.getDate();this.cells=[].concat(k(Array(42).keys())).map(function(e){if(e<d){var t=c.getDate()-(d-1-e);return new we(t,e)}var n=new Date(i,a,e+1-d),r=n.getTime(),o=new Date(p,h,f).getTime();return s&&n.getDate()===f&&e-d<l?new Te(e-d+1,e,!0):r===o&&e-d<f?new Te(e-d+1,e,!0):e-d<l?new xe(e-d+1,e):new Oe(u.getDate()+(e-l-d),e)})}},{key:"setCell",value:function(e,t){this.cells[e]=t}},{key:"getCell",value:function(e){return this.cells[e]}},{key:"getCells",value:function(){return this.cells}}]),o}(),Ae=function(){function t(e){var r=this;u(this,t),this.handleClick=function(e){e.preventDefault(),e.stopPropagation(),r.selected=null;var t=+e.target.dataset.index;if(t||0===t){var n=r._store.getCell(t);n instanceof Oe?(r.updateDate(r.date.getMonth()+1),r.cleanupValueIndex()):n instanceof we?(r.updateDate(r.date.getMonth()-1),r.cleanupValueIndex()):(r.wcNode.setAttribute("value",n.getText()),r.wcNode.setAttribute("index",t))}},this.wcNode=e,this.selected=null,this.date=new Date}return d(t,[{key:"init",value:function(e,t,n,r,o,i){this._store=new je(t,n,r,o),this.selected=null,this.prepareCells(e),this.listenToCells(),this.index=e,this.allowedYears=i,this.locale=t,(r||0===r)&&this.date.setMonth(r),n&&this.date.setFullYear(n)}},{key:"prepareCells",value:function(e){if(this.selected&&!e){var t=new Ne(this.selected.getText(),this.selected.getIndex(),this.selected.getIsToday());this._store.setCell(this.selected.getIndex(),t)}if(e||0===e){var n=this._store.getCell(e);n instanceof xe&&this.handleCurrentMonth(e,n)}}},{key:"listenToCells",value:function(){this.offClicks(),this.unClickEnd=T(this.wcNode,z.CLICK,"js-datepicker-body",this.handleClick,{capture:!0,passive:!1})}},{key:"offClicks",value:function(){this.unClickEnd&&this.unClickEnd()}},{key:"cleanupValueIndex",value:function(){this.wcNode.removeAttribute("index"),this.wcNode.removeAttribute("value")}},{key:"handleCurrentMonth",value:function(e,t){if(null!==this.selected){var n=this.selected.getIndex(),r=this.selected.getIsToday(),o=this.selected.getText(),i=new xe(o,n,r);this._store.setCell(n,i)}var a=new Ne(t.getText(),t.getIndex(),t.getIsToday());this._store.setCell(e,a),(this.selected=a).isToday||(this._store.cells=this._store.cells.map(function(e){return e instanceof Te?new xe(e.getText(),e.getIndex(),!0):e}))}},{key:"updateDate",value:function(e){this.date=new Date(this.date.getFullYear(),this.date.getMonth()),this.date.setMonth(e);var t=this.date.getFullYear();this.allowedYears&&!~this.allowedYears.indexOf(t)||(this.wcNode.setAttribute("year",t),this.wcNode.setAttribute("month",this.date.getMonth()))}},{key:"store",get:function(){return this._store}}]),t}(),De=function(e){function r(){u(this,r);var e=h(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,{styles:pe,template:ke}));return e.datepickerBody=new Ae(e),e}return o(r,ce),d(r,[{key:"connectedCallback",value:function(){p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-datepicker-body"}},{key:"disconnectedCallback",value:function(){p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"disconnectedCallback",this).call(this)}},{key:"willRenderCallback",value:function(){var e=K(this,"month");e=e||0===e?e:void 0;var t=K(this,"day");t=t||0===t?t:void 0,this.datepickerBody.init(K(this,"index"),K(this,"locale"),K(this,"year")||void 0,e,t,K(this,"allowed-years"))}},{key:"attributeChangedCallback",value:function(e,t,n){p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"attributeChangedCallback",this).call(this,e,t,n),"month"!==e&&"year"!==e||!this.shouldUpdateCallback(n,t)||null===n||null===t||m(this,W,null,{bubbles:!0,cancelable:!0,composed:!0})}}]),r}();return De.tagName="axa-datepicker-body",De.propTypes={classes:v.string,locale:de,value:v.string,index:v.number,year:v.number,month:v.number,day:v.number,allowedYears:v.arrayOf(v.number)},Pe=De.tagName,Ee=De,customElements.get(Pe)||customElements.define(Pe,Ee),De}();
