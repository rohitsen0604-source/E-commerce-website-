'use client';

import React from 'react';
import Image from 'next/image';
import { brandIntroductionContent } from '@/data/site-content';
import { getAllBrands } from '@/data/brands';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export function BrandIntroduction() {
  const brands = getAllBrands();

  return (
    <section className="py-20 sm:py-28 bg-[#F5F1E9] text-[#121110] border-b border-[#E3DDD3]">
      <Container size="xl">
        <ScrollReveal direction="up" delayMs={0}>
          <SectionHeading
            badge="Philosophy of Form"
            title={brandIntroductionContent.heading}
            description={brandIntroductionContent.description}
            theme="light"
          />
        </ScrollReveal>

        {/* 3 Core Pillars on Ivory with Interactive Staggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {brandIntroductionContent.values.map((v, i) => (
            <ScrollReveal key={i} direction="up" delayMs={i * 140} className="h-full">
              <div
                className="group h-full bg-[#FFFFFF] border border-[#E3DDD3] p-8 sm:p-10 shadow-xs transition-all duration-500 hover:border-[#C6A76A] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
              >
                <div className="mb-6 inline-flex font-serif text-3xl font-light text-[#C6A76A] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#9F7A38]">
                  0{i + 1}
                </div>
                <h3 className="font-serif text-2xl font-normal text-[#121110] mb-3 group-hover:text-[#8C6F38] transition-colors">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E6659] leading-relaxed font-light font-sans">
                  {v.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Prestigious Metric Highlights */}
        <ScrollReveal direction="up" delayMs={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-xl border border-[#E3DDD3] bg-[#EFE9DF] mb-20 text-center">
            <div className="space-y-1">
              <span className="font-serif text-2xl sm:text-3xl font-light text-[#C6A76A]">100%</span>
              <p className="editorial-tag text-[#6B6358] text-[9px]">Ethical Provenance</p>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-2xl sm:text-3xl font-light text-[#C6A76A]">24-48h</span>
              <p className="editorial-tag text-[#6B6358] text-[9px]">Insured Worldwide Dispatch</p>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-2xl sm:text-3xl font-light text-[#C6A76A]">18+</span>
              <p className="editorial-tag text-[#6B6358] text-[9px]">Master Guild Ateliers</p>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-2xl sm:text-3xl font-light text-[#C6A76A]">2-Year</span>
              <p className="editorial-tag text-[#6B6358] text-[9px]">Heirloom Warranty</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Atelier Logos Strip */}
        <ScrollReveal direction="up" delayMs={400}>
          <div className="pt-10 border-t border-[#E3DDD3] text-center">
            <p className="editorial-tag text-[#8C8275] mb-8">
              Collaborating Independent Guilds & Master Ateliers
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-85">
              {brands.map((brand) => (
                <div
                  key={brand.id}
                  className="relative h-12 w-32 sm:h-14 sm:w-40 transition-all duration-300 hover:opacity-100 hover:scale-105"
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    sizes="(max-width: 768px) 128px, 160px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
