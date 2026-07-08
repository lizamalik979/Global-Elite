export default function CTA() {
  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div
          className="relative overflow-hidden rounded-[30px] shadow-[0_30px_40px_-8px_rgba(22,38,92,0.35)]"
          style={{
            backgroundImage:
              "radial-gradient(85% 120% at 100% 100%, rgba(201,120,158,0.55) 0%, rgba(201,120,158,0) 52%)," +
              "linear-gradient(107deg, #172250 0%, #2a2560 28%, #4a3479 52%, #6d4694 76%, #9d5ba6 100%)",
          }}
        >
          {/* Decorative soft glows */}
          <div className="pointer-events-none absolute -top-12 left-[16%] h-[180px] w-[300px] rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 right-[3%] h-[240px] w-[340px] rounded-full bg-[#d98fb0]/25 blur-3xl" />

          {/* Content */}
          <div className="relative flex flex-col gap-9 px-8 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-16">
            {/* Left: eyebrow + heading + subtext */}
            <div className="max-w-[600px]">
              {/* Eyebrow pill */}
              <div className="inline-flex h-11 items-center gap-3 rounded-full border border-white/20 bg-white/[0.12] py-1.5 pl-1.5 pr-4 backdrop-blur-sm">
                <div className="flex -space-x-2.5">
                  <span className="size-[30px] rounded-full border-2 border-white bg-[linear-gradient(135deg,#f0a63c_0%,#e07a54_100%)]" />
                  <span className="size-[30px] rounded-full border-2 border-white bg-[linear-gradient(135deg,#b3529a_0%,#7a3d94_100%)]" />
                  <span className="size-[30px] rounded-full border-2 border-white bg-[linear-gradient(135deg,#8e4fa0_0%,#5a3a7a_100%)]" />
                </div>
                <span className="text-[12.5px] font-semibold leading-none text-white">
                  Trusted by 25,000+ clients
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-5 text-[clamp(30px,3.6vw,44px)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
                Save your time and money with Global Elite
              </h2>

              {/* Subtext */}
              <p className="mt-4 max-w-[490px] text-[16px] font-medium leading-[1.55] text-[#e7dcf3]">
                Get a fixed, all-inclusive quote and a dedicated agent on your
                case — start in under two minutes.
              </p>
            </div>

            {/* Right: action buttons */}
            <div className="flex shrink-0 flex-col gap-3.5 lg:w-[190px]">
              <a
                href="#"
                className="flex h-14 w-full items-center justify-between rounded-full bg-white pl-[26px] pr-[9px] shadow-[0_16px_17px_rgba(8,20,54,0.25)] transition-transform hover:-translate-y-0.5"
              >
                <span className="text-[15px] font-bold text-navy">
                  Get Started
                </span>
                <span className="gradient-cta grid size-[38px] shrink-0 place-items-center rounded-full">
                  <svg
                    className="size-[19px] text-navy-deep"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M8 7h9v9" />
                  </svg>
                </span>
              </a>

              <a
                href="#"
                className="flex h-[46px] w-full items-center justify-center gap-2.5 rounded-full border border-white/45 text-white transition-colors hover:bg-white/10"
              >
                <svg
                  className="size-[17px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-[14.5px] font-bold">Talk to an agent</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
