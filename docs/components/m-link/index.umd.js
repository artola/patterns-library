!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),k=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},p=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},s=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},O=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function f(){}var h=e(function(e){e.exports=function(){function e(e,t,n,r,o,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=f,n.PropTypes=n}()}),v=0;function y(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===v&&(v++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(y,n),v--),n}(n)),e}var b=h;Object.keys(b).reduce(y,b);var _=b.oneOf(["left","center","right"]),g=b.oneOfType([b.string,b.number]),w=b.oneOfType([b.arrayOf(P),b.shape({cells:b.arrayOf(P)})]),C=b.oneOfType([b.arrayOf(S),b.shape({cells:b.arrayOf(S),action:b.bool})]),x=b.oneOfType([b.arrayOf(R),b.shape({cells:b.arrayOf(R)})]),T=(b.oneOf(["row","col","rowgroup","colgroup","auto"]),b.oneOfType([b.arrayOf(P),b.arrayOf(w)]),b.oneOfType([b.arrayOf(S),b.arrayOf(C)]),b.oneOfType([b.arrayOf(R),b.arrayOf(x)]),b.oneOf(["up","down"])),A=b.oneOf(["left","right"]),E=b.oneOf(["ok","pending","error","unknown"]),N={text:g,value:b.any,rowspan:b.number,colspan:b.number,scope:null,align:_,dense:b.bool},j=b.oneOfType([b.string,b.number,b.shape(N)]),P=b.oneOfType([j,b.shape(i({},N,{sort:T,sortActive:b.bool}))]),S=b.oneOfType([j,b.shape(i({},N,{float:A,action:b.bool,strong:b.bool,bold:b.bool,state:E}))]),R=b.oneOfType([j,b.shape(i({},N,{float:A}))]);function L(r){function e(e,t,n){return null==e[t]?null:r(e,t,n)}return e.isRequired=r,e}var D=/^[a-z]{2,4}(-([A-Z][a-z]{3}|[0-9]{3}))?(-([A-Z]{2}|[0-9]{3}))?$/;L(function(e,t,n){if(!D.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid locale.")});b.oneOf(["top","bottom"]);var I=L(function(e,t,n){try{new window.URL(e[t],function(){if(document.baseURI)return document.baseURI;var e=document.getElementsByName("base");return e.length&&e[0].href?e[0].href:window.location.href}())}catch(e){return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid URL. "+e.message)}return null}),U=/\n[\s]+$/,M=/^\n[\s]+/,V=/[\s]+$/,q=/^[\s]+/,F=/[\n\s]+/g,z=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],H=["code","pre","textarea"],B=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===z.indexOf(i)&&-1===H.indexOf(i)?""===(r=u.nodeValue.replace(M,"").replace(V,"").replace(U,"").replace(F," "))?t.removeChild(u):u.nodeValue=r:-1===H.indexOf(i)&&(o=0===s?"":" ",r=u.nodeValue.replace(M,o).replace(q," ").replace(V,"").replace(U,"").replace(F," "),u.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===z.indexOf(i)&&-1===H.indexOf(i)?""===(r=u.nodeValue.replace(M,"").replace(U,"").replace(F," "))?t.removeChild(u):u.nodeValue=r:-1===H.indexOf(i)&&(r=u.nodeValue.replace(q," ").replace(M,"").replace(U,"").replace(F," "),u.nodeValue=r));var p=c.nodeName;p&&(i=p.toLowerCase()),t.appendChild(c)}}}},K=e(function(e){!function(){var a={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=void 0===n?"undefined":m(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var o=s.apply(null,n);o&&e.push(o)}else if("object"===r)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):window.classNames=s}()});function $(e,t){var n,r,o,i,a,s=e.color,l=e.size,c=e.motion,u=e.arrow,p=e.href,d=void 0===p?"#":p,f=e.listed,h=e.icon,v=e.iconsPathPrefix,y=void 0===v?"true":v,m=e.deco,b=e.target,_=void 0===b?"_self":b,g=K("m-link",(k(n={},"m-link--"+s,s),k(n,"m-link--"+l,l),k(n,"m-link--motion",c),k(n,"m-link--arrow",u),k(n,"m-link--listed",f),k(n,"m-link--icon",h),k(n,"m-link--deco",m),n));return(r=document.createElement("a")).setAttribute("href",""+String(d)),r.setAttribute("target",""+String(_)),r.setAttribute("class",""+String(g)),B(r,["\n      ",h&&(o=document.createElement("axa-icon"),o.setAttribute("path-prefix",""+String(y)),o.setAttribute("icon",""+String(h)),o.setAttribute("classes","m-link__icon"),o),"\n      ",f&&(i=document.createElement("axa-icon"),i.setAttribute("path-prefix",""+String(y)),i.setAttribute("icon","arrow"),i.setAttribute("classes","m-link__listed"),i),"\n      ",t,"\n      ",u&&(a=document.createElement("axa-icon"),a.setAttribute("path-prefix",""+String(y)),a.setAttribute("icon","arrow"),a.setAttribute("classes","m-link__arrow"),a),"\n    "]),r}var W={},Z=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function G(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new Z(t,i({},r,{detail:n}));return e.dispatchEvent(o)}var J=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function Y(e){for(var o=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var s=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(o);var n,r;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&s}function X(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}return!1}var Q=/\s+/,ee={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function te(n,e,r,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,l=void 0===s||s;if(ee[e]&&(e=ee[e]),!n||!e)return null;var c=void 0===r?"undefined":m(r),u=r&&"string"===c;if("function"===c){if(o){var p=o;a=p.capture,l=p.passive}o=r}for(var d=J?{capture:a,passive:l}:a,f=u?function(e){var t=e.target;for(;!Y(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,h=e.split(Q),v=h.length,y=0;y<v;++y)n.addEventListener(h[y],f,d);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],f,d);X(this,e)}}function ne(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,p=void 0,d=void 0,f=!1,h=o!==l,v=!1!==l;function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,h&&(u&&clearTimeout(u),u=setTimeout(m,o)),v&&!p&&(p=setTimeout(b,l)),i&&!f&&(f=!0,d=r.apply(void 0,O(c))),d}return y.flush=function(){(u||p)&&(d=r.apply(void 0,O(c)));return g(),d},y.cancel=g,y;function m(){p&&clearTimeout(p),_()}function b(){u&&clearTimeout(u),_()}function _(){a&&(d=r.apply(void 0,O(c))),p=u=null,f=!1}function g(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),c=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var re=window.__subscriptions;function oe(e,t){var n=te(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);re[e]||(re[e]={count:0});var r,o=re[e];return o.count++,o.onsubscribe||(o.onsubscribe=ne((r=e,function(){G(document,"pubsub/onsubscribe",r),G(document,"pubsub/onsubscribe/"+r,r),re[r]&&delete re[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete re[e]}}te(document,"pubsub/onsubscribe",function(e){var t=e.detail;re[t]||(re[t]={count:0});var n=re[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=l(e,3),n=t[0],r=t[1],o=t[2];G(o,n,r)}),delete n.queue)});var ie,ae=function(e,t){return e===t},se=(ie=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:ae;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,t))?ie.apply(void 0,arguments):void 0}}}}()(!0),/[A-Z]/g);function le(e){return e.replace(se,ce)}function ce(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var ue=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function pe(t,n,e){var r=t;if(e)return function(t,n,e){var r=t;switch(e){case b.string:case b.string.isRequired:return t;case b.bool:case b.bool.isRequired:if(!t||n===t)return!0;case b.number:case b.number.isRequired:case b.object:case b.object.isRequired:case b.array:case b.array.isRequired:default:if(ue.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return r}(t,n,e);if(t&&n!==t){if(ue.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else r=!0;return r}var de=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,fe=/[-_]+/g;function he(e){return e.replace(de,ve)}function ve(e,t){return 0==+e||fe.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function ye(e,t,n){var r=1===e.nodeType,o=e.constructor.propTypes,i=n;!n&&r&&(i=(void 0===o?{}:o)[he(t)]);if(r&&!e.hasAttribute(t))return i!==b.bool&&i!==b.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=pe(a,t,i)}var me=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function be(n,e,r){var t,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=o.capture,a=void 0===i||i,s=o.passive,l=void 0===s||s,c=n.ownerDocument.documentElement,u=te(c,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return r(e)},{capture:a,passive:l});return t=c,me&&(t.style.cursor="pointer"),u}var _e=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),ge="axa-change",ke="data-prevent-default";(function(){function r(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};c(this,r),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,r=t!==i._lastToggleNode,o=!n&&!r;n?(i._notify(_e.ENTER,t),i._onInteractive()):r&&i._notify(_e.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,o&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===_e.ESCAPE||e.key===_e.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return o(r,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},r.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=te(this._container,_e.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=te(this._container,_e.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=be(this._container,_e.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=te(this._container.ownerDocument,_e.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(ke)?ye(e,ke):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(_e.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),r})().DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Oe=[];var we=1,Ce=3,xe=8;function Te(e,t){var n=e.nodeType,r=e.nodeName;n===we&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),r=t.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(e){return n&&o&&-1===r.indexOf(e)},a=t.attributes,s=e.attributes,l=null,c=null,u=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],u=p.name,l=p.namespaceURI,c=p.value,!i(u))if(l){var f=p.localName;t.getAttributeNS(l,f||u)!==c&&t.setAttributeNS(l,u,c)}else t.hasAttribute(u)?t.getAttribute(u)!==c&&("null"===c||"undefined"===c?t.removeAttribute(u):t.setAttribute(u,c)):t.setAttribute(u,c);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(u=p.name,l=p.namespaceURI,i(u))continue;l?(u=p.localName||u,e.hasAttributeNS(l,u)||t.removeAttributeNS(l,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==Ce&&n!==xe||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;Ae(e,t,"checked"),Ae(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?Ae(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function Ae(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var Ee=3;function Ne(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(Te(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(je(r,n))(o=Ne(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(je(t.childNodes[l],r)){i=t.childNodes[l];break}i?((o=Ne(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=Ne(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function je(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===Ee&&e.nodeValue===t.nodeValue)}var Pe=function(e){function s(e){var t;c(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=d(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return p(s,e),s}(Error),Se=!!document.createDocumentFragment().children;function Re(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(Re.prototype,HTMLElement.prototype),Object.setPrototypeOf(Re,HTMLElement);var Le=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;c(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=d(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=oe("context/available",n._makeContextReady)},d(n,t)}return p(a,t),o(a,[{key:"connectedCallback",value:function(){u(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&u(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){u(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&u(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;re[e]||(re[e]={count:0,queue:[]});var r=re[e].queue;Array.isArray(r)?r.push([e,t,n]):G(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return c(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),o(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function n(e){c(this,n);var s=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));s._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,o="_"+t,i=n[t],a=s[o];return r||s.shouldUpdateCallback(i,a)?(s.props[t]=i,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},s._isConnected=!1,s.props={},s.updatedDebounced=ne(function(){return s.updated&&s.updated()},50);var t=s.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){he(e)}),s}return p(n,t),o(n,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(le)}}]),o(n,[{key:"connectedCallback",value:function(){var r=this;if(u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var o=this.constructor.propTypes;e.forEach(function(e){var t=he(e);if(r.hasAttribute(e)){var n=ye(r,e,o[t]);r.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var r=he(e);if(this.hasAttribute(e)){var o=this.constructor.propTypes;this.props[r]=pe(n,e,o[r])}else this.props[r]=null;this.checkPropTypes(),"value"===e&&null!==n&&G(this,ge,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,r=Object.keys(e).filter(function(e){return-1<n.indexOf(le(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&b.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),n}()},function(t){return function(e){function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);c(this,l);var r=d(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,n));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return p(l,t),o(l,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});Se||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new Pe(this);a.appendChild(i)}if(e)u(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":m(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":m(t)))throw new Error("componentMorph: newTree should be an object");Ne(t,e)}(this,s),function(){for(var e=void 0;e=Oe.pop();)delete e.isSameNode;Oe=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),l}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,r=a(e,["styles"]);c(this,i);var o=d(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return o._styles=n,o}return p(i,t),o(i,[{key:"connectedCallback",value:function(){u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function r(e){c(this,r);var t,n=d(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return n._id=((t=n.nodeName)in W||(W[t]=0),++W[t]),n}return p(r,Re),o(r,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),r}()),De={},Ie=function(e){function a(){var e,t,n;c(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=d(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},d(n,t)}return p(a,Le),o(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Le.uuidv4();if(e&&!De[t]){var n=document.createElement("style"),r=document.createTextNode(e);De[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var Ue,Me,Ve=function(e){function t(){return c(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:"@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.m-link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  text-decoration: none;\n  color: #00008f; }\n  .m-link:hover, .m-link:focus, .m-link:active {\n    cursor: pointer;\n    text-decoration: underline; }\n  .m-link:hover, .m-link:focus, .m-link:active {\n    color: #00005b; }\n\n.m-link--deco {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  text-decoration: underline; }\n  .m-link--deco:hover, .m-link--deco:focus, .m-link--deco:active {\n    cursor: pointer;\n    text-decoration: none; }\n\n.m-link--red {\n  color: #f07662; }\n  .m-link--red:hover, .m-link--red:focus, .m-link--red:active {\n    color: #ec4d33; }\n\n.m-link--white {\n  color: #fff; }\n  .m-link--white:hover, .m-link--white:focus, .m-link--white:active {\n    color: #f5f5f5; }\n\n.m-link--icon,\n.m-link--arrow,\n.m-link--listed {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  display: inline-block;\n  text-transform: uppercase;\n  font-weight: bold; }\n  @media (min-width: 576px) {\n    .m-link--icon,\n    .m-link--arrow,\n    .m-link--listed {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .m-link--icon:hover, .m-link--icon:active, .m-link--icon:focus,\n  .m-link--arrow:hover,\n  .m-link--arrow:active,\n  .m-link--arrow:focus,\n  .m-link--listed:hover,\n  .m-link--listed:active,\n  .m-link--listed:focus {\n    text-decoration: none; }\n\n.m-link--email {\n  text-transform: none; }\n\n.m-link--arrow {\n  padding-right: 23px; }\n\n.m-link--icon,\n.m-link--listed {\n  padding-left: 23px; }\n\n.m-link__icon,\n.m-link__arrow,\n.m-link__listed {\n  width: 13px;\n  height: 13px;\n  display: block;\n  fill: currentColor;\n  position: absolute; }\n\n.m-link__icon,\n.m-link__listed {\n  left: 0; }\n\n.m-link__icon {\n  top: 0;\n  margin-top: 0; }\n\n.m-link__arrow {\n  top: 50%;\n  margin-top: -6.5px;\n  right: 0; }\n\n.m-link__listed {\n  top: 50%;\n  margin-top: -6.5px; }\n\n.m-link--motion:hover .m-link__arrow,\n.m-link--motion:hover .m-link__listed, .m-link--motion:active .m-link__arrow,\n.m-link--motion:active .m-link__listed, .m-link--motion:focus .m-link__arrow,\n.m-link--motion:focus .m-link__listed {\n  -webkit-animation-duration: 0.6s;\n          animation-duration: 0.6s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-name: fadeOutRightInLeft;\n          animation-name: fadeOutRightInLeft; }\n",template:$}))}return p(t,Ie),t}();return Ve.tagName="axa-link",Ve.propTypes={color:b.oneOf(["red","white"]),size:b.oneOf([""]),motion:b.bool,arrow:b.bool,href:I,listed:b.bool,icon:b.string,deco:b.bool,iconsPathPrefix:b.string,target:b.oneOf(["_blank","_self"])},Ue=Ve.tagName,Me=Ve,customElements.get(Ue)||customElements.define(Ue,Me),Ve});
