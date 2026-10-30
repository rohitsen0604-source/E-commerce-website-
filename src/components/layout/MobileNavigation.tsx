'use client';

import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { navigationConfig } from '@/config/navigation';
import { contactConfig } from '@/config/contact';
import { buildWhatsAppLink, cn } from '@/lib/utils';
import { SocialLinks } from '@/components/shared/SocialLinks';
import { Logo } from '@/components/shared/Logo';

export interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const prevPathname = useRef(pathname);

  // Safe SSR mounting for React Portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close drawer upon user navigation to another route
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const whatsappHref = buildWhatsAppLink(
    contactConfig.whatsappNumber,
    contactConfig.whatsappMessageTemplates.generalInquiry
  );

  return createPortal(
    <div className="fixed inset-0 z-[100] md:hidden">
      {/* Full screen backdrop blur */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container with 100dvh for mobile address bar safety */}
      <div
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        className="fixed inset-y-0 right-0 z-[101] w-[86vw] max-w-xs h-full max-h-[100dvh] bg-[#101010] border-l border-[#34312B] p-5 sm:p-6 shadow-2xl flex flex-col justify-between overflow-y-auto overscroll-contain animate-slide-in-right"
      >
        <div>
          {/* Header with Atelier Logo & Close Button */}
          <div className="flex items-center justify-between pb-4 border-b border-[#24221E] shrink-0">
            <Logo size="sm" href="/" onClick={onClose} />
            <button
              type="button"
              onClick={onClose}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg border border-[#34312B] bg-[#161514] text-[#C6A76A] hover:bg-[#C6A76A] hover:text-[#101010] hover:border-[#C6A76A] transition-colors cursor-pointer select-none"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Primary Nav Links */}
          <nav className="py-4 space-y-1" aria-label="Mobile Navigation">
            {navigationConfig.mainNav.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'flex items-center justify-between min-h-[44px] py-2.5 px-3 rounded-lg text-xs tracking-[0.2em] uppercase font-medium transition-colors',
                    isActive
                      ? 'text-[#C6A76A] bg-[#181614] border border-[#C6A76A]/40'
                      : 'text-[#A69D8F] hover:text-[#F5F0E8] hover:bg-[#141312]'
                  )}
                >
                  <span>{item.title}</span>
                  <ChevronRight
                    className={cn(
                      'h-4 w-4',
                      isActive ? 'text-[#C6A76A]' : 'opacity-40 text-[#A69D8F]'
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Collections / Categories */}
          <div className="pt-4 border-t border-[#24221E]">
            <p className="editorial-tag text-[#8C8275] mb-2 px-2">
              Collections
            </p>
            <div className="space-y-0.5">
              {navigationConfig.categoryNav.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  onClick={onClose}
                  className="flex items-center justify-between min-h-[40px] py-2 px-3 rounded-lg text-xs font-light text-[#D8D0C3] hover:text-[#C6A76A] hover:bg-[#141312] transition-colors"
                >
                  <span>{cat.title}</span>
                  {cat.badge && (
                    <span className="text-[9px] tracking-widest uppercase text-[#C6A76A] bg-[#C6A76A]/10 border border-[#C6A76A]/30 px-2 py-0.5 rounded-full font-medium">
                      {cat.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info & quick contact */}
        <div className="pt-5 border-t border-[#24221E] space-y-4 shrink-0">
          <div className="flex flex-col gap-2.5">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-[#C6A76A] bg-[#161514] px-4 py-3 text-[10px] tracking-[0.2em] uppercase font-semibold text-[#E8DDC8] hover:bg-[#C6A76A] hover:text-[#101010] transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-[#C6A76A]" />
              <span>WhatsApp Support</span>
            </a>
            <a
              href={`tel:${contactConfig.whatsappNumber}`}
              className="flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-[#34312B] bg-transparent px-4 py-2.5 text-[10px] tracking-[0.18em] uppercase font-light text-[#A69D8F] hover:text-[#F5F0E8] transition-colors"
            >
              <Phone className="h-4 w-4 text-[#C6A76A]" />
              <span>{contactConfig.phone}</span>
            </a>
          </div>

          <div className="pt-2 flex justify-center">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

