/** biome-ignore-all lint/suspicious/noArrayIndexKey: false positive */

import { Skeleton } from '@/components/ui/skeleton';

type DiscoverySkeletonProps = {
  title?: boolean;
};

export function DiscoverySkeleton({ title = false }: DiscoverySkeletonProps) {
  return (
    <section className="flex flex-col gap-2">
      {title && (
        <Skeleton className="w-fit">
          <h3 className="invisible">Placeholder Title</h3>
        </Skeleton>
      )}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div className="flex flex-col gap-2 last:hidden lg:last:flex" key={i}>
            <Skeleton className="aspect-wide-horizontal w-full" />
            <div className="flex flex-col gap-1">
              <Skeleton className="w-fit">
                <p className="invisible font-semibold text-lg">Placeholder</p>
              </Skeleton>
              <Skeleton className="w-fit">
                <p className="invisible line-clamp-2 max-w-[35ch] text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Atque consectetur earum eveniet laborum necessitatibus non
                  ratione sit tenetur ullam velit!
                </p>
              </Skeleton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
