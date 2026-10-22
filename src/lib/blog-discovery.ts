import type { PostSummary } from "./blog";
import type { Locale } from "@/i18n/config";

// Curated reading paths; only published rows returned by the existing loader
// can become links. Rotate within each topic so later posts are discoverable too.
const TOPICS = [
  [
    "ivf-injection-schedule-how-to-keep-track",
    "ivf-medication-list-what-each-one-does",
    "ivf-medication-inventory-not-running-out-mid-stim",
    "ivf-trigger-shot-why-timing-is-tight-and-how-people-remember-it",
    "what-to-do-if-you-miss-an-ivf-injection",
    "how-to-rotate-ivf-injection-sites",
    "discreet-ivf-reminders-at-work",
  ],
  [
    "what-an-ivf-protocol-photo-should-become",
    "moving-an-ivf-protocol-off-screenshots-and-alarms",
    "spreadsheet-vs-app-for-an-ivf-protocol",
    "clinic-portal-and-a-personal-ivf-tracker",
    "what-to-look-for-in-an-ivf-tracker",
    "ivf-tracker-vs-period-app-different-jobs",
    "best-ivf-tracking-apps-2026",
    "embie-alternative-ivf-tracker",
    "what-an-ivf-tracker-cannot-do",
    "cove-is-iphone-only-today",
  ],
  [
    "how-much-does-ivf-cost-tracking-your-real-spend",
    "ivf-cost-categories-people-forget-to-track",
    "ivf-medication-inventory-not-running-out-mid-stim",
  ],
  [
    "beta-hcg-wait-dates-not-predictions",
    "the-two-week-wait-practical-ways-to-get-through-it",
    "transfer-day-logistics-not-medical-advice",
    "fresh-transfer-vs-fet-what-changes-in-the-calendar",
    "embryo-grading-what-patients-are-usually-told",
    "how-the-fertilization-report-is-usually-structured",
  ],
  [
    "tracking-more-than-one-ivf-cycle-without-overwriting",
    "after-a-failed-cycle-which-records-to-keep",
    "ivf-appointments-and-monitoring-what-to-log",
    "stim-phase-what-to-expect-day-by-day",
    "hydration-during-stim-what-clinics-commonly-say",
    "private-ivf-journal-notes-off-the-group-chat",
    "partner-sharing-ivf-schedule-without-the-whole-chart",
  ],
];

export function relatedPosts(slug: string, published: PostSummary[]): PostSummary[] {
  const bySlug = new Map(published.map((post) => [post.slug, post]));
  const candidates = TOPICS.filter((topic) => topic.includes(slug)).flatMap((topic) => {
    const index = topic.indexOf(slug);
    return [...topic.slice(index + 1), ...topic.slice(0, index)];
  });
  return [...new Set(candidates)]
    .filter((candidate) => candidate !== slug && bySlug.has(candidate))
    .slice(0, 3)
    .map((candidate) => bySlug.get(candidate)!);
}

export function articleTool(slug: string) {
  if (/(cost|inventory)/.test(slug)) {
    return {
      href: "/ivf-medication-cost-calculator",
      label: "Compare your IVF medication quotes",
      detail: "Use your own pharmacy quotes to compare totals. Free, with no account needed.",
    };
  }
  if (/(transfer|two-week-wait|beta-hcg)/.test(slug)) {
    return {
      href: "/days-past-embryo-transfer-calculator",
      label: "Count your days past embryo transfer",
      detail: "Check calendar days and your clinic's test countdown. No outcome predictions.",
    };
  }
  return null;
}

export const blogDiscoveryCopy: Record<
  Locale,
  { english: string; related: string; features: string }
> = {
  en: {
    english: "Articles are currently available in English.",
    related: "Keep reading",
    features: "Explore Cove's medication schedule and tracking features",
  },
  ar: {
    english: "المقالات متاحة حاليًا باللغة الإنجليزية.",
    related: "مقالات ذات صلة بالإنجليزية",
    features: "اكتشفي جدول الأدوية ومميزات المتابعة في Cove",
  },
  de: {
    english: "Die Artikel sind derzeit auf Englisch verfügbar.",
    related: "Weitere Artikel auf Englisch",
    features: "Medikamentenplan und Tracking-Funktionen von Cove entdecken",
  },
  fr: {
    english: "Les articles sont actuellement disponibles en anglais.",
    related: "Articles associés en anglais",
    features: "Découvrir le planning des médicaments et les fonctions de suivi de Cove",
  },
  es: {
    english: "Los artículos están disponibles actualmente en inglés.",
    related: "Artículos relacionados en inglés",
    features: "Explora el calendario de medicamentos y las funciones de seguimiento de Cove",
  },
};
