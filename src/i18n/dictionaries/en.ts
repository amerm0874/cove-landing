import type { LegalDoc } from "../types";

/**
 * English dictionary — the source of truth for the dictionary SHAPE.
 * `type Dictionary = typeof en` (see ../index.ts); every other locale is typed
 * `: Dictionary`, so TypeScript enforces the same keys everywhere.
 *
 * Ordered arrays (situations, faq items, feature items) are zipped with icon /
 * layout data in code by index — keep the same order and length across locales.
 */
export const en = {
  common: {
    brand: "Cove",
    downloadOnAppStore: "Download on the App Store",
    downloadOnThe: "Download on the",
    appStore: "App Store",
    googlePlayAlt: "Get it on Google Play",
    download: "Download",
    availableNow: "Available now on iPhone & Android · Free to start",
    availableNowPlain: "Available now on iPhone and Android. Free to start.",
    freeToStart: "Free to start",
    encryptedNote: "Encrypted in transit and at rest. Treatment details are never sold or used for ads.",
    followAlong: "Follow along",
  },

  nav: {
    home: "Home",
    breadcrumb: "Breadcrumb",
    features: "Features",
    howItWorks: "How it works",
    timeline: "Timeline",
    privacy: "Privacy",
    blog: "Blog",
    faq: "FAQ",
    support: "Support",
    terms: "Terms",
    deleteAccount: "Delete Account",
    affiliate: "Affiliate",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    primary: "Primary",
    mobile: "Mobile",
  },

  footer: {
    disclaimer:
      "Cove IVF is an organizational tool, not a medical device. It does not provide medical advice, diagnosis, or treatment. Always follow your clinic's instructions.",
    copyright: "© 2026 Cove IVF",
    tagline: "A calm harbor for your cycle.",
  },

  languageSwitcher: {
    label: "Language",
    choose: "Choose language",
  },

  social: {
    instagram: "Cove on Instagram",
    tiktok: "Cove on TikTok",
    email: "Email Cove",
  },

  meta: {
    home: {
      title: "Cove IVF Tracker — Medication & Cycle App for iOS & Android",
      description:
        "The calm IVF tracker for your whole cycle. Photograph your protocol for exact medication lineups, dose changes and discreet reminders. iPhone and Android.",
    },
    features: {
      title: "Features — Cove IVF Tracker",
      description:
        "Every Cove feature: protocol scanner, tonight's medication lineup, trigger shot alarm, appointments, monitoring, embryos and journal. iPhone and Android.",
      ogDescription:
        "Photograph your protocol, keep tonight's lineup, protect the trigger shot, and hold the rest of the cycle in one encrypted place.",
    },
    faq: {
      title: "FAQ — Cove IVF Tracker",
      description:
        "Answers about what Cove is, how it tracks IVF medications and injections, pricing, Android availability, privacy, and how it differs from fertility apps.",
    },
    support: {
      title: "Support — Cove IVF",
      description: "Get help with Cove IVF. Contact support, FAQs, and account controls.",
      ogDescription: "Questions, feedback, or trouble with the app? We read every message.",
    },
    deleteAccount: {
      title: "Delete Your Cove Account — Cove IVF",
      description:
        "How to permanently delete your Cove IVF account and all associated data from the app or by emailing support.",
      ogDescription: "Permanently delete your Cove IVF account and all associated data at any time.",
    },
    affiliate: {
      title: "Cove Affiliate — Cove IVF",
      description:
        "Cove affiliate program: 20% of paid Cove Pro from your code. Codes are issued manually. Apply by email.",
      ogDescription: "20% of paid Cove Pro from your code. Codes are issued by email after review.",
    },
    privacy: {
      title: "Privacy Policy — Cove IVF",
      description: "How Cove IVF collects, uses, and protects your information.",
      ogDescription: "Plain-language privacy policy for the Cove IVF app and website.",
    },
    terms: {
      title: "Terms of Service — Cove IVF",
      description: "The terms that govern your use of the Cove IVF app and website.",
      ogDescription: "Cove IVF is an organizational tool, not a medical device. Read the terms.",
    },
    blog: {
      title: "Blog — Cove IVF",
      description: "Notes on IVF cycles, medication tracking, and building a calmer treatment process.",
    },
  },

  home: {
    hero: {
      eyebrow: "IVF Tracker · iPhone & Android",
      heading: "The calm IVF tracker for your whole cycle.",
      body: "Keep your medication schedule, appointments and cycle notes together. Photograph your clinic sheet, review the draft, and confirm the details before saving.",
      badge: "iPhone & Android · designed for IVF cycles",
      todayAlt:
        "Cove IVF tracker Today screen showing an evening medication lineup, progress ring, and next dose",
    },
    trust: [
      "Built with IVF patients.",
      "Designed around real clinic protocols.",
      "Encrypted in transit and at rest.",
    ],
    allFeatures: {
      heading: "Every feature, listed.",
      body: "Scanner, trigger alarm, calendar, records, journal, Add with AI, and the rest.",
      cta: "See all features",
    },
    privacy: {
      heading: "Privacy, specifically.",
      intro: "Privacy isn't a feature we bolt on — it's how we're building Cove from day one.",
      items: [
        { title: "Built to be encrypted", body: "Your data is encrypted in transit and at rest." },
        {
          title: "Never sold for advertising",
          body: "Your treatment details are never sold, and never shared for advertising.",
        },
        {
          title: "No ads inside Cove",
          body: "Cove has no in-app ads. AppsFlyer measures device and campaign activity; it does not receive your medications, lab results or journal. See our privacy policy for your choices.",
        },
        { title: "You'll stay in control", body: "You can delete your data permanently, anytime, in one tap." },
        {
          title: "Discreet by design",
          body: "You can hide medication names on lock-screen reminders in Settings → Notifications. Detailed reminders are enabled by default.",
        },
      ],
    },
    faqHeading: "Questions",
    faq: [
      {
        q: "Is this medical advice?",
        a: "No. Cove is an organizer. It never suggests, adjusts, or interprets doses, and never predicts outcomes. Your clinic decides everything medical.",
      },
      {
        q: "What happens to my scan?",
        a: "It's processed to read your schedule, then discarded. Your schedule is stored encrypted, in transit and at rest.",
      },
      { q: "What platforms is Cove on?", a: "Cove is available now on iPhone and Android." },
    ],
    downloadCta: {
      heading: "A calm harbor for your cycle is ready.",
    },
  },

  chapters: {
    life: {
      heading: "IVF is hard enough. Keeping track of everything shouldn't be.",
      body: "A cycle isn't a routine. It's a stack of specific, moving details — and they all matter.",
      situations: [
        "Your clinic changed today's dose.",
        "Three medications tonight.",
        "Monitoring at 7:30 AM.",
        "Trigger shot at exactly 8:00 PM.",
        "Which medication was mixed first?",
        "Waiting for tomorrow's fertilization report.",
      ],
      // Snippet labels that carry meaning (dose values / drug names stay as-is).
      snippetMonitoring: "Bloodwork · ultrasound",
      snippetTrigger: "T-minus 36h to retrieval",
      snippetPending: "Day 1 · pending",
    },
    chapterLabel: "Chapter",
    medication: {
      eyebrow: "IVF medication plan",
      headline: "Know exactly what your IVF medication plan requires tonight.",
      body: "Your evening lineup, in order, with a quiet check before you start mixing. The whole plan, held together — not scattered across a PDF, a portal, and a text thread.",
      alt: "Cove IVF medication tracker showing injection history with site, dose, and time for each medication",
    },
    scanner: {
      eyebrow: "IVF protocol scanner",
      headline: "Photograph your clinic sheet, then review the draft.",
      body: "Cove reads a protocol photo into draft entries. Compare each medication, dose, unit, date and time with your clinic’s instructions, correct any mistakes, and confirm before saving. The scanner does not prescribe or verify a treatment.",
      alt: "Cove protocol scanner screen prompting to photograph a clinic medication sheet",
    },
    verification: {
      eyebrow: "Dose verification",
      headline: "When your clinic changes the plan, update your schedule.",
      body: "Update the value once — after you confirm it against your clinic sheet. As your IVF meds tracker, Cove replaces it on tonight's card, tomorrow's reminder, and the log.",
      alt: "Cove dose verification screen asking you to check each scanned medication against your clinic sheet",
    },
    trigger: {
      eyebrow: "Trigger shot reminder",
      headline: "A countdown for your trigger shot.",
      body: "See the countdown and confirm when you have taken the shot. Delivery depends on notification permissions and device settings; always set a separate backup alarm. You can hide medication names in Settings → Notifications.",
      alt: "Cove trigger shot reminder screen with countdown and an I've taken it confirmation button",
    },
    timeline: {
      eyebrow: "IVF cycle timeline",
      headline: "Always know where you are in your IVF cycle.",
      body: "A quiet view of your treatment stage — from priming through recovery. Choose the stage that fits today, and Cove carries the rest of the plan with you.",
      alt: "Cove IVF cycle timeline showing treatment stages from priming to recovery, with the current stage highlighted",
    },
    withoutWith: {
      eyebrow: "The difference",
      heading: "A cycle carried in ten places — or one.",
      withoutLabel: "Without Cove",
      withoutTitle: "Scattered. Uneasy.",
      withLabel: "With Cove",
      withTitle: "Calm. Single. Ordered.",
      messy: [
        "Excel spreadsheet of doses",
        "Notion page of notes",
        "PDF protocol from the clinic",
        "Clinic portal login",
        "Calendar alerts",
        "Phone alarms labeled 'meds'",
        "WhatsApp thread with the nurse",
        "Screenshot of the protocol sheet",
        '"What was today\'s dose?"',
      ],
      calm: [
        "One verified treatment plan",
        "One medication schedule",
        "One appointment timeline",
        "One place for dose changes",
        "One place for results",
        "One calm companion",
      ],
    },
    community: {
      eyebrow: "From App Store reviewers",
      heading: "Less to keep in your head.",
      voices: ["Describes less organisational burden from keeping tracking tasks together.","Values keeping medication, appointments and cycle expenses in one app."],
      closing: "IVF is already overwhelming. Keeping it organized shouldn't be.",
      note: "Summaries of two public Australian App Store reviews, checked 12 October 2026. Individual experiences, not clinical evidence. Read the originals below.",
    },
  },

  features: {
    hero: {
      eyebrow: "Cove IVF",
      heading: "Everything Cove does for a cycle.",
      body: "Photograph the protocol, keep tonight's lineup, protect the trigger shot, and hold the rest in one encrypted place.",
      howItWorks: "How it works",
    },
    jumpNavLabel: "Feature groups",
    spotlight: {
      heading: "The three things people open Cove for.",
      items: [
        {
          title: "Scan the sheet",
          body: "One photo of the clinic protocol becomes a plan you can actually read.",
          alt: "Cove protocol scanner prompting you to photograph a clinic medication sheet",
        },
        {
          title: "Tonight's lineup",
          body: "Each medication, dose, and time on one card. Mark it done when you've taken it.",
          alt: "Cove Today screen showing an evening medication lineup",
        },
        {
          title: "Trigger shot",
          body: "A countdown and an alarm you confirm. Discreet on the lock screen.",
          alt: "Cove trigger shot reminder with countdown and confirmation",
        },
      ],
    },
    downloadHeading: "A calm harbor for your cycle is ready.",
    questionsPrefix: "Questions?",
    questionsLink: "Read the FAQ",
    // Category text — item arrays are zipped by index with icons in src/lib/features.ts.
    categories: {
      medications: {
        label: "Medications",
        headline: "Tonight's plan, held in one place.",
        intro:
          "Your clinic sheet is the source of truth. Cove turns it into a lineup you can check, mark done, and update when the dose changes.",
        items: [
          {
            title: "Protocol scanner",
            body: "Photograph your clinic's medication sheet. Cove reads the drugs, doses, and times, then waits for you to confirm every value.",
          },
          {
            title: "Dose verification",
            body: "Nothing is scheduled until you check it against your own sheet. Edit any value by hand, or retake the photo.",
          },
          {
            title: "Tonight's lineup",
            body: "Exactly what to take, in what dose, at what time. Mark each one done. Tomorrow morning stays visible without crowding tonight.",
          },
          {
            title: "Dose reminders",
            body: "A reminder fires at the time you set. Missed doses stay on Today until you mark them taken. They are never quietly dropped.",
          },
          {
            title: "Mid-cycle changes",
            body: "When monitoring changes one number, update it once. Tonight's card, later reminders, and your log all follow.",
          },
          {
            title: "Manual entry",
            body: "Prefer to type? Add a medication yourself: name, dose, unit, start, stop, and times of day.",
          },
          {
            title: "Injection sites",
            body: "When you mark a shot taken, tap where you injected. Recent sites stay on the diagram so the next spot isn't a guess.",
          },
          {
            title: "Medication inventory",
            body: "Optional stock on each med line: how much you have left, and how many nights that covers.",
          },
        ],
      },
      trigger: {
        label: "Trigger & alerts",
        headline: "The shot that cannot be a maybe.",
        intro:
          "Keep the time your clinic gave you visible. Notifications depend on your phone settings and permissions; use an independent backup alarm.",
        items: [
          {
            title: "Trigger shot alarm",
            body: "A countdown and reminders for your scheduled trigger shot. Android can show a full-screen alarm where permitted; iOS uses notifications and does not bypass silent mode. Set a separate backup alarm.",
          },
          {
            title: "Stays on if you pause",
            body: "Pausing a cycle stops routine dose reminders. The trigger reminder in Cove stays scheduled. Set a backup phone alarm too.",
          },
          {
            title: "Discreet notifications",
            body: "Reminders can hide medication names on your lock screen. Turn that on in Settings, so a glance doesn't announce your cycle.",
          },
          {
            title: "Coming up inbox",
            body: "Doses and visits in one list, so you can see what's next without opening each screen.",
          },
          {
            title: "Appointment reminders",
            body: "Choose how far ahead Cove should nudge you before a visit. The clinic and the hour stay on the card.",
          },
        ],
      },
      cycle: {
        label: "Cycle & calendar",
        headline: "Where you are, and what's next.",
        intro:
          "A cycle is more than tonight's meds. Cove keeps the stage, the calendar, and the clinic visits beside the same plan.",
        items: [
          {
            title: "Treatment stages",
            body: "From priming through recovery. Choose the stage that fits today. Cove uses it to show where you are, not to change your protocol.",
          },
          {
            title: "Cycle calendar",
            body: "Medications and visits on one calendar, opened from the top bar. Tap a day to see what was due.",
          },
          {
            title: "Appointments",
            body: "Every scan and monitoring visit, with the clinic and the hour. Add visit notes after you leave.",
          },
          {
            title: "Pause a cycle",
            body: "Stop routine reminders without deleting your history. Resume when you are ready.",
          },
          {
            title: "More than one cycle",
            body: "Prior cycles stay in your account, so a second or third round isn't a blank slate.",
          },
          {
            title: "Journal",
            body: "A check-in for how the day felt: mood, body, a note if you want one. Skip any day. Export a PDF for yourself.",
          },
          {
            title: "Hydration",
            body: "A daily glass log on Today, so you can see the streak without a separate app.",
          },
        ],
      },
      records: {
        label: "Records",
        headline: "What the clinic told you, kept in order.",
        intro:
          "Cove stores what you log. It never scores a result, never predicts an outcome, and never tells you what a number means.",
        items: [
          {
            title: "Monitoring visits",
            body: "Bloodwork, ultrasound, and follicle counts after each scan. History you can read back, not a trendline that interprets you.",
          },
          {
            title: "Blood work PDFs",
            body: "Upload a lab report. Cove drafts the numbers for you to review. Nothing is saved until you confirm.",
          },
          {
            title: "Test results",
            body: "Beta hCG, estradiol, progesterone, and the rest of the panel, with the date and the unit your clinic used.",
          },
          {
            title: "Embryo timeline",
            body: "How each embryo develops, day by day, in one clear line. Fertilized, blastocyst, frozen, transferred: the events you were told.",
          },
          {
            title: "Procedure history",
            body: "Retrievals, transfers, trigger, and other procedures, kept in date order.",
          },
          {
            title: "Fertilization funnel",
            body: "Eggs retrieved, mature, fertilized, embryos. The counts your clinic gave you, in one quiet stack.",
          },
          {
            title: "Cycle costs",
            body: "Clinic, medication, and what insurance covered. One currency per cycle, in Records.",
          },
        ],
      },
      capture: {
        label: "Add with AI",
        headline: "Speak it, photograph it, or type it.",
        intro:
          "Cove can draft a medication or an appointment from a photo, a voice note, or text. You always review the draft. A capture only counts after you save.",
        items: [
          {
            title: "Camera",
            body: "Take or choose a picture of a medication. Cove drafts the name, dose, and timing for you to check.",
          },
          {
            title: "Voice",
            body: "Hold to record what to add: a medication or an appointment. Cove turns the recording into a draft.",
          },
          { title: "Type", body: "Type or paste a message. Same review step as camera and voice." },
          {
            title: "You confirm first",
            body: "Drafts are never the schedule. Confirm or correct every field before anything is saved.",
          },
        ],
      },
      privacy: {
        label: "Privacy",
        headline: "Built to stay yours.",
        intro:
          "Health data is encrypted in transit and at rest. Cove does not sell it, does not share it for advertising, and does not show ads inside the app.",
        items: [
          {
            title: "Encrypted in transit and at rest",
            body: "Your schedule and records are stored encrypted. Protocol-sheet photos are processed to read the plan, then discarded.",
          },
          {
            title: "Never sold for advertising",
            body: "We do not sell your treatment details. We do not share them with advertisers. Health data is not used to target ads.",
          },
          {
            title: "Delete everything",
            body: "Settings, then Delete account. Cycles, medications, doses, appointments, journal, records, and uploaded PDFs are permanently removed.",
          },
          {
            title: "iPhone and Android",
            body: "Available on iPhone and Android. Features and notification behaviour can differ by platform and version; check your store listing.",
          },
        ],
      },
    },
  },

  faqPage: {
    eyebrow: "Cove IVF",
    heading: "Frequently asked questions",
    intro: "Straight answers about what Cove tracks, what it costs, and how it's different from a general fertility app.",
    items: [
      {
        q: "What is Cove and who is it for?",
        a: "Cove is a mobile app for people currently in an IVF (in vitro fertilization) cycle. It organizes your medication schedule, injections, appointments, and cycle history in one place. It's built specifically for IVF patients — not for general fertility awareness, ovulation tracking, or trying-to-conceive (TTC) tracking. If you're not yet in an active treatment cycle, a general fertility app will fit you better than Cove.",
      },
      {
        q: "Does it track IVF medications and injections?",
        a: "Yes. You can photograph your clinic's protocol sheet and Cove structures it into a day-by-day medication plan, with reminders for each dose. It also tracks injection sites so you can rotate them, and includes a dedicated reminder for the trigger shot with a countdown and discreet, escalating notifications. When your clinic changes a dose, you update it once and it updates today's card, future reminders, and your history.",
      },
      {
        q: "Does it work for multiple cycles?",
        a: "Yes. Cove keeps your cycle history — medications, doses, and results — across more than one IVF cycle, so if you do a second or third cycle you can look back at what happened in a prior one instead of starting from a blank slate.",
      },
      {
        q: "Is my data private?",
        a: "Your treatment details stay private, encrypted, never sold, never shared for advertising. Cove uses a measurement tool (AppsFlyer) that collects device and campaign data to understand which ads brought you to the app. It does not receive your medications, labs, or journal. We do not show ads inside the app. You can permanently delete your account and its data from within the app at any time. Protocol-sheet photos are processed to read your schedule and are not retained after processing. See the full privacy policy for details.",
      },
      {
        q: "How much does it cost?",
        a: "Cove offers auto-renewing subscriptions. The app shows your local price, billing period, included features and any eligible trial before you subscribe. Offers vary by store and eligibility; check the purchase screen for the total charged and renewal terms.",
      },
      {
        q: "Is there an Android version?",
        a: "Yes. Cove is available now on both iPhone and Android — download it from the App Store or Google Play.",
      },
      {
        q: "Is this a medical device?",
        a: "No. Cove is an organizational tool, not a medical device. It does not diagnose, does not predict outcomes, and never suggests, adjusts, or interprets your doses. It never provides medical advice — your clinic makes every medical decision, and you should always follow your clinic's instructions over anything in the app.",
      },
      {
        q: "How is it different from a general fertility tracker like Flo or Premom?",
        a: "General fertility trackers like Flo or Premom are built around predicting ovulation and fertile windows for people trying to conceive naturally — cycle-day predictions, BBT, cervical mucus, LH-strip logging. None of that applies once you're in an IVF cycle, where your schedule is set by your clinic's protocol rather than your own cycle signals. Cove is built around the opposite problem: a clinic-directed protocol with multiple medications, exact dose timing, injection sites, appointments, and monitoring results that change as your clinic adjusts your plan. If you're not in treatment, a general tracker is the right tool. If you're in an IVF cycle, Cove is built for that specific situation.",
      },
    ],
  },

  support: {
    eyebrow: "Help & contact",
    heading: "Cove IVF Support",
    intro: "Questions, feedback, or trouble with the app? We read every message.",
    emailLabel: "Email",
    emailUs: "Email us",
    faqHeading: "Frequently asked",
    faq: [
      {
        q: "Is this medical advice?",
        a: "No. Cove is an organizer. It never suggests, adjusts, or interprets doses, and never predicts outcomes. Your clinic decides everything medical.",
      },
      {
        q: "What happens to my scan?",
        a: "It's processed to read your schedule, then discarded. Your schedule is stored encrypted, in transit and at rest.",
      },
      {
        q: "What platforms is Cove on?",
        a: "Cove is available now on both iPhone and Android.",
      },
      {
        q: "How do I delete my data?",
        a: "Open Settings in the app and tap Delete everything. It's immediate and permanent.",
      },
      {
        q: "The scanner misread my sheet — what do I do?",
        a: "You can edit any value by hand, or retake the photo. Always confirm against your clinic's sheet.",
      },
      {
        q: "How do I restore my purchase?",
        a: "On a new device, open the app and tap Restore purchase in Settings.",
      },
    ],
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
    },
    privacyLink: "Privacy Policy",
    termsLink: "Terms",
  },

  deleteAccount: {
    eyebrow: "Legal",
    heading: "Delete Your Cove Account",
    intro: "You can permanently delete your Cove IVF account and all associated data at any time.",
    fromAppLead: "To delete your account from the app:",
    steps: [
      "Open the Cove app.",
      "Go to Settings.",
      "Tap 'Delete account' in the danger zone.",
      "Confirm by typing DELETE.",
    ],
    whatDeletedLabel: "What gets deleted:",
    whatDeletedBody:
      " This permanently removes your account and associated data — cycles, medications, doses, appointments, injection logs, journal entries, uploaded Blood Work PDFs, and your profile. Apple or Google may still keep a record of the subscription itself. This action cannot be undone.",
    noAccessPrefix: "If you cannot access the app: Email us at ",
    noAccessSuffix:
      " from the address associated with your account and we will delete your account and data on your behalf.",
  },

  affiliate: {
    eyebrow: "Partnerships",
    heading: "Cove Affiliate",
    whoHeading: "Who it's for",
    whoBody: "People in an IVF cycle, and creators who will use the app in a real cycle.",
    commissionHeading: "Commission",
    commissionBody: "20% of paid Cove Pro from your code.",
    cookieHeading: "Cookie",
    cookieBody: "90 days.",
    howHeading: "How it works now",
    howBody:
      "Codes are issued manually. Paid events are Apple in-app purchase plus RevenueCat, not Stripe, so there is no automatic dashboard yet. If we take the partnership, you get a code by email after review.",
    measureHeading: "What we measure",
    measureBody: "Code activated → 7-day use → paid. Not views, not follower count.",
    trialHeading: "Influencer trial",
    trialBody:
      "We agree a view target of 200k or 300k up front. If you hit the target, you get paid. The 20% affiliate code stays on the whole time. After the first month: continue, raise the paid-view fee, or end it.",
    submittedBody: "We'll email you if we take it. Do not post a Cove link until you have a code.",
    form: {
      applyHeading: "Apply",
      applyIntro: "We'll review this by hand. Do not post a Cove link until you have a code.",
      name: "Name",
      email: "Email",
      handle: "Instagram or TikTok handle",
      inCycle: "In a current IVF cycle?",
      yes: "Yes",
      no: "No",
      creator: "Creator?",
      expectedPlatform: "Expected platform",
      expectedPlatformPlaceholder: "Instagram, TikTok, or both",
      viewTarget: "View target",
      noViewTarget: "no view target",
      anythingElse: "Anything else",
      sending: "Sending…",
      apply: "Apply",
      errorGeneric: "Could not send. Please try again.",
    },
  },

  blog: {
    eyebrow: "Cove IVF",
    heading: "Blog",
    intro: "Notes on IVF cycles, medication tracking, and building a calmer treatment process.",
    empty: "Nothing published yet — check back soon.",
  },

  legalNotice:
    "This is a translation provided for convenience. If there is any difference, the English version of this page prevails.",

  privacy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    lastUpdated: "Last updated: September 26, 2026",
    doc: [
      { type: "h2", text: "The short version" },
      {
        type: "p",
        text: [
          "Cove helps you organize an IVF cycle. Your treatment details stay private, encrypted, never sold, never shared for advertising. You can delete them — including uploaded lab PDFs — from Settings in the app. Cove uses a measurement tool (AppsFlyer) that collects device and campaign data to understand which ads brought you to the app. It does not receive your medications, labs, or journal. This policy explains what we collect, why, and the choices you have.",
        ],
      },
      { type: "h2", text: "Who we are" },
      {
        type: "p",
        text: [
          'Cove IVF ("Cove," "we," "us") provides an iOS app (and, where available, Android) and this website. Privacy questions: ',
          { link: "coveivf@gmail.com", href: "mailto:coveivf@gmail.com" },
          ".",
        ],
      },
      { type: "h2", text: "What we collect" },
      { type: "h3", text: "Account information" },
      {
        type: "p",
        text: [
          "You can create an account with Sign in with Apple, Google Sign-In, or email. Depending on the method, we receive an identifier and, if you choose to share it, a name and email address. Sign in with Apple lets you hide your email. Google Sign-In is provided by Google; Google's own privacy policy applies to Google's handling of that sign-in.",
        ],
      },
      { type: "h3", text: "Health and cycle information you enter" },
      {
        type: "p",
        text: [
          "Medication schedules, doses and times, appointments, journal check-ins, hydration, expenses, injection sites, monitoring values, and other records you choose to log. You provide this. We store it so the app can show it back to you and remind you.",
        ],
      },
      { type: "h3", text: "Protocol photos, voice, and Blood Work PDFs" },
      {
        type: "ul",
        items: [
          [
            { b: "Photos of a clinic sheet:" },
            " sent to our processing service (Anthropic) solely to draft medication or appointment cards. We ask you to check every value before anything is saved. We do not keep the image after processing, and we do not use your images to train a model.",
          ],
          [
            { b: "Voice:" },
            " if you add a medication, appointment, or lab by speaking, the recording is sent to our processing service to draft cards for you to review. We do not keep the audio after processing. What we may keep is the structured draft you save (for example, a medication name and time).",
          ],
          [
            { b: "Blood Work PDFs:" },
            " if you upload a lab report, we store that PDF in a private folder tied to your account so you can keep it with the extracted results. The file is processed (Anthropic) to draft test values for you to review. The PDF remains until you delete that report or delete your account. Account deletion removes the database rows and the stored PDF files.",
          ],
        ],
      },
      { type: "h3", text: "Partner Mode, where available" },
      {
        type: "p",
        text: [
          "Partner Mode is optional sharing with one person you invite and confirm. We store your display name, consent, connection, sharing choices, practical tasks, preset support messages and notification preferences. Your supporter can see only the treatment phase and appointments you select, plus support requests and tasks you choose to share. Appointment titles may contain sensitive information; review them before sharing. Journals, visit notes, test results, documents and medication records are not shared.",
        ],
      },
      {
        type: "p",
        text: [
          "You can pause sharing or either person can end the connection. New access and notifications stop when sharing is paused, the selected cycle is inactive or the sharing person's subscription expires. Privacy controls remain available. Shared content is not stored permanently on the supporter's device by Cove, but screenshots cannot be recalled. Connection and support records remain on our servers until either associated account is deleted. Push notifications use generic text without treatment details.",
        ],
      },
      { type: "h3", text: "Cycle Pal, where available" },
      {
        type: "p",
        text: [
          "Cycle Pal is optional. We store the display name, introduction and conversation language you choose, your consent, connections, messages, blocks and reports. Your suggested companion sees your Cycle Pal profile; messaging opens only when both of you accept. Your medication, lab, journal and other treatment records are not automatically shared.",
        ],
      },
      {
        type: "p",
        text: [
          "Messages are stored on Cove's servers and are not end-to-end encrypted. Automated text rules may reject some content. Human review takes place after a report; authorized Cove reviewers can inspect the reported conversation and suspend an abusive account. Report notifications sent through Telegram contain a report identifier, not your message text, report reason, name or treatment records.",
        ],
      },
      {
        type: "p",
        text: [
          "Ending or blocking a connection stops messaging but does not erase the stored conversation. Deleting either participant's account removes the associated conversation and reports from Cove. We cannot remove screenshots or copies another participant saved themselves. Do not share information you do not want your companion to know.",
        ],
      },
      { type: "h3", text: "Information collected automatically" },
      {
        type: "ul",
        items: [
          [
            { b: "PostHog (analytics):" },
            " we use PostHog to understand whether screens load and whether onboarding was completed. It is configured not to collect medication names, doses, lab values, or your email. We identify you in analytics only with an opaque account id, not your name.",
          ],
          [
            { b: "AppsFlyer (advertising measurement):" },
            " Cove uses a measurement tool (AppsFlyer), a mobile measurement partner, to understand which ads brought you to the app. We do not show ads inside Cove. It may collect device identifiers (including Apple's IDFA only if you allow tracking, Apple's IDFV, and on Android an advertising ID), campaign and attribution data (which ad, link, creator code, or App Store campaign led to an install), and in-app conversion events that are not health data — for example completing signup, viewing a paywall, starting a trial, or subscribing. On iOS this is \"tracking\" under Apple's App Tracking Transparency (ATT) rules. You will see Apple's prompt, and you can tap Ask App Not to Track. You can also change this later in iOS Settings → Privacy & Security → Tracking. If you decline, we do not use IDFA. Limited Apple install measurement (SKAdNetwork) and non-IDFA conversion events may still run. PostHog (product analytics) is not gated by this prompt. Your treatment details stay private. AppsFlyer does not receive your medications, labs, or journal. Health and treatment data are not shared with AppsFlyer or any advertising partner.",
          ],
          [
            { b: "Apple Search Ads / App Store attribution:" },
            " on iOS we may collect Apple's attribution token so we can tell that an App Store campaign led to a download. This is not used to target ads inside Cove.",
          ],
          [
            { b: "Technical data:" },
            " device type, app version, and crash or error messages needed to operate and secure the service. Push tokens are stored so we can send reminders and occasional product messages you already expect (for example a time-limited offer after a cancelled trial).",
          ],
        ],
      },
      { type: "h2", text: "What we do NOT do" },
      {
        type: "ul",
        items: [
          ["We do not sell your personal or health information."],
          ["We do not share your health information with advertisers, data brokers, or social platforms for their advertising."],
          ["We do not show third-party ads inside the app."],
          ["We do not use your health information to target ads."],
        ],
      },
      { type: "h2", text: "How we use your information" },
      {
        type: "ul",
        items: [
          ["To provide the app: build your schedule, send reminders, store and display what you log."],
          ["To run capture features (photo, voice, Blood Work PDF) and show you drafts to review."],
          ["To process subscriptions through Apple (and Google Play where available) and RevenueCat."],
          ["To operate, secure, and improve the service, including using a measurement tool (AppsFlyer) to understand which ads brought you to the app."],
          ["To contact you about the product (for example a product update, support reply, or a short-lived offer after a paywall or cancelled trial). You can opt out of non-essential emails in the app where that control exists."],
        ],
      },
      { type: "h2", text: "How your information is stored and protected" },
      {
        type: "p",
        text: [
          "Account and health data are stored with our cloud provider, Supabase, encrypted in transit and at rest. Blood Work PDFs sit in a private storage bucket that only your signed-in account can read. Access is restricted so that your data is available to your account, not to other users. No method of storage is perfectly secure, but we design the product to keep your information private and under your control.",
        ],
      },
      { type: "h2", text: "Your choices and rights" },
      {
        type: "ul",
        items: [
          [
            { b: "Delete everything:" },
            " Settings → Delete account. We permanently delete your account, cycle data, and stored Blood Work PDFs. Deletion is not reversible. Apple or Google may still keep a record of the subscription itself under their rules.",
          ],
          [{ b: "Access and correction:" }, " you can view and edit your information in the app."],
          [{ b: "Communications:" }, " you can opt out of non-essential emails."],
          [
            { b: "Lock-screen privacy:" },
            " you can hide medication names on lock-screen reminders in Settings → Notifications.",
          ],
          [
            { b: "App Tracking (iOS):" },
            " Cove may ask for permission to track so AppsFlyer can use a device identifier (IDFA) to understand which ads brought you to the app. It is not used for medical care or reminders. You can decline the prompt, or turn tracking off later in iOS Settings → Privacy & Security → Tracking. Declining does not delete your account or your cycle data.",
          ],
        ],
      },
      {
        type: "p",
        text: [
          "Depending on where you live, you may have additional rights (for example under California or European law) to access, delete, or restrict use of your information. Contact ",
          { link: "coveivf@gmail.com", href: "mailto:coveivf@gmail.com" },
          ".",
        ],
      },
      { type: "h2", text: "Data retention" },
      {
        type: "p",
        text: [
          "We keep your information for as long as your account is active. When you delete your account, we delete associated health data and Blood Work PDF files. Protocol-sheet photos and voice recordings are not retained after processing. Short structured logs of a capture session (for example that a photo produced three draft cards) may exist until account deletion. Subscription records held by Apple, Google, or RevenueCat follow their retention rules, not ours.",
        ],
      },
      { type: "h2", text: "Sharing with service providers" },
      {
        type: "p",
        text: [
          "We use a small number of companies to run Cove. They may process information only to provide their service to us:",
        ],
      },
      {
        type: "ul",
        items: [
          ["Supabase — hosting, database, authentication, and file storage"],
          ["Apple and, where available, Google — sign-in and app-store billing"],
          ["RevenueCat — subscription status"],
          ["Anthropic — reading protocol photos, voice drafts, and Blood Work PDFs into cards you review"],
          ["PostHog — product analytics (no health contents)"],
          ["AppsFlyer — measurement tool for advertising: device identifiers, campaign/attribution data, and non-health conversion events. It does not receive your medications, labs, or journal."],
          ["Expo — delivering push notifications"],
          ["Resend — sending support email and, when enabled, transactional product email"],
        ],
      },
      { type: "p", text: ["We do not sell or rent your information to anyone."] },
      { type: "h2", text: "Children" },
      {
        type: "p",
        text: [
          "Cove is intended for adults undergoing fertility treatment and is not directed to children under 16. We do not knowingly collect information from children.",
        ],
      },
      { type: "h2", text: "Changes to this policy" },
      {
        type: "p",
        text: ["If we change this policy, we will update the date above and, for material changes, notify you."],
      },
      { type: "h2", text: "Contact" },
      {
        type: "p",
        text: [
          "Questions about privacy: ",
          { link: "coveivf@gmail.com", href: "mailto:coveivf@gmail.com" },
          ".",
        ],
      },
    ] as LegalDoc,
  },

  terms: {
    eyebrow: "Legal",
    title: "Terms of Service",
    lastUpdated: "Last updated: September 26, 2026",
    doc: [
      { type: "h2", text: "1. Agreement" },
      {
        type: "p",
        text: [
          'These Terms govern your use of the Cove IVF app and website ("Cove," "we," "us"). By using Cove, you agree to these Terms. If you don\'t agree, don\'t use Cove.',
        ],
      },
      { type: "h2", text: "2. What Cove is — and is not (please read this)" },
      {
        type: "p",
        text: [
          { b: "Cove is an organizational tool, not a medical device." },
          " It does not provide medical advice, diagnosis, or treatment. Always follow your clinic's instructions.",
        ],
      },
      {
        type: "p",
        text: [
          "Cove helps you organize information you enter or that is read from your clinic's documents — medication schedules, reminders, appointments, and results you choose to log or upload. Cove does not:",
        ],
      },
      {
        type: "ul",
        items: [
          ["recommend, prescribe, adjust, or verify any medication, dose, or timing;"],
          ["diagnose any condition, interpret lab trends, or predict any outcome;"],
          ["replace your doctor, clinic, nurse, or pharmacist."],
        ],
      },
      {
        type: "p",
        text: [
          "Your clinic is always the source of truth. If anything in Cove differs from your clinic's instructions, follow your clinic and contact them. Do not rely on Cove for any medical decision. In an emergency, contact your clinic or emergency services.",
        ],
      },
      { type: "h2", text: "Partner Mode, where available" },
      {
        type: "p",
        text: [
          "Partner Mode is optional support between adults who know and confirm each other. Invite only someone you trust and review what you share. The sharing person needs an active Cove subscription; their supporter uses a separate free account. New shared access and reminders stop if that subscription expires or sharing is paused. Either person can end the connection. Completing a support task never records a medication as taken. Support messages and reminders are not medical advice or emergency services, and notification delivery is not guaranteed.",
        ],
      },
      { type: "h2", text: "Cycle Pal community rules, where available" },
      {
        type: "p",
        text: [
          "Cycle Pal is optional peer support for adults aged 18 or older. Both people must accept a suggested connection before messaging. It is not medical advice or emergency support. Do not harass, threaten, scam, impersonate others, share sexual content, solicit money or tell another person to change their treatment.",
        ],
      },
      {
        type: "p",
        text: [
          "You can end or block a connection and report a concern, including after a conversation has ended. A report blocks that connection. Cove can review the reported conversation, hide abusive messages and suspend an account. Messages are not manually approved before sending. Automated filters can miss abuse or reject legitimate messages; contact coveivf@gmail.com for help. Share only what you are comfortable disclosing.",
        ],
      },
      { type: "h2", text: "3. Capture features and accuracy" },
      {
        type: "p",
        text: [
          "Cove can read a photo of your protocol sheet, a voice description, or a Blood Work PDF to help you build cards in the app. This reading may contain errors. You are responsible for checking every value against your own clinic documents before relying on it, which is why Cove asks you to review drafts before they are saved. Cove is not responsible for errors in reading. Confirming a value in Cove does not make it medically correct — only your clinic can do that.",
        ],
      },
      { type: "h2", text: "4. Reminders" },
      {
        type: "p",
        text: [
          "Cove can send reminders, including for time-sensitive medications. Reminders may fail for reasons outside our control (device settings, Focus modes, notification permissions, software issues, connectivity). Do not rely on Cove as your only reminder for any critical medication, including a trigger shot; set an independent backup (such as a phone alarm). Cove is not responsible for a missed or mistimed medication.",
        ],
      },
      { type: "h2", text: "5. Your account" },
      {
        type: "p",
        text: [
          "You're responsible for your account and for the accuracy of what you enter. Use Cove only for its intended personal purpose and in compliance with the law. You may sign in with Apple, Google, or email.",
        ],
      },
      { type: "h2", text: "6. Purchases" },
      {
        type: "p",
        text: [
          "Cove is sold as an auto-renewing subscription through Apple's App Store (and, where available, Google Play). Billing is processed by Apple or Google, with subscription status tracked by RevenueCat. The app shows the price, length, and what is included at the point of sale. The default offering includes a short free trial (currently three days) unless a different offer is shown to you. Purchases are subject to Apple's or Google's terms; refunds are handled by them under their policies. Manage or cancel in device Settings (Apple: Settings → your name → Subscriptions).",
        ],
      },
      { type: "h2", text: "7. Your content" },
      {
        type: "p",
        text: [
          "The information you enter or upload (including Blood Work PDFs) is yours. You grant us only the limited permission needed to operate the service for you (store it, process it, show it back to you, send your reminders). We do not sell it or use it to advertise to you. See our ",
          { link: "Privacy Policy", to: "/privacy" },
          ".",
        ],
      },
      { type: "h2", text: "8. Acceptable use" },
      {
        type: "p",
        text: [
          "Don't misuse Cove: no unlawful use, no attempts to break, overload, reverse-engineer, or gain unauthorized access to the service, and no use on behalf of someone else without their consent.",
        ],
      },
      { type: "h2", text: "9. Availability" },
      {
        type: "p",
        text: [
          "We aim to keep Cove working but don't guarantee it will always be available, uninterrupted, or error-free. We may change, suspend, or discontinue features.",
        ],
      },
      { type: "h2", text: "10. Disclaimers" },
      {
        type: "p",
        text: [
          'To the fullest extent permitted by law, Cove is provided "as is" and "as available," without warranties of any kind, express or implied, including fitness for a particular purpose. We do not warrant that Cove will be accurate, reliable, or error-free, or that reminders will always be delivered.',
        ],
      },
      { type: "h2", text: "11. Limitation of liability" },
      {
        type: "p",
        text: [
          "To the fullest extent permitted by law, Cove and its team will not be liable for any indirect, incidental, special, or consequential damages, or for any medical outcome, missed or mistimed medication, or decision made in reliance on Cove.",
        ],
      },
      { type: "h2", text: "12. Changes to these Terms" },
      {
        type: "p",
        text: [
          "We may update these Terms; we'll update the date above and, for material changes, provide notice. Continued use means you accept the updated Terms.",
        ],
      },
      { type: "h2", text: "13. Governing law / disputes" },
      {
        type: "p",
        text: [
          "If you have a dispute, email us first at ",
          { link: "coveivf@gmail.com", href: "mailto:coveivf@gmail.com" },
          ". Mandatory consumer-protection laws in your country of residence still apply where they cannot be waived. Subject to those laws, these Terms are governed by the laws of the Arab Republic of Egypt.",
        ],
      },
      { type: "h2", text: "14. Contact" },
      {
        type: "p",
        text: [
          "Questions about these Terms: ",
          { link: "coveivf@gmail.com", href: "mailto:coveivf@gmail.com" },
          ".",
        ],
      },
    ] as LegalDoc,
  },
};

export type Dictionary = typeof en;
