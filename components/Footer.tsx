import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Youtube, Instagram, Github } from 'lucide-react';
import { CONFIG } from '../config';
import { i18n } from '../lib/i18n';

export const Footer: React.FC = () => {
   return (
      <footer className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-black">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-16 lg:gap-20 mb-16 sm:mb-24 lg:mb-32">
               <div className="md:col-span-2">
                  <Link to="/" className="flex items-center gap-4 mb-6">
                     <img src={CONFIG.brand.logoUrl} alt="Logo" className="w-12 h-12 object-contain rounded-full border border-white/10" />
                     <span className="text-3xl font-black tracking-tighter uppercase block">
                        {CONFIG.brand.name}<span className="text-[#16C60C]">{CONFIG.brand.suffix}</span>
                     </span>
                  </Link>
                  <p className="text-sm text-white/60 leading-relaxed">
                     {i18n.t('footer.description')}
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
                  <h4 className="font-black uppercase tracking-widest text-xs mb-6">{i18n.t('footer.navTitle')}</h4>
                  <div className="flex flex-col gap-4 text-sm font-bold text-white/60">
                     <Link to="/" className="text-sm text-white/60 hover:text-[#16C60C] transition-all">{i18n.t('footer.home')}</Link>
                     <Link to="/a-propos" className="text-sm text-white/60 hover:text-[#16C60C] transition-all">{i18n.t('footer.about')}</Link>
                     <Link to="/realisations" className="text-sm text-white/60 hover:text-[#16C60C] transition-all">{i18n.t('footer.portfolio')}</Link>
                     <Link to="/formations" className="text-sm text-white/60 hover:text-[#16C60C] transition-all">{i18n.t('footer.formations')}</Link>
                     <Link to="/contact" className="text-sm text-white/60 hover:text-[#16C60C] transition-all">{i18n.t('footer.contact')}</Link>
                  </div>
               </div>

               <div>
                  <h4 className="font-black uppercase tracking-widest text-xs mb-6">{i18n.t('footer.legalTitle')}</h4>
                  <div className="flex flex-col gap-4 text-sm font-bold text-white/60">
                     <Link to="/mentions-legales" className="text-sm text-white/60 hover:text-[#16C60C] transition-all">{i18n.t('footer.legal')}</Link>
                     <Link to="/cgv" className="text-sm text-white/60 hover:text-[#16C60C] transition-all">{i18n.t('footer.cgv')}</Link>
                     <Link to="/confidentialite" className="text-sm text-white/60 hover:text-[#16C60C] transition-all">{i18n.t('footer.privacy')}</Link>
                  </div>
               </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-12 sm:pt-16 border-t border-white/5 gap-6 sm:gap-8 opacity-30 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em]">
               <p>{i18n.t('footer.copyright')}</p>
               <div className="flex gap-10">
                  <span>{i18n.t('footer.madeWith')}</span>
                  <span>{i18n.t('footer.poweredBy')}</span>
               </div>
            </div>
         </div>
      </footer>
   );
};
