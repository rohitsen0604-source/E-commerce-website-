'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Star, Check, ShieldCheck, Truck, RotateCcw, Clock } from 'lucide-react';
import { Product, ProductVariant } from '@/types/product';
import { getCategoryById } from '@/data/categories';
import { getBrandById } from '@/data/brands';
import { formatCurrency } from '@/lib/formatters';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { Badge } from '@/components/shared/Badge';

export interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const category = getCategoryById(product.categoryId);
  const brand = getBrandById(product.brandId);

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.variants[0]
  );

  return (
    <div className="flex flex-col space-y-6">
      {/* Category & Brand line */}
      <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-[#A69F93]">
        <div className="flex items-center gap-2">
          {brand && (
            <span className="text-[#F5F0E8] font-semibold">
              {brand.name}
            </span>
          )}
          {category && (
            <>
              <span className="text-[#34312B]">•</span>
              <Link
                href={`/categories/${category.slug}`}
                className="text-[#C6A76A] hover:underline transition-colors"
              >
                {category.name}
              </Link>
            </>
          )}
        </div>
        <span className="text-[#827C72] font-mono text-[11px]">SKU: {product.SKU}</span>
      </div>

      {/* Title & Badges */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {product.newArrival && <Badge variant="accent">New Arrival</Badge>}
          {product.bestSeller && <Badge variant="default">Best Seller</Badge>}
          {product.availability === 'in-stock' && (
            <Badge variant="success" className="inline-flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              In Stock
            </Badge>
          )}
          {product.availability === 'pre-order' && (
            <Badge variant="warning">Pre-Order</Badge>
          )}
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#F5F0E8] leading-tight">
          {product.name}
        </h1>
      </div>

      {/* Ratings */}
      <div className="flex items-center gap-3 border-b border-[#34312B] pb-5">
        <div className="flex items-center text-[#C6A76A]">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(product.rating)
                  ? 'fill-current'
                  : 'text-[#34312B] fill-transparent'
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-semibold text-[#F5F0E8]">
          {product.rating.toFixed(1)}
        </span>
        <span className="text-xs text-[#A69F93]">
          ({product.reviewCount} connoisseur reviews)
        </span>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-4">
        <span className="font-serif text-3xl sm:text-4xl font-light text-[#C6A76A]">
          {formatCurrency(
            product.price + (selectedVariant?.priceModifier || 0)
          )}
        </span>
        {product.originalPrice && product.originalPrice > product.price && (
          <span className="font-serif text-lg text-[#827C72] line-through">
            {formatCurrency(product.originalPrice)}
          </span>
        )}
        {product.discountPercentage ? (
          <span className="rounded-full border border-[#C6A76A]/40 bg-[#C6A76A]/10 px-2.5 py-0.5 text-xs font-sans text-[#C6A76A]">
            Save {product.discountPercentage}%
          </span>
        ) : null}
      </div>

      {/* Description */}
      <p className="font-sans text-sm leading-relaxed text-[#D8D2C7] font-light">
        {product.description}
      </p>

      {/* Variants (if any) */}
      {product.variants.length > 0 && (
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between text-xs font-medium text-[#D8D2C7]">
            <span>Select {product.variants[0]?.type || 'Option'}:</span>
            <span className="font-semibold text-[#F5F0E8]">
              {selectedVariant?.name}
            </span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {product.variants.map((v) => {
              const isSelected = selectedVariant?.id === v.id;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setSelectedVariant(v)}
                  disabled={!v.inStock}
                  className={`rounded-lg border px-4 py-2 text-xs font-medium transition-all duration-200 ${
                    isSelected
                      ? 'border-[#C6A76A] bg-[#C6A76A] text-[#101010]'
                      : v.inStock
                      ? 'border-[#34312B] bg-[#161514] text-[#F5F0E8] hover:border-[#C6A76A]/60'
                      : 'border-[#24221E] bg-[#121110] text-[#736E65] line-through cursor-not-allowed'
                  }`}
                >
                  {v.name}
                  {!v.inStock && ' (Unavailable)'}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* WhatsApp Order Action CTA */}
      <div className="space-y-3 pt-4">
        <WhatsAppButton
          productName={`${product.name} ${selectedVariant ? `(${selectedVariant.name})` : ''}`}
          productSlug={product.slug}
          size="lg"
          fullWidth
          label="Order on WhatsApp"
          className="shadow-[0_0_20px_rgba(198,167,106,0.25)] hover:shadow-[0_0_35px_rgba(198,167,106,0.5)] hover:scale-[1.01] transition-all"
        />
        <p className="text-center font-sans text-xs text-[#A69F93]">
          Chat directly with us on WhatsApp to place your order with free delivery across India.
        </p>
      </div>

      {/* Key Highlights list */}
      <div className="rounded-2xl border border-[#34312B] bg-[#161514] p-6">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F5F0E8] mb-3.5">
          Key Highlights
        </h4>
        <ul className="space-y-2.5 text-xs text-[#D8D2C7] font-light">
          {product.features.map((feat, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <Check className="h-4 w-4 text-[#C6A76A] shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Trust & Guarantee Badges */}
      <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-[#A69F93]">
        <div className="flex items-center gap-3 rounded-xl border border-[#34312B] bg-[#161514] p-3.5">
          <ShieldCheck className="h-5 w-5 text-[#C6A76A] shrink-0" />
          <div>
            <p className="font-medium text-[#F5F0E8]">100% Genuine</p>
            <p className="text-[10px] text-[#A69F93]">Certified Authentic</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-[#34312B] bg-[#161514] p-3.5">
          <Truck className="h-5 w-5 text-[#C6A76A] shrink-0" />
          <div>
            <p className="font-medium text-[#F5F0E8]">Fast Delivery</p>
            <p className="text-[10px] text-[#A69F93]">Express Across India</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-[#34312B] bg-[#161514] p-3.5">
          <RotateCcw className="h-5 w-5 text-[#C6A76A] shrink-0" />
          <div>
            <p className="font-medium text-[#F5F0E8]">14-Day Returns</p>
            <p className="text-[10px] text-[#A69F93]">Easy Return Policy</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-[#34312B] bg-[#161514] p-3.5">
          <Clock className="h-5 w-5 text-[#C6A76A] shrink-0" />
          <div>
            <p className="font-medium text-[#F5F0E8]">2-Year Warranty</p>
            <p className="text-[10px] text-[#A69F93]">Full Brand Coverage</p>
          </div>
        </div>
      </div>
    </div>
  );
}
