import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getBestSellers } from '@/data/products';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Button } from '@/components/shared/Button';

export function BestSellers() {
  const bestSellers = getBestSellers().slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-[#F5F1E9] border-t border-[#E3DDD3]">
      <Container size="xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <SectionHeading
            badge="Customer Favorites"
            title="Best Sellers"
            description="Our most revered and proven artifacts, consistently acclaimed by connoisseurs and collectors worldwide."
            alignment="left"
            theme="light"
            className="mb-0"
          />
          <Button
            href="/products?filter=bestseller"
            variant="outline"
            size="sm"
            rightIcon={<ArrowRight className="h-4 w-4" />}
            className="self-start sm:self-auto shrink-0 border-[#101010] text-[#101010] hover:bg-[#101010] hover:text-[#F5F0E8]"
          >
            Explore Best Sellers
          </Button>
        </div>

        <ProductGrid products={bestSellers} columns={4} />
      </Container>
    </section>
  );
}
