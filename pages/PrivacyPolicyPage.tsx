
import React from 'react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-40 pb-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-5xl font-black uppercase tracking-tighter mb-12">Confidentialité</h1>
      <div className="glass p-12 rounded-[3rem] border-white/5 space-y-10 text-white/70 font-medium leading-relaxed">
        <section>
          <h2 className="text-2xl font-black text-white uppercase mb-4">Gestion des données</h2>
          <p>Nümtema Agency s'engage à ce que la collecte et le traitement de vos données, effectués à partir du site, soient conformes au règlement général sur la protection des données (RGPD).</p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase mb-4">Collecte des informations</h2>
          <p>Les informations recueillies via nos formulaires (Nom, Email, Projet) sont destinées exclusivement à la gestion de la relation commerciale et ne sont jamais revendues à des tiers.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase mb-4">Cookies</h2>
          <p>Le site utilise des cookies techniques pour améliorer votre navigation. Des cookies analytiques peuvent être utilisés de manière anonyme pour mesurer l'audience.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase mb-4">Vos droits</h2>
          <p>Conformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier ou supprimer en contactant : contact@numtema.agency.</p>
        </section>
      </div>
    </div>
  );
};
