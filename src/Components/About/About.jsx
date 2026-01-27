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
          <img
            src={aboutData?.image || image}
            alt="about image"
            className={Style.aboutImage}
          />
          <div className={Style.aboutTextArea}>
            <h5 className={Style.aboutText}>
              {aboutData?.text ||
                "I’m Sheikh Muktadir, a Frontend & UI Developer with 3 years building responsive, scalable UIs focused on usability and performance."}
            </h5>
            <p className={Style.aboutPara}>{aboutData?.para}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
