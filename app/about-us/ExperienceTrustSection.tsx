const stats = [
  {
    value: "2007",
    label: "Established in Chennai",
    text: "Serving businesses with dependable facility management support since 2007.",
  },
  {
    value: "10+",
    label: "Years of Trust",
    text: "Strong experience in security, housekeeping, manpower and technical support.",
  },
  {
    value: "150+",
    label: "Business Sites",
    text: "Supporting corporate, industrial, commercial and institutional environments.",
  },
  {
    value: "1700+",
    label: "Team Members",
    text: "Trained workforce delivering reliable day-to-day facility operations.",
  },
];

const trustPoints = [
  "Chennai-based company with Tamil Nadu and Pan India service support",
  "Professional manpower for private, commercial and government projects",
  "Strong supervision, trained teams and dependable service coordination",
];

export default function ExperienceTrustSection() {
  return (
   <section
  aria-labelledby="experience-trust-heading"
  className="relative overflow-hidden bg-[#17130d] px-5 py-16 sm:px-8 lg:px-12"
>
  <div
  aria-hidden="true"
  className="absolute left-[-140px] top-[-120px] h-96 w-96 animate-pulse rounded-full bg-[#b98a3c]/30 blur-3xl"
/>
<div
  aria-hidden="true"
  className="absolute right-[-150px] bottom-[-120px] h-[420px] w-[420px] animate-pulse rounded-full bg-[#f3d28b]/20 blur-3xl"
/>
     <div
  aria-hidden="true"
  className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eadfca]/10 blur-3xl"
/>
<div
  aria-hidden="true"
  className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#d6b06a_1px,transparent_0)] bg-[length:34px_34px] opacity-10"
/>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#d6b06a]">
              Experience & Trust
            </p>

<h2
  id="experience-trust-heading"
  className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl"
>
              Proven Facility Management Experience Built on Reliability and
              Long-Term Client Confidence
            </h2>

<p className="mt-6 text-base font-medium leading-8 text-white/75 sm:text-lg">
  Since 2007, Vipras Facility Management Solutions has supported
  businesses with trained manpower, professional supervision and
  dependable facility operations across Chennai, Tamil Nadu and Pan
  India.
</p>

           <div
  aria-label="Trust points for Vipras Facility Management Solutions"
  className="mt-7 space-y-4"
>
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-[#d6b06a]/20 bg-white/[0.07] p-4 text-sm font-bold leading-7 text-white/85 shadow-lg shadow-black/10 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-[#d6b06a]/60 hover:bg-[#d6b06a]/10"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

         <div
  aria-label="Experience and trust statistics for Vipras Facility Management Solutions"
  className="grid gap-5 sm:grid-cols-2"
>
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="group rounded-[2rem] border border-[#d6b06a]/20 bg-gradient-to-br from-white/[0.12] via-white/[0.07] to-[#d6b06a]/10 p-6 shadow-2xl shadow-black/20 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-[#d6b06a]/60 hover:shadow-[#d6b06a]/20"
              >
               <div
  aria-hidden="true"
  className="mb-5 h-1 w-14 rounded-full bg-[#d6b06a] transition duration-500 group-hover:w-24 group-hover:bg-[#f3d28b]"
/> 

                <p className="text-4xl font-black text-[#f3d28b] sm:text-5xl">
                  {stat.value}
                </p>

                <h3 className="mt-3 text-lg font-black text-white">
                  {stat.label}
                </h3>

                <p className="mt-3 text-sm font-medium leading-7 text-white/70">
                  {stat.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}