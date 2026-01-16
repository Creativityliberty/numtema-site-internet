
import { GoogleGenAI } from "@google/genai";
import { CONFIG } from '../config';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const chatWithMikmik = async (userMessage: string, history: { role: string, parts: any[] }[]) => {
  try {
    const knowledgeBase = `
      CONTEXTE AGENCE NÜMTEMA:
      - Nom: ${CONFIG.brand.name} ${CONFIG.brand.suffix}
      - Vision: ${CONFIG.brand.description}
      - Fondateur: ${CONFIG.brand.owner}
      
      OFFRES SITES WEB (PACKS):
      - Pack Starter: 350€ (One-Page, WhatsApp, 48h-72h).
      - Pack Pro: 500€ (Starter + SEO, 1 page bonus, 3 jours max).
      - Pack Semi-Complet: 800€ (Jusqu'à 5 pages, Copywriting, Portfolio, 3-5 jours).
      - Pack Complet: 1500€ (Design Premium, Automatisation, Blog/SEO, Support VIP).
      
      OPTIONS:
      - Logo simple: 60€
      - Chatbot IA Business: 350€
      
      RÉALISATIONS (À citer absolument avec images):
      - Del'Harmonie Chez Soi: https://delharmoniechezsoi.com/ (Bien-être & Harmonisation) ![Del'Harmonie](/images/portfolio/delharmonie.png)
      - Nümtema Face: https://www.numtemaface.fr/ (Lead Generation) ![Nümtema Face](/images/portfolio/numtema-face.png)
      - Maya Medium: https://www.mayamedium.fr/ (Spiritualité) ![Maya Medium](/images/portfolio/maya-medium.png)
      - Tourma-Line: https://www.tourma-line.fr/ (Soins énergétiques) ![Tourma-Line](/images/portfolio/tourmaline.png)
      - L'Atelier de Marion: https://latelierdemarion.fr/ (Restauration) ![L'Atelier de Marion](/images/portfolio/atelier-marion.png)
      - SKE Logistics: https://www.skelogistics.com/ (Import-Export & Logistique) ![SKE Logistics](/images/portfolio/skelogistics.png)
      
      CONTACT:
      - WhatsApp: ${CONFIG.contact.phone}
      - Email: ${CONFIG.contact.email}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
      config: {
        systemInstruction: `Tu es Mikmik, mon assistant d'élite.
        
        RÈGLES DE FORMATAGE (CRITIQUE) :
        1. INTERDICTION TOTALE d'utiliser des astérisques (* ou **). 
        2. Pour les listes, utilise uniquement des tirets simples (-) au début de ligne.
        3. Pour mettre en avant un titre, écris-le en MAJUSCULES sur sa propre ligne.
        4. Pour les liens de sites, utilise [NOM DU SITE](URL).
        5. IMPORTANT: Quand tu montres des réalisations, utilise TOUJOURS la syntaxe ![Nom du projet](chemin_image) pour afficher les images.
           Exemple: ![Del'Harmonie](/images/portfolio/delharmonie.png)
        
        CONNAISSANCES:
        ${knowledgeBase}
        
        TON: Parle à la première personne (je/mon/ton). Direct, chaleureux, mobile-first. Utilise des emojis.
        
        RÉPONSES TYPES:
        - Si on parle de contact: Donne mon WhatsApp et Email sous forme de liste claire.
        - Si on parle de prix: Détaille mes packs avec des tirets, sans étoiles.
        - Si on parle de réalisations/portfolio: Montre les images avec ![nom](chemin) ET les liens [NOM](URL).
        - Rappelle que "Tout se discute avec moi sur WhatsApp".
        - Insiste sur le fait que mes sites sont MOBILE-FIRST (pensés pour téléphone d'abord).`
      }
    });

    return response.text || "Je recharge mes batteries digitales. Contactez Lionel sur WhatsApp !";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connexion instable. Parlons sur WhatsApp pour avancer ?";
  }
};
