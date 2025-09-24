import { Discovery } from '@/components/discovery';
import { getFeaturedDiscoveryGames } from '@/lib/queries/get-featured-discovery-games';

export async function FeaturedDiscoverySection() {
  const games = await getFeaturedDiscoveryGames();

  return <Discovery games={games} title="Featured" />;
}
