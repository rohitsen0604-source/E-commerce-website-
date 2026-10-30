import { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInformation } from '@/components/contact/ContactInformation';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Us | Customer Support',
  description:
    'Contact our customer support team for orders, product questions, and fast express delivery across India.',
  canonicalUrl: '/contact',
});

export default function ContactPage() {
  return (
    <div className="py-8 sm:py-16 bg-[#101010] min-h-screen text-[#F5F0E8]">
      <Container size="xl">
        <Breadcrumb items={[{ label: 'Contact Us' }]} />

        <div className="pt-4 pb-14">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C6A76A]">
              Get in Touch
            </span>
            <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#F5F0E8]">
              Customer Support & Contact
            </h1>
            <p className="mt-3 font-sans text-sm sm:text-base text-[#D8D2C7] leading-relaxed font-light">
              Whether you have questions about your order, product specifications, or warranty, our support team is always here to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <ContactInformation />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
