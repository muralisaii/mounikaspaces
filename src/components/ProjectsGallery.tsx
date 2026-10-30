"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { projects2DData, projects3DData, ProjectItem } from "@/data/content";
import {
  Eye,
  Layers,
  Compass,
  X,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Sparkles,
  Maximize2,
  ZoomIn,
  Ruler,
  Cuboid,
} from "lucide-react";

export default function ProjectsGallery() {
  const [activeSection, setActiveSection] = useState<"all" | "3d" | "2d">("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeModalImage, setActiveModalImage] = useState<string>("");
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const openProjectModal = (project: ProjectItem) => {
    setSelectedProject(project);
    setActiveModalImage(project.coverImage || project.images[0]);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setActiveModalImage("");
    setFullscreenImage(null);
  };

  // Prevent background body scrolling when modal or fullscreen is active
  useEffect(() => {
    if (selectedProject || fullscreenImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject, fullscreenImage]);

  // Keyboard navigation (Esc to close, Left/Right arrow to cycle images)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (fullscreenImage) {
          setFullscreenImage(null);
        } else if (selectedProject) {
          closeModal();
        }
      } else if (selectedProject && selectedProject.images.length > 1) {
        const currentImg = fullscreenImage || activeModalImage || selectedProject.coverImage;
        const currentIndex = selectedProject.images.indexOf(currentImg);
        if (e.key === "ArrowRight") {
          const nextIndex = (currentIndex + 1) % selectedProject.images.length;
          const nextImg = selectedProject.images[nextIndex];
          if (fullscreenImage) setFullscreenImage(nextImg);
          setActiveModalImage(nextImg);
        } else if (e.key === "ArrowLeft") {
          const prevIndex =
            (currentIndex - 1 + selectedProject.images.length) % selectedProject.images.length;
          const prevImg = selectedProject.images[prevIndex];
          if (fullscreenImage) setFullscreenImage(prevImg);
          setActiveModalImage(prevImg);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, activeModalImage, fullscreenImage]);

  const handleNextImage = () => {
    if (!selectedProject) return;
    const currentImg = fullscreenImage || activeModalImage || selectedProject.coverImage;
    const currentIndex = selectedProject.images.indexOf(currentImg);
    const nextIndex = (currentIndex + 1) % selectedProject.images.length;
    const nextImg = selectedProject.images[nextIndex];
    if (fullscreenImage) setFullscreenImage(nextImg);
    setActiveModalImage(nextImg);
  };

  const handlePrevImage = () => {
    if (!selectedProject) return;
    const currentImg = fullscreenImage || activeModalImage || selectedProject.coverImage;
    const currentIndex = selectedProject.images.indexOf(currentImg);
    const prevIndex =
      (currentIndex - 1 + selectedProject.images.length) % selectedProject.images.length;
    const prevImg = selectedProject.images[prevIndex];
    if (fullscreenImage) setFullscreenImage(prevImg);
    setActiveModalImage(prevImg);
  };

  return (
    <section id="projects" className="py-24 bg-[#faf8f5] border-t border-[#eae5dc] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#b0894e] mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Curated Portfolio Archive</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1c1917] tracking-tight">
              Design Visualizations & Technical Blueprints
            </h2>
            <p className="text-[#57534e] text-base mt-2 max-w-2xl font-light">
              Separated into dedicated 3D photorealistic visualization suites and millimeter-precise 2D AutoCAD technical blueprints. All matter and specifications are curated into descriptive architectural cards.
            </p>
          </div>

          {/* Section Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveSection("all")}
              className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                activeSection === "all"
                  ? "bg-[#1c1917] text-white shadow-sm"
                  : "bg-white text-[#57534e] hover:text-[#1c1917] hover:bg-[#ede8df] border border-[#e5dac8]"
              }`}
            >
              All Projects ({projects3DData.length + projects2DData.length})
            </button>
            <button
              onClick={() => setActiveSection("3d")}
              className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                activeSection === "3d"
                  ? "bg-[#1c1917] text-white shadow-sm"
                  : "bg-white text-[#57534e] hover:text-[#1c1917] hover:bg-[#ede8df] border border-[#e5dac8]"
              }`}
            >
              <Cuboid className="w-3.5 h-3.5 text-[#b0894e]" />
              <span>3D Visualizations ({projects3DData.length})</span>
            </button>
            <button
              onClick={() => setActiveSection("2d")}
              className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                activeSection === "2d"
                  ? "bg-[#1c1917] text-white shadow-sm"
                  : "bg-white text-[#57534e] hover:text-[#1c1917] hover:bg-[#ede8df] border border-[#e5dac8]"
              }`}
            >
              <Ruler className="w-3.5 h-3.5 text-[#b0894e]" />
              <span>2D Technical CAD ({projects2DData.length})</span>
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* SECTION 1: 3D PHOTOREALISTIC VISUALIZATIONS & RENDERS           */}
        {/* ============================================================== */}
        {(activeSection === "all" || activeSection === "3d") && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-[#eae5dc]">
              <div className="w-8 h-8 rounded-lg bg-[#f6f3ee] text-[#b0894e] flex items-center justify-center">
                <Cuboid className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-medium text-[#1c1917]">
                  3D Photorealistic Interior Visualizations
                </h3>
                <p className="text-xs text-[#78716c]">
                  Raytraced lighting simulations, material shaders, and spatial perspectives created in SketchUp, V-Ray &amp; Enscape
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects3DData.map((project) => (
                <div
                  key={project.id}
                  onClick={() => openProjectModal(project)}
                  data-cursor="image"
                  className="group bg-white rounded-2xl overflow-hidden border border-[#eae5dc] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
                >
                  {/* 3D Photorealistic Render Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#181615]">
                    {/* Ambient blurred backlight */}
                    <Image
                      src={project.coverImage}
                      alt=""
                      fill
                      className="object-cover blur-lg opacity-40 scale-110"
                    />
                    {/* Crisp 3D render */}
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent group-hover:opacity-85 transition-opacity duration-300" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full glass-card text-[11px] font-semibold text-[#1c1917] tracking-wide uppercase shadow-xs">
                      {project.category}
                    </div>

                    {/* Hover Quick Action */}
                    <div className="absolute bottom-4 right-4 z-20 px-3.5 py-1.5 rounded-full bg-black/80 text-white flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md text-xs">
                      <ZoomIn className="w-3.5 h-3.5 text-[#b0894e]" />
                      <span>View Full Screen</span>
                    </div>
                  </div>

                  {/* Card Meta Content */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h4 className="font-serif text-xl font-medium text-[#1c1917] group-hover:text-[#b0894e] transition-colors leading-snug">
                        {project.title}
                      </h4>
                      <p className="text-xs text-[#78716c] mt-1.5 line-clamp-2 leading-relaxed">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Materials Tags & Spec bar */}
                    <div className="mt-5 pt-4 border-t border-[#f1ede6]">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.materials.slice(0, 3).map((mat, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded bg-[#f6f3ee] text-[#57534e] font-medium"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs text-[#8a6833] font-medium">
                        <span className="flex items-center gap-1">
                          <Layers className="w-3.5 h-3.5" />
                          {project.specs.style || project.specs.area}
                        </span>
                        <span className="inline-flex items-center text-[#1c1917] group-hover:text-[#b0894e] group-hover:translate-x-0.5 transition-all">
                          Inspect Render <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* SECTION 2: 2D ARCHITECTURAL DRAFTING & CAD BLUEPRINTS           */}
        {/* ============================================================== */}
        {(activeSection === "all" || activeSection === "2d") && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-[#eae5dc]">
              <div className="w-8 h-8 rounded-lg bg-[#f6f3ee] text-[#b0894e] flex items-center justify-center">
                <Ruler className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-medium text-[#1c1917]">
                  2D Architectural Drafting &amp; AutoCAD Blueprints
                </h3>
                <p className="text-xs text-[#78716c]">
                  Detailed space planning layouts, wall elevations, joinery sections, and modular kitchen technical drawings
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects2DData.map((project) => (
                <div
                  key={project.id}
                  onClick={() => openProjectModal(project)}
                  data-cursor="image"
                  className="group bg-white rounded-2xl overflow-hidden border border-[#eae5dc] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
                >
                  {/* Technical CAD Drawing Frame - 100% visible, fully contained, zero cropped dimensions */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#faf8f5] border-b border-[#eae5dc] p-3 sm:p-5 flex items-center justify-center group/cad">
                    {/* Architectural drafting paper background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#f8f5ef] to-[#f2ece1] opacity-70" />
                    
                    {/* Full drawing visible with clean containment */}
                    <div className="relative w-full h-full flex items-center justify-center z-10">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain drop-shadow-sm transition-transform duration-500 group-hover/cad:scale-[1.02]"
                      />
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-white/95 text-[#1c1917] border border-[#e5dac8] text-[11px] font-semibold tracking-wide uppercase shadow-xs backdrop-blur-xs">
                      {project.category}
                    </div>

                    {/* Hover Quick Action */}
                    <div className="absolute bottom-4 right-4 z-20 px-3.5 py-1.5 rounded-full bg-[#1c1917] text-white flex items-center gap-1.5 opacity-0 group-hover/cad:opacity-100 transition-opacity duration-300 shadow-md text-xs">
                      <ZoomIn className="w-3.5 h-3.5 text-[#b0894e]" />
                      <span>Inspect Drawing</span>
                    </div>
                  </div>

                  {/* Card Meta Content */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h4 className="font-serif text-xl font-medium text-[#1c1917] group-hover:text-[#b0894e] transition-colors leading-snug">
                        {project.title}
                      </h4>
                      <p className="text-xs text-[#78716c] mt-1.5 line-clamp-2 leading-relaxed">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Materials Tags & Spec bar */}
                    <div className="mt-5 pt-4 border-t border-[#f1ede6]">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.materials.slice(0, 3).map((mat, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded bg-[#f6f3ee] text-[#57534e] font-medium"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs text-[#8a6833] font-medium">
                        <span className="flex items-center gap-1">
                          <Layers className="w-3.5 h-3.5" />
                          {project.specs.style || project.specs.area}
                        </span>
                        <span className="inline-flex items-center text-[#1c1917] group-hover:text-[#b0894e] group-hover:translate-x-0.5 transition-all">
                          Inspect Blueprint <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ARCHITECTURAL PROJECT DETAILS MODAL                             */}
        {/* ============================================================== */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-3xl overflow-hidden max-w-5xl w-full max-h-[94vh] flex flex-col shadow-2xl border border-[#eae5dc] relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="px-6 py-4 border-b border-[#eae5dc] flex items-center justify-between bg-[#fcfbf9]">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#b0894e]">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1c1917]">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Top-Right Close X Button */}
                <button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-[#f1ede6] hover:bg-[#1c1917] text-[#57534e] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body: Scrollable */}
              <div className="overflow-y-auto flex-1 p-5 sm:p-8 space-y-8">
                {/* Main Image Stage: Full View on dark canvas + Click to Fullscreen */}
                <div>
                  <div
                    onClick={() =>
                      setFullscreenImage(activeModalImage || selectedProject.coverImage)
                    }
                    className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-[#181615] border border-[#2a2725] cursor-zoom-in group/stage shadow-inner"
                    title="Click to view full screen"
                  >
                    {/* Ambient Blurred Background Fill (eliminates all black side bars) */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <Image
                        src={activeModalImage || selectedProject.coverImage}
                        alt="Ambient backdrop"
                        fill
                        className="object-cover blur-3xl opacity-50 scale-125 transform-gpu"
                        priority
                      />
                      <div className="absolute inset-0 bg-black/30 backdrop-blur-xs" />
                    </div>

                    {/* Crisp Centered Foreground Image */}
                    <div className="relative w-full h-full flex items-center justify-center p-3 z-10">
                      <Image
                        src={activeModalImage || selectedProject.coverImage}
                        alt={selectedProject.title}
                        fill
                        priority
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        className="object-contain drop-shadow-2xl transition-transform duration-300 group-hover/stage:scale-[1.01]"
                      />
                    </div>

                    {/* Fullscreen Trigger Overlay Pill */}
                    <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full bg-black/75 hover:bg-[#b0894e] text-white text-xs font-medium flex items-center gap-1.5 backdrop-blur-xs transition-colors shadow-md">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Click to view full screen</span>
                    </div>

                    {/* Image Indicator tag */}
                    <div className="absolute bottom-4 left-4 z-20 px-3 py-1 rounded-full bg-black/70 text-white/90 text-[11px] font-mono tracking-wider backdrop-blur-xs">
                      {selectedProject.images.indexOf(activeModalImage || selectedProject.coverImage) +
                        1}{" "}
                      / {selectedProject.images.length}
                    </div>
                  </div>
                  <p className="text-[11px] text-center text-[#78716c] mt-2">
                    Click the image above to open high-resolution full screen view.
                  </p>
                </div>

                {/* Image Thumbnails Strip */}
                {selectedProject.images.length > 1 && (
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#78716c] block mb-2">
                      Available Drawings &amp; View Sheets ({selectedProject.images.length})
                    </span>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {selectedProject.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveModalImage(img)}
                          className={`relative w-28 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                            selectedProject.id.startsWith("2d") ? "bg-[#faf8f5]" : "bg-[#181615]"
                          } ${
                            (activeModalImage || selectedProject.coverImage) === img
                              ? "border-[#b0894e] ring-2 ring-[#b0894e]/40 scale-102"
                              : "border-[#e5dac8] opacity-75 hover:opacity-100"
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`Sheet ${idx + 1}`}
                            fill
                            sizes="112px"
                            className={selectedProject.id.startsWith("2d") ? "object-contain p-1.5" : "object-cover"}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Description Narrative (Clean HTML Text Moved from Slides) */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1c1917] mb-2">
                    Spatial Concept &amp; Architectural Description
                  </h4>
                  <p className="text-sm sm:text-base text-[#57534e] leading-relaxed font-light">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Two Column Specs: Scope of Work & Material Specifications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#f1ede6]">
                  {/* Scope of Work */}
                  <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#eae5dc]">
                    <h5 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1c1917] mb-3">
                      <CheckCircle2 className="w-4 h-4 text-[#b0894e]" />
                      Scope of Execution
                    </h5>
                    <ul className="space-y-2 text-xs text-[#57534e]">
                      {selectedProject.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#b0894e] font-bold">&bull;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Materials & Hardware */}
                  <div className="bg-[#faf8f5] p-5 rounded-2xl border border-[#eae5dc]">
                    <h5 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1c1917] mb-3">
                      <Sparkles className="w-4 h-4 text-[#b0894e]" />
                      Materiality &amp; Specifications
                    </h5>
                    <ul className="space-y-2 text-xs text-[#57534e]">
                      {selectedProject.materials.map((mat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#b0894e] font-bold">&bull;</span>
                          <span>{mat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technical Specifications bar */}
                <div className="bg-[#f6f3ee] p-4 rounded-xl border border-[#e5dac8] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  {selectedProject.specs.area && (
                    <div>
                      <span className="text-[#8a6833] font-semibold block uppercase text-[10px]">Area</span>
                      <span className="text-[#1c1917] font-medium">{selectedProject.specs.area}</span>
                    </div>
                  )}
                  {selectedProject.specs.style && (
                    <div>
                      <span className="text-[#8a6833] font-semibold block uppercase text-[10px]">Style</span>
                      <span className="text-[#1c1917] font-medium">{selectedProject.specs.style}</span>
                    </div>
                  )}
                  {selectedProject.specs.software && (
                    <div>
                      <span className="text-[#8a6833] font-semibold block uppercase text-[10px]">Software</span>
                      <span className="text-[#1c1917] font-medium">{selectedProject.specs.software}</span>
                    </div>
                  )}
                  {selectedProject.specs.status && (
                    <div>
                      <span className="text-[#8a6833] font-semibold block uppercase text-[10px]">Status</span>
                      <span className="text-[#1c1917] font-medium">{selectedProject.specs.status}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-[#eae5dc] bg-[#fcfbf9] flex items-center justify-between">
                <span className="text-xs text-[#78716c]">
                  Autodesk AutoCAD &bull; SketchUp V-Ray &bull; RADIEK Company Alumna
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      setFullscreenImage(activeModalImage || selectedProject.coverImage)
                    }
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#dcd6cc] bg-white text-xs font-semibold uppercase tracking-wider text-[#1c1917] hover:bg-[#f6f3ee] transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>VIEW FULL SCREEN</span>
                  </button>
                  <a
                    href="#contact"
                    onClick={closeModal}
                    className="inline-flex items-center gap-1.5 bg-[#1c1917] hover:bg-[#b0894e] text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    Inquire About This Design
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* DEDICATED FULLSCREEN LIGHTBOX (WITH TOP-RIGHT X)                */}
        {/* ============================================================== */}
        {fullscreenImage && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 animate-fadeIn"
            onClick={() => setFullscreenImage(null)}
          >
            {/* Prominent High-Contrast Close X Button at Top Right Corner */}
            <button
              onClick={() => setFullscreenImage(null)}
              className="fixed top-6 right-6 z-[110] w-12 h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xl border border-white/30"
              aria-label="Close full screen view"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows for Cycling Views */}
            {selectedProject && selectedProject.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                  className="fixed left-6 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full bg-white/15 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all cursor-pointer shadow-xl border border-white/20"
                  aria-label="Previous sheet"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                  className="fixed right-6 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full bg-white/15 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all cursor-pointer shadow-xl border border-white/20"
                  aria-label="Next sheet"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Full Screen Image Display with Ambient Blurred Background Fill */}
            <div
              className="relative w-full h-[88vh] max-w-7xl flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Ambient Blurred Background Fill - Eliminates all black side voids */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Image
                  src={fullscreenImage}
                  alt="Ambient backdrop"
                  fill
                  className="object-cover blur-3xl opacity-40 scale-125 transform-gpu"
                  priority
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
              </div>

              {/* Crisp Foreground Image */}
              <div className="relative w-full h-full flex items-center justify-center p-4 z-10">
                <Image
                  src={fullscreenImage}
                  alt={selectedProject?.title || "Full Screen View"}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain drop-shadow-2xl select-none"
                />
              </div>
            </div>

            {/* Bottom Caption & Controls (Without "100% FULL UNCROPPED VIEW" text) */}
            {selectedProject && (
              <div
                className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] px-6 py-2.5 rounded-full bg-black/85 border border-white/20 text-white flex items-center gap-4 text-xs backdrop-blur-md shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="font-serif font-medium text-sm text-[#f5ede1]">
                  {selectedProject.title}
                </span>
                <span className="text-white/40">&bull;</span>
                <span className="text-[#d6cebe]">
                  Sheet {selectedProject.images.indexOf(fullscreenImage) + 1} of{" "}
                  {selectedProject.images.length}
                </span>
                <span className="text-white/40">&bull;</span>
                <span className="text-[11px] text-[#a8a29e]">Press Esc to close</span>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
