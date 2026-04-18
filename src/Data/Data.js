import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail, IoLogoWhatsapp } from "react-icons/io";

export const navLinks = [
  {
    label: "Home",
    path: "/",
    index: true,
  },
  {
    label: "About Me",
    path: "#about",
  },
  {
    label: "Work",
    path: "#work",
  },
  {
    label: "Contact",
    path: "#contact",
  },
];

export const heroData = {
  name: {
    first: "Sheikh",
    last: "Muktadir",
  },
  role: {
    text: "— Creating scalable React dashboards and high-performance web apps.",
  },
  image: {
    src: "/images/circle.svg",
    alt: "circle image",
  },
};

export const socialLinks = [
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/sheikhmuktadir-dev/",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    url: "https://github.com/sheikhmuktadir-dev",
    label: "GitHub",
  },
  {
    icon: IoMdMail,
    url: "mailto:sheikhmuktadir.dev@gmail.com",
    label: "Email",
  },
  {
    icon: IoLogoWhatsapp,
    url: "https://wa.me/+918093668843",
    label: "WhatsApp",
  },
];

export const aboutData = {
  num: [
    {
      plus: "+",
      number: "3",
      text: "Years Experience  Modern Frontend Applications",
    },
    {
      plus: "+",
      number: "20",
      text: "Projects Delivered  Dashboards • SaaS • Scalable UI Systems",
    },
  ],
  image: "/images/banner.webp",
  text: "I’m Sheikh Muktadir —  a Frontend Developer building scalable React apps and dashboards.",
  para: "Based in Hyderabad with 3+ years of experience, I build scalable React applications and dashboards focused on performance and clean UI.",
};

export const worksCard = [
  {
    id: 1,
    title: "QuickFlix",
    description: "Movie app with search and real-time API data",
    tech: ["React", "Context API", "TMDB API"],
    image: "/images/quickflix.webp",
    link: "https://quickflix-shows.vercel.app/",
  },
  {
    id: 2,
    title: "Zenith UI",
    description: "Admin dashboard with forms and analytics",
    tech: ["React", "React Hook Form", "Recharts"],
    image: "/images/zenith.webp",
    link: "https://zenith-ui-dashboard.vercel.app/",
  },
  {
    id: 3,
    title: "Fitgo Fitness",
    description: "Responsive fitness UI with reusable components",
    tech: ["React", "CSS", "Responsive Design"],
    image: "/images/fitgo.webp",
    link: "https://fitgo-fitness.vercel.app/",
  },
  {
    id: 4,
    title: "Zaps Travel",
    description: "Production travel website with modern UI",
    tech: ["React", "JavaScript", "CSS"],
    image: "/images/zap.webp",
    link: "https://www.zapstravel.com/",
  },
];

export const skillsData = [
  "HTML & CSS",
  "REST APIs",
  "Git & GitHub",
  "Bootstrap",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "Redux Toolkit",
  "React.Js",
];

export const footerNavLinks = [
  { name: "About Me", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
];

export const experience = [
  {
    id: 1,
    company: "Bizionic Technologies",
    designation: "Frontend Developer",
    duration: "Jul 2024 – Feb 2026",
    description:
      "Frontend Developer at Bizionic Technologies (Jul 2024 – Feb 2026), where I built reusable React components, integrated REST APIs, and optimized performance for responsive user interfaces.",
  },
  {
    id: 2,
    company: "Pencap Technologies",
    designation: "Frontend Developer",
    duration: "Mar 2024 – Jun 2024",
    description:
      "Frontend Developer at Pencap Technologies (Mar 2024 – Jun 2024), where I built responsive UIs, refactored code into reusable components and hooks, and optimized performance with lazy loading and code splitting.",
  },
  {
    id: 3,
    company: "Zaps Marketing",
    designation: "UI Developer",
    duration: "Sep 2022 – Feb 2024",
    description:
      "UI Developer at Zaps Marketing (Sep 2022 – Feb 2024), where I built pixel-perfect React UIs, created reusable components, and improved design-to-development workflows.",
  },
  {
    id: 4,
    company: "Naresh i Technologies",
    designation: "Technical Mentor",
    duration: "Apr 2022 – Aug 2022",
    description:
      "Technical Mentor at Naresh i Technologies (Apr 2022 – Aug 2022), where I guided developers in React, component architecture, and real-world project structuring.",
  },
];
