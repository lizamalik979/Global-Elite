import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Inline lucide-style icons (own SVGs — not imported from ./icons)    */
/* ------------------------------------------------------------------ */

type IconProps = { className?: string; strokeWidth?: number };

function Check({ className, strokeWidth = 3 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function Clock({ className, strokeWidth = 2.2 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

function Award({ className, strokeWidth = 2 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  );
}

function Landmark({ className, strokeWidth = 2 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="3" x2="21" y1="22" y2="22" />
      <line x1="6" x2="6" y1="18" y2="11" />
      <line x1="10" x2="10" y1="18" y2="11" />
      <line x1="14" x2="14" y1="18" y2="11" />
      <line x1="18" x2="18" y1="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </svg>
  );
}

function Languages({ className, strokeWidth = 2 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
    </svg>
  );
}

function ShieldCheck({ className, strokeWidth = 2 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Card shell                                                          */
/* ------------------------------------------------------------------ */

function Card({
  mockup,
  mockupHeight,
  title,
  desc,
}: {
  mockup: ReactNode;
  mockupHeight: string;
  title: string;
  desc: string;
}) {
  return (
    <article className="flex flex-col rounded-[24px] border border-purple-100 bg-[#f7f3fa] p-5 shadow-[0_12px_17px_rgba(22,38,92,0.2)] sm:p-[30px]">
      <div
        className={`flex ${mockupHeight} items-center justify-center`}
      >
        {mockup}
      </div>
      <h3 className="mt-6 text-center text-[20px] font-bold leading-tight text-navy">
        {title}
      </h3>
      <p className="mx-auto mt-2.5 max-w-[390px] text-center text-[14px] leading-[1.55] text-slate">
        {desc}
      </p>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Mockup 1 — Real-time tracking                                       */
/* ------------------------------------------------------------------ */

function TrackingMockup() {
  const done = ["Doorstep pickup", "State HRD routing"];
  return (
    <div className="w-full max-w-[280px] rounded-[16px] bg-white p-[18px] shadow-[0_24px_24px_rgba(22,38,92,0.4)]">
      <div className="flex items-center justify-between">
        <span className="text-[12px] font-bold text-navy">Live tracking</span>
        <span className="rounded-full bg-purple-500 px-2 py-[3px] text-[9.5px] font-bold text-white">
          In transit
        </span>
      </div>

      <div className="mt-[14px] flex flex-col gap-[9px]">
        {done.map((label) => (
          <div
            key={label}
            className="flex h-9 items-center gap-3 rounded-full bg-[#f7f3fa] px-3"
          >
            <span className="grid size-5 shrink-0 place-items-center rounded-full bg-purple-500 text-white">
              <Check className="size-3" />
            </span>
            <span className="text-[11.5px] font-bold text-navy">{label}</span>
            <span className="ml-auto text-[9px] font-bold text-purple-500">
              Done
            </span>
          </div>
        ))}

        <div className="flex h-[39px] items-center gap-3 rounded-full border-[1.5px] border-purple-500 bg-white px-3">
          <span className="grid size-5 shrink-0 place-items-center rounded-full bg-navy text-white">
            <Clock className="size-[11px]" />
          </span>
          <span className="text-[11.5px] font-bold text-navy">
            MEA Apostille desk
          </span>
          <span className="ml-auto rounded-full bg-navy px-[7px] py-[2px] text-[9px] font-bold text-white">
            Now
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Mockup 2 — Transparent pricing                                      */
/* ------------------------------------------------------------------ */

function PricingMockup() {
  const rows = [
    { icon: <Award className="size-[11px]" />, label: "Apostille", price: "₹3,450" },
    { icon: <Landmark className="size-[11px]" />, label: "Attestation", price: "₹1,150" },
    { icon: <Languages className="size-[11px]" />, label: "Translation", price: "₹300" },
  ];
  return (
    <div className="w-full max-w-[260px] rounded-[16px] bg-white p-5 shadow-[0_24px_24px_rgba(22,38,92,0.4)]">
      <p className="text-[11px] font-bold text-slate-light">Order total</p>
      <div className="mt-1 flex items-end gap-1.5">
        <span className="text-[30px] font-bold leading-none text-navy">
          ₹4,900
        </span>
        <span className="text-[12px] font-semibold text-slate-light">
          all-in
        </span>
      </div>

      <div className="mt-[14px] h-[7px] w-full overflow-hidden rounded-full bg-[#eef2f7]">
        <div
          className="h-full rounded-full"
          style={{
            width: "68%",
            backgroundImage:
              "linear-gradient(90deg,#8f50a0 0%,#d16fa0 100%)",
          }}
        />
      </div>

      <div className="mt-4 flex flex-col gap-[10px]">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center">
            <span className="grid size-[18px] shrink-0 place-items-center rounded-[6px] bg-purple-50 text-purple-500">
              {r.icon}
            </span>
            <span className="ml-[9px] text-[11.5px] font-semibold text-[#33536b]">
              {r.label}
            </span>
            <span className="ml-auto text-[11.5px] font-bold text-navy">
              {r.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Mockup 3 — Verified at every step                                   */
/* ------------------------------------------------------------------ */

function VerifiedMockup() {
  const bars = [
    { h: 24, c: "#f2eaf8" },
    { h: 36, c: "#e7d6f1" },
    { h: 29, c: "#f2eaf8" },
    { h: 47, c: "#e7d6f1" },
    { h: 63, c: "#8e4fa0" },
  ];
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-[137px] w-[150px] flex-col rounded-[16px] bg-white p-4 shadow-[0_24px_24px_rgba(22,38,92,0.4)]">
        <p className="text-[12px] font-bold leading-[1.2] text-navy">
          Verified
          <br />
          every step
        </p>
        <div className="mt-auto flex h-16 items-end gap-[5px]">
          {bars.map((b, i) => (
            <div
              key={i}
              className="w-[19px] rounded-[4px]"
              style={{ height: `${b.h}px`, backgroundColor: b.c }}
            />
          ))}
        </div>
      </div>

      <div className="flex h-[137px] w-[118px] flex-col rounded-[16px] bg-[#181436] p-4 shadow-[0_24px_24px_rgba(24,20,54,0.55)]">
        <span className="grid size-[30px] shrink-0 place-items-center rounded-[9px] bg-purple-500 text-white">
          <ShieldCheck className="size-[17px]" />
        </span>
        <span className="mt-auto text-[11.5px] font-bold leading-[1.3] text-white">
          Genuine seal &amp; sticker check
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Mockup 4 — Global consular network                                  */
/* ------------------------------------------------------------------ */

function NetworkPill({
  avatar,
  label,
  className,
}: {
  avatar: string;
  label: string;
  className: string;
}) {
  return (
    <div
      className={`absolute flex h-7 items-center gap-2 rounded-full bg-white pl-1.5 pr-3 shadow-[0_8px_9px_rgba(22,38,92,0.4)] ${className}`}
    >
      <span
        className="size-[18px] shrink-0 rounded-full"
        style={{ backgroundImage: avatar }}
      />
      <span className="whitespace-nowrap text-[10px] font-bold text-navy">
        {label}
      </span>
    </div>
  );
}

function NetworkMockup() {
  return (
    <div className="relative h-[172px] w-[240px]">
      <div className="absolute left-0 top-[18px] h-[154px] w-[240px] rounded-[50px] border-[1.5px] border-dashed border-[#d8c6e6]" />
      <div className="absolute left-[30px] top-[48px] h-[94px] w-[180px] rounded-[50px] border-[1.5px] border-dashed border-[#e3d6ee]" />

      <div className="absolute left-[94px] top-[60px] grid size-[52px] place-items-center rounded-full bg-navy text-white shadow-[0_10px_11px_rgba(22,38,92,0.7)]">
        <Landmark className="size-6" />
      </div>

      <NetworkPill
        avatar="linear-gradient(150deg,#eb9a5c 0%,#d97a80 100%)"
        label="UAE Embassy"
        className="left-[10px] top-[24px]"
      />
      <NetworkPill
        avatar="linear-gradient(150deg,#7f55aa 0%,#674698 100%)"
        label="Germany"
        className="left-[148px] top-[69px]"
      />
      <NetworkPill
        avatar="linear-gradient(150deg,#c268a2 0%,#9f57a0 100%)"
        label="Canada"
        className="left-[34px] top-[141px]"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export default function GlobalReach() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="mx-auto max-w-[1180px]">
          {/* Header */}
          <div className="mx-auto max-w-[680px] text-center">
            <p className="flex items-center justify-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.14em] text-purple-500">
              <span className="size-[5px] rounded-full bg-purple-500" />
              Expertise
            </p>
            <h2 className="mt-4 text-[clamp(30px,4.4vw,42px)] font-bold leading-[1.14] tracking-[-0.015em] text-navy">
              Where compliance meets{" "}
              <span className="italic text-purple-500">global reach</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-[16px] leading-[1.55] text-slate">
              A technology-backed process that keeps every document visible,
              verified and on time.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 gap-[22px] lg:grid-cols-2">
            <Card
              mockup={<TrackingMockup />}
              mockupHeight="h-[233px]"
              title="Real-time tracking"
              desc="Follow every checkpoint — pickup, state routing, ministry desk and return courier — from a single live reference."
            />
            <Card
              mockup={<PricingMockup />}
              mockupHeight="h-[240px]"
              title="Transparent pricing"
              desc="Fixed, itemised quotes up front. Every rupee accounted for — no surprise charges at handover."
            />
            <Card
              mockup={<VerifiedMockup />}
              mockupHeight="h-[173px]"
              title="Verified at every step"
              desc="Each seal and sticker is validated against the official registry before your documents move forward."
            />
            <Card
              mockup={<NetworkMockup />}
              mockupHeight="h-[208px]"
              title="Global consular network"
              desc="Direct desk relationships across 120+ embassies and ministries keep your case moving on the ground."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
