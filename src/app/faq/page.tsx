import { Metadata } from 'next';
import { faqCategories } from '@/data/site-content';
import { constructMetadata } from '@/lib/metadata';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/shared/Button';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

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
          <ScrollReveal direction="up" delayMs={0}>
            <SectionHeading
              badge="Client Assistance"
              title="Frequently Asked Questions"
              description="Clear guidance on our Phase 1 static catalog showcase, acquiring artifacts through our concierge, and lifetime authenticity guarantees."
              alignment="left"
              theme="dark"
              className="mb-10"
            />
          </ScrollReveal>

          <div className="space-y-12">
            {faqCategories.map((group, groupIndex) => (
              <ScrollReveal
                key={groupIndex}
                direction="up"
                delayMs={groupIndex * 120}
                className="space-y-4"
              >
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
              </ScrollReveal>
            ))}
          </div>

          {/* Need more help */}
          <ScrollReveal direction="up" delayMs={250}>
            <div className="mt-16 rounded-2xl border border-[#34312B] bg-[#161514] p-8 sm:p-10 text-center transition-all duration-300 hover:border-[#C6A76A]/40 hover:shadow-[0_0_30px_rgba(198,167,106,0.10)]">
              <h3 className="font-serif text-2xl font-light text-[#F5F0E8]">
                Have a question not addressed here?
              </h3>
              <p className="mt-2 font-sans text-xs sm:text-sm text-[#A69F93] max-w-sm mx-auto leading-relaxed font-light">
                Our customer support team is available to assist you with specific questions regarding materials, delivery across India, or warranty.
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <Button href="/contact" variant="accent" size="sm">
                  Contact Support
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </div>
  );
}
