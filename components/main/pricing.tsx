"use client";

import { motion } from "framer-motion";
import { SparklesIcon, CheckIcon } from "@heroicons/react/24/solid";

import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { PRICING } from "@/constants";

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="flex flex-col items-center justify-center py-20 px-10"
    >
      {/* Header */}
      <div className="w-full h-auto flex flex-col items-center justify-center mb-10">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="Welcome-box py-[8px] px-[7px] border border-[#f9731680] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#f97316] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Tarifs transparents</h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-500 py-10"
        >
          Nos Offres
        </motion.h2>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center">
        {PRICING.map((plan, index) => (
          <motion.div
            key={plan.title}
            variants={index === 0 ? slideInFromLeft(0.5) : index === 2 ? slideInFromRight(0.5) : slideInFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`relative flex flex-col p-8 rounded-2xl border ${
              plan.popular
                ? "border-[#f97316] shadow-[0_0_30px_rgba(249,115,22,0.3)]"
                : "border-[#27272a] hover:border-[#f9731650]"
            } bg-[#0c0c0c] transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] flex-1 max-w-[380px]`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-orange-500 to-violet-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                  Populaire
                </span>
              </div>
            )}

            {/* Plan Title */}
            <h3 className="text-2xl font-bold text-white mb-4">{plan.title}</h3>

            {/* Price */}
            <div className="mb-6">
              <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-500">
                {plan.price === "Sur devis" ? "" : "€"}
                {plan.price}
              </span>
            </div>

            {/* Features */}
            <ul className="flex-1 space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-300">
                  <CheckIcon className="h-5 w-5 text-[#f97316] mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href={`https://wa.me/33658687475?text=Bonjour,%20je%20suis%20intéressé%20par%20l'offre%20${plan.title}`}
              target="_blank"
              rel="noreferrer noopener"
              className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-r from-orange-500 to-violet-500 text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]"
                  : "border border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white"
              }`}
            >
              {plan.price === "Sur devis" ? "Nous contacter" : "Démarrer"}
            </a>
          </motion.div>
        ))}
      </div>

      {/* Bottom text */}
      <motion.p
        variants={slideInFromRight(0.8)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gray-400 text-center mt-10 max-w-2xl"
      >
        Tous nos tarifs sont personnalisables selon vos besoins.
        Contactez-nous pour un devis sur mesure.
      </motion.p>
    </section>
  );
};
