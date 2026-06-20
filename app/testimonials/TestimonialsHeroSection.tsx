import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";

export default function TestimonialsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f1e7]">
      <Image
        src="/testimonials-hero-banner.jpg.jpg"
        alt="Client testimonials for Vipras Facility Management Solution"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_28%]"
      />

      <div className="relative mx-auto flex min-h-[390px] max-w-7xl items-center px-5 py-10 sm:min-h-[420px] sm:px-8 lg:min-h-[455px] lg:px-10">
        <div className="max-w-[610px] rounded-[1.6rem] border border-white/65 bg-white/70 p-5 shadow-xl backdrop-blur-[3px] sm:p-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#9A6A1F] shadow-sm">
            <FaQuoteLeft />
            Testimonials
          </div>

          <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#07111f] sm:text-4xl lg:text-[44px]">
            Trusted client feedback for dependable facility support.
          </h1>

          <p className="mt-4 max-w-xl text-sm font-semibold leading-7 text-[#243247] sm:text-base">
            Vipras Facility Management Solution is trusted for professional
            security, housekeeping, manpower, technical maintenance, fire safety
            and integrated facility management support across Chennai, Tamil
            Nadu, Bangalore and Pan India.
          </p>

          <Link
            href="/contact-us"
            className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-[#C89B3C] px-7 py-4 text-sm font-black text-[#111111] shadow-lg transition hover:bg-[#b88937]"
          >
            Get Free Quote
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
