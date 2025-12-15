const CACHE_NAME = 'ayah-echo-v1';

self.addEventListener('install', (event) => {
    console.log('Service Worker: Install');
    // Skip waiting to activate the new service worker immediately.
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activate');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Service Worker: Clearing old cache');
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim()) // Take control of all open clients.
    );
});

self.addEventListener('fetch', (event) => {
    // Only handle GET requests.
    if (event.request.method !== 'GET') {
        return;
    }

    // Use a cache-first strategy.
    event.respondWith(
        caches.open(CACHE_NAME).then(async (cache) => {
            // Try to get the response from the cache.
            const cachedResponse = await cache.match(event.request);
            if (cachedResponse) {
                // If found in cache, return it.
                return cachedResponse;
            }

            // If not in cache, fetch from the network.
            try {
                const networkResponse = await fetch(event.request);
                
                // If the fetch is successful, cache the response.
                if (networkResponse && networkResponse.status === 200) {
                    // Do not cache audio files to save space
                    if (!event.request.url.endsWith('.mp3')) {
                         const responseToCache = networkResponse.clone();
                         cache.put(event.request, responseToCache);
                    }
                }
                
                return networkResponse;
            } catch (error) {
                // If the fetch fails (e.g., offline), it will result in a network error.
                // The browser will handle showing its default offline page.
                console.error('Service Worker: Fetch failed:', error);
                throw error;
            }
        })
    );
});
