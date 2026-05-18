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
  title: "For Facilities",
  description:
    "Partner with Cozy Cruisers to add DCF-compliant transportation to your childcare facility. Remove enrollment barriers and serve more families.",
};

export default function FacilitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-mesh" />
        <FloatingShapes />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-6">
              Your Transportation Department.{" "}
              <span className="text-orange">Fully Compliant. Fully Accountable.</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed font-body mb-8">
              Transportation barriers block enrollment. Cozy Cruisers becomes your facility&apos;s
              transportation arm — licensed, insured, and built to the same compliance standard
              you hold yourself to.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-orange text-white px-8 py-4 rounded-full font-heading font-bold text-lg hover:bg-orange/90 transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              Partner With Us
            </Link>
          </div>
        </div>
        <WaveDivider color="#FAF7F2" />
      </section>

      {/* Partnership Model */}
      <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
        <DotPattern />
        <BlobAccent position="top-right" color="teal" size="lg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-4 text-center">
            The Partnership Model
          </h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto text-center mb-12 font-body">
            We don&apos;t replace your care. We extend your reach.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Contracted Routes",
                desc: "We build dedicated AM/PM routes connecting families in your service area to your front door. Consistent, daily, reliable.",
                icon: (
                  <svg className="w-7 h-7 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
                  </svg>
                ),
              },
              {
                title: "Your Brand, Our Buses",
                desc: "Families see a trusted transportation partner endorsed by their childcare provider — not a faceless third party.",
                icon: (
                  <svg className="w-7 h-7 text-teal" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                ),
              },
              {
                title: "Compliance Built In",
                desc: "Every route, driver, and vehicle meets Wisconsin DCF standards. Your facility partnership comes with full documentation.",
                icon: (
                  <svg className="w-7 h-7 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm card-lift relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal/5 rounded-bl-full" />
                <div className="w-14 h-14 bg-cream rounded-xl flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-navy text-xl mb-3">{item.title}</h3>
                <p className="text-dark/70 leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDividerAlt color="#FFFFFF" />

      {/* What We Handle vs. You */}
      <section className="bg-white py-16 md:py-24 relative overflow-hidden">
        <BlobAccent position="center-left" color="teal" size="md" />
        <BlobAccent position="bottom-right" color="orange" size="md" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">
            What Cozy Cruisers Handles
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-teal/10 border-2 border-teal rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-teal/10 rounded-full" />
              <h3 className="font-heading font-bold text-navy text-xl mb-6 flex items-center gap-2">
                <span className="w-10 h-10 bg-teal text-white rounded-full flex items-center justify-center text-lg">&#10003;</span>
                We Handle
              </h3>
              <ul className="space-y-3 font-body text-dark/80 relative">
                {[
                  "All driver hiring, background checks, and training",
                  "Vehicle procurement, inspection, and maintenance",
                  "Route planning within DCF time limits",
                  "Daily pre-trip and post-trip vehicle inspections",
                  "Post-trip child check protocol — every route",
                  "Parent authorization form collection",
                  "Emergency procedure documentation and drills",
                  "Commercial auto liability insurance",
                  "General liability and workers' compensation",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="text-teal shrink-0 mt-1">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-orange/10 border-2 border-orange/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-orange/10 rounded-full" />
              <h3 className="font-heading font-bold text-navy text-xl mb-6 flex items-center gap-2">
                <span className="w-10 h-10 bg-orange text-white rounded-full flex items-center justify-center text-lg">&#9733;</span>
                You Focus On
              </h3>
              <ul className="space-y-3 font-body text-dark/80 relative">
                {[
                  "What you do best — caring for children",
                  "Enrolling families who now have transportation",
                  "Growing your program without logistics overhead",
                  "Coordinating arrival/departure with our drivers",
                  "Communicating transportation availability to families",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="text-orange shrink-0 mt-1">&#9733;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="#F4F4F4" />

      {/* Compliance Documentation */}
      <section className="bg-light-gray py-16 md:py-24 relative overflow-hidden">
        <DotPattern />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-4 text-center">
            Compliance Documentation
          </h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto text-center mb-12 font-body">
            Your licensing depends on your partners meeting the same standards you do. Here&apos;s what we bring to the table.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Childcare Facility Transportation Service Agreement",
              "Proof of DCF Compliance (DCF 250, 251, 202)",
              "Certificate of Commercial Auto Liability Insurance",
              "Certificate of General Liability Insurance",
              "Workers' Compensation Certificate",
              "Driver Background Check Documentation",
              "MVR Reports for All Active Drivers",
              "Vehicle Inspection Logs (Daily)",
              "Emergency Procedures SOP",
              "Parent Transportation Authorization Forms",
              "Driver Training Records",
              "Emergency Evacuation Drill Logs",
            ].map((doc) => (
              <div key={doc} className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-3 card-lift">
                <span className="shrink-0 w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center text-teal text-lg">&#128196;</span>
                <span className="font-body text-dark/80 text-sm pt-2">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Agreement Overview */}
      <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
        <BlobAccent position="center-right" color="teal" size="lg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-orange" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
              </svg>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-6">
              Service Agreement
            </h2>
            <p className="text-dark/70 leading-relaxed font-body mb-8">
              Our Childcare Facility Transportation Service Agreement is a bilateral contract
              built on DCF-compliant terms. It clearly defines responsibilities, insurance
              requirements, route parameters, emergency procedures, and mutual accountability.
              No surprises, no gray areas.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-orange text-white px-8 py-4 rounded-full font-heading font-bold text-lg hover:bg-orange/90 transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              Request a Service Agreement
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 relative overflow-hidden">
        <FloatingShapes />
        <div className="absolute inset-0 hero-mesh" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-extrabold text-white mb-4">
            Remove Your #1 Enrollment Barrier
          </h2>
          <p className="text-white/70 font-body mb-8 max-w-xl mx-auto">
            We&apos;re your transportation department. Fully compliant. Fully accountable.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange text-white px-8 py-4 rounded-full font-heading font-bold text-lg hover:bg-orange/90 transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
          >
            Start a Partnership
          </Link>
        </div>
      </section>
    </>
  );
}
