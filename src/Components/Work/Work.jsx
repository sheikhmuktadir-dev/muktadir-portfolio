import WorkCard from "../Card/WorkCard";
import Style from "./work.module.css";
import { worksCard } from "../../Data/Data";

export default function Work() {
  return (
    <section className={Style.workSection} id="work">
      <div className="container">
        <div className="headingMainBox">
          <h2 className="headingMain">Selected works</h2>
          <p className="headingMainPara">
            A curated selection of projects that highlight my dedication to
            clean, user-focused design, scalable and maintainable code, and
            high-performance, responsive web experiences.
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
