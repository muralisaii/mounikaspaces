"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/content";
import { Menu, X, ArrowUpRight, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Portfolio", href: "#projects" },
    { name: "Philosophy", href: "#about" },
    { name: "Design Process", href: "#process" },
    { name: "Expertise", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-header py-3.5 shadow-sm border-b border-[#eae5dc]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Monogram / Brand */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1c1917] text-[#fcfbf9] flex items-center justify-center font-serif text-lg tracking-wider font-semibold group-hover:bg-[#b0894e] transition-colors">
            LM
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-wide font-medium text-[#1c1917]">
              {siteConfig.shortName}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#78716c] font-medium -mt-0.5">
              Interior & Civil
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#57534e]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#b0894e] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#b0894e] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 text-xs font-medium text-[#78716c] hover:text-[#1c1917] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#b0894e]" />
            <span>{siteConfig.phone}</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1c1917] hover:bg-[#b0894e] text-white px-4 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 shadow-sm"
          >
            <span>Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1c1917] hover:text-[#b0894e] transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-header border-b border-[#eae5dc] px-6 py-6 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#1c1917] hover:text-[#b0894e] py-1 border-b border-[#f1eee8]"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-[#57534e]"
              >
                <Mail className="w-4 h-4 text-[#b0894e]" />
                {siteConfig.email}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center bg-[#1c1917] text-white py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
