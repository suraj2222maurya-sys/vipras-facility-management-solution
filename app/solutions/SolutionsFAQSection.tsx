import Link from "next/link";
import { FaArrowRight, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "What is a facility management solution?",
    answer:
      "A facility management solution is a planned service model that helps a business manage security, housekeeping, manpower, technical maintenance, fire safety and daily facility operations in a more organized way.",
  },
  {
    question: "Can Vipras create a custom solution for my business?",
    answer:
      "Yes. Vipras can suggest a suitable service plan based on your site type, location, manpower requirement, working hours and service scope.",
  },
  {
    question: "Which locations do you support?",
    answer:
      "Vipras supports Chennai, Tamil Nadu, Andhra Pradesh, Bangalore and Pan India requirements based on project scope and manpower availability.",
  },
  {
    question: "Which industries can use your facility solutions?",
    answer:
      "Our solutions are suitable for corporate offices, factories, IT parks, hospitals, schools, warehouses, apartments, commercial buildings and government project environments.",
  },
  {
    question: "How do I request a solution proposal?",
    answer:
      "You can open the contact page or call +91 97109 46484. Share your site details, service requirement and manpower need, and our team will guide you.",
  },
];

export default function SolutionsFAQSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-slate-50 px-5 py-16 sm:px-8 lg:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#9A6A1F]">
            FAQ
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            Common questions about our facility solutions.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Clear answers help you choose the right facility solution with
            confidence. For a custom plan, our team can guide you after
            understanding your site requirement.
          </p>

          <Link
            href="/contact-us"
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#111111] px-7 py-4 text-sm font-black text-white transition hover:bg-[#9A6A1F]"
          >
            Contact Vipras
            <FaArrowRight />
          </Link>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 0}
              className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-lg"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <span className="flex gap-3 text-base font-black text-slate-950">
                  <FaQuestionCircle className="mt-1 shrink-0 text-[#C89B3C]" />
                  {faq.question}
                </span>

                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg font-black text-slate-950 transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 pl-8 text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
