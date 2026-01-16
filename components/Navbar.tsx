import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG } from '../config';
import { LanguageSwitcher } from './LanguageSwitcher';
import { i18n } from '../lib/i18n';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: i18n.t('nav.home'), path: '/' },
    { name: i18n.t('nav.packs'), path: '/#packs' },
    { name: i18n.t('nav.portfolio'), path: '/realisations' },
    { name: i18n.t('nav.services'), path: '/#services' },
    { name: i18n.t('nav.formations'), path: '/formations' },
    { name: i18n.t('nav.applications'), path: 'https://v0-creative-portfolio-virid.vercel.app/', external: true },
    { name: i18n.t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-3 sm:px-6 py-2 rounded-full border-white/10 shadow-2xl">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden border border-white/20 transition-transform group-hover:scale-110">
            <img src={CONFIG.brand.logoUrl} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-base sm:text-xl font-black tracking-tighter uppercase hidden md:block">
            {CONFIG.brand.name}<span className="text-[#16C60C]">{CONFIG.brand.suffix}</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            {
              link.external ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-black uppercase tracking-[0.25em] opacity-60 hover:opacity-100 hover:text-[#16C60C] transition-all"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-[10px] font-black uppercase tracking-[0.25em] opacity-60 hover:opacity-100 hover:text-[#16C60C] transition-all"
                >
                  {link.name}
                </Link>
              )
            }
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <LanguageSwitcher />
          <a
            href={`https://wa.me/${CONFIG.contact.whatsapp}`}
            className="hidden sm:flex items-center gap-2 bg-[#16C60C] text-white px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-lg shadow-[#16C60C]/20"
          >
            <MessageSquare size={14} className="fill-current" /> {i18n.t('nav.whatsapp')}
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 glass p-8 rounded-[2.5rem] lg:hidden border-white/10 shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                {
                  link.external ? (
                    <a
                      key={link.name}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="text-xl font-black tracking-tighter uppercase py-3 min-h-[48px] flex items-center"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="text-xl font-black tracking-tighter uppercase py-3 min-h-[48px] flex items-center"
                    >
                      {link.name}
                    </Link>
                  )
                }
              ))}
              <a
                href={`https://wa.me/${CONFIG.contact.whatsapp}`}
                className="flex items-center justify-center gap-2 bg-[#16C60C] text-white w-full py-5 rounded-2xl font-black uppercase tracking-widest mt-4"
              >
                {i18n.t('nav.whatsapp')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};