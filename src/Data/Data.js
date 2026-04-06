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
    text: "— Crafting high-performance web experiences with clean design and intuitive interactions.",
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
      number: "03",
      text: "Years of Experience Building modern frontend applications",
    },
    {
      plus: "+",
      number: "20",
      text: "Projects Delivered Dashboards, SaaS, and scalable UI systems",
    },
  ],
  image: "/images/banner.webp",
  text: "I’m Sheikh Muktadir — a Frontend developer building scalable, high-performance React applications.",
  para: "Based in Hyderabad with 3+ years of experience, I build scalable React applications focused on performance, clean architecture, and seamless user experience—turning complex ideas into fast, production-ready products.",
};

export const worksCard = [
  {
    id: 1,
    title: "QuickFlix",
    image: "/images/quickflix.webp",
    link: "https://quickflix-shows.vercel.app/",
  },
  {
    id: 2,
    title: "Zenith UI",
    image: "/images/zenith.webp",
    link: "https://zenith-ui-dashboard.vercel.app/",
  },
  {
    id: 3,
    title: "Fitgo Fitness",
    image: "/images/fitgo.webp",
    link: "https://fitgo-fitness.vercel.app/",
  },
  {
    id: 4,
    title: "Zaps Travel",
    image: "/images/zap.webp",
    link: "https://www.zapstravel.com/",
  },
];

export const skillsData = [
  "HTML/CSS",
  "Git/Github",
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
    duration: "Jul 2024 – Sep 2025",
    description:
      "Architected reusable React component systems to standardize UI patterns and accelerate development cycles. Specialized in integrating complex REST APIs with structured async handling and optimizing frontend performance to ensure high-speed, responsive user interfaces.",
  },
  {
    id: 2,
    company: "Pencap Technologies",
    designation: "Frontend Developer",
    duration: "Mar 2024 – Jun 2024",
    description:
      "Engineered responsive interfaces with a focus on modularity and scalability. Refactored monolithic codebases into functional components and custom hooks, implementing performance strategies like lazy loading and code-splitting to enhance the overall user experience.",
  },
  {
    id: 3,
    company: "Zaps Marketing",
    designation: "UI Developer",
    duration: "Sep 2022 – Feb 2024",
    description:
      "Transformed high-fidelity UI/UX designs into pixel-perfect, interactive React applications. Developed a library of shared UI components to maintain visual consistency and streamlined the hand-off process between design and engineering teams.",
  },
  {
    id: 4,
    company: "Naresh i Technologies",
    designation: "Technical Mentor",
    duration: "Apr 2022 – Aug 2022",
    description:
      "Mentored junior developers in React.js, component architecture, and real-world project structuring, ensuring best practices in modern UI engineering and state management.",
  },
];
