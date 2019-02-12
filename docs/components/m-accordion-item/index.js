var StyleGuideWebComponent=function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),g=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0},p=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},i=function e(t,n,o,i){var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,i)}else if("value"in r&&r.writable)r.value=o;else{var s=r.set;void 0!==s&&s.call(i,o)}return o},c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},O=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function h(){}var f=e(function(e){e.exports=function(){function e(e,t,n,o,i,r){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=h,n.PropTypes=n}()}),y=0;function v(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===y&&(y++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(v,n),y--),n}(n)),e}var m=f;Object.keys(m).reduce(v,m);var b,C,k,w,x=m.oneOf(["left","center","right"]),T=m.oneOf(["left","right"]),N=(m.oneOf(["top","bottom"]),m.oneOf(["up","down"])),E=m.oneOf(["ok","pending","error","unknown"]),A=m.oneOf(["row","col","rowgroup","colgroup","auto"]),j=m.oneOfType([m.string,m.number]),P={text:j,value:m.any,rowspan:j,colspan:j,scope:A,align:x,dense:m.bool},S={float:T,strong:m.bool,bold:m.bool},R=m.oneOfType([m.string,m.number]),D=m.oneOfType([R,m.shape(r({},P,{sort:N,sortActive:m.bool}))]),L=m.oneOfType([R,m.shape(r({},P,S,{action:m.bool,state:E}))]),I=m.oneOfType([R,m.shape(r({},P,S))]),U=m.oneOfType([m.arrayOf(D),m.shape({cells:m.arrayOf(D)})]),M=m.oneOfType([m.arrayOf(L),m.shape({cells:m.arrayOf(L),action:m.bool})]),V=m.oneOfType([m.arrayOf(I),m.shape({cells:m.arrayOf(I)})]),q=(m.oneOfType([U,m.arrayOf(U)]),m.oneOfType([M,m.arrayOf(M)]),m.oneOfType([V,m.arrayOf(V)]),function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}),F={},z=(b=Object,C=b.getPrototypeOf||function(e){return e.__proto__},k=b.setPrototypeOf||function(e,t){return e.__proto__=t,e},w="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),k(new o,n.prototype)},function(e){var t=C(e);return k(e,k(function(){return w(t,arguments,C(this).constructor)},t))}),H=function(n){return z(function(e){function t(){return l(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,n),a(t,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in F||(F[e]=0),++F[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}())},K={},W=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,o,r,s);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function $(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=new W(t,r({},o,{detail:n}));return e.dispatchEvent(i)}var G=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),B=/^\s+|\s{2,}|\s+$/g;function J(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function Y(e,t){var n=t.className;return t.hasClass||e.push(n),e}function Z(e){for(var n=e.className,o=!1,i=!0,t=arguments.length,r=Array(1<t?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];var s=r.map(function(e){var t=J(e).test(n);t?o=!0:i=!1;return{className:e,hasClass:t}});return!(!i&&!o)&&s}function X(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function Q(e,t){var n=J(t,"g");return e.replace(n," ").replace(B," ")}function ee(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}return!1}var te=/\s+/,ne={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(void 0!==e[i=n[r]])return t[i];return""}()};function oe(n,e,o,i){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},r=t.capture,a=void 0!==r&&r,s=t.passive,c=void 0===s||s;if(ne[e]&&(e=ne[e]),!n||!e)return null;var l=void 0===o?"undefined":_(o),u=o&&"string"===l;if("function"===l){if(i){var p=i;a=p.capture,c=p.passive}i=o}for(var d=G?{capture:a,passive:c}:a,h=u?function(e){var t=e.target;for(;!Z(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return i(e,t)}:i,f=e.split(te),y=f.length,v=0;v<y;++v)n.addEventListener(f[v],h,d);return function e(){for(var t=0;t<y;++t)n.removeEventListener(f[t],h,d);ee(this,e)}}function ie(o){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,r=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,c=void 0!==s&&s,l=void 0,u=void 0,p=void 0,d=void 0,h=!1,f=i!==c,y=!1!==c;function v(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return l=t,f&&(u&&clearTimeout(u),u=setTimeout(_,i)),y&&!p&&(p=setTimeout(m,c)),r&&!h&&(h=!0,d=o.apply(void 0,O(l))),d}return v.flush=function(){(u||p)&&(d=o.apply(void 0,O(l)));return g(),d},v.cancel=g,v;function _(){p&&clearTimeout(p),b()}function m(){u&&clearTimeout(u),b()}function b(){a&&(d=o.apply(void 0,O(l))),p=u=null,h=!1}function g(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),l=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var re=window.__subscriptions;function ae(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;re[e]||(re[e]={count:0,queue:[]});var o=re[e].queue;Array.isArray(o)?o.push([e,t,n]):$(n,e,t)}function se(e,t){var n=oe(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);re[e]||(re[e]={count:0});var o,i=re[e];return i.count++,i.onsubscribe||(i.onsubscribe=ie((o=e,function(){$(document,"pubsub/onsubscribe",o),$(document,"pubsub/onsubscribe/"+o,o),re[o]&&delete re[o].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete re[e]}}oe(document,"pubsub/onsubscribe",function(e){var t=e.detail;re[t]||(re[t]={count:0});var n=re[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=c(e,3),n=t[0],o=t[1],i=t[2];$(i,n,o)}),delete n.queue)});var ce,le=function(e,t){return e===t},ue=(ce=function(){var e;return(e=console).log.apply(e,arguments)},function(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:le;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return i.apply(void 0,[].concat(o,t))?ce.apply(void 0,arguments):void 0}}}}()(!0),[]);var pe=1,de=3,he=8;function fe(e,t){var n=e.nodeType;n===pe&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,i=o&&Array.isArray(o)&&o.length,r=function(e){return n&&i&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,c=null,l=null,u=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],u=p.name,c=p.namespaceURI,l=p.value,!r(u))if(c){var h=p.localName;t.getAttributeNS(c,h||u)!==l&&t.setAttributeNS(c,u,l)}else t.hasAttribute(u)?t.getAttribute(u)!==l&&("null"===l||"undefined"===l?t.removeAttribute(u):t.setAttribute(u,l)):t.setAttribute(u,l);for(var f=a.length-1;0<=f;--f)if(!1!==(p=a[f]).specified){if(u=p.name,c=p.namespaceURI,r(u))continue;c?(u=p.localName||u,e.hasAttributeNS(c,u)||t.removeAttributeNS(c,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==de&&n!==he||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue)}function ye(e,t){var n=e.nodeName;"INPUT"===n?function(e,t){var n=e.value,o=t.value;ve(e,t,"checked"),ve(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===n?ve(e,t,"selected"):"TEXTAREA"===n?function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t):"SELECT"===n&&function(e,t){var n=-1,o=0,i=t.firstChild,r=void 0,a=void 0;for(;i;)if("OPTGROUP"===(a=i.nodeName&&i.nodeName.toUpperCase()))i=(r=i).firstChild;else{if("OPTION"===a){if(i.hasAttributeNS(null,"selected")){n=o;break}o+=1}!(i=i.nextSibling)&&r&&(i=r.nextSibling,r=null)}t.selectedIndex=n}(0,t)}function ve(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var _e=3;function me(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(fe(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,i=void 0,r=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(be(o,n))(i=me(o,n))!==n&&(t.replaceChild(i,n),a++);else{r=null;for(var c=s;c<t.childNodes.length;c++)if(be(t.childNodes[c],o)){r=t.childNodes[c];break}r?((i=me(o,r))!==r&&a++,t.insertBefore(i,n)):o.id||n.id?(t.insertBefore(o,n),a++):(i=me(o,n))!==n&&(t.replaceChild(i,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),ye(e,t),t):null:e}function be(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===_e&&e.nodeValue===t.nodeValue)}var ge,Oe,Ce,ke,we=(ge=Object,Oe=ge.getPrototypeOf||function(e){return e.__proto__},Ce=ge.setPrototypeOf||function(e,t){return e.__proto__=t,e},ke="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),Ce(new o,n.prototype)},function(e){var t=Oe(e);return Ce(e,Ce(function(){return ke(t,arguments,Oe(this).constructor)},t))})(function(e){function s(e){var t;l(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,i=Array(1<o?o-1:0),r=1;r<o;r++)i[r-1]=arguments[r];var a=d(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return p(s,e),s}(Error)),xe=!!document.createDocumentFragment().children,Te=/[A-Z]/g;function Ne(e){return e.replace(Te,Ee)}function Ee(e,t,n){var o=e.toLowerCase(),i=n.charAt(t+1);return 0===t||i.toUpperCase()===i?o:"-"+o}var Ae=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function je(t,n,e){var o=t;if(e)return function(t,n,e){var o=t;switch(e){case m.string:case m.string.isRequired:return t;case m.bool:case m.bool.isRequired:if(!t||n===t)return!0;case m.number:case m.number.isRequired:case m.object:case m.object.isRequired:case m.array:case m.array.isRequired:default:if(Ae.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return o}(t,n,e);if(t&&n!==t){if(Ae.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else o=!0;return o}var Pe=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Se=/[-_]+/g;function Re(e){return e.replace(Pe,De)}function De(e,t){return 0==+e||Se.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Le(e,t,n){var o=1===e.nodeType,i=e.constructor.propTypes,r=n;!n&&o&&(r=(void 0===i?{}:i)[Re(t)]);if(o&&!e.hasAttribute(t))return r!==m.bool&&r!==m.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=je(a,t,r)}var Ie=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Ue(n,e,o){var t,i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=i.capture,a=void 0===r||r,s=i.passive,c=void 0===s||s,l=n.ownerDocument.documentElement,u=oe(l,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:c});return t=l,Ie&&(t.style.cursor="pointer"),u}var Me=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,i={},r=0;r<o;++r){var a=t[r];i[a.toUpperCase()]=a}return i}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize","paste"),Ve="axa-change",qe="data-prevent-default",Fe=function(){function o(e){var r=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};l(this,o),this._handleClick=function(e,t){r.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!r._lastToggleNode,o=t!==r._lastToggleNode,i=!n&&!o;n?(r._notify(Me.ENTER,t),r._onInteractive()):o&&r._notify(Me.MOVE,t,r._lastToggleNode),r._lastToggleNode=t,i&&r._options.sameClickClose&&r._close()},this._handleClose=function(e,t){r.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),r._close()},this._handleKeyUp=function(e){(e.key===Me.ESCAPE||e.key===Me.ESC||27===e.keyCode)&&(e.preventDefault(),r._close())},this._init(e,t)}return a(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=r({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=oe(this._container,Me.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,n=t.closeClass,o=t.outerClose,i=t.escapeClose,r=t.preventDefault;n&&(this._unCloseClick=oe(e,Me.CLICK,n,this._handleClose,{passive:!r})),o&&(this._unOuterClick=Ue(e,Me.CLICK,this._handleClose,{passive:!r})),i&&(this._unCloseEscape=oe(e.ownerDocument,Me.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(qe)?Le(e,qe):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Me.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o}();Fe.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var ze=q(function(n){var e,t;return t=e=function(e){function t(){return l(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,n),t}(),e.version="2.0.1-beta.256",t},function(t){return function(e){function n(){return l(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),a(n,[{key:"init",value:function(e){var t=this;u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;t.contextNode&&(clearTimeout(t.timeoutId),t.timeoutId=setTimeout(function(){t.contextCallback(t.contextNode,e)},10)),t.unContextEnabled&&t.unContextEnabled(),t.unContextEnabled=se("context/available",t._makeContextReady)}}},{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,ae("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(t){return function(e){function n(){return l(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),a(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else i(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else i(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else i(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function r(){return l(this,r),d(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return p(r,t),a(r,[{key:"init",value:function(e){var t=this;u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=ie(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){Re(e)})}},{key:"connectedCallback",value:function(){var o=this;if(u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var i=this.constructor.propTypes;e.forEach(function(e){var t=Re(e);if(o.hasAttribute(e)){var n=Le(o,e,i[t]);o.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"attributeChangedCallback",this)&&u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var o=Re(e);if(this.hasAttribute(e)){var i=this.constructor.propTypes;this.props[o]=je(n,e,i[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&$(this,Ve,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var a=this;u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"attributeChangedCallback",this)&&u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"attributeChangedCallback",this).call(this);var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return-1<n.indexOf(Ne(e))}).reduce(function(e,t){var n=e.props,o=e.shouldUpdate,i=n[t],r=a.props&&a.props[t]?a.props[t]:void 0;return o||a.shouldUpdateCallback(i,r)?(a.props[t]=i,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected?this.updated&&this.updated():o&&!this._isConnected&&console.warn("setProps(): Custom Element not connected and props never update",this)}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName,o=this.props;t&&m.checkPropTypes(t,o,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(Ne)}}]),r}()},function(t){return function(e){function c(){return l(this,c),d(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return p(c,t),a(c,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=s(e,["template"]);u(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"init",this).call(this,n),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),i=[];this.firstChild;)i.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=i,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});xe||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var r=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(r))r.forEach(function(e){a.appendChild(e)});else if(r){if("string"==typeof r)throw new we(this);a.appendChild(r)}if(e)u(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");me(t,e)}(this,s),function(){for(var e=void 0;e=ue.pop();)delete e.isSameNode;ue=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),c}()},function(t){return function(e){function i(){return l(this,i),d(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return p(i,t),a(i,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=s(e,["styles"]);u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,o),this._styles=n}},{key:"connectedCallback",value:function(){u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()}),He=(q(ze,H),q(ze,function(i){return function(e){function n(){return l(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,i),a(n,[{key:"init",value:function(e){var t=this;u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._appendStyles=function(){n.appendGlobalStyles(t._styles,t.nodeName)}}}],[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:i.uuidv4();if(e&&!K[t]){var n=document.createElement("style"),o=document.createTextNode(e);K[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),n}()},H)(HTMLElement));var Ke,We=/\n[\s]+$/,$e=/^\n[\s]+/,Ge=/[\s]+$/,Be=/^[\s]+/,Je=/[\n\s]+/g,Ye=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Ze=["code","pre","textarea"],Xe=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),a=!1,s=0,c=n.length;s<c;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),s===c-1&&(a=!1,-1===Ye.indexOf(r)&&-1===Ze.indexOf(r)?""===(o=u.nodeValue.replace($e,"").replace(Ge,"").replace(We,"").replace(Je," "))?t.removeChild(u):u.nodeValue=o:-1===Ze.indexOf(r)&&(i=0===s?"":" ",o=u.nodeValue.replace($e,i).replace(Be," ").replace(Ge,"").replace(We,"").replace(Je," "),u.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===Ye.indexOf(r)&&-1===Ze.indexOf(r)?""===(o=u.nodeValue.replace($e,"").replace(We,"").replace(Je," "))?t.removeChild(u):u.nodeValue=o:-1===Ze.indexOf(r)&&(o=u.nodeValue.replace(Be," ").replace($e,"").replace(We,"").replace(Je," "),u.nodeValue=o));var p=l.nodeName;p&&(r=p.toLowerCase()),t.appendChild(l)}}}},Qe=e(function(e){!function(){var a={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=void 0===n?"undefined":_(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=s.apply(null,n);i&&e.push(i)}else if("object"===o)for(var r in n)a.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):window.classNames=s}()}),et=function(e,t){var n,o,i,r,a,s,c,l,u,p=e.header,d=e.headerSecondary,h=e.headerColor,f=e.icon,y=void 0===f?"":f,v=Qe("m-accordion-item__heading","m-accordion-item__heading--primary",(g(n={},"m-accordion-item__heading--"+h,h),g(n,"m-accordion-item__heading--with-secondary",d),n)),_=Qe("m-accordion-item__header","js-accordion-item__toggle",{"m-accordion-item__header--with-icon":y}),m=((o=document.createElement("axa-icon")).setAttribute("icon",""+String(y)),o.setAttribute("icon-class","m-accordion-item__icon"),o.setAttribute("classes","m-accordion-item__icon"),o),b=((i=document.createElement("axa-icon")).setAttribute("icon","chevron-down"),i.setAttribute("icon-class","m-accordion-item__chevron"),i);return[(s=document.createElement("div"),s.setAttribute("class",""+String(_)),Xe(s,["\n          ",y&&m,"\n          ",(a=document.createElement("div"),a.setAttribute("class","m-accordion-item__heading-wrapper"),Xe(a,["\n            ",(r=document.createElement("span"),r.setAttribute("class",""+String(v)),Xe(r,[p]),r),"\n            ",d&&(c=document.createElement("span"),c.setAttribute("class","m-accordion-item__heading m-accordion-item__heading--secondary"),Xe(c,["\n                      ",d,"\n                "]),c),"\n          "]),a),"\n          ",b,"\n        "]),s),(u=document.createElement("div"),u.setAttribute("class","m-accordion-item__body js-accordion-item__body"),Xe(u,["\n          ",(l=document.createElement("div"),l.setAttribute("class","m-accordion-item__content"),Xe(l,["\n          ",t,"\n          "]),l),"\n        "]),u)]},tt=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,nt=function(){var e=window.requestAnimationFrame||window[tt+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var i=0;e=function(e){var t=Date.now(),n=Math.max(0,16-(t-i)),o=setTimeout(function(){e(t+n)},n);return i=t+n,o}}return e}(),ot=(Ke=(Ke=window.cancelAnimationFrame||window[tt+"CancelAnimationFrame"]||window[tt+"CancelRequestAnimationFrame"])?Ke.bind(window):function(e){clearTimeout(e)},function(e){function o(e,t){l(this,o),t=r({},o.DEFAULTS,t);var n=d(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e,t));return n.toggleState=function(e){var t=e.detail;n.wcNode===t?n.isOpen?n.close():n.open():n.isOpen&&n.close()},n.handleTransitionEnd=function(e){"height"===e.propertyName&&(e.target.style.height="",n.offInteractive())},n.handleToggleClick=function(){ae("accordion-item/toggle",n.wcNode,n._contextNode)},n.isOpen=!1,n.options=t,n.wcNode=e,n.init(),n}return p(o,Fe),a(o,[{key:"init",value:function(){this.toggle=this.wcNode.querySelector(this.options.toggle),this.body=this.wcNode.querySelector(this.options.body),this.on()}},{key:"on",value:function(){this.off(),this.offToggleClicked=oe(this.toggle,"click",this.handleToggleClick)}},{key:"off",value:function(){this.offToggleClicked&&this.offToggleClicked()}},{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=oe(this.body,"transitionend",this.handleTransitionEnd)}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"open",value:function(){var e=this.wcNode,t=e.lastElementChild;if(!this.isOpen){this.isOpen=!0,t.style.overflow="scroll";var n=t.scrollHeight;t.style.overflow="",this.onInteractive(),t.style.height=n+"px",function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=Z.apply(void 0,[e].concat(n));if(!0!==i){var r=[].concat(n);Array.isArray(i)&&(r=i.reduce(Y,[])),r&&(e.className+=" "+r.join(" "))}}(e,this.options.isOpen)}}},{key:"close",value:function(){var e=this,t=this.wcNode,n=t.lastElementChild,o=n.scrollHeight;this.isOpen&&(this.isOpen=!1,this.offInteractive(),nt(function(){n.style.height=o+"px",nt(function(){!function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=Z.apply(void 0,[e].concat(n));if(!1!==i){var r=[].concat(n);if(Array.isArray(i)&&(r=i.reduce(X,[])),r){var a=e.className;e.className=r.reduce(Q,a)}}}(t,e.options.isOpen),n.style.height=0})}))}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeToggle=se("accordion-item/toggle",this.toggleState,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeToggle&&this.unSubscribeToggle()}},{key:"destroy",value:function(){u(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"destroy",this).call(this),this.off(),this.offInteractive(),this.offContextEnabled(),delete this.wcNode,delete this.options}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),o}());ot.DEFAULTS={containerClass:!1,toggle:".js-accordion-item__toggle",body:".js-accordion-item__body",isOpen:"is-accordion-item-open"};var it,rt,at,st=function(e){function t(){return l(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,He),a(t,[{key:"init",value:function(){u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:".m-accordion-item {\n  display: block;\n  text-align: left; }\n\n.m-accordion-item__header {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0;\n  padding: 18px 60px 18px 10px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 0 solid #ccc;\n  border-top-width: 1px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer; }\n\n.m-accordion-item__header--with-icon .m-accordion-item__heading-wrapper {\n  margin-left: 20px; }\n\n.m-accordion-item__header--with-icon ~ .m-accordion-item__body {\n  padding-left: 32px; }\n  .m-accordion-item__header--with-icon ~ .m-accordion-item__body .m-accordion-item__content {\n    padding: 2px 60px 18px 10px; }\n\n.m-accordion-item__heading-wrapper {\n  margin-left: 8px; }\n\n.m-accordion-item__heading {\n  display: block; }\n\n.m-accordion-item__heading--primary {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0; }\n  @media (min-width: 576px) {\n    .m-accordion-item__heading--primary {\n      font-size: 24px;\n      line-height: 1.2; } }\n\n.m-accordion-item__heading--with-secondary {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .m-accordion-item__heading--with-secondary {\n      font-size: 16px; } }\n\n.m-accordion-item__heading--blue {\n  color: #00008f; }\n\n.m-accordion-item__heading--secondary {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  color: #7f7f7f; }\n  @media (min-width: 576px) {\n    .m-accordion-item__heading--secondary {\n      font-size: 14px;\n      line-height: 1.21; } }\n\n.m-accordion-item__chevron {\n  position: absolute;\n  top: calc(50% - (16px / 2));\n  right: 18px;\n  display: block;\n  height: 16px;\n  width: 16px;\n  color: #00008f;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.m-accordion-item__chevron.a-icon__svg {\n  height: 16px;\n  width: 16px; }\n\n.m-accordion-item__icon {\n  display: block;\n  color: #00008f; }\n\n.m-accordion-item__body {\n  height: 0;\n  min-width: 100%;\n  overflow: hidden;\n  -webkit-transition: height 0.3s ease;\n  transition: height 0.3s ease; }\n\n.m-accordion-item__content {\n  margin-left: 18px;\n  padding: 2px 60px 18px 0; }\n\n.is-accordion-item-open .m-accordion-item__chevron {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.is-accordion-item-open .m-accordion-item__body {\n  height: auto; }\n",template:et}),this.consumeContext("axa-accordion")}},{key:"connectedCallback",value:function(){u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-accordion-item",this.interaction=new ot(this)}},{key:"disconnectedCallback",value:function(){u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.interaction.destroy(),delete this.interaction}},{key:"contextCallback",value:function(e){this.interaction.contextNode=e}}]),t}();return st.tagName="axa-accordion-item",st.propTypes={icon:m.string,header:m.string,headerSecondary:m.string,headerColor:m.oneOf(["blue"]),multiple:m.bool},it=st.tagName,rt=st,customElements.get(it)||customElements.define(it,rt,at),st}();
