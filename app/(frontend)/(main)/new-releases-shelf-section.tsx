import { Shelf } from '@/components/shelf';
import { getNewReleasesShelfGames } from '@/lib/queries/get-new-releases-shelf-games';

export async function NewReleasesShelfSection() {
  const games = await getNewReleasesShelfGames();

  return <Shelf items={games} title="New Releases" />;
}
