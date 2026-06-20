import Image from "next/image";
import Link from "next/link";

export default function ContactHeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950">
      <Image
        src="/contact-hero-bg.png.png"
        alt="Contact Vipras Facility Management Solutions"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full object-fill"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/86 to-slate-950/20" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_25%,rgba(200,155,60,0.22),transparent_34%),radial-gradient(circle_at_82%_55%,rgba(15,122,95,0.14),transparent_35%)]" />

      <div className="mx-auto flex min-h-[480px] max-w-7xl items-center px-4 py-14 sm:px-6 lg:min-h-[520px] lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-[#f5d27a]/35 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#f5d27a] backdrop-blur-md">
            Contact Vipras
          </div>

          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[56px]">
            Let’s Discuss Your Facility Management Requirement
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Connect with Vipras Facility Management Solutions for security,
            housekeeping, manpower, technical maintenance, fire safety and
            integrated facility support across India.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="tel:+919710946484"
              className="inline-flex items-center justify-center rounded-full bg-[#c89b3c] px-7 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-black/25 transition duration-300 hover:-translate-y-0.5 hover:bg-[#e1b85a]"
            >
              Call Now
              <span className="ml-2">→</span>
            </Link>

            <Link
              href="https://wa.me/919710946484"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[#f5d27a]/70 hover:bg-white/15"
            >
              WhatsApp Now
              <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
              <p className="text-sm font-extrabold text-white">
                Quick Response
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-300">
                Share your requirement with our team.
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
              <p className="text-sm font-extrabold text-white">
                Pan India Support
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-300">
                Facility services for different business sites.
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
              <p className="text-sm font-extrabold text-white">
                Multiple Services
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-300">
                Security, housekeeping, manpower and maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
