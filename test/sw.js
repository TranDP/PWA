self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      // 'index.html',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});

// javascript:var inputs = document.getElementsByClassName('_42ft _4jy0 FriendRequestAdd addButton _4jy3 _4jy1 selected _51sy'); for(var i=0; i<inputs.length;i+=1) { inputs[i].click(); }
