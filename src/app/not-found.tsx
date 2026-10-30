'use client';

import React from 'react';
import { ArrowLeft, Compass } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/shared/Button';

export default function NotFound() {
  return (
    <div className="relative overflow-hidden flex min-h-[75vh] items-center justify-center py-20 bg-[#101010] text-[#F5F0E8] select-none">
      {/* Background radial gold aura */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#C6A76A]/5 blur-[140px] animate-gold-pulse" />

      {/* Floating particles */}
      <span className="animate-float-slow absolute top-20 left-[20%] h-1.5 w-1.5 rounded-full bg-[#C6A76A]/40" />
      <span className="animate-float-reverse absolute bottom-24 right-[25%] h-2 w-2 rounded-full bg-[#E8DDC8]/30" />

      <Container size="sm" className="relative z-10 text-center space-y-7 animate-fade-in-up">
        {/* Animated Compass Icon Box */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-[#34312B] bg-[#161514] text-[#C6A76A] shadow-[0_0_30px_rgba(198,167,106,0.12)] transition-transform duration-500 hover:scale-110 hover:border-[#C6A76A]">
          <Compass className="h-11 w-11 text-[#C6A76A] animate-spin" style={{ animationDuration: '24s' }} />
        </div>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 border border-[#34312B] bg-[#161513] px-3.5 py-1">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A76A]">
              ARCHIVAL RECORD 404
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#F5F0E8] tracking-tight">
            Artifact Not Located
          </h1>
          <p className="font-sans text-sm text-[#A69F93] max-w-md mx-auto leading-relaxed font-light">
            The masterpiece, collection, or archive entry you are seeking may have retired to private collections or was relocated.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button
            href="/"
            variant="accent"
            size="md"
            leftIcon={<ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />}
          >
            Return to Atelier
          </Button>
          <Button
            href="/products"
            variant="outline"
            size="md"
          >
            Browse All Masterpieces
          </Button>
        </div>
      </Container>
    </div>
  );
}
