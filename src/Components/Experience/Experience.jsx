import Accordion from "../Accordion/Accordion";
import Style from "./experience.module.css";
import { experience } from "../../Data/Data";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const sectionRef = useRef(null);

  // ✅ Scroll tracking (tuned for mid completion)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 95%", "end 20%"], // better control
  });

  // 🌠 Falling star (TOP-LEFT → CENTER) — finishes early
  const x = useTransform(scrollYProgress, [0, 0.4], [-220, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4], [-220, 0]);

  // ✅ Fade + scale (also finish early)
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.9, 1]);

  // ✅ Smooth spring (premium feel)
  const smoothX = useSpring(x, { stiffness: 60, damping: 18 });
  const smoothY = useSpring(y, { stiffness: 60, damping: 18 });
  const smoothOpacity = useSpring(opacity, {
    stiffness: 80,
    damping: 20,
  });
  const smoothScale = useSpring(scale, {
    stiffness: 80,
    damping: 20,
  });

  return (
    <section className={Style.experienceSection} ref={sectionRef}>
      <div className="container">
        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
            opacity: smoothOpacity,
            scale: smoothScale,
          }}
        >
          {/* ✅ Heading */}
          <div className="headingMainBox">
            <h2 className="headingMain">Work History</h2>
            <p className="headingMainPara">
              Professional experience building scalable web applications with
              clean UI and strong performance.
            </p>
            <button className="headingCountbtn">
              {String(experience.length).padStart(2, "0")}
            </button>
          </div>

          {/* ✅ Accordion */}
          <div className={Style.experienceArea}>
            <Accordion accordionData={experience} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
