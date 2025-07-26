const CACHE_NAME = 'ig-sms-cache-v1';
const ASSETS = [
  '/sms-dashboard/',           // your root HTML
  '/sms-dashboard/send-dashboard.html',
  '/sms-dashboard/manifest.json',
  '/sms-dashboard/icon-192.png',
  '/sms-dashboard/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
