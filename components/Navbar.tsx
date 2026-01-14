
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG } from '../config';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Packs Sites', path: '/#packs' },
    { name: 'Réalisations', path: '/realisations' },
    { name: 'Services', path: '/#services' },
    { name: 'Formations', path: '/formations' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-3xl border-white/10">
        <Link to="/" className="flex items-center gap-3">
          <img src={CONFIG.brand.logoUrl} alt="Logo" className="w-10 h-10 object-contain rounded-full" />
          <span className="text-xl font-black tracking-tighter uppercase hidden sm:block">
            {CONFIG.brand.name}<span className="text-[#16C60C]">{CONFIG.brand.suffix}</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[10px] font-black uppercase tracking-[0.25em] opacity-60 hover:opacity-100 hover:text-[#16C60C] transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`https://wa.me/${CONFIG.contact.whatsapp}`}
            className="hidden sm:flex items-center gap-2 bg-[#16C60C] text-white px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-lg"
          >
            <MessageSquare size={14} /> WhatsApp
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
            className="absolute top-24 left-6 right-6 glass p-8 rounded-3xl lg:hidden border-white/10"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black tracking-tighter"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={`https://wa.me/${CONFIG.contact.whatsapp}`}
                className="flex items-center justify-center gap-2 bg-[#16C60C] text-white w-full py-4 rounded-2xl font-black uppercase tracking-widest mt-4"
              >
                WhatsApp Maintenant
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
