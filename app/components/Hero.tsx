import Image from "next/image";
import { ArrowRight, Star } from "./icons";
import HeroFeatures from "./HeroFeatures";
import LeadPopupButton from "./LeadPopup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-b-[48px]">
      {/* Background gradient */}
      <Image
        src="/assets/hero-bg.png"
        alt=""
        fill
        priority
        className="pointer-events-none object-cover object-top"
      />

      <div className="relative">
        <div className="mx-auto max-w-[1320px] px-6 pb-16 pt-12 lg:px-10">
          {/* Headline */}
          <div className="mx-auto max-w-[920px] text-center">
            <h1 className="text-[clamp(30px,6.4vw,68px)] font-extrabold leading-[1.04] tracking-[-0.035em]">
              <span className="text-white">Legalizing your documents</span>
              <br />
              <span className="text-white/55">for the entire world</span>
            </h1>

            <p className="mx-auto mt-6 max-w-[570px] text-[17px] font-medium leading-relaxed text-white/90">
              We apostille, attest and translate your certificates —
              MEA-registered, fully tracked, and delivered to 120+ countries.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <LeadPopupButton
                source="Home page — View Demo"
                className="flex h-[50px] items-center justify-center rounded-full border border-white/55 bg-white/15 px-8 text-[14.5px] font-bold tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/25"
              >
                View Demo
              </LeadPopupButton>
              <LeadPopupButton
                source="Home page — Get Started (hero)"
                className="gradient-cta flex h-[50px] items-center gap-3 rounded-full py-1 pl-7 pr-[7px] text-[14.5px] font-bold tracking-wide text-white shadow-[0_16px_17px_rgba(0,0,0,0.35)]"
              >
                Get Started
                <span className="grid size-9 place-items-center rounded-full bg-navy">
                  <ArrowRight className="size-[18px]" />
                </span>
              </LeadPopupButton>
            </div>

            {/* Rating */}
            <div className="mt-10">
              <p className="text-[15px] font-bold text-white">
                Rated 4.9/5 by 25,000+ clients
              </p>
              <div className="mt-2 flex items-center justify-center gap-1.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-[17px]" />
                ))}
              </div>
            </div>
          </div>

          {/* Feature cards — slider on mobile, grid on desktop */}
          <HeroFeatures />
        </div>
      </div>
    </section>
  );
}
