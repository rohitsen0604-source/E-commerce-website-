'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Tag } from 'lucide-react';
import { getPromotionalBanner } from '@/data/banners';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/shared/Button';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export function PromotionalBanner() {
  const promo = getPromotionalBanner();

  if (!promo) return null;

  return (
    <section className="py-16 sm:py-24 bg-[#101010]">
      <Container size="xl">
        <ScrollReveal direction="up" delayMs={100}>
          <div className="group relative overflow-hidden rounded-2xl border border-[#34312B] bg-[#161514] px-8 py-14 sm:px-16 sm:py-20 text-[#F5F0E8] transition-all duration-500 hover:border-[#C6A76A]/50 hover:shadow-[0_0_40px_rgba(198,167,106,0.12)]">
            {/* Background image with smooth scale on group hover */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-full lg:w-1/2 opacity-35 overflow-hidden">
              <Image
                src={promo.imageUrl}
                alt={promo.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#161514] via-[#161514]/70 to-transparent" />
              {/* Animated Light Sweep Sheen */}
              <div className="animate-light-sweep absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-2xl space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A76A]/40 bg-[#C6A76A]/10 px-4 py-1 text-[11px] font-medium tracking-[0.2em] text-[#C6A76A] uppercase">
                <Tag className="h-3 w-3 text-[#C6A76A] animate-pulse" />
                <span>{promo.tagline || 'LIMITED PRODUCTION CURATION'}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#F5F0E8] leading-tight">
                {promo.title}
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#D8D2C7] leading-relaxed font-light max-w-xl">
                {promo.subtitle}
              </p>

              <div className="pt-3">
                <Button
                  href={promo.linkUrl}
                  variant="accent"
                  size="md"
                  rightIcon={<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
                >
                  {promo.buttonText || 'Discover Now'}
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
