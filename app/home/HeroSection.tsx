"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {
  useEffect(() => {
    const videos = document.querySelectorAll<HTMLVideoElement>(
      "video[data-hero-video='true']"
    );

    videos.forEach((video) => {
      video.muted = true;
      video.playsInline = true;
     

      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Browser may delay autoplay until video is ready.
        });
      }
    });
  }, []);

  return (
    <>
      

      <section
      aria-label="Vipras Facility Management Services homepage hero section"
      className="w-full overflow-hidden bg-[#0f1713]"
    >
      <div className="sm:hidden">
      <video
  className="block h-auto w-full object-contain"
  src="/hero-poster.jpg.mp4"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  aria-label="Vipras Facility Management Services team video"
  data-hero-video="true"
>
  <track
    kind="captions"
    src="/hero-video-captions.vtt"
    srcLang="en"
    label="English captions"
    default
  />
</video>

        <div className="bg-[#FFFFF4] px-5 pb-8 pt-4">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#7A1F2B] drop-shadow-[0_2px_8px_rgba(255,255,255,0.35)]">
            Facility Management Services in Chennai & Pan India
          </p>

          <h1 className="text-3xl font-black leading-[1.12] text-[#07156f] drop-shadow-[0_2px_6px_rgba(255,255,255,0.45)]">
            Facility Management Services Company in Chennai for Safe, Clean &
            Well-Managed Workplaces
          </h1>

          <p className="mt-4 text-sm font-bold leading-7 text-[#2f281f] drop-shadow-[0_2px_5px_rgba(255,255,255,0.45)]">
            Vipras Facility Management Solutions helps businesses, industries,
            institutions, apartments and commercial properties in Chennai and
            Tamil Nadu maintain safe, clean and well-managed facilities through
            integrated facility management services, security services,
            housekeeping services, manpower services, Mechanical, Electrical and
            Plumbing maintenance, fire safety support and reliable day-to-day
            operations with Pan India service capability.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/contact-us"
              aria-label="Get a free facility management quote from Vipras"
              className="rounded-full bg-[#d6b06a] px-7 py-4 text-center text-sm font-black text-[#1f2a24] shadow-lg transition hover:bg-[#c89b3c]"
            >
              Get Free Quote
            </Link>

            <Link
              href="/services"
              aria-label="Explore Vipras facility management services"
              className="rounded-full border border-[#7A1F2B]/25 bg-white px-7 py-4 text-center text-sm font-black text-[#07156f] shadow-sm transition hover:bg-[#f8f1e7]"
            >
              Explore Services
            </Link>
          </div>

          <a
            href="https://wa.me/919710946484"
            aria-label="Chat with Vipras Facility Management Solutions on WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 hover:bg-[#1ebe5d] animate-pulse"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="h-7 w-7"
              fill="currentColor"
            >
              <path d="M16.04 3C8.86 3 3.02 8.83 3.02 16c0 2.29.6 4.52 1.74 6.49L3 29l6.68-1.74A12.93 12.93 0 0 0 16.04 29C23.22 29 29 23.17 29 16S23.22 3 16.04 3Zm0 23.8c-2.05 0-4.05-.55-5.8-1.59l-.42-.25-3.96 1.03 1.06-3.86-.27-.44A10.76 10.76 0 0 1 5.23 16c0-5.94 4.85-10.78 10.81-10.78 5.95 0 10.78 4.84 10.78 10.78 0 5.95-4.83 10.8-10.78 10.8Zm5.92-8.08c-.32-.16-1.9-.94-2.2-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.54.27-.75.27-1.4.19-1.54-.08-.13-.29-.21-.61-.37Z" />
            </svg>
          </a>

          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="rounded-2xl border border-[#7A1F2B]/15 bg-white px-3 py-3 text-center shadow-sm">
              <p className="text-sm font-black text-[#07156f]">Since 2007</p>
            </div>

            <div className="rounded-2xl border border-[#7A1F2B]/15 bg-white px-3 py-3 text-center shadow-sm">
              <p className="text-sm font-black text-[#07156f]">150+ Clients</p>
            </div>

            <div className="rounded-2xl border border-[#7A1F2B]/15 bg-white px-3 py-3 text-center shadow-sm">
              <p className="text-sm font-black text-[#07156f]">2500+ Staff</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative hidden min-h-[720px] w-full sm:block lg:min-h-[calc(100vh-76px)]">
       <video
  className="absolute inset-0 h-full w-full object-cover"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  aria-label="Vipras Facility Management Services team video"
  data-hero-video="true"
>
  <source src="/hero-poster.jpg.mp4" type="video/mp4" />
  <track
    kind="captions"
    src="/hero-video-captions.vtt"
    srcLang="en"
    label="English captions"
    default
  />
</video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

        <div className="relative z-10 flex min-h-[720px] w-full items-center px-8 py-20 lg:min-h-[calc(100vh-76px)] lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-[#FFD166] drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)]">
              Facility Management Services in Chennai & Pan India
            </p>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.12] text-[#FFF7E6] drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] lg:text-5xl xl:text-6xl">
              Facility Management Services Company in Chennai for Safe, Clean &
              Well-Managed Workplaces
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-bold leading-8 text-[#F8F1E7] drop-shadow-[0_3px_8px_rgba(0,0,0,0.95)]">
              Vipras Facility Management Solutions helps businesses,
              industries, institutions, apartments and commercial properties in
              Chennai and Tamil Nadu maintain safe, clean and well-managed
              facilities through integrated facility management services,
              security services, housekeeping services, manpower services,
              Mechanical, Electrical and Plumbing maintenance, fire safety
              support and reliable day-to-day operations with Pan India service
              capability.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
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

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact-us"
                aria-label="Get a free facility management quote from Vipras"
                className="rounded-full bg-[#d6b06a] px-8 py-4 text-center text-sm font-black text-[#1f2a24] shadow-xl shadow-black/25 transition hover:bg-[#c89b3c]"
              >
                Get Free Quote
              </Link>

              <Link
                href="/services"
                aria-label="Explore Vipras facility management services"
                className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-center text-sm font-black text-white backdrop-blur transition hover:bg-white/20"
              >
                Explore Services
              </Link>
            </div>

            <a
              href="https://wa.me/919710946484"
              aria-label="Chat with Vipras Facility Management Solutions on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/25 transition hover:scale-110 hover:bg-[#1ebe5d] animate-pulse"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 32 32"
                className="h-7 w-7"
                fill="currentColor"
              >
                <path d="M16.04 3C8.86 3 3.02 8.83 3.02 16c0 2.29.6 4.52 1.74 6.49L3 29l6.68-1.74A12.93 12.93 0 0 0 16.04 29C23.22 29 29 23.17 29 16S23.22 3 16.04 3Zm0 23.8c-2.05 0-4.05-.55-5.8-1.59l-.42-.25-3.96 1.03 1.06-3.86-.27-.44A10.76 10.76 0 0 1 5.23 16c0-5.94 4.85-10.78 10.81-10.78 5.95 0 10.78 4.84 10.78 10.78 0 5.95-4.83 10.8-10.78 10.8Zm5.92-8.08c-.32-.16-1.9-.94-2.2-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.54.27-.75.27-1.4.19-1.54-.08-.13-.29-.21-.61-.37Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
         </section>
    </>
  );
}