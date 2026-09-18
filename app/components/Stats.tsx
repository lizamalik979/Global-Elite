import {
  Clock,
  Mail,
  MessageCircle,
  Phone,
  TrendingUp,
  Zap,
} from "lucide-react";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Ascending "growth" bars for the Scalable card: [height px, colour class]
const GROWTH_BARS: [number, string][] = [
  [10, "bg-white/25"],
  [16, "bg-white/35"],
  [22, "bg-white/45"],
  [28, "bg-gold"],
  [34, "bg-gold"],
];

export default function Stats() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1180px] px-6 py-20 lg:px-10 lg:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-purple-500">
            • Trust and Performance
          </p>
          <h2 className="mt-4 text-[28px] font-bold leading-[1.14] tracking-[-0.015em] text-navy sm:text-[34px] lg:text-[42px]">
            Intelligent automation designed for measurable growth
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-[15.5px] font-medium leading-relaxed text-slate">
            Bring customer conversations, business data and operational
            workflows together in one intelligent platform.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 flex flex-col gap-[18px] lg:grid lg:h-[300px] lg:grid-cols-[351fr_443fr_351fr]">
          {/* Card 1 — navy "24/7" */}
          <div
            className="flex h-full flex-col justify-between gap-8 overflow-hidden rounded-[22px] p-[26px] text-white shadow-[0_22px_30px_rgba(22,38,92,0.35)]"
            style={{
              backgroundImage:
                "linear-gradient(150deg,#1e2f68 0%,#16265c 55%,#101c48 100%)",
            }}
          >
            <div className="flex items-start justify-between">
              <span className="grid size-10 place-items-center rounded-[11px] bg-white/[0.12]">
                <Clock className="size-[21px]" strokeWidth={1.8} />
              </span>
              <span className="flex items-center gap-1.5 text-[11.5px] font-semibold text-[#b9c4e0]">
                <span className="size-1.5 rounded-full bg-[#3ddc84]" />
                Always on
              </span>
            </div>

            <div>
              <p className="text-[50px] font-bold leading-none tracking-[-0.02em]">
                24/7
              </p>
              <p className="mt-3 text-[13.5px] font-medium leading-[1.5] text-[#b9c4e0]">
                Automated customer engagement without business-hour
                limitations.
              </p>
            </div>

            {/* Mon–Sun activity bars */}
            <div>
              <div className="flex gap-1.5">
                {DAYS.map((d) => (
                  <span key={d} className="h-[5px] flex-1 rounded-full bg-gold" />
                ))}
              </div>
              <div className="mt-1.5 flex justify-between text-[10.5px] font-semibold text-[#9fb0d6]">
                <span>Mon</span>
                <span>Sun</span>
              </div>
            </div>
          </div>

          {/* Card 2 — white "Faster Response" */}
          <div className="flex h-full flex-col rounded-[22px] border border-purple-100 bg-white p-[26px] shadow-[0_16px_28px_rgba(22,38,92,0.12)]">
            <div className="flex items-start justify-between">
              <span className="grid size-10 place-items-center rounded-[11px] bg-gradient-to-br from-purple-50 to-[#efe1f8] text-purple-500">
                <Zap className="size-[19px]" strokeWidth={1.8} />
              </span>
              <span className="text-[11.5px] font-semibold text-slate-light">
                Avg. first response
              </span>
            </div>

            <h3 className="mt-5 text-[24px] font-bold leading-none tracking-[-0.015em] text-navy">
              Faster Response
            </h3>
            <p className="mt-2.5 text-[13.5px] font-medium leading-[1.5] text-slate">
              Respond to new leads and customer enquiries in seconds.
            </p>

            {/* Comparison bars */}
            <div className="mt-auto space-y-3 pt-5">
              <div>
                <div className="flex items-center justify-between text-[11.5px]">
                  <span className="font-semibold text-slate-light">
                    Manual follow-up
                  </span>
                  <span className="font-bold text-navy">4–6 hrs</span>
                </div>
                <div className="mt-1.5 h-[5px] w-full rounded-full bg-[#e6e8ef]" />
              </div>
              <div>
                <div className="flex items-center justify-between text-[11.5px]">
                  <span className="font-semibold text-slate-light">
                    With Global Elite AI
                  </span>
                  <span className="font-bold text-purple-500">&lt; 10 sec</span>
                </div>
                <div className="mt-1.5 h-[5px] w-full rounded-full bg-[#e6e8ef]">
                  <div className="gradient-cta h-full w-[6%] min-w-[14px] rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 — orange "Multi-Channel" + dark "Scalable" */}
          <div className="flex h-full flex-col gap-[18px]">
            <div
              className="flex flex-col rounded-[22px] p-6 shadow-[0_18px_28px_rgba(224,139,46,0.32)] lg:h-[122px]"
              style={{
                backgroundImage:
                  "linear-gradient(135deg,#f4bd54 0%,#ec9a3a 55%,#e0872c 100%)",
              }}
            >
              <div className="flex items-center justify-between">
                <p className="text-[20px] font-bold leading-none tracking-[-0.01em] text-[#221204]">
                  Multi-Channel
                </p>
                <div className="flex gap-1.5 text-[#221204]">
                  {[MessageCircle, Phone, Mail].map((Icon, i) => (
                    <span
                      key={i}
                      className="grid size-7 place-items-center rounded-lg bg-white/35"
                    >
                      <Icon className="size-[14px]" strokeWidth={2} />
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-auto pt-4 text-[12.5px] font-semibold leading-[1.45] text-[rgba(34,18,4,0.7)]">
                Connect WhatsApp, voice, web forms, email and CRM workflows.
              </p>
            </div>

            <div className="flex flex-col rounded-[22px] bg-[#181436] p-6 shadow-[0_18px_28px_rgba(24,20,54,0.4)] lg:flex-1">
              <div className="flex items-start justify-between">
                <span className="grid size-[38px] place-items-center rounded-[11px] bg-white/10">
                  <TrendingUp className="size-[19px] text-white" strokeWidth={1.8} />
                </span>
                <div className="flex items-end gap-1" aria-hidden="true">
                  {GROWTH_BARS.map(([h, color], i) => (
                    <span
                      key={i}
                      className={`w-[5px] rounded-full ${color}`}
                      style={{ height: h }}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-auto pt-3 leading-[1.25]">
                <p className="text-[18px] font-bold text-white">Scalable</p>
                <p className="text-[12px] font-medium text-[#b9c4e0]">
                  Handle growing conversation volumes without expanding
                  repetitive manual work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
