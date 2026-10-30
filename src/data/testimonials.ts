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
    author: 'Julian Vance',
    role: 'Acoustic Engineer & Producer',
    location: 'London, UK',
    content: 'The Veloce Studio Pro headphones rival reference monitors costing thrice as much. The balance across the mid-range and low-end definition is extraordinary.',
    rating: 5,
    productMentioned: 'Veloce Studio Pro Wireless',
    verifiedBuyer: true,
  },
  {
    id: 'test-2',
    author: 'Elena Rostova',
    role: 'Creative Director',
    location: 'Stockholm, Sweden',
    content: 'Flawless craftsmanship. The full-grain weekender bag has weathered flights and cross-continental trains, gaining rich patina with every voyage.',
    rating: 5,
    productMentioned: 'Aethel Full-Grain Weekender',
    verifiedBuyer: true,
  },
  {
    id: 'test-3',
    author: 'Marcus Chen',
    role: 'Architect & Collector',
    location: 'San Francisco, CA',
    content: 'The Chronos Heritage timepiece has become an everyday companion. The finishing of the 316L case and sweeping mechanical seconds hand is sublime.',
    rating: 5,
    productMentioned: 'Chronos Heritage Chronograph',
    verifiedBuyer: true,
  },
];

export function getAllTestimonials(): Testimonial[] {
  return testimonials;
}
