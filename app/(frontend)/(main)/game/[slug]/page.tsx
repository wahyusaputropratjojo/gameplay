import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getGame } from '@/lib/queries/get-game';
import { GameDescriptionSection } from './_sections/game-description-section';
import { GameDeveloperSection } from './_sections/game-developer-section';
import { GameDurationSection } from './_sections/game-duration-section';
import { GameGenreSection } from './_sections/game-genre-section';
import { GameImageSection } from './_sections/game-image-section';
import { GamePublisherSection } from './_sections/game-publisher-section';
import { GameStoreSection } from './_sections/game-store-section';

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
    <article className="space-y-6">
      <h1 className="lg:display text-pretty">{game.name}</h1>
      <GameGenreSection genre={game.genre} />
      <GameDescriptionSection description={game.description} />
      <GameImageSection hero={game.hero} logo={game.logo} />
      <div className="grid gap-8 md:grid-cols-2 md:gap-4">
        <GameDeveloperSection developer={game.developer} />
        <GamePublisherSection publisher={game.publisher} />
      </div>
      {game.duration && <GameDurationSection duration={game.duration} />}
      {game.storeLink && game.storeLink.length > 0 && (
        <GameStoreSection storeLink={game.storeLink} />
      )}
    </article>
  );
}
