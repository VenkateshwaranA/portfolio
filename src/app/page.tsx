
import { HeroSection } from "../components/hero-section"
import { Skills } from "../components/skills"
import { ExperienceSection } from "../components/experience-section"
import { PortfolioSection } from "../components/portfolio-section"
import { ContactSection } from "../components/contact-section"
import { Nav } from "../components/nav"

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <HeroSection />
      <Skills />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  )
}

