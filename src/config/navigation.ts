export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navigationConfig = {
  mainNav: [
    { title: 'Home', href: '/' },
    { title: 'All Products', href: '/products' },
    { title: 'Categories', href: '/categories' },
    { title: 'About Us', href: '/about' },
    { title: 'Contact', href: '/contact' },
  ],
  categoryNav: [
    { title: 'Electronics', href: '/categories/electronics', badge: 'Popular' },
    { title: 'Apparel', href: '/categories/apparel' },
    { title: 'Home & Living', href: '/categories/home-living' },
    { title: 'Accessories', href: '/categories/accessories', badge: 'New' },
    { title: 'Jewellery', href: '/categories/jewellery' },
    { title: 'Musical Instruments', href: '/categories/musical-instruments' },
    { title: 'Toys', href: '/categories/toys' },
    { title: 'Baby Items', href: '/categories/baby-items' },
  ],
  footerNav: {
    shop: [
      { title: 'All Products', href: '/products' },
      { title: 'Electronics', href: '/categories/electronics' },
      { title: 'Apparel & Wear', href: '/categories/apparel' },
      { title: 'Home & Living', href: '/categories/home-living' },
      { title: 'Accessories', href: '/categories/accessories' },
      { title: 'Jewellery', href: '/categories/jewellery' },
      { title: 'Musical Instruments', href: '/categories/musical-instruments' },
      { title: 'Toys', href: '/categories/toys' },
      { title: 'Baby Items', href: '/categories/baby-items' },
    ],
    company: [
      { title: 'About Our Brand', href: '/about' },
      { title: 'Contact Support', href: '/contact' },
      { title: 'Frequently Asked Questions', href: '/faq' },
    ],
    legal: [
      { title: 'Privacy Policy', href: '/privacy-policy' },
      { title: 'Terms & Conditions', href: '/terms-and-conditions' },
      { title: 'Shipping Policy', href: '/shipping-policy' },
      { title: 'Return & Refund Policy', href: '/return-policy' },
    ],
  },
};
