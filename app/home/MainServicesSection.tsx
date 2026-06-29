import Link from "next/link";

type Service = {
  icon: string;
  title: string;
  href: string;
  description: string;
};

const services: Service[] = [
  {
    icon: "🛡️",
    title: "Security Services",
    href: "/services#security-services",
    description:
      "Professional security solutions for manufacturing plants, IT parks, hospitals, corporate offices, warehouses, schools, hotels, apartments, residences and institutions across Tamil Nadu.",
  },
  {
    icon: "✨",
    title: "Housekeeping & Soft Services",
    href: "/services#housekeeping-soft-services",
    description:
      "Reliable housekeeping services for IT parks, hospitals, schools, hotels, gated communities, factories, commercial buildings and hospitality sectors.",
  },
  {
    icon: "👷",
    title: "Industrial Manpower Supply",
    href: "/services#industrial-manpower-supply",
    description:
      "Skilled, semi-skilled and unskilled manpower support for factories, production units, logistics hubs, automotive plants, FMCG units and warehouses.",
  },
  {
    icon: "⚙️",
    title: "Technical / MEP Maintenance",
    href: "/services#mep-maintenance-services",
    description:
      "Complete technical operations covering electrical, mechanical, plumbing, HVAC, STP/WTP, DG operations and preventive maintenance.",
  },
  {
    icon: "🔥",
    title: "Fire & Safety Manpower",
    href: "/services#fire-safety-manpower",
    description:
      "Trained fire operators, fire wardens, safety stewards, emergency response teams and hydrant system specialists for high-risk environments.",
  },
  {
    icon: "🏢",
    title: "Integrated Facility Management",
    href: "/services#integrated-facility-management",
    description:
      "End-to-end facility management support designed to keep business environments safe, clean, compliant, efficient and professionally managed.",
  },
];

export default function MainServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf2] px-5 py-14 sm:px-8 lg:px-12">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#d6b06a]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#eadfca]/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b98a3c] sm:text-sm">
    Core Facility Management Services
  </p>

  <h2 className="mx-auto mt-3 max-w-3xl text-xl font-black leading-tight text-[#2f281f] sm:text-2xl lg:text-3xl">
    Integrated Facility Management Services in Chennai for Safer, Cleaner and Better-Managed Workplaces
  </h2>

  <p className="mt-4 text-base leading-7 text-[#6b5a45] sm:text-lg">
    Vipras supports corporate offices, industries, institutions, commercial
    properties and residential communities with housekeeping, security,
    manpower, technical maintenance, fire safety and end-to-end facility
    operations across Chennai, Tamil Nadu and Pan India service requirements.
  </p>
</div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex h-full flex-col rounded-3xl border border-[#eadfca] bg-white/80 p-6 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#d6b06a] hover:bg-white hover:shadow-2xl hover:shadow-black/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f8f1e7] text-2xl shadow-sm ring-1 ring-[#eadfca] transition group-hover:bg-[#d6b06a] group-hover:ring-[#b98a3c]">
                {service.icon}
              </div>

              <h3 className="mt-5 text-lg font-black text-[#2f281f] sm:text-xl">
                {service.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-[#6b5a45]">
                {service.description}
              </p>

              <div className="mt-5">
                <Link
                  href={service.href}
                  className="inline-flex text-sm font-black text-[#b98a3c] transition hover:text-[#2f281f]"
                >
                  Explore Service →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}