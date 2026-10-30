import { Banner } from '@/types/banner';

export const banners: Banner[] = [
  {
    id: 'banner-hero',
    title: 'Curated Elegance for Modern Living',
    subtitle: 'High-resolution wireless audio, precision automatic watches, and handcrafted luxury essentials designed for everyday modern living.',
    tagline: 'PREMIUM COLLECTION 2026',
    imageUrl: '/images/banners/hero-banner.jpg',
    linkUrl: '/products',
    buttonText: 'Explore Collection',
    type: 'hero',
    isActive: true,
  },
  {
    id: 'banner-promo',
    title: 'Seasonal Showcase: High-Fidelity Acoustics',
    subtitle: 'Experience studio-grade acoustic clarity with complimentary express courier delivery across India.',
    tagline: 'SPECIAL EDITION RELEASE',
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
