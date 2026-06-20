import Link from "next/link";

export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#11160f]">
      <div className="relative">
        <img
          src="/about-hero-banner.png.png"
          alt="Vipras Facility Management Solution management team"
          className="h-auto w-full object-contain"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-5 pb-6 pt-24 sm:px-8 sm:pb-8 lg:px-12 lg:pb-12">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#f3d28b] sm:text-sm">
              About Vipras
            </p>

            <h1 className="mt-3 max-w-4xl text-2xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              Trusted Facility Management Partner for Safe, Clean and Efficient Workplaces
            </h1>

            <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-base lg:text-lg">
              Vipras Facility Management Solution supports businesses with
              professional teams, reliable supervision and facility services
              built for corporate, industrial, institutional and government
              project environments.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="rounded-full bg-[#b98a3c] px-6 py-3 text-sm font-black text-white shadow-lg shadow-black/25 transition hover:-translate-y-1 hover:bg-[#9f742f]"
              >
                Get Free Quote
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-[#2f281f]"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}