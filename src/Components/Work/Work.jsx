import { useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import WorkCard from "../Card/WorkCard";
import Style from "./work.module.css";
import { worksCard } from "../../Data/Data";

export default function Work() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1023.98); // adjust breakpoint if needed
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Only animate on non-mobile
  const rawMarginTop2 = useTransform(scrollYProgress, [0, 1], [200, -50]);
  const rawMarginTop3 = useTransform(scrollYProgress, [0, 1], [50, -400]);

  const marginTop2 = useSpring(rawMarginTop2, { stiffness: 80, damping: 20 });
  const marginTop3 = useSpring(rawMarginTop3, { stiffness: 80, damping: 20 });

  return (
    <section ref={sectionRef} className={Style.workSection} id="works">
      <div className="container">
        <div className={`headingMain ${Style.workText}`}>Works</div>

        <div className={Style.workCardGrid}>
          {worksCard?.map((item, i) => {
            let style = { marginTop: 0 };

            if (!isMobile) {
              if (i === 1) style.marginTop = marginTop2;
              if (i === 2) style.marginTop = marginTop3;
            }

            return <WorkCard key={item.id} item={item} style={style} />;
          })}
        </div>
      </div>
    </section>
  );
}
