"use client";

import { motion } from "framer-motion";

interface Logo3DProps {
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

export const Logo3D = ({ size = "md", animated = true }: Logo3DProps) => {
  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
  };

  const containerVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const glowVariants = {
    animate: {
      textShadow: [
        "0 0 10px rgba(249, 115, 22, 0.5)",
        "0 0 20px rgba(249, 115, 22, 0.8), 0 0 30px rgba(168, 85, 247, 0.5)",
        "0 0 10px rgba(249, 115, 22, 0.5)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  if (!animated) {
    return (
      <span className={`font-bold ${sizes[size]}`}>
        <span className="text-white">Dev</span>
        <span className="text-[#f97316]">Centurion</span>
        <span className="text-[#a855f7]">Ai</span>
      </span>
    );
  }

  return (
    <motion.span
      className={`font-bold ${sizes[size]} inline-flex`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Dev */}
      <motion.span className="text-white" variants={letterVariants}>
        D
      </motion.span>
      <motion.span className="text-white" variants={letterVariants}>
        e
      </motion.span>
      <motion.span className="text-white" variants={letterVariants}>
        v
      </motion.span>

      {/* Centurion */}
      <motion.span
        className="text-[#f97316]"
        variants={glowVariants}
        animate="animate"
      >
        <motion.span variants={letterVariants}>C</motion.span>
        <motion.span variants={letterVariants}>e</motion.span>
        <motion.span variants={letterVariants}>n</motion.span>
        <motion.span variants={letterVariants}>t</motion.span>
        <motion.span variants={letterVariants}>u</motion.span>
        <motion.span variants={letterVariants}>r</motion.span>
        <motion.span variants={letterVariants}>i</motion.span>
        <motion.span variants={letterVariants}>o</motion.span>
        <motion.span variants={letterVariants}>n</motion.span>
      </motion.span>

      {/* Ai */}
      <motion.span
        className="text-[#a855f7]"
        variants={glowVariants}
        animate="animate"
      >
        <motion.span variants={letterVariants}>A</motion.span>
        <motion.span variants={letterVariants}>i</motion.span>
      </motion.span>
    </motion.span>
  );
};

// Animated logo icon (for favicon-like usage)
export const LogoIcon = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Outer ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          strokeDasharray="10 5"
        />

        {/* Inner circle */}
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="url(#gradientFill)"
          opacity="0.2"
        />

        {/* Center text */}
        <text
          x="50"
          y="55"
          textAnchor="middle"
          fill="white"
          fontSize="24"
          fontWeight="bold"
        >
          DC
        </text>

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="gradientFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};
