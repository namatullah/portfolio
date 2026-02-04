import Image from "next/image";
import { PROFILE } from "../ui/constants";

export default function Profile() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-28 h-28 relative rounded-full overflow-hidden border border-white shadow-md mx-auto">
        <Image
          src={PROFILE.IMAGE.SRC}
          alt={PROFILE.IMAGE.ALT}
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="text-center mt-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {PROFILE.FULL_NAME}
        </h2>
        <p className="text-gray-600 mt-1">{PROFILE.POSITION}</p>
        <div className="inline-block mt-2 px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
          {PROFILE.EXPERIENCE}
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        {PROFILE.SKILLS.map((skill: string) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs hover:bg-gray-200 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-6">
        {PROFILE.LINKS.map((link) => (
          <a
            key={link.LABEL}
            href={link.HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
          >
            {link.LABEL}
          </a>
        ))}
      </div>
    </div>
  );
}
