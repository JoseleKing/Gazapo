/* Gazapo · app.js
   Un texto de otra época con tres palabras que no podían estar ahí.
   Sin servidor: el reto sale de la fecha (hora local del jugador) y de retos.js.
   Para probar otro día: ?dia=AAAA-MM-DD */
(function () {
  'use strict';

  var TOTAL_GAZAPOS = 3;
  var MAX_BORRONES = 3;
  var CLAVE_INSTRUCCIONES = 'gazapo:instrucciones-vistas';
  var PREFIJO_PARTIDA = 'gazapo:partida:';
  var MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  var MESES_CORTOS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic'];
  // Al compartir: verde, gazapo cazado; rojo, borrón (trampa o fallo); lupa, la pista.
  var EMOJI = { gazapo: '🟩', trampa: '🟥', fallo: '🟥' };
  var EMOJI_LUPA = '🔍';
  var COSTE_LUPA = 0.5;
  var MAX_LUPAS = 3;
  var PALABRA = /[\p{L}\p{M}]+/gu;
  var URL_JUEGO = 'https://joseleking.github.io/Gazapo/';

  var $ = function (id) { return document.getElementById(id); };

  /* ---------- Almacenamiento ---------- */

  function leer(clave) {
    try { return window.localStorage.getItem(clave); } catch (e) { return null; }
  }

  function guardar(clave, valor) {
    try { window.localStorage.setItem(clave, valor); } catch (e) { /* sin almacenamiento */ }
  }

  /* ---------- Fechas (hora local del jugador) ---------- */

  function hoyLocal() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
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
    var hoy = hoyLocal();
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

  // intentos: [{ clave, pos, tipo: 'gazapo' | 'trampa' | 'fallo' }]
  // pos: la palabra concreta que se marcó (su orden en la carta, del saludo a la firma).
  // lupas: [{ nivel: 'parrafo' | 'frase' | 'palabra', pos: párrafo, palabra: posición del gazapo
  //   señalado, tras: intentos que había al usarla }], hasta MAX_LUPAS.
  var estado = { intentos: [], lupas: [] };
  var seleccion = null; // clave de la palabra seleccionada
  var seleccionBoton = null; // el botón concreto que se ha tocado
  var consultada = null;
  var consultadaPos = null; // la aparición que se resalta mientras se lee su nota
  var botones = []; // todas las palabras tocables, por posición
  var parrafosCarta = []; // los párrafos tocables, del saludo a la firma
  var botonesPorClave = {};
  var textoPorClave = {};

  // Se llama con la carta ya pintada, para poder situar cada intento en su palabra.
  function cargarEstado() {
    try {
      var guardado = JSON.parse(leer(claveGuardado) || 'null');
      if (guardado && Array.isArray(guardado.intentos)) {
        estado.intentos = guardado.intentos.filter(function (i) {
          return i && typeof i.clave === 'string' && EMOJI[i.tipo];
        });
        // Partidas guardadas antes de que hubiera posiciones (o con una que ya no
        // corresponde a esa palabra): el intento pasa a la primera aparición de su clave.
        estado.intentos.forEach(function (i) {
          var boton = typeof i.pos === 'number' ? botones[i.pos] : null;
          if (boton && boton.dataset.clave === i.clave) return;
          var primero = botonesPorClave[i.clave] && botonesPorClave[i.clave][0];
          i.pos = primero ? Number(primero.dataset.pos) : null;
        });
      }
      // Las partidas de antes de la lupa no tienen ninguna; las de cuando había una sola,
      // la guardaban en «lupa».
      var lupas = guardado && (Array.isArray(guardado.lupas) ? guardado.lupas : (guardado.lupa ? [guardado.lupa] : []));
      // Las de entonces eran todas de párrafo, sin gazapo apuntado: se toma el primero de ese párrafo.
      estado.lupas = (lupas || []).filter(function (l) {
        return l && parrafosCarta[l.pos];
      }).slice(0, MAX_LUPAS).map(function (l) {
        var objetivo = botones[l.palabra];
        if (!objetivo || !reto.gazapos[objetivo.dataset.clave]) {
          objetivo = Array.prototype.filter.call(parrafosCarta[l.pos].querySelectorAll('button.palabra'), function (b) {
            return reto.gazapos[b.dataset.clave];
          })[0];
        }
        return {
          nivel: NIVELES.indexOf(l.nivel) >= 0 ? l.nivel : 'parrafo',
          pos: l.pos,
          palabra: objetivo ? Number(objetivo.dataset.pos) : null,
          tras: typeof l.tras === 'number' ? Math.min(l.tras, estado.intentos.length) : estado.intentos.length,
        };
      });
    } catch (e) { /* guardado corrupto: partida nueva */ }
  }

  function guardarEstado() {
    guardar(claveGuardado, JSON.stringify({ intentos: estado.intentos, lupas: estado.lupas, terminada: terminada() }));
  }

  function cazados() {
    return estado.intentos.filter(function (i) { return i.tipo === 'gazapo'; }).length;
  }

  // Puede ser medio: cada lupa cuesta medio borrón.
  function borrones() {
    return estado.intentos.length - cazados() + estado.lupas.length * COSTE_LUPA;
  }

  // «medio borrón», «1 borrón», «1 borrón y medio», «2 borrones y medio»…
  function textoBorrones(b) {
    var enteros = Math.floor(b);
    var medio = b - enteros >= 0.5;
    if (enteros === 0) return medio ? 'medio borrón' : '0 borrones';
    return enteros + (enteros === 1 ? ' borrón' : ' borrones') + (medio ? ' y medio' : '');
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
      boton.dataset.pos = botones.length;
      contenedor.appendChild(boton);
      botones.push(boton);
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
    parrafosCarta = [parrafo('carta__saludo', reto.saludo, true)];
    reto.parrafos.forEach(function (t) { parrafosCarta.push(parrafo('carta__parrafo', t, true)); });
    if (reto.despedida) parrafosCarta.push(parrafo('carta__despedida', reto.despedida, true));
    if (reto.firma) parrafosCarta.push(parrafo('carta__firma', reto.firma, true));
    parrafosCarta.forEach(function (p) { carta.appendChild(p); });
  }

  // Aplica a los botones de la carta las marcas que corresponden al estado.
  // La marca va solo en la palabra que se tocó; las demás apariciones de esa clave
  // quedan sin marcar, pero ya no se pueden jugar.
  function marcarPalabras(animarPos) {
    var fin = terminada();
    Object.keys(botonesPorClave).forEach(function (clave) {
      var intento = intentoDe(clave);
      var sinCazar = fin && !intento && reto.gazapos[clave];
      var consultable = fin && ((intento && intento.tipo !== 'fallo') || sinCazar);
      botonesPorClave[clave].forEach(function (b, n) {
        var pos = Number(b.dataset.pos);
        var marcada = intento && intento.pos === pos;
        // Al final, el gazapo que faltaba se señala solo en su primera aparición.
        var revelada = sinCazar && n === 0;
        b.className = 'palabra';
        if (marcada) b.classList.add('palabra--' + intento.tipo);
        if (marcada && intento.tipo === 'gazapo' && pos !== animarPos) b.classList.add('palabra--quieta');
        if (revelada) b.classList.add('palabra--revelada');
        if (consultable) b.classList.add('palabra--consultable');
        if (b === seleccionBoton) b.classList.add('palabra--seleccionada');
        if (clave === consultada && pos === consultadaPos) b.classList.add('palabra--consultada');

        // Resueltas: no se pueden seleccionar. Al terminar, gazapos y trampas abren su nota.
        if ((intento || fin) && !consultable) b.setAttribute('aria-disabled', 'true');
        else b.removeAttribute('aria-disabled');
        b.setAttribute('aria-pressed', b === seleccionBoton ? 'true' : 'false');

        var etiqueta = marcada ? { gazapo: 'gazapo', trampa: 'trampa', fallo: 'borrón' }[intento.tipo] : (revelada ? 'gazapo sin cazar' : '');
        if (etiqueta) b.setAttribute('aria-label', b.textContent + ' (' + etiqueta + ')');
        else b.removeAttribute('aria-label');
      });
    });
    marcarLupas();
    var senalada = document.querySelector('#carta .palabra--lupa');
    if (senalada && !senalada.getAttribute('aria-label')) senalada.setAttribute('aria-label', senalada.textContent + ' (señalada por la lupa)');
    compensarRenglon();
  }

  // La palabra seleccionada reserva a los lados el hueco de su círculo. Si en su renglón
  // no queda sitio para ese hueco, el texto que la sigue saltaría de renglón: para
  // evitarlo, los demás trozos del renglón se aprietan (letter-spacing) justo lo que
  // falta, repartido entre todas sus letras (no llega a medio píxel por letra).
  var compensados = [];

  function compensarRenglon() {
    compensados.forEach(function (t) { t.style.letterSpacing = ''; });
    compensados = [];
    if (!seleccionBoton) return;
    // Se mide el renglón como queda sin la selección.
    seleccionBoton.classList.remove('palabra--seleccionada');
    var propio = seleccionBoton.parentNode;
    var arriba = propio.getBoundingClientRect().top;
    var linea = Array.prototype.filter.call(propio.parentNode.querySelectorAll('.trozo'), function (t) {
      return Math.abs(t.getBoundingClientRect().top - arriba) < 2;
    });
    var tam = parseFloat(getComputedStyle(propio).fontSize) || 20;
    var libre = propio.parentNode.getBoundingClientRect().right - linea[linea.length - 1].getBoundingClientRect().right;
    // El hueco es 2 × --circulo-hueco (0,25em); algo más, porque lo que mide el
    // navegador y lo que usa al partir renglones no siempre coinciden al píxel.
    var falta = 0.6 * tam - libre;
    // El primero del renglón no se aprieta: podría caber al final del anterior.
    compensados = falta > 0 ? linea.slice(1).filter(function (t) { return t !== propio; }) : [];
    if (compensados.length) {
      // Lo que gana cada letra depende del navegador, así que se mide con una prueba.
      var anchos = function () {
        return compensados.reduce(function (s, t) { return s + t.getBoundingClientRect().width; }, 0);
      };
      var antes = anchos();
      compensados.forEach(function (t) { t.style.letterSpacing = '-0.02em'; });
      var ganado = antes - anchos();
      var apretar = ganado > 0 ? Math.max(-0.02 * falta / ganado, -0.1) : 0;
      compensados.forEach(function (t) { t.style.letterSpacing = apretar ? apretar.toFixed(4) + 'em' : ''; });
    }
    seleccionBoton.classList.add('palabra--seleccionada');
  }

  // Al cambiar el ancho o cargar las fuentes cambian los renglones.
  function recolocar() {
    compensarRenglon();
    colocarBurbuja();
    recolocarLinea();
  }

  /* ---------- Marcador ---------- */

  var SVG = 'http://www.w3.org/2000/svg';
  var GOTA = 'M12 2.5C9.5 7 6 10.5 6 14.5a6 6 0 0 0 12 0C18 10.5 14.5 7 12 2.5Z';
  var idsSvg = 0;

  function nodoSvg(nombre, atributos) {
    var el = document.createElementNS(SVG, nombre);
    Object.keys(atributos || {}).forEach(function (a) { el.setAttribute(a, atributos[a]); });
    return el;
  }

  // llena: true, false o 'media' (la gota del medio borrón de una lupa).
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
    } else if (llena === 'media') {
      // Contorno vacío y, recortada por debajo de la mitad, la gota llena.
      var id = 'media-gota-' + (++idsSvg);
      var recorte = nodoSvg('clipPath', { id: id });
      recorte.appendChild(nodoSvg('rect', { x: 0, y: 13, width: 24, height: 11 }));
      svg.appendChild(recorte);
      svg.appendChild(nodoSvg('path', { d: GOTA, class: 'marca-gota marca-gota--llena', 'clip-path': 'url(#' + id + ')' }));
      figura = nodoSvg('path', { d: GOTA, class: 'marca-gota' });
    } else {
      figura = nodoSvg('path', { d: GOTA, class: 'marca-gota' + (llena ? ' marca-gota--llena' : '') });
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
    for (var j = 0; j < MAX_BORRONES; j++) {
      var llena = j + 1 <= b ? true : (j + 0.5 <= b ? 'media' : false);
      t.appendChild(icono('gota', llena, animar === 'borron' && j === Math.ceil(b) - 1));
    }
    g.setAttribute('aria-label', c + ' de ' + TOTAL_GAZAPOS + ' gazapos cazados');
    t.setAttribute('aria-label', textoBorrones(Math.min(b, MAX_BORRONES)) + ' de ' + MAX_BORRONES);
    g.setAttribute('role', 'img');
    t.setAttribute('role', 'img');
    pintarLupa();
  }

  /* ---------- La lupa ---------- */

  // Tres por partida, cada vez más finas sobre un mismo gazapo: la primera señala su
  // párrafo; si sigue sin cazar, la segunda su frase y la tercera la palabra. Cazado ese,
  // la siguiente vuelve a empezar por el párrafo de otro (el primero sin cazar, en orden),
  // o por su frase si ese párrafo ya estaba señalado.
  var NIVELES = ['parrafo', 'frase', 'palabra'];
  var QUE_SENALA = { parrafo: 'el párrafo', frase: 'la frase', palabra: 'la palabra' };

  function lupasQuedan() {
    return MAX_LUPAS - estado.lupas.length;
  }

  function parrafoDe(boton) {
    return parrafosCarta.indexOf(boton.closest('p'));
  }

  // El primer gazapo sin cazar, en orden de lectura: su primera aparición.
  function gazapoSinCazar() {
    for (var i = 0; i < botones.length; i++) {
      var clave = botones[i].dataset.clave;
      if (reto.gazapos[clave] && !intentoDe(clave)) return botones[i];
    }
    return null;
  }

  // Lo que señalaría la próxima lupa: { nivel, palabra (posición del gazapo) }.
  function proximaLupa() {
    var ultima = estado.lupas[estado.lupas.length - 1];
    var objetivo = ultima && botones[ultima.palabra];
    if (objetivo && !intentoDe(objetivo.dataset.clave)) {
      var nivel = NIVELES.indexOf(ultima.nivel) + 1;
      if (nivel < NIVELES.length) return { nivel: NIVELES[nivel], palabra: ultima.palabra };
    }
    var boton = gazapoSinCazar();
    if (!boton) return null;
    // Si su párrafo ya lo señaló otra lupa, se pasa directamente a la frase.
    var yaSenalado = estado.lupas.some(function (l) { return l.nivel === 'parrafo' && l.pos === parrafoDe(boton); });
    return { nivel: yaSenalado ? 'frase' : 'parrafo', palabra: Number(boton.dataset.pos) };
  }

  // No se puede usar si su medio borrón acabara la partida.
  function lupaDisponible() {
    return lupasQuedan() > 0 && !terminada() && borrones() + COSTE_LUPA < MAX_BORRONES && !!proximaLupa();
  }

  function pintarLupa() {
    var boton = $('btn-lupa');
    var quedan = lupasQuedan();
    var disponible = lupaDisponible();
    var proxima = disponible ? proximaLupa() : null;
    boton.disabled = !disponible;
    boton.classList.toggle('boton-lupa--usada', quedan === 0);
    $('lupas-quedan').textContent = quedan;
    var lupas = quedan === 1 ? '1 lupa' : quedan + ' lupas';
    boton.setAttribute('aria-label', quedan === 0 ? 'Lupas usadas'
      : (disponible ? 'Usar una lupa: señala ' + QUE_SENALA[proxima.nivel] + ' de un gazapo (cuesta medio borrón; quedan ' + lupas + ')'
        : 'Lupa no disponible (quedan ' + lupas + ')'));
    if (proxima) {
      $('confirmar-lupa-texto').textContent = '¿Usar una lupa? Señalará ' + QUE_SENALA[proxima.nivel] +
        ' de un gazapo y cuesta medio borrón. ' + (quedan === 1 ? 'Es la última.' : 'Te quedan ' + quedan + '.');
    }
    if (!disponible) cerrarConfirmacionLupa(false);
  }

  // Los trozos de la frase en la que está el botón (las frases acaban en . ; : ? ! …).
  function fraseDe(boton) {
    var trozos = Array.prototype.slice.call(boton.closest('p').querySelectorAll('.trozo'));
    var i = trozos.indexOf(boton.parentNode);
    var fin = /[.;:?!…][»"”’)]*$/;
    var desde = i;
    while (desde > 0 && !fin.test(trozos[desde - 1].textContent)) desde--;
    var hasta = i;
    while (hasta < trozos.length - 1 && !fin.test(trozos[hasta].textContent)) hasta++;
    return trozos.slice(desde, hasta + 1);
  }

  function avisoLector(texto, antesDe) {
    var aviso = document.createElement('span');
    aviso.className = 'solo-lector aviso-lupa';
    aviso.textContent = texto;
    antesDe.parentNode.insertBefore(aviso, antesDe);
  }

  // Pinta lo que han señalado las lupas. El párrafo queda marcado toda la partida; la
  // frase y la palabra, mientras su gazapo siga sin cazar.
  function marcarLupas() {
    Array.prototype.forEach.call(document.querySelectorAll('#carta .aviso-lupa'), function (a) { a.remove(); });
    Array.prototype.forEach.call(document.querySelectorAll('#carta .trozo--lupa, #carta .palabra--lupa'), function (el) {
      el.classList.remove('trozo--lupa', 'palabra--lupa');
    });
    parrafosCarta.forEach(function (p) { p.classList.remove('parrafo--lupa'); });

    var fin = terminada();
    estado.lupas.forEach(function (l) {
      var objetivo = botones[l.palabra];
      if (!objetivo) return;
      var pendiente = !fin && !intentoDe(objetivo.dataset.clave);
      if (l.nivel === 'parrafo') {
        var p = parrafosCarta[l.pos];
        if (!p.classList.contains('parrafo--lupa')) {
          p.classList.add('parrafo--lupa');
          avisoLector('Párrafo señalado por la lupa: ', p.firstChild);
        }
      } else if (l.nivel === 'frase' && pendiente) {
        var frase = fraseDe(objetivo);
        frase.forEach(function (t) { t.classList.add('trozo--lupa'); });
        avisoLector('Frase señalada por la lupa: ', frase[0]);
      } else if (l.nivel === 'palabra' && pendiente) {
        objetivo.classList.add('palabra--lupa');
      }
    });
  }

  function abrirConfirmacionLupa() {
    if (!lupaDisponible()) return;
    $('confirmar-lupa').hidden = false;
    $('btn-lupa').setAttribute('aria-expanded', 'true');
    $('btn-usar-lupa').focus();
  }

  function cerrarConfirmacionLupa(enfocar) {
    var caja = $('confirmar-lupa');
    if (caja.hidden) return;
    caja.hidden = true;
    $('btn-lupa').setAttribute('aria-expanded', 'false');
    if (enfocar && !$('btn-lupa').disabled) $('btn-lupa').focus();
  }

  function usarLupa() {
    if (!lupaDisponible()) return;
    var proxima = proximaLupa();
    var objetivo = botones[proxima.palabra];
    estado.lupas.push({ nivel: proxima.nivel, pos: parrafoDe(objetivo), palabra: proxima.palabra, tras: estado.intentos.length });
    guardarEstado();
    cerrarConfirmacionLupa(false);
    pintarMarcador('borron');
    mostrarNotaLupa(proxima.nivel);
    marcarPalabras();
    pintarBoton();

    // El foco pasa del botón a lo señalado, para leerlo.
    var destino = proxima.nivel === 'parrafo' ? parrafosCarta[parrafoDe(objetivo)] : objetivo;
    if (destino.tagName === 'P') destino.setAttribute('tabindex', '-1');
    destino.focus({ preventScroll: true });
    if (destino.scrollIntoView) {
      var reducido = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      destino.scrollIntoView({ block: proxima.nivel === 'parrafo' ? 'nearest' : 'center', behavior: reducido ? 'auto' : 'smooth' });
    }
  }

  function prepararLupa() {
    $('btn-lupa').addEventListener('click', function () {
      if ($('confirmar-lupa').hidden) abrirConfirmacionLupa();
      else cerrarConfirmacionLupa(true);
    });
    $('btn-usar-lupa').addEventListener('click', usarLupa);
    $('btn-cancelar-lupa').addEventListener('click', function () { cerrarConfirmacionLupa(true); });
    $('confirmar-lupa').addEventListener('keydown', function (e) {
      if (e.key === 'Escape') cerrarConfirmacionLupa(true);
    });
    // Tocar fuera de la burbuja la cierra.
    document.addEventListener('click', function (e) {
      if (!e.target.closest('#confirmar-lupa, #btn-lupa')) cerrarConfirmacionLupa(false);
    });
  }

  /* ---------- Nota del corrector ---------- */

  function p(texto, clase) {
    var el = document.createElement('p');
    if (clase) el.className = clase;
    el.textContent = texto;
    return el;
  }

  // pos: la aparición que se ha tocado, para resaltarla mientras se lee la nota.
  function mostrarNota(clave, pos, desplazar) {
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
    consultadaPos = pos;
    if (desplazar && nota.scrollIntoView) {
      var reducido = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      nota.scrollIntoView({ block: 'nearest', behavior: reducido ? 'auto' : 'smooth' });
    }
  }

  function mostrarNotaLupa(nivel) {
    var nota = $('nota');
    var cuerpo = $('nota-cuerpo');
    cuerpo.textContent = '';
    nota.className = 'nota nota--lupa';
    cuerpo.appendChild(p({
      parrafo: 'La lupa señala un párrafo: en él hay un gazapo sin cazar.',
      frase: 'La lupa afina: el gazapo está en la frase señalada.',
      palabra: 'La lupa lo señala: el gazapo es la palabra subrayada.',
    }[nivel], 'nota__veredicto'));
    var quedan = lupasQuedan();
    cuerpo.appendChild(p('Te cuesta medio borrón. Ahora llevas ' + textoBorrones(borrones()) + '. ' +
      (quedan === 0 ? 'Ya no te quedan lupas.' : (quedan === 1 ? 'Te queda 1 lupa.' : 'Te quedan ' + quedan + ' lupas.'))));
    nota.hidden = false;
    consultada = null;
    consultadaPos = null;
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
    // Se coloca respecto a su contenedor posicionado, que no siempre es la hoja: el párrafo
    // señalado por la lupa también lo es (position: relative, por la manecilla).
    var contenedor = burbuja.offsetParent || $('carta');
    var caja = contenedor.getBoundingClientRect();
    var dx = hoja.left - caja.left - contenedor.clientLeft;
    var dy = hoja.top - caja.top - contenedor.clientTop;
    burbuja.style.left = (izquierda + dx) + 'px';
    burbuja.style.top = (palabra.bottom - hoja.top - 0.15 * alto + 10 + dy) + 'px';
    burbuja.style.setProperty('--piquito', Math.min(Math.max(centro - izquierda, 16), ancho - 16) + 'px');

    // Que no quede fuera de la pantalla.
    var abajo = burbuja.getBoundingClientRect().bottom;
    if (abajo > window.innerHeight - margen) {
      var reducido = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollBy({ top: abajo - window.innerHeight + 3 * margen, behavior: reducido ? 'auto' : 'smooth' });
    }
  }

  /* ---------- Final ---------- */

  // La partida en orden: 'gazapo', 'trampa', 'fallo' y, donde se usó cada lupa, 'lupa'.
  function secuencia() {
    var lista = [];
    estado.intentos.forEach(function (intento, n) {
      estado.lupas.forEach(function (l) { if (l.tras === n) lista.push('lupa'); });
      lista.push(intento.tipo);
    });
    estado.lupas.forEach(function (l) { if (l.tras >= estado.intentos.length) lista.push('lupa'); });
    return lista;
  }

  function resultado() {
    return cazados() + '/' + TOTAL_GAZAPOS + ' gazapos · ' + textoBorrones(borrones());
  }

  function textoCompartir() {
    var cuadros = secuencia().map(function (t) { return t === 'lupa' ? EMOJI_LUPA : EMOJI[t]; }).join('');
    return 'Gazapo · ' + fechaCorta(reto.fecha) + '\n' + cuadros + '\n' + resultado() + '\n' + URL_JUEGO;
  }

  // En el móvil abre el menú de compartir del sistema (WhatsApp, X, Bluesky…).
  // Donde no lo hay, o si falla, copia el texto.
  function compartir() {
    $('aviso-copia').textContent = '';
    if (navigator.share) {
      navigator.share({ text: textoCompartir() }).catch(function (e) {
        if (!e || e.name !== 'AbortError') copiar();
      });
    } else {
      copiar();
    }
  }

  // Rellena la carta corregida (y el aviso bajo la carta). abrir: 'ya', 'luego' (tras
  // un momento, para que se vea el sello del último gazapo) o nada (al cargar la página:
  // se abre después de la portada y de las instrucciones).
  function pintarFinal(abrir) {
    var c = cazados();
    var b = borrones();
    var titulo;
    var resumen;
    if (c >= TOTAL_GAZAPOS && b === 0) {
      titulo = 'Ojo de corrector';
      resumen = 'Tres gazapos y ni un borrón. La carta de ' + reto.anio + ' queda limpia.';
    } else if (c >= TOTAL_GAZAPOS) {
      titulo = 'Carta corregida';
      resumen = 'Has cazado los tres gazapos con ' + textoBorrones(b) + '.';
    } else {
      titulo = 'La carta se te escapa';
      resumen = (b > MAX_BORRONES ? 'Tres borrones y medio' : 'Tres borrones') + '. Has cazado ' + c + ' de ' + TOTAL_GAZAPOS +
        ' gazapos; los que faltaban quedan señalados en la carta.';
    }
    $('final-titulo').textContent = titulo;
    $('final-pagina-titulo').textContent = titulo;
    $('final-resumen').textContent = resumen;
    $('compartir-texto').textContent = textoCompartir();
    pintarSoluciones();
    $('final').hidden = false;

    if (abrir === 'ya') abrirFinal();
    else if (abrir === 'luego') {
      var reducido = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setTimeout(abrirFinal, reducido ? 300 : 1100);
    }

    if (window.almanaqueHecho) window.almanaqueHecho({ aciertos: c, total: TOTAL_GAZAPOS });
  }

  // Los tres gazapos, en orden de lectura, y las trampas en las que se cayó.
  function pintarSoluciones() {
    var lista = $('soluciones');
    lista.textContent = '';
    var gazapos = Object.keys(reto.gazapos).sort(function (a, b) { return (posDe(a) || 0) - (posDe(b) || 0); });
    var trampas = estado.intentos.filter(function (i) { return i.tipo === 'trampa' && reto.trampas[i.clave]; })
      .map(function (i) { return i.clave; });

    gazapos.concat(trampas).forEach(function (clave) {
      var esGazapo = !!reto.gazapos[clave];
      var dato = esGazapo ? reto.gazapos[clave] : reto.trampas[clave];
      var cazado = esGazapo && !!intentoDe(clave);
      var li = document.createElement('li');
      li.id = 'solucion-' + clave;
      li.className = 'solucion solucion--' + (esGazapo ? (cazado ? 'cazado' : 'escapado') : 'trampa');

      var cabeza = document.createElement('div');
      cabeza.className = 'solucion__cabeza';
      var muestra = document.createElement('span');
      muestra.className = 'palabra palabra--quieta ' + (esGazapo ? (cazado ? 'palabra--gazapo' : 'palabra--revelada') : 'palabra--trampa');
      muestra.textContent = textoPorClave[clave] || dato.termino;
      cabeza.appendChild(muestra);
      var detalle = esGazapo ? (cazado ? 'cazado' : 'se te escapó') : 'trampa';
      if (typeof dato.desde === 'number') {
        detalle += ' · ' + (esGazapo ? '' : 'ya en ') + textoAnio(dato) + (esGazapo ? ' (' + textoDistancia(dato) + ')' : '');
      }
      var linea = document.createElement('span');
      linea.className = 'solucion__detalle';
      linea.textContent = detalle;
      cabeza.appendChild(linea);
      li.appendChild(cabeza);
      li.appendChild(p(dato.explicacion, 'solucion__explicacion'));
      if (esGazapo && dato.epoca) li.appendChild(p(dato.epoca, 'solucion__epoca'));
      lista.appendChild(li);
    });
  }

  function abrirFinal() {
    var dialogo = $('final-dialogo');
    var instrucciones = $('instrucciones');
    if (dialogo.open || (instrucciones && instrucciones.open)) return;
    if (dialogo.showModal) dialogo.showModal();
    else dialogo.setAttribute('open', '');
    dialogo.scrollTop = 0;
    // La línea se dibuja con el diálogo abierto, que es cuando tiene ancho.
    pintarLineaTiempo(true);
    $('final-titulo').focus({ preventScroll: true });
  }

  function cerrarFinal() {
    var dialogo = $('final-dialogo');
    if (dialogo.close) dialogo.close();
    else dialogo.removeAttribute('open');
  }

  function prepararFinal() {
    var dialogo = $('final-dialogo');
    $('btn-ver-final').addEventListener('click', abrirFinal);
    $('btn-cerrar-final').addEventListener('click', cerrarFinal);
    $('btn-ver-carta').addEventListener('click', cerrarFinal);
    // El navegador devuelve el foco a donde estaba al abrir; después, se lleva al botón de volver a abrirla.
    dialogo.addEventListener('close', function () {
      setTimeout(function () { $('btn-ver-final').focus({ preventScroll: true }); }, 0);
    });
    // Cierre al tocar fuera de la hoja.
    dialogo.addEventListener('click', function (e) {
      if (e.target === dialogo) cerrarFinal();
    });
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

  /* ---------- Línea del tiempo (al terminar) ---------- */

  var ROMANOS = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI'];
  var FUENTE_LINEA = '"EB Garamond", Garamond, Georgia, serif';
  var NIVEL_ALTO = 58; // alto de cada fila de etiquetas
  var lineaAncho = 0;
  var medidor = null;

  function siglo(anio) {
    return ROMANOS[Math.floor((anio - 1) / 100) + 1];
  }

  function textoAnio(x) {
    return x.aprox ? 's. ' + siglo(x.desde) : String(x.desde);
  }

  // «+59 años»; si la fecha es solo un siglo, redondeada: «≈ +160 años».
  function textoDistancia(x) {
    var d = x.desde - reto.anio;
    if (d === 0) return 'el mismo año';
    var n = Math.abs(d);
    if (x.aprox) n = Math.max(10, Math.round(n / 10) * 10);
    return (x.aprox ? '≈ ' : '') + (d > 0 ? '+' : '−') + n + (n === 1 ? ' año' : ' años');
  }

  function anchoTexto(texto, fuente) {
    medidor = medidor || document.createElement('canvas').getContext('2d');
    medidor.font = fuente;
    return medidor.measureText(texto).width;
  }

  // La aparición que abre la nota: la marcada o, si no, la primera.
  function posDe(clave) {
    var intento = intentoDe(clave);
    if (intento && typeof intento.pos === 'number') return intento.pos;
    var primero = botonesPorClave[clave] && botonesPorClave[clave][0];
    return primero ? Number(primero.dataset.pos) : null;
  }

  // Los tres gazapos (cazados o no) y las trampas que tocó el jugador.
  function elementosLinea() {
    var lista = [];
    Object.keys(reto.gazapos).forEach(function (clave) {
      var g = reto.gazapos[clave];
      if (typeof g.desde !== 'number') return;
      lista.push({ clave: clave, tipo: 'gazapo', cazado: !!intentoDe(clave), desde: g.desde, aprox: !!g.aprox, palabra: textoPorClave[clave] || g.termino });
    });
    estado.intentos.forEach(function (i) {
      var t = reto.trampas[i.clave];
      if (i.tipo !== 'trampa' || !t || typeof t.desde !== 'number') return;
      lista.push({ clave: i.clave, tipo: 'trampa', desde: t.desde, aprox: !!t.aprox, palabra: textoPorClave[i.clave] || t.termino });
    });
    return lista.sort(function (a, b) { return a.desde - b.desde; });
  }

  function pasoRedondo(bruto) {
    var pasos = [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000];
    for (var i = 0; i < pasos.length; i++) if (pasos[i] >= bruto) return pasos[i];
    return 1000;
  }

  // Escala lineal entre el año más antiguo y el más moderno. Si un hueco de siglos
  // apretara los demás puntos, se corta («//») y cada tramo conserva su propia escala.
  function hacerEscala(anios, x0, x1) {
    var orden = anios.slice().sort(function (a, b) { return a - b; })
      .filter(function (a, i, l) { return i === 0 || a !== l[i - 1]; });
    var total = orden[orden.length - 1] - orden[0];
    var ancho = x1 - x0;
    var apretado = orden.some(function (a, i) { return i > 0 && (a - orden[i - 1]) / total * ancho < 30; });
    var grupos = [[orden[0]]];
    for (var i = 1; i < orden.length; i++) {
      var hueco = orden[i] - orden[i - 1];
      if (apretado && hueco > 0.35 * total && hueco >= 30) grupos.push([orden[i]]);
      else grupos[grupos.length - 1].push(orden[i]);
    }

    // Cada tramo, con un poco de margen y los extremos en años redondos.
    var tramos = grupos.map(function (g) {
      var a = g[0];
      var b = g[g.length - 1];
      var paso = pasoRedondo(Math.max(b - a, 1) / 3);
      var margen = Math.max(1, (b - a) * 0.06);
      return {
        a: Math.floor((a - margen) / paso) * paso,
        b: Math.ceil((b + margen) / paso) * paso,
        paso: paso,
        puntual: a === b,
      };
    });

    // Años por píxel: los tramos reparten el ancho, sin estirar unos pocos años
    // más allá de un máximo; lo que sobra va a los cortes (o a centrar la línea).
    var cortes = tramos.length - 1;
    var anchoCorte = 30;
    var suma = tramos.reduce(function (s, t) { return s + (t.b - t.a); }, 0);
    var k = Math.min((ancho - cortes * anchoCorte) / suma, ancho / 25);
    var sobra = ancho - cortes * anchoCorte - k * suma;
    var x = x0 + (cortes ? 0 : sobra / 2);
    var huecoCorte = cortes ? anchoCorte + sobra / cortes : 0;
    tramos.forEach(function (t, n) {
      t.xa = x;
      t.xb = x + k * (t.b - t.a);
      x = t.xb + huecoCorte;
      t.corteX = n < cortes ? t.xb + huecoCorte / 2 : null;
    });

    return {
      tramos: tramos,
      x: function (anio) {
        for (var j = 0; j < tramos.length; j++) {
          var t = tramos[j];
          if (anio >= t.a && anio <= t.b) return t.xa + (anio - t.a) * (t.xb - t.xa) / ((t.b - t.a) || 1);
        }
        return x0;
      },
    };
  }

  // Coloca las etiquetas en el menor número de filas sin que se pisen ni las atraviese
  // la guía de otra: cada guía sube en vertical desde su punto y cruza las filas de
  // debajo, así que esas filas no pueden ocupar su x. Si hace falta, la etiqueta se
  // aparta de su punto (como mucho, APARTE píxeles) y su guía se acoda.
  // reservado: tramos de la primera fila que no se pueden ocupar (la raya de la carta).
  var SEPARACION = 6; // entre etiquetas de una misma fila
  var HOLGURA_GUIA = 5; // entre una guía y una etiqueta ajena
  var APARTE = 24;

  function escalonar(etiquetas, ancho, reservado) {
    var colocadas = [];
    var pasos = 0;

    function bordes(e, centro) {
      return { izq: centro - e.ancho / 2, der: centro + e.ancho / 2 };
    }

    // Dónde llega la guía a la etiqueta, y el tramo que recorre acodada (o null).
    function llegada(e, centro) {
      var b = bordes(e, centro);
      return Math.min(Math.max(e.x, b.izq + 3), b.der - 3);
    }

    function tramoCodo(e, centro) {
      var l = llegada(e, centro);
      if (Math.abs(l - e.x) <= 0.5) return null;
      return l < e.x ? { izq: l - 2, der: e.x } : { izq: e.x, der: l + 2 };
    }

    // Una guía que sale del mismo punto comparte la recta: esa no cuenta.
    function dentro(x, tramo, origen) {
      return !!tramo && x > tramo.izq && x < tramo.der && Math.abs(x - origen) > 0.5;
    }

    // ¿Pasa la guía de e, a la altura de la fila nivel, lejos de las etiquetas de debajo?
    // (Y sin cortar el codo de ninguna guía de debajo.)
    function guiaLibre(e, nivel) {
      return colocadas.every(function (o) {
        if (o.nivel >= nivel) return true;
        var b = bordes(o, o.centro);
        return (e.x <= b.izq - HOLGURA_GUIA + 0.01 || e.x >= b.der + HOLGURA_GUIA - 0.01) && !dentro(e.x, tramoCodo(o, o.centro), o.x);
      });
    }

    function obstaculos(nivel) {
      var lista = nivel === 0 ? (reservado || []).map(function (r) {
        return { izq: r.izq - SEPARACION, der: r.der + SEPARACION };
      }) : [];
      colocadas.forEach(function (o) {
        if (o.nivel === nivel) {
          var b = bordes(o, o.centro);
          lista.push({ izq: b.izq - SEPARACION, der: b.der + SEPARACION });
        } else if (o.nivel > nivel) {
          lista.push({ izq: o.x - HOLGURA_GUIA, der: o.x + HOLGURA_GUIA });
        }
      });
      return lista;
    }

    // En la primera fila no hay sitio para acodar la guía: la etiqueta, sobre su punto.
    function cabe(e, nivel, centro, lista) {
      var b = bordes(e, centro);
      if (e.ancho <= ancho - 4 && (b.izq < 1.99 || b.der > ancho - 1.99)) return false;
      if (Math.max(b.izq + 3 - e.x, e.x - (b.der - 3), 0) > (nivel === 0 ? 0 : APARTE)) return false;
      if (!lista.every(function (o) { return b.der <= o.izq + 0.01 || b.izq >= o.der - 0.01; })) return false;
      // Que su codo no corte otra guía: ni las que suben más arriba ni las de su fila.
      var tramo = tramoCodo(e, centro);
      var l = llegada(e, centro);
      return colocadas.every(function (o) {
        if (o.nivel > nivel) return !dentro(o.x, tramo, e.x);
        if (o.nivel === nivel) return (e.x - o.x) * (l - llegada(o, o.centro)) >= 0;
        return true;
      });
    }

    // Los centros posibles en una fila: junto a su punto o pegados a un obstáculo,
    // primero los que dejan el punto bajo la etiqueta y, de ellos, los más cercanos.
    function centros(e, nivel) {
      var ideal = e.ancho > ancho - 4 ? ancho / 2 : Math.min(Math.max(e.x, e.ancho / 2 + 2), ancho - e.ancho / 2 - 2);
      var lista = obstaculos(nivel);
      var opciones = [ideal, e.ancho / 2 + 2, ancho - e.ancho / 2 - 2];
      lista.forEach(function (o) { opciones.push(o.izq - e.ancho / 2, o.der + e.ancho / 2); });
      // Junto a la guía de cualquier otra, por si acaba más arriba, y, cada pocos
      // píxeles, hacia los dos lados: deja hueco a las que aún faltan.
      etiquetas.forEach(function (o) {
        if (o !== e) opciones.push(o.x - HOLGURA_GUIA - e.ancho / 2, o.x + HOLGURA_GUIA + e.ancho / 2);
      });
      for (var d = 6; d <= e.ancho / 2 + APARTE; d += 6) opciones.push(ideal - d, ideal + d);
      return opciones.filter(function (c, i) {
        return opciones.indexOf(c) === i && cabe(e, nivel, c, lista);
      }).map(function (c) {
        var b = bordes(e, c);
        var encima = e.x >= b.izq + 3 && e.x <= b.der - 3;
        return { centro: c, coste: Math.abs(c - ideal) + (encima ? 0 : 1000) };
      }).sort(function (a, b) { return a.coste - b.coste; });
    }

    function colocar(grupo, i, filas) {
      if (i === grupo.length) return true;
      if (++pasos > 2000) return false;
      var e = grupo[i];
      for (var nivel = 0; nivel < filas; nivel++) {
        if (!guiaLibre(e, nivel)) continue;
        var opciones = centros(e, nivel);
        for (var k = 0; k < opciones.length; k++) {
          e.nivel = nivel;
          e.centro = opciones[k].centro;
          colocadas.push(e);
          if (colocar(grupo, i + 1, filas)) return true;
          colocadas.pop();
        }
      }
      return false;
    }

    // Las etiquetas lejanas no se estorban: cada grupo de cercanas se coloca por su
    // cuenta (así un grupo difícil no hace repetir las combinaciones de los demás).
    var grupos = [];
    etiquetas.forEach(function (e, n) {
      var previa = etiquetas[n - 1];
      var cerca = previa && e.x - previa.x < e.ancho + previa.ancho + 2 * APARTE + 2 * SEPARACION;
      if (cerca) grupos[grupos.length - 1].push(e);
      else grupos.push([e]);
    });

    var total = 1;
    grupos.forEach(function (grupo) {
      for (var filas = 1; filas <= grupo.length + 1; filas++) {
        pasos = 0;
        colocadas = [];
        if (colocar(grupo, 0, filas)) {
          total = Math.max(total, filas);
          return;
        }
      }
      // No debería pasar: cada etiqueta en su propia fila, sobre su punto.
      grupo.forEach(function (e, n) {
        e.nivel = n + 1;
        e.centro = Math.min(Math.max(e.x, e.ancho / 2 + 2), ancho - e.ancho / 2 - 2);
      });
      total = Math.max(total, grupo.length + 1);
    });
    return total;
  }

  function textoSvg(x, y, texto, clase, anchor) {
    var t = nodoSvg('text', { x: x.toFixed(1), y: y.toFixed(1), class: clase, 'text-anchor': anchor || 'middle' });
    t.textContent = texto;
    return t;
  }

  function resumenLinea(elementos) {
    var partes = ['La carta es de ' + reto.anio];
    elementos.forEach(function (e) {
      var d = e.desde - reto.anio;
      var cuando = d === 0 ? 'el mismo año' : (e.aprox ? 'unos ' : '') + textoDistancia(e).replace(/^≈ /, '').replace(/^[+−]/, '') + (d > 0 ? ' después' : ' antes');
      var anio = e.aprox ? 'siglo ' + siglo(e.desde) : e.desde;
      var que = e.tipo === 'trampa' ? 'trampa ' + e.palabra : e.palabra + (e.cazado ? ' (cazado)' : ' (se escapó)');
      partes.push(que + ', ' + anio + ', ' + cuando);
    });
    return partes.join('; ') + '.';
  }

  function pintarLineaTiempo(animar) {
    var caja = $('linea-tiempo');
    var ancho = caja.clientWidth;
    var elementos = elementosLinea();
    if (!ancho || !elementos.length) return;
    lineaAncho = ancho;

    var margen = 14;
    var escala = hacerEscala([reto.anio].concat(elementos.map(function (e) { return e.desde; })), margen, ancho - margen);

    // Etiquetas de gazapos y trampas, sobre la línea.
    var fPalabra = '500 15px ' + FUENTE_LINEA;
    var fAnio = '400 14px ' + FUENTE_LINEA;
    var fDistancia = 'italic 400 13px ' + FUENTE_LINEA;
    elementos.forEach(function (e) {
      e.x = escala.x(e.desde);
      e.lineas = [e.palabra, textoAnio(e)];
      if (e.tipo === 'gazapo') e.lineas.push(textoDistancia(e));
      e.ancho = Math.max(anchoTexto(e.lineas[0], fPalabra), anchoTexto(e.lineas[1], fAnio),
        e.lineas[2] ? anchoTexto(e.lineas[2], fDistancia) : 0) + 4;
    });
    var cartaX = escala.x(reto.anio);
    var niveles = escalonar(elementos, ancho, [{ izq: cartaX - 2, der: cartaX + 2 }]);
    var ejeY = 10 + niveles * NIVEL_ALTO + 14;
    var alto = ejeY + 72;

    var svg = nodoSvg('svg', { viewBox: '0 0 ' + ancho + ' ' + alto, width: ancho, height: alto, role: 'img', class: 'linea__svg' });
    svg.setAttribute('aria-label', resumenLinea(elementos));

    // El eje, tramo a tramo, con los cortes «//».
    escala.tramos.forEach(function (t) {
      svg.appendChild(nodoSvg('line', { x1: t.xa, y1: ejeY, x2: t.xb, y2: ejeY, class: 'linea__eje' }));
      if (t.corteX !== null) {
        [-4, 3].forEach(function (dx) {
          svg.appendChild(nodoSvg('line', { x1: t.corteX + dx - 3, y1: ejeY + 7, x2: t.corteX + dx + 3, y2: ejeY - 7, class: 'linea__barra' }));
        });
      }
    });

    // La carta: raya vertical, sello de lacre y su etiqueta, bajo la línea.
    var etiquetaCarta = 'La carta · ' + reto.anio;
    var anchoCarta = anchoTexto(etiquetaCarta, '500 15px ' + FUENTE_LINEA);
    var centroCarta = Math.min(Math.max(cartaX, anchoCarta / 2 + 2), ancho - anchoCarta / 2 - 2);
    var carta = nodoSvg('g', { class: 'linea__carta linea__aparece', style: 'animation-delay: 0s' });
    carta.appendChild(nodoSvg('line', { x1: cartaX, y1: ejeY - 16, x2: cartaX, y2: ejeY + 18, class: 'linea__raya' }));
    carta.appendChild(nodoSvg('circle', { cx: cartaX, cy: ejeY + 30, r: 10, class: 'linea__sello' }));
    carta.appendChild(nodoSvg('circle', { cx: cartaX, cy: ejeY + 30, r: 5.5, class: 'linea__sello-dentro' }));
    carta.appendChild(textoSvg(centroCarta, ejeY + 62, etiquetaCarta, 'linea__texto-carta'));
    svg.appendChild(carta);

    // Años redondos bajo la línea: los extremos y, si caben, alguno intermedio.
    // A su altura solo estorba el sello; la etiqueta de la carta va más abajo.
    var ocupado = [[cartaX - 14, cartaX + 14]];
    var marcas = [];
    escala.tramos.forEach(function (t) {
      if (t.puntual) return;
      marcas.push({ anio: t.a, lado: -1 }, { anio: t.b, lado: 1 });
      for (var a = t.a + t.paso; a < t.b; a += t.paso) marcas.push({ anio: a, lado: 0 });
    });
    marcas.forEach(function (m) {
      var x = escala.x(m.anio);
      var w = anchoTexto(String(m.anio), fAnio);
      svg.appendChild(nodoSvg('line', { x1: x, y1: ejeY - 4, x2: x, y2: ejeY + 4, class: 'linea__marca' }));
      // Centrado bajo su marca; en los extremos, si no cabe, hacia fuera.
      var opciones = [x - w / 2];
      if (m.lado < 0) opciones.push(x - w + 2);
      if (m.lado > 0) opciones.push(x - 2);
      for (var i = 0; i < opciones.length; i++) {
        var izq = Math.min(Math.max(0, opciones[i]), ancho - w);
        var der = izq + w;
        var choca = ocupado.some(function (o) { return der + 6 > o[0] && izq - 6 < o[1]; });
        if (choca) continue;
        ocupado.push([izq, der]);
        svg.appendChild(textoSvg((izq + der) / 2, ejeY + 21, String(m.anio), 'linea__texto-marca'));
        return;
      }
    });

    // Puntos, de izquierda a derecha, con su etiqueta encima. Las guías van en una
    // capa de fondo: si cruzan otra etiqueta, pasan por detrás de su texto.
    var guias = nodoSvg('g');
    svg.appendChild(guias);
    elementos.forEach(function (e, n) {
      var retraso = 'animation-delay: ' + (0.15 + n * 0.12).toFixed(2) + 's';
      var g = nodoSvg('g', { class: 'linea__punto linea__aparece linea__punto--' + e.tipo, 'data-clave': e.clave, style: retraso });
      var abajo = ejeY - 14 - e.nivel * NIVEL_ALTO;
      var lineaAlto = e.lineas.length === 3 ? 16 : 17;
      var arriba = abajo - (e.lineas.length - 1) * lineaAlto;
      if (e.nivel > 0 || Math.abs(e.centro - e.x) > 1) {
        // Si la etiqueta se ha apartado de su punto, la guía sube recta y se acoda al llegar.
        var llegada = Math.min(Math.max(e.x, e.centro - e.ancho / 2 + 3), e.centro + e.ancho / 2 - 3);
        var codo = Math.min(abajo + 7, ejeY - 8);
        var puntos = [[e.x, ejeY - 8]];
        if (Math.abs(llegada - e.x) > 0.5 && codo > abajo + 4 && codo < ejeY - 8.5) puntos.push([e.x, codo]);
        puntos.push([llegada, abajo + 4]);
        guias.appendChild(nodoSvg('polyline', {
          points: puntos.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' '),
          class: 'linea__guia linea__aparece',
          style: retraso,
        }));
      }
      g.appendChild(nodoSvg('circle', { cx: e.x, cy: ejeY, r: 16, class: 'linea__toque' }));
      var clase = e.tipo === 'trampa' ? 'linea__trampa' : (e.cazado ? 'linea__gazapo' : 'linea__gazapo linea__gazapo--escapado');
      g.appendChild(nodoSvg('circle', { cx: e.x, cy: ejeY, r: e.tipo === 'trampa' ? 4.5 : 6, class: clase }));
      g.appendChild(textoSvg(e.centro, arriba - 2, e.lineas[0], 'linea__texto-palabra'));
      g.appendChild(textoSvg(e.centro, arriba + lineaAlto - 1, e.lineas[1], 'linea__texto-anio'));
      if (e.lineas[2]) g.appendChild(textoSvg(e.centro, arriba + 2 * lineaAlto - 1, e.lineas[2], 'linea__texto-distancia'));
      svg.appendChild(g);
    });

    caja.textContent = '';
    caja.classList.toggle('linea--animada', !!animar);
    caja.appendChild(svg);
    caja.hidden = false;
  }

  // Al cambiar el ancho, la línea se vuelve a dibujar (sin animar).
  function recolocarLinea() {
    var caja = $('linea-tiempo');
    if (!$('final-dialogo').open || caja.clientWidth === lineaAncho) return;
    pintarLineaTiempo(false);
  }

  // Tocar un punto lleva a su solución, más abajo en la carta corregida, y la resalta.
  function prepararLinea() {
    $('linea-tiempo').addEventListener('click', function (e) {
      var punto = e.target.closest && e.target.closest('[data-clave]');
      var solucion = punto && $('solucion-' + punto.getAttribute('data-clave'));
      if (!solucion) return;
      Array.prototype.forEach.call(document.querySelectorAll('.solucion--resaltada'), function (s) {
        s.classList.remove('solucion--resaltada');
      });
      solucion.classList.add('solucion--resaltada');
      var reducido = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      solucion.scrollIntoView({ block: 'nearest', behavior: reducido ? 'auto' : 'smooth' });
    });
  }

  /* ---------- Jugada ---------- */

  function tocarPalabra(boton) {
    var clave = boton.dataset.clave;
    if (terminada()) {
      var intento = intentoDe(clave);
      if ((intento && intento.tipo !== 'fallo') || reto.gazapos[clave]) {
        mostrarNota(clave, Number(boton.dataset.pos), true);
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
    var pos = Number(tocado.dataset.pos);
    seleccion = null;
    seleccionBoton = null;
    estado.intentos.push({ clave: clave, pos: pos, tipo: tipo });
    guardarEstado();

    var fin = terminada();
    mostrarNota(clave, pos, !fin);
    marcarPalabras(pos);
    pintarMarcador(tipo === 'gazapo' ? 'gazapo' : 'borron');
    pintarBoton();
    if (fin) pintarFinal('luego');
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
    // Si tarda en pintarse (la primera visita), se queda al menos 1,4 s desde entonces.
    var pintado = window.performance && performance.getEntriesByName ? performance.getEntriesByName('first-contentful-paint')[0] : null;
    var desdePintado = pintado ? ahora - pintado.startTime : 0;
    setTimeout(function () {
      portada.classList.add('oculta');
      setTimeout(function () {
        portada.remove();
        despues();
      }, 500);
    }, Math.max(0, 1500 - ahora, 1400 - desdePintado));
  }

  function empezar() {
    $('fecha-reto').textContent = fechaLarga(reto.fecha);
    pintarCarta();
    cargarEstado();
    marcarPalabras();
    pintarMarcador();
    pintarBoton();

    $('carta').addEventListener('click', function (e) {
      var boton = e.target.closest && e.target.closest('button.palabra');
      if (boton) tocarPalabra(boton);
    });
    $('btn-marcar').addEventListener('click', confirmar);
    window.addEventListener('resize', recolocar);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        lineaAncho = 0; // las etiquetas de la línea se miden con la letra ya cargada
        recolocar();
      });
    }
    $('btn-compartir').addEventListener('click', compartir);
    prepararLupa();
    prepararLinea();
    prepararFinal();

    // Partida ya terminada: la carta corregida se abre tras la portada (y las
    // instrucciones, si tocan, que tienen preferencia).
    if (terminada()) pintarFinal();
    retirarPortada(function () {
      prepararInstrucciones();
      if (terminada()) abrirFinal();
    });
  }

  empezar();
})();
