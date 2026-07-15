import type { MetadataRoute } from "next";

const baseUrl = "https://www.viprasfacility.com";
const homeLastModified = new Date("2026-06-30");
const servicesLastModified = new Date("2026-06-30");
const servicePagesLastModified = new Date("2026-06-30");
const securityServicesLastModified = new Date("2026-07-13");
const technicalMaintenanceLastModified = new Date("2026-07-13");
const housekeepingServicesLastModified = new Date("2026-07-14");
const fireSafetyManpowerLastModified = new Date("2026-07-15");
const industrialManpowerLastModified = new Date("2026-07-15");
const companyPagesLastModified = new Date("2026-07-09");
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
  url: `${baseUrl}/`,
  lastModified: homeLastModified,
  changeFrequency: "weekly",
  priority: 1,
},
    {
  url: `${baseUrl}/about-us`,
  lastModified: companyPagesLastModified,
  changeFrequency: "monthly",
  priority: 0.9,
},
    {
  url: `${baseUrl}/services`,
  lastModified: servicesLastModified,
  changeFrequency: "weekly",
  priority: 0.95,
},
    {
  url: `${baseUrl}/services/security-services`,
  lastModified: securityServicesLastModified,
  changeFrequency: "monthly",
  priority: 0.9,
},
  {
  url: `${baseUrl}/services/housekeeping-soft-services`,
  lastModified: housekeepingServicesLastModified,
  changeFrequency: "monthly",
  priority: 0.9,
},
   {
  url: `${baseUrl}/services/industrial-manpower-supply`,
  lastModified: industrialManpowerLastModified,
  changeFrequency: "monthly",
  priority: 0.9,
},
    {
  url: `${baseUrl}/services/technical-maintenance`,
  lastModified: technicalMaintenanceLastModified,
  changeFrequency: "monthly",
  priority: 0.9,
},
    {
  url: `${baseUrl}/services/fire-safety-manpower`,
  lastModified: fireSafetyManpowerLastModified,
  changeFrequency: "monthly",
  priority: 0.9,
},
    {
      url: `${baseUrl}/services/integrated-facility-management`,
     lastModified: servicePagesLastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/insights-dashboard`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/smart-facility-management-business-trust`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/what-businesses-expect-from-facility-management-partner`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
        {
      url: `${baseUrl}/blog/professional-security-services-protect-business-environments`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/housekeeping-services-for-clean-healthy-workplaces`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/preventive-maintenance-for-smooth-facility-operations`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/security-services-for-business-facilities`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/housekeeping-soft-services-for-clean-facilities`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/industrial-manpower-supply-for-business-operations`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/technical-maintenance-services-for-pan-india-facilities`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/fire-safety-manpower-for-industrial-and-commercial-sites`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/integrated-facility-management-for-modern-businesses`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return routes;
}
