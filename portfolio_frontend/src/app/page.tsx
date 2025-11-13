import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <section id="home" aria-labelledby="home-heading" className="ocean-gradient">
        <div className="container-pro py-20 md:py-28">
          <h1 id="home-heading" className="visually-hidden">Home</h1>
          <Hero />
        </div>
      </section>

      <section id="projects" aria-labelledby="projects-heading" className="bg-black">
        <div className="container-pro py-20">
          <h2 id="projects-heading" className="mb-10">Projects</h2>
          <ProjectsGrid />
        </div>
      </section>

      <section id="skills" aria-labelledby="skills-heading" className="bg-black">
        <div className="container-pro py-20">
          <h2 id="skills-heading" className="mb-10">Skills</h2>
          <SkillsGrid />
        </div>
      </section>

      <section id="experience" aria-labelledby="experience-heading" className="bg-black">
        <div className="container-pro py-20">
          <h2 id="experience-heading" className="mb-10">Experience</h2>
          <ExperienceTimeline />
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-heading" className="bg-black">
        <div className="container-pro py-20">
          <h2 id="contact-heading" className="mb-10">Contact</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
