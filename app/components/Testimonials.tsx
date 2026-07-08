type IconProps = { className?: string };

function ArrowLeftIcon({ className }: IconProps) {
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
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
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

function QuoteIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zM0 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
    </svg>
  );
}

type Testimonial = {
  brand: string;
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    brand: "LOGOIPSUM",
    quote:
      "They brought clarity to a complex UAE attestation — breaking down every barrier and delivering ahead of schedule.",
    name: "Rahul Mehta",
    role: "UAE Employment Attestation",
  },
  {
    brand: "LOOQ",
    quote:
      "Their team resolved a tricky Germany study-visa apostille, opening new paths and keeping me informed throughout.",
    name: "Priya Sharma",
    role: "MEA Apostille — Germany",
  },
  {
    brand: "IPSM",
    quote:
      "We found focus for a hard KSA consular case — cutting through the noise and providing a genuinely transparent process.",
    name: "Imran Qureshi",
    role: "KSA Embassy Stamping",
  },
  {
    brand: "NOVA",
    quote:
      "They gave a simple, calm experience — removing every delay on my Canada PR birth-certificate apostille.",
    name: "Anjali Nair",
    role: "Birth Certificate — Canada",
  },
  {
    brand: "AXIS",
    quote:
      "Incorporation papers consular-stamped for a Qatar tender, ahead of the deadline. Faultless coordination.",
    name: "Vikram Reddy",
    role: "Corporate — Qatar",
  },
];

const cardGradient =
  "linear-gradient(180deg, #e8e8ea 0%, #e4e4e4 48%, #c8c7ca 60%, #6e6b76 74%, #44404f 88%, #241f33 100%)";

export default function Testimonials() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[520px]">
            <p className="text-[12.5px] font-bold tracking-[1.75px] text-purple-500">
              • TESTIMONIALS
            </p>
            <h2 className="mt-3 text-[clamp(30px,3.6vw,42px)] font-bold leading-[1.12] tracking-[-0.63px] text-navy">
              What clients say{" "}
              <span className="italic text-purple-500">about us</span>
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.55] text-slate">
              Real cases, real destinations — here&apos;s how their legalization
              went.
            </p>
          </div>

          {/* Prev / Next navigation (static) */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              aria-label="Previous testimonials"
              className="grid size-12 place-items-center rounded-full border border-[#e2d6ee] bg-white text-navy"
            >
              <ArrowLeftIcon className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              className="grid size-12 place-items-center rounded-full bg-navy text-white"
            >
              <ArrowRightIcon className="size-5" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 pt-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="relative flex h-[430px] w-[340px] shrink-0 snap-start flex-col overflow-hidden rounded-[22px] shadow-[0_20px_44px_-22px_rgba(22,38,92,0.45)]"
              style={{ backgroundImage: cardGradient }}
            >
              {/* Brand watermark */}
              <span className="absolute left-5 top-[18px] font-mono text-[12px] font-bold tracking-[1.2px] text-white/85">
                {t.brand}
              </span>

              {/* Quote content pinned to bottom */}
              <div className="mt-auto px-6 pb-6">
                <QuoteIcon className="size-[22px] text-[#241f33]" />
                <p className="mt-3 text-[14px] font-semibold leading-[21px] text-white">
                  {t.quote}
                </p>
                <p className="mt-3.5 text-[13.5px] font-bold leading-[1.2] text-white">
                  {t.name}
                </p>
                <p className="mt-1 text-[12px] font-semibold leading-[1.2] text-gold">
                  {t.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
