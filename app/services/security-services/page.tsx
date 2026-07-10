import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security Services in Chennai, Tamil Nadu & Pan India",
  description:
    "Vipras Facility Management Solution provides professional security services, security guard services and trained security manpower for corporate offices, factories, IT parks, hospitals, schools, warehouses, apartments, commercial properties and government project environments across Chennai, Tamil Nadu and Pan India.",
  keywords: [
    "security services in Chennai",
    "security guard services in Chennai",
    "security company in Chennai",
    "security services Tamil Nadu",
    "industrial security services",
    "corporate security services",
    "factory security services",
    "apartment security services",
    "hospital security services",
    "warehouse security services",
    "government project security services",
    "security manpower services Pan India",
  ],
  alternates: {
    canonical: "/services/security-services",
  },
  openGraph: {
    title: "Security Services in Chennai | Vipras Facility Management Solution",
    description:
      "Professional security services for corporate, industrial, commercial, residential, institutional and government project environments.",
    url: "/services/security-services",
    siteName: "Vipras Facility Management Solution",
    type: "website",
  },
};

const serviceTypes = [
  "Corporate Office Security",
  "Industrial Security",
  "Factory Security",
  "IT Park Security",
  "Hospital Security",
  "School & College Security",
  "Warehouse Security",
  "Apartment & Gated Community Security",
  "Commercial Building Security",
  "Government Project Security",
  "Reception & Access Control",
  "Night Patrolling Support",
];

const qualityPoints = [
  "Trained and disciplined security manpower",
  "Professional site supervision and reporting",
  "Access control and visitor management support",
  "Suitable for corporate, industrial and government sites",
];

export default function SecurityServicesPage() {
  return (
    <main className="overflow-hidden bg-[#fffaf2]">
      <section className="relative">
  <img
    src="/security-services-banner.png (2).png"
    alt="Vipras Facility Management Solution professional security services team"
    className="h-auto w-full object-contain"
  />

  <div className="absolute left-5 top-1/2 hidden max-w-xl -translate-y-1/2 rounded-3xl bg-black/45 p-5 text-white backdrop-blur-sm lg:left-12 lg:block lg:p-8">
    <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d6b06a] sm:text-sm">
      Vipras Security Services
    </p>

    <h2 className="mt-3 text-2xl font-black leading-tight sm:text-4xl lg:text-5xl">
  Professional Security Services for Your Workplace
</h2>

    <p className="mt-4 hidden max-w-lg text-sm font-medium leading-7 text-white/85 sm:block">
      Trained security manpower for corporate offices, factories, apartments,
      hospitals, warehouses and commercial properties across Chennai, Tamil Nadu
      and Pan India.
    </p>

    <Link
      href="/contact-us"
      className="mt-5 inline-flex rounded-full bg-[#d6b06a] px-6 py-3 text-sm font-black text-[#17130d] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-[#f3d28b]"
    >
      Get Security Quote
    </Link>
  </div>
  <div className="bg-gradient-to-b from-[#fff8e8] via-[#fffaf2] to-[#f4ead8] px-5 pb-8 pt-5 lg:hidden">
  <div className="rounded-[1.75rem] border border-[#ead8b8] bg-white p-6 shadow-xl shadow-[#6b4f2a]/10">
    <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b98a3c]">
      Vipras Security Services
    </p>

    <h1 className="mt-3 text-3xl font-black leading-tight text-[#2f281f]">
      Security Services in Chennai for Safe and Protected Workplaces
    </h1>

    <p className="mt-4 text-sm font-medium leading-7 text-[#6f6254]">
      Vipras provides trained security guards and professional security
      manpower for corporate offices, factories, IT parks, hospitals,
      apartments, warehouses and commercial properties across Chennai,
      Tamil Nadu, Bengaluru, Andhra Pradesh and Pan India.
    </p>

    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
      <Link
        href="/contact-us"
        aria-label="Request a security services quote from Vipras"
        className="rounded-full bg-[#b98a3c] px-6 py-3 text-center text-sm font-black text-white shadow-lg shadow-[#b98a3c]/25"
      >
        Get Security Quote
      </Link>

      <a
        href="https://wa.me/919710946484?text=Hello%20Vipras%20Facility%20Management%20Solution%2C%20I%20would%20like%20to%20know%20more%20about%20your%20security%20services."
        aria-label="Chat with Vipras about security services on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-[#d6b06a] bg-[#fffaf2] px-6 py-3 text-center text-sm font-black text-[#4a3720]"
      >
        WhatsApp Now
      </a>
    </div>
  </div>
</div>
</section>

      <section className="relative px-5 pb-14 pt-8 sm:px-8 lg:px-12">
        <div className="absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-[#d6b06a]/25 blur-3xl" />
        <div className="absolute right-[-140px] bottom-0 h-96 w-96 rounded-full bg-[#eadfca]/80 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#d6b06a_1px,transparent_0)] bg-[length:30px_30px] opacity-15" />

        <div className="relative mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-[#eadfca] bg-white/90 p-6 shadow-2xl shadow-black/10 backdrop-blur sm:p-8 lg:p-10">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#b98a3c] sm:text-sm">
              Security Services
            </p>

            <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight text-[#2f281f] sm:text-4xl lg:text-5xl">
              Professional Security Services for Safe, Controlled and
              Well-Protected Workplaces
            </h1>

            <p className="mt-5 max-w-4xl text-base font-medium leading-8 text-[#6f6254] sm:text-lg">
              Vipras Facility Management Solution provides trained security
              manpower for corporate offices, factories, IT parks, hospitals,
              schools, warehouses, apartments, commercial properties and
              government project environments across Chennai, Tamil Nadu and Pan
              India. Our security teams support daily protection, access control,
              visitor management, patrolling and site-level safety discipline.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="rounded-full bg-[#b98a3c] px-7 py-3 text-sm font-black text-white shadow-lg shadow-[#b98a3c]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#9f742f]"
              >
                Get Security Quote
              </Link>

              <a
                href="https://wa.me/919710946484?text=Hello%20Vipras%20Facility%20Management%20Solution%2C%20I%20would%20like%20to%20know%20more%20about%20your%20security%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#d6b06a] bg-[#fffaf2] px-7 py-3 text-sm font-black text-[#4a3720] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                WhatsApp Now
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.32em] text-[#b98a3c]">
                What We Provide
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-[#2f281f] sm:text-4xl">
                Security Manpower for Every Business Environment
              </h2>

              <p className="mt-5 text-base font-medium leading-8 text-[#6f6254]">
                Our security services are designed for businesses that need
                reliable manpower, strong discipline, active monitoring and a
                professional security presence. We provide security support for
                both private and government project requirements.
              </p>

              <div className="mt-6 space-y-4">
                {qualityPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-[#eadfca] bg-white/85 p-4 text-sm font-black leading-7 text-[#3d3328] shadow-lg shadow-black/5"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {serviceTypes.map((type) => (
                <div
                  key={type}
                  className="rounded-2xl border border-[#eadfca] bg-white/90 p-5 text-sm font-black text-[#3d3328] shadow-lg shadow-black/5 transition duration-300 hover:-translate-y-1 hover:border-[#d6b06a] hover:shadow-xl hover:shadow-[#d6b06a]/15"
                >
                  {type}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-[#eadfca] bg-gradient-to-r from-[#2f281f] to-[#121812] p-7 text-center shadow-2xl shadow-black/15 sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-[#d6b06a]">
              Need Security Manpower?
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl">
              Protect Your Workplace With a Trusted Security Services Partner
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-8 text-white/75">
              Connect with Vipras Facility Management Solution for professional
              security guard services in Chennai, Tamil Nadu and Pan India.
            </p>

            <Link
              href="/contact-us"
              className="mt-7 inline-flex rounded-full bg-[#d6b06a] px-8 py-4 text-sm font-black text-[#17130d] shadow-lg shadow-[#d6b06a]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#f3d28b]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}