
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    {
      q: "Je n'ai pas de texte ou photos, c'est bloquant ?",
      a: "Non. Je te donne une checklist et je t'aide à structurer tes contenus. Je peux même m'occuper du copywriting pour toi."
    },
    {
      q: "En combien de temps le site est prêt ?",
      a: "3j à 4 semaines selon le pack choisi. Starter: 3-5j, Pro: 5-7j, Complet: 2-4 semaines."
    },
    {
      q: "Est-ce que je peux payer en plusieurs fois ?",
      a: "Oui, c'est possible sur les packs Semi-complet (800€) et Complet (1500€)."
    },
    {
      q: "Le pack ne correspond pas exactement à mon besoin ?",
      a: "C'est là que mon ADN intervient : Tout se discute. J'adapte les pages et les fonctionnalités pour rendre réelle ta vision."
    },
    {
      q: "Vous bossez à distance ?",
      a: "Oui, je travaille avec des clients en France et en Afrique francophone. Tout se fait via WhatsApp et Visio."
    }
  ];

  return (
    <section className="py-20 sm:py-40 lg:py-48 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-center mb-12 sm:mb-24 uppercase">FAQ globale</h2>

        <div className="space-y-6">
          {questions.map((q, i) => (
            <div key={i} className="glass rounded-3xl overflow-hidden border-white/5">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left hover:bg-white/5 transition-all min-h-[56px]"
              >
                <span className="text-base sm:text-lg font-black tracking-tight pr-4">{q.q}</span>
                {openIndex === i ? <Minus size={20} className="text-[#16C60C]" /> : <Plus size={20} />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 text-white/50 font-medium leading-relaxed border-t border-white/5 mt-4">
                      {q.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
