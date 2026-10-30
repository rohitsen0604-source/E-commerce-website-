import { Metadata } from 'next';
import { Truck, Globe } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

export const metadata: Metadata = constructMetadata({
  title: 'Shipping & Worldwide Delivery Policy',
  description: 'Details regarding insured worldwide courier delivery, express dispatch timelines, customs, and protective packaging.',
  canonicalUrl: '/shipping-policy',
});

export default function ShippingPolicyPage() {
  return (
    <div className="py-8 sm:py-16 bg-[#101010] min-h-screen text-[#F5F0E8]">
      <Container size="md">
        <Breadcrumb items={[{ label: 'Shipping Policy' }]} />

        <article className="max-w-none pt-4 pb-16">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C6A76A]">
            Logistics & Transit
          </span>
          <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#F5F0E8]">
            Worldwide Shipping & Delivery Policy
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
            <div className="rounded-2xl border border-[#34312B] bg-[#161514] p-6 text-[#F5F0E8]">
              <Truck className="h-5 w-5 text-[#C6A76A] mb-3" />
              <h3 className="font-serif text-base font-light text-[#F5F0E8]">Complimentary Courier</h3>
              <p className="font-sans text-xs text-[#A69F93] mt-1 font-light">Available on all orders exceeding ₹4,999.</p>
            </div>
            <div className="rounded-2xl border border-[#34312B] bg-[#161514] p-6 text-[#F5F0E8]">
              <Globe className="h-5 w-5 text-[#C6A76A] mb-3" />
              <h3 className="font-serif text-base font-light text-[#F5F0E8]">50+ Nations Serviced</h3>
              <p className="font-sans text-xs text-[#A69F93] mt-1 font-light">Insured expedited delivery via DHL Express and FedEx Priority.</p>
            </div>
          </div>

          <div className="space-y-8 font-sans text-sm leading-relaxed text-[#D8D2C7] font-light">
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-light text-[#F5F0E8]">
                1. Order Dispatch Timeframes
              </h2>
              <p>
                All in-stock studio pieces are prepared, packaged with archival-grade protective materials, and dispatched from our primary facility within 24 to 48 business hours following order confirmation. Limited edition and custom-engraved pieces require an additional 3-5 days for master artisan finishing.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-light text-[#F5F0E8]">
                2. Estimated Transit Times
              </h2>
              <ul className="list-disc pl-5 space-y-1.5 text-[#D8D2C7]">
                <li><strong>Domestic Metro Express (Delhi NCR, Mumbai, Bengaluru, Hyderabad):</strong> 2 to 3 business days.</li>
                <li><strong>Domestic Standard (Rest of India):</strong> 3 to 5 business days.</li>
                <li><strong>International Priority:</strong> 5 to 8 business days.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-light text-[#F5F0E8]">
                3. Full Transit Insurance & Tracking
              </h2>
              <p>
                Every consignment is fully insured against theft, loss, or transit damage until final recipient signature confirmation. A personalized real-time tracking number is issued via WhatsApp and email as soon as the courier scans your package.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-light text-[#F5F0E8]">
                4. Customs Duties & Import Taxes
              </h2>
              <p>
                For international shipments, import tariffs or customs clearance charges are determined by destination border authorities and are the responsibility of the recipient unless otherwise specified in your order quote.
              </p>
            </section>
          </div>
        </article>
      </Container>
    </div>
  );
}
