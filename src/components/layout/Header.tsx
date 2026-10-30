'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { contactConfig } from '@/config/contact';
import { buildWhatsAppLink, cn } from '@/lib/utils';
import { Container } from './Container';
import { Navigation } from './Navigation';
import { MobileNavigation } from './MobileNavigation';
import { AnnouncementBar } from './AnnouncementBar';
import { ProductSearch } from '@/components/products/ProductSearch';
import { Logo } from '@/components/shared/Logo';

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show when near top of the page
      if (currentScrollY <= 40) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down -> hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up -> show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const showNavbar = isVisible || mobileNavOpen;

  const whatsappHref = buildWhatsAppLink(
    contactConfig.whatsappNumber,
    contactConfig.whatsappMessageTemplates.generalInquiry
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-transform duration-300 ease-in-out',
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Luxury Navigation Bar */}
      <div className="bg-[#101010]/95 backdrop-blur-md border-b border-[#34312B]">
        <Container size="xl">
          <div className="flex h-16 sm:h-20 md:h-22 items-center justify-between gap-3 sm:gap-4">
            {/* Logo */}
            <div className="flex items-center gap-4 sm:gap-6 shrink-0">
              <Logo size="sm" href="/" className="flex sm:hidden" />
              <Logo size="md" href="/" className="hidden sm:flex" />
            </div>

            {/* Desktop Navigation Links */}
            <Navigation />

            {/* Right section: Search & Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search input */}
              <div className="hidden sm:block w-48 md:w-56 lg:w-64">
                <ProductSearch variant="header" />
              </div>

              {/* WhatsApp Support Quick Trigger */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                title="Contact via WhatsApp Support"
                className="hidden lg:inline-flex items-center gap-2 border border-[#C6A76A] bg-[#141312] px-4 py-2 text-[10px] tracking-[0.2em] uppercase font-medium text-[#E8DDC8] hover:bg-[#C6A76A] hover:text-[#101010] transition-all duration-300"
              >
                <MessageCircle className="h-3.5 w-3.5 text-[#C6A76A]" />
                <span>WhatsApp Support</span>
              </a>

              {/* Mobile Menu Button - 44x44px touch area */}
              <button
                type="button"
                onClick={() => setMobileNavOpen(true)}
                className="inline-flex md:hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-[#34312B] bg-[#141312] text-[#D8D2C7] hover:text-[#C6A76A] hover:border-[#C6A76A] transition-colors"
                aria-label="Open mobile menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile search bar */}
          <div className="sm:hidden pb-3 pt-1">
            <ProductSearch variant="header" />
          </div>
        </Container>
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileNavigation
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
    </header>
  );
}
