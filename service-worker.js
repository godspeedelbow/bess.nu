"use strict";var precacheConfig=[["/index.html","35ed3e9a080fff96c588f3661c205d0a"],["/static/css/main.712e6426.css","9fe678fb074c485f89e002e02dce7812"],["/static/js/main.df16cb28.js","4afcc01b43a91eab3f38b35c1d0f5f41"],["/static/media/1000-ineke-in-mast-original-800px.2d30da4c.jpg","2d30da4cd41701d8664b817bff81dfd2"],["/static/media/1001-12-mei-Lex-bevestigt-nieuw-halfrondje-800px.da5cb1dc.jpg","da5cb1dcb11b53aaa5629a553bdcf06c"],["/static/media/1001-12-mei-bess-vertrek-hindeloopen-original.71824779.jpg","71824779ad1f77717f7b1113c74c51b2"],["/static/media/1001-12-mei-sluis-800px.860c2754.jpg","860c2754298f357e615eb71f3513fdc9"],["/static/media/1004-17-mei-hekrunderen-800px.5028462e.jpg","5028462ecb0158aae6229c8acfffdc3f"],["/static/media/1004-17-mei-luizen-800px.28ba57f7.jpg","28ba57f7af9699c2386c9b44000494fa"],["/static/media/1004-17-mei-paarden-800px.082f9c6d.jpg","082f9c6d6b12c59b85a170d2c2728bf7"],["/static/media/DSC04756-800px.55461525.jpg","5546152504cff157bfd07d7e8afbbc4e"],["/static/media/IJmuiden 26062011-13-800px.1861f498.jpg","1861f498bbfa6ffe86e003e6b8db795d"],["/static/media/IJmuiden 26062011-14-800px.c825789f.jpg","c825789fdc45d55719d8516a2eb6ceed"],["/static/media/IMG_1407-800px.78dd9573.jpg","78dd95730fb9419bd544d12fa192fb98"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});