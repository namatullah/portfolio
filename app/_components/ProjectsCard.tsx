type ProjectCardProps = {
  title: string;
  description: string;
  role: string;
  tech: string[];
  highlights: string[];
};

export default function ProjectCard({
  title,
  description,
  role,
  tech,
  highlights,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-indigo-500 transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="text-gray-400 mb-4">{description}</p>

      <p className="text-sm text-indigo-400 mb-4">Role: {role}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 text-sm bg-gray-800 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>

      <ul className="list-disc list-inside space-y-2 text-gray-300">
        {highlights.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
