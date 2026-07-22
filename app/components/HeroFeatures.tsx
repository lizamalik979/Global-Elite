"use client";

import LeadPopupButton from "./LeadPopup";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { ArrowRight, HeartHandshake, Headset, Truck, Wrench } from "./icons";

const features: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: <HeartHandshake className="size-7" />,
    title: "Dedicated Support",
    text: "A dedicated team works tirelessly to ensure every client query is promptly addressed and resolved.",
  },
  {
    icon: <Wrench className="size-7" />,
    title: "Quality Services",
    text: "We pride ourselves on delivering precise, compliant document services that earn lasting client loyalty.",
  },
  {
    icon: <Headset className="size-7" />,
    title: "24x7 Assistance",
    text: "Our support team is available around the clock — reach out anytime and we'll move your case forward.",
  },
  {
    icon: <Truck className="size-7" />,
    title: "Free Pickup-Delivery",
    text: "We offer free insured pickup and delivery for all clients across our New Delhi, Mumbai, Hyderabad & Vizag hubs.",
  },
];

export default function HeroFeatures() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  // Track which card is centred so the dots stay in sync (mobile slider only).
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
    <div className="mx-auto mt-14 max-w-[1180px]">
      {/* Cards: horizontal snap-slider on mobile, grid from sm up */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4"
      >
        {features.map((f) => (
          <div
            key={f.title}
            className="flex w-[82%] shrink-0 snap-center flex-col items-center rounded-[18px] bg-white px-6 pb-6 pt-8 text-center sm:w-auto sm:shrink"
          >
            <span className="grid size-[58px] place-items-center rounded-2xl bg-gradient-to-br from-purple-50 to-[#efe1f8] text-purple-500">
              {f.icon}
            </span>
            <h3 className="mt-5 text-[16.5px] font-bold text-navy">{f.title}</h3>
            <p className="mt-2.5 text-[13.5px] leading-[1.55] text-slate">
              {f.text}
            </p>
            <LeadPopupButton
              source={`Home page — ${f.title} card`}
              className="mt-6 grid size-10 place-items-center rounded-[10px] border-[1.5px] border-purple-100 text-navy transition-colors hover:bg-purple-50"
            >
              <ArrowRight className="size-[18px]" />
            </LeadPopupButton>
          </div>
        ))}
      </div>

      {/* Dots — mobile only */}
      <div className="mt-5 flex items-center justify-center gap-2 sm:hidden">
        {features.map((f, i) => (
          <button
            key={f.title}
            type="button"
            aria-label={`Go to ${f.title}`}
            aria-current={i === activeDot}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeDot ? "w-6 bg-white" : "w-2 bg-white/45"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
