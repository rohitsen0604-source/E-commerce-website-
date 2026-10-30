import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { getAllCategories, getCategoryBySlug } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import { getAllBrands } from '@/data/brands';
import { constructMetadata } from '@/lib/metadata';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ProductCatalogClient } from '@/components/products/ProductCatalogClient';
import { PageLoader } from '@/components/shared/PageLoader';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

interface CategoryDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: CategoryDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return constructMetadata({
      title: 'Category Not Found',
      noIndex: true,
    });
  }

  return constructMetadata({
    title: category.seo?.metaTitle || category.name,
    description: category.seo?.metaDescription || category.description,
    image: category.image,
    canonicalUrl: `/categories/${category.slug}`,
  });
}

export default async function CategoryDetailPage({ params }: CategoryDetailPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(category.id);
  const allCategories = getAllCategories();
  const allBrands = getAllBrands();

  return (
    <div className="py-8 sm:py-14 bg-[#101010] min-h-screen text-[#F5F0E8]">
      <Container size="xl">
        <Breadcrumb
          items={[
            { label: 'Categories', href: '/categories' },
            { label: category.name },
          ]}
        />

        <div className="pt-4 pb-14">
          <ScrollReveal direction="up" delayMs={0}>
            <SectionHeading
              badge="Collection Focus"
              title={category.name}
              description={category.description}
              alignment="left"
              theme="dark"
              className="mb-10"
            />
          </ScrollReveal>

          <Suspense fallback={<PageLoader label="Loading category products..." />}>
            <ProductCatalogClient
              initialProducts={categoryProducts}
              categories={allCategories}
              brands={allBrands}
              initialCategory={category.id}
            />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
