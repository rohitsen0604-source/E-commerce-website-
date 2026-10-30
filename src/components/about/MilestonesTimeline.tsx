'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface MilestonesTimelineProps {
  milestones: Milestone[];
}

export function MilestonesTimeline({ milestones }: MilestonesTimelineProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [progressHeight, setProgressHeight] = useState<number>(10);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Sync the progress bar alignment with the page scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || milestones.length === 0) return;

      // When user is hovering over a specific year, hover takes priority
      if (hoveredIndex !== null) return;

      const triggerY = window.innerHeight * 0.55;

      // Determine which milestone is reached based on scroll position
      let currentActive = 0;
      itemRefs.current.forEach((el, index) => {
        if (!el) return;
        const itemRect = el.getBoundingClientRect();
        if (itemRect.top <= triggerY) {
          currentActive = index;
        }
      });

      setActiveIndex(currentActive);

      // Calculate progress height aligned with scroll position
      const firstItem = itemRefs.current[0];
      const lastItem = itemRefs.current[milestones.length - 1];

      if (firstItem && lastItem) {
        const startY = firstItem.getBoundingClientRect().top;
        const endY = lastItem.getBoundingClientRect().top;
        const totalDistance = endY - startY;

        if (totalDistance > 0) {
          const scrolledDistance = triggerY - startY;
          const ratio = Math.max(0, Math.min(1, scrolledDistance / totalDistance));
          const minHeight = firstItem.offsetTop + 10;
          const maxHeight = lastItem.offsetTop + 10;
          const calculatedHeight = minHeight + ratio * (maxHeight - minHeight);
          setProgressHeight(calculatedHeight);
        } else {
          setProgressHeight(firstItem.offsetTop + 10);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [hoveredIndex, milestones.length]);

  // When hover changes, update progress bar directly to hovered milestone
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setActiveIndex(index);
    const item = itemRefs.current[index];
    if (item) {
      setProgressHeight(item.offsetTop + 10);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (index: number) => {
    setActiveIndex(index);
    const item = itemRefs.current[index];
    if (item) {
      item.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative border-l border-[#34312B] ml-4 sm:ml-32 space-y-8"
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Golden Progress Bar aligned with the vertical border line */}
      <div
        className="absolute -left-[1px] top-1.5 w-[2px] bg-gradient-to-b from-[#C6A76A] via-[#E8DDC8] to-[#C6A76A] shadow-[0_0_8px_rgba(198,167,106,0.8)] pointer-events-none transition-[height] duration-200 ease-out z-0"
        style={{ height: `${progressHeight}px` }}
      />

      {/* Glowing tip of the progress bar */}
      <div
        className="absolute -left-[4px] w-2 h-2 rounded-full bg-[#E8DDC8] shadow-[0_0_8px_#C6A76A] pointer-events-none transition-[top] duration-200 ease-out z-20"
        style={{ top: `${Math.max(6, progressHeight)}px` }}
      />

      {/* Milestones list with exact original alignment and spacing */}
      {milestones.map((m, i) => {
        const isActive = activeIndex === i;
        const isPassed = activeIndex > i;

        return (
          <div
            key={m.year}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            onMouseEnter={() => handleMouseEnter(i)}
            onClick={() => handleClick(i)}
            className={`relative pl-6 sm:pl-8 cursor-pointer select-none transition-opacity duration-300 ${
              isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'
            }`}
          >
            {/* Timeline Node Dot - exactly at original -left-[5px] top-1.5 h-2.5 w-2.5 */}
            <div
              className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full transition-all duration-300 z-10 ${
                isActive
                  ? 'bg-[#C6A76A] border-2 border-[#FFFFFF] shadow-[0_0_12px_#C6A76A] scale-125'
                  : isPassed
                  ? 'bg-[#C6A76A] border border-[#C6A76A]'
                  : 'border border-[#C6A76A] bg-[#101010]'
              }`}
            />

            {/* Year Tag - zero layout shift */}
            <div>
              <span
                className={`font-sans text-xs transition-colors duration-300 inline-block ${
                  isActive
                    ? 'font-bold text-[#F5F0E8] drop-shadow-[0_0_8px_rgba(198,167,106,0.8)]'
                    : 'font-semibold text-[#C6A76A]'
                }`}
              >
                {m.year}
              </span>
            </div>

            {/* Title */}
            <h3
              className={`font-serif text-lg transition-colors duration-300 mt-0.5 ${
                isActive ? 'text-[#F5F0E8] font-normal' : 'text-[#D8D2C7] font-light'
              }`}
            >
              {m.title}
            </h3>

            {/* Description */}
            <p
              className={`font-sans text-xs sm:text-sm mt-1 leading-relaxed font-light transition-colors duration-300 ${
                isActive ? 'text-[#F5F0E8]' : 'text-[#A69F93]'
              }`}
            >
              {m.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
