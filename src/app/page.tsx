import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { LuxuryMarquee } from '@/components/home/LuxuryMarquee';
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
      {/* 1. Hero Showcase Section with Magnetic Cursor Light & 3D Tilt */}
      <HeroSection />

      {/* 2. Prestige Luxury Marquee Ribbon */}
      <LuxuryMarquee />

      {/* 3. Featured Category Grid with Staggered Scroll-Reveal */}
      <FeaturedCategories />

      {/* 4. Featured Products Grid */}
      <FeaturedProducts />

      {/* 5. Atelier & Brand Philosophy with Metric Badges */}
      <BrandIntroduction />

      {/* 6. New Arrivals Showcase */}
      <NewArrivals />

      {/* 7. Promotional Special Release Banner with Light Sheen */}
      <PromotionalBanner />

      {/* 8. Best Sellers Collection */}
      <BestSellers />

      {/* 9. Collector Testimonials with Interactive Hover */}
      <Testimonials />
    </div>
  );
}
