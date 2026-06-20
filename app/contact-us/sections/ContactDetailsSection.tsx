import Link from "next/link";

const contactDetails = [
  {
    title: "Office Address",
    value: "No-495 A, Village High Rd, Sholinganallur, Chennai, Tamil Nadu 600119.",
    actionText: "View Location",
    href: "https://www.google.com/maps/search/?api=1&query=No-495+A,+Village+High+Rd,+Sholinganallur,+Chennai,+Tamil+Nadu+600119",
    type: "address",
  },
  {
    title: "Phone / WhatsApp",
    value: "+91 97109 46484",
    actionText: "Call Now",
    href: "tel:+919710946484",
    type: "phone",
  },
  {
    title: "Email Support",
    value: "viprascrm@gmail.com",
    actionText: "Send Email",
    href: "mailto:viprascrm@gmail.com",
    type: "email",
  },
  {
    title: "Service Coverage",
    value: "Pan India facility management support with strong presence across Chennai, Tamil Nadu, Bangalore and Andhra Pradesh.",
    actionText: "Discuss Requirement",
    href: "https://wa.me/919710946484",
    type: "service",
  },
];

function ContactIcon({ type }: { type: string }) {
  const common =
    "h-8 w-8 text-[#0f7a5f] transition duration-300 group-hover:scale-110 group-hover:text-[#c89b3c]";

  if (type === "address") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <path
          d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <path
          d="M6.6 4.5l2.4-.6 2 4.6-1.5 1.1c.9 1.9 2.4 3.4 4.3 4.3l1.1-1.5 4.6 2-.6 2.4c-.3 1.1-1.4 1.8-2.5 1.6C10.9 17.5 6.5 13.1 5.6 7.6 5.4 6.5 5.5 4.8 6.6 4.5z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M15 5.5c1.8.5 3 1.7 3.5 3.5M15.5 2.5c3 .7 5.3 3 6 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <path
          d="M4 6.5h16v11H4v-11z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M4.8 7.2l7.2 5.4 7.2-5.4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={common}>
      <path
        d="M4 10l8-6 8 6v10H4V10z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 20v-6h8v6M7 10h10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ContactDetailsSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-[#c89b3c]/25 bg-[#fff7e8] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#b8862f]">
            Contact Details
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Reach Vipras Facility Management Solutions
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Connect with our team for facility management, manpower, security,
            housekeeping, maintenance and safety service requirements.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[28px] border border-[#eadfca] bg-[#fffdf8] p-5 shadow-[0_14px_45px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#c89b3c]/45 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)]"
            >
              <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#c89b3c]/10 transition duration-500 group-hover:scale-125" />
              <div className="absolute -bottom-14 -left-14 h-32 w-32 rounded-full bg-[#0f7a5f]/10 transition duration-500 group-hover:scale-125" />

              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#eadfca] bg-white shadow-sm">
                  <ContactIcon type={item.type} />
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-600">
                  {item.value}
                </p>

                <Link
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-5 inline-flex items-center text-sm font-extrabold text-[#0f7a5f] transition duration-300 hover:text-[#c89b3c]"
                >
                  {item.actionText}
                  <span className="ml-2 transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[28px] border border-[#eadfca] bg-[#f8f5ef] p-5 text-center">
          <p className="text-sm font-bold leading-7 text-slate-700">
            For quick service enquiries, use the WhatsApp form above or contact
            our team directly for support across India.
          </p>
        </div>
      </div>
    </section>
  );
}
