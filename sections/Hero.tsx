
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, ShieldCheck, Globe } from 'lucide-react';
import { CONFIG } from '../config';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 hero-grid -z-10 opacity-40"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#16C60C]/10 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#16C60C]/20 glass text-[10px] font-black uppercase tracking-[0.4em] mb-12 text-[#16C60C]"
        >
          <Sparkles size={14} className="animate-pulse" />
          Premium • Rapide • Accessible
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-10"
        >
          Des sites modernes qui <span className="green-gradient">attirent des clients</span> — dès 350€
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-2xl font-medium text-white/60 mb-14 max-w-3xl mx-auto leading-relaxed"
        >
          Nümtema Agency crée des sites internet qui donnent confiance, convertissent et mettent en avant vos capacités. 
          <span className="block mt-4 text-white italic font-serif">"Tout se discute : l'objectif c'est de rendre réelle votre vision."</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href={`https://wa.me/${CONFIG.contact.whatsapp}`}
            className="w-full sm:w-auto bg-[#16C60C] text-white px-12 py-6 rounded-2xl font-black text-lg flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-2xl shadow-[#16C60C]/30"
          >
            WhatsApp maintenant <ArrowRight size={20} />
          </a>
          <button 
            onClick={() => document.getElementById('packs')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto glass px-12 py-6 rounded-2xl font-black text-lg hover:border-[#16C60C]/50 transition-all border-white/5"
          >
            Voir les packs
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-30 grayscale"
        >
          <div className="flex items-center gap-2 text-sm font-bold"><Zap size={16}/> Livraison rapide</div>
          <div className="flex items-center gap-2 text-sm font-bold"><Globe size={16}/> France & Afrique</div>
          <div className="flex items-center gap-2 text-sm font-bold"><ShieldCheck size={16}/> Design Premium</div>
        </motion.div>
      </div>
    </section>
  );
};
