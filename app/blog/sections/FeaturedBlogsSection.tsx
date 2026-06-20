import Image from "next/image";
import Link from "next/link";

const featuredBlogs = [
  {
    id: 1,
    category: "Security Services",
    readTime: "5 Min Read",
    title: "How Professional Security Services Protect Modern Business Environments",
    description:
      "Learn how trained security manpower helps offices, factories, hospitals, schools and commercial spaces stay safe, disciplined and professionally managed.",
    image: "/featured-blog-security.jpg.png",
    href: "/blog/professional-security-services-protect-business-environments",
  },
  {
    id: 2,
    category: "Housekeeping & Soft Services",
    readTime: "4 Min Read",
    title: "Why Housekeeping Services Matter for Clean, Healthy and Trusted Workplaces",
    description:
      "Discover how structured housekeeping support improves hygiene, appearance, employee comfort and the daily experience across business facilities.",
    image: "/featured-blog-housekeeping.jpg.png",
    href: "/blog/housekeeping-services-for-clean-healthy-workplaces",
  },
  {
    id: 3,
    category: "Technical Maintenance",
    readTime: "6 Min Read",
    title: "The Importance of Preventive Maintenance for Smooth Facility Operations",
    description:
      "Understand how electrical, plumbing, HVAC and preventive maintenance services reduce downtime and support reliable business operations.",
    image: "/featured-blog-maintenance.jpg.png",
    href: "/blog/preventive-maintenance-for-smooth-facility-operations",
  },
];

export default function FeaturedBlogsSection() {
  return (
    <section
      id="featured-blogs"
      className="bg-[#f8f5ef] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-[#c89b3c]/25 bg-[#fff7e8] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#b8862f]">
            Featured Blogs
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Expert Articles That Build Trust and Deliver Practical Value
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Explore featured insights from Vipras across security, housekeeping
            and maintenance services designed to help businesses operate with
            confidence, safety and efficiency.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="group overflow-hidden rounded-[28px] border border-[#eadfca] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)]"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#fff5df] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#b8862f]">
                    {blog.category}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                    {blog.readTime}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-extrabold leading-snug text-slate-900">
                  {blog.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {blog.description}
                </p>

                <Link
                  href={blog.href}
                  className="mt-6 inline-flex items-center text-sm font-extrabold text-[#0f7a5f] transition duration-300 hover:text-[#0b5e49]"
                >
                  Read Article
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
