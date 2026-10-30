'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { contactConfig } from '@/config/contact';
import { buildWhatsAppLink } from '@/lib/utils';
import { Container } from './Container';
import { Navigation } from './Navigation';
import { MobileNavigation } from './MobileNavigation';
import { AnnouncementBar } from './AnnouncementBar';
import { ProductSearch } from '@/components/products/ProductSearch';

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const whatsappHref = buildWhatsAppLink(
    contactConfig.whatsappNumber,
    contactConfig.whatsappMessageTemplates.generalInquiry
  );

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Luxury Navigation Bar */}
      <div className="bg-[#101010]/95 backdrop-blur-md border-b border-[#34312B]">
        <Container size="xl">
          <div className="flex h-18 sm:h-22 items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-6 shrink-0">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="relative h-10 w-36 sm:h-11 sm:w-44">
                  <Image
                    src={siteConfig.logo}
                    alt={siteConfig.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 140px, 176px"
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <Navigation />

            {/* Right section: Search & Actions */}
            <div className="flex items-center gap-3">
              {/* Search input */}
              <div className="hidden sm:block w-48 md:w-56 lg:w-64">
                <ProductSearch variant="header" />
              </div>

              {/* WhatsApp Concierge Quick Trigger */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                title="Inquire via WhatsApp Concierge"
                className="hidden lg:inline-flex items-center gap-2 border border-[#C6A76A] bg-[#141312] px-4 py-2 text-[10px] tracking-[0.2em] uppercase font-medium text-[#E8DDC8] hover:bg-[#C6A76A] hover:text-[#101010] transition-all duration-300"
              >
                <MessageCircle className="h-3.5 w-3.5 text-[#C6A76A]" />
                <span>Concierge</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileNavOpen(true)}
                className="inline-flex md:hidden items-center justify-center p-2 text-[#A69D8F] hover:text-[#F5F0E8]"
                aria-label="Open mobile menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile search bar */}
          <div className="sm:hidden pb-4">
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
