(self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[]).push([[135],{5478:()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}function r(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}function o(e){var t="function"==typeof Map?new Map:void 0;return o=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return i(e,arguments,a(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,e)},o(e)}function i(e,t,n){return i=u()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&c(o,n.prototype),o},i.apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(p,e);var o,i,f,s,l=(o=p,i=u(),function(){var e,t=a(o);if(i){var n=a(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return r(this,e)});function p(){return t(this,p),l.apply(this,arguments)}return f=p,(s=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n        <div id="form-resto" class="review-form card-form">\n        \n            <b>Add Your Review</b>\n            \n            <label for="customerName">Your Name</label>\n            <input id="customerName" type="text" required>\n            \n            <label for="reviews">Review</label>\n            <textarea id="reviews" required></textarea>\n            \n            <button id="submitReview">Add Review</button>\n  \n        </div>\n    '}}])&&n(f.prototype,s),Object.defineProperty(f,"prototype",{writable:!1}),p}(o(HTMLElement));customElements.define("review-form",f)},6110:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(9961);const o={RESTO:"".concat(r.Z.BASE_URL,"list"),RESTO_DETAIL:function(e){return"".concat(r.Z.BASE_URL,"detail/").concat(e)},REVIEW:"".concat(r.Z.BASE_URL,"review")}},9961:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={BASE_URL:"https://restaurant-api.dicoding.dev/",BASE_IMAGE_URL:"https://restaurant-api.dicoding.dev/images/",BASE_IMAGE_URL_MEDIUM:"https://restaurant-api.dicoding.dev/images/medium/",DEFAULT_LANGUAGE:"en-us",CACHE_NAME:(new Date).toISOString(),DATABASE_NAME:"restaurants-db",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurants-object-store"}},5253:(e,t,n)=>{"use strict";n(5666),n(9015),n(4559),n(7485),n(1558),n(6202),n(5568),n(6228),n(822),n(7017),n(5324),n(7044);var r=n(3899),o=n(3317),i=(n(7090),n(1770),new r.Z({button:document.querySelector("#hamburgerButton"),drawer:document.querySelector("#navigationDrawer"),content:document.querySelector("#Content")}));window.addEventListener("hashchange",(function(){i.renderPage()})),window.addEventListener("load",(function(){i.renderPage(),(0,o.Z)()}))}}]);
//# sourceMappingURL=app~49ea73a0.bundle.js.map