import Image from "next/image";

// Card illustrations live in /public/assets/home (exported from the design,
// each already includes its own drop shadow). Sizes match the SVG viewBox.
const outcomes: {
  image: string;
  width: number;
  height: number;
  title: string;
  desc: string;
}[] = [
  {
    image: "/assets/home/card-1.svg",
    width: 306,
    height: 262,
    title: "AI Automation & Education",
    desc: "AI-powered automation solutions combined with practical training and enablement to help MSMEs adopt, manage and scale AI effectively.",
  },
  {
    image: "/assets/home/card-4.svg",
    width: 306,
    height: 275,
    title: "SaaS Solutions",
    desc: "Cloud-based software that enables businesses to deploy, manage and optimise AI automation across their operations.",
  },
  {
    image: "/assets/home/card-3.svg",
    width: 306,
    height: 285,
    title: "Digital Marketing",
    desc: "Data-driven digital marketing services designed to strengthen customer acquisition, increase conversions and accelerate business growth.",
  },
  {
    image: "/assets/home/card-2.svg",
    width: 306,
    height: 280,
    title: "Document Legalization",
    desc: "End-to-end apostille, MEA attestation and document legalisation services, supported by expert guidance throughout the process.",
  },
];

export default function GlobalReach() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="mx-auto max-w-[1180px]">
          {/* Header */}
          <div className="mx-auto max-w-[680px] text-center">
            <p className="flex items-center justify-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.14em] text-purple-500">
              <span className="size-[5px] rounded-full bg-purple-500" />
              Business Outcome Section
            </p>
            <h2 className="mt-4 text-[clamp(30px,4.4vw,42px)] font-bold leading-[1.14] tracking-[-0.015em] text-navy">
              Where intelligent automation creates measurable impact
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-[16px] leading-[1.55] text-slate">
              Combining AI technology, scalable software and professional
              services to improve efficiency, customer acquisition and business
              growth.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 gap-[22px] lg:grid-cols-2">
            {outcomes.map((o) => (
              <article
                key={o.title}
                className="flex flex-col rounded-[24px] border border-purple-100 bg-[#f7f3fa] p-5 shadow-[0_12px_17px_rgba(22,38,92,0.2)] sm:p-[30px]"
              >
                <div className="flex h-[240px] items-center justify-center">
                  <Image
                    src={o.image}
                    alt=""
                    width={o.width}
                    height={o.height}
                    className="h-auto w-full max-w-[306px]"
                  />
                </div>
                <h3 className="mt-4 text-center text-[20px] font-bold leading-tight text-navy">
                  {o.title}
                </h3>
                <p className="mx-auto mt-2.5 max-w-[390px] text-center text-[14px] leading-[1.55] text-slate">
                  {o.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
