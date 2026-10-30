import React from 'react';
import { Product } from '@/types/product';
import { ProductGrid } from './ProductGrid';
import { SectionHeading } from '@/components/shared/SectionHeading';

export interface RelatedProductsProps {
  products: Product[];
  currentProductId: string;
}

export function RelatedProducts({ products, currentProductId }: RelatedProductsProps) {
  const filtered = products.filter((p) => p.id !== currentProductId).slice(0, 4);

  if (filtered.length === 0) return null;

  return (
    <section className="pt-10 sm:pt-16 border-t border-[#34312B]">
      <SectionHeading
        badge="Related Artifacts"
        title="Complementary Pieces"
        description="Thoughtfully curated items from the same atelier to harmonize your luxury collection."
        alignment="left"
        theme="dark"
      />
      <ProductGrid products={filtered} columns={4} />
    </section>
  );
}
