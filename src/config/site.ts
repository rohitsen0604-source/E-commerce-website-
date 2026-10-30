export const siteConfig = {
  name: 'Aura Commerce',
  shortName: 'Aura',
  description: 'Premium curated lifestyle, electronics, apparel, and design artifacts. Discover timeless craftsmanship and modern innovation.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example-ecommerce.com',
  ogImage: '/images/banners/hero-banner.svg',
  logo: '/images/logos/logo.svg',
  currency: {
    code: 'USD',
    symbol: '$',
    locale: 'en-US',
  },
  announcement: {
    enabled: true,
    text: 'Complimentary worldwide express shipping on orders over $150 — Discover our 2026 Collection',
    link: '/products',
  },
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Categories', href: '/categories' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};
