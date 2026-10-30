'use client';

import React from 'react';

const marqueeItems = [
  'SWISS HOROLOGICAL PRECISION',
  'GRADE-A MONGOLIAN CASHMERE',
  'DIRECT ARTISAN GUILDS',
  'ACOUSTIC & TACTILE PURITY',
  'INDIVIDUALLY CERTIFIED PROVENANCE',
  'BESPOKE CONCIERGE SERVICE',
  'WORLDWIDE INSURED COURIER',
  'HEIRLOOM INDUSTRIAL DESIGN',
];

export function LuxuryMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-[#34312B] bg-[#141312] py-3.5 sm:py-4 select-none shadow-inner">
      {/* Gradient edge masks for smooth fade-in and fade-out */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-28 bg-gradient-to-r from-[#141312] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-28 bg-gradient-to-l from-[#141312] to-transparent z-10" />

      <div className="animate-marquee flex items-center gap-6 sm:gap-12 whitespace-nowrap">
        {marqueeItems.concat(marqueeItems).map((text, idx) => (
          <div key={idx} className="flex items-center gap-4 sm:gap-8">
            <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C6A76A] uppercase hover:text-[#F5F0E8] transition-colors drop-shadow-[0_0_8px_rgba(198,167,106,0.35)]">
              {text}
            </span>
            <span className="text-[#C6A76A] text-xs select-none animate-twinkle">⚜</span>
          </div>
        ))}
      </div>
    </div>
  );
}
