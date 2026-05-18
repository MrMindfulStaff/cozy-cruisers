"use client";

import { useState, type FormEvent } from "react";
import {
  FloatingShapes,
  WaveDivider,
  DotPattern,
  BlobAccent,
} from "@/components/Decorative";

// Note: metadata must be in a separate file for client components,
// but for simplicity we'll handle SEO via the layout title template

type Audience = "family" | "facility";

const inputClass =
  "w-full border border-light-gray rounded-xl px-4 py-3 font-body text-dark focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent";
const labelClass = "block font-heading font-semibold text-navy text-sm mb-2";

function TextField({
  id,
  label,
  type = "text",
  placeholder,
  min,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  min?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label} *
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required
        placeholder={placeholder}
        min={min}
        className={inputClass}
      />
    </div>
  );
}

function Chooser({ onSelect }: { onSelect: (a: Audience) => void }) {
  return (
    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal via-orange to-teal" />
      <h2 className="font-heading text-2xl font-extrabold text-navy mb-2 text-center">
        How can we help?
      </h2>
      <p className="text-dark/60 font-body text-sm mb-8 text-center">
        Choose the option that fits you and we&apos;ll ask a few quick questions.
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        <button
          type="button"
          onClick={() => onSelect("family")}
          className="group text-center border-2 border-light-gray rounded-2xl p-8 hover:border-teal hover:bg-teal/5 transition-all hover:-translate-y-1"
        >
          <div className="w-16 h-16 bg-teal/10 text-teal rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <h3 className="font-heading text-lg font-bold text-navy mb-1">
            I&apos;m a Family
          </h3>
          <p className="text-dark/60 font-body text-sm">
            Daily transportation for my child to and from childcare.
          </p>
        </button>
        <button
          type="button"
          onClick={() => onSelect("facility")}
          className="group text-center border-2 border-light-gray rounded-2xl p-8 hover:border-orange hover:bg-orange/5 transition-all hover:-translate-y-1"
        >
          <div className="w-16 h-16 bg-orange/10 text-orange rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
            </svg>
          </div>
          <h3 className="font-heading text-lg font-bold text-navy mb-1">
            I&apos;m a Facility
          </h3>
          <p className="text-dark/60 font-body text-sm">
            A transportation partner for the children we serve.
          </p>
        </button>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [audience, setAudience] = useState<Audience | null>(null);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!audience) return;
    setStatus("submitting");
    setErrorMsg("");

    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    payload.formType = audience;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setErrorMsg(body.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg(
        "Network error. Please check your connection and try again."
      );
      setStatus("error");
    }
  }

  const isFamily = audience === "family";

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-mesh" />
        <FloatingShapes />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-6">
              Let&apos;s Get <span className="text-orange">Started.</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed font-body">
              Whether you&apos;re a family looking for safe childcare transportation or a
              facility ready to add a trusted transportation partner — we&apos;re here.
            </p>
          </div>
        </div>
        <WaveDivider color="#FAF7F2" />
      </section>

      {/* Form Section */}
      <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
        <DotPattern />
        <BlobAccent position="top-right" color="teal" size="lg" />
        <BlobAccent position="bottom-left" color="orange" size="md" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {status === "success" ? (
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal via-orange to-teal" />
                <div className="w-16 h-16 bg-teal/10 text-teal rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <h2 className="font-heading text-2xl font-extrabold text-navy mb-2">
                  Thank you — message received!
                </h2>
                <p className="text-dark/60 font-body">
                  We&apos;ll reach out within 1 business day.
                </p>
              </div>
            ) : audience === null ? (
              <Chooser onSelect={setAudience} />
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setAudience(null);
                    setStatus("idle");
                    setErrorMsg("");
                  }}
                  className="mb-6 inline-flex items-center gap-1.5 font-heading font-semibold text-sm text-dark/60 hover:text-orange transition-colors"
                >
                  <span aria-hidden>&larr;</span> Choose a different option
                </button>

                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal via-orange to-teal" />

                  <h2 className="font-heading text-2xl font-extrabold text-navy mb-2">
                    {isFamily
                      ? "Family Transportation Inquiry"
                      : "Facility Partnership Inquiry"}
                  </h2>
                  <p className="text-dark/60 font-body text-sm mb-8">
                    {isFamily
                      ? "Tell us about your child's transportation needs. We'll reach out within 1 business day."
                      : "Tell us about your facility. We'll schedule a conversation to discuss partnership."}
                  </p>

                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <TextField
                        id="firstName"
                        label={isFamily ? "First Name" : "Contact First Name"}
                      />
                      <TextField
                        id="lastName"
                        label={isFamily ? "Last Name" : "Contact Last Name"}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <TextField id="email" label="Email Address" type="email" />
                      <TextField id="phone" label="Phone Number" type="tel" />
                    </div>

                    {isFamily ? (
                      <>
                        <TextField
                          id="numberOfChildren"
                          label="Number of Children"
                          type="number"
                          min="1"
                        />
                        <TextField
                          id="childcareFacility"
                          label="Childcare Facility Name"
                          placeholder="Where does your child attend?"
                        />
                        <TextField
                          id="homeAddress"
                          label="Child's Home Address (Pickup)"
                          placeholder="Street address, city, ZIP"
                        />
                        <TextField
                          id="childcareFacilityAddress"
                          label="Childcare Facility Address (Drop-off)"
                          placeholder="Street address, city, ZIP"
                        />
                      </>
                    ) : (
                      <>
                        <TextField id="facilityName" label="Facility Name" />
                        <TextField
                          id="facilityAddress"
                          label="Facility Address"
                          placeholder="Street address, city, ZIP"
                        />
                        <div>
                          <label htmlFor="licenseType" className={labelClass}>
                            License Type *
                          </label>
                          <select
                            id="licenseType"
                            name="licenseType"
                            required
                            className={`${inputClass} bg-white`}
                          >
                            <option value="">Select...</option>
                            <option value="Group Child Care (DCF 250)">
                              Group Child Care (DCF 250)
                            </option>
                            <option value="Family Child Care (DCF 251)">
                              Family Child Care (DCF 251)
                            </option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <TextField
                          id="enrolledChildren"
                          label="Number of Children Needing Transportation"
                          type="number"
                          min="1"
                        />
                      </>
                    )}

                    <div>
                      <label htmlFor="message" className={labelClass}>
                        Additional Details{isFamily ? " *" : ""}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required={isFamily}
                        className={`${inputClass} resize-none`}
                        placeholder={
                          isFamily
                            ? "Schedule, timing, or anything else we should know..."
                            : "Tell us about your facility and transportation challenges..."
                        }
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-600 font-body text-sm text-center">
                        {errorMsg}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-orange text-white py-4 rounded-full font-heading font-bold text-lg hover:bg-orange/90 transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {status === "submitting"
                        ? "Sending..."
                        : isFamily
                          ? "Submit Family Inquiry"
                          : "Submit Partnership Inquiry"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-white py-16 md:py-20 relative overflow-hidden">
        <BlobAccent position="center-right" color="teal" size="md" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="card-lift bg-cream/50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-teal/10 text-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-navy mb-1">Phone</h3>
              <a href="tel:+14142629127" className="text-dark/70 font-body hover:text-orange transition-colors">
                (414) 262-9127
              </a>
            </div>
            <div className="card-lift bg-cream/50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-teal/10 text-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-navy mb-1">Email</h3>
              <a href="mailto:CozyCruiserMKE@gmail.com" className="text-dark/70 font-body hover:text-orange transition-colors">
                CozyCruiserMKE@gmail.com
              </a>
            </div>
            <div className="card-lift bg-cream/50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-teal/10 text-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
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
      <section className="bg-navy py-12 relative overflow-hidden">
        <FloatingShapes />
        <div className="absolute inset-0 hero-mesh" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/80 font-body text-lg">
            Currently serving the <span className="text-orange font-bold">Milwaukee metro area</span>.
            Routes are planned within DCF-compliant time limits to ensure every child&apos;s comfort and safety.
          </p>
        </div>
      </section>
    </>
  );
}
