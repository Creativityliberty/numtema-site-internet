
import React from 'react';
import { Bot } from 'lucide-react';

interface SupportButtonProps {
  onOpenChat: () => void;
}

export const SupportButton: React.FC<SupportButtonProps> = ({ onOpenChat }) => {
  return (
    <div className="fixed bottom-10 left-10 z-[60] group">
       <div className="absolute left-20 bg-white text-black px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap -translate-x-10 group-hover:translate-x-0">
          Mikmik est là pour vous
       </div>
       <button
        onClick={onOpenChat}
        className="w-16 h-16 bg-[#16C60C] rounded-full flex items-center justify-center text-white shadow-2xl shadow-[#16C60C]/30 hover:scale-110 active:scale-95 transition-all border-4 border-[#07070B]"
      >
        <Bot size={32} className="group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};
