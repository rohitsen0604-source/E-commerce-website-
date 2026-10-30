import { Metadata } from 'next';
import { ArrowRight, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';
import { aboutPageContent } from '@/data/site-content';
import { constructMetadata } from '@/lib/metadata';
import { Container } from '@/components/layout/Container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Button } from '@/components/shared/Button';
import { MilestonesTimeline } from '@/components/about/MilestonesTimeline';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export const metadata: Metadata = constructMetadata({
  title: 'About Our Atelier & Philosophy',
  description:
    'Learn about our story, ethical provenance, and commitment to timeless industrial design and heirloom craftsmanship.',
  canonicalUrl: '/about',
});

export default function AboutPage() {
  return (
    <div className="py-8 sm:py-16 bg-[#101010] text-[#F5F0E8]">
      <Container size="lg">
        <Breadcrumb items={[{ label: 'About Us' }]} />

        {/* Hero Header */}
        <ScrollReveal direction="up" delayMs={0}>
          <div className="pt-8 pb-16 space-y-4 text-center max-w-3xl mx-auto">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#C6A76A]">
              {aboutPageContent.tagline}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-[#F5F0E8] leading-tight">
              {aboutPageContent.title}
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#D8D2C7] leading-relaxed font-light">
              {aboutPageContent.heroText}
            </p>
          </div>
        </ScrollReveal>

        {/* Story & Mission Block - Balanced Ivory Luxury Section */}
        <ScrollReveal direction="up" delayMs={100}>
          <div className="rounded-2xl border border-[#E3DDD3] bg-[#F5F1E9] p-8 sm:p-14 mb-16 space-y-8 text-[#121110] transition-all duration-300 hover:shadow-xl">
            <div className="max-w-2xl">
              <span className="text-[11px] font-medium tracking-[0.2em] text-[#C6A76A] uppercase">
                Maison Manifesto
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#121110] mt-1">
                The Philosophy of Conscious Materiality
              </h2>
            </div>
            <p className="font-sans text-sm sm:text-base text-[#4A453E] leading-relaxed font-light">
              {aboutPageContent.mission} Every object in our collection undergoes a rigorous curatorial evaluation: does it honor the integrity of its raw elements? Does it bring tactile pleasure to the user? Can it be repaired, maintained, and treasured over generations?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#E3DDD3]">
              <div className="space-y-3 group cursor-default transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#101010] text-[#C6A76A] transition-transform duration-300 group-hover:scale-110">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-normal text-[#121110]">Pure Form & Function</h3>
                <p className="font-sans text-xs text-[#6B6359] leading-relaxed font-light">
                  Stripping away superfluous ornament in favor of intuitive, uncompromised utility and heirloom presence.
                </p>
              </div>
              <div className="space-y-3 group cursor-default transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#101010] text-[#C6A76A] transition-transform duration-300 group-hover:scale-110">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-normal text-[#121110]">Direct Artisan Guilds</h3>
                <p className="font-sans text-xs text-[#6B6359] leading-relaxed font-light">
                  Collaborating directly with independent masters and Swiss horologists without intermediary distortion.
                </p>
              </div>
              <div className="space-y-3 group cursor-default transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#101010] text-[#C6A76A] transition-transform duration-300 group-hover:scale-110">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-normal text-[#121110]">Heirloom Quality</h3>
                <p className="font-sans text-xs text-[#6B6359] leading-relaxed font-light">
                  Certified materials engineered to age gracefully, acquiring distinguished patina across decades.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Milestone Timeline with Scroll-Linked Progress Bar */}
        <ScrollReveal direction="up" delayMs={150}>
          <div className="space-y-10 mb-16">
            <div className="text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C6A76A]">
                Our Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-[#F5F0E8] mt-1">
                Studio Milestones
              </h2>
            </div>

            <MilestonesTimeline milestones={aboutPageContent.milestones} />
          </div>
        </ScrollReveal>

        {/* Call to Explore Collection */}
        <ScrollReveal direction="up" delayMs={200}>
          <div className="group rounded-2xl border border-[#34312B] bg-[#161514] p-8 sm:p-14 text-center space-y-5 transition-all duration-500 hover:border-[#C6A76A]/50 hover:shadow-[0_0_35px_rgba(198,167,106,0.12)]">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C6A76A]">
              Curated Acquisition
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-[#F5F0E8]">
              Discover the Studio Pieces
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#D8D2C7] font-light max-w-md mx-auto leading-relaxed">
              Experience our meticulously curated products firsthand with personalized concierge support.
            </p>
            <div className="pt-2">
              <Button
                href="/products"
                variant="accent"
                size="md"
                rightIcon={<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
              >
                Browse The Collection
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </div>
  );
}
