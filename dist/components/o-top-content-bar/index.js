!function(){"use strict";function t(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var e=".o-top-content-bar {\n  display: block;\n  color: #fff;\n  padding-top: 12px !important;\n  padding-bottom: 12px !important;\n  padding-top: 5px !important;\n  padding-bottom: 5px !important; }\n\n.o-top-content-bar,\n.o-top-content-bar--corporate {\n  background: #027180; }\n\n.o-top-content-bar--commercial {\n  background: #00005b; }\n\n.o-top-content-bar--warning {\n  background: #c91432; }\n\n.o-top-content-bar__box {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center; }\n  @media (min-width: 576px) {\n    .o-top-content-bar__box {\n      width: 720px; } }\n  @media (min-width: 768px) {\n    .o-top-content-bar__box {\n      width: 960px; } }\n  @media (min-width: 992px) {\n    .o-top-content-bar__box {\n      width: 1140px; } }\n\n.o-top-content-bar__text {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  margin-right: 24px; }\n  @media (min-width: 576px) {\n    .o-top-content-bar__text {\n      font-size: 13px;\n      font-weight: 400;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .o-top-content-bar__text {\n      font-size: 13px;\n      font-weight: 400;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .o-top-content-bar__text {\n      font-size: 13px;\n      font-weight: 400;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n\n.o-top-content-bar__button {\n  margin-top: 10px;\n  margin-top: 0; }\n",n=(function(){function t(t){this.value=t}function e(e){function n(r,i){try{var a=e[r](i),c=a.value;c instanceof t?Promise.resolve(c.value).then(function(t){n("next",t)},function(t){n("throw",t)}):o(a.done?"return":"normal",a.value)}catch(t){o("throw",t)}}function o(t,e){switch(t){case"return":r.resolve({value:e,done:!0});break;case"throw":r.reject(e);break;default:r.resolve({value:e,done:!1})}(r=r.next)?n(r.key,r.arg):i=null}var r,i;this._invoke=function(t,e){return new Promise(function(o,a){var c={key:t,arg:e,resolve:o,reject:a,next:null};i?i=i.next=c:(r=i=c,n(t,e))})},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)}}(),function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}),o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e};Object.setPrototypeOf(t.prototype,HTMLElement.prototype),Object.setPrototypeOf(t,HTMLElement);var a=document._currentScript||document.currentScript,c={},p=function(e){function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";n(this,c);var e=i(this,(c.__proto__||Object.getPrototypeOf(c)).call(this));e._styles=t;var o=void 0;return(o=window.HTMLImports?HTMLImports.importForElement(a):a.ownerDocument)&&(e.template=o.querySelector("template"),(!e.template||window.HTMLImports&&o!==HTMLImports.importForElement(e.template))&&(e.template=null),e.template&&(e.clone=document.importNode(e.template.content,!0))),e}return r(c,t),o(c,[{key:"connectedCallback",value:function(){this._appendStyles(),this.template&&this.clone&&this.appendChild(this.clone),this._render()}},{key:"_appendStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}},{key:"_render",value:function(){return null}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),c}(),l=(function(t){function e(){return n(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}r(e,p),o(e,[{key:"connectedCallback",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",e=this.attachShadow({mode:t});this._appendStyles(e),this.template&&this.clone&&e.appendChild(this.clone),this._render()}}])}(),function(t){function e(){return n(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return r(e,p),o(e,[{key:"_appendStyles",value:function(){e.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p.uuidv4();if(t&&!c[t]){var n=document.createElement("style"),o=document.createTextNode(t);n.appendChild(o),n.setAttribute("data-c-name",e.toLowerCase()),document.querySelector("head").appendChild(n),c[t]=!0}}}]),e}()),u=function(t){function a(){return n(this,a),i(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e))}return r(a,l),o(a,[{key:"connectedCallback",value:function(){(function t(e,n,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,o)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(o)})(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this);var t=this.getAttribute("type"),e=document.createElement("div");for(e.className="o-top-content-bar__box";this.childNodes.length;)e.appendChild(this.firstChild);this.className="o-top-content-bar o-top-content-bar--"+t,this.appendChild(e)}}]),a}();window.customElements.define("axa-top-content-bar",u)}();
