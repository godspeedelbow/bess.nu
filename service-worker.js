"use strict";var precacheConfig=[["/index.html","4b73885ebe431d2f0120229af216acad"],["/static/css/main.712e6426.css","9fe678fb074c485f89e002e02dce7812"],["/static/js/main.ce4df03a.js","caa685545aeeb27d194f6da027c57d05"],["/static/media/1000-ineke-in-mast-original-800px.2d30da4c.jpg","2d30da4cd41701d8664b817bff81dfd2"],["/static/media/1001-12-mei-Lex-bevestigt-nieuw-halfrondje-800px.da5cb1dc.jpg","da5cb1dcb11b53aaa5629a553bdcf06c"],["/static/media/1001-12-mei-bess-vertrek-hindeloopen-original.71824779.jpg","71824779ad1f77717f7b1113c74c51b2"],["/static/media/1001-12-mei-sluis-800px.860c2754.jpg","860c2754298f357e615eb71f3513fdc9"],["/static/media/1004-17-mei-hekrunderen-800px.5028462e.jpg","5028462ecb0158aae6229c8acfffdc3f"],["/static/media/1004-17-mei-luizen-800px.28ba57f7.jpg","28ba57f7af9699c2386c9b44000494fa"],["/static/media/1004-17-mei-paarden-800px.082f9c6d.jpg","082f9c6d6b12c59b85a170d2c2728bf7"],["/static/media/1005-22-mei-eastbourne-tussen-de-modderbanken-800px.ba5e8e2c.jpg","ba5e8e2cc4de12eaa3a09f67964f9b59"],["/static/media/1005-22-mei-in-de-sluis-van-eastbourne-800px.fff47a9c.jpg","fff47a9c2f067bd2cf181d5c8884a90e"],["/static/media/1006-23-mei-pier-eastbourne-800px.5023ddf5.jpg","5023ddf5b1236910e64dad82b26e5e82"],["/static/media/1006-23-mei-reparatie-horloge-800px.dccab758.jpg","dccab7580efce12f32b6540b4923a568"],["/static/media/1007-30-mei-bess-langs-de-rivier-800px.f8babf30.jpg","f8babf302136afa2ebbf5b6ec2fb8005"],["/static/media/1007-30-mei-drukte-van-belang-kade-weymouth-800px.93670951.jpg","93670951a2e2c2900924771c2dc43e00"],["/static/media/1007-30-mei-roeipontje-800px.7242850d.jpg","7242850db9132cb32e469ef3507fa0b7"],["/static/media/1007-30-mei-spinnaker-toren-portsmouth-800px.8b00feb9.jpg","8b00feb9c13e33fb4850b294ddeaba52"],["/static/media/1007-30-mei-strand-van-vroeger-weymouth-800px.7a23864a.jpg","7a23864a71dfcd9cab2ac1ef91fc92a8"],["/static/media/1008-1-juni-de-mist-daalt-langzaam-de-baai-in-800px.d6d1e940.jpg","d6d1e940ec46343e26d6ab1f59b46986"],["/static/media/1008-1-juni-ondanks-het-slechte-weer-besluiten-we-toch-uit-te-varen-800px.6502fa10.jpg","6502fa1088f890b16a880a0b6c847bcb"],["/static/media/DSC04756-800px.55461525.jpg","5546152504cff157bfd07d7e8afbbc4e"],["/static/media/IJmuiden 26062011-13-800px.1861f498.jpg","1861f498bbfa6ffe86e003e6b8db795d"],["/static/media/IJmuiden 26062011-14-800px.c825789f.jpg","c825789fdc45d55719d8516a2eb6ceed"],["/static/media/IMG_1407-800px.78dd9573.jpg","78dd95730fb9419bd544d12fa192fb98"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});