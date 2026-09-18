"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Building2, Check, Sprout, TrendingUp } from "lucide-react";
import LeadPopupButton, { DIVISION_SERVICES } from "./LeadPopup";

// Mobile slider: advance to the next plan every 4s until the visitor touches it
const AUTOPLAY_MS = 4000;
const MOBILE_QUERY = "(max-width: 1023px)";

/* ---------- data ---------- */

type Plan = {
  icon: LucideIcon;
  label: string;
  desc: string;
  price: string;
  unit: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    icon: Sprout,
    label: "AI Starter",
    desc: "For businesses beginning their automation journey.",
    price: "₹1,850",
    unit: "/ base",
    features: [
      "One primary AI use case",
      "Basic workflow setup",
      "Website or WhatsApp integration",
      "Standard reporting",
      "Initial team training",
    ],
    cta: "Start with AI",
  },
  {
    icon: TrendingUp,
    label: "AI Growth",
    desc: "For businesses ready to automate sales and customer engagement.",
    price: "₹3,450",
    unit: "/ all-in",
    features: [
      "Multiple AI workflows",
      "WhatsApp and CRM integration",
      "Lead qualification automation",
      "Automated follow-up journeys",
      "Performance dashboard",
      "Ongoing optimisation",
    ],
    cta: "Choose Growth",
    highlighted: true,
  },
  {
    icon: Building2,
    label: "AI Enterprise",
    desc: "For organisations requiring advanced, scalable automation.",
    price: "₹1,850",
    unit: "/ base",
    features: [
      "Custom AI agents",
      "Voice, WhatsApp and omnichannel automation",
      "Advanced system integrations",
      "Custom analytics and reporting",
      "Security and governance configuration",
      "Dedicated implementation support",
    ],
    cta: "Talk to an Expert",
  },
];

// Every plan preselects the AI & Technology division in the lead popup
const AI_TECH_SERVICE =
  "AI & Technology Solutions — AI training, automation, analytics";

/* ---------- cards ---------- */

function PlainCard({ plan }: { plan: Plan }) {
  return (
    <div className="flex h-full flex-col rounded-[22px] border border-purple-100 bg-white p-[30px] shadow-[0_10px_15px_rgba(22,38,92,0.16)]">
      {/* header */}
      <div className="flex items-center gap-3">
        <span className="grid size-[34px] place-items-center rounded-[9px] bg-purple-50 text-purple-500">
          <plan.icon className="size-[18px]" strokeWidth={2} />
        </span>
        <span className="text-[17px] font-bold tracking-[0.2px] text-purple-500">
          {plan.label}
        </span>
      </div>

      {/* description */}
      <p className="mt-[18px] min-h-[40px] text-[13.5px] leading-[1.5] text-slate">
        {plan.desc}
      </p>

      {/* price */}
      <div className="mt-4 flex items-end gap-1.5">
        <span className="text-[40px] font-bold leading-none tracking-[-0.02em] text-navy">
          {plan.price}
        </span>
        <span className="pb-1 text-[13.5px] font-semibold text-slate-light">
          {plan.unit}
        </span>
      </div>

      {/* divider */}
      <div className="mt-5 h-px w-full bg-[#f1ebf7]" />

      {/* features */}
      <ul className="mt-5 space-y-[13px]">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-[10px]">
            <span className="grid size-5 shrink-0 place-items-center rounded-full bg-purple-50 text-purple-500">
              <Check className="size-3" strokeWidth={3} />
            </span>
            <span className="text-[13.5px] leading-[1.4] text-[#33536b]">
              {f}
            </span>
          </li>
        ))}
      </ul>

      {/* cta */}
      <LeadPopupButton
        source={`Home page — Pricing: ${plan.label}`}
        services={DIVISION_SERVICES}
        defaultService={AI_TECH_SERVICE}
        className="mt-6 flex h-[46.5px] items-center justify-center rounded-[12px] border-[1.5px] border-purple-500 text-[14px] font-bold text-purple-500 transition-colors hover:bg-purple-50"
      >
        {plan.cta}
      </LeadPopupButton>
    </div>
  );
}

function HighlightedCard({ plan }: { plan: Plan }) {
  return (
    <div
      className="relative flex h-full flex-col rounded-[22px] p-[10px] shadow-[0_30px_30px_rgba(142,79,160,0.5)] lg:scale-[1.035]"
      style={{
        backgroundImage:
          "linear-gradient(160deg, #9d51a6 0%, #7d3f95 50%, #6a3487 100%)",
      }}
    >
      {/* Most Popular badge */}
      <span className="gradient-cta absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full px-4 py-[6px] text-[11px] font-bold tracking-[0.55px] text-white shadow-[0_10px_10px_rgba(217,111,160,0.6)]">
        MOST POPULAR
      </span>

      {/* header */}
      <div className="flex items-center gap-3 px-[18px] pb-3 pt-[18px]">
        <span className="grid size-[35px] place-items-center rounded-[9px] bg-white/[0.16] text-white">
          <plan.icon className="size-[18px]" strokeWidth={2} />
        </span>
        <span className="text-[17px] font-bold tracking-[0.2px] text-[#f2c66a]">
          {plan.label}
        </span>
      </div>

      {/* inner panel */}
      <div className="flex flex-1 flex-col rounded-[18px] bg-white/[0.07] p-[25px]">
        <p className="min-h-[40px] text-[13.5px] leading-[1.5] text-[#ecd9f3]">
          {plan.desc}
        </p>

        <div className="mt-4 flex items-end gap-1.5">
          <span className="text-[40px] font-bold leading-none tracking-[-0.02em] text-white">
            {plan.price}
          </span>
          <span className="pb-1 text-[13.5px] font-semibold text-[#ecd9f3]">
            {plan.unit}
          </span>
        </div>

        <div className="mt-5 h-px w-full bg-white/20" />

        <ul className="mt-5 space-y-[13px]">
          {plan.features.map((f) => (
            <li key={f} className="flex items-center gap-[10px]">
              <span className="grid size-[20.8px] shrink-0 place-items-center rounded-full bg-white/[0.18] text-white">
                <Check className="size-3" strokeWidth={3} />
              </span>
              <span className="text-[13.5px] leading-[1.4] text-[#fbf3ff]">
                {f}
              </span>
            </li>
          ))}
        </ul>

        <LeadPopupButton
          source={`Home page — Pricing: ${plan.label}`}
          services={DIVISION_SERVICES}
          defaultService={AI_TECH_SERVICE}
          className="mt-6 flex h-[47px] w-full items-center justify-center rounded-[12px] bg-white text-[14px] font-bold text-purple-500 shadow-[0_12px_11px_rgba(0,0,0,0.3)] transition-colors hover:bg-purple-50"
        >
          {plan.cta}
        </LeadPopupButton>
      </div>
    </div>
  );
}

/* ---------- section ---------- */

export default function Pricing() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [paused, setPaused] = useState(false);

  // Mobile slider only: track which card is centred so the dots stay in sync.
  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let min = Infinity;
    cards.forEach((c, i) => {
      const cardCenter = c.offsetLeft + c.offsetWidth / 2;
      const d = Math.abs(cardCenter - center);
      if (d < min) {
        min = d;
        closest = i;
      }
    });
    setActiveDot(closest);
  };

  useEffect(() => {
    onScroll();
  }, []);

  const goTo = useCallback((i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement | undefined;
    if (card) {
      el.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    }
  }, []);

  // Auto-advance on mobile; stops for good once the visitor interacts.
  useEffect(() => {
    if (paused) return;
    const mq = window.matchMedia(MOBILE_QUERY);
    if (!mq.matches) return;
    const id = setInterval(() => {
      goTo((activeDot + 1) % plans.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [activeDot, paused, goTo]);

  const stopAutoplay = () => setPaused(true);

  return (
    <section className="bg-[#f6f4fb] py-16 md:py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* heading block */}
        <div className="mx-auto max-w-[680px] text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-[1.75px] text-purple-500">
            <span className="mr-1.5">•</span>PRICING
          </p>
          <h2 className="mt-3 text-[clamp(30px,4vw,42px)] font-bold leading-[1.12] tracking-[-0.02em] text-navy">
            Flexible engagement models built for every growth stage
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.55] text-slate">
            Transparent fixed pricing with colour-coded tracking at every
            checkpoint.
          </p>
        </div>

        {/* cards — snap-slider on mobile/tablet, 3-col grid from lg.
            pt-4 keeps the "Most Popular" badge inside the scroll box. */}
        <div
          ref={trackRef}
          onScroll={onScroll}
          onTouchStart={stopAutoplay}
          onPointerDown={stopAutoplay}
          className="mx-auto mt-10 flex max-w-[1180px] snap-x snap-mandatory gap-6 overflow-x-auto pb-2 pt-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:grid lg:snap-none lg:grid-cols-3 lg:items-center lg:overflow-visible lg:pb-0"
        >
          {plans.map((plan) => (
            <div
              key={plan.label}
              className="w-[86%] shrink-0 snap-center lg:w-auto lg:shrink"
            >
              {plan.highlighted ? (
                <HighlightedCard plan={plan} />
              ) : (
                <PlainCard plan={plan} />
              )}
            </div>
          ))}
        </div>

        {/* dots — mobile/tablet only */}
        <div className="mt-6 flex items-center justify-center gap-2 lg:hidden">
          {plans.map((plan, i) => (
            <button
              key={plan.label}
              type="button"
              aria-label={`Go to ${plan.label}`}
              aria-current={i === activeDot}
              onClick={() => {
                stopAutoplay();
                goTo(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeDot ? "w-6 bg-purple-500" : "w-2 bg-purple-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
