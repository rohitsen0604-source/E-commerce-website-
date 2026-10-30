import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from '@/types/common';
import { cn } from '@/lib/utils';

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center text-xs py-3', className)}>
      <ol className="flex items-center flex-wrap gap-2">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1 text-[#A69F93] hover:text-[#C6A76A] transition-colors"
          >
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="h-3 w-3 text-[#34312B] shrink-0" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="font-sans text-[11px] uppercase tracking-wider text-[#A69F93] hover:text-[#C6A76A] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-sans text-[11px] uppercase tracking-wider font-medium text-[#F5F0E8] truncate max-w-[200px] sm:max-w-xs">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
