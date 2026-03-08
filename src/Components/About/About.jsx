import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Style from "./about.module.css";
import { aboutData } from "../../Data/Data";
import image from "/images/banner.webp";

export default function About() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const text = aboutData?.text || "Hey there!";
  const wordsWithSpaces = text.split(/(\s+)/);
  const totalWords = wordsWithSpaces.filter((w) => w.trim() !== "").length;

  // Helper: interpolate between two colors
  const interpolateColor = (startColor, endColor, factor) => {
    const s = parseInt(startColor.slice(1), 16);
    const e = parseInt(endColor.slice(1), 16);

    const sr = (s >> 16) & 0xff,
      sg = (s >> 8) & 0xff,
      sb = s & 0xff;
    const er = (e >> 16) & 0xff,
      eg = (e >> 8) & 0xff,
      eb = e & 0xff;

    const r = Math.round(sr + (er - sr) * factor);
    const g = Math.round(sg + (eg - sg) * factor);
    const b = Math.round(sb + (eb - sb) * factor);

    return `rgb(${r}, ${g}, ${b})`;
  };

  // Easing function for smoother transition
  const easeInOut = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  // Update scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.2;
      const end = sectionHeight - windowHeight * 0.2;

      let scroll = windowHeight - rect.top - start;
      let sectionProgress = scroll / (end - start);
      sectionProgress = Math.min(Math.max(sectionProgress, 0), 1);

      setProgress(sectionProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={Style.aboutSection} ref={sectionRef} id="about">
      <div className="container">
        <div className={Style.aboutContent}>
          <img
            src={aboutData?.image || image}
            alt="about image"
            loading="lazy"
            className={Style.aboutImage}
          />
          <div className={Style.aboutTextArea}>
            <h4 className={Style.aboutText}>
              {wordsWithSpaces.map((word, i) => {
                if (word.trim() === "") return word;

                const wordIndex =
                  wordsWithSpaces.slice(0, i + 1).filter((w) => w.trim() !== "")
                    .length - 1;

                // Linear progress for this word
                const start = wordIndex / totalWords;
                const end = (wordIndex + 1) / totalWords;

                let factor = (progress - start) / (end - start);
                factor = Math.min(Math.max(factor, 0), 1);
                factor = easeInOut(factor); // smooth easing

                const color = interpolateColor("#dadada", "#0f0f0f", factor);

                return (
                  <motion.span
                    key={i}
                    style={{ display: "inline-block", color }}
                    animate={{ color }}
                    transition={{ duration: 0.3 }}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </h4>

            <p className={Style.aboutPara}>{aboutData?.para}</p>

            <div className={Style.aboutNumFlex}>
              {aboutData?.num?.map((list, index) => (
                <div className={Style.aboutNumber} key={list?.number || index}>
                  <h2>
                    <span>{list.plus}</span>
                    {list.number}
                  </h2>
                  <p>{list.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
