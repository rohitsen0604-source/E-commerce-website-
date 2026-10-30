import React from 'react';
import { Product } from '@/types/product';
import { ProductCard } from './ProductCard';
import { EmptyState } from '@/components/shared/EmptyState';
import { cn } from '@/lib/utils';

export interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
  className?: string;
  emptyTitle?: string;
  emptyDescription?: string;
  onResetFilters?: () => void;
}

export function ProductGrid({
  products,
  columns = 4,
  className,
  emptyTitle = 'No products found',
  emptyDescription = 'We could not find any products matching your current criteria. Try adjusting your filters or search terms.',
  onResetFilters,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <EmptyState
        title={emptyTitle}
        description={emptyDescription}
        actionLabel={onResetFilters ? 'Clear All Filters' : 'Browse All Products'}
        actionHref={onResetFilters ? undefined : '/products'}
        onAction={onResetFilters}
      />
    );
  }

  const columnClasses = {
    2: 'grid-cols-2 sm:grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  return (
    <div className={cn('grid gap-3 sm:gap-6 lg:gap-8', columnClasses[columns], className)}>
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={index < 4}
        />
      ))}
    </div>
  );
}
