"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/families", label: "For Families" },
  { href: "/facilities", label: "For Facilities" },
  { href: "/safety", label: "Safety & Compliance" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Get Started" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-navy sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.webp"
              alt="Cozy Cruisers logo"
              width={48}
              height={48}
              className="rounded-full"
              preload
            />
            <span className="font-heading text-white font-bold text-lg md:text-xl tracking-tight">
              Cozy Cruisers
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.href === "/contact" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="ml-2 bg-orange text-white px-5 py-2 rounded-full font-heading font-bold text-sm hover:bg-orange/90 transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-white px-3 py-2 rounded-lg text-sm font-body font-medium transition-colors hover:bg-white/10"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 pb-4">
          <div className="px-4 pt-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={
                  link.href === "/contact"
                    ? "block bg-orange text-white text-center px-4 py-3 rounded-full font-heading font-bold mt-3"
                    : "block text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg font-body"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
