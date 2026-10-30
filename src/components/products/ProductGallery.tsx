'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ZoomIn, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Modal } from '@/components/ui/Modal';

export interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const activeImage = images[selectedImageIndex] || '/images/placeholders/product-placeholder.svg';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Stage */}
      <div
        className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-[#34312B] bg-[#161514] cursor-crosshair"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        <Image
          src={activeImage}
          alt={`${productName} - Preview ${selectedImageIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={cn(
            'object-cover transition-transform duration-300 ease-out',
            isHovering && 'scale-125'
          )}
          style={
            isHovering
              ? {
                  transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                }
              : undefined
          }
        />

        {/* Animated Specular Light Sweep */}
        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
          <div className="animate-light-sweep absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        </div>

        {/* Hover Zoom Hint & Fullscreen Trigger */}
        <div className="absolute right-4 top-4 flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomModalOpen(true);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#34312B] bg-[#101010]/90 text-[#F5F0E8] shadow-md backdrop-blur-xs transition-colors hover:border-[#C6A76A] hover:text-[#C6A76A]"
            aria-label="Enlarge image"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>

        <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-[#34312B] bg-[#101010]/85 px-3.5 py-1 text-[11px] font-sans tracking-wider uppercase text-[#C6A76A] backdrop-blur-xs">
          <ZoomIn className="h-3 w-3" />
          <span>Hover to inspect details</span>
        </div>
      </div>

      {/* Thumbnails list */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedImageIndex(idx)}
              className={cn(
                'relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border transition-all duration-200 bg-[#161514]',
                selectedImageIndex === idx
                  ? 'border-[#C6A76A] ring-1 ring-[#C6A76A]/40'
                  : 'border-[#34312B] opacity-60 hover:opacity-100 hover:border-[#C6A76A]/50'
              )}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Zoom Modal */}
      <Modal
        isOpen={isZoomModalOpen}
        onClose={() => setIsZoomModalOpen(false)}
        title={productName}
        description="High resolution inspection"
        maxWidth="2xl"
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-[#34312B] bg-[#101010]">
          <Image
            src={activeImage}
            alt={`${productName} Enlarge View`}
            fill
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-contain"
          />
        </div>
      </Modal>
    </div>
  );
}
