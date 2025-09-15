import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/cn';

export type EntityCardProps = {
  name: string;
  padding?: 'none' | 'small' | 'medium' | 'large';
} & Partial<ImageProps>;

export function EntityCard({
  name,
  padding = 'none',
  src,
  alt,
  ...props
}: EntityCardProps) {
  return (
    <div className="flex w-full items-center gap-4 rounded-(--card-radius) bg-gray-100 p-(--card-padding) transition-colors [--card-padding:--spacing(1.5)] [--card-radius:var(--radius-xl)] hover:bg-gray-200">
      <div className="relative size-18 shrink-0 overflow-hidden rounded-[calc(var(--card-radius)-var(--card-padding))] bg-light">
        {src && alt && (
          <Image
            alt={alt}
            className={cn({
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
      <p className="font-medium">{name}</p>
    </div>
  );
}
