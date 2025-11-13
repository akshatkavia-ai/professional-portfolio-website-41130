import type { Viewport } from "next";
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactForm from "@/components/ContactForm";
import EducationSection from "@/components/EducationSection";
import CertificatesSection from "@/components/CertificatesSection";
import { ClientReveal } from "./_client-reveal";

export const viewport: Viewport = {
  themeColor: "#000000",
};

/**
 * PUBLIC_INTERFACE
 * Home
 * Server component wrapper for the homepage; renders client components where needed.
 */
export default function Home() {
  return (
    <>
      <ClientReveal />
      <section id="home" aria-labelledby="home-heading" className="ocean-gradient">
        <div className="container-pro py-20 md:py-28">
          <h1 id="home-heading" className="visually-hidden">Home</h1>
          <div className="reveal is-visible">
            <Hero />
          </div>
        </div>
      </section>

      <section id="projects" aria-labelledby="projects-heading" className="bg-black">
        <div className="container-pro">
          <h2 id="projects-heading" className="mb-6 relative inline-block">
            <span>Projects</span>
            <span aria-hidden="true" className="absolute left-0 -bottom-1 h-[3px] w-full bg-gradient-to-r from-orange-500/70 to-emerald-600/70 rounded-full"></span>
          </h2>
          <div className="reveal is-visible">
            <ProjectsGrid />
          </div>
        </div>
      </section>

      <section id="skills" aria-labelledby="skills-heading" className="bg-black">
        <div className="container-pro">
          <h2 id="skills-heading" className="mb-6 relative inline-block">
            <span>Skills</span>
            <span aria-hidden="true" className="absolute left-0 -bottom-1 h-[3px] w-full bg-gradient-to-r from-orange-500/70 to-emerald-600/70 rounded-full"></span>
          </h2>
          <div className="reveal is-visible">
            <SkillsGrid />
          </div>
        </div>
      </section>

      <section id="experience" aria-labelledby="experience-heading" className="bg-black">
        <div className="container-pro">
          <h2 id="experience-heading" className="mb-6 relative inline-block">
            <span>Experience</span>
            <span aria-hidden="true" className="absolute left-0 -bottom-1 h-[3px] w-full bg-gradient-to-r from-orange-500/70 to-emerald-600/70 rounded-full"></span>
          </h2>
          <div className="reveal is-visible">
            <ExperienceTimeline />
          </div>
        </div>
      </section>

      <section id="education" aria-labelledby="education-heading" className="bg-black">
        <div className="container-pro">
          <h2 id="education-heading" className="mb-6 relative inline-block">
            <span>Education</span>
            <span aria-hidden="true" className="absolute left-0 -bottom-1 h-[3px] w-full bg-gradient-to-r from-orange-500/70 to-emerald-600/70 rounded-full"></span>
          </h2>
          <div className="reveal is-visible">
            <EducationSection />
          </div>
        </div>
      </section>

      <section id="certificates" aria-labelledby="certificates-heading" className="bg-black">
        <div className="container-pro">
          <h2 id="certificates-heading" className="mb-6 relative inline-block">
            <span>Certificates</span>
            <span aria-hidden="true" className="absolute left-0 -bottom-1 h-[3px] w-full bg-gradient-to-r from-orange-500/70 to-emerald-600/70 rounded-full"></span>
          </h2>
          <div className="reveal is-visible">
            <CertificatesSection />
          </div>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-heading" className="bg-black">
        <div className="container-pro">
          <h2 id="contact-heading" className="mb-6 relative inline-block">
            <span>Contact</span>
            <span aria-hidden="true" className="absolute left-0 -bottom-1 h-[3px] w-full bg-gradient-to-r from-orange-500/70 to-emerald-600/70 rounded-full"></span>
          </h2>
          <div className="reveal is-visible">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
