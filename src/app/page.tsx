import Link from "next/link";
import Image from "next/image";

function ShieldIcon() {
  return (
    <svg className="w-8 h-8 text-teal" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
    </svg>
  );
}

function BusIcon() {
  return (
    <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="w-8 h-8 text-teal" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function ChecklistIcon() {
  return (
    <svg className="w-8 h-8 text-orange" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Safe Rides to Your{" "}
                <span className="text-orange">Cozy Corner.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-lg font-body">
                Licensed, DCF-compliant childcare transportation in Milwaukee.
                Every driver background-checked. Every route inspected. Every
                child accounted for.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-orange text-white px-8 py-4 rounded-full font-heading font-bold text-lg text-center hover:bg-orange/90 transition-colors shadow-lg"
                >
                  Get Started
                </Link>
                <Link
                  href="/facilities"
                  className="border-2 border-teal text-teal px-8 py-4 rounded-full font-heading font-bold text-lg text-center hover:bg-teal/10 transition-colors"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in-up-delay">
              <Image
                src="/logo.webp"
                alt="Cozy Cruisers — Safe and Fun Rides"
                width={400}
                height={400}
                className="rounded-full shadow-2xl"
                preload
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-6 border-b border-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-center text-sm font-heading font-semibold text-navy">
            <span className="flex items-center gap-2">
              <span className="text-teal text-lg">&#10003;</span> Wisconsin DCF Licensed
            </span>
            <span className="flex items-center gap-2">
              <span className="text-teal text-lg">&#10003;</span> Background-Checked Drivers
            </span>
            <span className="flex items-center gap-2">
              <span className="text-teal text-lg">&#10003;</span> Fully Insured
            </span>
            <span className="flex items-center gap-2">
              <span className="text-teal text-lg">&#10003;</span> Child Safety Alarm Systems
            </span>
            <span className="flex items-center gap-2">
              <span className="text-teal text-lg">&#10003;</span> Post-Trip Child Check
            </span>
          </div>
        </div>
      </section>

      {/* Why Cozy Cruisers */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-4">
              Why Cozy Cruisers?
            </h2>
            <p className="text-lg text-dark/70 max-w-2xl mx-auto font-body">
              Transportation shouldn&apos;t be the reason a child misses childcare. We built something better.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldIcon />,
                title: "Certified & Compliant",
                desc: "DCF 250, 251, and 202 compliant. Every regulation met, every standard exceeded.",
              },
              {
                icon: <BusIcon />,
                title: "Scheduled & Reliable",
                desc: "Consistent daily routes. AM pickup, PM drop-off. Your child's ride is never in question.",
              },
              {
                icon: <HeartIcon />,
                title: "Community-Rooted",
                desc: "We're not an app. We're your community. Built in Milwaukee, for Milwaukee families.",
              },
              {
                icon: <ChecklistIcon />,
                title: "Zero Left Behind",
                desc: "Post-trip child check protocol on every single route. Child safety alarm systems on every vehicle.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-heading font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-dark/70 text-sm leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-4">
              How It Works
            </h2>
            <p className="text-lg text-dark/70 max-w-xl mx-auto font-body">
              Getting started is simple. We handle the complexity so you don&apos;t have to.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                step: "1",
                title: "Reach Out",
                desc: "Contact us as a parent or childcare facility. We'll learn about your transportation needs and service area.",
              },
              {
                step: "2",
                title: "Get Matched",
                desc: "We build a route plan that fits your schedule, your facility, and DCF requirements — all within safe time limits.",
              },
              {
                step: "3",
                title: "Ride With Confidence",
                desc: "Your child rides with a trained, background-checked driver in a certified, inspected vehicle. Every single day.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-orange text-white rounded-full flex items-center justify-center text-2xl font-heading font-extrabold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-navy text-xl mb-3">{item.title}</h3>
                <p className="text-dark/70 leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-light-gray py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-navy mb-4">
              Trusted by Families & Facilities
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Knowing my daughter has a safe, consistent ride to daycare changed everything for our family.",
                name: "Milwaukee Parent",
              },
              {
                quote: "Cozy Cruisers solved our biggest enrollment barrier. Families who couldn't get here now can.",
                name: "Childcare Center Director",
              },
              {
                quote: "The compliance documentation alone sets them apart. This is a real partner, not just a vendor.",
                name: "Licensed Facility Owner",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-teal text-4xl font-heading mb-4">&ldquo;</div>
                <p className="text-dark/80 italic leading-relaxed font-body mb-6">{t.quote}</p>
                <p className="font-heading font-bold text-navy text-sm">&mdash; {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ready to Ride?
            </h2>
            <p className="text-white/70 text-lg font-body">
              The childcare ride your family can count on.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link
              href="/families"
              className="bg-white/10 border-2 border-teal rounded-2xl p-8 text-center hover:bg-white/15 transition-colors group"
            >
              <h3 className="font-heading text-2xl font-bold text-white mb-3">For Families</h3>
              <p className="text-white/70 font-body mb-6">
                Learn how to enroll your child in safe, scheduled childcare transportation.
              </p>
              <span className="text-orange font-heading font-bold group-hover:underline">
                Learn More &rarr;
              </span>
            </Link>
            <Link
              href="/facilities"
              className="bg-white/10 border-2 border-teal rounded-2xl p-8 text-center hover:bg-white/15 transition-colors group"
            >
              <h3 className="font-heading text-2xl font-bold text-white mb-3">For Facilities</h3>
              <p className="text-white/70 font-body mb-6">
                Partner with us and remove the #1 enrollment barrier for your families.
              </p>
              <span className="text-orange font-heading font-bold group-hover:underline">
                Partner With Us &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
