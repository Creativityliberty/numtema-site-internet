
import React from 'react';
import { Portfolio } from '../sections/Portfolio';
import { motion } from 'framer-motion';

export const RealisationsPage: React.FC = () => {
  return (
    <div className="pt-40">
       <div className="px-6 max-w-7xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center md:text-left"
          >
             <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6">Nos Projets</h1>
             <p className="text-xl text-white/50 font-medium italic">"Des sites clairs, modernes, et orientés clients."</p>
          </motion.div>
       </div>
       <Portfolio />
       <div className="py-40 px-6 max-w-7xl mx-auto">
          <div className="p-16 rounded-[4rem] glass border-[#16C60C]/20 bg-[#16C60C]/5 flex flex-col items-center text-center">
             <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-8">Vous voulez le même résultat ?</h2>
             <p className="text-lg text-white/60 mb-12 max-w-2xl leading-relaxed">
                Montrez-nous votre idée, votre budget, et on construit votre projet ensemble. Tout se discute.
             </p>
             <a href="#/contact" className="bg-[#16C60C] text-white px-16 py-6 rounded-2xl font-black text-xl uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-[#16C60C]/20">
                Lancer mon projet
             </a>
          </div>
       </div>
    </div>
  );
};
