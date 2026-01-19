
export const personalInfo = {
  name: "Afaq Ahmad",
  role: "MERN Stack Developer",
  email: "ufaq3022@gmail.com",
  phone: "+92 312 9113445",
  location: "Mardan, KPK, Pakistan",
  github: "https://github.com/Afaq-302",
  linkedin: "https://linkedin.com/in/afaqy",
  twitter: "https://twitter.com/afaq_302",
  headline: "I build fast, scalable MERN web apps & modern websites",
  subheadline: "Transforming ideas into powerful digital experiences with MERN & AI. Let's build something amazing together.",
  bio: "I'm a passionate MERN Stack Developer with expertise in building full-stack web applications. I specialize in creating scalable, performant, and user-friendly solutions using modern technologies. With a strong foundation in both frontend and backend development, I deliver end-to-end solutions that drive business growth.",
  highlights: [
    "3+ years of professional experience",
    "20+ projects delivered successfully",
    "Expertise in React, Next.js & Node.js",
    "Strong focus on performance & UX",
  ],
  values: [
    {
      title: "Clean Code",
      description: "Writing maintainable, readable, and efficient code",
    },
    {
      title: "User First",
      description: "Building intuitive interfaces that users love",
    },
    {
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices",
    },
  ],
};

export const stats = [
  { value: "20+", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export const skills = {
  frontend: [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Redux/Zustand", level: 85 },
    { name: "Framer Motion", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 90 },
    { name: "REST APIs", level: 95 },
    { name: "GraphQL", level: 75 },
    { name: "WebSockets", level: 80 },
    { name: "Authentication", level: 90 },
  ],
  database: [
    { name: "MongoDB", level: 90 },
    { name: "PostgreSQL", level: 80 },
    { name: "Prisma ORM", level: 85 },
    { name: "Redis", level: 75 },
    { name: "Firebase", level: 80 },
    { name: "Supabase", level: 75 },
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Docker", level: 75 },
    { name: "Vercel/AWS", level: 85 },
    { name: "Figma/XD", level: 70 },
    { name: "VS Code", level: 95 },
    { name: "Postman", level: 90 },
  ],
};

import Unit from "../../public/unit.png";
import Time from "../../public/time.png";

// ✅ New imports for other projects
import FileQuill from "../../public/filequil.png";
import PakDraw from "../../public/pakdraw.png";
import Invoice from "../../public/invoice.png";
import Maahir from "../../public/maahir.png";
import Pi from "../../public/pi.png";
import JobMarkaz from "../../public/jobmarkaz.png";
import CX from "../../public/cx.png";
import Portal from "../../public/portal.png";

export const projects = [
  {
    id: 1,
    title: "Time Tracker",
    image: Time,
    description:
      "Track work hours, manage tasks, and generate daily/weekly summaries to improve productivity and simplify reporting.",
    tech: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB", "REST API"],
    demo: "https://time-tracker-by-afaq.vercel.app/",
    github: null,
    category: ["next", "fullstack"],
    featured: true,
  },

  {
    id: 2,
    title: "Group Ticketing Portal",
    image: Portal,
    description:
      "Agent-friendly support portal to assign, track, and resolve tickets faster with organized workflows and clear status updates. (Demo Login: a@gmail.com / 1..9)",
    tech: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB", "REST API"],
    demo: "https://group-ticket.vercel.app/",
    github: null,
    category: ["next", "fullstack"],
    featured: true,
  },

  {
    id: 3,
    title: "JobMarkaz",
    image: JobMarkaz,
    description:
      "Verified job board for Pakistan with direct HR contact details, helping candidates apply quickly and confidently.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "REST API"],
    demo: "https://jobs-markaz.vercel.app/",
    github: null,
    category: ["next", "fullstack"],
    featured: true,
  },

  {
    id: 4,
    title: "File Quill",
    image: FileQuill,
    description:
      "All-in-one PDF toolkit to convert, merge, split, compress, and secure files with a fast, privacy-first workflow.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "S3",
      "Docker",
    ],
    demo: "https://www.filequill.com/",
    github: null,
    category: ["next", "fullstack"],
    featured: true,
  },

  {
    id: 5,
    title: "Connextar (UK) Official Website",
    image: CX,
    description:
      "Modern corporate website presenting Connextar’s services and portfolio with responsive pages and lead-generation contact forms.",
    tech: ["Next.js", "Tailwind CSS", "Email Forms", "Adobe XD"],
    demo: "https://www.connextar.com",
    github: null,
    category: ["next"],
    featured: false,
  },

  {
    id: 6,
    title: "Invoice Generator",
    image: Invoice,
    description:
      "Create clean, professional invoices in minutes with itemized billing, totals calculation, and easy export/sharing.",
    tech: ["React", "Tailwind CSS", "Node.js", "APIs"],
    demo: null,
    github: null,
    category: ["react", "fullstack"],
    featured: false,
  },

  {
    id: 7,
    title: "Maahir - Expert Hiring Platform",
    image: Maahir,
    description:
      "Service marketplace concept that connects customers with skilled professionals, featuring a clean UI and smooth browsing experience.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    demo: null,
    github: null,
    category: ["next", "fullstack"],
    featured: false,
  },

  {
    id: 8,
    title: "Pak Draw Lottery App",
    image: PakDraw,
    description:
      "Lucky draw generator to upload participant lists, pick random winners instantly, and display results in a simple interface.",
    tech: ["React", "Tailwind CSS", "Node.js", "APIs"],
    demo: "https://pak-draw.vercel.app/",
    github: null,
    category: ["react", "fullstack"],
    featured: false,
  },

  {
    id: 9,
    title: "Pi-Exchange Platform",
    image: Pi,
    description:
      "Lightweight Next.js project built with a minimal layout, responsive design, and smooth user experience as a modern UI template.",
    tech: ["Next.js", "Tailwind CSS"],
    demo: null,
    github: null,
    category: ["next"],
    featured: false,
  },

  // ✅ NOTE: you had duplicate id: 9 — changed this to 10 (recommended)
  {
    id: 10,
    title: "Unit Converter",
    image: Unit,
    description:
      "Quick unit conversion tool for common measurements with instant results and a clean, mobile-friendly interface.",
    tech: ["Next.js", "Tailwind CSS"],
    demo: null,
    github: null,
    category: ["next"],
    featured: false,
  },
];


export const services = [
  {
    title: "Full-Stack MERN Development",
    description: "End-to-end web application development using MongoDB, Express.js, React, and Node.js with modern best practices.",
    icon: "Code",
  },
  {
    title: "Next.js Websites",
    description: "High-performance, SEO-optimized websites built with Next.js 13+ featuring server-side rendering and static generation.",
    icon: "Globe",
  },
  {
    title: "REST API Development",
    description: "Scalable and secure RESTful APIs with proper authentication, validation, and documentation.",
    icon: "Server",
  },
  {
    title: "Admin Dashboards",
    description: "Feature-rich admin panels with data visualization, user management, and real-time analytics.",
    icon: "LayoutDashboard",
  },
  {
    title: "Performance Optimization",
    description: "Speed optimization, code splitting, lazy loading, and Core Web Vitals improvements for existing applications.",
    icon: "Zap",
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Afaq delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made our project a huge success. Highly recommended!",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, DevCorp",
    content: "Working with Afaq was a fantastic experience. He understood our requirements perfectly and delivered a high-quality admin dashboard on time. His communication was excellent throughout.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, CreativeHub",
    content: "Afaq transformed our outdated website into a modern, fast, and beautiful platform. The performance improvements were remarkable. He's a true professional!",
    rating: 5,
    avatar: "ER",
  },
];
