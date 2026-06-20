import {
  FaCheckCircle,
  FaClipboardCheck,
  FaHeadset,
  FaShieldAlt,
  FaUsersCog,
} from "react-icons/fa";

const impactPoints = [
  {
    icon: <FaClipboardCheck />,
    title: "Better Planning",
    text: "Clear service planning based on site type, duty timing and manpower needs.",
  },
  {
    icon: <FaUsersCog />,
    title: "Managed Teams",
    text: "Structured manpower support with duty clarity and supervision focus.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safer Facilities",
    text: "Support for safe, clean and more organized facility environments.",
  },
  {
    icon: <FaHeadset />,
    title: "Smooth Coordination",
    text: "Friendly client communication for daily service handling and support.",
  },
];

export default function ResultsImpactSection() {
  return (
    <section className="bg-slate-50 px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#9A6A1F]">
            Results & Impact
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            Facility support that improves daily control and service confidence.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Vipras focuses on practical outcomes that matter to business owners,
            admin teams and facility managers: reliable manpower, cleaner
            spaces, safer operations, better coordination and easier site
            management.
          </p>

          <div className="mt-6 flex gap-3 rounded-2xl border border-[#F4E7C7] bg-[#FFF9EC] p-4">
            <FaCheckCircle className="mt-1 shrink-0 text-[#C89B3C]" />
            <p className="text-sm font-semibold leading-7 text-slate-700">
              We avoid unsupported result claims. Our case studies focus on the
              service approach and the real operational value clients look for.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {impactPoints.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4E7C7] text-xl text-[#9A6A1F]">
                {item.icon}
              </div>

              <h3 className="mt-4 text-lg font-black text-slate-950">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
