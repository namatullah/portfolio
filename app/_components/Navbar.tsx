"use client";
import { NAVBAR } from "../ui/constants";

export default function Navbar() {
  return (
    <header
      className="
        fixed top-0 left-0 right-0
        lg:left-80
        h-18
        bg-white
        border-b border-gray-200
        z-10
        flex items-center
        px-6
        shadow-md
      "
    >
      <nav className="flex gap-4">
        {NAVBAR.LINKS.map((link: any, index:number) => {
          const LinkIcon = link.ICON;
          return (
            <a
              key={index}
              href={link.HREF}
              className="flex items-center gap-2 px-4 py-2.5 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group relative"
            >
              <span className="text-gray-400 group-hover:text-blue-500 transition-colors">
                <LinkIcon className="w-4 h-4" />
              </span>
              <span className="relative">
                {link.LABEL}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          );
        })}
      </nav>
    </header>
  );
}
