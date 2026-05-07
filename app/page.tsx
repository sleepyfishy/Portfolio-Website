import { Navbar } from "@/components/portfolio/navbar"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { EducationSection } from "@/components/portfolio/education-section"
{/* import { ExperienceSection } from "@/components/portfolio/experience-section" */}
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { ResumeSection } from "@/components/portfolio/resume-section"
import { Footer } from "@/components/portfolio/footer"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      {/* <ExperienceSection /> */}
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <ResumeSection />
      <Footer />
    </main>
  )
}
