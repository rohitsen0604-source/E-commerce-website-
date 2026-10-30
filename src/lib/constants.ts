export const SORT_OPTIONS = [
  { label: 'Featured & Popular', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Highest Rated', value: 'rating' },
  { label: 'Newest Arrivals', value: 'newest' },
] as const;

export const AVAILABILITY_OPTIONS = [
  { label: 'All Items', value: '' },
  { label: 'In Stock', value: 'in-stock' },
  { label: 'Pre-Order', value: 'pre-order' },
] as const;

export const DEFAULT_PAGE_SIZE = 12;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
