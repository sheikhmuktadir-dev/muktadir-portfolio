import { motion } from "framer-motion";
import { useRef } from "react";
import Style from "./about.module.css";
import { aboutData } from "../../Data/Data";
import image from "/images/banner.webp";

export default function About() {
  const sectionRef = useRef(null);

  return (
    <section className={Style.aboutSection} ref={sectionRef} id="about">
      <div className="container">
        <div className={Style.aboutContent}>
          {/* 🔥 IMAGE (slow + smooth) */}
          <motion.img
            src={aboutData?.image || image}
            alt="about"
            className={Style.aboutImage}
            initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          />

          {/* 🔥 TEXT AREA */}
          <div className={Style.aboutTextArea}>
            {/* ✨ HEADING (slow word reveal) */}
            <motion.h4
              className={Style.aboutText}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {aboutData.text.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
                    show: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    },
                  }}
                  style={{
                    display: "inline-block",
                    marginRight: "8px",
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h4>

            {/* ✨ PARAGRAPH */}
            <motion.p
              className={Style.aboutPara}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              {aboutData?.para}
            </motion.p>

            {/* 🔥 NUMBERS */}
            <div className={Style.aboutNumFlex}>
              {aboutData?.num?.map((list, index) => (
                <motion.div
                  className={Style.aboutNumber}
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.8 + index * 0.2,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <h3>
                    {list.number}
                    <span>{list.plus}</span>
                  </h3>
                  <p>{list.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
