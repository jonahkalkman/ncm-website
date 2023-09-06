import { motion } from "framer-motion";
import React from "react";

export function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            ease: "easeOut",
            staggerChildren: 0.2, // Stagger the reveal of each child element
          },
        },
        hidden: { opacity: 0, y: 20 },
      }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
