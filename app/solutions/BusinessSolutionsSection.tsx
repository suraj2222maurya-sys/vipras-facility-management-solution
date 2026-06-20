import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClipboardCheck,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";

const solutionPoints = [
  "Understand your facility challenges before planning service",
  "Create practical service solutions based on site requirement",
  "Coordinate manpower, supervision and reporting for smooth work",
  "Support single-site and multi-location business needs",
];

export default function BusinessSolutionsSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#9A6A1F]">
            Business Solutions
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            Practical facility solutions for businesses that need better control.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Vipras Facility Management Solution helps companies solve daily
            facility challenges with planned security, housekeeping, manpower,
            technical maintenance, fire safety and integrated facility support.
            Our focus is simple: understand your site, plan the right solution
            and deliver dependable service.
          </p>

          <div className="mt-6 grid gap-3">
            {solutionPoints.map((item) => (
              <div key={item} className="flex gap-3">
                <FaCheckCircle className="mt-1 shrink-0 text-[#C89B3C]" />
                <p className="text-sm font-semibold leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/contact-us"
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#111111] px-7 py-4 text-sm font-black text-white transition hover:bg-[#9A6A1F]"
          >
            Discuss Your Requirement
            <FaArrowRight />
          </Link>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <div className="overflow-hidden rounded-[1.5rem] bg-white">
            <Image
              src="/business-solutions-image.png.png"
              alt="Business facility management solution planning"
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              { icon: <FaShieldAlt />, label: "Safe" },
              { icon: <FaClipboardCheck />, label: "Planned" },
              { icon: <FaHeadset />, label: "Supported" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-white p-4">
                <div className="text-xl text-[#C89B3C]">{item.icon}</div>
                <p className="mt-2 text-sm font-black text-slate-950">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
