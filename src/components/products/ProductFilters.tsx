'use client';

import React from 'react';
import { Filter, RotateCcw } from 'lucide-react';
import { Category } from '@/types/category';
import { Brand } from '@/types/brand';
import { ProductFilterState } from '@/types/product';
import { AVAILABILITY_OPTIONS } from '@/lib/constants';
import { Button } from '@/components/shared/Button';
import { cn } from '@/lib/utils';

export interface ProductFiltersProps {
  categories: Category[];
  brands: Brand[];
  filters: ProductFilterState;
  onCategoryChange: (categoryId?: string) => void;
  onBrandChange: (brandId?: string) => void;
  onAvailabilityChange: (availability?: ProductFilterState['availability']) => void;
  onPriceChange: (min?: number, max?: number) => void;
  onReset: () => void;
  className?: string;
}

export function ProductFilters({
  categories,
  brands,
  filters,
  onCategoryChange,
  onBrandChange,
  onAvailabilityChange,
  onPriceChange,
  onReset,
  className,
}: ProductFiltersProps) {
  const priceRanges = [
    { label: 'All Prices', min: undefined, max: undefined },
    { label: 'Under ₹15,000', min: 0, max: 15000 },
    { label: '₹15,000 – ₹30,000', min: 15000, max: 30000 },
    { label: 'Over ₹30,000', min: 30000, max: undefined },
  ];

  return (
    <div className={cn('space-y-8 rounded-2xl border border-[#34312B] bg-[#1C1B19] p-6 text-[#F5F0E8]', className)}>
      <div className="flex items-center justify-between pb-4 border-b border-[#34312B]">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-[#C6A76A]" />
          <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#F5F0E8]">
            Filters
          </h3>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="flex items-center gap-1.5 text-xs font-medium text-[#A69F93] hover:text-[#C6A76A] transition-colors"
        >
          <RotateCcw className="h-3 w-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Category Filter */}
      <div className="space-y-3">
        <h4 className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#C6A76A]">
          Categories
        </h4>
        <div className="space-y-1.5">
          <button
            type="button"
            onClick={() => onCategoryChange(undefined)}
            className={cn(
              'flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition-colors text-left',
              !filters.categoryId
                ? 'bg-[#C6A76A] text-[#101010] font-semibold'
                : 'text-[#D8D2C7] hover:bg-[#161514] hover:text-[#F5F0E8]'
            )}
          >
            <span>All Categories</span>
          </button>
          {categories.map((cat) => {
            const isActive = filters.categoryId === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onCategoryChange(isActive ? undefined : cat.id)}
                className={cn(
                  'flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition-colors text-left',
                  isActive
                    ? 'bg-[#C6A76A] text-[#101010] font-semibold'
                    : 'text-[#D8D2C7] hover:bg-[#161514] hover:text-[#F5F0E8]'
                )}
              >
                <span>{cat.name}</span>
                {cat.productCount && (
                  <span className={cn('text-[10px] opacity-80', isActive ? 'text-[#101010]' : 'text-[#827C72]')}>
                    {cat.productCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="space-y-3 pt-4 border-t border-[#34312B]">
        <h4 className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#C6A76A]">
          Price Range
        </h4>
        <div className="space-y-1.5">
          {priceRanges.map((range, index) => {
            const isSelected =
              filters.minPrice === range.min && filters.maxPrice === range.max;
            return (
              <button
                key={index}
                type="button"
                onClick={() => onPriceChange(range.min, range.max)}
                className={cn(
                  'flex w-full items-center rounded-lg px-3 py-2 text-xs font-medium transition-colors text-left',
                  isSelected
                    ? 'bg-[#C6A76A] text-[#101010] font-semibold'
                    : 'text-[#D8D2C7] hover:bg-[#161514] hover:text-[#F5F0E8]'
                )}
              >
                <span>{range.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Brand Filter */}
      <div className="space-y-3 pt-4 border-t border-[#34312B]">
        <h4 className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#C6A76A]">
          Atelier & Maison
        </h4>
        <div className="space-y-1.5">
          <button
            type="button"
            onClick={() => onBrandChange(undefined)}
            className={cn(
              'flex w-full items-center rounded-lg px-3 py-2 text-xs font-medium transition-colors text-left',
              !filters.brandId
                ? 'bg-[#C6A76A] text-[#101010] font-semibold'
                : 'text-[#D8D2C7] hover:bg-[#161514] hover:text-[#F5F0E8]'
            )}
          >
            <span>All Maisons</span>
          </button>
          {brands.map((b) => {
            const isActive = filters.brandId === b.id;
            return (
              <button
                key={b.id}
                type="button"
                onClick={() => onBrandChange(isActive ? undefined : b.id)}
                className={cn(
                  'flex w-full items-center rounded-lg px-3 py-2 text-xs font-medium transition-colors text-left',
                  isActive
                    ? 'bg-[#C6A76A] text-[#101010] font-semibold'
                    : 'text-[#D8D2C7] hover:bg-[#161514] hover:text-[#F5F0E8]'
                )}
              >
                <span>{b.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Availability Filter */}
      <div className="space-y-3 pt-4 border-t border-[#34312B]">
        <h4 className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#C6A76A]">
          Availability
        </h4>
        <div className="space-y-1.5">
          {AVAILABILITY_OPTIONS.map((opt) => {
            const isActive =
              (filters.availability || '') === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() =>
                  onAvailabilityChange(
                    opt.value ? (opt.value as ProductFilterState['availability']) : undefined
                  )
                }
                className={cn(
                  'flex w-full items-center rounded-lg px-3 py-2 text-xs font-medium transition-colors text-left',
                  isActive
                    ? 'bg-[#C6A76A] text-[#101010] font-semibold'
                    : 'text-[#D8D2C7] hover:bg-[#161514] hover:text-[#F5F0E8]'
                )}
              >
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="pt-2">
        <Button
          onClick={onReset}
          variant="outline"
          size="sm"
          className="w-full text-xs"
        >
          Reset All Filters
        </Button>
      </div>
    </div>
  );
}
