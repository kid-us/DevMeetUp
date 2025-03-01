import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  target: number;
}

const AnimatedNumbers = ({ target }: Props) => {
  const count = useMotionValue(0);

  const springValue = useSpring(count, { stiffness: 50, damping: 20 });

  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayCount(Math.round(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <motion.span
      onViewportEnter={() => count.set(target)}
      // viewport={{ once: true }}
      className="text-2xl font-semibold mb-1"
    >
      {displayCount.toLocaleString()} +
    </motion.span>
  );
};

export default AnimatedNumbers;
