import React from 'react';
import Image from 'next/image';
import { brandIntroductionContent } from '@/data/site-content';
import { getAllBrands } from '@/data/brands';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';

export function BrandIntroduction() {
  const brands = getAllBrands();

  return (
    <section className="py-20 sm:py-28 bg-[#F5F1E9] text-[#121110] border-b border-[#E3DDD3]">
      <Container size="xl">
        <SectionHeading
          badge="Philosophy of Form"
          title={brandIntroductionContent.heading}
          description={brandIntroductionContent.description}
          theme="light"
        />

        {/* 3 Core Pillars on Ivory */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {brandIntroductionContent.values.map((v, i) => (
            <div
              key={i}
              className="bg-[#FFFFFF] border border-[#E3DDD3] p-8 sm:p-10 shadow-xs transition-all duration-300 hover:border-[#C6A76A]"
            >
              <div className="mb-6 inline-flex font-serif text-3xl font-light text-[#C6A76A]">
                0{i + 1}
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#121110] mb-3">
                {v.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6659] leading-relaxed font-light font-sans">
                {v.description}
              </p>
            </div>
          ))}
        </div>

        {/* Atelier Logos Strip */}
        <div className="pt-10 border-t border-[#E3DDD3] text-center">
          <p className="editorial-tag text-[#8C8275] mb-8">
            Collaborating Independent Guilds & Master Ateliers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-85">
            {brands.map((brand) => (
              <div key={brand.id} className="relative h-12 w-32 sm:h-14 sm:w-40 transition-all duration-300">
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
      </Container>
    </section>
  );
}
