import { FaWhatsapp } from "react-icons/fa";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// Services DevCenturionAi
export const SKILL_DATA = [
  {
    skill_name: "Sites Web",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React/Next.js",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Chatbots IA",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Automatisation",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Dashboards",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "APIs",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    link: "https://wa.me/33658687475",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com/devcenturionai",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/company/devcenturionai",
  },
] as const;

// Technologies Frontend
export const FRONTEND_SKILL = [
  {
    skill_name: "HTML5",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS3",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
] as const;

// Technologies Backend & IA
export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "GraphQL",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

// Outils & DevOps
export const FULLSTACK_SKILL = [
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "OpenAI",
    image: "openai.png",
    width: 60,
    height: 60,
  },
] as const;

// Projets / Démos
export const PROJECTS = [
  {
    title: "Sites Web Sur Mesure",
    description:
      "Sites vitrines et e-commerce modernes, responsives et optimisés SEO. Design premium avec animations fluides, intégration de paiements Stripe et formulaires de contact. Performance maximale pour convertir vos visiteurs en clients.",
    image: "/projects/project-1.png",
    link: "https://meziane1502-sys.github.io/portfolio-demos/",
  },
  {
    title: "Chatbots IA Intelligents",
    description:
      "Assistants virtuels propulsés par l'IA pour automatiser votre service client 24/7. Réponses instantanées, qualification de leads et intégration WhatsApp. Boostez votre productivité tout en offrant une expérience client exceptionnelle.",
    image: "/projects/project-2.png",
    link: "https://meziane1502-sys.github.io/portfolio-demos/",
  },
  {
    title: "Dashboards Analytics",
    description:
      "Tableaux de bord temps réel pour visualiser vos KPIs. Graphiques interactifs, rapports automatisés et alertes personnalisées. Prenez des décisions data-driven avec une vue complète sur votre activité.",
    image: "/projects/project-3.png",
    link: "https://meziane1502-sys.github.io/portfolio-demos/",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Services",
    data: [
      {
        name: "Sites Web",
        icon: null,
        link: "#projects",
      },
      {
        name: "Chatbots IA",
        icon: null,
        link: "#projects",
      },
      {
        name: "Dashboards",
        icon: null,
        link: "#projects",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "WhatsApp",
        icon: FaWhatsapp,
        link: "https://wa.me/33658687475",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/company/devcenturionai",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/meziane1502-sys",
      },
    ],
  },
  {
    title: "Légal",
    data: [
      {
        name: "Mentions légales",
        icon: null,
        link: "/mentions-legales",
      },
      {
        name: "CGV",
        icon: null,
        link: "/cgv",
      },
      {
        name: "Confidentialité",
        icon: null,
        link: "/confidentialite",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Services",
    link: "#skills",
  },
  {
    title: "Projets",
    link: "#projects",
  },
  {
    title: "Tarifs",
    link: "#pricing",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/meziane1502-sys",
};

// Tarifs
export const PRICING = [
  {
    title: "Starter",
    price: "490",
    popular: false,
    features: [
      "Site vitrine one-page",
      "Design responsive",
      "Formulaire de contact",
      "Hébergement 1 an",
      "Support email",
    ],
  },
  {
    title: "Business",
    price: "890",
    popular: true,
    features: [
      "Site multi-pages",
      "Chatbot IA intégré",
      "Analytics dashboard",
      "SEO optimisé",
      "Support prioritaire",
    ],
  },
  {
    title: "Enterprise",
    price: "Sur devis",
    popular: false,
    features: [
      "Solution sur mesure",
      "IA personnalisée",
      "Automatisations",
      "API dédiées",
      "Support 24/7",
    ],
  },
] as const;
