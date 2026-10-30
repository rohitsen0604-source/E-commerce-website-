'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { contactConfig } from '@/config/contact';
import { buildWhatsAppLink } from '@/lib/utils';

export function FloatingConcierge() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const whatsappHref = buildWhatsAppLink(
    contactConfig.whatsappNumber,
    contactConfig.whatsappMessageTemplates.generalInquiry
  );

  return (
    <aside aria-label="Concierge Support" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 select-none">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        title="Direct Private WhatsApp Concierge"
        className="group relative flex h-12 w-12 sm:h-auto sm:w-auto items-center justify-center sm:justify-start sm:gap-3 rounded-full border border-[#C6A76A]/70 bg-[#141312]/92 p-0 sm:px-4 sm:py-2.5 text-[#F5F0E8] shadow-[0_10px_35px_rgba(0,0,0,0.7)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#C6A76A] hover:shadow-[0_0_30px_rgba(198,167,106,0.4)]"
      >
        {/* Live Active Pulsing Beacon */}
        <span className="absolute -top-0.5 -right-0.5 sm:static flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6A76A] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
        </span>

        {/* WhatsApp Icon */}
        <div className="flex h-7 w-7 items-center justify-center rounded-full sm:bg-[#1C1B19] text-[#C6A76A] sm:border sm:border-[#34312B] transition-transform duration-300 group-hover:scale-110 group-hover:border-[#C6A76A]">
          <MessageCircle className="h-5 w-5 sm:h-4 sm:w-4" />
        </div>

        {/* Label Text - Visible on sm and up */}
        <div className="hidden sm:flex flex-col text-left">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C6A76A] flex items-center gap-1">
            <Sparkles className="h-2.5 w-2.5 animate-twinkle text-[#C6A76A]" />
            Atelier Concierge
          </span>
          <span className="font-serif text-xs font-light text-[#F5F0E8] group-hover:text-white transition-colors">
            Inquire via WhatsApp
          </span>
        </div>
      </a>
    </aside>
  );
}

