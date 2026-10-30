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
    <section className="py-12 sm:py-20 lg:py-28 bg-[#F5F1E9] text-[#121110] border-b border-[#E3DDD3]">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mb-12 sm:mb-16">
          {brandIntroductionContent.values.map((v, i) => (
            <ScrollReveal key={i} direction="up" delayMs={i * 140} className="h-full">
              <div
                className="group h-full bg-[#FFFFFF] border border-[#E3DDD3] p-6 sm:p-10 shadow-xs transition-all duration-500 hover:border-[#C6A76A] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
              >
                <div className="mb-4 sm:mb-6 inline-flex font-serif text-2xl sm:text-3xl font-light text-[#C6A76A] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#9F7A38]">
                  0{i + 1}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#121110] mb-2 sm:mb-3 group-hover:text-[#8C6F38] transition-colors">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 p-4 sm:p-8 rounded-xl border border-[#E3DDD3] bg-[#EFE9DF] mb-12 sm:mb-20 text-center">
            <div className="space-y-1">
              <span className="font-serif text-xl sm:text-3xl font-light text-[#C6A76A]">100%</span>
              <p className="editorial-tag text-[#6B6358] text-[9px]">Ethical Provenance</p>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-xl sm:text-3xl font-light text-[#C6A76A]">24-48h</span>
              <p className="editorial-tag text-[#6B6358] text-[9px]">Insured Worldwide Dispatch</p>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-xl sm:text-3xl font-light text-[#C6A76A]">18+</span>
              <p className="editorial-tag text-[#6B6358] text-[9px]">Master Guild Ateliers</p>
            </div>
            <div className="space-y-1">
              <span className="font-serif text-xl sm:text-3xl font-light text-[#C6A76A]">2-Year</span>
              <p className="editorial-tag text-[#6B6358] text-[9px]">Heirloom Warranty</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Featured Brands & Official Partners */}
        <ScrollReveal direction="up" delayMs={400}>
          <div className="pt-10 border-t border-[#E3DDD3] text-center">
            <p className="editorial-tag text-[#8C8275] mb-8 font-semibold tracking-[0.2em]">
              Featured Brands &amp; Official Partners
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 md:gap-6">
              {[
                {
                  id: 'sony',
                  name: 'Sony',
                  render: () => (
                    <span className="font-serif text-2xl sm:text-3xl font-black tracking-[0.22em] text-[#121110]">
                      SONY
                    </span>
                  ),
                },
                {
                  id: 'boat',
                  name: 'boAt',
                  render: () => (
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex items-center gap-1.5">
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                          <path d="M4 17 C4 11 8 5 12 2 L12 17 Z" fill="#121110" />
                          <path d="M14 17 L14 1 C18 7 21 13 21 17 Z" fill="#E50914" />
                          <path d="M3 19 L21 19 C18 22 6 22 3 19 Z" fill="#121110" />
                        </svg>
                        <span className="font-sans text-2xl sm:text-3xl font-black tracking-tight text-[#121110]">
                          bo<span className="text-[#E50914]">A</span>t
                        </span>
                      </div>
                      <span className="text-[8px] font-bold tracking-[0.25em] text-[#8C8275] uppercase mt-0.5">
                        LIFESTYLE
                      </span>
                    </div>
                  ),
                },
                {
                  id: 'redchief',
                  name: 'Red Chief',
                  render: () => (
                    <div className="flex flex-col items-center justify-center">
                      <svg className="w-7 h-3.5 mb-1 shrink-0" viewBox="0 0 32 16" fill="none">
                        <path d="M2 4 L8 0 L16 5 L24 0 L30 4 L26 10 L6 10 Z" fill="#C5221F" />
                        <path d="M10 11 L22 11 L16 16 Z" fill="#C5221F" />
                      </svg>
                      <span className="font-sans text-base sm:text-lg font-black tracking-wider text-[#C5221F]">
                        RED CHIEF
                      </span>
                      <span className="text-[7.5px] font-bold tracking-[0.2em] text-[#121110] uppercase">
                        GENUINE LEATHER
                      </span>
                    </div>
                  ),
                },
                {
                  id: 'adidas',
                  name: 'Adidas',
                  render: () => (
                    <div className="flex flex-col items-center justify-center">
                      <svg className="w-8 h-5 mb-0.5 shrink-0" viewBox="0 0 36 24" fill="none">
                        <polygon points="4,22 4,16 12,8 12,14" fill="#121110" />
                        <polygon points="14,22 14,12 22,4 22,14" fill="#121110" />
                        <polygon points="24,22 24,8 32,0 32,14" fill="#121110" />
                      </svg>
                      <span className="font-sans text-lg sm:text-xl font-bold tracking-normal text-[#121110] -mt-1">
                        adidas
                      </span>
                    </div>
                  ),
                },
                {
                  id: 'titan',
                  name: 'Titan',
                  render: () => (
                    <div className="flex flex-col items-center justify-center">
                      <svg className="w-5 h-5 mb-1 shrink-0" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="#121110" strokeWidth="2" />
                        <path d="M7 8 L17 8 M12 8 L12 18" stroke="#121110" strokeWidth="2" strokeLinecap="square" />
                        <circle cx="12" cy="8" r="2" fill="#C6A76A" />
                      </svg>
                      <span className="font-sans text-base sm:text-lg font-extrabold tracking-[0.25em] text-[#121110]">
                        TITAN
                      </span>
                      <span className="text-[7.5px] font-bold tracking-[0.2em] text-[#A8823E] uppercase mt-0.5">
                        WATCHES
                      </span>
                    </div>
                  ),
                },
              ].map((b) => (
                <div
                  key={b.id}
                  className="group flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl border border-[#D5CDBC] bg-[#FFFFFF] shadow-xs hover:border-[#C6A76A] hover:shadow-md hover:-translate-y-1 transition-all duration-300 w-[calc(50%-0.4rem)] sm:w-40 md:w-44 h-22 sm:h-24 md:h-28 min-w-[125px]"
                >
                  {b.render()}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
