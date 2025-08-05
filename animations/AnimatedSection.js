"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedSection({ children, id }) {
  const [showPointer, setShowPointer] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowPointer(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    const element = document.getElementById(id);
    if (element) observer.observe(element);

    return () => element && observer.unobserve(element);
  }, [id]);

  return (
    <motion.section
      id={id}
      initial={{ x: -50, opacity: 0 }}
      animate={showPointer ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="relative w-full"
    >
      {/* 👆 Finger animation */}
      {showPointer && (
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: -10, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 text-3xl sm:text-4xl"
        >
          👉
        </motion.div>
      )}

      {/* Wrapped content */}
      <div className="transition-transform duration-700 ease-in-out">
        {children}
      </div>
    </motion.section>
  );
}
