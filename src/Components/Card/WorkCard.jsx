import { MdOutlineArrowOutward } from "react-icons/md";
import Style from "./card.module.css";
import { motion } from "framer-motion";

export default function WorkCard({ item }) {
  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className={Style.workCard}
      variants={{
        hidden: { opacity: 0, y: 80, scale: 0.95 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      whileHover="hover"
    >
      <motion.div className={Style.workCardImageArea}>
        <motion.img
          src={item.image}
          alt={item.title}
          className={Style.workCardImage}
          variants={{
            hover: { scale: 1.1 },
          }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>

      {/* <div className={Style.workCardTagFlex}>
        {item.tech.map((list, i) => {
          return (
            <p className={Style.workCardTag} key={list || i}>
              {list}
            </p>
          );
        })}
      </div> */}

      <motion.div
        className={Style.overlay}
        variants={{
          hover: { opacity: 1 },
        }}
      />

      <motion.div
        className={Style.workCardBottomFlex}
        variants={{
          hover: { y: -10 },
        }}
      >
        <div className={Style.workCardText}>{item.title}</div>

        <motion.div
          className={Style.workCardTagFlex}
          variants={{
            hover: { x: 8 },
          }}
        >
          {item.tech.map((list, i) => (
            <p className={Style.workCardTag} key={list || i}>
              {list}
            </p>
          ))}
        </motion.div>
      </motion.div>
    </motion.a>
  );
}
