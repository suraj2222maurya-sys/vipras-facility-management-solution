import Image from "next/image";
import Link from "next/link";

function CallIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M6.6 4.5l2.4-.6 2 4.6-1.5 1.1c.9 1.9 2.4 3.4 4.3 4.3l1.1-1.5 4.6 2-.6 2.4c-.3 1.1-1.4 1.8-2.5 1.6C10.9 17.5 6.5 13.1 5.6 7.6 5.4 6.5 5.5 4.8 6.6 4.5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M15 5.5c1.8.5 3 1.7 3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function InsightsHeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020817]">
      <Image
        src="/insights-hero-bg.png.png"
        alt="Vipras service insights dashboard"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full object-fill"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#020817]/10 via-transparent to-transparent" />

      <div className="mx-auto flex min-h-[500px] max-w-7xl items-center px-4 py-14 sm:px-6 lg:min-h-[520px] lg:px-8">
        <div className="max-w-[560px]">
          <div className="inline-flex items-center rounded-full border border-blue-300/45 bg-blue-500/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-blue-100 backdrop-blur-sm">
            Vipras Service Insights
          </div>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-[52px]">
            Growing Facility Service Interest Across India
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-100 drop-shadow-[0_3px_12px_rgba(0,0,0,0.65)] sm:text-lg">
            Explore positive service insights, popular facility solutions and
            regional business interest across security, housekeeping, manpower,
            maintenance, fire safety and integrated facility management.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="tel:+919710946484"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#c89b3c] px-7 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-black/25 transition duration-300 hover:-translate-y-0.5 hover:bg-[#e1b85a]"
            >
              <CallIcon />
              Call Now
              <span>→</span>
            </Link>

            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/70 hover:bg-white/15"
            >
              Discuss Requirement
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
