import { BaseEntity } from './common';

export interface Brand extends BaseEntity {
  name: string;
  slug: string;
  description: string;
  logo: string;
  websiteUrl?: string;
  featured?: boolean;
}
