import Link from "next/link";

const serviceBlogs = [
  {
    title: "Security Services",
    description:
      "Professional security manpower for corporate, industrial, residential, hospital, school and project environments.",
    href: "/blog/security-services-for-business-facilities",
    icon: "security",
  },
  {
    title: "Housekeeping & Soft Services",
    description:
      "Clean, hygienic and well-managed facility support for offices, hotels, hospitals, schools and buildings.",
    href: "/blog/housekeeping-soft-services-for-clean-facilities",
    icon: "housekeeping",
  },
  {
    title: "Industrial Manpower Supply",
    description:
      "Skilled, semi-skilled and unskilled manpower support for factories, warehouses, plants and logistics operations.",
    href: "/blog/industrial-manpower-supply-for-business-operations",
    icon: "manpower",
  },
  {
    title: "Technical Maintenance",
    description:
      "Electrical, plumbing, AC, HVAC, geyser, preventive and breakdown maintenance for Pan India projects.",
    href: "/blog/technical-maintenance-services-for-pan-india-facilities",
    icon: "maintenance",
  },
  {
    title: "Fire & Safety Manpower",
    description:
      "Fire wardens, safety stewards, emergency response teams and fire safety manpower for high-risk sites.",
    href: "/blog/fire-safety-manpower-for-industrial-and-commercial-sites",
    icon: "fire",
  },
  {
    title: "Integrated Facility Management",
    description:
      "Complete facility support combining security, housekeeping, manpower, maintenance, safety and supervision.",
    href: "/blog/integrated-facility-management-for-modern-businesses",
    icon: "ifm",
  },
];

function ServiceIcon({ type }: { type: string }) {
  const common =
    "h-9 w-9 text-[#0f7a5f] transition duration-300 group-hover:text-[#c89b3c]";

  if (type === "security") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <path d="M12 3L5 6v5c0 4.6 2.9 8.8 7 10 4.1-1.2 7-5.4 7-10V6l-7-3z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9.5 12l1.7 1.7 3.6-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "housekeeping") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <path d="M6 20h12M8 20l1-9h6l1 9M10 11V5a2 2 0 114 0v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M5 8h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "manpower") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <path d="M8 11a3 3 0 100-6 3 3 0 000 6zM16 11a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3.5 20c.6-3.4 2.5-5 4.5-5s3.9 1.6 4.5 5M11.5 20c.6-3.4 2.5-5 4.5-5s3.9 1.6 4.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "maintenance") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <path d="M14.7 6.3l3 3M4 20l6.8-6.8M13.5 4.5a4.2 4.2 0 005.9 5.9l-8.7 8.7a3 3 0 01-4.2-4.2l8.7-8.7z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "fire") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <path d="M12 21c3.6 0 6-2.4 6-5.7 0-2.8-1.7-4.6-3.5-6.5-.8 2-2.2 3.1-3.9 3.8.6-2.6-.2-5.1-2.3-7.6C7.8 8.4 6 11 6 15.3 6 18.6 8.4 21 12 21z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={common}>
      <path d="M4 10l8-6 8 6v10H4V10z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 20v-6h6v6M7 10h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function ServiceBlogsSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-[#0f7a5f]/20 bg-[#f1faf7] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0f7a5f]">
              Service Blogs
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Service Insights from a Trusted Facility Management Partner
            </h2>

            <p className="mt-3 text-base leading-7 text-slate-600">
              Explore practical service knowledge from Vipras Facility Management
              Solutions, serving businesses since 2007 with Pan India support.
            </p>
          </div>

          <div className="rounded-2xl border border-[#eadfca] bg-[#f8f5ef] px-5 py-4">
            <p className="text-sm font-extrabold text-slate-950">
              150+ Clients • 2500+ Staff • Pan India
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceBlogs.map((service) => (
            <article
              key={service.title}
              className="group rounded-[26px] border border-[#eadfca] bg-[#fffdf8] p-5 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#c89b3c]/45 hover:shadow-[0_20px_55px_rgba(15,23,42,0.12)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#eadfca] bg-white shadow-sm">
                  <ServiceIcon type={service.icon} />
                </div>

                <div>
                  <h3 className="text-lg font-extrabold leading-snug text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                </div>
              </div>

              <Link
                href={service.href}
                className="mt-5 inline-flex items-center text-sm font-extrabold text-[#0f7a5f] transition duration-300 hover:text-[#c89b3c]"
              >
                Read Article
                <span className="ml-2">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
