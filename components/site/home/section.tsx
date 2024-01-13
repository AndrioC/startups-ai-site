"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Section({ children }: React.PropsWithChildren) {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const variants = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView && "show"}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
}
