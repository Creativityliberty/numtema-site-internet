
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Mail, Send } from 'lucide-react';
import { CONFIG } from '../config';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-40 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-5">
             <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase leading-[0.85]">Contactez <span className="text-[#D4AF37]">Nümtema</span> Agency</h1>
             <p className="text-xl text-white/50 font-medium leading-relaxed mb-12">
                "Tout se discute : l'objectif c'est de rendre réelle votre vision." 
                Dites-nous ce que vous avez en tête, on s'adapte.
             </p>

             <div className="space-y-6">
                <a href={`https://wa.me/${CONFIG.contact.whatsapp}`} className="flex items-center gap-6 p-8 glass rounded-3xl border-[#D4AF37]/30 bg-[#D4AF37]/5 hover:scale-105 transition-all group">
                   <div className="w-14 h-14 rounded-2xl bg-[#D4AF37] flex items-center justify-center text-black shadow-lg"><MessageSquare size={28} /></div>
                   <div>
                      <h4 className="font-black text-lg">WhatsApp (Le plus rapide)</h4>
                      <p className="text-white/40 font-bold text-sm">Réponse sous 5 min</p>
                   </div>
                </a>
                <a href={`tel:${CONFIG.contact.phone}`} className="flex items-center gap-6 p-8 glass rounded-3xl border-white/5 hover:border-white/20 transition-all">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white"><Phone size={28} /></div>
                   <div>
                      <h4 className="font-black text-lg">Réserver un appel</h4>
                      <p className="text-white/40 font-bold text-sm">On clarifie votre vision au téléphone</p>
                   </div>
                </a>
                <a href={`mailto:${CONFIG.contact.email}`} className="flex items-center gap-6 p-8 glass rounded-3xl border-white/5 hover:border-white/20 transition-all">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white"><Mail size={28} /></div>
                   <div>
                      <h4 className="font-black text-lg">Email</h4>
                      <p className="text-white/40 font-bold text-sm">Pour les briefs détaillés</p>
                   </div>
                </a>
             </div>
          </div>

          <div className="lg:col-span-7">
             <div className="glass p-12 md:p-16 rounded-[4rem] border-white/10">
                <h3 className="text-3xl font-black uppercase tracking-tight mb-10">Laissez un message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Nom complet</label>
                         <input type="text" className="w-full glass border-white/10 rounded-2xl py-5 px-8 outline-none focus:border-[#D4AF37]/50 transition-all font-bold" placeholder="Jean Dupont" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Email</label>
                         <input type="email" className="w-full glass border-white/10 rounded-2xl py-5 px-8 outline-none focus:border-[#D4AF37]/50 transition-all font-bold" placeholder="jean@email.com" />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Votre vision / Projet</label>
                      <textarea rows={5} className="w-full glass border-white/10 rounded-2xl py-5 px-8 outline-none focus:border-[#D4AF37]/50 transition-all font-bold" placeholder="Expliquez-nous votre projet en quelques lignes..."></textarea>
                   </div>
                   <button className="w-full py-6 bg-white text-black rounded-2xl font-black text-lg uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-[#D4AF37] transition-all shadow-2xl">
                      Envoyer le message <Send size={20} />
                   </button>
                </form>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
