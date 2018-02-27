!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function t(t,n){if("function"==typeof t.hasAttribute&&!t.hasAttribute(n))return!1;var o=t.value;if(n?o=t.getAttribute(n):n=t.name,o&&n!==o){if(e.test(o))try{o=JSON.parse(o)}catch(e){console.error("Attribute "+t+" has an error:\n"+e+"\n",o)}}else o=!0;return o}var n=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,r,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}(),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0},l=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},u=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},c=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},f=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function h(e,t,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new n(t,a({},i,{detail:o}));e.dispatchEvent(r)}var p=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),g=/^\s+|\s{2,}|\s+$/g;function v(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function m(e,t){return v(t).test(e.className)}function y(e,t){if(m(e,t)){var n=v(t,"g");e.className=e.className.replace(n," ").replace(g," ")}}function _(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}return!1}var b=/\s+/,w={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(void 0!==e[i=n[r]])return t[i];return""}()};function x(e,t,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=r.capture,s=void 0!==a&&a,l=r.passive,u=void 0===l||l;if(w[t]&&(t=w[t]),!e||!t)return null;var c=void 0===n?"undefined":o(n),d=n&&"string"===c;if("function"===c){if(i){var f=i;s=f.capture,u=f.passive}i=n}for(var h=p?{capture:s,passive:u}:s,g=d?function(t){var o=t.target;for(;!m(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return i(t,o)}:i,v=t.split(b),y=v.length,x=0;x<y;++x)e.addEventListener(v[x],g,h);return function t(){for(var n=0;n<y;++n)e.removeEventListener(v[n],g,h);_(this,t)}}var C={};function k(e,t){var n=x(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);C[e]||(C[e]={count:0});var o,i=C[e];return i.count++,i.onsubscribe||(i.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,i=void 0!==o&&o,r=n.trailing,a=void 0===r||r,s=n.maxWait,l=void 0!==s&&s,u=void 0,c=void 0,d=void 0,h=void 0,p=!1,g=t!==l,v=!1!==l;function m(){for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return u=o,g&&(c&&clearTimeout(c),c=setTimeout(y,t)),v&&!d&&(d=setTimeout(_,l)),i&&!p&&(p=!0,h=e.apply(void 0,f(u))),h}return m.flush=function(){return(c||d)&&(h=e.apply(void 0,f(u))),w(),h},m.cancel=w,m;function y(){d&&clearTimeout(d),b()}function _(){c&&clearTimeout(c),b()}function b(){a&&(h=e.apply(void 0,f(u))),c=null,d=null,p=!1}function w(){c&&(clearTimeout(c),c=null),d&&(clearTimeout(d),d=null),u=void 0,p=!1}}((o=e,function(){h(document,"pubsub/onsubscribe",o),h(document,"pubsub/onsubscribe/"+o,o),C[o]&&delete C[o].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete C[e]}}function E(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}x(document,"pubsub/onsubscribe",function(e){var t=e.detail;C[t]||(C[t]={count:0});var n=C[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=c(e,3),n=t[0],o=t[1],i=t[2];h(i,n,o)}),delete n.queue)}),Object.setPrototypeOf(E.prototype,HTMLElement.prototype),Object.setPrototypeOf(E,HTMLElement);var O={},T="throwed",N=function(e){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];i(this,n);var o=u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return o._makeContextReady=o._makeContextReady.bind(o),o._initialise(e,t),o}return l(n,E),r(n,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var o=document.createDocumentFragment();this.firstChild;)o.appendChild(this.firstChild);var i=n(function(e){if(!e.hasAttributes)return null;for(var n={},o=e.attributes,i=o.length,r=0;r<i;++r){var a=o[r];n[a.name]=t(a)}return n}(this),o);if(Array.isArray(i))i.forEach(function(t){e.appendChild(t)});else if(i){if("string"==typeof i){var r=new Error(T);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),r}this.appendChild(i)}this._hasRendered=!0}catch(r){r.message!==T&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+r+"\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;C[e]||(C[e]={count:0,queue:[]});var o=C[e].queue;Array.isArray(o)?o.push([e,t,n]):h(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=k("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}(),A=(function(e){function t(){return i(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}l(t,N),r(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return i(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,N),r(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:N.uuidv4();if(e&&!O[e]){var n=document.createElement("style"),o=document.createTextNode(e);n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),O[e]=!0}}}]),t}()),S=".m-header-languages {\n  position: relative;\n  display: block; }\n\n.m-header-languages__drop-down-toggle {\n  background: transparent;\n  border: none;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  cursor: pointer;\n  position: relative;\n  padding: 10.5px 50px 10.5px 20px;\n  color: #7f7f7f;\n  text-transform: uppercase; }\n  .m-header-languages__drop-down-toggle:hover, .m-header-languages__drop-down-toggle:active, .m-header-languages__drop-down-toggle:focus {\n    outline: none;\n    cursor: pointer; }\n  @media (min-width: 576px) {\n    .m-header-languages__drop-down-toggle {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-languages__drop-down-toggle:hover, .m-header-languages__drop-down-toggle:active, .m-header-languages__drop-down-toggle:focus {\n    cursor: pointer; }\n\n.m-header-languages__drop-down-icon {\n  width: 16px;\n  height: 16px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  margin-top: -8px;\n  color: #999;\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease; }\n  .is-dropdown-open .m-header-languages__drop-down-icon {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n\n.m-header-languages__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  position: absolute;\n  top: 100%;\n  z-index: 1070;\n  height: 0;\n  min-width: 100%;\n  overflow: hidden;\n  -webkit-transition: height 0.3s ease;\n  transition: height 0.3s ease;\n  background: #fafafa;\n  -webkit-box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3); }\n  .is-dropdown-open > .m-header-languages__list {\n    height: auto; }\n\n.m-header-languages__list-item {\n  display: block;\n  border-width: 0 1px;\n  border-color: #e5e5e5;\n  border-style: solid; }\n  .m-header-languages__list-item:first-child {\n    border-top-width: 1px; }\n  .m-header-languages__list-item:last-child {\n    border-bottom-color: #ccc;\n    border-bottom-width: 2px; }\n\n.m-header-languages__list-link {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  padding: 10px 20px;\n  text-transform: uppercase;\n  color: #7f7f7f; }\n  @media (min-width: 576px) {\n    .m-header-languages__list-link {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-languages__list-link.is-header-languages-active, .m-header-languages__list-link:hover, .m-header-languages__list-link:active, .m-header-languages__list-link:focus {\n    text-decoration: none;\n    color: #00005b; }\n";var j=function(e){return function(t,n,o){for(var i in n)i in L&&(n[L[i]]=n[i],delete n[i]);return e(t,n,o)}},L={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var D=1,P=2,F=3,M=4,R=5,I=6,z=7,q=8,U=9,G=10,V=11,$=12,K=13;var W=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var B,H=/\n[\s]+$/,J=/^\n[\s]+/,Y=/[\s]+$/,Z=/^[\s]+/,Q=/[\n\s]+/g,X=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ee=["code","pre"],te=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),s===l-1&&(a=!1,-1===X.indexOf(r)&&-1===ee.indexOf(r)?""===(o=c.nodeValue.replace(J,"").replace(Y,"").replace(H,"").replace(Q," "))?t.removeChild(c):c.nodeValue=o:-1===ee.indexOf(r)&&(i=0===s?"":" ",o=c.nodeValue.replace(J,i).replace(Z," ").replace(Y,"").replace(H,"").replace(Q," "),c.nodeValue=o));else if(u&&u.nodeType){a&&(a=!1,-1===X.indexOf(r)&&-1===ee.indexOf(r)?""===(o=c.nodeValue.replace(J,"").replace(H,"").replace(Q," "))?t.removeChild(c):c.nodeValue=o:-1===ee.indexOf(r)&&(o=c.nodeValue.replace(Z," ").replace(J,"").replace(H,"").replace(Q," "),c.nodeValue=o));var d=u.nodeName;d&&(r=d.toLowerCase()),t.appendChild(u)}}}},ne=(function(e){var t="http://www.w3.org/2000/svg",n="http://www.w3.org/1999/xlink",i=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],r="!--",a=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function s(e,o,s){var l;-1!==a.indexOf(e)&&(o.namespace=t);var u=!1;if(o.namespace&&(u=o.namespace,delete o.namespace),u)l=document.createElementNS(u,e);else{if(e===r)return document.createComment(o.comment);l=document.createElement(e)}for(var c in o)if(o.hasOwnProperty(c)){var d=c.toLowerCase(),f=o[c];if("classname"===d&&(d="class",c="class"),"htmlFor"===c&&(c="for"),-1!==i.indexOf(d))if("true"===f)f=d;else if("false"===f)continue;"on"===d.slice(0,2)?l[c]=f:u?"xlink:href"===c?l.setAttributeNS(n,c,f):/^xmlns($|:)/i.test(c)||l.setAttributeNS(null,c,f):l.setAttribute(c,f)}return te(l,s),l}e.exports=function(e,t){t||(t={});var n=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=j(e)),function(r){for(var a=D,s="",l=arguments.length,u=[],c=0;c<r.length;c++)if(c<l-1){var d=arguments[c+1],f=k(r[c]),h=a;h===G&&(h=q),h===U&&(h=q),h===z&&(h=q),h===M&&(h=R),f.push([0,h,d]),u.push.apply(u,f)}else u.push.apply(u,k(r[c]));var p,g=[null,{},[]],v=[[g,-1]];for(c=0;c<u.length;c++){var m=v[v.length-1][0],y=(f=u[c])[0];if(y===P&&/^\//.test(f[1])){var _=v[v.length-1][1];v.length>1&&(v.pop(),v[v.length-1][0][2][_]=e(m[0],m[1],m[2].length?m[2]:void 0))}else if(y===P){var b=[f[1],{},[]];m[2].push(b),v.push([b,m[2].length-1])}else if(y===R||0===y&&f[1]===R){for(var w,x="";c<u.length;c++)if(u[c][0]===R)x=n(x,u[c][1]);else{if(0!==u[c][0]||u[c][1]!==R)break;if("object"!==o(u[c][2])||x)x=n(x,u[c][2]);else for(w in u[c][2])u[c][2].hasOwnProperty(w)&&!m[1][w]&&(m[1][w]=u[c][2][w])}u[c][0]===V&&c++;for(var C=c;c<u.length;c++)if(u[c][0]===q||u[c][0]===R)m[1][x]?""===u[c][1]||(m[1][x]=n(m[1][x],u[c][1])):m[1][x]=i(u[c][1]);else{if(0!==u[c][0]||u[c][1]!==q&&u[c][1]!==R){!x.length||m[1][x]||c!==C||u[c][0]!==F&&u[c][0]!==$||(m[1][x]=x.toLowerCase()),u[c][0]===F&&c--;break}m[1][x]?""===u[c][2]||(m[1][x]=n(m[1][x],u[c][2])):m[1][x]=i(u[c][2])}}else if(y===R)m[1][f[1]]=!0;else if(0===y&&f[1]===R)m[1][f[2]]=!0;else if(y===F)p=m[0],W.test(p)&&v.length&&(_=v[v.length-1][1],v.pop(),v[v.length-1][0][2][_]=e(m[0],m[1],m[2].length?m[2]:void 0));else if(0===y&&f[1]===D)void 0===f[2]||null===f[2]?f[2]="":f[2]||(f[2]=n("",f[2])),Array.isArray(f[2][0])?m[2].push.apply(m[2],f[2]):m[2].push(f[2]);else if(y===D)m[2].push(f[1]);else if(y!==V&&y!==$)throw new Error("unhandled: "+y)}if(g[2].length>1&&/^\s*$/.test(g[2][0])&&g[2].shift(),g[2].length>2||2===g[2].length&&/\S/.test(g[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(g[2][0])&&"string"==typeof g[2][0][0]&&Array.isArray(g[2][0][2])&&(g[2][0]=e(g[2][0][0],g[2][0][1],g[2][0][2])),g[2][0];function k(e){var n,o=[];a===z&&(a=M);for(var i=0;i<e.length;i++){var r=e.charAt(i);a===D&&"<"===r?(s.length&&o.push([D,s]),s="",a=P):">"===r&&(n=a)!==U&&n!==G&&a!==K?(a===P?o.push([P,s]):a===R?o.push([R,s]):a===q&&s.length&&o.push([q,s]),o.push([F]),s="",a=D):a===K&&/-$/.test(s)&&"-"===r?(t.comments&&o.push([q,s.substr(0,s.length-1)],[F]),s="",a=D):a===P&&/^!--$/.test(s)?(t.comments&&o.push([P,s],[R,"comment"],[V]),s=r,a=K):a===D||a===K?s+=r:a===P&&/\s/.test(r)?(o.push([P,s]),s="",a=M):a===P?s+=r:a===M&&/[^\s"'=/]/.test(r)?(a=R,s=r):a===M&&/\s/.test(r)?(s.length&&o.push([R,s]),o.push([$])):a===R&&/\s/.test(r)?(o.push([R,s]),s="",a=I):a===R&&"="===r?(o.push([R,s],[V]),s="",a=z):a===R?s+=r:a!==I&&a!==M||"="!==r?a!==I&&a!==M||/\s/.test(r)?a===z&&'"'===r?a=G:a===z&&"'"===r?a=U:a===G&&'"'===r?(o.push([q,s],[$]),s="",a=M):a===U&&"'"===r?(o.push([q,s],[$]),s="",a=M):a!==z||/\s/.test(r)?a===q&&/\s/.test(r)?(o.push([q,s],[$]),s="",a=M):a!==q&&a!==U&&a!==G||(s+=r):(a=q,i--):(o.push([$]),/[\w-]/.test(r)?(s+=r,a=R):a=M):(o.push([V]),a=z)}return a===D&&s.length?(o.push([D,s]),s=""):a===q&&s.length?(o.push([q,s]),s=""):a===G&&s.length?(o.push([q,s]),s=""):a===U&&s.length?(o.push([q,s]),s=""):a===R&&(o.push([R,s]),s=""),o}};function i(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":o(e))?e:n("",e)}}(s,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=s}(B={exports:{}},B.exports),B.exports);ne.createElement;var oe=function(e){return"undefined"!=typeof window?((n=document.createElement("div")).innerHTML=e,o=n.childNodes,Array.isArray(o)?o:[].slice.call(o)):((t=new String(e)).__encoded=!0,t);var t,n,o},ie=d(['\n  <button type="button" class="m-header-languages__drop-down-toggle js-dropdown__toggle">\n    ','\n    <axa-icon id="angle-bracket-down" classes="m-header-languages__drop-down-icon"></axa-icon>\n  </button>\n'],['\n  <button type="button" class="m-header-languages__drop-down-toggle js-dropdown__toggle">\n    ','\n    <axa-icon id="angle-bracket-down" classes="m-header-languages__drop-down-icon"></axa-icon>\n  </button>\n']),re=d(['\n  <ul class="m-header-languages__list">\n    ',"\n  </ul>\n"],['\n  <ul class="m-header-languages__list">\n    ',"\n  </ul>\n"]),ae=d(['\n      <li class="m-header-languages__list-item">\n        <a class="m-header-languages__list-link','" href="','">\n          ',"\n        </a>\n      </li>\n    "],['\n      <li class="m-header-languages__list-item">\n        <a class="m-header-languages__list-link','" href="','">\n          ',"\n        </a>\n      </li>\n    "]),se=function(e){var t=e.items;return[ne(ie,t[0].name),ne(re,t&&t.map(function(e,t){var n=e.url,o=e.name;return ne(ae,0===t?" is-header-languages-active":"",n,oe(o))}))]};var le=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,i={},r=0;r<o;++r){var a=t[r];i[a.toUpperCase()]=a}return i}("click","keyup","enter","move","leave","Escape","Esc"),ue=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,e),this._wcNode=t,this._options=a({},e.DEFAULTS,n),this._handleClick=this._handleClick.bind(this),this._handleClose=this._handleClose.bind(this),this._handleKeyUp=this._handleKeyUp.bind(this),this._init()}return r(e,[{key:"_init",value:function(){var e=this._options.containerClass;this._container=e?this._wcNode.querySelector(e):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=x(this._container,le.CLICK,this._options.toggleClass,this._handleClick,{passive:this._options.useDefaultEvent})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=x(this._container,le.CLICK,this._options.closeClass,this._handleClose,{passive:this._options.useDefaultEvent})),this._options.outerClose&&(this._unOuterClick=function(e,t,n){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=e.ownerDocument.documentElement;return i.addEventListener(t,r,o),function e(){i.removeEventListener(t,r,o),_(this,e)};function r(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)}}(this._container,le.CLICK,this._handleClose,{passive:this._options.useDefaultEvent})),this._options.escapeClose&&(this._unCloseEscape=x(this._container.ownerDocument,le.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),delete this._lastToggleNode}},{key:"_handleClick",value:function(e,t){this._options.useDefaultEvent||e.preventDefault();var n=!this._lastToggleNode,o=t!==this._lastToggleNode,i=!n&&!o;n?(this._notify(le.ENTER,t),this._onInteractive()):o&&this._notify(le.MOVE,t,this._lastToggleNode),this._lastToggleNode=t,i&&this._options.sameClickClose&&this._close()}},{key:"_handleClose",value:function(e){this._options.useDefaultEvent||e.preventDefault(),this._close()}},{key:"_handleKeyUp",value:function(e){(e.key===le.ESCAPE||e.key===le.ESC||27===e.keyCode)&&(e.preventDefault(),this._close())}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(le.LEAVE,this._lastToggleNode),this._offInteractive(),delete this._lastToggleNode)}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}}]),e}();ue.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,useDefaultEvent:!1};var ce,de=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,fe=function(){var e=window.requestAnimationFrame||window[de+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),o=Math.max(0,16-(n-t)),i=setTimeout(function(){e(n+o)},o);return t=n+o,i}}return e}(),he=(ce=(ce=window.cancelAnimationFrame||window[de+"CancelAnimationFrame"]||window[de+"CancelRequestAnimationFrame"])?ce.bind(window):function(e){clearTimeout(e)},function(e){function t(e,n){i(this,t),n=a({},t.DEFAULTS,n);var o=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o.options=n,o.wcNode=e,o.handleTransitionEnd=o.handleTransitionEnd.bind(o),o}return l(t,ue),r(t,[{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=x(this.wcNode,"transitionend",this.handleTransitionEnd)}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"enter",value:function(e){var t=e.parentNode,n=t.lastElementChild;n.style.overflow="scroll";var o,i,r=n.scrollHeight;n.style.overflow="",this.onInteractive(),n.style.height=r+"px",o=t,i=this.options.isOpenClass,m(o,i)||(o.className+=" "+i)}},{key:"leave",value:function(e){var t=this,n=e.parentNode,o=n.lastElementChild,i=o.scrollHeight;this.offInteractive(),fe(function(){o.style.height=i+"px",fe(function(){y(n,t.options.isOpenClass),o.style.height=0})})}},{key:"handleTransitionEnd",value:function(e){"height"===e.propertyName&&(e.target.style.height="",this.offInteractive())}},{key:"reset",value:function(){var e=this.wcNode.querySelector(this.options.containerClass);e&&(e.lastElementChild.style.height="",y(e,this.options.isOpenClass))}},{key:"destroy",value:function(){s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),this.reset(),delete this.wcNode,delete this.options}}]),t}());he.DEFAULTS={containerClass:".js-dropdown",toggleClass:"js-dropdown__toggle",isOpenClass:"is-dropdown-open"};var pe,ge,ve,me=function(e){function t(){return i(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,S,se))}return l(t,A),r(t,[{key:"connectedCallback",value:function(){s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-languages js-dropdown",this.dropDown=new he(this,{containerClass:null})}},{key:"disconnectedCallback",value:function(){s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.dropDown.destroy(),delete this.dropDown}}]),t}();return pe=function(){window.customElements.define("axa-header-languages",me)},ge=0,ve=function(){if(0===ge)try{pe.apply(void 0,arguments),ge+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",ve,!1),document.addEventListener("WebComponentsReady",ve,!1),me});
