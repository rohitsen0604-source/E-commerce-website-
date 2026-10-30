export interface BaseEntity {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface SeoMetadata {
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
}

export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'youtube' | 'whatsapp';
  label: string;
  url: string;
  iconName?: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}
