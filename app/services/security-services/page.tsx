import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: {
    absolute:
      "Security Guard Services in Chennai & Tamil Nadu | Vipras",
  },

  description:
    "Professional security guard services for apartments, offices, industries, hospitals, hotels, schools, banks and commercial properties across Chennai and Tamil Nadu.",
authors: [
  {
    name: "Vipras Facility Management Solutions Private Limited",
    url: "https://www.viprasfacility.com/",
  },
],

creator: "Vipras Facility Management Solutions Private Limited",

publisher: "Vipras Facility Management Solutions Private Limited",

category: "Professional Security Guard Services",
  alternates: {
    
    canonical:
      "https://www.viprasfacility.com/services/security-services",
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
    title:
      "Security Guard Services in Chennai & Tamil Nadu | Vipras",

    description:
      "Trained and supervised security guards for residential, corporate, industrial, healthcare, hospitality, education and commercial properties.",

    url:
      "https://www.viprasfacility.com/services/security-services",

    siteName: "Vipras Facility Management Solutions Private Limited",
    locale: "en_IN",
    type: "website",

    images: [
  {
    url:
      "https://www.viprasfacility.com/security-guard-services-chennai-og.png",
    width: 1731,
    height: 909,
    alt:
      "Vipras professional security guard services in Chennai and Tamil Nadu",
  },
],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Security Guard Services in Chennai & Tamil Nadu | Vipras",

    description:
      "Professional security guards for apartments, offices, industries, hospitals, hotels, schools and commercial properties.",

    images: [
  "https://www.viprasfacility.com/security-guard-services-chennai-og.png",
],
  },
};

const serviceTypes = [
  "Corporate Office Security Services",
  "Industrial & Manufacturing Security",
  "Factory & Plant Security",
  "IT Park & Technology Campus Security",
  "Bank & Financial Institution Security",
  "Hospital & Healthcare Security",
  "Hotel & Hospitality Security",
  "School, College & Campus Security",
  "Apartment & Residential Security",
  "Gated Community Security",
  "Commercial Building Security",
  "Warehouse & Logistics Security",
  "Retail Store & Shopping Complex Security",
  "Construction Site Security",
  "VIP Residence & Private Property Security",
  "Government Sector & Project Security",
  "Reception, Visitor & Access Control",
  "Night Patrolling & Site Monitoring",
];
const qualityPoints = [
  "Trained and disciplined security manpower",
  "Professional site supervision and reporting",
  "Access control and visitor management support",
  "Suitable for corporate, industrial and government sites",
];
const securityFaqs = [
  {
    question: "Which locations does Vipras provide security services in?",
    answer:
      "Vipras Facility Management Solution provides security guard services throughout Chennai and across Tamil Nadu. We also undertake suitable security service requirements in Bengaluru, Andhra Pradesh and other locations across India.",
  },
  {
    question: "Which sectors do you provide security guards for?",
    answer:
      "We provide security services for corporate offices, banks, factories, industries, IT parks, schools, colleges, hospitals, hotels, apartments, gated communities, warehouses, commercial buildings, retail properties, VIP residences and government sector projects.",
  },
  {
    question: "Do you provide security services for apartments and residential communities?",
    answer:
      "Yes. We provide trained security guards for apartments, residential buildings, gated communities and private properties, including visitor management, entry control, patrolling and site-level security support.",
  },
  {
    question: "Can Vipras provide security guards for factories and industrial sites?",
    answer:
      "Yes. Our security manpower can support factories, manufacturing units, warehouses, logistics facilities and industrial sites with access control, visitor monitoring, patrolling and professional security presence.",
  },
  {
    question: "Do you provide security services for schools, hospitals and hotels?",
    answer:
      "Yes. Vipras provides professional security manpower for schools, colleges, hospitals, healthcare facilities, hotels and other institutional or hospitality environments.",
  },
  {
    question: "How can I request a security services quotation?",
    answer:
      "You can call or WhatsApp Vipras at +91 97109 46484, email viprascrm@gmail.com or submit your requirements through the contact page. Share your location, property type and required security manpower details for a suitable quotation.",
  },
];
const securityServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Organization"],
      "@id": "https://www.viprasfacility.com/#organization",
       name: "Vipras Facility Management Solution",
legalName: "Vipras Facility Management Solutions Private Limited",
alternateName: "Vipras",
      url: "https://www.viprasfacility.com/",
     image:
  "https://www.viprasfacility.com/security-guard-services-chennai-og.png",

logo: {
  "@type": "ImageObject",
  "@id": "https://www.viprasfacility.com/#logo",
  url:
    "https://www.viprasfacility.com/vipras-logo%20(2).png",
  contentUrl:
    "https://www.viprasfacility.com/vipras-logo%20(2).png",
  caption:
    "Vipras Facility Management Solutions Private Limited",
},

description:
  "Vipras Facility Management Solution provides trained and supervised security guard services for apartments, offices, factories, hospitals, hotels, schools, warehouses and commercial properties across Chennai and Tamil Nadu.",
      telephone: "+91 97109 46484",
      email: "viprascrm@gmail.com",
      contactPoint: {
  "@type": "ContactPoint",
  telephone: "+91 97109 46484",
  contactType: "customer service",
  email: "viprascrm@gmail.com",
  areaServed: "IN",
  availableLanguage: ["English", "Tamil", "Hindi"],
},

openingHoursSpecification: {
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
  latitude: 12.9021541,
  longitude: 80.2326451,
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
          "@type": "City",
          name: "Bengaluru",
        },
        {
          "@type": "State",
          name: "Andhra Pradesh",
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],
      hasMap: "https://maps.app.goo.gl/tqgwt5ePtMRTEAxJ8",
      sameAs: [
        "https://www.youtube.com/@viprasfacilitycrm8753",
        "https://www.linkedin.com/company/109659474/",
        "https://www.instagram.com/viprasfacilitymanagement/",
        "https://www.facebook.com/profile.php?id=61583160419137",
      ],
      hasOfferCatalog: {
  "@type": "OfferCatalog",
  name: "Professional Security Guard Services",
  itemListElement: serviceTypes.map((serviceName) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: serviceName,
      provider: {
        "@id": "https://www.viprasfacility.com/#organization",
      },
      areaServed: {
        "@type": "State",
        name: "Tamil Nadu",
      },
    },
  })),
},
    },
    {
      "@type": "Service",
      "@id":
        "https://www.viprasfacility.com/services/security-services#service",
      name: "Security Guard Services in Chennai and Tamil Nadu",
      serviceType:
        "Professional security guard and security manpower services",
    url:
  "https://www.viprasfacility.com/services/security-services",

image: {
  "@id":
    "https://www.viprasfacility.com/services/security-services#primaryimage",
},

mainEntityOfPage: {
  "@id":
    "https://www.viprasfacility.com/services/security-services#webpage",
},
      description:
        "Professional security guards and trained security manpower for corporate offices, industries, factories, banks, schools, colleges, hospitals, hotels, apartments, residential communities, commercial buildings, warehouses, VIP properties and government sector projects.",
         provider: {
  "@id": "https://www.viprasfacility.com/#organization",
},

availableChannel: [
  {
    "@type": "ServiceChannel",
    name: "Security Guard Services Phone Enquiry",
    serviceUrl: "https://www.viprasfacility.com/contact-us",
    servicePhone: {
      "@type": "ContactPoint",
      telephone: "+91 97109 46484",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil", "Hindi"],
    },
  },
  {
    "@type": "ServiceChannel",
    name: "WhatsApp",
    serviceUrl:
      "https://wa.me/919710946484?text=Hello%20Vipras%2C%20I%20need%20security%20guard%20services.",
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
          "@type": "City",
          name: "Bengaluru",
        },
        {
          "@type": "State",
          name: "Andhra Pradesh",
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],
      audience: {
        "@type": "Audience",
        audienceType:
          "Corporate offices, factories, industries, banks, schools, colleges, hospitals, hotels, apartments, residential communities, commercial buildings, warehouses, VIP properties and government sectors",
      },
      
     },
     {
  "@type": "WebSite",
  "@id": "https://www.viprasfacility.com/#website",
  url: "https://www.viprasfacility.com/",
  name: "Vipras Facility Management Solution",
  alternateName: "Vipras",
  inLanguage: "en-IN",
  publisher: {
    "@id": "https://www.viprasfacility.com/#organization",
  },
},
    {
     
      "@type": "WebPage",
      "@id":
        "https://www.viprasfacility.com/services/security-services#webpage",
      url:
        "https://www.viprasfacility.com/services/security-services",
      name:
        "Security Guard Services in Chennai and Tamil Nadu",
     description:
  "Professional security guard services for apartments, offices, industries, hospitals, hotels, schools, banks and commercial properties across Chennai and Tamil Nadu.",

keywords: [
  "security guard services in Chennai",
  "security agency in Chennai",
  "private security company in Chennai",
  "security guard company in Chennai",
  "professional security services Chennai",
  "security services in Tamil Nadu",
  "manned guarding services Chennai",
  "watchman services in Chennai",
  "security manpower services Chennai",
  "corporate security services in Chennai",
  "office security services Chennai",
  "industrial security guard services Tamil Nadu",
  "security services in OMR Chennai",
  "security guards in Sholinganallur",
  "commercial building security Chennai",
  "apartment security services Chennai",
  "gated community security guards Chennai",
  "residential security services Chennai",
  "hospital security guard services Chennai",
  "hotel security services Chennai",
  "bank security guard services Chennai",
  "factory security guard services Tamil Nadu",
  "warehouse security services Chennai",
  "construction site security guards Chennai",
  "school security guard services Chennai",
  "retail security guard services Chennai",
  "shopping mall security guards Chennai",
  "security guard quotation Chennai",
  "security agency contact number Chennai",
  "security services contract agency Chennai",
  "24/7 security guard services Chennai",
  "pan India security services provider",
],

inLanguage: "en-IN",
         
       
isPartOf: {
  "@id": "https://www.viprasfacility.com/#website",
},
about: {
  "@id": "https://www.viprasfacility.com/#organization",
},

author: {
  "@id": "https://www.viprasfacility.com/#organization",
},

publisher: {
  "@id": "https://www.viprasfacility.com/#organization",
},

mainEntity: {
        "@id":
          "https://www.viprasfacility.com/services/security-services#service",
      },
      breadcrumb: {
  "@id":
    "https://www.viprasfacility.com/services/security-services#breadcrumb",
},

hasPart: {
  "@id":
    "https://www.viprasfacility.com/services/security-services#faq",
},

primaryImageOfPage: {
  "@type": "ImageObject",
  "@id":
    "https://www.viprasfacility.com/services/security-services#primaryimage",
  url:
    "https://www.viprasfacility.com/security-guard-services-chennai-og.png",
  contentUrl:
    "https://www.viprasfacility.com/security-guard-services-chennai-og.png",
  encodingFormat: "image/png",
  caption:
    "Vipras professional security guard services in Chennai and Tamil Nadu",
  representativeOfPage: true,
  width: 1731,
  height: 909,
},
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.viprasfacility.com/services/security-services#breadcrumb",
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
          item: "https://www.viprasfacility.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Security Services",
          item:
            "https://www.viprasfacility.com/services/security-services",
        },
      ],
    },
{
  "@type": "FAQPage",
  "@id":
    "https://www.viprasfacility.com/services/security-services#faq",
  url:
    "https://www.viprasfacility.com/services/security-services#security-faq-heading",
  name: "Security Guard Services Frequently Asked Questions",
  inLanguage: "en-IN",
  isPartOf: {
    "@id":
      "https://www.viprasfacility.com/services/security-services#webpage",
  },
  about: {
    "@id":
      "https://www.viprasfacility.com/services/security-services#service",
  },
  mainEntity: securityFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};
export default function SecurityServicesPage() {
  return (
    <main className="overflow-hidden bg-[#fffaf2]">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(securityServiceSchema).replace(
      /</g,
      "\\u003c",
    ),
  }}
/>
      <section className="relative">
<img
  src="/security-services-banner.png (2).png"
  alt="Professional security guard services in Chennai and Tamil Nadu by Vipras Facility Management Solution"
  loading="eager"
  fetchPriority="high"
  decoding="async"
  className="h-auto w-full object-contain"
/>
  <div className="absolute left-5 top-1/2 hidden max-w-xl -translate-y-1/2 rounded-3xl bg-black/45 p-5 text-white backdrop-blur-sm lg:left-12 lg:block lg:p-8">
    <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d6b06a] sm:text-sm">
      Vipras Security Services
    </p>

    <h2 className="mt-3 text-2xl font-black leading-tight sm:text-4xl lg:text-5xl">
  Professional Security Services for Your Workplace
</h2>

    <p className="mt-4 hidden max-w-lg text-sm font-medium leading-7 text-white/85 sm:block">
      Trained security manpower for corporate offices, factories, apartments,
      hospitals, warehouses and commercial properties across Chennai, Tamil Nadu
      and Pan India.
    </p>

    <Link
      href="/contact-us"
      className="mt-5 inline-flex rounded-full bg-[#d6b06a] px-6 py-3 text-sm font-black text-[#17130d] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-[#f3d28b]"
    >
      Get Security Quote
    </Link>
  </div>
  <div className="bg-gradient-to-b from-[#fff8e8] via-[#fffaf2] to-[#f4ead8] px-5 pb-8 pt-5 lg:hidden">
  <div className="rounded-[1.75rem] border border-[#ead8b8] bg-white p-6 shadow-xl shadow-[#6b4f2a]/10">
    <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b98a3c]">
      Vipras Security Services
    </p>
    <h2 className="mt-3 text-3xl font-black leading-tight text-[#2f281f]">
  Professional Security Services for Safe and Protected Workplaces
</h2>

    <p className="mt-4 text-sm font-medium leading-7 text-[#6f6254]">
      Vipras provides trained security guards and professional security
      manpower for corporate offices, factories, IT parks, hospitals,
      apartments, warehouses and commercial properties across Chennai,
      Tamil Nadu, Bengaluru, Andhra Pradesh and Pan India.
    </p>

    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
      <Link
        href="/contact-us"
        aria-label="Request a security services quote from Vipras"
        className="rounded-full bg-[#b98a3c] px-6 py-3 text-center text-sm font-black text-white shadow-lg shadow-[#b98a3c]/25"
      >
        Get Security Quote
      </Link>

      <a
        href="https://wa.me/919710946484?text=Hello%20Vipras%20Facility%20Management%20Solution%2C%20I%20would%20like%20to%20know%20more%20about%20your%20security%20services."
        aria-label="Chat with Vipras about security services on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-[#d6b06a] bg-[#fffaf2] px-6 py-3 text-center text-sm font-black text-[#4a3720]"
      >
        WhatsApp Now
      </a>
    </div>
  </div>
</div>
</section>

      <section className="relative px-5 pb-14 pt-8 sm:px-8 lg:px-12">
        <div className="absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-[#d6b06a]/25 blur-3xl" />
        <div className="absolute right-[-140px] bottom-0 h-96 w-96 rounded-full bg-[#eadfca]/80 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#d6b06a_1px,transparent_0)] bg-[length:30px_30px] opacity-15" />

        <div className="relative mx-auto max-w-7xl">
          <nav
  aria-label="Breadcrumb"
  className="mb-5 text-sm font-semibold text-[#6f6254]"
>
  <ol className="flex flex-wrap items-center gap-2">
    <li>
      <Link
        href="/"
        className="transition hover:text-[#b98a3c]"
      >
        Home
      </Link>
    </li>

    <li aria-hidden="true">/</li>

    <li>
      <Link
        href="/services"
        className="transition hover:text-[#b98a3c]"
      >
        Services
      </Link>
    </li>

    <li aria-hidden="true">/</li>

    <li
      aria-current="page"
      className="text-[#2f281f]"
    >
      Security Guard Services
    </li>
  </ol>
</nav>
          <div className="rounded-[2rem] border border-[#eadfca] bg-white/90 p-6 shadow-2xl shadow-black/10 backdrop-blur sm:p-8 lg:p-10">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#b98a3c] sm:text-sm">
              Security Services
            </p>

                <h1 className="mt-4 max-w-5xl text-3xl font-black leading-tight text-[#2f281f] sm:text-4xl lg:text-5xl">
                Security Guard Services in Chennai and Tamil Nadu
               </h1>

            <p className="mt-5 max-w-4xl text-base font-medium leading-8 text-[#6f6254] sm:text-lg">
              Vipras Facility Management Solution provides trained security
              manpower for corporate offices, factories, IT parks, hospitals,
              schools, warehouses, apartments, commercial properties and
              government project environments across Chennai, Tamil Nadu and Pan
              India. Our security teams support daily protection, access control,
              visitor management, patrolling and site-level safety discipline.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="rounded-full bg-[#b98a3c] px-7 py-3 text-sm font-black text-white shadow-lg shadow-[#b98a3c]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#9f742f]"
              >
                Get Security Quote
              </Link>

              <a
                href="https://wa.me/919710946484?text=Hello%20Vipras%20Facility%20Management%20Solution%2C%20I%20would%20like%20to%20know%20more%20about%20your%20security%20services."
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
  Professional Security Services for Every Sector
</h2>

              <p className="mt-5 text-base font-medium leading-8 text-[#6f6254]">
                Our security services are designed for businesses that need
                reliable manpower, strong discipline, active monitoring and a
                professional security presence. We provide security support for
                both private and government project requirements.
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

          <section
            id="security-service-process"
            aria-labelledby="security-process-heading"
            className="mt-12 overflow-hidden rounded-[2rem] border border-[#eadfca] bg-white shadow-2xl shadow-black/10"
          >
            <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.32em] text-[#b98a3c]">
                  Our Service Process
                </p>

                <h2
                  id="security-process-heading"
                  className="mt-4 text-3xl font-black leading-tight text-[#2f281f] sm:text-4xl"
                >
                  How We Plan and Deliver Professional Security Services
                </h2>

                <p className="mt-5 text-base font-medium leading-8 text-[#6f6254]">
                  Every workplace, institution and residential property has
                  different access points, operating hours, visitor movement
                  and security priorities. We begin by understanding your site
                  requirements before planning security guard duties,
                  deployment and supervision.
                </p>

                <p className="mt-4 text-base font-medium leading-8 text-[#6f6254]">
                  Our structured approach supports reliable security service
                  delivery for corporate offices, factories, hospitals,
                  hotels, schools, banks, apartments, warehouses and
                  government sector projects.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <article className="rounded-2xl border border-[#eadfca] bg-[#fffaf2] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d6b06a] hover:bg-white">
                  <span className="text-sm font-black uppercase tracking-[0.2em] text-[#b98a3c]">
                    Step 01
                  </span>

                  <h3 className="mt-3 text-xl font-black leading-tight text-[#2f281f]">
                    Security Requirement Consultation
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-[#6f6254]">
                    We discuss your location, property type, operating hours,
                    number of guards required, shift timings, access points and
                    service expectations.
                  </p>
                </article>

                <article className="rounded-2xl border border-[#eadfca] bg-[#fffaf2] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d6b06a] hover:bg-white">
                  <span className="text-sm font-black uppercase tracking-[0.2em] text-[#b98a3c]">
                    Step 02
                  </span>

                  <h3 className="mt-3 text-xl font-black leading-tight text-[#2f281f]">
                    Site Assessment and Duty Planning
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-[#6f6254]">
                    We understand entry and exit points, visitor movement,
                    important areas, patrolling requirements and site-specific
                    security responsibilities.
                  </p>
                </article>

                <article className="rounded-2xl border border-[#eadfca] bg-[#fffaf2] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d6b06a] hover:bg-white">
                  <span className="text-sm font-black uppercase tracking-[0.2em] text-[#b98a3c]">
                    Step 03
                  </span>

                  <h3 className="mt-3 text-xl font-black leading-tight text-[#2f281f]">
                    Guard Deployment and Site Coordination
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-[#6f6254]">
                    Suitable security personnel are assigned according to the
                    approved duty plan, shift coverage, access-control needs
                    and operational requirements.
                  </p>
                </article>

                <article className="rounded-2xl border border-[#eadfca] bg-[#fffaf2] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d6b06a] hover:bg-white">
                  <span className="text-sm font-black uppercase tracking-[0.2em] text-[#b98a3c]">
                    Step 04
                  </span>

                  <h3 className="mt-3 text-xl font-black leading-tight text-[#2f281f]">
                    Supervision, Reporting and Support
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-[#6f6254]">
                    We support duty discipline, attendance coordination, site
                    reporting, client communication and ongoing security
                    service requirements.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#eadfca] bg-white shadow-2xl shadow-black/10">
  <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
    <div className="p-7 sm:p-10">
      <p className="text-sm font-black uppercase tracking-[0.32em] text-[#b98a3c]">
        Service Coverage
      </p>

      <h2 className="mt-4 text-3xl font-black leading-tight text-[#2f281f] sm:text-4xl">
        Security Guard Services Across Chennai, Tamil Nadu and Pan India
      </h2>

      <p className="mt-5 text-base font-medium leading-8 text-[#6f6254]">
        Our main office is located in Sholinganallur, Chennai. Vipras Facility
        Management Solution provides professional security guards and security
        manpower throughout Chennai and across Tamil Nadu. We also undertake
        security service requirements in Bengaluru, Andhra Pradesh and other
        locations across India.
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#eadfca] bg-[#fffaf2] p-5">
          <h3 className="text-lg font-black text-[#2f281f]">
            Chennai
          </h3>

          <p className="mt-2 text-sm font-medium leading-7 text-[#6f6254]">
            Security services for offices, apartments, schools, hospitals,
            hotels, banks, industries and commercial properties across Chennai.
          </p>
        </div>

        <div className="rounded-2xl border border-[#eadfca] bg-[#fffaf2] p-5">
          <h3 className="text-lg font-black text-[#2f281f]">
            Tamil Nadu
          </h3>

          <p className="mt-2 text-sm font-medium leading-7 text-[#6f6254]">
            Trained security manpower for private organisations, residential
            properties, industries and government projects across Tamil Nadu.
          </p>
        </div>

        <div className="rounded-2xl border border-[#eadfca] bg-[#fffaf2] p-5">
          <h3 className="text-lg font-black text-[#2f281f]">
            Bengaluru & Andhra Pradesh
          </h3>

          <p className="mt-2 text-sm font-medium leading-7 text-[#6f6254]">
            Security guard and manpower support for suitable business,
            institutional, industrial and residential requirements.
          </p>
        </div>

        <div className="rounded-2xl border border-[#eadfca] bg-[#fffaf2] p-5">
          <h3 className="text-lg font-black text-[#2f281f]">
            Pan India Projects
          </h3>

          <p className="mt-2 text-sm font-medium leading-7 text-[#6f6254]">
            Security manpower deployment for eligible corporate, commercial,
            industrial and government sector projects across India.
          </p>
        </div>
      </div>
    </div>

    <div className="flex flex-col justify-center bg-gradient-to-br from-[#2f281f] to-[#121812] p-7 text-white sm:p-10">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-[#d6b06a]">
        Chennai Main Office
      </p>

      <h2 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">
  Get Professional Security Guard Services from Vipras
</h2>

      <address className="mt-5 not-italic text-base font-medium leading-8 text-white/80">
        No-495 A, Village High Road,
        <br />
        Sholinganallur, Chennai,
        <br />
        Tamil Nadu 600119
      </address>

      <div className="mt-6 space-y-3">
        <a
          href="tel:+919710946484"
          aria-label="Call Vipras Facility Management Solution"
          className="flex rounded-full bg-[#d6b06a] px-6 py-3 text-center text-sm font-black text-[#17130d] transition duration-300 hover:-translate-y-1 hover:bg-[#f3d28b]"
        >
          Call: +91 97109 46484
        </a>
          <a
  href="mailto:viprascrm@gmail.com?subject=Security%20Guard%20Services%20Enquiry"
  aria-label="Email Vipras about security guard services"
  className="flex rounded-full border border-white/25 px-6 py-3 text-center text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
>
  Email: viprascrm@gmail.com
</a>
        <a
          href="https://wa.me/919710946484?text=Hello%20Vipras%20Facility%20Management%20Solution%2C%20I%20need%20security%20guard%20services.%20Please%20share%20the%20details."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Request security services through WhatsApp"
          className="flex rounded-full border border-[#d6b06a] px-6 py-3 text-center text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
        >
          Request Quote on WhatsApp
        </a>

        <a
          href="https://maps.app.goo.gl/tqgwt5ePtMRTEAxJ8"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Vipras office location on Google Maps"
          className="flex rounded-full border border-white/25 px-6 py-3 text-center text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
        >
          View Office on Google Maps
        </a>
        <div className="pt-4">
  <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-[#d6b06a]">
    Follow Vipras
  </p>

  <div className="grid grid-cols-2 gap-3">
    <a
      href="https://www.youtube.com/@viprasfacilitycrm8753"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Vipras Facility Management Solution on YouTube"
      className="rounded-full border border-white/25 px-4 py-3 text-center text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
    >
      YouTube
    </a>

    <a
      href="https://www.linkedin.com/company/109659474/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Vipras Facility Management Solution on LinkedIn"
      className="rounded-full border border-white/25 px-4 py-3 text-center text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
    >
      LinkedIn
    </a>

    <a
      href="https://www.instagram.com/viprasfacilitymanagement/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Vipras Facility Management Solution on Instagram"
      className="rounded-full border border-white/25 px-4 py-3 text-center text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
    >
      Instagram
    </a>

    <a
      href="https://www.facebook.com/profile.php?id=61583160419137"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Vipras Facility Management Solution on Facebook"
      className="rounded-full border border-white/25 px-4 py-3 text-center text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
    >
      Facebook
    </a>
  </div>
</div>
      </div>
    </div>
  </div>
</div>

<section
  aria-labelledby="security-faq-heading"
  className="mt-12 rounded-[2rem] border border-[#eadfca] bg-white p-7 shadow-2xl shadow-black/10 sm:p-10"
>
  <p className="text-sm font-black uppercase tracking-[0.32em] text-[#b98a3c]">
    Frequently Asked Questions
  </p>

  <h2
    id="security-faq-heading"
    className="mt-4 max-w-4xl text-3xl font-black leading-tight text-[#2f281f] sm:text-4xl"
  >
    Questions About Our Security Guard Services
  </h2>

  <p className="mt-5 max-w-4xl text-base font-medium leading-8 text-[#6f6254]">
    Find answers about our service locations, industries served and security
    service requirements.
  </p>

  <div className="mt-8 space-y-4">
    {securityFaqs.map((faq) => (
      <details
        key={faq.question}
        className="group rounded-2xl border border-[#eadfca] bg-[#fffaf2] p-5 open:border-[#d6b06a] open:bg-white"
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-black leading-7 text-[#2f281f]">
          <span>{faq.question}</span>

          <span
            aria-hidden="true"
            className="text-2xl font-black text-[#b98a3c]"
          >
            +
          </span>
        </summary>

        <p className="mt-4 border-t border-[#eadfca] pt-4 text-sm font-medium leading-7 text-[#6f6254] sm:text-base">
          {faq.answer}
        </p>
      </details>
    ))}
  </div>
</section>

<div className="mt-10 rounded-[2rem] border border-[#eadfca] bg-gradient-to-r from-[#2f281f] to-[#121812] p-7 text-center shadow-2xl shadow-black/15 sm:p-10">
  <p className="text-sm font-black uppercase tracking-[0.32em] text-[#d6b06a]">
    Need Professional Security Services?
  </p>

 <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl">
  Professional Security Guards for Complete On-Site Protection
</h2>

<p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-8 text-white/75">
  Strengthen the safety of your workforce, visitors, assets and daily
  operations with trained, supervised and dependable security personnel
  across Chennai, Tamil Nadu and Pan India.
</p>

<Link
  href="/contact-us"
  className="mt-7 inline-flex rounded-full bg-[#d6b06a] px-8 py-4 text-sm font-black text-[#17130d] shadow-lg shadow-[#d6b06a]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#f3d28b]"
>
    Request a Security Quote
  </Link>
</div>
        </div>
      </section>
    </main>
  );
}