import { motion, useTransform, useSpring } from "framer-motion";
import Style from "./card.module.css";

export default function SkillCard({ text, index, total, scrollYProgress }) {
  const RADIUS = Math.max(520, total * 90);
  const angleStep = (Math.PI * 2) / total;
  const baseAngle = angleStep * index;

  // FULL rotation
  const rotate = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]);

  const angle = useTransform(rotate, (r) => baseAngle + r);

  const rawX = useTransform(angle, (a) => Math.sin(a) * RADIUS);
  const rawZ = useTransform(angle, (a) => Math.cos(a) * RADIUS - RADIUS);

  const rawRotateY = useTransform(angle, (a) => (a * 180) / Math.PI);

  const x = useSpring(rawX, { stiffness: 70, damping: 22 });
  const z = useSpring(rawZ, { stiffness: 70, damping: 22 });
  const rotateY = useSpring(rawRotateY, {
    stiffness: 70,
    damping: 22,
  });

  const opacity = useTransform(z, [-1200, -300], [0.3, 1]);

  return (
    <motion.div
      className={Style.skillCard}
      style={{
        x,
        z,
        rotateY,
        opacity,
        position: "absolute",
        transformPerspective: 1600,
        transformStyle: "preserve-3d",
      }}
    >
      {text}
    </motion.div>
  );
}
