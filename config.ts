
export const CONFIG = {
  brand: {
    name: "Nümtema",
    suffix: "Agency",
    owner: "Lionel Numtema",
    tagline: "Vision • Excellence • Conversion",
    description: "Nous transformons votre activité en présence en ligne crédible + un système qui génère des clients en un temps record.",
    logoUrl: "https://www.bing.com/th/id/OIP.PIziIIufgeuJt8Ej9hb12QHaHa?w=171&h=211&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.1&pid=3.1&rm=2"
  },
  contact: {
    whatsapp: "33745434264", 
    email: "contact@numtema.agency",
    phone: "+33 7 45 43 42 64"
  },
  socials: {
    youtube: "https://www.youtube.com/@Numtema",
    instagram: "https://www.instagram.com/numtema_lion/",
    github: "https://github.com/Numtema"
  },
  links: {
    mayamedium: "https://www.mayamedium.fr/",
    tourmaline: "https://www.tourma-line.fr/",
    delharmonie: "https://delharmoniechezsoi.com",
    atelierMarion: "https://latelierdemarion.fr/",
    numtemaface: "https://www.numtemaface.fr/"
  },
  pricing: {
    packs: [
      {
        id: "starter",
        name: "Starter",
        price: 350,
        desc: "L'essentiel pour exister",
        features: ["Site One-Page complet", "WhatsApp intégré", "Formulaire contact", "Responsive mobile", "Livraison 48h-72h MAX"]
      },
      {
        id: "pro",
        name: "Pro",
        price: 500,
        desc: "Crédibilité maximale",
        features: ["Starter +", "SEO basique (indexation)", "1 page bonus", "Retouches express", "Livraison 3 JOURS MAX"]
      },
      {
        id: "semi",
        name: "Semi-Complet",
        price: 800,
        desc: "Machine à conversion",
        features: ["Site 5 pages", "Copywriting guidé", "Portfolio / Réalisations", "FAQ + Avis clients", "Livraison 3-5 jours"]
      },
      {
        id: "complet",
        name: "Complet",
        price: 1500,
        desc: "Full système digital",
        features: ["Design Premium", "IA / Automatisation simple", "Pages SEO ou Blog", "Calendrier RDV", "Support VIP 30 jours"]
      }
    ],
    options: [
      { name: "Logo simple", price: 60 },
      { name: "Bannière réseaux", price: 80 },
      { name: "Chatbot IA Simple", price: 150 },
      { name: "Chatbot IA Business", price: 350 },
      { name: "Multilingue", price: 200 }
    ]
  },
  formations: [
    {
      title: "IA pour Entrepreneurs",
      desc: "Apprenez à automatiser votre business avec les derniers outils IA.",
      price: "Dès 149€",
      tags: ["Tendance", "Pratique"]
    },
    {
      title: "Créer son Site Web",
      desc: "Devenez autonome sur la création et la gestion de votre site vitrine.",
      price: "Dès 129€",
      tags: ["Indépendance"]
    },
    {
      title: "Lancer son Activité",
      desc: "Structure, stratégie et outils pour passer de l'idée au premier client.",
      price: "Dès 199€",
      tags: ["Business"]
    }
  ]
};
