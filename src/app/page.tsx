
import { HeroSection } from "../components/hero-section"
import { ServicesSection } from "../components/services-section"
import { ExperienceSection } from "../components/experience-section"
import { PortfolioSection } from "../components/portfolio-section"
import { ContactSection } from "../components/contact-section"
import { Nav } from "../components/nav"

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  )
}

