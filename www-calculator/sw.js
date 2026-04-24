const CACHE_NAME = 'calculator-v1';
const assets = [
  './',
  './index.html',
  './index.css',
  './script.js',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
