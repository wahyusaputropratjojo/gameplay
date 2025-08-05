import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';

export type InputProps = ComponentProps<'input'> &
  VariantProps<typeof inputVariants>;

export const inputVariants = cva(
  'w-full rounded-lg border-1 px-4 py-3 text-sm transition-all placeholder:text-neutral-600 focus:outline-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:text-gray-600',
  {
    variants: {
      variant: {
        default:
          'border-gray-400 hover:border-gray-500 focus-visible:border-gray-600 focus-visible:ring-gray-500',
        error: 'border-red-900 ring-3 ring-red-700/50 hover:ring-red-700/70',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export function Input({ className, variant, type, ref, ...props }: InputProps) {
  return (
    <input
      className={cn(inputVariants({ variant, className }))}
      ref={ref}
      type={type}
      {...props}
    />
  );
}
Input.displayName = 'Input';
