import Accordion from "../Accordion/Accordion";
import Style from "./experience.module.css";
import { experience } from "../../Data/Data";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const sectionRef = useRef(null);

  return (
    <section className={Style.experienceSection} ref={sectionRef}>
      <div className="container">
        <motion.div
          className="headingMainBox"
          initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="headingMain">Work History</h2>
          <p className="headingMainPara">
            Professional experience building scalable web applications with
            clean UI and strong performance.
          </p>
          <button className="headingCountbtn">
            {String(experience.length).padStart(2, "0")}
          </button>
        </motion.div>

        <motion.div
          className={Style.experienceArea}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Accordion accordionData={experience} />
        </motion.div>
      </div>
    </section>
  );
}
