export const siteConfig = {
  name: 'Aura Atelier',
  shortName: 'Aura',
  description: 'Premium curated lifestyle, electronics, apparel, and design artifacts. Discover timeless craftsmanship and modern innovation.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://auraatelier.in',
  ogImage: '/images/banners/hero-banner.svg',
  logo: '/images/logos/logo.svg',
  currency: {
    code: 'INR',
    symbol: '₹',
    locale: 'en-IN',
  },
  announcement: {
    enabled: true,
    text: 'Complimentary express shipping across India on orders over ₹4,999 — Discover our 2026 Collection',
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
