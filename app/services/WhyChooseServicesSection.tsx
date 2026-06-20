import Link from "next/link";
import {
  FaArrowRight,
  FaAward,
  FaCheckCircle,
  FaClipboardCheck,
  FaHeadset,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaUsersCog,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaAward />,
    title: "Experience Since 2007",
    text: "Years of practical facility management experience with professional service delivery.",
  },
  {
    icon: <FaUsersCog />,
    title: "Managed Manpower",
    text: "Suitable manpower planning based on your site, duty timing and service requirement.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Process-Driven Work",
    text: "Duty planning, supervision, attendance focus, reporting and quality checks.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safety & Quality Focus",
    text: "Support for safe, clean, disciplined and professionally managed facilities.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Wide Service Coverage",
    text: "Service support across Chennai, Tamil Nadu, Andhra Pradesh, Bangalore and Pan India.",
  },
  {
    icon: <FaHeadset />,
    title: "Responsive Support",
    text: "Smooth communication, quick coordination and dependable client support.",
  },
];

export default function WhyChooseServicesSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-10">
      <div className="absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 animate-pulse rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 animate-pulse rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(15,23,42,0.98),rgba(2,6,23,0.98))]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:46px_46px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-300">
            Why Choose Our Services
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Trusted facility management services for safer, cleaner and smoother operations.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-300">
            Vipras Facility Management Solution helps businesses manage security,
            housekeeping, manpower, technical maintenance, fire safety and
            integrated facility operations through a professional, supervised and
            quality-focused service approach.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-slate-950"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/15 text-2xl text-emerald-200 transition group-hover:bg-emerald-600 group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="mt-5 text-lg font-black">{item.title}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-300 transition group-hover:text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-xl sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="flex gap-4">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-slate-950 sm:flex">
              <FaCheckCircle />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">
                Need reliable facility services for your site?
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-300">
                Share your location, service requirement and manpower need. Our
                team will guide you with a practical service plan.
              </p>
            </div>
          </div>

          <Link
            href="/contact-us"
            className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-emerald-500 px-7 py-4 text-sm font-black text-slate-950 transition hover:bg-emerald-400 sm:w-auto lg:mt-0"
          >
            Get Free Quote
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
