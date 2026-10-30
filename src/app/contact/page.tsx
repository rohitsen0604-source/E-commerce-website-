import { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInformation } from '@/components/contact/ContactInformation';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Concierge & Studio Showroom',
  description:
    'Inquire directly with our client advisory concierge team for stock inquiries, custom requests, and private appointments.',
  canonicalUrl: '/contact',
});

export default function ContactPage() {
  return (
    <div className="py-8 sm:py-16 bg-[#101010] min-h-screen text-[#F5F0E8]">
      <Container size="xl">
        <Breadcrumb items={[{ label: 'Contact & Concierge' }]} />

        <div className="pt-4 pb-14">
          <ScrollReveal direction="up" delayMs={0}>
            <div className="mb-12 max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C6A76A]">
                Personalized Advisory
              </span>
              <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#F5F0E8]">
                Client Concierge & Inquiries
              </h1>
              <p className="mt-3 font-sans text-sm sm:text-base text-[#D8D2C7] leading-relaxed font-light">
                Whether requesting personalized bespoke customization, inquiring about international courier dispatch, or seeking curation advice, our concierge is at your service.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <ScrollReveal direction="up" delayMs={100} className="lg:col-span-7">
              <ContactForm />
            </ScrollReveal>
            <ScrollReveal direction="up" delayMs={200} className="lg:col-span-5">
              <ContactInformation />
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </div>
  );
}
