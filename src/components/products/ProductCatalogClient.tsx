'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { SlidersHorizontal, X } from 'lucide-react';
import { Product, ProductFilterState } from '@/types/product';
import { Category } from '@/types/category';
import { Brand } from '@/types/brand';
import { useProductFilter } from '@/hooks/use-product-filter';
import { ProductGrid } from '@/components/products/ProductGrid';
import { ProductFilters } from '@/components/products/ProductFilters';
import { ProductSorting } from '@/components/products/ProductSorting';
import { Button } from '@/components/shared/Button';
import { Modal } from '@/components/ui/Modal';

export interface ProductCatalogClientProps {
  initialProducts: Product[];
  categories: Category[];
  brands: Brand[];
  initialCategory?: string;
}

export function ProductCatalogClient({
  initialProducts,
  categories,
  brands,
  initialCategory,
}: ProductCatalogClientProps) {
  const searchParams = useSearchParams();
  const querySearch = searchParams.get('search') || undefined;
  const queryCategory = searchParams.get('category') || initialCategory;
  const querySort = (searchParams.get('sort') as ProductFilterState['sortBy']) || 'featured';

  const {
    filters,
    filteredProducts,
    totalCount,
    activeFilterCount,
    setCategory,
    setBrand,
    setPriceRange,
    setAvailability,
    setSortBy,
    setSearchQuery,
    resetFilters,
  } = useProductFilter(initialProducts, {
    categoryId: queryCategory,
    searchQuery: querySearch,
    sortBy: querySort,
  });

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync search param if URL updates
  useEffect(() => {
    if (querySearch !== undefined) {
      setSearchQuery(querySearch);
    }
  }, [querySearch, setSearchQuery]);

  return (
    <div className="space-y-8">
      {/* Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-[#34312B] bg-[#161514] p-4 sm:px-6">
        <div className="flex items-center gap-3">
          {/* Mobile Filter Toggle Button */}
          <Button
            onClick={() => setMobileFilterOpen(true)}
            variant="outline"
            size="sm"
            className="lg:hidden"
            leftIcon={<SlidersHorizontal className="h-4 w-4" />}
          >
            Filters {activeFilterCount > 0 ? `(${activeFilterCount})` : ''}
          </Button>

          <span className="font-sans text-xs text-[#A69F93]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#C6A76A] animate-ping mr-1.5 align-middle" />
            Curated archive: <strong className="text-[#F5F0E8] font-medium">{totalCount}</strong> masterpieces
          </span>

          {filters.searchQuery && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C6A76A]/40 bg-[#C6A76A]/10 px-3 py-1 text-xs text-[#C6A76A]">
              Query: &ldquo;{filters.searchQuery}&rdquo;
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="hover:text-[#F5F0E8] transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          )}
        </div>

        {/* Sorting Dropdown */}
        <ProductSorting
          currentSort={filters.sortBy}
          onSortChange={setSortBy}
        />
      </div>

      {/* Main Grid + Sidebar Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Desktop Sidebar Filters */}
        <div className="hidden lg:block lg:col-span-1 sticky top-28">
          <ProductFilters
            categories={categories}
            brands={brands}
            filters={filters}
            onCategoryChange={setCategory}
            onBrandChange={setBrand}
            onAvailabilityChange={setAvailability}
            onPriceChange={setPriceRange}
            onReset={resetFilters}
          />
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          <ProductGrid
            products={filteredProducts}
            columns={3}
            onResetFilters={resetFilters}
          />
        </div>
      </div>

      {/* Mobile Filter Modal */}
      <Modal
        isOpen={mobileFilterOpen}
        onClose={() => setMobileFilterOpen(false)}
        title="Refine Collection"
        description="Filter by atelier, category, and availability"
        maxWidth="md"
      >
        <div className="max-h-[70vh] overflow-y-auto pr-1">
          <ProductFilters
            categories={categories}
            brands={brands}
            filters={filters}
            onCategoryChange={(cat) => {
              setCategory(cat);
              setMobileFilterOpen(false);
            }}
            onBrandChange={(brand) => {
              setBrand(brand);
              setMobileFilterOpen(false);
            }}
            onAvailabilityChange={(avail) => {
              setAvailability(avail);
              setMobileFilterOpen(false);
            }}
            onPriceChange={(min, max) => {
              setPriceRange(min, max);
              setMobileFilterOpen(false);
            }}
            onReset={() => {
              resetFilters();
              setMobileFilterOpen(false);
            }}
            className="border-0 p-0 shadow-none"
          />
        </div>
      </Modal>
    </div>
  );
}
