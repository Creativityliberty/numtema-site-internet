
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Mail, Send, CheckCircle, Clock, Star, Eye } from 'lucide-react';
import { CONFIG } from '../config';

export const ContactPage: React.FC = () => {
  const engagements = [
    {
      icon: Eye,
      title: "Transparence Totale",
      desc: "Aucun coût caché. Vous savez exactement où va chaque euro investi dans votre visibilité."
    },
    {
      icon: Clock,
      title: "Vitesse 72H",
      desc: "Nous respectons nos délais. Un site professionnel livré en 3 jours max pour les packs Starter et Pro."
    },
    {
      icon: Star,
      title: "Qualité Premium",
      desc: "Pas de templates génériques. Chaque design est soigné pour refléter l'excellence de votre marque."
    }
  ];

  return (
    <div className="pt-40 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Contact Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          
          <div className="lg:col-span-5">
             <motion.h1 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase leading-[0.85]"
             >
               Boostez votre <span className="text-[#16C60C]">visibilité</span>
             </motion.h1>
             <p className="text-xl text-white/50 font-medium leading-relaxed mb-12">
                "Tout se discute : l'objectif c'est de rendre réelle votre vision." 
                Dites-nous ce que vous avez en tête, Lionel s'adapte à votre besoin.
             </p>

             <div className="space-y-6">
                <a href={`https://wa.me/${CONFIG.contact.whatsapp}`} className="flex items-center gap-6 p-8 glass rounded-3xl border-[#16C60C]/30 bg-[#16C60C]/5 hover:scale-105 transition-all group">
                   <div className="w-14 h-14 rounded-2xl bg-[#16C60C] flex items-center justify-center text-white shadow-lg"><MessageSquare size={28} /></div>
                   <div>
                      <h4 className="font-black text-lg">WhatsApp (Le plus rapide)</h4>
                      <p className="text-white/40 font-bold text-sm">Réponse sous 5 min en moyenne</p>
                   </div>
                </a>
                <a href={`tel:${CONFIG.contact.phone}`} className="flex items-center gap-6 p-8 glass rounded-3xl border-white/5 hover:border-white/20 transition-all">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white"><Phone size={28} /></div>
                   <div>
                      <h4 className="font-black text-lg">Appel direct</h4>
                      <p className="text-white/40 font-bold text-sm">Parlons de votre projet de vive voix</p>
                   </div>
                </a>
             </div>
          </div>

          <div className="lg:col-span-7">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="glass p-12 md:p-16 rounded-[4rem] border-white/10"
             >
                <h3 className="text-3xl font-black uppercase tracking-tight mb-10">Briefez-nous ici</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Nom complet</label>
                         <input type="text" className="w-full glass border-white/10 rounded-2xl py-5 px-8 outline-none focus:border-[#16C60C]/50 transition-all font-bold" placeholder="Votre nom" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Email</label>
                         <input type="email" className="w-full glass border-white/10 rounded-2xl py-5 px-8 outline-none focus:border-[#16C60C]/50 transition-all font-bold" placeholder="email@exemple.com" />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Votre Projet</label>
                      <textarea rows={5} className="w-full glass border-white/10 rounded-2xl py-5 px-8 outline-none focus:border-[#16C60C]/50 transition-all font-bold" placeholder="Expliquez-nous votre vision et votre budget..."></textarea>
                   </div>
                   <button className="w-full py-6 bg-[#16C60C] text-white rounded-2xl font-black text-lg uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-white hover:text-black transition-all shadow-2xl shadow-[#16C60C]/20">
                      Envoyer le brief <Send size={20} />
                   </button>
                </form>
             </motion.div>
          </div>
        </div>

        {/* Engagements Section */}
        <div className="py-24 border-t border-white/5">
           <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4">Nos Engagements</h2>
              <p className="text-white/40 font-medium">Pourquoi choisir Nümtema Agency pour votre business.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {engagements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 glass rounded-[3rem] border-white/5 hover:border-[#16C60C]/20 transition-all group"
                >
                   <div className="w-14 h-14 bg-[#16C60C]/10 rounded-2xl flex items-center justify-center text-[#16C60C] mb-8 group-hover:scale-110 transition-transform">
                      <item.icon size={30} />
                   </div>
                   <h4 className="text-xl font-black uppercase mb-4 tracking-tight">{item.title}</h4>
                   <p className="text-white/50 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Final CTA */}
        <div className="mt-32 p-16 rounded-[4rem] glass border-dashed border-[#16C60C]/40 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[#16C60C]/5 -z-10 blur-3xl"></div>
           <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">On commence quand ?</h3>
           <p className="text-white/50 font-medium text-lg mb-10 max-w-xl mx-auto">Rejoignez les entrepreneurs qui ont déjà franchi le pas vers une présence digitale de haut niveau.</p>
           <a 
              href={`https://wa.me/${CONFIG.contact.whatsapp}`}
              className="inline-flex px-12 py-6 bg-[#16C60C] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-[#16C60C]/20"
           >
              Lancer ma transformation
           </a>
        </div>
      </div>
    </div>
  );
};
