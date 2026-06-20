import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const articles = {
  "professional-security-services-protect-business-environments": {
    icon: "security",
    category: "Security Services",
    readTime: "5 Min Read",
    title: "How Professional Security Services Protect Modern Business Environments",
    description:
      "Professional security services help businesses protect people, property, visitors and daily operations with trained manpower, strong supervision and disciplined site control.",
    sections: [
      {
        heading: "Security Is the First Layer of Business Trust",
        body:
          "Every business facility needs a security team that can protect people, property and operations with confidence. In modern workplaces, security is not only about standing at the gate. It includes visitor management, access control, patrolling, emergency support, reporting, staff coordination and maintaining discipline throughout the site.",
      },
      {
        heading: "Why Professional Security Manpower Matters",
        body:
          "Corporate offices, factories, IT parks, hospitals, schools, warehouses, apartments and government project environments all need trained and reliable security manpower. A professional guard understands how to manage entry points, guide visitors, monitor movement, identify risks and respond calmly during incidents.",
      },
      {
        heading: "Vipras Security Services Approach",
        body:
          "Vipras Facility Management Solutions has been serving businesses since 2007. Our security service approach focuses on trained manpower, site supervision, professional behaviour and reliable daily operations. We support businesses across India, with strong client presence across Chennai, Tamil Nadu, Bangalore, Andhra Pradesh and nearby industrial regions.",
      },
      {
        heading: "Business Benefits",
        body:
          "A dependable security team improves workplace safety, reduces unauthorized access, protects assets, supports emergency readiness and builds confidence among employees, visitors and clients. For companies looking for long-term facility support, professional security services are a strong foundation for safer business operations.",
      },
    ],
  },

  "housekeeping-services-for-clean-healthy-workplaces": {
    icon: "housekeeping",
    category: "Housekeeping & Soft Services",
    readTime: "4 Min Read",
    title: "Why Housekeeping Services Matter for Clean, Healthy and Trusted Workplaces",
    description:
      "Professional housekeeping services help businesses maintain clean, hygienic and welcoming workplaces that improve employee comfort, customer confidence and brand reputation.",
    sections: [
      {
        heading: "Clean Workplaces Create Strong First Impressions",
        body:
          "A clean facility tells visitors and clients that the business is organized, professional and trustworthy. Reception areas, washrooms, floors, workspaces, pantry areas and common zones all create an impression. Professional housekeeping services help businesses maintain this impression every day.",
      },
      {
        heading: "Housekeeping Is a Daily Business Requirement",
        body:
          "Good housekeeping is not only cleaning once a day. It includes planned cleaning schedules, trained staff deployment, hygiene maintenance, restroom care, waste handling, floor care, pantry support and regular supervision. This helps facilities stay clean, safe and ready for employees and visitors.",
      },
      {
        heading: "Vipras Housekeeping & Soft Services",
        body:
          "Vipras Facility Management Solutions has been supporting businesses since 2007 with reliable facility services. Our housekeeping and soft services are designed for offices, IT parks, hospitals, schools, factories, hotels, gated communities and commercial buildings across India, with strong presence in Chennai, Tamil Nadu, Bangalore and Andhra Pradesh.",
      },
      {
        heading: "Why Businesses Choose Structured Housekeeping",
        body:
          "A well-managed housekeeping team improves hygiene, employee comfort, workplace appearance and visitor confidence. It also helps management maintain better daily control over the facility. For businesses that want a clean and trusted environment, professional housekeeping is not optional — it is essential.",
      },
    ],
  },

  "preventive-maintenance-for-smooth-facility-operations": {
    icon: "maintenance",
    category: "Technical Maintenance",
    readTime: "6 Min Read",
    title: "The Importance of Preventive Maintenance for Smooth Facility Operations",
    description:
      "Preventive maintenance helps businesses reduce breakdowns, avoid costly downtime and keep electrical, plumbing, HVAC and building systems running safely.",
    sections: [
      {
        heading: "Preventive Maintenance Protects Business Continuity",
        body:
          "Unexpected breakdowns can disturb daily operations, increase repair costs and affect workplace safety. Preventive maintenance helps businesses identify technical issues early through regular inspection, planned servicing and proper monitoring of important facility systems.",
      },
      {
        heading: "Key Areas of Technical Maintenance",
        body:
          "Modern facilities depend on electrical systems, plumbing lines, HVAC units, DG operations, pumps, panels and other building equipment. When these systems are maintained properly, the facility runs smoothly and safely with fewer interruptions.",
      },
      {
        heading: "Vipras Technical Maintenance Support",
        body:
          "Vipras Facility Management Solutions has been serving businesses since 2007 with dependable facility management support. Our technical maintenance services help commercial, industrial and institutional clients maintain safer and more reliable building operations across India.",
      },
      {
        heading: "Why Preventive Maintenance Is a Smart Investment",
        body:
          "Waiting for breakdowns often costs more than planned maintenance. Preventive maintenance improves equipment life, reduces emergency repairs, supports compliance and helps businesses avoid unnecessary downtime. For long-term facility performance, regular technical maintenance is one of the smartest decisions a business can make.",
      },
    ],
  },

  "security-services-for-business-facilities": {
    icon: "security",
    category: "Security Services",
    readTime: "5 Min Read",
    title: "Professional Security Services for Safe and Disciplined Business Facilities",
    description:
      "Vipras provides trained security manpower for offices, factories, IT parks, hospitals, schools, warehouses, apartments and project sites across India.",
    sections: [
      {
        heading: "Reliable Security for Every Type of Facility",
        body:
          "Security is one of the most important parts of facility management. A business facility needs trained people who can manage entry points, guide visitors, monitor movement, protect assets and support emergency situations. Vipras Facility Management Solutions provides professional security manpower for corporate offices, factories, IT parks, hospitals, schools, warehouses, apartments, hotels and government project environments.",
      },
      {
        heading: "Established Experience Since 2007",
        body:
          "Since 2007, Vipras has supported businesses with dependable manpower and facility services. With 150+ clients and 2500+ staff strength, our security service model is built on discipline, training, supervision and client trust. Our presence is Pan India, with strong client support across Chennai, Tamil Nadu, Bangalore, Andhra Pradesh and nearby business regions.",
      },
      {
        heading: "What Makes Vipras Security Support Different",
        body:
          "Our security service focuses on professional appearance, alertness, visitor handling, access control, patrolling, incident reporting and smooth coordination with the client team. The goal is not only to place guards, but to create a safe, controlled and trusted working environment.",
      },
      {
        heading: "Best Fit for Business and Project Sites",
        body:
          "Vipras security manpower is suitable for offices, commercial buildings, industrial plants, residential communities, schools, hospitals, hotels, warehouses and large project sites. For businesses that want reliable protection and better daily control, professional security support is a smart investment.",
      },
    ],
  },

  "housekeeping-soft-services-for-clean-facilities": {
    icon: "housekeeping",
    category: "Housekeeping & Soft Services",
    readTime: "4 Min Read",
    title: "Housekeeping & Soft Services for Clean, Healthy and Well-Managed Facilities",
    description:
      "Vipras supports clean and hygienic facilities with trained housekeeping teams, daily supervision and soft service management.",
    sections: [
      {
        heading: "Cleanliness Builds Confidence",
        body:
          "A clean facility creates confidence for employees, visitors, residents, patients, students and clients. Housekeeping is not just cleaning; it is daily facility care. Vipras Facility Management Solutions provides housekeeping and soft services for offices, hotels, residential buildings, apartments, hospitals, schools, factories, IT parks, commercial buildings and large sites.",
      },
      {
        heading: "Structured Housekeeping Since 2007",
        body:
          "Vipras has been serving businesses since 2007 with a strong focus on reliability and professional execution. With 150+ clients and 2500+ staff, our housekeeping teams are trained to maintain hygiene, cleanliness, presentation and comfort across different types of facilities.",
      },
      {
        heading: "What We Support",
        body:
          "Our housekeeping service includes floor care, restroom hygiene, pantry support, dusting, waste handling, common area cleaning, deep cleaning coordination and routine site supervision. We focus on smooth daily service so that the facility remains clean and ready throughout the day.",
      },
      {
        heading: "Ideal for Multiple Industries",
        body:
          "Vipras housekeeping and soft services are suitable for hotels, hospitals, schools, corporate offices, apartments, residences, commercial buildings, factories and project sites. Our Pan India capability helps businesses maintain a clean and professional environment with trusted manpower support.",
      },
    ],
  },

  "industrial-manpower-supply-for-business-operations": {
    icon: "manpower",
    category: "Industrial Manpower Supply",
    readTime: "5 Min Read",
    title: "Industrial Manpower Supply for Factories, Warehouses and Large Operations",
    description:
      "Vipras provides skilled, semi-skilled and unskilled manpower support for production units, logistics hubs, factories and industrial sites.",
    sections: [
      {
        heading: "Manpower Support That Keeps Operations Moving",
        body:
          "Industrial and business operations need reliable manpower to maintain productivity, discipline and continuity. Vipras Facility Management Solutions provides skilled, semi-skilled and unskilled manpower support for factories, production units, warehouses, logistics hubs, assembly lines, plants and large project environments.",
      },
      {
        heading: "Trusted Manpower Partner Since 2007",
        body:
          "Since 2007, Vipras has supported 150+ clients with a growing team strength of 2500+ staff. Our manpower supply service is designed for companies that need dependable workforce support with proper coordination, deployment and supervision.",
      },
      {
        heading: "Support for Different Business Needs",
        body:
          "We support industrial workers, helpers, loading and unloading staff, production support manpower, warehouse manpower, factory staff, plant support teams and project manpower requirements. Our focus is on timely deployment, reliability and smooth coordination with client operations.",
      },
      {
        heading: "Pan India Industrial Support",
        body:
          "Vipras supports businesses across India, with strong client base across Chennai, Tamil Nadu, Bangalore, Andhra Pradesh and nearby industrial regions. Whether the requirement is small, medium or large scale, our manpower support helps businesses operate with better stability.",
      },
    ],
  },

  "technical-maintenance-services-for-pan-india-facilities": {
    icon: "maintenance",
    category: "Technical Maintenance",
    readTime: "6 Min Read",
    title: "Trusted Technical Maintenance Services for Homes, Buildings, Offices, Factories and Large Projects",
    description:
      "Vipras provides electrical, wiring, plumbing, AC, HVAC, geyser, preventive and breakdown maintenance support across Chennai, Tamil Nadu and Pan India.",
    sections: [
      {
        heading: "Complete Maintenance Support for Every Property and Project",
        body:
          "Vipras Facility Management Solution provides professional technical maintenance services for residential homes, apartments, hotels, schools, corporate offices, commercial buildings, factories, new plants and large project sites. Our technical team supports electrical work, wiring, plumbing, AC repair, HVAC maintenance, geyser service, preventive maintenance and general technician support across Chennai, Tamil Nadu and Pan India.",
      },
      {
        heading: "What We Provide",
        body:
          "Whether the requirement is a small home repair, apartment maintenance, office electrical work, hotel plumbing support, school maintenance, factory wiring, plant technical support or a large maintenance tender, Vipras provides dependable service with trained technicians, proper coordination and quality-focused execution.",
      },
      {
        heading: "Maintenance Services Covered",
        body:
          "Our technical support includes electrical maintenance, electrical wiring work, plumbing services, AC repair and maintenance, HVAC maintenance, geyser repair support, apartment maintenance, residential maintenance, hotel maintenance, school maintenance, corporate office maintenance, factory and plant maintenance, industrial technical support, preventive maintenance, breakdown support and large project maintenance.",
      },
      {
        heading: "Why Clients Trust Vipras",
        body:
          "Since 2007, Vipras has built trust with 150+ clients and 2500+ staff strength. Our maintenance service is suitable for homes, residences, apartments, hotels, hospitals, schools, offices, factories, plants and Pan India projects. We focus on safe work, proper supervision, quick coordination and long-term client satisfaction.",
      },
    ],
  },

  "fire-safety-manpower-for-industrial-and-commercial-sites": {
    icon: "fire",
    category: "Fire & Safety Manpower",
    readTime: "5 Min Read",
    title: "Fire & Safety Manpower for Industrial, Commercial and Institutional Sites",
    description:
      "Vipras provides fire wardens, safety stewards, fire operators and emergency response support for high-responsibility facilities.",
    sections: [
      {
        heading: "Fire Safety Needs Trained People",
        body:
          "Fire safety is a critical requirement for industrial, commercial, residential and institutional environments. Equipment is important, but trained manpower is equally important. Vipras Facility Management Solutions provides fire and safety manpower for factories, plants, warehouses, offices, hospitals, schools, hotels, apartments, commercial buildings and project sites.",
      },
      {
        heading: "Professional Safety Support Since 2007",
        body:
          "Vipras has been serving businesses since 2007 with facility manpower and site support. With 150+ clients and 2500+ staff, our fire and safety manpower services are focused on alertness, emergency readiness, discipline and coordination.",
      },
      {
        heading: "What Fire & Safety Teams Support",
        body:
          "Our safety manpower can support fire watch duties, fire wardens, safety stewards, emergency response teams, hydrant system support, basic safety monitoring, evacuation coordination and site-level safety discipline. This helps businesses maintain better preparedness and safer facility operations.",
      },
      {
        heading: "Suitable for High-Responsibility Sites",
        body:
          "Vipras fire and safety manpower is suitable for factories, industrial units, commercial buildings, hospitals, schools, hotels, warehouses, apartments and large project locations. Our Pan India service capability helps clients manage safety manpower requirements with confidence.",
      },
    ],
  },

  "integrated-facility-management-for-modern-businesses": {
    icon: "ifm",
    category: "Integrated Facility Management",
    readTime: "6 Min Read",
    title: "Integrated Facility Management for Modern Businesses That Need One Trusted Partner",
    description:
      "Vipras combines security, housekeeping, manpower, maintenance, fire safety and site supervision into one reliable facility management solution.",
    sections: [
      {
        heading: "One Partner for Complete Facility Support",
        body:
          "Modern businesses often need multiple facility services at the same time. Managing security, housekeeping, manpower, maintenance, fire safety and daily supervision separately can become difficult. Integrated Facility Management helps businesses bring all essential services under one trusted partner.",
      },
      {
        heading: "Vipras Experience Since 2007",
        body:
          "Vipras Facility Management Solutions has been supporting clients since 2007. With 150+ clients, 2500+ staff and Pan India service capability, Vipras provides integrated facility support for offices, factories, hotels, residences, apartments, hospitals, schools, commercial buildings, plants and large projects.",
      },
      {
        heading: "Services Under IFM",
        body:
          "Our integrated facility management support can include security services, housekeeping and soft services, industrial manpower supply, technical maintenance, fire and safety manpower, site coordination and service supervision. This gives clients better control, smoother operations and dependable service delivery.",
      },
      {
        heading: "Why Integrated Facility Management Works",
        body:
          "When one experienced partner manages multiple facility needs, businesses get better coordination, faster communication, improved accountability and stronger service consistency. Vipras focuses on trust, manpower quality, supervision and long-term client relationships.",
      },
    ],
  },
};

type ArticleSlug = keyof typeof articles;

function ArticleIcon({ type }: { type: string }) {
  const common = "h-16 w-16 text-[#0f7a5f]";

  if (type === "security") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <path d="M12 3L5 6v5c0 4.6 2.9 8.8 7 10 4.1-1.2 7-5.4 7-10V6l-7-3z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9.5 12l1.7 1.7 3.6-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "housekeeping") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <path d="M6 20h12M8 20l1-9h6l1 9M10 11V5a2 2 0 114 0v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M5 8h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "manpower") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <path d="M8 11a3 3 0 100-6 3 3 0 000 6zM16 11a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3.5 20c.6-3.4 2.5-5 4.5-5s3.9 1.6 4.5 5M11.5 20c.6-3.4 2.5-5 4.5-5s3.9 1.6 4.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "maintenance") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <path d="M14.7 6.3l3 3M4 20l6.8-6.8M13.5 4.5a4.2 4.2 0 005.9 5.9l-8.7 8.7a3 3 0 01-4.2-4.2l8.7-8.7z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "fire") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <path d="M12 21c3.6 0 6-2.4 6-5.7 0-2.8-1.7-4.6-3.5-6.5-.8 2-2.2 3.1-3.9 3.8.6-2.6-.2-5.1-2.3-7.6C7.8 8.4 6 11 6 15.3 6 18.6 8.4 21 12 21z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={common}>
      <path d="M4 10l8-6 8 6v10H4V10z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 20v-6h6v6M7 10h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug as ArticleSlug];

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.description,
  };
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }));
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug as ArticleSlug];

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-[#f8f5ef]">
      <section className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#c89b3c]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#0f7a5f]/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full border border-[#eadfca] bg-white px-5 py-3 text-sm font-extrabold text-[#0f7a5f] shadow-sm transition hover:bg-[#0f7a5f] hover:text-white"
          >
            ← Back to Blog
          </Link>

          <article className="mt-8 overflow-hidden rounded-[34px] border border-[#eadfca] bg-white shadow-[0_22px_70px_rgba(15,23,42,0.10)]">
            <div className="h-2 bg-gradient-to-r from-[#c89b3c] via-[#e4c06a] to-[#0f7a5f]" />

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex h-24 w-24 items-center justify-center rounded-[28px] border border-[#eadfca] bg-[#fff8e8] shadow-sm">
                <ArticleIcon type={article.icon} />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#fff5df] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#b8862f]">
                  {article.category}
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  {article.readTime}
                </span>
                <span className="rounded-full bg-[#f1faf7] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#0f7a5f]">
                  Since 2007
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                {article.title}
              </h1>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {article.description}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#eadfca] bg-[#f8f5ef] p-4">
                  <p className="text-2xl font-black text-[#0f7a5f]">150+</p>
                  <p className="text-sm font-bold text-slate-700">Clients</p>
                </div>
                <div className="rounded-2xl border border-[#eadfca] bg-[#f8f5ef] p-4">
                  <p className="text-2xl font-black text-[#0f7a5f]">2500+</p>
                  <p className="text-sm font-bold text-slate-700">Staff</p>
                </div>
                <div className="rounded-2xl border border-[#eadfca] bg-[#f8f5ef] p-4">
                  <p className="text-2xl font-black text-[#0f7a5f]">Pan India</p>
                  <p className="text-sm font-bold text-slate-700">Service</p>
                </div>
              </div>

              <div className="mt-10 space-y-8">
                {article.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-2xl font-extrabold text-slate-950">
                      {section.heading}
                    </h2>
                    <p className="mt-3 text-base leading-8 text-slate-700">
                      {section.body}
                    </p>
                  </section>
                ))}
              </div>

              <div className="mt-10 rounded-[28px] border border-[#0f7a5f]/15 bg-[#f1faf7] p-6">
                <h3 className="text-xl font-extrabold text-slate-950">
                  Need trusted facility management support?
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Vipras Facility Management Solutions supports hotels,
                  residences, buildings, apartments, hospitals, schools,
                  offices, factories, plants and large projects across India.
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
