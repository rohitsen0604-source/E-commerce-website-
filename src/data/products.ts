import { Product, ProductFilterState } from '@/types/product';

/**
 * =========================================================================
 * CLIENT DATA UPDATE INSTRUCTIONS:
 * To update product catalog items or add new commercial inventory:
 * 1. Add or modify product objects in the `products` array below.
 * 2. Place corresponding product images into `/public/images/products/`.
 * 3. Match `categoryId` with IDs in `src/data/categories.ts`.
 * 4. Match `brandId` with IDs in `src/data/brands.ts`.
 * =========================================================================
 */
export const products: Product[] = [
  {
    id: 'prod-001',
    slug: 'wireless-noise-cancelling-headphones',
    name: 'Veloce Studio Pro Wireless Headphones',
    shortDescription: 'Flagship wireless headphones featuring custom 45mm beryllium drivers and hybrid active noise cancellation.',
    description: 'Engineered for audio purists and discerning creators, the Veloce Studio Pro delivers pristine high-resolution acoustic reproduction. Featuring ultra-soft memory foam earcups, multi-point Bluetooth 5.3 connectivity, and up to 48 hours of uninterrupted playback on a single charge.',
    price: 349.0,
    originalPrice: 399.0,
    discountPercentage: 12,
    SKU: 'VEL-AUD-001',
    categoryId: 'cat-electronics',
    brandId: 'brand-1',
    images: [
      '/images/products/headphones.jpg',
      '/images/banners/promo-banner.jpg',
    ],
    features: [
      'Custom 45mm Beryllium Acoustic Transducers',
      'Adaptive Hybrid Active Noise Cancellation (40dB reduction)',
      '48-hour continuous battery life with rapid USB-C charging',
      'Ultra-low latency audio codec support (LDAC, aptX Adaptive)',
      'Tactile brushed aluminum controls and memory foam ear cushions',
    ],
    specifications: [
      { name: 'Driver Size', value: '45mm Beryllium Drivers', group: 'Acoustics' },
      { name: 'Frequency Response', value: '10Hz – 40,000Hz', group: 'Acoustics' },
      { name: 'Connectivity', value: 'Bluetooth 5.3 & 3.5mm Aux', group: 'Connectivity' },
      { name: 'Battery Capacity', value: '1000 mAh (Up to 48 Hours)', group: 'Power' },
      { name: 'Weight', value: '275 grams', group: 'Dimensions' },
    ],
    variants: [
      { id: 'v1', name: 'Midnight Matte Black', type: 'color', value: 'Midnight Black', inStock: true },
      { id: 'v2', name: 'Silver Platinum', type: 'color', value: 'Silver Platinum', inStock: true },
      { id: 'v3', name: 'Desert Sand Tan', type: 'color', value: 'Desert Sand', inStock: false },
    ],
    availability: 'in-stock',
    featured: true,
    newArrival: false,
    bestSeller: true,
    rating: 4.9,
    reviewCount: 128,
    seo: {
      metaTitle: 'Veloce Studio Pro Wireless Headphones | High-Res Audio',
      metaDescription: 'Shop the Veloce Studio Pro Wireless Headphones with hybrid ANC, 48-hour battery, and custom 45mm drivers.',
      keywords: ['wireless headphones', 'noise cancelling headphones', 'audiophile', 'veloce studio pro'],
    },
  },
  {
    id: 'prod-002',
    slug: 'minimalist-chronograph-watch',
    name: 'Chronos Heritage Automatic Chronograph',
    shortDescription: 'Swiss-designed automatic chronograph with sapphire crystal and surgical-grade 316L stainless steel case.',
    description: 'The Chronos Heritage is an homage to mid-century industrial horology. Driven by a 28-jewel automatic movement with a 42-hour power reserve, this timepiece features dual anti-reflective sapphire glass, water resistance up to 10 ATM, and an interchangeable quick-release strap.',
    price: 680.0,
    originalPrice: 750.0,
    discountPercentage: 9,
    SKU: 'CHR-HOR-002',
    categoryId: 'cat-accessories',
    brandId: 'brand-5',
    images: [
      '/images/products/watch.jpg',
      '/images/banners/hero-banner.jpg',
    ],
    features: [
      'Japanese 28-Jewel High-Beat Automatic Movement',
      'Dual domed scratch-resistant sapphire crystal glass',
      'Surgical-grade 316L solid stainless steel casing',
      '10 ATM (100 meters) certified water resistance',
      'Hand-stitched Italian vegetable-tanned leather strap',
    ],
    specifications: [
      { name: 'Case Diameter', value: '40mm', group: 'Horology' },
      { name: 'Case Thickness', value: '11.8mm', group: 'Horology' },
      { name: 'Lug Width', value: '20mm', group: 'Horology' },
      { name: 'Movement', value: 'Automatic Mechanical Calibre', group: 'Movement' },
      { name: 'Water Resistance', value: '10 ATM (100m)', group: 'Durability' },
    ],
    variants: [
      { id: 'v4', name: 'Onyx Dial / Black Strap', type: 'color', value: 'Onyx / Black', inStock: true },
      { id: 'v5', name: 'Silver Dial / Brown Strap', type: 'color', value: 'Silver / Tan', inStock: true },
    ],
    availability: 'in-stock',
    featured: true,
    newArrival: true,
    bestSeller: false,
    rating: 4.8,
    reviewCount: 94,
    seo: {
      metaTitle: 'Chronos Heritage Automatic Chronograph Watch',
      metaDescription: 'Discover the precision-crafted Chronos Heritage Automatic Chronograph with sapphire glass and 316L stainless steel.',
      keywords: ['automatic watch', 'chronograph', 'luxury watch', 'chronos horology'],
    },
  },
  {
    id: 'prod-003',
    slug: 'artisan-leather-weekender-bag',
    name: 'Aethel Full-Grain Leather Weekender Bag',
    shortDescription: 'Masterfully stitched full-grain vegetable-tanned leather duffle bag with solid brass hardware.',
    description: 'Designed for effortless transitions between business commutes and weekend retreats. Hand-burnished by traditional leather artisans, featuring a dedicated ventilated shoe compartment, padded 16-inch laptop sleeve, and YKK Excella zippers guaranteed for a lifetime.',
    price: 495.0,
    originalPrice: 550.0,
    discountPercentage: 10,
    SKU: 'AET-LGT-003',
    categoryId: 'cat-accessories',
    brandId: 'brand-2',
    images: [
      '/images/products/bag.jpg',
      '/images/banners/hero-banner.jpg',
    ],
    features: [
      '100% Full-grain Tuscan vegetable-tanned calfskin leather',
      'Reinforced solid brass hardware with antique patina finish',
      'Dedicated padded sleeve fits laptops up to 16 inches',
      'Separate zippered bottom shoe / laundry compartment',
      'Adjustable padded leather shoulder strap with luggage pass-through',
    ],
    specifications: [
      { name: 'Dimensions', value: '52cm x 28cm x 26cm', group: 'Dimensions' },
      { name: 'Capacity', value: '42 Liters', group: 'Volume' },
      { name: 'Material', value: 'Full-Grain Tuscan Calfskin', group: 'Materials' },
      { name: 'Hardware', value: 'Solid Cast Brass', group: 'Materials' },
      { name: 'Laptop Fit', value: 'Up to 16-inch MacBook Pro', group: 'Compatibility' },
    ],
    variants: [
      { id: 'v6', name: 'Cognac Amber Tan', type: 'color', value: 'Cognac Tan', inStock: true },
      { id: 'v7', name: 'Espresso Deep Brown', type: 'color', value: 'Espresso Brown', inStock: true },
    ],
    availability: 'in-stock',
    featured: true,
    newArrival: false,
    bestSeller: true,
    rating: 5.0,
    reviewCount: 81,
    seo: {
      metaTitle: 'Aethel Full-Grain Leather Weekender Bag',
      metaDescription: 'Shop handcrafted full-grain leather weekender duffle bag with brass hardware and dedicated laptop storage.',
      keywords: ['leather weekender bag', 'duffle bag', 'travel bag', 'aethel atelier'],
    },
  },
  {
    id: 'prod-004',
    slug: 'ergonomic-mechanical-keyboard',
    name: 'Veloce Chroma Tactile Mechanical Keyboard',
    shortDescription: 'CNC-machined aluminum hot-swappable wireless keyboard with gasket mount architecture.',
    description: 'The Veloce Chroma combines auditory bliss and typing ergonomics. Built from a solid block of anodized 6063 aluminum with multi-layer acoustic dampening foam, factory-lubed linear switches, and seamless tri-mode connectivity (2.4GHz wireless, Bluetooth 5.1, and USB-C).',
    price: 220.0,
    originalPrice: 240.0,
    discountPercentage: 8,
    SKU: 'VEL-KBD-004',
    categoryId: 'cat-electronics',
    brandId: 'brand-1',
    images: [
      '/images/products/keyboard.jpg',
      '/images/banners/promo-banner.jpg',
    ],
    features: [
      'Solid CNC 6063 anodized aluminum chassis',
      'Gasket-mounted plate structure for soft, cushioned typing acoustics',
      'Hot-swappable 5-pin PCB supports all standard mechanical switches',
      'Tri-mode connectivity with 4,000mAh rechargeable lithium battery',
      'South-facing RGB per-key illumination with customizable VIA keymaps',
    ],
    specifications: [
      { name: 'Layout', value: '75% Compact (82 Keys)', group: 'Layout' },
      { name: 'Switch Type', value: 'Factory-Lubed Linear switches', group: 'Switches' },
      { name: 'Mounting Style', value: 'Silicone Gasket Mount', group: 'Structure' },
      { name: 'Battery Life', value: 'Up to 200 hours (Backlight Off)', group: 'Power' },
      { name: 'Weight', value: '1,650 grams', group: 'Dimensions' },
    ],
    variants: [
      { id: 'v8', name: 'Linear Silent Switches', type: 'edition', value: 'Linear Switches', inStock: true },
      { id: 'v9', name: 'Tactile Marble Switches', type: 'edition', value: 'Tactile Switches', inStock: true },
    ],
    availability: 'in-stock',
    featured: true,
    newArrival: true,
    bestSeller: false,
    rating: 4.9,
    reviewCount: 67,
    seo: {
      metaTitle: 'Veloce Chroma Tactile Mechanical Keyboard',
      metaDescription: 'Shop CNC aluminum gasket-mount wireless mechanical keyboard with hot-swap switches.',
      keywords: ['mechanical keyboard', 'aluminum keyboard', 'wireless keyboard', 'veloce chroma'],
    },
  },
  {
    id: 'prod-005',
    slug: 'pure-cashmere-crewneck-sweater',
    name: 'Aethel Grade-A Pure Cashmere Crewneck',
    shortDescription: 'Ultra-soft 2-ply Mongolian cashmere sweater knitted to a versatile 12-gauge density.',
    description: 'Sourced directly from ethically managed pastoral cooperatives in Inner Mongolia, this crewneck is spun from the finest Grade-A cashmere fibers. Exceptionally lightweight yet insulating, offering cloud-like softness against the skin without piling over seasons.',
    price: 295.0,
    originalPrice: 320.0,
    discountPercentage: 7,
    SKU: 'AET-APL-005',
    categoryId: 'cat-apparel',
    brandId: 'brand-2',
    images: [
      '/images/products/sweater.jpg',
      '/images/products/bag.jpg',
    ],
    features: [
      '100% Grade-A Mongolian long-staple cashmere',
      '2-ply 12-gauge medium knit for all-season layering',
      'Reinforced ribbed collar, cuffs, and hem to retain structural shape',
      'Zero synthetic fibers or blended materials',
      'Oeko-Tex Standard 100 certified non-toxic botanical dyes',
    ],
    specifications: [
      { name: 'Material', value: '100% Pure Mongolian Cashmere', group: 'Fabric' },
      { name: 'Knit Gauge', value: '12-Gauge 2-Ply', group: 'Construction' },
      { name: 'Care', value: 'Dry Clean or Gentle Hand Wash Cold', group: 'Maintenance' },
      { name: 'Fit', value: 'Tailored Regular Fit', group: 'Sizing' },
    ],
    variants: [
      { id: 'v10', name: 'Heather Grey - Size M', type: 'size', value: 'M', inStock: true },
      { id: 'v11', name: 'Heather Grey - Size L', type: 'size', value: 'L', inStock: true },
      { id: 'v12', name: 'Oatmeal Natural - Size M', type: 'size', value: 'M', inStock: true },
      { id: 'v13', name: 'Oatmeal Natural - Size L', type: 'size', value: 'L', inStock: false },
    ],
    availability: 'in-stock',
    featured: false,
    newArrival: true,
    bestSeller: true,
    rating: 4.7,
    reviewCount: 43,
    seo: {
      metaTitle: 'Aethel Pure Cashmere Crewneck Sweater',
      metaDescription: 'Shop ethically sourced 100% Grade-A pure Mongolian cashmere sweaters for men and women.',
      keywords: ['cashmere sweater', 'luxury knitwear', 'sustainable fashion', 'aethel crewneck'],
    },
  },
  {
    id: 'prod-006',
    slug: 'smart-home-ambient-lamp',
    name: 'Nordik Lumina Ambient Smart Lamp',
    shortDescription: 'Minimalist brushed brass and mouth-blown frosted glass ambient table lamp with wireless dimming.',
    description: 'The Lumina lamp casts a warm, relaxing 2200K to 4000K circadian glow across your sanctuary. Controlled via a precision brass rotary dial or touch capacitive surface, it pairs seamlessly with modern smart ecosystems or functions independently as an iconic sculptural centerpiece.',
    price: 185.0,
    originalPrice: 210.0,
    discountPercentage: 11,
    SKU: 'NRD-LMP-006',
    categoryId: 'cat-home-living',
    brandId: 'brand-3',
    images: [
      '/images/products/lamp.jpg',
      '/images/products/coffee.jpg',
    ],
    features: [
      'Heavy weighted solid spun brass base',
      'Mouth-blown double-layered opal frosted glass diffuser',
      'Full-spectrum tunable white LED with 97+ Color Rendering Index (CRI)',
      'Touch capacitive continuous stepless dimming',
      'Built-in 10W wireless smartphone induction charging base',
    ],
    specifications: [
      { name: 'Dimensions', value: 'Height 32cm, Diameter 18cm', group: 'Dimensions' },
      { name: 'Luminance', value: 'Up to 800 Lumens', group: 'Lighting' },
      { name: 'Color Temperature', value: '2200K – 4000K Tunable', group: 'Lighting' },
      { name: 'Power Source', value: 'USB-C Braided Cable (2m included)', group: 'Power' },
    ],
    variants: [
      { id: 'v14', name: 'Brushed Brass', type: 'color', value: 'Brushed Brass', inStock: true },
      { id: 'v15', name: 'Matte Cast Iron', type: 'color', value: 'Matte Iron', inStock: true },
    ],
    availability: 'in-stock',
    featured: false,
    newArrival: false,
    bestSeller: true,
    rating: 4.8,
    reviewCount: 52,
    seo: {
      metaTitle: 'Nordik Lumina Ambient Smart Lamp',
      metaDescription: 'Modern brushed brass ambient lamp with mouth-blown glass and integrated wireless charging.',
      keywords: ['ambient lamp', 'smart lighting', 'brass table lamp', 'nordik living'],
    },
  },
  {
    id: 'prod-007',
    slug: 'polarized-titanium-sunglasses',
    name: 'Chronos Aero Polarized Titanium Eyewear',
    shortDescription: 'Ultra-lightweight Japanese beta-titanium sunglasses with HD polarized nylon optics.',
    description: 'Weighing only 18 grams, the Chronos Aero redefines luxury eyewear. Milled from aerospace-grade Japanese beta-titanium with precision screwless hinges and 100% UVA/UVB anti-reflective polarized lenses that eliminate harsh glare while heightening natural contrast.',
    price: 275.0,
    originalPrice: 310.0,
    discountPercentage: 11,
    SKU: 'CHR-EYE-007',
    categoryId: 'cat-accessories',
    brandId: 'brand-5',
    images: [
      '/images/products/sunglasses.jpg',
      '/images/banners/hero-banner.jpg',
    ],
    features: [
      'Aerospace Japanese Beta-Titanium frame architecture',
      'HD Polyamide Polarized Category 3 lenses with hydrophobic coating',
      'Patented micro-engineered screwless hinge system',
      'Total featherweight profile of just 18 grams',
      'Hypoallergenic medical-grade silicone nose pads',
    ],
    specifications: [
      { name: 'Frame Width', value: '142mm', group: 'Fit' },
      { name: 'Lens Width', value: '52mm', group: 'Fit' },
      { name: 'Bridge Width', value: '19mm', group: 'Fit' },
      { name: 'Lens UV Protection', value: '100% UV400 Protection', group: 'Optics' },
      { name: 'Weight', value: '18 grams', group: 'Weight' },
    ],
    variants: [
      { id: 'v16', name: 'Matte Gunmetal / Forest Green', type: 'color', value: 'Gunmetal / Green', inStock: true },
      { id: 'v17', name: 'Satin Gold / Amber Bronze', type: 'color', value: 'Gold / Bronze', inStock: true },
    ],
    availability: 'in-stock',
    featured: false,
    newArrival: true,
    bestSeller: false,
    rating: 4.9,
    reviewCount: 38,
    seo: {
      metaTitle: 'Chronos Aero Polarized Titanium Sunglasses',
      metaDescription: 'Featherweight Japanese beta-titanium sunglasses with Category 3 polarized HD optics.',
      keywords: ['titanium sunglasses', 'polarized eyewear', 'luxury sunglasses', 'chronos aero'],
    },
  },
  {
    id: 'prod-008',
    slug: 'ceramic-pourover-coffee-set',
    name: 'Komorebi Artisan Ceramic Pour-Over Dripper Set',
    shortDescription: 'Hand-thrown stoneware pour-over dripper with heat-resistant borosilicate glass carafe.',
    description: 'Elevate your morning coffee ceremony with the Komorebi Ceramic Set. Fired in small batches using iron-rich mineral clay, the dripper features interior spiral ribbing optimized for steady extraction rates and balanced clarity. Accompanied by a 600ml hand-blown server.',
    price: 110.0,
    originalPrice: 125.0,
    discountPercentage: 12,
    SKU: 'KOM-COF-008',
    categoryId: 'cat-home-living',
    brandId: 'brand-4',
    images: [
      '/images/products/coffee.jpg',
      '/images/products/lamp.jpg',
    ],
    features: [
      'Hand-thrown high-fire mineral stoneware ceramic dripper',
      '600ml lab-grade heat-resistant borosilicate glass server',
      'Scientifically calibrated internal 60-degree spiral water channels',
      'Natural oiled walnut wooden dripper collar ring',
      'Compatible with standard V60-02 paper and fabric filters',
    ],
    specifications: [
      { name: 'Server Capacity', value: '600 ml (2-4 Cups)', group: 'Volume' },
      { name: 'Carafe Material', value: 'Borosilicate Glass', group: 'Materials' },
      { name: 'Dripper Material', value: 'High-fire Stoneware Ceramic', group: 'Materials' },
      { name: 'Collar Material', value: 'Sustainably Harvested Walnut', group: 'Materials' },
    ],
    variants: [
      { id: 'v18', name: 'Raw Sandstone Matte', type: 'color', value: 'Sandstone', inStock: true },
      { id: 'v19', name: 'Charcoal Basalt Glaze', type: 'color', value: 'Charcoal', inStock: true },
    ],
    availability: 'in-stock',
    featured: true,
    newArrival: false,
    bestSeller: false,
    rating: 4.8,
    reviewCount: 76,
    seo: {
      metaTitle: 'Komorebi Artisan Ceramic Pour-Over Set',
      metaDescription: 'Hand-thrown stoneware coffee dripper with borosilicate carafe and walnut collar.',
      keywords: ['pourover coffee set', 'ceramic dripper', 'specialty coffee', 'komorebi crafts'],
    },
  },
];

// Helper functions for static querying

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.newArrival);
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.bestSeller);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getRelatedProducts(productId: string, categoryId: string, limit: number = 4): Product[] {
  return products
    .filter((p) => p.id !== productId && p.categoryId === categoryId)
    .slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  if (!query.trim()) return products;
  const q = query.toLowerCase().trim();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.SKU.toLowerCase().includes(q)
  );
}

export function filterAndSortProducts(filters: ProductFilterState): Product[] {
  let result = [...products];

  if (filters.searchQuery) {
    const q = filters.searchQuery.toLowerCase().trim();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.SKU.toLowerCase().includes(q)
    );
  }

  if (filters.categoryId) {
    result = result.filter((p) => p.categoryId === filters.categoryId);
  }

  if (filters.brandId) {
    result = result.filter((p) => p.brandId === filters.brandId);
  }

  if (filters.availability) {
    result = result.filter((p) => p.availability === filters.availability);
  }

  if (filters.minPrice !== undefined) {
    result = result.filter((p) => p.price >= (filters.minPrice ?? 0));
  }

  if (filters.maxPrice !== undefined) {
    result = result.filter((p) => p.price <= (filters.maxPrice ?? Infinity));
  }

  if (filters.featuredOnly) {
    result = result.filter((p) => p.featured);
  }

  // Sorting
  switch (filters.sortBy) {
    case 'price-asc':
      result.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      result.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      result.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      result.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
      break;
    case 'featured':
    default:
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      break;
  }

  return result;
}
