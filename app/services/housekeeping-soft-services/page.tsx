import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Housekeeping Services in Chennai, Tamil Nadu & Pan India",
  description:
    "Vipras Facility Management Solution provides professional housekeeping and soft services for corporate offices, IT parks, hospitals, schools, hotels, factories, apartments, commercial buildings and government project environments across Chennai, Tamil Nadu and Pan India.",
  keywords: [
    "housekeeping services in Chennai",
    "housekeeping company in Chennai",
    "corporate housekeeping services",
    "office housekeeping services",
    "hospital housekeeping services",
    "industrial housekeeping services",
    "factory housekeeping services",
    "apartment housekeeping services",
    "commercial housekeeping services",
    "soft services facility management",
    "housekeeping services Tamil Nadu",
    "housekeeping services Pan India",
    "government project housekeeping services",
  ],
  alternates: {
    canonical: "/services/housekeeping-soft-services",
  },
  openGraph: {
    title: "Housekeeping Services in Chennai | Vipras Facility Management Solution",
    description:
      "Professional housekeeping and soft facility services for clean, hygienic and well-managed workplaces.",
    url: "/services/housekeeping-soft-services",
    siteName: "Vipras Facility Management Solution",
    type: "website",
  },
};

const serviceTypes = [
  "Corporate Office Housekeeping",
  "IT Park Housekeeping",
  "Hospital Housekeeping",
  "School & College Housekeeping",
  "Hotel & Hospitality Housekeeping",
  "Factory & Industrial Housekeeping",
  "Apartment & Gated Community Housekeeping",
  "Commercial Building Housekeeping",
  "Warehouse Housekeeping",
  "Government Project Housekeeping",
  "Deep Cleaning Support",
  "Washroom Hygiene Support",
];

const qualityPoints = [
  "Trained housekeeping staff with neat uniform and discipline",
  "Daily cleaning schedules and site-level supervision",
  "Hygiene-focused cleaning for safe and pleasant workplaces",
  "Suitable for corporate, industrial, residential and government sites",
];

const processSteps = [
  {
    title: "Site Understanding",
    text: "We understand the property type, daily footfall, cleaning needs and hygiene expectations.",
  },
  {
    title: "Team Deployment",
    text: "We deploy trained housekeeping staff with proper grooming, uniform and cleaning responsibility.",
  },
  {
    title: "Daily Supervision",
    text: "Supervisors monitor cleaning quality, staff attendance, material usage and daily work completion.",
  },
  {
    title: "Quality Improvement",
    text: "We review service quality regularly and improve cleaning standards based on client feedback.",
  },
];

export default function HousekeepingSoftServicesPage() {
  return (
    <main className="overflow-hidden bg-[#fffaf2]">
      <section className="relative">
        <img
          src="/housekeeping-soft-services-banner.png (4).png.png"
          alt="Vipras Facility Management Solution professional housekeeping and soft services team"
          className="h-auto w-full object-contain"
        />
      </section>

      <section className="relative px-5 pb-14 pt-8 sm:px-8 lg:px-12">
        <div className="absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-[#d6b06a]/25 blur-3xl" />
        <div className="absolute right-[-140px] bottom-0 h-96 w-96 rounded-full bg-[#eadfca]/80 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#d6b06a_1px,transparent_0)] bg-[length:30px_30px] opacity-15" />

        <div className="relative mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-[#eadfca] bg-white/90 p-6 shadow-2xl shadow-black/10 backdrop-blur sm:p-8 lg:p-10">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#b98a3c] sm:text-sm">
              Housekeeping & Soft Services
            </p>

            <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight text-[#2f281f] sm:text-4xl lg:text-5xl">
              Professional Housekeeping Services for Clean, Hygienic and
              Well-Managed Workplaces
            </h1>

            <p className="mt-5 max-w-4xl text-base font-medium leading-8 text-[#6f6254] sm:text-lg">
              Vipras Facility Management Solution provides reliable
              housekeeping and soft services for corporate offices, IT parks,
              hospitals, schools, hotels, factories, apartments, commercial
              buildings, warehouses and government project environments across
              Chennai, Tamil Nadu and Pan India. Our trained housekeeping teams
              help clients maintain clean, safe, hygienic and professional
              workplaces every day.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="rounded-full bg-[#b98a3c] px-7 py-3 text-sm font-black text-white shadow-lg shadow-[#b98a3c]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#9f742f]"
              >
                Get Housekeeping Quote
              </Link>

              <a
                href="https://wa.me/919710946484?text=Hello%20Vipras%20Facility%20Management%20Solution%2C%20I%20would%20like%20to%20know%20more%20about%20your%20housekeeping%20and%20soft%20services."
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
                Housekeeping Support for Every Facility Environment
              </h2>

              <p className="mt-5 text-base font-medium leading-8 text-[#6f6254]">
                Our housekeeping services are designed for businesses that need
                clean floors, hygienic washrooms, dust-free workspaces, managed
                common areas, presentable reception zones and disciplined daily
                cleaning operations.
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

          <div className="mt-10 rounded-[2rem] border border-[#eadfca] bg-white/90 p-6 shadow-2xl shadow-black/10 backdrop-blur sm:p-8 lg:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.32em] text-[#b98a3c]">
                Our Working Process
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-[#2f281f] sm:text-4xl">
                A Clean and Organized Service Process
              </h2>

              <p className="mt-5 text-base font-medium leading-8 text-[#6f6254]">
                We follow a structured housekeeping process to maintain service
                quality, staff discipline and daily cleaning consistency.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-[#eadfca] bg-[#fffaf2] p-5 shadow-lg shadow-black/5 transition duration-300 hover:-translate-y-1 hover:border-[#d6b06a]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d6b06a] text-sm font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="mt-4 text-lg font-black text-[#2f281f]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-[#6f6254]">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-[#eadfca] bg-gradient-to-r from-[#2f281f] to-[#121812] p-7 text-center shadow-2xl shadow-black/15 sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-[#d6b06a]">
              Need Housekeeping Support?
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl">
              Keep Your Workplace Clean, Hygienic and Professionally Managed
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-8 text-white/75">
              Connect with Vipras Facility Management Solution for professional
              housekeeping services in Chennai, Tamil Nadu and Pan India.
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
