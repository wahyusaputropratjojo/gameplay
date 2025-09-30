import { ArrowUpRightIcon } from 'lucide-react';
import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/cn';

export type EntityCardProps = {
  name: string;
  padding?: 'none' | 'small' | 'medium' | 'large';
} & ImageProps;

export function EntityCard({
  name,
  padding = 'none',
  src,
  ...props
}: EntityCardProps) {
  return (
    <div className="group flex w-full items-center gap-4 rounded-(--card-radius) bg-gray-100 p-(--card-padding) transition-colors [--card-padding:--spacing(1.5)] [--card-radius:var(--radius-xl)] hover:bg-gray-200">
      <div className="relative size-20 shrink-0 overflow-hidden rounded-[calc(var(--card-radius)-var(--card-padding))] bg-light">
        {src && (
          <Image
            className={cn('select-none', {
              'p-0': padding === 'none',
              'p-1': padding === 'small',
              'p-3': padding === 'medium',
              'p-5': padding === 'large',
            })}
            src={src}
            {...props}
          />
        )}
      </div>
      <p className="w-full select-none font-medium">{name}</p>
      <ArrowUpRightIcon className="w-12 shrink-0 justify-self-end opacity-100 transition-opacity xl:opacity-0 group-hover:xl:opacity-100" />
    </div>
  );
}
