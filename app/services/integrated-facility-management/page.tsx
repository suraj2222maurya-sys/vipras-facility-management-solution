import Link from "next/link";
import type { Metadata } from "next";
import {
  FaArrowRight,
  FaBuilding,
  FaCheckCircle,
  FaClipboardCheck,
  FaCogs,
  FaFireExtinguisher,
  FaHeadset,
  FaIndustry,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaTools,
  FaUserShield,
  FaUsers,
  FaWarehouse,
  FaBroom,
} from "react-icons/fa";

export const metadata: Metadata = {
  title:
    "Integrated Facility Management Services in Chennai, Tamil Nadu & Pan India",
  description:
    "Vipras Facility Management Solution provides integrated facility management services including security, housekeeping, manpower, technical maintenance, fire and safety manpower, compliance support and complete facility operations for corporate, industrial, commercial, residential, healthcare, education, warehouse and government project environments across Chennai, Tamil Nadu, Andhra Pradesh, Bangalore and Pan India.",
  keywords: [
    "integrated facility management services in Chennai",
    "facility management company in Chennai",
    "integrated facility management Tamil Nadu",
    "facility management services Pan India",
    "security housekeeping manpower services",
    "technical maintenance facility management",
    "fire safety manpower facility management",
    "IFM services Chennai",
    "facility management for industries",
    "facility management for government projects",
    "Vipras Facility Management Solution",
  ],
  alternates: {
    canonical: "/services/integrated-facility-management",
  },
  openGraph: {
    title:
      "Integrated Facility Management Services | Vipras Facility Management Solution",
    description:
      "Premium integrated facility management services for security, housekeeping, manpower, technical maintenance, fire safety and complete site operations.",
    url: "/services/integrated-facility-management",
    siteName: "Vipras Facility Management Solution",
    type: "website",
  },
};

const coreServices = [
  {
    icon: FaUserShield,
    title: "Security Services",
    text: "Professional security manpower for corporate offices, factories, IT parks, apartments, warehouses, hospitals, schools and government project environments.",
  },
  {
    icon: FaBroom,
    title: "Housekeeping & Soft Services",
    text: "Clean, hygienic and well-maintained facility support for commercial buildings, industries, hospitals, schools, hotels, apartments and public spaces.",
  },
  {
    icon: FaUsers,
    title: "Industrial Manpower Supply",
    text: "Skilled, semi-skilled and unskilled manpower support for production units, warehouses, logistics hubs, loading areas and industrial operations.",
  },
  {
    icon: FaTools,
    title: "Technical Maintenance",
    text: "Electrical, plumbing, HVAC, AC repair, building maintenance, preventive maintenance and breakdown support for smooth facility operations.",
  },
  {
    icon: FaFireExtinguisher,
    title: "Fire & Safety Manpower",
    text: "Trained fire wardens, safety stewards and emergency response support for safer workplaces and compliance-focused environments.",
  },
  {
    icon: FaCogs,
    title: "Complete Facility Operations",
    text: "One coordinated facility management model with manpower planning, supervision, reporting, quality checks and client communication.",
  },
];

const industries = [
  {
    icon: FaIndustry,
    title: "Factories & Manufacturing Units",
    text: "Integrated manpower, housekeeping, safety and technical support for production-focused industrial environments.",
  },
  {
    icon: FaBuilding,
    title: "Corporate Offices & IT Parks",
    text: "Premium facility support for business parks, office campuses, IT companies and commercial workspaces.",
  },
  {
    icon: FaWarehouse,
    title: "Warehouses & Logistics Hubs",
    text: "Security, manpower, housekeeping and maintenance support for storage, movement and dispatch environments.",
  },
  {
    icon: FaShieldAlt,
    title: "Hospitals, Schools & Government Projects",
    text: "Disciplined, reliable and supervised facility teams for sensitive, public-facing and compliance-focused sites.",
  },
];

const process = [
  {
    title: "Requirement Study",
    text: "We understand your site type, working hours, manpower count, risk areas, cleaning needs, maintenance needs and operational expectations.",
  },
  {
    title: "Service Planning",
    text: "We prepare a suitable facility management plan covering manpower, duties, supervision, reporting flow and service responsibility.",
  },
  {
    title: "Team Deployment",
    text: "We deploy the right team with clear instructions, duty allocation, grooming standards and site coordination process.",
  },
  {
    title: "Supervision & Reporting",
    text: "We monitor attendance, service quality, client feedback, replacement support, issue escalation and daily operational coordination.",
  },
];

const qualityPoints = [
  "Single-window facility management support for multiple services",
  "Experienced company working since 2007",
  "Service coverage across Chennai, Tamil Nadu, Andhra Pradesh, Bangalore and Pan India",
  "Suitable for corporate, industrial, residential, healthcare, education and government project environments",
  "Supervised manpower deployment with quality checks",
  "Friendly coordination and professional client communication",
  "Flexible service planning based on site requirement",
  "CTA-focused page structure for lead generation",
];

export default function IntegratedFacilityManagementPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="relative min-h-[720px] overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-24 lg:min-h-[760px] lg:px-10 lg:py-28">
  <div className="absolute inset-0">
    <img
      src="/vipras-ifm-hero-team-banner.webp.png"
      alt="Vipras Facility Management professional team"
      className="h-full w-full object-cover object-center"
    />

    <div className="absolute inset-0 bg-slate-950/25 lg:bg-slate-950/0" />

<div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/25 to-slate-950/70 lg:bg-gradient-to-r lg:from-slate-950/70 lg:via-slate-950/25 lg:to-transparent" />
  </div>

  <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center lg:min-h-[620px]">
    <div className="max-w-3xl">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-emerald-100 backdrop-blur-md">
        <FaShieldAlt className="text-emerald-300" />
        Professional Facility Management Team
      </div>

      <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
        Trusted People. Disciplined Operations. Reliable Facility Support.
      </h1>

      <p className="mt-6 max-w-3xl text-base leading-8 text-slate-100 sm:text-lg">
        Vipras Facility Management Solution supports businesses with trained
        security teams, housekeeping staff, manpower support, technical
        maintenance and complete facility operations. Our leadership and site
        teams work together to keep your workplace safe, clean, organized and
        professionally managed every day.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/contact-us"
          className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-500 px-7 py-4 text-sm font-black text-slate-950 shadow-xl shadow-emerald-950/30 transition hover:bg-emerald-400"
        >
          Get Facility Support
          <FaArrowRight />
        </Link>

        <a
          href="tel:+919710946484"
          className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur-md transition hover:bg-white hover:text-slate-950"
        >
          <FaPhoneAlt />
          Speak With Vipras
        </a>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-slate-100">
        {[
          "Security",
          "Housekeeping",
          "Manpower",
          "Maintenance",
          "Facility Operations",
        ].map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-700">
              Complete IFM Support
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              A premium facility management solution built for modern business
              environments.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Facility management is not only about manpower. It is about
              keeping the site safe, clean, functional, disciplined and
              professionally managed every day. Vipras supports businesses with
              integrated services that reduce coordination gaps, improve
              accountability and help your team focus on core business work.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Our integrated facility management service is suitable for
              factories, manufacturing units, IT parks, corporate offices,
              hospitals, schools, colleges, hotels, warehouses, apartments,
              commercial buildings and government project environments. We
              understand each site requirement and plan the right service model
              according to your operations.
            </p>

            <div className="mt-8">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white transition hover:bg-emerald-700"
              >
                Request IFM Proposal
                <FaArrowRight />
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Single Vendor Control", "Manage multiple facility needs with one trusted partner."],
              ["Better Supervision", "Clear reporting, site coordination and quality monitoring."],
              ["Flexible Deployment", "Service planning based on your site, shift and manpower need."],
              ["Lead-Ready Support", "Fast contact flow through quote and call CTA buttons."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <FaCheckCircle className="text-2xl text-emerald-600" />
                <h3 className="mt-5 text-xl font-black text-slate-950">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-700">
              Services Included
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              Integrated facility management services under one dependable
              system.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Vipras combines core facility services into one structured model
              so your site can receive professional manpower, safer operations,
              better hygiene and smoother maintenance support.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((item) => (
              <div
                key={item.title}
                className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white">
                  <item.icon />
                </div>
                <h3 className="mt-6 text-xl font-black text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-700">
              Industries We Serve
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              Built for industrial, commercial, residential, healthcare,
              education and government project environments.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Every site has different needs. A factory needs operational
              discipline, a corporate office needs premium front-line service, a
              warehouse needs strong movement control and a hospital or school
              needs responsible manpower with clean and safe surroundings.
              Vipras plans facility services according to real site conditions.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {industries.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xl text-white">
                  <item.icon />
                </div>
                <h3 className="mt-5 text-lg font-black text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-300">
              How We Work
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              A planned, supervised and quality-focused facility management
              process.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Our work process is designed to reduce client stress. We study
              your site, plan the service model, deploy the right team and keep
              monitoring the service quality through proper coordination.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-lg font-black text-slate-950">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="rounded-[2rem] bg-gradient-to-br from-emerald-600 to-slate-950 p-8 text-white shadow-2xl shadow-emerald-100">
            <FaClipboardCheck className="text-5xl text-emerald-100" />

            <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">
              Why choose Vipras for Integrated Facility Management?
            </h2>

            <p className="mt-5 text-base leading-8 text-emerald-50">
              Since 2007, Vipras Facility Management Solution has supported
              companies with dependable facility services. Our integrated model
              gives clients better control, smoother coordination and
              professional service delivery through a single trusted partner.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black text-slate-950 transition hover:bg-slate-100"
              >
                Contact Our Team
                <FaArrowRight />
              </Link>

              <a
                href="tel:+919710946484"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 px-7 py-4 text-sm font-black text-white transition hover:bg-white hover:text-slate-950"
              >
                <FaPhoneAlt />
                Call Now
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {qualityPoints.map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  <FaCheckCircle />
                </div>
                <p className="text-sm font-semibold leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-700">
                Service Coverage
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
                Integrated facility management services in Chennai, Tamil Nadu,
                Andhra Pradesh, Bangalore and Pan India.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Vipras supports both single-site and multi-location facility
                requirements. Whether your site is a factory, office, hospital,
                school, apartment, warehouse, hotel, commercial building or
                government project environment, our team can discuss your
                requirement and plan a suitable integrated facility management
                solution.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-950 p-6 text-white lg:min-w-[320px]">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-emerald-400" />
                <div>
                  <h3 className="font-black">
                    Vipras Facility Management Solution
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    No-495 A, Village High Rd, Sholinganallur, Chennai, Tamil
                    Nadu 600119
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-white/10 pt-5">
                <a
                  href="tel:+919710946484"
                  className="flex items-center gap-3 text-sm font-bold text-white"
                >
                  <FaPhoneAlt className="text-emerald-400" />
                  +91 97109 46484
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950">
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-300">
                Need Complete Facility Management?
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                Talk to Vipras and get a practical IFM service plan for your
                site.
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
                Share your site type, location, manpower requirement and service
                scope. Our team will guide you with a suitable integrated
                facility management solution.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-500 px-8 py-4 text-sm font-black text-slate-950 transition hover:bg-emerald-400"
              >
                Get Free Quote
                <FaArrowRight />
              </Link>

              <a
                href="tel:+919710946484"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-slate-950"
              >
                <FaPhoneAlt />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/20 bg-slate-950/95 p-3 backdrop-blur-xl sm:hidden">
        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:+919710946484"
            className="flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-black text-slate-950"
          >
            <FaPhoneAlt />
            Call Now
          </a>

          <Link
            href="/contact-us"
            className="flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-xs font-black text-slate-950"
          >
            Get Quote
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </main>
  );
}
