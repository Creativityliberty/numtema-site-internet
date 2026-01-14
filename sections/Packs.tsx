
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import { CONFIG } from '../config';

export const Packs: React.FC = () => {
  return (
    <section id="packs" className="py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="text-[#16C60C] text-[10px] font-black uppercase tracking-[0.4em] mb-4">Tarification claire</div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Choisissez votre <span className="green-gradient">Pack</span></h2>
          <div className="flex items-center justify-center gap-2 glass px-6 py-2 rounded-full max-w-fit mx-auto border-white/5">
             <Info size={14} className="text-[#16C60C]" />
             <p className="text-[11px] font-bold text-white/70">Un pack ne correspond pas ? Tout se discute.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONFIG.pricing.packs.map((pack) => (
            <motion.div
              key={pack.id}
              whileHover={{ scale: 1.02 }}
              className={`flex flex-col p-10 rounded-[3rem] glass border relative transition-all ${pack.id === 'semi' ? 'border-[#16C60C]/40 ring-1 ring-[#16C60C]/20 shadow-2xl shadow-[#16C60C]/10' : 'border-white/5'}`}
            >
              {pack.id === 'semi' && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#16C60C] text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Le plus populaire
                </div>
              )}
              <div className="mb-10">
                <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter">{pack.name}</h3>
                <p className="text-sm font-bold text-white/40">{pack.desc}</p>
              </div>
              <div className="text-5xl font-black tracking-tighter mb-10">
                {pack.price}€
              </div>
              <div className="flex-grow space-y-4 mb-10">
                {pack.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs font-bold text-white/70 leading-snug">
                    <Check size={14} className="text-[#16C60C] mt-0.5 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/${CONFIG.contact.whatsapp}?text=Salut Nümtema, je veux le Pack ${pack.name} à ${pack.price}€.`}
                className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest text-center transition-all ${pack.id === 'semi' ? 'bg-[#16C60C] text-white hover:bg-white hover:text-black' : 'bg-white/5 hover:bg-white hover:text-black'}`}
              >
                Je veux ce pack
              </a>
            </motion.div>
          ))}
        </div>

        {/* Options section */}
        <div className="mt-20 p-12 rounded-[4rem] glass border-white/5">
          <h3 className="text-2xl font-black uppercase tracking-tighter mb-8">Options & Extras <span className="text-[#16C60C] text-sm ml-2">(Pour aller plus loin)</span></h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {CONFIG.pricing.options.map((opt, i) => (
              <div key={i} className="flex justify-between items-center py-4 border-b border-white/5">
                <span className="text-sm font-bold text-white/60">{opt.name}</span>
                <span className="text-sm font-black text-[#16C60C]">+{opt.price}€</span>
              </div>
            ))}
            <div className="flex justify-between items-center py-4 border-b border-[#16C60C]/30 italic">
              <span className="text-sm font-bold text-white/80 italic">Chatbot IA Business</span>
              <span className="text-sm font-black text-[#16C60C]">350€</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
