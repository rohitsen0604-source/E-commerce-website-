import { ArrowLeft, Compass } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/shared/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center py-20 bg-[#101010] text-[#F5F0E8]">
      <Container size="sm" className="text-center space-y-6">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-[#34312B] bg-[#161514] text-[#C6A76A]">
          <Compass className="h-9 w-9 text-[#C6A76A] animate-spin" style={{ animationDuration: '20s' }} />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C6A76A]">
            Archival Record 404
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#F5F0E8] tracking-tight">
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
            leftIcon={<ArrowLeft className="h-4 w-4" />}
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
