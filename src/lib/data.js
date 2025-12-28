// Portfolio Configuration Data
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

export const projects = [
  {
    id: 1,
    title: "Group Ticketing Portal",
    description: "Streamlined group ticket management system for agents to track, assign, and resolve support requests efficiently. (Demo Login: a@gmail.com / 1..9)",
    tech: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB", "REST API"],
    demo: "https://agents-portal.vercel.app/",
    github: null,
    category: ["next", "fullstack"],
    featured: true,
  },
  {
    id: 2,
    title: "JobMarkaz",
    description: "Verified job listings across Pakistan with direct HR contact for faster applications.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "REST API"],
    demo: "https://job-markaz-pk.vercel.app/",
    github: null,
    category: ["next", "fullstack"],
    featured: true,
  },
  {
    id: 3,
    title: "File Quill",
    description: "Privacy-first PDF platform to convert, merge, split, compress, and protect files efficiently.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL", "Redis", "S3", "Docker"],
    demo: "https://www.filequill.com/",
    github: null,
    category: ["next", "fullstack"],
    featured: true,
  },
  {
    id: 4,
    title: "Connextar (UK) Official Website",
    description: "Corporate showcase site highlighting Connextar's services, expertise, and client projects.",
    tech: ["Next.js", "Tailwind CSS", "Email Forms", "Adobe XD"],
    demo: "https://www.connextar.com",
    github: null,
    category: ["next"],
    featured: false,
  },
  {
    id: 5,
    title: "Masjid App Suite",
    description: "Comprehensive mosque management platform for prayer schedules, donations, and community updates.",
    tech: ["React", "Tailwind CSS", "Node.js", "Stripe", "MongoDB"],
    demo: "https://mas.umairshah.dev",
    github: null,
    category: ["react", "fullstack"],
    featured: true,
  },
  {
    id: 6,
    title: "POKERPLY",
    description: "Telegram-based multiplayer poker platform with real-time rooms, betting, and leaderboard ranking.",
    tech: ["React", "Tailwind CSS", "Node.js", "WebSockets", "APIs"],
    demo: "https://pokerply.vercel.app/",
    github: null,
    category: ["react", "fullstack"],
    featured: false,
  },
  {
    id: 7,
    title: "Pak Draw",
    description: "Quick raffle and lucky draw generator that picks random winners from uploaded lists.",
    tech: ["React", "Tailwind CSS", "Node.js", "APIs"],
    demo: "https://pakdraw.vercel.app/",
    github: null,
    category: ["react", "fullstack"],
    featured: false,
  },
  {
    id: 8,
    title: "Facebook Clone",
    description: "Interactive Facebook-style social feed with posts, comments, and friend suggestions.",
    tech: ["React", "Tailwind CSS", "UI/UX", "Responsive"],
    demo: "https://facebook-clone-by-afaq.vercel.app/",
    github: null,
    category: ["react"],
    featured: false,
  },
  {
    id: 9,
    title: "YouTube Clone",
    description: "Responsive YouTube homepage replica with video player, search, and sidebar navigation.",
    tech: ["React", "Tailwind CSS", "UI/UX", "Responsive"],
    demo: "https://youtube-clone-by-afaq.vercel.app/",
    github: null,
    category: ["react"],
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
