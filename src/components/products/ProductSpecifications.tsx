import React from 'react';
import { ProductSpecification } from '@/types/product';
import { cn } from '@/lib/utils';

export interface ProductSpecificationsProps {
  specifications: ProductSpecification[];
  className?: string;
}

export function ProductSpecifications({ specifications, className }: ProductSpecificationsProps) {
  if (!specifications || specifications.length === 0) return null;

  return (
    <div className={cn('rounded-2xl border border-[#34312B] bg-[#161514] overflow-hidden', className)}>
      <div className="border-b border-[#34312B] bg-[#101010] px-6 py-4">
        <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#F5F0E8]">
          Atelier Technical Specifications
        </h3>
      </div>
      <div className="divide-y divide-[#34312B]">
        {specifications.map((spec, i) => (
          <div key={i} className="grid grid-cols-1 sm:grid-cols-3 px-6 py-4 text-xs">
            <span className="font-medium text-[#A69F93]">
              {spec.name}
            </span>
            <span className="sm:col-span-2 text-[#F5F0E8] font-normal mt-1 sm:mt-0">
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
