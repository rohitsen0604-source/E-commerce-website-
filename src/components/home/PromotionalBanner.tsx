import React from 'react';
import Image from 'next/image';
import { ArrowRight, Tag } from 'lucide-react';
import { getPromotionalBanner } from '@/data/banners';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/shared/Button';

export function PromotionalBanner() {
  const promo = getPromotionalBanner();

  if (!promo) return null;

  return (
    <section className="py-16 sm:py-24 bg-[#101010]">
      <Container size="xl">
        <div className="relative overflow-hidden rounded-2xl border border-[#34312B] bg-[#161514] px-8 py-14 sm:px-16 sm:py-20 text-[#F5F0E8]">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-full lg:w-1/2 opacity-35">
            <Image
              src={promo.imageUrl}
              alt={promo.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#161514] via-[#161514]/70 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A76A]/40 bg-[#C6A76A]/10 px-4 py-1 text-[11px] font-medium tracking-[0.2em] text-[#C6A76A] uppercase">
              <Tag className="h-3 w-3 text-[#C6A76A]" />
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
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                {promo.buttonText || 'Discover Now'}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
