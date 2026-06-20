import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
  FaQuestionCircle,
} from "react-icons/fa";

const faqs = [
  {
    question: "What facility management services does Vipras provide?",
    answer:
      "Vipras Facility Management Solution provides security services, housekeeping and soft services, industrial manpower supply, technical maintenance, fire and safety manpower, and integrated facility management services.",
  },
  {
    question: "Do you provide services outside Chennai?",
    answer:
      "Yes. We provide service support in Chennai, Tamil Nadu, Andhra Pradesh, Bangalore and Pan India based on the project requirement and manpower availability.",
  },
  {
    question: "Can you handle industrial and government project environments?",
    answer:
      "Yes. Vipras supports corporate, industrial, commercial, residential, healthcare, education, warehouse and government project environments with suitable manpower and service planning.",
  },
  {
    question: "How do you plan manpower for a new site?",
    answer:
      "We first understand the site type, service scope, duty timing, manpower count, risk areas and client expectations. After that, we plan suitable manpower, duty roles and supervision flow.",
  },
  {
    question: "Do you provide supervision and quality checks?",
    answer:
      "Yes. Our service approach includes supervision, attendance focus, duty discipline, client coordination, reporting support and quality checks for smoother facility operations.",
  },
  {
    question: "How can I request a quote?",
    answer:
      "You can contact Vipras through the contact page or call +91 97109 46484. Share your location, site type, service requirement and manpower need, and our team will guide you.",
  },
];

export default function ServicesFAQSection() {
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
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-700">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Clear answers before you choose our facility services.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We want every client to understand our service process clearly.
              Here are common questions about Vipras facility management
              services, service coverage, manpower planning and support.
            </p>

            <div className="mt-7 rounded-[2rem] border border-emerald-100 bg-emerald-50 p-5">
              <div className="flex gap-3">
                <FaCheckCircle className="mt-1 shrink-0 text-emerald-700" />
                <p className="text-sm font-semibold leading-7 text-slate-700">
                  Need a custom service plan? Share your site details and our
                  team will guide you with a practical solution.
                </p>
              </div>

              <Link
                href="/contact-us"
                className="mt-5 inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white transition hover:bg-emerald-700"
              >
                Contact Us
                <FaArrowRight />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 transition hover:bg-white hover:shadow-lg"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="flex gap-3 text-base font-black text-slate-950">
                    <FaQuestionCircle className="mt-1 shrink-0 text-emerald-700" />
                    {faq.question}
                  </span>

                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-lg font-black text-slate-950 transition group-open:rotate-45">
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
      </div>
    </section>
  );
}
