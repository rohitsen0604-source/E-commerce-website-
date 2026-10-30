import { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';
import { contactConfig } from '@/config/contact';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy',
  description: 'Understand how we protect and respect your privacy and personal data across our digital touchpoints.',
  canonicalUrl: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="py-8 sm:py-16 bg-[#101010] min-h-screen text-[#F5F0E8]">
      <Container size="md">
        <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

        <article className="max-w-none pt-4 pb-16">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C6A76A]">
            Legal & Trust
          </span>
          <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#F5F0E8]">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#A69F93] mt-2 font-sans">
            Effective Date: January 1, 2026 | Last Updated: October 2026
          </p>

          <div className="mt-10 space-y-8 font-sans text-sm leading-relaxed text-[#D8D2C7] font-light">
            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-light text-[#F5F0E8]">
                1. Overview & Commitment
              </h2>
              <p>
                {contactConfig.legalEntityName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is deeply committed to preserving the confidentiality, integrity, and security of your personal information. This Privacy Policy details how we handle inquiry information, communication logs, and browsing data when you interact with our Phase 1 static product showcase.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-light text-[#F5F0E8]">
                2. Information We Collect
              </h2>
              <p>
                During Phase 1, our website operates primarily as a static showcase. We only collect information that you voluntarily transmit to our concierge team:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#D8D2C7]">
                <li>Contact details transmitted via our inquiry form (name, email, phone number).</li>
                <li>Inquiry history and product specifications sent to our WhatsApp concierge.</li>
                <li>Standard anonymous technical server logs (browser user-agent, referrers, and diagnostic telemetry).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-light text-[#F5F0E8]">
                3. Purpose of Processing
              </h2>
              <p>
                We utilize collected information solely to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#D8D2C7]">
                <li>Respond directly to your product inquiries, availability checks, and concierge requests.</li>
                <li>Coordinate personalized quotes and private showroom consultations.</li>
                <li>Maintain the operational stability, performance, and security of our digital catalog.</li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal contact details to third-party marketing networks.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-light text-[#F5F0E8]">
                4. Data Protection & Inquiries
              </h2>
              <p>
                For questions regarding data privacy or to request removal of your inquiry records, please contact our Data Governance Officer at{' '}
                <a href={`mailto:${contactConfig.email}`} className="text-[#C6A76A] hover:underline">
                  {contactConfig.email}
                </a>.
              </p>
            </section>
          </div>
        </article>
      </Container>
    </div>
  );
}
