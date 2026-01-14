
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Bot, Loader2, MessageSquare, Zap, Globe, GraduationCap } from 'lucide-react';
import { chatWithMikmik } from '../services/gemini';
import { CONFIG } from '../config';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuickReply: React.FC<{ icon: any, text: string, onClick: () => void }> = ({ icon: Icon, text, onClick }) => (
  <button 
    onClick={onClick}
    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#16C60C]/20 hover:border-[#16C60C]/50 transition-all whitespace-nowrap"
  >
    <Icon size={12} className="text-[#16C60C]" />
    {text}
  </button>
);

// Component to render text with links and images, but without visible asterisks
const RichText: React.FC<{ content: string }> = ({ content }) => {
  const imgRegex = /!\[.*?\]\((.*?)\)/g;
  
  return (
    <div className="space-y-3">
      {content.split('\n').map((line, i) => {
        // Detect images ![alt](url)
        if (line.startsWith('![')) {
          const urlMatch = line.match(/\((.*?)\)/);
          if (urlMatch) {
            return <img key={i} src={urlMatch[1]} alt="Preview" className="w-full h-40 object-cover rounded-2xl mt-2 border border-white/10 shadow-lg" />;
          }
        }
        
        // Clean line from any potential accidental asterisks
        const cleanLine = line.replace(/\*/g, '');

        // Detect and style links [text](url)
        const linkProcessed = cleanLine.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" class="text-[#16C60C] underline font-bold">$1</a>');

        return (
          <p key={i} className="text-white/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: linkProcessed }} />
        );
      })}
    </div>
  );
};

export const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: "Bienvenue chez Nümtema Agency ! Je suis Mikmik. \n\nQue puis-je faire pour propulser votre visibilité aujourd'hui ? 🚀" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, loading]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || loading) return;
    
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setLoading(true);

    const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
    }));

    const botResponse = await chatWithMikmik(textToSend, history);
    setMessages(prev => [...prev, { role: 'model', text: botResponse }]);
    setLoading(false);
  };

  const quickActions = [
    { icon: Zap, text: "Voir les Packs", query: "Quels sont vos packs pour créer un site ?" },
    { icon: Globe, text: "Portfolio", query: "Montre-moi tes réalisations récentes." },
    { icon: GraduationCap, text: "Formations", query: "Quelles formations proposez-vous ?" },
    { icon: MessageSquare, text: "Parler à Lionel", query: "Je veux contacter Lionel sur WhatsApp." },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.9, y: 50, filter: 'blur(10px)' }}
          className="fixed bottom-28 left-8 w-[90vw] sm:w-[420px] h-[600px] glass rounded-[3rem] z-[100] flex flex-col overflow-hidden shadow-[0_32px_64px_-12px_rgba(22,198,12,0.15)] border-[#16C60C]/20"
        >
          {/* Header */}
          <div className="p-8 bg-black/40 backdrop-blur-xl border-b border-white/5 flex items-center justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#16C60C]/5 to-transparent"></div>
            <div className="flex items-center gap-4 relative">
              <div className="relative">
                 <div className="w-12 h-12 rounded-2xl bg-[#16C60C] flex items-center justify-center text-white shadow-lg shadow-[#16C60C]/20">
                    <Bot size={28} />
                 </div>
                 <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#16C60C] border-2 border-black rounded-full animate-pulse"></div>
              </div>
              <div>
                <h4 className="font-black text-sm uppercase tracking-[0.2em] leading-none">Mikmik AI</h4>
                <p className="text-[10px] font-bold text-[#16C60C] mt-1.5 flex items-center gap-1.5 uppercase tracking-widest">
                   <span className="w-1 h-1 bg-[#16C60C] rounded-full"></span> Expert Agence
                </p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-white/30 hover:text-white transition-all"><X size={24} /></button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-8 space-y-6 scrollbar-hide">
            {messages.map((m, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={i} 
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[90%] px-6 py-4 rounded-[2rem] text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-[#16C60C] text-white font-bold shadow-xl shadow-[#16C60C]/10 rounded-tr-none' 
                    : 'bg-white/5 text-white/60 border border-white/10 rounded-tl-none'
                }`}>
                  <RichText content={m.text} />
                </div>
              </motion.div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 px-6 py-4 rounded-[2rem] rounded-tl-none border border-white/10 flex items-center gap-3">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-[#16C60C] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                    <span className="w-1.5 h-1.5 bg-[#16C60C] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-1.5 h-1.5 bg-[#16C60C] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#16C60C]">Réflexion...</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions Footer */}
          <div className="px-8 pb-4">
             <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
                {quickActions.map((action, i) => (
                  <QuickReply key={i} icon={action.icon} text={action.text} onClick={() => handleSend(action.query)} />
                ))}
             </div>
          </div>

          {/* Input Area */}
          <div className="p-8 border-t border-white/5 bg-black/40 backdrop-blur-xl">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Posez votre question à Mikmik..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 pr-16 outline-none focus:border-[#16C60C]/50 text-sm font-bold transition-all text-white placeholder:text-white/20"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || loading}
                className={`absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  input.trim() && !loading ? 'bg-[#16C60C] text-white' : 'text-white/20 cursor-not-allowed'
                }`}
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-center text-[9px] font-bold text-white/20 uppercase tracking-[0.3em] mt-4">
               Propulsé par la vision de Nümtema Agency
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
