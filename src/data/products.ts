import { Product, ProductFilterState } from '@/types/product';

/**
 * =========================================================================
 * CLIENT DATA UPDATE INSTRUCTIONS:
 * All product items with updated user-specified names and Indian Rupee (₹) pricing.
 * =========================================================================
 */
export const products: Product[] = [
  {
    id: 'prod-001',
    slug: 'wireless-noise-cancelling-headphones',
    name: 'Premium Wireless Over-Ear Headphones',
    shortDescription: 'Flagship wireless headphones featuring custom 45mm drivers and hybrid active noise cancellation.',
    description: 'Engineered for audio purists and daily creators, these Premium Wireless Over-Ear Headphones deliver pristine high-resolution sound. Featuring ultra-soft memory foam earcups, multi-point Bluetooth 5.3 connectivity, and up to 48 hours of uninterrupted playback on a single charge.',
    price: 28999,
    originalPrice: 32999,
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
      metaTitle: 'Premium Wireless Over-Ear Headphones | High-Res Audio',
      metaDescription: 'Shop Premium Wireless Over-Ear Headphones with hybrid ANC, 48-hour battery, and custom 45mm drivers.',
      keywords: ['wireless headphones', 'noise cancelling headphones', 'over ear headphones'],
    },
  },
  {
    id: 'prod-002',
    slug: 'minimalist-chronograph-watch',
    name: 'Classic Leather Strap Chronograph Watch',
    shortDescription: 'Precision automatic chronograph with scratch-resistant sapphire crystal and genuine leather strap.',
    description: 'The Classic Leather Strap Chronograph Watch is designed for timeless elegance. Driven by a 28-jewel automatic movement with a 42-hour power reserve, this timepiece features dual anti-reflective sapphire glass, water resistance up to 10 ATM, and a premium hand-stitched leather strap.',
    price: 54999,
    originalPrice: 59999,
    discountPercentage: 8,
    SKU: 'CHR-HOR-002',
    categoryId: 'cat-accessories',
    brandId: 'brand-5',
    images: [
      '/images/products/watch.jpg',
      '/images/banners/hero-banner.jpg',
    ],
    features: [
      'Precision 28-Jewel High-Beat Automatic Movement',
      'Dual domed scratch-resistant sapphire crystal glass',
      'Surgical-grade 316L solid stainless steel casing',
      '10 ATM (100 meters) certified water resistance',
      'Hand-stitched genuine calfskin leather strap',
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
      metaTitle: 'Classic Leather Strap Chronograph Watch',
      metaDescription: 'Discover the precision Classic Leather Strap Chronograph Watch with sapphire glass and 316L stainless steel.',
      keywords: ['automatic watch', 'chronograph', 'leather strap watch', 'luxury watch'],
    },
  },
  {
    id: 'prod-003',
    slug: 'artisan-leather-weekender-bag',
    name: 'Premium Full-Grain Leather Travel Duffel Bag',
    shortDescription: 'Masterfully crafted full-grain leather duffel bag with durable brass hardware and shoe compartment.',
    description: 'Designed for effortless transitions between business trips and weekend getaways. Crafted from 100% full-grain vegetable-tanned leather, featuring a dedicated ventilated shoe compartment, padded 16-inch laptop sleeve, and heavy-duty brass zippers built for a lifetime.',
    price: 39999,
    originalPrice: 44999,
    discountPercentage: 11,
    SKU: 'AET-LGT-003',
    categoryId: 'cat-accessories',
    brandId: 'brand-2',
    images: [
      '/images/products/bag.jpg',
      '/images/banners/hero-banner.jpg',
    ],
    features: [
      '100% Full-grain vegetable-tanned genuine leather',
      'Reinforced solid brass hardware with antique patina finish',
      'Dedicated padded sleeve fits laptops up to 16 inches',
      'Separate zippered bottom shoe and laundry compartment',
      'Adjustable padded leather shoulder strap with trolley pass-through',
    ],
    specifications: [
      { name: 'Dimensions', value: '52cm x 28cm x 26cm', group: 'Dimensions' },
      { name: 'Capacity', value: '42 Liters', group: 'Volume' },
      { name: 'Material', value: 'Full-Grain Calfskin Leather', group: 'Materials' },
      { name: 'Hardware', value: 'Solid Cast Brass', group: 'Materials' },
      { name: 'Laptop Fit', value: 'Up to 16-inch Laptop', group: 'Compatibility' },
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
      metaTitle: 'Premium Full-Grain Leather Travel Duffel Bag',
      metaDescription: 'Shop handcrafted full-grain leather travel duffel bag with brass hardware and dedicated laptop storage.',
      keywords: ['leather travel bag', 'duffel bag', 'leather duffel bag', 'weekender bag'],
    },
  },
  {
    id: 'prod-004',
    slug: 'ergonomic-mechanical-keyboard',
    name: 'Premium Mechanical Tactile Keyboard',
    shortDescription: 'CNC-machined aluminum hot-swappable wireless keyboard with gasket mount architecture and tactile switches.',
    description: 'The Premium Mechanical Tactile Keyboard combines crisp acoustics and typing ergonomics. Built from a solid block of anodized 6063 aluminum with multi-layer acoustic dampening foam, factory-lubed switches, and seamless tri-mode connectivity (2.4GHz wireless, Bluetooth 5.1, and USB-C).',
    price: 17999,
    originalPrice: 19999,
    discountPercentage: 10,
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
      { name: 'Switch Type', value: 'Factory-Lubed Linear / Tactile switches', group: 'Switches' },
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
      metaTitle: 'Premium Mechanical Tactile Keyboard',
      metaDescription: 'Shop CNC aluminum gasket-mount wireless mechanical keyboard with hot-swap switches.',
      keywords: ['mechanical keyboard', 'tactile keyboard', 'wireless keyboard', 'aluminum keyboard'],
    },
  },
  {
    id: 'prod-005',
    slug: 'pure-cashmere-crewneck-sweater',
    name: 'Grade-A Pure Cashmere Crewneck Sweater',
    shortDescription: 'Ultra-soft 2-ply pure cashmere sweater knitted to a versatile 12-gauge density.',
    description: 'Spun from the finest Grade-A cashmere fibers, this crewneck sweater is exceptionally lightweight yet insulating, offering cloud-like softness against the skin without pilling over seasons.',
    price: 24499,
    originalPrice: 26999,
    discountPercentage: 9,
    SKU: 'AET-APL-005',
    categoryId: 'cat-apparel',
    brandId: 'brand-2',
    images: [
      '/images/products/sweater.jpg',
      '/images/products/bag.jpg',
    ],
    features: [
      '100% Grade-A long-staple pure cashmere',
      '2-ply 12-gauge medium knit for all-season layering',
      'Reinforced ribbed collar, cuffs, and hem to retain structural shape',
      'Zero synthetic fibers or blended materials',
      'Oeko-Tex Standard 100 certified non-toxic dyes',
    ],
    specifications: [
      { name: 'Material', value: '100% Pure Cashmere', group: 'Fabric' },
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
      metaTitle: 'Grade-A Pure Cashmere Crewneck Sweater',
      metaDescription: 'Shop 100% Grade-A pure cashmere sweaters for men and women.',
      keywords: ['cashmere sweater', 'luxury knitwear', 'sustainable fashion'],
    },
  },
  {
    id: 'prod-006',
    slug: 'smart-home-ambient-lamp',
    name: 'Nordik Lumina Ambient Smart Lamp',
    shortDescription: 'Minimalist brushed brass and mouth-blown frosted glass ambient table lamp with wireless dimming.',
    description: 'The Lumina lamp casts a warm, relaxing 2200K to 4000K glow across your living space. Controlled via a precision brass rotary dial or touch surface, it pairs seamlessly with modern smart ecosystems or functions independently as an iconic centerpiece.',
    price: 14999,
    originalPrice: 16999,
    discountPercentage: 12,
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
    name: 'Polarized Titanium Aviator Sunglasses',
    shortDescription: 'Ultra-lightweight titanium sunglasses with HD polarized UV-protective optics.',
    description: 'Weighing only 18 grams, these Polarized Titanium Sunglasses redefine everyday eyewear. Precision-milled from aerospace titanium with durable screwless hinges and 100% UVA/UVB anti-reflective polarized lenses that eliminate harsh glare.',
    price: 22499,
    originalPrice: 24999,
    discountPercentage: 10,
    SKU: 'CHR-EYE-007',
    categoryId: 'cat-accessories',
    brandId: 'brand-5',
    images: [
      '/images/products/sunglasses.jpg',
      '/images/banners/hero-banner.jpg',
    ],
    features: [
      'Aerospace Titanium frame architecture',
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
      metaTitle: 'Polarized Titanium Aviator Sunglasses',
      metaDescription: 'Featherweight titanium sunglasses with Category 3 polarized HD optics.',
      keywords: ['titanium sunglasses', 'polarized eyewear', 'sunglasses'],
    },
  },
  {
    id: 'prod-008',
    slug: 'ceramic-pourover-coffee-set',
    name: 'Artisan Ceramic Pour-Over Dripper Set',
    shortDescription: 'Handcrafted stoneware pour-over dripper with heat-resistant borosilicate glass carafe.',
    description: 'Elevate your morning coffee routine with this Artisan Ceramic Pour-Over Set. Fired from iron-rich mineral clay, the dripper features interior spiral ribbing for balanced, flavorful brewing. Accompanied by a 600ml glass server.',
    price: 8999,
    originalPrice: 9999,
    discountPercentage: 10,
    SKU: 'KOM-COF-008',
    categoryId: 'cat-home-living',
    brandId: 'brand-4',
    images: [
      '/images/products/coffee.jpg',
      '/images/products/lamp.jpg',
    ],
    features: [
      'Handcrafted high-fire mineral stoneware ceramic dripper',
      '600ml heat-resistant borosilicate glass server',
      'Scientifically calibrated internal spiral water channels',
      'Natural oiled walnut wooden dripper collar ring',
      'Compatible with standard V60-02 paper and fabric filters',
    ],
    specifications: [
      { name: 'Server Capacity', value: '600 ml (2-4 Cups)', group: 'Volume' },
      { name: 'Carafe Material', value: 'Borosilicate Glass', group: 'Materials' },
      { name: 'Dripper Material', value: 'Stoneware Ceramic', group: 'Materials' },
      { name: 'Collar Material', value: 'Solid Walnut Wood', group: 'Materials' },
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
      metaTitle: 'Artisan Ceramic Pour-Over Set',
      metaDescription: 'Handcrafted stoneware coffee dripper with borosilicate carafe and walnut collar.',
      keywords: ['pourover coffee set', 'ceramic dripper', 'specialty coffee'],
    },
  },
];

// Helper functions for querying

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
