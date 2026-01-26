import { motion, useTransform, useSpring } from "framer-motion";
import Style from "./card.module.css";

export default function SkillCard({ text, index, total, scrollYProgress }) {
  const step = 1 / total;
  const center = step * index;

  /* -----------------------------
     ORBIT CONFIG
  ------------------------------*/
  const RADIUS = 260; // orbit size
  const ARC = Math.PI; // half orbit (use 2PI for full)

  /* -----------------------------
     SCROLL → ANGLE
  ------------------------------*/
  const angle = useTransform(
    scrollYProgress,
    [center - step, center, center + step],
    [-ARC / 2, 0, ARC / 2],
  );

  /* -----------------------------
     ORBIT MATH
  ------------------------------*/
  const rawX = useTransform(angle, (a) => Math.sin(a) * RADIUS);
  const rawZ = useTransform(angle, (a) => Math.cos(a) * RADIUS - RADIUS);

  /* -----------------------------
     FACE CAMERA
  ------------------------------*/
  const rawRotateY = useTransform(angle, (a) => a * (180 / Math.PI));

  const x = useSpring(rawX, { stiffness: 80, damping: 22 });
  const z = useSpring(rawZ, { stiffness: 80, damping: 22 });
  const rotateY = useSpring(rawRotateY, { stiffness: 80, damping: 22 });

  const opacity = useTransform(angle, [-ARC / 2, 0, ARC / 2], [0.4, 1, 0.4]);

  return (
    <motion.div
      className={Style.skillCard}
      style={{
        x,
        z,
        rotateY,
        opacity,
        position: "absolute",
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
    >
      {text}
    </motion.div>
  );
}
