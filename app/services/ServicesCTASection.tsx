import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const ctaPoints = [
  "Security, housekeeping, manpower, maintenance and IFM support",
  "Service coverage across Chennai, Tamil Nadu, Bangalore and Pan India",
  "Professional planning, supervision and quality-focused service delivery",
];

export default function ServicesCTASection() {
  return (
    <section className="bg-white px-5 pb-20 pt-4 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#111111] shadow-2xl">
          <div className="absolute inset-0">
            <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#C89B3C]/25 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(17,17,17,0.98),rgba(38,28,12,0.96))]" />
            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:44px_44px]" />
          </div>

          <div className="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:p-12">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E8C46B]">
                Get Professional Facility Support
              </p>

              <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                Ready to improve your facility operations with a trusted service partner?
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-[#F3E9D2]">
                Tell us your site location, service requirement and manpower
                need. Vipras Facility Management Solution will guide you with a
                practical and professional service plan for your business.
              </p>

              <div className="mt-7 grid gap-3">
                {ctaPoints.map((item) => (
                  <div key={item} className="flex gap-3">
                    <FaCheckCircle className="mt-1 shrink-0 text-[#E8C46B]" />
                    <p className="text-sm font-semibold leading-6 text-slate-100">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C89B3C] px-8 py-4 text-sm font-black text-[#111111] shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[#E8C46B]"
                >
                  Get Free Quote
                  <FaArrowRight />
                </Link>

                <a
                  href="tel:+919710946484"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-[#E8C46B]/40 bg-white/10 px-8 py-4 text-sm font-black text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white hover:text-[#111111]"
                >
                  <FaPhoneAlt />
                  Call Now
                </a>
              </div>
            </div>

            <div className="rounded-[1.7rem] border border-[#E8C46B]/20 bg-white/[0.08] p-6 backdrop-blur-xl">
              <h3 className="text-2xl font-black text-white">
                Contact Details
              </h3>

              <div className="mt-6 space-y-5">
                <a
                  href="tel:+919710946484"
                  className="flex gap-4 rounded-2xl bg-white/10 p-4 transition hover:bg-white hover:text-[#111111]"
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
                  className="flex gap-4 rounded-2xl bg-white/10 p-4 transition hover:bg-white hover:text-[#111111]"
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

                <div className="flex gap-4 rounded-2xl bg-white/10 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C89B3C] text-[#111111]">
                    <FaMapMarkerAlt />
                  </span>
                  <span>
                    <span className="block text-xs font-black uppercase tracking-[0.18em] text-[#E8C46B]">
                      Office
                    </span>
                    <span className="mt-1 block text-sm font-bold leading-6 text-white">
                      No-495 A, Village High Rd, Sholinganallur, Chennai,
                      Tamil Nadu 600119
                    </span>
                  </span>
                </div>
              </div>

              <Link
                href="/contact-us"
                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black text-[#111111] transition hover:bg-[#E8C46B]"
              >
                Open Contact Page
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
