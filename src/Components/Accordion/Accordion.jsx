import useAccordionToggle from "../../Hooks/useAccordionToggle";
import Style from "./accordion.module.css";
import { FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

export default function Accordion({ accordionData }) {
  const { accordionHandler, accordion } = useAccordionToggle();

  return (
    <div className={Style.accordion}>
      {accordionData?.map((list, i) => {
        const isOpen = accordion === list.id;

        return (
          <motion.div
            className={Style.accordionItem}
            key={list.id || i}
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
            whileHover={{ y: -4 }}
          >
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
                <motion.div
                  className={Style.accordionIcon}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <IoMdClose /> : <FaPlus />}
                </motion.div>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className={Style.accordionDescription}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className={Style.innerContent}>
                    <p>{list.duration}</p>
                    <p>{list.description}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
