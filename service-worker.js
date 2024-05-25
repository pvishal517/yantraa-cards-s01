self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('yantraa-cards').then(function(cache) {
      return cache.addAll([
        // Add URLs of assets to cache
        'https://yantraacards.blogspot.com/'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
