import { SKILL } from "@/app/ui/constants";

export default function Skill() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="mb-8">
          <h3 className="text-md font-bold text-gray-900 mb-6">
            {SKILL.TECH.TITLE}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-gray-700 mb-3">
                {SKILL.TECH.LANGUAGES.TITLE}
              </h4>
              <div className="flex flex-wrap gap-2">
                {SKILL.TECH.LANGUAGES.ITEMS.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-lg border border-blue-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-gray-700 mb-3">
                {SKILL.TECH.OS_TOOLS.TITLE}
              </h4>
              <div className="flex flex-wrap gap-2">
                {SKILL.TECH.OS_TOOLS.ITEMS.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-green-50 text-green-700 text-sm rounded-lg border border-green-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-gray-700 mb-3">{SKILL.TECH.DBS.TITLE}</h4>
              <div className="flex flex-wrap gap-2">
                {SKILL.TECH.DBS.ITEMS.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-purple-50 text-purple-700 text-sm rounded-lg border border-purple-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200" />

        <div className="mb-8">
          <h3 className="text-md font-bold text-gray-900 mb-4">
            {SKILL.LANGUAGE.TITLE}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
            {SKILL.LANGUAGE.ITEMS.map((item) => (
              <div
                key={item.LANG}
                className={`text-center p-4 bg-${item.COLOR}-50 rounded-lg border border-${item.COLOR}-100`}
              >
                <div
                  className={`text-md font-bold text-${item.COLOR}-700 mb-1`}
                >
                  {item.LANG}
                </div>
                <div className={`text-xs text-${item.COLOR}-700`}>
                  {item.PROFICIENCY}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
