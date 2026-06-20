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
        />

         <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />

        <div className="relative z-10 flex min-h-[680px] w-full items-center px-5 py-20 sm:min-h-[720px] sm:px-8 lg:min-h-[calc(100vh-76px)] lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#d6b06a] sm:text-sm">
              Premium Facility Management Services
            </p>

           <h1 className="max-w-3xl text-3xl font-black leading-[1.12] text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Premium Facility Management Services Built for Safe, Efficient & High-Performing Workplaces
            </h1>

            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/85 sm:text-lg">
              Vipras Facility Management Solution helps businesses in Chennai and across
              Tamil Nadu maintain safe, clean and well-managed workplaces through
              dependable facility management services. Our trained teams support security,
              housekeeping, manpower, MEP maintenance, fire safety and compliance needs
              with a strong focus on professionalism, reliability and day-to-day
               operational excellence.
</p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
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