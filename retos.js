/* Gazapo · retos.js
   Un reto por día. Para añadir días, copia un bloque y cambia la fecha de publicación.
   - fecha: día de publicación (AAAA-MM-DD, hora de Madrid).
   - anio: año en que se escribe el texto.
   - encabezado: lugar y fecha de la carta (no se puede tocar).
   - saludo, parrafos, despedida, firma: el texto de la carta. Todas sus palabras se pueden tocar.
   - gazapos y trampas: la clave es la palabra tal como aparece en el texto, en minúsculas.
     · gazapos: { termino, explicacion, epoca } (epoca: lo que se habría escrito entonces).
     · trampas: { termino, explicacion }.
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
        explicacion: 'Viene del francés sofa, que a su vez la tomó del turco y del árabe. En español no se documenta hasta el siglo XVIII.',
        epoca: 'En 1590, Diego se habría sentado en un escaño o en el estrado de la casa.',
      },
      'café': {
        termino: 'café',
        explicacion: 'La bebida no llega a Europa hasta el siglo XVII, y la palabra no aparece en español hasta finales de ese siglo.',
        epoca: 'Un genovés de 1590 quizá le habría ofrecido un vaso de aloja, agua con miel y especias.',
      },
      'periódico': {
        termino: 'periódico',
        explicacion: 'Como nombre de la prensa es del siglo XVIII. La primera gaceta impresa en España, la de Madrid, no sale hasta 1661.',
        epoca: 'En 1590 las noticias llegaban en avisos y relaciones, muchas veces manuscritos.',
      },
    },
    trampas: {
      'huracán': { termino: 'huracán', explicacion: 'Parece moderna, pero es una palabra taína que los cronistas de Indias ya usan a comienzos del siglo XVI.' },
      'cacao': { termino: 'cacao', explicacion: 'Del náhuatl. Ya aparece en las crónicas de Indias en la primera mitad del siglo XVI.' },
      'tabaco': { termino: 'tabaco', explicacion: 'Fernández de Oviedo ya lo describe en 1535. En la Sevilla de 1590 su consumo iba en aumento.' },
      'hamacas': { termino: 'hamaca', explicacion: 'Palabra taína que entra en el español con las primeras crónicas de Indias, a comienzos del siglo XVI.' },
      'canoas': { termino: 'canoa', explicacion: 'Se tiene por la primera palabra americana del español: ya está en el diario de Colón, en 1492.' },
      'tomates': { termino: 'tomate', explicacion: 'Del náhuatl tomatl. Se documenta en español hacia 1532.' },
      'millones': { termino: 'millones', explicacion: 'Suena a cifra moderna, pero el «servicio de millones» fue un impuesto real que las Cortes aprobaron precisamente en 1590.' },
    },
  },

  // Borrador: textos y datos de este día y del siguiente pendientes de revisión.
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
        explicacion: 'La técnica se presenta en París en 1839, y la palabra nace ese mismo año. En 1812 aún faltaban casi tres décadas.',
        epoca: 'Antonio habría pedido un retrato en miniatura, pintado a mano.',
      },
      'telegrama': {
        termino: 'telegrama',
        explicacion: 'Es el mensaje del telégrafo eléctrico, que no llega a España hasta mediados del siglo XIX. La palabra se forma en inglés en la década de 1850.',
        epoca: 'Con prisa, la tía le habría mandado una carta por un propio, un mensajero a caballo.',
      },
      'tranvía': {
        termino: 'tranvía',
        explicacion: 'Viene del inglés tramway. El primer tranvía de España, de mulas, no circula hasta 1871, en Madrid.',
        epoca: 'En el Cádiz de 1812, Manuel habría ido en calesa.',
      },
    },
    trampas: {
      'liberales': { termino: 'liberal', explicacion: 'Parece de otro siglo, pero el sentido político nace justo aquí, en las Cortes de Cádiz, hacia 1810. De Cádiz pasó a las demás lenguas de Europa.' },
      'serviles': { termino: 'servil', explicacion: 'Así llamaban los liberales de Cádiz a los partidarios del absolutismo. El mote es de estos mismos años.' },
      'guerrilla': { termino: 'guerrilla', explicacion: 'Las partidas que hostigaban a los franceses desde 1808 dieron fama a la palabra, que del español pasó al inglés y al francés.' },
      'telégrafo': { termino: 'telégrafo', explicacion: 'No el eléctrico, sino el óptico: torres que se pasaban señales a la vista. Agustín de Betancourt montó uno entre Madrid y Aranjuez hacia 1800.' },
      'vacuna': { termino: 'vacuna', explicacion: 'La vacuna de la viruela llega a España hacia 1800, y en 1803 la expedición de Balmis la lleva a América y Filipinas.' },
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
        explicacion: 'El cinematógrafo de los Lumière se estrena en 1895, y el acortamiento cine es ya del siglo XX.',
        epoca: 'En 1888 lo moderno era ir a ver un panorama o una función de linterna mágica.',
      },
      'avión': {
        termino: 'avión',
        explicacion: 'La palabra la inventa el francés Clément Ader para su aparato de 1890, y en español no se generaliza hasta los primeros vuelos, ya en el siglo XX.',
        epoca: 'El francés de 1888 habría cruzado el puerto en globo.',
      },
      'nailon': {
        termino: 'nailon',
        explicacion: 'Es una marca de la casa DuPont, que presenta la fibra en 1938. Las primeras medias de nailon se venden en 1939.',
        epoca: 'Joaquín le habría llevado unas medias de seda.',
      },
    },
    trampas: {
      'electricidad': { termino: 'electricidad', explicacion: 'La palabra es del siglo XVIII. Y la Exposición de 1888 se iluminó, en efecto, con luz eléctrica.' },
      'tranvía': { termino: 'tranvía', explicacion: 'En 1812 era un gazapo; en 1888, no. Barcelona tenía tranvía de caballos desde 1872.' },
      'fotografías': { termino: 'fotografía', explicacion: 'La palabra corre desde 1839, y en 1888 los estudios de fotografía abundaban en Barcelona.' },
      'teléfono': { termino: 'teléfono', explicacion: 'En Barcelona se hicieron pruebas con el teléfono de Bell ya en 1877, un año después de su patente.' },
      'telegrama': { termino: 'telegrama', explicacion: 'El telégrafo eléctrico llevaba más de treinta años funcionando en España, y la palabra era de uso corriente.' },
    },
  },

  // Borrador: retos del 11 de octubre al 10 de noviembre, pendientes de revisión.
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
        explicacion: 'Lo construye en Florencia Bartolomeo Cristofori hacia 1700.',
        epoca: 'En 1605, doña Inés habría tocado el clavicordio o la vihuela.',
      },
      'telescopio': {
        termino: 'telescopio',
        explicacion: 'El anteojo de larga vista se presenta en Holanda en 1608, Galileo lo apunta a la Luna en 1609 y la palabra telescopio se acuña en 1611.',
        epoca: 'En 1605 nadie había visto aún las montañas de la Luna.',
      },
      'pararrayos': {
        termino: 'pararrayos',
        explicacion: 'Lo inventa Benjamin Franklin hacia 1752.',
        epoca: 'En 1605, contra las tormentas se tocaban las campanas «a nublado».',
      },
    },
    trampas: {
      'coches': { termino: 'coche', explicacion: 'Los coches de caballos se pusieron de moda en la Corte de Felipe II, y la palabra, de origen húngaro, ya corría a mediados del siglo XVI.' },
      'novela': { termino: 'novela', explicacion: 'Del italiano novella. En español se usa desde el siglo XVI, y Cervantes llamará Novelas ejemplares a las suyas en 1613.' },
      'chocolate': { termino: 'chocolate', explicacion: 'El padre José de Acosta ya lo describe en 1590, y a comienzos del siglo XVII empezaba a ponerse de moda en la Corte.' },
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
        explicacion: 'El nombre lo propone el cartógrafo Martin Waldseemüller en 1507, en honor de Américo Vespucio.',
        epoca: 'En 1493 se hablaba de «las Indias» o de las islas halladas en la mar Océana.',
      },
      'chocolate': {
        termino: 'chocolate',
        explicacion: 'Colón no topa con el cacao hasta su cuarto viaje, en 1502, y la palabra chocolate no aparece en español hasta finales del siglo XVI.',
        epoca: 'En 1493 nadie en Europa había oído hablar de esa bebida.',
      },
      'pacífico': {
        termino: 'Pacífico',
        explicacion: 'Se lo pone Magallanes en 1520, al salir a él tras cruzar el estrecho. Núñez de Balboa lo había visto en 1513 y lo llamó mar del Sur.',
        epoca: 'En 1493 nadie sabía que existiera ese océano.',
      },
    },
    trampas: {
      'ají': { termino: 'ají', explicacion: 'Palabra taína que Colón ya recoge en su diario en enero de 1493: «ají, que es su pimienta».' },
      'caníbales': { termino: 'caníbal', explicacion: 'Nace precisamente con Colón, que en su diario llama así a los caribes que, según le contaban, comían hombres.' },
      'gramática': { termino: 'gramática', explicacion: 'La Gramática de la lengua castellana de Nebrija se publicó en Salamanca en agosto de 1492.' },
      'imprenta': { termino: 'imprenta', explicacion: 'En Barcelona se imprimía desde la década de 1470, y la carta de Colón salió de una prensa barcelonesa en abril de 1493.' },
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
        explicacion: 'Es palabra japonesa. En español se empieza a usar en el siglo XX y no se hace común hasta el maremoto del océano Índico, en 2004.',
        epoca: 'Los gaditanos de 1755 hablaron de «la inundación» o de «la salida del mar».',
      },
      'epicentro': {
        termino: 'epicentro',
        explicacion: 'La acuñan los estudiosos de los terremotos en la segunda mitad del siglo XIX.',
        epoca: 'En 1755 se sabía, como mucho, que el temblor «venía del mar».',
      },
      'sismógrafo': {
        termino: 'sismógrafo',
        explicacion: 'Los primeros aparatos capaces de registrar un terremoto son de finales del siglo XIX.',
        epoca: 'En 1755 no había aparato que midiera un temblor: se contaba cuánto había durado y qué había derribado.',
      },
    },
    trampas: {
      'barómetro': { termino: 'barómetro', explicacion: 'Lo inventa Torricelli en 1643, y en el siglo XVIII era un instrumento corriente en casa de los curiosos.' },
      'termómetro': { termino: 'termómetro', explicacion: 'Los primeros son de comienzos del siglo XVII, y en 1755 ya había termómetros de mercurio, como los de Fahrenheit.' },
      'café': { termino: 'café', explicacion: 'En 1755 se tomaba ya en toda Europa, y en España empezaba a ponerse de moda.' },
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
        explicacion: 'El metro lo define la Francia revolucionaria en la década de 1790.',
        epoca: 'Un español de 1783 habría medido el globo en pies o en varas.',
      },
      'dirigibles': {
        termino: 'dirigible',
        explicacion: 'El primer globo que de verdad se gobierna es el de Henri Giffard, en 1852, y el nombre de dirigible se generaliza después.',
        epoca: 'En 1783 solo se hablaba de globos o de máquinas aerostáticas.',
      },
      'guillotina': {
        termino: 'guillotina',
        explicacion: 'El doctor Guillotin propone una máquina así en 1789, y la primera ejecución con ella es de 1792. El nombre viene de su apellido.',
        epoca: 'En la Francia de 1783 se ajusticiaba en la horca o en la rueda, y a los nobles, con el hacha o la espada.',
      },
    },
    trampas: {
      'gas': { termino: 'gas', explicacion: 'La inventa a partir del griego caos el químico flamenco Van Helmont, a mediados del siglo XVII.' },
      'pararrayos': { termino: 'pararrayos', explicacion: 'En 1605 era un gazapo; en 1783, no. Franklin lo había inventado treinta años antes, y ya se ponían en los edificios de Francia.' },
      'café': { termino: 'café', explicacion: 'En París había cafés desde finales del siglo XVII: el Procope abrió en 1686.' },
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
        explicacion: 'Las primeras lentes para leer aparecen en Italia hacia 1286.',
        epoca: 'Martín se habría ayudado de una piedra de lectura, un cristal que se apoyaba sobre el libro.',
      },
      'imprenta': {
        termino: 'imprenta',
        explicacion: 'Gutenberg imprime con tipos móviles hacia 1450, y a España la imprenta no llega hasta la década de 1470.',
        epoca: 'En 1254 los libros se copiaban a mano, uno a uno.',
      },
      'naipes': {
        termino: 'naipes',
        explicacion: 'Las cartas de jugar no se conocen en Europa hasta la segunda mitad del siglo XIV.',
        epoca: 'Los criados de 1254 habrían jugado a los dados o a las tablas.',
      },
    },
    trampas: {
      'papel': { termino: 'papel', explicacion: 'En Játiva se fabricaba papel desde hacía más de un siglo, en uno de los primeros molinos de Europa.' },
      'ajedrez': { termino: 'ajedrez', explicacion: 'Lo trajeron los árabes, y en la península se jugaba ya hacia el año 1000. Alfonso X le dedicará un libro en 1283.' },
      'universidad': { termino: 'universidad', explicacion: 'La de Salamanca nace hacia 1218, y en 1254 Alfonso X le da su carta, con las primeras cátedras.' },
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
        explicacion: 'Alfred Nobel la patenta en 1867.',
        epoca: 'El túnel de Montgat se abrió con pólvora, pico y barrena.',
      },
      'sello': {
        termino: 'sello',
        explicacion: 'España no tiene sellos de correos hasta el 1 de enero de 1850.',
        epoca: 'En 1848 el porte de la carta lo pagaba, por lo general, quien la recibía.',
      },
      'bicicleta': {
        termino: 'bicicleta',
        explicacion: 'Los primeros velocípedos con pedales son de la década de 1860, y la palabra bicicleta no aparece hasta finales de esa década.',
        epoca: 'En 1848 los niños iban a la escuela a pie, o como mucho en un borrico.',
      },
    },
    trampas: {
      'ferrocarril': { termino: 'ferrocarril', explicacion: 'La palabra ya corría en los proyectos de los años treinta. En Cuba, entonces española, había ferrocarril desde 1837.' },
      'locomotora': { termino: 'locomotora', explicacion: 'Llegó con las primeras máquinas de vapor sobre raíles, en la década de 1830. Las del Barcelona-Mataró se hicieron en Inglaterra.' },
      'túnel': { termino: 'túnel', explicacion: 'Del inglés tunnel, llegó con los primeros ferrocarriles. El de Montgat fue el primer túnel de ferrocarril de España.' },
      'daguerrotipo': { termino: 'daguerrotipo', explicacion: 'El invento de Daguerre se presentó en 1839, y ese mismo año ya se hizo uno en Barcelona.' },
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
        explicacion: 'La palabra aparece en Estados Unidos hacia 1913, y la música no llega a Europa hasta el final de la Primera Guerra Mundial.',
        epoca: 'La orquesta de un hotel de 1900 habría tocado valses y polcas.',
      },
      'radio': {
        termino: 'radio',
        explicacion: 'Marconi ya hacía pruebas de telegrafía sin hilos, pero las emisoras para el público no llegan hasta los años veinte. En España, Radio Barcelona empieza en 1924.',
        epoca: 'En 1900, el tiempo que iba a hacer se leía en el periódico.',
      },
      'tebeo': {
        termino: 'tebeo',
        explicacion: 'Viene de TBO, la revista infantil que nace en Barcelona en 1917.',
        epoca: 'Luis le habría comprado a Pepito un pliego de aleluyas o una revista ilustrada.',
      },
    },
    trampas: {
      'cinematógrafo': { termino: 'cinematógrafo', explicacion: 'Los Lumière lo estrenaron en 1895, y en la Exposición de 1900 proyectaron películas en una pantalla gigante.' },
      'metro': { termino: 'metro', explicacion: 'La primera línea del metro de París se inauguró el 19 de julio de 1900, en plena Exposición.' },
      'aspirina': { termino: 'aspirina', explicacion: 'La casa Bayer la registra en 1899, y enseguida se vende en las farmacias de media Europa.' },
      'olímpicos': { termino: 'olímpicos', explicacion: 'Los segundos Juegos Olímpicos modernos se celebraron en París en 1900, repartidos a lo largo de la Exposición.' },
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
        explicacion: 'Las ambulancias, hospitales que seguían a los ejércitos, las organiza en Francia el cirujano Larrey en la década de 1790, y la palabra llega al español en el siglo XIX.',
        epoca: 'A Gaspar lo habrían traído en la misma galera, entre los heridos.',
      },
      'uniforme': {
        termino: 'uniforme',
        explicacion: 'Los soldados de los tercios vestían cada uno a su costa. Los uniformes no se generalizan hasta finales del siglo XVII.',
        epoca: 'En 1571, a los soldados del rey de España los distinguía, como mucho, una banda roja.',
      },
      'bayonetas': {
        termino: 'bayoneta',
        explicacion: 'Toma el nombre de Bayona, en Francia, y se difunde en el siglo XVII.',
        epoca: 'En 1571 el soldado llevaba pica o arcabuz, y nunca las dos cosas en una.',
      },
    },
    trampas: {
      'galeazas': { termino: 'galeaza', explicacion: 'Eran galeras enormes, con cañones por todos lados. Venecia llevó seis a Lepanto, y fueron decisivas.' },
      'artillería': { termino: 'artillería', explicacion: 'Las galeras llevaban cañones a proa desde el siglo XV, y la palabra es aún más antigua.' },
      'mosquetes': { termino: 'mosquete', explicacion: 'El duque de Alba los generaliza en los tercios de Flandes en 1567, y en Lepanto ya los había.' },
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
        explicacion: 'El euro se adopta en 1999, y sus billetes y monedas circulan desde 2002.',
        epoca: 'En 1969 el apartamento se habría pagado en pesetas.',
      },
      'internet': {
        termino: 'internet',
        explicacion: 'En octubre de 1969 empieza a funcionar ARPANET, pero la palabra internet no se usa hasta los años setenta, y la red no llega a las casas españolas hasta los noventa.',
        epoca: 'En 1969 los horarios del tren se miraban en la estación o en el periódico.',
      },
      'móvil': {
        termino: 'móvil',
        explicacion: 'Los primeros teléfonos móviles comerciales son de los años ochenta, y en España no se popularizan hasta mediados de los noventa.',
        epoca: 'En 1969, Carmen habría dicho: «Llámame a casa, o pon una conferencia».',
      },
    },
    trampas: {
      'astronautas': { termino: 'astronauta', explicacion: 'La palabra es anterior a la carrera espacial, y en 1969 estaba en todos los periódicos.' },
      'transistor': { termino: 'transistor', explicacion: 'Se inventa en 1947, y en los sesenta las radios de transistores, los «transistores», estaban en todas partes.' },
      'seiscientos': { termino: 'seiscientos', explicacion: 'El SEAT 600 salió de la fábrica de Barcelona en 1957.' },
      'biquini': { termino: 'biquini', explicacion: 'Lo presenta en París Louis Réard en 1946. En Benidorm se permitió en los años cincuenta.' },
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
        explicacion: 'La palabra la propone Charles Sédillot en 1878, cuando Pasteur demuestra que los gérmenes causan enfermedades.',
        epoca: 'En 1348 se culpaba a los aires corruptos, a los astros o a la ira de Dios.',
      },
      'cuarentena': {
        termino: 'cuarentena',
        explicacion: 'El aislamiento de los que llegan por mar se ordena por primera vez en Ragusa, en 1377, y entonces era de treinta días. Los cuarenta, y el nombre, vienen después.',
        epoca: 'En 1348 se cerraban las puertas de la ciudad, y poco más.',
      },
      'termómetro': {
        termino: 'termómetro',
        explicacion: 'Los primeros son de comienzos del siglo XVII, y hasta el XIX no se usan para tomar la fiebre.',
        epoca: 'Un físico de 1348 tocaba la frente y el pulso del enfermo.',
      },
    },
    trampas: {
      'sangrías': { termino: 'sangría', explicacion: 'Nada que ver con la bebida: sacar sangre al enfermo era el remedio favorito de los médicos medievales.' },
      'jarabes': { termino: 'jarabe', explicacion: 'Del árabe. Los médicos medievales ya recetaban jarabes, y la palabra está en castellano desde la Edad Media.' },
      'arrozales': { termino: 'arrozal', explicacion: 'El arroz lo cultivaban en Valencia los andalusíes siglos antes, y la palabra viene del árabe.' },
      'azúcar': { termino: 'azúcar', explicacion: 'Palabra árabe. La caña de azúcar se cultivaba en la costa mediterránea de la península desde época andalusí.' },
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
        explicacion: 'Se inventa a mediados del siglo XVIII.',
        epoca: 'Para medir la altura del sol, los pilotos de 1519 usaban el astrolabio y el cuadrante.',
      },
      'cronómetro': {
        termino: 'cronómetro',
        explicacion: 'El reloj de marina que permitió calcular la longitud lo construye John Harrison en el siglo XVIII.',
        epoca: 'Magallanes llevaba ampolletas, relojes de arena.',
      },
      'filipinas': {
        termino: 'Filipinas',
        explicacion: 'Las islas reciben ese nombre en 1543, en honor del príncipe Felipe, el futuro Felipe II, que en 1519 aún no había nacido.',
        epoca: 'Magallanes buscaba las Molucas, las islas de la Especiería.',
      },
    },
    trampas: {
      'brasil': { termino: 'Brasil', explicacion: 'La tierra del palo brasil ya se llamaba así a comienzos del siglo XVI, y Magallanes recaló allí en diciembre de 1519.' },
      'contratación': { termino: 'Casa de la Contratación', explicacion: 'Se fundó en Sevilla en 1503 para gobernar el comercio con las Indias.' },
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
        explicacion: 'El tango nace en el Río de la Plata a finales del siglo XIX.',
        epoca: 'En 1810 se bailaban el minué, la contradanza y el cielito.',
      },
      'colectivo': {
        termino: 'colectivo',
        explicacion: 'Así llaman en Argentina al autobús desde que, en 1928, unos taxistas empezaron a llevar pasajeros a precio fijo.',
        epoca: 'En 1810 Anselmo habría ido a caballo o en carreta.',
      },
      'fútbol': {
        termino: 'fútbol',
        explicacion: 'Se reglamenta en Inglaterra en 1863, y los ingleses de Buenos Aires juegan el primer partido en 1867.',
        epoca: 'Un domingo de 1810 se jugaba al pato o a la taba.',
      },
    },
    trampas: {
      'mate': { termino: 'mate', explicacion: 'Los jesuitas ya cultivaban la yerba en sus misiones en el siglo XVII.' },
      'gauchos': { termino: 'gaucho', explicacion: 'La palabra ya corría en el Río de la Plata a finales del siglo XVIII.' },
      'periódico': { termino: 'periódico', explicacion: 'Belgrano sacaba en Buenos Aires el Correo de Comercio desde marzo de 1810.' },
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
        explicacion: 'Fleming la descubre en septiembre de 1928, pero no se usa para curar enfermos hasta los años cuarenta.',
        epoca: 'En 1929 una infección se trataba con reposo, desinfectantes y mucha suerte.',
      },
      'bolígrafo': {
        termino: 'bolígrafo',
        explicacion: 'Lo patenta el húngaro László Bíró en 1938, y en España no se populariza hasta los años cincuenta.',
        epoca: 'Rafael habría escrito con pluma estilográfica.',
      },
      'seat': {
        termino: 'SEAT',
        explicacion: 'La SEAT se funda en 1950, y su primer coche, el 1400, sale en 1953.',
        epoca: 'En 1929 Rafael habría soñado con un Ford o un Hispano-Suiza.',
      },
    },
    trampas: {
      'jazz': { termino: 'jazz', explicacion: 'En 1900 era un gazapo; en 1929, no: el jazz sonaba ya en los salones de baile de toda España.' },
      'autogiro': { termino: 'autogiro', explicacion: 'Juan de la Cierva hizo volar el primero en Getafe, en enero de 1923.' },
      'radio': { termino: 'radio', explicacion: 'Las emisoras españolas empiezan en 1924, y en 1929 la radio ya llegaba a medio país.' },
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
        explicacion: 'El chulapo es el madrileño castizo del siglo XIX, el de los sainetes y las verbenas.',
        epoca: 'En 1561 se habría hablado de los mozos y mozas de la villa.',
      },
      'organillo': {
        termino: 'organillo',
        explicacion: 'El organillo de manubrio, el de las verbenas, llega a Madrid en el siglo XIX.',
        epoca: 'En una fiesta de 1561 se bailaba al son de la gaita, el pandero y la vihuela.',
      },
      'zarzuelas': {
        termino: 'zarzuela',
        explicacion: 'El género toma el nombre del palacete de la Zarzuela, levantado para Felipe IV en la década de 1630, donde se representaban estas obras desde mediados del siglo XVII.',
        epoca: 'En 1561 se representaban comedias, autos y entremeses.',
      },
    },
    trampas: {
      'prado': { termino: 'Prado', explicacion: 'El Prado de San Jerónimo ya era el paseo de los madrileños; el museo no llegará hasta 1819.' },
      'atocha': { termino: 'Atocha', explicacion: 'La devoción a la Virgen de Atocha es medieval. La estación, que es lo que hoy suena a todos, es de 1851.' },
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
        explicacion: 'Las cadenas privadas no llegan a España hasta 1990; Telecinco empieza a emitir en marzo de ese año.',
        epoca: 'En 1982 solo estaban la Primera y el UHF de Televisión Española.',
      },
      'cedé': {
        termino: 'cedé',
        explicacion: 'El disco compacto sale a la venta en Japón en octubre de 1982, y en España no se populariza hasta finales de los ochenta.',
        epoca: 'Quique le habría guardado un elepé, un disco de vinilo.',
      },
      'mileurista': {
        termino: 'mileurista',
        explicacion: 'La palabra nace en 2005, con la carta de una lectora a un periódico.',
        epoca: 'En 1982 se habría dicho que no llegaba a fin de mes, y punto.',
      },
    },
    trampas: {
      'naranjito': { termino: 'Naranjito', explicacion: 'Fue la mascota del Mundial de 1982.' },
      'telediario': { termino: 'telediario', explicacion: 'Televisión Española lo emite desde 1957.' },
      'walkman': { termino: 'walkman', explicacion: 'Sony lo lanzó en 1979, y en 1982 ya era el sueño de cualquier adolescente.' },
      'pesetas': { termino: 'peseta', explicacion: 'Fue la moneda de España de 1868 a 2002.' },
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
        explicacion: 'La fuente se construye entre 1777 y 1782, por encargo de Carlos III.',
        epoca: 'En 1700 los aguadores llenaban sus cántaros en las fuentes de los viajes de agua.',
      },
      'lotería': {
        termino: 'lotería',
        explicacion: 'La primera lotería del Estado en España la crea Carlos III en 1763.',
        epoca: 'Antonio se habría jugado los cuartos a los naipes o en una rifa.',
      },
      'chotis': {
        termino: 'chotis',
        explicacion: 'Viene de una danza escocesa, a través del alemán schottisch, y llega a Madrid a mediados del siglo XIX.',
        epoca: 'En una pradera de 1700 se bailaban seguidillas.',
      },
    },
    trampas: {
      'borbón': { termino: 'Borbón', explicacion: 'Felipe de Anjou, Felipe V, fue el primer Borbón de España: el testamento de Carlos II, de octubre de 1700, le dejaba la corona.' },
      'pelucas': { termino: 'peluca', explicacion: 'Las pelucas largas estaban de moda en la Francia de Luis XIV, y ya se veían en España.' },
      'hechizado': { termino: 'hechizado', explicacion: 'A Carlos II le llamaron «el Hechizado», y en vida suya se le llegó a exorcizar.' },
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
        explicacion: 'Graham Bell lo patenta en 1876, y en España las primeras pruebas son de 1877.',
        epoca: 'En 1873 el patrón habría mandado recado al almacén con un chico.',
      },
      'bombilla': {
        termino: 'bombilla',
        explicacion: 'La bombilla eléctrica práctica es de Edison y Swan, en 1879.',
        epoca: 'El salón de 1873 se habría alumbrado con quinqués o con gas.',
      },
      'fonógrafo': {
        termino: 'fonógrafo',
        explicacion: 'Edison lo presenta en 1877.',
        epoca: 'En 1873 la música solo se oía en directo, o en una caja de música.',
      },
    },
    trampas: {
      'tranvía': { termino: 'tranvía', explicacion: 'En 1812 era un gazapo; en 1873, no. El de mulas de Madrid funcionaba desde 1871.' },
      'federales': { termino: 'federal', explicacion: 'La República federal era el programa de Pi y Margall, y los federales llenaban las calles desde 1869.' },
      'internacional': { termino: 'Internacional', explicacion: 'La Asociación Internacional de Trabajadores es de 1864, y su federación española, de 1870.' },
      'huelga': { termino: 'huelga', explicacion: 'En el sentido de parar el trabajo ya se usaba a mediados del siglo XIX; Barcelona vivió una gran huelga en 1855.' },
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
        explicacion: 'En los inventarios del Alcázar el cuadro es «la familia» del Rey. El título de Las Meninas aparece en el catálogo del Museo del Prado de 1843.',
        epoca: 'Juan habría hablado del retrato de la señora infanta con sus damas.',
      },
      'tubos': {
        termino: 'tubos de pintura',
        explicacion: 'Los tubos de estaño para el óleo los patenta el pintor John Rand en 1841.',
        epoca: 'En 1656 los colores se molían en el taller y se mezclaban con aceite cada día.',
      },
      'turistas': {
        termino: 'turista',
        explicacion: 'Viene del inglés tourist, de hacia 1800, y llega al español en el siglo XIX.',
        epoca: 'En 1656 solo podían ver el cuadro el Rey y quienes él quisiera.',
      },
    },
    trampas: {
      'perspectiva': { termino: 'perspectiva', explicacion: 'Los pintores del Renacimiento ya la estudiaban con reglas, y la palabra es aún más antigua.' },
      'óleo': { termino: 'óleo', explicacion: 'Se pintaba al óleo desde el siglo XV.' },
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
        explicacion: 'El todoterreno del ejército americano nace en 1941.',
        epoca: 'En 1914 los soldados iban a pie, a caballo o en camión.',
      },
      'radar': {
        termino: 'radar',
        explicacion: 'Se desarrolla en los años treinta, se usa por primera vez en la Segunda Guerra Mundial y el nombre es de 1940.',
        epoca: 'En 1914 el mar se vigilaba con prismáticos y reflectores.',
      },
      'insulina': {
        termino: 'insulina',
        explicacion: 'La descubren Banting y Best en Toronto en 1921.',
        epoca: 'En 1914 a un diabético solo se le ponía a dieta.',
      },
    },
    trampas: {
      'submarinos': { termino: 'submarino', explicacion: 'Isaac Peral botó el suyo en 1888, y en 1914 los alemanes tenían una flota entera.' },
      'avión': { termino: 'avión', explicacion: 'En 1888 era un gazapo; en 1914, no. Y en 1913 el aviador Robert Fowler cruzó, en efecto, el istmo de Panamá.' },
      'gramófono': { termino: 'gramófono', explicacion: 'Lo patenta Emile Berliner en 1887.' },
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
        explicacion: 'Las cerillas de fricción las inventa John Walker en 1826.',
        epoca: 'Para encender fuego, en 1766, había que usar yesca, pedernal y eslabón.',
      },
      'comunismo': {
        termino: 'comunismo',
        explicacion: 'La palabra se extiende en Francia hacia 1840, y el Manifiesto comunista es de 1848.',
        epoca: 'En 1766 se habría hablado de motín, de tumulto o de la plebe.',
      },
      'sindicatos': {
        termino: 'sindicato',
        explicacion: 'Los sindicatos obreros son del siglo XIX; en España no se permiten legalmente hasta 1887.',
        epoca: 'En 1766 los oficios se agrupaban en gremios.',
      },
    },
    trampas: {
      'faroles': { termino: 'farol', explicacion: 'Esquilache había mandado alumbrar las calles de Madrid con faroles, y el pueblo los rompió en el motín.' },
      'lotería': { termino: 'lotería', explicacion: 'En 1700 era un gazapo; en 1766, no. Carlos III la había creado en 1763.' },
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
        explicacion: 'La fiesta irlandesa y estadounidense no llega a España hasta finales del siglo XX, de la mano del cine y la televisión.',
        epoca: 'En el Madrid de 1850, la víspera de Todos los Santos era noche de castañas, buñuelos y Tenorio.',
      },
      'tanatorio': {
        termino: 'tanatorio',
        explicacion: 'Los tanatorios aparecen en España en los años setenta del siglo XX.',
        epoca: 'En 1850 a don Anselmo lo habrían velado en su casa.',
      },
      'zombis': {
        termino: 'zombi',
        explicacion: 'Viene del criollo haitiano, y se extiende por el inglés y las demás lenguas con el cine de terror, a partir de 1932.',
        epoca: 'Un romántico de 1850 leía historias de aparecidos, de fantasmas o de almas en pena.',
      },
    },
    trampas: {
      'tenorio': { termino: 'Tenorio', explicacion: 'Zorrilla estrenó Don Juan Tenorio en 1844, en el teatro de la Cruz de Madrid.' },
      'romántico': { termino: 'romántico', explicacion: 'Era la palabra de moda desde los años treinta: Larra, Espronceda, el propio Zorrilla.' },
      'fotografía': { termino: 'fotografía', explicacion: 'La palabra nace en 1839, y en 1850 Madrid ya tenía estudios donde retratarse.' },
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
        explicacion: 'Toma el nombre de la playa de Daiquirí, cerca de Santiago, donde desembarcarían los americanos en junio de 1898. El cóctel nace unos años después.',
        epoca: 'En 1898 se habría servido un refresco de limón, o un ron a secas.',
      },
      'mojitos': {
        termino: 'mojito',
        explicacion: 'Aparece en los bares de La Habana en los años veinte y treinta del siglo XX.',
        epoca: 'En 1898 se bebía el draque, aguardiente con hierbabuena, azúcar y limón.',
      },
      'chachachá': {
        termino: 'chachachá',
        explicacion: 'Lo crea Enrique Jorrín a comienzos de los años cincuenta.',
        epoca: 'En 1898 lo nuevo era el danzón.',
      },
    },
    trampas: {
      'acorazado': { termino: 'acorazado', explicacion: 'Los barcos de guerra blindados se llamaban así desde la década de 1860.' },
      'béisbol': { termino: 'béisbol', explicacion: 'Se juega en Cuba desde la década de 1860, y el primer campeonato es de 1878.' },
      'danzón': { termino: 'danzón', explicacion: 'Miguel Failde lo estrena en Matanzas en 1879.' },
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
        explicacion: 'Se descubre en Inglaterra en 1961 y se vende desde 1969.',
        epoca: 'En 1918 el médico habría recetado aspirina, quinina y reposo.',
      },
      'antibióticos': {
        termino: 'antibiótico',
        explicacion: 'El primero, la penicilina, no se usa en enfermos hasta los años cuarenta.',
        epoca: 'Contra las neumonías de 1918 no había remedio eficaz.',
      },
      'uci': {
        termino: 'UCI',
        explicacion: 'Las unidades de cuidados intensivos nacen en los años cincuenta, y en España se extienden en los sesenta y setenta.',
        epoca: 'En 1918 los enfermos graves se quedaban en casa o en la sala común del hospital.',
      },
    },
    trampas: {
      'gripe': { termino: 'gripe', explicacion: 'Del francés grippe. En español se usaba desde comienzos del siglo XIX.' },
      'nápoles': { termino: 'soldado de Nápoles', explicacion: 'La canción, de la zarzuela La canción del olvido, se estrenó en 1916 y era la más pegadiza de Madrid. De ahí el apodo de la gripe.' },
      'cuarentena': { termino: 'cuarentena', explicacion: 'En 1348 era un gazapo; en 1918, no: la palabra y la medida tenían ya siglos.' },
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
        explicacion: 'La palabra nace en el siglo XVIII, con los periódicos.',
        epoca: 'En 1616 la noticia la habrían dado, si acaso, los avisos y relaciones que corrían por la Corte.',
      },
      'editorial': {
        termino: 'editorial',
        explicacion: 'Como empresa que publica libros, es del siglo XIX.',
        epoca: 'En 1616 se buscaba un librero o un impresor.',
      },
      'rotativa': {
        termino: 'rotativa',
        explicacion: 'La prensa rotativa se inventa a mediados del siglo XIX.',
        epoca: 'En 1616 se imprimía con prensas de madera, pliego a pliego.',
      },
    },
    trampas: {
      'quijotes': { termino: 'Quijote', explicacion: 'La primera parte salió en 1605 y la segunda en 1615, de modo que en 1616 había, en efecto, dos Quijotes.' },
      'persiles': { termino: 'Persiles', explicacion: 'Los trabajos de Persiles y Sigismunda se publicó en 1617, y la dedicatoria al conde de Lemos está firmada el 19 de abril de 1616.' },
      'trinitarias': { termino: 'Trinitarias', explicacion: 'Cervantes fue enterrado en el convento de las Trinitarias Descalzas, fundado en 1612, donde sigue.' },
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
        explicacion: 'Televisión Española no emite hasta 1956, y el telediario empieza en 1957.',
        epoca: 'En 1931 las noticias se oían en la radio o se leían en los periódicos de la tarde.',
      },
      'biquini': {
        termino: 'biquini',
        explicacion: 'En 1969 era una trampa; en 1931, un gazapo: nace en París en 1946.',
        epoca: 'Una bañista de 1931 llevaba un traje de baño de una pieza.',
      },
      'fotocopia': {
        termino: 'fotocopia',
        explicacion: 'La xerografía se inventa en 1938, y las fotocopiadoras de oficina llegan en 1959.',
        epoca: 'Conchita habría mandado una copia a máquina, compulsada.',
      },
    },
    trampas: {
      'metro': { termino: 'metro', explicacion: 'En 1873 era un gazapo; en 1931, no: Madrid tenía metro desde 1919.' },
      'rascacielos': { termino: 'rascacielos', explicacion: 'El edificio de la Telefónica, en la Gran Vía, se terminó en 1929 y era el más alto de Madrid.' },
      'tricolores': { termino: 'tricolor', explicacion: 'La bandera roja, amarilla y morada ya la enarbolaban los republicanos antes de 1931.' },
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
        explicacion: 'Como nombre de la tortilla enrollada se documenta en México a finales del siglo XIX.',
        epoca: 'Los conquistadores hablaban de tortillas, que es como llamaron a las tlaxcalli.',
      },
      'tequila': {
        termino: 'tequila',
        explicacion: 'El aguardiente de agave necesita alambique, que llevaron los españoles, y el de Tequila no se hace famoso hasta los siglos XVII y XVIII.',
        epoca: 'Los tlaxcaltecas les habrían dado pulque, el fermentado del maguey.',
      },
      'mariachis': {
        termino: 'mariachi',
        explicacion: 'La palabra se documenta en 1852, en Jalisco.',
        epoca: 'En 1521 la música de los naturales era de tambores, teponaztles y flautas.',
      },
    },
    trampas: {
      'méxico': { termino: 'México', explicacion: 'La ciudad se llamaba México-Tenochtitlan, y así la nombran Cortés y Bernal Díaz.' },
      'caciques': { termino: 'cacique', explicacion: 'Palabra taína que los españoles aprendieron en las Antillas y llevaron consigo al continente.' },
      'viruela': { termino: 'viruela', explicacion: 'La epidemia de 1520 diezmó a los mexicas antes del cerco.' },
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
        explicacion: 'La palabra la inventa Ernst Haeckel en 1866.',
        epoca: 'Humboldt hablaba de la «geografía de las plantas».',
      },
      'dinosaurios': {
        termino: 'dinosaurio',
        explicacion: 'El nombre lo crea Richard Owen en 1842.',
        epoca: 'En 1799 se hablaba de huesos de gigantes o de animales antediluvianos.',
      },
      'vitaminas': {
        termino: 'vitamina',
        explicacion: 'Casimir Funk las bautiza en 1912.',
        epoca: 'Ya se sabía que los limones curaban el escorbuto, pero no por qué.',
      },
    },
    trampas: {
      'sextante': { termino: 'sextante', explicacion: 'En 1519 era un gazapo; en 1799 llevaba ya medio siglo inventado, y Humboldt viajaba con uno.' },
      'cronómetros': { termino: 'cronómetro', explicacion: 'Harrison lo perfecciona en el siglo XVIII, y Humboldt llevaba cronómetros para calcular la longitud.' },
      'oxígeno': { termino: 'oxígeno', explicacion: 'Lavoisier le da nombre en 1777.' },
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
        explicacion: 'Los tocadiscos eléctricos se popularizan en los años cincuenta, y la palabra es de entonces.',
        epoca: 'En 1925 los discos se escuchaban en el gramófono, a manivela.',
      },
      'rock': {
        termino: 'rock',
        explicacion: 'El rock and roll nace en Estados Unidos a mediados de los años cincuenta.',
        epoca: 'En 1925 Luis habría puesto jazz o cuplés.',
      },
      'vespa': {
        termino: 'Vespa',
        explicacion: 'La moto de Piaggio sale en Italia en 1946.',
        epoca: 'En 1925 Luis se habría comprado una bicicleta o, con suerte, una motocicleta.',
      },
    },
    trampas: {
      'surrealismo': { termino: 'surrealismo', explicacion: 'André Breton publica el Manifiesto del surrealismo en octubre de 1924.' },
      'fútbol': { termino: 'fútbol', explicacion: 'En 1810 era un gazapo; en 1925, los madrileños llenaban ya los campos.' },
      'tango': { termino: 'tango', explicacion: 'En 1810 era un gazapo; en 1925, el tango triunfaba en los salones de medio mundo.' },
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
        explicacion: 'Vienen de la cocina francesa del siglo XVIII, y en España se hacen populares en el XIX.',
        epoca: 'En la mesa del Rey se habrían servido empanadas, pasteles y manjar blanco.',
      },
      'mayonesa': {
        termino: 'mayonesa',
        explicacion: 'Según la tradición, la bautizan los franceses tras tomar Mahón, en 1756.',
        epoca: 'Los pescados de 1633 se servían con salsas de almendra, vinagre o especias.',
      },
      'champán': {
        termino: 'champán',
        explicacion: 'El vino espumoso de Champaña es de finales del siglo XVII.',
        epoca: 'Los brindis se habrían hecho con vino de Ribadavia o de San Martín.',
      },
    },
    trampas: {
      'retiro': { termino: 'Buen Retiro', explicacion: 'El palacio del Buen Retiro se estrenó precisamente en diciembre de 1633.' },
      'turrón': { termino: 'turrón', explicacion: 'Se documenta en España desde el siglo XVI.' },
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
        explicacion: 'WhatsApp nace en 2009, y la palabra española viene después.',
        epoca: 'En 1989 Bea habría mandado las fotos por correo, después de revelar el carrete.',
      },
      'selfi': {
        termino: 'selfi',
        explicacion: 'La palabra se populariza hacia 2013, con los teléfonos con cámara frontal.',
        epoca: 'Para salir en la foto encima del Muro, Bea habría tenido que pedírselo a otro.',
      },
      'wifi': {
        termino: 'wifi',
        explicacion: 'El estándar se presenta en 1997, y el nombre comercial Wi-Fi es de 1999.',
        epoca: 'En 1989 se llamaba desde una cabina, con monedas.',
      },
    },
    trampas: {
      'trabant': { termino: 'Trabant', explicacion: 'El pequeño coche de la Alemania del Este se fabricaba desde 1957.' },
      'champán': { termino: 'champán', explicacion: 'En 1633 era un gazapo; en 1989, no.' },
      'perestroika': { termino: 'perestroika', explicacion: 'Gorbachov la lanzó en 1985-1986.' },
      'fax': { termino: 'fax', explicacion: 'En los años ochenta ya era habitual en las oficinas.' },
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
        explicacion: 'Del inglés water-closet. En español se usa en el siglo XX, cuando los inodoros llegan a las casas.',
        epoca: 'En 1858 se hablaba de retretes y bacinillas.',
      },
      'lavadora': {
        termino: 'lavadora',
        explicacion: 'Las lavadoras eléctricas son del siglo XX, y en España se generalizan en los años sesenta.',
        epoca: 'En 1858 la ropa la lavaban a mano las lavanderas del Manzanares.',
      },
      'frigorífico': {
        termino: 'frigorífico',
        explicacion: 'Las neveras eléctricas para casa son de los años veinte del siglo XX.',
        epoca: 'En 1858 la carne se guardaba en la fresquera, o con hielo de los pozos de nieve.',
      },
    },
    trampas: {
      'cólera': { termino: 'cólera', explicacion: 'La epidemia de 1854-1855 mató a miles de personas en Madrid.' },
      'ferrocarril': { termino: 'ferrocarril', explicacion: 'El de Madrid a Aranjuez funcionaba desde 1851.' },
      'zarzuela': { termino: 'zarzuela', explicacion: 'En 1561 era un gazapo; en 1858, no: el teatro de la Zarzuela se abrió en 1856.' },
    },
  },
];
