import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showSubtitle?: boolean;
  href?: string;
}

export function Logo({
  size = 'md',
  className,
  showSubtitle = true,
  href = '/',
}: LogoProps) {
  const content = (
    <div className={cn('inline-flex items-center gap-3 select-none group', className)}>
      {/* Luxury Geometric Crest Emblem */}
      <div
        className={cn(
          'relative flex items-center justify-center shrink-0 rounded-lg border border-[#34312B] bg-[#161514] transition-all duration-300 group-hover:border-[#C6A76A]/60 group-hover:shadow-[0_0_15px_rgba(198,167,106,0.25)]',
          size === 'sm' && 'h-8 w-8',
          size === 'md' && 'h-10 w-10',
          size === 'lg' && 'h-12 w-12'
        )}
      >
        <svg
          viewBox="0 0 40 40"
          className="h-full w-full p-2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer geometric diamond */}
          <path
            d="M20 6L32 20L20 34L8 20L20 6Z"
            stroke="#C6A76A"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          {/* Inner subtle facet */}
          <path
            d="M20 12L27 20L20 28L13 20L20 12Z"
            stroke="#3D3830"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          {/* Center radiant champagne jewel */}
          <circle cx="20" cy="20" r="2.5" fill="#E8DDC8" />
        </svg>
      </div>

      {/* Brand Typographic Wordmark */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline tracking-wide leading-none">
          <span
            className={cn(
              'font-serif font-semibold tracking-[0.14em] text-[#F5F0E8] transition-colors duration-300 group-hover:text-[#FFFFFF]',
              size === 'sm' && 'text-lg',
              size === 'md' && 'text-xl sm:text-2xl',
              size === 'lg' && 'text-2xl sm:text-3xl'
            )}
          >
            AURA
          </span>
          <span className="text-[#C6A76A] font-semibold ml-0.5 text-base sm:text-lg">.</span>
          {showSubtitle && (
            <span
              className={cn(
                'ml-2 font-sans font-medium uppercase text-[#C6A76A] tracking-[0.26em] transition-colors duration-300 group-hover:text-[#E8DDC8]',
                size === 'sm' && 'text-[9px]',
                size === 'md' && 'text-[10px] sm:text-[11px]',
                size === 'lg' && 'text-xs sm:text-sm'
              )}
            >
              ATELIER
            </span>
          )}
        </div>
        {size !== 'sm' && (
          <span className="font-sans text-[8px] uppercase tracking-[0.32em] text-[#787166] mt-1 hidden sm:block">
            Haute Vivre &bull; Est. 2026
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block focus:outline-none">
        {content}
      </Link>
    );
  }

  return content;
}
