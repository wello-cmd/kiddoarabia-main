// Retire the previous site's offline cache during the production migration.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key.startsWith('workbox-') || key.startsWith('kiddo')).map((key) => caches.delete(key)));
    await self.registration.unregister();
  })());
});
