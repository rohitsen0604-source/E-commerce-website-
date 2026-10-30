import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Truck, Sparkles, MessageCircle } from 'lucide-react';
import { getHeroBanner } from '@/data/banners';
import { contactConfig } from '@/config/contact';
import { buildWhatsAppLink } from '@/lib/utils';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/shared/Button';

export function HeroSection() {
  const heroBanner = getHeroBanner();

  const whatsappHref = buildWhatsAppLink(
    contactConfig.whatsappNumber,
    contactConfig.whatsappMessageTemplates.generalInquiry
  );

  return (
    <section className="relative overflow-hidden bg-[#101010] text-[#F5F0E8] py-20 sm:py-28 lg:py-36 border-b border-[#24221E]">
      {/* Subtle warm champagne radial aura */}
      <div className="pointer-events-none absolute -top-40 right-10 h-[650px] w-[650px] rounded-full bg-[#C6A76A]/5 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-40 left-10 h-[500px] w-[500px] rounded-full bg-[#1C1B19] blur-[120px]" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-7 sm:space-y-9 animate-fade-in-up">
            <div className="inline-flex items-center gap-2.5 border border-[#34312B] bg-[#161513] px-4 py-1.5">
              <span className="text-[#C6A76A] text-xs">⚜</span>
              <span className="editorial-tag text-[#E8DDC8]">
                {heroBanner?.tagline || 'THE OBSIDIAN & CHAMPAGNE COLLECTION'}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-wide leading-[1.05] text-[#F5F0E8]">
              {heroBanner?.title || 'Curated Elegance for Modern Living'}
            </h1>

            <p className="max-w-xl text-sm sm:text-base text-[#A69D8F] leading-relaxed font-light font-sans">
              {heroBanner?.subtitle ||
                'Meticulously engineered audio, handcrafted Swiss horology, and pure cashmere artifacts crafted to transcend ordinary utility.'}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href="/products"
                variant="accent"
                size="lg"
                rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
              >
                {heroBanner?.buttonText || 'Explore Collection'}
              </Button>
              <Button
                href={whatsappHref}
                isExternal
                variant="outline"
                size="lg"
                leftIcon={<MessageCircle className="h-3.5 w-3.5 text-[#C6A76A]" />}
              >
                Private Concierge
              </Button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-[#24221E] text-xs text-[#8C8275] font-light">
              <div className="flex items-center gap-2.5">
                <Truck className="h-4 w-4 text-[#C6A76A] shrink-0" />
                <span>Complimentary Express Courier</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-4 w-4 text-[#C6A76A] shrink-0" />
                <span>Individually Certified Provenance</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <Sparkles className="h-4 w-4 text-[#C6A76A] shrink-0" />
                <span>Bespoke Monogramming</span>
              </div>
            </div>
          </div>

          {/* Right Hero Cinematic Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/3 sm:aspect-square w-full overflow-hidden border border-[#34312B] bg-[#161514] shadow-2xl animate-scale-up">
              <Image
                src={heroBanner?.imageUrl || '/images/banners/hero-banner.svg'}
                alt="Aura Atelier Master Collection"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6 p-5 border border-[#34312B] bg-[#101010]/90 backdrop-blur-md flex items-center justify-between">
                <div>
                  <p className="editorial-tag text-[#C6A76A]">
                    Signature Release
                  </p>
                  <p className="font-serif text-base font-normal text-[#F5F0E8] mt-0.5">
                    Veloce Acoustics & Horology
                  </p>
                </div>
                <Link
                  href="/categories/electronics"
                  className="editorial-tag text-[#E8DDC8] hover:text-[#C6A76A] transition-colors"
                >
                  View &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
