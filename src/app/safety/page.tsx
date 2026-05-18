import type { Metadata } from "next";
import Link from "next/link";
import {
  WaveDivider,
  WaveDividerAlt,
  FloatingShapes,
  DotPattern,
  BlobAccent,
} from "@/components/Decorative";

export const metadata: Metadata = {
  title: "Safety & Compliance",
  description:
    "Full breakdown of Cozy Cruisers' DCF compliance, driver vetting, vehicle standards, emergency procedures, and insurance coverage.",
};

export default function SafetyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-mesh" />
        <FloatingShapes />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <WaveDivider color="#FAF7F2" />
      </section>

      {/* DCF Compliance */}
      <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
        <DotPattern />
        <BlobAccent position="top-right" color="teal" size="lg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-4 text-center">
            Wisconsin DCF Compliance
          </h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto text-center mb-12 font-body">
            Cozy Cruisers is built from the ground up to meet and exceed Wisconsin Department
            of Children and Families requirements.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { code: "DCF 250", title: "Group Child Care Centers", desc: "Full compliance with group childcare center transportation requirements.", color: "teal" },
              { code: "DCF 251", title: "Family Child Care Centers", desc: "Meets all family childcare center transportation standards.", color: "orange" },
              { code: "DCF 202", title: "Caregiver Background Checks", desc: "Every driver undergoes the full Wisconsin DCF Caregiver Background Check per Wis. Stat. § 48.686.", color: "teal" },
            ].map((item) => (
              <div key={item.code} className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-teal card-lift relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-teal/5 rounded-bl-full" />
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

      <WaveDividerAlt color="#FFFFFF" />

      {/* Driver Vetting */}
      <section className="bg-white py-16 md:py-24 relative overflow-hidden">
        <BlobAccent position="center-right" color="orange" size="lg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">
            Driver Vetting Process
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 relative">
              {/* Vertical timeline line */}
              <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-gradient-to-b from-teal via-orange to-teal opacity-20 hidden md:block" />
              {[
                {
                  phase: "Phase 1 — Pre-Hire Screening",
                  items: ["Wisconsin DCF Caregiver Background Check (Wis. Stat. § 48.686)", "Motor Vehicle Records (MVR) check", "Valid driver's license verification"],
                  icon: "1",
                },
                {
                  phase: "Phase 2 — Training & Certification",
                  items: ["Child restraint system training (FMVSS No. 213)", "Loading and unloading procedures", "Behavior management techniques", "Shaken Baby Syndrome / Abusive Head Trauma training (for drivers of children under 5)"],
                  icon: "2",
                },
                {
                  phase: "Phase 3 — Emergency Preparedness",
                  items: ["Emergency evacuation procedures", "Accident response protocol", "Medical emergency response", "Breakdown and unauthorized pickup procedures"],
                  icon: "3",
                },
                {
                  phase: "Phase 4 — Vehicle Operations",
                  items: ["Daily pre-trip inspection protocol", "Post-trip child check protocol", "Child safety alarm system operation", "Vehicle maintenance and cleanliness standards"],
                  icon: "4",
                },
                {
                  phase: "Phase 5 — Road Ready",
                  items: ["Supervised ride-along with experienced driver", "Route familiarization", "Final evaluation and clearance"],
                  icon: "5",
                },
              ].map((phase) => (
                <div key={phase.phase} className="bg-light-gray rounded-2xl p-6 card-lift relative md:ml-8">
                  <div className="hidden md:flex absolute -left-12 top-6 w-8 h-8 bg-gradient-to-br from-teal to-teal/80 text-white rounded-full items-center justify-center text-sm font-heading font-bold shadow-md z-10">
                    {phase.icon}
                  </div>
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

      <WaveDivider color="#F4F4F4" />

      {/* Vehicle Standards */}
      <section className="bg-light-gray py-16 md:py-24 relative overflow-hidden">
        <DotPattern />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            ].map((item, i) => (
              <div key={item} className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-3 card-lift">
                <span className={`shrink-0 w-10 h-10 ${i % 2 === 0 ? "bg-orange/10" : "bg-teal/10"} rounded-lg flex items-center justify-center`}>
                  <span className={`${i % 2 === 0 ? "text-orange" : "text-teal"} text-lg`}>&#9670;</span>
                </span>
                <span className="font-body text-dark/80 pt-2">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Procedures */}
      <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
        <BlobAccent position="bottom-left" color="teal" size="lg" />
        <BlobAccent position="top-right" color="orange" size="md" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-4 text-center">
            Emergency Procedures
          </h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto text-center mb-12 font-body">
            Written procedures for every scenario. Drivers carry a quick-reference guide on every route.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Vehicle Accident", desc: "Immediate child safety assessment, emergency services contact, facility and parent notification protocol.", icon: "!" },
              { title: "Medical Emergency", desc: "First aid response, 911 activation, parent and facility notification, medical information on file.", icon: "+" },
              { title: "Vehicle Breakdown", desc: "Child safety protocol, backup vehicle dispatch, facility and parent notification.", icon: "~" },
              { title: "Emergency Evacuation", desc: "Vehicle evacuation procedure, child headcount, safe assembly point protocol.", icon: ">" },
              { title: "Unauthorized Pickup", desc: "Identity verification against authorization form, refusal protocol, immediate facility and parent contact.", icon: "X" },
              { title: "Severe Weather", desc: "Route modification or cancellation protocol, shelter-in-place procedure if needed.", icon: "*" },
            ].map((item, i) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm card-lift gradient-top overflow-hidden">
                <div className={`w-12 h-12 ${i % 2 === 0 ? "bg-orange/10" : "bg-teal/10"} rounded-xl flex items-center justify-center mb-4`}>
                  <svg className={`w-6 h-6 ${i % 2 === 0 ? "text-orange" : "text-teal"}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
                  </svg>
                </div>
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

      <WaveDividerAlt color="#FFFFFF" />

      {/* Insurance */}
      <section className="bg-white py-16 md:py-24 relative overflow-hidden">
        <BlobAccent position="center-left" color="teal" size="md" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">
            Insurance Coverage
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Commercial Auto Liability", desc: "Comprehensive coverage for all vehicles in our fleet during active routes." },
              { title: "General Liability", desc: "Broad protection for operations, premises, and service delivery." },
              { title: "Workers' Compensation", desc: "Full coverage for all drivers and staff as required by Wisconsin law." },
            ].map((item) => (
              <div key={item.title} className="text-center bg-navy/5 rounded-2xl p-8 card-lift relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal to-orange" />
                <div className="w-14 h-14 bg-teal/15 text-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
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
      <section className="bg-navy py-16 relative overflow-hidden">
        <FloatingShapes />
        <div className="absolute inset-0 hero-mesh" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-extrabold text-white mb-4">
            Certified. Trained. Trusted. Every Mile.
          </h2>
          <p className="text-white/70 font-body mb-8 max-w-xl mx-auto">
            Have questions about our safety standards? We&apos;re happy to walk you through everything.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange text-white px-8 py-4 rounded-full font-heading font-bold text-lg hover:bg-orange/90 transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
