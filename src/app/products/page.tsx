import { Metadata } from 'next';
import { Suspense } from 'react';
import { getAllProducts } from '@/data/products';
import { getAllCategories } from '@/data/categories';
import { getAllBrands } from '@/data/brands';
import { constructMetadata } from '@/lib/metadata';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ProductCatalogClient } from '@/components/products/ProductCatalogClient';
import { PageLoader } from '@/components/shared/PageLoader';

export const metadata: Metadata = constructMetadata({
  title: 'Complete Catalog & Curated Artifacts',
  description:
    'Browse our comprehensive static collection of high-fidelity audio, mechanical keyboards, artisan knitwear, Swiss horology, and minimalist living accessories.',
  canonicalUrl: '/products',
});

export default function ProductsPage() {
  const products = getAllProducts();
  const categories = getAllCategories();
  const brands = getAllBrands();

  return (
    <div className="py-8 sm:py-14 bg-[#101010] min-h-screen text-[#F5F0E8]">
      <Container size="xl">
        <Breadcrumb items={[{ label: 'Catalog & Masterpieces' }]} />

        <div className="pt-4 pb-12">
          <SectionHeading
            badge="The Maison Vault"
            title="Curated Masterpieces"
            description="Explore our full static archive. Filter by atelier maison, category, and availability to acquire refined artifacts."
            alignment="left"
            theme="dark"
            className="mb-10"
          />

          <Suspense fallback={<PageLoader label="Loading product catalog..." />}>
            <ProductCatalogClient
              initialProducts={products}
              categories={categories}
              brands={brands}
            />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
