
import { GoogleGenAI } from "@google/genai";
import { CONFIG } from '../config';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const chatWithMikmik = async (userMessage: string, history: {role: string, parts: any[]}[]) => {
  try {
    // Construction d'une base de connaissance ultra-détaillée à partir du CONFIG
    const knowledgeBase = `
      CONTEXTE AGENCE NÜMTEMA:
      - Nom: ${CONFIG.brand.name} ${CONFIG.brand.suffix}
      - Vision: ${CONFIG.brand.description}
      - Fondateur: ${CONFIG.brand.owner}
      
      OFFRES SITES WEB (PACKS):
      ${CONFIG.pricing.packs.map(p => `- ${p.name}: ${p.price}€ (${p.desc}). Inclus: ${p.features.join(', ')}`).join('\n')}
      
      OPTIONS:
      ${CONFIG.pricing.options.map(o => `- ${o.name}: +${o.price}€`).join('\n')}
      
      FORMATIONS:
      ${CONFIG.formations.map(f => `- ${f.title}: ${f.price} (${f.desc})`).join('\n')}
      
      PORTFOLIO (Utilise ces liens et images si on te demande des exemples):
      - Del'Harmonie Chez Soi: https://delharmoniechezsoi.com/ (Image: https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e)
      - Nümtema Face: https://www.numtemaface.fr/ (Image: https://images.unsplash.com/photo-1626908013943-df94de54984c)
      - Maya Medium: https://www.mayamedium.fr/ (Image: https://images.unsplash.com/photo-1572248521570-58823296c64f)
      - Tourma-Line: https://www.tourma-line.fr/ (Image: https://images.unsplash.com/photo-1518531933037-91b2f5f229cc)
      - L'Atelier de Marion: https://latelierdemarion.fr/ (Image: https://images.unsplash.com/photo-1517248135467-4c7edcad34c4)
      
      CONTACT:
      - WhatsApp: ${CONFIG.contact.phone}
      - Email: ${CONFIG.contact.email}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
      config: {
        systemInstruction: `Tu es Mikmik, l'assistant virtuel de Nümtema Agency.
        TON: Premium, direct, expert, et très chaleureux. Utilise des emojis de temps en temps (🚀, ✨, 💎).
        
        CONNAISSANCES:
        ${knowledgeBase}
        
        RÈGLES DE RÉPONSE CRUCIALES:
        1. NE JAMAIS UTILISER D'ASTÉRISQUES (*) DANS TES RÉPONSES. Si tu veux faire une liste, utilise des tirets (-) simples.
        2. NE JAMAIS UTILISER DE DOUBLE ASTÉRISQUES (**) POUR LE GRAS. Utilise juste des titres clairs sur de nouvelles lignes.
        3. Si on te demande un prix, donne le montant exact du pack et ses avantages.
        4. Si on te demande des exemples, cite les projets du portfolio (dont le nouveau site Del'Harmonie Chez Soi) et incite à cliquer sur les liens.
        5. SI TU PARLES D'UN PROJET PRÉCIS, tu peux inclure l'image correspondante en utilisant la syntaxe Markdown standard ![image](url).
        6. Rappelle systématiquement que "Tout se discute" directement avec Lionel sur WhatsApp pour le sur-mesure.
        7. Finis souvent par une question pour engager l'utilisateur.`
      }
    });

    return response.text || "Je suis momentanément indisponible pour une mise à jour de mon cerveau digital. Contactez Lionel sur WhatsApp !";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Oups ! La connexion est instable. Discutons en direct sur WhatsApp plutôt ?";
  }
};
