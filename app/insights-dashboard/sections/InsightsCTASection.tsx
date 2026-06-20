import Link from "next/link";

const contactActions = [
  {
    title: "Call Directly",
    detail: "+91 97109 46484",
    href: "tel:+919710946484",
    icon: "☎",
  },
  {
    title: "WhatsApp Requirement",
    detail: "Send service enquiry",
    href: "https://wa.me/919710946484?text=Hello%20Vipras%20Facility%20Management%20Solutions%2C%20I%20want%20to%20discuss%20a%20facility%20management%20service%20requirement.",
    icon: "✆",
  },
  {
    title: "Email Support",
    detail: "viprascrm@gmail.com",
    href: "mailto:viprascrm@gmail.com",
    icon: "✉",
  },
];

export default function InsightsCTASection() {
  return (
    <section className="bg-[#020817] px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(8,30,68,0.96),rgba(4,16,35,0.98)_55%,rgba(15,74,66,0.92))] p-6 shadow-[0_34px_110px_rgba(0,0,0,0.48)] sm:p-8 lg:p-10">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-emerald-500/14 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-blue-300/20 bg-blue-500/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-blue-100">
                Direct Facility Support
              </div>

              <h2 className="mt-5 max-w-3xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Plan Security, Housekeeping or Facility Support?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                Contact Vipras Facility Management Solutions directly for
                security services, housekeeping, manpower supply, technical
                maintenance, fire safety and integrated facility management
                support across India.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="tel:+919710946484"
                  className="inline-flex items-center justify-center rounded-full bg-[#c89b3c] px-7 py-3.5 text-sm font-black text-slate-950 shadow-[0_16px_36px_rgba(200,155,60,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#e4b85a]"
                >
                  Call Now
                  <span className="ml-2">→</span>
                </Link>

                <Link
                  href="https://wa.me/919710946484?text=Hello%20Vipras%20Facility%20Management%20Solutions%2C%20I%20want%20to%20discuss%20a%20facility%20management%20service%20requirement."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-500/10 px-7 py-3.5 text-sm font-black text-emerald-100 transition duration-300 hover:-translate-y-1 hover:bg-emerald-400 hover:text-slate-950"
                >
                  WhatsApp Now
                  <span className="ml-2">→</span>
                </Link>

                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-7 py-3.5 text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-slate-950"
                >
                  Contact Page
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {contactActions.map((action) => (
                <Link
                  key={action.title}
                  href={action.href}
                  target={action.href.startsWith("https://") ? "_blank" : undefined}
                  rel={action.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                  className="group rounded-[24px] border border-white/10 bg-white/[0.055] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-blue-300/30 hover:bg-white/[0.09]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#2563eb,#38bdf8)] text-2xl text-white shadow-[0_0_26px_rgba(59,130,246,0.32)] transition duration-300 group-hover:scale-105">
                      {action.icon}
                    </div>

                    <div>
                      <h3 className="text-base font-black text-white">
                        {action.title}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-slate-300">
                        {action.detail}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}

              <div className="rounded-[24px] border border-[#c89b3c]/25 bg-[#c89b3c]/10 p-5">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f4d38b]">
                  Service Coverage
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-200">
                  Chennai, Tamil Nadu, Bangalore, Andhra Pradesh and Pan India
                  facility management support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
