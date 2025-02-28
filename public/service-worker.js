// Service Worker for Jax Sod Website
const CACHE_NAME = 'jaxsod-cache-v1';

// Assets to cache immediately when service worker is installed
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/static/css/main.chunk.css',
  '/static/js/main.chunk.js',
  '/static/js/bundle.js',
  '/logo.jpg',
  '/favicon.ico',
  '/manifest.json'
];

// File extensions that should be cached for offline use
const CACHEABLE_EXTENSIONS = [
  '.html',
  '.js',
  '.css',
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.svg',
  '.woff',
  '.woff2',
  '.ttf',
  '.json'
];

// Install event - cache critical assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const currentCaches = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fall back to network, and cache new responses
self.addEventListener('fetch', event => {
  // Skip non-GET requests and browsers that don't support fetch/cache API
  if (event.request.method !== 'GET') return;
  
  // Skip cross-origin requests
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  
  // Handle HTML navigation requests - network first, then cache
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Clone response to store in cache
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          return response;
        })
        .catch(() => {
          // If network fails, try serving from cache
          return caches.match(event.request)
            .then(cachedResponse => {
              return cachedResponse || caches.match('/');
            });
        })
    );
    return;
  }
  
  // For static assets - cache first, then network
  const isStaticAsset = CACHEABLE_EXTENSIONS.some(ext => url.pathname.endsWith(ext));
  if (isStaticAsset) {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          // Return from cache immediately if available
          if (cachedResponse) {
            // Fetch in background to update cache (stale-while-revalidate)
            fetch(event.request)
              .then(response => {
                // Update the cache
                caches.open(CACHE_NAME)
                  .then(cache => {
                    cache.put(event.request, response.clone());
                  });
              })
              .catch(() => {/* ignore errors */});
            
            return cachedResponse;
          }
          
          // If not in cache, fetch from network and cache
          return fetch(event.request)
            .then(response => {
              // Don't cache non-successful responses
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
              
              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
              
              return response;
            });
        })
    );
    return;
  }
  
  // For all other requests, try network first, then cache
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Only cache successful responses
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        
        const responseToCache = response.clone();
        caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(event.request, responseToCache);
          });
          
        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});

// Handle offline analytics storage
const offlineAnalytics = [];
const MAX_STORED_EVENTS = 20;

// Listen for analytics events and store them when offline
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'STORE_ANALYTICS') {
    // Store analytics event
    if (offlineAnalytics.length < MAX_STORED_EVENTS) {
      offlineAnalytics.push({
        timestamp: Date.now(),
        data: event.data.payload
      });
    }
    
    // Try to send stored events if we're online
    if (navigator.onLine) {
      sendStoredAnalytics();
    }
  }
});

// Send stored analytics events when back online
self.addEventListener('online', () => {
  sendStoredAnalytics();
});

function sendStoredAnalytics() {
  if (offlineAnalytics.length === 0) return;
  
  // Process each stored event
  const eventsToSend = [...offlineAnalytics];
  offlineAnalytics.length = 0;
  
  // Send events to your analytics endpoint
  fetch('/api/analytics/batch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventsToSend)
  }).catch(() => {
    // If sending fails, store events again
    eventsToSend.forEach(event => {
      if (offlineAnalytics.length < MAX_STORED_EVENTS) {
        offlineAnalytics.push(event);
      }
    });
  });
} 