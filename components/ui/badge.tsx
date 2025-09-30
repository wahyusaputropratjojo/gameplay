import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';

export type BadgeProps = ComponentProps<'span'> &
  VariantProps<typeof badgeVariants>;

const badgeVariants = cva(
  'inline-flex w-fit items-center gap-1 overflow-hidden whitespace-nowrap rounded-md border px-1.5 font-medium text-xs transition-[color,box-shadow] sm:px-2 sm:py-0.5 [&>svg]:pointer-events-none [&>svg]:size-3',
  {
    defaultVariants: {
      variant: 'default',
    },
    variants: {
      variant: {
        default:
          'border-transparent bg-gray-1000 text-gray-100 [a&]:hover:bg-gray-1000/90',
        destructive:
          'border-transparent bg-red-100 text-red-800 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90',
        outline:
          'border-gray-400 text-gray-1000 [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
        secondary:
          'border-transparent bg-gray-100 text-gray-1000 [a&]:hover:bg-gray-200',
      },
    },
  }
);

export function Badge({
  className,
  variant,
  ref,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant }), className)}
      data-slot="badge"
      {...props}
    >
      {children}
    </span>
  );
}
