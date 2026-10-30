import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/content";
import { ArrowDownRight, Compass, ShieldCheck, Ruler, Sparkles, FileDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#fcfbf9] via-[#f7f4ee] to-[#fcfbf9]">
      {/* Subtle architectural background grid / watermark */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1c1917 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Architectural Discipline Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#f3ede1] border border-[#e5dac8] text-[#8a6833] text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-[#b0894e]" />
              <span>Interior Designer &bull; Civil Engineer</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1c1917] leading-[1.12]">
              Where <span className="italic font-normal text-[#b0894e]">structural logic</span> meets timeless interior elegance.
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-[#57534e] max-w-2xl leading-relaxed font-light">
              Hello, I&apos;m <strong className="font-semibold text-[#1c1917]">{siteConfig.name}</strong>.
              Backed by a Civil Engineering degree from Pragati Engineering College and 2+ years of professional practice at RADIEK Company, I bridge the gap between engineering blueprints and breathtaking living environments.
            </p>

            {/* Core Capability Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full pt-2">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/80 border border-[#eae5dc] shadow-2xs">
                <Ruler className="w-4 h-4 text-[#b0894e] shrink-0" />
                <span className="text-xs font-medium text-[#292524]">AutoCAD 2D Drafting</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/80 border border-[#eae5dc] shadow-2xs">
                <Sparkles className="w-4 h-4 text-[#b0894e] shrink-0" />
                <span className="text-xs font-medium text-[#292524]">3D V-Ray Visualization</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/80 border border-[#eae5dc] shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#b0894e] shrink-0" />
                <span className="text-xs font-medium text-[#292524]">Modular Systems & BOQs</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 bg-[#1c1917] hover:bg-[#b0894e] text-white px-7 py-3.5 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 shadow-sm"
              >
                <span>Explore Curated Portfolio</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>
              <a
                href="/portfolio.pdf"
                download="I_LEELA_MOUNIKA_PORTFOLIO.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#f6f3ee] text-[#1c1917] border border-[#dcd6cc] px-5 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 shadow-2xs"
              >
                <FileDown className="w-4 h-4 text-[#b0894e]" />
                <span>Download PDF Dossier</span>
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#57534e] hover:text-[#b0894e] py-3.5 px-3 transition-colors"
              >
                <span>7-Step Workflow &rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Architectural Border */}
              <div className="relative rounded-2xl overflow-hidden border border-[#eae5dc] bg-white p-2 shadow-xl">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#e8e3d8]">
                  <Image
                    src="/images/projects/image_19.jpg"
                    alt="Contemporary Living Room Designed by Leela Mounika"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Showcase Tag in bottom corner */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-card border border-white/30 text-[#1c1917]">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-[#8a6833] uppercase tracking-wider mb-1">
                      <span>Featured Work</span>
                      <span>Contemporary Lounge</span>
                    </div>
                    <p className="text-xs text-[#44403c] font-medium leading-snug">
                      Marble TV wall feature, custom vertical fluted wood panels & integrated ambient cove lighting.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Credential Card */}
              <div className="absolute -top-4 -left-4 sm:-left-6 glass-card p-3.5 rounded-xl shadow-lg border border-[#e5dfd3] max-w-[190px]">
                <div className="text-2xl font-serif font-bold text-[#1c1917]">2+ Years</div>
                <div className="text-[11px] font-medium text-[#78716c] leading-tight">
                  Professional Practice at RADIEK Company
                </div>
              </div>

              {/* Floating Engineering Discipline Badge */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 glass-card p-3.5 rounded-xl shadow-lg border border-[#e5dfd3] max-w-[200px]">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#b0894e]">
                  Technical Edge
                </div>
                <div className="text-xs font-medium text-[#1c1917] mt-0.5">
                  Civil Engineering Rigor + Bespoke Interior Detailing
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Strip */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-[#eae5dc] grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
          <div>
            <div className="font-serif text-3xl font-normal text-[#1c1917]">B.Tech</div>
            <div className="text-xs font-medium text-[#78716c] uppercase tracking-wider mt-1">
              Civil Engineering Graduate
            </div>
            <div className="text-xs text-[#a8a29e] mt-0.5">Pragati Engineering College</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-normal text-[#1c1917]">2+ Years</div>
            <div className="text-xs font-medium text-[#78716c] uppercase tracking-wider mt-1">
              Design Firm Experience
            </div>
            <div className="text-xs text-[#a8a29e] mt-0.5">RADIEK Company</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-normal text-[#1c1917]">5 Tools</div>
            <div className="text-xs font-medium text-[#78716c] uppercase tracking-wider mt-1">
              Mastered Software Suite
            </div>
            <div className="text-xs text-[#a8a29e] mt-0.5">AutoCAD, SketchUp, V-Ray, Enscape, PS</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-normal text-[#1c1917]">100%</div>
            <div className="text-xs font-medium text-[#78716c] uppercase tracking-wider mt-1">
              Accurate On-Site BOQs
            </div>
            <div className="text-xs text-[#a8a29e] mt-0.5">Zero Ambiguity Drafting</div>
          </div>
        </div>
      </div>
    </section>
  );
}
