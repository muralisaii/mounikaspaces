import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsGallery from "@/components/ProjectsGallery";
import DesignProcessSection from "@/components/DesignProcessSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbf9] text-[#1c1917]">
      <CustomCursor />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProjectsGallery />
        <AboutSection />
        <DesignProcessSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
