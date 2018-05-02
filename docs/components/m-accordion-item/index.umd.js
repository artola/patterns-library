!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var i=1,r=3,a=8;function n(e,t){var n=e.nodeType,o=e.nodeName;n===i&&function(e,t){for(var n=t.attributes,o=e.attributes,i=null,r=null,a=null,s=null,c=o.length-1;0<=c;--c)if(s=o[c],a=s.name,i=s.namespaceURI,r=s.value,i){var l=s.localName;t.getAttributeNS(i,l||a)!==r&&t.setAttributeNS(i,a,r)}else t.hasAttribute(a)?t.getAttribute(a)!==r&&("null"===r||"undefined"===r?t.removeAttribute(a):t.setAttribute(a,r)):t.setAttribute(a,r);for(var u=n.length-1;0<=u;--u)!1!==(s=n[u]).specified&&(a=s.name,(i=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(i,a)||t.removeAttributeNS(i,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==r&&n!==a||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;s(e,t,"checked"),s(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?s(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function s(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},c=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),b=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},d=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0},h=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function e(t,n,o,i){var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,i)}else if("value"in r&&r.writable)r.value=o;else{var s=r.set;void 0!==s&&s.call(i,o)}return o},v=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},C=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},o=3;function m(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(n(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,i=void 0,r=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(y(o,n))(i=m(o,n))!==n&&(t.replaceChild(i,n),a++);else{r=null;for(var c=s;c<t.childNodes.length;c++)if(y(t.childNodes[c],o)){r=t.childNodes[c];break}r?((i=m(o,r))!==r&&a++,t.insertBefore(i,n)):o.id||n.id?(t.insertBefore(o,n),a++):(i=m(o,n))!==n&&(t.replaceChild(i,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function y(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===o&&e.nodeValue===t.nodeValue)}var g=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function x(t,n){var e=t;if(t&&n!==t){if(g.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}function w(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=x(n,t)}var k=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,o,r,s);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function E(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=new k(t,l({},o,{detail:n}));return e.dispatchEvent(i)}var O=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),A=/^\s+|\s{2,}|\s+$/g;function N(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function T(e,t){var n=t.className;return t.hasClass||e.push(n),e}function S(e){for(var n=e.className,o=!1,i=!0,t=arguments.length,r=Array(1<t?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];var s=r.map(function(e){var t=N(e).test(n);t?o=!0:i=!1;return{className:e,hasClass:t}});return!(!i&&!o)&&s}function j(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function P(e,t){var n=N(t,"g");return e.replace(n," ").replace(A," ")}var R=/\s+/,D={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(void 0!==e[i=n[r]])return t[i];return""}()};function L(n,e,o,i){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},r=t.capture,a=void 0!==r&&r,s=t.passive,c=void 0===s||s;if(D[e]&&(e=D[e]),!n||!e)return null;var l=void 0===o?"undefined":_(o),u=o&&"string"===l;if("function"===l){if(i){var d=i;a=d.capture,c=d.passive}i=o}for(var h=O?{capture:a,passive:c}:a,p=u?function(e){var t=e.target;for(;!S(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return i(e,t)}:i,f=e.split(R),v=f.length,m=0;m<v;++m)n.addEventListener(f[m],p,h);return function e(){for(var t=0;t<v;++t)n.removeEventListener(f[t],p,h);!function(e,t){if(!e)return;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}}(this,e)}}function M(o){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,r=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,c=void 0!==s&&s,l=void 0,u=void 0,d=void 0,h=void 0,p=!1,f=i!==c,v=!1!==c;function m(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return l=t,f&&(u&&clearTimeout(u),u=setTimeout(_,i)),v&&!d&&(d=setTimeout(y,c)),r&&!p&&(p=!0,h=o.apply(void 0,C(l))),h}return m.flush=function(){(u||d)&&(h=o.apply(void 0,C(l)));return b(),h},m.cancel=b,m;function _(){d&&clearTimeout(d),g()}function y(){u&&clearTimeout(u),g()}function g(){a&&(h=o.apply(void 0,C(l))),d=u=null,p=!1}function b(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),l=void 0,p=!1}}var U={};function I(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;U[e]||(U[e]={count:0,queue:[]});var o=U[e].queue;Array.isArray(o)?o.push([e,t,n]):E(n,e,t)}function F(e,t){var n=L(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);U[e]||(U[e]={count:0});var o,i=U[e];return i.count++,i.onsubscribe||(i.onsubscribe=M((o=e,function(){E(document,"pubsub/onsubscribe",o),E(document,"pubsub/onsubscribe/"+o,o),U[o]&&delete U[o].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete U[e]}}L(document,"pubsub/onsubscribe",function(e){var t=e.detail;U[t]||(U[t]={count:0});var n=U[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=v(e,3),n=t[0],o=t[1],i=t[2];E(i,n,o)}),delete n.queue)});var t=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,V=/[-_]+/g;function z(e){return e.replace(t,q)}function q(e,t){return 0==+e||V.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var K=/[A-Z]/g;function H(e,t,n){var o=e.toLowerCase(),i=n.charAt(t+1);return 0===t||i.toUpperCase()===i?o:"-"+o}var e=function(e,t){return e===t},W=function(e){function c(e,t){var n;u(this,c);for(var o="Property >>>"+e+"<<< exists at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e],i=arguments.length,r=Array(2<i?i-2:0),a=2;a<i;a++)r[a-2]=arguments[a];var s=p(this,(n=c.__proto__||Object.getPrototypeOf(c)).call.apply(n,[this,o].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(s,c),s.name="PropertyExistsException",s}return h(c,e),c}(Error);function $(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf($.prototype,HTMLElement.prototype),Object.setPrototypeOf($,HTMLElement);var G,B="throwed",Z=["title","checked","disabled"],J={},X=function(e){return e in J||(J[e]=0),++J[e]},Y=((G=function(){var e;return(e=console).log.apply(e,arguments)},function(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:e;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return i.apply(void 0,[].concat(o,t))?G.apply(void 0,arguments):void 0}}}})()(!0),function(e){function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];u(this,l);var c=p(this,(l.__proto__||Object.getPrototypeOf(l)).call(this));c._reduceProps=function(e,t){var n=e.props,o=e.shouldUpdate,i=c._hasKeys[t];if(-1===Z.indexOf(t)&&i)throw new W(t,c);var r="_"+t,a=n[t],s=c[r];return o||c.shouldUpdateCallback(a,s)?(c[r]=a,c._props[t]=a,i&&f(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),t,a,c),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},c._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;c.contextNode&&(clearTimeout(c.timeoutId),c.timeoutId=setTimeout(function(){c.contextCallback(c.contextNode,e)},10)),c.unContextEnabled&&c.unContextEnabled(),c.unContextEnabled=F("context/enabled",c._makeContextReady)},c._initialise(e,t),c._id=X(c.nodeName),c._props={},c._hasKeys={},c.reRender=M(function(){return c.render()},50);var n=c.constructor.observedAttributes;return Array.isArray(n)&&n.forEach(function(e){var n,o=z(e),i=o in c;if(-1===Z.indexOf(o)&&i)throw new W(o,c);c._hasKeys[o]=i,Object.defineProperty(c,o,n={get:function(){return this["_"+o]},set:function(e){var t="_"+o;this.shouldUpdateCallback(this[t],e)&&(this[t]=e,this._props[o]=e,i&&f(n.__proto__||Object.getPrototypeOf(n),o,e,this),this._isConnected&&this._hasRendered&&this.reRender())}})}),c}return h(l,$),c(l,[{key:"_initialise",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;this._styles=e,this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this._isConnected=!1}},{key:"connectedCallback",value:function(){var i=this;if(!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=z(e);if(i.hasAttribute(e)){var n=w(i,e),o=i._hasKeys[t];i["_"+t]=n,i._props[t]=n,o&&f(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),t,n,i)}})}this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[z(e)]=x(n))}},{key:"batchProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<n.indexOf(e.replace(K,H))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.render()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled(),this._isConnected=!1}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),i=[];this.firstChild;)i.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=i,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!1);n.childrenFragment.appendChild(t)});var r=t(this._props,this.childrenFragment),a=document.createDocumentFragment();if(Array.isArray(r))r.forEach(function(e){a.appendChild(e)});else if(r){if("string"==typeof r){var s=new Error(B);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+s.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),s}a.appendChild(r)}if(e)d(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var c=this.cloneNode(!1);c._isMorphing=!0,c.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");m(t,e)}(this,c),this._isMorphing=!1}}catch(s){s.message!==B&&console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" has an error while loading its template:\n"+s+"\n\nStack Trace: "+s.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}},{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):d(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,I("context/enabled",this.__contextName=e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else f(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"innerHTML",e,this)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),l}()),Q={},ee=function(e){function t(){return u(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,Y),c(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Y.uuidv4();if(e&&!Q[e]){var n=document.createElement("style"),o=document.createTextNode(e);n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),Q[e]=!0}}}]),t}(),te=/\n[\s]+$/,ne=/^\n[\s]+/,oe=/[\s]+$/,ie=/^[\s]+/,re=/[\n\s]+/g,ae=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],se=["code","pre","textarea"],ce=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),a=!1,s=0,c=n.length;s<c;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),s===c-1&&(a=!1,-1===ae.indexOf(r)&&-1===se.indexOf(r)?""===(o=u.nodeValue.replace(ne,"").replace(oe,"").replace(te,"").replace(re," "))?t.removeChild(u):u.nodeValue=o:-1===se.indexOf(r)&&(i=0===s?"":" ",o=u.nodeValue.replace(ne,i).replace(ie," ").replace(oe,"").replace(te,"").replace(re," "),u.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===ae.indexOf(r)&&-1===se.indexOf(r)?""===(o=u.nodeValue.replace(ne,"").replace(te,"").replace(re," "))?t.removeChild(u):u.nodeValue=o:-1===se.indexOf(r)&&(o=u.nodeValue.replace(ie," ").replace(ne,"").replace(te,"").replace(re," "),u.nodeValue=o));var d=l.nodeName;d&&(r=d.toLowerCase()),t.appendChild(l)}}}};var le,ue=(function(e){!function(){var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=void 0===n?"undefined":_(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===o)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}(le={exports:{}},le.exports),le.exports),de=function(e,t){var n,o,i,r,a,s,c,l,u,d=e.header,h=e.headerSecondary,p=e.headerColor,f=e.icon,v=void 0===f?"":f,m=ue("m-accordion-item__heading","m-accordion-item__heading--primary",(b(n={},"m-accordion-item__heading--"+p,p),b(n,"m-accordion-item__heading--with-secondary",h),n)),_=ue("m-accordion-item__header","js-accordion-item__toggle",{"m-accordion-item__header--with-icon":v}),y=((o=document.createElement("axa-icon")).setAttribute("icon",""+String(v)),o.setAttribute("classes","m-accordion-item__icon"),o),g=((i=document.createElement("axa-icon")).setAttribute("icon","chevron-down"),i.setAttribute("classes","m-accordion-item__chevron"),i);return[(s=document.createElement("div"),s.setAttribute("class",""+String(_)),ce(s,["\n          ",v&&y,"\n          ",(a=document.createElement("div"),a.setAttribute("class","m-accordion-item__heading-wrapper"),ce(a,["\n            ",(r=document.createElement("span"),r.setAttribute("class",""+String(m)),ce(r,[d]),r)," \n            ",h&&(c=document.createElement("span"),c.setAttribute("class","m-accordion-item__heading m-accordion-item__heading--secondary"),ce(c,["\n                      ",h,"\n                "]),c),"\n          "]),a),"\n          ",g,"\n        "]),s),(u=document.createElement("div"),u.setAttribute("class","m-accordion-item__body js-accordion-item__body"),ce(u,["\n          ",(l=document.createElement("div"),l.setAttribute("class","m-accordion-item__content"),ce(l,["\n          ",t,"\n          "]),l),"\n        "]),u)]},he=".m-accordion-item {\n  display: block; }\n\n.m-accordion-item__header {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0;\n  padding: 18px 60px 18px 10px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 0 solid #ccc;\n  border-top-width: 1px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer; }\n\n.m-accordion-item__header--with-icon .m-accordion-item__heading-wrapper {\n  margin-left: 20px; }\n\n.m-accordion-item__header--with-icon ~ .m-accordion-item__body {\n  padding-left: 32px; }\n  .m-accordion-item__header--with-icon ~ .m-accordion-item__body .m-accordion-item__content {\n    padding: 2px 60px 18px 10px; }\n\n.m-accordion-item__heading-wrapper {\n  margin-left: 8px; }\n\n.m-accordion-item__heading {\n  display: block; }\n\n.m-accordion-item__heading--primary {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0; }\n  @media (min-width: 576px) {\n    .m-accordion-item__heading--primary {\n      font-size: 24px;\n      line-height: 1.2; } }\n\n.m-accordion-item__heading--with-secondary {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .m-accordion-item__heading--with-secondary {\n      font-size: 16px; } }\n\n.m-accordion-item__heading--blue {\n  color: #00008f; }\n\n.m-accordion-item__heading--secondary {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  color: #7f7f7f; }\n  @media (min-width: 576px) {\n    .m-accordion-item__heading--secondary {\n      font-size: 14px;\n      line-height: 1.21; } }\n\n.m-accordion-item__chevron {\n  position: absolute;\n  top: calc(50% - (16px / 2));\n  right: 18px;\n  display: block;\n  height: 16px;\n  width: 16px;\n  color: #00008f;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.m-accordion-item__icon {\n  display: block;\n  height: 30px;\n  width: 30px;\n  color: #00008f; }\n\n.m-accordion-item__body {\n  height: 0;\n  min-width: 100%;\n  overflow: hidden;\n  -webkit-transition: height 0.3s ease;\n  transition: height 0.3s ease; }\n\n.m-accordion-item__content {\n  margin-left: 18px;\n  padding: 2px 60px 18px 0; }\n\n.is-accordion-item-open .m-accordion-item__chevron {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.is-accordion-item-open .m-accordion-item__body {\n  height: auto; }\n";var pe=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function fe(n,e,o){var t,i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=i.capture,a=void 0===r||r,s=i.passive,c=void 0===s||s,l=n.ownerDocument.documentElement,u=L(l,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:c});return t=l,pe&&(t.style.cursor="pointer"),u}var ve=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,i={},r=0;r<o;++r){var a=t[r];i[a.toUpperCase()]=a}return i}("click","keyup","enter","move","leave","Escape","Esc"),me="data-prevent-default",_e=function(){function o(e){var r=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,o),this._handleClick=function(e,t){r.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!r._lastToggleNode,o=t!==r._lastToggleNode,i=!n&&!o;n?(r._notify(ve.ENTER,t),r._onInteractive()):o&&r._notify(ve.MOVE,t,r._lastToggleNode),r._lastToggleNode=t,i&&r._options.sameClickClose&&r._close()},this._handleClose=function(e,t){r.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),r._close()},this._handleKeyUp=function(e){(e.key===ve.ESCAPE||e.key===ve.ESC||27===e.keyCode)&&(e.preventDefault(),r._close())},this._init(e,t)}return c(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=l({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=L(this._container,ve.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=L(this._container,ve.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=fe(this._container,ve.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=L(this._container.ownerDocument,ve.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(me)?w(e,me):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),delete this._lastToggleNode}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(ve.LEAVE,this._lastToggleNode),this._offInteractive(),delete this._lastToggleNode)}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}}]),o}();_e.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var ye,ge=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,be=function(){var e=window.requestAnimationFrame||window[ge+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var i=0;e=function(e){var t=Date.now(),n=Math.max(0,16-(t-i)),o=setTimeout(function(){e(t+n)},n);return i=t+n,o}}return e}(),Ce=(ye=(ye=window.cancelAnimationFrame||window[ge+"CancelAnimationFrame"]||window[ge+"CancelRequestAnimationFrame"])?ye.bind(window):function(e){clearTimeout(e)},function(e){function o(e,t){u(this,o),t=l({},o.DEFAULTS,t);var n=p(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e,t));return n.toggleState=function(e){var t=e.detail;n.wcNode===t?n.isOpen?n.close():n.open():n.isOpen&&n.close()},n.handleTransitionEnd=function(e){"height"===e.propertyName&&(e.target.style.height="",n.offInteractive())},n.handleToggleClick=function(){I("accordion-item/toggle",n.wcNode,n._contextNode)},n.isOpen=!1,n.options=t,n.wcNode=e,n.init(),n}return h(o,_e),c(o,[{key:"init",value:function(){this.toggle=this.wcNode.querySelector(this.options.toggle),this.body=this.wcNode.querySelector(this.options.body),this.on()}},{key:"on",value:function(){this.off(),this.offToggleClicked=L(this.toggle,"click",this.handleToggleClick)}},{key:"off",value:function(){this.offToggleClicked&&this.offToggleClicked()}},{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=L(this.body,"transitionend",this.handleTransitionEnd)}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"open",value:function(){var e=this.wcNode,t=e.lastElementChild;if(!this.isOpen){this.isOpen=!0,t.style.overflow="scroll";var n=t.scrollHeight;t.style.overflow="",this.onInteractive(),t.style.height=n+"px",function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=S.apply(void 0,[e].concat(n));if(!0!==i){var r=[].concat(n);Array.isArray(i)&&(r=i.reduce(T,[])),r&&(e.className+=" "+r.join(" "))}}(e,this.options.isOpen)}}},{key:"close",value:function(){var e=this,t=this.wcNode,n=t.lastElementChild,o=n.scrollHeight;this.isOpen&&(this.isOpen=!1,this.offInteractive(),be(function(){n.style.height=o+"px",be(function(){!function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=S.apply(void 0,[e].concat(n));if(!1!==i){var r=[].concat(n);if(Array.isArray(i)&&(r=i.reduce(j,[])),r){var a=e.className;e.className=r.reduce(P,a)}}}(t,e.options.isOpen),n.style.height=0})}))}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeToggle=F("accordion-item/toggle",this.toggleState,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeToggle&&this.unSubscribeToggle()}},{key:"destroy",value:function(){d(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"destroy",this).call(this),this.off(),this.offInteractive(),this.offContextEnabled(),delete this.wcNode,delete this.options}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),o}());Ce.DEFAULTS={containerClass:!1,toggle:".js-accordion-item__toggle",body:".js-accordion-item__body",isOpen:"is-accordion-item-open"};var xe,we,ke,Ee=function(e){function t(){u(this,t);var e=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,he,de));return e.selectContext("axa-accordion"),e}return h(t,ee),c(t,null,[{key:"observedAttributes",get:function(){return["icon","header","header-secondary","header-color","multiple"]}}]),c(t,[{key:"connectedCallback",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-accordion-item",this.interaction=new Ce(this)}},{key:"disconnectedCallback",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.interaction.destroy(),delete this.interaction}},{key:"contextCallback",value:function(e){this.interaction.contextNode=e}}]),t}();return xe=function(){window.customElements.define("axa-accordion-item",Ee)},we=0,ke=function(){if(0===we)try{xe.apply(void 0,arguments),we+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",ke,!1),document.addEventListener("WebComponentsReady",ke,!1),Ee});
