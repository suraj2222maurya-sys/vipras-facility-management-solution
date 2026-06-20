import {
  FaBuilding,
  FaHospital,
  FaHotel,
  FaIndustry,
  FaSchool,
  FaUniversity,
  FaWarehouse,
  FaHome,
} from "react-icons/fa";

const industries = [
  { icon: <FaIndustry />, title: "Factories & Plants" },
  { icon: <FaBuilding />, title: "Corporate Offices" },
  { icon: <FaWarehouse />, title: "Warehouses" },
  { icon: <FaHospital />, title: "Hospitals" },
  { icon: <FaSchool />, title: "Schools & Colleges" },
  { icon: <FaHotel />, title: "Hotels" },
  { icon: <FaHome />, title: "Apartments" },
  { icon: <FaUniversity />, title: "Government Projects" },
];

export default function IndustryIconsSection() {
  return (
    <section className="bg-slate-50 px-5 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#9A6A1F]">
            Industry Coverage
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            One trusted partner for multiple facility environments.
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Vipras supports different industries with manpower, safety, hygiene,
            maintenance and integrated facility service planning.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {industries.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4E7C7] text-2xl text-[#9A6A1F]">
                {item.icon}
              </div>
              <h3 className="mt-4 text-base font-black text-slate-950">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
