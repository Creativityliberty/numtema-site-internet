
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
      image: "/images/portfolio/delharmonie.png"
    },
    {
      name: "Nümtema Face",
      url: CONFIG.links.numtemaface,
      type: "Lead Generation Machine",
      desc: "Transformez vos visiteurs en clients avec des funnels vidéo interactifs. Une interface tech, moderne et ultra-efficace.",
      image: "/images/portfolio/numtema-face.png"
    },
    {
      name: "Maya Medium",
      url: CONFIG.links.mayamedium,
      type: "Guidance Spirituelle & Voyance",
      desc: "Un univers mystique, premium et apaisant. Design aux tons chauds et atmosphère spirituelle haut de gamme.",
      image: "/images/portfolio/maya-medium.png"
    },
    {
      name: "Tourma-Line",
      url: CONFIG.links.tourmaline,
      type: "Guidance & Soins Énergétiques",
      desc: "Plongez dans un univers naturel et mystique. Navigation fluide pour découvrir le potentiel de votre chemin de vie.",
      image: "/images/portfolio/tourmaline.png"
    },
    {
      name: "L'Atelier de Marion",
      url: CONFIG.links.atelierMarion,
      type: "Restauration & Terrasse",
      desc: "L'élégance culinaire à la française. Site vitrine mettant en avant une terrasse idyllique et une cuisine d'exception.",
      image: "/images/portfolio/atelier-marion.png"
    },
    {
      name: "SKE Logistics",
      url: CONFIG.links.skelogistics,
      type: "Import-Export & Logistique",
      desc: "Votre partenaire logistique de confiance. Solution complète pour les échanges France-Afrique avec une interface professionnelle.",
      image: "/images/portfolio/skelogistics.png"
    }
  ];

  return (
    <section id="realisations" className="py-20 sm:py-40 px-4 sm:px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 sm:mb-24 gap-6 sm:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter mb-4 sm:mb-6 uppercase">Réalisations Réelles</h2>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-20">
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
              className="group flex flex-col gap-6 sm:gap-8"
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
                <span className="text-[#16C60C] text-xs font-black uppercase tracking-[0.3em] mb-2 sm:mb-3 block">{work.type}</span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tighter mb-3 sm:mb-4">{work.name}</h3>
                <p className="text-white/40 text-base font-medium leading-relaxed max-w-lg">{work.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
