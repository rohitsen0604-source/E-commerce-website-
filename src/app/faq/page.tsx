import { Metadata } from 'next';
import { faqCategories } from '@/data/site-content';
import { constructMetadata } from '@/lib/metadata';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/shared/Button';

export const metadata: Metadata = constructMetadata({
  title: 'Frequently Asked Questions (FAQ)',
  description:
    'Answers to common inquiries regarding ordering through our Phase 1 concierge, international shipping, warranty, and authentication.',
  canonicalUrl: '/faq',
});

export default function FAQPage() {
  return (
    <div className="py-8 sm:py-16 bg-[#101010] min-h-screen text-[#F5F0E8]">
      <Container size="md">
        <Breadcrumb items={[{ label: 'FAQ' }]} />

        <div className="pt-4 pb-14">
          <SectionHeading
            badge="Client Assistance"
            title="Frequently Asked Questions"
            description="Clear guidance on our Phase 1 static catalog showcase, acquiring artifacts through our concierge, and lifetime authenticity guarantees."
            alignment="left"
            theme="dark"
            className="mb-10"
          />

          <div className="space-y-12">
            {faqCategories.map((group, groupIndex) => (
              <div key={groupIndex} className="space-y-4">
                <h2 className="font-serif text-xl font-light text-[#F5F0E8] flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C6A76A]" />
                  <span>{group.category}</span>
                </h2>
                <Accordion
                  items={group.items.map((item, idx) => ({
                    id: `${groupIndex}-${idx}`,
                    title: item.question,
                    content: item.answer,
                  }))}
                />
              </div>
            ))}
          </div>

          {/* Need more help */}
          <div className="mt-16 rounded-2xl border border-[#34312B] bg-[#161514] p-8 sm:p-10 text-center">
            <h3 className="font-serif text-2xl font-light text-[#F5F0E8]">
              Have a question not addressed here?
            </h3>
            <p className="mt-2 font-sans text-xs sm:text-sm text-[#A69F93] max-w-sm mx-auto leading-relaxed font-light">
              Our concierge team is available to assist you with specific questions regarding materials, provenance, or custom dispatch.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Button href="/contact" variant="accent" size="sm">
                Contact Concierge
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
