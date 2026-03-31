"use client";

import { useState } from "react";
import type { Metadata } from "next";

// Note: metadata must be in a separate file for client components,
// but for simplicity we'll handle SEO via the layout title template

export default function ContactPage() {
  const [formType, setFormType] = useState<"family" | "facility">("family");

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-6">
              Let&apos;s Get{" "}
              <span className="text-orange">Started.</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed font-body">
              Whether you&apos;re a family looking for safe childcare transportation or a
              facility ready to add a trusted transportation partner — we&apos;re here.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Toggle */}
            <div className="flex bg-white rounded-full p-1 shadow-sm mb-10 max-w-md mx-auto">
              <button
                onClick={() => setFormType("family")}
                className={`flex-1 py-3 px-6 rounded-full font-heading font-bold text-sm transition-colors ${
                  formType === "family"
                    ? "bg-orange text-white"
                    : "text-dark/60 hover:text-dark"
                }`}
              >
                I&apos;m a Family
              </button>
              <button
                onClick={() => setFormType("facility")}
                className={`flex-1 py-3 px-6 rounded-full font-heading font-bold text-sm transition-colors ${
                  formType === "facility"
                    ? "bg-orange text-white"
                    : "text-dark/60 hover:text-dark"
                }`}
              >
                I&apos;m a Facility
              </button>
            </div>

            {/* Form */}
            <form
              name={formType === "family" ? "family-inquiry" : "facility-inquiry"}
              method="POST"
              data-netlify="true"
              className="bg-white rounded-2xl p-8 md:p-10 shadow-sm"
            >
              <input
                type="hidden"
                name="form-name"
                value={formType === "family" ? "family-inquiry" : "facility-inquiry"}
              />

              <h2 className="font-heading text-2xl font-extrabold text-navy mb-2">
                {formType === "family" ? "Family Inquiry" : "Facility Partnership Inquiry"}
              </h2>
              <p className="text-dark/60 font-body text-sm mb-8">
                {formType === "family"
                  ? "Tell us about your transportation needs. We'll reach out within 1 business day."
                  : "Tell us about your facility. We'll schedule a conversation to discuss partnership."}
              </p>

              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block font-heading font-semibold text-navy text-sm mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full border border-light-gray rounded-xl px-4 py-3 font-body text-dark focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block font-heading font-semibold text-navy text-sm mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full border border-light-gray rounded-xl px-4 py-3 font-body text-dark focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-heading font-semibold text-navy text-sm mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-light-gray rounded-xl px-4 py-3 font-body text-dark focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block font-heading font-semibold text-navy text-sm mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border border-light-gray rounded-xl px-4 py-3 font-body text-dark focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>

                {formType === "family" ? (
                  <>
                    <div>
                      <label
                        htmlFor="childcareFacility"
                        className="block font-heading font-semibold text-navy text-sm mb-2"
                      >
                        Childcare Facility Name
                      </label>
                      <input
                        type="text"
                        id="childcareFacility"
                        name="childcareFacility"
                        className="w-full border border-light-gray rounded-xl px-4 py-3 font-body text-dark focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                        placeholder="Where does your child attend?"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="pickupArea"
                        className="block font-heading font-semibold text-navy text-sm mb-2"
                      >
                        Pickup Neighborhood / ZIP Code
                      </label>
                      <input
                        type="text"
                        id="pickupArea"
                        name="pickupArea"
                        className="w-full border border-light-gray rounded-xl px-4 py-3 font-body text-dark focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                        placeholder="e.g., 53206, Sherman Park"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label
                        htmlFor="facilityName"
                        className="block font-heading font-semibold text-navy text-sm mb-2"
                      >
                        Facility Name *
                      </label>
                      <input
                        type="text"
                        id="facilityName"
                        name="facilityName"
                        required
                        className="w-full border border-light-gray rounded-xl px-4 py-3 font-body text-dark focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="licenseType"
                        className="block font-heading font-semibold text-navy text-sm mb-2"
                      >
                        License Type
                      </label>
                      <select
                        id="licenseType"
                        name="licenseType"
                        className="w-full border border-light-gray rounded-xl px-4 py-3 font-body text-dark focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent bg-white"
                      >
                        <option value="">Select...</option>
                        <option value="group">Group Child Care (DCF 250)</option>
                        <option value="family">Family Child Care (DCF 251)</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="enrolledChildren"
                        className="block font-heading font-semibold text-navy text-sm mb-2"
                      >
                        Approximate Number of Children Needing Transportation
                      </label>
                      <input
                        type="number"
                        id="enrolledChildren"
                        name="enrolledChildren"
                        min="1"
                        className="w-full border border-light-gray rounded-xl px-4 py-3 font-body text-dark focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label
                    htmlFor="message"
                    className="block font-heading font-semibold text-navy text-sm mb-2"
                  >
                    Tell Us More
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full border border-light-gray rounded-xl px-4 py-3 font-body text-dark focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent resize-none"
                    placeholder={
                      formType === "family"
                        ? "Any details about your transportation needs..."
                        : "Tell us about your facility and transportation challenges..."
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange text-white py-4 rounded-full font-heading font-bold text-lg hover:bg-orange/90 transition-colors"
                >
                  {formType === "family" ? "Submit Family Inquiry" : "Submit Partnership Inquiry"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="w-12 h-12 bg-teal/10 text-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-navy mb-1">Phone</h3>
              <a href="tel:+14145551234" className="text-dark/70 font-body hover:text-orange transition-colors">
                (414) 555-1234
              </a>
            </div>
            <div>
              <div className="w-12 h-12 bg-teal/10 text-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-navy mb-1">Email</h3>
              <a href="mailto:info@cozycruisers.com" className="text-dark/70 font-body hover:text-orange transition-colors">
                info@cozycruisers.com
              </a>
            </div>
            <div>
              <div className="w-12 h-12 bg-teal/10 text-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-navy mb-1">Service Area</h3>
              <p className="text-dark/70 font-body">Milwaukee Metro Area, WI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Note */}
      <section className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/80 font-body text-lg">
            Currently serving the <span className="text-orange font-bold">Milwaukee metro area</span>.
            Routes are planned within DCF-compliant time limits to ensure every child&apos;s comfort and safety.
          </p>
        </div>
      </section>
    </>
  );
}
