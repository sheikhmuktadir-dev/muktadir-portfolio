import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Style from "./hero.module.css";
import { heroData } from "../../Data/Data";
import Image from "/images/banner.webp";
import { socialLinks } from "../../Data/Data";

// Stagger animation for letters
const containerVariant = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Individual letter bounce animation
const letterVariant = {
  initial: { y: 0 },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 0.7,
      ease: [0.34, 1.56, 0.64, 1],
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
};

// Animated Text Component
const AnimatedText = ({ text, delay = 0 }) => (
  <motion.div
    className={Style.heroTitle}
    variants={containerVariant}
    initial="initial"
    animate="animate"
    transition={{ delay }}
  >
    {text.split("").map((char, index) => (
      <motion.span
        key={index}
        variants={letterVariant}
        style={{ display: "inline-block" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.div>
);

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"], // Animation relative to hero section
  });

  // Scale from 1 to 0.8 when scrollY goes from 0 to 300px
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  return (
    <motion.section
      ref={heroRef}
      className={Style.heroSection}
      style={{ scale }}
    >
      <div className="container">
        <div className={Style.heroInner}>
          {/* Image */}
          <div className={Style.heroImageArea}>
            <img
              src={heroData?.image?.src || Image}
              alt={heroData?.image?.alt || "Sheikh Muktadir"}
              className={Style.heroImage}
            />
          </div>

          {/* Animated Title */}
          <div className={Style.heroTitleWrapper}>
            <AnimatedText text={heroData?.name?.first || "Sheikh"} />
            <AnimatedText
              text={heroData?.name?.last || "Muktadir"}
              delay={0.5}
            />
          </div>

          {/* Bottom Section */}
          <div className={Style.heroBottomFlex}>
            <div className={Style.heroBottomStart}>
              <h6 className={`${Style.heroSubheading} ${Style.heroBottomText}`}>
                <span>{heroData?.role?.line1 || "Frontend & UI"}</span>
                <span>{heroData?.role?.line2 || "Developer"}</span>
              </h6>

              <div className={Style.socialFlex}>
                {socialLinks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.url}
                      className={Style.socialBtn}
                      aria-label={item.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className={Style.heroBottomEnd}>
              <h6 className={`${Style.heroBottomText} ${Style.heroParaText}`}>
                {heroData?.status || "(Available)"}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
