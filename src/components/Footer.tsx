"use client";

import Link from "next/link";
import { siteConfig } from "@/data/content";
import { ArrowUp, Mail, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#141312] text-[#e7e2d9] pt-20 pb-12 border-t border-[#292524]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#292524]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#b0894e] text-white flex items-center justify-center font-serif text-lg tracking-wider font-semibold">
                LM
              </div>
              <span className="font-serif text-2xl tracking-wide font-normal text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs uppercase tracking-widest text-[#b0894e] font-semibold">
              Interior Designer &bull; B.Tech Civil Engineer
            </p>
            <p className="text-sm text-[#a8a29e] max-w-sm leading-relaxed font-light">
              Transforming spaces through architectural precision, smart space planning, 2D drafting, and realistic 3D visualizations. 2+ years of professional practice at RADIEK Company.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#a8a29e]">
              <li>
                <Link href="#projects" className="hover:text-[#b0894e] transition-colors">
                  Curated Projects
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#b0894e] transition-colors">
                  Design Philosophy & Experience
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-[#b0894e] transition-colors">
                  7-Step Design Workflow
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-[#b0894e] transition-colors">
                  AutoCAD & Software Suite
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#b0894e] transition-colors">
                  Consultation & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Reach */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Direct Contact
            </h4>
            <div className="space-y-2 text-sm text-[#a8a29e]">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#b0894e] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#b0894e] shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#b0894e] shrink-0" />
                <span>{siteConfig.location}</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-block text-[11px] text-[#78716c]">
                Pragati Engineering College &bull; RADIEK Company Alumna
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716c]">
          <p>
            &copy; 2026 {siteConfig.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#a8a29e] hover:text-[#b0894e] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
