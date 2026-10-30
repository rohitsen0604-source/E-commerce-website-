import { BaseEntity } from './common';

export interface Banner extends BaseEntity {
  title: string;
  subtitle?: string;
  tagline?: string;
  imageUrl: string;
  mobileImageUrl?: string;
  linkUrl: string;
  buttonText?: string;
  type: 'hero' | 'promo' | 'category' | 'strip';
  isActive: boolean;
}
