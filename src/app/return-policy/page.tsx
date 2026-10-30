import { Metadata } from 'next';
import { RotateCcw, ShieldCheck } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';
import { contactConfig } from '@/config/contact';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

export const metadata: Metadata = constructMetadata({
  title: 'Return & Refund Policy',
  description: 'Understand our 14-day return privilege, exchange procedures, and manufacturer warranty coverage.',
  canonicalUrl: '/return-policy',
});

export default function ReturnPolicyPage() {
  return (
    <div className="py-8 sm:py-16 bg-[#101010] min-h-screen text-[#F5F0E8]">
      <Container size="md">
        <Breadcrumb items={[{ label: 'Return Policy' }]} />

        <article className="max-w-none pt-4 pb-16">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C6A76A]">
            Client Assurance
          </span>
          <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#F5F0E8]">
            Return & Refund Policy
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
            <div className="rounded-2xl border border-[#34312B] bg-[#161514] p-6 text-[#F5F0E8]">
              <RotateCcw className="h-5 w-5 text-[#C6A76A] mb-3" />
              <h3 className="font-serif text-base font-light text-[#F5F0E8]">14-Day Return Window</h3>
              <p className="font-sans text-xs text-[#A69F93] mt-1 font-light">Eligible on unworn, unopened pieces with original tags attached.</p>
            </div>
            <div className="rounded-2xl border border-[#34312B] bg-[#161514] p-6 text-[#F5F0E8]">
              <ShieldCheck className="h-5 w-5 text-[#C6A76A] mb-3" />
              <h3 className="font-serif text-base font-light text-[#F5F0E8]">2-Year Atelier Warranty</h3>
              <p className="font-sans text-xs text-[#A69F93] mt-1 font-light">Full structural & movement coverage against craftsmanship defects.</p>
            </div>
          </div>

          <div className="space-y-8 font-sans text-sm leading-relaxed text-[#D8D2C7] font-light">
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-light text-[#F5F0E8]">
                1. Return Eligibility
              </h2>
              <p>
                To qualify for a return or replacement, the item must be in pristine, unused condition with all original packaging, numbered authenticity certificates, accessory cables, and protective covers intact.
              </p>
              <p>
                Due to bespoke personalization, customized monogramming and engraved timepieces are non-refundable unless a manufacturing discrepancy exists.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-light text-[#F5F0E8]">
                2. Return Authorization Procedure
              </h2>
              <ol className="list-decimal pl-5 space-y-1.5 text-[#D8D2C7]">
                <li>Notify our concierge via WhatsApp or email at <a href={`mailto:${contactConfig.supportEmail}`} className="text-[#C6A76A] hover:underline">{contactConfig.supportEmail}</a> within 14 calendar days of delivery.</li>
                <li>Our team will issue an insured return shipping label and provide customs clearance guidance.</li>
                <li>Upon receipt and inspection by our master artisans (usually 2-3 business days), your refund or replacement will be initiated.</li>
              </ol>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-light text-[#F5F0E8]">
                3. Manufacturer Warranty Claims
              </h2>
              <p>
                Every mechanical watch, electronic audio headphone, and optical frame includes our comprehensive 2-Year Limited Warranty. In the rare event of mechanical malfunction under ordinary care, we provide complimentary repair or replacement.
              </p>
            </section>
          </div>
        </article>
      </Container>
    </div>
  );
}
