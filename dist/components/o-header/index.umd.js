!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.StyleGuideWebComponent=e()}(this,function(){"use strict";var t,e,n,o,r=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}},i={},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},l=function t(e,n,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},p=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},f=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},d=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},h=function t(e,n,o,r){var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var a=Object.getPrototypeOf(e);null!==a&&t(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},v=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),y=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},_=(t=Object,e=t.getPrototypeOf||function(t){return t.__proto__},n=t.setPrototypeOf||function(t,e){return t.__proto__=e,t},o="object"===("undefined"==typeof Reflect?"undefined":a(Reflect))?Reflect.construct:function(t,e,o){var r,i=[null];return i.push.apply(i,e),r=t.bind.apply(t,i),n(new r,o.prototype)},function(t){var r=e(t);return n(t,n(function(){return o(r,arguments,e(this).constructor)},r))}),b=function(t){return _(function(e){function n(){return s(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),u(n,[{key:"init",value:function(){var t;this._id=((t=this.nodeName)in i||(i[t]=0),++i[t]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),n}())},g={},m=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,o=void 0!==n&&n,r=e.cancelable,i=void 0!==r&&r,a=e.detail,s=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(t,o,i,s);var c=u.preventDefault;return u.preventDefault=function(){c.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},u}}();function O(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new m(e,c({},o,{detail:n}));return t.dispatchEvent(r)}var C=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}();function k(t){for(var e=t.className,n=!1,o=!0,r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var s=i.map(function(t){var r=(i=t,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(e);var i,a;r?n=!0:o=!1;return{className:t,hasClass:r}});return!(!o&&!n)&&s}var w=/\s+/,T={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==t[r=n[i]])return e[r];return""}()};function x(t,e,n,o){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=r.capture,s=void 0!==i&&i,u=r.passive,c=void 0===u||u;if(T[e]&&(e=T[e]),!t||!e)return null;var l=void 0===n?"undefined":a(n),p=n&&"string"===l;if("function"===l){if(o){var f=o;s=f.capture,c=f.passive}o=n}for(var d=C?{capture:s,passive:c}:s,h=p?function(e){var r=e.target;for(;!k(r,n)&&r!==t;)r=r.parentNode;if(r!==t)return o(e,r)}:o,v=e.split(w),y=v.length,_=0;_<y;++_)t.addEventListener(v[_],h,d);return function e(){for(var n=0;n<y;++n)t.removeEventListener(v[n],h,d);!function(t,e){if(!t)return!1;for(var n=Object.keys(t),o=n.length,r=0;r<o;++r){var i=n[r];if(t[i]===e)return delete t[i]}}(this,e)}}function j(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,s=n.maxWait,u=void 0!==s&&s,c=void 0,l=void 0,p=void 0,f=void 0,d=!1,h=e!==u,v=!1!==u;function _(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return c=o,h&&(l&&clearTimeout(l),l=setTimeout(b,e)),v&&!p&&(p=setTimeout(g,u)),r&&!d&&(d=!0,f=t.apply(void 0,y(c))),f}return _.flush=function(){(l||p)&&(f=t.apply(void 0,y(c)));return O(),f},_.cancel=O,_;function b(){p&&clearTimeout(p),m()}function g(){l&&clearTimeout(l),m()}function m(){a&&(f=t.apply(void 0,y(c))),l=null,p=null,d=!1}function O(){l&&(clearTimeout(l),l=null),p&&(clearTimeout(p),p=null),c=void 0,d=!1}}window.__subscriptions=window.__subscriptions||{};var P=window.__subscriptions;function N(t,e){var n=x(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,t,e);P[t]||(P[t]={count:0});var o,r=P[t];return r.count++,r.onsubscribe||(r.onsubscribe=j((o=t,function(){O(document,"pubsub/onsubscribe",o),O(document,"pubsub/onsubscribe/"+o,o),P[o]&&delete P[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete P[t]}}x(document,"pubsub/onsubscribe",function(t){var e=t.detail;P[e]||(P[e]={count:0});var n=P[e],o=n.queue;Array.isArray(o)&&(o.forEach(function(t){var e=v(t,3),n=e[0],o=e[1],r=e[2];O(r,n,o)}),delete n.queue)});var E,A=function(t,e){return t===e},S=((E=function(){var t;return(t=console).log.apply(t,arguments)},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;return function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return function(){for(var e=arguments.length,o=Array(e),r=0;r<e;r++)o[r]=arguments[r];return function(){return t.apply(void 0,[].concat(n,o))?E.apply(void 0,arguments):void 0}}}})()(!0),[]);var R=1,D=3,L=8;function U(t,e){var n=t.nodeType;n===R&&function(t,e){for(var n=e.skipChildren&&e.skipChildren(),o=e.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(t){return n&&r&&-1===o.indexOf(t)},a=e.attributes,s=t.attributes,u=null,c=null,l=null,p=null,f=s.length-1;f>=0;--f)if(p=s[f],l=p.name,u=p.namespaceURI,c=p.value,!i(l))if(u){var d=p.localName;e.getAttributeNS(u,d||l)!==c&&e.setAttributeNS(u,l,c)}else e.hasAttribute(l)?e.getAttribute(l)!==c&&("null"===c||"undefined"===c?e.removeAttribute(l):e.setAttribute(l,c)):e.setAttribute(l,c);for(var h=a.length-1;h>=0;--h)if(!1!==(p=a[h]).specified){if(l=p.name,u=p.namespaceURI,i(l))continue;u?(l=p.localName||l,t.hasAttributeNS(u,l)||e.removeAttributeNS(u,l)):t.hasAttributeNS(null,l)||e.removeAttribute(l)}}(t,e),n!==D&&n!==L||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue)}function I(t,e){var n=t.nodeName;"INPUT"===n?function(t,e){var n=t.value,o=e.value;M(t,e,"checked"),M(t,e,"disabled"),n!==o&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===n?M(t,e,"selected"):"TEXTAREA"===n?function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e):"SELECT"===n&&function(t,e){var n=-1,o=0,r=e.firstChild,i=void 0,a=void 0;for(;r;)if("OPTGROUP"===(a=r.nodeName&&r.nodeName.toUpperCase()))r=(i=r).firstChild;else{if("OPTION"===a){if(r.hasAttributeNS(null,"selected")){n=o;break}o+=1}!(r=r.nextSibling)&&i&&(r=i.nextSibling,i=null)}e.selectedIndex=n}(0,e)}function M(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var q=3;function F(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(U(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=e.childNodes[s],o=t.childNodes[s-a],n||o;s++)if(o)if(n)if(V(o,n))(r=F(o,n))!==n&&(e.replaceChild(r,n),a++);else{i=null;for(var u=s;u<e.childNodes.length;u++)if(V(e.childNodes[u],o)){i=e.childNodes[u];break}i?((r=F(o,i))!==i&&a++,e.insertBefore(r,n)):o.id||n.id?(e.insertBefore(o,n),a++):(r=F(o,n))!==n&&(e.replaceChild(r,n),a++)}else e.appendChild(o),a++;else e.removeChild(n),s--}(t,e),I(t,e),e):null:t}function V(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===q&&t.nodeValue===e.nodeValue)}var Y,K,H,W,G=(Y=Object,K=Y.getPrototypeOf||function(t){return t.__proto__},H=Y.setPrototypeOf||function(t,e){return t.__proto__=e,t},W="object"===("undefined"==typeof Reflect?"undefined":a(Reflect))?Reflect.construct:function(t,e,n){var o,r=[null];return r.push.apply(r,e),o=t.bind.apply(t,r),H(new o,n.prototype)},function(t){var e=K(t);return H(t,H(function(){return W(e,arguments,K(this).constructor)},e))})(function(t){function e(t){var n;s(this,e);for(var o="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var u=d(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this,o].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(u,e),u.name="TemplateNoStringReturnException",u}return p(e,t),e}(Error)),B=!!document.createDocumentFragment().children;var $=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}})()&&Object.assign;var Z="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function X(){}var Q,tt=0;function et(t,e){var n=t[e];return"function"==typeof n&&(t[e]=function(t){function e(){return t.apply(void 0,arguments)}return 0===tt&&(tt++,Object.keys(t).map(function(n){return e[n]=t[n],n}).reduce(et,e),tt--),e}(n)),t}var nt=(function(t){t.exports=function(){function t(t,e,n,o,r,i){if(i!==Z){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=X,n.PropTypes=n,n}()}(Q={exports:{}},Q.exports),Q.exports);Object.keys(nt).reduce(et,nt);var ot=nt.oneOf(["left","center","right"]),rt=nt.oneOf(["left","right"]),it=(nt.oneOf(["top","bottom"]),nt.oneOf(["up","down"])),at=nt.oneOf(["ok","pending","error","unknown"]),st=nt.oneOf(["row","col","rowgroup","colgroup","auto"]),ut=nt.oneOfType([nt.string,nt.number]),ct={text:ut,value:nt.any,rowspan:ut,colspan:ut,scope:st,align:ot,dense:nt.bool},lt={float:rt,strong:nt.bool,bold:nt.bool},pt=nt.oneOfType([nt.string,nt.number]),ft=nt.oneOfType([pt,nt.shape(c({},ct,{sort:it,sortActive:nt.bool}))]),dt=nt.oneOfType([pt,nt.shape(c({},ct,lt,{action:nt.bool,state:at}))]),ht=nt.oneOfType([pt,nt.shape(c({},ct,lt))]),vt=nt.oneOfType([nt.arrayOf(ft),nt.shape({cells:nt.arrayOf(ft)})]),yt=nt.oneOfType([nt.arrayOf(dt),nt.shape({cells:nt.arrayOf(dt),action:nt.bool})]),_t=nt.oneOfType([nt.arrayOf(ht),nt.shape({cells:nt.arrayOf(ht)})]),bt=(nt.oneOfType([vt,nt.arrayOf(vt)]),nt.oneOfType([yt,nt.arrayOf(yt)]),nt.oneOfType([_t,nt.arrayOf(_t)]),/[A-Z]/g);function gt(t){return t.replace(bt,mt)}function mt(t,e,n){var o=t.toLowerCase(),r=n.charAt(e+1);return 0===e||r.toUpperCase()===r?o:"-"+o}var Ot=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Ct(t,e,n){var o=t;if(n)return function(t,e,n){var o=t;switch(n){case nt.string:case nt.string.isRequired:return t;case nt.bool:case nt.bool.isRequired:if(!t||e===t)return!0;case nt.number:case nt.number.isRequired:case nt.object:case nt.object.isRequired:case nt.array:case nt.array.isRequired:default:if(Ot.test(t))try{o=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}return o}(t,e,n);if(t&&e!==t){if(Ot.test(t))try{o=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}else o=!0;return o}var kt=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,wt=/[-_]+/g;function Tt(t){return t.replace(kt,xt)}function xt(t,e){return 0==+t||wt.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}function jt(t,e,n){var o=1===t.nodeType,r=t.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[Tt(e)]);if(o&&!t.hasAttribute(e))return i!==nt.bool&&i!==nt.bool.isRequired&&void 0;var a=t.value;return e?a=t.getAttribute(e):e=t.name,a=Ct(a,e,i)}var Pt=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Nt(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=o.capture,i=void 0===r||r,a=o.passive,s=void 0===a||a,u=t.ownerDocument.documentElement,c=x(u,e,function(e){var o=e.target;if(!t.contains(o)&&t!==o)return n(e)},{capture:i,passive:s});return Pt&&(u.style.cursor="pointer"),c}var Et=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var o=e.length,r={},i=0;i<o;++i){var a=e[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize","paste"),At="axa-change",St="data-prevent-default";((function(){function t(e){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(this,t),this._handleClick=function(t,e){n.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault();var o=!n._lastToggleNode,r=e!==n._lastToggleNode,i=!o&&!r;o?(n._notify(Et.ENTER,e),n._onInteractive()):r&&n._notify(Et.MOVE,e,n._lastToggleNode),n._lastToggleNode=e,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(t,e){n.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault(),n._close()},this._handleKeyUp=function(t){(t.key===Et.ESCAPE||t.key===Et.ESC||27===t.keyCode)&&(t.preventDefault(),n._close())},this._init(e,o)}return u(t,[{key:"_init",value:function(e,n){e&&(this._wcNode=e),n&&(this._options=c({},t.DEFAULTS,n));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=x(this._container,Et.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var t=this._container,e=this._options,n=e.closeClass,o=e.outerClose,r=e.escapeClose,i=e.preventDefault;n&&(this._unCloseClick=x(t,Et.CLICK,n,this._handleClose,{passive:!i})),o&&(this._unOuterClick=Nt(t,Et.CLICK,this._handleClose,{passive:!i})),r&&(this._unCloseEscape=x(t.ownerDocument,Et.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(t){return t.hasAttribute(St)?jt(t,St):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Et.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(t,e,n){t in this&&"function"==typeof this[t]&&this[t](e,n)}},{key:"enter",value:function(t){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(t,e){}},{key:"leave",value:function(t){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),t})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Rt=r(function(t){var e,n;return n=e=function(e){function n(){return s(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),n}(),e.version="2.0.1-beta.245",n},function(t){return function(e){function n(){return s(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),u(n,[{key:"init",value:function(t){var e=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._makeContextReady=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;e.contextNode&&(clearTimeout(e.timeoutId),e.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),e.unContextEnabled&&e.unContextEnabled(),e.unContextEnabled=N("context/available",e._makeContextReady)}}},{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=t,function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;P[t]||(P[t]={count:0,queue:[]});var o=P[t].queue;Array.isArray(o)?o.push([t,e,n]):O(n,t,e)}("context/available",t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),n}()},function(t){return function(e){function n(){return s(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),u(n,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",t,this)}}]),n}()},function(t){return function(e){function n(){return s(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),u(n,[{key:"init",value:function(t){var e=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._isConnected=!1,this.props={},this.updatedDebounced=j(function(){return e.updated&&e.updated()},50);var o=this.constructor.observedAttributes;Array.isArray(o)&&o.forEach(function(t){Tt(t)})}},{key:"connectedCallback",value:function(){var t=this;if(l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var o=this.constructor.propTypes;e.forEach(function(e){var n=Tt(e);if(t.hasAttribute(e)){var r=jt(t,e,o[n]);t.props[n]=r}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,o){if(l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).call(this,t,e,o),this.shouldUpdateCallback(o,e)){var r=Tt(t);if(this.hasAttribute(t)){var i=this.constructor.propTypes;this.props[r]=Ct(o,t,i[r])}else this.props[r]=null;this.checkPropTypes(),"value"===t&&null!==o&&O(this,At,o,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(t){var e=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).call(this);var o=this.constructor.observedAttributes,r=void 0===o?[]:o,i=Object.keys(t).filter(function(t){return r.indexOf(gt(t))>-1}).reduce(function(t,n){var o=t.props,r=t.shouldUpdate,i=o[n],a=e.props&&e.props[n]?e.props[n]:void 0;return r||e.shouldUpdateCallback(i,a)?(e.props[n]=i,{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},{props:t,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),i&&this._isConnected?this.updated&&this.updated():i&&!this._isConnected&&console.warn("setProps(): Custom Element not connected and props never update",this)}},{key:"checkPropTypes",value:function(){var t=this.constructor,e=t.propTypes,n=t.tagName,o=this.props;e&&nt.checkPropTypes(e,o,"prop",n)}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var t=this.propTypes;return t&&Object.keys(t).map(gt)}}]),n}()},function(t){return function(e){function n(){return s(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),u(n,[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.template,o=f(t,["template"]);l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,o),this._template=e,this._hasTemplate=!!e,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var t=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var o=this._template;try{if(e){for(var r=document.createDocumentFragment(),i=[];this.firstChild;)i.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=i,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var n=e.cloneNode(!0);t.childrenFragment.appendChild(n)});B||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(t){return 1===t.nodeType}));var s=o(this.props,this.childrenFragment,this),u=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(t){u.appendChild(t)});else if(s){if("string"==typeof s)throw new G(this);u.appendChild(s)}if(e)l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,u);else{var c=this.cloneNode(!1);c._isMorphing=!0,c.appendChild(u),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":a(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":a(e)))throw new Error("componentMorph: newTree should be an object");F(e,t)}(this,c),function(){for(var t=void 0;t=S.pop();)delete t.isSameNode;S=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),n}()},function(t){return function(e){function n(){return s(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),u(n,[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,o=void 0===e?"":e,r=f(t,["styles"]);l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,r),this._styles=o}},{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),n}()}),Dt=(r(Rt,b),r(Rt,function(t){return function(e){function n(){return s(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),u(n,[{key:"init",value:function(t){var e=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._appendStyles=function(){n.appendGlobalStyles(e._styles,e.nodeName)}}}],[{key:"appendGlobalStyles",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.uuidv4();if(e&&!g[n]){var o=document.createElement("style"),r=document.createTextNode(e);g[n]=!0,o.appendChild(r),o.setAttribute("data-c-name",n.toLowerCase()),document.head.appendChild(o)}}}]),n}()},b)(HTMLElement));var Lt,Ut,It,Mt=function(t){function e(){return s(this,e),d(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return p(e,Dt),u(e,[{key:"init",value:function(){l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).call(this,{styles:".o-header {\n  position: relative;\n  display: block; }\n\n.o-header__fade .o-sticky__box {\n  width: 100%;\n  height: 100%;\n  -webkit-transition: -webkit-transform 0.2s ease;\n  transition: -webkit-transform 0.2s ease;\n  transition: transform 0.2s ease;\n  transition: transform 0.2s ease, -webkit-transform 0.2s ease; }\n\n.o-header__fade.is-sticky-sticky > .o-sticky__box {\n  -webkit-transform: translateY(0);\n          transform: translateY(0); }\n\n.o-header__fade.is-sticky-sticky.is-sticky-scroll-down > .o-sticky__box {\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%); }\n\n.o-header__fade.is-sticky-sticky.is-sticky-scroll-up > .o-sticky__box {\n  -webkit-transform: translateY(0);\n          transform: translateY(0); }\n"}),this.provideContext()}},{key:"connectedCallback",value:function(){l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" o-header"}}]),e}();return Mt.tagName="axa-header",Lt=Mt.tagName,Ut=Mt,customElements.get(Lt)||customElements.define(Lt,Ut,It),Mt});
