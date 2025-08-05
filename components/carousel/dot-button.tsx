import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';

type DotButtonProps = {
  index: number;
  selectedIndex: number;
} & ComponentProps<'button'>;

export function DotButton({
  index,
  selectedIndex,
  children,
  ...props
}: DotButtonProps) {
  return (
    <button type="button" {...props}>
      <div
        className={cn(
          'size-1.5 rounded-full bg-gray-500 lg:size-2.5',
          index === selectedIndex && 'bg-gray-1000'
        )}
      />
    </button>
  );
}
