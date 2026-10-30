import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { getAllCategories } from '@/data/categories';
import { constructMetadata } from '@/lib/metadata';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export const metadata: Metadata = constructMetadata({
  title: 'All Product Categories & Collections',
  description:
    'Explore our curated collections spanning high-fidelity audio, precision mechanical horology, luxury cashmere apparel, and minimalist design objects.',
  canonicalUrl: '/categories',
});

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <div className="py-8 sm:py-14 bg-[#101010] min-h-screen text-[#F5F0E8]">
      <Container size="xl">
        <Breadcrumb items={[{ label: 'Categories' }]} />

        <div className="pt-4 pb-14">
          <ScrollReveal direction="up" delayMs={0}>
            <SectionHeading
              badge="Curated Universes"
              title="Explore All Categories"
              description="Every category represents a distinct atelier discipline—built around authentic craftsmanship and modern minimalism."
              alignment="left"
              theme="dark"
              className="mb-10"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, idx) => (
              <ScrollReveal
                key={category.id}
                direction="up"
                delayMs={idx * 120}
                className="h-full"
              >
                <Link
                  href={`/categories/${category.slug}`}
                  className="group relative flex flex-col sm:flex-row h-full overflow-hidden rounded-2xl border border-[#34312B] bg-[#161514] transition-all duration-500 hover:border-[#C6A76A]/60 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(198,167,106,0.12)]"
                >
                  <div className="relative aspect-4/3 sm:aspect-square sm:w-1/2 overflow-hidden bg-[#121110]">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                    <div>
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#C6A76A] flex items-center gap-1.5">
                        <Sparkles className="h-3 w-3 text-[#C6A76A] animate-twinkle" />
                        Collection Showcase
                      </span>
                      <h3 className="mt-1 font-serif text-2xl font-light text-[#F5F0E8] group-hover:text-[#E8DDC8] transition-colors">
                        {category.name}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-[#D8D2C7] font-light line-clamp-3 leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#2B2823] group-hover:border-[#3D3830] transition-colors flex items-center justify-between text-xs font-medium text-[#A69F93]">
                      <span>{category.productCount || 0} Artifacts</span>
                      <span className="flex items-center gap-1.5 text-[#F5F0E8] group-hover:text-[#C6A76A] transition-colors">
                        View Collection <ArrowRight className="h-3.5 w-3.5 text-[#C6A76A] transition-transform duration-300 group-hover:translate-x-1.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
