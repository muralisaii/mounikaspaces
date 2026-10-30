import Image from "next/image";
import { aboutContent, education, experience, siteConfig } from "@/data/content";
import { GraduationCap, Briefcase, Award, CheckCircle2, DraftingCompass, Building, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#fcfbf9] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#b0894e] mb-2">
            <DraftingCompass className="w-3.5 h-3.5" />
            <span>Profile & Technical Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1c1917] tracking-tight">
            Bridging Civil Precision with Spatial Warmth
          </h2>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="prose prose-stone max-w-none space-y-5 text-base sm:text-lg text-[#57534e] font-light leading-relaxed">
              <p>
                {aboutContent.intro}
              </p>
              <p className="border-l-2 border-[#b0894e] pl-4 italic text-[#292524] font-normal">
                &ldquo;{aboutContent.philosophy}&rdquo;
              </p>
              <p>
                {aboutContent.approach}
              </p>
            </div>

            {/* Why Civil Engineering Matters In Interior Design */}
            <div className="bg-[#f6f3ee] rounded-2xl p-6 sm:p-8 border border-[#e5dac8]">
              <h3 className="font-serif text-xl font-medium text-[#1c1917] mb-4 flex items-center gap-2.5">
                <Building className="w-5 h-5 text-[#b0894e]" />
                The Civil Engineering Advantage
              </h3>
              <p className="text-sm text-[#57534e] leading-relaxed mb-6 font-light">
                Interior styling without structural awareness often leads to on-site collisions, unfeasible duct runs, and inflated contractor variations. With formal civil engineering training, I ensure every concept is engineered for seamless constructability:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-white/80 p-3.5 rounded-xl border border-[#eae5dc]">
                  <CheckCircle2 className="w-4 h-4 text-[#b0894e] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#1c1917]">Structural Feasibility</h4>
                    <p className="text-[11px] text-[#78716c] mt-0.5">
                      Understanding load spans, column offsets, and lintel clearances.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/80 p-3.5 rounded-xl border border-[#eae5dc]">
                  <CheckCircle2 className="w-4 h-4 text-[#b0894e] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#1c1917]">Conduit & MEP Coordination</h4>
                    <p className="text-[11px] text-[#78716c] mt-0.5">
                      Precision routing of false ceiling AC ducts, plumbing, and 16A electrical loops.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/80 p-3.5 rounded-xl border border-[#eae5dc]">
                  <CheckCircle2 className="w-4 h-4 text-[#b0894e] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#1c1917]">Rigorous BOQ Calculations</h4>
                    <p className="text-[11px] text-[#78716c] mt-0.5">
                      Exact material takeoffs, surface area surveys, and zero budget overruns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/80 p-3.5 rounded-xl border border-[#eae5dc]">
                  <CheckCircle2 className="w-4 h-4 text-[#b0894e] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#1c1917]">Seamless Contractor Rapport</h4>
                    <p className="text-[11px] text-[#78716c] mt-0.5">
                      Speaking the technical language of site supervisors, carpenters, and civil teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Qualities List */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1c1917]">
                Key Professional Attributes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {aboutContent.qualities.map((q, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#44403c] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b0894e]" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Cards & Profile Imagery */}
          <div className="lg:col-span-5 space-y-8">
            {/* Visual Portrait / Render Showcase */}
            <div className="relative rounded-2xl overflow-hidden border border-[#eae5dc] bg-white p-2 shadow-lg">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#e8e3d8]">
                <Image
                  src="/images/projects/image_16.jpg"
                  alt="Modern Bedroom & Wardrobe Suite Designed by Leela Mounika"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-[#f5ede1]">
                    RADIEK Company Project
                  </div>
                  <div className="font-serif text-lg font-normal">
                    Master Wardrobe & Vanity Elevation
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#eae5dc] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#f6f3ee] text-[#b0894e] flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium text-[#1c1917]">Professional Experience</h4>
                  <p className="text-xs text-[#78716c]">Industry Practice</p>
                </div>
              </div>

              {experience.map((exp, idx) => (
                <div key={idx} className="pt-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-[#1c1917]">{exp.role}</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#f6f3ee] text-[#8a6833] font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-[#b0894e] mt-0.5">{exp.company}</div>

                  <ul className="mt-3 space-y-2 text-xs text-[#57534e]">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="text-[#b0894e] font-bold mt-0.5">&bull;</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#eae5dc] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#f6f3ee] text-[#b0894e] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium text-[#1c1917]">Academic Foundation</h4>
                  <p className="text-xs text-[#78716c]">Engineering Degree</p>
                </div>
              </div>

              {education.map((edu, idx) => (
                <div key={idx} className="pt-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-[#1c1917]">{edu.degree}</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#f6f3ee] text-[#8a6833] font-medium">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-[#b0894e] mt-0.5">{edu.institution}</div>
                  <p className="text-xs text-[#57534e] mt-2 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
