"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ChatBubbleLeftRightIcon,
  PencilSquareIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";
import { useI18n } from "@/lib/i18n/context";

const ICONS = [
  ChatBubbleLeftRightIcon,
  PencilSquareIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
];

interface TimelineStep {
  title: string;
  description: string;
  duration: string;
}

const TimelineItem = ({ step, index, icon: Icon }: { step: TimelineStep; index: number; icon: typeof ChatBubbleLeftRightIcon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-center justify-center">
      {/* Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-violet-500 opacity-30" />

      {/* Content */}
      <div className={`w-full flex ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}>
        {/* Card */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex-1 hidden md:block"
        >
          <div className={`p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-orange-500/50 transition-all ${
            isLeft ? "text-right" : "text-left"
          }`}>
            <span className="text-orange-500 text-sm font-semibold">{step.duration}</span>
            <h3 className="text-xl font-bold text-white mt-2">{step.title}</h3>
            <p className="text-gray-400 mt-2">{step.description}</p>
          </div>
        </motion.div>

        {/* Icon Circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
          className="relative z-10 flex-shrink-0"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-violet-500 flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.4)]">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-orange-500 font-bold text-sm">
            {index + 1}
          </span>
        </motion.div>

        {/* Spacer for desktop */}
        <div className="flex-1 hidden md:block" />

        {/* Mobile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex-1 md:hidden"
        >
          <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800">
            <span className="text-orange-500 text-sm font-semibold">{step.duration}</span>
            <h3 className="text-lg font-bold text-white mt-1">{step.title}</h3>
            <p className="text-gray-400 mt-1 text-sm">{step.description}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const Timeline = () => {
  const { t } = useI18n();

  return (
    <section id="process" className="py-20 px-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            variants={slideInFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="Welcome-box py-[8px] px-[7px] border border-[#f9731680] opacity-[0.9] mx-auto w-fit"
          >
            <RocketLaunchIcon className="text-[#f97316] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">{t.timeline.badge}</h1>
          </motion.div>

          <motion.h2
            variants={slideInFromLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-500 py-6"
          >
            {t.timeline.title}
          </motion.h2>

          <motion.p
            variants={slideInFromLeft(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            {t.timeline.description}
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="space-y-16">
          {t.timeline.steps.map((step, index) => (
            <TimelineItem
              key={index}
              step={step as TimelineStep}
              index={index}
              icon={ICONS[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
