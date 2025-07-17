import { Skeleton } from "@/components/ui/skeleton";

export function SpotlightSkeleton() {
	return (
		<section className="flex flex-col items-center gap-2">
			<div className="grid size-full auto-cols-[85%] grid-flow-col gap-4 overflow-hidden xl:auto-cols-[100%]">
				<Skeleton className="aspect-standard-vertical w-full rounded-xl md:aspect-standard-horizontal xl:aspect-anamorphic-horizontal" />
				<Skeleton className="aspect-standard-vertical w-full rounded-xl md:aspect-standard-horizontal xl:aspect-anamorphic-horizontal" />
			</div>
		</section>
	);
}
