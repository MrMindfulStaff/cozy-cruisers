import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Safety & Compliance",
  description:
    "Full breakdown of Cozy Cruisers' DCF compliance, driver vetting, vehicle standards, emergency procedures, and insurance coverage.",
};

export default function SafetyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-6">
              Safety Isn&apos;t a Feature.{" "}
              <span className="text-orange">It&apos;s the Foundation.</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed font-body">
              Most families don&apos;t know what to ask for in childcare transportation.
              We show them what safe looks like — and we document every bit of it.
            </p>
          </div>
        </div>
      </section>

      {/* DCF Compliance */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-4 text-center">
            Wisconsin DCF Compliance
          </h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto text-center mb-12 font-body">
            Cozy Cruisers is built from the ground up to meet and exceed Wisconsin Department
            of Children and Families requirements.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { code: "DCF 250", title: "Group Child Care Centers", desc: "Full compliance with group childcare center transportation requirements." },
              { code: "DCF 251", title: "Family Child Care Centers", desc: "Meets all family childcare center transportation standards." },
              { code: "DCF 202", title: "Caregiver Background Checks", desc: "Every driver undergoes the full Wisconsin DCF Caregiver Background Check per Wis. Stat. § 48.686." },
            ].map((item) => (
              <div key={item.code} className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-teal">
                <span className="inline-block bg-teal/10 text-teal font-heading font-bold text-sm px-3 py-1 rounded-full mb-4">
                  {item.code}
                </span>
                <h3 className="font-heading font-bold text-navy text-xl mb-2">{item.title}</h3>
                <p className="text-dark/70 leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Driver Vetting */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">
            Driver Vetting Process
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  phase: "Phase 1 — Pre-Hire Screening",
                  items: ["Wisconsin DCF Caregiver Background Check (Wis. Stat. § 48.686)", "Motor Vehicle Records (MVR) check", "Valid driver's license verification"],
                },
                {
                  phase: "Phase 2 — Training & Certification",
                  items: ["Child restraint system training (FMVSS No. 213)", "Loading and unloading procedures", "Behavior management techniques", "Shaken Baby Syndrome / Abusive Head Trauma training (for drivers of children under 5)"],
                },
                {
                  phase: "Phase 3 — Emergency Preparedness",
                  items: ["Emergency evacuation procedures", "Accident response protocol", "Medical emergency response", "Breakdown and unauthorized pickup procedures"],
                },
                {
                  phase: "Phase 4 — Vehicle Operations",
                  items: ["Daily pre-trip inspection protocol", "Post-trip child check protocol", "Child safety alarm system operation", "Vehicle maintenance and cleanliness standards"],
                },
                {
                  phase: "Phase 5 — Road Ready",
                  items: ["Supervised ride-along with experienced driver", "Route familiarization", "Final evaluation and clearance"],
                },
              ].map((phase) => (
                <div key={phase.phase} className="bg-light-gray rounded-2xl p-6">
                  <h3 className="font-heading font-bold text-navy text-lg mb-4">{phase.phase}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li key={item} className="flex gap-3 items-start font-body text-dark/80">
                        <span className="text-teal shrink-0 mt-1">&#10003;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Standards */}
      <section className="bg-light-gray py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">
            Vehicle Standards
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Child safety alarm system — requires physical post-trip walk-through",
              "Age-appropriate child restraint systems (FMVSS No. 213 compliant)",
              "First aid kit on every vehicle",
              "Fire extinguisher on every vehicle",
              "Daily pre-trip inspection before first route",
              "Daily post-trip inspection after final route",
              "Clean, maintained, and smoke-free interior",
              "Proper licensing, registration, and insurance documentation",
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-3">
                <span className="text-orange shrink-0 text-lg mt-0.5">&#9670;</span>
                <span className="font-body text-dark/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Procedures */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-4 text-center">
            Emergency Procedures
          </h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto text-center mb-12 font-body">
            Written procedures for every scenario. Drivers carry a quick-reference guide on every route.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Vehicle Accident", desc: "Immediate child safety assessment, emergency services contact, facility and parent notification protocol." },
              { title: "Medical Emergency", desc: "First aid response, 911 activation, parent and facility notification, medical information on file." },
              { title: "Vehicle Breakdown", desc: "Child safety protocol, backup vehicle dispatch, facility and parent notification." },
              { title: "Emergency Evacuation", desc: "Vehicle evacuation procedure, child headcount, safe assembly point protocol." },
              { title: "Unauthorized Pickup", desc: "Identity verification against authorization form, refusal protocol, immediate facility and parent contact." },
              { title: "Severe Weather", desc: "Route modification or cancellation protocol, shelter-in-place procedure if needed." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-heading font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-dark/70 text-sm leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-dark/60 font-body text-sm">
            Emergency evacuation drills are conducted a minimum of 3 times per year.
          </p>
        </div>
      </section>

      {/* Insurance */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">
            Insurance Coverage
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Commercial Auto Liability", desc: "Comprehensive coverage for all vehicles in our fleet during active routes." },
              { title: "General Liability", desc: "Broad protection for operations, premises, and service delivery." },
              { title: "Workers' Compensation", desc: "Full coverage for all drivers and staff as required by Wisconsin law." },
            ].map((item) => (
              <div key={item.title} className="text-center bg-navy/5 rounded-2xl p-8">
                <div className="w-12 h-12 bg-teal text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-dark/70 text-sm leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-extrabold text-white mb-4">
            Certified. Trained. Trusted. Every Mile.
          </h2>
          <p className="text-white/70 font-body mb-8 max-w-xl mx-auto">
            Have questions about our safety standards? We&apos;re happy to walk you through everything.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange text-white px-8 py-4 rounded-full font-heading font-bold text-lg hover:bg-orange/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
