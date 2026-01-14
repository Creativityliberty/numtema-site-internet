
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { CONFIG } from '../config';

export const Portfolio: React.FC = () => {
  const works = [
    {
      name: "Del'Harmonie Chez Soi",
      url: CONFIG.links.delharmonie,
      type: "Bien-être & Harmonisation",
      desc: "L'élégance au service du soin. Un univers visuel doux et professionnel pour le bien-être de l'habitat et de l'esprit.",
      image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Nümtema Face",
      url: CONFIG.links.numtemaface,
      type: "Lead Generation Machine",
      desc: "Transformez vos visiteurs en clients avec des funnels vidéo interactifs. Une interface tech, moderne et ultra-efficace.",
      image: "https://images.unsplash.com/photo-1626908013943-df94de54984c?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Maya Medium",
      url: CONFIG.links.mayamedium,
      type: "Guidance Spirituelle & Voyance",
      desc: "Un univers mystique, premium et apaisant. Design aux tons chauds et atmosphère spirituelle haut de gamme.",
      image: "https://images.unsplash.com/photo-1572248521570-58823296c64f?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Tourma-Line",
      url: CONFIG.links.tourmaline,
      type: "Guidance & Soins Énergétiques",
      desc: "Plongez dans un univers naturel et mystique. Navigation fluide pour découvrir le potentiel de votre chemin de vie.",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "L'Atelier de Marion",
      url: CONFIG.links.atelierMarion,
      type: "Restauration & Terrasse",
      desc: "L'élégance culinaire à la française. Site vitrine mettant en avant une terrasse idyllique et une cuisine d'exception.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="realisations" className="py-40 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">Réalisations Réelles</h2>
            <p className="text-white/50 text-lg font-medium italic leading-relaxed">
              "Des sites clairs, modernes, et orientés clients."
              <br />Regardez ce que nous avons déjà construit pour nos partenaires.
            </p>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={() => window.location.hash = '/realisations'}
            className="glass px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:border-[#16C60C] transition-all border-white/10"
          >
            Voir tous les projets
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-20">
          {works.map((work, i) => (
            <motion.a
              key={i}
              href={work.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col gap-8"
            >
              <div className="aspect-video bg-white/5 rounded-[3rem] overflow-hidden border border-white/5 group-hover:border-[#16C60C]/40 transition-all relative shadow-2xl">
                 <img 
                    src={work.image} 
                    alt={work.name}
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                 />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-500"></div>
                 <div className="absolute bottom-8 right-8 p-4 bg-[#16C60C] text-white rounded-2xl translate-y-20 group-hover:translate-y-0 transition-transform duration-500 shadow-xl shadow-[#16C60C]/30">
                    <ExternalLink size={24} />
                 </div>
              </div>
              <div>
                <span className="text-[#16C60C] text-xs font-black uppercase tracking-[0.3em] mb-3 block">{work.type}</span>
                <h3 className="text-3xl font-black tracking-tighter mb-4">{work.name}</h3>
                <p className="text-white/40 text-base font-medium leading-relaxed max-w-lg">{work.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
