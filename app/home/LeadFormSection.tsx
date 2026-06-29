"use client";

import { FormEvent } from "react";

const serviceOptions = [
  "Security Services",
  "Housekeeping & Soft Services",
  "Industrial Manpower Supply",
  "Technical / MEP Maintenance Services",
  "Fire & Safety Manpower Solutions",
  "Integrated Facility Management",
];

export default function LeadFormSection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const message = `
New Facility Management Enquiry

Full Name: ${formData.get("name")}
Phone Number: ${formData.get("phone")}
Work Email: ${formData.get("email")}
Company Name: ${formData.get("company")}
Service Required: ${formData.get("service")}
City / Location: ${formData.get("location")}
Message: ${formData.get("message")}
`;

    const whatsappNumber = "919710946484";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
    event.currentTarget.reset();
  }

  return (
    <section className="bg-[#fffaf2] px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b98a3c] sm:text-sm">
    Request a Facility Management Consultation
  </p>

  <h2 className="mt-3 text-2xl font-black leading-tight text-[#2f281f] sm:text-3xl lg:text-4xl">
    Get a Professional Facility Management Proposal for Your Site in Chennai or Across India
  </h2>

  <p className="mt-4 text-base leading-7 text-[#6b5a45] sm:text-lg">
    Share your housekeeping, security, manpower, technical maintenance or
    integrated facility management requirement, and our team will connect with
    you to understand your site, location and service expectations.
  </p>
</div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="rounded-3xl border border-[#eadfca] bg-white p-4 shadow-xl shadow-black/10">
            <div className="overflow-hidden rounded-2xl">
              <iframe
                title="Vipras Facility Management Solution Location Map"
                src="https://www.google.com/maps?q=No-495%20A%2C%20Village%20High%20Rd%2C%20Sholinganallur%2C%20Chennai%2C%20Tamil%20Nadu%20600119&output=embed"
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-5">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b98a3c]">
                Connect with Vipras for trusted facility management support
              </p>

              <h3 className="mt-3 text-xl font-black text-[#2f281f]">
                Visit Our Office
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#6b5a45]">
                No-495 A, Village High Rd, Sholinganallur, Chennai, Tamil Nadu
                600119.
              </p>

              <div className="mt-4 space-y-2 text-sm font-bold text-[#2f281f]">
                <p>Phone / WhatsApp: +91 97109 46484</p>
                <p>Email: viprascrm@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#eadfca] bg-white p-6 shadow-xl shadow-black/10 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#b98a3c]">
              Get a Service Proposal
            </p>

            <h3 className="mt-3 text-2xl font-black text-[#2f281f]">
              Tell Us What Your Site Needs
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#6b5a45]">
  Fill the form and your enquiry details will be sent directly to our team on
  WhatsApp for faster service coordination and follow-up.
</p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-[#eadfca] bg-[#fffaf2] px-4 py-3 text-sm font-semibold text-[#2f281f] outline-none transition placeholder:text-[#9b8568] focus:border-[#b98a3c]"
                />

                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="Phone Number"
                  className="w-full rounded-2xl border border-[#eadfca] bg-[#fffaf2] px-4 py-3 text-sm font-semibold text-[#2f281f] outline-none transition placeholder:text-[#9b8568] focus:border-[#b98a3c]"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="email"
                  type="email"
                  placeholder="Work Email"
                  className="w-full rounded-2xl border border-[#eadfca] bg-[#fffaf2] px-4 py-3 text-sm font-semibold text-[#2f281f] outline-none transition placeholder:text-[#9b8568] focus:border-[#b98a3c]"
                />

                <input
                  name="company"
                  type="text"
                  placeholder="Company Name"
                  className="w-full rounded-2xl border border-[#eadfca] bg-[#fffaf2] px-4 py-3 text-sm font-semibold text-[#2f281f] outline-none transition placeholder:text-[#9b8568] focus:border-[#b98a3c]"
                />
              </div>

              <select
                name="service"
                aria-label="Select service required"
                required
                defaultValue=""
                className="w-full rounded-2xl border border-[#eadfca] bg-[#fffaf2] px-4 py-3 text-sm font-semibold text-[#2f281f] outline-none transition focus:border-[#b98a3c]"
              >
                <option value="" disabled>
                  Select Service Required
                </option>

                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>

              <input
                name="location"
                type="text"
                required
                placeholder="City / Location"
                className="w-full rounded-2xl border border-[#eadfca] bg-[#fffaf2] px-4 py-3 text-sm font-semibold text-[#2f281f] outline-none transition placeholder:text-[#9b8568] focus:border-[#b98a3c]"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your requirement"
                className="w-full resize-none rounded-2xl border border-[#eadfca] bg-[#fffaf2] px-4 py-3 text-sm font-semibold text-[#2f281f] outline-none transition placeholder:text-[#9b8568] focus:border-[#b98a3c]"
              />

              <button
                type="submit"
                className="w-full rounded-2xl bg-[#b98a3c] px-6 py-4 text-sm font-black text-white shadow-xl shadow-black/10 transition hover:bg-[#2f281f]"
              >
                Send Enquiry on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}