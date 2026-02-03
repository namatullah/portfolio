"use client";

import Link from "next/link";
import {
  Briefcase,
  Code,
  Github,
  GraduationCap,
  Mail,
  User,
} from "lucide-react";
const links = [
  { href: "#about", label: "About", icon: <User className="w-4 h-4" /> },
  {
    href: "#experience",
    label: "Experience",
    icon: <Briefcase className="w-4 h-4" />,
  },
  { href: "#skills", label: "Skills", icon: <Code className="w-4 h-4" /> },
  {
    href: "#education",
    label: "Education",
    icon: <GraduationCap className="w-4 h-4" />,
  },
  {
    href: "#projects",
    label: "Projects on GitHub",
    icon: <Github className="w-4 h-4" />,
  },
  { href: "#contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
];
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
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-2 px-4 py-2.5 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group relative"
          >
            <span className="text-gray-400 group-hover:text-blue-500 transition-colors">
              {link.icon}
            </span>
            <span className="relative">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
