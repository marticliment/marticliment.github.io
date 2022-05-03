var CACHE_NAME = 'ChordTransposeCache';
var urlsToCache = [
    './icon-min.png',
    './icon.png',
    './color-light.css',
    './layout-desktop.css',
    './color-dark.css',
    './layout-mobile.css',
    './script.js',
    './index.html'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME).then(
            function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            }
        )
    )
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});

self.addEventListener('activate', function (event) {
    var cacheWhitelist = [];
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
