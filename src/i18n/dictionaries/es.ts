import type { LegalDoc } from "../types";
import type { Dictionary } from "./en";

/** Spanish (Español). FIV, inyección desencadenante (trigger), ciclo, cita, embrión. */
export const es: Dictionary = {
  common: {
    brand: "Cove",
    downloadOnAppStore: "Descargar en el App Store",
    downloadOnThe: "Descargar en el",
    appStore: "App Store",
    googlePlayAlt: "Disponible en Google Play",
    download: "Descargar",
    availableNow: "Ya disponible en iPhone y Android · Empieza gratis",
    availableNowPlain: "Ya disponible en iPhone y Android. Empieza gratis.",
    freeToStart: "Empieza gratis",
    encryptedNote:
      "Cifrado en tránsito y en reposo. Tus datos del tratamiento nunca se venden ni se usan para publicidad.",
    followAlong: "Síguenos",
  },

  nav: {
    features: "Funciones",
    howItWorks: "Cómo funciona",
    timeline: "Recorrido",
    privacy: "Privacidad",
    blog: "Blog",
    faq: "Preguntas frecuentes",
    support: "Soporte",
    terms: "Términos",
    deleteAccount: "Eliminar cuenta",
    affiliate: "Programa de afiliados",
    contact: "Contacto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    primary: "Navegación principal",
    mobile: "Móvil",
  },

  footer: {
    disclaimer:
      "Cove IVF es una herramienta de organización, no un dispositivo médico. No ofrece consejo médico, diagnóstico ni tratamiento. Sigue siempre las indicaciones de tu clínica.",
    copyright: "© 2026 Cove IVF",
    tagline: "Un puerto tranquilo para tu ciclo.",
  },

  languageSwitcher: {
    label: "Idioma",
    choose: "Elegir idioma",
  },

  social: {
    instagram: "Cove en Instagram",
    tiktok: "Cove en TikTok",
    email: "Escribir a Cove",
  },

  meta: {
    home: {
      title: "Cove — seguimiento de FIV: medicación y ciclo | iOS y Android",
      description:
        "El seguimiento de FIV tranquilo para todo tu ciclo. Fotografía tu protocolo y obtén la lista exacta de medicación, los cambios de dosis y recordatorios discretos. Privado, cifrado, hecho para pacientes reales de FIV. Ya disponible en iPhone y Android.",
    },
    features: {
      title: "Funciones — seguimiento de FIV Cove",
      description:
        "Todas las funciones de Cove: escáner de protocolo, lista de medicación de esta noche, alarma de la inyección desencadenante, citas, monitorización, embriones, diario y Añadir con IA. Privado, cifrado, en iPhone y Android.",
      ogDescription:
        "Fotografía tu protocolo, guarda la lista de esta noche, protege la inyección desencadenante y reúne el resto del ciclo en un solo lugar cifrado.",
    },
    faq: {
      title: "Preguntas frecuentes — seguimiento de FIV Cove",
      description:
        "Respuestas sobre qué es Cove, si registra medicación e inyecciones de FIV, precio, disponibilidad en Android, privacidad y en qué se diferencia de las apps de fertilidad generales.",
    },
    support: {
      title: "Soporte — Cove IVF",
      description: "Consigue ayuda con Cove IVF. Contactar con soporte, preguntas frecuentes y control de la cuenta.",
      ogDescription: "¿Una duda, un comentario o un problema con la app? Leemos cada mensaje.",
    },
    deleteAccount: {
      title: "Eliminar tu cuenta de Cove — Cove IVF",
      description:
        "Cómo eliminar de forma permanente tu cuenta de Cove IVF y todos los datos asociados, desde la app o escribiendo a soporte.",
      ogDescription: "Elimina en cualquier momento tu cuenta de Cove IVF y todos los datos asociados.",
    },
    affiliate: {
      title: "Afiliados de Cove — Cove IVF",
      description:
        "Programa de afiliados de Cove: 20 % del Cove Pro pagado a través de tu código. Los códigos se emiten manualmente. Solicita por correo.",
      ogDescription: "20 % del Cove Pro pagado a través de tu código. Códigos por correo tras revisión.",
    },
    privacy: {
      title: "Política de privacidad — Cove IVF",
      description: "Cómo Cove IVF recopila, usa y protege tu información.",
      ogDescription: "Política de privacidad en lenguaje claro para la app y el sitio de Cove IVF.",
    },
    terms: {
      title: "Términos de servicio — Cove IVF",
      description: "Los términos que rigen tu uso de la app y el sitio de Cove IVF.",
      ogDescription: "Cove IVF es una herramienta de organización, no un dispositivo médico. Lee los términos.",
    },
    blog: {
      title: "Blog — Cove IVF",
      description: "Notas sobre ciclos de FIV, seguimiento de la medicación y un tratamiento más tranquilo.",
    },
  },

  home: {
    hero: {
      eyebrow: "Seguimiento de FIV · iPhone y Android",
      heading: "El seguimiento de FIV tranquilo para todo tu ciclo.",
      body: "Cove es un seguimiento del ciclo y la medicación de FIV que te acompaña desde el primer protocolo hasta el resultado final. Fotografía la hoja de tu clínica para obtener la lista exacta de tu medicación, y guarda cada cambio de dosis, cada cita y el recordatorio de la inyección desencadenante en un solo lugar cifrado — para no llevarlo todo en la cabeza.",
      badge: "iPhone y Android · pensado para ciclos de FIV",
      todayAlt:
        "Pantalla Hoy del seguimiento de FIV Cove con la lista de medicación de la noche, el anillo de progreso y la siguiente dosis",
    },
    trust: [
      "Creado con pacientes de FIV.",
      "Diseñado en torno a protocolos reales de clínica.",
      "Cifrado en tránsito y en reposo.",
    ],
    allFeatures: {
      heading: "Cada función, en una lista.",
      body: "Escáner, alarma de la inyección desencadenante, calendario, registros, diario, Añadir con IA y lo demás.",
      cta: "Ver todas las funciones",
    },
    privacy: {
      heading: "Privacidad, en concreto.",
      intro: "La privacidad no es una función que añadimos después: es como construimos Cove desde el primer día.",
      items: [
        { title: "Hecho para estar cifrado", body: "Tus datos están cifrados en tránsito y en reposo." },
        {
          title: "Nunca se venden para publicidad",
          body: "Los datos de tu tratamiento nunca se venden ni se comparten para publicidad.",
        },
        {
          title: "Sin anuncios dentro de Cove",
          body: "No mostramos anuncios dentro de Cove, y los datos de tu tratamiento nunca se usan para publicidad.",
        },
        { title: "Mantienes el control", body: "Puedes eliminar tus datos de forma permanente, cuando quieras, con un toque." },
        {
          title: "Discreto por diseño",
          body: "Las notificaciones de la pantalla de bloqueo no nombran tus medicamentos a menos que lo actives.",
        },
      ],
    },
    faqHeading: "Preguntas",
    faq: [
      {
        q: "¿Esto es consejo médico?",
        a: "No. Cove es un organizador. Nunca sugiere, ajusta ni interpreta dosis, y nunca predice resultados. Tu clínica decide todo lo médico.",
      },
      {
        q: "¿Qué pasa con mi escaneo?",
        a: "Se procesa para leer tu calendario y luego se descarta. Tu calendario se guarda cifrado, en tránsito y en reposo.",
      },
      { q: "¿En qué plataformas está Cove?", a: "Cove ya está disponible en iPhone y Android." },
    ],
    downloadCta: {
      heading: "Un puerto tranquilo para tu ciclo está listo.",
    },
  },

  chapters: {
    life: {
      heading: "La FIV ya es bastante dura. Llevar el control de todo no debería serlo.",
      body: "Un ciclo no es una rutina. Es un montón de detalles concretos y cambiantes, y todos importan.",
      situations: [
        "Tu clínica cambió la dosis de hoy.",
        "Tres medicamentos esta noche.",
        "Monitorización a las 7:30.",
        "Inyección desencadenante a las 20:00 en punto.",
        "¿Qué medicamento se mezcló primero?",
        "Esperando el informe de fecundación de mañana.",
      ],
      snippetMonitoring: "Analítica · ecografía",
      snippetTrigger: "Faltan 36 h para la punción",
      snippetPending: "Día 1 · pendiente",
    },
    chapterLabel: "Capítulo",
    medication: {
      eyebrow: "Plan de medicación de FIV",
      headline: "Sabe con exactitud qué requiere tu plan de medicación esta noche.",
      body: "Tu lista de la noche, en orden, con una comprobación tranquila antes de empezar a preparar. Todo el plan, reunido — no repartido entre un PDF, un portal y un hilo de mensajes.",
      alt: "Seguimiento de medicación de FIV Cove con el historial de inyecciones: zona, dosis y hora de cada medicamento",
    },
    scanner: {
      eyebrow: "Escáner de protocolo de FIV",
      headline: "Una hoja de la clínica se convierte en todo tu plan de tratamiento.",
      body: "Fotografía el protocolo una sola vez. El escáner de protocolo de Cove lo estructura en un plan que sí puedes leer — cada medicamento, cada dosis, cada día, en el mismo lugar.",
      alt: "Pantalla del escáner de protocolo de Cove pidiendo fotografiar una hoja de medicación de la clínica",
    },
    verification: {
      eyebrow: "Verificación de la dosis",
      headline: "Cuando tu clínica cambia un número, todo sigue siendo exacto.",
      body: "Actualiza el valor una vez — después de confirmarlo con la hoja de tu clínica. Como tu seguimiento de medicación de FIV, Cove lo reemplaza en la tarjeta de esta noche, el recordatorio de mañana y el registro.",
      alt: "Pantalla de verificación de dosis de Cove pidiendo comparar cada medicamento escaneado con la hoja de tu clínica",
    },
    trigger: {
      eyebrow: "Recordatorio de la inyección desencadenante",
      headline: "El recordatorio de la inyección desencadenante que no puede fallar.",
      body: "Una cuenta atrás, recordatorios suaves que van subiendo y una confirmación clara. Discreto en tu pantalla de bloqueo — tus medicamentos nunca se nombran.",
      alt: "Pantalla de recordatorio de la inyección desencadenante de Cove con cuenta atrás y un botón de confirmación «ya me la puse»",
    },
    timeline: {
      eyebrow: "Recorrido del ciclo de FIV",
      headline: "Sabe siempre en qué punto de tu ciclo de FIV estás.",
      body: "Una vista tranquila de tu etapa de tratamiento — desde la preparación hasta la recuperación. Elige la etapa que corresponde a hoy, y Cove lleva el resto del plan contigo.",
      alt: "Recorrido del ciclo de FIV de Cove con las etapas del tratamiento, de la preparación a la recuperación, con la etapa actual destacada",
    },
    withoutWith: {
      eyebrow: "La diferencia",
      heading: "Un ciclo repartido en diez lugares — o en uno.",
      withoutLabel: "Sin Cove",
      withoutTitle: "Disperso. Inquieto.",
      withLabel: "Con Cove",
      withTitle: "Tranquilo. Único. Ordenado.",
      messy: [
        "Hoja de Excel con las dosis",
        "Página de Notion con notas",
        "Protocolo en PDF de la clínica",
        "Acceso al portal de la clínica",
        "Alertas del calendario",
        "Alarmas del teléfono con la etiqueta «meds»",
        "Hilo de WhatsApp con la enfermera",
        "Captura de la hoja del protocolo",
        "«¿Cuál era la dosis de hoy?»",
      ],
      calm: [
        "Un plan de tratamiento verificado",
        "Un calendario de medicación",
        "Un recorrido de citas",
        "Un lugar para los cambios de dosis",
        "Un lugar para los resultados",
        "Un acompañante tranquilo",
      ],
    },
    community: {
      eyebrow: "Terreno común",
      heading: "No eres la única que se siente así.",
      voices: [
        "Me aterraba olvidarme de algo.",
        "Cada cita de monitorización cambiaba el plan.",
        "Tenía recordatorios por todas partes y aun así temía saltarme una dosis.",
        "La logística acabó siendo casi tan agotadora como el tratamiento.",
      ],
      closing: "La FIV ya es abrumadora. Mantenerla organizada no debería serlo.",
      note: "Temas que las pacientes describen a menudo en público. No son citas atribuidas. No son recomendaciones.",
    },
  },

  features: {
    hero: {
      eyebrow: "Cove IVF",
      heading: "Todo lo que Cove hace por un ciclo.",
      body: "Fotografía el protocolo, guarda la lista de esta noche, protege la inyección desencadenante y reúne el resto en un solo lugar cifrado.",
      howItWorks: "Cómo funciona",
    },
    jumpNavLabel: "Grupos de funciones",
    spotlight: {
      heading: "Las tres cosas por las que la gente abre Cove.",
      items: [
        {
          title: "Escanea la hoja",
          body: "Una foto del protocolo de la clínica se convierte en un plan que sí puedes leer.",
          alt: "Escáner de protocolo de Cove pidiendo fotografiar una hoja de medicación de la clínica",
        },
        {
          title: "La lista de esta noche",
          body: "Cada medicamento, dosis y hora en una sola tarjeta. Márcalo como hecho cuando lo tomes.",
          alt: "Pantalla Hoy de Cove con la lista de medicación de la noche",
        },
        {
          title: "Inyección desencadenante",
          body: "Una cuenta atrás y una alarma que confirmas. Discreta en la pantalla de bloqueo.",
          alt: "Recordatorio de la inyección desencadenante de Cove con cuenta atrás y confirmación",
        },
      ],
    },
    downloadHeading: "Un puerto tranquilo para tu ciclo está listo.",
    questionsPrefix: "¿Preguntas?",
    questionsLink: "Leer las preguntas frecuentes",
    categories: {
      medications: {
        label: "Medicación",
        headline: "El plan de esta noche, reunido en un solo lugar.",
        intro:
          "La hoja de tu clínica es la fuente de verdad. Cove la convierte en una lista que puedes revisar, marcar como hecha y actualizar cuando cambia la dosis.",
        items: [
          {
            title: "Escáner de protocolo",
            body: "Fotografía la hoja de medicación de tu clínica. Cove lee los medicamentos, las dosis y las horas, y luego espera a que confirmes cada valor.",
          },
          {
            title: "Verificación de la dosis",
            body: "Nada se programa hasta que lo compruebas con tu propia hoja. Edita cualquier valor a mano, o vuelve a tomar la foto.",
          },
          {
            title: "La lista de esta noche",
            body: "Exactamente qué tomar, en qué dosis, a qué hora. Marca cada uno como hecho. Mañana por la mañana sigue visible sin saturar esta noche.",
          },
          {
            title: "Recordatorios de dosis",
            body: "Un recordatorio salta a la hora que fijes. Las dosis omitidas permanecen en Hoy hasta que las marcas como tomadas. Nunca se descartan en silencio.",
          },
          {
            title: "Cambios a mitad del ciclo",
            body: "Cuando la monitorización cambia un número, actualízalo una vez. La tarjeta de esta noche, los recordatorios posteriores y tu registro lo siguen.",
          },
          {
            title: "Entrada manual",
            body: "¿Prefieres escribir? Añade un medicamento tú misma: nombre, dosis, unidad, inicio, fin y horas del día.",
          },
          {
            title: "Zonas de inyección",
            body: "Cuando marcas una inyección como puesta, toca dónde te pinchaste. Las zonas recientes quedan en el diagrama para que la siguiente no sea una adivinanza.",
          },
          {
            title: "Inventario de medicación",
            body: "Existencias opcionales en cada línea de medicamento: cuánto te queda y para cuántas noches alcanza.",
          },
        ],
      },
      trigger: {
        label: "Desencadenante y avisos",
        headline: "La inyección que no puede ser un «quizá».",
        intro:
          "Los recordatorios de rutina se pueden pausar. La inyección desencadenante no. Cove la trata como otro tipo de aviso y mantiene discretas las pantallas de bloqueo.",
        items: [
          {
            title: "Alarma de la inyección desencadenante",
            body: "Una cuenta atrás, recordatorios crecientes y un aviso a pantalla completa cuando toca. Confirma que te la pusiste, o toca «Aún no».",
          },
          {
            title: "Sigue activa si pausas",
            body: "Pausar un ciclo detiene los recordatorios de dosis de rutina. El recordatorio de la desencadenante en Cove sigue programado. Pon también una alarma de teléfono de respaldo.",
          },
          {
            title: "Notificaciones discretas",
            body: "Los recordatorios pueden ocultar los nombres de los medicamentos en la pantalla de bloqueo. Actívalo en Ajustes, para que un vistazo no delate tu ciclo.",
          },
          {
            title: "Bandeja «próximamente»",
            body: "Dosis y visitas en una sola lista, para ver lo que viene sin abrir cada pantalla.",
          },
          {
            title: "Recordatorios de citas",
            body: "Elige con cuánta antelación debe avisarte Cove antes de una visita. La clínica y la hora quedan en la tarjeta.",
          },
        ],
      },
      cycle: {
        label: "Ciclo y calendario",
        headline: "Dónde estás y qué viene después.",
        intro:
          "Un ciclo es más que la medicación de esta noche. Cove mantiene la etapa, el calendario y las visitas a la clínica junto al mismo plan.",
        items: [
          {
            title: "Etapas del tratamiento",
            body: "De la preparación a la recuperación. Elige la etapa que corresponde a hoy. Cove la usa para mostrar dónde estás, no para cambiar tu protocolo.",
          },
          {
            title: "Calendario del ciclo",
            body: "Medicación y visitas en un solo calendario, abierto desde la barra superior. Toca un día para ver qué tocaba.",
          },
          {
            title: "Citas",
            body: "Cada ecografía y visita de monitorización, con la clínica y la hora. Añade notas de la visita al salir.",
          },
          {
            title: "Pausar un ciclo",
            body: "Detén los recordatorios de rutina sin borrar tu historial. Retoma cuando estés lista.",
          },
          {
            title: "Más de un ciclo",
            body: "Los ciclos anteriores quedan en tu cuenta, para que un segundo o tercer intento no sea una página en blanco.",
          },
          {
            title: "Diario",
            body: "Un registro de cómo se sintió el día: ánimo, cuerpo, una nota si quieres. Salta cualquier día. Exporta un PDF para ti.",
          },
          {
            title: "Hidratación",
            body: "Un registro diario de vasos en Hoy, para ver la racha sin una app aparte.",
          },
        ],
      },
      records: {
        label: "Registros",
        headline: "Lo que te dijo la clínica, guardado en orden.",
        intro:
          "Cove guarda lo que registras. Nunca puntúa un resultado, nunca predice un desenlace y nunca te dice qué significa un número.",
        items: [
          {
            title: "Visitas de monitorización",
            body: "Analíticas, ecografía y recuento de folículos tras cada visita. Un historial que puedes releer, no una línea de tendencia que te interpreta.",
          },
          {
            title: "PDF de analíticas",
            body: "Sube un informe de laboratorio. Cove propone los números para que los revises. Nada se guarda hasta que confirmas.",
          },
          {
            title: "Resultados de pruebas",
            body: "Beta hCG, estradiol, progesterona y el resto del panel, con la fecha y la unidad que usó tu clínica.",
          },
          {
            title: "Recorrido de los embriones",
            body: "Cómo se desarrolla cada embrión, día a día, en una línea clara. Fecundado, blastocisto, congelado, transferido: los eventos que te comunicaron.",
          },
          {
            title: "Historial de procedimientos",
            body: "Punciones, transferencias, desencadenante y otros procedimientos, guardados por fecha.",
          },
          {
            title: "Embudo de fecundación",
            body: "Óvulos obtenidos, maduros, fecundados, embriones. Las cifras que te dio tu clínica, en una pila tranquila.",
          },
          {
            title: "Costes del ciclo",
            body: "Clínica, medicación y lo que cubrió el seguro. Una moneda por ciclo, en Registros.",
          },
        ],
      },
      capture: {
        label: "Añadir con IA",
        headline: "Dilo, fotografíalo o escríbelo.",
        intro:
          "Cove puede proponer un medicamento o una cita a partir de una foto, una nota de voz o un texto. Siempre revisas la propuesta. Una captura solo cuenta después de guardar.",
        items: [
          {
            title: "Cámara",
            body: "Haz o elige una foto de un medicamento. Cove propone el nombre, la dosis y el horario para que lo revises.",
          },
          {
            title: "Voz",
            body: "Mantén pulsado para dictar lo que hay que añadir: un medicamento o una cita. Cove convierte la grabación en una propuesta.",
          },
          { title: "Texto", body: "Escribe o pega un mensaje. El mismo paso de revisión que la cámara y la voz." },
          {
            title: "Tú confirmas primero",
            body: "Las propuestas nunca son el calendario. Confirma o corrige cada campo antes de guardar nada.",
          },
        ],
      },
      privacy: {
        label: "Privacidad",
        headline: "Hecho para seguir siendo tuyo.",
        intro:
          "Los datos de salud están cifrados en tránsito y en reposo. Cove no los vende, no los comparte para publicidad y no muestra anuncios dentro de la app.",
        items: [
          {
            title: "Cifrado en tránsito y en reposo",
            body: "Tu calendario y tus registros se guardan cifrados. Las fotos de la hoja del protocolo se procesan para leer el plan y luego se descartan.",
          },
          {
            title: "Nunca se venden para publicidad",
            body: "No vendemos los datos de tu tratamiento. No los compartimos con anunciantes. Los datos de salud no se usan para segmentar anuncios.",
          },
          {
            title: "Eliminar todo",
            body: "Ajustes y luego Eliminar cuenta. Ciclos, medicación, dosis, citas, diario, registros y PDF subidos se eliminan de forma permanente.",
          },
          {
            title: "iPhone y Android",
            body: "Cove ya está disponible en ambos. Mismo producto, mismos controles de privacidad.",
          },
        ],
      },
    },
  },

  faqPage: {
    eyebrow: "Cove IVF",
    heading: "Preguntas frecuentes",
    intro: "Respuestas claras sobre qué registra Cove, cuánto cuesta y en qué se diferencia de una app de fertilidad general.",
    items: [
      {
        q: "¿Qué es Cove y para quién es?",
        a: "Cove es una app móvil para personas que están actualmente en un ciclo de FIV (fecundación in vitro). Organiza tu calendario de medicación, inyecciones, citas e historial del ciclo en un solo lugar. Está hecha específicamente para pacientes de FIV — no para el seguimiento general de la fertilidad, el seguimiento de la ovulación o el seguimiento de la búsqueda de embarazo natural. Si aún no estás en un ciclo de tratamiento activo, una app de fertilidad general te encajará mejor que Cove.",
      },
      {
        q: "¿Registra la medicación y las inyecciones de FIV?",
        a: "Sí. Puedes fotografiar la hoja de protocolo de tu clínica y Cove la estructura en un plan de medicación día a día, con recordatorios para cada dosis. También registra las zonas de inyección para que las alternes, e incluye un recordatorio dedicado a la inyección desencadenante con cuenta atrás y notificaciones discretas y crecientes. Cuando tu clínica cambia una dosis, la actualizas una vez y se actualiza la tarjeta de hoy, los recordatorios futuros y tu historial.",
      },
      {
        q: "¿Funciona para varios ciclos?",
        a: "Sí. Cove conserva tu historial de ciclos — medicación, dosis y resultados — a lo largo de más de un ciclo de FIV, de modo que si haces un segundo o tercer ciclo puedes revisar lo que pasó en uno anterior en lugar de empezar de cero.",
      },
      {
        q: "¿Mis datos son privados?",
        a: "Los datos de tu tratamiento se mantienen privados, cifrados, nunca se venden, nunca se comparten para publicidad. Cove usa una herramienta de medición (AppsFlyer) que recopila datos del dispositivo y de la campaña para entender qué anuncio te trajo a la app. No recibe tu medicación, tus analíticas ni tu diario. No mostramos anuncios dentro de la app. Puedes eliminar de forma permanente tu cuenta y sus datos desde la app en cualquier momento. Las fotos de la hoja del protocolo se procesan para leer tu calendario y no se conservan tras el procesamiento. Consulta la política de privacidad completa para más detalles.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "Cove cuesta 12,99 $/mes, u 8,33 $/mes con el plan facturado cada 6 meses. Se ofrece una prueba gratuita antes de que empiece cualquiera de los abonos.",
      },
      {
        q: "¿Hay versión para Android?",
        a: "Sí. Cove ya está disponible en iPhone y Android — descárgalo en el App Store o en Google Play.",
      },
      {
        q: "¿Es un dispositivo médico?",
        a: "No. Cove es una herramienta de organización, no un dispositivo médico. No diagnostica, no predice resultados y nunca sugiere, ajusta ni interpreta tus dosis. Nunca ofrece consejo médico — tu clínica toma cada decisión médica, y siempre debes seguir sus indicaciones por encima de cualquier cosa en la app.",
      },
      {
        q: "¿En qué se diferencia de un seguimiento de fertilidad general como Flo o Premom?",
        a: "Los seguimientos de fertilidad generales como Flo o Premom se basan en predecir la ovulación y los días fértiles para quienes buscan concebir de forma natural — predicciones del día del ciclo, temperatura basal, moco cervical, tiras de LH. Nada de eso aplica una vez que estás en un ciclo de FIV, donde tu calendario lo fija el protocolo de tu clínica y no tus propias señales. Cove se basa en el problema contrario: un protocolo dirigido por la clínica con varios medicamentos, horarios de dosis exactos, zonas de inyección, citas y resultados de monitorización que cambian a medida que tu clínica ajusta tu plan. Si no estás en tratamiento, un seguimiento general es la herramienta adecuada. Si estás en un ciclo de FIV, Cove está hecho para esa situación concreta.",
      },
    ],
  },

  support: {
    eyebrow: "Ayuda y contacto",
    heading: "Soporte de Cove IVF",
    intro: "¿Una duda, un comentario o un problema con la app? Leemos cada mensaje.",
    emailLabel: "Correo",
    emailUs: "Escríbenos",
    faqHeading: "Preguntas frecuentes",
    faq: [
      {
        q: "¿Esto es consejo médico?",
        a: "No. Cove es un organizador. Nunca sugiere, ajusta ni interpreta dosis, y nunca predice resultados. Tu clínica decide todo lo médico.",
      },
      {
        q: "¿Qué pasa con mi escaneo?",
        a: "Se procesa para leer tu calendario y luego se descarta. Tu calendario se guarda cifrado, en tránsito y en reposo.",
      },
      {
        q: "¿En qué plataformas está Cove?",
        a: "Cove ya está disponible en iPhone y Android.",
      },
      {
        q: "¿Cómo elimino mis datos?",
        a: "Abre Ajustes en la app y toca Eliminar todo. Es inmediato y permanente.",
      },
      {
        q: "El escáner leyó mal mi hoja, ¿qué hago?",
        a: "Puedes editar cualquier valor a mano, o volver a tomar la foto. Compara siempre con la hoja de tu clínica.",
      },
      {
        q: "¿Cómo restauro mi compra?",
        a: "En un dispositivo nuevo, abre la app y toca Restaurar compra en Ajustes.",
      },
    ],
    form: {
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      send: "Enviar mensaje",
    },
    privacyLink: "Política de privacidad",
    termsLink: "Términos",
  },

  deleteAccount: {
    eyebrow: "Legal",
    heading: "Eliminar tu cuenta de Cove",
    intro: "Puedes eliminar de forma permanente tu cuenta de Cove IVF y todos los datos asociados en cualquier momento.",
    fromAppLead: "Para eliminar tu cuenta desde la app:",
    steps: [
      "Abre la app de Cove.",
      "Ve a Ajustes.",
      "Toca «Eliminar cuenta» en la zona de peligro.",
      "Confirma escribiendo DELETE.",
    ],
    whatDeletedLabel: "Qué se elimina:",
    whatDeletedBody:
      " Esto elimina de forma permanente tu cuenta y los datos asociados — ciclos, medicación, dosis, citas, registros de inyecciones, entradas del diario, PDF de analíticas subidos y tu perfil. Apple o Google aún pueden conservar un registro del propio abono. Esta acción no se puede deshacer.",
    noAccessPrefix: "Si no puedes acceder a la app: escríbenos a ",
    noAccessSuffix:
      " desde la dirección asociada a tu cuenta y eliminaremos tu cuenta y tus datos por ti.",
  },

  affiliate: {
    eyebrow: "Colaboraciones",
    heading: "Afiliados de Cove",
    whoHeading: "Para quién es",
    whoBody: "Personas en un ciclo de FIV, y creadores que usarán la app en un ciclo real.",
    commissionHeading: "Comisión",
    commissionBody: "20 % del Cove Pro pagado a través de tu código.",
    cookieHeading: "Cookie",
    cookieBody: "90 días.",
    howHeading: "Cómo funciona ahora",
    howBody:
      "Los códigos se emiten manualmente. Los eventos de pago son compras dentro de la app de Apple más RevenueCat, no Stripe, así que todavía no hay un panel automático. Si aceptamos la colaboración, recibes un código por correo tras la revisión.",
    measureHeading: "Qué medimos",
    measureBody: "Código activado → 7 días de uso → pagado. No las visualizaciones, no el número de seguidores.",
    trialHeading: "Prueba con influencers",
    trialBody:
      "Acordamos un objetivo de visualizaciones de 200k o 300k por adelantado. Si alcanzas el objetivo, cobras. El código de afiliado del 20 % sigue activo todo el tiempo. Tras el primer mes: continuar, subir la tarifa por visualización pagada, o terminar.",
    submittedBody: "Te escribiremos si lo aceptamos. No publiques ningún enlace de Cove hasta que tengas un código.",
    form: {
      applyHeading: "Solicitar",
      applyIntro: "Revisaremos esto a mano. No publiques ningún enlace de Cove hasta que tengas un código.",
      name: "Nombre",
      email: "Correo",
      handle: "Usuario de Instagram o TikTok",
      inCycle: "¿Actualmente en un ciclo de FIV?",
      yes: "Sí",
      no: "No",
      creator: "¿Creador?",
      expectedPlatform: "Plataforma prevista",
      expectedPlatformPlaceholder: "Instagram, TikTok, o ambas",
      viewTarget: "Objetivo de visualizaciones",
      noViewTarget: "sin objetivo de visualizaciones",
      anythingElse: "Algo más",
      sending: "Enviando…",
      apply: "Solicitar",
      errorGeneric: "No se pudo enviar. Inténtalo de nuevo.",
    },
  },

  blog: {
    eyebrow: "Cove IVF",
    heading: "Blog",
    intro: "Notas sobre ciclos de FIV, seguimiento de la medicación y un tratamiento más tranquilo.",
    empty: "Aún no hay nada publicado — vuelve pronto.",
  },

  legalNotice:
    "Esta es una traducción proporcionada por comodidad. Si hay alguna diferencia, prevalece la versión en inglés de esta página.",

  privacy: {
    eyebrow: "Legal",
    title: "Política de privacidad",
    lastUpdated: "Última actualización: 26 de septiembre de 2026",
    doc: [
      { type: "h2", text: "La versión corta" },
      {
        type: "p",
        text: [
          "Cove te ayuda a organizar un ciclo de FIV. Los datos de tu tratamiento se mantienen privados, cifrados, nunca se venden, nunca se comparten para publicidad. Puedes eliminarlos — incluidos los PDF de laboratorio subidos — desde Ajustes en la app. Cove usa una herramienta de medición (AppsFlyer) que recopila datos del dispositivo y de la campaña para entender qué anuncio te trajo a la app. No recibe tu medicación, tus analíticas ni tu diario. Esta política explica qué recopilamos, por qué y las opciones que tienes.",
        ],
      },
      { type: "h2", text: "Quiénes somos" },
      {
        type: "p",
        text: [
          "Cove IVF («Cove», «nosotros») ofrece una app de iOS (y, donde esté disponible, Android) y este sitio. Preguntas de privacidad: ",
          { link: "coveivf@gmail.com", href: "mailto:coveivf@gmail.com" },
          ".",
        ],
      },
      { type: "h2", text: "Qué recopilamos" },
      { type: "h3", text: "Información de la cuenta" },
      {
        type: "p",
        text: [
          "Puedes crear una cuenta con Iniciar sesión con Apple, el inicio de sesión de Google o el correo. Según el método, recibimos un identificador y, si eliges compartirlo, un nombre y una dirección de correo. Iniciar sesión con Apple te permite ocultar tu correo. El inicio de sesión de Google lo proporciona Google; la propia política de privacidad de Google aplica a su gestión de ese inicio de sesión.",
        ],
      },
      { type: "h3", text: "Información de salud y del ciclo que introduces" },
      {
        type: "p",
        text: [
          "Calendarios de medicación, dosis y horas, citas, registros del diario, hidratación, gastos, zonas de inyección, valores de monitorización y otros registros que decidas anotar. Tú los proporcionas. Los guardamos para que la app pueda mostrártelos y recordártelos.",
        ],
      },
      { type: "h3", text: "Fotos del protocolo, voz y PDF de analíticas" },
      {
        type: "ul",
        items: [
          [
            { b: "Fotos de una hoja de la clínica:" },
            " se envían a nuestro servicio de procesamiento (Anthropic) solo para proponer tarjetas de medicación o de citas. Te pedimos que compruebes cada valor antes de guardar nada. No conservamos la imagen tras el procesamiento y no usamos tus imágenes para entrenar un modelo.",
          ],
          [
            { b: "Voz:" },
            " si añades un medicamento, una cita o una analítica hablando, la grabación se envía a nuestro servicio de procesamiento para proponer tarjetas que revises. No conservamos el audio tras el procesamiento. Lo que sí podemos conservar es la propuesta estructurada que guardas (por ejemplo, un nombre de medicamento y una hora).",
          ],
          [
            { b: "PDF de analíticas:" },
            " si subes un informe de laboratorio, guardamos ese PDF en una carpeta privada vinculada a tu cuenta para que lo tengas junto a los resultados extraídos. El archivo se procesa (Anthropic) para proponer valores que revises. El PDF permanece hasta que elimines ese informe o tu cuenta. Eliminar la cuenta borra las filas de la base de datos y los archivos PDF guardados.",
          ],
        ],
      },
      { type: "h3", text: "Modo Pareja, donde esté disponible" },
      {
        type: "p",
        text: [
          "El Modo Pareja es una compartición opcional con una persona a la que invitas y confirmas. Guardamos tu nombre visible, el consentimiento, la conexión, las opciones de compartición, las tareas prácticas, los mensajes de apoyo predefinidos y las preferencias de notificación. Tu acompañante solo ve la etapa del tratamiento y las citas que selecciones, además de las solicitudes de apoyo y las tareas que elijas compartir. Los títulos de las citas pueden contener información sensible; revísalos antes de compartir. Los diarios, las notas de visita, los resultados de pruebas, los documentos y los registros de medicación no se comparten.",
        ],
      },
      {
        type: "p",
        text: [
          "Puedes pausar la compartición, o cualquiera de las dos personas puede terminar la conexión. El nuevo acceso y las notificaciones se detienen cuando la compartición está en pausa, el ciclo seleccionado está inactivo o el abono de la persona que comparte caduca. Los controles de privacidad siguen disponibles. Cove no guarda de forma permanente el contenido compartido en el dispositivo del acompañante, pero las capturas de pantalla no se pueden recuperar. Los registros de conexión y apoyo permanecen en nuestros servidores hasta que se elimina alguna de las cuentas asociadas. Las notificaciones push usan texto genérico sin detalles del tratamiento.",
        ],
      },
      { type: "h3", text: "Cycle Pal, donde esté disponible" },
      {
        type: "p",
        text: [
          "Cycle Pal es opcional. Guardamos el nombre visible, la presentación y el idioma de conversación que elijas, tu consentimiento, las conexiones, los mensajes, los bloqueos y las denuncias. Tu acompañante sugerida ve tu perfil de Cycle Pal; la mensajería solo se abre cuando ambas aceptan. Tus registros de medicación, laboratorio, diario y otros registros del tratamiento no se comparten automáticamente.",
        ],
      },
      {
        type: "p",
        text: [
          "Los mensajes se guardan en los servidores de Cove y no están cifrados de extremo a extremo. Reglas de texto automáticas pueden rechazar cierto contenido. La revisión humana ocurre tras una denuncia; revisores autorizados de Cove pueden inspeccionar la conversación denunciada y suspender una cuenta abusiva. Las notificaciones de denuncia enviadas por Telegram contienen un identificador de denuncia, no el texto de tu mensaje, el motivo, tu nombre ni tus registros del tratamiento.",
        ],
      },
      {
        type: "p",
        text: [
          "Terminar o bloquear una conexión detiene la mensajería pero no borra la conversación guardada. Eliminar la cuenta de cualquiera de las participantes retira de Cove la conversación y las denuncias asociadas. No podemos retirar las capturas de pantalla o copias que otra participante haya guardado por su cuenta. No compartas información que no quieras que tu acompañante conozca.",
        ],
      },
      { type: "h3", text: "Información recopilada automáticamente" },
      {
        type: "ul",
        items: [
          [
            { b: "PostHog (analítica):" },
            " usamos PostHog para entender si las pantallas cargan y si se completó la incorporación. Está configurado para no recopilar nombres de medicamentos, dosis, valores de laboratorio ni tu correo. En la analítica te identificamos solo con un id de cuenta opaco, no con tu nombre.",
          ],
          [
            { b: "AppsFlyer (medición de publicidad):" },
            " Cove usa una herramienta de medición (AppsFlyer), un socio de medición móvil, para entender qué anuncio te trajo a la app. No mostramos anuncios dentro de Cove. Puede recopilar identificadores del dispositivo (incluido el IDFA de Apple solo si permites el rastreo, el IDFV de Apple y, en Android, un id de publicidad), datos de campaña y atribución (qué anuncio, enlace, código de creador o campaña del App Store llevó a una instalación) y eventos de conversión dentro de la app que no son datos de salud — por ejemplo completar el registro, ver una pantalla de pago, iniciar una prueba o suscribirse. En iOS esto es «rastreo» según las reglas de App Tracking Transparency (ATT) de Apple. Verás el aviso de Apple y puedes tocar Pedir a la app que no rastree. También puedes cambiarlo después en Ajustes de iOS → Privacidad y seguridad → Rastreo. Si lo rechazas, no usamos el IDFA. La medición de instalación limitada de Apple (SKAdNetwork) y los eventos de conversión sin IDFA pueden seguir ejecutándose. PostHog (analítica de producto) no está sujeto a este aviso. Los datos de tu tratamiento se mantienen privados. AppsFlyer no recibe tu medicación, tus analíticas ni tu diario. Los datos de salud y del tratamiento no se comparten con AppsFlyer ni con ningún socio publicitario.",
          ],
          [
            { b: "Apple Search Ads / atribución del App Store:" },
            " en iOS podemos recopilar el token de atribución de Apple para saber que una campaña del App Store llevó a una descarga. Esto no se usa para segmentar anuncios dentro de Cove.",
          ],
          [
            { b: "Datos técnicos:" },
            " tipo de dispositivo, versión de la app y mensajes de fallo o error necesarios para operar y proteger el servicio. Los tokens push se guardan para poder enviarte recordatorios y mensajes de producto ocasionales que ya esperas (por ejemplo, una oferta por tiempo limitado tras una prueba cancelada).",
          ],
        ],
      },
      { type: "h2", text: "Lo que NO hacemos" },
      {
        type: "ul",
        items: [
          ["No vendemos tu información personal o de salud."],
          ["No compartimos tu información de salud con anunciantes, corredores de datos o plataformas sociales para su publicidad."],
          ["No mostramos anuncios de terceros dentro de la app."],
          ["No usamos tu información de salud para segmentar anuncios."],
        ],
      },
      { type: "h2", text: "Cómo usamos tu información" },
      {
        type: "ul",
        items: [
          ["Para ofrecer la app: construir tu calendario, enviar recordatorios, guardar y mostrar lo que registras."],
          ["Para ejecutar las funciones de captura (foto, voz, PDF de analíticas) y mostrarte propuestas que revisar."],
          ["Para procesar los abonos a través de Apple (y Google Play donde esté disponible) y RevenueCat."],
          ["Para operar, proteger y mejorar el servicio, incluida una herramienta de medición (AppsFlyer) para entender qué anuncio te trajo a la app."],
          ["Para contactarte sobre el producto (por ejemplo, una actualización, una respuesta de soporte o una oferta de corta duración tras una pantalla de pago o una prueba cancelada). Puedes darte de baja de los correos no esenciales en la app donde exista ese control."],
        ],
      },
      { type: "h2", text: "Cómo se guarda y protege tu información" },
      {
        type: "p",
        text: [
          "Los datos de la cuenta y de salud se guardan con nuestro proveedor en la nube, Supabase, cifrados en tránsito y en reposo. Los PDF de analíticas están en un almacenamiento privado que solo tu cuenta con sesión iniciada puede leer. El acceso está restringido para que tus datos estén disponibles para tu cuenta, no para otros usuarios. Ningún método de almacenamiento es perfectamente seguro, pero diseñamos el producto para mantener tu información privada y bajo tu control.",
        ],
      },
      { type: "h2", text: "Tus opciones y derechos" },
      {
        type: "ul",
        items: [
          [
            { b: "Eliminar todo:" },
            " Ajustes → Eliminar cuenta. Eliminamos de forma permanente tu cuenta, los datos del ciclo y los PDF de analíticas guardados. La eliminación no es reversible. Apple o Google aún pueden conservar un registro del propio abono según sus reglas.",
          ],
          [{ b: "Acceso y corrección:" }, " puedes ver y editar tu información en la app."],
          [{ b: "Comunicaciones:" }, " puedes darte de baja de los correos no esenciales."],
          [
            { b: "Privacidad en la pantalla de bloqueo:" },
            " puedes ocultar los nombres de los medicamentos en los recordatorios de la pantalla de bloqueo en Ajustes → Notificaciones.",
          ],
          [
            { b: "Rastreo de apps (iOS):" },
            " Cove puede pedir permiso de rastreo para que AppsFlyer use un identificador del dispositivo (IDFA) y entienda qué anuncio te trajo a la app. No se usa para la atención médica ni los recordatorios. Puedes rechazar el aviso o desactivar el rastreo después en Ajustes de iOS → Privacidad y seguridad → Rastreo. Rechazarlo no elimina tu cuenta ni los datos de tu ciclo.",
          ],
        ],
      },
      {
        type: "p",
        text: [
          "Según dónde vivas, puedes tener derechos adicionales (por ejemplo, bajo la ley de California o la europea) para acceder a tu información, eliminarla o restringir su uso. Contacta con ",
          { link: "coveivf@gmail.com", href: "mailto:coveivf@gmail.com" },
          ".",
        ],
      },
      { type: "h2", text: "Conservación de los datos" },
      {
        type: "p",
        text: [
          "Conservamos tu información mientras tu cuenta esté activa. Cuando eliminas tu cuenta, borramos los datos de salud asociados y los archivos PDF de analíticas. Las fotos de la hoja del protocolo y las grabaciones de voz no se conservan tras el procesamiento. Registros estructurados breves de una sesión de captura (por ejemplo, que una foto generó tres tarjetas propuestas) pueden existir hasta la eliminación de la cuenta. Los registros de abono en poder de Apple, Google o RevenueCat siguen sus reglas de conservación, no las nuestras.",
        ],
      },
      { type: "h2", text: "Compartición con proveedores de servicios" },
      {
        type: "p",
        text: [
          "Usamos un número reducido de empresas para operar Cove. Solo pueden procesar información para prestarnos su servicio:",
        ],
      },
      {
        type: "ul",
        items: [
          ["Supabase — alojamiento, base de datos, autenticación y almacenamiento de archivos"],
          ["Apple y, donde esté disponible, Google — inicio de sesión y facturación de la tienda de apps"],
          ["RevenueCat — estado del abono"],
          ["Anthropic — lectura de fotos del protocolo, propuestas de voz y PDF de analíticas en tarjetas que revisas"],
          ["PostHog — analítica de producto (sin contenidos de salud)"],
          ["AppsFlyer — herramienta de medición para publicidad: identificadores del dispositivo, datos de campaña/atribución y eventos de conversión no de salud. No recibe tu medicación, tus analíticas ni tu diario."],
          ["Expo — entrega de notificaciones push"],
          ["Resend — envío de correos de soporte y, cuando está activado, correos de producto transaccionales"],
        ],
      },
      { type: "p", text: ["No vendemos ni alquilamos tu información a nadie."] },
      { type: "h2", text: "Menores" },
      {
        type: "p",
        text: [
          "Cove está pensado para adultos en tratamiento de fertilidad y no está dirigido a menores de 16 años. No recopilamos a sabiendas información de menores.",
        ],
      },
      { type: "h2", text: "Cambios en esta política" },
      {
        type: "p",
        text: ["Si cambiamos esta política, actualizaremos la fecha anterior y, en cambios importantes, te lo notificaremos."],
      },
      { type: "h2", text: "Contacto" },
      {
        type: "p",
        text: [
          "Preguntas sobre privacidad: ",
          { link: "coveivf@gmail.com", href: "mailto:coveivf@gmail.com" },
          ".",
        ],
      },
    ] as LegalDoc,
  },

  terms: {
    eyebrow: "Legal",
    title: "Términos de servicio",
    lastUpdated: "Última actualización: 26 de septiembre de 2026",
    doc: [
      { type: "h2", text: "1. Acuerdo" },
      {
        type: "p",
        text: [
          "Estos Términos rigen tu uso de la app y el sitio de Cove IVF («Cove», «nosotros»). Al usar Cove, aceptas estos Términos. Si no estás de acuerdo, no uses Cove.",
        ],
      },
      { type: "h2", text: "2. Qué es Cove — y qué no (por favor, lee esto)" },
      {
        type: "p",
        text: [
          { b: "Cove es una herramienta de organización, no un dispositivo médico." },
          " No ofrece consejo médico, diagnóstico ni tratamiento. Sigue siempre las indicaciones de tu clínica.",
        ],
      },
      {
        type: "p",
        text: [
          "Cove te ayuda a organizar información que introduces o que se lee de los documentos de tu clínica — calendarios de medicación, recordatorios, citas y resultados que decidas anotar o subir. Cove no:",
        ],
      },
      {
        type: "ul",
        items: [
          ["recomienda, receta, ajusta ni verifica ningún medicamento, dosis u horario;"],
          ["diagnostica ninguna afección, interpreta tendencias de laboratorio ni predice ningún resultado;"],
          ["sustituye a tu médico, clínica, enfermera o farmacéutico."],
        ],
      },
      {
        type: "p",
        text: [
          "Tu clínica es siempre la fuente de verdad. Si algo en Cove difiere de sus indicaciones, sigue a tu clínica y contáctala. No confíes en Cove para ninguna decisión médica. En una emergencia, contacta con tu clínica o los servicios de emergencia.",
        ],
      },
      { type: "h2", text: "Modo Pareja, donde esté disponible" },
      {
        type: "p",
        text: [
          "El Modo Pareja es un apoyo opcional entre adultos que se conocen y se confirman. Invita solo a alguien de confianza y revisa lo que compartes. La persona que comparte necesita un abono de Cove activo; su acompañante usa una cuenta gratuita aparte. El nuevo acceso compartido y los recordatorios se detienen si ese abono caduca o se pausa la compartición. Cualquiera puede terminar la conexión. Completar una tarea de apoyo nunca registra un medicamento como tomado. Los mensajes de apoyo y los recordatorios no son consejo médico ni servicios de emergencia, y la entrega de notificaciones no está garantizada.",
        ],
      },
      { type: "h2", text: "Reglas de la comunidad Cycle Pal, donde esté disponible" },
      {
        type: "p",
        text: [
          "Cycle Pal es apoyo entre iguales opcional para adultos de 18 años o más. Ambas personas deben aceptar una conexión sugerida antes de enviar mensajes. No es consejo médico ni apoyo de emergencia. No acoses, amenaces, estafes, suplantes a otras personas, compartas contenido sexual, solicites dinero ni le digas a otra persona que cambie su tratamiento.",
        ],
      },
      {
        type: "p",
        text: [
          "Puedes terminar o bloquear una conexión y denunciar un problema, incluso después de que una conversación haya terminado. Una denuncia bloquea esa conexión. Cove puede revisar la conversación denunciada, ocultar los mensajes abusivos y suspender una cuenta. Los mensajes no se aprueban manualmente antes de enviarse. Los filtros automáticos pueden pasar por alto un abuso o rechazar mensajes legítimos; contacta con coveivf@gmail.com para obtener ayuda. Comparte solo lo que te sientas cómoda revelando.",
        ],
      },
      { type: "h2", text: "3. Funciones de captura y exactitud" },
      {
        type: "p",
        text: [
          "Cove puede leer una foto de tu hoja de protocolo, una descripción de voz o un PDF de analítica para ayudarte a crear tarjetas en la app. Esta lectura puede contener errores. Eres responsable de comprobar cada valor con tus propios documentos de la clínica antes de confiar en él, por eso Cove te pide revisar las propuestas antes de guardarlas. Cove no se responsabiliza de los errores de lectura. Confirmar un valor en Cove no lo hace médicamente correcto — solo tu clínica puede hacerlo.",
        ],
      },
      { type: "h2", text: "4. Recordatorios" },
      {
        type: "p",
        text: [
          "Cove puede enviar recordatorios, incluso para medicamentos sensibles al tiempo. Los recordatorios pueden fallar por razones fuera de nuestro control (ajustes del dispositivo, modos de concentración, permisos de notificaciones, problemas de software, conectividad). No confíes en Cove como tu único recordatorio para ningún medicamento crítico, incluida una inyección desencadenante; establece un respaldo independiente (como una alarma de teléfono). Cove no se responsabiliza de un medicamento omitido o mal cronometrado.",
        ],
      },
      { type: "h2", text: "5. Tu cuenta" },
      {
        type: "p",
        text: [
          "Eres responsable de tu cuenta y de la exactitud de lo que introduces. Usa Cove solo para su propósito personal previsto y conforme a la ley. Puedes iniciar sesión con Apple, Google o correo.",
        ],
      },
      { type: "h2", text: "6. Compras" },
      {
        type: "p",
        text: [
          "Cove se vende como un abono de renovación automática a través del App Store de Apple (y, donde esté disponible, Google Play). La facturación la procesa Apple o Google, y el estado del abono lo rastrea RevenueCat. La app muestra el precio, la duración y lo que se incluye en el momento de la compra. La oferta predeterminada incluye una prueba gratuita breve (actualmente tres días) a menos que se te muestre otra oferta. Las compras están sujetas a los términos de Apple o Google; los reembolsos los gestionan ellos según sus políticas. Gestiona o cancela en los ajustes del dispositivo (Apple: Ajustes → tu nombre → Suscripciones).",
        ],
      },
      { type: "h2", text: "7. Tu contenido" },
      {
        type: "p",
        text: [
          "La información que introduces o subes (incluidos los PDF de analíticas) es tuya. Nos concedes solo el permiso limitado necesario para operar el servicio para ti (guardarla, procesarla, mostrártela, enviar tus recordatorios). No la vendemos ni la usamos para hacerte publicidad. Consulta nuestra ",
          { link: "Política de privacidad", to: "/privacy" },
          ".",
        ],
      },
      { type: "h2", text: "8. Uso aceptable" },
      {
        type: "p",
        text: [
          "No hagas mal uso de Cove: nada de uso ilegal, ni intentos de romper, sobrecargar, aplicar ingeniería inversa u obtener acceso no autorizado al servicio, ni uso en nombre de otra persona sin su consentimiento.",
        ],
      },
      { type: "h2", text: "9. Disponibilidad" },
      {
        type: "p",
        text: [
          "Procuramos mantener Cove en funcionamiento, pero no garantizamos que esté siempre disponible, ininterrumpido o libre de errores. Podemos cambiar, suspender o descontinuar funciones.",
        ],
      },
      { type: "h2", text: "10. Descargos de responsabilidad" },
      {
        type: "p",
        text: [
          "En la máxima medida permitida por la ley, Cove se ofrece «tal cual» y «según disponibilidad», sin garantías de ningún tipo, expresas o implícitas, incluida la idoneidad para un fin concreto. No garantizamos que Cove sea exacto, fiable o libre de errores, ni que los recordatorios se entreguen siempre.",
        ],
      },
      { type: "h2", text: "11. Limitación de responsabilidad" },
      {
        type: "p",
        text: [
          "En la máxima medida permitida por la ley, Cove y su equipo no serán responsables de daños indirectos, incidentales, especiales o consecuentes, ni de ningún resultado médico, medicamento omitido o mal cronometrado, o decisión tomada confiando en Cove.",
        ],
      },
      { type: "h2", text: "12. Cambios en estos Términos" },
      {
        type: "p",
        text: [
          "Podemos actualizar estos Términos; actualizaremos la fecha anterior y, en cambios importantes, lo avisaremos. El uso continuado significa que aceptas los Términos actualizados.",
        ],
      },
      { type: "h2", text: "13. Ley aplicable / disputas" },
      {
        type: "p",
        text: [
          "Si tienes una disputa, escríbenos primero a ",
          { link: "coveivf@gmail.com", href: "mailto:coveivf@gmail.com" },
          ". Las leyes imperativas de protección al consumidor de tu país de residencia siguen aplicando donde no se pueda renunciar a ellas. Sujeto a esas leyes, estos Términos se rigen por las leyes de la República Árabe de Egipto.",
        ],
      },
      { type: "h2", text: "14. Contacto" },
      {
        type: "p",
        text: [
          "Preguntas sobre estos Términos: ",
          { link: "coveivf@gmail.com", href: "mailto:coveivf@gmail.com" },
          ".",
        ],
      },
    ] as LegalDoc,
  },
};
