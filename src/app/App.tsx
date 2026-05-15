import { AboutSection } from "../widgets/about/AboutSection";
import { ContactSection } from "../widgets/contact/ContactSection";
import { ExperienceSection } from "../widgets/experience/ExperienceSection";
import { Footer } from "../widgets/footer/Footer";
import { Header } from "../widgets/header/Header";
import { HeroSection } from "../widgets/hero/HeroSection";
import { ResumeSection } from "../widgets/resume/ResumeSection";
import { SelectedWorkSection } from "../widgets/selected-work/SelectedWorkSection";
import { StrengthsSection } from "../widgets/strengths/StrengthsSection";
import { TechStackSection } from "../widgets/tech-stack/TechStackSection";

export function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        본문으로 이동
      </a>
      <Header />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <StrengthsSection />
        <ExperienceSection />
        <SelectedWorkSection />
        <TechStackSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
