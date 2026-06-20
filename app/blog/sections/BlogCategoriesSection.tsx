const categories = [
  {
    name: "Security Services",
    description: "Site safety, access control and professional guarding topics.",
    icon: "🛡️",
  },
  {
    name: "Housekeeping & Soft Services",
    description: "Cleanliness, hygiene and daily facility care insights.",
    icon: "🧹",
  },
  {
    name: "Industrial Manpower",
    description: "Workforce support for factories, warehouses and operations.",
    icon: "👷",
  },
  {
    name: "Technical Maintenance",
    description: "Electrical, plumbing, HVAC and preventive maintenance topics.",
    icon: "🛠️",
  },
  {
    name: "Fire & Safety",
    description: "Safety manpower, emergency readiness and site protection.",
    icon: "🔥",
  },
  {
    name: "Integrated Facility Management",
    description: "Complete facility support through coordinated service delivery.",
    icon: "🏢",
  },
];

export default function BlogCategoriesSection() {
  return (
    <section className="bg-[#f8f5ef] px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-[#0f7a5f]/20 bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0f7a5f]">
            Blog Categories
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Explore Facility Management Topics by Service
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Browse useful blog topics across Vipras core services and understand
            how professional facility support helps different business
            environments run better.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="rounded-[24px] border border-[#eadfca] bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#c89b3c]/45 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fff5df] text-2xl">
                  {category.icon}
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-slate-950">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
