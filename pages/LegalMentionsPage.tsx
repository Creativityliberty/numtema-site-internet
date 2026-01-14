
import React from 'react';

export const LegalMentionsPage: React.FC = () => {
  return (
    <div className="pt-40 pb-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-5xl font-black uppercase tracking-tighter mb-12">Mentions Légales</h1>
      <div className="glass p-12 rounded-[3rem] border-white/5 space-y-10 text-white/70 font-medium leading-relaxed">
        <section>
          <h2 className="text-2xl font-black text-white uppercase mb-4">1. Présentation du site</h2>
          <p>En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p>
          <p className="mt-4">
            <strong>Propriétaire :</strong> Nümtema Agency – Lionel Numtema<br />
            <strong>Responsable publication :</strong> Lionel Numtema – contact@numtema.agency<br />
            <strong>Webmaster :</strong> Nümtema Agency<br />
            <strong>Hébergeur :</strong> Vercel Inc. – 340 S Lemon Ave #4133 Walnut, CA 91789, USA
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase mb-4">2. Conditions générales d’utilisation</h2>
          <p>L’utilisation du site implique l’acceptation pleine et entière des conditions générales d’utilisation décrites ci-après. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase mb-4">3. Propriété intellectuelle</h2>
          <p>Nümtema Agency est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white uppercase mb-4">4. Limitations de responsabilité</h2>
          <p>Nümtema Agency ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site.</p>
        </section>
      </div>
    </div>
  );
};
