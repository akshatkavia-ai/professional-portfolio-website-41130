"use client";

import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactForm from "@/components/ContactForm";
import EducationSection from "@/components/EducationSection";
import CertificatesSection from "@/components/CertificatesSection";
import { ClientReveal } from "./_client-reveal";

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
          <h2 id="projects-heading" className="mb-10">Projects</h2>
          <div className="reveal">
            <ProjectsGrid />
          </div>
        </div>
      </section>

      <section id="skills" aria-labelledby="skills-heading" className="bg-black">
        <div className="container-pro">
          <h2 id="skills-heading" className="mb-10">Skills</h2>
          <div className="reveal">
            <SkillsGrid />
          </div>
        </div>
      </section>

      <section id="experience" aria-labelledby="experience-heading" className="bg-black">
        <div className="container-pro">
          <h2 id="experience-heading" className="mb-10">Experience</h2>
          <div className="reveal">
            <ExperienceTimeline />
          </div>
        </div>
      </section>

      <section id="education" aria-labelledby="education-heading" className="bg-black">
        <div className="container-pro">
          <h2 id="education-heading" className="mb-10">Education</h2>
          <div className="reveal">
            <EducationSection />
          </div>
        </div>
      </section>

      <section id="certificates" aria-labelledby="certificates-heading" className="bg-black">
        <div className="container-pro">
          <h2 id="certificates-heading" className="mb-10">Certificates</h2>
          <div className="reveal">
            <CertificatesSection />
          </div>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-heading" className="bg-black">
        <div className="container-pro">
          <h2 id="contact-heading" className="mb-10">Contact</h2>
          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
