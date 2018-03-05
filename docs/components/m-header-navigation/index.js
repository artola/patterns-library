var StyleGuideWebComponent=function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,i)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(i):void 0},s=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},l=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,a=void 0;try{for(var s,r=e[Symbol.iterator]();!(i=(s=r.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{!i&&r.return&&r.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},c=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},h=e(function(e){!function(){var n={}.hasOwnProperty;function i(){for(var e=[],o=0;o<arguments.length;o++){var a=arguments[o];if(a){var s=void 0===a?"undefined":t(a);if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a))e.push(i.apply(null,a));else if("object"===s)for(var r in a)n.call(a,r)&&a[r]&&e.push(r)}}return e.join(" ")}e.exports?e.exports=i:window.classNames=i}()}),d="@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.a-stroke,\n.m-header-navigation__list-link.is-header-navigation-active::after {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1px;\n  display: block;\n  width: 0;\n  height: 0;\n  background: #f07662;\n  -webkit-transition: height 0.2s ease;\n  transition: height 0.2s ease; }\n\n.a-stroke.is-stroke-enter {\n  height: 4px; }\n\n.a-stroke.is-stroke-move {\n  -webkit-transition: left 0.2s ease, width 0.2s ease;\n  transition: left 0.2s ease, width 0.2s ease; }\n\n.a-stroke.is-stroke-static {\n  left: 0 !important;\n  bottom: 1px; }\n\n.a-stroke.is-stroke-transition-off {\n  -webkit-transition-property: none !important;\n  transition-property: none !important;\n  -webkit-transition-duration: 0s !important;\n          transition-duration: 0s !important; }\n\n.m-header-navigation__list-link.is-header-navigation-active::after {\n  bottom: 1px;\n  width: 100%;\n  height: 4px;\n  content: ''; }\n  .is-stroke-interactive .m-header-navigation__list-link.is-header-navigation-active::after {\n    height: 0; }\n\n.m-header-navigation__list-link.is-header-navigation-active.is-stroke-active-open::after {\n  -webkit-transition-property: none;\n  transition-property: none;\n  -webkit-transition-duration: 0s;\n          transition-duration: 0s; }\n\n.m-header-navigation__list-link.is-header-navigation-active.is-stroke-active-move::after {\n  height: 4px; }\n\n.m-header-navigation {\n  display: block;\n  margin-left: auto; }\n  @media (max-width: 991px) {\n    .m-header-navigation {\n      display: none; } }\n\n.m-header-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.m-header-navigation__list-item {\n  display: block;\n  float: left;\n  margin: 0 8px; }\n\n.m-header-navigation__list-link {\n  color: #00008f;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 75px;\n  padding: 0 10px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  text-transform: uppercase;\n  vertical-align: middle;\n  /* stylelint-disable indentation */\n  /* stylelint-enable indentation */ }\n  @media (min-width: 576px) {\n    .m-header-navigation__list-link {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-navigation__list-link.is-header-navigation-active, .m-header-navigation__list-link:hover, .m-header-navigation__list-link:active, .m-header-navigation__list-link:focus {\n    color: #00005b;\n    text-decoration: none; }\n  .m-header-navigation__list-link--hyphenate,\n  .m-header-navigation--hyphenate .m-header-navigation__list-link {\n    /* Adds a hyphen where the word breaks, if supported (No Blink) */\n    -webkit-hyphens: auto;\n        -ms-hyphens: auto;\n            hyphens: auto;\n    /* These are technically the same, but use both */\n    overflow-wrap: break-word;\n    word-wrap: break-word; }\n",f=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function p(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(f.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}var v=function(e){return function(t,n,i){for(var o in n)o in m&&(n[m[o]]=n[o],delete n[o]);return e(t,n,i)}},m={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var _=1,g=2,y=3,b=4,k=5,C=6,w=7,x=8,E=9,N=10,O=11,S=12,T=13;var A=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var j=/\n[\s]+$/,L=/^\n[\s]+/,M=/[\s]+$/,D=/^[\s]+/,P=/[\n\s]+/g,F=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],R=["code","pre"],z=function e(t,n){if(Array.isArray(n))for(var i,o,a=t.nodeName.toLowerCase(),s=!1,r=0,l=n.length;r<l;r++){var u=n[r];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)s=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),r===l-1&&(s=!1,-1===F.indexOf(a)&&-1===R.indexOf(a)?""===(i=c.nodeValue.replace(L,"").replace(M,"").replace(j,"").replace(P," "))?t.removeChild(c):c.nodeValue=i:-1===R.indexOf(a)&&(o=0===r?"":" ",i=c.nodeValue.replace(L,o).replace(D," ").replace(M,"").replace(j,"").replace(P," "),c.nodeValue=i));else if(u&&u.nodeType){s&&(s=!1,-1===F.indexOf(a)&&-1===R.indexOf(a)?""===(i=c.nodeValue.replace(L,"").replace(j,"").replace(P," "))?t.removeChild(c):c.nodeValue=i:-1===R.indexOf(a)&&(i=c.nodeValue.replace(D," ").replace(L,"").replace(j,"").replace(P," "),c.nodeValue=i));var h=u.nodeName;h&&(a=h.toLowerCase()),t.appendChild(u)}}}},U=e(function(e){var n="http://www.w3.org/2000/svg",i="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],a="!--",s=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function r(e,t,r){var l;-1!==s.indexOf(e)&&(t.namespace=n);var u=!1;if(t.namespace&&(u=t.namespace,delete t.namespace),u)l=document.createElementNS(u,e);else{if(e===a)return document.createComment(t.comment);l=document.createElement(e)}for(var c in t)if(t.hasOwnProperty(c)){var h=c.toLowerCase(),d=t[c];if("classname"===h&&(h="class",c="class"),"htmlFor"===c&&(c="for"),-1!==o.indexOf(h))if("true"===d)d=h;else if("false"===d)continue;"on"===h.slice(0,2)?l[c]=d:u?"xlink:href"===c?l.setAttributeNS(i,c,d):/^xmlns($|:)/i.test(c)||l.setAttributeNS(null,c,d):l.setAttribute(c,d)}return z(l,r),l}e.exports=function(e,n){n||(n={});var i=n.concat||function(e,t){return String(e)+String(t)};return!1!==n.attrToProp&&(e=v(e)),function(a){for(var s=_,r="",l=arguments.length,u=[],c=0;c<a.length;c++)if(c<l-1){var h=arguments[c+1],d=z(a[c]),f=s;f===N&&(f=x),f===E&&(f=x),f===w&&(f=x),f===b&&(f=k),d.push([0,f,h]),u.push.apply(u,d)}else u.push.apply(u,z(a[c]));var p,v=[null,{},[]],m=[[v,-1]];for(c=0;c<u.length;c++){var j=m[m.length-1][0],L=(d=u[c])[0];if(L===g&&/^\//.test(d[1])){var M=m[m.length-1][1];m.length>1&&(m.pop(),m[m.length-1][0][2][M]=e(j[0],j[1],j[2].length?j[2]:void 0))}else if(L===g){var D=[d[1],{},[]];j[2].push(D),m.push([D,j[2].length-1])}else if(L===k||0===L&&d[1]===k){for(var P,F="";c<u.length;c++)if(u[c][0]===k)F=i(F,u[c][1]);else{if(0!==u[c][0]||u[c][1]!==k)break;if("object"!==t(u[c][2])||F)F=i(F,u[c][2]);else for(P in u[c][2])u[c][2].hasOwnProperty(P)&&!j[1][P]&&(j[1][P]=u[c][2][P])}u[c][0]===O&&c++;for(var R=c;c<u.length;c++)if(u[c][0]===x||u[c][0]===k)j[1][F]?""===u[c][1]||(j[1][F]=i(j[1][F],u[c][1])):j[1][F]=o(u[c][1]);else{if(0!==u[c][0]||u[c][1]!==x&&u[c][1]!==k){!F.length||j[1][F]||c!==R||u[c][0]!==y&&u[c][0]!==S||(j[1][F]=F.toLowerCase()),u[c][0]===y&&c--;break}j[1][F]?""===u[c][2]||(j[1][F]=i(j[1][F],u[c][2])):j[1][F]=o(u[c][2])}}else if(L===k)j[1][d[1]]=!0;else if(0===L&&d[1]===k)j[1][d[2]]=!0;else if(L===y)p=j[0],A.test(p)&&m.length&&(M=m[m.length-1][1],m.pop(),m[m.length-1][0][2][M]=e(j[0],j[1],j[2].length?j[2]:void 0));else if(0===L&&d[1]===_)void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=i("",d[2])),Array.isArray(d[2][0])?j[2].push.apply(j[2],d[2]):j[2].push(d[2]);else if(L===_)j[2].push(d[1]);else if(L!==O&&L!==S)throw new Error("unhandled: "+L)}if(v[2].length>1&&/^\s*$/.test(v[2][0])&&v[2].shift(),v[2].length>2||2===v[2].length&&/\S/.test(v[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(v[2][0])&&"string"==typeof v[2][0][0]&&Array.isArray(v[2][0][2])&&(v[2][0]=e(v[2][0][0],v[2][0][1],v[2][0][2])),v[2][0];function z(e){var t,i=[];s===w&&(s=b);for(var o=0;o<e.length;o++){var a=e.charAt(o);s===_&&"<"===a?(r.length&&i.push([_,r]),r="",s=g):">"===a&&(t=s)!==E&&t!==N&&s!==T?(s===g?i.push([g,r]):s===k?i.push([k,r]):s===x&&r.length&&i.push([x,r]),i.push([y]),r="",s=_):s===T&&/-$/.test(r)&&"-"===a?(n.comments&&i.push([x,r.substr(0,r.length-1)],[y]),r="",s=_):s===g&&/^!--$/.test(r)?(n.comments&&i.push([g,r],[k,"comment"],[O]),r=a,s=T):s===_||s===T?r+=a:s===g&&/\s/.test(a)?(i.push([g,r]),r="",s=b):s===g?r+=a:s===b&&/[^\s"'=/]/.test(a)?(s=k,r=a):s===b&&/\s/.test(a)?(r.length&&i.push([k,r]),i.push([S])):s===k&&/\s/.test(a)?(i.push([k,r]),r="",s=C):s===k&&"="===a?(i.push([k,r],[O]),r="",s=w):s===k?r+=a:s!==C&&s!==b||"="!==a?s!==C&&s!==b||/\s/.test(a)?s===w&&'"'===a?s=N:s===w&&"'"===a?s=E:s===N&&'"'===a?(i.push([x,r],[S]),r="",s=b):s===E&&"'"===a?(i.push([x,r],[S]),r="",s=b):s!==w||/\s/.test(a)?s===x&&/\s/.test(a)?(i.push([x,r],[S]),r="",s=b):s!==x&&s!==E&&s!==N||(r+=a):(s=x,o--):(i.push([S]),/[\w-]/.test(a)?(r+=a,s=k):s=b):(i.push([O]),s=w)}return s===_&&r.length?(i.push([_,r]),r=""):s===x&&r.length?(i.push([x,r]),r=""):s===N&&r.length?(i.push([x,r]),r=""):s===E&&r.length?(i.push([x,r]),r=""):s===k&&(i.push([k,r]),r=""),i}};function o(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":t(e))?e:i("",e)}}(r,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=r});U.createElement;var I=function(e){return"undefined"!=typeof window?((n=document.createElement("div")).innerHTML=e,i=n.childNodes,Array.isArray(i)?i:[].slice.call(i)):((t=new String(e)).__encoded=!0,t);var t,n,i},q=u(['\n    <li class="m-header-navigation__list-item">\n      <a class="m-header-navigation__list-link '," "," "," ",'" href="','">',"</a>\n\n      ","\n    </li>\n"],['\n    <li class="m-header-navigation__list-item">\n      <a class="m-header-navigation__list-link '," "," "," ",'" href="','">',"</a>\n\n      ","\n    </li>\n"]),G=u(['<axa-header-sub-navigation indextitle="','" indexurl="',"\" items='","' flyout>\n        </axa-header-sub-navigation>"],['<axa-header-sub-navigation indextitle="','" indexurl="',"\" items='","' flyout>\n        </axa-header-sub-navigation>"]),V=u(['\n  <ul class="m-header-navigation__list js-header-navigation__list">\n    ',"\n  </ul>\n"],['\n  <ul class="m-header-navigation__list js-header-navigation__list">\n    ',"\n  </ul>\n"]),W=function(e){var t=e.items,n=e.simplemenu;return U(V,t&&t.map(function(e){return t=o({},e,{simplemenu:n}),a=t.url,s=t.name,r=t.items,l=t.classes,u=t.isActive,c=t.simplemenu,h=t.hyphenate,U(q,r||c?"js-header-navigation__list-link":"",u?"is-header-navigation-active":"",void 0!==h&&h?"m-header-navigation__list-link--hyphenate":"",(i=l)?" "+i:"",a,I(s),r?U(G,s,a,JSON.stringify(r)):"");var t,i,a,s,r,l,u,c,h}))};function $(e,t){for(var n=[],i=Object.keys(t),o=i.length,a=0;a<o;++a){var s=i[a];n.push(s+":"+t[s]+";")}e.style.cssText=n.join("")}var K=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),B=/^\s+|\s{2,}|\s+$/g;function H(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function J(e,t){Z(e,t)||(e.className+=" "+t)}function Z(e,t){return H(t).test(e.className)}function Y(e,t){if(Z(e,t)){var n=H(t,"g");e.className=e.className.replace(n," ").replace(B," ")}}var Q=/\s+/,X={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),i=n.length,o=void 0,a=0;a<i;++a)if(void 0!==e[o=n[a]])return t[o];return""}()};function ee(e,n,i,o){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=a.capture,r=void 0!==s&&s,l=a.passive,u=void 0===l||l;if(X[n]&&(n=X[n]),!e||!n)return null;var c=void 0===i?"undefined":t(i),h=i&&"string"===c;if("function"===c){if(o){var d=o;r=d.capture,u=d.passive}o=i}for(var f=K?{capture:r,passive:u}:r,p=h?function(t){var n=t.target;for(;!Z(n,i)&&n!==e;)n=n.parentNode;if(n!==e)return o(t,n)}:o,v=n.split(Q),m=v.length,_=0;_<m;++_)e.addEventListener(v[_],p,f);return function t(){for(var n=0;n<m;++n)e.removeEventListener(v[n],p,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),i=n.length,o=0;o<i;++o){var a=n[o];if(e[a]===t)return delete e[a]}}(this,t)}}var te,ne=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,ie=function(){var e=window.requestAnimationFrame||window[ne+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),i=Math.max(0,16-(n-t)),o=setTimeout(function(){e(n+i)},i);return t=n+i,o}}return e}(),oe=te=(te=window.cancelAnimationFrame||window[ne+"CancelAnimationFrame"]||window[ne+"CancelRequestAnimationFrame"])?te.bind(window):function(e){clearTimeout(e)};var ae=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function se(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=i.capture,a=void 0===o||o,s=i.passive,r=void 0===s||s,l=e.ownerDocument.documentElement,u=ee(l,t,function(t){var i=t.target;if(!e.contains(i)&&e!==i)return n(t)},{capture:a,passive:r});return ae&&(l.style.cursor="pointer"),u}var re=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i=t.length,o={},a=0;a<i;++a){var s=t[a];o[s.toUpperCase()]=s}return o}("click","keyup","enter","move","leave","Escape","Esc"),le=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,e),this._wcNode=t,this._options=o({},e.DEFAULTS,i),this._handleClick=this._handleClick.bind(this),this._handleClose=this._handleClose.bind(this),this._handleKeyUp=this._handleKeyUp.bind(this),this._init()}return i(e,[{key:"_init",value:function(){var e=this._options.containerClass;this._container=e?this._wcNode.querySelector(e):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=ee(this._container,re.CLICK,this._options.toggleClass,this._handleClick,{passive:this._options.useDefaultEvent})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=ee(this._container,re.CLICK,this._options.closeClass,this._handleClose,{passive:this._options.useDefaultEvent})),this._options.outerClose&&(this._unOuterClick=se(this._container,re.CLICK,this._handleClose,{passive:this._options.useDefaultEvent})),this._options.escapeClose&&(this._unCloseEscape=ee(this._container.ownerDocument,re.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),delete this._lastToggleNode}},{key:"_handleClick",value:function(e,t){this._options.useDefaultEvent||e.preventDefault();var n=!this._lastToggleNode,i=t!==this._lastToggleNode,o=!n&&!i;n?(this._notify(re.ENTER,t),this._onInteractive()):i&&this._notify(re.MOVE,t,this._lastToggleNode),this._lastToggleNode=t,o&&this._options.sameClickClose&&this._close()}},{key:"_handleClose",value:function(e){this._options.useDefaultEvent||e.preventDefault(),this._close()}},{key:"_handleKeyUp",value:function(e){(e.key===re.ESCAPE||e.key===re.ESC||27===e.keyCode)&&(e.preventDefault(),this._close())}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(re.LEAVE,this._lastToggleNode),this._offInteractive(),delete this._lastToggleNode)}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}}]),e}();le.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,useDefaultEvent:!1};var ue=function(e){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{containerClass:".js-header-navigation__list",toggleClass:t.DEFAULTS.toggleClass,closeClass:"js-header-navigation-close",sameClickClose:!i.simpleMenu,useDefaultEvent:!!i.simpleMenu,outerClose:!i.simpleMenu,escapeClose:!i.simpleMenu}));return a.wcNode=e,a.options=o({},t.DEFAULTS,i),a._isStatic=!1,a._handleResize=a._handleResize.bind(a),a._handleTransitionEnd=a._handleTransitionEnd.bind(a),a.init(),a}return s(t,le),i(t,[{key:"init",value:function(){this.wcNode.style.position="relative",this._list=this.wcNode.querySelector(this.options.list),this._stroke=document.createElement("div"),this._stroke.className=this.options.strokeClass,this._list.appendChild(this._stroke)}},{key:"enter",value:function(e){var t=this,n=e.parentNode;this._node=e,this._parentNode=n,Z(e,this.options.activeClass)&&(this._activeNode=e,J(e,this.options.activeOpenClass),J(e,this.options.activeMoveClass)),ie(function(){t._handleStaticState(!0,!0),J(t._list,t.options.interactiveClass),ie(function(){J(t._stroke,t.options.enterClass),$(t._stroke,{width:n.offsetWidth+"px",left:n.offsetLeft+"px"})})})}},{key:"move",value:function(e){var t=this,n=e.parentNode;this._node=e,this._parentNode=n,this._activeNode&&Y(this._activeNode,this.options.activeMoveClass),ie(function(){t._handleStaticState(!1),ie(function(){J(t._stroke,t.options.moveClass),$(t._stroke,{width:n.offsetWidth+"px",left:n.offsetLeft+"px"}),t._onMoving()})})}},{key:"leave",value:function(){var e=this,t=this._node;this._offMoving(),this._activeNode&&(Y(this._activeNode,this.options.activeMoveClass),Y(this._activeNode,this.options.activeOpenClass),this._activeNode=null),Z(t,this.options.activeClass)&&J(t,this.options.activeOpenClass),ie(function(){e._handleStaticState(!0),Y(e._list,e.options.interactiveClass),ie(function(){Y(e._stroke,e.options.moveClass),Y(e._stroke,e.options.enterClass),Y(t,e.options.activeOpenClass)}),e._parentNode=null,e._node=null})}},{key:"_onMoving",value:function(){var e,t;this._offMoving(),this._unResize=ee((e=this.wcNode,(t=e.ownerDocument).defaultView||t.parentWindow),"resize",this._handleResize),this._unTransitionEnd=ee(this._stroke,"transitionend",this._handleTransitionEnd)}},{key:"_offMoving",value:function(){this._unResize&&this._unResize(),this._unTransitionEnd&&this._unTransitionEnd()}},{key:"_handleStaticState",value:function(e,t){var n=this;(t||e!==this._isStatic)&&(this._isStatic=e,J(this._stroke,this.options.transitionOffClass),e?(this._node.appendChild(this._stroke),J(this._stroke,this.options.staticClass)):(this._list.appendChild(this._stroke),Y(this._stroke,this.options.staticClass)),ie(function(){Y(n._stroke,n.options.transitionOffClass)}))}},{key:"_handleResize",value:function(){var e=this;this.resizeTimeout&&(oe(this.resizeTimeout),this.resizeTimeout=null),this.resizeTimeout=ie(function(){var t=e._parentNode,n=t.offsetWidth,i=t.offsetLeft;n&&i&&$(e._stroke,{width:n+"px",left:i+"px"})})}},{key:"_handleTransitionEnd",value:function(e){"left"===e.propertyName&&(this._offMoving(),this._handleStaticState(!0))}},{key:"destroy",value:function(){a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),this._stroke&&(this._stroke.parentNode.removeChild(this._stroke),delete this._stroke),delete this.wcNode,delete this.options}}]),t}();ue.DEFAULTS={strokeClass:"a-stroke",list:".js-header-navigation__list",toggleClass:"js-header-navigation__list-link",enterClass:"is-stroke-enter",moveClass:"is-stroke-move",staticClass:"is-stroke-static",interactiveClass:"is-stroke-interactive",activeClass:"is-header-navigation-active",activeOpenClass:"is-stroke-active-open",activeMoveClass:"is-stroke-active-move",transitionOffClass:"is-stroke-transition-off"};var ce=function(e){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{containerClass:".js-header-navigation__list",toggleClass:t.DEFAULTS.toggleClass,closeClass:"js-header-navigation-close",useDefaultEvent:!("simpleMenu"in i)||!!i.simpleMenu,outerClose:!i.simpleMenu,escapeClose:!i.simpleMenu}));return a.wcNode=e,a.options=o({},t.DEFAULTS,i),a.init(),a}return s(t,le),i(t,[{key:"init",value:function(){this.list=this.wcNode.querySelector(this.options.list),this.subMenu=this.wcNode.querySelector(this.options.subNavi)}},{key:"enter",value:function(e){var t;J(e.parentNode,this.options.openClass),(t=this.subMenu)&&(t.style.display="none",t.offsetHeight,t.style.display="")}},{key:"move",value:function(e,t){Y(t.parentNode,this.options.openClass),J(e.parentNode,this.options.openClass)}},{key:"leave",value:function(e){Y(e.parentNode,this.options.openClass)}},{key:"destroy",value:function(){a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),delete this.wcNode,delete this.options}}]),t}();ce.DEFAULTS={list:".js-header-navigation__list",toggleClass:"js-header-navigation__list-link",subNavi:".js-header-sub-navigation",openClass:"is-header-sub-navigation-open"};var he=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,de=/[-_]+/g;function fe(e,t){return 0==+e||de.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var pe=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,i=void 0!==n&&n,o=t.cancelable,a=void 0!==o&&o,s=t.detail,r=void 0===s?void 0:s,l=document.createEvent("CustomEvent");l.initCustomEvent(e,i,a,r);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function ve(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=new pe(t,o({},i,{detail:n}));e.dispatchEvent(a)}var me={};function _e(e,t){var n=ee(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);me[e]||(me[e]={count:0});var i,o=me[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.leading,o=void 0!==i&&i,a=n.trailing,s=void 0===a||a,r=n.maxWait,l=void 0!==r&&r,u=void 0,h=void 0,d=void 0,f=void 0,p=!1,v=t!==l,m=!1!==l;function _(){for(var n=arguments.length,i=Array(n),a=0;a<n;a++)i[a]=arguments[a];return u=i,v&&(h&&clearTimeout(h),h=setTimeout(g,t)),m&&!d&&(d=setTimeout(y,l)),o&&!p&&(p=!0,f=e.apply(void 0,c(u))),f}return _.flush=function(){return(h||d)&&(f=e.apply(void 0,c(u))),k(),f},_.cancel=k,_;function g(){d&&clearTimeout(d),b()}function y(){h&&clearTimeout(h),b()}function b(){s&&(f=e.apply(void 0,c(u))),h=null,d=null,p=!1}function k(){h&&(clearTimeout(h),h=null),d&&(clearTimeout(d),d=null),u=void 0,p=!1}}((i=e,function(){ve(document,"pubsub/onsubscribe",i),ve(document,"pubsub/onsubscribe/"+i,i),me[i]&&delete me[i].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete me[e]}}function ge(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}ee(document,"pubsub/onsubscribe",function(e){var t=e.detail;me[t]||(me[t]={count:0});var n=me[t],i=n.queue;Array.isArray(i)&&(i.forEach(function(e){var t=l(e,3),n=t[0],i=t[1],o=t[2];ve(o,n,i)}),delete n.queue)}),Object.setPrototypeOf(ge.prototype,HTMLElement.prototype),Object.setPrototypeOf(ge,HTMLElement);var ye,be,ke,Ce={},we="throwed",xe=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments[1];n(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o._makeContextReady=o._makeContextReady.bind(o),o._initialise(e,i),o}return s(t,ge),i(t,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var t=this._template;if(t)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var i=t(function(e){if(!e.hasAttributes)return null;for(var t,n={},i=e.attributes,o=i.length,a=0;a<o;++a){var s=i[a],r=s.name;n[(t=r,t.replace(he,fe))]=p(s)}return n}(this),n);if(Array.isArray(i))i.forEach(function(t){e.appendChild(t)});else if(i){if("string"==typeof i){var o=new Error(we);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),o}this.appendChild(i)}this._hasRendered=!0}catch(o){o.message!==we&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+o+"\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;me[e]||(me[e]={count:0,queue:[]});var i=me[e].queue;Array.isArray(i)?i.push([e,t,n]):ve(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=_e("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}(),Ee=(function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}s(t,xe),i(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,xe),i(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:xe.uuidv4();if(e&&!Ce[e]){var n=document.createElement("style"),i=document.createTextNode(e);n.appendChild(i),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),Ce[e]=!0}}}]),t}()),Ne=function(e){function t(){n(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,d,W));return e.selectContext("axa-header"),e}return s(t,Ee),i(t,[{key:"connectedCallback",value:function(){a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this);var e=this.hasAttribute("hyphenate"),n=p(this,"simplemenu"),i=h(this.initialClassName,"m-header-navigation",{"m-header-navigation--hyphenate":e});this.className=i,this.stroke=new ue(this.parentNode.parentNode,{simpleMenu:n}),this.subNavigation=new ce(this,{simpleMenu:n})}},{key:"disconnectedCallback",value:function(){this.stroke.destroy(),delete this.stroke,this.subNavigation.destroy(),delete this.subNavigation}}]),t}();return ye=function(){window.customElements.define("axa-header-navigation",Ne)},be=0,ke=function(){if(0===be)try{ye.apply(void 0,arguments),be+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",ke,!1),document.addEventListener("WebComponentsReady",ke,!1),Ne}();
