import Link from "next/link";

function GoogleMapIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden="true">
      <path
        fill="#1A73E8"
        d="M24 4C16.3 4 10 10.3 10 18c0 10.5 14 26 14 26s14-15.5 14-26C38 10.3 31.7 4 24 4z"
      />
      <path
        fill="#EA4335"
        d="M24 4c7.7 0 14 6.3 14 14 0 10.5-14 26-14 26V4z"
      />
      <circle cx="24" cy="18" r="5.5" fill="#FFFFFF" />
      <circle cx="24" cy="18" r="3" fill="#34A853" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#25D366" />
      <path
        fill="#FFFFFF"
        d="M33.7 29.4c-.4-.2-2.7-1.3-3.1-1.5-.4-.1-.8-.2-1.1.3-.3.4-1.2 1.5-1.5 1.8-.3.3-.6.3-1 .1-2.7-1.3-4.8-3.4-6.2-6.1-.2-.4-.1-.7.2-1 .2-.2.5-.6.8-.9.2-.3.3-.5.5-.8.1-.3.1-.6 0-.9-.1-.2-1.1-2.7-1.5-3.7-.4-1-.8-.9-1.1-.9h-1c-.4 0-.9.1-1.3.6-.4.4-1.7 1.7-1.7 4.2s1.8 4.8 2.1 5.2c.3.4 3.6 5.5 8.7 7.7 1.2.5 2.2.8 2.9 1 .8.2 1.5.2 2.1.1.7-.1 2.7-1.1 3.1-2.2.4-1.1.4-2 .3-2.2-.2-.3-.5-.4-.9-.6z"
      />
    </svg>
  );
}

export default function GoogleMapSection() {
  return (
    <section className="bg-[#f8f5ef] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-[#0f7a5f]/20 bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0f7a5f]">
              Google Map Location
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Visit Our Chennai Office Location
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Vipras Facility Management Solutions is located at Sholinganallur,
              Chennai. Reach us for security, housekeeping, manpower, technical
              maintenance, fire safety and integrated facility management
              enquiries.
            </p>

            <div className="mt-6 rounded-[26px] border border-[#eadfca] bg-white p-5 shadow-[0_14px_45px_rgba(15,23,42,0.07)]">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#b8862f]">
                Office Address
              </p>

              <p className="mt-3 text-base font-bold leading-7 text-slate-800">
                No-495 A, Village High Rd, Sholinganallur, Chennai, Tamil Nadu
                600119.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=No-495+A,+Village+High+Rd,+Sholinganallur,+Chennai,+Tamil+Nadu+600119"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Vipras location in Google Maps"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-slate-950 ring-1 ring-[#eadfca] transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <GoogleMapIcon />
                  <span>Google Maps</span>
                  <span>→</span>
                </Link>

                <Link
                  href="tel:+919710946484"
                  aria-label="Call Vipras for directions"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f1faf7] px-6 py-3 text-sm font-extrabold text-[#0f7a5f] ring-1 ring-[#0f7a5f]/20 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
                >
                  <PhoneIcon />
                  <span>Call Direction</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-[#eadfca] bg-white p-3 shadow-[0_22px_70px_rgba(15,23,42,0.10)]">
            <div className="overflow-hidden rounded-[24px]">
              <iframe
                title="Vipras Facility Management Solutions Google Map"
                src="https://www.google.com/maps?q=No-495%20A%2C%20Village%20High%20Rd%2C%20Sholinganallur%2C%20Chennai%2C%20Tamil%20Nadu%20600119&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full border-0 sm:h-[420px] lg:h-[460px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
