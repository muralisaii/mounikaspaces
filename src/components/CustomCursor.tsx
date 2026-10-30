"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<"default" | "hover" | "image" | "active">("default");
  const [imageLabel, setImageLabel] = useState<string>("");

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Enable custom cursor on pointer interaction
    setEnabled(true);

    // Inject strict override stylesheet to guarantee default OS cursor is hidden on all desktop elements
    const styleEl = document.createElement("style");
    styleEl.id = "force-hide-os-cursor";
    styleEl.innerHTML = `
      *, *::before, *::after, html, body, a, button, [role="button"], select, summary {
        cursor: none !important;
      }
      input[type="text"], input[type="email"], input[type="tel"], textarea {
        cursor: text !important;
      }
    `;
    document.head.appendChild(styleEl);

    const onMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectImage = target.closest("[data-cursor='image'], .group[onClick], [data-project-card]");
      const interactive = target.closest("a, button, input[type='submit'], select, [role='button'], .cursor-pointer");

      if (projectImage) {
        setCursorState("image");
        setImageLabel("VIEW");
      } else if (interactive) {
        setCursorState("hover");
        setImageLabel("");
      } else {
        setCursorState("default");
        setImageLabel("");
      }
    };

    const onMouseDown = () => setCursorState("active");
    const onMouseUp = () => setCursorState("default");
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Smooth animation loop for the follower ring
    const render = () => {
      // Smooth lerp trailing ring
      const ease = 0.2;
      ringPos.current.x += (pos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);
    rafId.current = requestAnimationFrame(render);

    return () => {
      styleEl.remove();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Precision inner dot: dual stroke (dark core + white perimeter ring) for universal visibility */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "transform" }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            cursorState === "hover"
              ? "w-2.5 h-2.5 bg-white ring-1.5 ring-[#1c1917] shadow-md scale-110"
              : cursorState === "image"
              ? "w-1.5 h-1.5 opacity-0"
              : cursorState === "active"
              ? "w-2 h-2 bg-white ring-2 ring-black scale-90"
              : "w-2.5 h-2.5 bg-[#1c1917] ring-1 ring-white/90 shadow-sm"
          }`}
        />
      </div>

      {/* Outer follower ring: High-contrast architectural lens with crisp white borders & dark depth */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-opacity duration-150 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "transform" }}
      >
        <div
          className={`rounded-full flex items-center justify-center transition-all duration-250 ease-out ${
            cursorState === "hover"
              ? "w-12 h-12 border-2 border-white bg-[#1c1917]/80 backdrop-blur-xs shadow-[0_4px_20px_rgba(0,0,0,0.45),0_0_0_1px_rgba(0,0,0,0.3)] scale-110"
              : cursorState === "image"
              ? "w-16 h-16 border-2 border-white bg-[#1c1917]/90 text-white shadow-2xl backdrop-blur-sm scale-100"
              : cursorState === "active"
              ? "w-7 h-7 border-2 border-white bg-[#1c1917] shadow-md scale-95"
              : "w-8 h-8 border-[1.5px] border-[#1c1917]/60 ring-1 ring-white/80 shadow-xs scale-100"
          }`}
        >
          {cursorState === "image" && (
            <span className="text-[10px] tracking-widest font-semibold uppercase text-white select-none">
              {imageLabel}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
