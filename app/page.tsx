import Navbar from "./_components/Navbar";
import About from "./_components/pages/About";
import Contact from "./_components/pages/Contact";
import Education from "./_components/pages/Education";
import Experience from "./_components/pages/Experience";
import Project from "./_components/pages/Project";
import Skill from "./_components/pages/Skill";
import Section from "./_components/Section";
import Sidebar from "./_components/Sidebar";

export default function HomePage() {
  return (
    <div className="">
      <Sidebar />

      <div className="lg:ml-80">
        <Navbar />

        <main className="pt-28 px-6 lg:px-10">
          <Section id="about" title="About Me">
            <About />
          </Section>

          <Section id="experience" title="Work Experience">
            <Experience />
          </Section>

          <Section id="skills" title="Skills">
            <Skill />
          </Section>

          <Section id="education" title="Education">
            <Education />
          </Section>

          <Section id="projects" title="Projects">
            <Project />
          </Section>

          <Section id="contact" title="Contact">
            <Contact />
          </Section>
        </main>
      </div>
    </div>
  );
}
