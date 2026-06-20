import Image from "next/image";
import {
  FaCheckCircle,
  FaIndustry,
  FaShieldAlt,
  FaUsersCog,
} from "react-icons/fa";

const points = [
  "Facility services planned according to industry requirement",
  "Security, housekeeping, manpower, maintenance and fire safety support",
  "Suitable for single-site and multi-location operations",
  "Professional coordination for daily facility performance",
];

export default function IndustriesWeServeSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#9A6A1F]">
            Industries We Serve
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            Reliable facility services for businesses with different site needs.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Every industry needs a different service approach. A factory needs
            discipline and operational support, a hospital needs hygiene and
            responsible manpower, an office needs premium front-line service and
            a warehouse needs strong movement control. Vipras plans facility
            support according to your real environment.
          </p>

          <div className="mt-6 grid gap-3">
            {points.map((item) => (
              <div key={item} className="flex gap-3">
                <FaCheckCircle className="mt-1 shrink-0 text-[#C89B3C]" />
                <p className="text-sm font-semibold leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {[
              { icon: <FaIndustry />, label: "Industrial" },
              { icon: <FaShieldAlt />, label: "Safe" },
              { icon: <FaUsersCog />, label: "Managed" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-slate-50 p-4">
                <div className="text-xl text-[#C89B3C]">{item.icon}</div>
                <p className="mt-2 text-sm font-black text-slate-950">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <div className="overflow-hidden rounded-[1.5rem] bg-white">
            <Image
              src="/industries-we-serve-image.png.jpg"
              alt="Facility management industries served"
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
