'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getNewArrivals } from '@/data/products';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Button } from '@/components/shared/Button';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export function NewArrivals() {
  const newArrivals = getNewArrivals().slice(0, 4);

  return (
    <section className="py-20 sm:py-28 bg-[#101010] text-[#F5F0E8] border-b border-[#24221E]">
      <Container size="xl">
        <ScrollReveal direction="up" delayMs={0}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <SectionHeading
              badge="Fresh From The Atelier"
              title="Recent Debuts"
              description="The latest limited releases and newly debuted studio designs freshly added to our permanent catalog."
              alignment="left"
              theme="dark"
              className="mb-0"
            />
            <Button
              href="/products?sort=newest"
              variant="outline"
              size="sm"
              rightIcon={<ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />}
              className="self-start sm:self-auto shrink-0"
            >
              All New Arrivals
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delayMs={150}>
          <ProductGrid products={newArrivals} columns={4} />
        </ScrollReveal>
      </Container>
    </section>
  );
}
