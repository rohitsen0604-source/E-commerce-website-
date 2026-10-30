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
  {
    id: 'cat-jewellery',
    name: 'Jewellery',
    slug: 'jewellery',
    description: 'Handcrafted 18k solid gold adornments, bespoke gemstone pendants, and timeless artisanal heirloom treasures.',
    image: '/images/categories/jewellery.jpg',
    parentCategoryId: null,
    featured: true,
    productCount: 6,
    seo: {
      metaTitle: 'Luxury Jewellery Collection | Fine Ornaments',
      metaDescription: 'Explore our exquisite jewellery collection crafted with precious metals and timeless elegance.',
    },
  },
  {
    id: 'cat-musical-instruments',
    name: 'Musical Instruments',
    slug: 'musical-instruments',
    description: 'Acoustic guitars, orchestral instruments, professional studio gear, and precision sound artifacts.',
    image: '/images/categories/musical-instruments.jpg',
    parentCategoryId: null,
    featured: true,
    productCount: 6,
    seo: {
      metaTitle: 'Mastercrafted Musical Instruments | Aura Atelier',
      metaDescription: 'Explore handcrafted acoustic guitars, studio instruments, and orchestral sound gear designed for artistic expression.',
    },
  },
  {
    id: 'cat-toys',
    name: 'Toys',
    slug: 'toys',
    description: 'Educational playsets, creative building toys, Montessori learning artifacts, and imaginative play collections.',
    image: '/images/categories/toys-v2.jpg',
    parentCategoryId: null,
    featured: true,
    productCount: 6,
    seo: {
      metaTitle: 'Creative Toys & Educational Playsets | Aura Atelier',
      metaDescription: 'Discover handcrafted wooden toys, Montessori educational sets, and premium creative toys for kids.',
    },
  },
  {
    id: 'cat-baby-items',
    name: 'Baby Items',
    slug: 'baby-items',
    description: 'Organic baby essentials, gentle nursery decor, premium feeding accessories, and newborn care collections.',
    image: '/images/categories/baby-items-v2.jpg',
    parentCategoryId: null,
    featured: true,
    productCount: 6,
    seo: {
      metaTitle: 'Premium Baby Essentials & Newborn Care | Aura Atelier',
      metaDescription: 'Shop organic cotton baby essentials, soothing nursery products, and curated infant care artifacts.',
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
