import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'accent' | 'success' | 'warning' | 'outline';
  size?: 'sm' | 'md';
}

export function Badge({
  className,
  variant = 'default',
  size = 'md',
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: 'bg-[#1C1B19] text-[#F5F0E8] border border-[#34312B]',
    secondary: 'bg-[#F5F1E9] text-[#121110] border border-[#E3DDD3]',
    accent: 'bg-[#181614] text-[#C6A76A] border border-[#C6A76A]/40',
    success: 'bg-[#161514] text-[#C6A76A] border border-[#C6A76A]/50',
    warning: 'bg-[#1C1B19] text-[#E8DDC8] border border-[#8C6F38]',
    outline: 'border border-[#34312B] text-[#A69D8F]',
  };

  const sizes = {
    sm: 'text-[9px] font-medium tracking-[0.2em] uppercase px-2 py-0.5',
    md: 'text-[10px] font-medium tracking-[0.2em] uppercase px-2.5 py-1',
  };

  return (
    <span
      className={cn('inline-flex items-center leading-none shrink-0 font-sans', variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </span>
  );
}
