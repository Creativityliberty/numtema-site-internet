
import React from 'react';
import { motion } from 'framer-motion';
import { Layout, GraduationCap, Cpu } from 'lucide-react';

export const Services: React.FC = () => {
  const items = [
    {
      icon: Layout,
      title: "Sites Web Haute-Conversion",
      desc: "Nous créons votre vitrine professionnelle en 72 heures. Design moderne, responsive et optimisé pour le business.",
      color: "text-blue-400"
    },
    {
      icon: GraduationCap,
      title: "Systèmes de Formations",
      desc: "Espaces membres, automatisation des paiements et gestion de contenu pour monétiser votre expertise.",
      color: "text-purple-400"
    },
    {
      icon: Cpu,
      title: "Intelligence Artificielle",
      desc: "Intégration de chatbots intelligents et automatisations CRM pour décupler votre productivité.",
      color: "text-[#16C60C]"
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
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#16C60C]/5 blur-3xl group-hover:bg-[#16C60C]/10 transition-all"></div>
              <div className={`p-5 rounded-2xl bg-white/5 ${item.color} group-hover:scale-110 group-hover:bg-[#16C60C]/5 transition-all`}>
                <item.icon size={48} />
              </div>
              <h3 className="text-3xl font-black leading-tight tracking-tight">{item.title}</h3>
              <p className="text-white/50 text-lg font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
