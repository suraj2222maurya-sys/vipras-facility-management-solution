"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What facility management services does Vipras provide?",
    answer:
      "Vipras provides security services, housekeeping and soft services, industrial manpower supply, technical and MEP maintenance, fire and safety manpower, and integrated facility management support for business sites.",
  },
  {
    question: "Do you provide services across Chennai and Tamil Nadu?",
    answer:
      "Yes. Vipras supports businesses across Chennai, Tamil Nadu and India with trained teams, site supervision and professional facility service operations.",
  },
  {
    question: "Can Vipras support factories, IT parks, hospitals and apartments?",
    answer:
      "Yes. Vipras works with manufacturing plants, IT parks, hospitals, corporate offices, warehouses, schools, hotels, apartments, residences and other high-demand environments.",
  },
  {
    question: "Do you provide trained and supervised staff?",
    answer:
      "Yes. Vipras focuses on trained manpower, disciplined deployment, active supervision and reliable service quality for day-to-day site operations.",
  },
  {
    question: "How can I request a facility management proposal?",
    answer:
      "You can submit the enquiry form on this website or contact Vipras through phone, WhatsApp or email. Our team will review your requirement and connect with you.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
   <section className="relative overflow-hidden bg-[#fffaf2] px-5 py-16 sm:px-8 lg:px-12">
        <div className="absolute left-[-80px] top-8 h-80 w-80 animate-pulse rounded-full bg-[#b98a3c]/35 blur-3xl" />
<div className="absolute right-[-90px] bottom-8 h-96 w-96 animate-pulse rounded-full bg-[#d6b06a]/40 blur-3xl" />
<div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eadfca]/70 blur-3xl" />
<div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#d6b06a_1px,transparent_0)] bg-[length:28px_28px] opacity-20" />
    <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b98a3c] sm:text-sm">
            Frequently Asked Questions
          </p>

          <h2 className="mt-3 text-2xl font-black leading-tight text-[#2f281f] sm:text-3xl lg:text-4xl">
            Answers About Vipras Facility Management Services
          </h2>

          <p className="mt-4 text-base leading-7 text-[#6b5a45] sm:text-lg">
            Clear information to help businesses choose the right facility
            management partner with confidence.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-3xl border border-[#eadfca] bg-white/85 shadow-sm transition hover:shadow-xl hover:shadow-black/10"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7"
                 
                >
                  <span className="text-base font-black text-[#2f281f] sm:text-lg">
                    {faq.question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f8f1e7] text-xl font-black text-[#b98a3c]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-7">
                    <p className="max-w-3xl text-sm leading-7 text-[#6b5a45] sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}