const CACHE_NAME = 'robin-portfolio-v1';
const STATIC_CACHE = 'static-cache-v1';
const DYNAMIC_CACHE = 'dynamic-cache-v1';

const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/script.js',
    '/js/animations.js',
    '/js/blog.js',
    '/images/favicon.png',
    '/manifest.json',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
];

// Install Event
self.addEventListener('install', event => {
    event.waitUntil(
        Promise.all([
            caches.open(STATIC_CACHE)
                .then(cache => cache.addAll(STATIC_ASSETS))
                .catch(error => console.error('Cache addAll error:', error)),
            caches.open(DYNAMIC_CACHE)
        ])
    );
    self.skipWaiting();
});

// Activate Event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames
                        .filter(cacheName => 
                            cacheName !== STATIC_CACHE && 
                            cacheName !== DYNAMIC_CACHE
                        )
                        .map(cacheName => caches.delete(cacheName))
                );
            })
            .catch(error => console.error('Cache cleanup error:', error))
    );
    return self.clients.claim();
});

// Fetch Event
self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;

    // Handle API calls differently
    if (event.request.url.includes('/api/')) {
        event.respondWith(networkFirst(event.request));
        return;
    }

    // For static assets, try cache first, then network
    event.respondWith(cacheFirst(event.request));
});

// Cache-first strategy
async function cacheFirst(request) {
    try {
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }

        const networkResponse = await fetch(request);
        if (!networkResponse || networkResponse.status !== 200) {
            throw new Error('Network response was not valid');
        }

        await updateCache(request, networkResponse.clone());
        return networkResponse;
    } catch (error) {
        console.error('Cache first strategy error:', error);
        return new Response('Offline content not available', {
            status: 503,
            statusText: 'Service Unavailable'
        });
    }
}

// Network-first strategy
async function networkFirst(request) {
    try {
        const networkResponse = await fetch(request);
        if (!networkResponse || networkResponse.status !== 200) {
            throw new Error('Network response was not valid');
        }

        await updateCache(request, networkResponse.clone());
        return networkResponse;
    } catch (error) {
        console.error('Network first strategy error:', error);
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        return new Response('Offline content not available', {
            status: 503,
            statusText: 'Service Unavailable'
        });
    }
}

// Helper function to update cache
async function updateCache(request, response) {
    if (!response || response.status !== 200) return;

    const cache = await caches.open(DYNAMIC_CACHE);
    await cache.put(request, response);

    // Limit cache size
    const cacheEntries = await cache.keys();
    if (cacheEntries.length > 50) {
        await cache.delete(cacheEntries[0]);
    }
}
 