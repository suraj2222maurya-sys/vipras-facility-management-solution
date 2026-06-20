import Image from "next/image";
import Link from "next/link";

export default function LatestArticlesSection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <Image
        src="/latest-articles-bg.png.png"
        alt="Latest facility management articles from Vipras"
        fill
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/84 to-slate-950/30" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_25%,rgba(200,155,60,0.22),transparent_34%),radial-gradient(circle_at_82%_55%,rgba(15,122,95,0.18),transparent_35%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-[#f5d27a]/35 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#f5d27a] backdrop-blur-md">
            Latest Article
          </div>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            What Smart Businesses Expect from a Facility Management Partner
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-200">
            A dependable facility partner does more than provide manpower. It
            protects daily operations, improves workplace discipline, supports
            hygiene, reduces service interruptions and helps every site feel
            professionally managed.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
              Security
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
              Housekeeping
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
              Maintenance
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
              Manpower
            </span>
          </div>

          <Link
            href="/blog/what-businesses-expect-from-facility-management-partner"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#c89b3c] px-7 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-black/25 transition duration-300 hover:-translate-y-0.5 hover:bg-[#e1b85a]"
          >
            Read Latest Article
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
