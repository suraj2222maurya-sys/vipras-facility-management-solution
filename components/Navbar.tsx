"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Industries", href: "/industries" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Insights Dashboard", href: "/insights-dashboard" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#eadfca] bg-[#f8f1e7]/95 shadow-sm backdrop-blur-xl">
      <nav className="flex w-full items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8 xl:px-10">
        <Link href="/" className="flex min-w-0 items-center">
       <div className="relative h-[55px] w-[155px] sm:h-[65px] sm:w-[185px] md:h-[72px] md:w-[210px] lg:h-[78px] lg:w-[235px] xl:h-[85px] xl:w-[260px]">
  <Image
    src="/vipras-logo (2).png"
    alt="Vipras Facility Management Solutions"
    fill
    priority
    quality={60}
    sizes="(max-width: 640px) 155px, (max-width: 768px) 185px, (max-width: 1024px) 210px, (max-width: 1280px) 235px, 260px"
    className="object-contain"
  />
</div>
        </Link>

       <div className="ml-auto hidden min-w-0 items-center justify-end gap-1 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-bold text-[#4A2F12] transition hover:bg-[#efe2cf] hover:text-[#0f7a5f] 2xl:px-3.5 2xl:text-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 xl:flex">
          <Link
            href="/contact-us"
            className="whitespace-nowrap rounded-full bg-[#b98a3c] px-5 py-2.5 text-sm font-black text-[#fff7e8] shadow-xl shadow-black/15 transition hover:bg-[#0f7a5f] 2xl:px-6 2xl:py-3"
          >
            Get Free Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d8c7aa] bg-[#fffaf2] text-[#4A2F12] xl:hidden"
          aria-label="Toggle navigation menu"
        >
          <span className="text-2xl leading-none">{isOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[#eadfca] bg-[#f8f1e7] px-4 py-4 xl:hidden">
          <div className="mx-auto flex max-w-[1500px] flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-bold text-[#2f281f] hover:bg-[#efe2cf] hover:text-[#0f7a5f]"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-xl bg-[#1f2a24] px-4 py-3 text-center text-sm font-black text-[#4A2F12]"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}