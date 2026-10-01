/**
 * Content for the /features/$slug pages.
 *
 * Each entry has to stand on its own in search: the homepage already covers
 * these features in brief, so the copy here is deliberately different —
 * longer, more specific, and written around the question someone types into
 * Google rather than around the scroll of the landing page.
 */
export type FeatureStep = { title: string; body: string };
export type FeatureFaq = { q: string; a: string };

export type Feature = {
  slug: string;
  /** Short label for nav, breadcrumbs, and cross-links. */
  name: string;
  /** <title> — kept at or under 60 characters including the brand suffix. */
  title: string;
  description: string;
  h1: string;
  /** The first two lines of the page. Answers the query before anything else. */
  lede: string;
  steps: FeatureStep[];
  limits: string[];
  faqs: FeatureFaq[];
  /** Slugs of the two most closely related features. */
  related: string[];
};

export const FEATURES: Feature[] = [
  {
    slug: "ivf-protocol-scanner",
    name: "Protocol scanner",
    title: "IVF Protocol Scanner — Photograph Your Sheet | Cove",
    description:
      "Photograph your clinic's IVF protocol sheet and Cove turns it into a day-by-day medication plan you verify line by line. No typing out doses by hand.",
    h1: "Turn your clinic's protocol sheet into a day-by-day plan",
    lede: "Cove's protocol scanner reads a photo of your clinic's printed IVF protocol sheet and structures it into a dated medication plan. You check every value it read against your own sheet before anything is scheduled.",
    steps: [
      {
        title: "Photograph the sheet",
        body: "Lay your clinic's printed protocol flat and take one photo in the app. It works with the handwritten edits clinics add in the margin, and with sheets that cover several weeks at once.",
      },
      {
        title: "Cove structures it",
        body: "The scan is processed into a list of medications with their doses, units, and dates. The photo itself is processed to read your schedule and is not retained afterwards — the structured schedule is what gets stored, encrypted.",
      },
      {
        title: "You verify every line",
        body: "Nothing is scheduled until you confirm it. Cove shows each medication, dose, and date next to each other so you can read them off against your sheet and correct anything that came through wrong. This step is deliberately not skippable.",
      },
      {
        title: "Your plan goes live",
        body: "Once verified, the plan drives your daily medication lineup and your reminders. When your clinic changes a dose mid-cycle, you edit it once and today's card, your future reminders, and your cycle history all update together.",
      },
    ],
    limits: [
      "Cove does not read your sheet to check it. It does not flag a dose as too high or too low, and it does not compare your protocol against anything.",
      "A scan is a transcription step, not a second opinion. If what Cove read differs from your sheet, your sheet is right — correct it in the verify step.",
      "Cove does not connect to your clinic's portal or EHR. The protocol sheet comes in as a photo, not as a live data feed.",
    ],
    faqs: [
      {
        q: "What if the scan gets a dose wrong?",
        a: "You fix it in the verification step, before the plan is created. Cove shows every scanned value for you to check against your sheet precisely because a transcription can be wrong — your clinic's sheet is always the source of truth.",
      },
      {
        q: "What happens to the photo of my protocol sheet?",
        a: "It is processed to read your schedule and is not retained after processing. The structured schedule that comes out of it is stored encrypted in transit and at rest.",
      },
      {
        q: "Can I enter my protocol by hand instead?",
        a: "Yes. The scanner is there to save you typing, not to be the only way in. You can enter and edit medications, doses, and dates directly.",
      },
    ],
    related: ["ivf-medication-reminders", "ivf-cycle-timeline"],
  },
  {
    slug: "ivf-medication-reminders",
    name: "Medication reminders",
    title: "IVF Medication Reminders & Injection Tracker | Cove",
    description:
      "A daily lineup of your IVF medications in order, with a reminder for each dose, injection site rotation, and dose changes that update everywhere at once.",
    h1: "IVF medication reminders that follow your clinic's protocol",
    lede: "Cove gives you one daily card with your medications in the order you take them, and a reminder for each dose at its own time. It tracks which injection site you used, and carries clinic dose changes through to every future reminder.",
    steps: [
      {
        title: "One lineup per day",
        body: "An IVF day is rarely one pill at one time. Cove puts the day's medications in sequence — morning, evening, the one that has to be mixed — so you are reading a list instead of reconstructing a schedule from a sheet and four phone alarms.",
      },
      {
        title: "A reminder per dose, not per day",
        body: "Each medication gets its own notification at its own time. Lock-screen notifications are written so they do not name the medication, so a phone face-up on a desk at work does not announce your cycle to the room.",
      },
      {
        title: "Injection site rotation",
        body: "Log which site you used when you record a dose. Over a stims cycle that history is what tells you where you have been going repeatedly, so you can rotate rather than guess.",
      },
      {
        title: "Dose changes in one place",
        body: "Monitoring calls change doses mid-cycle. Update the dose once in Cove and it changes tonight's card, every future reminder, and the historical log — so your record does not quietly disagree with what you actually took.",
      },
    ],
    limits: [
      "Cove never suggests, adjusts, or interprets a dose. Every number in the app is one you or your clinic put there.",
      "It does not tell you whether you missed a dose matters, or what to do about it. That call is your clinic's.",
      "Reminders depend on iOS notifications being allowed. Cove is a reminder system, not a guarantee.",
    ],
    faqs: [
      {
        q: "Will the notification show my medication name on the lock screen?",
        a: "No. Lock-screen notifications are written to be discreet and do not name the medication. You see the detail once you open the app.",
      },
      {
        q: "What happens when my clinic changes a dose mid-cycle?",
        a: "You update it once. Cove applies the change to the current day's card, to future reminders, and to your cycle history, so there is one consistent record of what you were prescribed and what you took.",
      },
      {
        q: "Does it track injections as well as oral medication?",
        a: "Yes. Injections are logged with the site you used so you can rotate them, alongside oral medications and anything else on your protocol.",
      },
    ],
    related: ["trigger-shot-reminder", "ivf-protocol-scanner"],
  },
  {
    slug: "trigger-shot-reminder",
    name: "Trigger shot reminder",
    title: "IVF Trigger Shot Reminder with Countdown | Cove",
    description:
      "The trigger shot is the one dose with no margin for error. Cove gives it a countdown, escalating reminders, and a discreet lock-screen notification.",
    h1: "A reminder built for the one dose that can't slip",
    lede: "The trigger shot has to happen at an exact time, usually one your clinic gives you at short notice and often in the middle of the night. Cove treats it as its own event: a countdown, reminders that escalate as the time approaches, and a confirmation you tap once it's done.",
    steps: [
      {
        title: "Set the exact time your clinic gave you",
        body: "Trigger timing comes from your monitoring appointment, often hours before it has to happen. You enter the time Cove counts down to — the app has no opinion about when it should be.",
      },
      {
        title: "A countdown you can see",
        body: "Instead of a single alarm, the trigger gets a visible countdown in the app, so the time is something you can check rather than something you have to hold in your head on a day that is already full.",
      },
      {
        title: "Reminders that escalate",
        body: "Reminders build as the window approaches rather than firing once and disappearing into a notification stack. On the lock screen they stay discreet and do not name the medication.",
      },
      {
        title: "Confirm it's done",
        body: "One tap records that you took it, with the time. That timestamp goes into your cycle history alongside the rest of the protocol, so the record of the most time-critical dose is as solid as the rest.",
      },
    ],
    limits: [
      "Cove does not calculate or suggest your trigger time. Your clinic sets it; you enter it.",
      "It does not tell you what to do if the timing slipped. Call your clinic — that is a medical question and Cove will never answer one.",
      "Escalating reminders are iOS notifications. They are a strong prompt, not a fail-safe.",
    ],
    faqs: [
      {
        q: "Can Cove tell me when to take my trigger shot?",
        a: "No, and it never will. The trigger time is a clinical decision made by your clinic based on your monitoring. Cove's job starts after you have been given that time.",
      },
      {
        q: "What if my trigger is at 2am?",
        a: "That is the case it is built for. The countdown and escalating reminders exist because the trigger is routinely scheduled at hours when a single alarm is easy to sleep through or dismiss half-awake.",
      },
      {
        q: "Will the reminder say what the medication is?",
        a: "Not on the lock screen. Like every other Cove reminder, it is written so someone glancing at your phone does not learn what you are taking.",
      },
    ],
    related: ["ivf-medication-reminders", "ivf-cycle-timeline"],
  },
  {
    slug: "ivf-cycle-timeline",
    name: "Cycle timeline & history",
    title: "IVF Cycle Timeline and Multi-Cycle History | Cove",
    description:
      "See which stage of your IVF cycle you're in, from priming through recovery — and keep medications, doses, costs, and results across more than one cycle.",
    h1: "Your cycle, stage by stage — and every cycle before it",
    lede: "Cove shows where you are in the current IVF cycle, from priming through stimulation, trigger, retrieval, and recovery. It also keeps your medications, doses, costs, and results from previous cycles, so a second or third round does not start from a blank page.",
    steps: [
      {
        title: "Know which stage you're in",
        body: "An IVF cycle has distinct phases and each one has a different rhythm of medications and appointments. The timeline marks the stage you're in now, which is the orientation most people lose somewhere around day nine.",
      },
      {
        title: "A record that builds itself",
        body: "Every dose you log, every dose change, and every result you enter lands in the cycle record as you go. You are not reconstructing the cycle at the end from memory and a phone camera roll.",
      },
      {
        title: "Cycles kept side by side",
        body: "If you do a second or third cycle, the earlier ones stay. What protocol you were on, what doses you ended up at, what the results were — it is there to look back at rather than something you have to ask your clinic to re-send.",
      },
      {
        title: "What the cycle cost",
        body: "Medication and treatment costs are logged per cycle, so the financial side of a round is recorded in the same place as the medical side instead of in a separate spreadsheet.",
      },
    ],
    limits: [
      "Cove does not predict outcomes, score a cycle, or compare your results to anyone else's.",
      "It does not interpret your monitoring results. Numbers you enter are stored and displayed, never analysed.",
      "Stages reflect the standard shape of an IVF cycle. Your clinic's plan is what governs your actual treatment.",
    ],
    faqs: [
      {
        q: "Does Cove keep data from more than one cycle?",
        a: "Yes. Medications, doses, and results are kept per cycle, so if you do another round you can look back at a previous one rather than starting over.",
      },
      {
        q: "Does it predict whether a cycle will work?",
        a: "No. Cove does not predict outcomes and does not interpret results. It is an organiser — every clinical judgement belongs to your clinic.",
      },
      {
        q: "Can I track what the cycle cost?",
        a: "Yes. Medication and treatment costs are logged against the cycle they belong to.",
      },
    ],
    related: ["ivf-medication-reminders", "ivf-protocol-scanner"],
  },
];

export const FEATURE_BY_SLUG = new Map(FEATURES.map((f) => [f.slug, f]));
