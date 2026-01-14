
import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, Library, BrainCircuit } from 'lucide-react';

export const Services: React.FC = () => {
  const items = [
    {
      icon: MonitorSmartphone,
      title: "Sites Web Haute-Conversion",
      desc: "Nous créons votre vitrine professionnelle en 72 heures. Design moderne, responsive et optimisé pour le business.",
      color: "text-blue-400",
      bg: "bg-blue-500/10"
    },
    {
      icon: Library,
      title: "Systèmes de Formations",
      desc: "Espaces membres, automatisation des paiements et gestion de contenu pour monétiser votre expertise.",
      color: "text-purple-400",
      bg: "bg-purple-500/10"
    },
    {
      icon: BrainCircuit,
      title: "Intelligence Artificielle",
      desc: "Intégration de chatbots intelligents et automatisations CRM pour décupler votre productivité.",
      color: "text-[#16C60C]",
      bg: "bg-[#16C60C]/10"
    }
  ];

  return (
    <section id="services" className="py-40 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-28">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black tracking-tighter mb-8 uppercase"
          >
            L'EXPERT DES SOLUTIONS <br /><span className="text-[#16C60C]">ULTRA-RAPIDES</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 font-medium max-w-xl mx-auto italic text-lg"
          >
            Nous livrons des résultats concrets là où les autres prennent des semaines.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="glass p-14 rounded-[3.5rem] flex flex-col items-start gap-10 border-white/5 hover:border-[#16C60C]/30 transition-all group relative overflow-hidden"
            >
              {/* Animated Glow Background */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#16C60C]/5 blur-[80px] group-hover:bg-[#16C60C]/20 transition-all duration-700"></div>
              
              {/* Modern Icon Container */}
              <div className="relative">
                <div className={`absolute inset-0 ${item.bg} blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className={`relative p-6 rounded-3xl bg-white/5 border border-white/10 ${item.color} shadow-2xl group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 ease-out`}>
                  <item.icon size={44} strokeWidth={1.5} className="drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-black leading-tight tracking-tight uppercase">
                  {item.title}
                </h3>
                <p className="text-white/50 text-lg font-medium leading-relaxed group-hover:text-white/70 transition-colors">
                  {item.desc}
                </p>
              </div>

              {/* Subtle hover indicator */}
              <div className="w-12 h-1 bg-white/10 rounded-full group-hover:w-full group-hover:bg-[#16C60C] transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
