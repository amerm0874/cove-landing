import type { LegalDoc } from "../types";
import type { Dictionary } from "./en";

/** French (Français). FIV, piqûre de déclenchement, cycle, rendez-vous, embryon. */
export const fr: Dictionary = {
  common: {
    brand: "Cove",
    downloadOnAppStore: "Télécharger sur l’App Store",
    downloadOnThe: "Télécharger sur",
    appStore: "l’App Store",
    googlePlayAlt: "Disponible sur Google Play",
    download: "Télécharger",
    availableNow: "Disponible sur iPhone et Android · Gratuit au départ",
    availableNowPlain: "Disponible sur iPhone et Android. Gratuit au départ.",
    freeToStart: "Gratuit au départ",
    encryptedNote:
      "Chiffré en transit et au repos. Vos données de traitement ne sont jamais vendues ni utilisées pour la publicité.",
    followAlong: "Suivez-nous",
  },

  nav: {
    features: "Fonctionnalités",
    howItWorks: "Comment ça marche",
    timeline: "Parcours",
    privacy: "Confidentialité",
    blog: "Blog",
    faq: "FAQ",
    support: "Assistance",
    terms: "Conditions",
    deleteAccount: "Supprimer le compte",
    affiliate: "Programme d’affiliation",
    contact: "Contact",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    primary: "Navigation principale",
    mobile: "Mobile",
  },

  footer: {
    disclaimer:
      "Cove IVF est un outil d’organisation, pas un dispositif médical. Il ne fournit ni conseil médical, ni diagnostic, ni traitement. Suivez toujours les instructions de votre clinique.",
    copyright: "© 2026 Cove IVF",
    tagline: "Un havre de calme pour votre cycle.",
  },

  languageSwitcher: {
    label: "Langue",
    choose: "Choisir la langue",
  },

  social: {
    instagram: "Cove sur Instagram",
    tiktok: "Cove sur TikTok",
    email: "Écrire à Cove",
  },

  meta: {
    home: {
      title: "Cove — suivi FIV : médicaments et cycle | iOS et Android",
      description:
        "Le suivi FIV serein pour tout votre cycle. Photographiez votre protocole et obtenez la liste exacte des médicaments, les changements de dose et des rappels discrets. Privé, chiffré, conçu pour de vraies patientes en FIV. Disponible sur iPhone et Android.",
    },
    features: {
      title: "Fonctionnalités — suivi FIV Cove",
      description:
        "Toutes les fonctionnalités de Cove : scanner de protocole, liste des médicaments du soir, alarme de la piqûre de déclenchement, rendez-vous, monitorage, embryons, journal et Ajouter avec l’IA. Privé, chiffré, sur iPhone et Android.",
      ogDescription:
        "Photographiez votre protocole, gardez la liste du soir, protégez la piqûre de déclenchement et réunissez le reste du cycle en un seul endroit chiffré.",
    },
    faq: {
      title: "FAQ — suivi FIV Cove",
      description:
        "Réponses sur ce qu’est Cove, s’il suit les médicaments et injections de FIV, le prix, la disponibilité Android, la confidentialité et sa différence avec les applis de fertilité générales.",
    },
    support: {
      title: "Assistance — Cove IVF",
      description: "Obtenez de l’aide sur Cove IVF. Contacter l’assistance, FAQ et gestion du compte.",
      ogDescription: "Une question, un retour ou un souci avec l’appli ? Nous lisons chaque message.",
    },
    deleteAccount: {
      title: "Supprimer votre compte Cove — Cove IVF",
      description:
        "Comment supprimer définitivement votre compte Cove IVF et toutes les données associées, depuis l’appli ou par e-mail à l’assistance.",
      ogDescription: "Supprimez à tout moment votre compte Cove IVF et toutes vos données associées.",
    },
    affiliate: {
      title: "Affiliation Cove — Cove IVF",
      description:
        "Programme d’affiliation Cove : 20 % du Cove Pro payé via votre code. Les codes sont attribués manuellement. Candidature par e-mail.",
      ogDescription: "20 % du Cove Pro payé via votre code. Codes envoyés par e-mail après examen.",
    },
    privacy: {
      title: "Politique de confidentialité — Cove IVF",
      description: "Comment Cove IVF collecte, utilise et protège vos informations.",
      ogDescription: "Politique de confidentialité en langage clair pour l’appli et le site Cove IVF.",
    },
    terms: {
      title: "Conditions d’utilisation — Cove IVF",
      description: "Les conditions régissant votre utilisation de l’appli et du site Cove IVF.",
      ogDescription: "Cove IVF est un outil d’organisation, pas un dispositif médical. Lisez les conditions.",
    },
    blog: {
      title: "Blog — Cove IVF",
      description: "Notes sur les cycles de FIV, le suivi des médicaments et un parcours de traitement plus serein.",
    },
  },

  home: {
    hero: {
      eyebrow: "Suivi FIV · iPhone et Android",
      heading: "Le suivi FIV serein pour tout votre cycle.",
      body: "Cove est un suivi de cycle et de médicaments de FIV qui vous accompagne du premier protocole jusqu’au résultat final. Photographiez la feuille de votre clinique pour obtenir la liste exacte de vos médicaments, puis gardez chaque changement de dose, chaque rendez-vous et le rappel de la piqûre de déclenchement en un seul endroit chiffré — pour ne pas tout garder en tête.",
      badge: "iPhone et Android · pensé pour les cycles de FIV",
      todayAlt:
        "Écran Aujourd’hui du suivi FIV Cove montrant la liste des médicaments du soir, l’anneau de progression et la dose suivante",
    },
    trust: [
      "Conçu avec des patientes en FIV.",
      "Pensé autour de vrais protocoles de clinique.",
      "Chiffré en transit et au repos.",
    ],
    allFeatures: {
      heading: "Chaque fonctionnalité, listée.",
      body: "Scanner, alarme de déclenchement, calendrier, dossiers, journal, Ajouter avec l’IA, et le reste.",
      cta: "Voir toutes les fonctionnalités",
    },
    privacy: {
      heading: "La confidentialité, concrètement.",
      intro: "La confidentialité n’est pas une option ajoutée après coup — c’est notre manière de bâtir Cove dès le premier jour.",
      items: [
        { title: "Conçu pour être chiffré", body: "Vos données sont chiffrées en transit et au repos." },
        {
          title: "Jamais vendues pour la publicité",
          body: "Vos données de traitement ne sont jamais vendues ni partagées pour la publicité.",
        },
        {
          title: "Aucune publicité dans Cove",
          body: "Nous n’affichons aucune publicité dans Cove, et vos données de traitement ne servent jamais à la publicité.",
        },
        { title: "Vous gardez le contrôle", body: "Vous pouvez supprimer vos données définitivement, à tout moment, en un geste." },
        {
          title: "Discret par conception",
          body: "Les notifications de l’écran verrouillé ne nomment pas vos médicaments, sauf si vous l’activez.",
        },
      ],
    },
    faqHeading: "Questions",
    faq: [
      {
        q: "Est-ce un conseil médical ?",
        a: "Non. Cove est un organiseur. Il ne suggère, n’ajuste ni n’interprète jamais les doses, et ne prédit aucun résultat. Votre clinique décide de tout ce qui est médical.",
      },
      {
        q: "Qu’arrive-t-il à mon scan ?",
        a: "Il est traité pour lire votre planning, puis supprimé. Votre planning est stocké chiffré, en transit et au repos.",
      },
      { q: "Sur quelles plateformes est Cove ?", a: "Cove est disponible sur iPhone et Android." },
    ],
    downloadCta: {
      heading: "Un havre de calme pour votre cycle est prêt.",
    },
  },

  chapters: {
    life: {
      heading: "La FIV est déjà assez dure. Tout suivre ne devrait pas l’être.",
      body: "Un cycle n’est pas une routine. C’est une pile de détails précis et mouvants — et ils comptent tous.",
      situations: [
        "Votre clinique a changé la dose du jour.",
        "Trois médicaments ce soir.",
        "Monitorage à 7h30.",
        "Piqûre de déclenchement à 20h00 précises.",
        "Quel médicament a été mélangé en premier ?",
        "En attente du rapport de fécondation de demain.",
      ],
      snippetMonitoring: "Prise de sang · échographie",
      snippetTrigger: "J-36 h avant la ponction",
      snippetPending: "Jour 1 · en attente",
    },
    chapterLabel: "Chapitre",
    medication: {
      eyebrow: "Plan de médicaments FIV",
      headline: "Sachez exactement ce que votre plan de médicaments exige ce soir.",
      body: "Votre liste du soir, dans l’ordre, avec une vérification tranquille avant de commencer à préparer. Tout le plan, réuni — pas éparpillé entre un PDF, un portail et un fil de messages.",
      alt: "Suivi des médicaments FIV Cove montrant l’historique des injections avec site, dose et heure pour chaque médicament",
    },
    scanner: {
      eyebrow: "Scanner de protocole FIV",
      headline: "Une feuille de clinique devient tout votre plan de traitement.",
      body: "Photographiez le protocole une seule fois. Le scanner de protocole de Cove le structure en un plan réellement lisible — chaque médicament, chaque dose, chaque jour, au même endroit.",
      alt: "Écran du scanner de protocole Cove invitant à photographier une feuille de médicaments de clinique",
    },
    verification: {
      eyebrow: "Vérification de la dose",
      headline: "Quand votre clinique change un chiffre, tout reste exact.",
      body: "Mettez la valeur à jour une fois — après l’avoir confirmée sur votre feuille de clinique. En tant que suivi de vos médicaments de FIV, Cove la remplace sur la carte du soir, le rappel du lendemain et le journal.",
      alt: "Écran de vérification des doses Cove demandant de comparer chaque médicament scanné à votre feuille de clinique",
    },
    trigger: {
      eyebrow: "Rappel de la piqûre de déclenchement",
      headline: "Le rappel de la piqûre de déclenchement qui ne peut pas échouer.",
      body: "Un compte à rebours, des rappels discrets qui montent en intensité, et une confirmation claire. Discret sur l’écran verrouillé — vos médicaments ne sont jamais nommés.",
      alt: "Écran de rappel de la piqûre de déclenchement Cove avec compte à rebours et un bouton de confirmation « je l’ai faite »",
    },
    timeline: {
      eyebrow: "Parcours du cycle de FIV",
      headline: "Sachez toujours où vous en êtes dans votre cycle de FIV.",
      body: "Une vue tranquille de votre étape de traitement — de la préparation à la récupération. Choisissez l’étape qui correspond à aujourd’hui, et Cove porte le reste du plan avec vous.",
      alt: "Parcours du cycle de FIV Cove montrant les étapes de traitement, de la préparation à la récupération, avec l’étape en cours mise en évidence",
    },
    withoutWith: {
      eyebrow: "La différence",
      heading: "Un cycle porté à dix endroits — ou à un seul.",
      withoutLabel: "Sans Cove",
      withoutTitle: "Éparpillé. Inquiet.",
      withLabel: "Avec Cove",
      withTitle: "Serein. Unique. Ordonné.",
      messy: [
        "Tableur Excel des doses",
        "Page Notion de notes",
        "Protocole PDF de la clinique",
        "Connexion au portail de la clinique",
        "Alertes de calendrier",
        "Alarmes de téléphone intitulées « méds »",
        "Fil WhatsApp avec l’infirmière",
        "Capture d’écran de la feuille de protocole",
        "« C’était quoi la dose d’aujourd’hui ? »",
      ],
      calm: [
        "Un plan de traitement vérifié",
        "Un planning de médicaments",
        "Un parcours de rendez-vous",
        "Un endroit pour les changements de dose",
        "Un endroit pour les résultats",
        "Un compagnon serein",
      ],
    },
    community: {
      eyebrow: "Un terrain commun",
      heading: "Vous n’êtes pas la seule à ressentir cela.",
      voices: [
        "J’étais terrifiée à l’idée d’oublier quelque chose.",
        "Chaque rendez-vous de monitorage changeait le plan.",
        "J’avais des rappels partout et je craignais quand même de rater une dose.",
        "La logistique est devenue presque aussi épuisante que le traitement.",
      ],
      closing: "La FIV est déjà accablante. La garder organisée ne devrait pas l’être.",
      note: "Des thèmes que les patientes décrivent souvent publiquement. Pas des citations attribuées. Pas des recommandations.",
    },
  },

  features: {
    hero: {
      eyebrow: "Cove IVF",
      heading: "Tout ce que Cove fait pour un cycle.",
      body: "Photographiez le protocole, gardez la liste du soir, protégez la piqûre de déclenchement et réunissez le reste en un seul endroit chiffré.",
      howItWorks: "Comment ça marche",
    },
    jumpNavLabel: "Groupes de fonctionnalités",
    spotlight: {
      heading: "Les trois choses pour lesquelles on ouvre Cove.",
      items: [
        {
          title: "Scanner la feuille",
          body: "Une photo du protocole de la clinique devient un plan réellement lisible.",
          alt: "Scanner de protocole Cove invitant à photographier une feuille de médicaments de clinique",
        },
        {
          title: "La liste du soir",
          body: "Chaque médicament, dose et heure sur une seule carte. Cochez quand c’est fait.",
          alt: "Écran Aujourd’hui de Cove montrant la liste des médicaments du soir",
        },
        {
          title: "Piqûre de déclenchement",
          body: "Un compte à rebours et une alarme que vous confirmez. Discret sur l’écran verrouillé.",
          alt: "Rappel de la piqûre de déclenchement Cove avec compte à rebours et confirmation",
        },
      ],
    },
    downloadHeading: "Un havre de calme pour votre cycle est prêt.",
    questionsPrefix: "Des questions ?",
    questionsLink: "Lire la FAQ",
    categories: {
      medications: {
        label: "Médicaments",
        headline: "Le plan du soir, réuni en un seul endroit.",
        intro:
          "La feuille de votre clinique fait foi. Cove la transforme en une liste que vous pouvez vérifier, cocher et mettre à jour quand la dose change.",
        items: [
          {
            title: "Scanner de protocole",
            body: "Photographiez la feuille de médicaments de votre clinique. Cove lit les médicaments, les doses et les heures, puis attend que vous confirmiez chaque valeur.",
          },
          {
            title: "Vérification de la dose",
            body: "Rien n’est planifié tant que vous ne l’avez pas comparé à votre propre feuille. Modifiez chaque valeur à la main, ou reprenez la photo.",
          },
          {
            title: "La liste du soir",
            body: "Exactement quoi prendre, à quelle dose, à quelle heure. Cochez chacun. Demain matin reste visible sans encombrer ce soir.",
          },
          {
            title: "Rappels de dose",
            body: "Un rappel se déclenche à l’heure que vous fixez. Les doses manquées restent dans Aujourd’hui jusqu’à ce que vous les marquiez prises. Elles ne sont jamais abandonnées en silence.",
          },
          {
            title: "Changements en cours de cycle",
            body: "Quand le monitorage change un chiffre, mettez-le à jour une fois. La carte du soir, les rappels ultérieurs et votre journal suivent.",
          },
          {
            title: "Saisie manuelle",
            body: "Vous préférez taper ? Ajoutez un médicament vous-même : nom, dose, unité, début, fin et heures de la journée.",
          },
          {
            title: "Sites d’injection",
            body: "Quand vous marquez une injection faite, indiquez où vous avez piqué. Les sites récents restent sur le schéma pour que le prochain ne soit pas une devinette.",
          },
          {
            title: "Stock de médicaments",
            body: "Stock facultatif sur chaque ligne de médicament : combien il vous reste, et combien de soirs cela couvre.",
          },
        ],
      },
      trigger: {
        label: "Déclenchement et alertes",
        headline: "L’injection qui ne peut pas être un « peut-être ».",
        intro:
          "Les rappels de routine peuvent être mis en pause. La piqûre de déclenchement, non. Cove la traite comme un autre type d’alerte, et garde l’écran verrouillé discret.",
        items: [
          {
            title: "Alarme de la piqûre de déclenchement",
            body: "Un compte à rebours, des rappels croissants et une alerte plein écran le moment venu. Confirmez que vous l’avez faite, ou touchez « Pas encore ».",
          },
          {
            title: "Reste active si vous mettez en pause",
            body: "Mettre un cycle en pause arrête les rappels de dose de routine. Le rappel de déclenchement dans Cove reste planifié. Réglez aussi une alarme de téléphone en secours.",
          },
          {
            title: "Notifications discrètes",
            body: "Les rappels peuvent masquer les noms des médicaments sur l’écran verrouillé. Activez-le dans les Réglages, pour qu’un coup d’œil ne révèle pas votre cycle.",
          },
          {
            title: "Boîte « à venir »",
            body: "Doses et visites dans une seule liste, pour voir la suite sans ouvrir chaque écran.",
          },
          {
            title: "Rappels de rendez-vous",
            body: "Choisissez combien de temps à l’avance Cove doit vous prévenir. La clinique et l’heure restent sur la carte.",
          },
        ],
      },
      cycle: {
        label: "Cycle et calendrier",
        headline: "Où vous en êtes, et la suite.",
        intro:
          "Un cycle, c’est plus que les médicaments du soir. Cove garde l’étape, le calendrier et les visites à la clinique à côté du même plan.",
        items: [
          {
            title: "Étapes du traitement",
            body: "De la préparation à la récupération. Choisissez l’étape qui correspond à aujourd’hui. Cove l’utilise pour montrer où vous en êtes, pas pour changer votre protocole.",
          },
          {
            title: "Calendrier du cycle",
            body: "Médicaments et visites sur un seul calendrier, ouvert depuis la barre du haut. Touchez un jour pour voir ce qui était prévu.",
          },
          {
            title: "Rendez-vous",
            body: "Chaque échographie et visite de monitorage, avec la clinique et l’heure. Ajoutez des notes après la visite.",
          },
          {
            title: "Mettre un cycle en pause",
            body: "Arrêtez les rappels de routine sans supprimer votre historique. Reprenez quand vous êtes prête.",
          },
          {
            title: "Plusieurs cycles",
            body: "Les cycles antérieurs restent dans votre compte, pour qu’un deuxième ou troisième essai ne parte pas d’une page blanche.",
          },
          {
            title: "Journal",
            body: "Un point sur la façon dont la journée s’est passée : humeur, corps, une note si vous le souhaitez. Sautez n’importe quel jour. Exportez un PDF pour vous.",
          },
          {
            title: "Hydratation",
            body: "Un suivi quotidien des verres dans Aujourd’hui, pour voir la série sans appli séparée.",
          },
        ],
      },
      records: {
        label: "Dossiers",
        headline: "Ce que la clinique vous a dit, gardé en ordre.",
        intro:
          "Cove enregistre ce que vous notez. Il ne note jamais un résultat, ne prédit jamais une issue et ne vous dit jamais ce qu’un chiffre signifie.",
        items: [
          {
            title: "Visites de monitorage",
            body: "Prises de sang, échographie et compte des follicules après chaque visite. Un historique à relire, pas une courbe qui vous interprète.",
          },
          {
            title: "PDF de bilans sanguins",
            body: "Importez un compte rendu de labo. Cove propose les chiffres pour révision. Rien n’est enregistré tant que vous ne confirmez pas.",
          },
          {
            title: "Résultats d’analyses",
            body: "Bêta-hCG, œstradiol, progestérone et le reste du bilan, avec la date et l’unité utilisée par votre clinique.",
          },
          {
            title: "Parcours des embryons",
            body: "Comment chaque embryon se développe, jour après jour, en une ligne claire. Fécondé, blastocyste, congelé, transféré : les événements qu’on vous a annoncés.",
          },
          {
            title: "Historique des procédures",
            body: "Ponctions, transferts, déclenchement et autres procédures, gardés par ordre de date.",
          },
          {
            title: "Entonnoir de fécondation",
            body: "Ovocytes recueillis, matures, fécondés, embryons. Les chiffres donnés par votre clinique, dans une pile tranquille.",
          },
          {
            title: "Coûts du cycle",
            body: "Clinique, médicaments et part remboursée. Une devise par cycle, dans Dossiers.",
          },
        ],
      },
      capture: {
        label: "Ajouter avec l’IA",
        headline: "Dites-le, photographiez-le, ou tapez-le.",
        intro:
          "Cove peut proposer un médicament ou un rendez-vous à partir d’une photo, d’une note vocale ou d’un texte. Vous révisez toujours la proposition. Un ajout ne compte qu’après l’enregistrement.",
        items: [
          {
            title: "Caméra",
            body: "Prenez ou choisissez une photo d’un médicament. Cove propose le nom, la dose et l’horaire à vérifier.",
          },
          {
            title: "Voix",
            body: "Maintenez pour dicter ce qu’il faut ajouter : un médicament ou un rendez-vous. Cove transforme l’enregistrement en proposition.",
          },
          { title: "Texte", body: "Tapez ou collez un message. Même étape de révision que la caméra et la voix." },
          {
            title: "Vous confirmez d’abord",
            body: "Les propositions ne sont jamais le planning. Confirmez ou corrigez chaque champ avant tout enregistrement.",
          },
        ],
      },
      privacy: {
        label: "Confidentialité",
        headline: "Conçu pour rester le vôtre.",
        intro:
          "Les données de santé sont chiffrées en transit et au repos. Cove ne les vend pas, ne les partage pas pour la publicité et n’affiche aucune publicité dans l’appli.",
        items: [
          {
            title: "Chiffré en transit et au repos",
            body: "Votre planning et vos dossiers sont stockés chiffrés. Les photos de la feuille de protocole sont traitées pour lire le plan, puis supprimées.",
          },
          {
            title: "Jamais vendues pour la publicité",
            body: "Nous ne vendons pas vos données de traitement. Nous ne les partageons pas avec des annonceurs. Les données de santé ne servent pas à cibler des publicités.",
          },
          {
            title: "Tout supprimer",
            body: "Réglages, puis Supprimer le compte. Cycles, médicaments, doses, rendez-vous, journal, dossiers et PDF importés sont définitivement retirés.",
          },
          {
            title: "iPhone et Android",
            body: "Cove est disponible sur les deux. Même produit, mêmes contrôles de confidentialité.",
          },
        ],
      },
    },
  },

  faqPage: {
    eyebrow: "Cove IVF",
    heading: "Foire aux questions",
    intro: "Des réponses claires sur ce que Cove suit, son prix et sa différence avec une appli de fertilité générale.",
    items: [
      {
        q: "Qu’est-ce que Cove et à qui s’adresse-t-il ?",
        a: "Cove est une appli mobile pour les personnes actuellement dans un cycle de FIV (fécondation in vitro). Elle organise votre planning de médicaments, vos injections, vos rendez-vous et l’historique de cycle en un seul endroit. Elle est conçue spécifiquement pour les patientes en FIV — pas pour le suivi de fertilité général, le suivi d’ovulation ou l’essai bébé naturel. Si vous n’êtes pas encore dans un cycle de traitement actif, une appli de fertilité générale vous conviendra mieux que Cove.",
      },
      {
        q: "Suit-il les médicaments et injections de FIV ?",
        a: "Oui. Vous pouvez photographier la feuille de protocole de votre clinique et Cove la structure en un plan de médicaments jour par jour, avec des rappels pour chaque dose. Il suit aussi les sites d’injection pour les alterner, et inclut un rappel dédié à la piqûre de déclenchement avec compte à rebours et notifications discrètes et croissantes. Quand votre clinique change une dose, vous la mettez à jour une fois et cela met à jour la carte du jour, les rappels futurs et votre historique.",
      },
      {
        q: "Fonctionne-t-il pour plusieurs cycles ?",
        a: "Oui. Cove conserve votre historique de cycles — médicaments, doses et résultats — sur plus d’un cycle de FIV, si bien que pour un deuxième ou troisième cycle vous pouvez revoir ce qui s’est passé au précédent au lieu de repartir de zéro.",
      },
      {
        q: "Mes données sont-elles privées ?",
        a: "Vos données de traitement restent privées, chiffrées, jamais vendues, jamais partagées pour la publicité. Cove utilise un outil de mesure (AppsFlyer) qui collecte des données d’appareil et de campagne pour comprendre quelle publicité vous a amenée à l’appli. Il ne reçoit ni vos médicaments, ni vos analyses, ni votre journal. Nous n’affichons aucune publicité dans l’appli. Vous pouvez supprimer définitivement votre compte et ses données depuis l’appli à tout moment. Les photos de feuille de protocole sont traitées pour lire votre planning et ne sont pas conservées après traitement. Voir la politique de confidentialité complète pour les détails.",
      },
      {
        q: "Combien ça coûte ?",
        a: "Cove coûte 12,99 $/mois, ou 8,33 $/mois avec le plan facturé tous les 6 mois. Un essai gratuit est proposé avant le début de l’abonnement.",
      },
      {
        q: "Existe-t-il une version Android ?",
        a: "Oui. Cove est disponible sur iPhone et Android — téléchargez-le sur l’App Store ou Google Play.",
      },
      {
        q: "Est-ce un dispositif médical ?",
        a: "Non. Cove est un outil d’organisation, pas un dispositif médical. Il ne diagnostique pas, ne prédit pas les résultats et ne suggère, n’ajuste ni n’interprète jamais vos doses. Il ne fournit jamais de conseil médical — votre clinique prend chaque décision médicale, et vous devez toujours suivre ses instructions plutôt que ce que dit l’appli.",
      },
      {
        q: "En quoi est-il différent d’un suivi de fertilité général comme Flo ou Premom ?",
        a: "Les applis de fertilité générales comme Flo ou Premom sont construites autour de la prédiction de l’ovulation et des fenêtres fertiles pour celles qui essaient de concevoir naturellement — prévisions de jour du cycle, température basale, glaire cervicale, tests LH. Rien de tout cela ne s’applique une fois en cycle de FIV, où votre planning est fixé par le protocole de votre clinique plutôt que par vos propres signaux. Cove est construit autour du problème inverse : un protocole dirigé par la clinique avec plusieurs médicaments, un horaire de dose précis, des sites d’injection, des rendez-vous et des résultats de monitorage qui évoluent à mesure que votre clinique ajuste votre plan. Si vous n’êtes pas en traitement, un suivi général est le bon outil. Si vous êtes en cycle de FIV, Cove est conçu pour cette situation précise.",
      },
    ],
  },

  support: {
    eyebrow: "Aide et contact",
    heading: "Assistance Cove IVF",
    intro: "Une question, un retour ou un souci avec l’appli ? Nous lisons chaque message.",
    emailLabel: "E-mail",
    emailUs: "Écrivez-nous",
    faqHeading: "Questions fréquentes",
    faq: [
      {
        q: "Est-ce un conseil médical ?",
        a: "Non. Cove est un organiseur. Il ne suggère, n’ajuste ni n’interprète jamais les doses, et ne prédit aucun résultat. Votre clinique décide de tout ce qui est médical.",
      },
      {
        q: "Qu’arrive-t-il à mon scan ?",
        a: "Il est traité pour lire votre planning, puis supprimé. Votre planning est stocké chiffré, en transit et au repos.",
      },
      {
        q: "Sur quelles plateformes est Cove ?",
        a: "Cove est disponible sur iPhone et Android.",
      },
      {
        q: "Comment supprimer mes données ?",
        a: "Ouvrez les Réglages dans l’appli et touchez Tout supprimer. C’est immédiat et définitif.",
      },
      {
        q: "Le scanner a mal lu ma feuille — que faire ?",
        a: "Vous pouvez modifier chaque valeur à la main, ou reprendre la photo. Comparez toujours à la feuille de votre clinique.",
      },
      {
        q: "Comment restaurer mon achat ?",
        a: "Sur un nouvel appareil, ouvrez l’appli et touchez Restaurer l’achat dans les Réglages.",
      },
    ],
    form: {
      name: "Nom",
      email: "E-mail",
      message: "Message",
      send: "Envoyer le message",
    },
    privacyLink: "Politique de confidentialité",
    termsLink: "Conditions",
  },

  deleteAccount: {
    eyebrow: "Mentions légales",
    heading: "Supprimer votre compte Cove",
    intro: "Vous pouvez supprimer définitivement votre compte Cove IVF et toutes les données associées à tout moment.",
    fromAppLead: "Pour supprimer votre compte depuis l’appli :",
    steps: [
      "Ouvrez l’appli Cove.",
      "Allez dans Réglages.",
      "Touchez « Supprimer le compte » dans la zone de danger.",
      "Confirmez en tapant DELETE.",
    ],
    whatDeletedLabel: "Ce qui est supprimé :",
    whatDeletedBody:
      " Cela retire définitivement votre compte et les données associées — cycles, médicaments, doses, rendez-vous, journaux d’injection, entrées de journal, PDF de bilans sanguins importés et votre profil. Apple ou Google peuvent conserver une trace de l’abonnement lui-même. Cette action est irréversible.",
    noAccessPrefix: "Si vous ne pouvez pas accéder à l’appli : écrivez-nous à ",
    noAccessSuffix:
      " depuis l’adresse associée à votre compte, et nous supprimerons votre compte et vos données pour vous.",
  },

  affiliate: {
    eyebrow: "Partenariats",
    heading: "Affiliation Cove",
    whoHeading: "Pour qui",
    whoBody: "Les personnes en cycle de FIV, et les créateurs qui utiliseront l’appli dans un vrai cycle.",
    commissionHeading: "Commission",
    commissionBody: "20 % du Cove Pro payé via votre code.",
    cookieHeading: "Cookie",
    cookieBody: "90 jours.",
    howHeading: "Comment ça marche aujourd’hui",
    howBody:
      "Les codes sont attribués manuellement. Les événements payants sont des achats intégrés Apple plus RevenueCat, pas Stripe, donc il n’y a pas encore de tableau de bord automatique. Si nous concluons le partenariat, vous recevez un code par e-mail après examen.",
    measureHeading: "Ce que nous mesurons",
    measureBody: "Code activé → 7 jours d’usage → payé. Pas les vues, pas le nombre d’abonnés.",
    trialHeading: "Essai influenceur",
    trialBody:
      "Nous convenons d’un objectif de vues de 200k ou 300k à l’avance. Si vous atteignez l’objectif, vous êtes payé. Le code d’affiliation à 20 % reste actif tout du long. Après le premier mois : continuer, augmenter le tarif par vue payée, ou arrêter.",
    submittedBody: "Nous vous écrirons si nous le retenons. Ne publiez aucun lien Cove tant que vous n’avez pas de code.",
    form: {
      applyHeading: "Postuler",
      applyIntro: "Nous examinerons ceci à la main. Ne publiez aucun lien Cove tant que vous n’avez pas de code.",
      name: "Nom",
      email: "E-mail",
      handle: "Identifiant Instagram ou TikTok",
      inCycle: "Actuellement en cycle de FIV ?",
      yes: "Oui",
      no: "Non",
      creator: "Créateur ?",
      expectedPlatform: "Plateforme prévue",
      expectedPlatformPlaceholder: "Instagram, TikTok, ou les deux",
      viewTarget: "Objectif de vues",
      noViewTarget: "aucun objectif de vues",
      anythingElse: "Autre chose",
      sending: "Envoi…",
      apply: "Postuler",
      errorGeneric: "Envoi impossible. Veuillez réessayer.",
    },
  },

  blog: {
    eyebrow: "Cove IVF",
    heading: "Blog",
    intro: "Notes sur les cycles de FIV, le suivi des médicaments et un parcours de traitement plus serein.",
    empty: "Rien de publié pour l’instant — revenez bientôt.",
  },

  legalNotice:
    "Ceci est une traduction fournie pour votre commodité. En cas de divergence, la version anglaise de cette page prévaut.",

  privacy: {
    eyebrow: "Mentions légales",
    title: "Politique de confidentialité",
    lastUpdated: "Dernière mise à jour : 26 septembre 2026",
    doc: [
      { type: "h2", text: "La version courte" },
      {
        type: "p",
        text: [
          "Cove vous aide à organiser un cycle de FIV. Vos données de traitement restent privées, chiffrées, jamais vendues, jamais partagées pour la publicité. Vous pouvez les supprimer — y compris les PDF de labo importés — depuis les Réglages de l’appli. Cove utilise un outil de mesure (AppsFlyer) qui collecte des données d’appareil et de campagne pour comprendre quelle publicité vous a amenée à l’appli. Il ne reçoit ni vos médicaments, ni vos analyses, ni votre journal. Cette politique explique ce que nous collectons, pourquoi, et les choix dont vous disposez.",
        ],
      },
      { type: "h2", text: "Qui nous sommes" },
      {
        type: "p",
        text: [
          "Cove IVF (« Cove », « nous ») fournit une appli iOS (et, si disponible, Android) et ce site. Questions de confidentialité : ",
          { link: "coveivf@gmail.com", href: "mailto:coveivf@gmail.com" },
          ".",
        ],
      },
      { type: "h2", text: "Ce que nous collectons" },
      { type: "h3", text: "Informations de compte" },
      {
        type: "p",
        text: [
          "Vous pouvez créer un compte avec Se connecter avec Apple, la connexion Google ou l’e-mail. Selon la méthode, nous recevons un identifiant et, si vous choisissez de le partager, un nom et une adresse e-mail. Se connecter avec Apple vous permet de masquer votre e-mail. La connexion Google est fournie par Google ; la politique de confidentialité de Google s’applique à sa gestion de cette connexion.",
        ],
      },
      { type: "h3", text: "Informations de santé et de cycle que vous saisissez" },
      {
        type: "p",
        text: [
          "Plannings de médicaments, doses et heures, rendez-vous, points de journal, hydratation, dépenses, sites d’injection, valeurs de monitorage et autres éléments que vous choisissez de noter. C’est vous qui les fournissez. Nous les stockons pour que l’appli puisse vous les réafficher et vous les rappeler.",
        ],
      },
      { type: "h3", text: "Photos de protocole, voix et PDF de bilans sanguins" },
      {
        type: "ul",
        items: [
          [
            { b: "Photos d’une feuille de clinique :" },
            " envoyées à notre service de traitement (Anthropic) uniquement pour proposer des cartes de médicaments ou de rendez-vous. Nous vous demandons de vérifier chaque valeur avant tout enregistrement. Nous ne conservons pas l’image après traitement et n’utilisons pas vos images pour entraîner un modèle.",
          ],
          [
            { b: "Voix :" },
            " si vous ajoutez un médicament, un rendez-vous ou une analyse en parlant, l’enregistrement est envoyé à notre service de traitement pour proposer des cartes à réviser. Nous ne conservons pas l’audio après traitement. Ce que nous pouvons conserver, c’est la proposition structurée que vous enregistrez (par exemple un nom de médicament et une heure).",
          ],
          [
            { b: "PDF de bilans sanguins :" },
            " si vous importez un compte rendu de labo, nous stockons ce PDF dans un dossier privé lié à votre compte pour que vous le gardiez avec les résultats extraits. Le fichier est traité (Anthropic) pour proposer des valeurs à réviser. Le PDF demeure jusqu’à ce que vous supprimiez ce compte rendu ou votre compte. La suppression du compte retire les lignes de base de données et les fichiers PDF stockés.",
          ],
        ],
      },
      { type: "h3", text: "Mode Partenaire, si disponible" },
      {
        type: "p",
        text: [
          "Le mode Partenaire est un partage facultatif avec une personne que vous invitez et confirmez. Nous stockons votre nom d’affichage, le consentement, la connexion, les choix de partage, les tâches pratiques, les messages de soutien prédéfinis et les préférences de notification. Votre soutien ne voit que l’étape de traitement et les rendez-vous que vous sélectionnez, plus les demandes de soutien et tâches que vous choisissez de partager. Les intitulés de rendez-vous peuvent contenir des informations sensibles ; vérifiez-les avant de partager. Les journaux, notes de visite, résultats d’analyses, documents et dossiers de médicaments ne sont pas partagés.",
        ],
      },
      {
        type: "p",
        text: [
          "Vous pouvez mettre le partage en pause, ou l’une des personnes peut mettre fin à la connexion. Le nouvel accès et les notifications s’arrêtent quand le partage est en pause, que le cycle sélectionné est inactif ou que l’abonnement de la personne qui partage expire. Les contrôles de confidentialité restent disponibles. Le contenu partagé n’est pas stocké de façon permanente par Cove sur l’appareil du soutien, mais les captures d’écran ne peuvent pas être rappelées. Les enregistrements de connexion et de soutien restent sur nos serveurs jusqu’à la suppression de l’un des comptes associés. Les notifications push utilisent un texte générique sans détails de traitement.",
        ],
      },
      { type: "h3", text: "Cycle Pal, si disponible" },
      {
        type: "p",
        text: [
          "Cycle Pal est facultatif. Nous stockons le nom d’affichage, la présentation et la langue de conversation que vous choisissez, votre consentement, les connexions, les messages, les blocages et les signalements. Votre compagne suggérée voit votre profil Cycle Pal ; la messagerie ne s’ouvre que si vous acceptez toutes les deux. Vos dossiers de médicaments, d’analyses, de journal et autres dossiers de traitement ne sont pas partagés automatiquement.",
        ],
      },
      {
        type: "p",
        text: [
          "Les messages sont stockés sur les serveurs de Cove et ne sont pas chiffrés de bout en bout. Des règles textuelles automatiques peuvent rejeter certains contenus. Une revue humaine a lieu après un signalement ; des relecteurs Cove autorisés peuvent inspecter la conversation signalée et suspendre un compte abusif. Les notifications de signalement envoyées via Telegram contiennent un identifiant de signalement, pas le texte de votre message, le motif, votre nom ou vos dossiers de traitement.",
        ],
      },
      {
        type: "p",
        text: [
          "Mettre fin à une connexion ou la bloquer arrête la messagerie mais n’efface pas la conversation stockée. Supprimer le compte de l’une des participantes retire de Cove la conversation et les signalements associés. Nous ne pouvons pas retirer les captures d’écran ou copies qu’une autre participante a enregistrées elle-même. Ne partagez pas d’informations que vous ne voulez pas que votre compagne connaisse.",
        ],
      },
      { type: "h3", text: "Informations collectées automatiquement" },
      {
        type: "ul",
        items: [
          [
            { b: "PostHog (analytique) :" },
            " nous utilisons PostHog pour comprendre si les écrans se chargent et si l’intégration a été terminée. Il est configuré pour ne pas collecter les noms de médicaments, les doses, les valeurs de labo ou votre e-mail. Dans l’analytique, nous vous identifions uniquement par un identifiant de compte opaque, pas par votre nom.",
          ],
          [
            { b: "AppsFlyer (mesure publicitaire) :" },
            " Cove utilise un outil de mesure (AppsFlyer), un partenaire de mesure mobile, pour comprendre quelle publicité vous a amenée à l’appli. Nous n’affichons aucune publicité dans Cove. Il peut collecter des identifiants d’appareil (dont l’IDFA d’Apple uniquement si vous autorisez le suivi, l’IDFV d’Apple et, sur Android, un identifiant publicitaire), des données de campagne et d’attribution (quelle publicité, quel lien, code créateur ou campagne App Store a mené à une installation) et des événements de conversion in-app qui ne sont pas des données de santé — par exemple terminer l’inscription, voir une page d’abonnement, démarrer un essai ou s’abonner. Sur iOS, il s’agit d’un « suivi » au sens des règles App Tracking Transparency (ATT) d’Apple. Vous verrez l’invite d’Apple et pourrez toucher Demander à l’app de ne pas suivre. Vous pouvez aussi changer cela plus tard dans Réglages iOS → Confidentialité et sécurité → Suivi. Si vous refusez, nous n’utilisons pas l’IDFA. Une mesure d’installation limitée d’Apple (SKAdNetwork) et des événements de conversion sans IDFA peuvent tout de même s’exécuter. PostHog (analytique produit) n’est pas soumis à cette invite. Vos données de traitement restent privées. AppsFlyer ne reçoit ni vos médicaments, ni vos analyses, ni votre journal. Les données de santé et de traitement ne sont partagées ni avec AppsFlyer ni avec aucun partenaire publicitaire.",
          ],
          [
            { b: "Apple Search Ads / attribution App Store :" },
            " sur iOS, nous pouvons collecter le jeton d’attribution d’Apple pour savoir qu’une campagne App Store a mené à un téléchargement. Ceci ne sert pas à cibler des publicités dans Cove.",
          ],
          [
            { b: "Données techniques :" },
            " type d’appareil, version de l’appli et messages de plantage ou d’erreur nécessaires pour exploiter et sécuriser le service. Les jetons push sont stockés pour envoyer des rappels et des messages produit occasionnels que vous attendez déjà (par exemple une offre limitée dans le temps après un essai annulé).",
          ],
        ],
      },
      { type: "h2", text: "Ce que nous ne faisons PAS" },
      {
        type: "ul",
        items: [
          ["Nous ne vendons pas vos informations personnelles ou de santé."],
          ["Nous ne partageons pas vos informations de santé avec des annonceurs, des courtiers en données ou des plateformes sociales pour leur publicité."],
          ["Nous n’affichons pas de publicité tierce dans l’appli."],
          ["Nous n’utilisons pas vos informations de santé pour cibler des publicités."],
        ],
      },
      { type: "h2", text: "Comment nous utilisons vos informations" },
      {
        type: "ul",
        items: [
          ["Pour fournir l’appli : construire votre planning, envoyer des rappels, stocker et afficher ce que vous notez."],
          ["Pour exécuter les fonctions de capture (photo, voix, PDF de bilan) et vous montrer des propositions à réviser."],
          ["Pour traiter les abonnements via Apple (et Google Play si disponible) et RevenueCat."],
          ["Pour exploiter, sécuriser et améliorer le service, y compris via un outil de mesure (AppsFlyer) pour comprendre quelle publicité vous a amenée à l’appli."],
          ["Pour vous contacter au sujet du produit (par exemple une mise à jour, une réponse d’assistance ou une offre de courte durée après une page d’abonnement ou un essai annulé). Vous pouvez vous désabonner des e-mails non essentiels dans l’appli là où ce contrôle existe."],
        ],
      },
      { type: "h2", text: "Comment vos informations sont stockées et protégées" },
      {
        type: "p",
        text: [
          "Les données de compte et de santé sont stockées chez notre fournisseur cloud, Supabase, chiffrées en transit et au repos. Les PDF de bilans sanguins se trouvent dans un espace de stockage privé que seul votre compte connecté peut lire. L’accès est restreint pour que vos données soient disponibles pour votre compte, pas pour d’autres utilisateurs. Aucune méthode de stockage n’est parfaitement sûre, mais nous concevons le produit pour garder vos informations privées et sous votre contrôle.",
        ],
      },
      { type: "h2", text: "Vos choix et vos droits" },
      {
        type: "ul",
        items: [
          [
            { b: "Tout supprimer :" },
            " Réglages → Supprimer le compte. Nous supprimons définitivement votre compte, vos données de cycle et les PDF de bilans stockés. La suppression est irréversible. Apple ou Google peuvent conserver une trace de l’abonnement lui-même selon leurs règles.",
          ],
          [{ b: "Accès et rectification :" }, " vous pouvez voir et modifier vos informations dans l’appli."],
          [{ b: "Communications :" }, " vous pouvez vous désabonner des e-mails non essentiels."],
          [
            { b: "Confidentialité de l’écran verrouillé :" },
            " vous pouvez masquer les noms des médicaments dans les rappels de l’écran verrouillé, dans Réglages → Notifications.",
          ],
          [
            { b: "Suivi des apps (iOS) :" },
            " Cove peut demander l’autorisation de suivi afin qu’AppsFlyer puisse utiliser un identifiant d’appareil (IDFA) pour comprendre quelle publicité vous a amenée à l’appli. Il ne sert ni aux soins ni aux rappels. Vous pouvez refuser l’invite ou désactiver le suivi plus tard dans Réglages iOS → Confidentialité et sécurité → Suivi. Refuser ne supprime ni votre compte ni vos données de cycle.",
          ],
        ],
      },
      {
        type: "p",
        text: [
          "Selon votre lieu de résidence, vous pouvez avoir des droits supplémentaires (par exemple au titre du droit californien ou européen) d’accéder à vos informations, de les supprimer ou d’en restreindre l’usage. Contactez ",
          { link: "coveivf@gmail.com", href: "mailto:coveivf@gmail.com" },
          ".",
        ],
      },
      { type: "h2", text: "Conservation des données" },
      {
        type: "p",
        text: [
          "Nous conservons vos informations tant que votre compte est actif. Lorsque vous supprimez votre compte, nous supprimons les données de santé associées et les fichiers PDF de bilans sanguins. Les photos de feuille de protocole et les enregistrements vocaux ne sont pas conservés après traitement. De courts journaux structurés d’une session de capture (par exemple qu’une photo a produit trois cartes proposées) peuvent exister jusqu’à la suppression du compte. Les enregistrements d’abonnement détenus par Apple, Google ou RevenueCat suivent leurs règles de conservation, pas les nôtres.",
        ],
      },
      { type: "h2", text: "Partage avec des prestataires de services" },
      {
        type: "p",
        text: [
          "Nous faisons appel à un petit nombre d’entreprises pour faire fonctionner Cove. Elles ne peuvent traiter les informations que pour nous fournir leur service :",
        ],
      },
      {
        type: "ul",
        items: [
          ["Supabase — hébergement, base de données, authentification et stockage de fichiers"],
          ["Apple et, si disponible, Google — connexion et facturation via les stores"],
          ["RevenueCat — statut d’abonnement"],
          ["Anthropic — lecture des photos de protocole, propositions vocales et PDF de bilans en cartes que vous révisez"],
          ["PostHog — analytique produit (aucun contenu de santé)"],
          ["AppsFlyer — outil de mesure pour la publicité : identifiants d’appareil, données de campagne/attribution et événements de conversion non liés à la santé. Il ne reçoit ni vos médicaments, ni vos analyses, ni votre journal."],
          ["Expo — envoi des notifications push"],
          ["Resend — envoi des e-mails d’assistance et, quand activé, des e-mails produit transactionnels"],
        ],
      },
      { type: "p", text: ["Nous ne vendons ni ne louons vos informations à qui que ce soit."] },
      { type: "h2", text: "Enfants" },
      {
        type: "p",
        text: [
          "Cove est destiné aux adultes suivant un traitement de fertilité et n’est pas destiné aux enfants de moins de 16 ans. Nous ne collectons pas sciemment d’informations auprès d’enfants.",
        ],
      },
      { type: "h2", text: "Modifications de cette politique" },
      {
        type: "p",
        text: ["Si nous modifions cette politique, nous mettrons à jour la date ci-dessus et, pour les changements importants, nous vous en informerons."],
      },
      { type: "h2", text: "Contact" },
      {
        type: "p",
        text: [
          "Questions sur la confidentialité : ",
          { link: "coveivf@gmail.com", href: "mailto:coveivf@gmail.com" },
          ".",
        ],
      },
    ] as LegalDoc,
  },

  terms: {
    eyebrow: "Mentions légales",
    title: "Conditions d’utilisation",
    lastUpdated: "Dernière mise à jour : 26 septembre 2026",
    doc: [
      { type: "h2", text: "1. Accord" },
      {
        type: "p",
        text: [
          "Ces Conditions régissent votre utilisation de l’appli et du site Cove IVF (« Cove », « nous »). En utilisant Cove, vous acceptez ces Conditions. Si vous n’êtes pas d’accord, n’utilisez pas Cove.",
        ],
      },
      { type: "h2", text: "2. Ce qu’est Cove — et ce qu’il n’est pas (à lire)" },
      {
        type: "p",
        text: [
          { b: "Cove est un outil d’organisation, pas un dispositif médical." },
          " Il ne fournit ni conseil médical, ni diagnostic, ni traitement. Suivez toujours les instructions de votre clinique.",
        ],
      },
      {
        type: "p",
        text: [
          "Cove vous aide à organiser des informations que vous saisissez ou qui sont lues depuis les documents de votre clinique — plannings de médicaments, rappels, rendez-vous et résultats que vous choisissez de noter ou d’importer. Cove ne fait pas :",
        ],
      },
      {
        type: "ul",
        items: [
          ["recommander, prescrire, ajuster ou vérifier un médicament, une dose ou un horaire ;"],
          ["diagnostiquer une affection, interpréter des tendances de labo ou prédire une issue ;"],
          ["remplacer votre médecin, votre clinique, votre infirmière ou votre pharmacien."],
        ],
      },
      {
        type: "p",
        text: [
          "Votre clinique fait toujours foi. Si quelque chose dans Cove diffère de ses instructions, suivez votre clinique et contactez-la. Ne vous fiez à Cove pour aucune décision médicale. En cas d’urgence, contactez votre clinique ou les services d’urgence.",
        ],
      },
      { type: "h2", text: "Mode Partenaire, si disponible" },
      {
        type: "p",
        text: [
          "Le mode Partenaire est un soutien facultatif entre adultes qui se connaissent et se confirment. N’invitez qu’une personne de confiance et vérifiez ce que vous partagez. La personne qui partage a besoin d’un abonnement Cove actif ; son soutien utilise un compte gratuit distinct. Le nouvel accès partagé et les rappels s’arrêtent si cet abonnement expire ou si le partage est mis en pause. Chacune peut mettre fin à la connexion. Terminer une tâche de soutien n’enregistre jamais un médicament comme pris. Les messages de soutien et les rappels ne sont ni un conseil médical ni des services d’urgence, et la livraison des notifications n’est pas garantie.",
        ],
      },
      { type: "h2", text: "Règles de la communauté Cycle Pal, si disponible" },
      {
        type: "p",
        text: [
          "Cycle Pal est un soutien entre pairs facultatif pour les adultes de 18 ans ou plus. Les deux personnes doivent accepter une connexion suggérée avant tout message. Ce n’est ni un conseil médical ni un soutien d’urgence. Ne harcelez pas, ne menacez pas, n’escroquez pas, n’usurpez pas l’identité d’autrui, ne partagez pas de contenu sexuel, ne sollicitez pas d’argent et ne dites à personne de changer son traitement.",
        ],
      },
      {
        type: "p",
        text: [
          "Vous pouvez mettre fin à une connexion ou la bloquer et signaler un problème, même après la fin d’une conversation. Un signalement bloque cette connexion. Cove peut examiner la conversation signalée, masquer les messages abusifs et suspendre un compte. Les messages ne sont pas approuvés manuellement avant l’envoi. Les filtres automatiques peuvent manquer un abus ou rejeter des messages légitimes ; contactez coveivf@gmail.com pour de l’aide. Ne partagez que ce que vous êtes à l’aise de divulguer.",
        ],
      },
      { type: "h2", text: "3. Fonctions de capture et exactitude" },
      {
        type: "p",
        text: [
          "Cove peut lire une photo de votre feuille de protocole, une description vocale ou un PDF de bilan sanguin pour vous aider à créer des cartes dans l’appli. Cette lecture peut contenir des erreurs. Il vous incombe de vérifier chaque valeur avec vos propres documents de clinique avant de vous y fier, c’est pourquoi Cove vous demande de réviser les propositions avant leur enregistrement. Cove n’est pas responsable des erreurs de lecture. Confirmer une valeur dans Cove ne la rend pas médicalement correcte — seule votre clinique le peut.",
        ],
      },
      { type: "h2", text: "4. Rappels" },
      {
        type: "p",
        text: [
          "Cove peut envoyer des rappels, y compris pour des médicaments sensibles au temps. Les rappels peuvent échouer pour des raisons hors de notre contrôle (réglages de l’appareil, modes Concentration, autorisations de notifications, problèmes logiciels, connectivité). Ne comptez pas sur Cove comme seul rappel pour un médicament critique, y compris une piqûre de déclenchement ; prévoyez une sauvegarde indépendante (comme une alarme de téléphone). Cove n’est pas responsable d’un médicament manqué ou mal chronométré.",
        ],
      },
      { type: "h2", text: "5. Votre compte" },
      {
        type: "p",
        text: [
          "Vous êtes responsable de votre compte et de l’exactitude de ce que vous saisissez. N’utilisez Cove que pour son usage personnel prévu et dans le respect de la loi. Vous pouvez vous connecter avec Apple, Google ou l’e-mail.",
        ],
      },
      { type: "h2", text: "6. Achats" },
      {
        type: "p",
        text: [
          "Cove est vendu comme un abonnement à renouvellement automatique via l’App Store d’Apple (et, si disponible, Google Play). La facturation est traitée par Apple ou Google, le statut d’abonnement étant suivi par RevenueCat. L’appli indique le prix, la durée et ce qui est inclus au moment de l’achat. L’offre par défaut inclut un court essai gratuit (actuellement trois jours), sauf si une autre offre vous est présentée. Les achats sont soumis aux conditions d’Apple ou de Google ; les remboursements sont gérés par eux selon leurs politiques. Gérez ou annulez dans les réglages de l’appareil (Apple : Réglages → votre nom → Abonnements).",
        ],
      },
      { type: "h2", text: "7. Votre contenu" },
      {
        type: "p",
        text: [
          "Les informations que vous saisissez ou importez (y compris les PDF de bilans sanguins) vous appartiennent. Vous nous accordez seulement l’autorisation limitée nécessaire pour exploiter le service pour vous (les stocker, les traiter, vous les réafficher, envoyer vos rappels). Nous ne les vendons pas et ne les utilisons pas pour vous faire de la publicité. Voir notre ",
          { link: "Politique de confidentialité", to: "/privacy" },
          ".",
        ],
      },
      { type: "h2", text: "8. Usage acceptable" },
      {
        type: "p",
        text: [
          "N’abusez pas de Cove : pas d’usage illégal, pas de tentatives de casser, surcharger, faire de l’ingénierie inverse ou d’accéder sans autorisation au service, et pas d’usage pour le compte d’autrui sans son consentement.",
        ],
      },
      { type: "h2", text: "9. Disponibilité" },
      {
        type: "p",
        text: [
          "Nous visons à maintenir Cove fonctionnel mais ne garantissons pas qu’il sera toujours disponible, ininterrompu ou sans erreur. Nous pouvons modifier, suspendre ou interrompre des fonctionnalités.",
        ],
      },
      { type: "h2", text: "10. Exclusions de garantie" },
      {
        type: "p",
        text: [
          "Dans toute la mesure permise par la loi, Cove est fourni « tel quel » et « selon disponibilité », sans garantie d’aucune sorte, expresse ou implicite, y compris d’adéquation à un usage particulier. Nous ne garantissons pas que Cove sera exact, fiable ou sans erreur, ni que les rappels seront toujours délivrés.",
        ],
      },
      { type: "h2", text: "11. Limitation de responsabilité" },
      {
        type: "p",
        text: [
          "Dans toute la mesure permise par la loi, Cove et son équipe ne seront pas responsables des dommages indirects, accessoires, spéciaux ou consécutifs, ni d’une issue médicale, d’un médicament manqué ou mal chronométré, ou d’une décision prise en se fiant à Cove.",
        ],
      },
      { type: "h2", text: "12. Modifications de ces Conditions" },
      {
        type: "p",
        text: [
          "Nous pouvons mettre à jour ces Conditions ; nous mettrons à jour la date ci-dessus et, pour les changements importants, nous vous en informerons. Une utilisation continue vaut acceptation des Conditions mises à jour.",
        ],
      },
      { type: "h2", text: "13. Droit applicable / litiges" },
      {
        type: "p",
        text: [
          "En cas de litige, écrivez-nous d’abord à ",
          { link: "coveivf@gmail.com", href: "mailto:coveivf@gmail.com" },
          ". Les lois impératives de protection des consommateurs de votre pays de résidence continuent de s’appliquer là où il ne peut y être renoncé. Sous réserve de ces lois, ces Conditions sont régies par le droit de la République arabe d’Égypte.",
        ],
      },
      { type: "h2", text: "14. Contact" },
      {
        type: "p",
        text: [
          "Questions sur ces Conditions : ",
          { link: "coveivf@gmail.com", href: "mailto:coveivf@gmail.com" },
          ".",
        ],
      },
    ] as LegalDoc,
  },
};
