"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#f9731680] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#f97316] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Solutions Digitales Premium
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Transformez votre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-500">
              business
            </span>{" "}
            avec l&apos;IA
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Sites web sur mesure, chatbots IA, automatisation et dashboards.
          Boostez votre présence digitale avec des solutions innovantes.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href="https://wa.me/33658687475?text=Bonjour,%20je%20suis%20intéressé%20par%20vos%20services"
          target="_blank"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Démarrer un projet
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="DevCenturionAi"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
