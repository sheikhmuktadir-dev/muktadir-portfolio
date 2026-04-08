import WorkCard from "../Card/WorkCard";
import Style from "./work.module.css";
import { worksCard } from "../../Data/Data";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <section className={Style.workSection} id="work">
      <div className="container">
        <motion.div
          className="headingMainBox"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="headingMain">Selected Work</h2>
          <p className="headingMainPara">
            A selection of projects demonstrating my ability to build scalable,
            production-ready applications with clean architecture and modern UI.
          </p>
          <button className="headingCountbtn">
            {String(worksCard.length).padStart(2, "0")}
          </button>
        </motion.div>

        <motion.div
          className={Style.workCardGrid}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {worksCard?.map((item, i) => (
            <WorkCard key={item.id || i} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
