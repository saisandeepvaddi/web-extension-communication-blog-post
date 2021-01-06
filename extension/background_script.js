(()=>{var e={757:(e,r,t)=>{e.exports=t(666)},704:(e,r,t)=>{"use strict";t.d(r,{Z:()=>g});var n=t(757),s=t.n(n),a=t(416);function o(e,r,t,n,s,a,o){try{var i=e[a](o),g=i.value}catch(e){return void t(e)}i.done?r(g):Promise.resolve(g).then(n,s)}function i(e){return function(){var r=this,t=arguments;return new Promise((function(n,s){var a=e.apply(r,t);function i(e){o(a,n,s,i,g,"next",e)}function g(e){o(a,n,s,i,g,"throw",e)}i(void 0)}))}}const g={sendMessageToBackground:function(e){var r=arguments;return i(s().mark((function t(){var n,o;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:null,t.prev=1,t.next=4,a.browser.runtime.sendMessage({type:e,data:n});case 4:return o=t.sent,t.abrupt("return",o);case 8:return t.prev=8,t.t0=t.catch(1),console.error("sendMessageToBackground error: ",t.t0),t.abrupt("return",null);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()},sendMessageToContentScript:function(e,r){var t=arguments;return i(s().mark((function n(){var o,i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.length>2&&void 0!==t[2]?t[2]:null,n.prev=1,n.next=4,a.browser.tabs.sendMessage(e,{type:r,data:o});case 4:return i=n.sent,console.log("response:",i),n.abrupt("return",i);case 9:return n.prev=9,n.t0=n.catch(1),console.error("sendMessageToContentScript error: ",n.t0),n.abrupt("return",null);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))()}}},617:(e,r,t)=>{"use strict";t.d(r,{W:()=>n,H:()=>s});var n={SAY_HELLO_TO_CS:1,SAY_BYE_TO_CS:2},s={SAY_HELLO_TO_BG:1,SAY_BYE_TO_BG:2}},666:e=>{var r=function(e){"use strict";var r,t=Object.prototype,n=t.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},a=s.iterator||"@@iterator",o=s.asyncIterator||"@@asyncIterator",i=s.toStringTag||"@@toStringTag";function g(e,r,t){return Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[r]}try{g({},"")}catch(e){g=function(e,r,t){return e[r]=t}}function m(e,r,t,n){var s=r&&r.prototype instanceof p?r:p,a=Object.create(s.prototype),o=new C(n||[]);return a._invoke=function(e,r,t){var n=l;return function(s,a){if(n===A)throw new Error("Generator is already running");if(n===f){if("throw"===s)throw a;return P()}for(t.method=s,t.arg=a;;){var o=t.delegate;if(o){var i=T(o,t);if(i){if(i===h)continue;return i}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(n===l)throw n=f,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);n=A;var g=c(e,r,t);if("normal"===g.type){if(n=t.done?f:u,g.arg===h)continue;return{value:g.arg,done:t.done}}"throw"===g.type&&(n=f,t.method="throw",t.arg=g.arg)}}}(e,t,o),a}function c(e,r,t){try{return{type:"normal",arg:e.call(r,t)}}catch(e){return{type:"throw",arg:e}}}e.wrap=m;var l="suspendedStart",u="suspendedYield",A="executing",f="completed",h={};function p(){}function x(){}function d(){}var v={};v[a]=function(){return this};var y=Object.getPrototypeOf,b=y&&y(y(S([])));b&&b!==t&&n.call(b,a)&&(v=b);var w=d.prototype=p.prototype=Object.create(v);function k(e){["next","throw","return"].forEach((function(r){g(e,r,(function(e){return this._invoke(r,e)}))}))}function E(e,r){function t(s,a,o,i){var g=c(e[s],e,a);if("throw"!==g.type){var m=g.arg,l=m.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(e){t("next",e,o,i)}),(function(e){t("throw",e,o,i)})):r.resolve(l).then((function(e){m.value=e,o(m)}),(function(e){return t("throw",e,o,i)}))}i(g.arg)}var s;this._invoke=function(e,n){function a(){return new r((function(r,s){t(e,n,r,s)}))}return s=s?s.then(a,a):a()}}function T(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,T(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var s=c(n,e.iterator,t.arg);if("throw"===s.type)return t.method="throw",t.arg=s.arg,t.delegate=null,h;var a=s.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function L(e){var r={tryLoc:e[0]};1 in e&&(r.catchLoc=e[1]),2 in e&&(r.finallyLoc=e[2],r.afterLoc=e[3]),this.tryEntries.push(r)}function _(e){var r=e.completion||{};r.type="normal",delete r.arg,e.completion=r}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function S(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var s=-1,o=function t(){for(;++s<e.length;)if(n.call(e,s))return t.value=e[s],t.done=!1,t;return t.value=r,t.done=!0,t};return o.next=o}}return{next:P}}function P(){return{value:r,done:!0}}return x.prototype=w.constructor=d,d.constructor=x,x.displayName=g(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var r="function"==typeof e&&e.constructor;return!!r&&(r===x||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,g(e,i,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},k(E.prototype),E.prototype[o]=function(){return this},e.AsyncIterator=E,e.async=function(r,t,n,s,a){void 0===a&&(a=Promise);var o=new E(m(r,t,n,s),a);return e.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},k(w),g(w,i,"Generator"),w[a]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(e){var r=[];for(var t in e)r.push(t);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=S,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function s(n,s){return i.type="throw",i.arg=e,t.next=n,s&&(t.method="next",t.arg=r),!!s}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return s("end");if(o.tryLoc<=this.prev){var g=n.call(o,"catchLoc"),m=n.call(o,"finallyLoc");if(g&&m){if(this.prev<o.catchLoc)return s(o.catchLoc,!0);if(this.prev<o.finallyLoc)return s(o.finallyLoc)}else if(g){if(this.prev<o.catchLoc)return s(o.catchLoc,!0)}else{if(!m)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return s(o.finallyLoc)}}}},abrupt:function(e,r){for(var t=this.tryEntries.length-1;t>=0;--t){var s=this.tryEntries[t];if(s.tryLoc<=this.prev&&n.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var a=s;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=r,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(o)},complete:function(e,r){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&r&&(this.next=r),h},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),_(t),h}},catch:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===e){var n=t.completion;if("throw"===n.type){var s=n.arg;_(t)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),h}},e}(e.exports);try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}},416:(e,r,t)=>{"use strict";"undefined"==typeof window?r.browser={}:r.browser=t(150)},150:function(e,r){var t,n;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,void 0===(n="function"==typeof(t=function(e){"use strict";if("undefined"==typeof browser||Object.getPrototypeOf(browser)!==Object.prototype){const r="The message port closed before a response was received.",t="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",n=e=>{const n={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(n).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class s extends WeakMap{constructor(e,r){super(r),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const a=(r,t)=>(...n)=>{e.runtime.lastError?r.reject(e.runtime.lastError):t.singleCallbackArg||n.length<=1&&!1!==t.singleCallbackArg?r.resolve(n[0]):r.resolve(n)},o=e=>1==e?"argument":"arguments",i=(e,r,t)=>new Proxy(r,{apply:(r,n,s)=>t.call(n,e,...s)});let g=Function.call.bind(Object.prototype.hasOwnProperty);const m=(e,r={},t={})=>{let n=Object.create(null),s={has:(r,t)=>t in e||t in n,get(s,c,l){if(c in n)return n[c];if(!(c in e))return;let u=e[c];if("function"==typeof u)if("function"==typeof r[c])u=i(e,e[c],r[c]);else if(g(t,c)){let r=((e,r)=>function(t,...n){if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${o(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${o(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise(((s,o)=>{if(r.fallbackToNoCallback)try{t[e](...n,a({resolve:s,reject:o},r))}catch(a){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,a),t[e](...n),r.fallbackToNoCallback=!1,r.noCallback=!0,s()}else r.noCallback?(t[e](...n),s()):t[e](...n,a({resolve:s,reject:o},r))}))})(c,t[c]);u=i(e,e[c],r)}else u=u.bind(e);else if("object"==typeof u&&null!==u&&(g(r,c)||g(t,c)))u=m(u,r[c],t[c]);else{if(!g(t,"*"))return Object.defineProperty(n,c,{configurable:!0,enumerable:!0,get:()=>e[c],set(r){e[c]=r}}),u;u=m(u,r[c],t["*"])}return n[c]=u,u},set:(r,t,s,a)=>(t in n?n[t]=s:e[t]=s,!0),defineProperty:(e,r,t)=>Reflect.defineProperty(n,r,t),deleteProperty:(e,r)=>Reflect.deleteProperty(n,r)},c=Object.create(e);return new Proxy(c,s)},c=e=>({addListener(r,t,...n){r.addListener(e.get(t),...n)},hasListener:(r,t)=>r.hasListener(e.get(t)),removeListener(r,t){r.removeListener(e.get(t))}});let l=!1;const u=new s((e=>"function"!=typeof e?e:function(r,n,s){let a,o,i=!1,g=new Promise((e=>{a=function(r){l||(console.warn(t,(new Error).stack),l=!0),i=!0,e(r)}}));try{o=e(r,n,a)}catch(e){o=Promise.reject(e)}const m=!0!==o&&((c=o)&&"object"==typeof c&&"function"==typeof c.then);var c;if(!0!==o&&!m&&!i)return!1;return(m?o:g).then((e=>{s(e)}),(e=>{let r;r=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",s({__mozWebExtensionPolyfillReject__:!0,message:r})})).catch((e=>{console.error("Failed to send onMessage rejected reply",e)})),!0})),A=({reject:t,resolve:n},s)=>{e.runtime.lastError?e.runtime.lastError.message===r?n():t(e.runtime.lastError):s&&s.__mozWebExtensionPolyfillReject__?t(new Error(s.message)):n(s)},f=(e,r,t,...n)=>{if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${o(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${o(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise(((e,r)=>{const s=A.bind(null,{resolve:e,reject:r});n.push(s),t.sendMessage(...n)}))},h={runtime:{onMessage:c(u),onMessageExternal:c(u),sendMessage:f.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:f.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},p={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return n.privacy={network:{"*":p},services:{"*":p},websites:{"*":p}},m(e,h,n)};if("object"!=typeof chrome||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");e.exports=n(chrome)}else e.exports=browser})?t.apply(r,[e]):t)||(e.exports=n)}},r={};function t(n){if(r[n])return r[n].exports;var s=r[n]={exports:{}};return e[n].call(s.exports,s,s.exports,t),s.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{"use strict";var e=t(757),r=t.n(e),n=t(416),s=t(617),a=t(704);function o(e,r,t,n,s,a,o){try{var i=e[a](o),g=i.value}catch(e){return void t(e)}i.done?r(g):Promise.resolve(g).then(n,s)}function i(e){return function(){var r=this,t=arguments;return new Promise((function(n,s){var a=e.apply(r,t);function i(e){o(a,n,s,i,g,"next",e)}function g(e){o(a,n,s,i,g,"throw",e)}i(void 0)}))}}function g(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(new(function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.requests=new Map}var t,o,m,c,l,u;return t=e,(o=[{key:"receiveHello",value:(u=i(r().mark((function e(t,n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("receiveHelloFromContentScript: ",n),e.abrupt("return",{message:"Hey there!!!"});case 2:case"end":return e.stop()}}),e)}))),function(e,r){return u.apply(this,arguments)})},{key:"receiveBye",value:(l=i(r().mark((function e(t,n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("receiveByeFromContentScript: ",n),e.abrupt("return",{message:"Bye there!!!"});case 2:case"end":return e.stop()}}),e)}))),function(e,r){return l.apply(this,arguments)})},{key:"sayHelloToContentScript",value:(c=i(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.sendMessageToContentScript(t,s.W.SAY_HELLO_TO_CS,{message:"Hello from BG!!!"});case 2:case"end":return e.stop()}}),e)}))),function(e){return c.apply(this,arguments)})},{key:"sayByeToContentScript",value:(m=i(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.sendMessageToContentScript(t,s.W.SAY_BYE_TO_CS,{message:"Bye from BG!!!"});case 2:case"end":return e.stop()}}),e)}))),function(e){return m.apply(this,arguments)})},{key:"registerBackgroundMessengerRequests",value:function(){this.requests.set(s.H.SAY_HELLO_TO_BG,this.receiveHello),this.requests.set(s.H.SAY_BYE_TO_BG,this.receiveBye)}},{key:"listenForMessages",value:function(){var e=this;n.browser.runtime.onMessage.addListener((function(r,t){var n=r.type,s=r.data;return e.requests.get(n)(t,s)}))}},{key:"init",value:function(){var e=this;this.registerBackgroundMessengerRequests(),this.listenForMessages(),setInterval((function(){n.browser.tabs.query({active:!0,currentWindow:!0}).then((function(r){r.forEach((function(r){console.log("tab.id:",r.id),e.sayHelloToContentScript(r.id)}))}))}),5e3)}}])&&g(t.prototype,o),e}())).init()})()})();