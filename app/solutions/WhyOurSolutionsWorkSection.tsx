import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClipboardCheck,
  FaHandshake,
  FaUsersCog,
} from "react-icons/fa";

const workingPoints = [
  {
    icon: <FaClipboardCheck />,
    title: "Clear Planning",
    text: "We understand the requirement before suggesting manpower or service scope.",
  },
  {
    icon: <FaUsersCog />,
    title: "Managed Teams",
    text: "We focus on duty clarity, attendance, grooming and service coordination.",
  },
  {
    icon: <FaHandshake />,
    title: "Client Friendly",
    text: "Our process keeps communication simple, practical and responsive.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality Focus",
    text: "We work to keep the facility safer, cleaner and easier to manage.",
  },
];

export default function WhyOurSolutionsWorkSection() {
  return (
    <section className="bg-[#111111] px-5 py-16 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="rounded-[2rem] border border-[#E8C46B]/20 bg-white/10 p-4 shadow-2xl backdrop-blur-md">
          <div className="overflow-hidden rounded-[1.5rem] bg-[#181818]">
            <Image
              src="/why-solutions-work-image.png.png"
              alt="Facility management team quality coordination"
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E8C46B]">
            Why Our Solutions Work
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            People, process and supervision together create better facility results.
          </h2>

          <p className="mt-5 text-base leading-8 text-[#F3E9D2]">
            Our solutions work because we do not treat facility management as
            only manpower supply. We combine planning, trained teams,
            supervision, reporting and client coordination to support daily
            operations with confidence.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {workingPoints.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/10 p-4"
              >
                <div className="text-2xl text-[#E8C46B]">{item.icon}</div>
                <h3 className="mt-3 text-base font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/contact-us"
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#C89B3C] px-7 py-4 text-sm font-black text-[#111111] transition hover:bg-[#E8C46B]"
          >
            Talk to Our Team
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
