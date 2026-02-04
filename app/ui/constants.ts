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
  EXPERIENCE: "8+ Years Experience",
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
    "Full-stack software developer with 8+ years of experience building advanced platforms, management systems, and scalable modern applications. I specialize in designing modular architectures, developing robust backend APIs, and creating responsive, high-performance frontends using modern JavaScript frameworks like React, and Nest.js, as well as PHP ecosystems such as Laravel.Throughout my career, I have contributed to end-to-end development in agile teams, delivering solutions that improve efficiency, enhance user experience, and solve complex business challenges. I am passionate about writing clean, maintainable code, optimizing system performance, and mentoring junior developers to build high-quality software collaboratively.",
};

export const EXPERIENCE = {
  RESPONSIBILITIES: "Key Responsibilities & Achievements",
  TEACH_USED: "Technologies Used",
  EXPERINCES: [
    {
      COMPANY: "Modeer",
      POSITION: "Full-Stack Developer",
      PERIOD: "July 2022 - November 2025",
      DESCRIPTION:
        "We developed a full School Management System (Modeer), which serves as the database backbone of a large platform and has been successfully implemented across numerous schools. I contributed to building backend APIs, core modules, administrative and service features, including reports, forms, and system services. I worked with Docker for local development and Git for version control, helping deliver a scalable and maintainable architecture.",
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
        "Built a complete School Management System from scratch",
        "Collaborated closely with colleagues under the guidance of a supervisor",
        "Developed the application on Ubuntu Linux using Docker-based environments",
        "Actively participated in code reviews, QA testing, and heavy calculation / performance testing",
        "Focused on writing reusable, clean, and maintainable code",
      ],
    },
    {
      COMPANY: "ADRAS LLC",
      POSITION: "Full-Stack Developer",
      PERIOD: "December 2016 - August 2021",
      DESCRIPTION:
        "Key contributor to NIMS (National Information Management System), a large-scale national project, working as a Full-Stack Developer using CodeIgniter (PHP), Node.js, MySQL, and MongoDB. I collaborated under the guidance of the lead supervisor and frequently led small development teams, providing technical direction when assigned. My responsibilities included designing database structures, developing backend services, and overseeing module deployments to production after successful QA and testing, ensuring system stability and code quality.",
      TECHS: [
        "PHP",
        "CodeIgniter",
        "MySQL",
        "JavaScript",
        "Ajax & jQuery",
        "Node.js",
        "MongoDB",
      ],
      ACHIEVMENT: [
        "Conducted module analysis and designed system architecture to ensure scalable and maintainable solutions",
        "Optimized API performance and database queries to improve application speed and reliability",
        "Integrated frontend and backend components to deliver seamless, end-to-end functionality",
        "Sharing technical guidance with team members and coordinating task delivery",
      ],
    },
    {
      COMPANY: "MiDS Consulting",
      POSITION: "Full-Stack JavaScript Developer",
      PERIOD: "February 2016 - December 2016",
      DESCRIPTION:
        "Gained my first exposure to the JavaScript ecosystem while developing the ‘Naqdina’ top-up and payment processing system. I started as an intern and progressed to a full-stack JavaScript developer, quickly mastering JavaScript and its frameworks. Recognized as one of the top performers on the team, I contributed significantly to the development and successful delivery of the Naqdina system.",
      TECHS: [
        "AngularJS",
        "Node.js",
        "Express.js",
        "MongoDB + Mongoose",
        "Git",
      ],
      ACHIEVMENT: [
        "Built responsive and dynamic modules using AngularJS, ensuring a seamless and intuitive user experience for the Naqdina system",
        "Designed and implemented RESTful APIs with Node.js and Express, handling payment processing and top-up workflows efficiently",
        "Modeled and managed data using MongoDB, performed database testing, optimized queries, and monitored performance to ensure reliable and high-speed data operations",
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
        "PHP",
        "React.js",
        "Next.js (App Router)",
        "Redux",
        "Node.js",
        "Express.js",
        "Nest.js + Prisma Orm & Type Orm",
        "Symfony",
        "Laravel",
        "CodeIgniter",
      ],
    },
    OS_TOOLS: {
      TITLE: "DevOps & Tools",
      ITEMS: ["Docker", "Git", "API Development", "Ubuntu (Linux)"],
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
      INSTITUTION:
        "Fergusson College, Savitribai Phule Pune University (formally Pune University)",
      LOCATION: "Pune,Maharashtra, India",
      PERIOD: "2010 – 2014",
      DETAILS:
        "I specialized in software engineering and web technologies, where our department placed a strong emphasis on coding and practical programming skills. The curriculum covered a wide range of subjects, including C, C++, Java, HTML, CSS, JavaScript, networking, mathematics, probability, electronics, programming in electronics, microcontrollers, and microprocessors. These courses provided a solid foundation in both software development and hardware concepts, equipping me with a broad technical skill set.",
    },
    {
      DEGREE: "Baccalaureate",
      INSTITUTION: "Abdul-Rahim-Shahid High School",
      LOCATION: "Kabul, Afghanistan",
      PERIOD: "2010 Graduated",
      DETAILS:
        "Graduated from high school with a focus on sciences, consistently recognized as one of the top students in my class. Through dedication and hard work, I successfully passed the Conkor exam and was awarded a scholarship in India for the field of Computer Science.",
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
      TITLE: "My Portfolio",
      DESCRIPTION: "This is my personal porfolio and is build in nextjs",
      TECHS: ["TypeScript", "React.js", "Next.js", "Tailwindcss"],
      CODE: {
        LINK: "https://github.com/namatullah/portfolio",
        TITLE: "View Code",
      },
      DEMO: { LINK: "#", TITLE: "Live Demo" },
      LANGUAGE: "TypeScript",
      LANGUAGE_COLOR: "bg-green-500",
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
      LANGUAGE_COLOR: "bg-blue-500",
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
        HREF: "https://www.linkedin.com/in/namatullah-shahbazi-a4428b125/",
        COLOR: "bg-blue-700 hover:bg-blue-800 text-white",
        LABEL: "linkedin.com/in/namatullah-shahbazi",
      },
      {
        NAME: "Facebook",
        ICON: Facebook,
        HREF: "https://www.facebook.com/namatullah.shahbazi",
        COLOR: "bg-blue-600 hover:bg-blue-700 text-white",
        LABEL: "facebook.com/namatullah.shahbazi",
      },
    ],
  },
};
