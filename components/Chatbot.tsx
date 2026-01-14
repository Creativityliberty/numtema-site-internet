
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Bot, Loader2 } from 'lucide-react';
import { chatWithMikmik } from '../services/gemini';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: "Salut ! C'est Mikmik. En quoi puis-je aider votre projet Nümtema aujourd'hui ?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
    }));

    const botResponse = await chatWithMikmik(userText, history);
    setMessages(prev => [...prev, { role: 'model', text: botResponse }]);
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          className="fixed bottom-28 left-8 w-[380px] h-[550px] glass rounded-[2.5rem] z-[100] flex flex-col overflow-hidden shadow-3xl border-[#16C60C]/20"
        >
          {/* Header */}
          <div className="p-6 bg-[#050508] border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#16C60C]/20 flex items-center justify-center text-[#16C60C]">
                <Bot size={22} />
              </div>
              <div>
                <h4 className="font-black text-xs uppercase tracking-widest leading-none">Mikmik</h4>
                <p className="text-[10px] font-bold text-white/40 mt-1">Assistant Nümtema</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-white/50"><X size={20} /></button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-3 rounded-2xl text-[13px] font-medium leading-relaxed ${m.role === 'user' ? 'bg-[#16C60C] text-white' : 'bg-white/5 text-white/80 border border-white/10'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
                  <Loader2 size={16} className="animate-spin text-[#16C60C]" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 border-t border-white/5 bg-[#050508]">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Discutons de votre vision..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 pr-14 outline-none focus:border-[#16C60C]/50 text-sm font-bold transition-all text-white placeholder:text-white/20"
              />
              <button
                onClick={handleSend}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-[#16C60C] hover:scale-110 transition-transform"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
