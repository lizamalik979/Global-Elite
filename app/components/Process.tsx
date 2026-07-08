import type { ReactNode } from "react";

/* ---------- Inline lucide-style icons ---------- */

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

/* ---------- Card data ---------- */

type Card = {
  name: string;
  subtitle: string;
  icon: ReactNode;
  items: string[];
  cta: string;
  accent: boolean;
  badge: { label: string; tone: "gradient" | "navy" };
};

const cards: Card[] = [
  {
    name: "Basic Process",
    subtitle: "For Personal Documents",
    icon: <UserIcon className="size-[23px]" />,
    items: ["Notary Attestation", "SDM Attestation", "MEA Apostille"],
    cta: "Choose Basic",
    accent: false,
    badge: { label: "POPULAR PROCESS", tone: "gradient" },
  },
  {
    name: "Standard Process",
    subtitle: "For Personal Documents",
    icon: <UsersIcon className="size-[24px]" />,
    items: [
      "Notary Attestation",
      "District Magistrate",
      "Home Department Attestation",
      "MEA Apostille",
    ],
    cta: "Choose Standard",
    accent: true,
    badge: { label: "BEST PROCESS", tone: "gradient" },
  },
  {
    name: "Commercial Process",
    subtitle: "For Commercial Documents",
    icon: <BriefcaseIcon className="size-[23px]" />,
    items: ["Notary Attestation", "Chamber of Commerce", "MEA Apostille"],
    cta: "Choose Commercial",
    accent: false,
    badge: { label: "COMMERCIAL", tone: "navy" },
  },
];

/* ---------- Section ---------- */

export default function Process() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-[680px] text-center">
          <p className="inline-flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.14em] text-purple-500">
            <span className="size-1.5 rounded-full bg-purple-500" />
            Apostille Packages
          </p>
          <h2 className="mt-4 text-[clamp(30px,4vw,42px)] font-bold leading-[1.14] tracking-[-0.02em]">
            <span className="text-navy">Choose your </span>
            <span className="italic text-purple-500">apostille</span>{" "}
            <span className="text-navy">process</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-relaxed text-slate">
            Three clear pathways — each listing exactly which attestations are
            included.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-14 grid max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-3 md:items-center">
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
                {/* Badge */}
                <span className="gradient-cta absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3.5 py-[6px] text-[10.5px] font-bold uppercase tracking-[0.05em] text-white shadow-[0_10px_10px_rgba(217,111,160,0.5)]">
                  {card.badge.label}
                </span>

                {/* Icon */}
                <span className="grid size-[47px] place-items-center rounded-[13px] bg-white/15 text-white">
                  {card.icon}
                </span>

                <h3 className="mt-[46px] text-[19px] font-bold leading-tight">
                  {card.name}
                </h3>
                <p className="mt-1.5 text-[13px] font-bold leading-tight text-[#f2c66a]">
                  {card.subtitle}
                </p>

                <p className="mt-[22px] text-[12.5px] font-bold uppercase tracking-[0.03em]">
                  This process includes
                </p>

                <ul className="mt-4 space-y-[13px]">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <ChevronRight className="mt-[3px] size-[16px] shrink-0 text-white" />
                      <span className="text-[14px] leading-[1.4] text-[#fbf3ff]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="mt-[26px] flex h-[47px] w-full items-center justify-center rounded-[12px] bg-white text-[14px] font-bold text-purple-500 shadow-[0_12px_11px_rgba(0,0,0,0.22)] transition-colors hover:bg-purple-50"
                >
                  {card.cta}
                </button>
              </div>
            ) : (
              <div
                key={card.name}
                className="relative flex flex-col rounded-[22px] border border-purple-100 bg-white p-8 shadow-[0_10px_15px_rgba(22,38,92,0.16)]"
              >
                {/* Badge */}
                <span
                  className={
                    card.badge.tone === "navy"
                      ? "absolute right-5 top-[18px] whitespace-nowrap rounded-full bg-navy px-3 py-[5px] text-[10.5px] font-bold uppercase tracking-[0.04em] text-white"
                      : "gradient-cta absolute right-5 top-[18px] whitespace-nowrap rounded-full px-3 py-[5px] text-[10.5px] font-bold uppercase tracking-[0.04em] text-white"
                  }
                >
                  {card.badge.label}
                </span>

                {/* Icon */}
                <span className="grid size-[46px] place-items-center rounded-[13px] bg-purple-50 text-purple-500">
                  {card.icon}
                </span>

                <h3 className="mt-[46px] text-[19px] font-bold leading-tight text-navy">
                  {card.name}
                </h3>
                <p className="mt-1.5 text-[13px] font-bold leading-tight text-purple-500">
                  {card.subtitle}
                </p>

                <p className="mt-[22px] text-[12.5px] font-bold uppercase tracking-[0.03em] text-navy">
                  This process includes
                </p>

                <ul className="mt-4 space-y-[13px]">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <ChevronRight className="mt-[3px] size-[16px] shrink-0 text-navy" />
                      <span className="text-[14px] leading-[1.4] text-[#33536b]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="mt-[26px] flex h-[46.5px] w-full items-center justify-center rounded-[12px] border-[1.5px] border-purple-500 bg-white text-[14px] font-bold text-purple-500 transition-colors hover:bg-purple-50"
                >
                  {card.cta}
                </button>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
