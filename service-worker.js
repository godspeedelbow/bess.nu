"use strict";var precacheConfig=[["/bess.nu/index.html","731e6db9f1a5a526ea702f58f14f69cc"],["/bess.nu/static/css/main.712e6426.css","9fe678fb074c485f89e002e02dce7812"],["/bess.nu/static/js/main.b5c6cff7.js","a287a8203c04353b3fbf1f83a266a48e"],["/bess.nu/static/media/1000-ineke-in-mast-original-800px.2d30da4c.jpg","2d30da4cd41701d8664b817bff81dfd2"],["/bess.nu/static/media/1001-12-mei-Lex-bevestigt-nieuw-halfrondje-800px.da5cb1dc.jpg","da5cb1dcb11b53aaa5629a553bdcf06c"],["/bess.nu/static/media/1001-12-mei-bess-vertrek-hindeloopen-original.71824779.jpg","71824779ad1f77717f7b1113c74c51b2"],["/bess.nu/static/media/1001-12-mei-sluis-800px.860c2754.jpg","860c2754298f357e615eb71f3513fdc9"],["/bess.nu/static/media/DSC04756-800px.55461525.jpg","5546152504cff157bfd07d7e8afbbc4e"],["/bess.nu/static/media/IJmuiden 26062011-13-800px.1861f498.jpg","1861f498bbfa6ffe86e003e6b8db795d"],["/bess.nu/static/media/IJmuiden 26062011-14-800px.c825789f.jpg","c825789fdc45d55719d8516a2eb6ceed"],["/bess.nu/static/media/IMG_1407-800px.78dd9573.jpg","78dd95730fb9419bd544d12fa192fb98"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n));var a="/bess.nu/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});