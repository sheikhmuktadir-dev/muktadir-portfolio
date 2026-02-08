import { useScroll } from "framer-motion";
import { useRef } from "react";
import SkillCard from "../Card/SkillCard";
import Style from "./skills.module.css";
import { skillsData } from "../../Data/Data";

export default function Skills() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={sectionRef} className={Style.skillWrapper} id="skills">
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
