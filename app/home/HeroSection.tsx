import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0f1713]">
      <div className="relative min-h-[680px] w-full sm:min-h-[720px] lg:min-h-[calc(100vh-76px)]">
        <video
  className="absolute inset-0 h-full w-full object-contain md:object-cover"
  src="/hero-video.mp4.mp4"
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  aria-label="Vipras Facility Management Services team video"
/>

         <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />

        <div className="relative z-10 flex min-h-[680px] w-full items-start px-5 pt-12 pb-20 sm:min-h-[720px] sm:items-center sm:px-8 sm:py-20 lg:min-h-[calc(100vh-76px)] lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-5 bg-gradient-to-r from-[#ff8bdc] via-[#b58cff] to-[#25d8ff] bg-clip-text text-xs font-black uppercase tracking-[0.28em] text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] sm:text-sm">
              Facility Management Services in Chennai & Pan India
            </p>

          <h1 className="mt-3 max-w-[92%] bg-gradient-to-r from-[#16b8e8] via-[#f4fbff] to-[#ff8a24] bg-clip-text text-2xl font-black leading-[1.12] text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)] sm:max-w-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
  Facility Management Services Company in Chennai for Safe, Clean & Well-Managed Workplaces
</h1>

<p className="mt-6 hidden max-w-2xl bg-gradient-to-r from-[#a8ff1a] via-[#ff8a24] to-[#35f0ff] bg-clip-text text-base font-bold leading-8 text-transparent drop-shadow-[0_3px_8px_rgba(0,0,0,0.95)] sm:block sm:text-lg">
  Vipras Facility Management Solutions helps businesses, industries,
  institutions, apartments and commercial properties in Chennai and Tamil Nadu
  maintain safe, clean and well-managed facilities through integrated facility
  management services, security services, housekeeping services, manpower
  services, Mechanical, Electrical and Plumbing maintenance, fire safety support
  and reliable day-to-day operations with Pan India service capability.
</p>
<div className="mt-7 hidden flex-wrap gap-3 sm:flex">
  <div className="rounded-full border border-white/25 bg-black/35 px-5 py-3 text-sm font-black text-white backdrop-blur">
    Since 2007
  </div>

  <div className="rounded-full border border-white/25 bg-black/35 px-5 py-3 text-sm font-black text-white backdrop-blur">
    150+ Clients
  </div>

  <div className="rounded-full border border-white/25 bg-black/35 px-5 py-3 text-sm font-black text-white backdrop-blur">
    2500+ Staff
  </div>
</div>
          <div className="mt-9 hidden flex-col gap-4 sm:flex sm:flex-row">
              <Link
                href="/contact-us"
                className="rounded-full bg-[#d6b06a] px-8 py-4 text-center text-sm font-black text-[#1f2a24] shadow-xl shadow-black/25 transition hover:bg-[#c89b3c]"
              >
                Get Free Quote
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-center text-sm font-black text-white backdrop-blur transition hover:bg-white/20"
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