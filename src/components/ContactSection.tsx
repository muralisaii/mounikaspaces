"use client";

import { useState } from "react";
import { siteConfig } from "@/data/content";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Residential Living / Bedroom",
    scope: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate interactive feedback
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#f6f3ee] border-t border-[#eae5dc] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#b0894e] mb-2">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Initiate Consultation</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1c1917] tracking-tight">
                Let&apos;s Design Your Next Space
              </h2>
              <p className="text-[#57534e] text-base mt-3 font-light leading-relaxed">
                Available for full residential & commercial interior design commissions, AutoCAD 2D drafting packages, 3D architectural renderings, and design consultancy.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#eae5dc] shadow-2xs hover:border-[#b0894e] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f6f3ee] text-[#b0894e] flex items-center justify-center shrink-0 group-hover:bg-[#b0894e] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#8a6833]">
                    Direct Email
                  </div>
                  <div className="text-sm font-medium text-[#1c1917]">{siteConfig.email}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 ml-auto text-[#a8a29e] group-hover:text-[#b0894e] transition-colors" />
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#eae5dc] shadow-2xs hover:border-[#b0894e] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f6f3ee] text-[#b0894e] flex items-center justify-center shrink-0 group-hover:bg-[#b0894e] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#8a6833]">
                    Phone / WhatsApp
                  </div>
                  <div className="text-sm font-medium text-[#1c1917]">{siteConfig.phone}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 ml-auto text-[#a8a29e] group-hover:text-[#b0894e] transition-colors" />
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#eae5dc] shadow-2xs">
                <div className="w-12 h-12 rounded-xl bg-[#f6f3ee] text-[#b0894e] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#8a6833]">
                    Location & Regional Reach
                  </div>
                  <div className="text-sm font-medium text-[#1c1917]">{siteConfig.location}</div>
                </div>
              </div>
            </div>

            {/* Turnaround Pledge */}
            <div className="p-5 rounded-2xl bg-[#faf8f5] border border-[#e5dac8] flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#b0894e] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold text-[#1c1917] uppercase tracking-wider">
                  Prompt Inquiries & Quotation Estimates
                </h4>
                <p className="text-xs text-[#57534e] mt-1 leading-relaxed">
                  Design inquiries receive initial evaluation and preliminary schedule review within 24 to 48 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#eae5dc] shadow-sm">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#f3ede1] text-[#b0894e] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#1c1917]">
                    Thank You, Message Received
                  </h3>
                  <p className="text-sm text-[#57534e] max-w-md mx-auto leading-relaxed font-light">
                    Your design brief has been noted. Leela Mounika will review your project requirements and follow up via email or phone shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#1c1917] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#b0894e] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-[#1c1917]">
                      Schedule a Spatial Consultation
                    </h3>
                    <p className="text-xs text-[#78716c] mt-1 font-light">
                      Please share a few details about your property, dimensions, or design aspirations.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403c] mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aditi Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#dcd6cc] bg-[#fcfbf9] text-sm text-[#1c1917] focus:outline-none focus:border-[#b0894e] focus:ring-1 focus:ring-[#b0894e]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403c] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. aditi@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#dcd6cc] bg-[#fcfbf9] text-sm text-[#1c1917] focus:outline-none focus:border-[#b0894e] focus:ring-1 focus:ring-[#b0894e]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403c] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#dcd6cc] bg-[#fcfbf9] text-sm text-[#1c1917] focus:outline-none focus:border-[#b0894e] focus:ring-1 focus:ring-[#b0894e]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403c] mb-2">
                        Project Typology
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#dcd6cc] bg-[#fcfbf9] text-sm text-[#1c1917] focus:outline-none focus:border-[#b0894e] focus:ring-1 focus:ring-[#b0894e]"
                      >
                        <option value="Residential Living / Bedroom">Residential Living / Bedroom</option>
                        <option value="Full Villa Interior Architecture">Full Villa Interior Architecture</option>
                        <option value="Modular Kitchen & Utility">Modular Kitchen & Utility</option>
                        <option value="AutoCAD 2D Drafting & Elevations">AutoCAD 2D Drafting & Elevations</option>
                        <option value="3D V-Ray Visualization">3D V-Ray Visualization</option>
                        <option value="BOQ & Cost Quotations">BOQ & Cost Quotations</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#44403c] mb-2">
                      Brief Message or Spatial Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share your square footage, current property stage, preferred timeline, or specific requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#dcd6cc] bg-[#fcfbf9] text-sm text-[#1c1917] focus:outline-none focus:border-[#b0894e] focus:ring-1 focus:ring-[#b0894e]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#1c1917] hover:bg-[#b0894e] text-white font-medium text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <span>Submit Consultation Request</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-[#a8a29e]">
                    Your personal information is kept completely confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
