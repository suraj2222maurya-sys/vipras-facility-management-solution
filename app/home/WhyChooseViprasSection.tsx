export default function WhyChooseViprasSection() {
  return (
    <section className="relative overflow-hidden bg-[#10130f] px-5 py-20 sm:px-8 lg:px-12">
     <div className="absolute inset-0 bg-[url('/why-choose-bg.png.png')] bg-contain bg-center bg-no-repeat" />
     <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />

      <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center py-10">
  <div className="max-w-3xl rounded-3xl border border-white/20 bg-black/35 p-6 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-8 lg:p-10">
    <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d6b06a] sm:text-sm">
      Why Choose Vipras
    </p>

    <h2 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
      A Trusted Facility Management Partner for Reliable, Safe and Well-Managed Workplaces
    </h2>

    <p className="mt-5 text-base font-medium leading-8 text-white/90 sm:text-lg">
      Vipras Facility Management Solution combines trained manpower, strong site
      supervision, compliance-focused operations and responsive service support
      to help businesses maintain clean, secure and efficient environments
      across Chennai, Tamil Nadu and India.
    </p>

    <div className="mt-7 grid gap-3 sm:grid-cols-2">
      <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
        <h3 className="text-sm font-black text-white">Verified Workforce</h3>
        <p className="mt-2 text-sm leading-6 text-white/75">
          Trained teams deployed with discipline, responsibility and professional standards.
        </p>
      </div>

      <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
        <h3 className="text-sm font-black text-white">Strong Supervision</h3>
        <p className="mt-2 text-sm leading-6 text-white/75">
          Active site monitoring to maintain service quality and operational control.
        </p>
      </div>

      <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
        <h3 className="text-sm font-black text-white">Compliance Focused</h3>
        <p className="mt-2 text-sm leading-6 text-white/75">
          Service processes built around safety, documentation and business reliability.
        </p>
      </div>

      <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
        <h3 className="text-sm font-black text-white">Pan-India Support</h3>
        <p className="mt-2 text-sm leading-6 text-white/75">
          Facility support for corporate, industrial and commercial sites across India.
        </p>
      </div>
    </div>
  </div>
</div>
    </section>
  );
}
