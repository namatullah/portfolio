import ProjectCard from "@/app/_components/ProjectsCard";

export const metadata = {
  title: "Projects | Namatullah Shahbazi",
  description:
    "Selected projects and real-world systems I’ve built as a Full-Stack Developer",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>

      <p className="text-gray-400 max-w-3xl mb-12">
        A selection of real-world, production systems I’ve worked on over the
        past years, focusing on scalability, clean architecture, and
        maintainable code.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard
          title="Modeer – School Management System"
          description="A complete school management platform including student management, finance, reporting, and administration."
          role="Full-Stack Developer"
          tech={[
            "Symfony",
            "React",
            "JavaScript",
            "PHP",
            "MySQL",
            "Docker",
            "Linux",
          ]}
          highlights={[
            "Designed and developed backend APIs",
            "Built admin and management modules",
            "Dockerized development environment",
            "Deployed to Ubuntu production server",
          ]}
        />

        <ProjectCard
          title="NIMS – National Information Management System"
          description="Large-scale national system used for managing and processing government-level information."
          role="Senior Full-Stack Developer"
          tech={["React", "Node.js", "MongoDB", "PHP", "CodeIgniter", "MySQL"]}
          highlights={[
            "Developed scalable backend modules",
            "Integrated frontend and backend systems",
            "Optimized API performance",
            "Led and reviewed work of junior developers",
          ]}
        />

        <ProjectCard
          title="Naqdina – Payment & Top-Up System"
          description="A payment processing and top-up platform built during early JavaScript ecosystem adoption."
          role="Full-Stack Developer"
          tech={["AngularJS", "Node.js", "Express.js", "MongoDB"]}
          highlights={[
            "Built frontend modules with AngularJS",
            "Implemented backend APIs with Node & Express",
            "Designed MongoDB data models",
          ]}
        />
      </div>
    </main>
  );
}
