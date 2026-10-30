'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn('divide-y divide-[#34312B] border-y border-[#34312B]', className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="py-5">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="flex min-h-[44px] w-full items-center justify-between text-left text-sm font-medium tracking-wide text-[#F5F0E8] transition-colors hover:text-[#C6A76A]"
              aria-expanded={isOpen}
            >
              <span className={cn(isOpen && 'text-[#C6A76A]')}>{item.title}</span>
              <ChevronDown
                className={cn(
                  'h-4 w-4 text-[#A69F93] transition-transform duration-200 shrink-0 ml-4',
                  isOpen && 'rotate-180 text-[#C6A76A]'
                )}
              />
            </button>
            {isOpen && (
              <div className="mt-3.5 text-xs sm:text-sm leading-relaxed text-[#D8D2C7] font-light animate-fade-in pr-6">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
