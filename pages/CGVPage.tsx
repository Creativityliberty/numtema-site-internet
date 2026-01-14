
import React from 'react';

export const CGVPage: React.FC = () => {
  return (
    <div className="pt-40 pb-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-5xl font-black uppercase tracking-tighter mb-12">CGV</h1>
      <div className="glass p-12 rounded-[3rem] border-white/5 space-y-10 text-white/70 font-medium leading-relaxed">
        <section>
          <h2 className="text-2xl font-black text-white uppercase mb-4">Objet</h2>
          <p>Les présentes conditions générales de vente (CGV) visent à définir les relations contractuelles entre Nümtema Agency et le client pour tout achat de prestations de services (création de site, formations, IA) effectué via le site ou par contact direct.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase mb-4">Prestations</h2>
          <p>Nümtema Agency propose différents packs de création de sites web ainsi que des formations. Les détails de chaque offre sont précisés sur les pages correspondantes.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase mb-4">Tarifs</h2>
          <p>Les prix indiqués sont en euros. Nümtema Agency se réserve le droit de modifier ses prix à tout moment, étant toutefois entendu que le prix figurant sur le devis validé par le client sera le seul applicable.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase mb-4">Paiement</h2>
          <p>Le paiement est exigible selon les modalités définies dans le devis (acompte, paiement en plusieurs fois pour les packs supérieurs, etc.). Le règlement peut s'effectuer par virement, Stripe ou autres moyens convenus.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase mb-4">Livraison</h2>
          <p>Les délais de livraison (48H à 72H pour les packs Starter/Pro) courent à partir de la réception de l'ensemble des éléments nécessaires à la réalisation (textes, images, accès techniques).</p>
        </section>
      </div>
    </div>
  );
};
