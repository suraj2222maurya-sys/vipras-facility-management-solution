import Link from "next/link";
import Image from "next/image";
const serviceBadges = [
  "Security",
  "Housekeeping",
  "Manpower",
  "Technical Maintenance",
  "Fire Safety",
  "Integrated FM",
];

export default function ServicesHeroSection() {
  return (
    <section
  aria-labelledby="services-hero-heading"
  className="relative overflow-hidden bg-[#fffaf2]"
>
      <div className="relative">
       <Image
  src="/services-hero-banner.png.png"
  alt="Vipras facility management services team providing security, housekeeping and technical maintenance in Chennai"
  width={1672}
  height={941}
fetchPriority="high"
loading="eager"
  sizes="100vw"
  quality={75}
  className="h-auto w-full object-contain"
/>

        <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[#fffaf2]/95 via-[#fffaf2]/70 to-transparent lg:block" />

        <div className="absolute inset-y-0 left-0 hidden w-full items-start pt-12 lg:flex xl:pt-16">
          <div className="mx-auto w-full max-w-7xl px-12">
            <div className="max-w-xl">
             <p className="text-xs font-black uppercase tracking-[0.32em] text-[#b98a3c]">
  Facility Management Services in Chennai & Pan India
</p>

<h1
  id="services-hero-heading"
  className="mt-3 text-3xl font-black leading-tight text-[#2f281f] xl:text-4xl"
>
  Facility Management Services in Chennai for Reliable Business Operations
</h1>

             <p className="mt-3 max-w-lg text-sm font-medium leading-7 text-[#6f6254] xl:text-base">
  Vipras Facility Management Solution delivers professional security,
  housekeeping, manpower supply, technical maintenance, fire safety and
  integrated facility management services for businesses, industries,
  hospitals, hotels, apartments and commercial properties across Chennai,
  Tamil Nadu, Bengaluru, Andhra Pradesh and Pan India.
</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {serviceBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-[#eadfca] bg-white/80 px-3 py-2 text-[11px] font-black text-[#4a3720] shadow-sm backdrop-blur"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
  href="/contact-us"
  aria-label="Request a free facility management service quote from Vipras"
  className="rounded-full bg-[#b98a3c] px-6 py-3 text-sm font-black text-white shadow-lg shadow-[#b98a3c]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#9f742f]"
>
  Get a Free Quote
</Link>

                <a
  href="https://wa.me/919710946484?text=Hello%20Vipras%20Facility%20Management%20Solution%2C%20I%20would%20like%20to%20know%20more%20about%20your%20facility%20management%20services."
  aria-label="Chat with Vipras on WhatsApp about facility management services"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border border-[#d6b06a] bg-[#fffaf2] px-6 py-3 text-sm font-black text-[#4a3720]"
>
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto px-5 py-6 sm:px-8 lg:hidden">
        <div className="rounded-[1.5rem] border border-[#eadfca] bg-white/90 p-5 shadow-xl shadow-black/10 backdrop-blur sm:p-6">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b98a3c]">
  Facility Management Services in Chennai & Pan India
</p>
          <p className="mt-3 text-2xl font-black leading-tight text-[#2f281f] sm:text-3xl">
  Facility Management Services in Chennai for Reliable Business Operations
</p>

         <p className="mt-3 text-sm font-medium leading-7 text-[#6f6254] sm:text-base">
  Vipras Facility Management Solution delivers professional security,
  housekeeping, manpower supply, technical maintenance, fire safety and
  integrated facility management services for businesses, industries,
  hospitals, hotels, apartments and commercial properties across Chennai,
  Tamil Nadu, Bengaluru, Andhra Pradesh and Pan India.
</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {serviceBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[#eadfca] bg-[#fff8ec] px-3 py-2 text-[11px] font-black text-[#4a3720]"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
<Link
  href="/contact-us"
  aria-label="Request a free facility management service quote from Vipras"
  className="rounded-full bg-[#b98a3c] px-6 py-3 text-sm font-black text-white shadow-lg shadow-[#b98a3c]/30"
>
  Get a Free Quote
</Link>

           <a
  href="https://wa.me/919710946484?text=Hello%20Vipras%20Facility%20Management%20Solution%2C%20I%20would%20like%20to%20know%20more%20about%20your%20facility%20management%20services."
  aria-label="Chat with Vipras on WhatsApp about facility management services"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border border-[#d6b06a] bg-white/80 px-6 py-3 text-sm font-black text-[#4a3720] shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white"
>
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}