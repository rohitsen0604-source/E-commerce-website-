'use client';

import { useState, useMemo, useCallback } from 'react';
import { Product, ProductFilterState } from '@/types/product';
import { filterAndSortProducts } from '@/data/products';

export interface UseProductFilterReturn {
  filters: ProductFilterState;
  filteredProducts: Product[];
  totalCount: number;
  activeFilterCount: number;
  setCategory: (categoryId?: string) => void;
  setBrand: (brandId?: string) => void;
  setPriceRange: (min?: number, max?: number) => void;
  setAvailability: (availability?: ProductFilterState['availability']) => void;
  setSortBy: (sortBy: ProductFilterState['sortBy']) => void;
  setSearchQuery: (query: string) => void;
  resetFilters: () => void;
}

export function useProductFilter(
  initialProducts: Product[],
  initialFilters: ProductFilterState = {}
): UseProductFilterReturn {
  const [filters, setFilters] = useState<ProductFilterState>(initialFilters);

  const filteredProducts = useMemo(() => {
    return filterAndSortProducts(filters);
  }, [filters]);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.categoryId) count++;
    if (filters.brandId) count++;
    if (filters.availability) count++;
    if (filters.minPrice !== undefined || filters.maxPrice !== undefined) count++;
    if (filters.searchQuery) count++;
    return count;
  }, [filters]);

  const setCategory = useCallback((categoryId?: string) => {
    setFilters((prev) => ({ ...prev, categoryId }));
  }, []);

  const setBrand = useCallback((brandId?: string) => {
    setFilters((prev) => ({ ...prev, brandId }));
  }, []);

  const setPriceRange = useCallback((minPrice?: number, maxPrice?: number) => {
    setFilters((prev) => ({ ...prev, minPrice, maxPrice }));
  }, []);

  const setAvailability = useCallback((availability?: ProductFilterState['availability']) => {
    setFilters((prev) => ({ ...prev, availability }));
  }, []);

  const setSortBy = useCallback((sortBy: ProductFilterState['sortBy']) => {
    setFilters((prev) => ({ ...prev, sortBy }));
  }, []);

  const setSearchQuery = useCallback((searchQuery: string) => {
    setFilters((prev) => ({ ...prev, searchQuery }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({ sortBy: 'featured' });
  }, []);

  return {
    filters,
    filteredProducts,
    totalCount: filteredProducts.length,
    activeFilterCount,
    setCategory,
    setBrand,
    setPriceRange,
    setAvailability,
    setSortBy,
    setSearchQuery,
    resetFilters,
  };
}
