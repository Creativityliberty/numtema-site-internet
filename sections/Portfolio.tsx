
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { CONFIG } from '../config';

export const Portfolio: React.FC = () => {
  const works = [
    {
      name: "L'Atelier de Marion",
      url: CONFIG.links.atelierMarion,
      type: "Restauration & Livraison locale",
      desc: "Site frais et appétissant avec commande WhatsApp intégrée. Design moderne orienté conversion locale.",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "mayamedium.fr",
      url: CONFIG.links.mayamedium,
      type: "Site vitrine (Bien-être)",
      desc: "Design épuré et rassurant pour un parcours utilisateur serein.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "tourma-line.fe",
      url: CONFIG.links.tourmaline,
      type: "E-commerce & Branding",
      desc: "Mise en avant de produits haut de gamme avec une touche moderne.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "delharmoniechezsoi.com",
      url: CONFIG.links.delharmonie,
      type: "Plateforme de services",
      desc: "Optimisation du tunnel de réservation et gestion des leads.",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="realisations" className="py-40 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-10">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">Réalisations</h2>
            <p className="text-white/50 text-lg font-medium italic leading-relaxed">
              "Des sites clairs, modernes, et orientés clients."
              <br />Ils nous ont fait confiance pour leur présence digitale.
            </p>
          </div>
          <button className="glass px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:border-[#16C60C] transition-all">
            Voir tous les projets
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {works.map((work, i) => (
            <motion.a
              key={i}
              href={work.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-6"
            >
              <div className="aspect-video bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/5 group-hover:border-[#16C60C]/40 transition-all relative">
                 <img 
                    src={work.image} 
                    alt={work.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all"></div>
                 <div className="absolute bottom-6 right-6 p-3 bg-[#16C60C] text-white rounded-xl translate-y-20 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                    <ExternalLink size={20} />
                 </div>
              </div>
              <div>
                <span className="text-[#16C60C] text-[10px] font-black uppercase tracking-widest">{work.type}</span>
                <h3 className="text-2xl font-black tracking-tighter mt-1 mb-3">{work.name}</h3>
                <p className="text-white/40 text-sm font-medium leading-relaxed">{work.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
