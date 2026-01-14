
import React from 'react';
import { motion } from 'framer-motion';
import { Layout, GraduationCap, Cpu } from 'lucide-react';

export const Services: React.FC = () => {
  const items = [
    {
      icon: Layout,
      title: "Sites internet qui convertissent",
      desc: "Notre spécialité. Du site One-Page au multi-pages complexe, nous bâtissons votre crédibilité en ligne.",
      color: "text-blue-400"
    },
    {
      icon: GraduationCap,
      title: "Plateformes de cours / Formations",
      desc: "Espaces membres sécurisés, paiements automatiques et LMS complets pour monétiser votre savoir.",
      color: "text-purple-400"
    },
    {
      icon: Cpu,
      title: "IA & Automatisations",
      desc: "Chatbots intelligents, tri de prospects et automatisation CRM pour gagner du temps et de l'argent.",
      color: "text-[#D4AF37]"
    }
  ];

  return (
    <section id="services" className="py-40 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">Ce qu'on fait de mieux</h2>
          <p className="text-white/50 font-medium max-w-xl mx-auto italic">Nous construisons des solutions digitales claires, efficaces et adaptées à votre budget.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass p-12 rounded-[3rem] flex flex-col items-start gap-8 border-white/5 hover:border-[#D4AF37]/30 transition-all group"
            >
              <div className={`p-4 rounded-2xl bg-white/5 ${item.color} group-hover:scale-110 transition-transform`}>
                <item.icon size={40} />
              </div>
              <h3 className="text-3xl font-black leading-tight">{item.title}</h3>
              <p className="text-white/60 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
