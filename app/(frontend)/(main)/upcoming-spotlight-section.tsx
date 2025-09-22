import { Spotlight } from '@/components/spotlight';
import { getUpcomingSpotlightGames } from '@/lib/queries/get-upcoming-spotlight-games';

export async function UpcomingSpotlightSection() {
  const games = await getUpcomingSpotlightGames();

  return <Spotlight items={games} />;
}
