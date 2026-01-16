
import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../config';
import { i18n } from '../lib/i18n';

export const Process: React.FC = () => {
  const steps = i18n.getSection('process').steps;

  return (
    <section className="py-40 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9]">{i18n.t('process.title')} <span className="text-[#16C60C]">{i18n.t('process.titleHighlight')}</span></h2>
            <p className="text-xl text-white/60 font-medium leading-relaxed italic mb-12 border-l-4 border-[#16C60C] pl-8">
              {i18n.t('process.quote').replace('{owner}', CONFIG.brand.owner)}
            </p>
            <div className="glass p-8 rounded-3xl inline-block border-white/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden border border-[#16C60C]/30">
                  <img src={CONFIG.brand.logoUrl} alt={CONFIG.brand.owner} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-black text-sm">{CONFIG.brand.owner}</p>
                  <p className="text-[10px] uppercase font-bold text-[#16C60C] tracking-widest">{i18n.t('process.availability')}</p>
                </div>
              </div>
              <p className="text-xs text-white/50 font-bold max-w-xs leading-relaxed">{i18n.t('process.commitment')}</p>
            </div>
          </div>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 group"
              >
                <div className="text-4xl md:text-5xl font-black text-[#16C60C]/10 group-hover:text-[#16C60C] transition-colors duration-500 font-serif italic">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">{step.title}</h3>
                  <p className="text-white/40 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
