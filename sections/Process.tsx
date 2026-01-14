
import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../config';

export const Process: React.FC = () => {
  const steps = [
    { num: "01", title: "Brief WhatsApp", desc: "Vous nous écrivez, on clarifie votre besoin et on choisit le pack." },
    { num: "02", title: "Maquette", desc: "On crée la structure et le design. Vous validez avant qu'on développe." },
    { num: "03", title: "Développement", desc: "On donne vie à votre site avec les meilleures technologies." },
    { num: "04", title: "Livraison", desc: "On met en ligne, on fait les retouches et on vous accompagne." }
  ];

  return (
    <section className="py-40 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9]">COMMENT ON TRAVAILLE <span className="text-[#16C60C]">?</span></h2>
            <p className="text-xl text-white/60 font-medium leading-relaxed italic mb-12 border-l-4 border-[#16C60C] pl-8">
               "Moi c'est {CONFIG.brand.owner}. J'aide les entrepreneurs à transformer leurs idées en présence digitale pro et crédible."
            </p>
            <div className="glass p-8 rounded-3xl inline-block border-white/5">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden border border-[#16C60C]/30">
                     <img src={CONFIG.brand.logoUrl} alt={CONFIG.brand.owner} className="w-full h-full object-cover" />
                  </div>
                  <div>
                     <p className="font-black text-sm">{CONFIG.brand.owner}</p>
                     <p className="text-[10px] uppercase font-bold text-[#16C60C] tracking-widest">Disponible France/Afrique</p>
                  </div>
               </div>
               <p className="text-xs text-white/50 font-bold max-w-xs leading-relaxed">Je travaille avec toi, pas juste pour toi. Je ne disparais pas après le brief.</p>
            </div>
          </div>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 group"
              >
                <div className="text-4xl md:text-5xl font-black text-[#16C60C]/10 group-hover:text-[#16C60C] transition-colors duration-500 font-serif italic">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">{step.title}</h3>
                  <p className="text-white/40 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
