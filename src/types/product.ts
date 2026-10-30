import { BaseEntity, SeoMetadata } from './common';

export type ProductAvailability = 'in-stock' | 'out-of-stock' | 'pre-order';

export interface ProductVariant {
  id: string;
  name: string;
  type: 'color' | 'size' | 'material' | 'edition';
  value: string;
  priceModifier?: number;
  inStock: boolean;
}

export interface ProductSpecification {
  name: string;
  value: string;
  group?: string;
}

export interface Product extends BaseEntity {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  SKU: string;
  categoryId: string;
  brandId: string;
  images: string[];
  specifications: ProductSpecification[];
  features: string[];
  variants: ProductVariant[];
  availability: ProductAvailability;
  featured: boolean;
  newArrival: boolean;
  bestSeller: boolean;
  rating: number;
  reviewCount: number;
  seo?: SeoMetadata;
}

export interface ProductFilterState {
  categoryId?: string;
  brandId?: string;
  minPrice?: number;
  maxPrice?: number;
  availability?: ProductAvailability;
  searchQuery?: string;
  featuredOnly?: boolean;
  sortBy?: 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';
}
