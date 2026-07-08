import Image from "next/image";
import type { ReactNode } from "react";

/* ---- serif face for the big percentages (Playfair Display in the design) ---- */
const serif = { fontFamily: 'Georgia, "Times New Roman", serif' };

/* ---- inline lucide-style icons (24x24, stroke = currentColor) ---- */
const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden {...stroke}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden {...stroke}>
      <path d="M10 17h4V5H2v12h3" />
      <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h2" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden {...stroke}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function CourierIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden {...stroke}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function BadgeCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden {...stroke}>
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/* ---- data ---- */
type Country = {
  flag: string;
  pct: string;
  name: string;
  desc: string;
  dark?: boolean;
};

const countries: Country[] = [
  {
    flag: "🇦🇪",
    pct: "89",
    name: "United Arab Emirates",
    desc: "Validating documents for legal recognition and acceptance within the UAE.",
  },
  {
    flag: "🇰🇷",
    pct: "73",
    name: "South Korea",
    desc: "Validating educational and personal records for study and employment.",
    dark: true,
  },
  {
    flag: "🇸🇦",
    pct: "92",
    name: "Saudi Arabia",
    desc: "Establishing the authenticity and legality of documents within the Kingdom.",
  },
];

type Step = { num: string; icon: ReactNode; title: string; desc: string };

const steps: Step[] = [
  {
    num: "01",
    icon: <PhoneIcon />,
    title: "Get Information by Email or Call",
    desc: "Reach our team by email or phone to get a fixed quote and the exact checklist for your documents.",
  },
  {
    num: "02",
    icon: <TruckIcon />,
    title: "Free Pickup & Delivery",
    desc: "We arrange free insured pickup of your originals and return them safely once the process completes.",
  },
  {
    num: "03",
    icon: <ActivityIcon />,
    title: "Process Status Tracking",
    desc: "Our platform monitors each checkpoint in real time, so you always know exactly where your file stands.",
  },
  {
    num: "04",
    icon: <CourierIcon />,
    title: "Courier Status Tracking",
    desc: "A live courier reference shows the final leg — right up to the moment your documents reach your door.",
  },
];

const purpleCard =
  "linear-gradient(135deg, #9955ac 0%, #824da2 50%, #6a4596 100%)";
const badgeGrad =
  "linear-gradient(135deg, #e59645 0%, #d16fa1 50%, #9661b4 100%)";

export default function Countries() {
  return (
    <section className="bg-[#f6f4fb] py-16 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="mx-auto max-w-[1180px]">
          {/* ============ Block A — Popular countries ============ */}
          <div className="grid items-stretch gap-10 lg:grid-cols-[1.27fr_1fr]">
            {/* Left: heading + stat cards */}
            <div>
              <p className="text-[12.5px] font-bold uppercase tracking-[1.75px] text-purple-500">
                • Popular Countries
              </p>
              <h2 className="mt-3 max-w-[640px] text-[30px] font-bold leading-[1.14] tracking-[-0.015em] text-navy sm:text-[38px]">
                Most popular countries where{" "}
                <span className="italic text-purple-500">
                  apostille &amp; attestation
                </span>{" "}
                is required
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {countries.map((c) => (
                  <div
                    key={c.name}
                    className="relative overflow-hidden rounded-[18px] p-[22px]"
                    style={
                      c.dark
                        ? {
                            backgroundColor: "#181436",
                            boxShadow: "0 18px 20px rgba(24,20,54,0.6)",
                          }
                        : {
                            backgroundImage: purpleCard,
                            boxShadow: "0 18px 20px rgba(142,79,160,0.55)",
                          }
                    }
                  >
                    <div className="flex h-[34px] w-[46px] items-center justify-center rounded-[7px] bg-white text-[20px] leading-none">
                      <span>{c.flag}</span>
                    </div>
                    <p
                      className="mt-4 text-[34px] font-bold leading-none text-white"
                      style={serif}
                    >
                      {c.pct}
                      <span className="align-super text-[18px]">%</span>
                    </p>
                    <p className="mt-[7px] text-[14px] font-bold text-white">
                      {c.name}
                    </p>
                    <p
                      className={`mt-2 text-[12.5px] leading-[1.5] ${
                        c.dark ? "text-[#b9b4cf]" : "text-[#e7d3f0]"
                      }`}
                    >
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: globe card */}
            <div className="relative flex min-h-[340px] items-start justify-center overflow-hidden rounded-[22px] bg-white pt-[52px] shadow-[0_20px_48px_-24px_rgba(22,38,92,0.45)]">
              <Image
                src="/assets/ctry-globe.png"
                alt="World globe highlighting Asia and surrounding regions"
                width={250}
                height={250}
                className="h-auto w-[250px] max-w-[62%]"
              />
              <div className="absolute bottom-[18px] left-[18px] flex items-center gap-3 rounded-[13px] bg-white/95 px-4 py-[10px] shadow-[0_10px_24px_rgba(22,38,92,0.14)] ring-1 ring-purple-100">
                <span className="text-navy">
                  <BadgeCheckIcon />
                </span>
                <div className="leading-tight">
                  <p className="text-[13.5px] font-bold text-navy">
                    120+ destinations
                  </p>
                  <p className="text-[11.5px] font-medium text-slate">
                    Apostille &amp; consular ready
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ============ Block B — How it works ============ */}
          <div className="mt-20 lg:mt-28">
            <div className="text-center">
              <p className="text-[12.5px] font-bold uppercase tracking-[1.75px] text-purple-500">
                • How It Works
              </p>
              <h2 className="mt-3 text-[28px] font-bold leading-[1.14] tracking-[-0.015em] text-navy sm:text-[34px]">
                From first call to final{" "}
                <span className="italic text-purple-500">delivery</span>
              </h2>
            </div>

            <div className="relative mt-14">
              {/* connecting line behind the number badges (desktop only) */}
              <div
                className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[22px] hidden border-t-2 border-dashed border-[#dcc9e8] lg:block"
                aria-hidden
              />

              <div className="grid grid-cols-1 gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((s) => (
                  <div key={s.num} className="relative flex flex-col items-center">
                    <div
                      className="relative z-10 flex size-[46px] items-center justify-center rounded-full text-[15px] font-bold text-white"
                      style={{
                        backgroundImage: badgeGrad,
                        boxShadow: "0 10px 11px rgba(142,79,160,0.6)",
                      }}
                    >
                      {s.num}
                    </div>
                    <div className="mt-[22px] flex w-full flex-col items-center rounded-[18px] border border-purple-100 bg-white px-5 pb-7 pt-6 text-center shadow-[0_12px_15px_rgba(22,38,92,0.2)]">
                      <span className="grid size-[50px] place-items-center rounded-[14px] bg-gradient-to-br from-[#f3ebf9] to-[#ecdef5] text-navy">
                        {s.icon}
                      </span>
                      <h3 className="mt-4 text-[16px] font-bold leading-[1.2] text-navy">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-[1.55] text-slate">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
