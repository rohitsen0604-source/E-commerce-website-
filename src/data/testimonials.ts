export interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  avatar?: string;
  content: string;
  rating: number;
  productMentioned: string;
  verifiedBuyer: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Aarav Singhania',
    role: 'Music Producer & Audio Creator',
    location: 'Mumbai, Maharashtra',
    content: 'The Premium Wireless Over-Ear Headphones deliver studio-grade sound quality with outstanding active noise cancellation. Perfect for long music sessions and daily travel across Mumbai.',
    rating: 5,
    productMentioned: 'Premium Wireless Over-Ear Headphones',
    verifiedBuyer: true,
  },
  {
    id: 'test-2',
    author: 'Ananya Roy',
    role: 'Architect & Interior Designer',
    location: 'Bengaluru, Karnataka',
    content: 'Superb quality genuine leather and exceptional stitching. This leather travel duffel bag has become my go-to companion for frequent business flights between Bengaluru, Delhi, and Mumbai.',
    rating: 5,
    productMentioned: 'Premium Full-Grain Leather Travel Duffel Bag',
    verifiedBuyer: true,
  },
  {
    id: 'test-3',
    author: 'Vikramaditya Mehta',
    role: 'Watch Collector & Entrepreneur',
    location: 'New Delhi',
    content: 'The Classic Leather Strap Chronograph Watch is exceptionally well-made. The stainless steel finish, scratch-resistant sapphire glass, and smooth automatic movement feel truly premium.',
    rating: 5,
    productMentioned: 'Classic Leather Strap Chronograph Watch',
    verifiedBuyer: true,
  },
];

export function getAllTestimonials(): Testimonial[] {
  return testimonials;
}
