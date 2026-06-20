import Image from "next/image";
import {
  FaCheckCircle,
  FaQuoteLeft,
  FaRegBuilding,
} from "react-icons/fa";

const stories = [
  "The client needed dependable support for daily facility operations.",
  "The site required smoother coordination between manpower, cleaning and safety tasks.",
  "Vipras planned the service approach according to site needs and operational priority.",
];

export default function ClientSuccessStoriesSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="order-2 lg:order-1 rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <div className="overflow-hidden rounded-[1.5rem] bg-white">
            <Image
              src="/client-success-stories-image.jpg.jpg"
              alt="Client success support team"
              width={1200}
              height={800}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#9A6A1F]">
            Client Success Stories
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            Success starts with understanding the client’s real facility problem.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            We keep our case study content honest and professional. Instead of
            using fake client names or fake performance numbers, we show the
            type of challenges businesses face and how Vipras supports them with
            practical facility management planning.
          </p>

          <div className="mt-7 rounded-[2rem] bg-slate-50 p-5">
            <FaQuoteLeft className="text-2xl text-[#C89B3C]" />

            <div className="mt-4 grid gap-3">
              {stories.map((item) => (
                <div key={item} className="flex gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#C89B3C]" />
                  <p className="text-sm font-semibold leading-7 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex gap-4 rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4E7C7] text-[#9A6A1F]">
              <FaRegBuilding />
            </div>
            <p className="text-sm font-semibold leading-7 text-slate-700">
              Suitable for corporate, industrial, commercial, healthcare,
              education, warehouse, residential and government project
              environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
