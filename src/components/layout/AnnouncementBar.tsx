'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!siteConfig.announcement.enabled || !isVisible) return null;

  return (
    <div className="relative bg-[#101010] border-b border-[#24221E] px-4 py-2 text-[10px] sm:text-[11px] font-sans tracking-[0.12em] sm:tracking-[0.2em] uppercase text-[#A69D8F]">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-1.5 sm:gap-2 text-center pr-8 sm:pr-0">
        <span className="text-[#C6A76A] shrink-0">⚜</span>
        {siteConfig.announcement.link ? (
          <Link
            href={siteConfig.announcement.link}
            className="hover:text-[#E8DDC8] transition-colors underline underline-offset-4 decoration-[#34312B] line-clamp-1 sm:line-clamp-none text-left sm:text-center"
          >
            {siteConfig.announcement.text}
          </Link>
        ) : (
          <span className="line-clamp-1 sm:line-clamp-none text-left sm:text-center">
            {siteConfig.announcement.text}
          </span>
        )}
      </div>
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 min-h-[44px] min-w-[44px] flex items-center justify-center text-[#8C8275] hover:text-[#E8DDC8] transition-colors"
        aria-label="Dismiss announcement"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
