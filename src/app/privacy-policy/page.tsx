import { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';
import { contactConfig } from '@/config/contact';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

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
          <ScrollReveal direction="up" delayMs={0}>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C6A76A]">
              Legal & Trust
            </span>
            <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#F5F0E8]">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#A69F93] mt-2 font-sans">
              Effective Date: January 1, 2026 | Last Updated: October 2026
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delayMs={100}>
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
                  During Phase 1, our website operates primarily as a static showcase. We only collect information that you voluntarily transmit to our customer support team:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#D8D2C7]">
                  <li>Contact details transmitted via our inquiry form (name, email, phone number).</li>
                  <li>Inquiry history and product specifications sent to our WhatsApp support channel.</li>
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
                  <li>Provide personalized answers to product availability and bespoke customization inquiries.</li>
                  <li>Coordinate insured DHL Express or FedEx Priority shipping quotations.</li>
                  <li>Maintain essential warranty archives and authenticity records.</li>
                  <li>Optimize website performance and browser compatibility.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-xl sm:text-2xl font-light text-[#F5F0E8]">
                  4. Data Sharing & Third Parties
                </h2>
                <p>
                  We never sell, rent, or monetize client personal data. Information is shared strictly with essential logistical partners (e.g., DHL Express, FedEx) solely for courier dispatch, or when required by legal statutory authorities.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-xl sm:text-2xl font-light text-[#F5F0E8]">
                  5. Client Data Rights & Contact
                </h2>
                <p>
                  You retain the right to request deletion, correction, or an export of all correspondence records associated with your email address. To exercise these rights, contact our privacy compliance team at <a href={`mailto:${contactConfig.email}`} className="text-[#C6A76A] hover:underline">{contactConfig.email}</a>.
                </p>
              </section>
            </div>
          </ScrollReveal>
        </article>
      </Container>
    </div>
  );
}
