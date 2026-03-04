import { motion, useTransform, useSpring } from "framer-motion";
import Style from "./card.module.css";

export default function SkillCard({ text, index, total, scrollYProgress }) {
  const RADIUS = Math.max(520, total * 90);
  const angleStep = (Math.PI * 2) / total;
  const baseAngle = angleStep * index;

  // FULL rotation based on scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]);

  // Current angle for this card
  const angle = useTransform(rotate, (r) => baseAngle + r);

  // 3D positions
  const rawX = useTransform(angle, (a) => Math.sin(a) * RADIUS);
  const rawZ = useTransform(angle, (a) => Math.cos(a) * RADIUS - RADIUS);

  // 3D rotation for natural look
  const rawRotateY = useTransform(angle, (a) => (a * 180) / Math.PI);

  // Smooth animations with spring
  const x = useSpring(rawX, { stiffness: 70, damping: 22 });
  const z = useSpring(rawZ, { stiffness: 70, damping: 22 });
  const rotateY = useSpring(rawRotateY, { stiffness: 70, damping: 22 });

  // Determine relative progress to front card
  const progress = useTransform(rawZ, [-RADIUS, 0], [0, 1]);

  // Active card is fully opaque; back cards fade out
  const opacity = useTransform(progress, (p) => {
    // p ~0 for back cards, ~1 for front card
    return Math.max(0.3, Math.min(1, p));
  });

  // Slight scale effect for active card
  const scale = useTransform(progress, (p) => 0.8 + 0.2 * p);

  return (
    <motion.div
      className={Style.skillCard}
      style={{
        x,
        z,
        rotateY,
        opacity,
        scale,
        position: "absolute",
        transformPerspective: 1600,
        transformStyle: "preserve-3d",
      }}
    >
      {text}
    </motion.div>
  );
}
