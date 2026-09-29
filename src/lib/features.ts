import type { LucideIcon } from "lucide-react";
import {
  AlarmClock,
  Bell,
  BookOpen,
  Calendar,
  CalendarCheck,
  Camera,
  ClipboardList,
  CreditCard,
  Droplets,
  FileSearch,
  FileText,
  FlaskConical,
  History,
  Inbox,
  Lock,
  ListChecks,
  Mic,
  Package,
  PauseCircle,
  Pill,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Sprout,
  Syringe,
  Timer,
  Trash2,
  Type,
} from "lucide-react";

import type { Dictionary } from "@/i18n";

export type FeatureCategoryId = "medications" | "trigger" | "cycle" | "records" | "capture" | "privacy";

export type FeatureItem = {
  title: string;
  body: string;
  Icon: LucideIcon;
};

export type FeatureCategory = {
  id: FeatureCategoryId;
  label: string;
  headline: string;
  intro: string;
  items: FeatureItem[];
};

/**
 * Icons stay in code; the localized text lives in the dictionaries
 * (t.features.categories). The icon arrays below are zipped with each
 * category's dictionary `items` array BY INDEX, so keep the same order and
 * length across code and every locale dictionary.
 */
const CATEGORY_ORDER: FeatureCategoryId[] = ["medications", "trigger", "cycle", "records", "capture", "privacy"];

const CATEGORY_ICONS: Record<FeatureCategoryId, LucideIcon[]> = {
  medications: [ScanLine, ListChecks, ClipboardList, Bell, FileSearch, Pill, Syringe, Package],
  trigger: [AlarmClock, PauseCircle, ShieldCheck, Inbox, Timer],
  cycle: [Sprout, Calendar, CalendarCheck, PauseCircle, History, BookOpen, Droplets],
  records: [FlaskConical, FileText, FileText, Sprout, ClipboardList, ListChecks, CreditCard],
  capture: [Camera, Mic, Type, ListChecks],
  privacy: [Lock, ShieldCheck, Trash2, Smartphone],
};

/** Build the feature categories for the active locale's dictionary. */
export function getFeatureCategories(t: Dictionary): FeatureCategory[] {
  return CATEGORY_ORDER.map((id) => {
    const category = t.features.categories[id];
    const icons = CATEGORY_ICONS[id];
    return {
      id,
      label: category.label,
      headline: category.headline,
      intro: category.intro,
      items: category.items.map((item, i) => ({
        title: item.title,
        body: item.body,
        Icon: icons[i] ?? icons[icons.length - 1],
      })),
    };
  });
}
