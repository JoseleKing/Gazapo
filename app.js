/* Gazapo · app.js
   Un texto de otra época con tres palabras que no podían estar ahí.
   Sin servidor: el reto sale de la fecha (hora de Madrid) y de retos.js.
   Para probar otro día: ?dia=AAAA-MM-DD */
(function () {
  'use strict';

  var TOTAL_GAZAPOS = 3;
  var MAX_BORRONES = 3;
  var CLAVE_INSTRUCCIONES = 'gazapo:instrucciones-vistas';
  var PREFIJO_PARTIDA = 'gazapo:partida:';
  var MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  var MESES_CORTOS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic'];
  var EMOJI = { gazapo: '🟥', trampa: '🟫', fallo: '⬛' };
  var PALABRA = /[\p{L}\p{M}]+/gu;

  var $ = function (id) { return document.getElementById(id); };

  /* ---------- Almacenamiento ---------- */

  function leer(clave) {
    try { return window.localStorage.getItem(clave); } catch (e) { return null; }
  }

  function guardar(clave, valor) {
    try { window.localStorage.setItem(clave, valor); } catch (e) { /* sin almacenamiento */ }
  }

  /* ---------- Fechas (hora de Madrid) ---------- */

  function hoyEnMadrid() {
    try {
      var p = {};
      new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Madrid', year: 'numeric', month: 'numeric', day: 'numeric' })
        .formatToParts(new Date())
        .forEach(function (x) { p[x.type] = x.value; });
      return p.year + '-' + String(p.month).padStart(2, '0') + '-' + String(p.day).padStart(2, '0');
    } catch (e) {
      var d = new Date();
      return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    }
  }

  function partesFecha(iso) {
    var p = iso.split('-');
    return { anio: Number(p[0]), mes: Number(p[1]) - 1, dia: Number(p[2]) };
  }

  function fechaLarga(iso) {
    var f = partesFecha(iso);
    return f.dia + ' de ' + MESES[f.mes] + ' de ' + f.anio;
  }

  function fechaCorta(iso) {
    var f = partesFecha(iso);
    return f.dia + ' ' + MESES_CORTOS[f.mes];
  }

  /* ---------- Reto del día ---------- */

  // El de hoy; si no hay, el último publicado; si aún no ha empezado, el primero.
  function elegirReto(retos) {
    var hoy = hoyEnMadrid();
    try {
      var pedido = new URL(window.location.href).searchParams.get('dia');
      if (pedido && /^\d{4}-\d{2}-\d{2}$/.test(pedido)) hoy = pedido;
    } catch (e) { /* navegador antiguo */ }

    var ordenados = retos.slice().sort(function (a, b) { return a.fecha < b.fecha ? -1 : 1; });
    var elegido = ordenados[0];
    ordenados.forEach(function (r) { if (r.fecha <= hoy) elegido = r; });
    return elegido;
  }

  /* ---------- Estado ---------- */

  var reto = elegirReto(window.GAZAPO_RETOS || []);
  var claveGuardado = PREFIJO_PARTIDA + reto.fecha;

  // intentos: [{ clave, tipo: 'gazapo' | 'trampa' | 'fallo' }]
  var estado = { intentos: [] };
  var seleccion = null; // clave de la palabra seleccionada
  var seleccionBoton = null; // el botón concreto que se ha tocado
  var consultada = null;
  var botonesPorClave = {};
  var textoPorClave = {};

  function cargarEstado() {
    try {
      var guardado = JSON.parse(leer(claveGuardado) || 'null');
      if (guardado && Array.isArray(guardado.intentos)) {
        estado.intentos = guardado.intentos.filter(function (i) {
          return i && typeof i.clave === 'string' && EMOJI[i.tipo];
        });
      }
    } catch (e) { /* guardado corrupto: partida nueva */ }
  }

  function guardarEstado() {
    guardar(claveGuardado, JSON.stringify({ intentos: estado.intentos, terminada: terminada() }));
  }

  function cazados() {
    return estado.intentos.filter(function (i) { return i.tipo === 'gazapo'; }).length;
  }

  function borrones() {
    return estado.intentos.length - cazados();
  }

  function terminada() {
    return cazados() >= TOTAL_GAZAPOS || borrones() >= MAX_BORRONES;
  }

  function intentoDe(clave) {
    for (var i = 0; i < estado.intentos.length; i++) {
      if (estado.intentos[i].clave === clave) return estado.intentos[i];
    }
    return null;
  }

  function tipoDe(clave) {
    if (reto.gazapos[clave]) return 'gazapo';
    if (reto.trampas[clave]) return 'trampa';
    return 'fallo';
  }

  /* ---------- La carta ---------- */

  // Convierte un texto en nodos: cada palabra, un botón; lo demás, texto normal.
  // Cada trozo entre espacios va en un span que no se parte, para que la puntuación
  // no se quede sola a principio de renglón.
  function pintarTexto(contenedor, texto) {
    texto.split(/(\s+)/).forEach(function (trozo) {
      if (!trozo) return;
      if (/^\s+$/.test(trozo)) {
        contenedor.appendChild(document.createTextNode(trozo));
        return;
      }
      var span = document.createElement('span');
      span.className = 'trozo';
      pintarTrozo(span, trozo);
      contenedor.appendChild(span);
    });
  }

  function pintarTrozo(contenedor, texto) {
    var ultimo = 0;
    texto.replace(PALABRA, function (palabra, posicion) {
      if (posicion > ultimo) contenedor.appendChild(document.createTextNode(texto.slice(ultimo, posicion)));
      var clave = palabra.toLocaleLowerCase('es');
      var boton = document.createElement('button');
      boton.type = 'button';
      boton.className = 'palabra';
      boton.textContent = palabra;
      boton.dataset.clave = clave;
      contenedor.appendChild(boton);
      (botonesPorClave[clave] = botonesPorClave[clave] || []).push(boton);
      if (!textoPorClave[clave]) textoPorClave[clave] = palabra;
      ultimo = posicion + palabra.length;
      return palabra;
    });
    if (ultimo < texto.length) contenedor.appendChild(document.createTextNode(texto.slice(ultimo)));
  }

  function parrafo(clase, texto, tocable) {
    var p = document.createElement('p');
    p.className = clase;
    if (tocable) pintarTexto(p, texto);
    else p.textContent = texto;
    return p;
  }

  function pintarCarta() {
    var carta = $('carta');
    carta.textContent = '';
    carta.appendChild(parrafo('carta__encabezado', reto.encabezado, false));
    carta.appendChild(parrafo('carta__saludo', reto.saludo, true));
    reto.parrafos.forEach(function (t) { carta.appendChild(parrafo('carta__parrafo', t, true)); });
    if (reto.despedida) carta.appendChild(parrafo('carta__despedida', reto.despedida, true));
    if (reto.firma) carta.appendChild(parrafo('carta__firma', reto.firma, true));
  }

  // Aplica a los botones de la carta las marcas que corresponden al estado.
  function marcarPalabras(animarClave) {
    var fin = terminada();
    Object.keys(botonesPorClave).forEach(function (clave) {
      var intento = intentoDe(clave);
      var revelada = fin && !intento && reto.gazapos[clave];
      var consultable = fin && ((intento && intento.tipo !== 'fallo') || revelada);
      botonesPorClave[clave].forEach(function (b) {
        b.className = 'palabra';
        if (intento) b.classList.add('palabra--' + intento.tipo);
        if (intento && intento.tipo === 'gazapo' && clave !== animarClave) b.classList.add('palabra--quieta');
        if (revelada) b.classList.add('palabra--revelada');
        if (consultable) b.classList.add('palabra--consultable');
        if (b === seleccionBoton) b.classList.add('palabra--seleccionada');
        if (clave === consultada) b.classList.add('palabra--consultada');

        // Resueltas: no se pueden seleccionar. Al terminar, gazapos y trampas abren su nota.
        if ((intento || fin) && !consultable) b.setAttribute('aria-disabled', 'true');
        else b.removeAttribute('aria-disabled');
        b.setAttribute('aria-pressed', b === seleccionBoton ? 'true' : 'false');

        var etiqueta = intento ? { gazapo: 'gazapo', trampa: 'trampa', fallo: 'borrón' }[intento.tipo] : (revelada ? 'gazapo sin cazar' : '');
        if (etiqueta) b.setAttribute('aria-label', b.textContent + ' (' + etiqueta + ')');
        else b.removeAttribute('aria-label');
      });
    });
  }

  /* ---------- Marcador ---------- */

  var SVG = 'http://www.w3.org/2000/svg';

  function icono(forma, llena, nueva) {
    var svg = document.createElementNS(SVG, 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');
    var figura;
    if (forma === 'circulo') {
      figura = document.createElementNS(SVG, 'ellipse');
      figura.setAttribute('cx', '12');
      figura.setAttribute('cy', '12');
      figura.setAttribute('rx', '9.5');
      figura.setAttribute('ry', '8.5');
      figura.setAttribute('transform', 'rotate(-12 12 12)');
      figura.setAttribute('class', 'marca-circulo' + (llena ? ' marca-circulo--llena' : ''));
    } else {
      figura = document.createElementNS(SVG, 'path');
      figura.setAttribute('d', 'M12 2.5C9.5 7 6 10.5 6 14.5a6 6 0 0 0 12 0C18 10.5 14.5 7 12 2.5Z');
      figura.setAttribute('class', 'marca-gota' + (llena ? ' marca-gota--llena' : ''));
    }
    svg.appendChild(figura);
    if (nueva) svg.classList.add('marca--nueva');
    return svg;
  }

  function pintarMarcador(animar) {
    var c = cazados();
    var b = borrones();
    var g = $('marcas-gazapos');
    var t = $('marcas-borrones');
    g.textContent = '';
    t.textContent = '';
    for (var i = 0; i < TOTAL_GAZAPOS; i++) g.appendChild(icono('circulo', i < c, animar === 'gazapo' && i === c - 1));
    for (var j = 0; j < MAX_BORRONES; j++) t.appendChild(icono('gota', j < b, animar === 'borron' && j === b - 1));
    g.setAttribute('aria-label', c + ' de ' + TOTAL_GAZAPOS + ' gazapos cazados');
    t.setAttribute('aria-label', b + ' de ' + MAX_BORRONES + ' borrones');
    g.setAttribute('role', 'img');
    t.setAttribute('role', 'img');
  }

  /* ---------- Nota del corrector ---------- */

  function p(texto, clase) {
    var el = document.createElement('p');
    if (clase) el.className = clase;
    el.textContent = texto;
    return el;
  }

  function mostrarNota(clave, desplazar) {
    var tipo = tipoDe(clave);
    var palabra = textoPorClave[clave] || clave;
    var nota = $('nota');
    var cuerpo = $('nota-cuerpo');
    cuerpo.textContent = '';
    nota.className = 'nota nota--' + tipo;

    if (tipo === 'gazapo') {
      var g = reto.gazapos[clave];
      var cazado = intentoDe(clave);
      cuerpo.appendChild(p(cazado ? '¡Gazapo! «' + palabra + '» no podía estar en una carta de ' + reto.anio + '.'
        : 'Se te escapó: «' + palabra + '» no podía estar en una carta de ' + reto.anio + '.', 'nota__veredicto'));
      cuerpo.appendChild(p(g.explicacion));
      if (g.epoca) cuerpo.appendChild(p(g.epoca, 'nota__epoca'));
    } else if (tipo === 'trampa') {
      var t = reto.trampas[clave];
      cuerpo.appendChild(p('Borrón. Era una trampa: «' + t.termino + '» ya se decía en ' + reto.anio + '.', 'nota__veredicto'));
      cuerpo.appendChild(p(t.explicacion));
    } else {
      var texto = 'Borrón. «' + palabra + '» no desentona en una carta de ' + reto.anio + '.';
      if (!terminada()) texto += ' Sigue buscando.';
      cuerpo.appendChild(p(texto, 'nota__veredicto'));
    }

    nota.hidden = false;
    consultada = tipo === 'fallo' ? null : clave;
    if (desplazar && nota.scrollIntoView) {
      var reducido = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      nota.scrollIntoView({ block: 'nearest', behavior: reducido ? 'auto' : 'smooth' });
    }
  }

  /* ---------- Botón de confirmar (burbuja bajo la palabra) ---------- */

  function pintarBoton() {
    var burbuja = $('burbuja');
    if (!seleccionBoton || terminada()) {
      burbuja.hidden = true;
      return;
    }
    $('btn-marcar').textContent = 'Marcar «' + seleccionBoton.textContent + '» como gazapo';
    // Va detrás del trozo de la palabra: así el tabulador llega a ella justo después.
    var trozo = seleccionBoton.parentNode;
    trozo.parentNode.insertBefore(burbuja, trozo.nextSibling);
    burbuja.hidden = false;
    colocarBurbuja();
  }

  // Centra la burbuja bajo la palabra sin salirse de la hoja, con el piquito apuntándola.
  function colocarBurbuja() {
    var burbuja = $('burbuja');
    if (burbuja.hidden || !seleccionBoton) return;
    var hoja = $('carta').getBoundingClientRect();
    var palabra = seleccionBoton.getBoundingClientRect();
    var margen = 8;
    var ancho = burbuja.offsetWidth;
    var centro = palabra.left + palabra.width / 2 - hoja.left;
    var izquierda = Math.min(Math.max(centro - ancho / 2, margen), hoja.width - ancho - margen);
    var alto = parseFloat(getComputedStyle(seleccionBoton).fontSize) || 20;
    burbuja.style.left = izquierda + 'px';
    burbuja.style.top = (palabra.bottom - hoja.top - 0.15 * alto + 10) + 'px';
    burbuja.style.setProperty('--piquito', Math.min(Math.max(centro - izquierda, 16), ancho - 16) + 'px');

    // Que no quede fuera de la pantalla.
    var abajo = burbuja.getBoundingClientRect().bottom;
    if (abajo > window.innerHeight - margen) {
      var reducido = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollBy({ top: abajo - window.innerHeight + 3 * margen, behavior: reducido ? 'auto' : 'smooth' });
    }
  }

  /* ---------- Final ---------- */

  function textoCompartir() {
    var c = cazados();
    var b = borrones();
    var cuadros = estado.intentos.map(function (i) { return EMOJI[i.tipo]; }).join('');
    return 'Gazapo · ' + fechaCorta(reto.fecha) + '\n' + cuadros + '\n' +
      c + '/' + TOTAL_GAZAPOS + ' gazapos · ' + b + (b === 1 ? ' borrón' : ' borrones');
  }

  function pintarFinal(enfocar) {
    var c = cazados();
    var b = borrones();
    var titulo;
    var resumen;
    if (c >= TOTAL_GAZAPOS && b === 0) {
      titulo = 'Ojo de corrector';
      resumen = 'Tres gazapos y ni un borrón. La carta de ' + reto.anio + ' queda limpia.';
    } else if (c >= TOTAL_GAZAPOS) {
      titulo = 'Carta corregida';
      resumen = 'Has cazado los tres gazapos con ' + b + (b === 1 ? ' borrón.' : ' borrones.');
    } else {
      titulo = 'La carta se te escapa';
      resumen = 'Tres borrones. Has cazado ' + c + ' de ' + TOTAL_GAZAPOS +
        ' gazapos; los que faltaban quedan señalados en la carta.';
    }
    $('final-titulo').textContent = titulo;
    $('final-resumen').textContent = resumen + ' Toca un gazapo o una trampa para releer su nota.';
    $('compartir-texto').textContent = textoCompartir();
    $('final').hidden = false;
    if (enfocar) $('final-titulo').focus({ preventScroll: true });

    if (window.almanaqueHecho) window.almanaqueHecho({ aciertos: c, total: TOTAL_GAZAPOS });
  }

  function copiar() {
    var texto = textoCompartir();
    var aviso = $('aviso-copia');
    function seleccionar() {
      try {
        var rango = document.createRange();
        rango.selectNodeContents($('compartir-texto'));
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(rango);
      } catch (e) { /* sin selección */ }
      aviso.textContent = 'No se ha podido copiar. El texto queda seleccionado para que lo copies tú.';
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(texto).then(function () {
        aviso.textContent = 'Resultado copiado.';
      }, seleccionar);
    } else {
      seleccionar();
    }
  }

  /* ---------- Jugada ---------- */

  function tocarPalabra(boton) {
    var clave = boton.dataset.clave;
    if (terminada()) {
      var intento = intentoDe(clave);
      if ((intento && intento.tipo !== 'fallo') || reto.gazapos[clave]) {
        mostrarNota(clave, true);
        marcarPalabras();
      }
      return;
    }
    if (intentoDe(clave)) return;
    if (seleccionBoton === boton) {
      seleccion = null;
      seleccionBoton = null;
    } else {
      seleccion = clave;
      seleccionBoton = boton;
    }
    marcarPalabras();
    pintarBoton();
  }

  function confirmar() {
    if (!seleccion || terminada()) return;
    var clave = seleccion;
    var tipo = tipoDe(clave);
    var tocado = seleccionBoton;
    seleccion = null;
    seleccionBoton = null;
    estado.intentos.push({ clave: clave, tipo: tipo });
    guardarEstado();

    var fin = terminada();
    mostrarNota(clave, !fin);
    marcarPalabras(clave);
    pintarMarcador(tipo === 'gazapo' ? 'gazapo' : 'borron');
    pintarBoton();
    if (fin) pintarFinal(true);
    else if (tocado) tocado.focus({ preventScroll: true });
  }

  /* ---------- Instrucciones ---------- */

  function enfocables(contenedor) {
    return Array.prototype.filter.call(
      contenedor.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])'),
      function (el) { return !el.disabled && el.offsetParent !== null; }
    );
  }

  function prepararInstrucciones() {
    var dialogo = $('instrucciones');
    var abrirBoton = $('btn-ayuda');

    function abrir() {
      if (dialogo.open) return;
      if (dialogo.showModal) dialogo.showModal();
      else dialogo.setAttribute('open', '');
      guardar(CLAVE_INSTRUCCIONES, '1');
      $('btn-cerrar').focus();
    }

    function cerrar() {
      if (dialogo.close) dialogo.close();
      else dialogo.removeAttribute('open');
    }

    abrirBoton.addEventListener('click', abrir);
    $('btn-cerrar').addEventListener('click', cerrar);
    dialogo.addEventListener('close', function () { abrirBoton.focus(); });

    // Cierre al tocar fuera de la hoja.
    dialogo.addEventListener('click', function (e) {
      if (e.target === dialogo) cerrar();
    });

    dialogo.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        cerrar();
        return;
      }
      // Foco atrapado dentro del panel.
      if (e.key !== 'Tab') return;
      var lista = enfocables(dialogo);
      if (!lista.length) return;
      var primero = lista[0];
      var ultimo = lista[lista.length - 1];
      if (e.shiftKey && document.activeElement === primero) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primero.focus();
      }
    });

    if (!leer(CLAVE_INSTRUCCIONES)) abrir();
  }

  /* ---------- Arranque ---------- */

  // La portada con el logo se ve al menos un instante (lo que tardan las orejas en moverse)
  // y luego se desvanece. Después, si toca, se abren las instrucciones.
  function retirarPortada(despues) {
    var portada = $('portada');
    if (!portada) {
      despues();
      return;
    }
    var ahora = window.performance && performance.now ? performance.now() : 0;
    setTimeout(function () {
      portada.classList.add('oculta');
      setTimeout(function () {
        portada.remove();
        despues();
      }, 400);
    }, Math.max(0, 1500 - ahora));
  }

  function empezar() {
    cargarEstado();
    $('fecha-reto').textContent = fechaLarga(reto.fecha);
    pintarCarta();
    marcarPalabras();
    pintarMarcador();
    pintarBoton();

    $('carta').addEventListener('click', function (e) {
      var boton = e.target.closest && e.target.closest('button.palabra');
      if (boton) tocarPalabra(boton);
    });
    $('btn-marcar').addEventListener('click', confirmar);
    window.addEventListener('resize', colocarBurbuja);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(colocarBurbuja);
    $('btn-copiar').addEventListener('click', copiar);

    if (terminada()) pintarFinal(false);
    retirarPortada(prepararInstrucciones);
  }

  empezar();
})();
