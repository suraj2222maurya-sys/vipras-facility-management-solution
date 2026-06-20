import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaBuilding,
  FaCheckCircle,
  FaCogs,
  FaUsersCog,
} from "react-icons/fa";

const categories = [
  "Single service support for focused site needs",
  "Multi-service facility management for better control",
  "Industrial manpower and operations support",
  "Corporate office and commercial building solutions",
  "Government project environment support",
  "Pan India multi-location facility support",
];

export default function SolutionCategoriesSection() {
  return (
    <section className="bg-slate-50 px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="order-2 lg:order-1 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
          <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
            <Image
              src="/solution-categories-image.png.png"
              alt="Modern facility solution category building"
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#9A6A1F]">
            Solution Categories
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            Flexible solution models for different facility requirements.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Every site does not need the same service model. Some businesses
            need only security or housekeeping, while others need complete
            integrated facility management. Vipras helps you choose the right
            category based on site size, service scope and daily operations.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {categories.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-white p-4">
                <FaCheckCircle className="mt-1 shrink-0 text-[#C89B3C]" />
                <p className="text-sm font-semibold leading-6 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#111111] px-7 py-4 text-sm font-black text-white transition hover:bg-[#9A6A1F]"
            >
              Choose Your Solution
              <FaArrowRight />
            </Link>

            <div className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-black text-slate-950">
              <FaBuilding className="text-[#C89B3C]" />
              Custom Planning
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
