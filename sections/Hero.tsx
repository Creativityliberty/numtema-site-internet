
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, ShieldCheck, Globe } from 'lucide-react';
import { CONFIG } from '../config';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 60, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 1, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  }
};

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 hero-grid -z-10 opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#16C60C]/5 blur-[160px] rounded-full -z-10"></div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl w-full text-center"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#16C60C]/30 glass text-[10px] font-black uppercase tracking-[0.4em] mb-12 text-[#16C60C] shadow-lg shadow-[#16C60C]/10"
        >
          <Sparkles size={14} className="animate-pulse" />
          LIVRAISON 3 JOURS MAX • PREMIUM • ACCESSIBLE
        </motion.div>

        <motion.h1
          variants={item}
          className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-12"
        >
          Propulsez votre <br /> <span className="green-gradient italic">visibilité</span> en <br /> 72 Heures Chrono
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-2xl font-medium text-white/60 mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          Nümtema Agency crée des sites internet qui inspirent confiance et génèrent du profit. 
          <span className="block mt-4 text-white italic font-serif">"L'excellence n'attend pas : votre business mérite d'être en ligne dès maintenant."</span>
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href={`https://wa.me/${CONFIG.contact.whatsapp}`}
            className="w-full sm:w-auto bg-[#16C60C] text-white px-14 py-7 rounded-2xl font-black text-lg flex items-center justify-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-[#16C60C]/30"
          >
            WhatsApp maintenant <ArrowRight size={22} />
          </a>
          <button 
            onClick={() => document.getElementById('packs')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto glass px-14 py-7 rounded-2xl font-black text-lg hover:border-[#16C60C]/50 transition-all border-white/5 active:scale-95"
          >
            Voir les packs
          </button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-24 flex flex-wrap items-center justify-center gap-8 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
        >
          <div className="flex items-center gap-3 text-sm font-black tracking-widest transition-transform hover:scale-110 cursor-default"><Zap size={18} className="text-[#16C60C]"/> 48H À 72H</div>
          <div className="flex items-center gap-3 text-sm font-black tracking-widest transition-transform hover:scale-110 cursor-default"><Globe size={18} className="text-[#16C60C]"/> FRANCE & AFRIQUE</div>
          <div className="flex items-center gap-3 text-sm font-black tracking-widest transition-transform hover:scale-110 cursor-default"><ShieldCheck size={18} className="text-[#16C60C]"/> QUALITÉ STUDIO</div>
        </motion.div>
      </motion.div>
    </section>
  );
};
