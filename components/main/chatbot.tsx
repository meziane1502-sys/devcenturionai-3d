"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { useI18n } from "@/lib/i18n/context";

interface Message {
  id: number;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

// Simulated AI responses
const getAIResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("tarif") || lowerMessage.includes("prix") || lowerMessage.includes("coût")) {
    return "Nos tarifs démarrent à 490€ pour un site vitrine. Nous proposons 3 formules : Starter (490€), Business (890€) et Enterprise (sur devis). Chaque projet est unique, je vous invite à utiliser notre calculateur de devis ou à nous contacter pour une estimation personnalisée !";
  }

  if (lowerMessage.includes("délai") || lowerMessage.includes("temps") || lowerMessage.includes("durée")) {
    return "Les délais varient selon la complexité : \n• Site vitrine : 1-2 semaines\n• Site e-commerce : 2-4 semaines\n• Application web : 4-8 semaines\n• Chatbot IA : 1-2 semaines\n\nNous vous fournirons un planning précis lors de notre premier échange.";
  }

  if (lowerMessage.includes("service") || lowerMessage.includes("proposez") || lowerMessage.includes("faites")) {
    return "Nous proposons plusieurs services :\n• Sites web sur mesure (vitrine, e-commerce)\n• Chatbots IA intelligents\n• Dashboards analytics\n• Automatisation de processus\n• APIs et intégrations\n\nQuel service vous intéresse particulièrement ?";
  }

  if (lowerMessage.includes("devis") || lowerMessage.includes("contact")) {
    return "Parfait ! Vous pouvez :\n1. Utiliser notre calculateur de devis sur cette page\n2. Nous contacter directement sur WhatsApp\n3. M'expliquer votre projet ici et je transmettrai vos informations\n\nQuelle option préférez-vous ?";
  }

  if (lowerMessage.includes("bonjour") || lowerMessage.includes("salut") || lowerMessage.includes("hello")) {
    return "Bonjour ! Ravi de vous accueillir sur DevCenturionAi. Je suis là pour répondre à vos questions sur nos services de développement web et d'IA. Que puis-je faire pour vous ?";
  }

  if (lowerMessage.includes("merci")) {
    return "Avec plaisir ! N'hésitez pas si vous avez d'autres questions. Vous pouvez aussi nous contacter directement sur WhatsApp pour discuter de votre projet. À bientôt ! 🚀";
  }

  // Default response
  return "Merci pour votre message ! Pour vous répondre au mieux, pourriez-vous préciser votre demande ? Je peux vous renseigner sur :\n• Nos tarifs et formules\n• Les délais de réalisation\n• Nos différents services\n• Comment démarrer un projet";
};

export const Chatbot = () => {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [initialized, setInitialized] = useState(false);

  // Initialize with translated welcome message
  useEffect(() => {
    if (!initialized) {
      setMessages([{
        id: 0,
        type: "bot",
        content: t.chatbot.welcome,
        timestamp: new Date(),
      }]);
      setInitialized(true);
    }
  }, [t.chatbot.welcome, initialized]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length,
      type: "user",
      content: messageText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking delay
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

    // Add bot response
    const botMessage: Message = {
      id: messages.length + 1,
      type: "bot",
      content: getAIResponse(messageText),
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-violet-500 text-white shadow-lg flex items-center justify-center ${
          isOpen ? "hidden" : ""
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <ChatBubbleLeftRightIcon className="w-6 h-6" />

        {/* Pulse animation */}
        <span className="absolute w-full h-full rounded-full bg-orange-500 animate-ping opacity-30" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] h-[520px] bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-violet-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <SparklesIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{t.chatbot.title}</h3>
                  <p className="text-white/80 text-xs">DevCenturionAi</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <XMarkIcon className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === "user"
                        ? "bg-gradient-to-r from-orange-500 to-violet-500 text-white rounded-br-md"
                        : "bg-gray-800 text-gray-200 rounded-bl-md"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-800 p-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {t.chatbot.quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleSend(reply)}
                    className="px-3 py-1.5 text-xs bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition-colors border border-gray-700"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-800">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t.chatbot.placeholder}
                  className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-violet-500 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-shadow"
                >
                  <PaperAirplaneIcon className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
