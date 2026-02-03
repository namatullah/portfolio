const links = [
  { href: "#about", label: "About Me" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="flex gap-8 mb-16 border-b pb-4">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
