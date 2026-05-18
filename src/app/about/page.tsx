import type { Metadata } from "next";
import Image from "next/image";
import {
  WaveDivider,
  FloatingShapes,
  DotPattern,
  BlobAccent,
} from "@/components/Decorative";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Cozy Cruisers was born from Nana's Cozy Corner — a licensed Wisconsin childcare provider. Learn our story, mission, and Milwaukee roots.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-mesh" />
        <FloatingShapes />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="relative">
                <div className="absolute -inset-4 bg-teal/20 rounded-full blur-2xl animate-pulse-soft" />
                <Image
                  src="/logo.webp"
                  alt="Cozy Cruisers"
                  width={300}
                  height={300}
                  className="rounded-full shadow-2xl relative"
                />
              </div>
            </div>
          </div>
        </div>
        <WaveDivider color="#FAF7F2" />
      </section>

      {/* Origin Story */}
      <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
        <DotPattern />
        <BlobAccent position="center-right" color="teal" size="lg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-8">
              Our Story
            </h2>
            <div className="space-y-6 font-body text-dark/80 leading-relaxed text-lg">
              <p className="relative pl-6 border-l-4 border-teal">
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
              <p className="relative pl-6 border-l-4 border-orange italic">
                Every policy, every protocol, every route was designed with one question:
                &ldquo;Would we put our own grandchild on this bus?&rdquo; If the answer
                isn&apos;t an immediate yes, it doesn&apos;t happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-navy py-16 md:py-24 relative overflow-hidden">
        <FloatingShapes />
        <div className="absolute inset-0 hero-mesh" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-teal" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
              </svg>
            </div>
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
      <section className="bg-white py-16 md:py-24 relative overflow-hidden">
        <BlobAccent position="top-left" color="teal" size="lg" />
        <BlobAccent position="bottom-right" color="orange" size="md" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                icon: (
                  <svg className="w-8 h-8 text-teal" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                  </svg>
                ),
              },
              {
                title: "53206 Ecosystem",
                desc: "We serve families in Milwaukee's most underserved neighborhoods, where transportation barriers have the greatest impact on childcare access.",
                icon: (
                  <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                ),
              },
              {
                title: "Local Partnerships",
                desc: "We partner with local licensed childcare facilities, building relationships rooted in trust, compliance, and mutual accountability.",
                icon: (
                  <svg className="w-8 h-8 text-teal" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="bg-cream rounded-2xl p-8 card-lift relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-bl-full" />
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-navy text-xl mb-3">{item.title}</h3>
                <p className="text-dark/70 leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="#F4F4F4" />

      {/* Values */}
      <section className="bg-light-gray py-16 md:py-24 relative overflow-hidden">
        <DotPattern />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">
            What We Stand For
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { value: "Safe First, Always", desc: "Safety isn't a marketing line — it's the non-negotiable foundation of everything we do.", color: "teal" },
              { value: "Warm & Community-Rooted", desc: "We're your neighbor, not a corporation. Every interaction reflects genuine care.", color: "orange" },
              { value: "Deeply Compliant", desc: "Compliance isn't a footnote — it's our competitive advantage and your guarantee.", color: "teal" },
              { value: "Reliable Over Flashy", desc: "We don't need to be trendy. We need to show up on time, every time, safely.", color: "orange" },
              { value: "Family-Facing", desc: "Parents trust us with what matters most. We earn that trust every single day.", color: "teal" },
              { value: "Facility-Trusted", desc: "Childcare providers stake their reputation on us. We take that seriously.", color: "orange" },
            ].map((item) => (
              <div key={item.value} className="bg-white rounded-2xl p-6 shadow-sm card-lift gradient-top overflow-hidden">
                <div className={`w-10 h-10 ${item.color === "teal" ? "bg-teal/10" : "bg-orange/10"} rounded-lg flex items-center justify-center mb-4`}>
                  <span className={`${item.color === "teal" ? "text-teal" : "text-orange"} text-xl`}>&#9733;</span>
                </div>
                <h3 className="font-heading font-bold text-navy text-lg mb-2">{item.value}</h3>
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
            From Our Family to Yours — Safely.
          </h2>
          <p className="text-white/70 font-body mb-8">
            We&apos;re not an app. We&apos;re your community.
          </p>
          <a
            href="mailto:CozyCruiserMKE@gmail.com"
            className="inline-block bg-orange text-white px-8 py-4 rounded-full font-heading font-bold text-lg hover:bg-orange/90 transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
