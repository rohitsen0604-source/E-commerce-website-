import { Metadata } from 'next';
import { RotateCcw, ShieldCheck } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';
import { contactConfig } from '@/config/contact';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

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
          <ScrollReveal direction="up" delayMs={0}>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C6A76A]">
              Client Assurance
            </span>
            <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#F5F0E8]">
              Return & Refund Policy
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delayMs={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
              <div className="group rounded-2xl border border-[#34312B] bg-[#161514] p-6 text-[#F5F0E8] transition-all duration-300 hover:border-[#C6A76A]/60 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(198,167,106,0.10)]">
                <RotateCcw className="h-5 w-5 text-[#C6A76A] mb-3 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-serif text-base font-light text-[#F5F0E8]">14-Day Return Window</h3>
                <p className="font-sans text-xs text-[#A69F93] mt-1 font-light">Eligible on unworn, unopened pieces with original tags attached.</p>
              </div>
              <div className="group rounded-2xl border border-[#34312B] bg-[#161514] p-6 text-[#F5F0E8] transition-all duration-300 hover:border-[#C6A76A]/60 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(198,167,106,0.10)]">
                <ShieldCheck className="h-5 w-5 text-[#C6A76A] mb-3 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-serif text-base font-light text-[#F5F0E8]">2-Year Atelier Warranty</h3>
                <p className="font-sans text-xs text-[#A69F93] mt-1 font-light">Full structural & movement coverage against craftsmanship defects.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delayMs={150}>
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
                  <li>Notify our support team via WhatsApp or email at <a href={`mailto:${contactConfig.supportEmail}`} className="text-[#C6A76A] hover:underline">{contactConfig.supportEmail}</a> within 14 calendar days of delivery.</li>
                  <li>Our team will issue an insured return shipping label and provide customs clearance guidance.</li>
                  <li>Package the item securely in its original packaging with all included documentation.</li>
                  <li>Hand the package to the designated courier or drop off at an authorized carrier station.</li>
                </ol>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-xl sm:text-2xl font-light text-[#F5F0E8]">
                  3. Inspection & Refund Processing
                </h2>
                <p>
                  Upon receipt at our atelier, our horologists and material specialists will inspect the returned piece within 2 business days. Approved refunds are credited to the original payment source within 3-5 business days.
                </p>
              </section>
            </div>
          </ScrollReveal>
        </article>
      </Container>
    </div>
  );
}
