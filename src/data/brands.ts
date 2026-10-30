import { Brand } from '@/types/brand';

export const brands: Brand[] = [
  {
    id: 'brand-1',
    name: 'Sony',
    slug: 'sony',
    description: 'World-renowned audio engineering, flagship noise-cancelling headphones, and premium electronics.',
    logo: '/images/brands/sony.svg',
    featured: true,
  },
  {
    id: 'brand-2',
    name: 'Red Chief',
    slug: 'red-chief',
    description: 'Iconic genuine full-grain leather bags, rugged travel accessories, and lifestyle essentials.',
    logo: '/images/brands/redchief.svg',
    featured: true,
  },
  {
    id: 'brand-3',
    name: 'boAt',
    slug: 'boat',
    description: "India's leading lifestyle audio brand delivering signature sound, smart wearables, and acoustics.",
    logo: '/images/brands/boat.svg',
    featured: true,
  },
  {
    id: 'brand-4',
    name: 'Adidas',
    slug: 'adidas',
    description: 'Global iconic sportswear and apparel brand delivering modern style, comfort, and premium knitwear.',
    logo: '/images/brands/adidas.svg',
    featured: true,
  },
  {
    id: 'brand-5',
    name: 'Titan',
    slug: 'titan',
    description: "India's celebrated premier watchmaker, synonymous with precision horology and timeless craftsmanship.",
    logo: '/images/brands/titan.svg',
    featured: true,
  },
];

export function getBrandById(id: string): Brand | undefined {
  return brands.find((b) => b.id === id);
}

export function getAllBrands(): Brand[] {
  return brands;
}

export function getFeaturedBrands(): Brand[] {
  return brands.filter((b) => b.featured);
}
