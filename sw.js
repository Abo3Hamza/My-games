const CACHE_NAME = "games-v4";
const urlsToCache = [
  "index.html",
  "style.css",
  "app.js",
  "games.js",
  "manifest.json",
  "icon-192.png",
  "icon-512.png",
  "test.html",
  "test.jpg",
  "tasbih.html",
  "tasbih.jpg",
"fps.html",
"fps.jpg"
  // أضف هنا باقي الألعاب والصور عند إضافتها
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // لو الملف موجود في الكاش رجعه
      if (response) return response;
      // لو مش موجود في الكاش جرب تجيبه من النت
      return fetch(event.request).catch(() => {
        // لو مفيش نت رجع الصفحة الرئيسية أو offline.html لو حابب
        return caches.match("index.html");
      });
    })
  );
});