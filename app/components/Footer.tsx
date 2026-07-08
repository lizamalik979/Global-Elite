import Image from "next/image";

/* ---------- inline lucide-style icons ---------- */

function MailIcon({ className }: { className?: string }) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function MapPin({ className }: { className?: string }) {
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
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ShieldCheck({ className }: { className?: string }) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

/* ---------- data ---------- */

const services = [
  "Apostille Services",
  "Embassy Attestation",
  "Certified Translation",
  "Price Calculator",
];

const company = [
  "Privacy Policy",
  "Compliance Standards",
  "Terms of Service",
  "Contact Us",
];

const branches = ["New Delhi", "Mumbai", "Hyderabad", "Vizag"];

/* ---------- component ---------- */

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 py-16 md:grid-cols-2 lg:grid-cols-[360px_repeat(3,minmax(0,1fr))]">
          {/* Brand column */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/logo-icon.png"
                alt="Global Elite"
                width={883}
                height={804}
                className="h-[54px] w-auto"
              />
              <div className="flex flex-col gap-[3px]">
                <Image
                  src="/assets/logo-wordmark.png"
                  alt="Global Elite"
                  width={1920}
                  height={174}
                  className="h-[18px] w-auto"
                />
                <span className="text-[7.5px] font-semibold tracking-[0.32em] text-gold/75">
                  GLOBAL · REACH · ELITE · SOLUTION
                </span>
              </div>
            </div>

            <p className="mt-6 max-w-[310px] text-[13.5px] leading-[1.6] text-[#9fb0d6]">
              MEA-registered logistics for apostille, embassy attestation,
              translation and verification across India and 120+ countries.
            </p>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-[12px] font-bold tracking-[0.02em] text-white">
                Subscribe to our newsletter
              </p>
              <div className="mt-3 flex h-12 w-full max-w-[330px] items-center rounded-[12px] border border-[#2c3f6e] bg-white/[0.07] pl-3.5 pr-[6px]">
                <MailIcon className="size-[17px] shrink-0 text-[#9fb0d6]" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="ml-3 min-w-0 flex-1 bg-transparent text-[13.5px] text-white placeholder:text-[#757575] focus:outline-none"
                />
                <button
                  type="button"
                  className="gradient-cta flex h-[34px] shrink-0 items-center gap-1.5 rounded-[9px] px-3.5 text-[12.5px] font-bold text-white"
                >
                  Submit
                  <ArrowUpRight className="size-[14px]" />
                </button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[13px] font-bold tracking-[0.04em] text-white">
              Services
            </h3>
            <ul className="mt-[18px] flex flex-col gap-[13px]">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[13.5px] text-[#9fb0d6] transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[13px] font-bold tracking-[0.04em] text-white">
              Company
            </h3>
            <ul className="mt-[18px] flex flex-col gap-[13px]">
              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[13.5px] text-[#9fb0d6] transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Branch Offices */}
          <div>
            <h3 className="text-[13px] font-bold tracking-[0.04em] text-white">
              Branch Offices
            </h3>
            <ul className="mt-[18px] flex flex-col gap-[12px]">
              {branches.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-[13.5px] text-[#9fb0d6] transition-colors hover:text-white"
                  >
                    <MapPin className="size-[14px] shrink-0 text-[#9fb0d6]" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[#2c3f6e]" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-[#7587b3]">
            © 2026 Global Elite Logistics. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="flex h-[28.5px] items-center gap-2 rounded-[8px] border border-[#2c3f6e] px-2.5 text-[11.5px] text-[#9fb0d6]">
              <ShieldCheck className="size-[14px]" />
              MEA Registered
            </span>
            <span className="flex h-[28.5px] items-center gap-2 rounded-[8px] border border-[#2c3f6e] px-2.5 text-[11.5px] text-[#9fb0d6]">
              <LockIcon className="size-[14px]" />
              256-bit SSL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
