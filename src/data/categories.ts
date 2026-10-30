import { Category } from '@/types/category';

export const categories: Category[] = [
  {
    id: 'cat-electronics',
    name: 'Electronics & Audio',
    slug: 'electronics',
    description: 'High-performance audio, tactile keyboards, and smart home technology designed for modern living.',
    image: '/images/categories/electronics.jpg',
    parentCategoryId: null,
    featured: true,
    productCount: 24,
    seo: {
      metaTitle: 'Premium Electronics & Audio Equipment',
      metaDescription: 'Explore studio-grade headphones, ergonomic mechanical keyboards, and ambient smart lighting.',
    },
  },
  {
    id: 'cat-apparel',
    name: 'Apparel & Wear',
    slug: 'apparel',
    description: 'Handcrafted luxury knitwear, premium outerwear, and sustainable wardrobe staples.',
    image: '/images/categories/apparel.jpg',
    parentCategoryId: null,
    featured: true,
    productCount: 18,
    seo: {
      metaTitle: 'Artisanal Apparel & Sustainable Knitwear',
      metaDescription: 'Discover pure cashmere knitwear, luxury outerwear, and timeless wardrobe essentials.',
    },
  },
  {
    id: 'cat-home-living',
    name: 'Home & Living',
    slug: 'home-living',
    description: 'Elevated lifestyle goods, handcrafted pour-over coffee gear, and functional design objects.',
    image: '/images/categories/home-living.jpg',
    parentCategoryId: null,
    featured: true,
    productCount: 32,
    seo: {
      metaTitle: 'Minimalist Home Decor & Specialty Coffee Artifacts',
      metaDescription: 'Shop handcrafted ceramic pour-overs, ambient lighting, and Scandinavian home objects.',
    },
  },
  {
    id: 'cat-accessories',
    name: 'Accessories & Horology',
    slug: 'accessories',
    description: 'Full-grain leather carry goods, titanium sunglasses, and minimalist chronograph watches.',
    image: '/images/categories/accessories.jpg',
    parentCategoryId: null,
    featured: true,
    productCount: 15,
    seo: {
      metaTitle: 'Luxury Leather Goods, Sunglasses & Watches',
      metaDescription: 'Discover full-grain leather bags, polarized titanium eyewear, and automatic chronographs.',
    },
  },
];

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getFeaturedCategories(): Category[] {
  return categories.filter((c) => c.featured);
}
