import { SocialLink } from '@/types/common';

export interface ContactConfig {
  businessName: string;
  legalEntityName: string;
  email: string;
  supportEmail: string;
  phone: string;
  formattedPhone: string;
  whatsappNumber: string; // Clean numerical digits with country code, e.g., 15552345678
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  workingHours: {
    weekdays: string;
    weekends: string;
  };
  socialLinks: SocialLink[];
  whatsappMessageTemplates: {
    generalInquiry: string;
    productInquiry: (productName: string, productUrl: string) => string;
  };
}

export const contactConfig: ContactConfig = {
  businessName: process.env.NEXT_PUBLIC_SITE_NAME || 'Aura Atelier',
  legalEntityName: 'Aura Atelier India Pvt. Ltd.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'support@auraatelier.in',
  supportEmail: 'care@auraatelier.in',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+91 98765 43210',
  formattedPhone: '+91 98765 43210',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210',
  address: {
    street: 'Scheme No. 54, Vijay Nagar',
    city: 'Indore',
    state: 'Madhya Pradesh',
    postalCode: '452010',
    country: 'India',
  },
  workingHours: {
    weekdays: 'Mon - Fri: 10:00 AM – 7:00 PM IST',
    weekends: 'Sat - Sun: 11:00 AM – 6:00 PM IST',
  },
  socialLinks: [
    { platform: 'instagram', label: 'Instagram', url: 'https://instagram.com' },
    { platform: 'facebook', label: 'Facebook', url: 'https://facebook.com' },
    { platform: 'twitter', label: 'X (Twitter)', url: 'https://x.com' },
    { platform: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com' },
  ],
  whatsappMessageTemplates: {
    generalInquiry: 'Hello Aura Atelier! I would like to know more about your collection.',
    productInquiry: (productName: string, productUrl: string) =>
      `Hello Aura Atelier! I want to order "${productName}". View product here: ${productUrl}`,
  },
};
