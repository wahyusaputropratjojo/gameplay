import { Skeleton } from '@/components/ui/skeleton';

type ListSkeletonProps = {
  title?: boolean;
};

export function ListSkeleton({ title = false }: ListSkeletonProps) {
  return (
    <div className="flex gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          className="flex nth-[2]:hidden nth-[3]:hidden w-full flex-col gap-4 sm:nth-[2]:flex lg:nth-[3]:flex"
          key={`list-skeleton-a-${i + 1}`}
        >
          {title && (
            <Skeleton className="w-fit">
              <h3 className="invisible">Placeholder Title</h3>
            </Skeleton>
          )}
          <div className="flex basis-full flex-col gap-2 sm:basis-1/2 lg:basis-1/3 xl:gap-3">
            {Array.from({
              length: 5,
            }).map((__, j) => (
              <div
                className="flex items-center gap-4 rounded-(--card-radius) bg-gray-100 p-(--card-padding) [--card-padding:--spacing(1.5)] [--card-radius:var(--radius-xl)]"
                key={`list-skeleton-b-${j + 1}`}
              >
                <div>
                  <Skeleton className="aspect-classic-vertical w-16 rounded-[calc(var(--card-radius)-var(--card-padding))] bg-gray-300 xl:w-20" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <Skeleton className="w-fit bg-gray-300">
                    <p className="invisible font-medium text-sm">Base Game</p>
                  </Skeleton>
                  <Skeleton className="w-fit bg-gray-300">
                    <p className="invisible font-semibold">Placeholder Title</p>
                  </Skeleton>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
