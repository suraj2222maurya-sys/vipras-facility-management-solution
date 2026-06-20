"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M44.5 20H24v8.5h11.8C34.7 34 30 37 24 37c-7.2 0-13-5.8-13-13S16.8 11 24 11c3.3 0 6.3 1.2 8.6 3.3l6-6C34.8 4.9 29.7 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.6 20-21 0-1.3-.1-2.7-.5-4z"
      />
      <path
        fill="#34A853"
        d="M6.1 14.1l7 5.1C14.9 14.4 19.1 11 24 11c3.3 0 6.3 1.2 8.6 3.3l6-6C34.8 4.9 29.7 3 24 3 16.1 3 9.2 7.5 6.1 14.1z"
      />
      <path
        fill="#FBBC04"
        d="M24 45c5.8 0 10.7-1.9 14.3-5.2l-6.6-5.4C29.8 35.8 27.2 37 24 37c-6 0-10.9-4-12.5-9.4l-7 5.4C7.6 40.1 15.1 45 24 45z"
      />
      <path
        fill="#EA4335"
        d="M11.5 27.6c-.4-1.1-.6-2.3-.6-3.6s.2-2.5.6-3.6l-7-5.4C3.5 17.8 3 20.8 3 24s.5 6.2 1.5 9l7-5.4z"
      />
    </svg>
  );
}

function WebsiteReviewIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-[#0f7a5f]">
      <path
        d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 19.8l1-6.1-4.4-4.3 6.1-.9L12 3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function GoogleRatingReviewSection() {
  const googleProfileLink =
    "https://www.google.com/maps/search/?api=1&query=Vipras+Facility+Management+Solutions+No-495+A+Village+High+Rd+Sholinganallur+Chennai+Tamil+Nadu+600119";

  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  function handleWebsiteReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const reviewMessage = `Hello Vipras Facility Management Solutions,%0A%0AI want to share my website feedback.%0A%0AName: ${name}%0AService Used / Interested: ${service}%0ARating: ${rating} Star%0AFeedback: ${message}%0A%0AThank you.`;

    window.open(`https://wa.me/919710946484?text=${reviewMessage}`, "_blank");
  }

  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c89b3c]/25 bg-[#fff7e8] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#b8862f]">
            <GoogleIcon />
            Ratings & Feedback
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Rate Vipras or Check Client Feedback
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Share your experience on Google or send feedback directly to our
            team. This keeps reviews genuine and easy for clients to verify.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[32px] border border-[#eadfca] bg-[#f8f5ef] p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)] sm:p-8">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#c89b3c]/15 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#0f7a5f]/15 blur-3xl" />

            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#eadfca] bg-white shadow-sm">
                <GoogleIcon />
              </div>

              <h3 className="mt-5 text-2xl font-extrabold text-slate-950">
                Review Us on Google
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                If you have worked with Vipras or want to check public feedback,
                use Google to read reviews or share your own rating. Google
                reviews remain public, transparent and easy for other businesses
                to verify.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={googleProfileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#c89b3c] px-6 py-3 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5 hover:bg-[#e1b85a]"
                >
                  <GoogleIcon />
                  Rate on Google
                  <span>→</span>
                </Link>

                <Link
                  href={googleProfileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#0f7a5f]/20 bg-white px-6 py-3 text-sm font-extrabold text-[#0f7a5f] transition hover:-translate-y-0.5 hover:bg-[#0f7a5f] hover:text-white"
                >
                  Check Reviews
                  <span className="ml-2">→</span>
                </Link>
              </div>

              <p className="mt-5 rounded-2xl border border-[#eadfca] bg-white p-4 text-xs leading-6 text-slate-500">
                Live Google review count can be connected later with Google
                Place ID and Google Places API key. Until then, this button
                sends visitors directly to the public Google profile.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleWebsiteReview}
            className="rounded-[32px] border border-[#eadfca] bg-white p-6 shadow-[0_22px_70px_rgba(15,23,42,0.10)] sm:p-8"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#eadfca] bg-[#fff7e8] shadow-sm">
              <WebsiteReviewIcon />
            </div>

            <h3 className="mt-5 text-2xl font-extrabold text-slate-950">
              Send Website Feedback
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              This feedback goes directly to Vipras on WhatsApp. It does not
              create fake public reviews on the website.
            </p>

            <div className="mt-5">
              <p className="text-sm font-extrabold text-slate-800">
                Select Rating
              </p>

              <div className="mt-2 flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className={
                      star <= rating
                        ? "text-3xl text-[#fbbc04] transition hover:scale-110"
                        : "text-3xl text-slate-300 transition hover:scale-110"
                    }
                    aria-label={`${star} star rating`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-4">
              <input
                required
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                className="w-full rounded-2xl border border-[#eadfca] bg-[#fffdf8] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#c89b3c] focus:ring-4 focus:ring-[#c89b3c]/10"
              />

              <select
                required
                value={service}
                onChange={(event) => setService(event.target.value)}
                className="w-full rounded-2xl border border-[#eadfca] bg-[#fffdf8] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#c89b3c] focus:ring-4 focus:ring-[#c89b3c]/10"
              >
                <option value="">Select service</option>
                <option value="Security Services">Security Services</option>
                <option value="Housekeeping & Soft Services">
                  Housekeeping & Soft Services
                </option>
                <option value="Industrial Manpower Supply">
                  Industrial Manpower Supply
                </option>
                <option value="Technical Maintenance">
                  Technical Maintenance
                </option>
                <option value="Fire & Safety Manpower">
                  Fire & Safety Manpower
                </option>
                <option value="Integrated Facility Management">
                  Integrated Facility Management
                </option>
              </select>

              <textarea
                required
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Write your feedback..."
                className="w-full resize-none rounded-2xl border border-[#eadfca] bg-[#fffdf8] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#c89b3c] focus:ring-4 focus:ring-[#c89b3c]/10"
              />
            </div>

            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#0f7a5f] px-6 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#0b5e49]"
            >
              Send Feedback on WhatsApp
              <span className="ml-2">→</span>
            </button>

            <p className="mt-3 text-center text-xs leading-5 text-slate-500">
              For public rating, use “Rate on Google”. For direct feedback, use
              this website form.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
