import { motion, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Style from "./card.module.css";

export default function SkillCard({ text, index, total, scrollYProgress }) {
  // ✅ Detect screen type
  const [screen, setScreen] = useState("desktop");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) setScreen("mobile");
      else if (width < 1200) setScreen("laptop");
      else if (width < 1600) setScreen("desktop");
      else setScreen("large"); // ✅ 1600px+
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Responsive radius
  const RADIUS =
    screen === "mobile"
      ? Math.max(240, total * 50)
      : screen === "laptop"
        ? Math.max(380, total * 60)
        : screen === "desktop"
          ? Math.max(420, total * 70)
          : Math.max(460, total * 80); // ✅ 1600px+

  const angleStep = (Math.PI * 2) / total;
  const baseAngle = angleStep * index;

  // 🔄 Rotation
  const rotate = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]);
  const angle = useTransform(rotate, (r) => baseAngle + r);

  // 🎯 Position
  const rawX = useTransform(angle, (a) => Math.sin(a) * RADIUS);
  const rawZ = useTransform(angle, (a) => Math.cos(a) * RADIUS - RADIUS);
  const rawRotateY = useTransform(angle, (a) => (a * 180) / Math.PI);

  // 🧠 Smooth motion
  const x = useSpring(rawX, { stiffness: 90, damping: 18 });
  const z = useSpring(rawZ, { stiffness: 90, damping: 18 });
  const rotateY = useSpring(rawRotateY, { stiffness: 90, damping: 18 });

  // 📊 Depth
  const progress = useTransform(rawZ, [-RADIUS, 0], [0, 1]);

  // 👁️ Opacity
  const opacity = useTransform(progress, (p) => Math.max(0.3, Math.min(1, p)));

  // 🔍 Scale
  const scale = useTransform(progress, (p) =>
    screen === "mobile" ? 0.9 + 0.15 * p : 0.8 + 0.2 * p,
  );

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
        transformPerspective:
          screen === "mobile"
            ? 1000
            : screen === "laptop"
              ? 1100
              : screen === "desktop"
                ? 1600
                : 1800, // ✅ slightly stronger depth for large screens
        transformStyle: "preserve-3d",
      }}
    >
      {text}
    </motion.div>
  );
}
