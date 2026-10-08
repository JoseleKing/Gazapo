# Gazapo

*Cazadores de anacronismos.* Un juego diario de la colección [Almanaque](https://joseleking.github.io/Almanaque/).

Cada día, un texto breve de época con tres palabras que entonces nadie podía haber escrito. Toca una palabra para seleccionarla y pulsa «Marcar gazapo» para confirmarla. Cada error es un borrón; con tres borrones se acaba la partida.

## Archivos

- `index.html`, `styles.css`, `app.js`: el juego, sin dependencias ni compilación.
- `retos.js`: un reto por día (fecha de publicación, año, encabezado, texto, gazapos y trampas). Para añadir días, copia un bloque.
- `volver-almanaque.js`: copia de `Almanaque/para-los-juegos/`.
- `manifest.json`, `sw.js`: PWA para jugar sin conexión. Si cambias la lista de archivos, sube `VERSION` en `sw.js`.

## Probar en local

```sh
python3 -m http.server 8000
```

Abre <http://localhost:8000/>. Para jugar otro día: <http://localhost:8000/?dia=2026-10-09>.

La partida se guarda en `localStorage` con claves `gazapo:…`; la página `/reiniciar/` de Almanaque las borra.
