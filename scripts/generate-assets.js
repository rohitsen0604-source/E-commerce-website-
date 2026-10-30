const fs = require('fs');
const path = require('path');

const ensureDir = (p) => {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
};

ensureDir('public/images/products');
ensureDir('public/images/categories');
ensureDir('public/images/banners');
ensureDir('public/images/brands');
ensureDir('public/images/logos');
ensureDir('public/images/placeholders');

// 1. Logo
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 50" fill="none">
  <rect width="40" height="40" y="5" rx="2" fill="#1C1B19" stroke="#34312B" stroke-width="1"/>
  <path d="M12 25L20 13L28 25L20 37L12 25Z" stroke="#C6A76A" stroke-width="1.75" stroke-linejoin="round"/>
  <circle cx="20" cy="25" r="2.5" fill="#E8DDC8"/>
  <text x="52" y="32" font-family="'Cormorant Garamond', Georgia, serif" font-size="25" font-weight="600" letter-spacing="3" fill="#F5F0E8">
    AURA<tspan fill="#C6A76A">.</tspan><tspan font-family="'Manrope', sans-serif" font-size="11" font-weight="500" letter-spacing="4" fill="#8C8275"> ATELIER</tspan>
  </text>
</svg>`;
fs.writeFileSync('public/images/logos/logo.svg', logoSvg);

// 2. Product Placeholder
const productPlaceholderSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" fill="none">
  <rect width="600" height="600" fill="#161514"/>
  <rect x="180" y="180" width="240" height="240" rx="4" fill="#1C1B19" stroke="#34312B" stroke-width="1.5"/>
  <circle cx="300" cy="280" r="50" stroke="#C6A76A" stroke-width="1.5" stroke-dasharray="4 4" fill="none"/>
  <text x="300" y="286" font-family="'Cormorant Garamond', serif" font-size="28" font-style="italic" fill="#C6A76A" text-anchor="middle">Aura</text>
  <text x="300" y="370" font-family="'Manrope', sans-serif" font-size="11" font-weight="600" letter-spacing="4" fill="#8C8275" text-anchor="middle">PRODUCT ATELIER</text>
</svg>`;
fs.writeFileSync('public/images/placeholders/product-placeholder.svg', productPlaceholderSvg);

// 3. Category Placeholder
const categoryPlaceholderSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" fill="none">
  <rect width="600" height="400" fill="#161514"/>
  <rect x="200" y="100" width="200" height="200" rx="4" fill="#1C1B19" stroke="#34312B" stroke-width="1.5"/>
  <text x="300" y="205" font-family="'Cormorant Garamond', serif" font-size="32" font-style="italic" fill="#C6A76A" text-anchor="middle">Collection</text>
  <text x="300" y="240" font-family="'Manrope', sans-serif" font-size="10" font-weight="600" letter-spacing="3" fill="#8C8275" text-anchor="middle">CURATED SUITE</text>
</svg>`;
fs.writeFileSync('public/images/placeholders/category-placeholder.svg', categoryPlaceholderSvg);

// 4. Products in Obsidian & Champagne
const products = [
  { file: 'headphones.svg', name: 'Studio Pro Acoustics', subtitle: 'Acoustic Transducer', icon: '🎧' },
  { file: 'watch.svg', name: 'Chronos Mechanical 40', subtitle: 'Calibre Horology', icon: '⌚' },
  { file: 'bag.svg', name: 'Tuscan Leather Weekender', subtitle: 'Full-Grain Calfskin', icon: '👜' },
  { file: 'keyboard.svg', name: 'Bespoke CNC Keyboard', subtitle: 'Anodized 6063 Aluminum', icon: '⌨️' },
  { file: 'sweater.svg', name: 'Pure Grade-A Cashmere', subtitle: 'Inner Mongolia Staple', icon: '🧶' },
  { file: 'lamp.svg', name: 'Lumina Brushed Brass Lamp', subtitle: 'Mouth-Blown Opal Diffuser', icon: '💡' },
  { file: 'sunglasses.svg', name: 'Aero Beta-Titanium Frames', subtitle: 'HD Polarized Optics', icon: '🕶️' },
  { file: 'coffee.svg', name: 'Ceramic Pour-Over Vessel', subtitle: 'High-Fire Stoneware & Walnut', icon: '☕' }
];

products.forEach(p => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" fill="none">
    <defs>
      <radialGradient id="rg_${p.file.replace('.svg','')}" cx="50%" cy="45%" r="60%">
        <stop offset="0%" stop-color="#24221F"/>
        <stop offset="60%" stop-color="#141312"/>
        <stop offset="100%" stop-color="#0E0E0D"/>
      </radialGradient>
      <linearGradient id="gold_hairline" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#E8DDC8" stop-opacity="0.8"/>
        <stop offset="50%" stop-color="#C6A76A"/>
        <stop offset="100%" stop-color="#8C6F38" stop-opacity="0.5"/>
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#rg_${p.file.replace('.svg','')})"/>
    
    <!-- Hairline luxury border inset -->
    <rect x="24" y="24" width="552" height="552" fill="none" stroke="#2A2722" stroke-width="1"/>
    
    <!-- Center Artifact Pod -->
    <circle cx="300" cy="250" r="120" fill="#1A1917" stroke="url(#gold_hairline)" stroke-width="1.25"/>
    <circle cx="300" cy="250" r="105" fill="none" stroke="#34312B" stroke-width="0.75" stroke-dasharray="3 3"/>
    
    <text x="300" y="280" font-size="75" text-anchor="middle">${p.icon}</text>
    
    <!-- Editorial Typography -->
    <text x="300" y="440" font-family="'Cormorant Garamond', Georgia, serif" font-size="28" font-weight="600" fill="#F5F0E8" text-anchor="middle" letter-spacing="1">${p.name}</text>
    <text x="300" y="475" font-family="'Manrope', sans-serif" font-size="11" font-weight="600" fill="#C6A76A" text-anchor="middle" letter-spacing="4">${p.subtitle.toUpperCase()}</text>
    <line x1="260" y1="505" x2="340" y2="505" stroke="#34312B" stroke-width="1"/>
  </svg>`;
  fs.writeFileSync(path.join('public/images/products', p.file), svg);
});

// 5. Categories in Obsidian & Champagne
const categories = [
  { file: 'electronics.svg', title: 'Acoustics & Devices', sub: 'High-Fidelity Engineering', icon: '⚡' },
  { file: 'apparel.svg', title: 'Knitwear & Tailoring', sub: 'Pure Mongolian Cashmere', icon: '✨' },
  { file: 'home-living.svg', title: 'Sanctuary & Living', sub: 'Heirloom Design Objects', icon: '🌿' },
  { file: 'accessories.svg', title: 'Horology & Leather', sub: 'Chronographs & Full-Grain Goods', icon: '💎' }
];

categories.forEach(c => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" fill="none">
    <defs>
      <linearGradient id="cat_grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1A1816"/>
        <stop offset="100%" stop-color="#0E0E0D"/>
      </linearGradient>
    </defs>
    <rect width="600" height="400" fill="url(#cat_grad)"/>
    <rect x="20" y="20" width="560" height="360" fill="none" stroke="#2B2824" stroke-width="1"/>
    <circle cx="300" cy="160" r="65" fill="#141312" stroke="#3D3830" stroke-width="1"/>
    <text x="300" y="180" font-size="48" text-anchor="middle">${c.icon}</text>
    <text x="300" y="280" font-family="'Cormorant Garamond', Georgia, serif" font-size="30" font-weight="600" fill="#F5F0E8" text-anchor="middle" letter-spacing="1">${c.title}</text>
    <text x="300" y="315" font-family="'Manrope', sans-serif" font-size="11" font-weight="600" fill="#C6A76A" text-anchor="middle" letter-spacing="3">${c.sub.toUpperCase()}</text>
  </svg>`;
  fs.writeFileSync(path.join('public/images/categories', c.file), svg);
});

// 6. Hero Banner
const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" fill="none">
  <defs>
    <radialGradient id="hero_glow" cx="70%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#C6A76A" stop-opacity="0.18"/>
      <stop offset="60%" stop-color="#1C1B19" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#101010"/>
    </radialGradient>
    <linearGradient id="gold_stroke" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E8DDC8" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#C6A76A" stop-opacity="0.2"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="600" fill="#101010"/>
  <rect width="1200" height="600" fill="url(#hero_glow)"/>
  
  <rect x="40" y="40" width="1120" height="520" fill="none" stroke="#262420" stroke-width="1"/>
  <circle cx="880" cy="300" r="170" stroke="url(#gold_stroke)" stroke-width="1.25" fill="none"/>
  <circle cx="880" cy="300" r="140" stroke="#34312B" stroke-width="0.75" stroke-dasharray="4 4" fill="none"/>
  <circle cx="880" cy="300" r="100" fill="#161513" stroke="#C6A76A" stroke-width="0.5"/>
  <text x="880" y="325" font-size="70" text-anchor="middle">✨</text>
  <text x="880" y="470" font-family="'Cormorant Garamond', Georgia, serif" font-size="20" font-style="italic" fill="#E8DDC8" text-anchor="middle" letter-spacing="2">The Obsidian Edition</text>
</svg>`;
fs.writeFileSync('public/images/banners/hero-banner.svg', heroSvg);

// 7. Promo Banner
const promoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400" fill="none">
  <rect width="1200" height="400" fill="#141312"/>
  <rect x="30" y="30" width="1140" height="340" fill="none" stroke="#34312B" stroke-width="1"/>
  <circle cx="1020" cy="200" r="110" fill="#1C1B19" stroke="#C6A76A" stroke-width="1"/>
  <text x="1020" y="222" font-size="60" text-anchor="middle">⚜️</text>
</svg>`;
fs.writeFileSync('public/images/banners/promo-banner.svg', promoSvg);

// 8. Brands
const brands = [
  { name: 'VELOCE', sub: 'ACOUSTICS' },
  { name: 'AETHEL', sub: 'ATELIER' },
  { name: 'NORDIK', sub: 'LIVING' },
  { name: 'KOMOREBI', sub: 'STUDIO' },
  { name: 'CHRONOS', sub: 'GENÈVE' }
];

brands.forEach((b, i) => {
  const bSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" fill="none">
    <text x="100" y="42" font-family="'Cormorant Garamond', Georgia, serif" font-size="21" font-weight="600" fill="#E8DDC8" text-anchor="middle" letter-spacing="4">${b.name}</text>
    <text x="100" y="60" font-family="'Manrope', sans-serif" font-size="9" font-weight="600" fill="#8C8275" text-anchor="middle" letter-spacing="3">${b.sub}</text>
  </svg>`;
  fs.writeFileSync(path.join('public/images/brands', `brand-${i+1}.svg`), bSvg);
});

console.log('Obsidian & Champagne assets generated.');
