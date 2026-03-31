import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Families",
  description:
    "Safe, scheduled childcare transportation for Milwaukee families. Background-checked drivers, DCF-compliant vehicles, and a ride your child can count on.",
};

export default function FamiliesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-6">
              Your Child&apos;s Ride,{" "}
              <span className="text-orange">Your Peace of Mind.</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed font-body mb-8">
              Your child is in certified, trained, background-checked hands — every single ride.
              Cozy Cruisers provides scheduled daily transportation to and from licensed childcare
              facilities in Milwaukee.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-orange text-white px-8 py-4 rounded-full font-heading font-bold text-lg hover:bg-orange/90 transition-colors"
            >
              Enroll Your Child
            </Link>
          </div>
        </div>
      </section>

      {/* What Parents Need to Know */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">
            What Parents Need to Know
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Who Drives My Child?",
                desc: "Every Cozy Cruisers driver passes a Wisconsin DCF Caregiver Background Check (Wis. Stat. § 48.686), Motor Vehicle Records check, and completes training in child restraints, emergency procedures, loading/unloading, and behavior management.",
              },
              {
                title: "What Vehicles Are Used?",
                desc: "All vehicles are equipped with child safety alarm systems, age-appropriate child restraint systems (FMVSS No. 213 compliant), first aid kits, and fire extinguishers. Every vehicle is inspected daily — before and after each route.",
              },
              {
                title: "How Long Are the Routes?",
                desc: "No single route exceeds 60 minutes each way, per Wisconsin DCF requirements. Routes are planned within a defined service radius to keep your child comfortable and safe.",
              },
              {
                title: "What Happens After Every Ride?",
                desc: "Our drivers complete a mandatory post-trip child check after every single route. The child safety alarm system requires a physical walk-through of the entire vehicle. Zero children left behind — ever.",
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

      {/* How to Enroll */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">
            How to Enroll
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Contact Us", desc: "Reach out through our inquiry form or give us a call." },
              { step: "2", title: "Share Your Needs", desc: "Tell us about your childcare facility, schedule, and pickup location." },
              { step: "3", title: "Complete Authorization", desc: "Fill out the Parent Transportation Authorization Form with emergency contacts and medical info." },
              { step: "4", title: "Start Riding", desc: "Your child is matched to a safe, scheduled daily route with a trained driver." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-teal text-white rounded-full flex items-center justify-center text-xl font-heading font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-dark/70 text-sm leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect on Ride Day */}
      <section className="bg-light-gray py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-8 text-center">
              What to Expect on Ride Day
            </h2>
            <div className="space-y-6">
              {[
                "Your driver arrives at your designated pickup location at the scheduled time.",
                "Your child is safely secured in an age-appropriate child restraint system.",
                "The driver follows the pre-planned route to your child's licensed childcare facility.",
                "Upon arrival, your child is safely escorted and handed off to facility staff.",
                "After every route, the driver completes the post-trip child check — walking the entire vehicle, triggered by the child safety alarm system.",
                "PM routes follow the same process in reverse — facility to home, safely and on time.",
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="shrink-0 w-8 h-8 bg-orange text-white rounded-full flex items-center justify-center text-sm font-heading font-bold">
                    {i + 1}
                  </span>
                  <p className="text-dark/80 leading-relaxed font-body pt-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Is my child safe with a driver I don't know?",
                a: "Every driver undergoes a Wisconsin DCF Caregiver Background Check, MVR screening, and training in child safety, emergency procedures, and behavior management. You'll know who your driver is before the first ride.",
              },
              {
                q: "What if there's an emergency during transport?",
                a: "Every vehicle carries a first aid kit and fire extinguisher. Every driver has written emergency procedures for accidents, medical emergencies, breakdowns, evacuations, and unauthorized pickup attempts. We conduct emergency evacuation drills at least 3 times per year.",
              },
              {
                q: "Can someone else pick up my child?",
                a: "Only individuals listed on the Parent Transportation Authorization Form may receive your child. Any unauthorized pickup attempt triggers our written emergency procedure immediately.",
              },
              {
                q: "What ages do you serve?",
                a: "We transport children enrolled in licensed childcare facilities. Our vehicles are equipped with age-appropriate child restraints (FMVSS No. 213 compliant) for all ages. Drivers transporting children under 5 receive additional Shaken Baby Syndrome / Abusive Head Trauma training.",
              },
              {
                q: "What does it cost?",
                a: "Pricing depends on your route, distance, and schedule. Contact us for a personalized quote — we work with families and facilities to make safe transportation accessible.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-heading font-bold text-navy text-lg mb-2">{item.q}</h3>
                <p className="text-dark/70 leading-relaxed font-body">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-extrabold text-white mb-4">
            From Our Family to Yours — Safely.
          </h2>
          <p className="text-white/70 font-body mb-8 max-w-xl mx-auto">
            Certified. Trained. Trusted. Every mile.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange text-white px-8 py-4 rounded-full font-heading font-bold text-lg hover:bg-orange/90 transition-colors"
          >
            Enroll Your Child Today
          </Link>
        </div>
      </section>
    </>
  );
}
