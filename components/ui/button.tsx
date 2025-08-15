import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export const buttonVariants = cva(
  'inline-flex w-max cursor-pointer items-center gap-2 rounded-lg font-medium underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-gray-500 disabled:bg-gray-400 disabled:text-gray-1000/50',
  {
    defaultVariants: {
      align: 'center',
      size: 'medium',
      variant: 'primary',
    },
    variants: {
      align: {
        center: 'justify-center',
        end: 'justify-end',
        start: 'justify-start',
      },
      disabled: {
        true: 'disabled:cursor-not-allowed',
      },
      fullWidth: {
        true: 'w-full',
      },
      size: {
        large: 'h-12 px-5 text-base decoration-2',
        medium: 'h-10 px-4 text-sm decoration-2',
        small: 'h-8 px-3 text-sm decoration-1',
      },
      variant: {
        error: 'bg-red-800 text-light hover:bg-red-900',
        primary: 'bg-gray-1000 text-background-100 hover:bg-gray-900',
        secondary: 'border border-gray-400 text-gray-1000 hover:bg-gray-200',
        tertiary: 'bg-neutral-700 text-gray-1000 hover:bg-gray-200',
        warning: 'bg-amber-800 text-dark hover:bg-amber-900',
      },
    },
  }
);

export function Button({
  asChild = false,
  className,
  variant,
  size,
  align,
  prefix,
  children,
  disabled,
  fullWidth,
  ref,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      className={cn(
        buttonVariants({
          align,
          className,
          disabled,
          fullWidth,
          size,
          variant,
        })
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </Component>
  );
}
