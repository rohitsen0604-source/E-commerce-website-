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
  businessName: process.env.NEXT_PUBLIC_SITE_NAME || 'Aura Commerce',
  legalEntityName: 'Aura Commerce Studio Inc.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'support@auracommerce.example',
  supportEmail: 'care@auracommerce.example',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+1 (555) 234-5678',
  formattedPhone: '+1 (555) 234-5678',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '15552345678',
  address: {
    street: '100 Luxury Avenue, Suite 400',
    city: 'New York',
    state: 'NY',
    postalCode: '10001',
    country: 'United States',
  },
  workingHours: {
    weekdays: 'Mon - Fri: 9:00 AM – 6:00 PM EST',
    weekends: 'Sat - Sun: 10:00 AM – 4:00 PM EST',
  },
  socialLinks: [
    { platform: 'instagram', label: 'Instagram', url: 'https://instagram.com' },
    { platform: 'facebook', label: 'Facebook', url: 'https://facebook.com' },
    { platform: 'twitter', label: 'X (Twitter)', url: 'https://x.com' },
    { platform: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com' },
  ],
  whatsappMessageTemplates: {
    generalInquiry: 'Hello Aura Commerce! I would like to inquire about your catalog and services.',
    productInquiry: (productName: string, productUrl: string) =>
      `Hello Aura Commerce! I am interested in inquiring about "${productName}". View product here: ${productUrl}`,
  },
};
