const CACHE_NAME = "pharmacy-locator-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/icon.svg",
  "./assets/photos/p01-full.jpg",
  "./assets/photos/p01-thumb.jpg",
  "./assets/photos/p02-full.jpg",
  "./assets/photos/p02-thumb.jpg",
  "./assets/photos/p03-full.jpg",
  "./assets/photos/p03-thumb.jpg",
  "./assets/photos/p04-full.jpg",
  "./assets/photos/p04-thumb.jpg",
  "./assets/photos/p05-full.jpg",
  "./assets/photos/p05-thumb.jpg",
  "./assets/photos/p06-full.jpg",
  "./assets/photos/p06-thumb.jpg",
  "./assets/photos/p07-full.jpg",
  "./assets/photos/p07-thumb.jpg",
  "./assets/photos/p08-full.jpg",
  "./assets/photos/p08-thumb.jpg",
  "./assets/photos/p09-full.jpg",
  "./assets/photos/p09-thumb.jpg",
  "./assets/photos/p10-full.jpg",
  "./assets/photos/p10-thumb.jpg",
  "./assets/photos/p11-full.jpg",
  "./assets/photos/p11-thumb.jpg",
  "./assets/photos/p12-full.jpg",
  "./assets/photos/p12-thumb.jpg",
  "./assets/photos/p13-full.jpg",
  "./assets/photos/p13-thumb.jpg",
  "./assets/photos/p14-full.jpg",
  "./assets/photos/p14-thumb.jpg",
  "./assets/photos/p15-full.jpg",
  "./assets/photos/p15-thumb.jpg",
  "./assets/photos/p16-full.jpg",
  "./assets/photos/p16-thumb.jpg",
  "./assets/photos/p17-full.jpg",
  "./assets/photos/p17-thumb.jpg",
  "./assets/photos/p18-full.jpg",
  "./assets/photos/p18-thumb.jpg",
  "./assets/photos/p19-full.jpg",
  "./assets/photos/p19-thumb.jpg",
  "./assets/photos/p20-full.jpg",
  "./assets/photos/p20-thumb.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
