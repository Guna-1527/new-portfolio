import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const AnimatedCursor = () => {
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const moveHandler = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHoverIn = () => setHovered(true);
    const handleHoverOut = () => setHovered(false);

    window.addEventListener("mousemove", moveHandler);

    const hoverTargets = document.querySelectorAll("h1, button, img");

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverIn);
      el.addEventListener("mouseleave", handleHoverOut);
    });

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverIn);
        el.removeEventListener("mouseleave", handleHoverOut);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="rounded-full border-2 border-[#C3D900] -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 1, opacity: 1 }}
        animate={{
          scale: hovered ? 3 : 1,
          opacity: hovered ? 0 : 0.8,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        style={{
          width: 32,
          height: 32,
        }}
      />
    </motion.div>
  );
};

export default AnimatedCursor;
