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
];
