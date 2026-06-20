import Image from "next/image";
import {
  FaAward,
  FaCheckCircle,
  FaClipboardCheck,
  FaHandshake,
} from "react-icons/fa";

const trustItems = [
  {
    icon: <FaAward />,
    title: "Experience Since 2007",
    text: "Long-term facility service experience with practical industry understanding.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Process-Based Work",
    text: "Service planning, supervision and quality checks for reliable delivery.",
  },
  {
    icon: <FaHandshake />,
    title: "Client-Friendly Support",
    text: "Clear communication, practical coordination and responsive service handling.",
  },
];

export default function WhyIndustriesTrustViprasSection() {
  return (
    <section className="bg-[#111111] px-5 py-16 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E8C46B]">
            Why Industries Trust Vipras
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            Trusted facility support built on discipline, quality and responsibility.
          </h2>

          <p className="mt-5 text-base leading-8 text-[#F3E9D2]">
            Industries trust Vipras because we focus on dependable manpower,
            planned service delivery and smooth client coordination. Our goal is
            to help every facility stay safe, clean, organized and easier to
            manage.
          </p>

          <div className="mt-7 grid gap-4">
            {trustItems.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-2xl bg-white/10 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C89B3C] text-[#111111]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-black text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-3 rounded-2xl border border-[#E8C46B]/25 bg-white/10 p-4">
            <FaCheckCircle className="mt-1 shrink-0 text-[#E8C46B]" />
            <p className="text-sm font-semibold leading-7 text-slate-200">
              Suitable for corporate, industrial, commercial, residential,
              healthcare, education, warehouse and government project
              environments.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#E8C46B]/20 bg-white/10 p-4 shadow-2xl backdrop-blur-md">
          <div className="overflow-hidden rounded-[1.5rem] bg-[#181818]">
            <Image
              src="/why-industries-trust-image.png.jpg"
              alt="Why industries trust Vipras facility management services"
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
