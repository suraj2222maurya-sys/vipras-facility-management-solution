const highlights = [
  {
    value: "2007",
    label: "Established in Chennai",
  },
  {
    value: "10+",
    label: "Years of Industry Trust",
  },
  {
    value: "Tamil Nadu",
    label: "Strong Regional Presence",
  },
  {
    value: "Pan India",
    label: "Service Support Network",
  },
];

export default function CompanyOverviewSection() {
  return (
   <section
  aria-labelledby="company-overview-heading"
  className="relative overflow-hidden bg-[#fffaf2] px-5 py-16 sm:px-8 lg:px-12"
>
      <div
  aria-hidden="true"
  className="absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-[#d6b06a]/30 blur-3xl"
/>
     <div
  aria-hidden="true"
  className="absolute right-[-120px] bottom-10 h-96 w-96 rounded-full bg-[#eadfca]/80 blur-3xl"
/>
     <div
  aria-hidden="true"
  className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#d6b06a_1px,transparent_0)] bg-[length:30px_30px] opacity-20"
/>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#b98a3c]">
              Company Overview
            </p>

              <h2
  id="company-overview-heading"
  className="mt-4 text-3xl font-black leading-tight text-[#2f281f] sm:text-4xl lg:text-5xl"
>
              A Trusted Facility Management Company Serving Chennai, Tamil Nadu
              and Pan India
            </h2>

            <p className="mt-6 text-base font-medium leading-8 text-[#6f6254] sm:text-lg">
              Established in 2007, Vipras Facility Management Solutions is a
              Chennai-based facility management company providing dependable
              security services, housekeeping services, manpower support,
              technical maintenance, fire safety manpower and integrated facility
              management solutions.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#eadfca] bg-white/85 p-6 shadow-2xl shadow-black/10 backdrop-blur sm:p-8">
            <p className="text-base font-medium leading-8 text-[#6f6254] sm:text-lg">
              From Tamil Nadu to Pan India service support, Vipras works with
              corporate offices, industrial units, factories, IT parks,
              hospitals, schools, apartments, commercial properties,
              institutions and government project environments. Our focus is to
              deliver clean, safe, well-managed and professionally supervised
              workplaces through trained teams and reliable operations.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#eadfca] bg-[#fffaf2] p-5"
                >
                  <p className="text-2xl font-black text-[#b98a3c]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#4a3720]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            "Trained facility management workforce for daily business operations",
            "Facility management support for private and government projects",
            "Reliable service delivery across Tamil Nadu and Pan India",
          ].map((text) => (
            <div
              key={text}
              className="rounded-2xl border border-[#eadfca] bg-white/80 p-5 text-sm font-black leading-7 text-[#3d3328] shadow-lg shadow-black/5"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}