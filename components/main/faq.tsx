"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuestionMarkCircleIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";
import { useI18n } from "@/lib/i18n/context";

const FAQ_DATA = [
  {
    question: "Combien de temps prend la création d'un site web ?",
    answer: "Le délai varie selon la complexité du projet. Un site vitrine simple prend généralement 1 à 2 semaines, tandis qu'un site e-commerce ou une application web peut nécessiter 3 à 6 semaines. Nous vous fournirons un planning détaillé lors de notre premier échange.",
  },
  {
    question: "Quels sont les modes de paiement acceptés ?",
    answer: "Nous acceptons les virements bancaires, PayPal et les paiements par carte. Pour les projets importants, nous proposons un paiement en 2 ou 3 fois : 40% à la commande, 30% à la validation des maquettes, et 30% à la livraison.",
  },
  {
    question: "Proposez-vous l'hébergement et la maintenance ?",
    answer: "Oui ! Nous proposons des formules d'hébergement sécurisé avec certificat SSL, sauvegardes automatiques et mises à jour régulières. La maintenance inclut les corrections de bugs, les mises à jour de sécurité et un support technique réactif.",
  },
  {
    question: "Comment fonctionne le chatbot IA ?",
    answer: "Notre chatbot IA utilise les dernières technologies de traitement du langage naturel (GPT-4, Claude). Il peut être entraîné sur vos données spécifiques pour répondre aux questions de vos clients 24/7, qualifier les leads et automatiser les tâches répétitives.",
  },
  {
    question: "Puis-je modifier mon site moi-même après la livraison ?",
    answer: "Absolument ! Tous nos sites sont livrés avec un back-office intuitif qui vous permet de modifier le contenu, ajouter des images et gérer vos pages en toute autonomie. Nous vous formons également à l'utilisation de l'outil.",
  },
  {
    question: "Êtes-vous disponibles pour des projets sur mesure ?",
    answer: "Oui, nous adorons les défis ! Que ce soit une application web complexe, une intégration d'API spécifique ou un système d'automatisation personnalisé, nous étudions chaque projet avec attention. Contactez-nous pour en discuter.",
  },
];

const FAQItem = ({ item, isOpen, onClick }: { item: typeof FAQ_DATA[0]; isOpen: boolean; onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-colors"
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left bg-gray-900/50 hover:bg-gray-900/70 transition-colors"
      >
        <span className="text-white font-medium pr-4">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDownIcon className={`w-5 h-5 ${isOpen ? "text-orange-500" : "text-gray-400"}`} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 py-4 bg-gray-950/50 border-t border-gray-800">
              <p className="text-gray-400 leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ = () => {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-10">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            variants={slideInFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="Welcome-box py-[8px] px-[7px] border border-[#f9731680] opacity-[0.9] mx-auto w-fit"
          >
            <QuestionMarkCircleIcon className="text-[#f97316] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">{t.faq.badge}</h1>
          </motion.div>

          <motion.h2
            variants={slideInFromLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-500 py-6"
          >
            {t.faq.title}
          </motion.h2>

          <motion.p
            variants={slideInFromLeft(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            {t.faq.description}
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">{t.faq.moreQuestions}</p>
          <a
            href="https://wa.me/33658687475?text=Bonjour,%20j'ai%20une%20question%20concernant%20vos%20services"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 py-3 px-6 bg-gradient-to-r from-orange-500 to-violet-500 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all"
          >
            {t.faq.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
