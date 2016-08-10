/**
 * © 2015 Cedexis Inc.
 * Radar JavaScript client
 * Application Version: 0.1.355
 * Build Timestamp: 1470266921
 */
(function(window,document){'use strict';var p={"true":!0};window.cedexis=window.cedexis||{};window.cedexis.radar=window.cedexis.radar||{};window.cedexis.rtBufferFullCallbacks=window.cedexis.rtBufferFullCallbacks||[];window.radar=window.radar||{};window.cdx=window.cdx||{};
function q(a){this.window=a.window;this.document=a.document;this.zoneId=a.U;this.customerId=a.C;this.createdAt=(new Date).getTime();this.domains={code:a.N,init:a.I,report:a.P};this.runCalledAt=0;this.cancelled=!1;this.sendPLT=a.S in p;this.startDelay=a.T;this.masterSampleRate=a.K;this.pltSampleRate=a.M;this.remoteProbingSampleRate=a.O;this.L=a.R;this.sendParentMessages=!1;t(this,"startDelay","radar-start-delay");t(this,"masterSampleRate","radar-master-sample-rate");t(this,"pltSampleRate","radar-plt-sample-rate");
t(this,"remoteProbingSampleRate","radar-remote-probing-sample-rate");t(this,"sendParentMessages","radar-send-parent-messages");this.includePartnerTags=a.H in p;this.buildTimestamp=a.B;this.h=[];this.api=this.J=function(a){var c={};return{requestor:a,zoneId:a.zoneId,customerId:a.customerId,call:function(a,b){c[a]&&this[a].call(this,b)},extend:function(a,b){a in this||(this[a]=b,c[a]=!0)}}}(this);this.c=function(a){return/radar-no-ajax/i.test(a.location.search)?!1:a.XMLHttpRequest&&"undefined"!==typeof(new a.XMLHttpRequest).withCredentials?
!0:!1}(a.window);this.plugins=[];this.u=null}q.prototype.browserHasCorsSupport=function(){return this.c};function u(){var a=w;return function(){a.cancelled=!0}}window.cedexis.radar.api=function(a,b){var c=((window.cedexis||{}).requestors||{})[a+";"+b];if(c)return c.api};
function t(a,b,c){if(1<a.window.location.search.length)for(var d=a.window.location.search.slice(1).split("&"),k=d.length;k--;){var l=d[k].split("=");if(2===l.length&&c===l[0])if(l=parseInt(l[1],10),isNaN(l))a.log("Warning: "+c+" should be set to a number");else{switch(b){case "masterSampleRate":case "remoteProbingSampleRate":case "pltSampleRate":l/=100;break;case "startDelay":l*=1E3;break;case "sendParentMessages":l=0<l?!0:!1}a[b]=l;a.log(b+" set to "+l)}}}
q.prototype.log=function(a){(this.window.console||{log:function(){}}).log(a)};
q.prototype.w=function(){return{a:this.c?"1":"0",b:function(a){a=a.createElement("script");return a.addEventListener?"2":a.readyState?"1":"0"}(this.document),l:"function"!==typeof Object.keys?"1":"0",n:function(a,b){if(/msie/i.test(a.navigator.userAgent))if(void 0!==b.documentMode){if(9>b.documentMode)return"0"}else if("BackCompat"===b.compatMode)return"0";return void 0===a.performance?"0":"1"}(this.window,this.document),p:function(a){return"function"===typeof a.postMessage&&"function"===typeof a.addEventListener?
"1":"0"}(this.window),t:/(iphone|ipad|android|iemobile|opera mini|ucbrowser|blackberry)/i.test(this.window.navigator.userAgent)?"0":"1",r:function(a){var b;if(b=a.performance&&"function"===typeof a.performance.getEntriesByType)a=/msie (\d+)/i.exec(a.navigator.userAgent),b=!(a&&10>=parseInt(a[1],10));return b?"1":"0"}(this.window),imagesok:"1"}};q.prototype.deviceCaps=q.prototype.w;
function x(){var a=z.window.navigator.userAgent;if("Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36"===a)return!0;for(var b=[/opera mini/i,/skyfire/i,/teashark/i,/uzard/i,/puffin/i,/yabrowser/i,/msie 6/i],c=b.length;c--;)if(b[c].test(a))return!0;return!1}
function A(){var a={Y:/keynote/i,Z:/ KTXN /,W:/gomez/i,V:/catchpoint/i,$:/pingdom/i,X:/ip-label/,aa:/witbe-/i},b,c,d;b=window.cedexis.radar.allowed_monitoring_agents||[];c=function(a){var c,d;for(c=0;c<b.length;c+=1)if(d=b[c].toLowerCase(),d===a)return!0;return!1};for(d in a)if(a.hasOwnProperty(d)&&a[d].test(window.navigator.userAgent)&&!c(d))return!0;return!1}
q.prototype.m=function(a,b){for(var c=this.window.cedexis.main,d=this.window.navigator,k=a+":"+c.y64enc(B(b)),l=[this.domains.report,"n1"],n=22;n--;)l.push(0);if("function"===typeof d.sendBeacon&&this.requestSignature&&this.requestSignatureTimestamp&&12E4>(new Date).getTime()-this.requestSignatureTimestamp)l.push(this.requestSignature),l.push(k),l.push(0),d.sendBeacon("//"+l.join("/"));else if(c&&"doInitWithCallback"in c&&this.c){var r=this;c.doInitWithCallback(this,function(){return function(){if(this.responseText){var a=
/<requestSignature>([^<]+)/.exec(this.responseText);a&&a[1]&&(l.push(a[1]),l.push(k),l.push(0),r.window.cedexis.main.send_report("//"+l.join("/")))}}}())}};q.prototype.plt_ex=q.prototype.m;q.prototype.impact=function(a){this.window.cedexis&&this.window.cedexis.main?this.m("impact_kpi",a):this.h.push(a)};q.prototype.afterRun=function(){for(var a=10;a--&&0<this.h.length;)this.m("impact_kpi",this.h.shift())};
q.prototype.v=function(a){if(this.window.XMLHttpRequest){var b=new this.window.XMLHttpRequest;if("undefined"!==typeof b.withCredentials){var c=a.method.toUpperCase();try{b.open(c,a.url,!0);var d=a.headers||{},k;for(k in d)d.hasOwnProperty(k)&&b.setRequestHeader(k,d[k]);"POST"===c?b.send(a.data):b.send()}catch(l){}}}};q.prototype.ajax=q.prototype.v;
q.prototype.f1=function(a){this.requestSignature&&this.v({method:"get",url:["//rpt.cedexis.com/f1",this.requestSignature,a.providerOwnerZoneId,a.providerOwnerCustomerId,a.providerId,a.probeTypeId,a.resultCode,a.measurement].join("/")})};q.prototype.addPlugin=function(a){for(var b=0;b<this.plugins.length;b++)if(a===this.plugins[b])return;this.plugins.push(a)};q.prototype.notify=function(a){for(var b=0;b<this.plugins.length;b++){var c=this.plugins[b];"function"===typeof c.notify&&c.notify(a)}};
q.prototype.setImpactObject=function(a){this.u=a};q.prototype.getImpactObject=function(){return this.u};
function B(a){function b(a,b){for(var k="",l=0;l<a.length;l++)k=b(k,a[l],l);return k}switch(typeof a){case "string":return'"'+(""+a).replace(/\"/g,'\\"')+'"';case "number":return isNaN(a)?"null":a;case "boolean":return a?"true":"false";case "undefined":return"null";default:return null===a?"null":""+a!==a&&"[object Array]"==Object.prototype.toString.call(a)?"["+b(a,function(a,b){return a+","+B(b)}).substring(1)+"]":"{"+b(function(a){var b=[],k;for(k in a)b.push(k);return b}(a),function(b,d){void 0!==
a[d]&&"function"!==typeof a[d]&&(b+=","+B(d)+":"+B(a[d]));return b}).substring(1)+"}"}}window.cedexis.jsonEncode=B;function C(a,b){for(var c=a.length;c--;)if(b===a[c])return!0;return!1}window.cedexis.arrayContains=C;/*
 Copyright (c) 2010 Nick Galbreath
 http://code.google.com/p/stringencoders/source/browse/#svn/trunk/javascript

 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following
 conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.
*/
var D={j:"-",ALPHA:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._",o:function(){try{return new DOMException}catch(b){var a=Error("DOM Exception 5");a.code=a.c=5;a.name=a.description="INVALID_CHARACTER_ERR";a.toString=function(){return"Error: "+a.name+": "+a.message};return a}},G:function(a,b){var c=D.ALPHA.indexOf(a.charAt(b));if(-1===c)throw D.o();return c},decode:function(a){a=""+a;var b=D.G,c,d,k,l=a.length;if(0===l)return a;if(0!==l%4)throw D.o();c=0;a.charAt(l-1)===D.j&&(c=
1,a.charAt(l-2)===D.j&&(c=2),l-=4);var n=[];for(d=0;d<l;d+=4)k=b(a,d)<<18|b(a,d+1)<<12|b(a,d+2)<<6|b(a,d+3),n.push(String.fromCharCode(k>>16,k>>8&255,k&255));switch(c){case 1:k=b(a,d)<<18|b(a,d+1)<<12|b(a,d+2)<<6;n.push(String.fromCharCode(k>>16,k>>8&255));break;case 2:k=b(a,d)<<18|b(a,d+1)<<12,n.push(String.fromCharCode(k>>16))}return n.join("")},F:function(a,b){var c=a.charCodeAt(b);if(255<c)throw D.o();return c},encode:function(a){if(1!==arguments.length)throw new SyntaxError("Not enough arguments");
var b=D.j,c=D.ALPHA,d=D.F,k,l,n=[];a=""+a;var r=a.length-a.length%3;if(0===a.length)return a;for(k=0;k<r;k+=3)l=d(a,k)<<16|d(a,k+1)<<8|d(a,k+2),n.push(c.charAt(l>>18)),n.push(c.charAt(l>>12&63)),n.push(c.charAt(l>>6&63)),n.push(c.charAt(l&63));switch(a.length-r){case 1:l=d(a,k)<<16;n.push(c.charAt(l>>18)+c.charAt(l>>12&63)+b+b);break;case 2:l=d(a,k)<<16|d(a,k+1)<<8,n.push(c.charAt(l>>18)+c.charAt(l>>12&63)+c.charAt(l>>6&63)+b)}return n.join("")}};D.encode=D.encode;window.cedexis=window.cedexis||{};
window.cedexis.base64=D;/*
 JavaScript MD5
 https://github.com/blueimp/JavaScript-MD5

 Copyright 2011, Sebastian Tschan
 https://blueimp.net

 Licensed under the MIT license:
 http://www.opensource.org/licenses/MIT

 Based on
 A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 Digest Algorithm, as defined in RFC 1321.
 Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 Distributed under the BSD License
 See http://pajhome.org.uk/crypt/md5 for more info.
*/
window.cedexis=window.cedexis||{};
(function(a){function b(a,b){var c=(a&65535)+(b&65535);return(a>>16)+(b>>16)+(c>>16)<<16|c&65535}function c(a,c,m,d,k,l){a=b(b(c,a),b(d,l));return b(a<<k|a>>>32-k,m)}function d(a,b,m,d,k,l,n){return c(b&m|~b&d,a,b,k,l,n)}function k(a,b,m,d,k,l,n){return c(b&d|m&~d,a,b,k,l,n)}function l(a,b,d,k,l,n,r){return c(d^(b|~k),a,b,l,n,r)}function n(a,y){a[y>>5]|=128<<y%32;a[(y+64>>>9<<4)+14]=y;var m,n,r,H,v,e=1732584193,f=-271733879,g=-1732584194,h=271733878;for(m=0;m<a.length;m+=16)n=e,r=f,H=g,v=h,e=d(e,
f,g,h,a[m],7,-680876936),h=d(h,e,f,g,a[m+1],12,-389564586),g=d(g,h,e,f,a[m+2],17,606105819),f=d(f,g,h,e,a[m+3],22,-1044525330),e=d(e,f,g,h,a[m+4],7,-176418897),h=d(h,e,f,g,a[m+5],12,1200080426),g=d(g,h,e,f,a[m+6],17,-1473231341),f=d(f,g,h,e,a[m+7],22,-45705983),e=d(e,f,g,h,a[m+8],7,1770035416),h=d(h,e,f,g,a[m+9],12,-1958414417),g=d(g,h,e,f,a[m+10],17,-42063),f=d(f,g,h,e,a[m+11],22,-1990404162),e=d(e,f,g,h,a[m+12],7,1804603682),h=d(h,e,f,g,a[m+13],12,-40341101),g=d(g,h,e,f,a[m+14],17,-1502002290),
f=d(f,g,h,e,a[m+15],22,1236535329),e=k(e,f,g,h,a[m+1],5,-165796510),h=k(h,e,f,g,a[m+6],9,-1069501632),g=k(g,h,e,f,a[m+11],14,643717713),f=k(f,g,h,e,a[m],20,-373897302),e=k(e,f,g,h,a[m+5],5,-701558691),h=k(h,e,f,g,a[m+10],9,38016083),g=k(g,h,e,f,a[m+15],14,-660478335),f=k(f,g,h,e,a[m+4],20,-405537848),e=k(e,f,g,h,a[m+9],5,568446438),h=k(h,e,f,g,a[m+14],9,-1019803690),g=k(g,h,e,f,a[m+3],14,-187363961),f=k(f,g,h,e,a[m+8],20,1163531501),e=k(e,f,g,h,a[m+13],5,-1444681467),h=k(h,e,f,g,a[m+2],9,-51403784),
g=k(g,h,e,f,a[m+7],14,1735328473),f=k(f,g,h,e,a[m+12],20,-1926607734),e=c(f^g^h,e,f,a[m+5],4,-378558),h=c(e^f^g,h,e,a[m+8],11,-2022574463),g=c(h^e^f,g,h,a[m+11],16,1839030562),f=c(g^h^e,f,g,a[m+14],23,-35309556),e=c(f^g^h,e,f,a[m+1],4,-1530992060),h=c(e^f^g,h,e,a[m+4],11,1272893353),g=c(h^e^f,g,h,a[m+7],16,-155497632),f=c(g^h^e,f,g,a[m+10],23,-1094730640),e=c(f^g^h,e,f,a[m+13],4,681279174),h=c(e^f^g,h,e,a[m],11,-358537222),g=c(h^e^f,g,h,a[m+3],16,-722521979),f=c(g^h^e,f,g,a[m+6],23,76029189),e=c(f^
g^h,e,f,a[m+9],4,-640364487),h=c(e^f^g,h,e,a[m+12],11,-421815835),g=c(h^e^f,g,h,a[m+15],16,530742520),f=c(g^h^e,f,g,a[m+2],23,-995338651),e=l(e,f,g,h,a[m],6,-198630844),h=l(h,e,f,g,a[m+7],10,1126891415),g=l(g,h,e,f,a[m+14],15,-1416354905),f=l(f,g,h,e,a[m+5],21,-57434055),e=l(e,f,g,h,a[m+12],6,1700485571),h=l(h,e,f,g,a[m+3],10,-1894986606),g=l(g,h,e,f,a[m+10],15,-1051523),f=l(f,g,h,e,a[m+1],21,-2054922799),e=l(e,f,g,h,a[m+8],6,1873313359),h=l(h,e,f,g,a[m+15],10,-30611744),g=l(g,h,e,f,a[m+6],15,-1560198380),
f=l(f,g,h,e,a[m+13],21,1309151649),e=l(e,f,g,h,a[m+4],6,-145523070),h=l(h,e,f,g,a[m+11],10,-1120210379),g=l(g,h,e,f,a[m+2],15,718787259),f=l(f,g,h,e,a[m+9],21,-343485551),e=b(e,n),f=b(f,r),g=b(g,H),h=b(h,v);return[e,f,g,h]}function r(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c}function v(a){var b,c=[];c[(a.length>>2)-1]=void 0;for(b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(a.charCodeAt(b/8)&255)<<b%32;return c}function I(a){return r(n(v(a),
8*a.length))}function J(a,b){var c,d=v(a),k=[],l=[];k[15]=l[15]=void 0;16<d.length&&(d=n(d,8*a.length));for(c=0;16>c;c+=1)k[c]=d[c]^909522486,l[c]=d[c]^1549556828;c=n(k.concat(v(b)),512+8*b.length);return r(n(l.concat(c),640))}function K(a){var b="",c,d;for(d=0;d<a.length;d+=1)c=a.charCodeAt(d),b+="0123456789abcdef".charAt(c>>>4&15)+"0123456789abcdef".charAt(c&15);return b}a.md5=function(a,b,c){return b?c?J(unescape(encodeURIComponent(b)),unescape(encodeURIComponent(a))):K(J(unescape(encodeURIComponent(b)),
unescape(encodeURIComponent(a)))):c?I(unescape(encodeURIComponent(a))):K(I(unescape(encodeURIComponent(a))))}})(window.cedexis);function E(a){this.f=[];if(a)for(this.f.push({D:a,state:0,i:[this]}),a=0;a<this.f.length;a++)setTimeout(F(this.f[a]),1)}var G={0:{name:"PENDING"},1:{name:"FULFILLED"},2:{name:"REJECTED"}};function L(a){var b;if(1===a.f.length)b=a.f[0].value;else if(1<a.f.length){b=[];for(var c=0;c<a.f.length;c++){var d=a.f[c];if(1!==d.state)return;b.push(d.value)}}(a=M(a,b))&&setTimeout(a,1)}function M(a,b){if(a.c){var c=a.c;return function(){c(b)}}return null}
function F(a){var b=N(a),c=O(a);return function(){try{a.D(b,c)}catch(d){c(d)}}}function N(a){return function(b){if(0!==a.state)throw Error("Attempted to resolve a promise in the "+G[a.state].name+" state");a.state=1;a.value=b;for(b=0;b<a.i.length;b++)L(a.i[b])}}
function O(a){function b(a,b){return function(){a(b)}}return function(c){if(0!==a.state)throw Error("Attempted to resolve a promise in the "+G[a.state].name+" state");a.state=2;a.error=c;for(var d=0;d<a.i.length;d++){var k=a.i[d];k.A&&setTimeout(b(k.A,c),1);k.s&&setTimeout(b(k.s,c),1)}}}E.prototype.then=function(a,b){this.c=a;this.A=b;return this};E.prototype["catch"]=function(a){this.s=a;return this};
E.all=function(a){for(var b=new E,c=b.f,d=0;d<a.length;d++)for(var k=a[d].f,l=0;l<k.length;l++){var n=k[l];n.i.push(b);c.push(n)}L(b);return b};window.cedexis=window.cedexis||{};window.cedexis.Promise=window.cedexis.Promise||E;function P(a){this.window=a;this.g={};this.c=-1}P.prototype.setBufferSize=function(a){if("number"===typeof a&&0<a&&this.c<a){this.c=a;var b=Q(this);if(b){var c=b.setResourceTimingBufferSize||b.webkitSetResourceTimingBufferSize;c&&c.call(b,a)}}};
P.prototype.setToClearOnBufferFull=function(a){var b=Q(this);b&&a&&!this.h&&(a=this.h=R(this),b.addEventListener&&"undefined"!==typeof b.onresourcetimingbufferfull?b.addEventListener("resourcetimingbufferfull",a,!1):b.addEventListener&&"undefined"!==typeof b.onwebkitresourcetimingbufferfull?b.addEventListener("webkitresourcetimingbufferfull",a,!1):b.onresourcetimingbufferfull=a)};
P.prototype.makeManagerProxy=function(a,b){return{g:this.g,add:function(c){var d=this.g[a]=this.g[a]||{};(d[b]=d[b]||[]).push(c)},contains:function(c){var d=this.g[a]=this.g[a]||{},d=d[b]=d[b]||[];return C(d,c)}}};function R(a){return function(){var b=this.clearResourceTimings||this.webkitClearResourceTimings;if(b){for(var c=(a.window.cedexis||{}).rtBufferFullCallbacks||[],d=0;d<c.length;d++)c[d].call();b.call(this)}}}function Q(a){return"performance"in a.window?a.window.performance:null}
window.cedexis=window.cedexis||{};window.cedexis.resourceTimingManager=window.cedexis.resourceTimingManager||new P(window);var z=new q({window:window,document:document,U:"1",C:"18573",N:"radar.cedexis.com",I:"cedexis-radar.net",P:"rpt.cedexis.com",S:"true",T:parseInt("5000",10),K:parseFloat("1"),M:parseFloat("1"),O:parseFloat("1"),R:"unspecified",H:"true",B:parseInt("1470266921",10)}),S=window.cedexis;
S.requestors=S.requestors||{};
if(Math.random()<z.masterSampleRate){S.requestors["1;18573"]=z;var T;if(T=!x()){var U;(U=!A())||(U=/radar-allow-monitors=1/.test(z.window.location.search));T=U}if(T){var w=z,V=parseInt(w.L,10);if(!isNaN(V)){var W;if(W=w.window.performance||null){var X=W.setResourceTimingBufferSize||W.webkitSetResourceTimingBufferSize;X&&X.call(W,V)}}if("function"===typeof w.window.addEventListener){var Y=u();w.window.addEventListener("beforeunload",Y);w.window.addEventListener("unload",
Y)}w.window.cedexis.resourceTimingManager&&w.window.cedexis.resourceTimingManager.setToClearOnBufferFull(!0);setTimeout(function(){var a=z;"function"===typeof a.window.cedexisInit&&a.window.cedexisInit(a.api);var b=/cedexisInit(\d+)/,c;for(c in a.window){var d=b.exec(c);if(d&&a.customerId==d[1]&&"function"===typeof a.window[d[0]])a.window[c](a.api)}a=z;if(!a.cancelled){(c=a.window.crypto||a.window.msCrypto)&&c.getRandomValues?(b=new Uint32Array(1),c.getRandomValues(b),b=b[0]):b=0;a.transactionId=
b||Math.floor(1E9*Math.random());var b=a.w(),d=c="",k;for(k in b)b.hasOwnProperty(k)&&(d+=c+k+"="+b[k],c="&");k="//radar.cedexis.com/"+a.buildTimestamp+"/radar/main.js?"+d;a:{if(0<a.window.location.search.length){b=a.window.location.search.slice(1).split("&");c=[];for(d=b.length;d--;)"providers=all"===b[d]&&c.push(b[d]);c=c.join("&");if(0<c.length){b="&"+c;break a}}b=""}k=k+b;b=a.document.getElementById("cdx");b||(b=a.document.createElement("div"),b.id="cdx",a.document.body.appendChild(b));
a=a.document.createElement("script");a.type="text/javascript";a.async=!0;a.src=k;b.appendChild(a)}},z.startDelay)}};}(window,document));