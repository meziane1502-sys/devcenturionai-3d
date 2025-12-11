"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import { BASE_PATH } from "@/constants";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { useI18n } from "@/lib/i18n/context";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const { t, dir } = useI18n();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`flex flex-row items-center justify-center px-20 mt-40 w-full z-[20] ${dir === "rtl" ? "flex-row-reverse" : ""}`}
    >
      <div className={`h-full w-full flex flex-col gap-5 justify-center m-auto ${dir === "rtl" ? "text-right" : "text-start"}`}>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#f9731680] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#f97316] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            {t.hero.badge}
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[700px] w-auto h-auto"
        >
          <span>
            {t.hero.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-500">
              <TypingAnimation
                texts={t.hero.typingWords as unknown as string[]}
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={2500}
              />
            </span>
            <br />
            {t.hero.titleEnd}
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex gap-4"
        >
          <a
            href="https://wa.me/33658687475?text=Bonjour,%20je%20suis%20intéressé%20par%20vos%20services"
            target="_blank"
            rel="noreferrer noopener"
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            {t.hero.cta}
          </a>
          <a
            href="#projects"
            className="py-3 px-6 border border-gray-600 text-center text-gray-300 cursor-pointer rounded-lg font-semibold hover:border-orange-500 hover:text-orange-500 transition-all"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src={`${BASE_PATH}/hero-bg.svg`}
          alt="DevCenturionAi"
          height={650}
          width={650}
          draggable={false}
          className="select-none animate-pulse-slow"
        />
      </motion.div>
    </motion.div>
  );
};
