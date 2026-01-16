
import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, BrainCircuit, Zap, Globe2, ShieldCheck, Rocket } from 'lucide-react';
import { cn } from '../lib/utils';

const BentoCard = ({
  children,
  className,
  title,
  icon: Icon,
  description,
  delay = 0
}: {
  children?: React.ReactNode,
  className?: string,
  title: string,
  icon: any,
  description?: string,
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -5 }}
    className={cn(
      "glass group relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border-white/5 p-6 sm:p-8 hover:border-[#16C60C]/30 transition-all duration-500",
      className
    )}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#16C60C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="p-3 rounded-2xl bg-white/5 text-[#16C60C] group-hover:scale-110 group-hover:bg-[#16C60C]/10 transition-all duration-500">
          <Icon size={24} />
        </div>
        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
          <Rocket size={12} className="text-[#16C60C]" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-black uppercase tracking-tight mb-2">{title}</h3>
        {description && <p className="text-white/40 text-sm font-medium leading-relaxed">{description}</p>}
      </div>
      {children}
    </div>
  </motion.div>
);

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-40 px-4 sm:px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#16C60C]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 sm:mb-20 gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#16C60C] text-[10px] font-black uppercase tracking-[0.4em] mb-4"
            >
              Expertise & Vision
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9]"
            >
              MES SOLUTIONS <br /><span className="green-gradient">MOBILE-FIRST</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 font-medium max-w-sm italic text-right hidden md:block"
          >
            "Je ne crée pas des outils, je bâtis ton empire digital."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Main Service Card */}
          <BentoCard
            title="SITES WEB HAUTE-COUTURE"
            icon={MonitorSmartphone}
            description="L'équilibre parfait entre design mobile et conversion. Pensé pour ton téléphone d'abord."
            className="md:col-span-2 md:row-span-2 min-h-[400px]"
            delay={0.1}
          >
            <div className="mt-auto pt-10">
              <div className="flex -space-x-4 mb-6">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-white/10 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-black bg-[#16C60C] flex items-center justify-center text-[10px] font-black">+45</div>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#16C60C]">Projets livrés avec succès</p>
            </div>
          </BentoCard>

          {/* AI Lab Card */}
          <BentoCard
            title="IA BUSINESS LAB"
            icon={BrainCircuit}
            description="J'automatise tes ventes et ton support client avec l'IA sur-mesure."
            className="md:col-span-1"
            delay={0.2}
          />

          {/* Speed Card */}
          <BentoCard
            title="CHRONO 72H"
            icon={Zap}
            className="md:col-span-1 bg-[#16C60C]/5 border-[#16C60C]/20"
            delay={0.3}
          >
            <div className="flex flex-col items-center justify-center flex-grow py-4">
              <span className="text-6xl font-black text-[#16C60C] tracking-tighter">72H</span>
              <span className="text-[10px] font-black uppercase tracking-widest mt-2 opacity-60 text-white">Livraison Garantie</span>
            </div>
          </BentoCard>

          {/* Reach Card */}
          <BentoCard
            title="RAYONNEMENT GLOBAL"
            icon={Globe2}
            description="De Paris à Abidjan, je connecte les entrepreneurs au monde entier."
            className="md:col-span-2"
            delay={0.4}
          >
            <div className="mt-6 flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase text-white/40">Couverture</span>
                <span className="text-sm font-bold">France • Afrique • Europe</span>
              </div>
              <div className="ml-auto w-2 h-2 bg-[#16C60C] rounded-full animate-ping" />
            </div>
          </BentoCard>

          {/* Trust Card */}
          <BentoCard
            title="QUALITÉ STUDIO"
            icon={ShieldCheck}
            description="Zéro compromis. Code propre, design original, support constant."
            className="md:col-span-1"
            delay={0.5}
          />

          {/* Training Card */}
          <BentoCard
            title="TRANSMISSION"
            icon={Rocket}
            description="Devenez autonome sur vos outils digitaux."
            className="md:col-span-1"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};
