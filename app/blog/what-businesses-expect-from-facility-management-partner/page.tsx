import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Businesses Expect from a Facility Management Partner",
  description:
    "Learn what modern businesses should expect from a professional facility management partner across security, housekeeping, manpower, maintenance and safety support.",
  keywords: [
    "facility management partner",
    "facility management services India",
    "security housekeeping maintenance services",
    "integrated facility management",
    "business facility support",
    "Vipras Facility Management Solutions",
  ],
};

export default function LatestFacilityArticlePage() {
  return (
    <main className="bg-[#f8f5ef]">
      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full border border-[#eadfca] bg-white px-5 py-3 text-sm font-extrabold text-[#0f7a5f] shadow-sm transition hover:bg-[#0f7a5f] hover:text-white"
          >
            ← Back to Blog
          </Link>

          <article className="mt-8 overflow-hidden rounded-[34px] border border-[#eadfca] bg-white shadow-[0_22px_70px_rgba(15,23,42,0.10)]">
            <div className="h-2 bg-gradient-to-r from-[#c89b3c] via-[#e4c06a] to-[#0f7a5f]" />

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#fff5df] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#b8862f]">
                  Facility Management Insight
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  Business Guide
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                What Smart Businesses Expect from a Facility Management Partner
              </h1>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                A facility management partner is not just a vendor. For a
                serious business, the right partner becomes part of daily
                operations, workplace safety, service discipline and customer
                confidence.
              </p>

              <div className="mt-10 space-y-8">
                <section>
                  <h2 className="text-2xl font-extrabold text-slate-950">
                    A Good Facility Partner Understands the Site Before Sending Manpower
                  </h2>
                  <p className="mt-3 text-base leading-8 text-slate-700">
                    Every site is different. A hospital does not operate like a
                    factory. A school does not need the same daily support as a
                    warehouse. A hotel, apartment, office, commercial building
                    or large project site each has its own movement, risk,
                    hygiene and maintenance requirements. Professional facility
                    management starts with understanding the site, not simply
                    sending staff.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-extrabold text-slate-950">
                    Service Quality Depends on Supervision, Not Only Staff Count
                  </h2>
                  <p className="mt-3 text-base leading-8 text-slate-700">
                    Many businesses think facility service is only about how
                    many people are deployed. In reality, service quality comes
                    from training, attendance control, grooming, reporting,
                    daily supervision and quick issue handling. The best
                    facility partners make sure work is done properly, not just
                    visibly.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-extrabold text-slate-950">
                    Security, Housekeeping and Maintenance Must Work Together
                  </h2>
                  <p className="mt-3 text-base leading-8 text-slate-700">
                    A clean workplace creates trust. A secure workplace creates
                    confidence. A maintained workplace prevents interruption.
                    When security, housekeeping, manpower support, technical
                    maintenance and safety teams work under one coordinated
                    system, the facility becomes easier to manage and more
                    reliable for everyone who uses it.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-extrabold text-slate-950">
                    The Right Partner Reduces Daily Pressure on Management
                  </h2>
                  <p className="mt-3 text-base leading-8 text-slate-700">
                    Business owners and facility managers should not spend their
                    day chasing guards, cleaners, technicians or replacement
                    manpower. A dependable facility management company handles
                    coordination, replacement planning, service monitoring and
                    site-level discipline so the client can focus on business.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-extrabold text-slate-950">
                    Why Vipras Fits Modern Facility Requirements
                  </h2>
                  <p className="mt-3 text-base leading-8 text-slate-700">
                    Vipras Facility Management Solutions supports businesses
                    across India with security services, housekeeping and soft
                    services, industrial manpower, technical maintenance, fire
                    safety manpower and integrated facility management. The
                    company works with offices, factories, hotels, residences,
                    apartments, hospitals, schools, commercial buildings, plants
                    and project sites with a practical focus on reliability,
                    service discipline and client comfort.
                  </p>
                </section>
              </div>

              <div className="mt-10 rounded-[28px] border border-[#0f7a5f]/15 bg-[#f1faf7] p-6">
                <h3 className="text-xl font-extrabold text-slate-950">
                  Need facility support that feels organized and dependable?
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Connect with Vipras Facility Management Solutions for
                  security, housekeeping, manpower, maintenance, fire safety and
                  integrated facility management support across India.
                </p>

                <Link
                  href="/contact-us"
                  className="mt-5 inline-flex items-center rounded-full bg-[#c89b3c] px-6 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-[#e1b85a]"
                >
                  Get Free Quote
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
