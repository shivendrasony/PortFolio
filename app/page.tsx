import { ModernHeroSection } from "@/components/modern-hero-section"
import { AboutSection } from "@/components/about-section"
import { ModernTechStackSection } from "@/components/modern-tech-stack-section"
import { ModernProjectsSection } from "@/components/modern-projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { ModernNavigation } from "@/components/modern-navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ModernNavigation />
      <ModernHeroSection />
      <AboutSection />
      <ModernTechStackSection />
      <ModernProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
