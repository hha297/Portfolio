import { AmbientBackground } from './components/animations/AmbientBackground';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/navigation/Navbar';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { EducationSection } from './components/sections/EducationSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-cyan focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg"
      >
        Skip to content
      </a>
      <AmbientBackground />
      <Navbar />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
