(()=>{var r={757:(r,e,t)=>{r.exports=t(666)},666:r=>{var e=function(r){"use strict";var e,t=Object.prototype,n=t.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},a=s.iterator||"@@iterator",o=s.asyncIterator||"@@asyncIterator",i=s.toStringTag||"@@toStringTag";function g(r,e,t){return Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}),r[e]}try{g({},"")}catch(r){g=function(r,e,t){return r[e]=t}}function m(r,e,t,n){var s=e&&e.prototype instanceof h?e:h,a=Object.create(s.prototype),o=new C(n||[]);return a._invoke=function(r,e,t){var n=c;return function(s,a){if(n===u)throw new Error("Generator is already running");if(n===f){if("throw"===s)throw a;return O()}for(t.method=s,t.arg=a;;){var o=t.delegate;if(o){var i=L(o,t);if(i){if(i===x)continue;return i}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(n===c)throw n=f,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);n=u;var g=l(r,e,t);if("normal"===g.type){if(n=t.done?f:A,g.arg===x)continue;return{value:g.arg,done:t.done}}"throw"===g.type&&(n=f,t.method="throw",t.arg=g.arg)}}}(r,t,o),a}function l(r,e,t){try{return{type:"normal",arg:r.call(e,t)}}catch(r){return{type:"throw",arg:r}}}r.wrap=m;var c="suspendedStart",A="suspendedYield",u="executing",f="completed",x={};function h(){}function p(){}function d(){}var y={};y[a]=function(){return this};var v=Object.getPrototypeOf,b=v&&v(v(T([])));b&&b!==t&&n.call(b,a)&&(y=b);var w=d.prototype=h.prototype=Object.create(y);function k(r){["next","throw","return"].forEach((function(e){g(r,e,(function(r){return this._invoke(e,r)}))}))}function E(r,e){function t(s,a,o,i){var g=l(r[s],r,a);if("throw"!==g.type){var m=g.arg,c=m.value;return c&&"object"==typeof c&&n.call(c,"__await")?e.resolve(c.__await).then((function(r){t("next",r,o,i)}),(function(r){t("throw",r,o,i)})):e.resolve(c).then((function(r){m.value=r,o(m)}),(function(r){return t("throw",r,o,i)}))}i(g.arg)}var s;this._invoke=function(r,n){function a(){return new e((function(e,s){t(r,n,e,s)}))}return s=s?s.then(a,a):a()}}function L(r,t){var n=r.iterator[t.method];if(n===e){if(t.delegate=null,"throw"===t.method){if(r.iterator.return&&(t.method="return",t.arg=e,L(r,t),"throw"===t.method))return x;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return x}var s=l(n,r.iterator,t.arg);if("throw"===s.type)return t.method="throw",t.arg=s.arg,t.delegate=null,x;var a=s.arg;return a?a.done?(t[r.resultName]=a.value,t.next=r.nextLoc,"return"!==t.method&&(t.method="next",t.arg=e),t.delegate=null,x):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,x)}function P(r){var e={tryLoc:r[0]};1 in r&&(e.catchLoc=r[1]),2 in r&&(e.finallyLoc=r[2],e.afterLoc=r[3]),this.tryEntries.push(e)}function j(r){var e=r.completion||{};e.type="normal",delete e.arg,r.completion=e}function C(r){this.tryEntries=[{tryLoc:"root"}],r.forEach(P,this),this.reset(!0)}function T(r){if(r){var t=r[a];if(t)return t.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var s=-1,o=function t(){for(;++s<r.length;)if(n.call(r,s))return t.value=r[s],t.done=!1,t;return t.value=e,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:e,done:!0}}return p.prototype=w.constructor=d,d.constructor=p,p.displayName=g(d,i,"GeneratorFunction"),r.isGeneratorFunction=function(r){var e="function"==typeof r&&r.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,d):(r.__proto__=d,g(r,i,"GeneratorFunction")),r.prototype=Object.create(w),r},r.awrap=function(r){return{__await:r}},k(E.prototype),E.prototype[o]=function(){return this},r.AsyncIterator=E,r.async=function(e,t,n,s,a){void 0===a&&(a=Promise);var o=new E(m(e,t,n,s),a);return r.isGeneratorFunction(t)?o:o.next().then((function(r){return r.done?r.value:o.next()}))},k(w),g(w,i,"Generator"),w[a]=function(){return this},w.toString=function(){return"[object Generator]"},r.keys=function(r){var e=[];for(var t in r)e.push(t);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=T,C.prototype={constructor:C,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!r)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=e)},stop:function(){this.done=!0;var r=this.tryEntries[0].completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var t=this;function s(n,s){return i.type="throw",i.arg=r,t.next=n,s&&(t.method="next",t.arg=e),!!s}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return s("end");if(o.tryLoc<=this.prev){var g=n.call(o,"catchLoc"),m=n.call(o,"finallyLoc");if(g&&m){if(this.prev<o.catchLoc)return s(o.catchLoc,!0);if(this.prev<o.finallyLoc)return s(o.finallyLoc)}else if(g){if(this.prev<o.catchLoc)return s(o.catchLoc,!0)}else{if(!m)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return s(o.finallyLoc)}}}},abrupt:function(r,e){for(var t=this.tryEntries.length-1;t>=0;--t){var s=this.tryEntries[t];if(s.tryLoc<=this.prev&&n.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var a=s;break}}a&&("break"===r||"continue"===r)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=r,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,x):this.complete(o)},complete:function(r,e){if("throw"===r.type)throw r.arg;return"break"===r.type||"continue"===r.type?this.next=r.arg:"return"===r.type?(this.rval=this.arg=r.arg,this.method="return",this.next="end"):"normal"===r.type&&e&&(this.next=e),x},finish:function(r){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.finallyLoc===r)return this.complete(t.completion,t.afterLoc),j(t),x}},catch:function(r){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.tryLoc===r){var n=t.completion;if("throw"===n.type){var s=n.arg;j(t)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(r,t,n){return this.delegate={iterator:T(r),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=e),x}},r}(r.exports);try{regeneratorRuntime=e}catch(r){Function("r","regeneratorRuntime = r")(e)}},416:(r,e,t)=>{"use strict";"undefined"==typeof window?e.browser={}:e.browser=t(150)},150:function(r,e){var t,n;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,void 0===(n="function"==typeof(t=function(r){"use strict";if("undefined"==typeof browser||Object.getPrototypeOf(browser)!==Object.prototype){const e="The message port closed before a response was received.",t="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",n=r=>{const n={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(n).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class s extends WeakMap{constructor(r,e){super(e),this.createItem=r}get(r){return this.has(r)||this.set(r,this.createItem(r)),super.get(r)}}const a=(e,t)=>(...n)=>{r.runtime.lastError?e.reject(r.runtime.lastError):t.singleCallbackArg||n.length<=1&&!1!==t.singleCallbackArg?e.resolve(n[0]):e.resolve(n)},o=r=>1==r?"argument":"arguments",i=(r,e,t)=>new Proxy(e,{apply:(e,n,s)=>t.call(n,r,...s)});let g=Function.call.bind(Object.prototype.hasOwnProperty);const m=(r,e={},t={})=>{let n=Object.create(null),s={has:(e,t)=>t in r||t in n,get(s,l,c){if(l in n)return n[l];if(!(l in r))return;let A=r[l];if("function"==typeof A)if("function"==typeof e[l])A=i(r,r[l],e[l]);else if(g(t,l)){let e=((r,e)=>function(t,...n){if(n.length<e.minArgs)throw new Error(`Expected at least ${e.minArgs} ${o(e.minArgs)} for ${r}(), got ${n.length}`);if(n.length>e.maxArgs)throw new Error(`Expected at most ${e.maxArgs} ${o(e.maxArgs)} for ${r}(), got ${n.length}`);return new Promise(((s,o)=>{if(e.fallbackToNoCallback)try{t[r](...n,a({resolve:s,reject:o},e))}catch(a){console.warn(`${r} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,a),t[r](...n),e.fallbackToNoCallback=!1,e.noCallback=!0,s()}else e.noCallback?(t[r](...n),s()):t[r](...n,a({resolve:s,reject:o},e))}))})(l,t[l]);A=i(r,r[l],e)}else A=A.bind(r);else if("object"==typeof A&&null!==A&&(g(e,l)||g(t,l)))A=m(A,e[l],t[l]);else{if(!g(t,"*"))return Object.defineProperty(n,l,{configurable:!0,enumerable:!0,get:()=>r[l],set(e){r[l]=e}}),A;A=m(A,e[l],t["*"])}return n[l]=A,A},set:(e,t,s,a)=>(t in n?n[t]=s:r[t]=s,!0),defineProperty:(r,e,t)=>Reflect.defineProperty(n,e,t),deleteProperty:(r,e)=>Reflect.deleteProperty(n,e)},l=Object.create(r);return new Proxy(l,s)},l=r=>({addListener(e,t,...n){e.addListener(r.get(t),...n)},hasListener:(e,t)=>e.hasListener(r.get(t)),removeListener(e,t){e.removeListener(r.get(t))}});let c=!1;const A=new s((r=>"function"!=typeof r?r:function(e,n,s){let a,o,i=!1,g=new Promise((r=>{a=function(e){c||(console.warn(t,(new Error).stack),c=!0),i=!0,r(e)}}));try{o=r(e,n,a)}catch(r){o=Promise.reject(r)}const m=!0!==o&&((l=o)&&"object"==typeof l&&"function"==typeof l.then);var l;if(!0!==o&&!m&&!i)return!1;return(m?o:g).then((r=>{s(r)}),(r=>{let e;e=r&&(r instanceof Error||"string"==typeof r.message)?r.message:"An unexpected error occurred",s({__mozWebExtensionPolyfillReject__:!0,message:e})})).catch((r=>{console.error("Failed to send onMessage rejected reply",r)})),!0})),u=({reject:t,resolve:n},s)=>{r.runtime.lastError?r.runtime.lastError.message===e?n():t(r.runtime.lastError):s&&s.__mozWebExtensionPolyfillReject__?t(new Error(s.message)):n(s)},f=(r,e,t,...n)=>{if(n.length<e.minArgs)throw new Error(`Expected at least ${e.minArgs} ${o(e.minArgs)} for ${r}(), got ${n.length}`);if(n.length>e.maxArgs)throw new Error(`Expected at most ${e.maxArgs} ${o(e.maxArgs)} for ${r}(), got ${n.length}`);return new Promise(((r,e)=>{const s=u.bind(null,{resolve:r,reject:e});n.push(s),t.sendMessage(...n)}))},x={runtime:{onMessage:l(A),onMessageExternal:l(A),sendMessage:f.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:f.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},h={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return n.privacy={network:{"*":h},services:{"*":h},websites:{"*":h}},m(r,x,n)};if("object"!=typeof chrome||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");r.exports=n(chrome)}else r.exports=browser})?t.apply(e,[r]):t)||(r.exports=n)}},e={};function t(n){if(e[n])return e[n].exports;var s=e[n]={exports:{}};return r[n].call(s.exports,s,s.exports,t),s.exports}t.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return t.d(e,{a:e}),e},t.d=(r,e)=>{for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),(()=>{"use strict";t(757),t(416)})()})();
//# sourceMappingURL=Messenger.js.map