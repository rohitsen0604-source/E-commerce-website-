'use client';

import React from 'react';
import { SORT_OPTIONS } from '@/lib/constants';
import { ProductFilterState } from '@/types/product';
import { Select } from '@/components/ui/Select';
import { cn } from '@/lib/utils';

export interface ProductSortingProps {
  currentSort?: ProductFilterState['sortBy'];
  onSortChange: (sort: ProductFilterState['sortBy']) => void;
  className?: string;
}

export function ProductSorting({
  currentSort = 'featured',
  onSortChange,
  className,
}: ProductSortingProps) {
  return (
    <div className={cn('flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start', className)}>
      <label htmlFor="product-sort" className="text-xs font-semibold uppercase tracking-wider text-[#A69F93] whitespace-nowrap">
        Sort:
      </label>
      <Select
        id="product-sort"
        value={currentSort}
        onChange={(e) => onSortChange(e.target.value as ProductFilterState['sortBy'])}
        options={SORT_OPTIONS.map((opt) => ({
          label: opt.label,
          value: opt.value,
        }))}
        className="flex-1 sm:w-48 text-xs py-2 min-h-[44px] sm:min-h-0"
      />
    </div>
  );
}
