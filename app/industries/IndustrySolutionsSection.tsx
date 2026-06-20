import Image from "next/image";
import {
  FaCheckCircle,
  FaTools,
  FaUserShield,
  FaUsers,
} from "react-icons/fa";

const solutions = [
  {
    icon: <FaUserShield />,
    title: "Security & Safety Support",
    text: "Professional security and fire safety manpower for sensitive, busy and high-responsibility environments.",
  },
  {
    icon: <FaUsers />,
    title: "Manpower & Operations",
    text: "Skilled, semi-skilled and unskilled manpower support for industrial, warehouse and business operations.",
  },
  {
    icon: <FaTools />,
    title: "Maintenance & Facility Care",
    text: "Technical maintenance, housekeeping and soft services for smoother day-to-day facility performance.",
  },
];

export default function IndustrySolutionsSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="order-2 lg:order-1 rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <div className="overflow-hidden rounded-[1.5rem] bg-white">
            <Image
              src="/industry-solutions-image.png.jpg"
              alt="Industry facility management solutions"
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#9A6A1F]">
            Industry Solutions
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            Practical facility solutions planned for your industry.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Vipras does not use one fixed approach for every client. We study
            the site type, working hours, manpower requirement, safety needs,
            hygiene expectations and operational priorities before suggesting a
            suitable facility service model.
          </p>

          <div className="mt-7 grid gap-4">
            {solutions.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4E7C7] text-[#9A6A1F]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-3 rounded-2xl border border-[#F4E7C7] bg-[#FFF9EC] p-4">
            <FaCheckCircle className="mt-1 shrink-0 text-[#C89B3C]" />
            <p className="text-sm font-semibold leading-7 text-slate-700">
              Service planning is available for Chennai, Tamil Nadu, Bangalore
              and Pan India project requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
