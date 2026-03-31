import { MdArrowOutward } from "react-icons/md";
import Style from "./card.module.css";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function WorkCard({ item }) {
  return (
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
          loading="lazy"
          className={Style.workCardImage}
        />
      </div>

      <div className={Style.workCardBottomFlex}>
        <button className={Style.workCardText}>{item.title}</button>
        <button className={Style.workCardText}>
          <span>View Live</span>
          <MdOutlineArrowOutward />
        </button>
      </div>
    </a>
  );
}
