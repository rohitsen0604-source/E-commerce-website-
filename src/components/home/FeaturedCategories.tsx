import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { getFeaturedCategories } from '@/data/categories';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';

export function FeaturedCategories() {
  const categories = getFeaturedCategories();

  return (
    <section className="py-20 sm:py-28 bg-[#F5F1E9] text-[#121110] border-b border-[#E3DDD3]">
      <Container size="xl">
        <SectionHeading
          badge="Curated Universes"
          title="Explore by Category"
          description="Discover artifacts categorized across acoustic transducers, pure cashmere knitwear, minimalist sanctuary decor, and horological precision."
          theme="light"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group relative flex flex-col bg-[#FFFFFF] border border-[#E3DDD3] transition-all duration-500 hover:border-[#C6A76A]/60 hover:shadow-xl"
            >
              <div className="relative aspect-3/2 w-full overflow-hidden bg-[#161514]">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-serif text-xl font-normal text-[#121110] group-hover:text-[#8C6F38] transition-colors">
                    {category.name}
                  </h3>
                  <span className="editorial-tag text-[#8C8275] text-[9px]">
                    {category.productCount} pieces
                  </span>
                </div>
                <p className="text-xs text-[#6E6659] line-clamp-2 leading-relaxed font-light font-sans">
                  {category.description}
                </p>
                <div className="mt-5 pt-4 border-t border-[#EAE5DC] flex items-center justify-between text-[10px] tracking-widest uppercase font-medium text-[#121110] group-hover:text-[#C6A76A] transition-colors">
                  <span>Explore Collection</span>
                  <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
