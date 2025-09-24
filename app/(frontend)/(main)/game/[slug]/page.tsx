import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getGame } from '@/lib/queries/get-game';
import { GameDescriptionSection } from './game-description-section';
import { GameDeveloperSection } from './game-developer-section';
import { GameDurationSection } from './game-duration-section';
import { GameGenreSection } from './game-genre-section';
import { GameImageSection } from './game-image-section';
import { GamePublisherSection } from './game-publisher-section';
import { GameStoreSection } from './game-store-section';
import { GameThemeSection } from './game-theme-section';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = await getGame({ slug });

  return {
    description: game.description,
    title: `${game.name} | Game`,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const game = await getGame({ slug });

  if (!game) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <GameImageSection hero={game.hero} logo={game.logo} />
      <GameDescriptionSection description={game.description} />
      <div className="grid gap-8 md:grid-cols-2 md:gap-4">
        <GameGenreSection genre={game.genre} />
        <GameThemeSection theme={game.theme} />
      </div>
      <div className="grid gap-8 md:grid-cols-2 md:gap-4">
        <GameDeveloperSection developer={game.developer} />
        <GamePublisherSection publisher={game.publisher} />
      </div>
      {game.duration && <GameDurationSection duration={game.duration} />}
      {game.storeLink && game.storeLink.length > 0 && (
        <GameStoreSection storeLink={game.storeLink} />
      )}
    </div>
  );
}
