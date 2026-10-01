/**
 * Content for the /compare/$slug pages.
 *
 * These pages exist to answer "do I actually need an app for this?" honestly.
 * Each one has to name the case where the alternative wins, or it is marketing
 * copy wearing a comparison's clothes and will not hold a ranking.
 */
export type ComparisonRow = { aspect: string; alternative: string; cove: string };
export type ComparisonFaq = { q: string; a: string };

export type Comparison = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  /** Column headers for the table. */
  alternativeLabel: string;
  rows: ComparisonRow[];
  /** The honest section: when you should not use Cove. */
  whenAlternativeWins: string[];
  whenCoveWins: string[];
  faqs: ComparisonFaq[];
};

export const COMPARISONS: Comparison[] = [
  {
    slug: "ivf-tracker-vs-spreadsheet",
    name: "App vs. spreadsheet",
    title: "IVF Tracker App vs. a Spreadsheet and Alarms | Cove",
    description:
      "An honest comparison of tracking an IVF protocol in a spreadsheet with phone alarms versus a dedicated IVF app — including when the spreadsheet is genuinely the better choice.",
    h1: "IVF tracker app vs. a spreadsheet and phone alarms",
    lede: "Most people start an IVF cycle with a spreadsheet, the clinic's printed sheet, and a row of phone alarms, and for a short, simple protocol that combination works. It stops working at the point where doses start changing and the record has to stay correct across a whole cycle.",
    alternativeLabel: "Spreadsheet + alarms",
    rows: [
      {
        aspect: "Getting your protocol in",
        alternative:
          "Typed out by hand from the printed sheet, usually late at night, usually once.",
        cove: "Photograph the sheet; Cove structures it and you verify each line before it's scheduled.",
      },
      {
        aspect: "A dose changes mid-cycle",
        alternative:
          "Edit the sheet, then remember to edit the alarms. The two drift apart quietly, and the drift is invisible.",
        cove: "Change it once. Today's card, every future reminder, and the history all update together.",
      },
      {
        aspect: "Reminders",
        alternative:
          "One alarm per time slot, identical every day, easy to swipe away half-asleep.",
        cove: "A reminder per dose at its own time, with the day's medications in the order you take them.",
      },
      {
        aspect: "Privacy in public",
        alternative: "Alarm labels say the medication name on your lock screen.",
        cove: "Lock-screen notifications never name the medication.",
      },
      {
        aspect: "The trigger shot",
        alternative: "A single alarm for the most time-critical dose in the cycle.",
        cove: "A countdown, escalating reminders, and a one-tap confirmation that's timestamped.",
      },
      {
        aspect: "Injection sites",
        alternative: "Remembered, or a column you stop filling in around day six.",
        cove: "Logged with each dose, so rotation is based on a record rather than a guess.",
      },
      {
        aspect: "A second cycle",
        alternative: "A new tab, or a new file. The old one is somewhere in your drive.",
        cove: "Previous cycles stay — protocol, doses, costs, and results, side by side.",
      },
      {
        aspect: "Cost",
        alternative: "Free.",
        cove: "$12.99/month, or $8.33/month billed every 6 months. Free trial first.",
      },
    ],
    whenAlternativeWins: [
      "Your protocol is short and nothing has changed — a few medications at fixed times for a couple of weeks is genuinely manageable in a spreadsheet.",
      "You are not on iPhone. Cove is iOS only right now; there is an Android waitlist, but a waitlist does not track tonight's dose.",
      "You already have a system that works and that you actually keep up to date. A tracker you trust beats a better tracker you abandon on day four.",
      "You want to share a live document with a partner or a clinic. Cove is a personal app, not a shared spreadsheet.",
      "You're not in an IVF cycle yet. If you're tracking ovulation or a fertile window, a general fertility app fits that; Cove does not do it at all.",
    ],
    whenCoveWins: [
      "Your clinic is adjusting doses between monitoring appointments and you need the record to stay correct without re-doing it by hand each time.",
      "You're taking several medications at different times of day and the ordering matters.",
      "You don't want your phone announcing your medication names in an open-plan office.",
      "You have a trigger shot scheduled at an hour you do not trust yourself to wake up for cleanly.",
      "You're on cycle two or three and want the earlier ones intact rather than scattered across old files.",
    ],
    faqs: [
      {
        q: "Is a spreadsheet actually fine for IVF?",
        a: "For a short protocol that doesn't change, yes — plenty of people get through a cycle that way. The failure mode isn't the spreadsheet, it's the gap that opens between the spreadsheet and your alarms the first time a clinic changes a dose and you only update one of them.",
      },
      {
        q: "Can I use a general fertility app like Flo or Premom instead?",
        a: "Not for this. Those apps are built around predicting ovulation and fertile windows from your own cycle signals, which stop being the relevant input once a clinic protocol is setting your schedule. If you're not in treatment yet, they're the right tool and Cove is not.",
      },
      {
        q: "Does Cove replace my clinic's printed sheet?",
        a: "No. Your clinic's sheet remains the source of truth, which is why Cove makes you verify every scanned value against it rather than trusting the scan. Cove is a way to carry that sheet around in a form that reminds you.",
      },
      {
        q: "What does Cove cost compared to a spreadsheet?",
        a: "A spreadsheet is free. Cove is $12.99/month, or $8.33/month on the plan billed every 6 months, with a free trial before either starts.",
      },
    ],
  },
];

export const COMPARISON_BY_SLUG = new Map(COMPARISONS.map((c) => [c.slug, c]));
