import Link from "next/link";
import Image from "next/image";
const industries = [
  {
    name: "Manufacturing Plants",
    href: "/industries#manufacturing-plants",
  },
  {
    name: "IT Parks",
    href: "/industries#it-parks",
  },
  {
    name: "Hospitals",
    href: "/industries#hospitals",
  },
  {
    name: "Corporate Offices",
    href: "/industries#corporate-offices",
  },
  {
    name: "Warehouses",
    href: "/industries#warehouses",
  },
  {
    name: "Schools & Colleges",
    href: "/industries#schools-colleges",
  },
  {
    name: "Hotels & Hospitality",
    href: "/industries#hotels-hospitality",
  },
  {
    name: "Apartments & Gated Communities",
    href: "/industries#apartments-gated-communities",
  },
];

export default function IndustriesWeServeSection() {
  return (
<section
  id="industries-we-serve"
  aria-labelledby="industries-we-serve-heading"
  className="relative overflow-hidden bg-[#f8f1e7] px-5 pb-16 pt-64 sm:px-8 sm:py-16 lg:px-12"
>
    <Image
  src="/industries-bg.jpg"
  alt=""
  fill
  sizes="100vw"
  className="object-cover object-center"
  quality={60}
  loading="lazy"
/>


<div
  aria-hidden="true"
  className="absolute inset-0 bg-[#fffaf2]/10"
/>

<div
  aria-hidden="true"
  className="absolute inset-0 bg-gradient-to-b from-[#1f2a24]/35 via-[#1f2a24]/55 to-[#1f2a24]/80 sm:bg-gradient-to-r sm:from-[#1f2a24]/85 sm:via-[#1f2a24]/55 sm:to-[#1f2a24]/25"
/>

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl rounded-3xl bg-[#1f2a24]/55 p-5 backdrop-blur-[2px] sm:bg-transparent sm:p-0 sm:backdrop-blur-0">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d6b06a] sm:text-sm">
            Industries We Serve
          </p>

         <h2
  id="industries-we-serve-heading"
  className="mt-3 max-w-3xl text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl"
>
  Trusted Facility Management Support for High-Demand Industries in Chennai and Across India
</h2>

          <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-white/90 sm:text-lg">
  Vipras partners with high-demand industries that require consistent safety,
  hygiene, manpower discipline and operational control. From industrial plants
  and IT campuses to hospitals, hospitality properties and residential
  communities, our teams deliver structured facility support with trained staff,
  active supervision and service standards built for long-term reliability.
</p>
        </div>

        <div
  aria-label="Industries served by Vipras Facility Management Solutions"
  className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
>
          {industries.map((industry) => (
           <Link
  key={industry.href}
  href={industry.href}
  aria-label={`View Vipras facility management services for ${industry.name}`} 
  className="rounded-2xl border border-white/25 bg-white/20 px-5 py-5 text-sm font-black text-white shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:border-[#d6b06a] hover:bg-[#d6b06a] hover:text-[#1f2a24]"
>
  {industry.name}
</Link>
          ))}
        </div>
      </div>
    </section>
  );
}