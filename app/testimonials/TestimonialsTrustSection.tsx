import Image from "next/image";
import {
  FaCheckCircle,
  FaClipboardCheck,
  FaHandshake,
  FaShieldAlt,
} from "react-icons/fa";

const trustPoints = [
  {
    icon: <FaShieldAlt />,
    title: "Reliable Service Standards",
    text: "Vipras focuses on dependable support, discipline and service consistency across different facility environments.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Clear Supervision & Coordination",
    text: "Our team works with proper planning, practical follow-up and smooth communication for everyday operations.",
  },
  {
    icon: <FaHandshake />,
    title: "Trusted Working Approach",
    text: "Clients value professional behaviour, responsive support and a service style that feels responsible and trustworthy.",
  },
];

export default function TestimonialsTrustSection() {
  return (
    <section className="bg-[#faf7f1] px-5 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[1.75rem] border border-[#eadfca] bg-white shadow-sm">
            <Image
              src="/testimonials-trust-image.jpg.png"
              alt="Facility supervisor and professional staff coordination"
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="h-auto w-full"
            />
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#9A6A1F]">
              Trust & Service Assurance
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              A service approach that helps clients feel confident and supported.
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Trust grows when service quality stays consistent. Vipras Facility
              Management Solution focuses on professional manpower, responsible
              supervision and client-friendly coordination so facilities stay
              safer, cleaner and easier to manage.
            </p>

            <div className="mt-6 grid gap-4">
              {trustPoints.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.35rem] border border-[#eadfca] bg-white p-4 shadow-sm"
                >
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F4E7C7] text-[#9A6A1F]">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-base font-black text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-3 rounded-[1.25rem] bg-[#fff5dd] p-4">
              <FaCheckCircle className="mt-1 shrink-0 text-[#C89B3C]" />
              <p className="text-sm font-semibold leading-7 text-slate-700">
                Built to support corporate offices, manufacturing facilities,
                residential communities, warehouses, commercial buildings and
                other professional environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
