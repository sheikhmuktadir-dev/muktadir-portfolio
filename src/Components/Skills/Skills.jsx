import { useScroll } from "framer-motion";
import { useRef } from "react";
import SkillCard from "../Card/SkillCard";
import Style from "./skills.module.css";
import { skillsData } from "../../Data/Data";

export default function Skills() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["center center", "end center"],
  });

  return (
    <section ref={sectionRef} className={Style.skillWrapper} id="skills">
      <div className="container">
        <div className="headingMainBox">
          <h2 className="headingMain">My Expertise</h2>
          <p className="headingMainPara">
            Technologies and tools I use to build modern, scalable, and
            high-performance web applications.
          </p>
        </div>
      </div>

      <div className={Style.skillSticky}>
        <div className={Style.skillInner}>
          {skillsData.map((skill, i) => (
            <SkillCard
              key={skill}
              text={skill}
              index={i}
              total={skillsData.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
