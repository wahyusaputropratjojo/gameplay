import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';

type SkeletonProps = ComponentProps<'div'>;

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn('m-0 animate-pulse rounded-xl bg-gray-100 p-0', className)}
      data-slot="skeleton"
      {...props}
    />
  );
}
