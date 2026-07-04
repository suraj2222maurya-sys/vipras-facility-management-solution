const qualityPoints = [
  {
    title: "Trained Workforce",
    text: "Verified and trained teams for safe, disciplined and dependable service delivery.",
  },
  {
    title: "Site Supervision",
    text: "Regular monitoring and coordination to maintain smooth daily facility operations.",
  },
  {
    title: "Safety Focus",
    text: "Workplace safety practices followed across security, housekeeping, manpower and maintenance support.",
  },
  {
    title: "Compliance Support",
    text: "Service approach suitable for corporate, industrial, institutional and government project environments.",
  },
];

export default function ComplianceQualitySection() {
  return (
    <section
  aria-labelledby="compliance-quality-heading"
  className="relative overflow-hidden bg-[#fff8ec] px-5 py-14 sm:px-8 lg:px-12"
>
     <div
  aria-hidden="true"
  className="absolute left-[-110px] top-[-80px] h-72 w-72 rounded-full bg-[#d6b06a]/25 blur-3xl"
/>
     <div
  aria-hidden="true"
  className="absolute right-[-120px] bottom-[-90px] h-80 w-80 rounded-full bg-[#eadfca]/80 blur-3xl"
/>
      <div
  aria-hidden="true"
  className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#d6b06a_1px,transparent_0)] bg-[length:30px_30px] opacity-15"
/>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.32em] text-[#b98a3c]">
              Compliance & Quality
            </p>

          <h2
  id="compliance-quality-heading"
  className="mt-4 text-3xl font-black leading-tight text-[#2f281f] sm:text-4xl"
>
              Service Standards Built for Safe and Accountable Operations
            </h2>
              <p className="mt-5 text-base font-medium leading-8 text-[#6f6254]">
              Vipras Facility Management Solutions follows a quality-focused
              approach with trained manpower, active supervision and reliable
              service coordination for professional facility operations.
              </p>
          </div>

          <div
  aria-label="Compliance and quality practices of Vipras Facility Management Solutions"
  className="grid gap-4 sm:grid-cols-2"
>
            {qualityPoints.map((point) => (
              <article
                key={point.title}
                className="group rounded-2xl border border-[#eadfca] bg-white/85 p-5 shadow-lg shadow-black/5 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-[#d6b06a] hover:shadow-xl hover:shadow-[#d6b06a]/15"
              >
              <div
  aria-hidden="true"
  className="mb-4 h-1 w-12 rounded-full bg-[#d6b06a] transition duration-500 group-hover:w-20"
/>

                <h3 className="text-lg font-black text-[#2f281f]">
                  {point.title}
                </h3>

                <p className="mt-3 text-sm font-medium leading-7 text-[#6f6254]">
                  {point.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}