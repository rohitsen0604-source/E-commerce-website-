import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { label: string; value: string }[];
  error?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, options, error, id, ...props }, ref) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label htmlFor={selectId} className="block text-xs font-medium uppercase tracking-wider text-[#D8D2C7]">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          <select
            id={selectId}
            ref={ref}
            className={cn(
              'w-full appearance-none rounded-lg border border-[#34312B] bg-[#161514] px-3.5 py-2.5 pr-10 text-xs font-medium text-[#F5F0E8] transition-colors duration-200',
              'focus:border-[#C6A76A] focus:outline-hidden focus:ring-1 focus:ring-[#C6A76A]',
              'disabled:cursor-not-allowed disabled:bg-[#121110] disabled:text-[#827C72]',
              error && 'border-rose-400 focus:border-rose-400 focus:ring-rose-400',
              className
            )}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-[#161514] text-[#F5F0E8]">
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3 flex items-center justify-center text-[#C6A76A]">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
        {error && <p className="text-xs text-rose-400">{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';
