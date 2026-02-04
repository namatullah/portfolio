import { PROJECT } from "@/app/ui/constants";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

export default function Project() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        {PROJECT.ITEMS.map((project, index) => (
          <div key={index}>
            <div className="p-4 hover:bg-gray-50 rounded-lg transition-colors">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-linear-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                    <Github className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {project.TITLE}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div
                        className={`w-3 h-3 rounded-full ${project.LANGUAGE_COLOR}`}
                      ></div>
                      <span className="text-sm text-gray-600">
                        {project.LANGUAGE}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {project.DESCRIPTION}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.TECHS.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Stats & Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <a
                    href={project.CODE.LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-gray-900 text-white text-xs font-medium rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    {project.CODE.TITLE}
                  </a>

                  {project.DEMO && (
                    <a
                      href={project.DEMO.LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 border border-gray-300 text-gray-700 text-xs font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      {project.DEMO.TITLE}
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Separator line (except for last item) */}
            {index < PROJECT.ITEMS.length - 1 && (
              <hr className="my-4 border-gray-200" />
            )}
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <a
          href="https://github.com/namatullah?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-gray-900 to-gray-700 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          <Github className="w-5 h-5" />
          View All Repositories on GitHub
        </a>
      </div>
    </div>
  );
}
