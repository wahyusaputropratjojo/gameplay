'use client';

import { CheckIcon } from 'lucide-react';
import { Checkbox as CheckboxPrimitives } from 'radix-ui';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';

export type CheckboxProps = ComponentProps<typeof CheckboxPrimitives.Root>;

export function Checkbox({ className, ref, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitives.Root
      className={cn(
        'peer size-4 shrink-0 rounded-sm border border-neutral-600 queries-[disabled]:queries-[state=checked]:border-neutral-600 queries-[state=checked]:border-neutral-100 queries-[disabled]:queries-[state=checked]:bg-neutral-600 queries-[state=checked]:bg-neutral-100 queries-[state=checked]:text-neutral-900 transition-all focus-visible:border-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 disabled:cursor-not-allowed',
        className
      )}
      ref={ref}
      {...props}
    >
      <CheckboxPrimitives.Indicator
        className={cn('flex items-center justify-center text-current')}
      >
        <CheckIcon size={16} />
      </CheckboxPrimitives.Indicator>
    </CheckboxPrimitives.Root>
  );
}
Checkbox.displayName = CheckboxPrimitives.Root.displayName;
