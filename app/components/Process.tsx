import type { LucideIcon } from "lucide-react";
import { ChevronRight, Network, Target } from "lucide-react";
import LeadPopupButton, { DIVISION_SERVICES } from "./LeadPopup";

/* ---------- Card data ---------- */

type Card = {
  name: string;
  subtitle: string;
  icon: LucideIcon;
  items: string[];
  cta: string;
  accent?: boolean;
  badge?: string;
};

const cards: Card[] = [
  {
    name: "Business-First Approach",
    subtitle: "Built Around Your Goals",
    icon: Target,
    items: [
      "Automation aligned with business objectives",
      "Workflows designed around your processes",
      "Focus on measurable operational impact",
    ],
    cta: "Discover Our Approach",
  },
  {
    name: "Connected AI Ecosystem",
    subtitle: "Marketing, Sales & Support",
    icon: Network,
    items: [
      "Connect AI agents, CRM and communication channels",
      "Automate the complete customer journey",
      "Maintain smooth human handovers",
      "Manage everything through connected workflows",
    ],
    cta: "Explore AI Solutions",
    accent: true,
    badge: "BEST CHOICE",
  },
];

// Both cards preselect the AI & Technology division in the lead popup
const AI_TECH_SERVICE =
  "AI & Technology Solutions — AI training, automation, analytics";

/* ---------- Section ---------- */

export default function Process() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-[680px] text-center">
          <p className="inline-flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.14em] text-purple-500">
            <span className="size-1.5 rounded-full bg-purple-500" />
            Why Global Elite
          </p>
          <h2 className="mt-4 text-[clamp(30px,4vw,42px)] font-bold leading-[1.14] tracking-[-0.02em] text-navy">
            More than automation
            <br />a complete growth partner
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-relaxed text-slate">
            Three powerful advantages — combining AI technology, business
            strategy and continuous optimisation.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-14 grid max-w-[880px] grid-cols-1 gap-5 md:grid-cols-2 md:items-center">
          {cards.map((card) =>
            card.accent ? (
              <div
                key={card.name}
                className="relative z-10 flex flex-col rounded-[22px] p-8 text-white shadow-[0_26px_40px_-8px_rgba(142,79,160,0.55)]"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #9c58ac 0%, #8b4a9e 46%, #763a90 100%)",
                }}
              >
                {card.badge && (
                  <span className="gradient-cta absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3.5 py-[6px] text-[10.5px] font-bold uppercase tracking-[0.05em] text-white shadow-[0_10px_10px_rgba(217,111,160,0.5)]">
                    {card.badge}
                  </span>
                )}

                <span className="grid size-[47px] place-items-center rounded-[13px] bg-white/15 text-white">
                  <card.icon className="size-[23px]" strokeWidth={1.8} />
                </span>

                <h3 className="mt-[46px] text-[22px] font-bold leading-tight">
                  {card.name}
                </h3>
                <p className="mt-1.5 text-[13px] font-bold uppercase leading-tight tracking-[0.04em] text-[#f2c66a]">
                  {card.subtitle}
                </p>

                <p className="mt-[22px] text-[12.5px] font-bold uppercase tracking-[0.03em]">
                  Why it matters
                </p>

                <ul className="mt-4 space-y-[13px]">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <ChevronRight
                        className="mt-[3px] size-[16px] shrink-0 text-white"
                        strokeWidth={2.25}
                      />
                      <span className="text-[14px] leading-[1.4] text-[#fbf3ff]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <LeadPopupButton
                  source={`Home page — Why Global Elite: ${card.name}`}
                  services={DIVISION_SERVICES}
                  defaultService={AI_TECH_SERVICE}
                  className="mt-[26px] flex h-[47px] w-full items-center justify-center rounded-[12px] bg-white text-[14px] font-bold text-purple-500 shadow-[0_12px_11px_rgba(0,0,0,0.22)] transition-colors hover:bg-purple-50"
                >
                  {card.cta}
                </LeadPopupButton>
              </div>
            ) : (
              <div
                key={card.name}
                className="relative flex flex-col rounded-[22px] border border-purple-100 bg-white p-8 shadow-[0_10px_15px_rgba(22,38,92,0.16)]"
              >
                <span className="grid size-[46px] place-items-center rounded-[13px] bg-purple-50 text-purple-500">
                  <card.icon className="size-[23px]" strokeWidth={1.8} />
                </span>

                <h3 className="mt-[46px] text-[22px] font-bold leading-tight text-navy">
                  {card.name}
                </h3>
                <p className="mt-1.5 text-[13px] font-bold uppercase leading-tight tracking-[0.04em] text-purple-500">
                  {card.subtitle}
                </p>

                <p className="mt-[22px] text-[12.5px] font-bold uppercase tracking-[0.03em] text-navy">
                  Why it matters
                </p>

                <ul className="mt-4 space-y-[13px]">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <ChevronRight
                        className="mt-[3px] size-[16px] shrink-0 text-navy"
                        strokeWidth={2.25}
                      />
                      <span className="text-[14px] leading-[1.4] text-[#33536b]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <LeadPopupButton
                  source={`Home page — Why Global Elite: ${card.name}`}
                  services={DIVISION_SERVICES}
                  defaultService={AI_TECH_SERVICE}
                  className="mt-[26px] flex h-[46.5px] w-full items-center justify-center rounded-[12px] border-[1.5px] border-purple-500 bg-white text-[14px] font-bold text-purple-500 transition-colors hover:bg-purple-50"
                >
                  {card.cta}
                </LeadPopupButton>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
