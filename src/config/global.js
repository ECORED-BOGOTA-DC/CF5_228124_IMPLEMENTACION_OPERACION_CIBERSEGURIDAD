export default {
  global: {
    componenteFormativo:
      'Planificación, entrenamiento y concienciación en implementación de ciberseguridad',
    descripcionCurso:
      'Un motor de búsqueda es la herramienta en línea diseñada para buscar sitios web en internet; permite revisar los resultados en su propia base de datos, los clasifica y hace una lista ordenada de estos, utilizando algoritmos de búsqueda únicos. Por lo que el uso de estas herramientas, permite optimizar una marca como propósito que tiene una empresa continuamente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Técnicas de planificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Pronósticos cualitativos y cuantitativos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Planificación, necesidades y contexto organizacional',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Entrenamiento y concienciación en ciberseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Fundamentos del entrenamiento en ciberseguridad',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Características del entrenamiento',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Defensa en profundidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Conceptos de Defensa en Profundidad DID',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Capas de la defensa en profundidad',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Características de la defensa en profundidad',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228124_CF05_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2.1. Fundamentos del entrenamiento en ciberseguridad',
      referencia:
        'Instituto Nacional de Ciberseguridad (2021). <em>Glosario de términos de ciberseguridad: una guía de aproximación para el empresario.</em> Incibe.',
      tipo: 'Glosario',
      link:
        'https://www.incibe.es/empresas/guias/glosario-de-terminos-de-ciberseguridad-una-guia-de-aproximacion-para-el',
    },
    {
      tema: '3.Defensa en profundidad',
      referencia:
        'Viveros, J. (2015). <em>Defensa en profundidad para proteger la información de la red corporativa</em>.',
      tipo: 'Documento en línea',
      link: 'http://polux.unipiloto.edu.co:8080/00002061.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'se define como toda aquella acción o serie de acciones que aprovechan las vulnerabilidades para romper la seguridad de los sistemas.',
    },
    {
      termino: 'Ciberseguridad',
      significado:
        'se define como la capacidad para minimizar el nivel de riesgo al que están expuestos los sistemas informáticos y sus usuarios, ante amenazas de naturaleza cibernética o digital. La ciberseguridad brinda a los gobiernos y las organizaciones la ciber-resiliencia como la capacidad para resistir, proteger y defender los sistemas de ciberataques.',
    },
    {
      termino: 'Control o salvaguarda',
      significado:
        'medida de protección o control para contrarrestar amenazas.',
    },
    {
      termino: 'Infraestructura TI',
      significado:
        'consiste en los componentes de <em>hardware</em> y <em>software</em> requeridos para gestionar y operar entornos tecnológicos que pueden ser implementados en instalaciones de la organización o en sistemas en la nube, Cloud Computing',
    },
    {
      termino: 'Riesgo',
      significado: '"contingencia o proximidad de un daño". RAE (2021)',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'en informática, se define como una debilidad o fallo de seguridad que se presenta en un sistema de información, que puede estar compuesto por <em>software, hardware</em> y otros componentes y servicios tecnológicos, generando riesgos de seguridad de la información.',
    },
  ],
  referencias: [
    {
      referencia:
        'Center for Internet Security (2021). <em>Foco de seguridad electoral - Defensa en profundidad (DiD)</em>. CISECURITY.',
      link:
        'https://www.cisecurity.org/spotlight/cybersecurity-spotlight-defense-in-depth-did/',
    },
    {
      referencia:
        'Raggi, N. (2021). <em>Defensa en profundidad: cómo implementar esta estrategia de ciberseguridad</em>. WELIVESECURITY.',
      link:
        'https://www.welivesecurity.com/la-es/2021/03/26/defensa-profundidad-que-es-como-implementar-estrategia-ciberseguridad/',
    },
    {
      referencia: 'Robbins, R. & Couter, M. (2005). <em>Administración</em>.',
      link:
        'https://www.auditorlider.com/wp-content/uploads/2019/06/Administracion-8ed-Stephen-P.-Robbins-y-Mary-Coulter-1.pdf',
    },
    {
      referencia:
        'Rodríguez, A., Yépez, J., Peralta, T. & Ortiz, M. (8 de junio de 2018). Defensa en profundidad aplicado a un entorno empresarial. <em>Revista Espacios</em>, 39 (42), 19.',
      link: 'https://www.revistaespacios.com/a18v39n42/a18v39n42p19.pdf',
    },
    {
      referencia:
        'Rodriguez, L. (2014). <em>Planificación estratégica II: Diagrama de Gantt pasaje de grado de comisario a comisario inspector (PA) (PE) (PT)</em>. Docplayer.es',
      link:
        'https://docplayer.es/84386006-Planificacion-estrategica-ii-diagrama-de-gantt-pasaje-de-grado-de-comisario-a-comisario-inspector-pa-pe-pt.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesoría metodológica y pedagógica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Joaquín Patiño Cerón',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro agropecuario La Granja- Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisor Metodológico y Pedagógico',
          centro: 'Centro de Diseño y Metrología -Regional Distrito Capital',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuación instruccional',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseño web',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo:
            'Validación de recursos educativos digitales y vinculación LMS',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
