var StyleGuideWebComponent=function(){"use strict";var e=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function t(t,n){if("function"==typeof t.hasAttribute&&!t.hasAttribute(n))return!1;var r=t.value;if(n?r=t.getAttribute(n):n=t.name,r&&n!==r){if(e.test(r))try{r=JSON.parse(r)}catch(e){console.error("Attribute "+t+" has an error:\n"+e+"\n",r)}}else r=!0;return r}var n=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}(),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},c=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function f(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new n(t,a({},o,{detail:r}));e.dispatchEvent(i)}var d=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function p(e,t){var n,r;return(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(e.className)}var h=/\s+/,v={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function m(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,s=void 0!==a&&a,l=i.passive,c=void 0===l||l;if(v[t]&&(t=v[t]),!e||!t)return null;var u=void 0===n?"undefined":r(n),f=n&&"string"===u;if("function"===u){if(o){var m=o;s=m.capture,c=m.passive}o=n}for(var y=d?{capture:s,passive:c}:s,g=f?function(t){var r=t.target;for(;!p(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,b=t.split(h),x=b.length,_=0;_<x;++_)e.addEventListener(b[_],g,y);return function t(){for(var n=0;n<x;++n)e.removeEventListener(b[n],g,y);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}var y={};function g(e,t){var n=m(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);y[e]||(y[e]={count:0});var r,o=y[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,s=n.maxWait,l=void 0!==s&&s,c=void 0,f=void 0,d=void 0,p=void 0,h=!1,v=t!==l,m=!1!==l;function y(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return c=r,v&&(f&&clearTimeout(f),f=setTimeout(g,t)),m&&!d&&(d=setTimeout(b,l)),o&&!h&&(h=!0,p=e.apply(void 0,u(c))),p}return y.flush=function(){return(f||d)&&(p=e.apply(void 0,u(c))),_(),p},y.cancel=_,y;function g(){d&&clearTimeout(d),x()}function b(){f&&clearTimeout(f),x()}function x(){a&&(p=e.apply(void 0,u(c))),f=null,d=null,h=!1}function _(){f&&(clearTimeout(f),f=null),d&&(clearTimeout(d),d=null),c=void 0,h=!1}}((r=e,function(){f(document,"pubsub/onsubscribe",r),f(document,"pubsub/onsubscribe/"+r,r),y[r]&&delete y[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete y[e]}}function b(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}m(document,"pubsub/onsubscribe",function(e){var t=e.detail;y[t]||(y[t]={count:0});var n=y[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=c(e,3),n=t[0],r=t[1],o=t[2];f(o,n,r)}),delete n.queue)}),Object.setPrototypeOf(b.prototype,HTMLElement.prototype),Object.setPrototypeOf(b,HTMLElement);var x={},_="throwed",w=function(e){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];o(this,n);var r=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return r._makeContextReady=r._makeContextReady.bind(r),r._initialise(e,t),r}return s(n,b),i(n,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var r=document.createDocumentFragment();this.firstChild;)r.appendChild(this.firstChild);var o=n(function(e){if(!e.hasAttributes)return null;for(var n={},r=e.attributes,o=r.length,i=0;i<o;++i){var a=r[i];n[a.name]=t(a)}return n}(this),r);if(Array.isArray(o))o.forEach(function(t){e.appendChild(t)});else if(o){if("string"==typeof o){var i=new Error(_);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),i}this.appendChild(o)}this._hasRendered=!0}catch(i){i.message!==_&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+i+"\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;y[e]||(y[e]={count:0,queue:[]});var r=y[e].queue;Array.isArray(r)?r.push([e,t,n]):f(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=g("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}(),C=(function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}s(t,w),i(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,w),i(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:w.uuidv4();if(e&&!x[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),x[e]=!0}}}]),t}()),k=".m-header-search {\n  display: block; }\n  @media (max-width: 991px) {\n    .m-header-search {\n      margin-left: auto; } }\n\n.m-header-search__form {\n  display: block;\n  padding: 6px 0 6px 20px;\n  margin-left: 20px;\n  border-left: 1px solid #ccc; }\n  @media (max-width: 991px) {\n    .m-header-search__form {\n      padding-left: 0;\n      padding-right: 20px;\n      border-left: none;\n      border-right: 1px solid #ccc; } }\n\n.m-header-search__input {\n  display: none; }\n\n.m-header-search__icon {\n  width: 25px;\n  height: 25px;\n  display: block;\n  fill: currentColor;\n  color: #7f7f7f; }\n";var O=function(e){return function(t,n,r){for(var o in n)o in E&&(n[E[o]]=n[o],delete n[o]);return e(t,n,r)}},E={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var A=1,S=2,T=3,N=4,L=5,j=6,P=7,M=8,F=9,R=10,D=11,G=12,z=13;var $=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var q,V=/\n[\s]+$/,W=/^\n[\s]+/,B=/[\s]+$/,I=/^[\s]+/,H=/[\n\s]+/g,J=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Z=["code","pre"],K=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===J.indexOf(i)&&-1===Z.indexOf(i)?""===(r=u.nodeValue.replace(W,"").replace(B,"").replace(V,"").replace(H," "))?t.removeChild(u):u.nodeValue=r:-1===Z.indexOf(i)&&(o=0===s?"":" ",r=u.nodeValue.replace(W,o).replace(I," ").replace(B,"").replace(V,"").replace(H," "),u.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===J.indexOf(i)&&-1===Z.indexOf(i)?""===(r=u.nodeValue.replace(W,"").replace(V,"").replace(H," "))?t.removeChild(u):u.nodeValue=r:-1===Z.indexOf(i)&&(r=u.nodeValue.replace(I," ").replace(W,"").replace(V,"").replace(H," "),u.nodeValue=r));var f=c.nodeName;f&&(i=f.toLowerCase()),t.appendChild(c)}}}},Q=(function(e){var t="http://www.w3.org/2000/svg",n="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],i="!--",a=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function s(e,r,s){var l;-1!==a.indexOf(e)&&(r.namespace=t);var c=!1;if(r.namespace&&(c=r.namespace,delete r.namespace),c)l=document.createElementNS(c,e);else{if(e===i)return document.createComment(r.comment);l=document.createElement(e)}for(var u in r)if(r.hasOwnProperty(u)){var f=u.toLowerCase(),d=r[u];if("classname"===f&&(f="class",u="class"),"htmlFor"===u&&(u="for"),-1!==o.indexOf(f))if("true"===d)d=f;else if("false"===d)continue;"on"===f.slice(0,2)?l[u]=d:c?"xlink:href"===u?l.setAttributeNS(n,u,d):/^xmlns($|:)/i.test(u)||l.setAttributeNS(null,u,d):l.setAttribute(u,d)}return K(l,s),l}e.exports=function(e,t){t||(t={});var n=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=O(e)),function(i){for(var a=A,s="",l=arguments.length,c=[],u=0;u<i.length;u++)if(u<l-1){var f=arguments[u+1],d=k(i[u]),p=a;p===R&&(p=M),p===F&&(p=M),p===P&&(p=M),p===N&&(p=L),d.push([0,p,f]),c.push.apply(c,d)}else c.push.apply(c,k(i[u]));var h,v=[null,{},[]],m=[[v,-1]];for(u=0;u<c.length;u++){var y=m[m.length-1][0],g=(d=c[u])[0];if(g===S&&/^\//.test(d[1])){var b=m[m.length-1][1];m.length>1&&(m.pop(),m[m.length-1][0][2][b]=e(y[0],y[1],y[2].length?y[2]:void 0))}else if(g===S){var x=[d[1],{},[]];y[2].push(x),m.push([x,y[2].length-1])}else if(g===L||0===g&&d[1]===L){for(var _,w="";u<c.length;u++)if(c[u][0]===L)w=n(w,c[u][1]);else{if(0!==c[u][0]||c[u][1]!==L)break;if("object"!==r(c[u][2])||w)w=n(w,c[u][2]);else for(_ in c[u][2])c[u][2].hasOwnProperty(_)&&!y[1][_]&&(y[1][_]=c[u][2][_])}c[u][0]===D&&u++;for(var C=u;u<c.length;u++)if(c[u][0]===M||c[u][0]===L)y[1][w]?""===c[u][1]||(y[1][w]=n(y[1][w],c[u][1])):y[1][w]=o(c[u][1]);else{if(0!==c[u][0]||c[u][1]!==M&&c[u][1]!==L){!w.length||y[1][w]||u!==C||c[u][0]!==T&&c[u][0]!==G||(y[1][w]=w.toLowerCase()),c[u][0]===T&&u--;break}y[1][w]?""===c[u][2]||(y[1][w]=n(y[1][w],c[u][2])):y[1][w]=o(c[u][2])}}else if(g===L)y[1][d[1]]=!0;else if(0===g&&d[1]===L)y[1][d[2]]=!0;else if(g===T)h=y[0],$.test(h)&&m.length&&(b=m[m.length-1][1],m.pop(),m[m.length-1][0][2][b]=e(y[0],y[1],y[2].length?y[2]:void 0));else if(0===g&&d[1]===A)void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=n("",d[2])),Array.isArray(d[2][0])?y[2].push.apply(y[2],d[2]):y[2].push(d[2]);else if(g===A)y[2].push(d[1]);else if(g!==D&&g!==G)throw new Error("unhandled: "+g)}if(v[2].length>1&&/^\s*$/.test(v[2][0])&&v[2].shift(),v[2].length>2||2===v[2].length&&/\S/.test(v[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(v[2][0])&&"string"==typeof v[2][0][0]&&Array.isArray(v[2][0][2])&&(v[2][0]=e(v[2][0][0],v[2][0][1],v[2][0][2])),v[2][0];function k(e){var n,r=[];a===P&&(a=N);for(var o=0;o<e.length;o++){var i=e.charAt(o);a===A&&"<"===i?(s.length&&r.push([A,s]),s="",a=S):">"===i&&(n=a)!==F&&n!==R&&a!==z?(a===S?r.push([S,s]):a===L?r.push([L,s]):a===M&&s.length&&r.push([M,s]),r.push([T]),s="",a=A):a===z&&/-$/.test(s)&&"-"===i?(t.comments&&r.push([M,s.substr(0,s.length-1)],[T]),s="",a=A):a===S&&/^!--$/.test(s)?(t.comments&&r.push([S,s],[L,"comment"],[D]),s=i,a=z):a===A||a===z?s+=i:a===S&&/\s/.test(i)?(r.push([S,s]),s="",a=N):a===S?s+=i:a===N&&/[^\s"'=/]/.test(i)?(a=L,s=i):a===N&&/\s/.test(i)?(s.length&&r.push([L,s]),r.push([G])):a===L&&/\s/.test(i)?(r.push([L,s]),s="",a=j):a===L&&"="===i?(r.push([L,s],[D]),s="",a=P):a===L?s+=i:a!==j&&a!==N||"="!==i?a!==j&&a!==N||/\s/.test(i)?a===P&&'"'===i?a=R:a===P&&"'"===i?a=F:a===R&&'"'===i?(r.push([M,s],[G]),s="",a=N):a===F&&"'"===i?(r.push([M,s],[G]),s="",a=N):a!==P||/\s/.test(i)?a===M&&/\s/.test(i)?(r.push([M,s],[G]),s="",a=N):a!==M&&a!==F&&a!==R||(s+=i):(a=M,o--):(r.push([G]),/[\w-]/.test(i)?(s+=i,a=L):a=N):(r.push([D]),a=P)}return a===A&&s.length?(r.push([A,s]),s=""):a===M&&s.length?(r.push([M,s]),s=""):a===R&&s.length?(r.push([M,s]),s=""):a===F&&s.length?(r.push([M,s]),s=""):a===L&&(r.push([L,s]),s=""),r}};function o(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":r(e))?e:n("",e)}}(s,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=s}(q={exports:{}},q.exports),q.exports);Q.createElement;var U,X,Y,ee,te,ne=function(e){return"undefined"!=typeof window?((n=document.createElement("div")).innerHTML=e,r=n.childNodes,Array.isArray(r)?r:[].slice.call(r)):((t=new String(e)).__encoded=!0,t);var t,n,r},re=(U=['\n  <form class="m-header-search__form" action="','" method="','">\n    <a class="m-header-search__page-link" href="','">\n      ','\n    </a>\n\n    <input type="text" class="m-header-search__input" placeholder="search..." />\n  </form>\n'],X=['\n  <form class="m-header-search__form" action="','" method="','">\n    <a class="m-header-search__page-link" href="','">\n      ','\n    </a>\n\n    <input type="text" class="m-header-search__input" placeholder="search..." />\n  </form>\n'],Object.freeze(Object.defineProperties(U,{raw:{value:Object.freeze(X)}}))),oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.action,n=e.href,r=e.method;return Q(re,t,void 0===r?"POST":r,n,ne('<axa-icon id="search-left" classes="m-header-search__icon"></axa-icon>'))},ie=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,k,oe))}return s(t,C),i(t,[{key:"connectedCallback",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-search"}}]),t}();return Y=function(){window.customElements.define("axa-header-search",ie)},ee=0,te=function(){if(0===ee)try{Y.apply(void 0,arguments),ee+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",te,!1),document.addEventListener("WebComponentsReady",te,!1),ie}();
