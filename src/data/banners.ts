import { Banner } from '@/types/banner';

export const banners: Banner[] = [
  {
    id: 'banner-hero',
    title: 'Curated Elegance for Modern Living',
    subtitle: 'Meticulously engineered audio, handcrafted horology, and artisanal luxury designed to transcend ordinary utility.',
    tagline: 'AUTUMN / WINTER 2026 COLLECTION',
    imageUrl: '/images/banners/hero-banner.jpg',
    linkUrl: '/products',
    buttonText: 'Explore Collection',
    type: 'hero',
    isActive: true,
  },
  {
    id: 'banner-promo',
    title: 'Seasonal Showcase: The Precision Acoustics Edition',
    subtitle: 'Experience studio-calibrated acoustic fidelity with complimentary worldwide express courier dispatch.',
    tagline: 'LIMITED PRODUCTION RELEASE',
    imageUrl: '/images/banners/promo-banner.jpg',
    linkUrl: '/categories/electronics',
    buttonText: 'Discover Acoustics',
    type: 'promo',
    isActive: true,
  },
];

export function getActiveBanners(): Banner[] {
  return banners.filter((b) => b.isActive);
}

export function getHeroBanner(): Banner | undefined {
  return banners.find((b) => b.type === 'hero' && b.isActive);
}

export function getPromotionalBanner(): Banner | undefined {
  return banners.find((b) => b.type === 'promo' && b.isActive);
}
