/* Gazapo · sw.js
   Service worker sencillo para jugar sin conexión.
   - Archivos propios: primero la red (así llegan los retos y cambios nuevos)
     y, si no hay conexión, la copia guardada.
   - Fuentes de Google: primero la caché, porque no cambian.
   Si cambias la lista de archivos, sube el número de VERSION. */

const VERSION = 'gazapo-v6';
const FUENTES = 'gazapo-fuentes';

const ARCHIVOS = [
  './',
  'index.html',
  'styles.css',
  'app.js',
  'retos.js',
  'volver-almanaque.js',
  'manifest.json',
  'icons/gazapo.svg',
  'icons/gazapo-portada.svg',
  'icons/favicon-32.png',
  'icons/gazapo-192.png',
  'icons/gazapo-512.png',
  'icons/gazapo-maskable-192.png',
  'icons/gazapo-maskable-512.png',
  'icons/apple-touch-icon.png',
];

self.addEventListener('install', (evento) => {
  evento.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(ARCHIVOS)).then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (evento) => {
  evento.waitUntil(
    caches.keys()
      .then((claves) => Promise.all(
        claves.filter((c) => c !== VERSION && c !== FUENTES).map((c) => caches.delete(c)),
      ))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (evento) => {
  const peticion = evento.request;
  if (peticion.method !== 'GET') return;
  const url = new URL(peticion.url);

  // Fuentes de Google: caché primero.
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    evento.respondWith(
      caches.open(FUENTES).then((cache) =>
        cache.match(peticion).then((enCache) =>
          enCache || fetch(peticion).then((respuesta) => {
            if (respuesta.ok || respuesta.type === 'opaque') cache.put(peticion, respuesta.clone());
            return respuesta;
          }),
        ),
      ),
    );
    return;
  }

  if (url.origin !== self.location.origin) return;

  // Archivos propios: red primero, caché si no hay conexión.
  evento.respondWith(
    fetch(peticion)
      .then((respuesta) => {
        if (respuesta.ok) {
          const copia = respuesta.clone();
          caches.open(VERSION).then((cache) => cache.put(peticion, copia));
        }
        return respuesta;
      })
      .catch(() => caches.match(peticion, { ignoreSearch: true })
        .then((enCache) => enCache || (peticion.mode === 'navigate' ? caches.match('./') : undefined))),
  );
});
