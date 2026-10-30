import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, MessageCircle } from 'lucide-react';
import { Product } from '@/types/product';
import { formatCurrency } from '@/lib/formatters';
import { getCategoryById } from '@/data/categories';
import { getBrandById } from '@/data/brands';
import { contactConfig } from '@/config/contact';
import { buildWhatsAppLink, absoluteUrl, cn } from '@/lib/utils';
import { Badge } from '@/components/shared/Badge';

export interface ProductCardProps {
  product: Product;
  priority?: boolean;
  className?: string;
}

export function ProductCard({ product, priority = false, className }: ProductCardProps) {
  const category = getCategoryById(product.categoryId);
  const brand = getBrandById(product.brandId);

  const productUrl = absoluteUrl(`/products/${product.slug}`);
  const whatsappHref = buildWhatsAppLink(
    contactConfig.whatsappNumber,
    contactConfig.whatsappMessageTemplates.productInquiry(product.name, productUrl)
  );

  return (
    <div
      className={cn(
        'group relative flex flex-col bg-[#FFFFFF] border border-[#E3DDD3] transition-all duration-500 hover:border-[#C6A76A] hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(198,167,106,0.18)]',
        className
      )}
    >
      {/* Product Image Stage */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#161514]">
        <Link href={`/products/${product.slug}`} className="relative block h-full w-full">
          <Image
            src={product.images[0] || '/images/placeholders/product-placeholder.svg'}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority={priority}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </Link>

        {/* Top Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.newArrival && <Badge variant="accent" size="sm">New</Badge>}
          {product.bestSeller && <Badge variant="default" size="sm">Iconic</Badge>}
          {product.discountPercentage ? (
            <Badge variant="warning" size="sm">
              -{product.discountPercentage}%
            </Badge>
          ) : null}
        </div>

        {/* Quick WhatsApp Floating Trigger */}
        <div className="absolute bottom-3 right-3 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 z-10">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            title={`Order ${product.name} on WhatsApp`}
            className="flex h-9 w-9 items-center justify-center bg-[#101010] text-[#C6A76A] border border-[#C6A76A] shadow-lg hover:bg-[#C6A76A] hover:text-[#101010] transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Product Details Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6 bg-[#FFFFFF]">
        {/* Brand & Category */}
        <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-sans font-medium text-[#8C8275] mb-2">
          <span>{brand?.name || 'Aura Atelier'}</span>
          <span>{category?.name}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg sm:text-xl font-normal text-[#121110] group-hover:text-[#8C6F38] transition-colors line-clamp-1 leading-snug">
          <Link href={`/products/${product.slug}`}>
            {product.name}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="mt-1.5 text-xs text-[#6B6358] line-clamp-2 leading-relaxed font-light font-sans">
          {product.shortDescription}
        </p>

        {/* Ratings */}
        <div className="mt-3 flex items-center gap-1.5">
          <div className="flex items-center text-[#C6A76A]">
            <Star className="h-3 w-3 fill-current" />
          </div>
          <span className="text-xs font-semibold text-[#121110]">
            {product.rating.toFixed(1)}
          </span>
          <span className="text-[11px] text-[#8C8275]">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price & Action Row */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-[#EAE5DC]">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-lg sm:text-xl font-semibold text-[#121110]">
              {formatCurrency(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-[#8C8275] line-through font-light">
                {formatCurrency(product.originalPrice)}
              </span>
            )}
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="text-[10px] tracking-widest uppercase font-medium text-[#121110] group-hover:text-[#C6A76A] transition-colors flex items-center gap-1"
          >
            Explore &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
