import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Facilities",
  description:
    "Partner with Cozy Cruisers to add DCF-compliant transportation to your childcare facility. Remove enrollment barriers and serve more families.",
};

export default function FacilitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="inline-block bg-orange text-white px-8 py-4 rounded-full font-heading font-bold text-lg hover:bg-orange/90 transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Model */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              },
              {
                title: "Your Brand, Our Buses",
                desc: "Families see a trusted transportation partner endorsed by their childcare provider — not a faceless third party.",
              },
              {
                title: "Compliance Built In",
                desc: "Every route, driver, and vehicle meets Wisconsin DCF standards. Your facility partnership comes with full documentation.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-heading font-bold text-navy text-xl mb-3">{item.title}</h3>
                <p className="text-dark/70 leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Handle vs. You */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">
            What Cozy Cruisers Handles
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-teal/10 border-2 border-teal rounded-2xl p-8">
              <h3 className="font-heading font-bold text-navy text-xl mb-6 flex items-center gap-2">
                <span className="text-teal text-2xl">&#10003;</span> We Handle
              </h3>
              <ul className="space-y-3 font-body text-dark/80">
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
            <div className="bg-orange/10 border-2 border-orange/30 rounded-2xl p-8">
              <h3 className="font-heading font-bold text-navy text-xl mb-6 flex items-center gap-2">
                <span className="text-orange text-2xl">&#9733;</span> You Focus On
              </h3>
              <ul className="space-y-3 font-body text-dark/80">
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

      {/* Compliance Documentation */}
      <section className="bg-light-gray py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div key={doc} className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-3">
                <span className="text-teal shrink-0 text-lg mt-0.5">&#128196;</span>
                <span className="font-body text-dark/80 text-sm">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Agreement Overview */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
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
              className="inline-block bg-orange text-white px-8 py-4 rounded-full font-heading font-bold text-lg hover:bg-orange/90 transition-colors"
            >
              Request a Service Agreement
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-extrabold text-white mb-4">
            Remove Your #1 Enrollment Barrier
          </h2>
          <p className="text-white/70 font-body mb-8 max-w-xl mx-auto">
            We&apos;re your transportation department. Fully compliant. Fully accountable.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange text-white px-8 py-4 rounded-full font-heading font-bold text-lg hover:bg-orange/90 transition-colors"
          >
            Start a Partnership
          </Link>
        </div>
      </section>
    </>
  );
}
