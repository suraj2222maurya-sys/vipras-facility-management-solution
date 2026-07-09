import Image from "next/image";
import Link from "next/link";
export default function AboutHeroSection() {
  return (
    <section
  aria-labelledby="about-hero-heading"
  className="overflow-hidden bg-[#fffaf2]"
>
      <div className="sm:hidden">
      <Image
  src="/about-vipras-facility-management-team.png"
  alt="Vipras Facility Management Solutions facility management team for corporate, industrial and institutional workplaces"
  width={1600}
  height={900}
  sizes="100vw"
  loading="eager"
  fetchPriority="high"
  className="h-auto w-full object-contain"
/>

        <div className="bg-[#fffaf2] px-5 pb-8 pt-5">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#7a4f12]">
            About Vipras
          </p>

          <h1
  id="about-hero-heading"
  className="mt-3 text-3xl font-black leading-tight text-[#2f281f]"
>
            Trusted Facility Management Company in Chennai for Safe, Clean and
            Efficient Workplaces
          </h1>

          <p className="mt-4 text-sm font-semibold leading-7 text-[#6b5a45]">
            Vipras Facility Management Solutions supports businesses with
            professional teams, reliable supervision and facility management
            services built for corporate, industrial, institutional and
            government project environments across Chennai, Tamil Nadu and Pan
            India.
           </p>

          <div className="mt-6 flex flex-col gap-3">
           <Link
  href="/contact-us"
  aria-label="Get a facility management quote from Vipras Facility Management Solutions"
  className="rounded-full bg-[#b98a3c] px-6 py-3 text-center text-sm font-black text-white shadow-lg transition hover:bg-[#9f742f]"
>
  Get Free Quote
</Link>
            <Link
  href="/services"
  aria-label="Explore facility management services offered by Vipras Facility Management Solutions"
  className="rounded-full border border-[#b98a3c]/35 bg-white px-6 py-3 text-center text-sm font-black text-[#2f281f] shadow-sm transition hover:bg-[#f8f1e7]"
>
  Explore Services
</Link>
          </div>
        </div>
      </div>

      <div className="relative hidden overflow-hidden bg-[#11160f] sm:block">
      <Image
  src="/about-vipras-facility-management-team.png"
  alt="Vipras Facility Management Solutions facility management team for corporate, industrial and institutional workplaces"
  width={1600}
  height={900}
  sizes="100vw"
  loading="eager"
  fetchPriority="high"
  className="h-auto w-full object-contain"
/>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-8 pb-8 pt-24 lg:px-12 lg:pb-12">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#f3d28b]">
              About Vipras
            </p>

           <h2
  aria-hidden="true"
  className="mt-3 max-w-4xl text-4xl font-black leading-tight text-white lg:text-5xl"
>
  Trusted Facility Management Company in Chennai for Safe, Clean and
  Efficient Workplaces
</h2>

            <p className="mt-4 max-w-3xl text-base font-medium leading-7 text-white/90 lg:text-lg">
              Vipras Facility Management Solutions supports businesses with
              professional teams, reliable supervision and facility management
              services built for corporate, industrial, institutional and
              government project environments across Chennai, Tamil Nadu and Pan
              India.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                aria-label="Get a facility management quote from Vipras Facility Management Solutions"
                className="rounded-full bg-[#b98a3c] px-6 py-3 text-sm font-black text-white shadow-lg shadow-black/25 transition hover:-translate-y-1 hover:bg-[#9f742f]"
              >
                Get Free Quote
              </Link>

              <Link
                href="/services"
                aria-label="Explore facility management services offered by Vipras Facility Management Solutions"
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