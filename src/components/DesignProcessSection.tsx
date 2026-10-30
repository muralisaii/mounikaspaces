"use client";

import { useState } from "react";
import { designProcess } from "@/data/content";
import { Workflow, ChevronDown, Check, ArrowRight } from "lucide-react";

export default function DesignProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-24 bg-[#f6f3ee] border-t border-[#eae5dc] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#b0894e] mb-2">
            <Workflow className="w-3.5 h-3.5" />
            <span>Structured Methodology</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1c1917] tracking-tight">
            The 7-Step Architectural Interior Process
          </h2>
          <p className="text-[#57534e] text-base mt-3 font-light">
            A transparent, predictable roadmap from initial discovery to precision cost estimation — ensuring flawless translation of client desires into built reality.
          </p>
        </div>

        {/* Steps Grid / Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Selector List (Left) */}
          <div className="lg:col-span-5 space-y-2">
            {designProcess.map((step, idx) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between cursor-pointer border ${
                  activeStep === idx
                    ? "bg-white border-[#b0894e] shadow-sm text-[#1c1917]"
                    : "bg-white/60 border-transparent hover:bg-white text-[#57534e]"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span
                    className={`font-serif text-sm font-semibold tracking-wider ${
                      activeStep === idx ? "text-[#b0894e]" : "text-[#a8a29e]"
                    }`}
                  >
                    {step.number}
                  </span>
                  <span className="font-medium text-sm sm:text-base">
                    {step.title}
                  </span>
                </div>
                <ArrowRight
                  className={`w-4 h-4 transition-transform ${
                    activeStep === idx ? "text-[#b0894e] translate-x-1" : "text-[#d6cebe]"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Active Step Deep Dive Card (Right) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#eae5dc] shadow-sm relative overflow-hidden">
              {/* Architectural Number Background Watermark */}
              <div className="absolute top-4 right-6 font-serif text-8xl font-bold text-[#f5f0e8] pointer-events-none select-none">
                {designProcess[activeStep].number}
              </div>

              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f6f3ee] text-xs font-semibold uppercase tracking-wider text-[#8a6833]">
                  <span>Phase {designProcess[activeStep].number} of 07</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1c1917]">
                  {designProcess[activeStep].title}
                </h3>

                <p className="text-base text-[#1c1917] font-medium leading-relaxed">
                  {designProcess[activeStep].summary}
                </p>

                <div className="pt-2 text-sm text-[#57534e] font-light leading-relaxed border-t border-[#f1ede6]">
                  {designProcess[activeStep].detail}
                </div>

                {/* Practical Deliverables */}
                <div className="pt-4 bg-[#faf8f5] p-5 rounded-2xl border border-[#eae5dc]">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#b0894e] mb-3">
                    Typical Phase Deliverables
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#57534e]">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#b0894e]" />
                      <span>Formal Client Design Dossier</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#b0894e]" />
                      <span>Review Revisions & Approvals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#b0894e]" />
                      <span>CAD / 3D Asset Package</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#b0894e]" />
                      <span>Site Feasibility Verification</span>
                    </div>
                  </div>
                </div>

                {/* Navigation Between Steps */}
                <div className="pt-4 flex items-center justify-between">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className={`text-xs font-medium uppercase tracking-wider px-4 py-2 rounded-lg cursor-pointer ${
                      activeStep === 0
                        ? "text-[#d6cebe] cursor-not-allowed"
                        : "text-[#57534e] hover:bg-[#f6f3ee]"
                    }`}
                  >
                    &larr; Previous Phase
                  </button>
                  <button
                    disabled={activeStep === designProcess.length - 1}
                    onClick={() =>
                      setActiveStep((prev) => Math.min(designProcess.length - 1, prev + 1))
                    }
                    className={`text-xs font-semibold uppercase tracking-wider px-5 py-2 rounded-full cursor-pointer transition-colors ${
                      activeStep === designProcess.length - 1
                        ? "bg-[#e5dac8] text-[#a8a29e] cursor-not-allowed"
                        : "bg-[#1c1917] hover:bg-[#b0894e] text-white"
                    }`}
                  >
                    Next Phase &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
