import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  FaArrowRight,
  FaBuilding,
  FaCheckCircle,
  FaClipboardCheck,
  FaFireExtinguisher,
  FaHardHat,
  FaHeadset,
  FaIndustry,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaUserShield,
  FaUsersCog,
  FaWarehouse,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: {
    absolute:
      "Fire Safety Manpower Services in Chennai & Tamil Nadu | Vipras",
  },

 description:
  "Trained fire safety manpower, fire wardens and emergency response personnel for factories, warehouses and commercial sites in Chennai, Tamil Nadu and Pan India.",

  alternates: {
    canonical:
      "https://www.viprasfacility.com/services/fire-safety-manpower",

    languages: {
      "en-IN":
        "https://www.viprasfacility.com/services/fire-safety-manpower",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "Fire Safety Manpower Services in Chennai, Tamil Nadu & Pan India",

    description:
      "Trained fire wardens, safety stewards, emergency response personnel and fire safety manpower for industrial, commercial, healthcare, education and government project environments.",

    url: "https://www.viprasfacility.com/services/fire-safety-manpower",

    siteName: "Vipras Facility Management Solutions Pvt. Ltd.",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "https://www.viprasfacility.com/fire-safety-manpower-vipras.png",
      width: 1731,
height: 909,
type: "image/png",
        alt: "Vipras fire safety manpower services in Chennai, Tamil Nadu and Pan India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Fire Safety Manpower Services in Chennai & Tamil Nadu | Vipras",

    description:
      "Trained fire wardens, safety stewards and emergency response manpower for factories, industries, warehouses, hospitals and commercial facilities.",

    images: [
      "https://www.viprasfacility.com/fire-safety-manpower-vipras.png",
    ],
  },

  applicationName: "Vipras Facility Management Solutions Pvt. Ltd.",
  creator: "Vipras Facility Management Solutions Pvt. Ltd.",
  publisher: "Vipras Facility Management Solutions Pvt. Ltd.",
  category: "Fire Safety Manpower Services",
  authors: [
  {
    name: "Vipras Facility Management Solutions Pvt. Ltd.",
    url: "https://www.viprasfacility.com",
  },
],
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Sholinganallur, Chennai, Tamil Nadu",
    "geo.position": "12.901406525376094;80.23219272492828",
    ICBM: "12.901406525376094, 80.23219272492828",
  },
};

const serviceHighlights = [
  "Trained fire and safety manpower for daily site safety operations",
  "Fire wardens, safety stewards and emergency response support",
  "Suitable for factories, plants, warehouses, IT parks and commercial sites",
  "Support for hospitals, schools, colleges, apartments and government project environments",
  "Process-driven deployment with supervision, attendance and quality checks",
  "Service support across Chennai, Tamil Nadu, Andhra Pradesh, Bangalore and Pan India",
];

const industries = [
  {
    icon: FaIndustry,
    title: "Factories & Industrial Plants",
    text: "Safety manpower for manufacturing units, production areas, assembly lines, plant operations and high-risk industrial zones.",
  },
  {
    icon: FaBuilding,
    title: "Corporate & IT Parks",
    text: "Professional fire safety support for office buildings, IT parks, business parks and commercial facilities.",
  },
  {
    icon: FaWarehouse,
    title: "Warehouses & Logistics",
    text: "Fire and safety manpower for storage facilities, loading areas, logistics hubs and material movement zones.",
  },
  {
    icon: FaUserShield,
    title: "Hospitals, Schools & Public Sites",
    text: "Disciplined safety teams for healthcare, education, apartments, public buildings and government project environments.",
  },
];

const workProcess = [
  {
    title: "Site Understanding",
    text: "We first understand your site type, risk areas, working hours, manpower need, entry points, emergency systems and daily safety requirements.",
  },
  {
    title: "Right Manpower Planning",
    text: "Based on your project, we plan suitable fire safety manpower such as fire wardens, safety stewards, fire operators or emergency response support.",
  },
  {
    title: "Deployment & Briefing",
    text: "Our team is deployed with clear duty instructions, reporting process, supervisor coordination and safety responsibility mapping.",
  },
  {
    title: "Monitoring & Quality Control",
    text: "We focus on attendance, discipline, grooming, site reporting, safety checks and regular coordination to maintain dependable service quality.",
  },
];

const qualityPoints = [
  "Professional and disciplined manpower deployment",
  "Site-wise duty planning and supervisor coordination",
  "Focus on fire prevention, emergency readiness and safe operations",
  "Support for compliance-focused facility environments",
  "Reliable attendance, reporting and replacement support",
  "Friendly communication with client teams and site management",
];
const fireSafetyManpowerJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.viprasfacility.com/services/fire-safety-manpower#webpage",
      url: "https://www.viprasfacility.com/services/fire-safety-manpower",
      name: "Fire Safety Manpower Services in Chennai & Tamil Nadu | Vipras",
      description:
        "Trained fire safety manpower, fire wardens, safety stewards and emergency response support for factories, industries, warehouses, hospitals, IT parks, schools, commercial buildings and government project environments.",
      inLanguage: "en-IN",
      dateModified: "2026-07-15",
      keywords: [
  "fire safety manpower services in Chennai",
  "fire safety manpower services in Tamil Nadu",
  "fire and safety manpower services",
  "trained fire safety manpower",
  "fire wardens in Chennai",
  "safety stewards",
  "emergency response manpower",
  "industrial fire safety manpower",
  "fire safety personnel for factories",
  "fire safety manpower for warehouses",
  "commercial fire safety manpower",
  "Pan India fire safety manpower services",
],
      isPartOf: {
        "@id": "https://www.viprasfacility.com/#website",
      },
      about: {
        "@id":
          "https://www.viprasfacility.com/services/fire-safety-manpower#service",
      },
      mainEntity: {
        "@id":
          "https://www.viprasfacility.com/services/fire-safety-manpower#service",
      },
      potentialAction: {
  "@type": "ContactAction",
  name: "Request Fire Safety Manpower Quote",
  target: {
    "@type": "EntryPoint",
    urlTemplate: "https://www.viprasfacility.com/contact-us",
    actionPlatform: [
      "https://schema.org/DesktopWebPlatform",
      "https://schema.org/MobileWebPlatform",
    ],
  },
},
      breadcrumb: {
        "@id":
          "https://www.viprasfacility.com/services/fire-safety-manpower#breadcrumb",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        "@id":
          "https://www.viprasfacility.com/services/fire-safety-manpower#primaryimage",
        url: "https://www.viprasfacility.com/fire-safety-manpower-vipras.png",
        contentUrl:
          "https://www.viprasfacility.com/fire-safety-manpower-vipras.png",
          width: 1731,
height: 909,

        caption:
          "Vipras Fire Safety Manpower Services in Chennai, Tamil Nadu and Pan India",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.viprasfacility.com/#website",
      url: "https://www.viprasfacility.com",
      name: "Vipras Facility Management Solutions Pvt. Ltd.",
      alternateName: "Vipras Facility Management Solutions",
      inLanguage: "en-IN",
      publisher: {
        "@id": "https://www.viprasfacility.com/#organization",
      },
    },
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://www.viprasfacility.com/#organization",
      name: "Vipras Facility Management Solutions Pvt. Ltd.",
      legalName: "Vipras Facility Management Solutions Pvt. Ltd.",
      alternateName: "Vipras Facility Management Solution",
      foundingDate: "2007",
      url: "https://www.viprasfacility.com",
      logo: {
  "@type": "ImageObject",
  url: "https://www.viprasfacility.com/vipras-logo%20(2).png",
},
      image:
        "https://www.viprasfacility.com/fire-safety-manpower-vipras.png",
      email: "viprascrm@gmail.com",
      telephone: "+91-97109-46484",
      hasMap: "https://maps.app.goo.gl/uCySkBgzJKPXGLuR7",
      knowsAbout: [
  "Fire safety manpower services",
  "Fire wardens",
  "Safety stewards",
  "Emergency response manpower",
  "Industrial fire safety support",
  "Fire equipment area monitoring",
  "Facility safety operations",
  "Compliance-focused safety manpower",
],
      address: {
        "@type": "PostalAddress",
        streetAddress: "No-495 A, Village High Road, Sholinganallur",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        postalCode: "600119",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 12.901406525376094,
        longitude: 80.23219272492828,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Chennai",
        },
        {
          "@type": "State",
          name: "Tamil Nadu",
        },
        {
          "@type": "State",
          name: "Andhra Pradesh",
        },
        {
          "@type": "City",
          name: "Bengaluru",
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-97109-46484",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Tamil", "Hindi"],
      },
      sameAs: [
      
        "https://www.linkedin.com/company/109659474/",
        "https://www.youtube.com/@viprasfacilitycrm8753",
        "https://www.instagram.com/viprasfacilitymanagement",
        "https://www.facebook.com/profile.php?id=61583160419137",
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://www.viprasfacility.com/services/fire-safety-manpower#service",
      name: "Fire and Safety Manpower Services",
      serviceType: "Fire Safety Manpower Services",
      url: "https://www.viprasfacility.com/services/fire-safety-manpower",
      description:
        "Trained fire and safety manpower, fire wardens, safety stewards, fire operators and emergency response support for industrial, commercial, healthcare, educational, warehouse and government project environments.",
      image:
        "https://www.viprasfacility.com/fire-safety-manpower-vipras.png",
      provider: {
        "@id": "https://www.viprasfacility.com/#organization",
      },
      providerMobility: "dynamic",

availableChannel: {
  "@type": "ServiceChannel",
  serviceUrl:
    "https://www.viprasfacility.com/services/fire-safety-manpower",
  servicePhone: {
    "@type": "ContactPoint",
    telephone: "+91-97109-46484",
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["English", "Tamil", "Hindi"],
  },
},
      mainEntityOfPage: {
        "@id":
          "https://www.viprasfacility.com/services/fire-safety-manpower#webpage",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Chennai",
        },
        {
          "@type": "State",
          name: "Tamil Nadu",
        },
        {
          "@type": "State",
          name: "Andhra Pradesh",
        },
        {
          "@type": "City",
          name: "Bengaluru",
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Factories, industrial plants, warehouses, hospitals, IT parks, schools, commercial buildings and government project environments",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Fire Safety Manpower Services",
        itemListElement: [
          "Fire Safety Personnel",
          "Fire Wardens and Safety Stewards",
          "Emergency Response Support",
          "Fire Equipment Area Monitoring",
          "Compliance-Focused Safety Support",
          "Supervisor Coordination",
        ].map((serviceName) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: serviceName,
          },
        })),
      },

    },
        {
      "@type": "FAQPage",
      "@id":
        "https://www.viprasfacility.com/services/fire-safety-manpower#faq",
      url: "https://www.viprasfacility.com/services/fire-safety-manpower",
      name: "Fire Safety Manpower Services Frequently Asked Questions",
      inLanguage: "en-IN",
      isPartOf: {
        "@id":
          "https://www.viprasfacility.com/services/fire-safety-manpower#webpage",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "What types of fire safety manpower does Vipras provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vipras provides trained fire safety personnel, fire wardens, safety stewards, emergency response support, fire equipment area monitoring personnel and supervisor coordination according to the site requirement.",
          },
        },
        {
          "@type": "Question",
          name: "Where are Vipras fire safety manpower services available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our services are available across Chennai, Tamil Nadu, Andhra Pradesh, Bangalore and Pan India for single-site and multi-location manpower requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Which industries can use fire safety manpower services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The service is suitable for factories, industrial plants, warehouses, logistics hubs, IT parks, hospitals, schools, colleges, hotels, apartments, commercial buildings and government project environments.",
          },
        },
        {
          "@type": "Question",
          name: "How does Vipras plan fire safety manpower deployment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We first understand the site type, risk areas, working hours, manpower count, emergency systems and operational requirements. Based on this assessment, we plan suitable manpower duties and deployment.",
          },
        },
        {
          "@type": "Question",
          name: "Does Vipras provide supervision and replacement support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our service approach includes supervisor coordination, attendance monitoring, reporting support, quality checks and replacement support whenever required.",
          },
        },
        {
          "@type": "Question",
          name: "What information is required to request a quotation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Share your site location, facility type, required manpower count, duty timings and expected responsibilities. Our team will review the requirement and suggest a suitable manpower plan.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.viprasfacility.com/services/fire-safety-manpower#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.viprasfacility.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://www.viprasfacility.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Fire and Safety Manpower",
          item: "https://www.viprasfacility.com/services/fire-safety-manpower",
        },
      ],
    },
  ],
};
export default function FireSafetyManpowerPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(fireSafetyManpowerJsonLd).replace(
      /</g,
      "\\u003c",
    ),
  }}
/>
      <section className="relative bg-slate-950">
  <div className="relative block aspect-[16/9] w-full sm:hidden">
    <Image
      src="/fire-safety-manpower-banner.png.png"
      alt="Fire and safety manpower services for factories, industries and commercial facilities"
      fill
fetchPriority="high"
sizes="(max-width: 639px) 100vw, 1px"
    />
  </div>

  <div className="block bg-slate-950 px-5 pb-10 pt-7 sm:hidden">
    <div className="mx-auto max-w-3xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-red-300/40 bg-white/10 px-4 py-2 text-sm font-semibold text-red-100">
        <FaFireExtinguisher className="text-red-300" />
        Fire & Safety Manpower Services
      </div>

      <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white">
  Trained Fire & Safety Manpower for Safer Facilities
</h1>
      <p className="mt-5 text-base leading-8 text-slate-200">
        Vipras Facility Management Solution provides dependable fire and
        safety manpower for industries, factories, IT parks, hospitals,
        schools, warehouses, commercial buildings, apartments and
        government project environments across Chennai, Tamil Nadu,
        Andhra Pradesh, Bangalore and Pan India.
      </p>

      <div className="mt-7 flex flex-col gap-3">
       <Link
  href="/contact-us"
  aria-label="Request trained fire safety manpower services from Vipras"
  title="Get Fire Safety Manpower Quote"
  className="inline-flex items-center justify-center gap-3 rounded-full bg-red-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-red-950/30 transition hover:bg-red-700"
>
          Get Free Quote
          <FaArrowRight />
        </Link>

        <a
  href="tel:+919710946484"
  aria-label="Call Vipras for fire safety manpower services"
  title="Call Vipras Fire Safety Manpower Team"
  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-slate-950"
>
          <FaPhoneAlt />
          Call +91 97109 46484
        </a>
      </div>

      <div className="mt-7 flex flex-wrap gap-2 text-xs font-semibold text-slate-100">
        {[
          "Chennai",
          "Tamil Nadu",
          "Andhra Pradesh",
          "Bangalore",
          "Pan India",
        ].map((area) => (
          <span
            key={area}
            className="rounded-full bg-white/10 px-3 py-2"
          >
            {area}
          </span>
        ))}
      </div>
    </div>
  </div>

  <div className="relative hidden min-h-[620px] sm:block">
    <Image
      src="/fire-safety-manpower-banner.png.png"
      alt="Fire and safety manpower services for factories, industries and commercial facilities"
     fill
fetchPriority="high"
sizes="(min-width: 640px) 100vw, 1px"
      className="object-cover object-center"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

    <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-8 py-24 lg:px-10">
      <div className="max-w-3xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-300/40 bg-white/10 px-4 py-2 text-sm font-semibold text-red-100 backdrop-blur-md">
          <FaFireExtinguisher className="text-red-300" />
          Fire & Safety Manpower Services
        </div>

        <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight text-white lg:text-7xl">
          Trained Fire & Safety Manpower for Safer Facilities
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
          Vipras Facility Management Solution provides dependable fire and
          safety manpower for industries, factories, IT parks, hospitals,
          schools, warehouses, commercial buildings, apartments and
          government project environments across Chennai, Tamil Nadu,
          Andhra Pradesh, Bangalore and Pan India.
        </p>

        <div className="mt-8 flex flex-row gap-4">
          <Link
            href="/contact-us"
            aria-label="Request trained fire safety manpower services from Vipras"
title="Get Fire Safety Manpower Quote"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-red-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-red-950/30 transition hover:bg-red-700"
          >
            Get Free Quote
            <FaArrowRight />
          </Link>

          <a
            href="tel:+919710946484"
            aria-label="Call Vipras for fire safety manpower services"
title="Call Vipras Fire Safety Manpower Team"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-slate-950"
          >
            <FaPhoneAlt />
            Call +91 97109 46484
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-slate-100">
          {[
            "Chennai",
            "Tamil Nadu",
            "Andhra Pradesh",
            "Bangalore",
            "Pan India",
          ].map((area) => (
            <span
              key={area}
              className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-md"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
   <nav
  aria-label="Breadcrumb"
  className="border-b border-slate-200 bg-white px-5 py-4 sm:px-8 lg:px-10"
>
  <div className="mx-auto max-w-7xl">
    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
      <li>
        <Link
          href="/"
          className="font-semibold transition hover:text-red-600"
        >
          Home
        </Link>
      </li>

      <li aria-hidden="true" className="text-slate-400">
        /
      </li>

      <li>
        <Link
          href="/services"
          className="font-semibold transition hover:text-red-600"
        >
          Services
        </Link>
      </li>

      <li aria-hidden="true" className="text-slate-400">
        /
      </li>

      <li
        aria-current="page"
        className="font-bold text-slate-950"
      >
        Fire and Safety Manpower
      </li>
    </ol>
  </div>
</nav>
      <section className="bg-slate-950 px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
         {[
  ["Since 2007", "Trusted facility management experience"],
  ["Multi-Sector Support", "Industrial, commercial, healthcare, education and residential sites"],
  ["Pan India Coverage", "Single-site and multi-location manpower support"],
  ["Trained & Supervised Teams", "Site-specific deployment, reporting and quality monitoring"],
].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <h2 className="text-xl font-black text-white">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
              Premium Safety Manpower Support
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Reliable fire safety manpower for daily protection, emergency
              readiness and safer operations.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Fire safety is not only about equipment. A safe facility also
              needs trained manpower who can monitor risk areas, support
              emergency readiness, guide people during safety situations, follow
              site instructions and coordinate with the client team. Vipras helps
              companies maintain a more secure, disciplined and
              compliance-focused environment through professional fire and
              safety manpower deployment.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Our service is suitable for industrial plants, factories,
              warehouses, logistics hubs, IT parks, hospitals, schools, colleges,
              hotels, apartments, commercial buildings and government project
              environments. We work with a practical approach: understand your
              site, plan the right manpower, deploy responsibly and monitor
              service quality.
            </p>

            <div className="mt-8">
  <Link
    href="/contact-us"
    aria-label="Request fire safety manpower services in Chennai and Tamil Nadu"
    title="Request Fire Safety Manpower Services"
    className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white transition hover:bg-red-700"
  >
    Request Fire Safety Manpower
    <FaArrowRight />
  </Link>
</div>
</div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-2xl shadow-slate-200/70">
            <div className="rounded-[1.5rem] bg-white p-6">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-2xl text-red-600">
                <FaShieldAlt />
              </div>

              <h3 className="text-2xl font-black text-slate-950">
                What We Provide
              </h3>

              <div className="mt-6 space-y-4">
                {serviceHighlights.map((item) => (
                  <div key={item} className="flex gap-3">
                    <FaCheckCircle className="mt-1 shrink-0 text-red-600" />
                    <p className="text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
              Service Scope
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              Fire & safety manpower services designed for professional facility environments.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: FaHardHat,
                title: "Fire Safety Personnel",
                text: "Trained manpower to support fire safety monitoring, site discipline, equipment area observation and emergency readiness.",
              },
              {
                icon: FaUserShield,
                title: "Fire Wardens & Safety Stewards",
                text: "Responsible personnel for guiding people, supporting evacuation discipline and coordinating with site teams during safety requirements.",
              },
              {
                icon: FaClipboardCheck,
                title: "Compliance-Focused Support",
                text: "Daily safety support that helps facilities maintain a more organized, documented and responsible working environment.",
              },
              {
                icon: FaUsersCog,
                title: "Emergency Response Support",
                text: "Manpower support for quick coordination, alertness, emergency communication and safe movement during incident situations.",
              },
              {
                icon: FaFireExtinguisher,
                title: "Fire Equipment Area Monitoring",
                text: "Support for observing fire points, extinguisher zones, hydrant areas, exit paths and safety-sensitive locations as per site instructions.",
              },
              {
                icon: FaHeadset,
                title: "Supervisor Coordination",
                text: "Smooth coordination with client teams, reporting support, attendance monitoring and replacement support whenever required.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-2xl text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                  <item.icon />
                </div>
                <h3 className="mt-6 text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
                Where We Serve
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
                Suitable for industrial, commercial, residential and government
                project environments.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Every facility has different safety needs. A factory needs
                strong risk monitoring, a hospital needs disciplined movement, a
                warehouse needs alertness around material zones and a commercial
                building needs professional front-line safety support. Vipras
                plans manpower according to your site condition, working hours
                and operational requirement.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {industries.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xl text-white">
                    <item.icon />
                  </div>
                  <h3 className="mt-5 text-lg font-black text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-300">
              How We Work
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              A clear, professional and quality-focused deployment process.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              We do not believe in simply sending manpower without understanding
              your requirement. Our approach is practical, planned and
              supervision-driven so clients can get dependable support with
              better control.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {workProcess.map((item, index) => (
              <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-lg font-black">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="rounded-[2rem] bg-gradient-to-br from-red-600 to-slate-950 p-8 text-white shadow-2xl shadow-red-200">
            <FaShieldAlt className="text-5xl text-red-100" />
            <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">
              Why clients choose Vipras for fire & safety manpower.
            </h2>
            <p className="mt-5 text-base leading-8 text-red-50">
              Since 2007, Vipras Facility Management Solution has supported
              facility operations with a focus on trust, manpower quality,
              service discipline and client satisfaction. Our fire and safety
              manpower service is built for businesses that want dependable
              people, better coordination and a safer working environment.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact-us"
                aria-label="Contact Vipras for fire safety manpower services"
                title="Contact Vipras Fire Safety Manpower Team"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
              >
                Contact Our Team
                <FaArrowRight />
              </Link>

              <a
                href="tel:+919710946484"
                aria-label="Call Vipras for fire safety manpower services"
                title="CallVipras Fire Safety Manpower Team"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-slate-950"
              >
                <FaPhoneAlt />
                Call Now
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {qualityPoints.map((item) => (
              <div key={item} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                  <FaCheckCircle />
                </div>
                <p className="text-sm font-semibold leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
                Service Coverage
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
                Fire & safety manpower services in Chennai, Tamil Nadu, Andhra
                Pradesh, Bangalore and Pan India.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Vipras provides fire and safety manpower for single-site and
                multi-location requirements. Whether you need manpower for a
                factory in Chennai, a warehouse in Tamil Nadu, an industrial
                project in Andhra Pradesh, a commercial site in Bangalore or a
                Pan India facility requirement, our team can discuss your need
                and provide a suitable service plan.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-950 p-6 text-white lg:min-w-[320px]">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-red-400" />
                <div>
                  <h3 className="font-black">Vipras Facility Management Solution</h3>
                  <a
  href="https://maps.app.goo.gl/uCySkBgzJKPXGLuR7"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="View Vipras Facility Management Solutions office in Sholinganallur, Chennai on Google Maps"
  title="Vipras Office Location on Google Maps"
  className="mt-2 block text-sm leading-7 text-slate-300"
>
  No-495 A, Village High Rd, Sholinganallur, Chennai, Tamil Nadu 600119
</a>
                </div>
              </div>

              <div className="mt-5 border-t border-white/10 pt-5">
                <a
                 href="tel:+919710946484"
                 aria-label="Call Vipras for fire safety manpower services"
                 title="Call Vipras Fire Safety Manpower Team" 
                className="flex items-center gap-3 text-sm font-bold text-white">
                  <FaPhoneAlt className="text-red-400" />
                  +91 97109 46484
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              Common questions about fire safety manpower services
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Find clear answers about our manpower types, service locations,
              industries, deployment process and support.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {[
              {
                question:
                  "What types of fire safety manpower does Vipras provide?",
                answer:
                  "Vipras provides trained fire safety personnel, fire wardens, safety stewards, emergency response support, fire equipment area monitoring personnel and supervisor coordination according to the site requirement.",
              },
              {
                question:
                  "Where are Vipras fire safety manpower services available?",
                answer:
                  "Our services are available across Chennai, Tamil Nadu, Andhra Pradesh, Bangalore and Pan India for single-site and multi-location manpower requirements.",
              },
              {
                question:
                  "Which industries can use fire safety manpower services?",
                answer:
                  "The service is suitable for factories, industrial plants, warehouses, logistics hubs, IT parks, hospitals, schools, colleges, hotels, apartments, commercial buildings and government project environments.",
              },
              {
                question:
                  "How does Vipras plan fire safety manpower deployment?",
                answer:
                  "We first understand the site type, risk areas, working hours, manpower count, emergency systems and operational requirements. Based on this assessment, we plan suitable manpower duties and deployment.",
              },
              {
                question:
                  "Does Vipras provide supervision and replacement support?",
                answer:
                  "Yes. Our service approach includes supervisor coordination, attendance monitoring, reporting support, quality checks and replacement support whenever required.",
              },
              {
                question:
                  "What information is required to request a quotation?",
                answer:
                  "Share your site location, facility type, required manpower count, duty timings and expected responsibilities. Our team will review the requirement and suggest a suitable manpower plan.",
              },
            ].map((item) => (
              <details
                key={item.question}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 open:bg-white open:shadow-lg"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left">
                  <span className="text-lg font-black text-slate-950">
                    {item.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 text-xl font-bold text-red-600"
                  >
                    +
                  </span>
                </summary>

                <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 pb-24 sm:px-8 sm:pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950">
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-red-300">
                Need Fire & Safety Manpower?
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                Talk to Vipras today and get a professional manpower plan for your site.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
                Share your location, site type, manpower count and duty timing.
                Our team will guide you with a suitable fire and safety manpower solution.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link
                href="/contact-us"
                aria-label="Get a free quote for fire safety manpower services"
                title="GetFire Safety Manpower Quote"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-bold text-white transition hover:bg-red-700"
              >
                Get Free Quote
                <FaArrowRight />
              </Link>

              <a
                href="tel:+919710946484"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-slate-950"
              >
                <FaPhoneAlt />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/20 bg-slate-950/95 p-3 backdrop-blur-xl sm:hidden">
        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:+919710946484"
            aria-label="Call Vipras for fire safety manpower services"
title="Call Vipras Fire Safety Team"
            className="flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-black text-slate-950"
          >
            <FaPhoneAlt />
            Call Now
          </a>

          <Link
            href="/contact-us"
            aria-label="Request a fire safety manpower quote from Vipras"
title="Get Fire Safety Manpower Quote"
            className="flex items-center justify-center gap-2 rounded-full bg-red-600 px-4 py-3 text-xs font-black text-white"
          >
            Get Quote
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </main>
  );
}
