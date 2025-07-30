import { Shelf } from "@/components/shelf";
import { getNewReleasesShelfGames } from "@/lib/queries/get-new-releases-shelf-games";

export async function NewReleasesShelf() {
	const games = await getNewReleasesShelfGames();

	return (
		<Shelf
			title="New Releases"
			items={games}
		/>
	);
}
