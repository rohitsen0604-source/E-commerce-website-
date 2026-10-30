'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { navigationConfig } from '@/config/navigation';
import { cn } from '@/lib/utils';

export function Navigation() {
  const pathname = usePathname();
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
      {navigationConfig.mainNav.map((item) => {
        const isActive =
          item.href === '/'
            ? pathname === '/'
            : pathname.startsWith(item.href);

        if (item.href === '/categories') {
          return (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
            >
              <Link
                href={item.href}
                className={cn(
                  'inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium tracking-[0.18em] uppercase transition-colors',
                  isActive
                    ? 'text-[#C6A76A]'
                    : 'text-[#A69D8F] hover:text-[#F5F0E8]'
                )}
              >
                <span>{item.title}</span>
                <ChevronDown className={cn('h-3 w-3 transition-transform duration-200 text-[#8C8275]', categoriesOpen && 'rotate-180 text-[#C6A76A]')} />
              </Link>

              {/* Flyout dropdown */}
              {categoriesOpen && (
                <div className="absolute top-full left-0 z-50 w-64 pt-3 animate-fade-in">
                  <div className="rounded-none border border-[#34312B] bg-[#141312] p-3 shadow-2xl">
                    <div className="px-3 py-1.5 editorial-tag text-[#8C8275] border-b border-[#24221E] pb-2">
                      Collections
                    </div>
                    <div className="mt-1 space-y-0.5">
                      {navigationConfig.categoryNav.map((cat) => (
                        <Link
                          key={cat.href}
                          href={cat.href}
                          className="flex items-center justify-between px-3 py-2 text-xs font-medium text-[#D8D0C3] hover:bg-[#1C1B19] hover:text-[#C6A76A] transition-colors"
                        >
                          <span>{cat.title}</span>
                          {cat.badge && (
                            <span className="text-[9px] tracking-widest uppercase text-[#C6A76A] font-medium">
                              {cat.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 border-t border-[#24221E] pt-2">
                      <Link
                        href="/categories"
                        className="block px-3 py-1.5 text-center text-[10px] tracking-widest uppercase font-semibold text-[#C6A76A] hover:text-[#E8DDC8]"
                      >
                        All Categories →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'px-3 py-1.5 text-xs font-medium tracking-[0.18em] uppercase transition-colors',
              isActive
                ? 'text-[#C6A76A] border-b border-[#C6A76A]'
                : 'text-[#A69D8F] hover:text-[#F5F0E8]'
            )}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
