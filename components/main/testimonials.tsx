"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Marie Dupont",
    role: "CEO, StartupTech",
    avatar: "MD",
    content: "DevCenturionAi a transformé notre présence en ligne. Le site web est magnifique et le chatbot IA a réduit nos temps de réponse de 80%. Très professionnel !",
    rating: 5,
  },
  {
    id: 2,
    name: "Thomas Bernard",
    role: "Fondateur, E-Shop Plus",
    avatar: "TB",
    content: "Excellent travail sur notre e-commerce. Les ventes ont augmenté de 150% depuis le lancement. L'équipe est réactive et comprend vraiment nos besoins.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophie Martin",
    role: "Directrice Marketing, AgenceX",
    avatar: "SM",
    content: "Le dashboard analytics nous permet de prendre des décisions data-driven. Interface intuitive et support technique au top. Je recommande vivement !",
    rating: 5,
  },
  {
    id: 4,
    name: "Lucas Petit",
    role: "CTO, FinanceApp",
    avatar: "LP",
    content: "Une expertise technique impressionnante. Ils ont su adapter l'IA à nos besoins spécifiques. Le ROI est visible dès les premiers mois.",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = TESTIMONIALS[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="py-20 px-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            variants={slideInFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="Welcome-box py-[8px] px-[7px] border border-[#f9731680] opacity-[0.9] mx-auto w-fit"
          >
            <StarIcon className="text-[#f97316] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Ils nous font confiance</h1>
          </motion.div>

          <motion.h2
            variants={slideInFromLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-500 py-6"
          >
            Témoignages Clients
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:border-orange-500 transition-colors"
          >
            <ChevronLeftIcon className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:border-orange-500 transition-colors"
          >
            <ChevronRightIcon className="w-5 h-5 text-white" />
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 md:p-12 rounded-2xl border border-gray-800"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-orange-500" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-white font-medium mb-8 leading-relaxed">
                  &ldquo;{currentTestimonial.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg">
                    {currentTestimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{currentTestimonial.name}</div>
                    <div className="text-gray-400">{currentTestimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-orange-500 to-violet-500"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
