import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllProducts, getProductBySlug, getRelatedProducts } from '@/data/products';
import { getCategoryById } from '@/data/categories';
import { constructMetadata } from '@/lib/metadata';
import { generateProductJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ProductGallery } from '@/components/products/ProductGallery';
import { ProductInfo } from '@/components/products/ProductInfo';
import { ProductSpecifications } from '@/components/products/ProductSpecifications';
import { RelatedProducts } from '@/components/products/RelatedProducts';

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return constructMetadata({
      title: 'Product Not Found',
      noIndex: true,
    });
  }

  return constructMetadata({
    title: product.seo?.metaTitle || product.name,
    description: product.seo?.metaDescription || product.shortDescription,
    image: product.images[0],
    canonicalUrl: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryById(product.categoryId);
  const related = getRelatedProducts(product.id, product.categoryId, 4);

  const productJsonLd = generateProductJsonLd(product);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    ...(category ? [{ name: category.name, url: `/categories/${category.slug}` }] : []),
    { name: product.name, url: `/products/${product.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="py-8 sm:py-14 bg-[#101010] text-[#F5F0E8] min-h-screen">
        <Container size="xl">
          {/* Breadcrumb Navigation */}
          <Breadcrumb
            items={[
              { label: 'Products', href: '/products' },
              ...(category ? [{ label: category.name, href: `/categories/${category.slug}` }] : []),
              { label: product.name },
            ]}
            className="mb-8"
          />

          {/* Main Product Showcase: Gallery on Left, Info on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7 sticky top-28">
              <ProductGallery
                images={product.images}
                productName={product.name}
              />
            </div>
            <div className="lg:col-span-5">
              <ProductInfo product={product} />
            </div>
          </div>

          {/* Technical Specifications Section */}
          <div className="mt-16 pt-12 border-t border-[#34312B]">
            <div className="max-w-4xl mx-auto">
              <ProductSpecifications specifications={product.specifications} />
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <RelatedProducts
              products={related}
              currentProductId={product.id}
            />
          </div>
        </Container>
      </div>
    </>
  );
}
