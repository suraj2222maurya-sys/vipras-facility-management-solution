const missionVision = [
  {
    label: "Our Mission",
    title: "To Make Workplaces Safer, Cleaner and Better Managed",
    text: "Our mission is to deliver dependable facility management services through trained manpower, strong supervision and professional service support that helps every client maintain a safe, clean and efficient workplace.",
  },
  {
    label: "Our Vision",
    title: "To Become a Trusted Facility Management Brand Across India",
    text: "Our vision is to grow as a reliable facility management partner for corporate, industrial, commercial, institutional and government project environments across Chennai, Tamil Nadu and Pan India.",
  },
];

const values = [
  "Trust",
  "Discipline",
  "Safety",
  "Quality",
  "Responsibility",
  "Professional Service",
];

export default function MissionVisionSection() {
  return (
    <section className="relative overflow-hidden bg-[#121812] px-5 py-16 sm:px-8 lg:px-12">
      <div className="absolute left-[-120px] top-[-80px] h-80 w-80 animate-pulse rounded-full bg-[#d6b06a]/30 blur-3xl" />
      <div className="absolute right-[-140px] bottom-[-90px] h-96 w-96 animate-pulse rounded-full bg-[#f3d28b]/20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#d6b06a_1px,transparent_0)] bg-[length:32px_32px] opacity-10" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#d6b06a]">
            Mission & Vision
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Built on Trust, Service Quality and Long-Term Client Confidence
          </h2>

          <p className="mt-5 text-base font-medium leading-8 text-white/75 sm:text-lg">
            Vipras Facility Management Solution works with a clear purpose: to
            support businesses with reliable people, organized operations and
            facility services that clients can depend on every day.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {missionVision.map((item) => (
            <article
              key={item.label}
              className="group rounded-[2rem] border border-[#d6b06a]/25 bg-gradient-to-br from-white/[0.12] via-white/[0.07] to-[#d6b06a]/10 p-7 shadow-2xl shadow-black/25 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-[#d6b06a]/60 hover:shadow-[#d6b06a]/20 sm:p-8"
            >
              <div className="mb-6 h-1 w-16 rounded-full bg-[#d6b06a] transition duration-500 group-hover:w-24 group-hover:bg-[#f3d28b]" />

              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d6b06a]">
                {item.label}
              </p>

              <h3 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl">
                {item.title}
              </h3>

              <p className="mt-5 text-base font-medium leading-8 text-white/75">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value}
              className="rounded-2xl border border-[#d6b06a]/20 bg-gradient-to-br from-white/[0.12] to-[#d6b06a]/10 p-5 text-center text-sm font-black text-white shadow-lg shadow-black/10 backdrop-blur transition duration-500 hover:-translate-y-1 hover:scale-[1.04] hover:border-[#d6b06a]/60 hover:text-[#f3d28b]"
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}