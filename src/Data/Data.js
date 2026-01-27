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
    text: "— Frontend & UI developer building polished, brand-focused user interfaces.",
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
  num: [
    {
      number: "3",
      text: "Years of experience.",
    },
    {
      number: "+20",
      text: "Projects delivered.",
    },
  ],
  image: "/images/banner.webp",
  text: "Hey there!",
  para: "I’m Sheikh Muktadir, a Frontend & UI Developer focused on building visually refined, functional web experiences. I turn ideas into clean interfaces where aesthetics and usability work together.",
};

export const worksCard = [
  {
    id: 1,
    title: "Zaps Travel",
    image: "/images/zaps.webp",
    link: "https://www.zapstravel.com/",
  },
  {
    id: 2,
    title: "Zaps Travel",
    image: "/images/zaps.webp",
    link: "https://www.zapstravel.com/",
  },
  {
    id: 3,
    title: "Zaps Travel",
    image: "/images/zaps.webp",
    link: "https://www.zapstravel.com/",
  },
  {
    id: 4,
    title: "Earnon",
    image: "/images/earn.webp",
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
