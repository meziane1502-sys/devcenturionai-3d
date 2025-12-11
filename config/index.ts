import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "DevCenturionAi | Solutions Digitales Premium",
  other: {
    "google": "notranslate",
  },
  description: "Sites web sur mesure, chatbots IA, automatisation et dashboards. Transformez votre business avec l'intelligence artificielle.",
  keywords: [
    "devcenturionai",
    "agence digitale",
    "sites web",
    "chatbot ia",
    "automatisation",
    "dashboard",
    "intelligence artificielle",
    "développement web",
    "nextjs",
    "react",
    "tailwindcss",
    "france",
    "solutions digitales",
    "e-commerce",
    "site vitrine",
    "api",
    "intégration",
    "pme",
    "startup",
    "business",
  ] as Array<string>,
  authors: {
    name: "DevCenturionAi",
    url: "https://meziane1502-sys.github.io/portfolio-demos/",
  },
  openGraph: {
    title: "DevCenturionAi | Solutions Digitales Premium",
    description: "Sites web sur mesure, chatbots IA, automatisation et dashboards. Transformez votre business avec l'intelligence artificielle.",
    url: "https://devcenturionai.com",
    siteName: "DevCenturionAi",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevCenturionAi | Solutions Digitales Premium",
    description: "Sites web sur mesure, chatbots IA, automatisation et dashboards.",
  },
} as const;
