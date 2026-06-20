import Image from "next/image";
import Link from "next/link";

export default function BlogHeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950">
      <Image
        src="/vipras-blog-hero-bg.jpg.jpg"
        alt="Vipras facility management blog insights"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/45" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(200,155,60,0.28),transparent_34%),radial-gradient(circle_at_82%_42%,rgba(15,122,95,0.18),transparent_32%)]" />

      <div className="mx-auto flex min-h-[500px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:min-h-[540px] lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e2bd68]/45 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#f5d27a] shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#f5d27a]" />
            Vipras Insights & Blog
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[58px]">
            Trusted Facility Management Insights for Smarter, Safer Business
            Operations
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Explore practical insights, service updates and expert knowledge
            across security, housekeeping, manpower, technical maintenance, fire
            safety and integrated facility management — delivered for businesses
            across India.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-[#c89b3c] px-7 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-black/25 transition duration-300 hover:-translate-y-0.5 hover:bg-[#e1b85a]"
            >
              Get Free Quote
              <span className="ml-2">→</span>
            </Link>

            <a
              href="#featured-blogs"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[#f5d27a]/70 hover:bg-white/15"
            >
              Explore Blogs
            </a>
          </div>

          <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-sm backdrop-blur-md">
              <p className="text-sm font-extrabold text-white">
                Pan India Reach
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-300">
                Facility support for businesses across India.
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-sm backdrop-blur-md">
              <p className="text-sm font-extrabold text-white">
                Corporate & Industrial
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-300">
                Trusted by professional work environments.
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-sm backdrop-blur-md">
              <p className="text-sm font-extrabold text-white">
                6 Core Services
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-300">
                Security, housekeeping, manpower, MEP and safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
