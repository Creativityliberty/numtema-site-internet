import React from 'react';
import { motion } from 'framer-motion';
import { ThreeDMarquee } from '../components/ui/3d-marquee';
import { i18n } from '../lib/i18n';

export const Showcase3D: React.FC = () => {
  const showcaseImages = [
    "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1626908013943-df94de54984c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1572248521570-58823296c64f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504868584819-f8e905b6cbe0?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493397862567-47f998a1f1e4?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503418895522-46f9804cda40?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#16C60C]/30 glass text-[9px] font-black uppercase tracking-[0.3em] mb-6 text-[#16C60C]"
          >
            {i18n.t('showcase.badge')}
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">
            {i18n.t('showcase.title')} <span className="green-gradient">{i18n.t('showcase.titleHighlight')}</span>
          </h2>
          <p className="text-white/40 text-lg font-medium max-w-2xl italic px-4">
            {i18n.t('showcase.description')}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <ThreeDMarquee images={showcaseImages} />
        </motion.div>
      </div>
    </section>
  );
};