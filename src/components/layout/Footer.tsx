import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { contactConfig } from '@/config/contact';
import { navigationConfig } from '@/config/navigation';
import { Container } from './Container';
import { SocialLinks } from '@/components/shared/SocialLinks';
import { Logo } from '@/components/shared/Logo';

export function Footer() {
  return (
    <footer className="border-t border-[#34312B] bg-[#101010] text-[#A69D8F]">
      {/* Upper Main Footer */}
      <div className="py-16 lg:py-24">
        <Container size="xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
            {/* Column 1: Brand Info & Bio */}
            <div className="lg:col-span-2 space-y-6">
              <Logo size="lg" href="/" />
              <p className="max-w-md text-xs sm:text-sm leading-relaxed text-[#8C8275] font-light">
                {siteConfig.description}
              </p>
              <div className="pt-2">
                <p className="editorial-tag text-[#C6A76A] mb-3">
                  Follow The Atelier
                </p>
                <SocialLinks />
              </div>
            </div>

            {/* Column 2: Collections & Shop */}
            <div>
              <h3 className="editorial-tag text-[#F5F0E8] mb-5">
                Collections
              </h3>
              <ul className="space-y-3 text-xs tracking-wider uppercase font-light">
                {navigationConfig.footerNav.shop.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-[#C6A76A] transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company & Information */}
            <div>
              <h3 className="editorial-tag text-[#F5F0E8] mb-5">
                Maison & Client Care
              </h3>
              <ul className="space-y-3 text-xs tracking-wider uppercase font-light">
                {navigationConfig.footerNav.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-[#C6A76A] transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                {navigationConfig.footerNav.legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-[#C6A76A] transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Concierge & Contact */}
            <div className="space-y-4">
              <h3 className="editorial-tag text-[#F5F0E8] mb-5">
                Private Concierge
              </h3>
              <ul className="space-y-3.5 text-xs text-[#8C8275] font-light leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <MapPin className="h-3.5 w-3.5 text-[#C6A76A] shrink-0 mt-0.5" />
                  <span>
                    {contactConfig.address.street}, {contactConfig.address.city},{' '}
                    {contactConfig.address.state} {contactConfig.address.postalCode}
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-3.5 w-3.5 text-[#C6A76A] shrink-0" />
                  <a
                    href={`mailto:${contactConfig.email}`}
                    className="hover:text-[#C6A76A] transition-colors"
                  >
                    {contactConfig.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-3.5 w-3.5 text-[#C6A76A] shrink-0" />
                  <a
                    href={`tel:${contactConfig.whatsappNumber}`}
                    className="hover:text-[#C6A76A] transition-colors"
                  >
                    {contactConfig.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="h-3.5 w-3.5 text-[#8C8275] shrink-0" />
                  <span>{contactConfig.workingHours.weekdays}</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar: Copyright & Compliance */}
      <div className="border-t border-[#24221E] py-8 text-[11px] text-[#736B5E] tracking-wider uppercase font-light">
        <Container size="xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              &copy; 2026 {contactConfig.legalEntityName}. All rights reserved. Ultra-Luxury Edition.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-[#C6A76A] transition-colors">
                Privacy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-[#C6A76A] transition-colors">
                Terms
              </Link>
              <Link href="/shipping-policy" className="hover:text-[#C6A76A] transition-colors">
                Shipping
              </Link>
              <Link href="/return-policy" className="hover:text-[#C6A76A] transition-colors">
                Returns
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
