import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCogs,
  FaPhoneAlt,
} from "react-icons/fa";

const highlights = [
  "Security",
  "Housekeeping",
  "Manpower",
  "Maintenance",
  "Fire Safety",
  "Integrated Facility Management",
];

export default function SolutionsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#111111]">
      <Image
        src="/solutions-banner.png.png"
        alt="Professional facility management solutions by Vipras"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/88 to-[#111111]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/75 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8C46B]/35 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#E8C46B] backdrop-blur-md">
            <FaCogs />
            Facility Management Solutions
          </div>

          <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Smart facility solutions for safer, cleaner and smoother business operations.
          </h1>

          <p className="mt-5 text-sm leading-7 text-[#F3E9D2] sm:text-base sm:leading-8">
            Vipras Facility Management Solution provides practical facility
            management solutions for businesses that need reliable security,
            professional housekeeping, skilled manpower, technical maintenance,
            fire safety support and complete integrated facility management.
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
            We support corporate offices, factories, warehouses, hospitals,
            schools, apartments, commercial buildings and government project
            environments across Chennai, Tamil Nadu, Bangalore and Pan India.
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C89B3C] px-7 py-4 text-sm font-black text-[#111111] shadow-xl shadow-black/25 transition hover:bg-[#E8C46B]"
            >
              Get Free Quote
              <FaArrowRight />
            </Link>

            <a
              href="tel:+919710946484"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#E8C46B]/35 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur-md transition hover:bg-white hover:text-[#111111]"
            >
              <FaPhoneAlt />
              Call Now
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {highlights.map((item) => (
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
