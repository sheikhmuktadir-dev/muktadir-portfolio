import Accordion from "../Accordion/Accordion";
import Style from "./experience.module.css";
import { experience } from "../../Data/Data";

export default function Experience() {
  return (
    <section className={Style.experienceSection}>
      <div className="container">
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

        <div className={Style.experienceArea}>
          <Accordion accordionData={experience} />
        </div>
      </div>
    </section>
  );
}
