import { Suspense } from "react";
import { ShelfSkeleton } from "@/components/shelf-skeleton";
import { SpotlightSkeleton } from "@/components/spotlight-skeleton";
import { NewReleasesShelf } from "./new-releases-shelf";
import { UpcomingSpotlight } from "./upcoming-spotlight";

export default async function HomePage() {
	return (
		<main className="container mb-24 flex min-h-dvh flex-col gap-16">
			<Suspense fallback={<SpotlightSkeleton />}>
				<UpcomingSpotlight />
			</Suspense>
			<Suspense fallback={<ShelfSkeleton />}>
				<NewReleasesShelf />
			</Suspense>
		</main>
	);
}
