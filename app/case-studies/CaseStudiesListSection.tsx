import {
  FaBuilding,
  FaCheckCircle,
  FaFireExtinguisher,
  FaHospital,
  FaIndustry,
  FaTools,
  FaUserShield,
  FaWarehouse,
} from "react-icons/fa";

const caseStudies = [
  {
    icon: <FaIndustry />,
    title: "Industrial Facility Support",
    category: "Factory & Manufacturing",
    challenge:
      "The site needed disciplined manpower, safety awareness and smoother daily facility coordination.",
    solution:
      "Vipras planned manpower support, housekeeping coordination, security coverage and supervisor communication based on site needs.",
    outcome:
      "The facility gained a more organized service flow with better daily coordination and dependable support.",
  },
  {
    icon: <FaBuilding />,
    title: "Corporate Office Facility Support",
    category: "Corporate & Commercial",
    challenge:
      "The office environment required clean presentation, security support and responsive facility service handling.",
    solution:
      "Vipras aligned security, housekeeping and maintenance support with clear duties and client communication.",
    outcome:
      "The workplace became easier to manage with cleaner spaces and more professional front-line support.",
  },
  {
    icon: <FaHospital />,
    title: "Healthcare Facility Support",
    category: "Hospital & Healthcare",
    challenge:
      "The environment required hygiene focus, responsible manpower and careful facility coordination.",
    solution:
      "Vipras supported the site with disciplined manpower planning, cleaning support and daily supervision.",
    outcome:
      "The facility received a more structured service approach suitable for sensitive environments.",
  },
  {
    icon: <FaWarehouse />,
    title: "Warehouse Operations Support",
    category: "Warehouse & Logistics",
    challenge:
      "The site needed manpower, movement support, security control and regular facility upkeep.",
    solution:
      "Vipras planned manpower support, security coordination and housekeeping for operational areas.",
    outcome:
      "The warehouse achieved smoother daily movement support and better facility discipline.",
  },
  {
    icon: <FaTools />,
    title: "Technical Maintenance Support",
    category: "Building Maintenance",
    challenge:
      "The site required practical maintenance coordination for daily building support and issue handling.",
    solution:
      "Vipras provided technical maintenance support with planned attention to electrical, plumbing and general facility needs.",
    outcome:
      "The client received more dependable support for routine maintenance and facility care.",
  },
  {
    icon: <FaFireExtinguisher />,
    title: "Fire & Safety Manpower Support",
    category: "Safety-Focused Sites",
    challenge:
      "The facility needed trained safety manpower for emergency readiness and responsible site monitoring.",
    solution:
      "Vipras planned fire and safety manpower support for safety-sensitive areas and site coordination.",
    outcome:
      "The site improved its safety support structure with better preparedness and manpower availability.",
  },
];

export default function CaseStudiesListSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#9A6A1F]">
            Case Studies List
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            Service examples across different facility environments.
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Each case study highlights a common facility challenge, our practical
            support approach and the type of improvement clients expect from a
            professional facility management partner.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4E7C7] text-2xl text-[#9A6A1F]">
                  {item.icon}
                </div>

                <span className="rounded-full bg-white px-3 py-2 text-xs font-black text-slate-600">
                  {item.category}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-black text-slate-950">
                {item.title}
              </h3>

              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#9A6A1F]">
                    Challenge
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {item.challenge}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#9A6A1F]">
                    Vipras Approach
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {item.solution}
                  </p>
                </div>

                <div className="flex gap-3 rounded-2xl bg-white p-4">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#C89B3C]" />
                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    {item.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
