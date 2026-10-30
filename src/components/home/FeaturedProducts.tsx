import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '@/data/products';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Button } from '@/components/shared/Button';

export function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 4);

  return (
    <section className="py-20 sm:py-28 bg-[#101010] text-[#F5F0E8] border-b border-[#24221E]">
      <Container size="xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="Spotlight Selection"
            title="Signature Artifacts"
            description="Our most revered permanent collection pieces, chosen for acoustic precision, exceptional metallurgical finishing, and timeless appeal."
            alignment="left"
            theme="dark"
            className="mb-0"
          />
          <Button
            href="/products"
            variant="outline"
            size="sm"
            rightIcon={<ArrowRight className="h-3 w-3" />}
            className="self-start sm:self-auto shrink-0"
          >
            All Products
          </Button>
        </div>

        <ProductGrid products={featured} columns={4} />
      </Container>
    </section>
  );
}
