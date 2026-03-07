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
    text: "— Frontend Developer focused on building fast, scalable web experiences with clean, intuitive user interfaces.",
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
      text: "Years Experience",
    },
    {
      plus: "+",
      number: "20",
      text: "Projects Delivered",
    },
  ],
  image: "/images/banner.webp",
  text: "I’m Sheikh Muktadir, a frontend developer passionate about building fast, clean, and user-focused web experiences.",
  para: "Based in Hyderabad with 3+ years of experience, I bridge the gap between ambitious design and high-performance engineering. I craft scalable React applications that are pixel-perfect, accessible, and lightning-fast, turning ideas into seamless digital experiences.",
};

export const worksCard = [
  {
    id: 1,
    title: "Booking Website",
    image: "/images/zap.webp",
    link: "https://www.zapstravel.com/",
  },
  {
    id: 2,
    title: "Smart Dashboard",
    image: "/images/workzon.webp",
    link: "https://workzon.vercel.app/",
  },
  {
    id: 3,
    title: "Estate Website",
    image: "/images/almac.webp",
    link: "https://almac.vercel.app/",
  },
  {
    id: 4,
    title: "Social Website",
    image: "/images/earnon.webp",
    link: "https://earnon.ai/",
  },
];

export const skillsData = [
  "React.Js",
  "Git/Github",
  "HTML/CSS",
  "Bootstrap",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "Redux Toolkit",
];

export const footerNavLinks = [
  { name: "About Me", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
];
