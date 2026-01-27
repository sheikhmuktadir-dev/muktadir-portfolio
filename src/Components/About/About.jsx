import { motion } from "framer-motion";
import Style from "./about.module.css";
import { aboutData } from "../../Data/Data";
import image from "/images/banner.webp";

export default function About() {
  return (
    <section className={Style.aboutSection} id="about">
      <div className="container">
        <motion.div
          className={Style.aboutContent}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h4 className={Style.aboutText}>
            {aboutData?.text ||
              "Frontend & UI Developer with 3 years of experience building clean, responsive, and high-quality web experiences."}
          </h4>
        </motion.div>
      </div>
    </section>
  );
}
