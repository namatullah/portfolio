import { EXPERIENCE } from "@/app/ui/constants";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-xs">
        {EXPERIENCE.EXPERINCES.map((exp, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-md font-bold text-gray-900">
                    {exp.POSITION}
                  </h3>
                </div>
              </div>
              <span className="text-blue-600 font-medium">{exp.PERIOD}</span>
            </div>

            <div className="ml-13 mb-5">
              <div className="text-gray-600 font-medium">{exp.COMPANY}</div>
            </div>

            <div className="ml-13">
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                {exp.DESCRIPTION}
              </p>

              {exp.ACHIEVMENT && exp.ACHIEVMENT.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    {EXPERIENCE.RESPONSIBILITIES}
                  </h4>
                  <ul className="space-y-1">
                    {exp.ACHIEVMENT.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-600 text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  {EXPERIENCE.TEACH_USED}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.TECHS.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {index < EXPERIENCE.EXPERINCES.length - 1 && (
              <div className="my-6 border-t border-gray-200"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
