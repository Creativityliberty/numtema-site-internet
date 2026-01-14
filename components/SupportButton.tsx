
import React from 'react';
import { CONFIG } from '../config';

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
        className="w-16 h-16 bg-black rounded-full flex items-center justify-center overflow-hidden shadow-2xl shadow-[#16C60C]/40 hover:scale-110 active:scale-95 transition-all border-2 border-[#16C60C]"
      >
        <img 
          src={CONFIG.brand.logoUrl} 
          alt="Chat" 
          className="w-full h-full object-contain p-1 rounded-full group-hover:rotate-6 transition-transform" 
        />
      </button>
    </div>
  );
};
