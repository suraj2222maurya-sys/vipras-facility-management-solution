import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: {
    absolute: "Technical Maintenance Services in Chennai | Vipras",
  },

  description:
    "Vipras Facility Management Solution provides electrical, plumbing, AC, HVAC, building and plant maintenance services in Chennai with Pan-India support.",

  keywords: [
    "technical maintenance services in Chennai",
    "technical maintenance services near me",
    "technical maintenance company in Chennai",
    "technical maintenance contractor in Chennai",
    "maintenance contractor in Chennai",
    "maintenance contractor near me",

    "electrical maintenance services in Chennai",
    "electrical maintenance services near me",
    "electrical wiring services in Chennai",
    "electrical wiring services near me",
    "electrical repair services in Chennai",
    "electrical repair services near me",
    "electrician services in Chennai",
    "electrician services near me",
    "electrician near me",

    "Plumber Services In Chennai",
    "plumber services near me",
    "plumbing services in Chennai",
    "plumbing services near me",
    "plumbing maintenance services in Chennai",
    "plumbing maintenance services near me",
    "plumber near me",
    "AC repair services in Chennai",
    "AC repair services near me",
    "AC maintenance services in Chennai",
    "AC maintenance services near me",
    "AC service in Chennai",
    "AC service near me",
    "AC technician in Chennai",
    "AC technician near me",
    "HVAC maintenance services in Chennai",
    "building maintenance services in Chennai",
    "building maintenance services near me",
    "commercial building maintenance services in Chennai",
    "facility maintenance services in Chennai",
    "facility maintenance services near me",
    "Apartment Maintenance in Chennai",
    "residential maintenance services in Chennai",
    "residential maintenance services near me",
    "hotel maintenance services in Chennai",
    "hotel maintenance services near me",
    "office maintenance services in Chennai",
    "office maintenance services near me",
    "corporate office maintenance services in Chennai",
    "factory maintenance services in Chennai",
    "factory maintenance services near me",
    "industrial maintenance services in Chennai",
    "industrial maintenance services near me",
    "Plant Maintenance Services in Chennai",
    "plant maintenance contractor in Chennai",
    "Preventive Maintenance Service in Chennai",
    "emergency maintenance services near me",

    "general technician services in Chennai",
    "general technician services near me",
    "large project maintenance services",
    "large project maintenance contractor",

    "VIP Electrical Plumbing & AC Services",
    "Vipras electrical plumbing and AC services",
    "Pan-India Support & Maintenance Services",
  ],

  authors: [
    {
      name: "Vipras Facility Management Solutions Private Limited",
      url: "https://www.viprasfacility.com/",
    },
  ],

  creator: "Vipras Facility Management Solutions Private Limited",

  publisher: "Vipras Facility Management Solutions Private Limited",

  category: "Technical Maintenance Services",

  alternates: {
    canonical:
      "https://www.viprasfacility.com/services/technical-maintenance",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Technical Maintenance Services in Chennai | Vipras",

    description:
      "Vipras Facility Management Solution provides electrical, plumbing, AC, HVAC, building and plant maintenance services in Chennai with Pan-India support.",

    url:
      "https://www.viprasfacility.com/services/technical-maintenance",

    siteName: "Vipras Facility Management Solution",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url:
          "https://www.viprasfacility.com/technical-maintenance-services-chennai-og.png",
        width: 1731,
        height: 909,
        type: "image/png",
        alt:
          "Vipras Technical Maintenance Services in Chennai, Tamil Nadu and Pan India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Technical Maintenance Services in Chennai | Vipras",

    description:
      "Vipras Facility Management Solution provides electrical, plumbing, AC, HVAC, building and plant maintenance services in Chennai with Pan-India support.",

    images: [
      "https://www.viprasfacility.com/technical-maintenance-services-chennai-og.png",
    ],
  },
};

const maintenanceServices = [
  "Electrical Maintenance",
  "Electrical Wiring Work",
  "Plumbing Services",
  "AC Repair & Maintenance",
  "HVAC Maintenance",
  "Geyser Repair Support",
  "Apartment Maintenance",
  "Residential Maintenance",
  "Hotel Maintenance",
  "School Maintenance",
  "Corporate Office Maintenance",
  "Factory & Plant Maintenance",
  "Industrial Technical Support",
  "Preventive Maintenance",
  "Breakdown Support",
  "Large Project Maintenance",
];

const qualityPoints = [
  "Experienced technical team for small, medium and large maintenance projects",
  "Electrical, plumbing, AC, HVAC and general technician support under one service",
  "Reliable maintenance support for homes, apartments, hotels, schools, offices, factories and plants",
  "Quality-focused work with proper coordination, supervision and client satisfaction",
];
const processSteps = [
  {
    title: "Requirement Check",
    text: "We understand the maintenance need, site type, work urgency, project size and technical requirement.",
  },
  {
    title: "Technician Planning",
    text: "We assign the right technical team for electrical, plumbing, AC, HVAC, wiring or general maintenance work.",
  },
  {
    title: "Work Execution",
    text: "Our team completes the maintenance work with proper tools, safety care and professional supervision.",
  },
  {
    title: "Quality Review",
    text: "We check the completed work and support clients with reliable follow-up to reduce complaints and downtime.",
  },
];

const technicalMaintenanceSchema = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "LocalBusiness",

      "@id": "https://www.viprasfacility.com/#organization",

      name: "Vipras Facility Management Solution",

      legalName:
        "Vipras Facility Management Solutions Private Limited",

      url: "https://www.viprasfacility.com/",

      image:
        "https://www.viprasfacility.com/technical-maintenance-services-chennai-og.png",

      telephone: "+919710946484",

      email: "viprascrm@gmail.com",

      address: {
  "@type": "PostalAddress",

  streetAddress:
    "No-495 A, Village High Rd, Sholinganallur",

  addressLocality: "Chennai",

  addressRegion: "Tamil Nadu",

  postalCode: "600119",

  addressCountry: "IN",
},

geo: {
  "@type": "GeoCoordinates",

  latitude: 12.9021541,

  longitude: 80.2326451,
},

hasMap:
  "https://maps.app.goo.gl/GB9cQDMvAaYzAPR59",

      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",

          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],

          opens: "00:00",

          closes: "23:59",
        },
      ],

      areaServed: [
        {
          "@type": "City",
          name: "Chennai",
        },

        {
          "@type": "AdministrativeArea",
          name: "Tamil Nadu",
        },

        {
          "@type": "Country",
          name: "India",
        },
      ],

      contactPoint: [
        {
          "@type": "ContactPoint",

          name: "Customer Support",

          telephone: "+919710946484",

          email: "viprascrm@gmail.com",

          contactType: "customer support",

          areaServed: "IN",

          availableLanguage: "English",
        },

        {
          "@type": "ContactPoint",

          name: "WhatsApp Support",

          telephone: "+919710946484",

          url: "https://wa.me/919710946484",

          contactType: "customer support",

          areaServed: "IN",

          availableLanguage: "English",
        },
      ],

      sameAs: [
        "https://www.youtube.com/@viprasfacilitycrm8753",

        "https://www.linkedin.com/company/109659474/",

        "https://www.facebook.com/profile.php?id=61583160419137",

        "https://www.instagram.com/viprasfacilitymanagement/",
      ],
    },

    {
      "@type": "WebSite",

      "@id": "https://www.viprasfacility.com/#website",

      url: "https://www.viprasfacility.com/",

      name: "Vipras Facility Management Solution",

      publisher: {
        "@id": "https://www.viprasfacility.com/#organization",
      },

      inLanguage: "en-IN",
    },

    {
      "@type": "WebPage",

      "@id":
        "https://www.viprasfacility.com/services/technical-maintenance#webpage",

      url:
        "https://www.viprasfacility.com/services/technical-maintenance",

      name:
        "Technical Maintenance Services in Chennai | Vipras",

      description:
  "Vipras Facility Management Solution provides electrical, plumbing, AC, HVAC, building and plant maintenance services in Chennai with Pan-India support.",

dateModified: "2026-07-13",

isPartOf: {
  "@id": "https://www.viprasfacility.com/#website",
},

      publisher: {
        "@id": "https://www.viprasfacility.com/#organization",
      },

      mainEntity: {
        "@id":
          "https://www.viprasfacility.com/services/technical-maintenance#service",
      },

      breadcrumb: {
        "@id":
          "https://www.viprasfacility.com/services/technical-maintenance#breadcrumb",
      },

      primaryImageOfPage: {
        "@type": "ImageObject",

        "@id":
          "https://www.viprasfacility.com/services/technical-maintenance#primaryimage",

        url:
          "https://www.viprasfacility.com/technical-maintenance-services-chennai-og.png",

        contentUrl:
          "https://www.viprasfacility.com/technical-maintenance-services-chennai-og.png",

        width: 1731,

        height: 909,

        caption:
          "Vipras Technical Maintenance Services in Chennai, Tamil Nadu and Pan India",
      },

      inLanguage: "en-IN",
    },

    {
      "@type": "Service",

      "@id":
        "https://www.viprasfacility.com/services/technical-maintenance#service",

      name: "Technical Maintenance Services in Chennai",

      alternateName: [
        "Electrical Maintenance Services in Chennai",
        "Plumbing Services in Chennai",
        "AC Repair and Maintenance Services in Chennai",
        "HVAC Maintenance Services in Chennai",
        "Building Maintenance Services in Chennai",
        "Plant Maintenance Services in Chennai",
      ],

      serviceType: [
        "Technical Maintenance Services",
        "Electrical Maintenance",
        "Electrical Wiring Work",
        "Plumbing Services",
        "AC Repair and Maintenance",
        "HVAC Maintenance",
        "Geyser Repair Support",
        "Apartment Maintenance",
        "Residential Maintenance",
        "Hotel Maintenance",
        "School Maintenance",
        "Corporate Office Maintenance",
        "Factory and Plant Maintenance",
        "Industrial Technical Support",
        "Preventive Maintenance",
        "Breakdown Support",
        "Large Project Maintenance",
      ],

      description:
        "Vipras Facility Management Solution provides technical maintenance services for electrical wiring, plumbing, AC, HVAC, buildings, apartments, offices, factories, plants and large projects.",

      url:
        "https://www.viprasfacility.com/services/technical-maintenance",

      mainEntityOfPage: {
        "@id":
          "https://www.viprasfacility.com/services/technical-maintenance#webpage",
      },

     provider: {
  "@id": "https://www.viprasfacility.com/#organization",
},

brand: {
  "@id": "https://www.viprasfacility.com/#organization",
},

providerMobility: "dynamic",

audience: [
  {
    "@type": "Audience",
    audienceType:
      "Homeowners, residential properties and apartment communities",
  },
  {
    "@type": "Audience",
    audienceType:
      "Hotels, schools, commercial buildings and corporate offices",
  },
  {
    "@type": "Audience",
    audienceType:
      "Factories, plants and industrial facilities",
  },
  {
    "@type": "Audience",
    audienceType:
      "Large projects and property management clients",
  },
],

areaServed: [
        {
          "@type": "City",
          name: "Chennai",
        },

        {
          "@type": "AdministrativeArea",
          name: "Tamil Nadu",
        },

        {
          "@type": "Country",
          name: "India",
        },
      ],

      availableChannel: [
        {
          "@type": "ServiceChannel",

          name: "Phone Support",

          servicePhone: {
            "@type": "ContactPoint",

            telephone: "+919710946484",

            contactType: "customer support",
          },
        },

        {
          "@type": "ServiceChannel",

          name: "WhatsApp Support",

          serviceUrl: "https://wa.me/919710946484",
        },

        {
          "@type": "ServiceChannel",

          name: "Email Support",

          serviceUrl: "mailto:viprascrm@gmail.com",
        },
      ],

      hoursAvailable: {
        "@type": "OpeningHoursSpecification",

        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],

        opens: "00:00",

        closes: "23:59",
      },

      hasOfferCatalog: {
        "@type": "OfferCatalog",

        name: "Technical Maintenance Services",

        itemListElement: maintenanceServices.map((service) => ({
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",

            name: service,

            provider: {
              "@id":
                "https://www.viprasfacility.com/#organization",
            },
          },
        })),
      },
    },

    {
      "@type": "BreadcrumbList",

      "@id":
        "https://www.viprasfacility.com/services/technical-maintenance#breadcrumb",

      itemListElement: [
        {
          "@type": "ListItem",

          position: 1,

          name: "Home",

          item: "https://www.viprasfacility.com/",
        },

        {
          "@type": "ListItem",

          position: 2,

          name: "Services",

          item:
            "https://www.viprasfacility.com/services",
        },

        {
          "@type": "ListItem",

          position: 3,

          name: "Technical Maintenance Services",

          item:
            "https://www.viprasfacility.com/services/technical-maintenance",
        },
      ],
    },
  ],
};

export default function TechnicalMaintenancePage() {
  return (
    <main className="overflow-hidden bg-[#fffaf2]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            technicalMaintenanceSchema,
          ).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative overflow-hidden bg-[#fffaf2]">
  <div className="relative">
    <img
  src="/technical-maintenance-banner.png (2).png"
  alt="Vipras technical maintenance services team in Chennai for electrical, plumbing, AC and HVAC support"
  loading="eager"
  fetchPriority="high"
  decoding="async"
  className="h-auto w-full object-contain"
/>

    <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[#fffaf2]/95 via-[#fffaf2]/65 to-transparent lg:block" />

    <div className="absolute inset-y-0 left-0 hidden w-full items-center lg:flex">
      <div className="mx-auto w-full max-w-7xl px-12">
        <div className="max-w-xl">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#b98a3c]">
            Technical Maintenance Services
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight text-[#2f281f] xl:text-4xl">
  Reliable Electrical, Plumbing, AC and Building Maintenance Support
</h2>

          <p className="mt-4 text-sm font-medium leading-7 text-[#6f6254] xl:text-base">
            Professional technical maintenance services for homes, apartments,
            hotels, schools, offices, factories, plants and large project sites
            across Chennai, Tamil Nadu and Pan India.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact-us"
              className="rounded-full bg-[#b98a3c] px-7 py-3 text-sm font-black text-white shadow-lg shadow-[#b98a3c]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#9f742f]"
            >
              Get Maintenance Quote
            </Link>

            <a
            href="https://wa.me/919710946484?text=Hello%20Vipras%20Facility%20Management%20Solution%2C%20I%20would%20like%20to%20know%20more%20about%20your%20technical%20maintenance%20services."
          aria-label="Chat with Vipras on WhatsApp about technical maintenance services"
          target="_blank"
          rel="noopener noreferrer"
              className="rounded-full border border-[#d6b06a] bg-white/80 px-7 py-3 text-sm font-black text-[#4a3720] shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="px-5 py-6 sm:px-8 lg:hidden">
    <div className="rounded-[1.5rem] border border-[#eadfca] bg-white/90 p-5 shadow-xl shadow-black/10 backdrop-blur sm:p-6">
      <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b98a3c]">
        Technical Maintenance Services
      </p>

     <h2 className="mt-3 text-2xl font-black leading-tight text-[#2f281f] sm:text-3xl">
  Reliable Electrical, Plumbing, AC and Building Maintenance Support
</h2>

      <p className="mt-3 text-sm font-medium leading-7 text-[#6f6254] sm:text-base">
        Professional technical maintenance services for homes, apartments,
        hotels, schools, offices, factories, plants and large project sites
        across Chennai, Tamil Nadu and Pan India.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href="/contact-us"
          className="rounded-full bg-[#b98a3c] px-6 py-3 text-sm font-black text-white shadow-lg shadow-[#b98a3c]/30"
        >
          Get Maintenance Quote
        </Link>

        <a
          href="https://wa.me/919710946484?text=Hello%20Vipras%20Facility%20Management%20Solution%2C%20I%20would%20like%20to%20know%20more%20about%20your%20technical%20maintenance%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[#d6b06a] bg-[#fffaf2] px-6 py-3 text-sm font-black text-[#4a3720]"
        >
          WhatsApp Now
        </a>
      </div>
    </div>
  </div>
</section>

<section
  id="technical-maintenance-services"
  aria-labelledby="technical-maintenance-heading"
  className="relative px-5 pb-14 pt-8 sm:px-8 lg:px-12"
>
        <div className="absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-[#d6b06a]/25 blur-3xl" />
        <div className="absolute right-[-140px] bottom-0 h-96 w-96 rounded-full bg-[#eadfca]/80 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#d6b06a_1px,transparent_0)] bg-[length:30px_30px] opacity-15" />

        <div className="relative mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-[#eadfca] bg-white/90 p-6 shadow-2xl shadow-black/10 backdrop-blur sm:p-8 lg:p-10">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#b98a3c] sm:text-sm">
              Technical Maintenance
            </p>

            <h1
  id="technical-maintenance-heading"
  className="mt-4 max-w-4xl text-3xl font-black leading-tight text-[#2f281f] sm:text-4xl lg:text-5xl"
>
  Trusted Technical Maintenance Services for Homes, Buildings,
  Offices, Factories and Large Projects
</h1>

            <p className="mt-5 max-w-4xl text-base font-medium leading-8 text-[#6f6254] sm:text-lg">
              Vipras Facility Management Solution provides professional
              technical maintenance services for residential homes, apartments,
              hotels, schools, corporate offices, commercial buildings,
              factories, new plants and large project sites. Our technical team
              supports electrical work, wiring, plumbing, AC repair, HVAC
              maintenance, geyser service, preventive maintenance and general
              technician support across Chennai, Tamil Nadu and Pan India.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="rounded-full bg-[#b98a3c] px-7 py-3 text-sm font-black text-white shadow-lg shadow-[#b98a3c]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#9f742f]"
              >
                Get Maintenance Quote
              </Link>

              <a
                href="https://wa.me/919710946484?text=Hello%20Vipras%20Facility%20Management%20Solution%2C%20I%20would%20like%20to%20know%20more%20about%20your%20technical%20maintenance%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#d6b06a] bg-[#fffaf2] px-7 py-3 text-sm font-black text-[#4a3720] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                WhatsApp Now
              </a>
            </div>
          </div>

        <section
  id="technical-maintenance-solutions"
  aria-labelledby="technical-maintenance-solutions-heading"
  className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.32em] text-[#b98a3c]">
                What We Provide
              </p>

<h2
  id="technical-maintenance-solutions-heading"
  className="mt-4 text-3xl font-black leading-tight text-[#2f281f] sm:text-4xl"
>
  Complete Maintenance Support for Every Property and Project
</h2>

              <p className="mt-5 text-base font-medium leading-8 text-[#6f6254]">
                Whether the requirement is a small home repair, apartment
                maintenance, office electrical work, hotel plumbing support,
                school maintenance, factory wiring, plant technical support or a
                large maintenance tender, Vipras provides dependable service with
                trained technicians, proper coordination and quality-focused
                execution.
              </p>

              <ul
  className="mt-6 space-y-4"
  aria-label="Technical maintenance service benefits"
>
  {qualityPoints.map((point) => (
    <li
      key={point}
      className="rounded-2xl border border-[#eadfca] bg-white/85 p-4 text-sm font-black leading-7 text-[#3d3328] shadow-lg shadow-black/5"
    >
      {point}
    </li>
  ))}
</ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
  {maintenanceServices.map((service) => (
    <div
      key={service}
      className="rounded-2xl border border-[#eadfca] bg-white/90 p-5 text-sm font-black text-[#3d3328] shadow-lg shadow-black/5 transition duration-300 hover:-translate-y-1 hover:border-[#d6b06a] hover:shadow-xl hover:shadow-[#d6b06a]/15"
    >
      {service}
    </div>
  ))}
            </div>
          </section>

          <div className="mt-10 rounded-[2rem] border border-[#eadfca] bg-white/90 p-6 shadow-2xl shadow-black/10 backdrop-blur sm:p-8 lg:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.32em] text-[#b98a3c]">
                Our Working Process
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-[#2f281f] sm:text-4xl">
                A Smooth Process for Reliable Technical Maintenance
              </h2>

              <p className="mt-5 text-base font-medium leading-8 text-[#6f6254]">
                We follow a simple and professional process to understand the
                issue, deploy the right technician, complete the work properly
                and maintain service quality.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-[#eadfca] bg-[#fffaf2] p-5 shadow-lg shadow-black/5 transition duration-300 hover:-translate-y-1 hover:border-[#d6b06a]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d6b06a] text-sm font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="mt-4 text-lg font-black text-[#2f281f]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-[#6f6254]">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-[#eadfca] bg-gradient-to-r from-[#2f281f] to-[#121812] p-7 text-center shadow-2xl shadow-black/15 sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-[#d6b06a]">
              Need Technical Maintenance?
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl">
              Get Reliable Electrical, Plumbing, AC and Building Maintenance
              Support
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-8 text-white/75">
              Connect with Vipras Facility Management Solution for trusted
              technical maintenance services in Chennai, Tamil Nadu and Pan
              India.
            </p>

            <Link
              href="/contact-us"
              className="mt-7 inline-flex rounded-full bg-[#d6b06a] px-8 py-4 text-sm font-black text-[#17130d] shadow-lg shadow-[#d6b06a]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#f3d28b]"
            >
              Get Maintenance Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
