export const siteConfig = {
  name: 'Aura Atelier',
  shortName: 'Aura',
  description: 'Premium curated lifestyle, electronics, apparel, and design artifacts. Discover timeless craftsmanship and modern innovation.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example-ecommerce.com',
  ogImage: '/images/banners/hero-banner.svg',
  logo: '/images/logos/logo.svg',
  currency: {
    code: 'INR',
    symbol: '₹',
    locale: 'en-IN',
  },
  announcement: {
    enabled: true,
    text: 'Complimentary express shipping across India on orders over ₹499 — Festive Collection 2026',
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
