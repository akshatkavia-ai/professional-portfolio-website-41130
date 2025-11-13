import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { About } from "@/components/About";
import { SkillCard } from "@/components/SkillCard";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { projects, skills } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Section id="projects" title="Projects" subtitle="A selection of work demonstrating craft and impact.">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Section>
        <Section id="about" title="About">
          <About />
        </Section>
        <Section id="skills" title="Skills" subtitle="Core technologies and tools">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <SkillCard key={s.name} skill={s} />
            ))}
          </div>
        </Section>
        <Section id="contact" title="Contact" subtitle="Let's discuss your project or collaboration.">
          <ContactForm />
        </Section>
      </main>
      <Footer />
    </>
  );
}
