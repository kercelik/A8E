
const CACHE = "a8e-ultra-v1";
const ASSETS = ["/","/index.html","/styles.css","/script.js","/favicon.png","/assets/a8e-logo.png",
                "/about.html","/offer.html","/thank-you.html","/privacy.html","/terms.html","/404.html"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))); });
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
    const clone = resp.clone(); caches.open(CACHE).then(c => c.put(e.request, clone)); return resp;
  }).catch(()=>caches.match("/404.html"))));
});
