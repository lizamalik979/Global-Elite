import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  LayoutGrid,
  MessagesSquare,
  Network,
  Users,
} from "lucide-react";

type Integration = {
  icon: LucideIcon;
  title: string;
  desc: string;
  chips: string[];
  /** Dark navy card instead of the light panel */
  dark?: boolean;
};

const integrations: Integration[] = [
  {
    icon: Network,
    title: "One connected ecosystem for your business",
    desc: "Integrate Global Elite's AI solutions with the platforms your teams already use.",
    chips: ["REST API", "Webhooks", "Zapier"],
  },
  {
    icon: Users,
    title: "Customer Relationship Management",
    desc: "Connect lead activity, customer conversations and pipeline stages with your CRM.",
    chips: ["Salesforce", "HubSpot", "Zoho"],
    dark: true,
  },
  {
    icon: MessagesSquare,
    title: "Communication Channels",
    desc: "Automate conversations across WhatsApp, voice, website chat, email and social channels.",
    chips: ["WhatsApp API", "Twilio", "Meta"],
  },
  {
    icon: LayoutGrid,
    title: "Business Applications",
    desc: "Connect marketing, support, payment, scheduling and operational platforms.",
    chips: ["Razorpay", "Zendesk", "Calendly", "Shopify"],
    dark: true,
  },
  {
    icon: BarChart3,
    title: "Data and Analytics",
    desc: "Bring performance data into unified dashboards for better business decisions.",
    chips: ["Google Analytics", "Power BI", "Looker"],
  },
];

function IntegrationCard({ item }: { item: Integration }) {
  const dark = item.dark;
  return (
    <article
      className={`flex h-full flex-col rounded-[22px] p-[26px] sm:p-[30px] ${
        dark
          ? "bg-[#181436] text-white shadow-[0_18px_28px_rgba(24,20,54,0.4)]"
          : "bg-[#f7f3fa] text-navy shadow-[0_12px_17px_rgba(22,38,92,0.12)]"
      }`}
    >
      <div className="flex items-start justify-between">
        <span
          className={`grid size-[48px] place-items-center rounded-[13px] text-white ${
            dark ? "bg-white/10" : "bg-[#181436]"
          }`}
        >
          <item.icon className="size-[22px]" strokeWidth={1.8} />
        </span>
        <span
          className={`flex items-center gap-1.5 text-[12.5px] font-medium ${
            dark ? "text-[#c9c4dd]" : "text-slate"
          }`}
        >
          <span className="size-1.5 rounded-full bg-[#3ddc84]" />
          Native integration
        </span>
      </div>

      <h3 className="mt-9 text-[22px] font-bold leading-[1.15] tracking-[-0.01em]">
        {item.title}
      </h3>
      <p
        className={`mt-3 text-[15px] leading-[1.5] ${
          dark ? "text-[#c9c4dd]" : "text-slate"
        }`}
      >
        {item.desc}
      </p>

      <ul className="mt-auto flex flex-wrap gap-2 pt-7">
        {item.chips.map((chip) => (
          <li
            key={chip}
            className={`rounded-[8px] border px-3.5 py-[7px] text-[13px] font-semibold ${
              dark
                ? "border-white/15 bg-white/[0.07] text-white"
                : "border-purple-100 bg-white text-navy"
            }`}
          >
            {chip}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Departments() {
  const [ecosystem, crm, channels, apps, analytics] = integrations;

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
              Technology and Integration
            </h2>
          </div>

          {/* Row 1 — three equal cards */}
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            <IntegrationCard item={ecosystem} />
            <IntegrationCard item={crm} />
            <IntegrationCard item={channels} />
          </div>

          {/* Row 2 — two wide cards */}
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <IntegrationCard item={apps} />
            <IntegrationCard item={analytics} />
          </div>
        </div>
      </div>
    </section>
  );
}
