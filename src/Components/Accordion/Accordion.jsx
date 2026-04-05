import useAccordionToggle from "../../Hooks/useAccordionToggle";
import Style from "./accordion.module.css";
import { FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function Accordion({ accordionData }) {
  const { accordionHandler, accordion } = useAccordionToggle();
  return (
    <div className={Style.accordion}>
      {accordionData?.map((list, i) => {
        return (
          <div className={Style.accordionItem} key={list.id || i}>
            <button
              className={Style.accordionButton}
              onClick={() => accordionHandler(list.id)}
            >
              <span>
                <h5>{list.company}</h5>
              </span>
              <span>
                <p className={Style.accordionDesig}>{list.designation}</p>
              </span>
              <span>
                <div className={Style.accordionIcon}>
                  {accordion === list.id ? <IoMdClose /> : <FaPlus />}
                </div>
              </span>
            </button>

            <div
              className={`${Style.accordionDescription} ${accordion === list.id ? Style.accordionDescriptionShow : ""}`}
            >
              <p>{list.duration}</p>
              <p>{list.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
