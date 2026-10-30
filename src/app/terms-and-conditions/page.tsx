import { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';
import { contactConfig } from '@/config/contact';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

export const metadata: Metadata = constructMetadata({
  title: 'Terms & Conditions',
  description: 'Terms governing the access, browsing, and concierge inquiries for our static e-commerce catalog.',
  canonicalUrl: '/terms-and-conditions',
});

export default function TermsAndConditionsPage() {
  return (
    <div className="py-8 sm:py-16 bg-[#101010] min-h-screen text-[#F5F0E8]">
      <Container size="md">
        <Breadcrumb items={[{ label: 'Terms & Conditions' }]} />

        <article className="max-w-none pt-4 pb-16">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C6A76A]">
            Legal Agreement
          </span>
          <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#F5F0E8]">
            Terms & Conditions of Service
          </h1>
          <p className="text-xs text-[#A69F93] mt-2 font-sans">
            Effective Date: January 1, 2026 | Last Updated: October 2026
          </p>

          <div className="mt-10 space-y-8 font-sans text-sm leading-relaxed text-[#D8D2C7] font-light">
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-light text-[#F5F0E8]">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing, navigating, or utilizing the digital portal of {contactConfig.legalEntityName}, you acknowledge and agree to comply with these Terms and Conditions. If you do not accept these provisions, please discontinue use of this site.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-light text-[#F5F0E8]">
                2. Phase 1 Static Showcase Scope
              </h2>
              <p>
                This digital platform serves exclusively as an informational static product showcase and curated aesthetic catalog (Phase 1). No automated retail transactions, order checkout, or payment gateway executions are processed directly through this website. All price quotes, inventory confirmations, and commercial transactions occur off-site via authorized WhatsApp support and customer care channels.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-light text-[#F5F0E8]">
                3. Intellectual Property
              </h2>
              <p>
                All visual assets, typography arrangements, industrial designs, trademarks, and written copy published on this domain are the proprietary intellectual property of {contactConfig.legalEntityName} or its collaborating atelier partners and are protected by applicable international copyright laws.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-light text-[#F5F0E8]">
                4. Pricing & Product Accuracy
              </h2>
              <p>
                While we exercise meticulous care to maintain accurate product descriptions, material specifications, and indicative pricing, occasional typographical anomalies or production updates may occur. Confirmed pricing and availability are verified upon consultation with our customer support team.
              </p>
            </section>
          </div>
        </article>
      </Container>
    </div>
  );
}
