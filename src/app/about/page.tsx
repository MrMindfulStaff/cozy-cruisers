import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Cozy Cruisers was born from Nana's Cozy Corner — a licensed Wisconsin childcare provider. Learn our story, mission, and Milwaukee roots.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-6">
                Born From a{" "}
                <span className="text-orange">Cozy Corner.</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed font-body">
                Cozy Cruisers didn&apos;t start in a boardroom. It started in a childcare
                center — watching families struggle to get their children to quality care
                because they didn&apos;t have a reliable ride.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/logo.webp"
                alt="Cozy Cruisers"
                width={300}
                height={300}
                className="rounded-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-8">
              Our Story
            </h2>
            <div className="space-y-6 font-body text-dark/80 leading-relaxed text-lg">
              <p>
                Cozy Cruisers LLC is a subsidiary of Nana&apos;s Cozy Corner, a licensed
                Wisconsin childcare provider. We saw firsthand that transportation was the
                single biggest barrier preventing families from accessing quality childcare.
              </p>
              <p>
                Parents working early shifts couldn&apos;t drop off. Single parents juggling
                multiple children couldn&apos;t make the timing work. Families without
                reliable vehicles were left choosing between work and care.
              </p>
              <p>
                So we built the solution ourselves — not an app, not a startup, but a
                community-rooted transportation service designed by childcare professionals
                who understand what families actually need: trust, reliability, and someone
                who genuinely loves kids.
              </p>
              <p>
                Every policy, every protocol, every route was designed with one question:
                &ldquo;Would we put our own grandchild on this bus?&rdquo; If the answer
                isn&apos;t an immediate yes, it doesn&apos;t happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-white/80 leading-relaxed font-body italic">
              &ldquo;Remove transportation barriers that prevent families from accessing
              quality childcare.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-4 text-center">
            Milwaukee-Grounded
          </h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto text-center mb-12 font-body">
            We&apos;re built in Milwaukee, for Milwaukee. Our roots run deep in the
            communities we serve.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Community Infrastructure",
                desc: "Cozy Cruisers isn't a vendor — it's community infrastructure. We exist to make childcare accessible for families who need it most.",
              },
              {
                title: "53206 Ecosystem",
                desc: "We serve families in Milwaukee's most underserved neighborhoods, where transportation barriers have the greatest impact on childcare access.",
              },
              {
                title: "Local Partnerships",
                desc: "We partner with local licensed childcare facilities, building relationships rooted in trust, compliance, and mutual accountability.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-cream rounded-2xl p-8">
                <h3 className="font-heading font-bold text-navy text-xl mb-3">{item.title}</h3>
                <p className="text-dark/70 leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-light-gray py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">
            What We Stand For
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { value: "Safe First, Always", desc: "Safety isn't a marketing line — it's the non-negotiable foundation of everything we do." },
              { value: "Warm & Community-Rooted", desc: "We're your neighbor, not a corporation. Every interaction reflects genuine care." },
              { value: "Deeply Compliant", desc: "Compliance isn't a footnote — it's our competitive advantage and your guarantee." },
              { value: "Reliable Over Flashy", desc: "We don't need to be trendy. We need to show up on time, every time, safely." },
              { value: "Family-Facing", desc: "Parents trust us with what matters most. We earn that trust every single day." },
              { value: "Facility-Trusted", desc: "Childcare providers stake their reputation on us. We take that seriously." },
            ].map((item) => (
              <div key={item.value} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-heading font-bold text-navy text-lg mb-2">{item.value}</h3>
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
            From Our Family to Yours — Safely.
          </h2>
          <p className="text-white/70 font-body mb-8">
            We&apos;re not an app. We&apos;re your community.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange text-white px-8 py-4 rounded-full font-heading font-bold text-lg hover:bg-orange/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
