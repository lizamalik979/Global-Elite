import Image from "next/image";

/* Gradients replicated from the Figma raster fills (sampled exact colours). */
const barGradient = "linear-gradient(135deg, #1d2c63 0%, #16265c 100%)";
const numberGradient =
  "linear-gradient(140deg, #e2905c 0%, #d3709e 52%, #a866b0 100%)";
const purpleIconGradient = "linear-gradient(140deg, #9a5bb0 0%, #7a3d94 100%)";
const orangeIconGradient = "linear-gradient(140deg, #f0a63c 0%, #e07a54 100%)";

type IconProps = { className?: string };

function ArrowRight({ className }: IconProps) {
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
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

function Certificate({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <circle cx="12" cy="14.3" r="2.4" />
      <path d="M10.4 16.4 9.5 20l2.5-1.4 2.5 1.4-.9-3.6" />
    </svg>
  );
}

function Landmark({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 22h18" />
      <path d="M4 10v8" />
      <path d="M9 10v8" />
      <path d="M15 10v8" />
      <path d="M20 10v8" />
      <path d="M12 2 3 8h18z" />
    </svg>
  );
}

function ShieldCheck({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3 5 6v5c0 4.5 3 7.6 7 9 4-1.4 7-4.5 7-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function Crown({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 6l3.5 10h11L21 6l-5 4.5L12 4 8 10.5z" />
      <path d="M6 20h12" />
    </svg>
  );
}

function Globe({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a13 13 0 0 1 0 18 13 13 0 0 1 0-18" />
    </svg>
  );
}

const steps = [
  { n: "01", title: "Notary", sub: "Local notarisation of the original" },
  { n: "02", title: "SDM / HRD", sub: "State or Home-Department clearance" },
  { n: "03", title: "MEA", sub: "Apostille / final attestation" },
];

const authorities = [
  {
    title: "U.S. Dept. of State",
    sub: "Authentications office",
    icon: <ShieldCheck className="size-5" />,
    variant: "purple" as const,
  },
  {
    title: "UK FCDO",
    sub: "Foreign & Commonwealth",
    icon: <Crown className="size-5" />,
    variant: "orange" as const,
  },
  {
    title: "MEA, Govt. of India",
    sub: "Apostille authority",
    icon: <Landmark className="size-5" />,
    variant: "purple" as const,
  },
  {
    title: "Hague Convention",
    sub: "120+ member states",
    icon: <Globe className="size-5" />,
    variant: "purple" as const,
  },
];

export default function Departments() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="mx-auto max-w-[1180px]">
          {/* Heading */}
          <div className="mx-auto max-w-[660px] text-center">
            <p className="text-[12.5px] font-bold tracking-[1.75px] text-purple-500">
              • WORKING PROCESS
            </p>
            <h2 className="mt-3 text-[34px] font-bold leading-[1.12] tracking-[-0.015em] text-navy sm:text-[42px]">
              The departments behind your{" "}
              <span className="italic text-purple-500">attestation</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[648px] text-[16px] leading-[1.55] text-slate">
              {`Every certificate passes through a verified chain of authorities — here's who signs off, and in what order.`}
            </p>
          </div>

          {/* Process bar */}
          <div
            className="mt-12 rounded-[24px] px-[22px] py-[26px] shadow-[0_22px_25px_rgba(22,38,92,0.35)] sm:px-[34px] sm:py-[34px]"
            style={{ background: barGradient }}
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              {steps.map((s, i) => (
                <div key={s.n} className="flex flex-1 items-center gap-4">
                  <div className="flex flex-1 items-center gap-[14px]">
                    <span
                      className="grid size-12 shrink-0 place-items-center rounded-full text-[15px] font-bold text-white"
                      style={{ background: numberGradient }}
                    >
                      {s.n}
                    </span>
                    <div>
                      <p className="text-[17px] font-bold leading-tight text-white">
                        {s.title}
                      </p>
                      <p className="mt-1 text-[12.5px] leading-tight text-[#9fb0d6]">
                        {s.sub}
                      </p>
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <ArrowRight className="hidden size-[22px] shrink-0 text-[#5a6aa0] sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Composition grid */}
          <div className="mt-5 grid gap-5 lg:grid-cols-[2fr_1fr]">
            {/* Left column */}
            <div className="flex flex-col gap-5">
              {/* HRD + Ministry cards */}
              <div className="grid gap-5 sm:grid-cols-2">
                {/* HRD (light) */}
                <div className="flex min-h-[260px] flex-col justify-between rounded-[22px] border bg-[#f7f3fa] p-[30px] shadow-[0_12px_15px_rgba(22,38,92,0.12)]">
                  <span className="grid size-[50px] place-items-center rounded-[14px] border bg-white text-navy">
                    <Certificate className="size-[25px]" />
                  </span>
                  <div>
                    <p className="font-serif text-[30px] font-bold leading-tight tracking-[-0.01em] text-navy">
                      HRD
                    </p>
                    <p className="mt-2.5 text-[13px] font-bold tracking-[0.26px] text-purple-500">
                      Human Resource Development
                    </p>
                    <p className="mt-1.5 text-[13px] leading-[1.5] text-slate">
                      State-level verification of educational certificates before
                      central attestation.
                    </p>
                  </div>
                </div>

                {/* Ministry of External Affairs (dark) */}
                <div
                  className="flex min-h-[260px] flex-col justify-between rounded-[22px] p-[30px] shadow-[0_16px_19px_rgba(24,20,54,0.5)]"
                  style={{ backgroundColor: "#181436" }}
                >
                  <span className="grid size-[50px] place-items-center rounded-[14px] bg-white/10 text-white">
                    <Landmark className="size-[25px]" />
                  </span>
                  <div>
                    <p className="text-[20px] font-bold leading-[1.2] text-white">
                      Ministry of External Affairs
                    </p>
                    <p className="mt-2 text-[13px] leading-[1.5] text-[#b9b4cf]">
                      The central authority issuing the Hague Apostille and
                      consular attestations for India.
                    </p>
                  </div>
                </div>
              </div>

              {/* Recognised authorities (light, wide) */}
              <div className="rounded-[22px] border bg-[#f7f3fa] p-[30px] shadow-[0_12px_15px_rgba(22,38,92,0.12)]">
                <p className="text-[13px] font-bold tracking-[0.26px] text-navy">
                  RECOGNISED BY GLOBAL AUTHORITIES
                </p>
                <div className="mt-5 grid gap-3.5 sm:grid-cols-2">
                  {authorities.map((a) => (
                    <div
                      key={a.title}
                      className="flex items-center gap-3 rounded-[14px] border bg-white p-[14px]"
                    >
                      <span
                        className="grid size-10 shrink-0 place-items-center rounded-full text-white"
                        style={{
                          background:
                            a.variant === "orange"
                              ? orangeIconGradient
                              : purpleIconGradient,
                        }}
                      >
                        {a.icon}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[13.5px] font-bold leading-tight text-navy">
                          {a.title}
                        </p>
                        <p className="mt-0.5 text-[11.5px] leading-tight text-slate">
                          {a.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column — stacked photo panels */}
            <div className="flex flex-col gap-5">
              {[0, 1].map((k) => (
                <div
                  key={k}
                  className="grid min-h-[200px] flex-1 place-items-center rounded-[22px] p-6 shadow-[0_16px_19px_rgba(24,20,54,0.5)]"
                  style={{ backgroundColor: "#181436" }}
                >
                  <Image
                    src="/assets/dept-placeholder.png"
                    alt=""
                    width={204}
                    height={192}
                    className="h-auto w-[204px] max-w-[62%]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
