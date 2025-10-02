import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getGame } from '@/lib/queries/get-game';
import { GameAboutSection } from './_sections/game-about-section';
import { GameDescriptionSection } from './_sections/game-description-section';
import { GameDeveloperSection } from './_sections/game-developer-section';
import { GameDurationSection } from './_sections/game-duration-section';
import { GameImageSection } from './_sections/game-image-section';
import { GameMetadataSection } from './_sections/game-metadata-section';
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
      <GameMetadataSection
        genre={game.genre}
        initialReleaseDate={game.initialReleaseDate}
        name={game.name}
        theme={game.theme}
      />
      <GameDescriptionSection description={game.description} />
      <GameImageSection hero={game.hero} logo={game.logo} />
      <GameAboutSection about={game.about} />
      <div className="grid gap-8 md:grid-cols-2 md:gap-2">
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
