import { Brand } from '@/types/brand';

export const brands: Brand[] = [
  {
    id: 'brand-1',
    name: 'Veloce Acoustics',
    slug: 'veloce-acoustics',
    description: 'Precision acoustic engineering and high-fidelity sound equipment.',
    logo: '/images/brands/brand-1.svg',
    featured: true,
  },
  {
    id: 'brand-2',
    name: 'Aethel Atelier',
    slug: 'aethel-atelier',
    description: 'Tailored luxury garments crafted with organic fibers and timeless silhouettes.',
    logo: '/images/brands/brand-2.svg',
    featured: true,
  },
  {
    id: 'brand-3',
    name: 'Nordik Living',
    slug: 'nordik-living',
    description: 'Minimalist Scandinavian home decor, functional lighting, and furniture.',
    logo: '/images/brands/brand-3.svg',
    featured: true,
  },
  {
    id: 'brand-4',
    name: 'Komorebi Crafts',
    slug: 'komorebi-crafts',
    description: 'Artisanal ceramics and handcrafted daily lifestyle objects.',
    logo: '/images/brands/brand-4.svg',
    featured: true,
  },
  {
    id: 'brand-5',
    name: 'Chronos Horology',
    slug: 'chronos-horology',
    description: 'Precision mechanical timepieces and minimalist wrist instruments.',
    logo: '/images/brands/brand-5.svg',
    featured: true,
  },
];

export function getBrandById(id: string): Brand | undefined {
  return brands.find((b) => b.id === id);
}

export function getAllBrands(): Brand[] {
  return brands;
}
