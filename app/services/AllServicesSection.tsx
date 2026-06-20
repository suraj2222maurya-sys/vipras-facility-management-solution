import Link from "next/link";
import {
  MdApartment,
  MdCleaningServices,
  MdEngineering,
  MdGroups,
  MdLocalFireDepartment,
  MdSecurity,
} from "react-icons/md";

const services = [
  {
    title: "Security Services",
    href: "/services/security-services",
    icon: MdSecurity,
    description:
      "Professional security manpower for corporate offices, factories, IT parks, hospitals, schools, warehouses, apartments and government project environments.",
  },
  {
    title: "Housekeeping & Soft Services",
    href: "/services/housekeeping-soft-services",
    icon: MdCleaningServices,
    description:
      "Reliable housekeeping and soft facility services for clean, hygienic and well-managed workplaces across Chennai, Tamil Nadu and Pan India.",
  },
  {
    title: "Industrial Manpower Supply",
    href: "/services/industrial-manpower-supply",
    icon: MdGroups,
    description:
      "Skilled, semi-skilled and unskilled manpower support for factories, production units, warehouses, logistics hubs and industrial operations.",
  },
  {
    title: "Technical Maintenance",
    href: "/services/technical-maintenance",
    icon: MdEngineering,
    description:
      "Electrical, plumbing, HVAC, DG and preventive maintenance support to keep buildings and business facilities running smoothly.",
  },
  {
    title: "Fire & Safety Manpower",
    href: "/services/fire-safety-manpower",
    icon: MdLocalFireDepartment,
    description:
      "Fire safety manpower, fire wardens and emergency response support for industrial, commercial, institutional and government sites.",
  },
  {
    title: "Integrated Facility Management",
    href: "/services/integrated-facility-management",
    icon: MdApartment,
    description:
      "Complete facility management support combining security, housekeeping, manpower, maintenance, safety and daily site supervision.",
  },
];

export default function AllServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf2] px-5 py-14 sm:px-8 lg:px-12">
      <div className="absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-[#d6b06a]/25 blur-3xl" />
      <div className="absolute right-[-140px] bottom-10 h-96 w-96 rounded-full bg-[#eadfca]/80 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#d6b06a_1px,transparent_0)] bg-[length:30px_30px] opacity-15" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#b98a3c]">
            All Services
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-[#2f281f] sm:text-4xl lg:text-5xl">
            Complete Facility Management Services Under One Trusted Brand
          </h2>

          <p className="mt-5 text-base font-medium leading-8 text-[#6f6254] sm:text-lg">
            Explore Vipras Facility Management Solution services designed for
            safe, clean, efficient and professionally managed business
            environments across Chennai, Tamil Nadu and Pan India.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-[#eadfca] bg-white/90 p-6 shadow-xl shadow-black/5 backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-[#d6b06a] hover:shadow-2xl hover:shadow-[#d6b06a]/15"
              >
                <div className="absolute right-[-35px] top-[-35px] h-28 w-28 rounded-full bg-[#d6b06a]/15 transition duration-500 group-hover:scale-125" />

                <div className="relative flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff1d2] text-3xl text-[#b98a3c] shadow-sm transition duration-500 group-hover:scale-110 group-hover:bg-[#b98a3c] group-hover:text-white">
                    <Icon />
                  </div>

                  <span className="text-sm font-black text-[#d6b06a]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="relative mt-5 text-xl font-black leading-tight text-[#2f281f]">
                  {service.title}
                </h3>

                <p className="relative mt-4 flex-1 text-sm font-medium leading-7 text-[#6f6254]">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="relative mt-6 inline-flex w-fit items-center rounded-full bg-[#b98a3c] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#b98a3c]/25 transition duration-300 hover:-translate-y-1 hover:bg-[#9f742f]"
                >
                  View Service
                  <span className="ml-2 transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}