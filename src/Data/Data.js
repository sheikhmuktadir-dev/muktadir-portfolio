import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail, IoLogoWhatsapp } from "react-icons/io";

export const navLinks = [
  {
    label: "Home",
    path: "/",
    index: true,
  },
  {
    label: "About",
    path: "#about",
  },
  {
    label: "Works",
    path: "#works",
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
    line1: "Frontend & UI",
    line2: "Developer",
  },
  status: "(Available For Work)",
  image: {
    src: "/images/banner.webp",
    alt: "Sheikh Muktadir",
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
    url: "https://github.com/sheikhmuktadir-dev?tab=repositories",
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
  text: "Frontend & UI Developer with 3 years of experience building clean, responsive, and high-quality web experiences.",
};

export const worksCard = [
  {
    id: 1,
    title: "Reimagining Reality",
    image: "/images/work1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Reimagining",
    image: "/images/work2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Zaps Travel",
    image: "/images/work03.webp",
    link: "https://www.zapstravel.com/",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "React.js",
  "Tailwind CSS",
  "Bootstrap",
  "JavaScript",
  "Git/Github",
  "Responsive UI",
];

export const footerNavLinks = [
  { name: "About", href: "#about" },
  { name: "Works", href: "#works" },
  { name: "Skills", href: "#skills" },
];
