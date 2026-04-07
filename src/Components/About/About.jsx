import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Style from "./about.module.css";
import { aboutData } from "../../Data/Data";
import image from "/images/banner.webp";

export default function About() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const text = aboutData?.text || "Hey there!";
  const chars = text.split("");
  const totalChars = chars.length;

  // ✅ Scroll tracking for section movement
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end 30%"],
  });

  const x = useTransform(scrollYProgress, [0, 0.6], [150, 0]);
  const y = useTransform(scrollYProgress, [0, 0.6], [150, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // ✅ Smooth spring effect
  const smoothX = useSpring(x, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 20 });
  const smoothOpacity = useSpring(opacity);
  const smoothScale = useSpring(scale);

  // Helper: interpolate colors
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

  // Easing function
  const easeInOut = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  // ✅ Scroll progress for text animation
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
        {/* ✅ Smooth section animation */}
        <motion.div
          className={Style.aboutContent}
          style={{
            x: smoothX,
            y: smoothY,
            opacity: smoothOpacity,
            scale: smoothScale,
          }}
        >
          {/* ✅ Image */}
          <img
            src={aboutData?.image || image}
            alt="about"
            loading="lazy"
            className={Style.aboutImage}
          />

          {/* ✅ Text Area */}
          <div className={Style.aboutTextArea}>
            <h4 className={Style.aboutText}>
              {chars.map((char, i) => {
                const start = i / totalChars;
                const end = (i + 1) / totalChars;

                let factor = (progress - start) / (end - start);
                factor = Math.min(Math.max(factor, 0), 1);
                factor = easeInOut(factor);

                const color = interpolateColor("#dadada", "#0f0f0f", factor);

                return (
                  <motion.span
                    key={i}
                    style={{
                      display: "inline",
                      whiteSpace: "pre-wrap",
                      color,
                    }}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </h4>

            <p className={Style.aboutPara}>{aboutData?.para}</p>

            {/* ✅ Numbers */}
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
        </motion.div>
      </div>
    </section>
  );
}
