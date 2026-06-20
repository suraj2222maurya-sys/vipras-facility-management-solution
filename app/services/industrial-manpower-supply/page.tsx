import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industrial Manpower Supply in Chennai, Tamil Nadu & Pan India",
  description:
    "Vipras Facility Management Solution provides industrial manpower supply, skilled manpower, semi-skilled manpower and unskilled manpower for manufacturing companies, packaging plants, factories, logistics, transport, loading and unloading operations across Chennai, Tamil Nadu, Andhra Pradesh, Bangalore and Pan India.",
  keywords: [
    "industrial manpower supply in Chennai",
    "manpower supply services in Chennai",
    "factory manpower supplier Chennai",
    "manufacturing manpower supply",
    "packaging plant manpower",
    "loading unloading manpower",
    "logistics manpower supply",
    "transport manpower supply",
    "skilled manpower supply",
    "semi skilled manpower supply",
    "unskilled manpower supply",
    "manpower supply Tamil Nadu",
    "manpower supply Andhra Pradesh",
    "manpower supply Bangalore",
    "manpower supply Pan India",
  ],
  alternates: {
    canonical: "/services/industrial-manpower-supply",
  },
  openGraph: {
    title:
      "Industrial Manpower Supply | Vipras Facility Management Solution",
    description:
      "Trusted manpower supply for manufacturing companies, factories, packaging plants, logistics, transport, loading and unloading operations.",
    url: "/services/industrial-manpower-supply",
    siteName: "Vipras Facility Management Solution",
    type: "website",
  },
};

const manpowerTypes = [
  "Manufacturing Company Manpower",
  "Factory Manpower Supply",
  "Packaging Plant Manpower",
  "Loading & Unloading Manpower",
  "Logistics Manpower",
  "Transport Support Manpower",
  "Warehouse Manpower",
  "Production Line Manpower",
  "Skilled Manpower",
  "Semi-Skilled Manpower",
  "Unskilled Manpower",
  "Bulk Manpower Deployment",
];

const qualityPoints = [
  "Large-scale manpower supply for small, medium and large companies",
  "Trained, disciplined and site-ready manpower deployment",
  "Support for Chennai, Tamil Nadu, Andhra Pradesh, Bangalore and Pan India",
  "Professional coordination for factories, plants, logistics and industrial sites",
];

const processSteps = [
  {
    title: "Requirement Study",
    text: "We understand the manpower requirement, work type, shift needs, skill level and site conditions.",
  },
  {
    title: "Manpower Planning",
    text: "We plan the right workforce strength for skilled, semi-skilled or unskilled manpower needs.",
  },
  {
    title: "Deployment",
    text: "We deploy manpower for manufacturing, packaging, loading, unloading, transport and industrial operations.",
  },
  {
    title: "Supervision & Support",
    text: "We coordinate with the client team to maintain attendance, discipline, productivity and smooth daily operations.",
  },
];

export default function IndustrialManpowerSupplyPage() {
  return (
    <main className="overflow-hidden bg-[#fffaf2]">
      <section className="relative">
        <img
          src="/industrial-manpower-supply-banner.png.png"
          alt="Vipras Facility Management Solution industrial manpower supply team"
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
              Industrial Manpower Supply
            </p>

            <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight text-[#2f281f] sm:text-4xl lg:text-5xl">
              Trusted Industrial Manpower Supply for Manufacturing, Packaging,
              Logistics and Factory Operations
            </h1>

            <p className="mt-5 max-w-4xl text-base font-medium leading-8 text-[#6f6254] sm:text-lg">
              Vipras Facility Management Solution provides reliable industrial
              manpower supply for manufacturing companies, packaging plants,
              factories, warehouses, logistics operations, transport support,
              loading and unloading work, production lines and large-scale
              industrial sites. We support small, medium and large companies
              across Chennai, Tamil Nadu, Andhra Pradesh, Bangalore and Pan
              India with skilled, semi-skilled and unskilled manpower.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="rounded-full bg-[#b98a3c] px-7 py-3 text-sm font-black text-white shadow-lg shadow-[#b98a3c]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#9f742f]"
              >
                Get Manpower Quote
              </Link>

              <a
                href="https://wa.me/919710946484?text=Hello%20Vipras%20Facility%20Management%20Solution%2C%20I%20would%20like%20to%20know%20more%20about%20your%20industrial%20manpower%20supply%20services."
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
                Manpower Support for Every Industrial Requirement
              </h2>

              <p className="mt-5 text-base font-medium leading-8 text-[#6f6254]">
                Our manpower services are designed for businesses that need
                dependable workforce support, shift-based deployment, disciplined
                manpower, bulk staffing and smooth daily industrial operations.
                Whether it is a manufacturing company, packaging plant,
                logistics hub, transport operation or loading and unloading site,
                Vipras helps clients manage workforce needs with confidence.
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
              {manpowerTypes.map((type) => (
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
                A Reliable Manpower Deployment Process
              </h2>

              <p className="mt-5 text-base font-medium leading-8 text-[#6f6254]">
                We follow a clear process to understand client needs, plan the
                right manpower strength and support smooth daily site operations.
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
              Need Industrial Manpower?
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl">
              Get Reliable Manpower Support for Your Factory, Plant or
              Industrial Site
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-8 text-white/75">
              Connect with Vipras Facility Management Solution for trusted
              manpower supply in Chennai, Tamil Nadu, Andhra Pradesh, Bangalore
              and Pan India.
            </p>

            <Link
              href="/contact-us"
              className="mt-7 inline-flex rounded-full bg-[#d6b06a] px-8 py-4 text-sm font-black text-[#17130d] shadow-lg shadow-[#d6b06a]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#f3d28b]"
            >
              Get Manpower Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
