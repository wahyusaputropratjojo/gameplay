import { Discovery } from "@/components/discovery";
import { getFeaturedDiscoveryGames } from "@/lib/queries/get-featured-discovery-games";

export async function FeaturedDiscovery() {
	const games = await getFeaturedDiscoveryGames();

	return (
		<Discovery
			items={games}
			title="Featured"
		/>
	);
}
