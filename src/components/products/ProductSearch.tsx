'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X, ArrowRight } from 'lucide-react';
import { searchProducts } from '@/data/products';
import { Product } from '@/types/product';
import { formatCurrency } from '@/lib/formatters';
import { cn } from '@/lib/utils';

export interface ProductSearchProps {
  placeholder?: string;
  className?: string;
  onSelectProduct?: (product: Product) => void;
  variant?: 'header' | 'inline';
}

export function ProductSearch({
  placeholder = 'Search catalog by name, atelier, SKU...',
  className,
  onSelectProduct,
  variant = 'header',
}: ProductSearchProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    if (query.trim().length > 1) {
      return searchProducts(query).slice(0, 5);
    }
    return [];
  }, [query]);

  const showDropdown = isFocused && query.trim().length > 1;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const clear = () => {
    setQuery('');
    setIsFocused(false);
  };

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      <div className="relative flex items-center">
        <Search className="pointer-events-none absolute left-3.5 h-3.5 w-3.5 text-[#8C8275]" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          className={cn(
            'w-full border border-[#34312B] bg-[#141312] py-2 pl-9 pr-8 text-xs text-[#F5F0E8] placeholder-[#736B5E] transition-all duration-300',
            'focus:border-[#C6A76A] focus:outline-hidden font-sans font-light',
            variant === 'header' && 'h-10 sm:h-10'
          )}
        />
        {query && (
          <button
            type="button"
            onClick={clear}
            className="absolute right-2 flex h-8 w-8 items-center justify-center text-[#8C8275] hover:text-[#F5F0E8]"
            aria-label="Clear search"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* Instant Search Results Dropdown */}
      {showDropdown && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 border border-[#34312B] bg-[#141312] p-2 shadow-2xl animate-scale-up">
          <div className="px-3 py-1.5 editorial-tag text-[#8C8275] border-b border-[#24221E] pb-2">
            {results.length > 0 ? `Curation Matches (${results.length})` : 'No matching artifacts'}
          </div>

          {results.length > 0 ? (
            <div className="space-y-1 pt-1">
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  onClick={() => {
                    setIsFocused(false);
                    onSelectProduct?.(product);
                  }}
                  className="flex items-center gap-3 p-2 transition-colors hover:bg-[#1C1B19]"
                >
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden bg-[#181715] border border-[#2B2925]">
                    <Image
                      src={product.images[0] || '/images/placeholders/product-placeholder.svg'}
                      alt={product.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="truncate font-serif text-sm font-medium text-[#F5F0E8]">
                      {product.name}
                    </h4>
                    <p className="flex items-center gap-2 text-[11px] font-sans text-[#8C8275]">
                      <span className="text-[#C6A76A] font-medium">{formatCurrency(product.price)}</span>
                      {product.discountPercentage ? (
                        <span className="text-[#E8DDC8]">-{product.discountPercentage}%</span>
                      ) : null}
                    </p>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-[#8C8275] shrink-0" />
                </Link>
              ))}

              <div className="border-t border-[#24221E] pt-2 text-center">
                <Link
                  href={`/products?search=${encodeURIComponent(query)}`}
                  onClick={() => setIsFocused(false)}
                  className="inline-block py-1 text-[10px] tracking-widest uppercase font-medium text-[#C6A76A] hover:text-[#E8DDC8]"
                >
                  View all results for &quot;{query}&quot; →
                </Link>
              </div>
            </div>
          ) : (
            <div className="p-4 text-center text-xs text-[#8C8275]">
              No pieces found matching &quot;{query}&quot;. Try searching for &quot;headphones&quot;, &quot;watch&quot;, or &quot;bag&quot;.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
