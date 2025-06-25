
const CACHE_NAME='wm-discador-v1';
const ASSETS=['/','/index.html','/manifest.json','/icons/icon-192.png','/icons/icon-512.png','/logo.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||!e.request.url.startsWith(self.location.origin))return;
  e.respondWith(fetch(e.request).then(res=>{const clone=res.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,clone));return res;}).catch(()=>caches.match(e.request)));
});
