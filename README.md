# Aura Studio — Modern Commercial E-Commerce Platform (Phase 1)

> **Phase 1 Status:** Complete Static Frontend & Product Showcase Architecture  
> **Target Framework:** Next.js (App Router) + React 19 + TypeScript + Tailwind CSS

A high-performance, responsive, luxury static e-commerce platform built as the foundational frontend for a commercial enterprise. Phase 1 provides full product showcase capabilities, responsive category navigation, instant client-side catalog search and filtering, dynamic SEO metadata, and personalized WhatsApp concierge inquiry workflows—with zero database or backend runtime requirements.

---

## 1. Technology Stack

- **Framework:** Next.js (App Router, Turbopack, React Server Components)
- **Language:** TypeScript (Strict Mode)
- **Core Library:** React 19
- **Styling:** Tailwind CSS (Custom design system tokens, responsive utilities, CSS animations)
- **Iconography:** Lucide React
- **Data Architecture:** Static TypeScript and JSON data schemas
- **Code Quality:** ESLint, Prettier, TypeScript Compiler
- **Deployment:** Vercel / Netlify / Node.js zero-config static export ready

---

## 2. Directory Architecture

```
ecommerce-website/
│
├── public/
│   ├── images/
│   │   ├── banners/              # Hero, promo, and promotional campaign banners
│   │   ├── products/             # High-resolution product showcase photography
│   │   ├── categories/           # Category hero images
│   │   ├── brands/               # Atelier & manufacturer logos
│   │   ├── logos/                # Brand identity logos
│   │   └── placeholders/         # Fallback product & category placeholders
│   ├── icons/                    # App & UI SVG icons
│   ├── fonts/                    # Custom web fonts
│   ├── favicon.ico               # Browser favicon
│   └── robots.txt                # Static search engine crawling rules
│
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Global HTML root layout, fonts, header/footer
│   │   ├── page.tsx              # Homepage with 8 curated sections
│   │   ├── globals.css           # Design tokens, color system, utilities
│   │   ├── not-found.tsx         # Custom 404 Error page
│   │   ├── loading.tsx           # Global suspense loading fallback
│   │   ├── sitemap.ts            # Dynamic XML sitemap generator
│   │   │
│   │   ├── about/page.tsx        # Atelier story & craftsmanship philosophy
│   │   ├── contact/page.tsx      # Concierge inquiry form & showroom details
│   │   ├── products/
│   │   │   ├── page.tsx          # Full catalog with filtering & sorting
│   │   │   └── [slug]/page.tsx   # Dynamic product showcase, gallery & specs
│   │   ├── categories/
│   │   │   ├── page.tsx          # Category overview collection
│   │   │   └── [slug]/page.tsx   # Dynamic category products view
│   │   ├── faq/page.tsx          # Client assistance accordion FAQ
│   │   ├── privacy-policy/page.tsx
│   │   ├── terms-and-conditions/page.tsx
│   │   ├── shipping-policy/page.tsx
│   │   └── return-policy/page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx        # Glassmorphic header with navigation & search
│   │   │   ├── Footer.tsx        # Comprehensive footer with links & contact info
│   │   │   ├── Navigation.tsx    # Desktop navigation & category dropdown
│   │   │   ├── MobileNavigation.tsx # Slide-out responsive mobile drawer
│   │   │   ├── AnnouncementBar.tsx # Top promotional notice bar
│   │   │   └── Container.tsx     # Centralized responsive width container
│   │   │
│   │   ├── home/
│   │   │   ├── HeroSection.tsx   # High-impact hero banner with quick CTA
│   │   │   ├── FeaturedCategories.tsx # Category spotlight cards
│   │   │   ├── FeaturedProducts.tsx   # Signature piece recommendations
│   │   │   ├── NewArrivals.tsx   # Fresh atelier releases
│   │   │   ├── BestSellers.tsx   # Customer favorite artifacts
│   │   │   ├── PromotionalBanner.tsx  # Limited production campaign callout
│   │   │   ├── BrandIntroduction.tsx  # Philosophy pillars & brand logos
│   │   │   └── Testimonials.tsx  # Verified buyer reviews & endorsements
│   │   │
│   │   ├── products/
│   │   │   ├── ProductCard.tsx   # Card with pricing, ratings & quick WhatsApp
│   │   │   ├── ProductGrid.tsx   # Responsive 1-to-4 column grid
│   │   │   ├── ProductGallery.tsx# Cursor-tracking zoom & full modal preview
│   │   │   ├── ProductInfo.tsx   # Pricing, variant selector & WhatsApp CTA
│   │   │   ├── ProductFilters.tsx# Category, price, and availability sidebar
│   │   │   ├── ProductSorting.tsx# Sort dropdown (Price, Rating, Newest)
│   │   │   ├── ProductSearch.tsx # Instant search autocomplete dropdown
│   │   │   ├── RelatedProducts.tsx # Same-category cross-selling pieces
│   │   │   ├── ProductSpecifications.tsx # Structured technical specification table
│   │   │   └── ProductCatalogClient.tsx # Interactive catalog container
│   │   │
│   │   ├── contact/
│   │   │   ├── ContactForm.tsx   # Validated client inquiry form
│   │   │   └── ContactInformation.tsx # Headquarters address & hours
│   │   │
│   │   ├── shared/
│   │   │   ├── SectionHeading.tsx# Section title with badge & subtitle
│   │   │   ├── Breadcrumb.tsx    # Accessible breadcrumb trail
│   │   │   ├── Button.tsx        # Reusable button with variants & links
│   │   │   ├── Badge.tsx         # Pill badge for status/discounts
│   │   │   ├── EmptyState.tsx    # Fallback container for no results
│   │   │   ├── WhatsAppButton.tsx# Pre-populated WhatsApp inquiry link
│   │   │   ├── SocialLinks.tsx   # Social media profile links
│   │   │   └── PageLoader.tsx    # Animated spinner for loading states
│   │   │
│   │   └── ui/
│   │       ├── Input.tsx         # Accessible text input with error state
│   │       ├── Select.tsx        # Styled native select dropdown
│   │       ├── Modal.tsx         # Backdrop dialog with ESC key handling
│   │       └── Accordion.tsx     # Smooth collapsible content accordion
│   │
│   ├── data/
│   │   ├── products.ts           # Central product inventory dataset & queries
│   │   ├── categories.ts         # Categories dataset
│   │   ├── brands.ts             # Atelier brand partners dataset
│   │   ├── banners.ts            # Hero and promotional banner content
│   │   ├── testimonials.ts       # Customer reviews dataset
│   │   ├── navigation.ts         # Navigation items
│   │   └── site-content.ts       # Philosophy, story, and FAQ copy
│   │
│   ├── types/
│   │   ├── product.ts            # Product & filter TypeScript interfaces
│   │   ├── category.ts           # Category TypeScript interfaces
│   │   ├── brand.ts              # Brand TypeScript interfaces
│   │   ├── banner.ts             # Banner TypeScript interfaces
│   │   └── common.ts             # Shared SEO, entity, and social types
│   │
│   ├── lib/
│   │   ├── utils.ts              # Class merging (cn) and URL helpers
│   │   ├── constants.ts          # Sort options, breakpoints, defaults
│   │   ├── metadata.ts           # Metadata builder with OpenGraph support
│   │   ├── seo.ts                # JSON-LD Schema.org generators
│   │   └── formatters.ts         # Currency, date, and discount formatters
│   │
│   ├── hooks/
│   │   ├── use-mobile.ts         # Viewport breakpoint detection hook
│   │   ├── use-product-filter.ts # State hook for catalog filtering
│   │   └── use-product-search.ts # State hook for instant query search
│   │
│   ├── config/
│   │   ├── site.ts               # Brand name, currency, announcement
│   │   ├── navigation.ts         # Menu links and footer sections
│   │   └── contact.ts            # Centralized phone, email, WhatsApp, address
│   │
│   └── styles/
│       └── animations.css        # Keyframes for fade, shimmer, and zoom
│
├── .env.example                  # Environment variables template
├── .gitignore                    # Standard Git exclusions
├── .prettierrc                   # Prettier code formatting rules
├── eslint.config.mjs             # Next.js ESLint flat configuration
├── next.config.ts                # Next.js compiler & SVG image optimizations
├── package.json                  # Scripts & project dependencies
├── postcss.config.mjs            # PostCSS configuration with Tailwind
└── tsconfig.json                 # TypeScript strict compiler options
```

---

## 3. Installation & Setup

### Prerequisites
- Node.js (v18.17+ or v20+ recommended)
- npm (v9+)

### Installation
```bash
# Clone the repository (if not already cloned)
git clone <repository-url>
cd ecommerce-website

# Install all dependencies
npm install
```

---

## 4. Development Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js local development server at `http://localhost:3000` |
| `npm run build` | Compiles the production-optimized build and validates types |
| `npm run start` | Starts the built production server locally |
| `npm run lint` | Runs ESLint over all project files |
| `npm run type-check` | Runs the TypeScript compiler (`tsc --noEmit`) to verify types |
| `npm run format` | Runs Prettier to auto-format files across the workspace |

---

## 5. Environment Variables Configuration

Copy `.env.example` to `.env.local` to override default settings:

```bash
cp .env.example .env.local
```

Configurable variables:
- `NEXT_PUBLIC_SITE_URL`: Base domain (e.g., `https://example-ecommerce.com`)
- `NEXT_PUBLIC_SITE_NAME`: The customer-facing brand name (e.g., `"Aura Commerce"`)
- `NEXT_PUBLIC_CONTACT_EMAIL`: Customer support email
- `NEXT_PUBLIC_CONTACT_PHONE`: Formatted telephone number
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: Numerical WhatsApp number including country code (e.g., `15552345678`)

---

## 6. How to Update Product Data & Images

### Updating Product Inventory
All product catalog entries are centrally stored in `src/data/products.ts`. Each product object conforms to the strict `Product` TypeScript interface:

```typescript
{
  id: 'prod-009',
  slug: 'minimalist-leather-cardholder',
  name: 'Aethel Minimalist Leather Cardholder',
  shortDescription: 'Ultra-slim vegetable-tanned leather pocket card case.',
  description: 'Full narrative description...',
  price: 75.0,
  originalPrice: 85.0,
  discountPercentage: 11,
  SKU: 'AET-ACC-009',
  categoryId: 'cat-accessories', // Matches id in src/data/categories.ts
  brandId: 'brand-2',            // Matches id in src/data/brands.ts
  images: [
    '/images/products/cardholder.svg',
    '/images/placeholders/product-placeholder.svg',
  ],
  features: ['Full-grain leather', 'Holds 6 cards', 'Hand-burnished edges'],
  specifications: [{ name: 'Dimensions', value: '10cm x 7cm' }],
  variants: [{ id: 'v1', name: 'Tan', type: 'color', value: 'Tan', inStock: true }],
  availability: 'in-stock',
  featured: true,
  newArrival: true,
  bestSeller: false,
  rating: 4.9,
  reviewCount: 15,
  seo: {
    metaTitle: 'Aethel Minimalist Leather Cardholder',
    metaDescription: 'Shop handcrafted ultra-slim leather cardholder.',
  }
}
```

### Adding New Images
1. Place image files (SVG, WebP, PNG, JPG) into the corresponding folder inside `/public/images/`:
   - `/public/images/products/`: Product photos
   - `/public/images/categories/`: Category banner covers
   - `/public/images/banners/`: Homepage campaign banners
   - `/public/images/brands/`: Atelier logos
   - `/public/images/logos/`: Company logo
2. Reference the image in `src/data/products.ts` or `src/config/site.ts` using the public path (e.g., `'/images/products/my-item.jpg'`).
3. Next.js automatically optimizes, resizes, and lazily loads images via `next/image`.

---

## 7. WhatsApp Concierge Integration

The website includes an inquiry integration:
1. Every product card and product detail page features an **"Inquire via WhatsApp"** button.
2. Clicking the button opens WhatsApp Web or mobile app with a customized, URL-encoded message template:
   > *"Hello Aura Commerce! I am interested in inquiring about \"Veloce Studio Pro Wireless Headphones\". View product here: https://example-ecommerce.com/products/wireless-noise-cancelling-headphones"*
3. The destination number and message template are managed centrally in `src/config/contact.ts`.

---

## 8. SEO & Structured Data Architecture

- **Static Metadata:** Reusable helper `constructMetadata()` in `src/lib/metadata.ts` configures OpenGraph, Twitter Cards, robots directives, and canonical URLs.
- **Dynamic Product Metadata:** `generateMetadata()` in `src/app/products/[slug]/page.tsx` generates page-specific titles, descriptions, and share images based on individual product data.
- **JSON-LD Structured Data:**
  - `Organization` schema automatically injected into the root HTML `<head>`.
  - `Product` schema automatically injected into product detail pages.
  - `BreadcrumbList` schema automatically generated on all pages.
- **Sitemap & Robots:**
  - Dynamic `src/app/sitemap.ts` auto-generates `/sitemap.xml` including all static pages, dynamic categories, and individual products.
  - `public/robots.txt` specifies crawler index directives and references the sitemap.

---

## 9. Deployment Instructions (Vercel Ready)

### Deploying to Vercel
1. Push this repository to GitHub / GitLab / Bitbucket.
2. Log into [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Select your repository. Vercel will automatically detect Next.js with zero configuration required.
4. Set optional environment variables (`NEXT_PUBLIC_SITE_URL`, etc.).
5. Click **"Deploy"**.

---

## 10. Future Expansion Architecture (Phase 2 & Beyond)

This Phase 1 architecture is engineered to enable backend expansion without discarding or refactoring the frontend presentation layer:

1. **API Integration:**
   - The query functions in `src/data/products.ts` (e.g., `getAllProducts()`, `getProductBySlug()`) can be converted to async `fetch()` calls to a REST or GraphQL API (e.g., `/api/products`).
   - The UI components (`ProductGrid`, `ProductCard`, `ProductInfo`) consume strongly typed `Product` interfaces and remain completely decoupled from data sourcing.
2. **Database Integration:**
   - The TypeScript models in `src/types/product.ts` map directly to Prisma, Drizzle, or PostgreSQL relational schemas.
3. **Shopping Cart & Checkout:**
   - A client state store (Zustand or React Context) can be connected to the `variants` and `ProductCard` components.
   - Payment gateways (Stripe, PayPal) can be added under `/api/checkout` alongside a `/checkout` route.
4. **Authentication & Admin Dashboard:**
   - NextAuth / Auth.js can be integrated under `src/app/api/auth/`.
   - An isolated admin route group `src/app/(admin)/` can reuse the existing `Input`, `Select`, `Button`, and `Modal` UI primitives.
