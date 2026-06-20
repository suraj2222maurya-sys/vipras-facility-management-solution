import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
  FaIndustry,
} from "react-icons/fa";

const badges = [
  "Corporate",
  "Industrial",
  "Healthcare",
  "Education",
  "Warehouse",
  "Government Projects",
];

export default function IndustriesHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#111111]">
      <Image
        src="/industries-hero-banner.png.jpg"
        alt="Industries served by Vipras Facility Management Solution"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/88 to-[#111111]/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8C46B]/35 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#E8C46B] backdrop-blur-md">
            <FaIndustry />
            Industries We Serve
          </div>

          <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Facility management support for every business environment.
          </h1>

          <p className="mt-5 text-sm leading-7 text-[#F3E9D2] sm:text-base sm:leading-8">
            Vipras Facility Management Solution supports corporate, industrial,
            commercial, healthcare, education, warehouse, hospitality,
            residential and government project environments with dependable
            facility services.
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
            Since 2007, we have helped businesses maintain safer, cleaner and
            better-managed facilities across Chennai, Tamil Nadu, Bangalore and
            Pan India.
          </p>

          <Link
            href="/contact-us"
            className="mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-[#C89B3C] px-7 py-4 text-sm font-black text-[#111111] shadow-xl shadow-black/25 transition hover:bg-[#E8C46B]"
          >
            Get Free Quote
            <FaArrowRight />
          </Link>

          <div className="mt-7 flex flex-wrap gap-2">
            {badges.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-bold text-white backdrop-blur-md"
              >
                <FaCheckCircle className="text-[#E8C46B]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
