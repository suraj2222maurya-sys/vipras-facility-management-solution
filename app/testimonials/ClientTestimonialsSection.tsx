import {
  FaBuilding,
  FaCheckCircle,
  FaHospital,
  FaIndustry,
  FaQuoteLeft,
  FaStar,
  FaWarehouse,
  FaHome,
} from "react-icons/fa";

const testimonials = [
  {
    icon: <FaIndustry />,
    type: "Manufacturing Facility",
    title: "Dependable manpower and site coordination",
    text: "Vipras helped our facility maintain better daily coordination with disciplined manpower support, clear communication and responsible supervision.",
  },
  {
    icon: <FaHome />,
    type: "Premium Residential Community",
    title: "Cleaner and better-managed common areas",
    text: "The service approach is professional and practical. Housekeeping and support staff coordination helped the property stay cleaner and easier to manage.",
  },
  {
    icon: <FaBuilding />,
    type: "Commercial Building",
    title: "Professional front-line facility support",
    text: "Vipras understands commercial building requirements and provides service support that helps daily operations run with more confidence.",
  },
  {
    icon: <FaWarehouse />,
    type: "Warehouse & Logistics Site",
    title: "Structured support for busy operations",
    text: "The team supported our operational environment with manpower planning, site discipline and smoother daily facility handling.",
  },
  {
    icon: <FaHospital />,
    type: "Healthcare Facility",
    title: "Responsible service for sensitive environments",
    text: "Vipras focuses on hygiene, manpower discipline and service responsibility, which is important for healthcare and high-care facility environments.",
  },
  {
    icon: <FaBuilding />,
    type: "Corporate Office",
    title: "Smooth communication and reliable service",
    text: "The support team is responsive and client-friendly. Their facility service approach helps maintain a more organized workplace environment.",
  },
];

export default function ClientTestimonialsSection() {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#9A6A1F]">
              Client Testimonials
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              Feedback inspired by the service experience clients expect.
            </h2>
          </div>

          <p className="text-base leading-8 text-slate-600">
            These testimonials are presented by client category, without using
            unapproved company names or logos. This keeps the page professional,
            honest and ready for real client testimonials when written approval
            is available.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.type}
              className="rounded-[1.7rem] border border-slate-200 bg-[#faf7f1] p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#F4E7C7] p-4 text-xl text-[#9A6A1F]">
                  {item.icon}
                </div>

                <div className="flex gap-1 text-[#C89B3C]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-sm" />
                  ))}
                </div>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#9A6A1F]">
                <FaCheckCircle />
                {item.type}
              </div>

              <h3 className="mt-4 text-lg font-black leading-snug text-slate-950">
                {item.title}
              </h3>

              <div className="mt-4 flex gap-3">
                <FaQuoteLeft className="mt-1 shrink-0 text-[#C89B3C]" />
                <p className="text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}

