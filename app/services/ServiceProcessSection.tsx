import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClipboardList,
  FaMapMarkedAlt,
  FaUserCheck,
  FaUsersCog,
} from "react-icons/fa";

const processSteps = [
  {
    icon: <FaClipboardList />,
    step: "01",
    title: "Requirement Discussion",
    text: "We understand your service scope, site type, manpower requirement, duty hours and operational expectations.",
  },
  {
    icon: <FaMapMarkedAlt />,
    step: "02",
    title: "Site Understanding",
    text: "We review the work environment, movement areas, service priorities and day-to-day facility support needs.",
  },
  {
    icon: <FaUsersCog />,
    step: "03",
    title: "Service Planning",
    text: "We plan the right manpower, duty structure, supervision flow and reporting approach for smooth operations.",
  },
  {
    icon: <FaUserCheck />,
    step: "04",
    title: "Deployment & Support",
    text: "We deploy the team with proper coordination and continue to focus on discipline, quality and client support.",
  },
];

export default function ServiceProcessSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-700">
              Our Service Process
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              A simple and professional process for smooth facility service delivery.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              At Vipras Facility Management Solution, we believe good service
              starts with proper understanding and clear planning. Our process
              is designed to help clients get the right support with better
              coordination, dependable manpower and a more organized service
              experience.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              From the first discussion to final deployment, we focus on
              clarity, quality and practical execution so your facility can run
              safely, cleanly and efficiently.
            </p>

            <Link
              href="/contact-us"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white transition hover:bg-emerald-700"
            >
              Get Free Quote
              <FaArrowRight />
            </Link>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-5">
            <div className="overflow-hidden rounded-[1.5rem] bg-white">
              <Image
                src="/service-process-image.png.png"
                alt="Facility management team supervising site operations"
                width={1200}
                height={900}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
            </div>

            <div className="mt-4 rounded-[1.25rem] bg-white p-4 sm:p-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
                <FaCheckCircle />
                Planned. Managed. Trusted.
              </div>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                We combine planning, manpower coordination and quality-focused
                support to help businesses maintain smooth and dependable
                facility operations.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-700">
                  {item.icon}
                </div>

                <span className="text-4xl font-black leading-none text-slate-200">
                  {item.step}
                </span>
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
  );
}