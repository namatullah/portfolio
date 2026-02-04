import {
  Briefcase,
  Code,
  ExternalLink,
  Facebook,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import About from "../_components/pages/About";
import Experience from "../_components/pages/Experience";
import Skill from "../_components/pages/Skill";
import Education from "../_components/pages/Education";
import Project from "../_components/pages/Project";
import Contact from "../_components/pages/Contact";

export const PROFILE = {
  IMAGE: { SRC: "/profile.jpeg", ALT: "Profile" },
  FULL_NAME: "Namatullah Shahbazi",
  POSITION: "Full Stack Developer",
  SKILLS: ["React.js", "Next.js", "Node.js", "Nest.js", "PHP", "Laravel"],
  EXPERIENCE: "9+ Years Experience",
  LINKS: [
    { HREF: "https://github.com/namatullah", LABEL: "GitHub" },
    {
      HREF: "https://stackoverflow.com/users/5755599",
      LABEL: "Stack Overflow",
    },
    { HREF: "mailto:namatullah.shahbazi444@gmail.com", LABEL: "Email" },
  ],
};

export const NAVBAR = {
  LINKS: [
    { HREF: "#about", LABEL: "About", ICON: User },
    {
      HREF: "#experience",
      LABEL: "Experience",
      ICON: Briefcase,
    },
    { HREF: "#skills", LABEL: "Skills", ICON: Code },
    {
      HREF: "#education",
      LABEL: "Education",
      ICON: GraduationCap,
    },
    {
      HREF: "#projects",
      LABEL: "Projects on GitHub",
      ICON: Github,
    },
    { HREF: "#contact", LABEL: "Contact", ICON: Mail },
  ],
};

export const PAGES = [
  {
    ID: "about",
    TITLE: "About Me",
    COMPONENT: About,
  },
  {
    ID: "experience",
    TITLE: "Work Experience",
    COMPONENT: Experience,
  },
  {
    ID: "skills",
    TITLE: "Skills",
    COMPONENT: Skill,
  },
  {
    ID: "education",
    TITLE: "Education",
    COMPONENT: Education,
  },
  {
    ID: "projects",
    TITLE: "Projects on GitHub",
    COMPONENT: Project,
  },
  {
    ID: "contact",
    TITLE: "Contact",
    COMPONENT: Contact,
  },
];

export const ABOUT = {
  CONTENT:
    "Full-stack software developer with 7+ years of experience building advanced platforms, management systems, and scalable modern applications. Strong expertise in backend APIs, modern JavaScript frameworks, and PHP ecosystems. Skilled in designing modular architectures, debugging complex applications, and writing clean, maintainable code. Experienced working in agile teams and contributing to end-to-end development across both frontend and backend",
};

export const EXPERIENCE = {
  RESPONSIBILITIES: "Key Responsibilities & Achievements",
  TEACH_USED: "Technologies Used",
  EXPERINCES: [
    {
      COMPANY: "Modeer",
      POSITION: "Full-Stack Developer",
      PERIOD: "Jul 2022 - Aug 2025",
      DESCRIPTION:
        "Developed and delivered the full School Management System (Modeer) using Symfony and React. Built backend APIs, modules, and admin features. Worked with Docker for local development.",
      TECHS: [
        "Symfony",
        "React",
        "JavaScript",
        "PHP",
        "MySQL",
        "Docker",
        "Git",
        "Ubuntu",
      ],
      ACHIEVMENT: [
        "Built complete school management system from scratch",
        "Developed RESTful APIs and admin features",
        "Deployed application on Ubuntu Linux server",
      ],
    },
    {
      COMPANY: "ADRAS LLC",
      POSITION: "Full-Stack Developer",
      PERIOD: "Dec 2016 - Aug 2021",
      DESCRIPTION:
        "Key contributor to NIMS (National Information Management System), a large-scale national project. Worked as a Full-Stack Developer using CodeIgniter (PHP) + React + Node + MongoDB.",
      TECHS: [
        "React.js (Redux)",
        "Node.js",
        "MongoDB",
        "PHP (CodeIgniter)",
        "MySQL",
      ],
      ACHIEVMENT: [
        "Led team of 2-3 developers in later years",
        "Responsible for module analysis and architecture design",
        "Optimized API performance and database queries",
        "Integrated frontend/backend components",
      ],
    },
    {
      COMPANY: "MiDS Consulting",
      POSITION: "Full-Stack JS Developer",
      PERIOD: "Feb 2016 - Dec 2016",
      DESCRIPTION:
        "First exposure to JavaScript ecosystem. Developed 'Naqdina' top-up and payment processing system.",
      TECHS: ["AngularJS", "Node.js", "Express.js", "MongoDB", "Git"],
      ACHIEVMENT: [
        "Built frontend modules with AngularJS",
        "Developed backend APIs with Node.js/Express",
        "Worked with MongoDB for data modeling",
      ],
    },
  ],
};

export const SKILL = {
  TECH: {
    TITLE: "Technical Skills",
    LANGUAGES: {
      TITLE: "Languages & Frameworks",
      ITEMS: [
        "TypeScript",
        "JavaScript",
        "React.js",
        "Next.js",
        "Redux",
        "Node.js",
        "Express.js",
        "Nest.js",
        "PHP",
        "Symfony",
        "Laravel",
        "CodeIgniter",
        "AngularJS",
      ],
    },
    OS_TOOLS: {
      TITLE: "DevOps & Tools",
      ITEMS: [
        "Docker",
        "Docker Compose",
        "Git",
        "API Development",
        "Ubuntu (Linux)",
      ],
    },
    DBS: {
      TITLE: "Databases",
      ITEMS: ["MongoDB", "PostgreSQL", "MySQL"],
    },
  },
  LANGUAGE: {
    TITLE: "Languages",
    ITEMS: [
      { LANG: "Dari", PROFICIENCY: "Native", COLOR: "blue" },
      { LANG: "English", PROFICIENCY: "Excellent", COLOR: "green" },
      { LANG: "Pashto", PROFICIENCY: "Good", COLOR: "purple" },
    ],
  },
  CERTIFICATIONS: {},
};

export const EDUCATION = {
  ITEMS: [
    {
      DEGREE: "B.Sc. in Computer Science",
      INSTITUTION: "Fergusson College, Savitribai Phule Pune University",
      LOCATION: "Pune, India",
      PERIOD: "2010 – 2014",
      DETAILS: "Specialized in software engineering and web technologies",
    },
    {
      DEGREE: "Baccalaureate",
      INSTITUTION: "Abdul-Rahim-Shahid High School",
      LOCATION: "Afghanistan",
      PERIOD: "2010 Graduated",
      DETAILS: "High school graduation with focus on sciences",
    },
  ],
};

export const PROJECT = {
  ITEMS: [
    {
      TITLE: "Inventory & Sales Management System",
      DESCRIPTION:
        "A full-stack Inventory & Sales Management System built using the MERN stack. This project helps businesses manage products, categories, users, and sales transactions with proper authentication and role-based access control.",
      TECHS: [
        "React.js",
        "TypeScript",
        "Material UI (MUI)",
        "Node.js",
        "Express.js",
        "MongoDB + Mongoose",
        "JWT Authentication",
      ],
      CODE: {
        LINK: "https://github.com/namatullah/Inventory-Sales-Management-System",
        TITLE: "View Code",
      },
      DEMO: { LINK: "#", TITLE: "Live Demo" },
      LANGUAGE: "TypeScript & JavaScript",
      LANGUAGE_COLOR: "bg-purple-500",
    },

    {
      TITLE: "Task Management System",
      DESCRIPTION:
        "A modern, production-ready task management application with real-time features, role-based access control, and comprehensive analytics.",
      TECHS: [
        "React.js",
        "Next.js",
        "Material UI (MUI)",
        "Node.js",
        "Nest.js + TypeOrm",
        "PostgreSQL",
        "Docker",
        "JWT Authentication",
      ],
      CODE: {
        LINK: "https://github.com/namatullah/Task-Management",
        TITLE: "View Code",
      },
      DEMO: { LINK: "#", TITLE: "Live Demo" },
      LANGUAGE: "TypeScript",
      LANGUAGE_COLOR: "bg-green-500",
    },
  ],
  GITHUB_REPOSITORIES: {
    LINK: "https://github.com/namatullah?tab=repositories",
    TITLE: "View All Repositories on GitHub",
  },
};

export const CONTACT = {
  CONTACT_INFO: {
    TITLE: "Contact Information",
    ITEMS: [
      {
        ICON: Phone,
        LABEL: "Phone",
        VALUE: "+93 701977584 / +93 745647411",
        HREF: "tel:+93701977584",
        COLOR: "bg-green-50 text-green-700 border-green-100",
      },
      {
        ICON: Mail,
        LABEL: "Email",
        VALUE: "namatullah.shahbazi444@gmail.com",
        HREF: "mailto:namatullah.shahbazi444@gmail.com",
        COLOR: "bg-blue-50 text-blue-700 border-blue-100",
      },
      {
        ICON: MapPin,
        LABEL: "Location",
        VALUE: "Afghanistan",
        HREF: null,
        COLOR: "bg-purple-50 text-purple-700 border-purple-100",
      },
    ],
  },

  SOCIAL_LINK: {
    TITLE: "Find Me On",
    ITEMS: [
      {
        NAME: "GitHub",
        ICON: Github,
        HREF: "https://github.com/namatullah",
        COLOR: "bg-gray-800 hover:bg-gray-900 text-white",
        LABEL: "github.com/namatullah",
      },
      {
        NAME: "Stack Overflow",
        ICON: ExternalLink,
        HREF: "https://stackoverflow.com/users/5755599",
        COLOR: "bg-orange-500 hover:bg-orange-600 text-white",
        LABEL: "stackoverflow.com/users/5755599",
      },
      {
        NAME: "LinkedIn",
        ICON: Linkedin,
        HREF: "https://linkedin.com/in/your-profile",
        COLOR: "bg-blue-700 hover:bg-blue-800 text-white",
        LABEL: "linkedin.com/in/your-profile",
      },
      {
        NAME: "Facebook",
        ICON: Facebook,
        HREF: "https://facebook.com/your-profile",
        COLOR: "bg-blue-600 hover:bg-blue-700 text-white",
        LABEL: "facebook.com/your-profile",
      },
    ],
  },
};
