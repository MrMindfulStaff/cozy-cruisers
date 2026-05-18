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
  title: "For Families",
  description:
    "Safe, scheduled childcare transportation for Milwaukee families. Background-checked drivers, DCF-compliant vehicles, and a ride your child can count on.",
};

export default function FamiliesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-mesh" />
        <FloatingShapes />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="inline-block bg-orange text-white px-8 py-4 rounded-full font-heading font-bold text-lg hover:bg-orange/90 transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              Enroll Your Child
            </Link>
          </div>
        </div>
        <WaveDivider color="#FAF7F2" />
      </section>

      {/* What Parents Need to Know */}
      <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
        <DotPattern />
        <BlobAccent position="top-right" color="teal" size="lg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">
            What Parents Need to Know
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Who Drives My Child?",
                desc: "Every Cozy Cruisers driver passes a Wisconsin DCF Caregiver Background Check (Wis. Stat. § 48.686), Motor Vehicle Records check, and completes training in child restraints, emergency procedures, loading/unloading, and behavior management.",
                icon: (
                  <svg className="w-7 h-7 text-teal" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                ),
              },
              {
                title: "What Vehicles Are Used?",
                desc: "All vehicles are equipped with child safety alarm systems, age-appropriate child restraint systems (FMVSS No. 213 compliant), first aid kits, and fire extinguishers. Every vehicle is inspected daily — before and after each route.",
                icon: (
                  <svg className="w-7 h-7 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
                  </svg>
                ),
              },
              {
                title: "How Long Are the Routes?",
                desc: "No single route exceeds 60 minutes each way, per Wisconsin DCF requirements. Routes are planned within a defined service radius to keep your child comfortable and safe.",
                icon: (
                  <svg className="w-7 h-7 text-teal" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                ),
              },
              {
                title: "What Happens After Every Ride?",
                desc: "Our drivers complete a mandatory post-trip child check after every single route. The child safety alarm system requires a physical walk-through of the entire vehicle. Zero children left behind — ever.",
                icon: (
                  <svg className="w-7 h-7 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" />
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

      {/* How to Enroll */}
      <section className="bg-white py-16 md:py-24 relative overflow-hidden">
        <BlobAccent position="center-left" color="orange" size="lg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">
            How to Enroll
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-teal via-orange to-teal opacity-20" />
            {[
              { step: "1", title: "Contact Us", desc: "Reach out through our inquiry form or give us a call." },
              { step: "2", title: "Share Your Needs", desc: "Tell us about your childcare facility, schedule, and pickup location." },
              { step: "3", title: "Complete Authorization", desc: "Fill out the Parent Transportation Authorization Form with emergency contacts and medical info." },
              { step: "4", title: "Start Riding", desc: "Your child is matched to a safe, scheduled daily route with a trained driver." },
            ].map((item) => (
              <div key={item.step} className="text-center relative">
                <div className="w-12 h-12 bg-gradient-to-br from-teal to-teal/80 text-white rounded-full flex items-center justify-center text-xl font-heading font-bold mx-auto mb-4 shadow-lg relative z-10">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-dark/70 text-sm leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="#F4F4F4" />

      {/* What to Expect on Ride Day */}
      <section className="bg-light-gray py-16 md:py-24 relative overflow-hidden">
        <DotPattern />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-8 text-center">
              What to Expect on Ride Day
            </h2>
            <div className="space-y-4">
              {[
                "Your driver arrives at your designated pickup location at the scheduled time.",
                "Your child is safely secured in an age-appropriate child restraint system.",
                "The driver follows the pre-planned route to your child's licensed childcare facility.",
                "Upon arrival, your child is safely escorted and handed off to facility staff.",
                "After every route, the driver completes the post-trip child check — walking the entire vehicle, triggered by the child safety alarm system.",
                "PM routes follow the same process in reverse — facility to home, safely and on time.",
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start bg-white rounded-xl p-5 shadow-sm card-lift">
                  <span className="shrink-0 w-10 h-10 bg-gradient-to-br from-orange to-orange/80 text-white rounded-full flex items-center justify-center text-sm font-heading font-bold shadow-md">
                    {i + 1}
                  </span>
                  <p className="text-dark/80 leading-relaxed font-body pt-1.5">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
        <BlobAccent position="bottom-right" color="teal" size="lg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div key={item.q} className="bg-white rounded-2xl p-6 shadow-sm card-lift gradient-top overflow-hidden">
                <h3 className="font-heading font-bold text-navy text-lg mb-2">{item.q}</h3>
                <p className="text-dark/70 leading-relaxed font-body">{item.a}</p>
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
            From Our Family to Yours — Safely.
          </h2>
          <p className="text-white/70 font-body mb-8 max-w-xl mx-auto">
            Certified. Trained. Trusted. Every mile.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange text-white px-8 py-4 rounded-full font-heading font-bold text-lg hover:bg-orange/90 transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
          >
            Enroll Your Child Today
          </Link>
        </div>
      </section>
    </>
  );
}
