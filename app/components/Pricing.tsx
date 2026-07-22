import LeadPopupButton, { DOCUMENT_SERVICES } from "./LeadPopup";
import type { ReactNode, SVGProps } from "react";

/* ---------- lucide-style inline icons ---------- */

function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function FileCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  );
}

function Stamp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 22h14" />
      <path d="M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z" />
      <path d="M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13" />
    </svg>
  );
}

function Building(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
    </svg>
  );
}

/* ---------- data ---------- */

type Plan = {
  icon: ReactNode;
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
    icon: <FileCheck className="size-[18px]" />,
    label: "STATE PRE-VERIFICATION",
    desc: "For documents needing HRD / SDM clearance before central attestation.",
    price: "₹1,850",
    unit: "/ base",
    features: [
      "Personal & educational validation",
      "Regional hub & Home Dept routing",
      "Secure domestic collection",
    ],
    cta: "Select Track",
  },
  {
    icon: <Stamp className="size-[19px]" />,
    label: "MEA APOSTILLE",
    desc: "All-inclusive Hague apostille — the complete door-to-ministry package.",
    price: "₹3,450",
    unit: "/ all-in",
    features: [
      "Direct Ministry desk submission",
      "e-Apostille sticker tracking",
      "Universal 120-country validity",
    ],
    cta: "Start Application",
    highlighted: true,
  },
  {
    icon: <Building className="size-[18px]" />,
    label: "EMBASSY ATTESTATION",
    desc: "For non-Hague destinations requiring consular legalization.",
    price: "₹4,250",
    unit: "+ actuals",
    features: [
      "Non-Hague (UAE, Saudi, Qatar)",
      "Chamber of Commerce verification",
      "Embassy desk courier tracking",
    ],
    cta: "Select Track",
  },
];

/* Map each plan to its "Service Required" dropdown option */
const PLAN_SERVICE: Record<string, string> = {
  "STATE PRE-VERIFICATION": "State Pre-Verification (HRD / SDM)",
  "MEA APOSTILLE": "MEA Apostille",
  "EMBASSY ATTESTATION": "Embassy Attestation",
};

/* ---------- cards ---------- */

function PlainCard({ plan }: { plan: Plan }) {
  return (
    <div className="flex h-full flex-col rounded-[22px] border border-purple-100 bg-white p-[30px] shadow-[0_10px_15px_rgba(22,38,92,0.16)]">
      {/* header */}
      <div className="flex items-center gap-3">
        <span className="grid size-[34px] place-items-center rounded-[9px] bg-purple-50 text-purple-500">
          {plan.icon}
        </span>
        <span className="text-[11.5px] font-bold uppercase tracking-[0.92px] text-purple-500">
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
              <Check className="size-3" />
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
        services={DOCUMENT_SERVICES}
        defaultService={PLAN_SERVICE[plan.label]}
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
          {plan.icon}
        </span>
        <span className="text-[11.5px] font-bold uppercase tracking-[0.92px] text-[#f2c66a]">
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
                <Check className="size-3" />
              </span>
              <span className="text-[13.5px] leading-[1.4] text-[#fbf3ff]">
                {f}
              </span>
            </li>
          ))}
        </ul>

        <LeadPopupButton
          source={`Home page — Pricing: ${plan.label}`}
          services={DOCUMENT_SERVICES}
          defaultService={PLAN_SERVICE[plan.label]}
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
  return (
    <section className="bg-[#f6f4fb] py-16 md:py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* heading block */}
        <div className="mx-auto max-w-[680px] text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-[1.75px] text-purple-500">
            <span className="mr-1.5">•</span>PRICING
          </p>
          <h2 className="mt-3 text-[clamp(30px,4vw,42px)] font-bold leading-[1.12] tracking-[-0.02em] text-navy">
            Flexible plans built for{" "}
            <span className="italic text-purple-500">every journey</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.55] text-slate">
            Transparent fixed pricing with colour-coded tracking at every
            checkpoint.
          </p>

          <div className="mt-7 flex justify-center">
            <LeadPopupButton
              source="Home page — Pricing section Get Started"
              services={DOCUMENT_SERVICES}
              className="gradient-cta inline-flex items-center gap-3 rounded-full py-[6px] pl-6 pr-[6px] text-[13.5px] font-bold tracking-[0.27px] text-white shadow-[0_12px_13px_rgba(142,79,160,0.5)]"
            >
              GET STARTED
              <span className="grid size-[30px] place-items-center rounded-full bg-navy text-white">
                <ArrowUpRight className="size-4" />
              </span>
            </LeadPopupButton>
          </div>
        </div>

        {/* cards */}
        <div className="mx-auto mt-14 grid max-w-[1180px] grid-cols-1 items-center gap-6 lg:grid-cols-3">
          {plans.map((plan) =>
            plan.highlighted ? (
              <HighlightedCard key={plan.label} plan={plan} />
            ) : (
              <PlainCard key={plan.label} plan={plan} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
