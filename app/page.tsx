import Navbar from "./_components/Navbar";
import Section from "./_components/Section";
import Sidebar from "./_components/Sidebar";

export default function HomePage() {
  return (
    <main className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 px-10 py-8">
        <Navbar />

        <Section id="about" title="About Me">
          <p className="max-w-3xl text-gray-700 leading-relaxed">
            Full-stack software developer with nearly 9 years of experience
            building scalable platforms, management systems, and modern web
            applications using React, Next.js, Node.js, and PHP ecosystems.
          </p>
        </Section>

        <Section id="skills" title="Skills">
          <p className="text-gray-700">
            React, Next.js, TypeScript, Node.js, Symfony, Laravel,
            MongoDB, PostgreSQL, Docker, Linux
          </p>
        </Section>

        <Section id="experience" title="Work Experience">
          <p className="text-gray-700">
            Modeer, ADRAS LLC, MiDS Consulting — Full-Stack Development,
            architecture, APIs, leadership.
          </p>
        </Section>

        <Section id="projects" title="Projects">
          <p className="text-gray-700">
            School Management System, National Information Management System,
            Payment Platforms.
          </p>
        </Section>

        <Section id="contact" title="Contact">
          <p>Email: namatullah.shahbazi444@gmail.com</p>
        </Section>
      </div>
    </main>
  );
}
