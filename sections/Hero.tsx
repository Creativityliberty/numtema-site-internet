import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  hidden: { y: 60, opacity: 0, filter: 'blur(10px)' },
  show: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const wordContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const wordItem = {
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["en 72 Heures", "en 3 jours"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 sm:pt-40 lg:pt-48 pb-12 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 hero-grid -z-10 opacity-30"></div>

      {/* Screenshot-Style Overlapping Tilted Images */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10 opacity-60 overflow-hidden">
        <div className="relative w-full max-w-7xl h-full flex items-center justify-center translate-y-10">
          {/* Nature Image (Bottom) */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateZ: -35 }}
            animate={{ opacity: 0.4, x: -180, rotateZ: -45, y: 150 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute w-[400px] md:w-[600px] aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200&auto=format&fit=crop"
              alt="Nature"
              className="w-full h-full object-cover scale-110"
            />
          </motion.div>

          {/* Tech/Work Image (Top) */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateZ: -25 }}
            animate={{ opacity: 0.8, x: 120, rotateZ: -45, y: -150 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="absolute w-[500px] md:w-[700px] aspect-[16/10] rounded-[3rem] overflow-hidden border border-[#16C60C]/30 shadow-2xl z-10"
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
              alt="Workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#16C60C]/20 to-transparent"></div>
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl w-full text-center relative z-20"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[#16C60C]/30 glass text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-8 sm:mb-12 text-[#16C60C] shadow-lg shadow-[#16C60C]/10"
        >
          <Sparkles size={14} className="animate-pulse" />
          LIVRAISON 3 JOURS • TON SITE MOBILE-FIRST • ACCESSIBLE
        </motion.div>

        <motion.h1
          variants={wordContainer}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8rem] font-black tracking-tighter leading-[0.8] mb-8 sm:mb-12 lg:mb-16 flex flex-wrap justify-center gap-x-3 sm:gap-x-4 md:gap-x-8"
        >
          {["Propulsez", "votre"].map((word, i) => (
            <motion.span key={i} variants={wordItem} className="inline-block uppercase">{word}</motion.span>
          ))}
          <motion.span
            variants={wordItem}
            className="green-gradient italic w-full block overflow-hidden pb-4 uppercase"
          >
            visibilité
          </motion.span>

          <div className="relative flex items-center justify-center min-w-[300px] md:min-w-[600px] h-[1em]">
            <AnimatePresence mode="wait">
              <motion.div
                key={textIndex}
                initial={{ y: 40, opacity: 0, filter: 'blur(10px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: -40, opacity: 0, filter: 'blur(10px)' }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="flex items-center gap-x-4 md:gap-x-8 whitespace-nowrap"
              >
                <span className="inline-block uppercase">{texts[textIndex]}</span>

                {textIndex === 1 && (
                  <div className="relative inline-block w-0">
                    <motion.span
                      initial={{ scale: 0, rotate: -35, opacity: 0, x: -20 }}
                      animate={{ scale: 1, rotate: -15, opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, type: 'spring', stiffness: 260, damping: 20 }}
                      className="absolute -top-10 md:-top-20 left-4 md:left-8 font-brush text-[60px] md:text-[100px] text-red-600 leading-none select-none drop-shadow-2xl z-50"
                    >
                      MAX
                    </motion.span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-base sm:text-lg md:text-2xl font-medium text-white/60 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Je crée ton site qui inspire confiance et génère des clients.
          <span className="block mt-4 text-white italic font-serif">"Ton business mérite d'être en ligne dès maintenant."</span>
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-8 px-4"
        >
          <a
            href={`https://wa.me/${CONFIG.contact.whatsapp}`}
            className="w-full sm:w-auto bg-[#16C60C] text-white px-10 sm:px-14 py-5 sm:py-7 rounded-full font-black text-base sm:text-lg flex items-center justify-center gap-3 sm:gap-4 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-[#16C60C]/40 min-h-[56px]"
          >
            Parle-moi sur WhatsApp <ArrowRight size={22} />
          </a>
          <button
            onClick={() => document.getElementById('packs')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto glass px-10 sm:px-14 py-5 sm:py-7 rounded-full font-black text-base sm:text-lg hover:border-[#16C60C]/50 transition-all border-white/5 active:scale-95 min-h-[56px]"
          >
            Voir mes packs
          </button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-24 lg:mt-32 flex flex-wrap items-center justify-center gap-8 md:gap-20 lg:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
        >
          <div className="flex items-center gap-3 text-sm font-black tracking-widest transition-transform hover:scale-110 cursor-default"><Zap size={18} className="text-[#16C60C]" /> 48H À 72H</div>
          <div className="flex items-center gap-3 text-sm font-black tracking-widest transition-transform hover:scale-110 cursor-default"><Globe size={18} className="text-[#16C60C]" /> FRANCE & AFRIQUE</div>
          <div className="flex items-center gap-3 text-sm font-black tracking-widest transition-transform hover:scale-110 cursor-default"><ShieldCheck size={18} className="text-[#16C60C]" /> QUALITÉ STUDIO</div>
        </motion.div>
      </motion.div>
    </section>
  );
};