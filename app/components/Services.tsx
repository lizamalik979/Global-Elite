"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  Code,
  Filter,
  Headset,
  Megaphone,
  PhoneCall,
  Workflow,
} from "lucide-react";
import LeadPopupButton, { DIVISION_SERVICES } from "./LeadPopup";

type ServiceCard = {
  icon: LucideIcon;
  title: string;
  text: string;
};

// Every card preselects the AI & Technology division in the lead popup
const AI_TECH_SERVICE =
  "AI & Technology Solutions — AI training, automation, analytics";

const services: ServiceCard[] = [
  {
    icon: Filter,
    title: "AI Lead Qualification",
    text: "Capture, score and route leads based on intent, profile and engagement.",
  },
  {
    icon: Megaphone,
    title: "WhatsApp Marketing Automation",
    text: "Run personalised campaigns, automated follow-ups and customer journeys on WhatsApp.",
  },
  {
    icon: PhoneCall,
    title: "AI Voice Automation",
    text: "Automate lead qualification, reminders, confirmations, surveys and support calls.",
  },
  {
    icon: Workflow,
    title: "CRM and Workflow Automation",
    text: "Synchronise customer information and automate repetitive sales and operational tasks.",
  },
  {
    icon: Headset,
    title: "Customer Support Automation",
    text: "Answer frequently asked questions, create support tickets and escalate important cases.",
  },
  {
    icon: Code,
    title: "Custom AI Development",
    text: "Build AI-powered tools and integrations suited to your company's unique requirements.",
  },
];

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

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

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement | undefined;
    if (card) {
      el.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    }
  };

  return (
    <section id="solutions" className="scroll-mt-24 py-16 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-[700px] text-center">
          <p className="text-[12.5px] font-bold tracking-[1.75px] text-purple-500">
            • SERVICES
          </p>
          <h2 className="mt-4 text-[clamp(30px,3.6vw,42px)] font-bold leading-[1.12] tracking-[-0.63px] text-navy">
            Comprehensive AI automation and{" "}
            <span className="text-purple-500">technology</span> services
          </h2>
          <p className="mx-auto mt-4 max-w-[648px] text-[16px] leading-[1.55] text-slate">
            Practical solutions designed to reduce manual work, improve response
            times and help teams convert more opportunities.
          </p>
          <div className="mt-8 flex justify-center">
            <LeadPopupButton
              source="Home page — Services section Get Started"
              services={DIVISION_SERVICES}
              defaultService={AI_TECH_SERVICE}
              className="gradient-cta inline-flex h-11 items-center gap-3 rounded-full py-1 pl-6 pr-[7px] text-[13.5px] font-bold tracking-[0.27px] text-white shadow-[0_12px_13px_rgba(142,79,160,0.5)]"
            >
              GET STARTED
              <span className="grid size-[30px] place-items-center rounded-full bg-navy text-white">
                <ArrowUpRight className="size-4" strokeWidth={2.2} />
              </span>
            </LeadPopupButton>
          </div>
        </div>

        {/* Cards — snap-slider on mobile, 2-up from sm, 4 + 2 centred from lg */}
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="mx-auto mt-14 flex max-w-[1180px] snap-x snap-mandatory gap-[18px] overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:justify-center sm:snap-none sm:overflow-visible sm:pb-0"
        >
          {services.map((s) => (
            <div
              key={s.title}
              className="flex min-h-[240px] w-[86%] shrink-0 snap-center flex-col rounded-[20px] border border-purple-100 bg-white p-[26px] shadow-[0_16px_28px_rgba(22,38,92,0.06)] sm:w-[calc(50%-9px)] lg:w-[calc(25%-13.5px)]"
            >
              <span className="grid size-[46px] place-items-center rounded-[13px] bg-gradient-to-br from-purple-50 to-[#efe1f8] text-navy">
                <s.icon className="size-[22px]" strokeWidth={1.8} />
              </span>
              <h3 className="mt-[18px] text-[17px] font-bold leading-[1.2] text-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.5] text-slate">
                {s.text}
              </p>
              <LeadPopupButton
                source={`Home page — ${s.title} learn more`}
                services={DIVISION_SERVICES}
                defaultService={AI_TECH_SERVICE}
                className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-bold text-purple-500 lg:mt-auto"
              >
                Learn more
                <ArrowRight className="size-[15px]" strokeWidth={2.2} />
              </LeadPopupButton>
            </div>
          ))}
        </div>

        {/* Dots — mobile only */}
        <div className="mt-6 flex items-center justify-center gap-2 sm:hidden">
          {services.map((s, i) => (
            <button
              key={s.title}
              type="button"
              aria-label={`Go to ${s.title}`}
              aria-current={i === activeDot}
              onClick={() => goTo(i)}
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
