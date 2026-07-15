import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
  absolute:
    "Industrial Manpower Supply in Chennai & Tamil Nadu | Vipras",
},
  description:
    "Hire skilled, semi-skilled and unskilled industrial manpower in Chennai, Tamil Nadu and Pan India. Workforce supply for factories, manufacturing, warehouses, packaging, logistics, production lines and loading operations. Call Vipras for a manpower quote.",

  alternates: {
  canonical:
    "https://www.viprasfacility.com/services/industrial-manpower-supply",

  languages: {
    "en-IN":
      "https://www.viprasfacility.com/services/industrial-manpower-supply",
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
      "Industrial Manpower Supply in Chennai, Tamil Nadu & Pan India",

    description:
      "Reliable skilled, semi-skilled and unskilled manpower supply for factories, manufacturing plants, warehouses, packaging, logistics, production lines and industrial operations.",

    url: "https://www.viprasfacility.com/services/industrial-manpower-supply",

    siteName: "Vipras Facility Management Solutions",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "https://www.viprasfacility.com/industrial-manpower-supply-og.png",
        width: 1200,
        height: 630,
        alt: "Vipras Industrial Manpower Supply in Chennai, Tamil Nadu and Pan India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Industrial Manpower Supply in Chennai | Vipras Facility Management",

    description:
      "Skilled, semi-skilled and unskilled manpower supply for factories, manufacturing, packaging, warehouses and logistics operations.",

    images: [
      "https://www.viprasfacility.com/industrial-manpower-supply-og.png",
    ],
  },

  category: "Industrial Manpower Supply",
   applicationName: "Vipras Facility Management Solutions",
creator: "Vipras Facility Management Solutions",
publisher: "Vipras Facility Management Solutions",
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
    "geo.position": "12.8996;80.2279",
    ICBM: "12.8996, 80.2279",
  },
};
const manpowerTypes = [
  "Manufacturing Company Manpower",
  "Factory Manpower Supply",
  "Packaging Plant Manpower",
  "Loading & Unloading Manpower",
  "Logistics Manpower",
  "Transport Support Manpower",
  "Warehouse Manpower",
  "Production Line Manpower",
  "Skilled Manpower",
  "Semi-Skilled Manpower",
  "Unskilled Manpower",
  "Bulk Manpower Deployment",
];

const qualityPoints = [
  "Large-scale manpower supply for small, medium and large companies",
  "Trained, disciplined and site-ready manpower deployment",
  "Support for Chennai, Tamil Nadu, Andhra Pradesh, Bangalore and Pan India",
  "Professional coordination for factories, plants, logistics and industrial sites",
];

const processSteps = [
  {
    title: "Requirement Study",
    text: "We understand the manpower requirement, work type, shift needs, skill level and site conditions.",
  },
  {
    title: "Manpower Planning",
    text: "We plan the right workforce strength for skilled, semi-skilled or unskilled manpower needs.",
  },
  {
    title: "Deployment",
    text: "We deploy manpower for manufacturing, packaging, loading, unloading, transport and industrial operations.",
  },
  {
    title: "Supervision & Support",
    text: "We coordinate with the client team to maintain attendance, discipline, productivity and smooth daily operations.",
  },
];
const industrialManpowerJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
        {
      "@type": "WebPage",
      "@id":
        "https://www.viprasfacility.com/services/industrial-manpower-supply#webpage",
      url: "https://www.viprasfacility.com/services/industrial-manpower-supply",
      name: "Industrial Manpower Supply in Chennai, Tamil Nadu & Pan India",
      description:
        "Industrial manpower supply services for manufacturing companies, factories, packaging plants, warehouses, logistics operations, production lines, transport support and loading and unloading work across Chennai, Tamil Nadu and Pan India.",
      inLanguage: "en-IN",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.viprasfacility.com/#website",
        url: "https://www.viprasfacility.com",
        name: "Vipras Facility Management Solutions",
        publisher: {
          "@id": "https://www.viprasfacility.com/#organization",
        },
      },
      about: {
        "@id":
          "https://www.viprasfacility.com/services/industrial-manpower-supply#service",
      },
      mainEntity: {
        "@id":
          "https://www.viprasfacility.com/services/industrial-manpower-supply#service",
      },
      breadcrumb: {
        "@id":
          "https://www.viprasfacility.com/services/industrial-manpower-supply#breadcrumb",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        "@id":
          "https://www.viprasfacility.com/services/industrial-manpower-supply#primaryimage",
        url: "https://www.viprasfacility.com/industrial-manpower-supply-og.png",
        contentUrl:
          "https://www.viprasfacility.com/industrial-manpower-supply-og.png",
        width: 1200,
        height: 630,
        caption:
          "Vipras Industrial Manpower Supply Services in Chennai, Tamil Nadu and Pan India",
      },
      potentialAction: {
        "@type": "CommunicateAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://www.viprasfacility.com/contact-us",
          actionPlatform: [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/MobileWebPlatform",
          ],
        },
        name: "Request an Industrial Manpower Quote",
      },
    },
        {
      "@type": "WebSite",
      "@id": "https://www.viprasfacility.com/#website",
      url: "https://www.viprasfacility.com",
      name: "Vipras Facility Management Solutions",
      alternateName: "Vipras Facility Management Solution",
      description:
        "Facility management, industrial manpower supply, security, housekeeping, technical maintenance, fire safety and integrated facility management services in Chennai, Tamil Nadu and Pan India.",
      inLanguage: "en-IN",
      publisher: {
        "@id": "https://www.viprasfacility.com/#organization",
      },
    },
    {
      "@type": ["Organization", "LocalBusiness", "EmploymentAgency"],
      "@id": "https://www.viprasfacility.com/#organization",
      name: "Vipras Facility Management Solutions",
      alternateName: "Vipras Facility Management Solution",
      url: "https://www.viprasfacility.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.viprasfacility.com/logo.png",
      },
      image:
        "https://www.viprasfacility.com/industrial-manpower-supply-og.png",
      email: "viprascrm@gmail.com",
      telephone: "+91-97109-46484",
      hasMap: "https://maps.app.goo.gl/uCySkBgzJKPXGLuR7",
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
        latitude: 12.8996,
        longitude: 80.2279,
      },
     provider: {
  "@id": "https://www.viprasfacility.com/#organization",
},

providerMobility: "dynamic",

availableChannel: [
  {
    "@type": "ServiceChannel",
    serviceUrl:
      "https://www.viprasfacility.com/services/industrial-manpower-supply",
    servicePhone: {
      "@type": "ContactPoint",
      telephone: "+91-97109-46484",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil", "Hindi"],
    },
  },
  {
    "@type": "ServiceChannel",
    serviceLocation: {
      "@type": "Place",
      name: "Vipras Facility Management Solutions Head Office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No-495 A, Village High Road, Sholinganallur",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        postalCode: "600119",
        addressCountry: "IN",
      },
    },
  },
],

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
          name: "Bangalore",
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-97109-46484",
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["English", "Tamil", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-97109-46484",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Tamil", "Hindi"],
        },
      ],
      sameAs: [
        "https://maps.app.goo.gl/uCySkBgzJKPXGLuR7",
        "https://www.youtube.com/@viprasfacilitycrm8753",
        "https://www.instagram.com/viprasfacilitymanagement",
        "https://www.facebook.com/profile.php?id=61583160419137",
        "https://www.linkedin.com/company/109659474/",
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://www.viprasfacility.com/services/industrial-manpower-supply#service",
      name: "Industrial Manpower Supply",
      serviceType: "Industrial Manpower Supply Services",
      url: "https://www.viprasfacility.com/services/industrial-manpower-supply",
      mainEntityOfPage: {
  "@id":
    "https://www.viprasfacility.com/services/industrial-manpower-supply#webpage",
},
      description:
        "Skilled, semi-skilled and unskilled industrial manpower supply for factories, manufacturing companies, packaging plants, warehouses, logistics operations, production lines, transport support and loading and unloading work.",
      image:
        "https://www.viprasfacility.com/industrial-manpower-supply-og.png",
      provider: {
        "@id": "https://www.viprasfacility.com/#organization",
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
          name: "Bangalore",
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Manufacturing companies, factories, warehouses, packaging plants, logistics companies and industrial businesses",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Industrial Manpower Services",
        itemListElement: manpowerTypes.map((type) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: type,
          },
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.viprasfacility.com/services/industrial-manpower-supply#breadcrumb",
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
          name: "Industrial Manpower Supply",
          item: "https://www.viprasfacility.com/services/industrial-manpower-supply",
        },
      ],
    },
  ],
};
export default function IndustrialManpowerSupplyPage() {
  return (
    <main className="overflow-hidden bg-[#fffaf2]">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(industrialManpowerJsonLd).replace(
      /</g,
      "\\u003c",
    ),
  }}
/>
      <section className="relative">
  <Image
    src="/industrial-manpower-supply-banner.png.png"
    alt="Industrial manpower supply team for factories, manufacturing, packaging and logistics operations in Chennai"
    width={1920}
    height={900}
    sizes="100vw"
    preload
    fetchPriority="high"
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
              Industrial Manpower Supply
            </p>

            <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight text-[#2f281f] sm:text-4xl lg:text-5xl">
              Trusted Industrial Manpower Supply for Manufacturing, Packaging,
              Logistics and Factory Operations
            </h1>

            <p className="mt-5 max-w-4xl text-base font-medium leading-8 text-[#6f6254] sm:text-lg">
              Vipras Facility Management Solution provides reliable industrial
              manpower supply for manufacturing companies, packaging plants,
              factories, warehouses, logistics operations, transport support,
              loading and unloading work, production lines and large-scale
              industrial sites. We support small, medium and large companies
              across Chennai, Tamil Nadu, Andhra Pradesh, Bangalore and Pan
              India with skilled, semi-skilled and unskilled manpower.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
<Link
  href="/contact-us"
  aria-label="Request an industrial manpower supply quote from Vipras"
  title="Get Industrial Manpower Supply Quote"
  className="rounded-full bg-[#b98a3c] px-7 py-3 text-sm font-black text-white shadow-lg shadow-[#b98a3c]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#9f742f]"
>
  Get Manpower Quote
</Link>

              <a
                href="https://wa.me/919710946484?text=Hello%20Vipras%20Facility%20Management%20Solution%2C%20I%20would%20like%20to%20know%20more%20about%20your%20industrial%20manpower%20supply%20services."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Vipras on WhatsApp for industrial manpower supply"
                title="WhatsApp Vipras for Industrial Manpower Supply"
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
                Manpower Support for Every Industrial Requirement
              </h2>

              <p className="mt-5 text-base font-medium leading-8 text-[#6f6254]">
                Our manpower services are designed for businesses that need
                dependable workforce support, shift-based deployment, disciplined
                manpower, bulk staffing and smooth daily industrial operations.
                Whether it is a manufacturing company, packaging plant,
                logistics hub, transport operation or loading and unloading site,
                Vipras helps clients manage workforce needs with confidence.
              </p>
                 <Link
  href="/blog/industrial-manpower-supply-for-business-operations"
  title="Learn more about industrial manpower supply for business operations"
  className="mt-4 inline-flex text-sm font-black text-[#9f742f] underline decoration-[#d6b06a] decoration-2 underline-offset-4 transition hover:text-[#4a3720]"
>
  Learn More About Industrial Manpower Supply for Business Operations
</Link>
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
              {manpowerTypes.map((type) => (
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
                A Reliable Manpower Deployment Process
              </h2>

              <p className="mt-5 text-base font-medium leading-8 text-[#6f6254]">
                We follow a clear process to understand client needs, plan the
                right manpower strength and support smooth daily site operations.
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
              Need Industrial Manpower?
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl">
              Get Reliable Manpower Support for Your Factory, Plant or
              Industrial Site
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-8 text-white/75">
              Connect with Vipras Facility Management Solution for trusted
              manpower supply in Chennai, Tamil Nadu, Andhra Pradesh, Bangalore
              and Pan India.
            </p>

            <Link
              href="/contact-us"
              className="mt-7 inline-flex rounded-full bg-[#d6b06a] px-8 py-4 text-sm font-black text-[#17130d] shadow-lg shadow-[#d6b06a]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#f3d28b]"
            >
              Get Manpower Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
