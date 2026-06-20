"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const services = [
  "Security Services",
  "Housekeeping & Soft Services",
  "Industrial Manpower Supply",
  "Technical Maintenance",
  "Fire & Safety Manpower",
  "Integrated Facility Management",
];

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    message: "",
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const whatsappMessage = `Hello Vipras Facility Management Solutions,%0A%0AI want to discuss a service requirement.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AService Required: ${formData.service}%0ALocation: ${formData.location}%0ARequirement: ${formData.message}%0A%0APlease contact me.`;

    window.open(`https://wa.me/919710946484?text=${whatsappMessage}`, "_blank");
  }

  return (
    <section className="bg-[#f8f5ef] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[30px] border border-[#eadfca] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)] sm:p-8">
            <div className="inline-flex items-center rounded-full border border-[#0f7a5f]/20 bg-[#f1faf7] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0f7a5f]">
              Request Support
            </div>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Tell Us What Your Facility Needs
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Share your requirement and our team will help you choose the right
              facility management support for your site, staff strength and
              service scope.
            </p>

            <div className="mt-7 space-y-4">
              <div className="rounded-2xl border border-[#eadfca] bg-[#fffdf8] p-4">
                <p className="font-extrabold text-slate-950">
                  Fast WhatsApp Enquiry
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Form details will open directly in WhatsApp for quick
                  communication.
                </p>
              </div>

              <div className="rounded-2xl border border-[#eadfca] bg-[#fffdf8] p-4">
                <p className="font-extrabold text-slate-950">
                  Services Across India
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Security, housekeeping, manpower, maintenance, fire safety and
                  integrated facility support.
                </p>
              </div>

              <div className="rounded-2xl border border-[#eadfca] bg-[#fffdf8] p-4">
                <p className="font-extrabold text-slate-950">
                  Suitable for Many Sites
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Offices, factories, hotels, apartments, hospitals, schools,
                  buildings and project locations.
                </p>
              </div>
            </div>

            <Link
              href="tel:+919710946484"
              className="mt-7 inline-flex items-center justify-center rounded-full border border-[#0f7a5f]/20 bg-[#f1faf7] px-6 py-3 text-sm font-extrabold text-[#0f7a5f] transition hover:bg-[#0f7a5f] hover:text-white"
            >
              Call Now
              <span className="ml-2">→</span>
            </Link>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[30px] border border-[#eadfca] bg-white p-6 shadow-[0_22px_70px_rgba(15,23,42,0.10)] sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-extrabold text-slate-800">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData({ ...formData, name: event.target.value })
                  }
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-2xl border border-[#eadfca] bg-[#fffdf8] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#c89b3c] focus:ring-4 focus:ring-[#c89b3c]/10"
                />
              </div>

              <div>
                <label className="text-sm font-extrabold text-slate-800">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(event) =>
                    setFormData({ ...formData, phone: event.target.value })
                  }
                  placeholder="Enter phone number"
                  className="mt-2 w-full rounded-2xl border border-[#eadfca] bg-[#fffdf8] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#c89b3c] focus:ring-4 focus:ring-[#c89b3c]/10"
                />
              </div>

              <div>
                <label className="text-sm font-extrabold text-slate-800">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData({ ...formData, email: event.target.value })
                  }
                  placeholder="Enter email address"
                  className="mt-2 w-full rounded-2xl border border-[#eadfca] bg-[#fffdf8] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#c89b3c] focus:ring-4 focus:ring-[#c89b3c]/10"
                />
              </div>

              <div>
                <label className="text-sm font-extrabold text-slate-800">
                  Service Required
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(event) =>
                    setFormData({ ...formData, service: event.target.value })
                  }
                  className="mt-2 w-full rounded-2xl border border-[#eadfca] bg-[#fffdf8] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#c89b3c] focus:ring-4 focus:ring-[#c89b3c]/10"
                >
                  <option value="">Select service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-extrabold text-slate-800">
                  Location / City
                </label>
                <input
                  required
                  type="text"
                  value={formData.location}
                  onChange={(event) =>
                    setFormData({ ...formData, location: event.target.value })
                  }
                  placeholder="Example: Chennai, Bangalore, Hyderabad"
                  className="mt-2 w-full rounded-2xl border border-[#eadfca] bg-[#fffdf8] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#c89b3c] focus:ring-4 focus:ring-[#c89b3c]/10"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-extrabold text-slate-800">
                  Requirement Details
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(event) =>
                    setFormData({ ...formData, message: event.target.value })
                  }
                  placeholder="Tell us about your site, service need, manpower count or project requirement."
                  className="mt-2 w-full resize-none rounded-2xl border border-[#eadfca] bg-[#fffdf8] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#c89b3c] focus:ring-4 focus:ring-[#c89b3c]/10"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#c89b3c] px-7 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#e1b85a]"
            >
              Send Requirement on WhatsApp
              <span className="ml-2">→</span>
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-slate-500">
              Your details will open in WhatsApp. You can review the message
              before sending.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
