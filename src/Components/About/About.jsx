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
          {/* about circle image */}
          <img
            src={aboutData?.image || image}
            alt="about image"
            loading="lazy"
            className={Style.aboutImage}
          />

          {/* about text area */}
          <div className={Style.aboutTextArea}>
            <h2 className={Style.aboutText}>
              {aboutData?.text || "Hey there!"}
            </h2>
            <p className={Style.aboutPara}>{aboutData?.para}</p>
            <div className={Style.aboutNumFlex}>
              {aboutData?.num?.map((list, index) => {
                return (
                  <div
                    className={Style.aboutNumber}
                    key={list?.number || index}
                  >
                    <h2>{list.number}</h2>
                    <p>{list.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
