
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Heart, MessageCircle } from 'lucide-react';
import { CONFIG } from '../config';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-40 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
           >
              <div className="text-[#16C60C] text-[10px] font-black uppercase tracking-[0.4em] mb-6">L'histoire de Nümtema</div>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 uppercase leading-[0.85]">
                L'Agence qui <br /><span className="text-[#16C60C]">casse les codes</span>
              </h1>
              <p className="text-xl text-white/50 font-medium leading-relaxed mb-10 italic">
                "Nümtema n'est pas une usine à sites. C'est un atelier de haute couture digitale où chaque pixel est pensé pour la conversion."
              </p>
              <p className="text-lg text-white/70 font-medium leading-relaxed mb-12">
                Fondée par Lionel Numtema, notre agence est née d'un constat simple : le web professionnel est devenu trop lent et trop complexe pour les entrepreneurs qui ont besoin de résultats immédiats. Nous avons décidé de simplifier tout ça en proposant une livraison ultra-rapide sans jamais sacrifier l'excellence.
              </p>
           </motion.div>
           <div className="relative">
              <div className="aspect-[4/5] bg-white/5 rounded-[4rem] overflow-hidden border border-white/10 relative">
                 <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                    alt={CONFIG.brand.owner} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                 <div className="absolute bottom-12 left-12">
                    <p className="text-2xl font-black tracking-tight">{CONFIG.brand.owner}</p>
                    <p className="text-[#16C60C] text-xs font-black uppercase tracking-widest">Fondateur & Visionnaire</p>
                 </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#16C60C] rounded-full flex items-center justify-center p-8 text-center text-black font-black text-xs uppercase tracking-tighter animate-pulse shadow-2xl shadow-[#16C60C]/40">
                 Tout se discute !
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-40">
           {[
             { icon: Zap, title: "Vitesse", text: "Nous livrons là où les autres font des devis. 72H pour un site pro." },
             { icon: Shield, title: "Fiabilité", text: "Un accompagnement humain, constant, de France jusqu'en Afrique." },
             { icon: Heart, title: "Passion", text: "Nous aimons ce que nous faisons, et cela se voit dans nos designs." }
           ].map((v, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="glass p-12 rounded-[3.5rem] border-white/5"
             >
                <div className="w-14 h-14 bg-[#16C60C]/10 rounded-2xl flex items-center justify-center text-[#16C60C] mb-8">
                   <v.icon size={28} />
                </div>
                <h4 className="text-2xl font-black uppercase mb-4">{v.title}</h4>
                <p className="text-white/50 font-medium">{v.text}</p>
             </motion.div>
           ))}
        </div>

        <div className="p-16 rounded-[4rem] glass border-[#16C60C]/20 bg-[#16C60C]/5 text-center">
           <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-8">Pourquoi "Nümtema" ?</h3>
           <p className="text-xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
             C'est plus qu'un nom, c'est une promesse de visibilité et de croissance. Nous croyons que chaque business, peu importe sa taille, mérite une armure digitale premium.
           </p>
           <a 
              href={`https://wa.me/${CONFIG.contact.whatsapp}`}
              className="inline-flex items-center gap-4 bg-[#16C60C] text-white px-12 py-6 rounded-2xl font-black text-lg uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-[#16C60C]/20"
           >
              Discuter avec Lionel <MessageCircle size={24} />
           </a>
        </div>
      </div>
    </div>
  );
};
