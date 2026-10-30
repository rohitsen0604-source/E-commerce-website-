import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      href,
      isExternal,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-sans font-medium tracking-widest uppercase transition-all duration-300 cursor-pointer select-none focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none active:scale-[0.99]';

    const variants = {
      primary:
        'bg-[#101010] text-[#F5F0E8] border border-[#C6A76A] hover:bg-[#C6A76A] hover:text-[#101010]',
      secondary:
        'bg-[#1C1B19] text-[#F5F0E8] border border-[#34312B] hover:border-[#C6A76A] hover:text-[#C6A76A]',
      outline:
        'border border-[#34312B] bg-transparent text-[#F5F0E8] hover:border-[#C6A76A] hover:text-[#C6A76A]',
      ghost:
        'bg-transparent text-[#C6A76A] hover:text-[#E8DDC8] hover:bg-[#1C1B19]/50',
      accent:
        'bg-[#C6A76A] text-[#101010] border border-[#C6A76A] hover:bg-[#B59556] hover:border-[#B59556]',
      whatsapp:
        'bg-[#141312] text-[#E8DDC8] border border-[#C6A76A] hover:bg-[#C6A76A] hover:text-[#101010]',
    };

    const sizes = {
      sm: 'text-[10px] px-4 py-2 gap-2 h-9',
      md: 'text-xs px-6 py-3 gap-2.5 h-11',
      lg: 'text-xs px-8 py-4 gap-3 h-13',
    };

    const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

    const content = (
      <>
        {isLoading && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
        {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </>
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClasses}
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
