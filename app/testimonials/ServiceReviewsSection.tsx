import {
  FaBroom,
  FaCogs,
  FaFireExtinguisher,
  FaShieldAlt,
  FaStar,
  FaTools,
  FaUsers,
} from "react-icons/fa";

const reviews = [
  {
    icon: <FaShieldAlt />,
    service: "Security",
    text: "Disciplined guarding, site monitoring and dependable front-line support.",
  },
  {
    icon: <FaBroom />,
    service: "Housekeeping",
    text: "Cleaner spaces, better hygiene and smoother daily upkeep.",
  },
  {
    icon: <FaUsers />,
    service: "Manpower",
    text: "Reliable manpower planning for factories, offices and busy sites.",
  },
  {
    icon: <FaTools />,
    service: "Maintenance",
    text: "Practical technical support for routine facility requirements.",
  },
  {
    icon: <FaFireExtinguisher />,
    service: "Fire Safety",
    text: "Responsible safety manpower support for alert and prepared sites.",
  },
  {
    icon: <FaCogs />,
    service: "IFM",
    text: "Multiple services coordinated together for easier facility management.",
  },
];

export default function ServiceReviewsSection() {
  return (
    <section className="bg-[#faf7f1] px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-[#eadfca] bg-white p-5 shadow-sm sm:p-7 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#9A6A1F]">
                Service Reviews
              </p>

              <h2 className="mt-3 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
                Service quality that clients can feel in daily operations.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Vipras is trusted for practical support, responsible manpower
                and smooth facility coordination across core service needs.
              </p>

              <div className="mt-5 flex gap-1 text-[#C89B3C]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} />
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {reviews.map((item) => (
                <div
                  key={item.service}
                  className="flex gap-4 rounded-[1.25rem] border border-[#f0e4ce] bg-[#fffaf2] p-4 transition hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F4E7C7] text-[#9A6A1F]">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-base font-black text-slate-950">
                      {item.service}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
