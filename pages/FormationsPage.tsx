
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { CONFIG } from '../config';

export const FormationsPage: React.FC = () => {
  return (
    <div className="pt-40 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="w-20 h-20 rounded-3xl bg-[#16C60C]/10 flex items-center justify-center text-[#16C60C] mx-auto mb-10"
           >
              <GraduationCap size={40} />
           </motion.div>
           <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase">Formations</h1>
           <p className="text-xl text-white/50 font-medium max-w-2xl mx-auto italic">"Pas de théorie inutile. On va droit au résultat."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {CONFIG.formations.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-12 rounded-[4rem] border-white/5 hover:border-[#16C60C]/40 transition-all flex flex-col"
            >
              <div className="flex gap-2 mb-8">
                 {f.tags.map(t => (
                   <span key={t} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 text-[#16C60C] rounded-full border border-[#16C60C]/20">{t}</span>
                 ))}
              </div>
              <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter leading-none">{f.title}</h3>
              <p className="text-white/60 font-medium leading-relaxed mb-10 flex-grow">{f.desc}</p>
              
              <div className="flex items-center justify-between mb-10">
                 <span className="text-sm font-bold text-white/40 uppercase tracking-widest">À partir de</span>
                 <span className="text-3xl font-black">{f.price}</span>
              </div>

              <a
                href={`https://wa.me/${CONFIG.contact.whatsapp}?text=Salut Lionel, je veux en savoir plus sur la formation ${f.title}.`}
                className="w-full py-5 rounded-2xl bg-[#16C60C] text-white font-black text-xs uppercase tracking-widest text-center flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all shadow-xl shadow-[#16C60C]/10"
              >
                S'inscrire / WhatsApp <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-16 rounded-[4rem] glass border-dashed border-[#16C60C]/40 text-center">
           <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Une formation sur-mesure ?</h3>
           <p className="text-white/50 font-medium text-lg mb-10">Tout se discute. On peut adapter le programme selon votre niveau et vos objectifs business.</p>
           <button 
              onClick={() => window.location.hash = '#/contact'}
              className="px-12 py-6 glass rounded-2xl font-black text-sm uppercase tracking-widest hover:border-[#16C60C] transition-all border-white/10"
           >
              Discutons-en
           </button>
        </div>
      </div>
    </div>
  );
};
