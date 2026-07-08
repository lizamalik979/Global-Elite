import Image from "next/image";
import Header from "./Header";
import {
  ArrowRight,
  HeartHandshake,
  Headset,
  Star,
  Truck,
  Wrench,
} from "./icons";

const features = [
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
        <Header />

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
              <a
                href="#"
                className="flex h-[50px] items-center justify-center rounded-full border border-white/55 bg-white/15 px-8 text-[14.5px] font-bold tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/25"
              >
                View Demo
              </a>
              <a
                href="#"
                className="gradient-cta flex h-[50px] items-center gap-3 rounded-full py-1 pl-7 pr-[7px] text-[14.5px] font-bold tracking-wide text-white shadow-[0_16px_17px_rgba(0,0,0,0.35)]"
              >
                Get Started
                <span className="grid size-9 place-items-center rounded-full bg-navy">
                  <ArrowRight className="size-[18px]" />
                </span>
              </a>
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

          {/* Feature cards */}
          <div className="mx-auto mt-14 grid max-w-[1180px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col items-center rounded-[18px] bg-white px-6 pb-6 pt-8 text-center shadow-[0_22px_28px_rgba(8,20,54,0.28)]"
              >
                <span className="grid size-[58px] place-items-center rounded-2xl bg-gradient-to-br from-purple-50 to-[#efe1f8] text-purple-500">
                  {f.icon}
                </span>
                <h3 className="mt-5 text-[16.5px] font-bold text-navy">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-[1.55] text-slate">
                  {f.text}
                </p>
                <a
                  href="#"
                  className="mt-6 grid size-10 place-items-center rounded-[10px] border-[1.5px] border-purple-100 text-navy transition-colors hover:bg-purple-50"
                >
                  <ArrowRight className="size-[18px]" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
