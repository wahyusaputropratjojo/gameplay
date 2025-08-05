/** biome-ignore-all lint/suspicious/noArrayIndexKey: false positive */

import { CornerUpRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export function ShelfSkeleton() {
  return (
    <section className="flex w-full flex-col gap-2">
      <div className="flex justify-between">
        <Skeleton>
          <h3 className="invisible">Placeholder Title</h3>
        </Skeleton>
        <div className="flex gap-2">
          <Skeleton className="rounded-full">
            <Button className="invisible rounded-full" variant="secondary">
              <CornerUpRightIcon className="invisible" size={16} />
            </Button>
          </Skeleton>
          <Skeleton className="rounded-full">
            <Button className="invisible rounded-full" variant="secondary">
              <CornerUpRightIcon className="invisible" size={16} />
            </Button>
          </Skeleton>
        </div>
      </div>
      <div className="-ml-4 flex flex-nowrap overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            className="flex shrink-0 grow-0 basis-6/10 flex-col gap-2 pl-4 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
            key={i}
          >
            <Skeleton className="aspect-classic-vertical" />
            <div className="flex flex-col gap-0.5">
              <Skeleton className="w-fit">
                <p className="invisible p-0 font-medium text-gray-700 text-sm">
                  Base Game
                </p>
              </Skeleton>
              <Skeleton className="w-2/3">
                <p className="invisible p-0 font-semibold">Title</p>
              </Skeleton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
