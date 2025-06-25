
const CACHE='wm-discador-v1';
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll([
    '/',
    '/index.html',
    '/manifest.json',
    '/logo.png',
    '/icons/icon-192.png',
    '/icons/icon-512.png'
  ])));
});
