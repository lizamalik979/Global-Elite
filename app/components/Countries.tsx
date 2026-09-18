import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  Briefcase,
  FlaskConical,
  Headset,
  Megaphone,
  PenTool,
  Rocket,
  Search,
  Settings,
} from "lucide-react";

/* ---------- Block A — Use-case cards ---------- */

type UseCase = {
  icon: LucideIcon;
  title: string;
  desc: string;
  /** Dark navy card instead of the purple gradient */
  dark?: boolean;
};

const useCases: UseCase[] = [
  {
    icon: Megaphone,
    title: "Marketing Teams",
    desc: "Capture campaign leads, segment audiences and launch personalised nurture journeys.",
  },
  {
    icon: Briefcase,
    title: "Sales Teams",
    desc: "Qualify prospects, automate follow-ups and schedule meetings with high-intent leads.",
    dark: true,
  },
  {
    icon: Headset,
    title: "Customer Support Teams",
    desc: "Resolve routine queries, manage tickets and improve response consistency.",
  },
  {
    icon: Settings,
    title: "Operations Teams",
    desc: "Automate approvals, data entry, notifications and cross-platform workflows.",
    dark: true,
  },
];

/* ---------- Block B — Process steps ---------- */

type Step = { num: string; icon: LucideIcon; title: string; desc: string };

const steps: Step[] = [
  {
    num: "01",
    icon: Search,
    title: "Discovery and Audit",
    desc: "We identify repetitive activities, disconnected systems and high-impact automation opportunities.",
  },
  {
    num: "02",
    icon: PenTool,
    title: "Solution Design",
    desc: "Our team maps your customer journeys, workflows, integrations and automation logic.",
  },
  {
    num: "03",
    icon: Blocks,
    title: "Build and Integrate",
    desc: "We configure AI agents and connect them with your CRM, communication channels and business tools.",
  },
  {
    num: "04",
    icon: FlaskConical,
    title: "Test and Optimise",
    desc: "Every workflow is tested for accuracy, usability, escalation logic and business performance.",
  },
  {
    num: "05",
    icon: Rocket,
    title: "Launch and Scale",
    desc: "We monitor results, improve conversations and expand automation as your organisation grows.",
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
          {/* ============ Block A — Use cases ============ */}
          <div className="text-center">
            <p className="text-[12.5px] font-bold uppercase tracking-[1.75px] text-purple-500">
              • Use-Case Section
            </p>
            <h2 className="mx-auto mt-3 max-w-[640px] text-[30px] font-bold leading-[1.14] tracking-[-0.015em] text-navy sm:text-[38px]">
              AI solutions for every stage of business growth
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-[848px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((c) => (
              <div
                key={c.title}
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
                <span
                  className={`grid size-[38px] place-items-center rounded-[10px] text-white ${
                    c.dark ? "bg-white/10" : "bg-white/15"
                  }`}
                >
                  <c.icon className="size-[19px]" strokeWidth={1.8} />
                </span>
                <p className="mt-7 text-[14px] font-bold text-white">{c.title}</p>
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

          {/* ============ Block B — How it works ============ */}
          <div className="mt-20 lg:mt-28">
            <div className="text-center">
              <p className="text-[12.5px] font-bold uppercase tracking-[1.75px] text-purple-500">
                • How It Works
              </p>
              <h2 className="mx-auto mt-3 max-w-[640px] text-[28px] font-bold leading-[1.14] tracking-[-0.015em] text-navy sm:text-[34px]">
                From first conversation to intelligent automation
              </h2>
            </div>

            <div className="relative mt-14">
              {/* connecting line behind the number badges (desktop only) */}
              <div
                className="pointer-events-none absolute left-[10%] right-[10%] top-[22px] hidden border-t-2 border-dashed border-[#dcc9e8] lg:block"
                aria-hidden
              />

              <div className="grid grid-cols-1 gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-5">
                {steps.map((s, i) => (
                  <div key={s.num} className="relative flex flex-col items-center">
                    {/* vertical dotted connector to the next step (mobile only) */}
                    {i < steps.length - 1 && (
                      <div
                        className="pointer-events-none absolute -bottom-14 left-1/2 top-[46px] border-l-2 border-dashed border-[#dcc9e8] sm:hidden"
                        aria-hidden
                      />
                    )}
                    <div
                      className="relative z-10 flex size-[46px] items-center justify-center rounded-full text-[15px] font-bold text-white"
                      style={{
                        backgroundImage: badgeGrad,
                        boxShadow: "0 10px 11px rgba(142,79,160,0.6)",
                      }}
                    >
                      {s.num}
                    </div>
                    <div className="relative mt-[22px] flex w-full min-h-[230px] flex-1 flex-col items-center justify-center rounded-[18px] border border-purple-100 bg-white px-5 py-8 text-center shadow-[0_12px_15px_rgba(22,38,92,0.2)]">
                      <span className="grid size-[50px] place-items-center rounded-[14px] bg-gradient-to-br from-[#f3ebf9] to-[#ecdef5] text-navy">
                        <s.icon className="size-[22px]" strokeWidth={1.8} />
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
