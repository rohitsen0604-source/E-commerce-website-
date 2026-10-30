import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PageLoaderProps {
  label?: string;
  className?: string;
}

export function PageLoader({ label = 'Loading catalog...', className }: PageLoaderProps) {
  return (
    <div
      className={cn(
        'flex min-h-[50vh] flex-col items-center justify-center space-y-4 px-4 text-center',
        className
      )}
    >
      <div className="relative flex items-center justify-center">
        <div className="h-12 w-12 rounded-full border-2 border-zinc-200 border-t-zinc-900 animate-spin dark:border-zinc-800 dark:border-t-zinc-100" />
        <Loader2 className="absolute h-5 w-5 text-zinc-400 animate-pulse" />
      </div>
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
        {label}
      </p>
    </div>
  );
}
