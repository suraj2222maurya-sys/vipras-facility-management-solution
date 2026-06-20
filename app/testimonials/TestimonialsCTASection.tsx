import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
  FaQuoteLeft,
  FaShieldAlt,
} from "react-icons/fa";

const points = [
  "Professional facility management support",
  "Security, housekeeping, manpower and maintenance services",
  "Service planning for Chennai, Tamil Nadu, Bangalore and Pan India",
];

export default function TestimonialsCTASection() {
  return (
    <section className="bg-white px-5 pb-20 pt-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#eadfca] bg-[#111111] shadow-2xl">
        <div className="relative p-7 sm:p-10 lg:p-12">
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#C89B3C]/25 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E8C46B]/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#E8C46B]">
                <FaQuoteLeft />
                Trusted Facility Support
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl">
                Ready to experience reliable facility management support?
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-[#F3E9D2]">
                Let Vipras Facility Management Solution help you build a safer,
                cleaner and better-managed business environment with dependable
                manpower, smooth coordination and professional service support.
              </p>

              <div className="mt-6 grid gap-3">
                {points.map((item) => (
                  <div key={item} className="flex gap-3">
                    <FaCheckCircle className="mt-1 shrink-0 text-[#E8C46B]" />
                    <p className="text-sm font-semibold leading-6 text-slate-100">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-[#E8C46B]/20 bg-white/10 p-5 backdrop-blur-md">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C89B3C] text-2xl text-[#111111]">
                <FaShieldAlt />
              </div>

              <h3 className="mt-5 text-xl font-black text-white">
                Start with a clear service requirement.
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Share your location, site type and service need. Our team will
                guide you with a practical facility management plan.
              </p>

              <Link
                href="/contact-us"
                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#C89B3C] px-7 py-4 text-sm font-black text-[#111111] transition hover:bg-[#E8C46B]"
              >
                Get Free Quote
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
