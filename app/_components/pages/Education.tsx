import { EDUCATION } from "@/app/ui/constants";
import { GraduationCap, MapPin } from "lucide-react";

export default function Education() {
  return (
    <div className="space-y-8">
      <div className="bg-white border border-gray-200 rounded-md p-6">
        {EDUCATION.ITEMS.map((edu, index) => (
          <div key={index}>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-md font-bold text-gray-900">
                    {edu.DEGREE}
                  </h3>
                  <span className="text-blue-600 font-medium">
                    {edu.PERIOD}
                  </span>
                </div>
                <div className="text-gray-700 mb-1">{edu.INSTITUTION}</div>
                <div className="flex items-center gap-1 text-gray-600 text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  {edu.LOCATION}
                </div>
                {edu.DETAILS && (
                  <p className="text-gray-600 text-sm">{edu.DETAILS}</p>
                )}
              </div>
            </div>

            {index < EDUCATION.ITEMS.length - 1 && (
              <hr className="my-6 border-gray-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
