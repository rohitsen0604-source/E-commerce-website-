import { BaseEntity, SeoMetadata } from './common';

export interface Category extends BaseEntity {
  name: string;
  slug: string;
  description: string;
  image: string;
  parentCategoryId?: string | null;
  featured: boolean;
  productCount?: number;
  seo?: SeoMetadata;
}
