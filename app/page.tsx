import AboutSection from "@/components/AboutSection"
import ContactmeSection from "@/components/ContactmeSection"
import CurriculumVitaeSection from "@/components/CurriculumVitaeSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import ServicesSection from "@/components/ServicesSection"
import TimelineSection from "@/components/TimelineSection"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TimelineSection />
      <ProjectsSection />
      <CurriculumVitaeSection />
      <ContactmeSection />
    </main>
  )
}
