import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import Style from "./card.module.css";

export default function WorkCard({ item, style }) {
  return (
    <motion.div
      style={style}
      initial={{ x: 0 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <a
        href={item.link}
        target="_blank"
        rel="noreferrer"
        className={Style.workCard}
      >
        <div className={Style.workCardImageArea}>
          <img
            src={item.image}
            alt={item.title}
            className={Style.workCardImage}
          />
        </div>

        <div className={Style.workCardBottomFlex}>
          <h6 className={Style.workCardText}>{item.title}</h6>
          <div className={Style.workCardArrow}>
            <MdArrowOutward />
          </div>
        </div>
      </a>
    </motion.div>
  );
}
