import React from 'react';
import { PackageOpen } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  actionHref,
  onAction,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#34312B] bg-[#161514] p-6 sm:p-12 text-center text-[#F5F0E8]',
        className
      )}
    >
      <div className="mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#101010] text-[#C6A76A] border border-[#34312B]">
        {icon || <PackageOpen className="h-7 w-7 sm:h-8 sm:w-8" />}
      </div>
      <h3 className="font-serif text-lg sm:text-xl font-normal text-[#F5F0E8]">{title}</h3>
      <p className="mt-2 max-w-sm text-xs sm:text-sm text-[#A69F93] font-light">{description}</p>
      {actionLabel && (actionHref || onAction) && (
        <div className="mt-6 w-full sm:w-auto">
          <Button
            href={actionHref}
            onClick={onAction}
            variant="accent"
            size="sm"
            className="w-full sm:w-auto min-h-[44px]"
          >
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
}
