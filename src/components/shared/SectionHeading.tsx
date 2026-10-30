import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  theme?: 'dark' | 'light';
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  alignment = 'center',
  theme = 'dark',
  className,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const isLight = theme === 'light';

  return (
    <div className={cn('flex flex-col space-y-3 mb-10 md:mb-14', alignmentClasses[alignment], className)}>
      {badge && (
        <span className="editorial-tag text-[#C6A76A]">
          {badge}
        </span>
      )}
      <h2
        className={cn(
          'font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide leading-tight',
          isLight ? 'text-[#121110]' : 'text-[#F5F0E8]'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'max-w-2xl text-xs sm:text-sm leading-relaxed font-light',
            isLight ? 'text-[#6E6659]' : 'text-[#A69D8F]'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
