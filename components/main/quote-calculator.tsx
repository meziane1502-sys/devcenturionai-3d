"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SparklesIcon, CalculatorIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { useI18n } from "@/lib/i18n/context";

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  description: string;
}

interface FeatureOption {
  id: string;
  name: string;
  price: number;
}

const SERVICES: ServiceOption[] = [
  { id: "website", name: "Site Web Vitrine", basePrice: 490, description: "Site moderne et responsive" },
  { id: "ecommerce", name: "Site E-commerce", basePrice: 990, description: "Boutique en ligne complète" },
  { id: "chatbot", name: "Chatbot IA", basePrice: 390, description: "Assistant virtuel 24/7" },
  { id: "dashboard", name: "Dashboard Analytics", basePrice: 690, description: "Tableaux de bord interactifs" },
];

const FEATURES: FeatureOption[] = [
  { id: "seo", name: "Optimisation SEO", price: 150 },
  { id: "multilang", name: "Multilingue (3 langues)", price: 200 },
  { id: "analytics", name: "Analytics avancés", price: 100 },
  { id: "hosting", name: "Hébergement 1 an", price: 120 },
  { id: "maintenance", name: "Maintenance 6 mois", price: 250 },
  { id: "support", name: "Support prioritaire", price: 150 },
];

export const QuoteCalculator = () => {
  const { t } = useI18n();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [pages, setPages] = useState(5);

  const calculateTotal = () => {
    const service = SERVICES.find(s => s.id === selectedService);
    if (!service) return 0;

    const basePrice = service.basePrice;
    const pagesCost = selectedService === "website" || selectedService === "ecommerce"
      ? (pages - 5) * 50
      : 0;
    const featuresCost = selectedFeatures.reduce((acc, featureId) => {
      const feature = FEATURES.find(f => f.id === featureId);
      return acc + (feature?.price || 0);
    }, 0);

    return basePrice + Math.max(0, pagesCost) + featuresCost;
  };

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev =>
      prev.includes(featureId)
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const total = calculateTotal();

  return (
    <section id="calculator" className="py-20 px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            variants={slideInFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="Welcome-box py-[8px] px-[7px] border border-[#f9731680] opacity-[0.9] mx-auto w-fit"
          >
            <CalculatorIcon className="text-[#f97316] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">{t.calculator.badge}</h1>
          </motion.div>

          <motion.h2
            variants={slideInFromLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-500 py-6"
          >
            {t.calculator.title}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Options */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Service Selection */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">{t.calculator.selectService}</h3>
              <div className="grid grid-cols-2 gap-3">
                {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-4 rounded-xl border transition-all text-left ${
                      selectedService === service.id
                        ? "border-orange-500 bg-orange-500/10 shadow-[0_0_20px_rgba(249,115,22,0.2)]"
                        : "border-gray-700 hover:border-gray-600 bg-gray-900/50"
                    }`}
                  >
                    <div className="font-semibold text-white">{service.name}</div>
                    <div className="text-sm text-gray-400">{service.description}</div>
                    <div className="text-orange-500 font-bold mt-2">À partir de {service.basePrice}€</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Pages slider */}
            {(selectedService === "website" || selectedService === "ecommerce") && (
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">{t.calculator.pages}</h3>
                <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
                  <div className="flex justify-between text-white mb-2">
                    <span>Pages</span>
                    <span className="text-orange-500 font-bold">{pages}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={pages}
                    onChange={(e) => setPages(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-1">
                    <span>1</span>
                    <span>20+</span>
                  </div>
                </div>
              </div>
            )}

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {selectedService === "website" || selectedService === "ecommerce" ? "3" : "2"}. {t.calculator.options}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {FEATURES.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => toggleFeature(feature.id)}
                    className={`p-3 rounded-lg border transition-all text-left ${
                      selectedFeatures.includes(feature.id)
                        ? "border-violet-500 bg-violet-500/10"
                        : "border-gray-700 hover:border-gray-600 bg-gray-900/50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded border ${
                        selectedFeatures.includes(feature.id)
                          ? "bg-violet-500 border-violet-500"
                          : "border-gray-500"
                      }`}>
                        {selectedFeatures.includes(feature.id) && (
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="text-white text-sm">{feature.name}</span>
                    </div>
                    <div className="text-gray-400 text-sm mt-1">+{feature.price}€</div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Summary */}
          <motion.div
            variants={slideInFromRight(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-fit sticky top-24"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-6">{t.calculator.summary}</h3>

              {selectedService ? (
                <>
                  <div className="space-y-3 mb-6">
                    {/* Service */}
                    <div className="flex justify-between text-gray-300">
                      <span>{SERVICES.find(s => s.id === selectedService)?.name}</span>
                      <span>{SERVICES.find(s => s.id === selectedService)?.basePrice}€</span>
                    </div>

                    {/* Pages */}
                    {(selectedService === "website" || selectedService === "ecommerce") && pages > 5 && (
                      <div className="flex justify-between text-gray-300">
                        <span>{pages - 5} pages supplémentaires</span>
                        <span>{(pages - 5) * 50}€</span>
                      </div>
                    )}

                    {/* Features */}
                    {selectedFeatures.map(featureId => {
                      const feature = FEATURES.find(f => f.id === featureId);
                      return feature ? (
                        <div key={featureId} className="flex justify-between text-gray-300">
                          <span>{feature.name}</span>
                          <span>{feature.price}€</span>
                        </div>
                      ) : null;
                    })}
                  </div>

                  <div className="border-t border-gray-700 pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-xl text-white font-semibold">{t.calculator.total}</span>
                      <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-violet-500">
                        {total}€
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">{t.pricing.perProject}</p>
                  </div>

                  <a
                    href={`https://wa.me/33658687475?text=Bonjour,%20je%20souhaite%20un%20devis%20pour%20:%0A- Service: ${SERVICES.find(s => s.id === selectedService)?.name}%0A- Options: ${selectedFeatures.map(f => FEATURES.find(feat => feat.id === f)?.name).join(', ') || 'Aucune'}%0A- Estimation: ${total}€`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-violet-500 text-white font-semibold rounded-lg text-center block hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all"
                  >
                    {t.calculator.cta}
                  </a>
                </>
              ) : (
                <div className="text-center py-10">
                  <SparklesIcon className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">{t.calculator.selectPrompt}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
