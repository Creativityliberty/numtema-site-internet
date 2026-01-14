
import { GoogleGenAI } from "@google/genai";
import { CONFIG } from '../config';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const chatWithMikmik = async (userMessage: string, history: {role: string, parts: any[]}[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
      config: {
        systemInstruction: `Tu es Mikmik, l'assistant expert de l'agence digitale Nümtema Agency.
        L'agence est dirigée par Lionel Numtema.
        Ton ton est premium, accessible et expert.
        Infos agence:
        - Nom: Nümtema Agency
        - Fondateur: Lionel Numtema
        - Offre: Sites web (dès 350€), Formations, IA/Chatbots.
        - Packs: Starter (350€), Pro (500€), Semi (800€), Complet (1500€).
        - Philosophie: "Tout se discute", l'objectif est de rendre réelle la vision du client.
        - Réalisations phares: L'Atelier de Marion (Restauration), mayamedium.fr, tourma-line.fe.
        - Contact WhatsApp: +33 7 45 43 42 64.
        Règles:
        1. Sois bref et percutant.
        2. Oriente toujours vers WhatsApp pour conclure un deal.
        3. Rappelle que "Tout se discute" avec Lionel.
        4. Réponds en français uniquement.`
      }
    });

    return response.text || "Désolé, j'ai une petite panne de cerveau. Contactez Lionel sur WhatsApp !";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Oups ! Une erreur technique. Discutons sur WhatsApp plutôt ?";
  }
};
