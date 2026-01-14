
import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Github } from 'lucide-react';
import { CONFIG } from '../config';

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
             <Link to="/" className="flex items-center gap-4 mb-6">
               <img src={CONFIG.brand.logoUrl} alt="Logo" className="w-12 h-12 object-contain rounded-full border border-white/10" />
               <span className="text-3xl font-black tracking-tighter uppercase block">
                 {CONFIG.brand.name}<span className="text-[#16C60C]">{CONFIG.brand.suffix}</span>
               </span>
             </Link>
             <p className="text-white/40 text-lg font-medium leading-relaxed max-w-sm mb-10">
               {CONFIG.brand.description}
             </p>
             <div className="flex gap-6">
                <a href={CONFIG.socials.youtube} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center text-white hover:bg-[#16C60C] hover:text-white transition-all">
                   <Youtube size={20} />
                </a>
                <a href={CONFIG.socials.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center text-white hover:bg-[#16C60C] hover:text-white transition-all">
                   <Instagram size={20} />
                </a>
                <a href={CONFIG.socials.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center text-white hover:bg-[#16C60C] hover:text-white transition-all">
                   <Github size={20} />
                </a>
             </div>
          </div>

          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-white/30">Navigation</h4>
             <div className="flex flex-col gap-4 text-sm font-bold text-white/60">
                <Link to="/" className="hover:text-[#16C60C] transition-colors">Accueil</Link>
                <Link to="/realisations" className="hover:text-[#16C60C] transition-colors">Réalisations</Link>
                <Link to="/formations" className="hover:text-[#16C60C] transition-colors">Formations</Link>
                <Link to="/contact" className="hover:text-[#16C60C] transition-colors">Contact</Link>
             </div>
          </div>

          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-white/30">Légal</h4>
             <div className="flex flex-col gap-4 text-sm font-bold text-white/60">
                <a href="#" className="hover:text-[#16C60C] transition-colors">Mentions Légales</a>
                <a href="#" className="hover:text-[#16C60C] transition-colors">CGV</a>
                <a href="#" className="hover:text-[#16C60C] transition-colors">Confidentialité</a>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 gap-8 opacity-30 text-[10px] font-black uppercase tracking-[0.4em]">
           <p>© 2025 {CONFIG.brand.name.toUpperCase()} AGENCY — LUXURY DIGITAL SOLUTIONS.</p>
           <div className="flex gap-10">
              <span>Fait avec excellence</span>
              <span>Propulsé par la vision de {CONFIG.brand.owner}</span>
           </div>
        </div>
      </div>
    </footer>
  );
};
