import Link from "next/link";

export default function BlogCTASection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[34px] border border-[#eadfca] bg-slate-950 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.14)] sm:p-8 lg:p-10">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#c89b3c]/25 blur-3xl" />
          <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[#0f7a5f]/25 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-[#f5d27a]/35 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#f5d27a] backdrop-blur-md">
                Get Free Quote
              </div>

              <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Improve Your Facility Operations with a Trusted Partner?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
                Partner with Vipras Facility Management Solutions for reliable
                security, housekeeping, manpower, technical maintenance, fire
                safety and integrated facility management support across India.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                  Security
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                  Housekeeping
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                  Manpower
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                  Maintenance
                </span>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f5d27a]">
                Need support?
              </p>

              <p className="mt-3 text-2xl font-extrabold leading-snug text-white">
                Request a facility management quote today.
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Share your requirement and our team will help you with the right
                service plan for your site.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-full bg-[#c89b3c] px-7 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-black/25 transition duration-300 hover:-translate-y-0.5 hover:bg-[#e1b85a]"
                >
                  Get Free Quote
                  <span className="ml-2">→</span>
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/15"
                >
                  Explore Services
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
