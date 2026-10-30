'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { getFeaturedCategories } from '@/data/categories';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export function FeaturedCategories() {
  const categories = getFeaturedCategories();

  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-[#F5F1E9] text-[#121110] border-b border-[#E3DDD3]">
      <Container size="xl">
        <ScrollReveal direction="up" delayMs={0}>
          <SectionHeading
            badge="Curated Universes"
            title="Explore by Category"
            description="Discover artifacts categorized across acoustic transducers, pure cashmere knitwear, minimalist sanctuary decor, and horological precision."
            theme="light"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {categories.map((category, index) => (
            <ScrollReveal
              key={category.id}
              direction="up"
              delayMs={index * 120}
              className="h-full"
            >
              <Link
                href={`/categories/${category.slug}`}
                className="group relative flex flex-col h-full bg-[#FFFFFF] border border-[#E3DDD3] transition-all duration-500 hover:border-[#C6A76A] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
              >
                <div className="relative aspect-3/2 w-full overflow-hidden bg-[#161514]">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  {/* Subtle hover overlay sheen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-[#121110] group-hover:text-[#8C6F38] transition-colors">
                      {category.name}
                    </h3>
                    <span className="editorial-tag text-[#8C8275] text-[9px] group-hover:text-[#C6A76A] transition-colors">
                      {category.productCount} pieces
                    </span>
                  </div>
                  <p className="text-xs text-[#6E6659] line-clamp-2 leading-relaxed font-light font-sans">
                    {category.description}
                  </p>
                  <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-[#EAE5DC] flex items-center justify-between text-[10px] tracking-widest uppercase font-medium text-[#121110] group-hover:text-[#C6A76A] transition-colors">
                    <span>Explore Collection</span>
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
