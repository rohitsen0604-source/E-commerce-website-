import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedCategories } from '@/components/home/FeaturedCategories';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { NewArrivals } from '@/components/home/NewArrivals';
import { BestSellers } from '@/components/home/BestSellers';
import { PromotionalBanner } from '@/components/home/PromotionalBanner';
import { BrandIntroduction } from '@/components/home/BrandIntroduction';
import { Testimonials } from '@/components/home/Testimonials';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Showcase Section */}
      <HeroSection />

      {/* 2. Featured Category Grid */}
      <FeaturedCategories />

      {/* 3. Featured Products Grid */}
      <FeaturedProducts />

      {/* 4. Atelier & Brand Philosophy */}
      <BrandIntroduction />

      {/* 5. New Arrivals Showcase */}
      <NewArrivals />

      {/* 6. Promotional Special Release Banner */}
      <PromotionalBanner />

      {/* 7. Best Sellers Collection */}
      <BestSellers />

      {/* 8. Collector Testimonials */}
      <Testimonials />
    </div>
  );
}
