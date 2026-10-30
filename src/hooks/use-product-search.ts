'use client';

import { useState, useMemo, useCallback } from 'react';
import { Product } from '@/types/product';
import { searchProducts } from '@/data/products';

export function useProductSearch() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const results = useMemo<Product[]>(() => {
    if (!query.trim()) return [];
    return searchProducts(query).slice(0, 8);
  }, [query]);

  const clearQuery = useCallback(() => {
    setQuery('');
  }, []);

  const openSearch = useCallback(() => setIsOpen(true), []);
  const closeSearch = useCallback(() => {
    setIsOpen(false);
    setQuery('');
  }, []);

  return {
    query,
    setQuery,
    results,
    isOpen,
    openSearch,
    closeSearch,
    clearQuery,
    hasResults: results.length > 0,
  };
}
