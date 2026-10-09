/* Gazapo · retos.js
   Un reto por día. Para añadir días, copia un bloque y cambia la fecha de publicación.
   - fecha: día de publicación (AAAA-MM-DD, hora local del jugador).
   - anio: año en que se escribe el texto.
   - encabezado: lugar y fecha de la carta (no se puede tocar).
   - saludo, parrafos, despedida, firma: el texto de la carta. Todas sus palabras se pueden tocar.
   - gazapos y trampas: la clave es la palabra tal como aparece en el texto, en minúsculas.
     · gazapos: { termino, desde, explicacion, epoca } (epoca: lo que se habría escrito entonces).
     · trampas: { termino, desde, explicacion }.
     · desde: año (número) en que la palabra entra en el español o aparece la cosa; en las
       trampas, el año en que ya se documentaba. Sale en la línea del tiempo del final.
       Si solo se conoce el siglo, un año representativo y aprox: true (se muestra «s. XVIII»).
       Las fechas dudosas están apuntadas en REVISAR-FECHAS.md.
   Si un día no tiene reto, se juega el último publicado. */

window.GAZAPO_RETOS = [
  {
    fecha: '2026-10-08',
    anio: 1590,
    encabezado: 'En Sevilla, a 14 de mayo de 1590',
    saludo: 'Muy querido hermano:',
    parrafos: [
      'Llegó por fin la flota de Tierra Firme, y con ella el galeón de Martín de Arana, tan maltrecho por un huracán que le sorprendió cerca de La Habana que tardó dos semanas en pasar la barra de Sanlúcar. Traía cueros, cacao y tabaco, que aquí tiene cada día más gente que lo toma.',
      'Te escribo sentado en el sofá de nuestro primo Rodrigo, que me acoge mientras arreglan mi casa, y con una taza de café que me ha dado a probar un genovés recién llegado. Dicen los que vuelven de Indias que allá los naturales duermen en hamacas, cruzan los ríos en canoas y comen los tomates crudos con sal.',
      'De la Corte no sé más de lo que leí en el periódico que trajo el correo: que Su Majestad sigue en El Escorial y que las Cortes han concedido un nuevo servicio sobre el vino y la carne, que llaman de los millones. Guárdate de prestar dinero a quien no conozcas, y da muchos recuerdos a nuestra madre.',
    ],
    despedida: 'Tu hermano, que bien te quiere,',
    firma: 'Diego',
    gazapos: {
      'sofá': {
        termino: 'sofá',
        desde: 1750, aprox: true,
        explicacion: 'Viene del francés sofa, que a su vez la tomó del turco y del árabe. En español no se documenta hasta el siglo XVIII.',
        epoca: 'En 1590, Diego se habría sentado en un escaño o en el estrado de la casa.',
      },
      'café': {
        termino: 'café',
        desde: 1690, aprox: true,
        explicacion: 'La bebida no llega a Europa hasta el siglo XVII, y la palabra no aparece en español hasta finales de ese siglo.',
        epoca: 'Un genovés de 1590 quizá le habría ofrecido un vaso de aloja, agua con miel y especias.',
      },
      'periódico': {
        termino: 'periódico',
        desde: 1750, aprox: true,
        explicacion: 'Como nombre de la prensa es del siglo XVIII. La primera gaceta impresa en España, la de Madrid, no sale hasta 1661.',
        epoca: 'En 1590 las noticias llegaban en avisos y relaciones, muchas veces manuscritos.',
      },
    },
    trampas: {
      'huracán': { termino: 'huracán', desde: 1510, aprox: true, explicacion: 'Parece moderna, pero es una palabra taína que los cronistas de Indias ya usan a comienzos del siglo XVI.' },
      'cacao': { termino: 'cacao', desde: 1520, aprox: true, explicacion: 'Del náhuatl. Ya aparece en las crónicas de Indias en la primera mitad del siglo XVI.' },
      'tabaco': { termino: 'tabaco', desde: 1535, explicacion: 'Fernández de Oviedo ya lo describe en 1535. En la Sevilla de 1590 su consumo iba en aumento.' },
      'hamacas': { termino: 'hamaca', desde: 1492, explicacion: 'Palabra taína. Ya está en el diario de Colón, en 1492, que cuenta que los indios dormían en unas redes que llamaban hamacas.' },
      'canoas': { termino: 'canoa', desde: 1492, explicacion: 'Se tiene por la primera palabra americana del español: ya está en el diario de Colón, en 1492.' },
      'tomates': { termino: 'tomate', desde: 1532, explicacion: 'Del náhuatl tomatl. Se documenta en español hacia 1532.' },
      'millones': { termino: 'millones', desde: 1590, explicacion: 'Suena a cifra moderna, pero el «servicio de millones» fue un impuesto real que las Cortes aprobaron precisamente en 1590.' },
    },
  },

  {
    fecha: '2026-10-09',
    anio: 1812,
    encabezado: 'En Cádiz, a 20 de marzo de 1812',
    saludo: 'Querida prima:',
    parrafos: [
      'Ayer, día de San José, se publicó por fin la Constitución. Llovía a cántaros y soplaba un viento de mil demonios, pero no quedó gaditano en casa. Los liberales lo celebraron con repique de campanas y los serviles andan de morros. Las bombas de los franceses siguen cayendo desde el Trocadero, aunque ya nadie les hace caso: hasta se canta por las calles que con ellas se hacen las gaditanas tirabuzones.',
      'Tu hermano Antonio nos escribe desde la serranía de Ronda, donde anda con una guerrilla. Pide tabaco, medias de lana y una fotografía de la familia para llevarla consigo. Tu tía, que no quiere esperar al correo, se empeña en ponerle un telegrama.',
      'Por aquí todo es política. Unos dicen que el Gobierno mandará levantar un telégrafo hasta la Isla, como los de Francia; otros, que antes se acabará el sitio. Mañana iré en el tranvía a ver al médico que pone la vacuna, porque tu madre no me deja en paz con lo de las viruelas.',
    ],
    despedida: 'Recibe un abrazo de tu primo,',
    firma: 'Manuel',
    gazapos: {
      'fotografía': {
        termino: 'fotografía',
        desde: 1839,
        explicacion: 'La técnica se presenta en París en 1839, y la palabra nace ese mismo año. En 1812 aún faltaban casi tres décadas.',
        epoca: 'Antonio habría pedido un retrato en miniatura, pintado a mano.',
      },
      'telegrama': {
        termino: 'telegrama',
        desde: 1852,
        explicacion: 'Es el mensaje del telégrafo eléctrico, que no llega a España hasta mediados del siglo XIX. La palabra se forma en inglés en la década de 1850.',
        epoca: 'Con prisa, la tía le habría mandado una carta por un propio, un mensajero a caballo.',
      },
      'tranvía': {
        termino: 'tranvía',
        desde: 1871,
        explicacion: 'Viene del inglés tramway. El primer tranvía de España, de mulas, no circula hasta 1871, en Madrid.',
        epoca: 'En el Cádiz de 1812, Manuel habría ido en calesa.',
      },
    },
    trampas: {
      'liberales': { termino: 'liberal', desde: 1810, explicacion: 'Parece de otro siglo, pero el sentido político nace justo aquí, en las Cortes de Cádiz, hacia 1810. De Cádiz pasó a las demás lenguas de Europa.' },
      'serviles': { termino: 'servil', desde: 1811, explicacion: 'Así llamaban los liberales de Cádiz a los partidarios del absolutismo. El mote es de estos mismos años.' },
      'guerrilla': { termino: 'guerrilla', desde: 1808, explicacion: 'Las partidas que hostigaban a los franceses desde 1808 dieron fama a la palabra, que del español pasó al inglés y al francés.' },
      'telégrafo': { termino: 'telégrafo', desde: 1800, explicacion: 'No el eléctrico, sino el óptico: torres que se pasaban señales a la vista. Agustín de Betancourt montó uno entre Madrid y Aranjuez hacia 1800.' },
      'vacuna': { termino: 'vacuna', desde: 1800, explicacion: 'La vacuna de la viruela llega a España hacia 1800, y en 1803 la expedición de Balmis la lleva a América y Filipinas.' },
    },
  },

  {
    fecha: '2026-10-10',
    anio: 1888,
    encabezado: 'En Barcelona, a 21 de mayo de 1888',
    saludo: 'Querido Ramón:',
    parrafos: [
      'Ayer abrió por fin la Exposición Universal. Vino la Reina Regente, y por la noche encendieron con electricidad el parque de la Ciudadela, que parecía de día. Bajé en el tranvía hasta el Arco de Triunfo y me hice unas fotografías delante de la cascada, que te mandaré en cuanto me las den.',
      'Hay de todo: máquinas de vapor, telares que tejen solos y un teléfono para hablar de un pabellón a otro. Esta noche nos llevan al cine de la Rambla, y dicen que el domingo un francés cruzará el puerto en avión.',
      'Dile a tu mujer que le llevo unas medias de nailon de las que venden en el paseo de Gracia. Si pasa algo, ponme un telegrama a la fonda.',
    ],
    despedida: 'Un abrazo de tu amigo,',
    firma: 'Joaquín',
    gazapos: {
      'cine': {
        termino: 'cine',
        desde: 1895,
        explicacion: 'El cinematógrafo de los Lumière se estrena en 1895, y el acortamiento cine es ya del siglo XX.',
        epoca: 'En 1888 lo moderno era ir a ver un panorama o una función de linterna mágica.',
      },
      'avión': {
        termino: 'avión',
        desde: 1890,
        explicacion: 'La palabra la inventa el francés Clément Ader para su aparato de 1890, y en español no se generaliza hasta los primeros vuelos, ya en el siglo XX.',
        epoca: 'El francés de 1888 habría cruzado el puerto en globo.',
      },
      'nailon': {
        termino: 'nailon',
        desde: 1938,
        explicacion: 'Es una marca de la casa DuPont, que presenta la fibra en 1938. Las primeras medias de nailon se venden en 1939.',
        epoca: 'Joaquín le habría llevado unas medias de seda.',
      },
    },
    trampas: {
      'electricidad': { termino: 'electricidad', desde: 1646, explicacion: 'La palabra nace en el siglo XVII, y en el XVIII ya corría por toda Europa. Y la Exposición de 1888 se iluminó, en efecto, con luz eléctrica.' },
      'tranvía': { termino: 'tranvía', desde: 1872, explicacion: 'En 1812 era un gazapo; en 1888, no. Barcelona tenía tranvía de caballos desde 1872.' },
      'fotografías': { termino: 'fotografía', desde: 1839, explicacion: 'La palabra corre desde 1839, y en 1888 los estudios de fotografía abundaban en Barcelona.' },
      'teléfono': { termino: 'teléfono', desde: 1876, explicacion: 'En Barcelona se hicieron pruebas con el teléfono de Bell ya en 1877, un año después de su patente.' },
      'telegrama': { termino: 'telegrama', desde: 1852, explicacion: 'El telégrafo eléctrico llevaba más de treinta años funcionando en España, y la palabra era de uso corriente.' },
    },
  },

  {
    fecha: '2026-10-11',
    anio: 1605,
    encabezado: 'En Valladolid, a 12 de abril de 1605',
    saludo: 'Señora madre:',
    parrafos: [
      'Aquí no se habla de otra cosa que del príncipe que nos nació el Viernes Santo, y de las fiestas que se preparan para su bautizo. Hay luminarias cada noche, y los coches de los grandes no dejan pasar a nadie por la Corredera de San Pablo.',
      'En casa de don Álvaro leímos anoche en voz alta la novela de ese hidalgo manchego que se volvió loco de tanto leer libros de caballerías. Su autor vive aquí mismo, junto al Esgueva, y dicen que anda escaso de dineros. Doña Inés, que tocó el piano después de cenar, no paraba de reír, y a todos nos sirvieron chocolate.',
      'Don Álvaro asegura que en Flandes han hecho un telescopio con el que se ven las montañas de la Luna, y que en su casa de Medina piensa poner un pararrayos para que no se le vuelva a quemar el pajar. Yo no creo ni lo uno ni lo otro. Rece por mí, y mande recado si necesita algo.',
    ],
    despedida: 'Su hijo, que le besa las manos,',
    firma: 'Lorenzo',
    gazapos: {
      'piano': {
        termino: 'piano',
        desde: 1700,
        explicacion: 'Lo construye en Florencia Bartolomeo Cristofori hacia 1700.',
        epoca: 'En 1605, doña Inés habría tocado el clavicordio o la vihuela.',
      },
      'telescopio': {
        termino: 'telescopio',
        desde: 1611,
        explicacion: 'El anteojo de larga vista se presenta en Holanda en 1608, Galileo lo apunta a la Luna en 1609 y la palabra telescopio se acuña en 1611.',
        epoca: 'En 1605 nadie había visto aún las montañas de la Luna.',
      },
      'pararrayos': {
        termino: 'pararrayos',
        desde: 1752,
        explicacion: 'Lo inventa Benjamin Franklin hacia 1752.',
        epoca: 'En 1605, contra las tormentas se tocaban las campanas «a nublado».',
      },
    },
    trampas: {
      'coches': { termino: 'coche', desde: 1550, aprox: true, explicacion: 'Los coches de caballos se pusieron de moda en la Corte de Felipe II, y la palabra, de origen húngaro, ya corría a mediados del siglo XVI.' },
      'novela': { termino: 'novela', desde: 1550, aprox: true, explicacion: 'Del italiano novella. En español se usa desde el siglo XVI, y Cervantes llamará Novelas ejemplares a las suyas en 1613.' },
      'chocolate': { termino: 'chocolate', desde: 1590, explicacion: 'El padre José de Acosta ya lo describe en 1590, y a comienzos del siglo XVII su consumo se extendía deprisa por España.' },
    },
  },

  {
    fecha: '2026-10-12',
    anio: 1493,
    encabezado: 'En Barcelona, a 30 de abril de 1493',
    saludo: 'Muy honrado señor padre:',
    parrafos: [
      'Ha llegado a esta ciudad el almirante Cristóbal Colón, que volvió del poniente por la mar Océana, y los Reyes lo han recibido con grandes honras. Traía consigo seis indios, muchos papagayos, algo de oro y un ají que pica más que la pimienta.',
      'Él jura que ha llegado a las Indias por el camino de poniente; otros dicen que esas islas no son sino el principio de América, un mundo nuevo. Cuenta de unos caníbales que comen carne humana, y de una bebida que los naturales llaman chocolate. Hay quien dice que, navegando más allá, se hallará el mar Pacífico y luego la Especiería.',
      'Por lo demás, en la Corte siguen alabando la Gramática que maese Antonio de Nebrija dedicó a la Reina, y aquí mismo ya han dado a la imprenta la carta en que el almirante cuenta su viaje. Os mandaré una en cuanto pueda.',
    ],
    despedida: 'Vuestro hijo, que vuestras manos besa,',
    firma: 'Joan',
    gazapos: {
      'américa': {
        termino: 'América',
        desde: 1507,
        explicacion: 'El nombre lo propone el cartógrafo Martin Waldseemüller en 1507, en honor de Américo Vespucio.',
        epoca: 'En 1493 se hablaba de «las Indias» o de las islas halladas en la mar Océana.',
      },
      'chocolate': {
        termino: 'chocolate',
        desde: 1590,
        explicacion: 'Colón no topa con el cacao hasta su cuarto viaje, en 1502, y la palabra chocolate no aparece en español hasta finales del siglo XVI.',
        epoca: 'En 1493 nadie en Europa había oído hablar de esa bebida.',
      },
      'pacífico': {
        termino: 'Pacífico',
        desde: 1520,
        explicacion: 'Se lo pone Magallanes en 1520, al salir a él tras cruzar el estrecho. Núñez de Balboa lo había visto en 1513 y lo llamó mar del Sur.',
        epoca: 'En 1493 nadie sabía que existiera ese océano.',
      },
    },
    trampas: {
      'ají': { termino: 'ají', desde: 1493, explicacion: 'Palabra taína que Colón ya recoge en su diario en enero de 1493: «ají, que es su pimienta».' },
      'caníbales': { termino: 'caníbal', desde: 1492, explicacion: 'Nace precisamente con Colón, que en su diario llama así a los caribes que, según le contaban, comían hombres.' },
      'gramática': { termino: 'gramática', desde: 1492, explicacion: 'La Gramática de la lengua castellana de Nebrija se publicó en Salamanca en agosto de 1492.' },
      'imprenta': { termino: 'imprenta', desde: 1475, explicacion: 'En Barcelona se imprimía desde la década de 1470, y la carta de Colón salió de una prensa barcelonesa en abril de 1493.' },
    },
  },

  {
    fecha: '2026-10-13',
    anio: 1755,
    encabezado: 'En Cádiz, a 4 de noviembre de 1755',
    saludo: 'Querido Francisco:',
    parrafos: [
      'El día de Todos los Santos, a media mañana, tembló la tierra como nadie recuerda. Se pararon los relojes y se movieron las lámparas de la catedral como si fueran de papel. Al poco el mar se retiró de la Caleta y volvió en un tsunami de olas como montes, que pasaron por encima de la muralla. Muchos que salieron huyendo por el camino de la Isla se ahogaron.',
      'Dicen los marinos ingleses que el epicentro estuvo en el mar, frente a Portugal, y que Lisboa ha quedado arruinada. En casa del cónsul tienen un barómetro y un termómetro, y ninguno de los dos avisó de nada.',
      'Ahora todos hablan de traer de Francia un sismógrafo para estar prevenidos. Yo me conformo con tomar café con los amigos y dar gracias a Dios de seguir vivo. Dale un abrazo a tu mujer de mi parte.',
    ],
    despedida: 'Tuyo siempre,',
    firma: 'Bernardo',
    gazapos: {
      'tsunami': {
        termino: 'tsunami',
        desde: 1950, aprox: true,
        explicacion: 'Es palabra japonesa. En español se empieza a usar en el siglo XX y no se hace común hasta el maremoto del océano Índico, en 2004.',
        epoca: 'Los gaditanos de 1755 hablaron de «la inundación» o de «la salida del mar».',
      },
      'epicentro': {
        termino: 'epicentro',
        desde: 1860, aprox: true,
        explicacion: 'La acuñan los estudiosos de los terremotos en la segunda mitad del siglo XIX.',
        epoca: 'En 1755 se sabía, como mucho, que el temblor «venía del mar».',
      },
      'sismógrafo': {
        termino: 'sismógrafo',
        desde: 1880, aprox: true,
        explicacion: 'Los primeros aparatos capaces de registrar un terremoto son de finales del siglo XIX.',
        epoca: 'En 1755 no había aparato que midiera un temblor: se contaba cuánto había durado y qué había derribado.',
      },
    },
    trampas: {
      'barómetro': { termino: 'barómetro', desde: 1643, explicacion: 'Lo inventa Torricelli en 1643, y en el siglo XVIII era un instrumento corriente en casa de los curiosos.' },
      'termómetro': { termino: 'termómetro', desde: 1610, aprox: true, explicacion: 'Los primeros son de comienzos del siglo XVII, y en 1755 ya había termómetros de mercurio, como los de Fahrenheit.' },
      'café': { termino: 'café', desde: 1690, aprox: true, explicacion: 'En 1755 se tomaba ya en toda Europa, y en España empezaba a ponerse de moda.' },
    },
  },

  {
    fecha: '2026-10-14',
    anio: 1783,
    encabezado: 'En París, a 2 de diciembre de 1783',
    saludo: 'Mi querido don Tomás:',
    parrafos: [
      'Ayer vi con mis propios ojos subir a los cielos a dos hombres. Fue en el jardín de las Tullerías, delante de una multitud como no se ha visto otra en París. El globo, de seda barnizada, medía más de ocho metros de ancho, y lo llenaron con un gas que llaman aire inflamable, que sacan echando vitriolo sobre limaduras de hierro.',
      'El señor Charles y su compañero volaron más de dos horas y fueron a bajar a nueve leguas de aquí. Dicen que el doctor Franklin, el del pararrayos, lo miraba todo desde su coche.',
      'Al salir lo celebramos en un café del Palais-Royal. Los más exaltados hablaban ya de hacer dirigibles para ir de París a Madrid en un día, y de reformar la justicia con una máquina, la guillotina, que corte la cabeza sin hacer sufrir al reo. Le escribiré más largo cuando vuelva.',
    ],
    despedida: 'Su afectísimo servidor,',
    firma: 'Ignacio',
    gazapos: {
      'metros': {
        termino: 'metro',
        desde: 1793,
        explicacion: 'El metro lo define la Francia revolucionaria en la década de 1790.',
        epoca: 'Un español de 1783 habría medido el globo en pies o en varas.',
      },
      'dirigibles': {
        termino: 'dirigible',
        desde: 1852,
        explicacion: 'El primer globo que de verdad se gobierna es el de Henri Giffard, en 1852, y el nombre de dirigible se generaliza después.',
        epoca: 'En 1783 solo se hablaba de globos o de máquinas aerostáticas.',
      },
      'guillotina': {
        termino: 'guillotina',
        desde: 1792,
        explicacion: 'El doctor Guillotin propone una máquina así en 1789, y la primera ejecución con ella es de 1792. El nombre viene de su apellido.',
        epoca: 'En la Francia de 1783 se ajusticiaba en la horca o en la rueda, y a los nobles, con el hacha o la espada.',
      },
    },
    trampas: {
      'gas': { termino: 'gas', desde: 1650, aprox: true, explicacion: 'La inventa a partir del griego caos el químico flamenco Van Helmont, a mediados del siglo XVII.' },
      'pararrayos': { termino: 'pararrayos', desde: 1752, explicacion: 'En 1605 era un gazapo; en 1783, no. Franklin lo había inventado treinta años antes, y ya se ponían en los edificios de Francia.' },
      'café': { termino: 'café', desde: 1686, explicacion: 'En París había cafés desde finales del siglo XVII: el Procope abrió en 1686.' },
    },
  },

  {
    fecha: '2026-10-15',
    anio: 1254,
    encabezado: 'En Toledo, a 20 de junio de 1254',
    saludo: 'Hermano Pedro:',
    parrafos: [
      'Te escribo desde la casa de maestre Yehudá, uno de los sabios que el rey don Alfonso ha juntado para traducir los libros de los árabes. Trabajamos en papel de Játiva, que es más barato que el pergamino, y por las tardes jugamos al ajedrez, que aquí es costumbre muy honrada.',
      'Han llegado nuevas de Salamanca: el rey ha dado su carta a la universidad, y quiere que haya allí maestros de leyes, de medicina y hasta de música.',
      'Yo ando cansado de la vista, y maestre Yehudá me ha prestado unos anteojos para leer la letra menuda. Dice que algún día habrá una imprenta que haga en una semana los libros que a nosotros nos llevan un año. Por las noches los criados juegan a los naipes en el zaguán y no nos dejan dormir. Saluda a nuestro padre.',
    ],
    despedida: 'Tu hermano,',
    firma: 'Martín',
    gazapos: {
      'anteojos': {
        termino: 'anteojos',
        desde: 1286,
        explicacion: 'Las primeras lentes para leer aparecen en Italia hacia 1286.',
        epoca: 'Martín se habría ayudado de una piedra de lectura, un cristal que se apoyaba sobre el libro.',
      },
      'imprenta': {
        termino: 'imprenta',
        desde: 1450,
        explicacion: 'Gutenberg imprime con tipos móviles hacia 1450, y a España la imprenta no llega hasta la década de 1470.',
        epoca: 'En 1254 los libros se copiaban a mano, uno a uno.',
      },
      'naipes': {
        termino: 'naipes',
        desde: 1370, aprox: true,
        explicacion: 'Las cartas de jugar no se conocen en Europa hasta la segunda mitad del siglo XIV.',
        epoca: 'Los criados de 1254 habrían jugado a los dados o a las tablas.',
      },
    },
    trampas: {
      'papel': { termino: 'papel', desde: 1150, aprox: true, explicacion: 'En Játiva se fabricaba papel desde hacía más de un siglo, en uno de los primeros molinos de Europa.' },
      'ajedrez': { termino: 'ajedrez', desde: 1000, aprox: true, explicacion: 'Lo trajeron los árabes, y en la península se jugaba ya hacia el año 1000. Alfonso X le dedicará un libro en 1283.' },
      'universidad': { termino: 'universidad', desde: 1218, explicacion: 'La de Salamanca nace hacia 1218, y en 1254 Alfonso X le da su carta, con las primeras cátedras.' },
    },
  },

  {
    fecha: '2026-10-16',
    anio: 1848,
    encabezado: 'En Mataró, a 30 de octubre de 1848',
    saludo: 'Querida Mercè:',
    parrafos: [
      'Anteayer se inauguró por fin el ferrocarril de Barcelona a Mataró, el primero de la Península. Salimos de Barcelona tirados por una locomotora inglesa que echaba vapor como una olla, y en menos de una hora estábamos aquí, cuando la diligencia tarda media mañana.',
      'Al pasar por el túnel de Montgat las señoras chillaban. Los obreros que lo hicieron cuentan que tuvieron que abrir la roca con dinamita. En la estación de Mataró esperaba un señor con un daguerrotipo para retratar a los viajeros, pero nadie quiso estarse quieto.',
      'Pobre señor Biada, que tanto luchó por este tren y no ha llegado a verlo. Te mando esta carta con sello, para que no tengas que pagar tú el porte. Mi cuñado dice que, con el tren, ya nadie querrá caballos, y que sus hijos irán a la escuela en bicicleta.',
    ],
    despedida: 'Un abrazo muy fuerte de tu hermana,',
    firma: 'Montserrat',
    gazapos: {
      'dinamita': {
        termino: 'dinamita',
        desde: 1867,
        explicacion: 'Alfred Nobel la patenta en 1867.',
        epoca: 'El túnel de Montgat se abrió con pólvora, pico y barrena.',
      },
      'sello': {
        termino: 'sello',
        desde: 1850,
        explicacion: 'España no tiene sellos de correos hasta el 1 de enero de 1850.',
        epoca: 'En 1848 el porte de la carta lo pagaba, por lo general, quien la recibía.',
      },
      'bicicleta': {
        termino: 'bicicleta',
        desde: 1869,
        explicacion: 'Los primeros velocípedos con pedales son de la década de 1860, y la palabra bicicleta no aparece hasta finales de esa década.',
        epoca: 'En 1848 los niños iban a la escuela a pie, o como mucho en un borrico.',
      },
    },
    trampas: {
      'ferrocarril': { termino: 'ferrocarril', desde: 1837, explicacion: 'La palabra ya corría en los proyectos de los años treinta. En Cuba, entonces española, había ferrocarril desde 1837.' },
      'locomotora': { termino: 'locomotora', desde: 1830, explicacion: 'Llegó con las primeras máquinas de vapor sobre raíles, en la década de 1830. Las del Barcelona-Mataró se hicieron en Inglaterra.' },
      'daguerrotipo': { termino: 'daguerrotipo', desde: 1839, explicacion: 'El invento de Daguerre se presentó en 1839, y ese mismo año ya se hizo uno en Barcelona.' },
    },
  },

  {
    fecha: '2026-10-17',
    anio: 1900,
    encabezado: 'En París, a 25 de julio de 1900',
    saludo: 'Querido tío:',
    parrafos: [
      'La Exposición es tan grande que no hay forma de verla en una semana. Ayer subimos a la noria gigante, vimos el cinematógrafo en una pantalla enorme y probamos la acera que anda sola. Para ir de un sitio a otro tomamos el metro, que lo acaban de abrir y va por debajo de la tierra.',
      'A la vuelta, en el hotel, la orquesta tocaba jazz, y yo, con un dolor de cabeza terrible, me tomé una aspirina. Mañana vamos a ver los Juegos Olímpicos, que este año se celebran aquí, repartidos por la Exposición.',
      'Por la radio dicen que hará calor toda la semana. Para Pepito he comprado un tebeo francés con muchos dibujos, aunque no sé si lo entenderá. Dele recuerdos a la tía.',
    ],
    despedida: 'Su sobrino que le quiere,',
    firma: 'Luis',
    gazapos: {
      'jazz': {
        termino: 'jazz',
        desde: 1913,
        explicacion: 'La palabra aparece en Estados Unidos hacia 1913, y la música no llega a Europa hasta el final de la Primera Guerra Mundial.',
        epoca: 'La orquesta de un hotel de 1900 habría tocado valses y polcas.',
      },
      'radio': {
        termino: 'radio',
        desde: 1924,
        explicacion: 'Marconi ya hacía pruebas de telegrafía sin hilos, pero las emisoras para el público no llegan hasta los años veinte. En España, Radio Barcelona empieza en 1924.',
        epoca: 'En 1900, el tiempo que iba a hacer se leía en el periódico.',
      },
      'tebeo': {
        termino: 'tebeo',
        desde: 1917,
        explicacion: 'Viene de TBO, la revista infantil que nace en Barcelona en 1917.',
        epoca: 'Luis le habría comprado a Pepito un pliego de aleluyas o una revista ilustrada.',
      },
    },
    trampas: {
      'cinematógrafo': { termino: 'cinematógrafo', desde: 1895, explicacion: 'Los Lumière lo estrenaron en 1895, y en la Exposición de 1900 proyectaron películas en una pantalla gigante.' },
      'metro': { termino: 'metro', desde: 1900, explicacion: 'La primera línea del metro de París se inauguró el 19 de julio de 1900, en plena Exposición.' },
      'aspirina': { termino: 'aspirina', desde: 1899, explicacion: 'La casa Bayer la registra en 1899, y enseguida se vende en las farmacias de media Europa.' },
      'olímpicos': { termino: 'olímpicos', desde: 1896, explicacion: 'Los segundos Juegos Olímpicos modernos se celebraron en París en 1900, repartidos a lo largo de la Exposición.' },
    },
  },

  {
    fecha: '2026-10-18',
    anio: 1571,
    encabezado: 'En Mesina, a 12 de noviembre de 1571',
    saludo: 'Señor padre:',
    parrafos: [
      'Ya sabrá vuestra merced por los avisos que el 7 de octubre, en el golfo de Lepanto, la armada de la Santa Liga desbarató a la del Turco. Delante de nuestra línea iban las galeazas de los venecianos, que con su artillería deshicieron a los turcos antes del abordaje, y luego mi compañía hizo lo suyo con los mosquetes.',
      'Saqué del combate un arcabuzazo en el muslo, y me trajeron a Mesina en ambulancia con los demás heridos. Aquí, en el hospital, un soldado de Alcalá que perdió el uso de la mano izquierda nos entretiene contando historias.',
      'Dicen que se va a dar a cada soldado un uniforme nuevo, del mismo color para todos, y que a los de mi compañía nos cambiarán las picas por bayonetas. Rece por mí, que ya estoy casi bueno.',
    ],
    despedida: 'De vuestra merced hijo obediente,',
    firma: 'Gaspar',
    gazapos: {
      'ambulancia': {
        termino: 'ambulancia',
        desde: 1792,
        explicacion: 'Las ambulancias, hospitales que seguían a los ejércitos, las organiza en Francia el cirujano Larrey en la década de 1790, y la palabra llega al español en el siglo XIX.',
        epoca: 'A Gaspar lo habrían traído en la misma galera, entre los heridos.',
      },
      'uniforme': {
        termino: 'uniforme',
        desde: 1690, aprox: true,
        explicacion: 'Los soldados de los tercios vestían cada uno a su costa. Los uniformes no se generalizan hasta finales del siglo XVII.',
        epoca: 'En 1571, a los soldados del rey de España los distinguía, como mucho, una banda roja.',
      },
      'bayonetas': {
        termino: 'bayoneta',
        desde: 1650, aprox: true,
        explicacion: 'Toma el nombre de Bayona, en Francia, y se difunde en el siglo XVII.',
        epoca: 'En 1571 el soldado llevaba pica o arcabuz, y nunca las dos cosas en una.',
      },
    },
    trampas: {
      'galeazas': { termino: 'galeaza', desde: 1550, aprox: true, explicacion: 'Eran galeras enormes, con cañones por todos lados. Venecia llevó seis a Lepanto, y fueron decisivas.' },
      'artillería': { termino: 'artillería', desde: 1450, aprox: true, explicacion: 'Las galeras llevaban cañones a proa desde el siglo XV, y la palabra es aún más antigua.' },
      'mosquetes': { termino: 'mosquete', desde: 1567, explicacion: 'El duque de Alba los generaliza en los tercios de Flandes en 1567, y en Lepanto ya los había.' },
    },
  },

  {
    fecha: '2026-10-19',
    anio: 1969,
    encabezado: 'En Madrid, a 21 de julio de 1969',
    saludo: 'Querida Marisa:',
    parrafos: [
      'No he pegado ojo. Pasadas las tres y media de la madrugada, toda la familia, con los vecinos del cuarto, estábamos delante de la televisión viendo a los astronautas pisar la Luna. La imagen se veía fatal, pero tu tío lloraba como un niño.',
      'Hoy en la oficina no se habla de otra cosa. El portero lo ha seguido todo con el transistor pegado a la oreja, y mi jefe dice que dentro de nada iremos de vacaciones a la Luna como ahora vamos a Benidorm en el seiscientos.',
      'A ver si este verano te animas a venir, que en Benidorm todas las chicas llevan ya biquini. El apartamento sale por cuatrocientos euros la quincena, que no está mal. Mira los horarios del tren en internet y llámame al móvil cuando sepas las fechas.',
    ],
    despedida: 'Besos,',
    firma: 'Carmen',
    gazapos: {
      'euros': {
        termino: 'euro',
        desde: 1999,
        explicacion: 'El euro se adopta en 1999, y sus billetes y monedas circulan desde 2002.',
        epoca: 'En 1969 el apartamento se habría pagado en pesetas.',
      },
      'internet': {
        termino: 'internet',
        desde: 1974,
        explicacion: 'En octubre de 1969 empieza a funcionar ARPANET, pero la palabra internet no se usa hasta los años setenta, y la red no llega a las casas españolas hasta los noventa.',
        epoca: 'En 1969 los horarios del tren se miraban en la estación o en el periódico.',
      },
      'móvil': {
        termino: 'móvil',
        desde: 1983,
        explicacion: 'Los primeros teléfonos móviles comerciales son de los años ochenta, y en España no se popularizan hasta mediados de los noventa.',
        epoca: 'En 1969, Carmen habría dicho: «Llámame a casa, o pon una conferencia».',
      },
    },
    trampas: {
      'astronautas': { termino: 'astronauta', desde: 1928, explicacion: 'La palabra es anterior a la carrera espacial, y en 1969 estaba en todos los periódicos.' },
      'transistor': { termino: 'transistor', desde: 1947, explicacion: 'Se inventa en 1947, y en los sesenta las radios de transistores, los «transistores», estaban en todas partes.' },
      'seiscientos': { termino: 'seiscientos', desde: 1957, explicacion: 'El SEAT 600 salió de la fábrica de Barcelona en 1957.' },
      'biquini': { termino: 'biquini', desde: 1946, explicacion: 'Lo presenta en París Louis Réard en 1946. En Benidorm se permitió en los años cincuenta.' },
    },
  },

  {
    fecha: '2026-10-20',
    anio: 1348,
    encabezado: 'En Valencia, a 2 de junio de 1348',
    saludo: 'Muy amado hermano:',
    parrafos: [
      'Ha entrado la mortandad en la ciudad. Dicen que vino por mar desde Mallorca, y que en Barcelona ya muere gente cada día. Los médicos no saben qué hacer: unos mandan sangrías, otros jarabes de hierbas, y ninguno acierta.',
      'Maestre Bernat, el físico, dice que el mal lo traen unos microbios que viajan en el aire podrido, y ha pedido a los jurados que todo el que llegue por mar pase una cuarentena fuera de las murallas. A los enfermos les pone un termómetro bajo el brazo, y a los que arden de fiebre los manda aislar.',
      'Nosotros nos hemos ido a la alquería, entre los arrozales, y vivimos de lo que da la huerta. Te mando un poco de azúcar, que dicen que es buena para el ánimo. Que Dios nos guarde a todos.',
    ],
    despedida: 'Tu hermano que te quiere,',
    firma: 'Jaume',
    gazapos: {
      'microbios': {
        termino: 'microbio',
        desde: 1878,
        explicacion: 'La palabra la propone Charles Sédillot en 1878, cuando Pasteur demuestra que los gérmenes causan enfermedades.',
        epoca: 'En 1348 se culpaba a los aires corruptos, a los astros o a la ira de Dios.',
      },
      'cuarentena': {
        termino: 'cuarentena',
        desde: 1377,
        explicacion: 'El aislamiento de los que llegan por mar se ordena por primera vez en Ragusa, en 1377, y entonces era de treinta días. Los cuarenta, y el nombre, vienen después.',
        epoca: 'En 1348 se cerraban las puertas de la ciudad, y poco más.',
      },
      'termómetro': {
        termino: 'termómetro',
        desde: 1610, aprox: true,
        explicacion: 'Los primeros son de comienzos del siglo XVII, y hasta el XIX no se usan para tomar la fiebre.',
        epoca: 'Un físico de 1348 tocaba la frente y el pulso del enfermo.',
      },
    },
    trampas: {
      'sangrías': { termino: 'sangría', desde: 1250, aprox: true, explicacion: 'Nada que ver con la bebida: sacar sangre al enfermo era el remedio favorito de los médicos medievales.' },
      'jarabes': { termino: 'jarabe', desde: 1250, aprox: true, explicacion: 'Del árabe. Los médicos medievales ya recetaban jarabes, y la palabra está en castellano desde la Edad Media.' },
      'arrozales': { termino: 'arrozal', desde: 950, aprox: true, explicacion: 'El arroz lo cultivaban en Valencia los andalusíes siglos antes, y la palabra viene del árabe.' },
      'azúcar': { termino: 'azúcar', desde: 950, aprox: true, explicacion: 'Palabra árabe. La caña de azúcar se cultivaba en la costa mediterránea de la península desde época andalusí.' },
    },
  },

  {
    fecha: '2026-10-21',
    anio: 1519,
    encabezado: 'En Sevilla, a 9 de agosto de 1519',
    saludo: 'Señora tía:',
    parrafos: [
      'Mañana salen del muelle de las Mulas las cinco naos del capitán Hernando de Magallanes, y yo voy en ellas de grumete. Bajaremos el río hasta Sanlúcar y de allí, con el favor de Dios, iremos por la costa del Brasil a buscar un paso hacia la Especiería.',
      'El capitán es portugués y los castellanos no le tienen ley, pero sabe de mar más que nadie. Los oficiales de la Casa de la Contratación lo han revisado todo, y él lleva consigo astrolabios, cuadrantes, un sextante nuevo y un cronómetro para saber la longitud.',
      'Dicen que, si hallamos el paso, llegaremos a unas islas que llaman Filipinas, donde hay más clavo y canela que en toda la cristiandad. Rece por mí, y guárdeme el sitio junto al fuego para cuando vuelva.',
    ],
    despedida: 'Su sobrino,',
    firma: 'Juanillo',
    gazapos: {
      'sextante': {
        termino: 'sextante',
        desde: 1757,
        explicacion: 'Se inventa a mediados del siglo XVIII.',
        epoca: 'Para medir la altura del sol, los pilotos de 1519 usaban el astrolabio y el cuadrante.',
      },
      'cronómetro': {
        termino: 'cronómetro',
        desde: 1761,
        explicacion: 'El reloj de marina que permitió calcular la longitud lo construye John Harrison en el siglo XVIII.',
        epoca: 'Magallanes llevaba ampolletas, relojes de arena.',
      },
      'filipinas': {
        termino: 'Filipinas',
        desde: 1543,
        explicacion: 'Las islas reciben ese nombre en 1543, en honor del príncipe Felipe, el futuro Felipe II, que en 1519 aún no había nacido.',
        epoca: 'Magallanes buscaba las Molucas, las islas de la Especiería.',
      },
    },
    trampas: {
      'brasil': { termino: 'Brasil', desde: 1505, aprox: true, explicacion: 'La tierra del palo brasil ya se llamaba así a comienzos del siglo XVI, y Magallanes recaló allí en diciembre de 1519.' },
      'contratación': { termino: 'Casa de la Contratación', desde: 1503, explicacion: 'Se fundó en Sevilla en 1503 para gobernar el comercio con las Indias.' },
    },
  },

  {
    fecha: '2026-10-22',
    anio: 1810,
    encabezado: 'En Buenos Aires, a 28 de mayo de 1810',
    saludo: 'Querido compadre:',
    parrafos: [
      'El viernes 25 el Cabildo aceptó por fin la junta que pedía el pueblo, y el virrey Cisneros se quedó sin mando. Yo estuve en la plaza de la Victoria con mis primos. Ahora preside Saavedra, y Moreno es el secretario.',
      'Por la noche hubo fiesta en todas las casas: se bailaba el tango y se cebaba mate hasta la madrugada. Los gauchos que bajaron de la campaña no entendían nada, pero gritaban más que nadie.',
      'Mañana iré a ver a mi hermano en colectivo, y el domingo tengo partido de fútbol con los muchachos del barrio. Ya te contaré qué dice de todo esto el periódico de Belgrano.',
    ],
    despedida: 'Tu compadre,',
    firma: 'Anselmo',
    gazapos: {
      'tango': {
        termino: 'tango',
        desde: 1880, aprox: true,
        explicacion: 'El tango nace en el Río de la Plata a finales del siglo XIX.',
        epoca: 'En 1810 se bailaban el minué, la contradanza y el cielito.',
      },
      'colectivo': {
        termino: 'colectivo',
        desde: 1928,
        explicacion: 'Así llaman en Argentina al autobús desde que, en 1928, unos taxistas empezaron a llevar pasajeros a precio fijo.',
        epoca: 'En 1810 Anselmo habría ido a caballo o en carreta.',
      },
      'fútbol': {
        termino: 'fútbol',
        desde: 1863,
        explicacion: 'Se reglamenta en Inglaterra en 1863, y los ingleses de Buenos Aires juegan el primer partido en 1867.',
        epoca: 'Un domingo de 1810 se jugaba al pato o a la taba.',
      },
    },
    trampas: {
      'mate': { termino: 'mate', desde: 1650, aprox: true, explicacion: 'Los jesuitas ya cultivaban la yerba en sus misiones en el siglo XVII.' },
      'gauchos': { termino: 'gaucho', desde: 1780, aprox: true, explicacion: 'La palabra ya corría en el Río de la Plata a finales del siglo XVIII.' },
      'periódico': { termino: 'periódico', desde: 1750, aprox: true, explicacion: 'Belgrano sacaba en Buenos Aires el Correo de Comercio desde marzo de 1810.' },
    },
  },

  {
    fecha: '2026-10-23',
    anio: 1929,
    encabezado: 'En Sevilla, a 12 de mayo de 1929',
    saludo: 'Querido Julio:',
    parrafos: [
      'El jueves inauguró el Rey la Exposición Iberoamericana, y la plaza de España, con sus bancos de azulejos de todas las provincias, es lo más bonito que he visto. Por la noche hay orquestas de jazz en los pabellones y la gente baila hasta las tantas. Mi primo, que es aviador, dice que el autogiro de La Cierva es el invento del siglo.',
      'Yo sigo convaleciente: me curaron la infección con penicilina, pero aún me canso enseguida. Te escribo con el bolígrafo que me regalaste, que no mancha nada.',
      'El mes que viene, si estoy bueno, me compro un Seat de segunda mano y voy a verte a Huelva. Escucha la radio el domingo, que dan la corrida de la Maestranza.',
    ],
    despedida: 'Un abrazo,',
    firma: 'Rafael',
    gazapos: {
      'penicilina': {
        termino: 'penicilina',
        desde: 1941,
        explicacion: 'Fleming la descubre en septiembre de 1928, pero no se usa para curar enfermos hasta los años cuarenta.',
        epoca: 'En 1929 una infección se trataba con reposo, desinfectantes y mucha suerte.',
      },
      'bolígrafo': {
        termino: 'bolígrafo',
        desde: 1938,
        explicacion: 'Lo patenta el húngaro László Bíró en 1938, y en España no se populariza hasta los años cincuenta.',
        epoca: 'Rafael habría escrito con pluma estilográfica.',
      },
      'seat': {
        termino: 'SEAT',
        desde: 1950,
        explicacion: 'La SEAT se funda en 1950, y su primer coche, el 1400, sale en 1953.',
        epoca: 'En 1929 Rafael habría soñado con un Ford o un Hispano-Suiza.',
      },
    },
    trampas: {
      'jazz': { termino: 'jazz', desde: 1913, explicacion: 'En 1900 era un gazapo; en 1929, no: el jazz sonaba ya en los salones de baile de toda España.' },
      'autogiro': { termino: 'autogiro', desde: 1923, explicacion: 'Juan de la Cierva hizo volar el primero en Getafe, en enero de 1923.' },
      'radio': { termino: 'radio', desde: 1924, explicacion: 'Las emisoras españolas empiezan en 1924, y en 1929 la radio ya llegaba a medio país.' },
    },
  },

  {
    fecha: '2026-10-24',
    anio: 1561,
    encabezado: 'En Madrid, a 20 de junio de 1561',
    saludo: 'Señor hermano:',
    parrafos: [
      'Ya está aquí la Corte, y con ella media España. Su Majestad se ha aposentado en el Alcázar, y no queda posada libre en toda la villa. Los domingos la gente sale a pasear al Prado de San Jerónimo, o va en romería a Nuestra Señora de Atocha.',
      'Los precios han subido al doble en un mes, y los vecinos se quejan de que los aposentadores les toman media casa para los criados de los señores.',
      'Pero también hay alegría. En las verbenas, los chulapos bailan al son del organillo, y en las casas de los grandes se representan zarzuelas hasta la madrugada. Vente cuando puedas, que aquí sobra trabajo para un escribano.',
    ],
    despedida: 'Vuestro hermano,',
    firma: 'Hernando',
    gazapos: {
      'chulapos': {
        termino: 'chulapo',
        desde: 1850, aprox: true,
        explicacion: 'El chulapo es el madrileño castizo del siglo XIX, el de los sainetes y las verbenas.',
        epoca: 'En 1561 se habría hablado de los mozos y mozas de la villa.',
      },
      'organillo': {
        termino: 'organillo',
        desde: 1870, aprox: true,
        explicacion: 'El organillo de manubrio, el de las verbenas, llega a Madrid en el siglo XIX.',
        epoca: 'En una fiesta de 1561 se bailaba al son de la gaita, el pandero y la vihuela.',
      },
      'zarzuelas': {
        termino: 'zarzuela',
        desde: 1650, aprox: true,
        explicacion: 'El género toma el nombre del palacete de la Zarzuela, levantado para Felipe IV en la década de 1630, donde se representaban estas obras desde mediados del siglo XVII.',
        epoca: 'En 1561 se representaban comedias, autos y entremeses.',
      },
    },
    trampas: {
      'prado': { termino: 'Prado', desde: 1503, explicacion: 'El Prado de San Jerónimo ya era el paseo de los madrileños; el museo no llegará hasta 1819.' },
      'atocha': { termino: 'Atocha', desde: 1150, aprox: true, explicacion: 'La devoción a la Virgen de Atocha es medieval. La estación, que es lo que hoy suena a todos, es de 1851.' },
    },
  },

  {
    fecha: '2026-10-25',
    anio: 1982,
    encabezado: 'En Madrid, a 12 de julio de 1982',
    saludo: 'Querido Javi:',
    parrafos: [
      'Anoche ganó Italia el Mundial en el Bernabéu: tres a uno a Alemania. Fui con tu primo, y aunque España se volvió a casa en la segunda fase, el ambiente fue de película. A la salida vendían muñecos de Naranjito por todas partes, y los italianos cantaron hasta el amanecer.',
      'Hoy he visto el resumen en el telediario, y luego lo han repetido en Telecinco. Te he grabado una cinta para el walkman con las canciones del verano, y te guardo un cedé de Mecano que te va a encantar.',
      'Por aquí todo sigue igual. Con lo que gano no llego a fin de mes; soy lo que ahora llaman un mileurista, pero en pesetas. A ver si en agosto nos vemos en el pueblo.',
    ],
    despedida: 'Un abrazo,',
    firma: 'Quique',
    gazapos: {
      'telecinco': {
        termino: 'Telecinco',
        desde: 1990,
        explicacion: 'Las cadenas privadas no llegan a España hasta 1990; Telecinco empieza a emitir en marzo de ese año.',
        epoca: 'En 1982 solo estaban la Primera y el UHF de Televisión Española.',
      },
      'cedé': {
        termino: 'cedé',
        desde: 1983,
        explicacion: 'El disco compacto sale a la venta en Japón en octubre de 1982, y en España no se populariza hasta finales de los ochenta.',
        epoca: 'Quique le habría guardado un elepé, un disco de vinilo.',
      },
      'mileurista': {
        termino: 'mileurista',
        desde: 2005,
        explicacion: 'La palabra nace en 2005, con la carta de una lectora a un periódico.',
        epoca: 'En 1982 se habría dicho que no llegaba a fin de mes, y punto.',
      },
    },
    trampas: {
      'naranjito': { termino: 'Naranjito', desde: 1979, explicacion: 'Se presentó en 1979 como mascota del Mundial de 1982.' },
      'telediario': { termino: 'telediario', desde: 1957, explicacion: 'Televisión Española lo emite desde 1957.' },
      'walkman': { termino: 'walkman', desde: 1979, explicacion: 'Sony lo lanzó en 1979, y en 1982 ya era el sueño de cualquier adolescente.' },
      'pesetas': { termino: 'peseta', desde: 1868, explicacion: 'Fue la moneda de España de 1868 a 2002.' },
    },
  },

  {
    fecha: '2026-10-26',
    anio: 1700,
    encabezado: 'En Madrid, a 3 de noviembre de 1700',
    saludo: 'Muy señor mío y amigo:',
    parrafos: [
      'Anteayer, día de Todos los Santos, murió nuestro rey don Carlos, a quien Dios tenga en su gloria. Con él se acaba en España la Casa de Austria, porque en su testamento deja la corona a Felipe de Anjou, nieto del rey de Francia. Así que tendremos rey Borbón, y dicen que la Corte se llenará de pelucas y de modas francesas.',
      'En la villa no se habla de otra cosa. Los aguadores de la fuente de la Cibeles ya hacen apuestas sobre la guerra que vendrá, y en los mentideros hay quien jura que el difunto estaba hechizado.',
      'Yo, por si acaso, he jugado a la lotería todo lo que tenía. Si me toca, iré a celebrarlo a la pradera a ver bailar el chotis; si no, me tocará pedirle a vuestra merced un préstamo.',
    ],
    despedida: 'Su seguro servidor,',
    firma: 'Antonio',
    gazapos: {
      'cibeles': {
        termino: 'Cibeles',
        desde: 1782,
        explicacion: 'La fuente se construye entre 1777 y 1782, por encargo de Carlos III.',
        epoca: 'En 1700 los aguadores llenaban sus cántaros en las fuentes de los viajes de agua.',
      },
      'lotería': {
        termino: 'lotería',
        desde: 1763,
        explicacion: 'La primera lotería del Estado en España la crea Carlos III en 1763.',
        epoca: 'Antonio se habría jugado los cuartos a los naipes o en una rifa.',
      },
      'chotis': {
        termino: 'chotis',
        desde: 1850, aprox: true,
        explicacion: 'Viene de una danza escocesa, a través del alemán schottisch, y llega a Madrid a mediados del siglo XIX.',
        epoca: 'En una pradera de 1700 se bailaban seguidillas.',
      },
    },
    trampas: {
      'borbón': { termino: 'Borbón', desde: 1700, explicacion: 'Felipe de Anjou, Felipe V, fue el primer Borbón de España: el testamento de Carlos II, de octubre de 1700, le dejaba la corona.' },
      'pelucas': { termino: 'peluca', desde: 1660, aprox: true, explicacion: 'Las pelucas largas estaban de moda en la Francia de Luis XIV, y ya se veían en España.' },
      'hechizado': { termino: 'hechizado', desde: 1698, explicacion: 'A Carlos II le llamaron «el Hechizado», y en vida suya se le llegó a exorcizar.' },
    },
  },

  {
    fecha: '2026-10-27',
    anio: 1873,
    encabezado: 'En Madrid, a 13 de febrero de 1873',
    saludo: 'Querido Enrique:',
    parrafos: [
      'Se fue don Amadeo, y el mismo día las Cortes proclamaron la República. Esta mañana fui en tranvía hasta la Puerta del Sol y no cabía un alfiler: los federales cantaban, los republicanos de toda la vida lloraban de emoción y los de la Internacional repartían papeles.',
      'Dicen que en Barcelona los obreros preparan una huelga, y que el nuevo Gobierno piensa abolir las quintas.',
      'Mi patrón, que es muy moderno, ha puesto en el despacho un teléfono para hablar con el almacén, en el salón una bombilla que alumbra como diez velas y, para las visitas, un fonógrafo que canta zarzuelas. Yo le digo que no se fíe de tanto invento. Escríbeme pronto y dime qué piensan en Valladolid.',
    ],
    despedida: 'Tu amigo,',
    firma: 'Eusebio',
    gazapos: {
      'teléfono': {
        termino: 'teléfono',
        desde: 1876,
        explicacion: 'Graham Bell lo patenta en 1876, y en España las primeras pruebas son de 1877.',
        epoca: 'En 1873 el patrón habría mandado recado al almacén con un chico.',
      },
      'bombilla': {
        termino: 'bombilla',
        desde: 1879,
        explicacion: 'La bombilla eléctrica práctica es de Edison y Swan, en 1879.',
        epoca: 'El salón de 1873 se habría alumbrado con quinqués o con gas.',
      },
      'fonógrafo': {
        termino: 'fonógrafo',
        desde: 1877,
        explicacion: 'Edison lo presenta en 1877.',
        epoca: 'En 1873 la música solo se oía en directo, o en una caja de música.',
      },
    },
    trampas: {
      'tranvía': { termino: 'tranvía', desde: 1871, explicacion: 'En 1812 era un gazapo; en 1873, no. El de mulas de Madrid funcionaba desde 1871.' },
      'federales': { termino: 'federal', desde: 1869, explicacion: 'La República federal era el programa de Pi y Margall, y los federales llenaban las calles desde 1869.' },
      'internacional': { termino: 'Internacional', desde: 1864, explicacion: 'La Asociación Internacional de Trabajadores es de 1864, y su federación española, de 1870.' },
      'huelga': { termino: 'huelga', desde: 1855, explicacion: 'En el sentido de parar el trabajo ya se usaba a mediados del siglo XIX; Barcelona vivió una gran huelga en 1855.' },
    },
  },

  {
    fecha: '2026-10-28',
    anio: 1656,
    encabezado: 'En Madrid, a 20 de septiembre de 1656',
    saludo: 'Querido maestro:',
    parrafos: [
      'Le escribo desde el obrador de don Diego Velázquez, en el cuarto del Príncipe del Alcázar, donde me ha dejado entrar a ver el cuadro grande que pinta de la infanta Margarita con sus damas. Ya lo llaman todos Las Meninas, y no hay en Palacio quien no quiera salir en él.',
      'Lo que más me asombra es la perspectiva: el espejo del fondo, donde se ven los Reyes, y el aposentador en la puerta, que parece que se va a ir. Don Diego pinta al óleo, muy suelto, con unos pinceles larguísimos, y prepara los colores él mismo, nada de esas pinturas en tubos que traen los flamencos.',
      'Cuando lo acabe, dicen que lo colgarán en el despacho de verano del Rey, y que vendrán turistas de todas partes a verlo. Yo vuelvo a Sevilla en cuanto pueda. Encomiéndeme a su señora.',
    ],
    despedida: 'Su discípulo, que le quiere bien,',
    firma: 'Juan',
    gazapos: {
      'meninas': {
        termino: 'Las Meninas',
        desde: 1843,
        explicacion: 'En los inventarios del Alcázar el cuadro es «la familia» del Rey. El título de Las Meninas aparece en el catálogo del Museo del Prado de 1843.',
        epoca: 'Juan habría hablado del retrato de la señora infanta con sus damas.',
      },
      'tubos': {
        termino: 'tubos de pintura',
        desde: 1841,
        explicacion: 'Los tubos de estaño para el óleo los patenta el pintor John Rand en 1841.',
        epoca: 'En 1656 los colores se molían en el taller y se mezclaban con aceite cada día.',
      },
      'turistas': {
        termino: 'turista',
        desde: 1850, aprox: true,
        explicacion: 'Viene del inglés tourist, de hacia 1800, y llega al español en el siglo XIX.',
        epoca: 'En 1656 solo podían ver el cuadro el Rey y quienes él quisiera.',
      },
    },
    trampas: {
      'perspectiva': { termino: 'perspectiva', desde: 1435, explicacion: 'Los pintores del Renacimiento ya la estudiaban con reglas, y la palabra es aún más antigua.' },
      'óleo': { termino: 'óleo', desde: 1450, aprox: true, explicacion: 'Se pintaba al óleo desde el siglo XV.' },
    },
  },

  {
    fecha: '2026-10-29',
    anio: 1914,
    encabezado: 'En Panamá, a 16 de agosto de 1914',
    saludo: 'Querida madre:',
    parrafos: [
      'Ayer pasó por el canal el primer barco, el Ancon, de un océano a otro en menos de diez horas. Lo vimos desde las esclusas de Miraflores, y los americanos tocaron las sirenas de todos los vapores del puerto.',
      'Los americanos tienen aquí de todo. Han acabado con la fiebre amarilla matando mosquitos, sus soldados van en jeep de un lado a otro, y en el puerto tienen un radar que avisa si se acercan los submarinos alemanes, porque en Europa ya ha empezado la guerra. El año pasado un aviador cruzó el istmo en avión.',
      'El médico de la compañía me tiene a dieta por el azúcar, y dice que pronto habrá una medicina, la insulina, que lo arreglará. Por las noches oímos el gramófono en la cantina y me acuerdo mucho de usted.',
    ],
    despedida: 'Su hijo que la quiere,',
    firma: 'Ramón',
    gazapos: {
      'jeep': {
        termino: 'jeep',
        desde: 1941,
        explicacion: 'El todoterreno del ejército americano nace en 1941.',
        epoca: 'En 1914 los soldados iban a pie, a caballo o en camión.',
      },
      'radar': {
        termino: 'radar',
        desde: 1940,
        explicacion: 'Se desarrolla en los años treinta, se usa por primera vez en la Segunda Guerra Mundial y el nombre es de 1940.',
        epoca: 'En 1914 el mar se vigilaba con prismáticos y reflectores.',
      },
      'insulina': {
        termino: 'insulina',
        desde: 1921,
        explicacion: 'La descubren Banting y Best en Toronto en 1921.',
        epoca: 'En 1914 a un diabético solo se le ponía a dieta.',
      },
    },
    trampas: {
      'submarinos': { termino: 'submarino', desde: 1888, explicacion: 'Isaac Peral botó el suyo en 1888, y en 1914 los alemanes tenían una flota entera.' },
      'avión': { termino: 'avión', desde: 1890, explicacion: 'En 1888 era un gazapo; en 1914, no. Y en 1913 el aviador Robert Fowler cruzó, en efecto, el istmo de Panamá.' },
      'gramófono': { termino: 'gramófono', desde: 1887, explicacion: 'Lo patenta Emile Berliner en 1887.' },
    },
  },

  {
    fecha: '2026-10-30',
    anio: 1766,
    encabezado: 'En Madrid, a 27 de marzo de 1766',
    saludo: 'Querido primo:',
    parrafos: [
      'Han sido tres días de locura. Empezó el domingo de Ramos, porque el marqués de Esquilache había prohibido las capas largas y los sombreros de ala ancha, y acabó con el pueblo a las puertas de Palacio. Rompieron los faroles que el ministro había mandado poner en las calles, y hubo quien, con cerillas, quiso pegar fuego a su casa.',
      'El Rey se ha ido a Aranjuez y ha despedido al ministro. Los más exaltados dicen que esto es el comunismo, y que ahora los sindicatos mandarán en la villa.',
      'Yo me he quedado sin los reales que gasté en la lotería, que tampoco me tocó. Cuídate mucho, y no le digas nada a tu madre, que se asusta.',
    ],
    despedida: 'Tu primo,',
    firma: 'Felipe',
    gazapos: {
      'cerillas': {
        termino: 'cerilla',
        desde: 1826,
        explicacion: 'Las cerillas de fricción las inventa John Walker en 1826.',
        epoca: 'Para encender fuego, en 1766, había que usar yesca, pedernal y eslabón.',
      },
      'comunismo': {
        termino: 'comunismo',
        desde: 1840,
        explicacion: 'La palabra se extiende en Francia hacia 1840, y el Manifiesto comunista es de 1848.',
        epoca: 'En 1766 se habría hablado de motín, de tumulto o de la plebe.',
      },
      'sindicatos': {
        termino: 'sindicato',
        desde: 1850, aprox: true,
        explicacion: 'Los sindicatos obreros son del siglo XIX; en España no se permiten legalmente hasta 1887.',
        epoca: 'En 1766 los oficios se agrupaban en gremios.',
      },
    },
    trampas: {
      'faroles': { termino: 'farol', desde: 1765, explicacion: 'Esquilache había mandado alumbrar las calles de Madrid con faroles, y el pueblo los rompió en el motín.' },
      'lotería': { termino: 'lotería', desde: 1763, explicacion: 'En 1700 era un gazapo; en 1766, no. Carlos III la había creado en 1763.' },
    },
  },

  {
    fecha: '2026-10-31',
    anio: 1850,
    encabezado: 'En Madrid, a 31 de octubre de 1850',
    saludo: 'Querida Pilar:',
    parrafos: [
      'Esta noche, víspera de Todos los Santos, vamos a ver el Tenorio de Zorrilla, que a tu tío le gusta más que ninguna otra comedia. Los chicos de la vecina se han disfrazado para Halloween y han ido de puerta en puerta pidiendo castañas.',
      'Mañana iremos al cementerio a llevar flores a los abuelos. Al pobre don Anselmo lo velan en el tanatorio, que en su casa no cabía tanta gente.',
      'Tu primo, que es muy romántico, se pasa el día leyendo historias de aparecidos y de zombis. Le he dicho que mejor se haga una fotografía con su novia, que ahora está de moda.',
    ],
    despedida: 'Un beso de tu tía,',
    firma: 'Dolores',
    gazapos: {
      'halloween': {
        termino: 'Halloween',
        desde: 1990, aprox: true,
        explicacion: 'La fiesta irlandesa y estadounidense no llega a España hasta finales del siglo XX, de la mano del cine y la televisión.',
        epoca: 'En el Madrid de 1850, la víspera de Todos los Santos era noche de castañas, buñuelos y Tenorio.',
      },
      'tanatorio': {
        termino: 'tanatorio',
        desde: 1975,
        explicacion: 'Los tanatorios aparecen en España en los años setenta del siglo XX.',
        epoca: 'En 1850 a don Anselmo lo habrían velado en su casa.',
      },
      'zombis': {
        termino: 'zombi',
        desde: 1932,
        explicacion: 'Viene del criollo haitiano, y se extiende por el inglés y las demás lenguas con el cine de terror, a partir de 1932.',
        epoca: 'Un romántico de 1850 leía historias de aparecidos, de fantasmas o de almas en pena.',
      },
    },
    trampas: {
      'tenorio': { termino: 'Tenorio', desde: 1844, explicacion: 'Zorrilla estrenó Don Juan Tenorio en 1844, en el teatro de la Cruz de Madrid.' },
      'romántico': { termino: 'romántico', desde: 1830, explicacion: 'Era la palabra de moda desde los años treinta: Larra, Espronceda, el propio Zorrilla.' },
      'fotografía': { termino: 'fotografía', desde: 1839, explicacion: 'La palabra nace en 1839, y en 1850 Madrid ya tenía estudios donde retratarse.' },
    },
  },

  {
    fecha: '2026-11-01',
    anio: 1898,
    encabezado: 'En La Habana, a 16 de febrero de 1898',
    saludo: 'Querido hermano:',
    parrafos: [
      'Anoche, a eso de las diez menos cuarto, voló en el puerto el acorazado Maine, el barco americano que llevaba aquí tres semanas. Retumbó toda la ciudad y el cielo se puso rojo. Dicen que han muerto más de doscientos marineros.',
      'Los americanos ya culpan a España, y aquí todos temen que haya guerra. Yo me distraigo como puedo: el domingo fui a ver un partido de béisbol del Almendares, y por la noche bailamos danzón hasta que cerraron.',
      'En el café de la esquina sirven ahora un daiquiri muy fresco, y el camarero prepara mojitos con hierbabuena. Los muchachos de la orquesta tocan un ritmo nuevo que llaman chachachá, y no hay quien se quede sentado. Escríbeme a la dirección de siempre.',
    ],
    despedida: 'Tu hermano,',
    firma: 'Rogelio',
    gazapos: {
      'daiquiri': {
        termino: 'daiquiri',
        desde: 1905, aprox: true,
        explicacion: 'Toma el nombre de la playa de Daiquirí, cerca de Santiago, donde desembarcarían los americanos en junio de 1898. El cóctel nace unos años después.',
        epoca: 'En 1898 se habría servido un refresco de limón, o un ron a secas.',
      },
      'mojitos': {
        termino: 'mojito',
        desde: 1930,
        explicacion: 'Aparece en los bares de La Habana en los años veinte y treinta del siglo XX.',
        epoca: 'En 1898 se bebía el draque, aguardiente con hierbabuena, azúcar y limón.',
      },
      'chachachá': {
        termino: 'chachachá',
        desde: 1953,
        explicacion: 'Lo crea Enrique Jorrín a comienzos de los años cincuenta.',
        epoca: 'En 1898 lo nuevo era el danzón.',
      },
    },
    trampas: {
      'acorazado': { termino: 'acorazado', desde: 1860, explicacion: 'Los barcos de guerra blindados se llamaban así desde la década de 1860.' },
      'béisbol': { termino: 'béisbol', desde: 1864, explicacion: 'Se juega en Cuba desde la década de 1860, y el primer campeonato es de 1878.' },
      'danzón': { termino: 'danzón', desde: 1879, explicacion: 'Miguel Failde lo estrena en Matanzas en 1879.' },
    },
  },

  {
    fecha: '2026-11-02',
    anio: 1918,
    encabezado: 'En Madrid, a 15 de octubre de 1918',
    saludo: 'Querido Luis:',
    parrafos: [
      'Ha vuelto la gripe, y peor que en primavera. Aquí la llaman el soldado de Nápoles, como la canción de la zarzuela, porque se pega igual que ella. Dicen que van a cerrar las escuelas, y en los teatros solo quedan los valientes.',
      'Tu hermana cayó la semana pasada con mucha fiebre. El médico le dio ibuprofeno y antibióticos, y quería llevarla a la UCI del hospital, pero no había cama. Gracias a Dios ya está mejor.',
      'Dicen que a los que llegan de Francia los van a poner en cuarentena en la frontera. Ten mucho cuidado en el cuartel, y no te acerques a los enfermos.',
    ],
    despedida: 'Te quiere tu madre,',
    firma: 'Elvira',
    gazapos: {
      'ibuprofeno': {
        termino: 'ibuprofeno',
        desde: 1961,
        explicacion: 'Se descubre en Inglaterra en 1961 y se vende desde 1969.',
        epoca: 'En 1918 el médico habría recetado aspirina, quinina y reposo.',
      },
      'antibióticos': {
        termino: 'antibiótico',
        desde: 1942,
        explicacion: 'El primero, la penicilina, no se usa en enfermos hasta los años cuarenta.',
        epoca: 'Contra las neumonías de 1918 no había remedio eficaz.',
      },
      'uci': {
        termino: 'UCI',
        desde: 1953,
        explicacion: 'Las unidades de cuidados intensivos nacen en los años cincuenta, y en España se extienden en los sesenta y setenta.',
        epoca: 'En 1918 los enfermos graves se quedaban en casa o en la sala común del hospital.',
      },
    },
    trampas: {
      'gripe': { termino: 'gripe', desde: 1837, explicacion: 'Del francés grippe. En español se documenta desde 1837, y la forma francesa, desde 1775.' },
      'nápoles': { termino: 'soldado de Nápoles', desde: 1916, explicacion: 'La canción, de la zarzuela La canción del olvido, se estrenó en 1916 y era la más pegadiza de Madrid. De ahí el apodo de la gripe.' },
      'cuarentena': { termino: 'cuarentena', desde: 1377, explicacion: 'En 1348 era un gazapo; en 1918, no: la palabra y la medida tenían ya siglos.' },
    },
  },

  {
    fecha: '2026-11-03',
    anio: 1616,
    encabezado: 'En Madrid, a 24 de abril de 1616',
    saludo: 'Señor don Francisco:',
    parrafos: [
      'Anteayer murió en su casa de la calle del León Miguel de Cervantes, el autor del Quijote, y ayer lo enterraron en las Trinitarias, con el hábito de San Francisco y el rostro descubierto.',
      'Cuatro días antes de morir firmó la dedicatoria del Persiles, que ya tenía acabado, y dicen que su viuda lo sacará pronto. Los periodistas de la Corte no han dado la noticia ni en una línea.',
      'Le pido a vuestra merced que hable con alguna editorial de Sevilla, que allí sus libros se venden bien, y que mire si alguna rotativa puede tirar los dos Quijotes juntos. Sería la mejor manera de honrar su memoria.',
    ],
    despedida: 'Su servidor,',
    firma: 'Gonzalo',
    gazapos: {
      'periodistas': {
        termino: 'periodista',
        desde: 1750, aprox: true,
        explicacion: 'La palabra nace en el siglo XVIII, con los periódicos.',
        epoca: 'En 1616 la noticia la habrían dado, si acaso, los avisos y relaciones que corrían por la Corte.',
      },
      'editorial': {
        termino: 'editorial',
        desde: 1850, aprox: true,
        explicacion: 'Como empresa que publica libros, es del siglo XIX.',
        epoca: 'En 1616 se buscaba un librero o un impresor.',
      },
      'rotativa': {
        termino: 'rotativa',
        desde: 1846,
        explicacion: 'La prensa rotativa se inventa a mediados del siglo XIX.',
        epoca: 'En 1616 se imprimía con prensas de madera, pliego a pliego.',
      },
    },
    trampas: {
      'quijotes': { termino: 'Quijote', desde: 1605, explicacion: 'La primera parte salió en 1605 y la segunda en 1615, de modo que en 1616 había, en efecto, dos Quijotes.' },
      'persiles': { termino: 'Persiles', desde: 1616, explicacion: 'Los trabajos de Persiles y Sigismunda se publicó en 1617, y la dedicatoria al conde de Lemos está firmada el 19 de abril de 1616.' },
      'trinitarias': { termino: 'Trinitarias', desde: 1612, explicacion: 'Cervantes fue enterrado en el convento de las Trinitarias Descalzas, fundado en 1612, donde sigue.' },
    },
  },

  {
    fecha: '2026-11-04',
    anio: 1931,
    encabezado: 'En Madrid, a 15 de abril de 1931',
    saludo: 'Querida Lola:',
    parrafos: [
      'Ayer se proclamó la República, y Madrid fue una fiesta. Bajamos en metro hasta Sol y nos pasamos la tarde entre banderas tricolores; hasta en las ventanas del rascacielos de la Telefónica había gente saludando.',
      'El Rey se marchó anoche camino de Cartagena. Mi padre dice que mañana lo contarán en el telediario, pero yo creo que no va a hacer falta.',
      'Este verano quiero ir a San Sebastián a bañarme con el biquini que me he hecho. Ya he mandado a la Escuela Normal una fotocopia de mi título, a ver si en octubre me dan plaza de maestra.',
    ],
    despedida: 'Besos de tu amiga,',
    firma: 'Conchita',
    gazapos: {
      'telediario': {
        termino: 'telediario',
        desde: 1957,
        explicacion: 'Televisión Española no emite hasta 1956, y el telediario empieza en 1957.',
        epoca: 'En 1931 las noticias se oían en la radio o se leían en los periódicos de la tarde.',
      },
      'biquini': {
        termino: 'biquini',
        desde: 1946,
        explicacion: 'En 1969 era una trampa; en 1931, un gazapo: nace en París en 1946.',
        epoca: 'Una bañista de 1931 llevaba un traje de baño de una pieza.',
      },
      'fotocopia': {
        termino: 'fotocopia',
        desde: 1959,
        explicacion: 'La xerografía se inventa en 1938, y las fotocopiadoras de oficina llegan en 1959.',
        epoca: 'Conchita habría mandado una copia a máquina, compulsada.',
      },
    },
    trampas: {
      'metro': { termino: 'metro', desde: 1919, explicacion: 'En 1873 era un gazapo; en 1931, no: Madrid tenía metro desde 1919.' },
      'rascacielos': { termino: 'rascacielos', desde: 1929, explicacion: 'El edificio de la Telefónica, en la Gran Vía, se terminó en 1929 y era el más alto de Madrid.' },
      'tricolores': { termino: 'tricolor', desde: 1870, aprox: true, explicacion: 'La bandera roja, amarilla y morada ya la enarbolaban los republicanos antes de 1931.' },
    },
  },

  {
    fecha: '2026-11-05',
    anio: 1521,
    encabezado: 'En Coyoacán, a 20 de agosto de 1521',
    saludo: 'Señor padre:',
    parrafos: [
      'El día de San Hipólito, tras casi tres meses de cerco, se rindió la gran ciudad de México, y prendimos a su señor, Cuauhtémoc, cuando huía por la laguna.',
      'Los caciques de la tierra vienen cada día a dar obediencia a Cortés. La viruela ha matado a más indios que nuestras espadas, y la ciudad está tan destruida que no se puede andar por ella del hedor.',
      'Para celebrar la victoria, los tlaxcaltecas nos han dado tacos de maíz y un tequila muy fuerte, y por la noche unos mariachis tocaron hasta el alba. Si Dios quiere, con lo que me toque del botín volveré a Medellín.',
    ],
    despedida: 'Su hijo,',
    firma: 'Alonso',
    gazapos: {
      'tacos': {
        termino: 'taco',
        desde: 1890, aprox: true,
        explicacion: 'Como nombre de la tortilla enrollada se documenta en México a finales del siglo XIX.',
        epoca: 'Los conquistadores hablaban de tortillas, que es como llamaron a las tlaxcalli.',
      },
      'tequila': {
        termino: 'tequila',
        desde: 1650, aprox: true,
        explicacion: 'El aguardiente de agave necesita alambique, que llevaron los españoles, y el de Tequila no se hace famoso hasta los siglos XVII y XVIII.',
        epoca: 'Los tlaxcaltecas les habrían dado pulque, el fermentado del maguey.',
      },
      'mariachis': {
        termino: 'mariachi',
        desde: 1852,
        explicacion: 'La palabra se documenta en 1852, en Jalisco.',
        epoca: 'En 1521 la música de los naturales era de tambores, teponaztles y flautas.',
      },
    },
    trampas: {
      'méxico': { termino: 'México', desde: 1520, explicacion: 'La ciudad se llamaba México-Tenochtitlan, y así la nombran Cortés y Bernal Díaz.' },
      'caciques': { termino: 'cacique', desde: 1492, explicacion: 'Palabra taína que los españoles aprendieron en las Antillas y llevaron consigo al continente.' },
      'viruela': { termino: 'viruela', desde: 1520, explicacion: 'La epidemia de 1520 diezmó a los mexicas antes del cerco.' },
    },
  },

  {
    fecha: '2026-11-06',
    anio: 1799,
    encabezado: 'En La Coruña, a 4 de junio de 1799',
    saludo: 'Querido hermano:',
    parrafos: [
      'Mañana zarpa la corbeta Pizarro rumbo a Cumaná, y en ella van dos sabios extranjeros, un barón prusiano llamado Humboldt y su amigo francés, el señor Bonpland, con licencia del Rey para recorrer las Indias.',
      'He ayudado a subir a bordo sus cajas: llevan un sextante, dos cronómetros, barómetros, termómetros y hasta un aparato para medir el oxígeno del aire.',
      'El barón me ha dicho que quiere estudiar la ecología de las selvas y buscar huesos de dinosaurios en los Andes, y su compañero, que es médico, sostiene que el escorbuto se cura con unas vitaminas que hay en los limones. Gente rara, pero muy amable.',
    ],
    despedida: 'Tu hermano que te abraza,',
    firma: 'Manuel',
    gazapos: {
      'ecología': {
        termino: 'ecología',
        desde: 1866,
        explicacion: 'La palabra la inventa Ernst Haeckel en 1866.',
        epoca: 'Humboldt hablaba de la «geografía de las plantas».',
      },
      'dinosaurios': {
        termino: 'dinosaurio',
        desde: 1842,
        explicacion: 'El nombre lo crea Richard Owen en 1842.',
        epoca: 'En 1799 se hablaba de huesos de gigantes o de animales antediluvianos.',
      },
      'vitaminas': {
        termino: 'vitamina',
        desde: 1912,
        explicacion: 'Casimir Funk las bautiza en 1912.',
        epoca: 'Ya se sabía que los limones curaban el escorbuto, pero no por qué.',
      },
    },
    trampas: {
      'sextante': { termino: 'sextante', desde: 1757, explicacion: 'En 1519 era un gazapo; en 1799 llevaba ya medio siglo inventado, y Humboldt viajaba con uno.' },
      'cronómetros': { termino: 'cronómetro', desde: 1761, explicacion: 'Harrison lo perfecciona en el siglo XVIII, y Humboldt llevaba cronómetros para calcular la longitud.' },
      'oxígeno': { termino: 'oxígeno', desde: 1777, explicacion: 'Lavoisier le da nombre en 1777.' },
    },
  },

  {
    fecha: '2026-11-07',
    anio: 1925,
    encabezado: 'En Madrid, a 10 de mayo de 1925',
    saludo: 'Querida mamá:',
    parrafos: [
      'La Residencia es mejor de lo que pensaba. En el pasillo vive un granadino, Federico, que toca el piano y recita sus versos a todas horas, y el catalán que pinta, Salvador, va vestido de manera estrafalaria y no para de hablar del surrealismo, que está de moda en París.',
      'Los domingos vamos al Stadium a ver fútbol, o nos escapamos a bailar el tango en un salón de la calle de Alcalá. No te asustes: es todo muy decente.',
      'Luis, el aragonés, se ha comprado un tocadiscos y pone rock hasta las tantas. Dice que el año que viene se comprará una vespa para ir a clase.',
    ],
    despedida: 'Te quiere tu hijo,',
    firma: 'Pepe',
    gazapos: {
      'tocadiscos': {
        termino: 'tocadiscos',
        desde: 1950,
        explicacion: 'Los tocadiscos eléctricos se popularizan en los años cincuenta, y la palabra es de entonces.',
        epoca: 'En 1925 los discos se escuchaban en el gramófono, a manivela.',
      },
      'rock': {
        termino: 'rock',
        desde: 1955,
        explicacion: 'El rock and roll nace en Estados Unidos a mediados de los años cincuenta.',
        epoca: 'En 1925 Luis habría puesto jazz o cuplés.',
      },
      'vespa': {
        termino: 'Vespa',
        desde: 1946,
        explicacion: 'La moto de Piaggio sale en Italia en 1946.',
        epoca: 'En 1925 Luis se habría comprado una bicicleta o, con suerte, una motocicleta.',
      },
    },
    trampas: {
      'surrealismo': { termino: 'surrealismo', desde: 1924, explicacion: 'André Breton publica el Manifiesto del surrealismo en octubre de 1924.' },
      'fútbol': { termino: 'fútbol', desde: 1863, explicacion: 'En 1810 era un gazapo; en 1925, los madrileños llenaban ya los campos.' },
      'tango': { termino: 'tango', desde: 1880, aprox: true, explicacion: 'En 1810 era un gazapo; en 1925, el tango triunfaba en los salones de medio mundo.' },
    },
  },

  {
    fecha: '2026-11-08',
    anio: 1633,
    encabezado: 'En Madrid, a 6 de diciembre de 1633',
    saludo: 'Querida hermana:',
    parrafos: [
      'Estos días se ha estrenado el nuevo palacio del Buen Retiro, que el conde-duque ha levantado para Su Majestad junto a San Jerónimo. Hubo fiestas, torneos y comedias, y los Reyes cenaron en el gran salón entre tapices.',
      'Al banquete no me dejaron pasar, pero un pinche amigo mío me contó que sirvieron croquetas de gallina, pescados con mayonesa y champán francés para los brindis. De postre sacaron turrón y frutas de sartén.',
      'Yo me conformo con lo que me dan en la posada. Dile a madre que estoy bien y que le mandaré unos dineros por Navidad.',
    ],
    despedida: 'Tu hermano,',
    firma: 'Miguel',
    gazapos: {
      'croquetas': {
        termino: 'croqueta',
        desde: 1750, aprox: true,
        explicacion: 'Vienen de la cocina francesa del siglo XVIII, y en España se hacen populares en el XIX.',
        epoca: 'En la mesa del Rey se habrían servido empanadas, pasteles y manjar blanco.',
      },
      'mayonesa': {
        termino: 'mayonesa',
        desde: 1756,
        explicacion: 'Según la tradición, la bautizan los franceses tras tomar Mahón, en 1756.',
        epoca: 'Los pescados de 1633 se servían con salsas de almendra, vinagre o especias.',
      },
      'champán': {
        termino: 'champán',
        desde: 1690, aprox: true,
        explicacion: 'El vino espumoso de Champaña es de finales del siglo XVII.',
        epoca: 'Los brindis se habrían hecho con vino de Ribadavia o de San Martín.',
      },
    },
    trampas: {
      'retiro': { termino: 'Buen Retiro', desde: 1633, explicacion: 'El palacio del Buen Retiro se estrenó precisamente en diciembre de 1633.' },
      'turrón': { termino: 'turrón', desde: 1550, aprox: true, explicacion: 'Se documenta en España desde el siglo XVI.' },
    },
  },

  {
    fecha: '2026-11-09',
    anio: 1989,
    encabezado: 'En Berlín, a 10 de noviembre de 1989',
    saludo: 'Querida Ana:',
    parrafos: [
      'No te vas a creer lo que ha pasado: anoche abrieron el Muro. Hacia las once los guardias dejaron pasar a la gente, y la ciudad entera se echó a la calle.',
      'Los del Este cruzan en sus Trabant echando humo y los de aquí los reciben con champán y flores. Todo el mundo habla de la perestroika de Gorbachov.',
      'Te he mandado un fax a la oficina con un recorte del periódico, y esta noche te mando un wasap con un selfi encima del Muro. Si encuentro un bar con wifi, te llamo.',
    ],
    despedida: 'Un beso enorme,',
    firma: 'Bea',
    gazapos: {
      'wasap': {
        termino: 'wasap',
        desde: 2009,
        explicacion: 'WhatsApp nace en 2009, y la palabra española viene después.',
        epoca: 'En 1989 Bea habría mandado las fotos por correo, después de revelar el carrete.',
      },
      'selfi': {
        termino: 'selfi',
        desde: 2013,
        explicacion: 'La palabra se populariza hacia 2013, con los teléfonos con cámara frontal.',
        epoca: 'Para salir en la foto encima del Muro, Bea habría tenido que pedírselo a otro.',
      },
      'wifi': {
        termino: 'wifi',
        desde: 1999,
        explicacion: 'El estándar se presenta en 1997, y el nombre comercial Wi-Fi es de 1999.',
        epoca: 'En 1989 se llamaba desde una cabina, con monedas.',
      },
    },
    trampas: {
      'trabant': { termino: 'Trabant', desde: 1957, explicacion: 'El pequeño coche de la Alemania del Este se fabricaba desde 1957.' },
      'champán': { termino: 'champán', desde: 1690, aprox: true, explicacion: 'En 1633 era un gazapo; en 1989, no.' },
      'perestroika': { termino: 'perestroika', desde: 1985, explicacion: 'Gorbachov la lanzó en 1985-1986.' },
      'fax': { termino: 'fax', desde: 1980, explicacion: 'En los años ochenta ya era habitual en las oficinas.' },
    },
  },

  {
    fecha: '2026-11-10',
    anio: 1858,
    encabezado: 'En Madrid, a 25 de junio de 1858',
    saludo: 'Querida Isabel:',
    parrafos: [
      'Ayer, por fin, llegó a Madrid el agua del Lozoya. La Reina abrió la llave y salió un surtidor altísimo en la calle Ancha de San Bernardo, y la gente aplaudía como en los toros.',
      'Con tanta agua, mi marido ya habla de poner un váter en casa, de comprar una lavadora para la ropa y un frigorífico para la carne, como los ingleses.',
      'A ver si así se acaba el cólera, que tantos se llevó hace cuatro años. Si vienes en el ferrocarril de Aranjuez te espero en la estación, y por la noche vamos al teatro de la Zarzuela.',
    ],
    despedida: 'Tu amiga,',
    firma: 'Rosario',
    gazapos: {
      'váter': {
        termino: 'váter',
        desde: 1920, aprox: true,
        explicacion: 'Del inglés water-closet. En español se usa en el siglo XX, cuando los inodoros llegan a las casas.',
        epoca: 'En 1858 se hablaba de retretes y bacinillas.',
      },
      'lavadora': {
        termino: 'lavadora',
        desde: 1908,
        explicacion: 'Las lavadoras eléctricas son del siglo XX, y en España se generalizan en los años sesenta.',
        epoca: 'En 1858 la ropa la lavaban a mano las lavanderas del Manzanares.',
      },
      'frigorífico': {
        termino: 'frigorífico',
        desde: 1927,
        explicacion: 'Las neveras eléctricas para casa son de los años veinte del siglo XX.',
        epoca: 'En 1858 la carne se guardaba en la fresquera, o con hielo de los pozos de nieve.',
      },
    },
    trampas: {
      'cólera': { termino: 'cólera', desde: 1854, explicacion: 'La epidemia de 1854-1855 mató a miles de personas en Madrid.' },
      'ferrocarril': { termino: 'ferrocarril', desde: 1851, explicacion: 'El de Madrid a Aranjuez funcionaba desde 1851.' },
      'zarzuela': { termino: 'zarzuela', desde: 1650, aprox: true, explicacion: 'En 1561 era un gazapo; en 1858, no: el teatro de la Zarzuela se abrió en 1856.' },
    },
  },

  {
    fecha: '2026-11-11',
    anio: 1789,
    encabezado: 'En París, a 16 de julio de 1789',
    saludo: 'Querido padre:',
    parrafos: [
      'Anteayer el pueblo de París asaltó la Bastilla. Sacaron a los presos, que resultaron ser solo siete, y pasearon por las calles la cabeza del gobernador clavada en una pica.',
      'Todo el mundo lleva en el sombrero una escarapela azul y roja, los colores de la ciudad, y en los cafés se canta la Marsellesa a voz en grito.',
      'Los Estados Generales se han convertido en Asamblea Nacional, y ya hay quien habla de cortar cabezas con la guillotina y de medir las telas en metros, como manda la razón.',
    ],
    despedida: 'Su hijo, que le besa la mano,',
    firma: 'Ignacio',
    gazapos: {
      'marsellesa': {
        termino: 'Marsellesa',
        desde: 1792,
        explicacion: 'Rouget de Lisle la compuso en 1792, y tomó ese nombre porque la cantaban los voluntarios de Marsella.',
        epoca: 'En julio de 1789 se cantaban coplas y canciones populares, como el «Ça ira», que es de 1790.',
      },
      'guillotina': {
        termino: 'guillotina',
        desde: 1792,
        explicacion: 'La máquina se adoptó en 1792, y el nombre, por el doctor Guillotin, empezó a usarse hacia 1791.',
        epoca: 'En 1789 a los nobles se los decapitaba con la espada y a los plebeyos se los ahorcaba.',
      },
      'metros': {
        termino: 'metro',
        desde: 1793,
        explicacion: 'El metro se definió en la década de 1790, y el sistema métrico no se impuso en Francia hasta el siglo XIX.',
        epoca: 'En 1789 las telas se medían en anas, varas o pies, y cada región tenía las suyas.',
      },
    },
    trampas: {
      'bastilla': { termino: 'Bastilla', desde: 1370, aprox: true, explicacion: 'La fortaleza cayó el 14 de julio de 1789.' },
      'escarapela': { termino: 'escarapela', desde: 1650, aprox: true, explicacion: 'La palabra es antigua, y la escarapela azul y roja de París se repartió esos mismos días.' },
      'cafés': { termino: 'café', desde: 1686, explicacion: 'En el París de 1789 había cientos de cafés, como el Procope.' },
      'estados': { termino: 'Estados Generales', desde: 1302, explicacion: 'Se reunieron en mayo de 1789 y en junio se proclamaron Asamblea Nacional.' },
    },
  },

  {
    fecha: '2026-11-12',
    anio: 1922,
    encabezado: 'En Luxor, a 30 de noviembre de 1922',
    saludo: 'Querida Elena:',
    parrafos: [
      'Ayer se abrió oficialmente la tumba de Tutankamón ante las autoridades egipcias. Dicen que cuando el señor Carter se asomó por primera vez y le preguntaron si veía algo, contestó: «Sí, cosas maravillosas».',
      'La antecámara está llena de carros, lechos dorados y estatuas. Lord Carnarvon, que paga la excavación, ha venido desde Inglaterra, y los periodistas mandan sus crónicas por telégrafo.',
      'Te mando una fotocopia del plano que me ha dejado un ayudante. Yo tengo una infección en la mano y me tomaría una pastilla de penicilina, pero aquí solo hay yodo. Mañana vuelvo al campamento en jeep.',
    ],
    despedida: 'Un abrazo desde el desierto,',
    firma: 'Luis',
    gazapos: {
      'fotocopia': {
        termino: 'fotocopia',
        desde: 1959,
        explicacion: 'Las fotocopiadoras se comercializan a partir de 1959.',
        epoca: 'En 1922 los planos se copiaban a mano o con papel de calco.',
      },
      'penicilina': {
        termino: 'penicilina',
        desde: 1928,
        explicacion: 'Fleming la descubrió en 1928, y no se usó como medicamento hasta los años cuarenta.',
        epoca: 'En 1922 las heridas se limpiaban con yodo o alcohol, y había que esperar.',
      },
      'jeep': {
        termino: 'jeep',
        desde: 1941,
        explicacion: 'El todoterreno militar estadounidense es de 1941.',
        epoca: 'En 1922 por el desierto se iba en burro, en camello o, con suerte, en un Ford T.',
      },
    },
    trampas: {
      'tutankamón': { termino: 'Tutankamón', desde: 1922, explicacion: 'Carter encontró la tumba el 4 de noviembre de 1922, y la abrieron oficialmente el 29.' },
      'carter': { termino: 'Carter', desde: 1917, explicacion: 'Howard Carter buscaba la tumba desde 1917.' },
      'carnarvon': { termino: 'Carnarvon', desde: 1907, explicacion: 'Lord Carnarvon financiaba la excavación; murió en abril de 1923.' },
      'telégrafo': { termino: 'telégrafo', desde: 1837, explicacion: 'En 1922 era la forma normal de mandar noticias de un continente a otro.' },
    },
  },

  {
    fecha: '2026-11-13',
    anio: 1085,
    encabezado: 'En Toledo, a 30 de mayo de 1085',
    saludo: 'Muy querido hermano:',
    parrafos: [
      'Hace unos días entró el rey don Alfonso en Toledo. Los moros que quieran quedarse conservarán sus casas y su mezquita mayor, y muchos mozárabes lloraban de alegría por las calles.',
      'En la Alcaná, los mercaderes venden de todo: algodón, azafrán, sedas de Almería y unos naipes pintados que juegan los soldados. También traen de Génova unas agujas de marear que llaman brújulas.',
      'El arzobispo que nombren, dicen, querrá levantar una catedral gótica como las de Francia. Yo me conformo con que se acaben las guerras y pueda volver a casa.',
    ],
    despedida: 'Tu hermano,',
    firma: 'Pedro',
    gazapos: {
      'naipes': {
        termino: 'naipes',
        desde: 1370, aprox: true,
        explicacion: 'Las cartas de juego llegan a Europa a finales del siglo XIV.',
        epoca: 'Los soldados de 1085 jugaban a los dados y a las tablas.',
      },
      'brújulas': {
        termino: 'brújula',
        desde: 1150, aprox: true,
        explicacion: 'La aguja imantada llega al Mediterráneo hacia el siglo XII, y la palabra «brújula» es mucho más tardía.',
        epoca: 'En 1085 los marinos se guiaban por la costa, el sol y las estrellas.',
      },
      'gótica': {
        termino: 'gótico',
        desde: 1140,
        explicacion: 'El gótico nace en Francia hacia 1140, y la catedral de Toledo no se empieza hasta 1226.',
        epoca: 'En 1085 se construía en románico, y en Toledo la vieja mezquita mayor sirvió de catedral.',
      },
    },
    trampas: {
      'mozárabes': { termino: 'mozárabe', desde: 1050, aprox: true, explicacion: 'Así se llamaba a los cristianos que vivían en tierra musulmana, como los de Toledo.' },
      'algodón': { termino: 'algodón', desde: 950, aprox: true, explicacion: 'En al-Ándalus se cultivaba desde el siglo X.' },
      'azafrán': { termino: 'azafrán', desde: 900, aprox: true, explicacion: 'Palabra árabe y cultivo conocido en la península desde hacía siglos.' },
      'alcaná': { termino: 'Alcaná', desde: 1000, aprox: true, explicacion: 'Era la calle de los mercaderes de Toledo, junto a la mezquita mayor.' },
    },
  },

  {
    fecha: '2026-11-14',
    anio: 1851,
    encabezado: 'En Londres, a 2 de mayo de 1851',
    saludo: 'Querida madre:',
    parrafos: [
      'Ayer la reina Victoria inauguró la Gran Exposición en un palacio todo de hierro y cristal, en Hyde Park. Dentro caben árboles enteros, y hay máquinas de vapor, telares y un telégrafo que manda mensajes en un instante.',
      'Me he hecho un daguerrotipo para mandároslo, y he cruzado la ciudad en ómnibus. Para volver al hotel pienso coger el metro, que es mucho más rápido.',
      'En la sección americana enseñan un ascensor que sube a la gente sin peligro y una dinamita para abrir minas, pero yo no me fío de esos inventos.',
    ],
    despedida: 'Le quiere su hijo,',
    firma: 'Fernando',
    gazapos: {
      'metro': {
        termino: 'metro',
        desde: 1863,
        explicacion: 'El primer metro del mundo, el de Londres, se abre en 1863.',
        epoca: 'En 1851 se cruzaba Londres en ómnibus de caballos o en coche de alquiler.',
      },
      'ascensor': {
        termino: 'ascensor',
        desde: 1853,
        explicacion: 'Otis presenta el ascensor con freno de seguridad en 1853 y 1854, en Nueva York.',
        epoca: 'En 1851 se subía por la escalera, o con montacargas de cuerda.',
      },
      'dinamita': {
        termino: 'dinamita',
        desde: 1867,
        explicacion: 'Alfred Nobel la patenta en 1867.',
        epoca: 'En 1851 las minas se abrían con pólvora negra.',
      },
    },
    trampas: {
      'cristal': { termino: 'Palacio de Cristal', desde: 1851, explicacion: 'El Crystal Palace se construyó para esta exposición.' },
      'telégrafo': { termino: 'telégrafo', desde: 1837, explicacion: 'El eléctrico funcionaba en Inglaterra desde finales de los años treinta.' },
      'daguerrotipo': { termino: 'daguerrotipo', desde: 1839, explicacion: 'Se presentó en 1839, y en 1851 ya había retratistas en todas las capitales.' },
      'ómnibus': { termino: 'ómnibus', desde: 1829, explicacion: 'Los ómnibus de caballos circulaban por Londres desde 1829.' },
    },
  },

  {
    fecha: '2026-11-15',
    anio: 1588,
    encabezado: 'En Lisboa, a 28 de mayo de 1588',
    saludo: 'Querida esposa:',
    parrafos: [
      'Por fin zarpa la Armada contra Inglaterra. Somos más de ciento treinta naves, entre galeones, urcas y galeazas, y nos manda el duque de Medina Sidonia, que dicen que no quería el cargo.',
      'Aquí todos la llaman la Armada Invencible. Yo voy en el San Martín, la capitana, con mi arcabuz y mi espada, y el capellán nos ha bendecido a todos.',
      'Desde la cofa, con un telescopio, se verá Inglaterra antes que nadie. Si vuelvo con bien, te traeré del país de los ingleses un poco de ese té que toman a todas horas.',
    ],
    despedida: 'Tu marido, que no te olvida,',
    firma: 'Alonso',
    gazapos: {
      'invencible': {
        termino: 'Invencible',
        desde: 1610, aprox: true,
        explicacion: 'El nombre se popularizó después, en buena parte con ironía, tras la derrota.',
        epoca: 'En 1588 se la llamaba la Grande y Felicísima Armada.',
      },
      'telescopio': {
        termino: 'telescopio',
        desde: 1611,
        explicacion: 'El anteojo se inventa en los Países Bajos en 1608, y la palabra «telescopio» es de 1611.',
        epoca: 'En 1588 los vigías solo tenían sus ojos.',
      },
      'té': {
        termino: 'té',
        desde: 1658,
        explicacion: 'El té no se pone de moda en Inglaterra hasta mediados del siglo XVII.',
        epoca: 'En la Inglaterra de 1588 se bebía cerveza.',
      },
    },
    trampas: {
      'galeazas': { termino: 'galeaza', desde: 1550, aprox: true, explicacion: 'Eran galeras grandes de vela y remo; en la Armada iban cuatro, de Nápoles.' },
      'galeones': { termino: 'galeón', desde: 1530, aprox: true, explicacion: 'Era el gran barco de guerra de la época.' },
      'arcabuz': { termino: 'arcabuz', desde: 1510, aprox: true, explicacion: 'El arma de fuego de la infantería española del siglo XVI.' },
      'sidonia': { termino: 'Medina Sidonia', desde: 1445, explicacion: 'El duque de Medina Sidonia mandó la Armada tras la muerte del marqués de Santa Cruz.' },
    },
  },

  {
    fecha: '2026-11-16',
    anio: 1957,
    encabezado: 'En Barcelona, a 6 de octubre de 1957',
    saludo: 'Querida Montse:',
    parrafos: [
      'Lo ha dicho la radio: los rusos han lanzado un satélite artificial, el Sputnik, que da la vuelta a la Tierra en hora y media y hace bip, bip. Mi padre no se lo cree.',
      'Mi tío se ha comprado un Seiscientos, el coche nuevo de la Seat, y el domingo pasado nos llevó a Sitges. En la playa todos escuchaban el partido en sus radios de transistores.',
      'Mi primo dice que algún día tendremos internet en casa y que pagaremos en euros, pero yo creo que antes llegará el hombre a la Luna. Esta noche alquilamos una película en el videoclub del barrio.',
    ],
    despedida: 'Un beso,',
    firma: 'Núria',
    gazapos: {
      'internet': {
        termino: 'internet',
        desde: 1974,
        explicacion: 'La red nace a finales de los sesenta como proyecto militar, y llega a las casas en los noventa.',
        epoca: 'En 1957 se hablaba por teléfono, y no todas las casas lo tenían.',
      },
      'euros': {
        termino: 'euro',
        desde: 1999,
        explicacion: 'El euro nace en 1999 y sus billetes y monedas circulan desde 2002.',
        epoca: 'En 1957 se pagaba en pesetas.',
      },
      'videoclub': {
        termino: 'videoclub',
        desde: 1980,
        explicacion: 'Los videoclubes se extienden por España en los años ochenta.',
        epoca: 'En 1957 las películas se veían en el cine del barrio, en sesión doble.',
      },
    },
    trampas: {
      'sputnik': { termino: 'Sputnik', desde: 1957, explicacion: 'Se lanzó el 4 de octubre de 1957.' },
      'satélite': { termino: 'satélite', desde: 1611, explicacion: 'La palabra se usaba para las lunas de los planetas desde el siglo XVII.' },
      'seiscientos': { termino: 'Seiscientos', desde: 1957, explicacion: 'El SEAT 600 salió en junio de 1957.' },
      'transistores': { termino: 'transistor', desde: 1947, explicacion: 'Las radios de transistores se popularizan precisamente a finales de los cincuenta.' },
    },
  },

  {
    fecha: '2026-11-17',
    anio: 1453,
    encabezado: 'En Nápoles, a 20 de junio de 1453',
    saludo: 'Muy amado señor tío:',
    parrafos: [
      'Han llegado a la corte del rey don Alfonso noticias terribles: Constantinopla ha caído en manos del turco. El sultán Mehmet derribó las murallas con un cañón tan grande que lo arrastraban decenas de bueyes.',
      'Los venecianos y genoveses que escaparon en sus galeras cuentan que el último emperador murió peleando en la muralla. En el puerto ya hay quien dice que subirá el precio del café y de la seda.',
      'Aquí todo sigue igual: el rey pasa las tardes con sus sabios, y anoche, en palacio, se representó una ópera nueva. Mañana iré a ver los tulipanes que ha plantado el jardinero flamenco.',
    ],
    despedida: 'Vuestro sobrino y servidor,',
    firma: 'Jaume',
    gazapos: {
      'café': {
        termino: 'café',
        desde: 1690, aprox: true,
        explicacion: 'El café llega a Europa en el siglo XVII.',
        epoca: 'En 1453 los mercaderes temían por la seda y las especias.',
      },
      'ópera': {
        termino: 'ópera',
        desde: 1600,
        explicacion: 'La ópera nace en Florencia hacia 1600.',
        epoca: 'En 1453 en las cortes se oían canciones, danzas y representaciones religiosas.',
      },
      'tulipanes': {
        termino: 'tulipán',
        desde: 1550, aprox: true,
        explicacion: 'Los tulipanes llegan a Europa desde Turquía a mediados del siglo XVI.',
        epoca: 'En los jardines de 1453 había rosas, lirios y claveles.',
      },
    },
    trampas: {
      'cañón': { termino: 'cañón', desde: 1453, explicacion: 'El gran cañón de Orbán abrió brecha en las murallas en 1453.' },
      'sultán': { termino: 'sultán', desde: 1451, explicacion: 'Mehmet II era sultán desde 1451.' },
      'galeras': { termino: 'galera', desde: 1250, aprox: true, explicacion: 'El barco de remo y vela del Mediterráneo desde la Antigüedad.' },
    },
  },

  {
    fecha: '2026-11-18',
    anio: 1883,
    encabezado: 'En Nueva York, a 25 de mayo de 1883',
    saludo: 'Querido Ramón:',
    parrafos: [
      'Ayer se abrió el puente de Brooklyn, el mayor puente colgante del mundo, sostenido por cables de acero. Hubo cañonazos, fuegos artificiales y miles de personas cruzándolo a pie.',
      'Por la noche fuimos a ver las calles del bajo Manhattan, que alumbran con bombillas eléctricas desde que el señor Edison abrió su central el año pasado. En la oficina ya tenemos teléfono.',
      'Mañana iremos a un salón a escuchar jazz y a tomar una cocacola, que dicen que es la bebida de moda. Luego, si hay tiempo, comeremos una hamburguesa.',
    ],
    despedida: 'Tu amigo,',
    firma: 'Andrés',
    gazapos: {
      'jazz': {
        termino: 'jazz',
        desde: 1913,
        explicacion: 'El jazz nace en Nueva Orleans a principios del siglo XX.',
        epoca: 'En 1883 se habría escuchado una banda de metales o música de minstrel.',
      },
      'cocacola': {
        termino: 'cocacola',
        desde: 1886,
        explicacion: 'La Coca-Cola se inventa en Atlanta en 1886.',
        epoca: 'En 1883 se habría tomado una zarzaparrilla o una limonada.',
      },
      'hamburguesa': {
        termino: 'hamburguesa',
        desde: 1904,
        explicacion: 'La hamburguesa en bocadillo se populariza en Estados Unidos a principios del siglo XX, y la palabra española es aún más tardía.',
        epoca: 'En 1883 se habría comido una ostra o un filete en un restaurante.',
      },
    },
    trampas: {
      'brooklyn': { termino: 'Brooklyn', desde: 1883, explicacion: 'El puente se inauguró el 24 de mayo de 1883.' },
      'bombillas': { termino: 'bombilla', desde: 1880, explicacion: 'Edison patentó su lámpara en 1880 y abrió la central de Pearl Street en septiembre de 1882.' },
      'edison': { termino: 'Edison', desde: 1877, explicacion: 'En 1883 ya era famoso por el fonógrafo y la bombilla.' },
      'teléfono': { termino: 'teléfono', desde: 1876, explicacion: 'Bell lo patentó en 1876, y en 1883 Nueva York tenía miles de abonados.' },
    },
  },

  {
    fecha: '2026-11-19',
    anio: 1714,
    encabezado: 'En Barcelona, a 15 de septiembre de 1714',
    saludo: 'Estimada hermana:',
    parrafos: [
      'El día once entraron las tropas del duque de Berwick por las brechas de la muralla. Se luchó calle por calle, y el conseller en cap, Rafael Casanova, cayó herido junto a la bandera de Santa Eulalia.',
      'Ahora dicen que nos quitarán los fueros y las instituciones. Los miqueletes se han echado al monte, y en las tabernas ya se cantan coplas contra los Borbones.',
      'Mi cuñado jura que cada once de septiembre se hará una gran Diada, con Els Segadors en todas las plazas y avisos por telégrafo a toda Cataluña.',
    ],
    despedida: 'Tu hermano,',
    firma: 'Josep',
    gazapos: {
      'diada': {
        termino: 'Diada',
        desde: 1886,
        explicacion: 'El 11 de septiembre se empezó a conmemorar a finales del siglo XIX, y es fiesta oficial de Cataluña desde 1980.',
        epoca: 'En 1714 nadie celebraba nada: era el día de la derrota.',
      },
      'segadors': {
        termino: 'Els Segadors',
        desde: 1899,
        explicacion: 'El romance es antiguo, pero la letra actual del himno es de 1899.',
        epoca: 'En 1714 se cantaban coplas y romances.',
      },
      'telégrafo': {
        termino: 'telégrafo',
        desde: 1792,
        explicacion: 'El telégrafo óptico es de la década de 1790.',
        epoca: 'En 1714 las noticias corrían a caballo.',
      },
    },
    trampas: {
      'berwick': { termino: 'Berwick', desde: 1687, explicacion: 'El duque de Berwick dirigió el asalto final.' },
      'casanova': { termino: 'Casanova', desde: 1713, explicacion: 'Rafael Casanova, conseller en cap, fue herido el 11 de septiembre de 1714.' },
      'miqueletes': { termino: 'miquelete', desde: 1650, aprox: true, explicacion: 'Eran tropas ligeras catalanas de la época.' },
      'borbones': { termino: 'Borbón', desde: 1700, explicacion: 'Felipe V, el primer Borbón español, reinaba desde 1700.' },
    },
  },

  {
    fecha: '2026-11-20',
    anio: 1968,
    encabezado: 'En Londres, a 7 de abril de 1968',
    saludo: 'Querida Pili:',
    parrafos: [
      '¡Ganamos! Anoche Massiel ganó Eurovisión en el Royal Albert Hall con el «La, la, la», por un solo punto frente a Cliff Richard. En el hotel lo celebramos hasta las tantas.',
      'Aquí las chicas llevan minifalda, y en todas las tiendas suenan los Beatles. La BBC ya emite algunos programas en color.',
      'Te he comprado el disco compacto de la canción, y te mando un videoclip que han grabado en Hyde Park. Cuando vuelva, lo cantamos en el karaoke del barrio.',
    ],
    despedida: 'Muchos besos,',
    firma: 'Maribel',
    gazapos: {
      'compacto': {
        termino: 'disco compacto',
        desde: 1982,
        explicacion: 'El CD sale al mercado en 1982.',
        epoca: 'En 1968 la canción se vendía en un disco sencillo de vinilo, de 45 revoluciones.',
      },
      'videoclip': {
        termino: 'videoclip',
        desde: 1981,
        explicacion: 'Los videoclips se popularizan en los años ochenta, con la MTV.',
        epoca: 'En 1968 las canciones se veían en la tele o en el cine.',
      },
      'karaoke': {
        termino: 'karaoke',
        desde: 1971,
        explicacion: 'El karaoke nace en Japón en los años setenta y llega a España en los noventa.',
        epoca: 'En 1968 se cantaba en el guateque, con el tocadiscos.',
      },
    },
    trampas: {
      'eurovisión': { termino: 'Eurovisión', desde: 1956, explicacion: 'El festival se celebra desde 1956.' },
      'massiel': { termino: 'Massiel', desde: 1968, explicacion: 'Ganó el 6 de abril de 1968.' },
      'minifalda': { termino: 'minifalda', desde: 1965, explicacion: 'Mary Quant la popularizó en Londres a mediados de los sesenta.' },
      'color': { termino: 'color', desde: 1967, explicacion: 'La BBC2 emitía en color desde 1967.' },
    },
  },

  {
    fecha: '2026-11-21',
    anio: 929,
    encabezado: 'En Córdoba, a 20 de enero del año 929',
    saludo: 'Querido primo:',
    parrafos: [
      'Hace unos días se leyó en la mezquita el decreto: el emir Abderramán se proclama califa y príncipe de los creyentes. En el zoco no se habla de otra cosa.',
      'Dicen que piensa levantar una ciudad nueva al pie de la sierra, más hermosa que ninguna, y que ya la llaman Medina Azahara. Yo, mientras, paso las tardes jugando al ajedrez con el alfaquí, que siempre me gana.',
      'Mi tío, que ha vuelto de Sevilla, cuenta maravillas de la Giralda, que se ve desde todo el río, y de la pólvora con que los marineros espantan a los piratas.',
    ],
    despedida: 'Que Dios te guarde,',
    firma: 'Hasán',
    gazapos: {
      'azahara': {
        termino: 'Medina Azahara',
        desde: 936,
        explicacion: 'Las obras de la ciudad palatina empezaron en el año 936, siete años después.',
        epoca: 'En 929 nadie hablaba aún de esa ciudad.',
      },
      'giralda': {
        termino: 'Giralda',
        desde: 1568,
        explicacion: 'El alminar de Sevilla se levanta a finales del siglo XII, y el nombre viene del giraldillo que se le puso en 1568.',
        epoca: 'En 929 la mezquita mayor de Sevilla era mucho más modesta.',
      },
      'pólvora': {
        termino: 'pólvora',
        desde: 1250, aprox: true,
        explicacion: 'La pólvora llega a Europa en el siglo XIII.',
        epoca: 'Contra los piratas, en 929, se usaban arcos y flechas incendiarias.',
      },
    },
    trampas: {
      'califa': { termino: 'califa', desde: 929, explicacion: 'Abderramán III se proclamó califa precisamente en enero de 929.' },
      'ajedrez': { termino: 'ajedrez', desde: 850, aprox: true, explicacion: 'Llegó a al-Ándalus desde Oriente en el siglo IX.' },
      'zoco': { termino: 'zoco', desde: 750, aprox: true, explicacion: 'Del árabe suq, el mercado.' },
      'alfaquí': { termino: 'alfaquí', desde: 750, aprox: true, explicacion: 'Del árabe al-faqih, el sabio en leyes; la Córdoba omeya estaba llena de ellos.' },
    },
  },

  {
    fecha: '2026-11-22',
    anio: 1837,
    encabezado: 'En Güines, a 20 de noviembre de 1837',
    saludo: 'Querido hermano:',
    parrafos: [
      'Ayer se inauguró el ferrocarril de La Habana a Bejucal. Es el primero de todos los dominios españoles, antes incluso que en la Península, y dicen que el año que viene llegará hasta aquí.',
      'La locomotora echa humo como un ingenio en plena zafra. Los hacendados están felices: el azúcar llegará antes al puerto, y de allí en vapor hasta Europa.',
      'Mi patrón quiere que le saquen una fotografía delante de la locomotora y luego dar un paseo en bicicleta por los muelles. Yo me conformaría con unos días de descanso y una aspirina para este dolor de muelas.',
    ],
    despedida: 'Tu hermano,',
    firma: 'Tomás',
    gazapos: {
      'fotografía': {
        termino: 'fotografía',
        desde: 1839,
        explicacion: 'La fotografía se presenta en 1839.',
        epoca: 'En 1837 el patrón tendría que haber posado para un pintor.',
      },
      'bicicleta': {
        termino: 'bicicleta',
        desde: 1869,
        explicacion: 'Las primeras bicicletas con pedales son de los años sesenta del siglo XIX.',
        epoca: 'En 1837 se paseaba a caballo o en quitrín.',
      },
      'aspirina': {
        termino: 'aspirina',
        desde: 1899,
        explicacion: 'Bayer la comercializa en 1899.',
        epoca: 'En 1837, para el dolor de muelas, láudano o un sacamuelas.',
      },
    },
    trampas: {
      'ferrocarril': { termino: 'ferrocarril', desde: 1837, explicacion: 'El de La Habana a Bejucal se inauguró el 19 de noviembre de 1837, once años antes que el de Barcelona a Mataró.' },
      'locomotora': { termino: 'locomotora', desde: 1830, explicacion: 'Las de este ferrocarril vinieron de Inglaterra.' },
      'zafra': { termino: 'zafra', desde: 1550, aprox: true, explicacion: 'La cosecha de la caña de azúcar.' },
      'vapor': { termino: 'vapor', desde: 1807, explicacion: 'En 1837 los vapores ya cruzaban el Caribe.' },
    },
  },

  {
    fecha: '2026-11-23',
    anio: 1513,
    encabezado: 'En Santa María la Antigua del Darién, a 30 de septiembre de 1513',
    saludo: 'Muy querido padre:',
    parrafos: [
      'Vasco Núñez de Balboa ha visto otra mar al otro lado de las montañas. Subió solo a una cumbre, y luego bajó a la playa con la espada en la mano y el agua por las rodillas, y tomó posesión de ella por los Reyes. La llaman la Mar del Sur.',
      'Los caciques de la tierra nos han dado oro y perlas, y nos enseñan a cruzar los ríos en canoas. Uno de ellos nos convidó a chocolate y a una bebida negra y amarga que llaman café.',
      'Dicen que en aquella costa se fundará pronto una ciudad que se llamará Panamá. Ojalá me den allí un solar, que en esta tierra se pasa mucha hambre.',
    ],
    despedida: 'Su hijo,',
    firma: 'Gonzalo',
    gazapos: {
      'chocolate': {
        termino: 'chocolate',
        desde: 1590,
        explicacion: 'Los españoles conocen el cacao en México años después, y la palabra «chocolate» no aparece hasta finales del siglo XVI.',
        epoca: 'En 1513 los caciques del Darién habrían ofrecido chicha de maíz.',
      },
      'café': {
        termino: 'café',
        desde: 1690, aprox: true,
        explicacion: 'El café llega a Europa en el siglo XVII, y a América en el XVIII.',
        epoca: 'En 1513 nadie en América había oído hablar de él.',
      },
      'panamá': {
        termino: 'Panamá',
        desde: 1519,
        explicacion: 'La ciudad la funda Pedrarias Dávila en 1519.',
        epoca: 'En 1513 aquella costa solo tenía aldeas de pescadores.',
      },
    },
    trampas: {
      'caciques': { termino: 'cacique', desde: 1492, explicacion: 'Palabra taína que los españoles usan desde los primeros años.' },
      'perlas': { termino: 'perla', desde: 1250, aprox: true, explicacion: 'La palabra es medieval, y Balboa volvió con muchas perlas del golfo de San Miguel.' },
      'canoas': { termino: 'canoa', desde: 1492, explicacion: 'Ya está en el diario de Colón, en 1492.' },
    },
  },

  {
    fecha: '2026-11-24',
    anio: 1926,
    encabezado: 'En Buenos Aires, a 11 de febrero de 1926',
    saludo: 'Querida mamá:',
    parrafos: [
      'Ayer llegó el Plus Ultra al puerto de Buenos Aires. Ramón Franco, Ruiz de Alda, Durán y el mecánico Rada han cruzado el Atlántico en un hidroavión, desde Palos de la Frontera, en diecinueve días.',
      'Medio Buenos Aires salió a recibirlos, y por la noche hubo baile y tangos en todos los salones.',
      'Dicen que pronto habrá aviones con reactores que harán el viaje en un día, que aterrizarán en helipuertos y que se guiarán por GPS. Yo, por si acaso, volveré en barco.',
    ],
    despedida: 'Te quiere tu hijo,',
    firma: 'Carlos',
    gazapos: {
      'reactores': {
        termino: 'reactor',
        desde: 1939,
        explicacion: 'Los primeros aviones a reacción vuelan a finales de los años treinta, y los de pasajeros, en los cincuenta.',
        epoca: 'En 1926 los aviones llevaban motores de hélice.',
      },
      'helipuertos': {
        termino: 'helipuerto',
        desde: 1950,
        explicacion: 'Los helicópteros prácticos son de los años cuarenta, y los helipuertos, posteriores.',
        epoca: 'En 1926 los hidroaviones amerizaban en los puertos.',
      },
      'gps': {
        termino: 'GPS',
        desde: 1995,
        explicacion: 'El sistema de satélites estadounidense funciona desde los años noventa.',
        epoca: 'En 1926 se navegaba con brújula, sextante y radio.',
      },
    },
    trampas: {
      'ultra': { termino: 'Plus Ultra', desde: 1926, explicacion: 'El hidroavión salió de Palos el 22 de enero y llegó a Buenos Aires el 10 de febrero de 1926.' },
      'franco': { termino: 'Ramón Franco', desde: 1926, explicacion: 'Era el comandante del vuelo.' },
      'hidroavión': { termino: 'hidroavión', desde: 1910, explicacion: 'Los hidroaviones existían desde 1910.' },
      'tangos': { termino: 'tango', desde: 1880, aprox: true, explicacion: 'En 1926 el tango triunfaba en Buenos Aires y en medio mundo.' },
    },
  },

  {
    fecha: '2026-11-25',
    anio: 1805,
    encabezado: 'En Conil, a 25 de octubre de 1805',
    saludo: 'Querida madre:',
    parrafos: [
      'Desde la torre de Castilnovo vimos el combate el lunes. Las andanadas sonaban como truenos y el humo tapaba el mar. Dicen que el almirante Nelson ha muerto en su navío y que Gravina está malherido.',
      'El Santísima Trinidad, el barco más grande del mundo, se ha ido a pique con el temporal. Llegan a la playa marineros heridos, y el cirujano les pone anestesia antes de cortarles las piernas.',
      'Mañana mando un telegrama a Cádiz para saber de mi hermano. Si no contestan, iré yo mismo en tren.',
    ],
    despedida: 'Su hija,',
    firma: 'Manuela',
    gazapos: {
      'anestesia': {
        termino: 'anestesia',
        desde: 1846,
        explicacion: 'La anestesia con éter se presenta en Boston en 1846.',
        epoca: 'En 1805 a los heridos se les daba aguardiente o láudano.',
      },
      'telegrama': {
        termino: 'telegrama',
        desde: 1852,
        explicacion: 'El telégrafo eléctrico llega a España a mediados del siglo XIX.',
        epoca: 'En 1805 se mandaba a un propio a caballo.',
      },
      'tren': {
        termino: 'tren',
        desde: 1848,
        explicacion: 'El primer ferrocarril de la Península es de 1848.',
        epoca: 'En 1805 se iba a Cádiz en diligencia, en calesa o en barca.',
      },
    },
    trampas: {
      'nelson': { termino: 'Nelson', desde: 1798, explicacion: 'Murió en el combate de Trafalgar, el 21 de octubre de 1805.' },
      'gravina': { termino: 'Gravina', desde: 1805, explicacion: 'Fue herido en Trafalgar y murió meses después.' },
      'trinidad': { termino: 'Santísima Trinidad', desde: 1769, explicacion: 'El navío de cuatro puentes se hundió el 24 de octubre de 1805.' },
      'navío': { termino: 'navío', desde: 1450, aprox: true, explicacion: 'Así se llamaba al gran barco de guerra de la época.' },
    },
  },

  {
    fecha: '2026-11-26',
    anio: 1532,
    encabezado: 'En Cajamarca, a 20 de noviembre de 1532',
    saludo: 'Querido hermano:',
    parrafos: [
      'El sábado prendimos al inca Atahualpa en la plaza de Cajamarca. Venía en andas, cubierto de oro y plumas, con miles de indios, y Pizarro lo hizo cautivo en una tarde.',
      'Ahora ofrece llenar de oro un cuarto hasta donde alcanza su mano, y dos más de plata. Los indios traen el metal a lomos de llamas, y tienen otras más finas que llaman vicuñas.',
      'Cuando todo acabe me iré a vivir a Lima, que dicen que es muy rica, o a las minas de Potosí, que son de plata pura. Y si no, a Bolivia, que allí hay tierra para todos.',
    ],
    despedida: 'Tu hermano,',
    firma: 'Hernando',
    gazapos: {
      'lima': {
        termino: 'Lima',
        desde: 1535,
        explicacion: 'Pizarro funda la Ciudad de los Reyes en 1535.',
        epoca: 'En 1532 la costa de Lima era un valle de pueblos indígenas.',
      },
      'potosí': {
        termino: 'Potosí',
        desde: 1545,
        explicacion: 'El cerro de plata se descubre en 1545.',
        epoca: 'En 1532 la plata de Atahualpa venía del rescate.',
      },
      'bolivia': {
        termino: 'Bolivia',
        desde: 1825,
        explicacion: 'La república toma el nombre de Bolívar en 1825.',
        epoca: 'En 1532 aquellas tierras eran el Collasuyo del imperio inca, y luego el Alto Perú.',
      },
    },
    trampas: {
      'inca': { termino: 'inca', desde: 1532, explicacion: 'Atahualpa fue capturado el 16 de noviembre de 1532.' },
      'llamas': { termino: 'llama', desde: 1532, explicacion: 'Los cronistas describen las llamas desde los primeros contactos.' },
      'vicuñas': { termino: 'vicuña', desde: 1532, explicacion: 'Palabra quechua que los españoles recogen enseguida.' },
      'pizarro': { termino: 'Pizarro', desde: 1524, explicacion: 'Francisco Pizarro mandaba la expedición.' },
    },
  },

  {
    fecha: '2026-11-27',
    anio: 2002,
    encabezado: 'En Madrid, a 2 de enero de 2002',
    saludo: 'Querida abuela:',
    parrafos: [
      'Ayer estrenamos el euro. En el quiosco me devolvieron las vueltas en monedas nuevas y en pesetas, y todo el mundo iba con la calculadora: ciento sesenta y seis con trescientas ochenta y seis.',
      'Por la noche fuimos al cine a ver Harry Potter, y mi hermano no paró de mandar SMS a sus amigos para felicitarles el año.',
      'Te subo las fotos de la Puerta del Sol a Instagram, y te paso la canción de las campanadas por Spotify. Mi hermano dice que de mayor quiere ser youtuber.',
    ],
    despedida: 'Un beso muy fuerte,',
    firma: 'Lucía',
    gazapos: {
      'instagram': {
        termino: 'Instagram',
        desde: 2010,
        explicacion: 'La red social nace en 2010.',
        epoca: 'En 2002 las fotos se mandaban por correo electrónico o se revelaban en papel.',
      },
      'spotify': {
        termino: 'Spotify',
        desde: 2008,
        explicacion: 'El servicio sueco empieza a funcionar en 2008.',
        epoca: 'En 2002 la música se escuchaba en CD o en MP3.',
      },
      'youtuber': {
        termino: 'youtuber',
        desde: 2009,
        explicacion: 'YouTube nace en 2005, y los youtubers vienen después.',
        epoca: 'En 2002 los niños querían ser futbolistas o astronautas.',
      },
    },
    trampas: {
      'euro': { termino: 'euro', desde: 1999, explicacion: 'Los billetes y monedas de euro entraron en circulación el 1 de enero de 2002.' },
      'pesetas': { termino: 'peseta', desde: 1868, explicacion: 'Convivieron con el euro hasta el 28 de febrero de 2002.' },
      'sms': { termino: 'SMS', desde: 1992, explicacion: 'Los mensajes cortos eran muy populares a finales de los noventa.' },
      'potter': { termino: 'Harry Potter', desde: 2001, explicacion: 'La primera película se estrenó en España a finales de noviembre de 2001.' },
    },
  },

  {
    fecha: '2026-11-28',
    anio: 1212,
    encabezado: 'En Calatrava, a 20 de julio de 1212',
    saludo: 'Mi señora madre:',
    parrafos: [
      'Le escribo con la mano todavía temblando. El lunes, en las Navas de Tolosa, los reyes de Castilla, Aragón y Navarra deshicieron al ejército del Miramamolín.',
      'Hubo de todo: ballestas, lanzas, cargas de caballería y hasta cañones que trajeron los ultramontanos y que tronaban como el fin del mundo.',
      'El físico me ha cosido la herida del brazo y me ha dado una aspirina para el dolor. Si no fuera por ella, me iría con los almogávares hacia Úbeda. Guárdeme en casa un mosquete por si vuelven los moros.',
    ],
    despedida: 'Su hijo,',
    firma: 'Rodrigo',
    gazapos: {
      'cañones': {
        termino: 'cañón',
        desde: 1350, aprox: true,
        explicacion: 'La artillería de pólvora aparece en Europa en el siglo XIV.',
        epoca: 'En 1212 se usaban catapultas y fundíbulos.',
      },
      'aspirina': {
        termino: 'aspirina',
        desde: 1899,
        explicacion: 'Bayer la comercializa en 1899.',
        epoca: 'El físico de 1212 habría usado vino, miel o emplastos de hierbas.',
      },
      'mosquete': {
        termino: 'mosquete',
        desde: 1567,
        explicacion: 'El mosquete es un arma del siglo XVI.',
        epoca: 'En 1212 se guardaba en casa una ballesta o una lanza.',
      },
    },
    trampas: {
      'miramamolín': { termino: 'Miramamolín', desde: 1150, aprox: true, explicacion: 'Así llamaban los cristianos al califa almohade, del árabe amir al-muminin.' },
      'ballestas': { termino: 'ballesta', desde: 1000, aprox: true, explicacion: 'Se usaba en la península desde hacía siglos.' },
      'almogávares': { termino: 'almogávar', desde: 1150, aprox: true, explicacion: 'Tropas de frontera que ya aparecen en las crónicas del siglo XII.' },
      'físico': { termino: 'físico', desde: 1200, aprox: true, explicacion: 'Así se llamaba al médico en la Edad Media.' },
    },
  },

  {
    fecha: '2026-11-29',
    anio: 1869,
    encabezado: 'En Port Said, a 18 de noviembre de 1869',
    saludo: 'Querido Enrique:',
    parrafos: [
      'Ayer se inauguró el canal de Suez. Abrió el desfile el yate de la emperatriz Eugenia, el Águila, seguido de barcos de media Europa, y el señor Lesseps no cabía en sí de orgullo.',
      'Por la noche hubo fuegos artificiales y un baile ofrecido por el jedive. Dicen que para la ocasión el maestro Verdi ha escrito una ópera, Aida, que se estrenará esta misma semana en El Cairo.',
      'Ahora se irá a la India en la mitad de tiempo. Yo vuelvo a Barcelona en un vapor francés, aunque ya me gustaría ir en avión o, mejor aún, ver todo esto en el cine.',
    ],
    despedida: 'Tu amigo,',
    firma: 'Joaquín',
    gazapos: {
      'aida': {
        termino: 'Aida',
        desde: 1871,
        explicacion: 'Verdi no la terminó a tiempo: se estrenó en El Cairo en diciembre de 1871.',
        epoca: 'En las fiestas de 1869 se representó en El Cairo «Rigoletto».',
      },
      'avión': {
        termino: 'avión',
        desde: 1890,
        explicacion: 'La palabra la inventa Clément Ader para su aparato de 1890; el primer vuelo a motor es de 1903, y los aviones de pasajeros, posteriores.',
        epoca: 'En 1869 se viajaba en vapor o en ferrocarril.',
      },
      'cine': {
        termino: 'cine',
        desde: 1895,
        explicacion: 'Los Lumière presentan el cinematógrafo en 1895.',
        epoca: 'En 1869 los espectáculos de imágenes eran la linterna mágica y el diorama.',
      },
    },
    trampas: {
      'eugenia': { termino: 'Eugenia', desde: 1853, explicacion: 'La emperatriz de los franceses presidió la inauguración.' },
      'lesseps': { termino: 'Lesseps', desde: 1859, explicacion: 'Ferdinand de Lesseps dirigió las obras del canal.' },
      'jedive': { termino: 'jedive', desde: 1867, explicacion: 'Era el título del virrey de Egipto, Ismail Pachá.' },
      'vapor': { termino: 'vapor', desde: 1807, explicacion: 'En 1869 los vapores ya cruzaban todos los mares.' },
    },
  },

  {
    fecha: '2026-11-30',
    anio: 1609,
    encabezado: 'En Venecia, a 26 de agosto de 1609',
    saludo: 'Muy señor mío:',
    parrafos: [
      'El profesor Galileo, de Padua, ha subido a los senadores al campanario de San Marcos con un anteojo que acerca las cosas. Vieron las velas de los barcos dos horas antes de que entraran en el puerto.',
      'Aquí ya lo llaman telescopio, y dicen que con él se verán los mares de la Luna y los anillos de Saturno.',
      'Galileo es hombre curioso: lleva años estudiando cómo oscila el péndulo, y ahora quiere medir el peso del aire con un barómetro de su invención. Le mando un abrazo desde esta ciudad de agua.',
    ],
    despedida: 'Su servidor,',
    firma: 'Juan de Mendoza',
    gazapos: {
      'telescopio': {
        termino: 'telescopio',
        desde: 1611,
        explicacion: 'El nombre se le dio al instrumento en 1611.',
        epoca: 'En 1609 se decía anteojo, o, en italiano, occhiale.',
      },
      'anillos': {
        termino: 'anillos de Saturno',
        desde: 1655,
        explicacion: 'En 1610 Galileo vio en Saturno dos «asas» que no supo explicar; los anillos los describió Huygens en 1655.',
        epoca: 'En 1609 nadie había visto Saturno más que como un punto de luz.',
      },
      'barómetro': {
        termino: 'barómetro',
        desde: 1643,
        explicacion: 'Lo inventa Torricelli, discípulo de Galileo, en 1643.',
        epoca: 'En 1609 nadie sabía medir el peso del aire.',
      },
    },
    trampas: {
      'anteojo': { termino: 'anteojo', desde: 1608, explicacion: 'Así se llamaba al telescopio en español.' },
      'galileo': { termino: 'Galileo', desde: 1592, explicacion: 'Presentó su anteojo al Senado de Venecia en agosto de 1609.' },
      'péndulo': { termino: 'péndulo', desde: 1602, explicacion: 'Galileo estudiaba las oscilaciones del péndulo desde principios de siglo.' },
      'campanario': { termino: 'campanario', desde: 1514, explicacion: 'El de San Marcos servía de atalaya sobre la laguna.' },
    },
  },

  {
    fecha: '2026-12-01',
    anio: 1912,
    encabezado: 'En Southampton, a 9 de abril de 1912',
    saludo: 'Querida Carmen:',
    parrafos: [
      'Mañana embarco en el Titanic, el transatlántico más grande del mundo. Dicen que es insumergible, y que tiene piscina, gimnasio y hasta baño turco.',
      'Viajo en tercera, con unos vascos que van a hacer las Américas. Si hay algún problema, el telegrafista puede pedir socorro con el sistema Marconi, y el radar avisará de los icebergs.',
      'Desde Nueva York te mandaré un correo electrónico. Llevo poco equipaje: una maleta de nailon y la foto de los niños.',
    ],
    despedida: 'Tu marido,',
    firma: 'Ramón',
    gazapos: {
      'radar': {
        termino: 'radar',
        desde: 1940,
        explicacion: 'El radar se desarrolla en los años treinta.',
        epoca: 'En 1912 los icebergs los buscaban los vigías desde la cofa, y los avisos llegaban por radiotelegrafía.',
      },
      'electrónico': {
        termino: 'correo electrónico',
        desde: 1971,
        explicacion: 'El correo electrónico es de los años setenta, y se populariza en los noventa.',
        epoca: 'En 1912 se mandaba una carta o, si había prisa, un cable.',
      },
      'nailon': {
        termino: 'nailon',
        desde: 1938,
        explicacion: 'DuPont lo presenta en 1938.',
        epoca: 'En 1912 las maletas eran de cuero, de cartón o de mimbre.',
      },
    },
    trampas: {
      'titanic': { termino: 'Titanic', desde: 1911, explicacion: 'Zarpó de Southampton el 10 de abril de 1912.' },
      'transatlántico': { termino: 'transatlántico', desde: 1880, aprox: true, explicacion: 'La palabra era habitual en 1912.' },
      'telegrafista': { termino: 'telegrafista', desde: 1850, aprox: true, explicacion: 'El Titanic llevaba dos operadores de la compañía Marconi.' },
      'piscina': { termino: 'piscina', desde: 1450, aprox: true, explicacion: 'El Titanic tenía piscina cubierta, algo rarísimo entonces.' },
    },
  },

  {
    fecha: '2026-12-02',
    anio: 1741,
    encabezado: 'En Cartagena de Indias, a 22 de mayo de 1741',
    saludo: 'Querida esposa:',
    parrafos: [
      'Por fin se han ido los ingleses. El almirante Vernon llegó en marzo con la mayor flota que se ha visto en estos mares, y dicen que en Londres ya habían acuñado medallas celebrando una victoria que no ha tenido.',
      'Don Blas de Lezo, cojo, manco y tuerto, ha defendido la ciudad con un puñado de hombres, y el castillo de San Felipe ha resistido. Las fiebres y el vómito negro han hecho el resto.',
      'Los ingleses traían dinamita para volar las murallas, ametralladoras para barrer los baluartes y hasta un submarino, pero no les sirvió de nada.',
    ],
    despedida: 'Tu marido, que pronto te abrazará,',
    firma: 'Sebastián',
    gazapos: {
      'dinamita': {
        termino: 'dinamita',
        desde: 1867,
        explicacion: 'Nobel la patenta en 1867.',
        epoca: 'En 1741 se abrían brechas con minas de pólvora y a cañonazos.',
      },
      'ametralladoras': {
        termino: 'ametralladora',
        desde: 1862,
        explicacion: 'Las ametralladoras son de la segunda mitad del siglo XIX.',
        epoca: 'En 1741 se barría un baluarte con metralla de cañón y descargas de fusilería.',
      },
      'submarino': {
        termino: 'submarino',
        desde: 1850, aprox: true,
        explicacion: 'Los submarinos de guerra son del siglo XIX, y la palabra también.',
        epoca: 'En 1741 la guerra en el mar se hacía con navíos de línea y brulotes.',
      },
    },
    trampas: {
      'vernon': { termino: 'Vernon', desde: 1739, explicacion: 'Edward Vernon mandó el ataque a Cartagena de Indias en 1741.' },
      'lezo': { termino: 'Blas de Lezo', desde: 1704, explicacion: 'Dirigió la defensa de la ciudad; murió ese mismo año.' },
      'medallas': { termino: 'medalla', desde: 1741, explicacion: 'En Inglaterra se acuñaron medallas que daban la victoria por hecha.' },
      'vómito': { termino: 'vómito negro', desde: 1650, aprox: true, explicacion: 'Así se llamaba entonces a la fiebre amarilla.' },
    },
  },

  {
    fecha: '2026-12-03',
    anio: 1469,
    encabezado: 'En Valladolid, a 20 de octubre de 1469',
    saludo: 'Muy querida prima:',
    parrafos: [
      'Ayer se casaron en el palacio de los Vivero la princesa Isabel y el príncipe don Fernando de Aragón, que llegó disfrazado de mozo de mulas para que no lo prendieran. Dicen que la dispensa del Papa es falsa, pero nadie lo dirá en voz alta.',
      'Hubo vihuelas, danzas y un banquete con cabrito, empanadas y chocolate caliente, que la princesa apenas probó.',
      'Ya hay quien los llama los Reyes Católicos y jura que algún día reinarán en toda España. Yo, por si acaso, he comprado tabaco para celebrarlo.',
    ],
    despedida: 'Tu prima, que te quiere,',
    firma: 'Beatriz',
    gazapos: {
      'chocolate': {
        termino: 'chocolate',
        desde: 1590,
        explicacion: 'El cacao llega a España desde América en el siglo XVI.',
        epoca: 'Un banquete castellano de 1469 se remataba con frutas, confites y vino.',
      },
      'católicos': {
        termino: 'Reyes Católicos',
        desde: 1496,
        explicacion: 'El papa Alejandro VI les da ese título en 1496.',
        epoca: 'En 1469 eran solo los príncipes Isabel y Fernando.',
      },
      'tabaco': {
        termino: 'tabaco',
        desde: 1492,
        explicacion: 'Los europeos lo conocen con el primer viaje de Colón, en 1492.',
        epoca: 'En 1469 se habría celebrado con un buen vino de Toro.',
      },
    },
    trampas: {
      'vivero': { termino: 'palacio de los Vivero', desde: 1469, explicacion: 'La boda se celebró allí el 19 de octubre de 1469.' },
      'dispensa': { termino: 'dispensa', desde: 1250, aprox: true, explicacion: 'La palabra es medieval. Como eran primos, necesitaban la dispensa del Papa, y la que presentaron se tiene por falsificada.' },
      'vihuelas': { termino: 'vihuela', desde: 1450, aprox: true, explicacion: 'El instrumento de cuerda era muy popular en el siglo XV.' },
      'mulas': { termino: 'mozo de mulas', desde: 1100, aprox: true, explicacion: 'Fernando atravesó Castilla disfrazado para que no lo detuvieran.' },
    },
  },

  {
    fecha: '2026-12-04',
    anio: 1992,
    encabezado: 'En Sevilla, a 21 de abril de 1992',
    saludo: 'Querida Inma:',
    parrafos: [
      'Ayer abrieron la Expo, y esta mañana ha llegado el primer AVE comercial desde Madrid, en menos de tres horas. En la isla de la Cartuja hay pabellones de más de cien países, y Curro, la mascota, está por todas partes.',
      'En el pabellón de Telefónica te enseñan un teléfono móvil del tamaño de un ladrillo, y en la oficina ya mandamos los pedidos por fax.',
      'Te mando un tuit con las fotos, y si quieres verlo en directo, te hago una videollamada desde el móvil. Ah, y la entrada se paga en euros.',
    ],
    despedida: 'Un abrazo,',
    firma: 'Paco',
    gazapos: {
      'tuit': {
        termino: 'tuit',
        desde: 2006,
        explicacion: 'Twitter nace en 2006.',
        epoca: 'En 1992 las fotos se mandaban por correo, después de revelar el carrete.',
      },
      'videollamada': {
        termino: 'videollamada',
        desde: 2010, aprox: true,
        explicacion: 'Las videollamadas se popularizan con los teléfonos inteligentes, ya en el siglo XXI.',
        epoca: 'En 1992, para ver la Expo en directo, había que encender la tele.',
      },
      'euros': {
        termino: 'euro',
        desde: 1999,
        explicacion: 'El euro nace en 1999 y se usa en la calle desde 2002.',
        epoca: 'En 1992 la entrada de la Expo se pagaba en pesetas.',
      },
    },
    trampas: {
      'ave': { termino: 'AVE', desde: 1992, explicacion: 'El tren de alta velocidad Madrid-Sevilla empezó a funcionar en abril de 1992.' },
      'curro': { termino: 'Curro', desde: 1989, explicacion: 'La mascota de la Expo 92.' },
      'móvil': { termino: 'móvil', desde: 1983, explicacion: 'En 1992 ya había en España teléfonos móviles, grandes y caros.' },
      'fax': { termino: 'fax', desde: 1980, explicacion: 'En 1992 era imprescindible en cualquier oficina.' },
    },
  },

  {
    fecha: '2026-12-05',
    anio: 1752,
    encabezado: 'En Filadelfia, a 1 de julio de 1752',
    saludo: 'Querido hermano:',
    parrafos: [
      'Aquí todos hablan del señor Franklin, el impresor. Dicen que, en plena tormenta, echó a volar una cometa con una llave atada al hilo, y sacó chispas de las nubes.',
      'Asegura que el rayo y la electricidad son la misma cosa, y que esa fuerza puede guardarse en una botella de Leiden. Ya imagina poner en cada casa una bombilla que alumbre sin aceite.',
      'Me ha prometido que algún día hablaremos por teléfono de una orilla a otra del océano. Mientras, te escribo esta carta, que tardará dos meses en llegar, y te mando unas fotografías de la ciudad.',
    ],
    despedida: 'Tu hermano,',
    firma: 'Antonio',
    gazapos: {
      'bombilla': {
        termino: 'bombilla',
        desde: 1879,
        explicacion: 'La bombilla incandescente práctica es de 1879.',
        epoca: 'En 1752 se alumbraban con velas y candiles.',
      },
      'teléfono': {
        termino: 'teléfono',
        desde: 1876,
        explicacion: 'Bell lo patenta en 1876.',
        epoca: 'En 1752 solo se podía escribir y esperar.',
      },
      'fotografías': {
        termino: 'fotografía',
        desde: 1839,
        explicacion: 'La fotografía nace en 1839.',
        epoca: 'En 1752 se mandaban grabados o dibujos.',
      },
    },
    trampas: {
      'franklin': { termino: 'Franklin', desde: 1752, explicacion: 'Su experimento de la cometa se fecha en junio de 1752.' },
      'cometa': { termino: 'cometa', desde: 1729, explicacion: 'El juguete ya estaba en el Diccionario de Autoridades de 1729: papel engrudado, unos alambres y un cordel largo, para que se remonte con el viento.' },
      'electricidad': { termino: 'electricidad', desde: 1646, explicacion: 'La palabra nace en el siglo XVII, y en 1752 todos los sabios de Europa hablaban de ella.' },
      'leiden': { termino: 'botella de Leiden', desde: 1745, explicacion: 'Se inventó en 1745.' },
    },
  },

  {
    fecha: '2026-12-06',
    anio: 1520,
    encabezado: 'En el puerto de San Julián, a 20 de agosto de 1520',
    saludo: 'Muy querido padre:',
    parrafos: [
      'Le escribo desde esta bahía helada donde Magallanes nos ha hecho invernar. En abril se amotinaron los capitanes de tres naos: Mendoza murió a puñaladas y Quesada ha sido ajusticiado.',
      'Hemos visto a un hombre tan alto que le llegábamos a la cintura. El capitán general los llama patagones.',
      'Ahora que acaba el invierno seguiremos hacia el sur hasta encontrar el paso al mar Pacífico. Dicen que más al norte hay un gran río, el de Solís, cuya tierra llegará a llamarse Argentina, y unas islas Malvinas donde pescan los franceses.',
    ],
    despedida: 'Su hijo, que le pide la bendición,',
    firma: 'Martín',
    gazapos: {
      'pacífico': {
        termino: 'Pacífico',
        desde: 1520,
        explicacion: 'Magallanes lo bautizó así al salir del estrecho, en noviembre de 1520.',
        epoca: 'En agosto de 1520 se hablaba de la Mar del Sur.',
      },
      'argentina': {
        termino: 'Argentina',
        desde: 1602,
        explicacion: 'El nombre, por la plata que buscaban los conquistadores, se usa desde principios del siglo XVII.',
        epoca: 'En 1520 aquella tierra no tenía nombre para los españoles.',
      },
      'malvinas': {
        termino: 'Malvinas',
        desde: 1764,
        explicacion: 'El nombre viene de los marinos de Saint-Malo que llegaron a las islas en el siglo XVIII.',
        epoca: 'En 1520 nadie las había avistado aún con seguridad.',
      },
    },
    trampas: {
      'magallanes': { termino: 'Magallanes', desde: 1520, explicacion: 'Invernó en San Julián de abril a agosto de 1520.' },
      'patagones': { termino: 'patagón', desde: 1520, explicacion: 'Así llamaron los hombres de Magallanes a los tehuelches en 1520.' },
      'naos': { termino: 'nao', desde: 1250, aprox: true, explicacion: 'La flota de Magallanes era de cinco naos.' },
      'solís': { termino: 'Solís', desde: 1516, explicacion: 'Juan Díaz de Solís llegó al estuario en 1516.' },
    },
  },

  {
    fecha: '2026-12-07',
    anio: 1896,
    encabezado: 'En Madrid, a 16 de mayo de 1896',
    saludo: 'Querida Pilar:',
    parrafos: [
      'Ayer vimos el cinematógrafo de los hermanos Lumière en el hotel Rusia, en la Carrera de San Jerónimo. Un tren entraba en una estación y las señoras se echaban hacia atrás, asustadas.',
      'A la salida, mi primo nos llevó en bicicleta hasta Sol, y en casa de los Osorio oímos un fonógrafo que repite las voces como un loro.',
      'Dicen que pronto podremos ver estas imágenes en casa, en una televisión, y oír la música por la radio. Mi tío asegura que algún día las cuentas de la casa las hará un ordenador.',
    ],
    despedida: 'Tu amiga,',
    firma: 'Concha',
    gazapos: {
      'televisión': {
        termino: 'televisión',
        desde: 1926,
        explicacion: 'Las primeras emisiones de televisión son de los años veinte y treinta; en España llega en 1956.',
        epoca: 'En 1896 las imágenes en movimiento solo se veían en el cinematógrafo.',
      },
      'radio': {
        termino: 'radio',
        desde: 1924,
        explicacion: 'Las emisiones de radio para el público empiezan en los años veinte.',
        epoca: 'En 1896 la música se oía en el fonógrafo o en el teatro.',
      },
      'ordenador': {
        termino: 'ordenador',
        desde: 1965,
        explicacion: 'Los ordenadores aparecen a mediados del siglo XX, y el nombre en España es de los sesenta.',
        epoca: 'En 1896 las cuentas se hacían a mano o con una máquina de calcular mecánica.',
      },
    },
    trampas: {
      'cinematógrafo': { termino: 'cinematógrafo', desde: 1895, explicacion: 'La primera sesión en Madrid fue el 15 de mayo de 1896, en el hotel Rusia.' },
      'lumière': { termino: 'Lumière', desde: 1895, explicacion: 'Los hermanos Lumière lo presentaron en París en diciembre de 1895.' },
      'bicicleta': { termino: 'bicicleta', desde: 1869, explicacion: 'En 1896 estaba de moda en Madrid.' },
      'fonógrafo': { termino: 'fonógrafo', desde: 1877, explicacion: 'Edison lo inventó en 1877.' },
    },
  },

  {
    fecha: '2026-12-08',
    anio: 1808,
    encabezado: 'En Madrid, a 3 de mayo de 1808',
    saludo: 'Querido hijo:',
    parrafos: [
      'Ayer el pueblo se levantó contra los franceses cuando quisieron llevarse al infante don Francisco de Paula. En la Puerta del Sol cargaron los mamelucos de Murat, y en el parque de Monteleón resistieron los capitanes Daoíz y Velarde.',
      'Esta madrugada han fusilado a muchos en la montaña del Príncipe Pío.',
      'No salgas de casa. Han cerrado el metro, no pasan tranvías por la calle Mayor y solo se oyen las metralletas de los franceses.',
    ],
    despedida: 'Tu madre, que no deja de rezar por ti,',
    firma: 'Josefa',
    gazapos: {
      'metro': {
        termino: 'metro',
        desde: 1919,
        explicacion: 'El metro de Madrid se inaugura en 1919.',
        epoca: 'En 1808 Madrid se recorría a pie, en calesa o en coche de caballos.',
      },
      'tranvías': {
        termino: 'tranvía',
        desde: 1871,
        explicacion: 'Los primeros tranvías de Madrid, tirados por mulas, son de 1871.',
        epoca: 'En 1808 por la calle Mayor pasaban carros y coches de caballos.',
      },
      'metralletas': {
        termino: 'metralleta',
        desde: 1918,
        explicacion: 'Las metralletas son armas del siglo XX.',
        epoca: 'Los franceses de 1808 disparaban fusiles de chispa y cañones.',
      },
    },
    trampas: {
      'mamelucos': { termino: 'mameluco', desde: 1250, aprox: true, explicacion: 'Napoleón traía un escuadrón de mamelucos, jinetes egipcios.' },
      'murat': { termino: 'Murat', desde: 1808, explicacion: 'Joaquín Murat mandaba las tropas francesas en Madrid.' },
      'daoíz': { termino: 'Daoíz', desde: 1808, explicacion: 'Luis Daoíz murió defendiendo el parque de Monteleón el 2 de mayo de 1808.' },
      'monteleón': { termino: 'Monteleón', desde: 1690, aprox: true, explicacion: 'Era el palacio de los duques de Monteleón, de finales del siglo XVII, convertido en parque de artillería. Allí resistieron Daoíz y Velarde.' },
    },
  },

  {
    fecha: '2026-12-09',
    anio: 1776,
    encabezado: 'En el presidio de San Francisco, a 10 de octubre de 1776',
    saludo: 'Querida madre:',
    parrafos: [
      'Ayer se celebró la fundación solemne de la misión de San Francisco de Asís, que atiende el padre Palóu, junto a una laguna que llaman de los Dolores. El teniente Moraga ha levantado el presidio en la punta que mira a la bahía.',
      'Dentro de la bahía hay una isla llena de pelícanos que don Juan Manuel de Ayala llamó de los Alcatraces. Los indios de la tierra pescan en balsas de juncos.',
      'Dicen que más al sur se fundará otro pueblo, el de Los Ángeles, y que algún día allí se harán películas en Hollywood. Yo me conformo con que el ferrocarril llegue hasta aquí y pueda ir a veros.',
    ],
    despedida: 'Su hijo,',
    firma: 'Juan Bautista',
    gazapos: {
      'ángeles': {
        termino: 'Los Ángeles',
        desde: 1781,
        explicacion: 'El pueblo de Nuestra Señora la Reina de los Ángeles se funda en 1781.',
        epoca: 'En 1776 en aquella llanura solo había aldeas de los tongva.',
      },
      'hollywood': {
        termino: 'Hollywood',
        desde: 1887,
        explicacion: 'El barrio nace a finales del siglo XIX, y el cine llega en la década de 1910.',
        epoca: 'En 1776 no había cine en ninguna parte del mundo.',
      },
      'ferrocarril': {
        termino: 'ferrocarril',
        desde: 1869,
        explicacion: 'El primer ferrocarril llega a California en 1869.',
        epoca: 'En 1776 se viajaba a caballo, en carreta o en barco.',
      },
    },
    trampas: {
      'palóu': { termino: 'Palóu', desde: 1776, explicacion: 'Fray Francisco Palóu fundó la misión de Dolores en 1776; la ceremonia solemne fue el 9 de octubre.' },
      'moraga': { termino: 'Moraga', desde: 1776, explicacion: 'José Joaquín Moraga fundó el presidio en septiembre de 1776.' },
      'alcatraces': { termino: 'Alcatraz', desde: 1775, explicacion: 'Ayala bautizó la isla en 1775 por las aves marinas.' },
      'dolores': { termino: 'Dolores', desde: 1776, explicacion: 'La misión toma su nombre popular de la laguna de los Dolores.' },
    },
  },

  {
    fecha: '2026-12-10',
    anio: 1910,
    encabezado: 'En Granada, a 19 de mayo de 1910',
    saludo: 'Querida Lola:',
    parrafos: [
      'Anoche la Tierra atravesó la cola del cometa Halley. Media Granada se subió a la Alhambra a mirar el cielo, y muchos no se acostaron porque decían que el gas de la cola nos iba a envenenar a todos.',
      'En la farmacia vendían píldoras y antibióticos contra el cometa, y el boticario ha hecho su agosto. Hasta salió en el periódico una foto tomada desde un aeroplano.',
      'Yo, que soy moderno, dije que no pasaría nada, y aquí estamos. Dicen que la próxima vez, en 1986, lo verán los astronautas desde su nave, y los demás nos enteraremos por internet.',
    ],
    despedida: 'Tu prima,',
    firma: 'Amparo',
    gazapos: {
      'antibióticos': {
        termino: 'antibiótico',
        desde: 1942,
        explicacion: 'La penicilina se descubre en 1928 y la palabra «antibiótico» es de los años cuarenta.',
        epoca: 'En 1910 se vendían píldoras y jarabes milagrosos.',
      },
      'astronautas': {
        termino: 'astronauta',
        desde: 1928,
        explicacion: 'La palabra nace a finales de los años veinte, y el primer hombre en el espacio es de 1961.',
        epoca: 'En 1910 se hablaba de viajes a la Luna solo en las novelas de Julio Verne.',
      },
      'internet': {
        termino: 'internet',
        desde: 1974,
        explicacion: 'La red llega a las casas en los años noventa.',
        epoca: 'En 1910 las noticias llegaban por el periódico y el telégrafo.',
      },
    },
    trampas: {
      'halley': { termino: 'Halley', desde: 1758, explicacion: 'La Tierra atravesó la cola del cometa en la noche del 18 al 19 de mayo de 1910.' },
      'gas': { termino: 'gas', desde: 1650, aprox: true, explicacion: 'Se había detectado cianógeno en la cola, y eso desató el miedo.' },
      'aeroplano': { termino: 'aeroplano', desde: 1903, explicacion: 'En 1910 ya volaban en Europa y se hacían fotos desde ellos.' },
      'píldoras': { termino: 'píldora', desde: 1500, aprox: true, explicacion: 'Hubo quien vendió «píldoras anticometa».' },
    },
  },
];
