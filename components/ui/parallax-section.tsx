"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

export const ParallaxSection = ({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const multiplier = direction === "up" ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed * multiplier, -100 * speed * multiplier]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

// Parallax background with multiple layers
interface ParallaxBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export const ParallaxBackground = ({ children, className = "" }: ParallaxBackgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Background layer 1 - slow */}
      <motion.div
        className="absolute inset-0 -z-20"
        style={{ y: y1, opacity }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px]" />
      </motion.div>

      {/* Background layer 2 - fast */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: y2 }}
      >
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px]" />
      </motion.div>

      {/* Content */}
      {children}
    </div>
  );
};
