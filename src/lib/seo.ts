import { Product } from '@/types/product';
import { siteConfig } from '@/config/site';
import { contactConfig } from '@/config/contact';
import { absoluteUrl } from '@/lib/utils';

/**
 * Generates Schema.org Organization structured data.
 */
export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    description: siteConfig.description,
    telephone: contactConfig.phone,
    email: contactConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contactConfig.address.street,
      addressLocality: contactConfig.address.city,
      addressRegion: contactConfig.address.state,
      postalCode: contactConfig.address.postalCode,
      addressCountry: contactConfig.address.country,
    },
    sameAs: contactConfig.socialLinks.map((s) => s.url),
  };
}

/**
 * Generates Schema.org Product structured data for SEO rich snippets.
 */
export function generateProductJsonLd(product: Product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.images.map((img) => absoluteUrl(img)),
    description: product.description,
    sku: product.SKU,
    offers: {
      '@type': 'Offer',
      url: absoluteUrl(`/products/${product.slug}`),
      priceCurrency: siteConfig.currency.code,
      price: product.price,
      itemCondition: 'https://schema.org/NewCondition',
      availability:
        product.availability === 'in-stock'
          ? 'https://schema.org/InStock'
          : product.availability === 'pre-order'
          ? 'https://schema.org/PreOrder'
          : 'https://schema.org/OutOfStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  };
}

/**
 * Generates Schema.org BreadcrumbList structured data.
 */
export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}
