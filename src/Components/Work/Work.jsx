import WorkCard from "../Card/WorkCard";
import Style from "./work.module.css";
import { worksCard } from "../../Data/Data";

export default function Work() {
  return (
    <section className={Style.workSection} id="works">
      <div className="container">
        <div className="headingMainBox">
          <h2 className="headingMain">Selected works</h2>
          <p className="headingMainPara">
            A selection of projects showcasing my focus on clean design,
            scalable code, and high-performance web experiences.
          </p>
        </div>

        <div className={Style.workCardGrid}>
          {worksCard?.map((item, i) => {
            return <WorkCard key={item.id || i} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
}
