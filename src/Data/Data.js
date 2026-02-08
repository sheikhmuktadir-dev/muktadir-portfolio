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
    text: "— React specialist building pixel-perfect, high-performance web interfaces.",
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
      number: "+3",
      text: "Years of experience.",
    },
    {
      number: "+20",
      text: "Projects Completed.",
    },
  ],
  image: "/images/banner.webp",
  text: "Hey there!",
  para: "I’m Sheikh Muktadir, a Frontend Developer building pixel-perfect, high-performance web interfaces. I transform complex designs into clean, scalable React code focused on speed and usability.",
};

export const worksCard = [
  {
    id: 1,
    title: "Zaps Travel",
    image: "/images/zap.webp",
    link: "https://www.zapstravel.com/",
  },
  {
    id: 2,
    title: "Cortex",
    image: "/images/cortex.webp",
    link: "https://cortexdashboard.vercel.app/",
  },
  {
    id: 3,
    title: "Almac",
    image: "/images/almac.webp",
    link: "https://almac.vercel.app/",
  },
  {
    id: 4,
    title: "Earnon",
    image: "/images/earnon.webp",
    link: "https://earnon.ai/",
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
