!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.StyleGuideWebComponent={})}(this,function(e){"use strict";function t(e,t){return e(t={exports:{}},t.exports),t.exports}var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},d=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},p=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},y=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function _(){}function b(e,t){return"function"==typeof e[t]&&(e[t]=function(e){return(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&Object.keys(e).reduce(b,e),function(){return e.apply(void 0,arguments)}}(e[t],!1)),e}var m=t(function(e){e.exports=function(){function e(e,t,n,o,r,a){if(a!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=_,n.PropTypes=n,n}()});Object.keys(m).reduce(b,m);var g=m.oneOf(["left","center","right"]),k=m.oneOfType([m.string,m.number]),C=m.oneOfType([m.arrayOf(S),m.shape({cells:m.arrayOf(S)})]),O=m.oneOfType([m.arrayOf(j),m.shape({cells:m.arrayOf(j),action:m.bool})]),x=m.oneOfType([m.arrayOf(P),m.shape({cells:m.arrayOf(P)})]),w=(m.oneOf(["row","col","rowgroup","colgroup","auto"]),m.oneOfType([m.arrayOf(S),m.arrayOf(C)]),m.oneOfType([m.arrayOf(j),m.arrayOf(O)]),m.oneOfType([m.arrayOf(P),m.arrayOf(x)]),m.oneOf(["up","down"])),T=m.oneOf(["left","right"]),A=m.oneOf(["ok","pending","error","unknown"]),N={text:k,value:m.any,rowspan:m.number,colspan:m.number,scope:null,align:g,dense:m.bool},E=m.oneOfType([m.string,m.number,m.shape(N)]),S=m.oneOfType([E,m.shape(l({},N,{sort:w,sortActive:m.bool}))]),j=m.oneOfType([E,m.shape(l({},N,{float:T,action:m.bool,strong:m.bool,bold:m.bool,state:A}))]),P=m.oneOfType([E,m.shape(l({},N,{float:T}))]),D=(m.oneOf(["top","bottom"]),t(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var i=void 0===r?"undefined":a(r);if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===i)for(var s in r)t.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=n:window.classNames=n}()})),R={},L=function(e){return e in R||(R[e]=0),++R[e]},I=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,o,i,s);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function U(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new I(t,l({},o,{detail:n}));return e.dispatchEvent(r)}var F=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),M=/^\s+|\s{2,}|\s+$/g;function V(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function q(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=B.apply(void 0,[e].concat(n));if(!0!==r){var i=[].concat(n);Array.isArray(r)&&(i=r.reduce(z,[])),i&&(e.className+=" "+i.join(" "))}}function z(e,t){var n=t.className;return t.hasClass||e.push(n),e}function B(e){for(var t=e.className,n=!1,o=!0,r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var s=i.map(function(e){var r=V(e).test(t);r?n=!0:o=!1;return{className:e,hasClass:r}});return!(!o&&!n)&&s}function K(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=B.apply(void 0,[e].concat(n));if(!1!==r){var i=[].concat(n);if(Array.isArray(r)&&(i=r.reduce(W,[])),i){var a=e.className;e.className=i.reduce(H,a)}}}function W(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function H(e,t){var n=V(t,"g");return e.replace(n," ").replace(M," ")}var Y=/\s+/,$={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function G(e,t,n,o){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=r.capture,s=void 0!==i&&i,c=r.passive,l=void 0===c||c;if($[t]&&(t=$[t]),!e||!t)return null;var u=void 0===n?"undefined":a(n),d=n&&"string"===u;if("function"===u){if(o){var p=o;s=p.capture,l=p.passive}o=n}for(var f=F?{capture:s,passive:l}:s,h=d?function(t){var r=t.target;for(;!B(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,y=t.split(Y),v=y.length,_=0;_<v;++_)e.addEventListener(y[_],h,f);return function t(){for(var n=0;n<v;++n)e.removeEventListener(y[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,t)}}function J(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,s=n.maxWait,c=void 0!==s&&s,l=void 0,u=void 0,d=void 0,p=void 0,f=!1,h=t!==c,y=!1!==c;function _(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return l=o,h&&(u&&clearTimeout(u),u=setTimeout(b,t)),y&&!d&&(d=setTimeout(m,c)),r&&!f&&(f=!0,p=e.apply(void 0,v(l))),p}return _.flush=function(){(u||d)&&(p=e.apply(void 0,v(l)));return k(),p},_.cancel=k,_;function b(){d&&clearTimeout(d),g()}function m(){u&&clearTimeout(u),g()}function g(){a&&(p=e.apply(void 0,v(l))),u=null,d=null,f=!1}function k(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),l=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var X=window.__subscriptions;function Z(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;X[e]||(X[e]={count:0,queue:[]});var o=X[e].queue;Array.isArray(o)?o.push([e,t,n]):U(n,e,t)}function Q(e,t){var n=G(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);X[e]||(X[e]={count:0});var o,r=X[e];return r.count++,r.onsubscribe||(r.onsubscribe=J((o=e,function(){U(document,"pubsub/onsubscribe",o),U(document,"pubsub/onsubscribe/"+o,o),X[o]&&delete X[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete X[e]}}G(document,"pubsub/onsubscribe",function(e){var t=e.detail;X[t]||(X[t]={count:0});var n=X[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=y(e,3),n=t[0],o=t[1],r=t[2];U(r,n,o)}),delete n.queue)});var ee,te=function(e,t){return e===t},ne=((ee=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te;return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return function(){return e.apply(void 0,[].concat(n,o))?ee.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,n){var o;s(this,t);for(var r="\n    Native Property >>>"+e+"<<< exists already at "+n.nodeName+"#"+n._id+" and evaluates to -> "+n[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",i=arguments.length,a=Array(i>2?i-2:0),c=2;c<i;c++)a[c-2]=arguments[c];var l=f(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this,r].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(l,t),l.name="PropertyExistsException",l}return d(t,e),t}(Error)),oe=/[A-Z]/g;function re(e){return e.replace(oe,ie)}function ie(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var ae=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function se(e,t,n){var o=e;if(n)return function(e,t,n){var o=e;switch(n){case m.string:case m.string.isRequired:return e;case m.bool:case m.bool.isRequired:if(!e||t===e)return!0;case m.number:case m.number.isRequired:case m.object:case m.object.isRequired:case m.array:case m.array.isRequired:default:if(ae.test(e))try{o=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}return o}(e,t,n);if(e&&t!==e){if(ae.test(e))try{o=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else o=!0;return o}var ce=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,le=/[-_]+/g;function ue(e){return e.replace(ce,de)}function de(e,t){return 0==+e||le.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function pe(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[ue(t)]);if(o&&!e.hasAttribute(t))return i!==m.bool&&i!==m.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=se(a,t,i)}function fe(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}var he=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function ye(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=o.capture,i=void 0===r||r,a=o.passive,s=void 0===a||a,c=e.ownerDocument.documentElement,l=G(c,t,function(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)},{capture:i,passive:s});return he&&(c.style.cursor="pointer"),l}var ve=fe("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),_e="axa-change",be="data-prevent-default";((function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(this,e),this._handleClick=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var o=!n._lastToggleNode,r=t!==n._lastToggleNode,i=!o&&!r;o?(n._notify(ve.ENTER,t),n._onInteractive()):r&&n._notify(ve.MOVE,t,n._lastToggleNode),n._lastToggleNode=t,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),n._close()},this._handleKeyUp=function(e){(e.key===ve.ESCAPE||e.key===ve.ESC||27===e.keyCode)&&(e.preventDefault(),n._close())},this._init(t,o)}return c(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=l({},e.DEFAULTS,n));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=G(this._container,ve.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=G(this._container,ve.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=ye(this._container,ve.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=G(this._container.ownerDocument,ve.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(be)?pe(e,be):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(ve.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var me=["title","checked","disabled"],ge=[];var ke=1,Ce=3,Oe=8;function xe(e,t){var n=e.nodeType,o=e.nodeName;n===ke&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,c=null,l=null,u=null,d=null,p=s.length-1;p>=0;--p)if(d=s[p],u=d.name,c=d.namespaceURI,l=d.value,!i(u))if(c){var f=d.localName;t.getAttributeNS(c,f||u)!==l&&t.setAttributeNS(c,u,l)}else t.hasAttribute(u)?t.getAttribute(u)!==l&&("null"===l||"undefined"===l?t.removeAttribute(u):t.setAttribute(u,l)):t.setAttribute(u,l);for(var h=a.length-1;h>=0;--h)if(!1!==(d=a[h]).specified){if(u=d.name,c=d.namespaceURI,i(u))continue;c?(u=d.localName||u,e.hasAttributeNS(c,u)||t.removeAttributeNS(c,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==Ce&&n!==Oe||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;we(e,t,"checked"),we(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?we(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function we(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var Te=3;function Ae(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(xe(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(Ne(o,n))(r=Ae(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var c=s;c<t.childNodes.length;c++)if(Ne(t.childNodes[c],o)){i=t.childNodes[c];break}i?((r=Ae(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=Ae(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function Ne(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===Te&&e.nodeValue===t.nodeValue)}var Ee=function(e){function t(e){var n;s(this,t);for(var o="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var c=f(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,o].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="TemplateNoStringReturnException",c}return d(t,e),t}(Error),Se=!!document.createDocumentFragment().children;function je(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(je.prototype,HTMLElement.prototype),Object.setPrototypeOf(je,HTMLElement);var Pe=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function n(){var e,t,o;s(this,n);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=o=f(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),o._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;o.contextNode&&(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(function(){o.contextCallback(o.contextNode,e)},10)),o.unContextEnabled&&o.unContextEnabled(),o.unContextEnabled=Q("context/available",o._makeContextReady)},f(o,t)}return d(n,e),c(n,[{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,Z("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return s(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return d(n,e),c(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(e){s(this,n);var t=f(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t._reduceProps=function(e,o){var r=e.props,i=e.shouldUpdate,a=t._hasKeys[o];if(-1===me.indexOf(o)&&a)throw new ne(o,t);var s="_"+o,c=r[o],l=t[s];return i||t.shouldUpdateCallback(c,l)?(t[s]=c,t._props[o]=c,a&&h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),o,c,t),{props:r,shouldUpdate:!0}):{props:r,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=J(function(){return t.updated&&t.updated()},50);var o=t.constructor.observedAttributes;return Array.isArray(o)&&o.forEach(function(e){var n,o=ue(e),r=o in t;if(-1===me.indexOf(o)&&r)throw new ne(o,t);t._hasKeys[o]=r,Object.defineProperty(t,o,n={get:function(){return this._props[o]},set:function(e){this.shouldUpdateCallback(this._props[o],e)&&(this._props[o]=e,r&&h(n.__proto__||Object.getPrototypeOf(n),o,e,this),this._isConnected&&this.updatedDebounced())}})}),t}return d(n,e),c(n,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(re)}}]),c(n,[{key:"connectedCallback",value:function(){var e=this;if(u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var o=this.constructor.propTypes;t.forEach(function(t){var r=ue(t);if(e.hasAttribute(t)){var i=pe(e,t,o[r]),a=e._hasKeys[r];e._props[r]=i,a&&h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),r,i,e)}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var o=ue(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this[o]=se(n,e,r[o])}else this[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&U(this,_e,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return n.indexOf(re(e))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&m.checkPropTypes(t,this._props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,o=p(e,["template"]);s(this,n);var r=f(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,o));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return d(n,e),c(n,[{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var o=this._template;try{if(t){for(var r=document.createDocumentFragment(),i=[];this.firstChild;)i.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=i,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});Se||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=o(this._props,this.childrenFragment,this),c=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){c.appendChild(e)});else if(s){if("string"==typeof s)throw new Ee(this);c.appendChild(s)}if(t)u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,c);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(c),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":a(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":a(t)))throw new Error("componentMorph: newTree should be an object");Ae(t,e)}(this,l),function(){for(var e=void 0;e=ge.pop();)delete e.isSameNode;ge=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?"":t,r=p(e,["styles"]);s(this,n);var i=f(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,r));return i._styles=o,i}return d(n,e),c(n,[{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()})(function(e){function t(e){s(this,t);var n=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._id=L(n.nodeName),n}return d(t,je),c(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),De={},Re=function(e){function t(){var e,n,o;s(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o._appendStyles=function(){t.appendGlobalStyles(o._styles,o.nodeName)},f(o,n)}return d(t,Pe),c(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Pe.uuidv4();if(e&&!De[t]){var n=document.createElement("style"),o=document.createTextNode(e);De[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var Le=".m-sticky {\n  display: block; }\n\n.m-sticky__placeholder {\n  display: block;\n  height: 0; }\n\n.m-sticky__box {\n  display: block; }\n  .is-sticky-sticky > .m-sticky__box {\n    position: fixed;\n    top: 0;\n    z-index: 1020; }\n  .is-sticky-bottom > .m-sticky__box {\n    position: absolute;\n    bottom: 0;\n    z-index: 1020; }\n  .is-sticky-in-flow > .m-sticky__box {\n    position: static; }\n\n.m-sticky--debug > .m-sticky__box {\n  background: rgba(0, 0, 255, 0.5);\n  color: #fff; }\n  .m-sticky--debug > .m-sticky__box::before, .m-sticky--debug > .m-sticky__box::after {\n    content: '';\n    color: yellow; }\n\n.m-sticky--debug.is-sticky-sticky > .m-sticky__box {\n  background: rgba(255, 0, 0, 0.7); }\n  .m-sticky--debug.is-sticky-sticky > .m-sticky__box::before {\n    content: 'is-sticky'; }\n\n.m-sticky--debug.is-sticky-bottom > .m-sticky__box {\n  background: rgba(255, 165, 0, 0.7); }\n  .m-sticky--debug.is-sticky-bottom > .m-sticky__box::before {\n    content: 'is-bottom'; }\n\n.m-sticky--debug.is-sticky-in-flow > .m-sticky__box::before {\n  content: 'is-in-flow'; }\n\n.m-sticky--debug.is-sticky-scroll-up > .m-sticky__box::after {\n  content: 'is-scroll-up'; }\n\n.m-sticky--debug.is-sticky-scroll-down > .m-sticky__box::after {\n  content: 'is-scroll-down'; }\n",Ie=/\n[\s]+$/,Ue=/^\n[\s]+/,Fe=/[\s]+$/,Me=/^[\s]+/,Ve=/[\n\s]+/g,qe=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ze=["code","pre","textarea"],Be=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,c=n.length;s<c;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),s===c-1&&(a=!1,-1===qe.indexOf(i)&&-1===ze.indexOf(i)?""===(o=u.nodeValue.replace(Ue,"").replace(Fe,"").replace(Ie,"").replace(Ve," "))?t.removeChild(u):u.nodeValue=o:-1===ze.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace(Ue,r).replace(Me," ").replace(Fe,"").replace(Ie,"").replace(Ve," "),u.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===qe.indexOf(i)&&-1===ze.indexOf(i)?""===(o=u.nodeValue.replace(Ue,"").replace(Ie,"").replace(Ve," "))?t.removeChild(u):u.nodeValue=o:-1===ze.indexOf(i)&&(o=u.nodeValue.replace(Me," ").replace(Ue,"").replace(Ie,"").replace(Ve," "),u.nodeValue=o));var d=l.nodeName;d&&(i=d.toLowerCase()),t.appendChild(l)}}}};function Ke(e,t){var n,o;return[(n=document.createElement("div"),n.setAttribute("class","m-sticky__placeholder js-sticky__placeholder"),n),(o=document.createElement("div"),o.setAttribute("class","m-sticky__box js-sticky__box"),Be(o,[t]),o)]}var We="pageYOffset"in window?function(){return window.pageYOffset}:function(){var e=document,t=e.body;return e.documentElement.scrollTop||t.scrollTop||0};var He,Ye=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,$e=function(){var e=window.requestAnimationFrame||window[Ye+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),o=Math.max(0,16-(n-t)),r=setTimeout(function(){e(n+o)},o);return t=n+o,r}}return e}(),Ge=(He=(He=window.cancelAnimationFrame||window[Ye+"CancelAnimationFrame"]||window[Ye+"CancelRequestAnimationFrame"])?He.bind(window):function(e){clearTimeout(e)},void 0),Je=0,Xe=["resize","orientationchange"].join(" "),Ze=[Xe,"scroll","touchstart","touchmove","touchend","pageshow","load"].join(" "),Qe=function(){function e(){var t=this;s(this,e),this._change=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type;Xe.indexOf(e)>=0&&(t.forceRepaint=!0),t.framePending||$e(function(){for(var e=t.containerNodes,n=t.forceRepaint,o=t.lastScrollTop,r=t.isDirectionFrozen,i=t.lastDirection,a=We(),s=a-o,c=r?i:s>0?1:s<0?-1:i,l=0,u=e.length;l<u;l++){var d=e[l],p=d.getBoundingClientRect(),f=p.top,h=p.bottom;Z("sticky-container/"+(f<=0&&h>=0?"active":"idle"),{containerTop:f,containerBottom:h,direction:c,forceRepaint:n},d)}t.lastScrollTop=a,t.lastDirection=c,t.framePending=!1,t.forceRepaint=!1})},this._freezeDirection=function(){t.isDirectionFrozen=!0,t.lastDirection=-1},this._thawDirection=function(){t.isDirectionFrozen=!1},this.forceRepaint=!1,this.framePending=!1,this.lastScrollTop=0,this.isDirectionFrozen=!1,this.containerNodes=[],this._on()}return c(e,[{key:"addContainer",value:function(e){this.containerNodes.push(e),this._change()}},{key:"_on",value:function(){this._off(),this._unChange=G(window,Ze,this._change),this._unFreezeDirection=Q("sticky-container/freeze-direction",this._freezeDirection),this._unThawDirection=Q("sticky-container/thaw-direction",this._thawDirection)}},{key:"_off",value:function(){this._unChange&&this._unChange(),this._unFreezeDirection&&this._unFreezeDirection(),this._unThawDirection&&this._unThawDirection()}},{key:"remove",value:function(e){var t,n,o;e&&(t=this.containerNodes,n=e,(o=t.indexOf(n))>-1&&t.splice(o,1)),--Je<=0&&Ge&&(this._off(),delete this.containerNodes,Ge=null)}}]),e}();function et(e,t){for(var n=[],o=Object.keys(t),r=o.length,i=0;i<r;++i){var a=o[i];n.push(a+":"+t[a]+";")}e.style.cssText=n.join("")}var tt=fe("IS_IN_FLOW","IS_STICKY","IS_BOTTOM"),nt=function(){function e(t){s(this,e),it.call(this),this.wcNode=t,this.state=tt.IS_IN_FLOW,this.lastDirection=0,this.placeholder=t.querySelector(e.DEFAULTS.placeholderClass),this.box=t.querySelector(e.DEFAULTS.boxClass),this.spy=(Ge||(Ge=new Qe),Je++,Ge)}return c(e,[{key:"_on",value:function(){this._off(),this._unActive=Q("sticky-container/active",this._update,this._contextNode),this._unIdle=Q("sticky-container/idle",this._update,this._contextNode)}},{key:"_off",value:function(){this._unActive&&this._unActive(),this._unIdle&&this._unIdle()}},{key:"destroy",value:function(){this._off(),this.spy.remove(),delete this.spy,delete this.roodNode,delete this.placeholder,delete this.box,delete this._contextNode}},{key:"contextNode",set:function(e){this._contextNode=e,this._on()}}]),e}();nt.DEFAULTS={placeholderClass:".js-sticky__placeholder",boxClass:".js-sticky__box",isStickyClass:"is-sticky-sticky",isBottomClass:"is-sticky-bottom",isScrollUp:"is-sticky-scroll-up",isScrollDown:"is-sticky-scroll-down"};var ot,rt,it=function(){var e=this;this._update=function(t){var n=t.detail,o=n.containerBottom,r=n.direction,i=n.forceRepaint,a=e.wcNode,s=e.state,c=r!==e.lastDirection,l=a.offsetHeight,u=a.offsetWidth,d=a.getBoundingClientRect(),p=d.left,f=d.top,h=f>0,y=f<=0&&o>=l,v=f<=0&&o<l;c&&1===r?(q(a,nt.DEFAULTS.isScrollDown),K(a,nt.DEFAULTS.isScrollUp)):c&&-1===r&&(q(a,nt.DEFAULTS.isScrollUp),K(a,nt.DEFAULTS.isScrollDown)),y&&(i||s!==tt.IS_STICKY)&&(e.state=tt.IS_STICKY,q(a,nt.DEFAULTS.isStickyClass),K(a,nt.DEFAULTS.isBottomClass),et(e.placeholder,{height:l+"px"}),et(e.box,{left:p+"px",width:u+"px"})),v&&(i||s!==tt.IS_BOTTOM)&&(e.state=tt.IS_BOTTOM,K(a,nt.DEFAULTS.isStickyClass),q(a,nt.DEFAULTS.isBottomClass),et(e.placeholder,{height:l+"px"}),et(e.box,{left:p+"px",width:u+"px"})),h&&(i||s!==tt.IS_IN_FLOW)&&(e.state=tt.IS_IN_FLOW,K(a,nt.DEFAULTS.isStickyClass),K(a,nt.DEFAULTS.isBottomClass),et(e.placeholder,{height:""}),et(e.box,{left:"",width:""}))}},at=function(e){function t(){s(this,t);var e=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:Le,template:Ke}));return e.consumeContext("axa-sticky-container"),e}return d(t,Re),c(t,[{key:"willRenderCallback",value:function(){var e=this.debug;this.className=D(this.initialClassName,"m-sticky js-sticky",{"m-sticky--debug":e})}},{key:"didRenderCallback",value:function(){this.sticky&&this.sticky.destroy(),this.sticky=new nt(this);var e=this.contextNode;e&&this.contextCallback(e)}},{key:"contextCallback",value:function(e){this.sticky&&(this.sticky.contextNode=e)}},{key:"disconnectedCallback",value:function(){this.sticky&&(this.sticky.destroy(),delete this.sticky)}}]),t}();at.tagName="axa-sticky",at.propTypes={debug:m.bool},ot=at.tagName,rt=at,customElements.get(ot)||customElements.define(ot,rt),e.AXASticky=at,e.default=at,Object.defineProperty(e,"__esModule",{value:!0})});
