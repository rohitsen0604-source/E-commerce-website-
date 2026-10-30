'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { navigationConfig } from '@/config/navigation';
import { contactConfig } from '@/config/contact';
import { buildWhatsAppLink, cn } from '@/lib/utils';
import { SocialLinks } from '@/components/shared/SocialLinks';

export interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const pathname = usePathname();

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

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isOpen) return null;

  const whatsappHref = buildWhatsAppLink(
    contactConfig.whatsappNumber,
    contactConfig.whatsappMessageTemplates.generalInquiry
  );

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-[#101010] border-l border-[#34312B] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto animate-fade-in-down">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#24221E]">
            <span className="editorial-tag text-[#C6A76A]">
              Navigation
            </span>
            <button
              type="button"
              onClick={onClose}
              className="p-1 text-[#8C8275] hover:text-[#F5F0E8]"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Primary Nav Links */}
          <div className="py-6 space-y-1">
            {navigationConfig.mainNav.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center justify-between py-3 text-xs tracking-[0.2em] uppercase font-medium transition-colors',
                    isActive
                      ? 'text-[#C6A76A] border-b border-[#34312B]'
                      : 'text-[#A69D8F] hover:text-[#F5F0E8]'
                  )}
                >
                  <span>{item.title}</span>
                  <ChevronRight className="h-3.5 w-3.5 opacity-40 text-[#C6A76A]" />
                </Link>
              );
            })}
          </div>

          {/* Categories */}
          <div className="pt-4 border-t border-[#24221E]">
            <p className="editorial-tag text-[#8C8275] mb-3">
              Collections
            </p>
            <div className="space-y-1">
              {navigationConfig.categoryNav.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="flex items-center justify-between py-2 text-xs font-light text-[#D8D0C3] hover:text-[#C6A76A] transition-colors"
                >
                  <span>{cat.title}</span>
                  {cat.badge && (
                    <span className="text-[9px] tracking-widest uppercase text-[#C6A76A]">
                      {cat.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info & quick contact */}
        <div className="pt-6 border-t border-[#24221E] space-y-4">
          <div className="flex flex-col gap-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-[#C6A76A] bg-[#141312] px-4 py-3 text-[10px] tracking-[0.2em] uppercase font-medium text-[#E8DDC8] hover:bg-[#C6A76A] hover:text-[#101010] transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#C6A76A]" />
              <span>Concierge WhatsApp</span>
            </a>
            <a
              href={`tel:${contactConfig.whatsappNumber}`}
              className="flex items-center justify-center gap-2 border border-[#34312B] bg-transparent px-4 py-2.5 text-[10px] tracking-[0.18em] uppercase font-light text-[#A69D8F] hover:text-[#F5F0E8] transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-[#C6A76A]" />
              <span>{contactConfig.phone}</span>
            </a>
          </div>

          <div className="pt-2 flex justify-center">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
