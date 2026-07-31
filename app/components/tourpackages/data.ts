import type { IconKey } from "./icons";

// Brand gradients used for the card bands and detail headers. The CMS stores a
// key ("gold") rather than the CSS, so blocks stay editable without pasting
// gradients; anything unrecognised is treated as a raw CSS value so a custom
// gradient can still be dropped in.
export const GRAD = {
  gold: "linear-gradient(135deg,#E89B3A,#D26FA0)",
  rose: "linear-gradient(135deg,#D26FA0,#8E5FB6)",
  violet: "linear-gradient(135deg,#8E5FB6,#5B3E8E)",
  navy: "linear-gradient(135deg,#3a2566,#16265C)",
  amber: "linear-gradient(135deg,#E5A93A,#D9822B)",
  plum: "linear-gradient(135deg,#5B3E8E,#8E4FA0)",
} as const;

export type BandKey = keyof typeof GRAD;

/** "gold" → the gold gradient; unknown non-empty values pass through as CSS. */
export function resolveBand(band: string | undefined): string {
  if (!band) return GRAD.gold;
  if (band in GRAD) return GRAD[band as BandKey];
  return band.includes("(") ? band : GRAD.gold;
}

export type ItineraryDay = { d: string; t: string; x: string };
export type Stat = { icon: IconKey | (string & {}); v: string; k: string };

export type TourPackage = {
  id: string;
  title: string;
  region: string;
  duration: string;
  season: string;
  price: string;
  old: string;
  icon: IconKey | (string & {});
  /** Gradient key ("gold") or a raw CSS gradient */
  band: string;
  summary: string;
  itinerary: ItineraryDay[];
  includes: string[];
  stats: Stat[];
  docsTitle: string;
  docs: string[];
};

export type TourTab = { id: string; label: string; packages: TourPackage[] };

/** Everything the section renders — supplied by the CMS package block. */
export type PackagesConfig = {
  anchorId: string;
  tocLabel: string;
  badge: string;
  badgeIcon: string;
  heading: string;
  subtitle: string;
  itineraryTitle: string;
  includesTitle: string;
  priceNote: string;
  callbackNote: string;
  enquireCta: string;
  enquiry: {
    kicker: string;
    regionLabel: string;
    ctaText: string;
    successHeading: string;
    /** "{region}" is replaced with the package's region */
    successText: string;
    successButton: string;
  };
  tabs: TourTab[];
};
