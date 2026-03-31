import { MdOutlineArrowOutward } from "react-icons/md";
import Style from "./card.module.css";

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
        <div className={Style.workCardText}>{item.title}</div>
        <div className={Style.workCardText}>
          <span>View Live</span>
          <MdOutlineArrowOutward />
        </div>
      </div>
    </a>
  );
}
