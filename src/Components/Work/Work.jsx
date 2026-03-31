import WorkCard from "../Card/WorkCard";
import Style from "./work.module.css";
import { worksCard } from "../../Data/Data";

export default function Work() {
  return (
    <section className={Style.workSection} id="work">
      <div className="container">
        <div className="headingMainBox">
          <h2 className="headingMain">Selected Work</h2>
          <p className="headingMainPara">
            A selection of projects demonstrating my ability to build scalable,
            production-ready applications with clean architecture and modern UI.
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
