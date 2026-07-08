import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = (props: IconProps) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

function Globe(p: IconProps) {
  return (
    <svg {...stroke(p)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.4 3.8 5.6 3.8 9s-1.3 6.6-3.8 9c-2.5-2.4-3.8-5.6-3.8-9S9.5 5.4 12 3Z" />
    </svg>
  );
}

function BarChart(p: IconProps) {
  return (
    <svg {...stroke(p)}>
      <path d="M4 20V10" />
      <path d="M10 20V4" />
      <path d="M16 20v-7" />
      <path d="M22 20H2" />
    </svg>
  );
}

function Zap(p: IconProps) {
  return (
    <svg {...stroke(p)}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}

function Star(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2.5l2.7 5.9 6.4.6-4.8 4.3 1.4 6.3L12 16.9 6.3 19.6l1.4-6.3L2.9 9l6.4-.6L12 2.5Z" />
    </svg>
  );
}

const AV = {
  navy: "linear-gradient(135deg,#33468a,#16265c)",
  purple: "linear-gradient(135deg,#a869c0,#8e4fa0)",
  pink: "linear-gradient(135deg,#c880d0,#a15bb0)",
  gold: "linear-gradient(135deg,#f2bd54,#e0912f)",
};

function Avatars({ colors }: { colors: string[] }) {
  return (
    <div className="flex">
      {colors.map((c, i) => (
        <span
          key={i}
          className={`size-[30px] rounded-full border-2 border-white ${
            i > 0 ? "-ml-[10px]" : ""
          }`}
          style={{ backgroundImage: c }}
        />
      ))}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1180px] px-6 py-20 lg:px-10 lg:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-purple-500">
            • Why Global Elite
          </p>
          <h2 className="mt-4 text-[28px] font-bold leading-[1.14] tracking-[-0.015em] text-navy sm:text-[34px] lg:text-[42px]">
            An MEA-registered partner{" "}
            <span className="italic text-purple-500">legalizing</span> documents
            for the entire world
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 flex flex-col gap-[18px] lg:grid lg:h-[300px] lg:grid-cols-[351fr_443fr_351fr]">
          {/* Card 1 — navy "120+" */}
          <div
            className="flex h-full flex-col justify-between gap-8 overflow-hidden rounded-[22px] p-[26px] text-white shadow-[0_22px_30px_rgba(22,38,92,0.35)]"
            style={{
              backgroundImage:
                "linear-gradient(150deg,#1e2f68 0%,#16265c 55%,#101c48 100%)",
            }}
          >
            <div className="flex items-start justify-between">
              <span className="grid size-10 place-items-center rounded-[11px] bg-white/[0.12]">
                <Globe className="size-[21px]" />
              </span>
              <BarChart className="size-[18px] text-white/60" />
            </div>

            <div>
              <p className="text-[50px] font-bold leading-none tracking-[-0.02em]">
                120+
              </p>
              <p className="mt-3 text-[13.5px] font-medium leading-[1.5] text-[#b9c4e0]">
                Countries served with apostille &amp; consular attestation.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Avatars colors={[AV.navy, AV.purple, AV.gold]} />
              <span className="text-[11.5px] font-semibold text-[#9fb0d6]">
                Trusted worldwide
              </span>
            </div>
          </div>

          {/* Card 2 — white "99.7%" */}
          <div className="flex h-full flex-col rounded-[22px] border border-purple-100 bg-white p-[26px] shadow-[0_16px_28px_rgba(22,38,92,0.12)]">
            <p className="text-[12px] font-bold tracking-[0.04em] text-slate-light">
              Client satisfaction
            </p>
            <div className="mt-2 flex items-center gap-3">
              <span className="text-[50px] font-bold leading-none tracking-[-0.02em] text-navy">
                99.7%
              </span>
              <div className="mt-2 flex gap-[2px] text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-[15px]" />
                ))}
              </div>
            </div>

            <div className="mt-[18px] h-px w-full bg-[#f1ebf7]" />

            <div className="mt-[18px] flex items-center gap-4">
              <Avatars colors={[AV.navy, AV.purple, AV.pink, AV.gold]} />
              <span className="text-[11.5px] font-semibold text-slate-light">
                25,000+ verified cases
              </span>
            </div>

            <p className="mt-auto pt-[30px] text-[14.5px] font-medium leading-[1.55] text-[#33536b]">
              &ldquo;The whole legalization was transparent, fully tracked and
              finished ahead of schedule. Exactly what we needed.&rdquo;
            </p>
          </div>

          {/* Column 3 — orange "25K+" + dark "Same-day" */}
          <div className="flex h-full flex-col gap-[18px]">
            <div
              className="flex flex-col rounded-[22px] p-6 shadow-[0_18px_28px_rgba(224,139,46,0.32)] lg:h-[153px]"
              style={{
                backgroundImage:
                  "linear-gradient(135deg,#f4bd54 0%,#ec9a3a 55%,#e0872c 100%)",
              }}
            >
              <p className="text-[12px] font-bold tracking-[0.04em] text-[rgba(34,18,4,0.65)]">
                Documents legalized
              </p>
              <p className="mt-1.5 text-[42px] font-bold leading-none tracking-[-0.02em] text-[#221204]">
                25K+
              </p>
              <p className="mt-auto pt-4 text-[12.5px] font-semibold text-[rgba(34,18,4,0.7)]">
                Processed for clients across the globe.
              </p>
            </div>

            <div className="flex flex-col rounded-[22px] bg-[#181436] p-6 shadow-[0_18px_28px_rgba(24,20,54,0.4)] lg:h-[129px]">
              <span className="grid size-[38px] place-items-center rounded-[11px] bg-white/10">
                <Zap className="size-[19px] text-white" />
              </span>
              <div className="mt-auto pt-4 leading-[1.2]">
                <p className="text-[18px] font-bold text-white">Same-day</p>
                <p className="text-[18px] font-bold text-gold">MEA Dispatch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
