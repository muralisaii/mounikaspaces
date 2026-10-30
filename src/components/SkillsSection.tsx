import { skillCategories, softwareTools } from "@/data/content";
import { Cpu, PenTool, LayoutTemplate, Layers, CheckCircle } from "lucide-react";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-[#fcfbf9] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#b0894e] mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1c1917] tracking-tight">
            Software Suite & Specialized Expertise
          </h2>
          <p className="text-[#57534e] text-base mt-2 font-light">
            A comprehensive overview of production software, drafting toolchains, and on-site engineering proficiencies.
          </p>
        </div>

        {/* Software Mastery Cards */}
        <div className="mb-16">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#78716c] mb-6">
            Core Production Software
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {softwareTools.map((tool) => (
              <div
                key={tool.name}
                className="bg-white rounded-2xl p-5 border border-[#eae5dc] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#f6f3ee] text-[#8a6833]">
                      {tool.level}
                    </span>
                    <PenTool className="w-3.5 h-3.5 text-[#b0894e]" />
                  </div>
                  <h4 className="font-serif text-xl font-medium text-[#1c1917]">{tool.name}</h4>
                  <p className="text-xs text-[#8a6833] font-medium mt-0.5">{tool.category}</p>
                </div>
                <p className="text-xs text-[#78716c] mt-4 font-light leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Categories: Spatial & Technical, Materiality, Project Management */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-[#eae5dc] shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#f6f3ee] text-[#b0894e] flex items-center justify-center mb-5">
                  {idx === 0 && <LayoutTemplate className="w-5 h-5" />}
                  {idx === 1 && <Layers className="w-5 h-5" />}
                  {idx === 2 && <Cpu className="w-5 h-5" />}
                </div>

                <h4 className="font-serif text-xl font-medium text-[#1c1917] mb-4">
                  {cat.title}
                </h4>

                <ul className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#57534e]">
                      <CheckCircle className="w-4 h-4 text-[#b0894e] shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#f1ede6] text-[11px] text-[#a8a29e] uppercase tracking-wider font-medium">
                Tested across 2+ Years of Practice
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
