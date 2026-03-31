import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.webp"
                alt="Cozy Cruisers"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-heading text-white font-bold text-lg">
                Cozy Cruisers
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Safe Rides to Your Cozy Corner.
              <br />
              Licensed childcare transportation in Milwaukee.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/families", label: "For Families" },
                { href: "/facilities", label: "For Facilities" },
                { href: "/safety", label: "Safety & Compliance" },
                { href: "/about", label: "About Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Milwaukee, Wisconsin</li>
              <li>
                <a
                  href="mailto:info@cozycruisers.com"
                  className="hover:text-white transition-colors"
                >
                  info@cozycruisers.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+14142629127"
                  className="hover:text-white transition-colors"
                >
                  (414) 262-9127
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Compliance
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Wisconsin DCF Licensed</li>
              <li>DCF 250 / 251 / 202 Compliant</li>
              <li>Fully Insured</li>
              <li>Background-Checked Drivers</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Cozy Cruisers LLC. A subsidiary of
            Nana&apos;s Cozy Corner. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Serving Milwaukee metro area families and childcare facilities.
          </p>
        </div>
      </div>
    </footer>
  );
}
