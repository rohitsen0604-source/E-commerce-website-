import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { contactConfig } from '@/config/contact';
import { buildWhatsAppLink } from '@/lib/utils';
import { SocialLinks } from '@/components/shared/SocialLinks';

export function ContactInformation() {
  const whatsappHref = buildWhatsAppLink(
    contactConfig.whatsappNumber,
    contactConfig.whatsappMessageTemplates.generalInquiry
  );

  return (
    <div className="rounded-2xl border border-[#34312B] bg-[#161514] p-8 sm:p-10 text-[#F5F0E8] space-y-8 shadow-xl transition-all duration-500 hover:border-[#C6A76A]/50">
      <div>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C6A76A]">
          Customer Support
        </span>
        <h3 className="mt-2 font-serif text-2xl font-semibold tracking-wide text-[#F5F0E8]">
          Get in Touch
        </h3>
        <p className="mt-2 font-sans text-xs sm:text-sm text-[#A69F93] leading-relaxed font-light">
          Our customer support team is always ready to assist you with order placements, product questions, and fast delivery across India.
        </p>
      </div>

      <div className="space-y-6 text-sm">
        <div className="flex items-start gap-4 group">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#34312B] bg-[#101010] text-[#C6A76A] transition-transform duration-300 group-hover:scale-110 group-hover:border-[#C6A76A]">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-medium text-[#F5F0E8]">Office & Store Location</h4>
            <p className="font-sans text-xs text-[#A69F93] mt-1 leading-relaxed font-light">
              {contactConfig.address.street}<br />
              {contactConfig.address.city}, {contactConfig.address.state} {contactConfig.address.postalCode}<br />
              {contactConfig.address.country}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 group">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#34312B] bg-[#101010] text-[#C6A76A] transition-transform duration-300 group-hover:scale-110 group-hover:border-[#C6A76A]">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-medium text-[#F5F0E8]">Email Support</h4>
            <p className="font-sans text-xs text-[#A69F93] mt-1">
              General: <a href={`mailto:${contactConfig.email}`} className="text-[#D8D2C7] hover:text-[#C6A76A] transition-colors">{contactConfig.email}</a>
            </p>
            <p className="font-sans text-xs text-[#A69F93] mt-0.5">
              Customer Care: <a href={`mailto:${contactConfig.supportEmail}`} className="text-[#D8D2C7] hover:text-[#C6A76A] transition-colors">{contactConfig.supportEmail}</a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 group">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#34312B] bg-[#101010] text-[#C6A76A] transition-transform duration-300 group-hover:scale-110 group-hover:border-[#C6A76A]">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-medium text-[#F5F0E8]">Direct Phone & WhatsApp</h4>
            <p className="font-sans text-xs text-[#A69F93] mt-1">
              <a href={`tel:${contactConfig.whatsappNumber}`} className="text-[#D8D2C7] hover:text-[#C6A76A] transition-colors">
                {contactConfig.formattedPhone}
              </a>
            </p>
            <p className="font-sans text-[11px] text-[#8C8275] mt-0.5">
              {contactConfig.workingHours.weekdays}
            </p>
          </div>
        </div>
      </div>

      {/* Instant WhatsApp Priority Link with Live Beacon & Pulse */}
      <div className="pt-2">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2.5 rounded-xl border border-[#C6A76A] bg-[#101010] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#C6A76A] hover:bg-[#C6A76A] hover:text-[#101010] animate-badge-pulse shadow-[0_0_20px_rgba(198,167,106,0.25)] hover:shadow-[0_0_35px_rgba(198,167,106,0.55)] hover:scale-[1.02] transition-all duration-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <MessageCircle className="h-4 w-4" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>

      <div className="pt-4 border-t border-[#34312B]">
        <p className="text-[11px] font-medium uppercase tracking-wider text-[#A69F93] mb-3">
          Follow Us
        </p>
        <SocialLinks />
      </div>
    </div>
  );
}
