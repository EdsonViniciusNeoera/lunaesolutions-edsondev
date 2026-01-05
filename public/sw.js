const CACHE_NAME = 'lunae-solutions-v1.0.0';
const STATIC_CACHE = 'static-v1.0.0';
const DYNAMIC_CACHE = 'dynamic-v1.0.0';

// Recursos estáticos para cache
const STATIC_ASSETS = [
  '/',
  '/about',
  '/portfolio',
  '/icon_1.webp',
  '/favicon.ico',
  '/manifest.json'
];

// Recursos que devem ser atualizados na rede primeiro
const NETWORK_FIRST = [
  '/api/',
  '/_next/static/'
];

// Recursos que devem vir do cache primeiro
const CACHE_FIRST = [
  '/icon_1.webp',
  '/favicon.ico',
  '.woff2',
  '.woff',
  '.ttf'
];

self.addEventListener('install', event => {
  console.log('Service Worker: Instalando...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Service Worker: Cache aberto');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  console.log('Service Worker: Ativando...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Remove caches antigos
          if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Service Worker: Removendo cache antigo', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Tomando controle');
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', event => {
  // Ignore non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Ignore chrome-extension requests
  if (event.request.url.startsWith('chrome-extension://')) return;
  
  // Ignore requests with cache control no-cache
  if (event.request.headers.get('cache-control') === 'no-cache') {
    return;
  }

  const requestUrl = new URL(event.request.url);
  
  // Cache first strategy for fonts and images
  if (CACHE_FIRST.some(path => event.request.url.includes(path))) {
    event.respondWith(cacheFirst(event.request));
    return;
  }
  
  // Network first strategy for API calls and Next.js assets
  if (NETWORK_FIRST.some(path => event.request.url.includes(path))) {
    event.respondWith(networkFirst(event.request));
    return;
  }
  
  // Stale while revalidate for HTML pages
  if (event.request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(staleWhileRevalidate(event.request));
    return;
  }
  
  // Default to cache first for other requests
  event.respondWith(cacheFirst(event.request));
});

// Cache First Strategy
async function cacheFirst(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    
    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Service Worker: Cache first falhou', error);
    return new Response('Offline content not available', { status: 503 });
  }
}

// Network First Strategy
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || new Response('Network error', { status: 503 });
  }
}

// Stale While Revalidate Strategy
async function staleWhileRevalidate(request) {
  try {
    const cachedResponse = await caches.match(request);
    
    const fetchPromise = fetch(request).then(networkResponse => {
      if (networkResponse && networkResponse.status === 200) {
        const cache = caches.open(DYNAMIC_CACHE);
        cache.then(c => c.put(request, networkResponse.clone()));
      }
      return networkResponse;
    });
    
    return cachedResponse || await fetchPromise;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || new Response('Content not available offline', { status: 503 });
  }
}

// Background sync for failed requests
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  console.log('Service Worker: Executando sincronização em background');
  // Implementar lógica de sincronização se necessário
}

// Push notifications (placeholder para futuro)
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icon_1.webp',
      badge: '/icon_1.webp',
      vibrate: [100, 50, 100],
      data: data.data || {}
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title || 'Lunae Solutions', options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});