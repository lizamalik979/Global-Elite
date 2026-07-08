import Image from "next/image";

type IconProps = { className?: string };

function StampIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 22h14" />
      <path d="M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z" />
      <path d="M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3 3 3 0 0 0-3 3c0 2 1 2 1 3.5V13" />
    </svg>
  );
}

function BuildingIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}

function LanguagesIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
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

function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

const services = [
  {
    icon: <StampIcon className="size-[23px]" />,
    title: "MEA Apostille",
    text: "Hague-Convention apostille at the Ministry desk with e-sticker tracking.",
  },
  {
    icon: <BuildingIcon className="size-[23px]" />,
    title: "Embassy Attestation",
    text: "Consular legalization for UAE, Saudi, Qatar & other non-Hague nations.",
  },
  {
    icon: <LanguagesIcon className="size-[23px]" />,
    title: "Certified Translation",
    text: "Sworn, notarized translations in 40+ languages accepted worldwide.",
  },
];

export default function Services() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-[700px] text-center">
          <p className="text-[12.5px] font-bold tracking-[1.75px] text-purple-500">
            • SERVICES
          </p>
          <h2 className="mt-4 text-[clamp(30px,3.6vw,42px)] font-bold leading-[1.12] tracking-[-0.63px] text-navy">
            Comprehensive legalization &amp;{" "}
            <span className="italic text-purple-500">document</span>{" "}
            services
          </h2>
          <p className="mx-auto mt-4 max-w-[648px] text-[16px] leading-[1.55] text-slate">
            Whether you&apos;re moving abroad to work, study or trade — we handle
            every signature, stamp and sticker for you.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="gradient-cta inline-flex h-11 items-center gap-3 rounded-full py-1 pl-6 pr-[7px] text-[13.5px] font-bold tracking-[0.27px] text-white shadow-[0_12px_13px_rgba(142,79,160,0.5)]"
            >
              GET STARTED
              <span className="grid size-[30px] place-items-center rounded-full bg-navy text-white">
                <ArrowUpRightIcon className="size-4" />
              </span>
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-14 flex max-w-[1180px] flex-col gap-[18px] lg:flex-row lg:items-stretch">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-1 flex-col rounded-[20px] border border-purple-100 bg-white p-[26px] shadow-[0_10px_15px_rgba(22,38,92,0.16)] lg:h-[240px]"
            >
              <span className="grid size-[46px] place-items-center rounded-[13px] bg-gradient-to-br from-purple-50 to-[#efe1f8] text-navy">
                {s.icon}
              </span>
              <h3 className="mt-[18px] text-[17px] font-bold leading-[1.2] text-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.5] text-slate">
                {s.text}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-bold text-purple-500 lg:mt-auto"
              >
                Learn more
                <ArrowRightIcon className="size-[15px]" />
              </a>
            </div>
          ))}

          {/* Photo card */}
          <div className="relative h-[240px] overflow-hidden rounded-[20px] bg-white shadow-[0_16px_40px_-20px_rgba(22,38,92,0.4)] lg:flex-[1.151]">
            <Image
              src="/assets/svc-corporate.png"
              alt="Corporate and personal document specialists at work"
              fill
              sizes="(min-width: 1024px) 312px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-[13px] bg-[#eee3f6] px-4 pb-3 pt-[14px]">
              <p className="text-[14.5px] font-bold leading-[1.2] text-navy">
                Corporate &amp; Personal
              </p>
              <p className="mt-1 text-[12.5px] font-medium leading-[1.3] text-slate">
                Degrees, birth, marriage, incorporation &amp; commercial papers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
