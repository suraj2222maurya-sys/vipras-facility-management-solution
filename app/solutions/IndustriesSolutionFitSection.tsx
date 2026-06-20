import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaBuilding,
  FaHospital,
  FaIndustry,
  FaSchool,
  FaWarehouse,
} from "react-icons/fa";

const industries = [
  {
    icon: <FaIndustry />,
    title: "Factories & Plants",
    text: "Facility support for production, manpower, safety and maintenance needs.",
  },
  {
    icon: <FaBuilding />,
    title: "Offices & IT Parks",
    text: "Premium support for professional and commercial work environments.",
  },
  {
    icon: <FaWarehouse />,
    title: "Warehouses",
    text: "Manpower, security and housekeeping support for movement-heavy sites.",
  },
  {
    icon: <FaHospital />,
    title: "Hospitals",
    text: "Clean, disciplined and responsible facility service support.",
  },
  {
    icon: <FaSchool />,
    title: "Schools",
    text: "Safe and managed environments for education campuses.",
  },
];

export default function IndustriesSolutionFitSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#9A6A1F]">
              Industries Solution Fit
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              Facility solutions matched to your industry and site environment.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              A factory, office, hospital, school or warehouse has different
              operational needs. Vipras plans facility solutions according to
              your environment, service priority, manpower requirement and
              expected quality level.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {industries.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="text-xl text-[#C89B3C]">{item.icon}</div>
                  <h3 className="mt-3 text-base font-black text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/contact-us"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#111111] px-7 py-4 text-sm font-black text-white transition hover:bg-[#9A6A1F]"
            >
              Get Industry Support
              <FaArrowRight />
            </Link>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <div className="overflow-hidden rounded-[1.5rem] bg-white">
              <Image
                src="/industries-solution-fit-image.png.png"
                alt="Industrial and warehouse facility management solution"
                width={1200}
                height={900}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
