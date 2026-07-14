import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
  absolute: "Housekeeping Services in Chennai & Pan India | Vipras",
},
  description:
    "Professional housekeeping and soft services in Chennai, across Tamil Nadu and Pan India for offices, hospitals, factories, apartments and commercial facilities.",

  applicationName: "Vipras Facility Management Solution",

  authors: [
    {
      name: "Vipras Facility Management Solution",
      url: "https://www.viprasfacility.com",
    },
  ],

  creator: "Vipras Facility Management Solution",

  publisher: "Vipras Facility Management Solution",

  keywords: [
    "housekeeping services in Chennai",
    "best housekeeping company in Chennai",
    "professional housekeeping services Chennai",
    "facility management services Chennai",
    "soft services company in Chennai",
    "corporate housekeeping services Chennai",
    "office housekeeping services Chennai",
    "IT park housekeeping services Chennai",
    "hospital housekeeping services Chennai",
    "industrial housekeeping services Chennai",
    "factory housekeeping services Chennai",
    "commercial housekeeping services Chennai",
    "apartment housekeeping services Chennai",
    "residential housekeeping services Chennai",
    "warehouse housekeeping services Chennai",
    "school housekeeping services Chennai",
    "hotel housekeeping services Chennai",
    "housekeeping manpower services Chennai",
    "deep cleaning services Chennai",
    "washroom hygiene services Chennai",
    "housekeeping services Tamil Nadu",
    "facility management services Tamil Nadu",
    "housekeeping company Tamil Nadu",
    "housekeeping services Pan India",
    "facility management company Pan India",
    "government project housekeeping services",
  ],

  alternates: {
    canonical:
      "https://www.viprasfacility.com/services/housekeeping-soft-services",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

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
    title:
      "Professional Housekeeping Services in Chennai, Tamil Nadu & Pan India",

    description:
      "Vipras Facility Management Solution provides professional housekeeping and soft services for offices, IT parks, hospitals, factories, apartments, warehouses, commercial buildings and government projects across Chennai, Tamil Nadu and Pan India.",

    url: "https://www.viprasfacility.com/services/housekeeping-soft-services",

    siteName: "Vipras Facility Management Solution",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "https://www.viprasfacility.com/housekeeping-soft-services-og.png",
        width: 1536,
        height: 1024,
        alt: "Vipras professional housekeeping and soft services in Chennai, Tamil Nadu and Pan India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Housekeeping Services in Chennai, Tamil Nadu & Pan India | Vipras",

    description:
      "Professional housekeeping and soft facility services for offices, hospitals, factories, apartments and commercial properties across Chennai, Tamil Nadu and Pan India.",

    images: [
      "https://www.viprasfacility.com/housekeeping-soft-services-og.png",
    ],
  },

  category: "Housekeeping and Facility Management Services",

  other: {
    "content-language": "en-IN",
    "geo.region": "IN-TN",
    "geo.placename": "Chennai, Tamil Nadu, India",
  },
};

const serviceTypes = [
  "Corporate Office Housekeeping",
  "IT Park Housekeeping",
  "Hospital Housekeeping",
  "School & College Housekeeping",
  "Hotel & Hospitality Housekeeping",
  "Factory & Industrial Housekeeping",
  "Apartment & Gated Community Housekeeping",
  "Commercial Building Housekeeping",
  "Warehouse Housekeeping",
  "Government Project Housekeeping",
  "Deep Cleaning Support",
  "Washroom Hygiene Support",
];

const qualityPoints = [
  "Trained housekeeping staff with neat uniform and discipline",
  "Daily cleaning schedules and site-level supervision",
  "Hygiene-focused cleaning for safe and pleasant workplaces",
  "Suitable for corporate, industrial, residential and government sites",
];

const processSteps = [
  {
    title: "Site Understanding",
    text: "We understand the property type, daily footfall, cleaning needs and hygiene expectations.",
  },
  {
    title: "Team Deployment",
    text: "We deploy trained housekeeping staff with proper grooming, uniform and cleaning responsibility.",
  },
  {
    title: "Daily Supervision",
    text: "Supervisors monitor cleaning quality, staff attendance, material usage and daily work completion.",
  },
  {
    title: "Quality Improvement",
    text: "We review service quality regularly and improve cleaning standards based on client feedback.",
  },
];

export default function HousekeepingSoftServicesPage() {
  return (
    <main className="overflow-hidden bg-[#fffaf2]">
            <script
        id="housekeeping-service-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://www.viprasfacility.com/#business",
                name: "Vipras Facility Management Solution",
                url: "https://www.viprasfacility.com",
                image:
                  "https://www.viprasfacility.com/housekeeping-soft-services-og.png",
                telephone: "+91 97109 46484",
                email: "viprascrm@gmail.com",
                              address: {
                  "@type": "PostalAddress",
                  streetAddress: "No-495 A, Village High Road",
                  addressLocality: "Sholinganallur",
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
                  "https://maps.app.goo.gl/uCySkBgzJKPXGLuR7",
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
                sameAs: [
                  "https://www.youtube.com/@viprasfacilitycrm8753",
                  "https://www.linkedin.com/company/109659474/",
                  "https://www.instagram.com/viprasfacilitymanagement?igsh=YWxvMDY5enViY25i",
                  "https://www.facebook.com/profile.php?id=61583160419137",
                  "https://maps.app.goo.gl/uCySkBgzJKPXGLuR7",
                ],
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    telephone: "+91 97109 46484",
                    email: "viprascrm@gmail.com",
                    contactType: "sales and customer service",
                    areaServed: "IN",
                    availableLanguage: ["English", "Tamil", "Hindi"],
                  },
                ],
              },
                            {
                "@type": "WebSite",
                "@id": "https://www.viprasfacility.com/#website",
                url: "https://www.viprasfacility.com",
                name: "Vipras Facility Management Solution",
                description:
                  "Professional facility management, housekeeping and support services across Chennai, Tamil Nadu and Pan India.",
                inLanguage: "en-IN",
                publisher: {
                  "@id": "https://www.viprasfacility.com/#business",
                },
              },
              {
                "@type": "WebPage",
                "@id":
                  "https://www.viprasfacility.com/services/housekeeping-soft-services",
                url:
                  "https://www.viprasfacility.com/services/housekeeping-soft-services",
                name:
                  "Professional Housekeeping Services in Chennai, Tamil Nadu & Pan India",
                description:
                  "Professional housekeeping and soft services in Chennai, across Tamil Nadu and Pan India for offices, hospitals, factories, apartments and commercial facilities.",
                inLanguage: "en-IN",
                isPartOf: {
                  "@id": "https://www.viprasfacility.com/#website",
                },
                about: {
                  "@id": "https://www.viprasfacility.com/#business",
                },
                mainEntity: {
                  "@id":
                    "https://www.viprasfacility.com/services/housekeeping-soft-services#service",
                },
                breadcrumb: {
                  "@id":
                    "https://www.viprasfacility.com/services/housekeeping-soft-services#breadcrumb",
                },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  "@id":
                    "https://www.viprasfacility.com/services/housekeeping-soft-services#primaryimage",
                  url:
                    "https://www.viprasfacility.com/housekeeping-soft-services-og.png",
                  contentUrl:
                    "https://www.viprasfacility.com/housekeeping-soft-services-og.png",
                  width: 1536,
                  height: 1024,
                  caption:
                    "Vipras professional housekeeping and soft services in Chennai, Tamil Nadu and Pan India",
                },
              },
              {
                "@type": "Service",
                "@id":
                  "https://www.viprasfacility.com/services/housekeeping-soft-services#service",
                name:
                  "Professional Housekeeping and Soft Services in Chennai, Tamil Nadu and Pan India",
                serviceType:
                  "Commercial Housekeeping and Facility Management Soft Services",
                url:
                  "https://www.viprasfacility.com/services/housekeeping-soft-services",
                description:
                  "Professional housekeeping and soft facility services for corporate offices, IT parks, hospitals, schools, hotels, factories, warehouses, apartments, commercial buildings and government project environments across Chennai, Tamil Nadu and Pan India.",
                image:
                  "https://www.viprasfacility.com/housekeeping-soft-services-og.png",
                provider: {
                  "@id": "https://www.viprasfacility.com/#business",
                },
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
                audience: {
                  "@type": "BusinessAudience",
                  audienceType:
                    "Corporate, industrial, healthcare, educational, hospitality, residential, commercial and government organizations",
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Housekeeping and Soft Services",
                  itemListElement: serviceTypes.map((service) => ({
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: service,
                    },
                  })),
                },
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id":
                    "https://www.viprasfacility.com/services/housekeeping-soft-services",
                },
              },
              {
                            
                "@type": "BreadcrumbList",
                "@id":
                  "https://www.viprasfacility.com/services/housekeeping-soft-services#breadcrumb",
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
                    name: "Housekeeping & Soft Services",
                    item:
                      "https://www.viprasfacility.com/services/housekeeping-soft-services",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                "@id":
                  "https://www.viprasfacility.com/services/housekeeping-soft-services#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name:
                      "Do you provide housekeeping services across Chennai?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Yes. Our head office is located in Sholinganallur, Chennai, and Chennai is our primary service market. We support corporate, commercial, residential, healthcare, educational, hospitality and industrial facilities based on project requirements.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "Are your services available throughout Tamil Nadu?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Yes. We undertake housekeeping and soft-service requirements across Tamil Nadu. Service deployment depends on the facility size, location, staffing requirements and agreed scope of work.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you accept Pan India housekeeping projects?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Yes. Vipras Facility Management Solution can support suitable Pan India projects. The final deployment plan is prepared after reviewing the project location, manpower requirement, facility type and service duration.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "Which facilities do your housekeeping teams support?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "We support offices, IT parks, hospitals, schools, colleges, hotels, factories, warehouses, apartments, gated communities, commercial buildings and suitable government project environments.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "Can you create a customized housekeeping plan?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Yes. The service plan can be prepared according to property size, operating hours, footfall, cleaning frequency, hygiene priorities, manpower requirement and site-specific responsibilities.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "How can I request a housekeeping service quotation?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "You can contact us through the website, call or WhatsApp us at +91 97109 46484, or email viprascrm@gmail.com. Share your facility location and service requirements so our team can review the request.",
                    },
                  },
                ],
              }, 
            ],
          }),
        }}
      />
      <section className="relative">
       <Image
  src="/housekeeping-services-banner.png"
  overrideSrc="/housekeeping-services-banner.png"
  alt="Vipras Facility Management Solution professional housekeeping and soft services team"
  width={1536}
  height={1024}
  sizes="100vw"
  preload
  decoding="async"
  className="h-auto w-full object-contain"
/>
      </section>

      <section className="relative px-5 pb-14 pt-8 sm:px-8 lg:px-12">
        <div className="absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-[#d6b06a]/25 blur-3xl" />
        <div className="absolute right-[-140px] bottom-0 h-96 w-96 rounded-full bg-[#eadfca]/80 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#d6b06a_1px,transparent_0)] bg-[length:30px_30px] opacity-15" />

        <div className="relative mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-[#eadfca] bg-white/90 p-6 shadow-2xl shadow-black/10 backdrop-blur sm:p-8 lg:p-10">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#b98a3c] sm:text-sm">
              Housekeeping & Soft Services
            </p>

            <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight text-[#2f281f] sm:text-4xl lg:text-5xl">
              Professional Housekeeping Services for Clean, Hygienic and
              Well-Managed Workplaces
            </h1>

            <p className="mt-5 max-w-4xl text-base font-medium leading-8 text-[#6f6254] sm:text-lg">
              Vipras Facility Management Solution provides reliable
              housekeeping and soft services for corporate offices, IT parks,
              hospitals, schools, hotels, factories, apartments, commercial
              buildings, warehouses and government project environments across
              Chennai, Tamil Nadu and Pan India. Our trained housekeeping teams
              help clients maintain clean, safe, hygienic and professional
              workplaces every day.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="rounded-full bg-[#b98a3c] px-7 py-3 text-sm font-black text-white shadow-lg shadow-[#b98a3c]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#9f742f]"
              >
                Get Housekeeping Quote
              </Link>

              <a
                href="https://wa.me/919710946484?text=Hello%20Vipras%20Facility%20Management%20Solution%2C%20I%20would%20like%20to%20know%20more%20about%20your%20housekeeping%20and%20soft%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#d6b06a] bg-[#fffaf2] px-7 py-3 text-sm font-black text-[#4a3720] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                WhatsApp Now
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.32em] text-[#b98a3c]">
                What We Provide
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-[#2f281f] sm:text-4xl">
                Housekeeping Support for Every Facility Environment
              </h2>

              <p className="mt-5 text-base font-medium leading-8 text-[#6f6254]">
                Our housekeeping services are designed for businesses that need
                clean floors, hygienic washrooms, dust-free workspaces, managed
                common areas, presentable reception zones and disciplined daily
                cleaning operations.
              </p>

              <div className="mt-6 space-y-4">
                {qualityPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-[#eadfca] bg-white/85 p-4 text-sm font-black leading-7 text-[#3d3328] shadow-lg shadow-black/5"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {serviceTypes.map((type) => (
                <div
                  key={type}
                  className="rounded-2xl border border-[#eadfca] bg-white/90 p-5 text-sm font-black text-[#3d3328] shadow-lg shadow-black/5 transition duration-300 hover:-translate-y-1 hover:border-[#d6b06a] hover:shadow-xl hover:shadow-[#d6b06a]/15"
                >
                  {type}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-[#eadfca] bg-white/90 p-6 shadow-2xl shadow-black/10 backdrop-blur sm:p-8 lg:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.32em] text-[#b98a3c]">
                Our Working Process
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-[#2f281f] sm:text-4xl">
                A Clean and Organized Service Process
              </h2>

              <p className="mt-5 text-base font-medium leading-8 text-[#6f6254]">
                We follow a structured housekeeping process to maintain service
                quality, staff discipline and daily cleaning consistency.
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
                    <section
            aria-labelledby="housekeeping-coverage-heading"
            className="relative mt-10 overflow-hidden rounded-[2rem] border border-[#3f372d] bg-[#18140f] p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#d6b06a]/20 blur-3xl motion-safe:animate-pulse motion-reduce:animate-none"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-[#8d692f]/20 blur-3xl motion-safe:animate-pulse motion-reduce:animate-none"
            />

            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.32em] text-[#d6b06a] sm:text-sm">
                  Service Coverage & Head Office
                </p>

                <h2
                  id="housekeeping-coverage-heading"
                  className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl"
                >
                  Chennai-Based Housekeeping Expertise with Tamil Nadu and Pan
                  India Project Support
                </h2>

                <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-white/70">
                  Our head office is located in Sholinganallur, Chennai.
                  Chennai is our strongest operational market, supported by
                  housekeeping and soft-service capabilities across Tamil Nadu
                  and suitable Pan India project locations.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">
                  <article className="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-[#d6b06a]/70 hover:bg-white/[0.1] hover:shadow-2xl hover:shadow-[#d6b06a]/10">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d6b06a] text-sm font-black text-[#18140f] shadow-lg shadow-[#d6b06a]/20">
                      01
                    </div>

                    <h3 className="mt-5 text-lg font-black text-white">
                      Chennai
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-7 text-white/65">
                      Primary service market and head-office location with a
                      strong focus on Chennai facilities.
                    </p>
                  </article>

                  <article className="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-[#d6b06a]/70 hover:bg-white/[0.1] hover:shadow-2xl hover:shadow-[#d6b06a]/10">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d6b06a] text-sm font-black text-[#18140f] shadow-lg shadow-[#d6b06a]/20">
                      02
                    </div>

                    <h3 className="mt-5 text-lg font-black text-white">
                      Tamil Nadu
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-7 text-white/65">
                      Service deployment across Tamil Nadu based on facility
                      size, manpower needs and project scope.
                    </p>
                  </article>

                  <article className="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-[#d6b06a]/70 hover:bg-white/[0.1] hover:shadow-2xl hover:shadow-[#d6b06a]/10">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d6b06a] text-sm font-black text-[#18140f] shadow-lg shadow-[#d6b06a]/20">
                      03
                    </div>

                    <h3 className="mt-5 text-lg font-black text-white">
                      Pan India
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-7 text-white/65">
                      Suitable multi-location and large-scale projects can be
                      evaluated for Pan India service support.
                    </p>
                  </article>
                </div>
              </div>

              <aside className="relative overflow-hidden rounded-[1.75rem] border border-[#d6b06a]/30 bg-[#fffaf2] p-6 shadow-2xl shadow-black/20 sm:p-7">
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#d6b06a]/25 blur-3xl motion-safe:animate-pulse motion-reduce:animate-none"
                />

                <div className="relative">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-[#a87930]">
                    Contact Vipras
                  </p>

                  <h3 className="mt-4 text-2xl font-black leading-tight text-[#2f281f]">
                    Discuss Your Housekeeping Requirement with Our Team
                  </h3>

                  <div className="mt-6 space-y-4">
                    <a
                      href="https://maps.app.goo.gl/uCySkBgzJKPXGLuR7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-2xl border border-[#eadfca] bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-[#d6b06a] hover:shadow-xl hover:shadow-[#d6b06a]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98a3c]"
                    >
                      <span className="block text-xs font-black uppercase tracking-[0.22em] text-[#b98a3c]">
                        Head Office
                      </span>

                      <span className="mt-2 block text-sm font-bold leading-7 text-[#4a4034]">
                        No-495 A, Village High Road, Sholinganallur, Chennai,
                        Tamil Nadu 600119
                      </span>
                    </a>

                    <a
                      href="tel:+919710946484"
                      className="block rounded-2xl border border-[#eadfca] bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-[#d6b06a] hover:shadow-xl hover:shadow-[#d6b06a]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98a3c]"
                    >
                      <span className="block text-xs font-black uppercase tracking-[0.22em] text-[#b98a3c]">
                        Phone
                      </span>

                      <span className="mt-2 block text-base font-black text-[#2f281f]">
                        +91 97109 46484
                      </span>
                    </a>

                    <a
                      href="mailto:viprascrm@gmail.com"
                      className="block rounded-2xl border border-[#eadfca] bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-[#d6b06a] hover:shadow-xl hover:shadow-[#d6b06a]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98a3c]"
                    >
                      <span className="block text-xs font-black uppercase tracking-[0.22em] text-[#b98a3c]">
                        Email
                      </span>

                      <span className="mt-2 block break-all text-base font-black text-[#2f281f]">
                        viprascrm@gmail.com
                      </span>
                    </a>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <a
                      href="https://wa.me/919710946484?text=Hello%20Vipras%20Facility%20Management%20Solution%2C%20I%20need%20professional%20housekeeping%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#b98a3c] px-5 py-3 text-center text-sm font-black text-white shadow-lg shadow-[#b98a3c]/25 transition duration-300 hover:-translate-y-1 hover:bg-[#9f742f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b06a] focus-visible:ring-offset-2"
                    >
                      WhatsApp Our Team
                    </a>

                    <a
                      href="https://maps.app.goo.gl/uCySkBgzJKPXGLuR7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d6b06a] bg-white px-5 py-3 text-center text-sm font-black text-[#4a3720] transition duration-300 hover:-translate-y-1 hover:bg-[#fff5df] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b06a] focus-visible:ring-offset-2"
                    >
                      View Google Maps
                    </a>
                  </div>

                  <div className="mt-6 border-t border-[#eadfca] pt-5">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8a7762]">
                      Follow Vipras
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <a
                        href="https://www.linkedin.com/company/109659474/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Vipras on LinkedIn"
                        className="rounded-full border border-[#eadfca] bg-white px-4 py-2 text-xs font-black text-[#4a4034] transition duration-300 hover:-translate-y-1 hover:border-[#d6b06a] hover:text-[#9f742f]"
                      >
                        LinkedIn
                      </a>

                      <a
                        href="https://www.instagram.com/viprasfacilitymanagement?igsh=YWxvMDY5enViY25i"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Vipras on Instagram"
                        className="rounded-full border border-[#eadfca] bg-white px-4 py-2 text-xs font-black text-[#4a4034] transition duration-300 hover:-translate-y-1 hover:border-[#d6b06a] hover:text-[#9f742f]"
                      >
                        Instagram
                      </a>

                      <a
                        href="https://www.facebook.com/profile.php?id=61583160419137"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Vipras on Facebook"
                        className="rounded-full border border-[#eadfca] bg-white px-4 py-2 text-xs font-black text-[#4a4034] transition duration-300 hover:-translate-y-1 hover:border-[#d6b06a] hover:text-[#9f742f]"
                      >
                        Facebook
                      </a>

                      <a
                        href="https://www.youtube.com/@viprasfacilitycrm8753"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Vipras on YouTube"
                        className="rounded-full border border-[#eadfca] bg-white px-4 py-2 text-xs font-black text-[#4a4034] transition duration-300 hover:-translate-y-1 hover:border-[#d6b06a] hover:text-[#9f742f]"
                      >
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </section>
                      <section
            aria-labelledby="housekeeping-faq-heading"
            className="mt-10 overflow-hidden rounded-[2rem] border border-[#eadfca] bg-white/90 p-6 shadow-2xl shadow-black/10 backdrop-blur sm:p-8 lg:p-10"
          >
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.32em] text-[#b98a3c]">
                Frequently Asked Questions
              </p>

              <h2
                id="housekeeping-faq-heading"
                className="mt-4 text-3xl font-black leading-tight text-[#2f281f] sm:text-4xl"
              >
                Questions About Our Housekeeping Services
              </h2>

              <p className="mt-5 text-base font-medium leading-8 text-[#6f6254]">
                Find clear answers about our service locations, housekeeping
                workforce, facility coverage and customized cleaning support.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <details className="group rounded-2xl border border-[#eadfca] bg-[#fffaf2] transition duration-300 open:border-[#d6b06a] open:bg-white open:shadow-xl open:shadow-[#d6b06a]/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="text-base font-black leading-7 text-[#2f281f]">
                    Do you provide housekeeping services across Chennai?
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d6b06a] text-xl font-bold text-white transition duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="px-5 pb-5 text-sm font-medium leading-7 text-[#6f6254]">
                  Yes. Our head office is located in Sholinganallur, Chennai,
                  and Chennai is our primary service market. We support
                  corporate, commercial, residential, healthcare, educational,
                  hospitality and industrial facilities based on project
                  requirements.
                </p>
              </details>

              <details className="group rounded-2xl border border-[#eadfca] bg-[#fffaf2] transition duration-300 open:border-[#d6b06a] open:bg-white open:shadow-xl open:shadow-[#d6b06a]/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="text-base font-black leading-7 text-[#2f281f]">
                    Are your services available throughout Tamil Nadu?
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d6b06a] text-xl font-bold text-white transition duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="px-5 pb-5 text-sm font-medium leading-7 text-[#6f6254]">
                  Yes. We undertake housekeeping and soft-service requirements
                  across Tamil Nadu. Service deployment depends on the facility
                  size, location, staffing requirements and agreed scope of
                  work.
                </p>
              </details>

              <details className="group rounded-2xl border border-[#eadfca] bg-[#fffaf2] transition duration-300 open:border-[#d6b06a] open:bg-white open:shadow-xl open:shadow-[#d6b06a]/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="text-base font-black leading-7 text-[#2f281f]">
                    Do you accept Pan India housekeeping projects?
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d6b06a] text-xl font-bold text-white transition duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="px-5 pb-5 text-sm font-medium leading-7 text-[#6f6254]">
                  Yes. Vipras Facility Management Solution can support suitable
                  Pan India projects. The final deployment plan is prepared
                  after reviewing the project location, manpower requirement,
                  facility type and service duration.
                </p>
              </details>

              <details className="group rounded-2xl border border-[#eadfca] bg-[#fffaf2] transition duration-300 open:border-[#d6b06a] open:bg-white open:shadow-xl open:shadow-[#d6b06a]/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="text-base font-black leading-7 text-[#2f281f]">
                    Which facilities do your housekeeping teams support?
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d6b06a] text-xl font-bold text-white transition duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="px-5 pb-5 text-sm font-medium leading-7 text-[#6f6254]">
                  We support offices, IT parks, hospitals, schools, colleges,
                  hotels, factories, warehouses, apartments, gated communities,
                  commercial buildings and suitable government project
                  environments.
                </p>
              </details>

              <details className="group rounded-2xl border border-[#eadfca] bg-[#fffaf2] transition duration-300 open:border-[#d6b06a] open:bg-white open:shadow-xl open:shadow-[#d6b06a]/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="text-base font-black leading-7 text-[#2f281f]">
                    Can you create a customized housekeeping plan?
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d6b06a] text-xl font-bold text-white transition duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="px-5 pb-5 text-sm font-medium leading-7 text-[#6f6254]">
                  Yes. The service plan can be prepared according to property
                  size, operating hours, footfall, cleaning frequency, hygiene
                  priorities, manpower requirement and site-specific
                  responsibilities.
                </p>
              </details>

              <details className="group rounded-2xl border border-[#eadfca] bg-[#fffaf2] transition duration-300 open:border-[#d6b06a] open:bg-white open:shadow-xl open:shadow-[#d6b06a]/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="text-base font-black leading-7 text-[#2f281f]">
                    How can I request a housekeeping service quotation?
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d6b06a] text-xl font-bold text-white transition duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="px-5 pb-5 text-sm font-medium leading-7 text-[#6f6254]">
                  You can contact us through the website, call or WhatsApp us at
                  +91 97109 46484, or email viprascrm@gmail.com. Share your
                  facility location and service requirements so our team can
                  review the request.
                </p>
              </details>
            </div>
          </section>
          <div className="mt-10 rounded-[2rem] border border-[#eadfca] bg-gradient-to-r from-[#2f281f] to-[#121812] p-7 text-center shadow-2xl shadow-black/15 sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-[#d6b06a]">
              Need Housekeeping Support?
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl">
              Keep Your Workplace Clean, Hygienic and Professionally Managed
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-8 text-white/75">
              Connect with Vipras Facility Management Solution for professional
              housekeeping services in Chennai, Tamil Nadu and Pan India.
            </p>

            <Link
              href="/contact-us"
              className="mt-7 inline-flex rounded-full bg-[#d6b06a] px-8 py-4 text-sm font-black text-[#17130d] shadow-lg shadow-[#d6b06a]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#f3d28b]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
