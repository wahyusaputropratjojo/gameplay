import Image from 'next/image';
import { cn } from '@/lib/cn';
import type { GameGrid } from '@/lib/types/payload';

type GridCardProps = {
  image: GameGrid;
  name: string;
  className?: string;
};

export function GridCard({ className, image, name }: GridCardProps) {
  return (
    <div
      className={cn(
        'group select-none space-y-2 hover:cursor-pointer',
        className
      )}
    >
      {typeof image.blurData === 'string' &&
        typeof image.height === 'number' &&
        typeof image.url === 'string' &&
        typeof image.width === 'number' && (
          <div className="relative">
            <div className="absolute z-20 size-full rounded-xl bg-light/10 opacity-0 transition-opacity group-hover:opacity-100" />
            <Image
              alt={image.alt}
              blurDataURL={image.blurData}
              className="w-full rounded-xl"
              draggable="false"
              height={image.height}
              placeholder="blur"
              sizes="(min-width: 1320px) 300px, (min-width: 640px) calc(2.88vw + 263px), calc(50vw - 23px)"
              src={image.url}
              width={image.width}
            />
          </div>
        )}
      <div>
        <p className="line-clamp-1 font-medium text-gray-700 text-sm">
          Base Game
        </p>
        <p className="line-clamp-1 font-semibold">{name}</p>
      </div>
    </div>
  );
}
