import React from 'react';
import { brandIntroductionContent } from '@/data/site-content';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';

// Top 5 Indian favorite brands with authentic vector logos
const brandList = [
  {
    id: 'sony',
    name: 'Sony',
    renderLogo: () => (
      <div className="flex flex-col items-center justify-center">
        <span className="font-serif text-2xl sm:text-3xl font-black tracking-[0.22em] text-[#121110]">
          SONY
        </span>
      </div>
    ),
  },
  {
    id: 'boat',
    name: 'boAt',
    renderLogo: () => (
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-1.5">
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
            <path d="M4 17 C4 11 8 5 12 2 L12 17 Z" fill="#121110" />
            <path d="M14 17 L14 1 C18 7 21 13 21 17 Z" fill="#E50914" />
            <path d="M3 19 L21 19 C18 22 6 22 3 19 Z" fill="#121110" />
          </svg>
          <span className="font-sans text-2xl sm:text-3xl font-black tracking-tight text-[#121110]">
            bo<span className="text-[#E50914]">A</span>t
          </span>
        </div>
        <span className="text-[8px] font-bold tracking-[0.25em] text-[#8C8275] uppercase mt-0.5">
          LIFESTYLE
        </span>
      </div>
    ),
  },
  {
    id: 'redchief',
    name: 'Red Chief',
    renderLogo: () => (
      <div className="flex flex-col items-center justify-center">
        <svg className="w-7 h-3.5 mb-1 shrink-0" viewBox="0 0 32 16" fill="none">
          <path d="M2 4 L8 0 L16 5 L24 0 L30 4 L26 10 L6 10 Z" fill="#C5221F" />
          <path d="M10 11 L22 11 L16 16 Z" fill="#C5221F" />
        </svg>
        <span className="font-sans text-base sm:text-lg font-black tracking-wider text-[#C5221F]">
          RED CHIEF
        </span>
        <span className="text-[7.5px] font-bold tracking-[0.2em] text-[#121110] uppercase">
          GENUINE LEATHER
        </span>
      </div>
    ),
  },
  {
    id: 'adidas',
    name: 'Adidas',
    renderLogo: () => (
      <div className="flex flex-col items-center justify-center">
        <svg className="w-8 h-5 mb-0.5 shrink-0" viewBox="0 0 36 24" fill="none">
          <polygon points="4,22 4,16 12,8 12,14" fill="#121110" />
          <polygon points="14,22 14,12 22,4 22,14" fill="#121110" />
          <polygon points="24,22 24,8 32,0 32,14" fill="#121110" />
        </svg>
        <span className="font-sans text-lg sm:text-xl font-bold tracking-normal text-[#121110] -mt-1">
          adidas
        </span>
      </div>
    ),
  },
  {
    id: 'titan',
    name: 'Titan',
    renderLogo: () => (
      <div className="flex flex-col items-center justify-center">
        <svg className="w-5 h-5 mb-1 shrink-0" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#121110" strokeWidth="2" />
          <path d="M7 8 L17 8 M12 8 L12 18" stroke="#121110" strokeWidth="2" strokeLinecap="square" />
          <circle cx="12" cy="8" r="2" fill="#C6A76A" />
        </svg>
        <span className="font-sans text-base sm:text-lg font-extrabold tracking-[0.25em] text-[#121110]">
          TITAN
        </span>
        <span className="text-[7.5px] font-bold tracking-[0.2em] text-[#A8823E] uppercase mt-0.5">
          WATCHES
        </span>
      </div>
    ),
  },
];

export function BrandIntroduction() {
  return (
    <section className="py-20 sm:py-28 bg-[#F5F1E9] text-[#121110] border-b border-[#E3DDD3]">
      <Container size="xl">
        <SectionHeading
          badge="Our Quality Promise"
          title={brandIntroductionContent.heading}
          description={brandIntroductionContent.description}
          theme="light"
        />

        {/* 3 Core Pillars on Ivory */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {brandIntroductionContent.values.map((v, i) => (
            <div
              key={i}
              className="bg-[#FFFFFF] border border-[#E3DDD3] p-8 sm:p-10 shadow-xs transition-all duration-300 hover:border-[#C6A76A]"
            >
              <div className="mb-6 inline-flex font-serif text-3xl font-light text-[#C6A76A]">
                0{i + 1}
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#121110] mb-3">
                {v.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#544E45] leading-relaxed font-normal font-sans">
                {v.description}
              </p>
            </div>
          ))}
        </div>

        {/* 5 Brand Boxes: Sony, boAt, Red Chief, Adidas, Titan */}
        <div className="pt-12 border-t border-[#E3DDD3] text-center">
          <p className="editorial-tag text-[#9E7D3B] font-bold mb-8 tracking-[0.2em]">
            Featured Brands &amp; Official Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {brandList.map((brand) => (
              <div
                key={brand.id}
                className="group flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl border border-[#D5CDBC] bg-[#FFFFFF] shadow-xs hover:border-[#C6A76A] hover:shadow-md hover:-translate-y-1 transition-all duration-300 w-36 sm:w-44 h-24 sm:h-28"
              >
                {brand.renderLogo()}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
