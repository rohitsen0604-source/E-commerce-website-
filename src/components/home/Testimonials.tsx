'use client';

import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { getAllTestimonials } from '@/data/testimonials';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export function Testimonials() {
  const testimonials = getAllTestimonials();

  return (
    <section className="py-16 sm:py-24 bg-[#101010] border-t border-[#34312B]">
      <Container size="xl">
        <ScrollReveal direction="up" delayMs={0}>
          <SectionHeading
            badge="Customer Reviews"
            title="What Our Customers Say"
            description="Real reviews and feedback from verified buyers across Mumbai, Delhi, Bengaluru, and all over India."
            theme="dark"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <ScrollReveal key={t.id} direction="up" delayMs={idx * 140} className="h-full">
              <div
                className="group relative flex flex-col justify-between h-full rounded-xl border border-[#34312B] bg-[#161514] p-8 transition-all duration-500 hover:border-[#C6A76A]/60 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(198,167,106,0.10)]"
              >
                <div>
                  <Quote className="h-7 w-7 text-[#C6A76A]/40 mb-4 transition-colors duration-300 group-hover:text-[#C6A76A]" />
                  <div className="flex items-center gap-1.5 text-[#C6A76A] mb-5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover:scale-110"
                        style={{ transitionDelay: `${i * 40}ms` }}
                      />
                    ))}
                  </div>
                  <p className="font-serif text-base sm:text-lg text-[#F5F0E8] leading-relaxed italic font-light mb-8 group-hover:text-[#FFF] transition-colors">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>

                <div className="pt-5 border-t border-[#292622] group-hover:border-[#3D3830] transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#F5F0E8]">
                        {t.author}
                      </h4>
                      <p className="font-sans text-[11px] text-[#A69F93] mt-0.5">
                        {t.role} • {t.location}
                      </p>
                    </div>
                    {t.verifiedBuyer && (
                      <div className="flex items-center gap-1 text-[10px] font-medium text-[#C6A76A] bg-[#C6A76A]/10 border border-[#C6A76A]/30 px-2.5 py-0.5 rounded-full">
                        <CheckCircle className="h-3 w-3" />
                        <span>Verified Buyer</span>
                      </div>
                    )}
                  </div>
                  <p className="mt-3 text-[11px] font-sans text-[#C6A76A] font-medium">
                    Ordered: {t.productMentioned}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
