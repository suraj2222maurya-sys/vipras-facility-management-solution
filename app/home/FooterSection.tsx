import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Industries", href: "/industries" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact-us" },
];

const services = [
  { name: "Security Services", href: "/services#security-services" },
  { name: "Housekeeping & Soft Services", href: "/services#housekeeping-soft-services" },
  { name: "Industrial Manpower Supply", href: "/services#industrial-manpower-supply" },
  { name: "Technical Maintenance", href: "/services#mep-maintenance-services" },
  { name: "Fire & Safety Manpower", href: "/services#fire-safety-manpower" },
  { name: "Integrated Facility Management", href: "/services#integrated-facility-management" },
];
const socialLinks = [
  { name: "Facebook", icon: FaFacebookF, href: "#", color: "bg-[#1877F2]" },
  { name: "Instagram", icon: FaInstagram, href: "#", color: "bg-[#E4405F]" },
  { name: "LinkedIn", icon: FaLinkedinIn, href: "#", color: "bg-[#0A66C2]" },
  { name: "YouTube", icon: FaYoutube, href: "#", color: "bg-[#FF0000]" },
  { name: "Twitter / X", icon: FaXTwitter, href: "#", color: "bg-black" },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/919710946484",
    color: "bg-[#25D366]",
  },
  {
    name: "Email",
    icon: MdEmail,
    href: "mailto:viprascrm@gmail.com",
    color: "bg-[#EA4335]",
  },
];


export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#121812] px-5 py-16 text-white sm:px-8 lg:px-12">
      <div className="absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-[#b98a3c]/20 blur-3xl" />
      <div className="absolute bottom-0 right-[-120px] h-96 w-96 rounded-full bg-[#d6b06a]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <h2 className="text-2xl font-black text-white">
              Vipras Facility Management Solution
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/75">

       Vipras Facility Management Solution delivers trusted security, housekeeping, manpower, technical maintenance, fire safety and integrated facility management services for corporate, industrial, commercial, institutional and government project environments.      

            </p> 
            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                 <a
  key={social.name}
  href={social.href}
  aria-label={social.name}
  target={social.href === "#" ? undefined : "_blank"}
  rel={social.href === "#" ? undefined : "noopener noreferrer"}
  className={`flex h-11 w-11 items-center justify-center rounded-full text-lg text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:scale-110 ${social.color}`}
>
  <Icon />
</a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-[#d6b06a]">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm font-semibold text-white/75 transition hover:translate-x-1 hover:text-[#d6b06a]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-[#d6b06a]">
              Services
            </h3>

            <div className="mt-5 space-y-3">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block text-sm font-semibold text-white/75 transition hover:translate-x-1 hover:text-[#d6b06a]"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-[#d6b06a]">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm leading-7 text-white/75">
              <a
  href="https://www.google.com/maps/search/?api=1&query=No-495%20A%2C%20Village%20High%20Rd%2C%20Sholinganallur%2C%20Chennai%2C%20Tamil%20Nadu%20600119"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-start gap-3 transition hover:text-[#d6b06a]"
>
  <MdLocationOn className="mt-1 text-xl text-[#d6b06a]" />
  <p>
    No-495 A, Village High Rd, Sholinganallur, Chennai, Tamil Nadu
    600119.
  </p>
    </a>
             <a
           href="https://wa.me/919710946484"
          target="_blank"
              rel="noopener noreferrer"
             className="flex items-start gap-3 transition hover:text-[#d6b06a]"
             >
  <MdPhone className="mt-1 text-xl text-[#d6b06a]" />
  <span>
    <span className="font-black text-white">Phone / WhatsApp:</span>
    <br />
    +91 97109 46484
  </span>
</a>

                  <a
  href="mailto:viprascrm@gmail.com"
  className="flex items-start gap-3 transition hover:text-[#d6b06a]"
>
  <MdEmail className="mt-1 text-xl text-[#d6b06a]" />
  <span>
    <span className="font-black text-white">Email:</span>
    <br />
    viprascrm@gmail.com
  </span>
</a>
            </div>

            <Link
              href="/contact-us"
              className="mt-7 inline-flex rounded-full bg-[#d6b06a] px-6 py-3 text-sm font-black text-[#121812] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-white"
            >
              Get Free Quote
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Vipras Facility Management Solution.
            All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy" className="transition hover:text-[#d6b06a]">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="transition hover:text-[#d6b06a]">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}