import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const points = [
  "Share your industry type and service requirement",
  "Get a practical facility management plan",
  "Start with single-service or complete IFM support",
];

export default function IndustriesCTASection() {
  return (
    <section className="bg-white px-5 pb-20 pt-4 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#111111] shadow-2xl">
        <div className="relative p-7 sm:p-10 lg:p-12">
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#C89B3C]/25 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E8C46B]">
                Get Free Quote
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                Need facility management support for your industry?
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-[#F3E9D2]">
                Tell us your location, industry type, service requirement and
                manpower need. Vipras Facility Management Solution will guide
                you with a suitable service plan.
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
              <a
                href="tel:+919710946484"
                className="flex gap-4 rounded-2xl bg-white/10 p-4 text-white transition hover:bg-white hover:text-[#111111]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C89B3C] text-[#111111]">
                  <FaPhoneAlt />
                </span>
                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.18em] text-[#E8C46B]">
                    Phone / WhatsApp
                  </span>
                  <span className="mt-1 block text-sm font-bold">
                    +91 97109 46484
                  </span>
                </span>
              </a>

              <a
                href="mailto:viprascrm@gmail.com"
                className="mt-4 flex gap-4 rounded-2xl bg-white/10 p-4 text-white transition hover:bg-white hover:text-[#111111]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C89B3C] text-[#111111]">
                  <FaEnvelope />
                </span>
                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.18em] text-[#E8C46B]">
                    Email
                  </span>
                  <span className="mt-1 block break-all text-sm font-bold">
                    viprascrm@gmail.com
                  </span>
                </span>
              </a>

              <Link
                href="/contact-us"
                className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#C89B3C] px-7 py-4 text-sm font-black text-[#111111] transition hover:bg-[#E8C46B]"
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
